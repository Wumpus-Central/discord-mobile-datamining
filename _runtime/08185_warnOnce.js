// === Module 8185: warnOnce ===

// Module 8185 (warnOnce)
import warnOnceDefault from "warnOnce" /* 5758 */;

let hasOwnProperty;


export const pickNotNil = function pickNotNil(obj) {
  obj = {};
  for (const key10006 in obj) {
    let _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (!hasOwnProperty.call(obj, key10006)) {
      continue;
    } else {
      let tmp = obj[key10006];
      if (null == tmp) {
        continue;
      } else {
        obj[key10006] = tmp;
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
  const floor2 = Math.floor;
  const random1 = Math.random();
  return floor(random * floor2(random1 * Date.now()));
};
export const warnUnimplementedFilter = () => {
  const tmp = warnOnceDefault;
  tmp(true, "Some of the used filters are not yet supported on native platforms. Please check the USAGE.md for more info. Not implemented filters:\n", JSON.stringify(["FeComponentTransfer", "FeConvolveMatrix", "FeDiffuseLighting", "FeDisplacementMap", "FeFuncA", "FeFuncB", "FeFuncG", "FeFuncR", "FeImage", "FeMorphology", "FePointLight", "FeSpecularLighting", "FeSpotLight", "FeTile", "FeTurbulence"], null, 2));
};