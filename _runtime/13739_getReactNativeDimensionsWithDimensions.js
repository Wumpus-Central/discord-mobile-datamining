// _runtime/13739_getReactNativeDimensionsWithDimensions.js
arg5.getReactNativeDimensionsWithDimensions = function getReactNativeDimensionsWithDimensions(width, value) {
  try {
    let obj = {};
    obj = {};
    if (width) {
      obj = { screenWidth: null, screenHeight: null, screenScale: null, screenFontScale: null };
      const _Math = Math;
      obj[0] = Math.ceil(width.width);
      const _Math2 = Math;
      obj[1] = Math.ceil(width.height);
      ({ scale: obj3[2], fontScale: obj3[3] } = width);
    }
    if (value) {
      const obj1 = { windowWidth: null, windowHeight: null, windowScale: null, windowFontScale: null };
      const _Math3 = Math;
      obj1[0] = Math.ceil(value.width);
      const _Math4 = Math;
      obj1[1] = Math.ceil(value.height);
      ({ scale: obj4[2], fontScale: obj4[3] } = value);
      obj = obj1;
    }
    const obj2 = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj);
    return obj2;
  } catch (err) {
    return null;
  }
};