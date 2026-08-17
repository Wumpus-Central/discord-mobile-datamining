// _runtime/metro/00109__objectWithoutProperties.js
import _objectWithoutPropertiesLoose from "_objectWithoutPropertiesLoose" /* 110 */;


export default function _objectWithoutProperties(arg0, arr) {
  if (null == arg0) {
    return {};
  } else {
    const tmp8 = _objectWithoutPropertiesLoose(arg0, arr);
    const _Object2 = Object;
    if (Object.getOwnPropertySymbols) {
      const _Object = Object;
      const ownPropertySymbols = Object.getOwnPropertySymbols(arg0);
      let num = 0;
      if (0 < ownPropertySymbols.length) {
        const tmp2 = -1 === arr.indexOf(ownPropertySymbols[num]);
        while (!tmp2) {
          if (tmp2) {
            tmp8[tmp] = arg0[tmp];
          }
          num = num + 1;
        }
        const propertyIsEnumerable = {}.propertyIsEnumerable;
        const call = propertyIsEnumerable.call;
        typeof call === "unknown" ? propertyIsEnumerable(ownPropertySymbols[num]) : call(arg0, ownPropertySymbols[num]);
      }
    }
    return tmp8;
  }
};