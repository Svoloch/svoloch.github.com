countRepits = (arr)->
  out = {}
  for val in arr
    out[val]?=0
    out[val]++
  out
parseColor = (color)->
  if typeof(color) == 'string'
    /#(..)(..)(..)/.exec(color)[1..].map (i)->parseInt i, 16
  else color
colorDifference = ([r0,g0,b0], [r1,g1,b1])->
  dr = r1 - r0
  dg = g1 - g0
  db = b1 - b0
  dr*dr + dg*dg + db*db
colorToPalette = (palette, color)->
  color = parseColor color
  comparator = (a,b)-> colorDifference(color, parseColor a) - colorDifference(color, parseColor b) 
  palette[..].sort(comparator)[0]
dataToPalette = (palette, data)->
  for i in [0 ... data.length] by 4
    colorToPalette palette, [data[i],data[i+1],data[i+2]]
getPalete = ->
  colors = []
  ($ '#color_list').find('input').each ->
    colors.push ($ @).val()
  colors
addColor = (value = "#000000")->
    color = ($ "<input/>").attr type:"color"
    color.val value
    container = $ '<span/>'
    del = ($ '<span/>').text 'X'
    del.click -> do container.remove
    container.append color, del
    ($ '#color_list').append container
showResult = (data, w, h)->
  canvas = ($ "#result")[0]
  canvas.width = w
  canvas.height = h
  ctx = canvas.getContext "2d"
  imageData = ctx.createImageData w, h
  for color,i in data
    parsedColor = parseColor color
    imageData.data[i*4] = parsedColor[0]
    imageData.data[i*4+1] = parsedColor[1]
    imageData.data[i*4+2] = parsedColor[2]
    imageData.data[i*4+3] = 255
  ctx.putImageData imageData, 0, 0
showReport = (data)->
  report = $ '#report'
  report.empty()
  for color,count of data then do->
    container = $ '<tr/>'
    color_place = ($ '<td/>').append ($ '<div>').css width:30, height:20, backgroundColor:color
    name_place = ($ '<td/>').text color
    count_place = ($ '<td/>').text count
    report.append container.append color_place, name_place, count_place
$ ->
  [w,h]=[10,10]
  ($ '#files').change ->
    ($ "#preview")[0].src = window.URL.createObjectURL ($ "#files")[0].files[0]
  do ($ '#files').change if ($ '#files')[0].value
  ($ '#width').change ->
    w = ($ '#x_pos')[0].max  = ($ "#preview")[0].width = parseInt ($ "#width").val()
    if (parseInt ($ '#x_pos').val()) > w then ($ '#x_pos').val w
  do ($ '#width').change
  ($ '#height').change ->
    h = ($ '#y_pos')[0].max = ($ "#preview")[0].height = parseInt ($ "#height").val()
    if (parseInt ($ '#y_pos').val()) > w then ($ '#y_pos').val w
  do ($ '#height').change
  ($ '#test').click ->
  ($ '#save').click ->
    localStorage.palette = JSON.stringify do getPalete
  ($ '#load').click -> 
    ($ '#color_list').empty()
    for color in JSON.parse localStorage.palette 
      addColor color
  try do ($ '#load').click
    
  ($ '#add_color').click addColor
  ($ '#run').click ->
    colors = do getPalete
    canvas = ($ "#proc")[0]
    canvas.width = w
    canvas.height = h
    ctx = canvas.getContext "2d"
    ctx.drawImage ($ "#preview")[0], 0, 0, w, h
    imageContent = ctx.getImageData 0,0,w,h
    resultList = dataToPalette colors, imageContent.data
    showResult resultList, w, h
    showReport countRepits resultList
  ($ '#export').click ->
    location.href = ($ "#result")[0].toDataURL().replace "image/png", "image/octet-stream"


