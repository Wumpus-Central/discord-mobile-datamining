// _runtime/05975_getInvertedMultiplier.js
arg5.getInvertedMultiplier = function getInvertedMultiplier(gestureDirection, arg1) {
  if ("vertical" === gestureDirection) {
    return 1;
  } else if ("vertical-inverted" === gestureDirection) {
    return -1;
  } else if ("horizontal" === gestureDirection) {
    let num2 = 1;
    if (arg1) {
      num2 = -1;
    }
    return num2;
  } else if ("horizontal-inverted" === gestureDirection) {
    let num = -1;
    if (arg1) {
      num = 1;
    }
    return num;
  }
};