// === Module 6681: CheckpointCustomizationUtils ===

// Module 6681 (CheckpointCustomizationUtils)
import util from "util" /* 1113 */;
import _modDef3269 from "module_3269" /* 3269 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6315 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6357 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6358 */;
import CheckpointTrait from "CheckpointTrait" /* 6359 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 6360 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6682 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getPlaintextAssetDescription(asset) {
  ({ trait, rarity } = asset);
  if (null == rarity) {
    let stringResult;
    if (obj2.isTraitNoneOptionId(asset.trait, asset.optionId)) {
      if (null != tmp9) {
        const intl6 = util.intl;
        stringResult = intl6.string(tmp9);
      }
    }
    return stringResult;
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT) {
    const intl5 = util.intl;
    return intl5.string(_modDef3269["4aaADG"]);
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    if (asset.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED) {
      const intl4 = util.intl;
      let stringResult1 = intl4.string(_modDef3269.vic5bB);
    } else {
      const intl3 = util.intl;
      stringResult1 = intl3.string(_modDef3269.sQ1bDT);
    }
    return stringResult1;
  } else if (trait !== CheckpointTrait.CheckpointTrait.BASE) {
    ({ commonMessage, topMessage, lockedCommonMessage, lockedTopMessage } = obj6[trait]);
    const tmp2 = asset.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.LOCKED;
    if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.COMMON) {
      const intl2 = util.intl;
      if (tmp2) {
        commonMessage = lockedCommonMessage;
      }
      let stringResult2 = intl2.string(commonMessage);
    } else {
      const intl = util.intl;
      if (tmp2) {
        topMessage = lockedTopMessage;
      }
      const obj = { percent: 100 - CheckpointTraitConfig.CHECKPOINT_RARITY_TO_MIN_PERCENTILE[rarity] };
      stringResult2 = intl.formatToPlainString(topMessage, obj);
    }
    return stringResult2;
  }
}
({ CHECKPOINT_RARITY_TO_LABEL_MESSAGE: c3, TRAIT_OPTION_WIDTH: closure_4 } = CheckpointConstants);
const CheckpointCustomizationOption = { FACE: "face", OUTFIT: "outfit", OUTFIT_COLOR: "outfit_color", HAT: "hat", WEARABLE: "wearable", AURA: "aura", SHOES: "shoes", BASE: "base" };
const obj2 = { [FACE]: _modDef3269.QQsnUi, [OUTFIT]: _modDef3269.R4kQz6, [OUTFIT_COLOR]: _modDef3269.Yzaoit, [HAT]: _modDef3269.ZUGgI7, [WEARABLE]: _modDef3269["KrhX/b"], [AURA]: _modDef3269["35nXwl"], [SHOES]: _modDef3269["Yt3O/L"], [BASE]: _modDef3269.bbQzr1 };
({ FACE, OUTFIT, OUTFIT_COLOR, HAT, WEARABLE, AURA, SHOES, BASE } = CheckpointCustomizationOption);
const obj3 = { [FACE2]: CheckpointTrait.CheckpointTrait.FACE, [OUTFIT2]: CheckpointTrait.CheckpointTrait.OUTFIT, [OUTFIT_COLOR2]: CheckpointTrait.CheckpointTrait.OUTFIT, [HAT2]: CheckpointTrait.CheckpointTrait.HAT, [WEARABLE2]: CheckpointTrait.CheckpointTrait.WEARABLE, [AURA2]: CheckpointTrait.CheckpointTrait.AURA, [SHOES2]: CheckpointTrait.CheckpointTrait.SHOES, [BASE2]: CheckpointTrait.CheckpointTrait.BASE };
({ FACE: FACE2, OUTFIT: OUTFIT2, OUTFIT_COLOR: OUTFIT_COLOR2, HAT: HAT2, WEARABLE: WEARABLE2, AURA: AURA2, SHOES: SHOES2, BASE: BASE2 } = CheckpointCustomizationOption);
const obj4 = { [CheckpointNavigation.CheckpointCharacterStage.FACE]: CheckpointCustomizationOption.FACE, [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: CheckpointCustomizationOption.OUTFIT, [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: CheckpointCustomizationOption.HAT, [CheckpointNavigation.CheckpointCharacterStage.SHOES]: CheckpointCustomizationOption.SHOES, [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: CheckpointCustomizationOption.WEARABLE, [CheckpointNavigation.CheckpointCharacterStage.AURA]: CheckpointCustomizationOption.AURA };
const obj5 = {};
obj5[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3269.kcAWvo;
obj5[CheckpointTrait.CheckpointTrait.HAT] = _modDef3269.RYvRmE;
obj5[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3269.lbzScK;
obj5[CheckpointTrait.CheckpointTrait.AURA] = _modDef3269.mRPtBV;
obj5[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3269.KHsJlD;
const obj6 = {};
obj6[CheckpointTrait.CheckpointTrait.FACE] = { commonMessage: _modDef3269.mmlFSp, topMessage: _modDef3269.PNMVaH, lockedCommonMessage: _modDef3269.Yi9yiQ, lockedTopMessage: _modDef3269.ZHmprE };
const obj7 = { commonMessage: _modDef3269.mmlFSp, topMessage: _modDef3269.PNMVaH, lockedCommonMessage: _modDef3269.Yi9yiQ, lockedTopMessage: _modDef3269.ZHmprE };
obj6[CheckpointTrait.CheckpointTrait.OUTFIT] = { commonMessage: _modDef3269["7ycqkx"], topMessage: _modDef3269["stpl+C"], lockedCommonMessage: _modDef3269.Wpd6ol, lockedTopMessage: _modDef3269.tU2fxW };
const obj8 = { commonMessage: _modDef3269["7ycqkx"], topMessage: _modDef3269["stpl+C"], lockedCommonMessage: _modDef3269.Wpd6ol, lockedTopMessage: _modDef3269.tU2fxW };
obj6[CheckpointTrait.CheckpointTrait.HAT] = { commonMessage: _modDef3269.TTkbUY, topMessage: _modDef3269["2UDofx"], lockedCommonMessage: _modDef3269["5+8d3J"], lockedTopMessage: _modDef3269.X9NBcv };
const obj9 = { commonMessage: _modDef3269.TTkbUY, topMessage: _modDef3269["2UDofx"], lockedCommonMessage: _modDef3269["5+8d3J"], lockedTopMessage: _modDef3269.X9NBcv };
obj6[CheckpointTrait.CheckpointTrait.SHOES] = { commonMessage: _modDef3269.vX6Vdt, topMessage: _modDef3269.cbssIC, lockedCommonMessage: _modDef3269.cyJktg, lockedTopMessage: _modDef3269["Yjz+5u"] };
const obj10 = { commonMessage: _modDef3269.vX6Vdt, topMessage: _modDef3269.cbssIC, lockedCommonMessage: _modDef3269.cyJktg, lockedTopMessage: _modDef3269["Yjz+5u"] };
obj6[CheckpointTrait.CheckpointTrait.WEARABLE] = { commonMessage: _modDef3269.ZHs2bR, topMessage: _modDef3269.yoZxcn, lockedCommonMessage: _modDef3269["2tBPVn"], lockedTopMessage: _modDef3269.HPCBcH };
const obj11 = { commonMessage: _modDef3269.ZHs2bR, topMessage: _modDef3269.yoZxcn, lockedCommonMessage: _modDef3269["2tBPVn"], lockedTopMessage: _modDef3269.HPCBcH };
obj6[CheckpointTrait.CheckpointTrait.AURA] = { commonMessage: _modDef3269.m9gYwn, topMessage: _modDef3269.mCmdPk, lockedCommonMessage: _modDef3269.uT5tyB, lockedTopMessage: _modDef3269["5Mc39J"] };
const obj13 = {};
obj13[CheckpointTrait.CheckpointTrait.FACE] = _modDef3269["4IdR/H"];
obj13[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3269.NuujPd;
obj13[CheckpointTrait.CheckpointTrait.HAT] = _modDef3269.o1Zign;
obj13[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3269.C0CzoH;
obj13[CheckpointTrait.CheckpointTrait.AURA] = _modDef3269["+9TbTS"];
obj13[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3269.sTG4TS;
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointCustomizationUtils.tsx");

export { CheckpointCustomizationOption };
export function getCustomizationOptionName(customizationOption) {
  const intl = util.intl;
  return intl.string(obj2[customizationOption]);
}
export const CUSTOMIZATION_OPTION_TO_TRAIT = obj3;
export function getCustomizationOptionForCharacterStage(characterStage) {
  return obj4[characterStage];
}
export function getIsTraitRarityVisible(customizationOption) {
  if (obj.BASE !== customizationOption) {
    if (obj.OUTFIT_COLOR !== customizationOption) {
      return true;
    }
  }
  return false;
}
export function makeTraitRaritySorter(rarityOrder) {
  closure_0 = rarityOrder;
  const map = new Map(rarityOrder.map((item, index) => {
    items = [item, index];
    return items;
  }));
  return (rarity, rarity2) => {
    rarity = rarity.rarity;
    length = undefined;
    if (null != rarity) {
      length = map.get(rarity);
    }
    if (length == null) {
      length = closure_0.length;
    }
    rarity2 = rarity2.rarity;
    let value2;
    if (null != rarity2) {
      value2 = map.get(rarity2);
    }
    if (value2 == null) {
      value2 = closure_0.length;
    }
    return length - value2;
  };
}
export function isNoneOption(traitOption) {
  return CheckpointCharacterTraits.isTraitNoneOptionId(traitOption.trait, traitOption.optionId);
}
export { getPlaintextAssetDescription };
export function getAssetAccessibilityLabel(getName, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.skipRarity;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.skipDescription;
  if (flag2 === undefined) {
    flag2 = false;
  }
  items = [getName.getName()];
  if (getName.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.LOCKED) {
    const intl2 = util.intl;
    items.push(intl2.string(_modDef3269.AEDeza));
  } else if (getName.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED) {
    const intl = util.intl;
    items.push(intl.string(_modDef3269.F52sSw));
  }
  if (!flag) {
    if (null != getName.rarity) {
      const intl3 = util.intl;
      items.push(intl3.string(React3[getName.rarity]));
    }
  }
  if (!flag2) {
    const tmp11 = getPlaintextAssetDescription(getName);
    if (null != tmp11) {
      items.push(tmp11);
    }
  }
  return items.join(", ");
}
export function getNitroLockedMessage(checkpointRouteBlockedTrait) {
  let stringResult;
  if (null != obj13[checkpointRouteBlockedTrait]) {
    const intl = util.intl;
    stringResult = intl.string(tmp);
  }
  return stringResult;
}
export function getCheckpointRouteBlockedTrait(activeRoute, arr) {
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER) {
    return arr[0];
  } else {
    if (tmpResult.isCheckpointCustomizationRoute(activeRoute)) {
      const tmpResult2 = tmp(6682);
      const tmp4 = obj4[tmpResult2.getCheckpointRoutePresentation(tmpResult2, activeRoute).characterStage];
      _require = tmp4;
      if (null != tmp4) {
        return arr.find((item) => item === obj3[closure_0]);
      }
    }
    tmpResult = tmp(6682);
  }
}
export function getChamferedRectPoints(width, height, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  items = [num, num];
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
}
export const TRAIT_OPTION_STROKE_WIDTH = 2;
export function getTraitOptionShapePoints(width, height) {
  const result = 16 * width / React4;
  items = [1, 1];
  const items1 = [items, , , , ];
  const items2 = [width - 1 - result, 1];
  items1[1] = items2;
  const items3 = [width - 1, 1 + result];
  items1[2] = items3;
  const items4 = [width - 1, height - 1];
  items1[3] = items4;
  const items5 = [1, height - 1];
  items1[4] = items5;
  const mapped = items1.map((item) => {
    [tmp, tmp2] = item;
    return "" + tmp + "," + tmp2;
  });
  return mapped.join(" ");
}