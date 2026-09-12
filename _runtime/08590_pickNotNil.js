// _runtime/08590_pickNotNil.js
import _modDef5024 from "metro/05024__.js";

importDefault = arg2;
const dependencyMap = arg6;

export const pickNotNil = function pickNotNil(obj) {
  obj = {};
  for (const key10006 in arg0) {
    let _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    let call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty(key10006);
    } else {
      hasOwnPropertyResult = call(arg0, key10006);
    }
    if (!hasOwnPropertyResult) {
      continue;
    } else {
      let tmp2 = arg0[key10006];
      if (null == tmp2) {
        continue;
      } else {
        obj[key10006] = tmp2;
        continue;
      }
      continue;
    }
    continue;
  }
  return obj;
};
export const idPattern = /#([^)]+)'?\)?$/;
export const getRandomNumber = () => {
  const random = Math.random();
  const random1 = Math.random();
  return Math.floor(random * Math.floor(random1 * Date.now()));
};
export const warnUnimplementedFilter = () => {
  _modDef5024(
    true,
    "Some of the used filters are not yet supported on native platforms. Please check the USAGE.md for more info. Not implemented filters:\n",
    JSON.stringify(
      [
        "FeComponentTransfer",
        "FeConvolveMatrix",
        "FeDiffuseLighting",
        "FeDisplacementMap",
        "FeFuncA",
        "FeFuncB",
        "FeFuncG",
        "FeFuncR",
        "FeImage",
        "FeMorphology",
        "FePointLight",
        "FeSpecularLighting",
        "FeSpotLight",
        "FeTile",
        "FeTurbulence",
      ],
      null,
      2,
    ),
  );
};
