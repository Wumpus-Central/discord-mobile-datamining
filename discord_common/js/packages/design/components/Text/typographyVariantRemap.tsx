// === Module 4567: remapTypographyVariant ===

// Module 4567 (remapTypographyVariant)
import map from "map" /* 4568 */;
import closure_2 from "_slicedToArray" /* 32 */;

require = arg1;
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/typographyVariantRemap.tsx");

export const remapTypographyVariant = function remapTypographyVariant(enabledExperiments, variant, arg2) {
  const obj = map.TYPOGRAPHY_EXPERIMENT_REMAPS[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp2 = callback;
    let tmp3 = callback(tmp, 2);
    let tmp4 = tmp3[1];
    if (enabledExperiments.includes(tmp3[0])) {
      let value;
      if (arg2) {
        let tmp6 = tmp4;
        let heading = tmp4.heading;
        value = heading.get(variant);
      }
      if (value == null) {
        let tmp7 = tmp4;
        let text = tmp4.text;
        value = text.get(variant);
      }
      let tmp8 = value;
      if (null != value) {
        let tmp9 = obj;
        obj.return();
        return value;
      }
    }
    continue;
  }
  return variant;
};