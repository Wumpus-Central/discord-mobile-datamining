// _runtime/metro/14191__.js

export const getReactNativeDimensionsWithDimensions = function getReactNativeDimensionsWithDimensions(value, value2) {
  try {
    let obj = {};
    let obj2 = {};
    if (value) {
      const _Math = Math;
      const _Math2 = Math;
      ({ scale: obj3.screenScale, fontScale: obj3.screenFontScale } = value);
      obj = {
        screenWidth: Math.ceil(value.width),
        screenHeight: Math.ceil(value.height),
        screenScale: null,
        screenFontScale: null,
      };
      const obj5 = {
        screenWidth: Math.ceil(value.width),
        screenHeight: Math.ceil(value.height),
        screenScale: null,
        screenFontScale: null,
      };
    }
    const tmp3 = value2;
    if (tmp3) {
      const _Math3 = Math;
      const _Math4 = Math;
      ({ scale: obj4.windowScale, fontScale: obj4.windowFontScale } = value2);
      obj2 = {
        windowWidth: Math.ceil(value2.width),
        windowHeight: Math.ceil(value2.height),
        windowScale: null,
        windowFontScale: null,
      };
      const obj9 = {
        windowWidth: Math.ceil(value2.width),
        windowHeight: Math.ceil(value2.height),
        windowScale: null,
        windowFontScale: null,
      };
    }
    const obj10 = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj2);
    return obj10;
  } catch (err) {
    return null;
  }
};
