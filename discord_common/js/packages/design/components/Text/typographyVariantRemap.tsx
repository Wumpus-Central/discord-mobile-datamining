// === Module 4903: typographyVariantRemap ===

// Module 4903 (typographyVariantRemap)
import TypographyVariantRemap from "TypographyVariantRemap" /* 4904 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Text/typographyVariantRemap.tsx");

export const remapTypographyVariant = function remapTypographyVariant(cResult, arg1, arg2) {
  const obj = TypographyVariantRemap.TYPOGRAPHY_EXPERIMENT_REMAPS[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = _slicedToArray(tmp, 2);
    let tmp4 = tmp3[1];
    if (cResult.includes(tmp3[0])) {
      let value;
      if (arg2) {
        let heading = tmp4.heading;
        value = heading.get(arg1);
      }
      if (value == null) {
        let text = tmp4.text;
        value = text.get(arg1);
      }
      if (null != value) {
        obj.return();
        return value;
      }
    }
    continue;
  }
  return arg1;
};