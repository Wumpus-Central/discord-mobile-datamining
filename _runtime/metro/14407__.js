// _runtime/metro/14407__.js

export const getReactNativeDimensionsWithDimensions = function getReactNativeDimensionsWithDimensions(width, value) {
  try {
    let obj = {};
    obj = {};
    if (width) {
      obj = { screenWidth: null, screenHeight: null, screenScale: null, screenFontScale: null };
      const _Math = Math;
      obj.screenWidth = Math.ceil(width.width);
      const _Math2 = Math;
      obj.screenHeight = Math.ceil(width.height);
      ({ scale: obj3.screenScale, fontScale: obj3.screenFontScale } = width);
    }
    if (value) {
      const obj1 = { windowWidth: null, windowHeight: null, windowScale: null, windowFontScale: null };
      const _Math3 = Math;
      obj1.windowWidth = Math.ceil(value.width);
      const _Math4 = Math;
      obj1.windowHeight = Math.ceil(value.height);
      ({ scale: obj4.windowScale, fontScale: obj4.windowFontScale } = value);
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
