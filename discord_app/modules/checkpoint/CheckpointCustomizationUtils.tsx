// discord_app/modules/checkpoint/CheckpointCustomizationUtils.tsx
import util from "../../intl/index.native.tsx";
import _modDef3091 from "Checkpoint2026.messages.js";
import CheckpointTraitRarity from "../../../discord_common/js/shared/shared-constants/CheckpointTraitRarity.tsx";
import CheckpointTraitConfig from "../../../discord_common/js/shared/shared-constants/CheckpointTraitConfig.tsx";
import CheckpointCharacterTraits from "CheckpointCharacterTraits.tsx";
import CheckpointTrait from "../../../discord_common/js/shared/shared-constants/CheckpointTrait.tsx";
import CheckpointCharacterAssets from "CheckpointCharacterAssets.tsx";
import CheckpointNavigation from "CheckpointNavigation.tsx";
import CheckpointConstants from "CheckpointConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getAssetDescription(asset) {
  ({ trait, rarity } = asset);
  if (null == rarity) {
    ({ trait: trait2, optionId } = asset);
    let stringResult;
    if (CheckpointCharacterTraits.TRAIT_TO_NONE_OPTION_ID[trait2] === optionId) {
      if (null != tmp8) {
        const intl6 = util.intl;
        stringResult = intl6.string(tmp8);
      }
    }
    return stringResult;
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT) {
    const intl5 = util.intl;
    return intl5.string(_modDef3091["4aaADG"]);
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    if (asset.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED) {
      const intl4 = util.intl;
      obj2 = {
        subscribeHook(arg0) {
          return arg0;
        },
      };
      let formatToPlainStringResult = intl4.formatToPlainString(_modDef3091["3Wq/bk"], obj2);
    } else {
      const intl3 = util.intl;
      formatToPlainStringResult = intl3.string(_modDef3091.sQ1bDT);
    }
    return formatToPlainStringResult;
  } else if (trait !== CheckpointTrait.CheckpointTrait.BASE) {
    ({ commonMessage, topMessage } = obj6[trait]);
    if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.COMMON) {
      const intl2 = util.intl;
      let stringResult1 = intl2.string(commonMessage);
    } else {
      const intl = util.intl;
      const obj = { percent: 100 - CheckpointTraitConfig.CHECKPOINT_RARITY_TO_MIN_PERCENTILE[rarity] };
      stringResult1 = intl.formatToPlainString(topMessage, obj);
    }
    return stringResult1;
  }
}
({ CHECKPOINT_RARITY_TO_LABEL_MESSAGE: c3, TRAIT_OPTION_HEIGHT, TRAIT_OPTION_WIDTH } = CheckpointConstants);
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
  [FACE]: _modDef3091.QQsnUi,
  [OUTFIT]: _modDef3091.R4kQz6,
  [OUTFIT_COLOR]: _modDef3091.Yzaoit,
  [HAT]: _modDef3091.ZUGgI7,
  [WEARABLE]: _modDef3091["KrhX/b"],
  [AURA]: _modDef3091["35nXwl"],
  [SHOES]: _modDef3091["Yt3O/L"],
  [BASE]: _modDef3091.bbQzr1,
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
obj5[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3091.kcAWvo;
obj5[CheckpointTrait.CheckpointTrait.HAT] = _modDef3091.RYvRmE;
obj5[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3091.lbzScK;
obj5[CheckpointTrait.CheckpointTrait.AURA] = _modDef3091.mRPtBV;
obj5[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3091.KHsJlD;
const obj6 = {};
obj6[CheckpointTrait.CheckpointTrait.FACE] = { commonMessage: _modDef3091.mmlFSp, topMessage: _modDef3091.PNMVaH };
const obj7 = { commonMessage: _modDef3091.mmlFSp, topMessage: _modDef3091.PNMVaH };
obj6[CheckpointTrait.CheckpointTrait.OUTFIT] = {
  commonMessage: _modDef3091["7ycqkx"],
  topMessage: _modDef3091["stpl+C"],
};
const obj8 = { commonMessage: _modDef3091["7ycqkx"], topMessage: _modDef3091["stpl+C"] };
obj6[CheckpointTrait.CheckpointTrait.HAT] = { commonMessage: _modDef3091.TTkbUY, topMessage: _modDef3091["2UDofx"] };
const obj9 = { commonMessage: _modDef3091.TTkbUY, topMessage: _modDef3091["2UDofx"] };
obj6[CheckpointTrait.CheckpointTrait.SHOES] = { commonMessage: _modDef3091.vX6Vdt, topMessage: _modDef3091.cbssIC };
const obj10 = { commonMessage: _modDef3091.vX6Vdt, topMessage: _modDef3091.cbssIC };
obj6[CheckpointTrait.CheckpointTrait.WEARABLE] = { commonMessage: _modDef3091.ZHs2bR, topMessage: _modDef3091.yoZxcn };
const obj11 = { commonMessage: _modDef3091.ZHs2bR, topMessage: _modDef3091.yoZxcn };
obj6[CheckpointTrait.CheckpointTrait.AURA] = { commonMessage: _modDef3091.m9gYwn, topMessage: _modDef3091.mCmdPk };
const obj13 = {};
obj13[CheckpointTrait.CheckpointTrait.FACE] = _modDef3091["4IdR/H"];
obj13[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3091.NuujPd;
obj13[CheckpointTrait.CheckpointTrait.HAT] = _modDef3091.o1Zign;
obj13[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3091.C0CzoH;
obj13[CheckpointTrait.CheckpointTrait.AURA] = _modDef3091["+9TbTS"];
obj13[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3091.sTG4TS;
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
  const map = new Map(
    rarityOrder.map((item, index) => {
      const items = [item, index];
      return items;
    }),
  );
  return (rarity, rarity2) => {
    rarity = rarity.rarity;
    let length;
    if (null != rarity) {
      length = map.get(rarity);
    }
    if (length == null) {
      length = closure_0.length;
    }
    rarity2 = rarity2.rarity;
    value2 = undefined;
    if (null != rarity2) {
      value2 = map.get(rarity2);
    }
    if (value2 == null) {
      value2 = closure_0.length;
    }
    return length - value2;
  };
}
export function isTraitNoneOptionId(arg0, arg1) {
  return CheckpointCharacterTraits.TRAIT_TO_NONE_OPTION_ID[arg0] === arg1;
}
export function isNoneOption(traitOption) {
  ({ trait, optionId } = traitOption);
  return CheckpointCharacterTraits.TRAIT_TO_NONE_OPTION_ID[trait] === optionId;
}
export { getAssetDescription };
export function getAssetAccessibilityLabel(getName, hideCornerFlag) {
  const items = [getName.getName()];
  if (getName.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.LOCKED) {
    const intl2 = util.intl;
    items.push(intl2.string(_modDef3091.AEDeza));
  } else if (getName.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED) {
    const intl = util.intl;
    items.push(intl.string(_modDef3091.F52sSw));
  }
  if (!hideCornerFlag) {
    if (null != getName.rarity) {
      const intl3 = util.intl;
      items.push(intl3.string(React3[getName.rarity]));
    }
    const tmp11 = getAssetDescription(getName);
    if (null != tmp11) {
      items.push(tmp11);
    }
  }
  return items.join(", ");
}
export function getNitroLockedMessage(nextBlockedTrait) {
  let stringResult;
  if (null != obj13[nextBlockedTrait]) {
    const intl = util.intl;
    stringResult = intl.string(tmp);
  }
  return stringResult;
}
export function isCheckpointRouteBlocked(activeRoute, arr) {
  if (activeRoute === CheckpointNavigation.CheckpointRoute.FINALIZE_CHARACTER) {
    return arr.length > 0;
  } else {
    if (tmpResult.isCheckpointCustomizationRoute(activeRoute)) {
      const tmpResult2 = CheckpointNavigation;
      const tmp4 = obj4[tmpResult2.getCheckpointRoutePresentation(tmpResult2, activeRoute).characterStage];
      let hasItem = null != tmp4;
      if (hasItem) {
        hasItem = arr.includes(obj3[tmp4]);
      }
      return hasItem;
    } else {
      return false;
    }
    tmpResult = CheckpointNavigation;
  }
}
export function getChamferedRectPoints(width, height, arg2) {
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
}
export const TRAIT_OPTION_STROKE_WIDTH = 2;
export const TRAIT_OPTION_SHAPE_POINTS = joined;
