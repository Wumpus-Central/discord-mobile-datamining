// discord_common/js/packages/design/components/Text/typographyVariantRemap.tsx
import map from "../../../tokens/typography/generated/TypographyVariantRemap.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";

require = fn;
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/design/components/Text/typographyVariantRemap.tsx");

export const remapTypographyVariant = function remapTypographyVariant(enabledExperiments, variant, arg2) {
  const obj = map.TYPOGRAPHY_EXPERIMENT_REMAPS[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = callback(tmp, 2);
    let tmp4 = tmp3[1];
    if (enabledExperiments.includes(tmp3[0])) {
      let value;
      if (arg2) {
        let heading = tmp4.heading;
        value = heading.get(variant);
      }
      if (value == null) {
        let text = tmp4.text;
        value = text.get(variant);
      }
      if (null != value) {
        obj.return();
        return value;
      }
    }
    continue;
  }
  return variant;
};