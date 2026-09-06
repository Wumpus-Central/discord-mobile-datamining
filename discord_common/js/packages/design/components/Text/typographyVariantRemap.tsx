// === Module 4567: typographyVariantRemap ===

// Module 4567 (typographyVariantRemap)
import TypographyVariantRemap from "TypographyVariantRemap" /* 4568 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Text/typographyVariantRemap.tsx");

export const remapTypographyVariant = function remapTypographyVariant(enabledExperiments, variant, arg2) {
  const obj = TypographyVariantRemap.TYPOGRAPHY_EXPERIMENT_REMAPS[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = _slicedToArray(tmp, 2);
    let tmp4 = tmp3[1];
    if (enabledExperiments.includes(tmp3[0])) {
      value = undefined;
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