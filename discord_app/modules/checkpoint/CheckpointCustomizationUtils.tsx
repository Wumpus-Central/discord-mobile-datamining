// === Module 6348: CheckpointCustomizationUtils ===

// Module 6348 (CheckpointCustomizationUtils)
import util from "util" /* 1128 */;
import _modDef3088 from "module_3088" /* 3088 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6003 */;
import CheckpointTrait from "CheckpointTrait" /* 6025 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6346 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6349 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6350 */;
import CheckpointConstants from "CheckpointConstants" /* 6002 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getAssetDescription(asset) {
  ({ trait, rarity } = asset);
  if (null == rarity) {
    ({ trait: trait2, optionId } = asset);
    let stringResult;
    if (CheckpointCharacterTraits.NONE_OPTION_IDS[trait2] === optionId) {
      const intl5 = util.intl;
      stringResult = intl5.string(obj5[trait]);
    }
    return stringResult;
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT) {
    const intl4 = util.intl;
    return intl4.string(_modDef3088["4aaADG"]);
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    const intl3 = util.intl;
    if (asset.locked) {
      obj2 = {
        subscribeHook(arg0) {
              return arg0;
            }
      };
      let formatToPlainStringResult = intl3.formatToPlainString(_modDef3088["3Wq/bk"], obj2);
    } else {
      formatToPlainStringResult = intl3.string(_modDef3088.sQ1bDT);
    }
    return formatToPlainStringResult;
  } else if (trait !== CheckpointTrait.CheckpointTrait.BASE) {
    ({ commonMessage, topMessage } = obj6[trait]);
    if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.COMMON) {
      const intl2 = util.intl;
      let stringResult1 = intl2.string(commonMessage);
    } else {
      const intl = util.intl;
      const obj = { percent: 100 - CheckpointTraitConfig.CHECKPOINT_RARITY_MIN_PERCENTILE[rarity] };
      stringResult1 = intl.formatToPlainString(topMessage, obj);
    }
    return stringResult1;
  }
}
({ CHECKPOINT_RARITY_LABEL_MESSAGES: c3, CHECKPOINT_RARITY_ORDER: closure_4, TRAIT_OPTION_HEIGHT, TRAIT_OPTION_WIDTH } = CheckpointConstants);
const CheckpointCustomizationOption = { FACE: "face", OUTFIT: "outfit", OUTFIT_COLOR: "outfit_color", HAT: "hat", WEARABLE: "wearable", AURA: "aura", SHOES: "shoes", BASE: "base" };
let obj2 = { [FACE]: _modDef3088.QQsnUi, [OUTFIT]: _modDef3088.R4kQz6, [OUTFIT_COLOR]: _modDef3088.Yzaoit, [HAT]: _modDef3088.ZUGgI7, [WEARABLE]: _modDef3088["KrhX/b"], [AURA]: _modDef3088["35nXwl"], [SHOES]: _modDef3088["Yt3O/L"], [BASE]: _modDef3088.bbQzr1 };
({ FACE, OUTFIT, OUTFIT_COLOR, HAT, WEARABLE, AURA, SHOES, BASE } = CheckpointCustomizationOption);
const obj3 = { [FACE2]: CheckpointTrait.CheckpointTrait.FACE, [OUTFIT2]: CheckpointTrait.CheckpointTrait.OUTFIT, [OUTFIT_COLOR2]: CheckpointTrait.CheckpointTrait.OUTFIT, [HAT2]: CheckpointTrait.CheckpointTrait.HAT, [WEARABLE2]: CheckpointTrait.CheckpointTrait.WEARABLE, [AURA2]: CheckpointTrait.CheckpointTrait.AURA, [SHOES2]: CheckpointTrait.CheckpointTrait.SHOES, [BASE2]: CheckpointTrait.CheckpointTrait.BASE };
({ FACE: FACE2, OUTFIT: OUTFIT2, OUTFIT_COLOR: OUTFIT_COLOR2, HAT: HAT2, WEARABLE: WEARABLE2, AURA: AURA2, SHOES: SHOES2, BASE: BASE2 } = CheckpointCustomizationOption);
const obj4 = { [CheckpointNavigation.CheckpointCharacterStage.FACE]: CheckpointCustomizationOption.FACE, [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: CheckpointCustomizationOption.OUTFIT, [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: CheckpointCustomizationOption.HAT, [CheckpointNavigation.CheckpointCharacterStage.SHOES]: CheckpointCustomizationOption.SHOES, [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: CheckpointCustomizationOption.WEARABLE, [CheckpointNavigation.CheckpointCharacterStage.AURA]: CheckpointCustomizationOption.AURA };
const obj5 = {};
obj5[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3088.kcAWvo;
obj5[CheckpointTrait.CheckpointTrait.HAT] = _modDef3088.RYvRmE;
obj5[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3088.lbzScK;
obj5[CheckpointTrait.CheckpointTrait.AURA] = _modDef3088.mRPtBV;
obj5[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3088.KHsJlD;
const obj6 = {};
obj6[CheckpointTrait.CheckpointTrait.FACE] = { commonMessage: _modDef3088.mmlFSp, topMessage: _modDef3088.PNMVaH };
const obj7 = { commonMessage: _modDef3088.mmlFSp, topMessage: _modDef3088.PNMVaH };
obj6[CheckpointTrait.CheckpointTrait.OUTFIT] = { commonMessage: _modDef3088["7ycqkx"], topMessage: _modDef3088["stpl+C"] };
const obj8 = { commonMessage: _modDef3088["7ycqkx"], topMessage: _modDef3088["stpl+C"] };
obj6[CheckpointTrait.CheckpointTrait.HAT] = { commonMessage: _modDef3088.TTkbUY, topMessage: _modDef3088["2UDofx"] };
const obj9 = { commonMessage: _modDef3088.TTkbUY, topMessage: _modDef3088["2UDofx"] };
obj6[CheckpointTrait.CheckpointTrait.SHOES] = { commonMessage: _modDef3088.vX6Vdt, topMessage: _modDef3088.cbssIC };
const obj10 = { commonMessage: _modDef3088.vX6Vdt, topMessage: _modDef3088.cbssIC };
obj6[CheckpointTrait.CheckpointTrait.WEARABLE] = { commonMessage: _modDef3088.ZHs2bR, topMessage: _modDef3088.yoZxcn };
const obj11 = { commonMessage: _modDef3088.ZHs2bR, topMessage: _modDef3088.yoZxcn };
obj6[CheckpointTrait.CheckpointTrait.AURA] = { commonMessage: _modDef3088.m9gYwn, topMessage: _modDef3088.mCmdPk };
let items = [1, 1];
let items1 = [items, , , , ];
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
export const getCustomizationOptionForCharacterStage = function getCustomizationOptionForCharacterStage(characterStage) {
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
  dependencyMap = tmp5(6350).CHECKPOINT_TRAIT_OPTION_ASSETS[tmp4];
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
      rarity: trait(6350).CHECKPOINT_TRAIT_OPTION_TO_RARITY[trait][optionId],
      asset: null
    };
    let thumbnail;
    if (dependencyMap[optionId] != null) {
      thumbnail = tmp.thumbnail;
    }
    obj.asset = thumbnail;
    return obj;
  });
};
export const getTraitPickerOptions = function getTraitPickerOptions(customizationOption, options, stateFromStores, stateFromStores1, savedOptionId) {
  const visibleTraitRarities = CheckpointCharacterTraits.getVisibleTraitRarities(obj3[customizationOption], stateFromStores);
  const visibleTraitOptions = [];
  let totalCount = 0;
  let earnedCount = 0;
  const iter = options[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let hasItem = null == nextResult.rarity;
    if (!hasItem) {
      hasItem = visibleTraitRarities.has(tmp2.rarity);
    }
    let tmp9 = tmp2.rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO && !stateFromStores1;
    let tmp10 = tmp9;
    if (null != tmp2.rarity) {
      totalCount = totalCount + 1;
    }
    let tmp13 = hasItem;
    if (!hasItem) {
      tmp13 = savedOptionId === tmp2.optionId;
    }
    if (tmp13) {
      obj2 = {};
      let merged = Object.assign(nextResult);
      obj2.locked = tmp10;
      let arr = visibleTraitOptions.push(obj2);
      let tmp21 = null == tmp2.rarity || tmp9;
      if (!tmp21) {
        earnedCount = earnedCount + 1;
      }
    }
    continue;
  }
  const sorted = visibleTraitOptions.sort((rarity, rarity2) => {
    if (null == rarity.rarity) {
      let length = closure_1_4.length;
      let arr = closure_1_4;
    } else {
      arr = closure_1_4;
      length = closure_1_4.indexOf(rarity.rarity);
      if (-1 === length) {
        length = arr.length;
      }
    }
    if (null == rarity2.rarity) {
      let length2 = arr.length;
    } else {
      length2 = arr.indexOf(rarity2.rarity);
      if (-1 === length2) {
        length2 = arr.length;
      }
    }
    return length - length2;
  });
  return { visibleTraitOptions, totalCount, earnedCount };
};
export const isTraitNoneOptionId = function isTraitNoneOptionId(arg0, arg1) {
  return CheckpointCharacterTraits.NONE_OPTION_IDS[arg0] === arg1;
};
export const isNoneOption = function isNoneOption(traitOption) {
  ({ trait, optionId } = traitOption);
  return CheckpointCharacterTraits.NONE_OPTION_IDS[trait] === optionId;
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
  const items1 = [items, , , , ];
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