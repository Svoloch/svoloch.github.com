
$R ->
	$ID('red').input red = ->
		a = $A(document.body)
			.unspan 'red'
			.highlight 'red', $ID('red').val()
		$ID('red').attr title: a.length
		a.forEach (item, pos)-> $A(item).attr title: pos
	$ID('green').input green = ->
		a = $A(document.body)
			.unspan 'green'
			.highlight 'green', $ID('green').val()
		$ID('green').attr title: a.length
		a.forEach (item, pos)-> $A(item).attr title: pos
	$ID('blue').input blue = ->
		a = $A(document.body)
			.unspan 'blue'
			.highlight 'blue', $ID('blue').val()
		$ID('blue').attr title: a.length
		a.forEach (item, pos)-> $A(item).attr title: pos

	do red; do green; do blue
