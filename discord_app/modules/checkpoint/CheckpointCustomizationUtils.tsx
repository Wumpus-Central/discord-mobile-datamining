// discord_app/modules/checkpoint/CheckpointCustomizationUtils.tsx
import util from "../../intl/index.native.tsx";
import _modDef3115 from "Checkpoint2026.messages.js";
import CheckpointTraitRarity from "../../../discord_common/js/shared/shared-constants/CheckpointTraitRarity.tsx";
import CheckpointTrait from "../../../discord_common/js/shared/shared-constants/CheckpointTrait.tsx";
import CheckpointTraitConfig from "../../../discord_common/js/shared/shared-constants/CheckpointTraitConfig.tsx";
import CheckpointNavigation from "CheckpointNavigation.tsx";
import CheckpointCharacterTraits from "CheckpointCharacterTraits.tsx";
import CheckpointConstants from "CheckpointConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function getAssetDescription(asset) {
  ({ trait, rarity } = asset);
  if (null == rarity) {
    let stringResult;
    if (CheckpointCharacterTraits.NONE_OPTION_IDS[asset.trait] === asset.optionId) {
      const intl5 = util.intl;
      stringResult = intl5.string(obj5[trait]);
    }
    return stringResult;
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT) {
    const intl4 = util.intl;
    return intl4.string(_modDef3115["4aaADG"]);
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    const intl3 = util.intl;
    if (asset.locked) {
      obj2 = {
        subscribeHook(arg0) {
          return arg0;
        },
      };
      let formatToPlainStringResult = intl3.formatToPlainString(_modDef3115["3Wq/bk"], obj2);
    } else {
      formatToPlainStringResult = intl3.string(_modDef3115.sQ1bDT);
    }
    return formatToPlainStringResult;
  } else {
    let vX6Vdt = _modDef3115.mmlFSp;
    let cbssIC = _modDef3115.PNMVaH;
    if (CheckpointTrait.CheckpointTrait.OUTFIT === trait) {
      vX6Vdt = _modDef3115["7ycqkx"];
      cbssIC = _modDef3115["stpl+C"];
    } else if (CheckpointTrait.CheckpointTrait.SHOES === trait) {
      vX6Vdt = _modDef3115.vX6Vdt;
      cbssIC = _modDef3115.cbssIC;
    } else {
      const FACE = CheckpointTrait.CheckpointTrait.FACE;
    }
    if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.COMMON) {
      const intl2 = util.intl;
      let stringResult1 = intl2.string(vX6Vdt);
    } else {
      const intl = util.intl;
      const obj = { percent: 100 - CheckpointTraitConfig.CHECKPOINT_RARITY_MIN_PERCENTILE[rarity] };
      stringResult1 = intl.formatToPlainString(cbssIC, obj);
    }
    return stringResult1;
  }
}
({ CHECKPOINT_RARITY_LABEL_MESSAGES: c3, TRAIT_OPTION_HEIGHT, TRAIT_OPTION_WIDTH } = CheckpointConstants);
const CheckpointCustomizationOption = {
  FACE: "face",
  OUTFIT: "outfit",
  OUTFIT_COLOR: "outfit_color",
  HAT: "hat",
  WEARABLE: "wearable",
  AURA: "aura",
  SHOES: "shoes",
  BASE: "base",
};
let obj2 = {
  [FACE]: _modDef3115.QQsnUi,
  [OUTFIT]: _modDef3115.R4kQz6,
  [OUTFIT_COLOR]: _modDef3115.Yzaoit,
  [HAT]: _modDef3115.ZUGgI7,
  [WEARABLE]: _modDef3115["KrhX/b"],
  [AURA]: _modDef3115["35nXwl"],
  [SHOES]: _modDef3115["Yt3O/L"],
  [BASE]: _modDef3115.bbQzr1,
};
({ FACE, OUTFIT, OUTFIT_COLOR, HAT, WEARABLE, AURA, SHOES, BASE } = CheckpointCustomizationOption);
const obj3 = {
  [FACE2]: CheckpointTrait.CheckpointTrait.FACE,
  [OUTFIT2]: CheckpointTrait.CheckpointTrait.OUTFIT,
  [OUTFIT_COLOR2]: CheckpointTrait.CheckpointTrait.OUTFIT,
  [HAT2]: CheckpointTrait.CheckpointTrait.HAT,
  [WEARABLE2]: CheckpointTrait.CheckpointTrait.WEARABLE,
  [AURA2]: CheckpointTrait.CheckpointTrait.AURA,
  [SHOES2]: CheckpointTrait.CheckpointTrait.SHOES,
  [BASE2]: CheckpointTrait.CheckpointTrait.BASE,
};
({
  FACE: FACE2,
  OUTFIT: OUTFIT2,
  OUTFIT_COLOR: OUTFIT_COLOR2,
  HAT: HAT2,
  WEARABLE: WEARABLE2,
  AURA: AURA2,
  SHOES: SHOES2,
  BASE: BASE2,
} = CheckpointCustomizationOption);
const obj4 = {
  [CheckpointNavigation.CheckpointCharacterStage.FACE]: CheckpointCustomizationOption.FACE,
  [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: CheckpointCustomizationOption.OUTFIT,
  [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: CheckpointCustomizationOption.HAT,
  [CheckpointNavigation.CheckpointCharacterStage.SHOES]: CheckpointCustomizationOption.SHOES,
  [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: CheckpointCustomizationOption.WEARABLE,
  [CheckpointNavigation.CheckpointCharacterStage.AURA]: CheckpointCustomizationOption.AURA,
};
const obj5 = {};
obj5[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3115.kcAWvo;
obj5[CheckpointTrait.CheckpointTrait.HAT] = _modDef3115.RYvRmE;
obj5[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3115.lbzScK;
obj5[CheckpointTrait.CheckpointTrait.AURA] = _modDef3115.mRPtBV;
obj5[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3115.KHsJlD;
let items = [1, 1];
let items1 = [items, , , ,];
let items2 = [TRAIT_OPTION_WIDTH - 1 - 16, 1];
items1[1] = items2;
let items3 = [TRAIT_OPTION_WIDTH - 1, 17];
items1[2] = items3;
let items4 = [TRAIT_OPTION_WIDTH - 1, TRAIT_OPTION_HEIGHT - 1];
items1[3] = items4;
let items5 = [1, TRAIT_OPTION_HEIGHT - 1];
items1[4] = items5;
let mapped = items1.map((item) => {
  [tmp, tmp2] = item;
  return "" + tmp + "," + tmp2;
});
const joined = mapped.join(" ");
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCustomizationUtils.tsx");

export { CheckpointCustomizationOption };
export const getCustomizationOptionName = function getCustomizationOptionName(activeCustomizationOption) {
  const intl = util.intl;
  return intl.string(obj2[activeCustomizationOption]);
};
export const CUSTOMIZATION_OPTION_TRAITS = obj3;
export const getCustomizationOptionForCharacterStage = function getCustomizationOptionForCharacterStage(
  characterStage,
) {
  return obj4[characterStage];
};
export const getTraitOptions = function getTraitOptions(OUTFIT) {
  let arr = OUTFIT_DEFAULT_OPTION_IDS;
  if (OUTFIT_DEFAULT_OPTION_IDS === undefined) {
    arr = require("CheckpointCharacterTraits").CHECKPOINT_TRAIT_OPTION_IDS[obj3[OUTFIT]];
  }
  let CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES;
  dependencyMap = undefined;
  _require = tmp4;
  if (OUTFIT === obj.OUTFIT_COLOR) {
    CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES = require("CheckpointTraitOptionNames").CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES;
    let tmp5 = _require;
  } else {
    tmp5 = _require;
    CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES = require("CheckpointTraitOptionNames").CHECKPOINT_TRAIT_OPTION_NAMES[tmp4];
  }
  dependencyMap = tmp5(15925).CHECKPOINT_TRAIT_OPTION_ASSETS[tmp4];
  return arr.map((optionId) => {
    trait = optionId;
    const obj = {
      trait,
      optionId,
      getName() {
        let str = "";
        if (null != CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES[closure_0]) {
          const intl = util.intl;
          str = intl.string(tmp);
        }
        return str;
      },
      rarity: trait(15925).CHECKPOINT_TRAIT_OPTION_TO_RARITY[trait][optionId],
      asset: null,
    };
    let layer;
    if (dependencyMap[optionId] != null) {
      layer = tmp.layer;
    }
    obj.asset = layer;
    return obj;
  });
};
export const isNoneOption = function isNoneOption(traitOption) {
  return CheckpointCharacterTraits.NONE_OPTION_IDS[traitOption.trait] === traitOption.optionId;
};
export { getAssetDescription };
export const getAssetAccessibilityLabel = function getAssetAccessibilityLabel(getName, hideCornerFlag) {
  const items = [getName.getName()];
  if (!hideCornerFlag) {
    if (null != getName.rarity) {
      const intl = util.intl;
      items.push(intl.string(React3[getName.rarity]));
    }
    const tmp7 = getAssetDescription(getName);
    if (null != tmp7) {
      items.push(tmp7);
    }
  }
  return items.join(", ");
};
export const getChamferedRectPoints = function getChamferedRectPoints(width, height, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  const items = [num, num];
  const items1 = [items, , , ,];
  const items2 = [width - num - arg2, num];
  items1[1] = items2;
  const items3 = [width - num, num + arg2];
  items1[2] = items3;
  const items4 = [width - num, height - num];
  items1[3] = items4;
  const items5 = [num, height - num];
  items1[4] = items5;
  const mapped = items1.map((item) => {
    [tmp, tmp2] = item;
    return "" + tmp + "," + tmp2;
  });
  return mapped.join(" ");
};
export const TRAIT_OPTION_STROKE_WIDTH = 2;
export const TRAIT_OPTION_SHAPE_POINTS = joined;
