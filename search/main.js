// Generated by CoffeeScript 2.3.1
$R(function() {
  var blue, green, red;
  $ID('red').input(red = function() {
    var a;
    a = $A(document.body).unspan('red').highlight('red', $ID('red').val());
    $ID('red').attr({
      title: a.length
    });
    return a.forEach(function(item, pos) {
      return $A(item).attr({
        title: pos
      });
    });
  });
  $ID('green').input(green = function() {
    var a;
    a = $A(document.body).unspan('green').highlight('green', $ID('green').val());
    $ID('green').attr({
      title: a.length
    });
    return a.forEach(function(item, pos) {
      return $A(item).attr({
        title: pos
      });
    });
  });
  $ID('blue').input(blue = function() {
    var a;
    a = $A(document.body).unspan('blue').highlight('blue', $ID('blue').val());
    $ID('blue').attr({
      title: a.length
    });
    return a.forEach(function(item, pos) {
      return $A(item).attr({
        title: pos
      });
    });
  });
  red();
  green();
  return blue();
});
