// === Module 6315: CheckpointCharacterAccessibilityUtils ===

// Module 6315 (CheckpointCharacterAccessibilityUtils)
import util from "util" /* 1128 */;
import _modDef3078 from "module_3078" /* 3078 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6316 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6318 */;
import CheckpointTraitOptionNames from "CheckpointTraitOptionNames" /* 6319 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let items = [CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE, CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR, CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCharacterAccessibilityUtils.tsx");

export const getCheckpointCharacterAccessibilityLabel = function getCheckpointCharacterAccessibilityLabel(character) {
  _require = character;
  items = [];
  const item = items.forEach((item) => {
    const tmp3 = closure_0[CheckpointCustomizationUtils.CUSTOMIZATION_OPTION_TRAITS[item]];
    if (null == tmp3) {
      if (null != undefined) {
        const intl = util.intl;
        const obj = { category: CheckpointCustomizationUtils.getCustomizationOptionName(item), name: null };
        const intl2 = util.intl;
        obj.name = intl2.string(undefined);
        items.push(intl.formatToPlainString(_modDef3078["Z+HdIo"], obj));
        const tmpResult = CheckpointCustomizationUtils;
      }
    } else {
      const tmp4 = CheckpointCustomizationUtils.CUSTOMIZATION_OPTION_TRAITS[item];
      if (!tmpResult4.isTraitNoneOptionId(tmp4, tmp3)) {
        const tmp6 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_OPTION_NAMES[tmp4];
        if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT === item) {
          const outfitDefaultOptionId = CheckpointCharacterTraits.getOutfitDefaultOptionId(tmp3);
          const tmpResult5 = CheckpointCharacterTraits;
        }
      }
      tmpResult4 = CheckpointCustomizationUtils;
      tmpResult6 = CheckpointCharacterTraits;
    }
  });
  let intl = require("util").intl;
  let obj = { traits: null };
  const listFormat = new Intl.ListFormat(require("util").intl.currentLocale, { type: "conjunction" });
  obj.traits = listFormat.format(items);
  return intl.formatToPlainString(items(3078).mQNR4x, obj);
};