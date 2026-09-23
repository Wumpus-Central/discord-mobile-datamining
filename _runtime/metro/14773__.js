// _runtime/metro/14773__.js

export const getReactNativeDimensionsWithDimensions = function getReactNativeDimensionsWithDimensions(width, value) {
  try {
    let obj = {};
    let obj2 = {};
    if (width) {
      const obj5 = { screenWidth: null, screenHeight: null, screenScale: null, screenFontScale: null };
      const _Math = Math;
      obj5.screenWidth = Math.ceil(width.width);
      const _Math2 = Math;
      obj5.screenHeight = Math.ceil(width.height);
      ({ scale: obj3.screenScale, fontScale: obj3.screenFontScale } = width);
      obj = obj5;
    }
    if (value) {
      const obj9 = { windowWidth: null, windowHeight: null, windowScale: null, windowFontScale: null };
      const _Math3 = Math;
      obj9.windowWidth = Math.ceil(value.width);
      const _Math4 = Math;
      obj9.windowHeight = Math.ceil(value.height);
      ({ scale: obj4.windowScale, fontScale: obj4.windowFontScale } = value);
      obj2 = obj9;
    }
    const obj10 = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj2);
    return obj10;
  } catch (err) {
    return null;
  }
};
