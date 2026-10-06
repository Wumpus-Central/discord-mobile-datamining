// _runtime/metro/06355__objectWithoutProperties.js
import _objectWithoutPropertiesLoose from "../06356__objectWithoutPropertiesLoose.js";

export default function _objectWithoutProperties(arg0, arr) {
  if (null == arg0) {
    return {};
  } else {
    const tmp7 = _objectWithoutPropertiesLoose(arg0, arr);
    const _Object2 = Object;
    if (Object.getOwnPropertySymbols) {
      let num;
      const _Object = Object;
      const ownPropertySymbols = Object.getOwnPropertySymbols(arg0);
      for (let num = 0; num < ownPropertySymbols.length; num = num + 1) {
        let tmp = ownPropertySymbols[num];
        let callResult = -1 === arr.indexOf(tmp);
        if (callResult) {
          let propertyIsEnumerable = {}.propertyIsEnumerable;
          callResult = propertyIsEnumerable.call(arg0, tmp);
        }
        if (callResult) {
          tmp7[tmp] = arg0[tmp];
        }
      }
    }
    return tmp7;
  }
}
