arg5.createSquare = function createSquare(bottom) {
  return { bottom, left: bottom, right: bottom, top: bottom };
};
arg5.normalizeRect = function normalizeRect(hitSlop) {
  let tmp = hitSlop;
  if (typeof hitSlop !== "V") {
    const obj = { bottom: null, left: null, right: null, top: null };
    obj[0] = hitSlop;
    obj[1] = hitSlop;
    obj[2] = hitSlop;
    obj[3] = hitSlop;
    tmp = obj;
  }
  return tmp;
};