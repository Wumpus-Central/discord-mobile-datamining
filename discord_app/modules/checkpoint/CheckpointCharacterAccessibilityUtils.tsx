// discord_app/modules/checkpoint/CheckpointCharacterAccessibilityUtils.tsx
import util from "../../intl/index.native.tsx";
import _modDef3091 from "Checkpoint2026.messages.js";
import CheckpointCharacterTraits from "CheckpointCharacterTraits.tsx";
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils.tsx";
import CheckpointTraitOptionNames from "CheckpointTraitOptionNames.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let items = [
  CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE,
  CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE,
  CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT,
  CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR,
  CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT,
  CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES,
  CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE,
  CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA,
];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCharacterAccessibilityUtils.tsx");

export function getCheckpointCharacterAccessibilityLabel(character) {
  _require = character;
  items = [];
  const item = items.forEach((item) => {
    const tmp3 = closure_0[CheckpointCustomizationUtils.CUSTOMIZATION_OPTION_TO_TRAIT[item]];
    if (null == tmp3) {
      if (null != undefined) {
        const intl = util.intl;
        const obj = { category: CheckpointCustomizationUtils.getCustomizationOptionName(item), name: null };
        const intl2 = util.intl;
        obj.name = intl2.string(undefined);
        items.push(intl.formatToPlainString(_modDef3091["Z+HdIo"], obj));
        const tmpResult = CheckpointCustomizationUtils;
      }
    } else {
      const tmp4 = CheckpointCustomizationUtils.CUSTOMIZATION_OPTION_TO_TRAIT[item];
      if (!tmpResult4.isTraitNoneOptionId(tmp4, tmp3)) {
        const tmp6 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_TO_OPTION_NAMES[tmp4];
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
  return intl.formatToPlainString(items(3091).mQNR4x, obj);
}
