// discord_app/modules/checkpoint/native/components/customization/TraitOptionItem.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useA11yRolesNative from "../../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05587_LinearGradient.js";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import CheckpointTraitRarity from "../../../../../../discord_common/js/shared/shared-constants/CheckpointTraitRarity.tsx";
import CheckpointCharacterAssets from "../../../CheckpointCharacterAssets.tsx";
import CheckpointCustomizationUtils from "../../../CheckpointCustomizationUtils.tsx";
import _modDef7038 from "../../../../../../_runtime/metro/07038__.js";
import inlineStyles from "../../../../../../_runtime/08031_inlineStyles.js";
import NitroWheelIcon from "../../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import get_ActivityIndicator from "../../../../../../_runtime/metro/00017__.js";
import CheckpointConstants from "../../../CheckpointConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const inlineStylesDefault = inlineStyles;

function RarityIndicator(rarity) {
  rarity = rarity.rarity;
  const tmp = closure_17();
  if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    const obj2 = { style: null, maskElement: null, pointerEvents: "none", children: null };
    const items = [,];
    ({ rarityIndicator: arr2[0], cornerNitroIcon: arr2[1] } = tmp);
    obj2.style = items;
    obj2.maskElement = closure_1_11(NitroWheelIcon.NitroWheelIcon, { size: "xxs" });
    const obj3 = { colors, start, end, style: tmp.cornerNitroIconGradient };
    obj2.children = closure_1_11(LinearGradientDefault, obj3);
    let tmp4Result = closure_1_11(_modDef7038, obj2);
  } else {
    const items1 = [, ,];
    ({ rarityIndicator: arr[0], cornerFlag: arr[1] } = tmp);
    let tmp7 = React6[rarity];
    if (tmp7 == null) {
      tmp7 = React5;
    }
    const obj = { style: null };
    const obj4 = { borderTopColor: tmp7 };
    items1[2] = obj4;
    obj.style = items1;
    tmp4Result = closure_1_11(React4, obj);
  }
  return tmp4Result;
}
function TraitOptionImage(traitOption) {
  traitOption = traitOption.traitOption;
  const tmp = closure_17();
  if (obj.isNoneOption(traitOption)) {
    const size = { width: PX_32, height: PX_32, pointerEvents: "none", children: null };
    const obj2 = { x1: "0", y1: "0", x2: PX_32, y2: PX_32, stroke, strokeWidth: 1, strokeLinecap: "round" };
    size.children = closure_1_11(inlineStyles.Line, obj2);
    return closure_1_11(inlineStylesDefault, size);
  } else {
    const obj3 = { source: null, style: null, resizeMode: "contain" };
    const obj4 = { uri: traitOption.asset };
    obj3.source = obj4;
    obj3.style = tmp.assetImage;
    const tmp4Result = closure_1_11(FastImageDefault, obj3);
    let tmp4Result2 = tmp4Result;
    if (traitOption.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED) {
      const obj5 = { style: tmp.assetImageLocked, children: tmp4Result };
      tmp4Result2 = closure_1_11(React4, obj5);
    }
    return tmp4Result2;
  }
  obj = CheckpointCustomizationUtils;
}
function AssetShape(arg0) {
  ({ isNoneOption, isSelected } = arg0);
  const size = {
    width: TRAIT_OPTION_WIDTH,
    height: TRAIT_OPTION_HEIGHT,
    style: closure_17().assetShape,
    pointerEvents: "none",
    children: null,
  };
  let tmp5 = !isNoneOption;
  const tmp = closure_17();
  if (!isNoneOption) {
    const obj = { children: null };
    const obj2 = { id: checkpointTraitGradient, x1: "0", y1: "1", x2: "0", y2: "0", children: null };
    const obj3 = { offset: "0", stopColor, stopOpacity: 0.04 };
    const items = [closure_1_11(inlineStyles.Stop, obj3)];
    const obj4 = { offset: "1", stopColor, stopOpacity: 0.04 };
    items[1] = closure_1_11(inlineStyles.Stop, obj4);
    obj2.children = items;
    obj.children = closure_1_12(inlineStyles.LinearGradient, obj2);
    tmp5 = closure_1_11(inlineStyles.Defs, obj);
  }
  const items1 = [tmp5, ,];
  const obj5 = {
    points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS,
    fill: "transparent",
    stroke: isSelected ? stopColor : stopColor,
    strokeWidth: null,
  };
  let num = 1;
  if (isSelected) {
    num = CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH;
  }
  obj5.strokeWidth = num;
  items1[1] = closure_1_11(inlineStyles.Polygon, obj5);
  let tmp11Result = !isNoneOption;
  if (!isNoneOption) {
    const obj6 = { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: null };
    const _HermesInternal = HermesInternal;
    obj6.fill = "url(#" + checkpointTraitGradient + ")";
    tmp11Result = closure_1_11(inlineStyles.Polygon, obj6);
  }
  items1[2] = tmp11Result;
  size.children = items1;
  return closure_1_12(inlineStylesDefault, size);
}
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
({
  CHECKPOINT_DARK_CYAN: hasOwnProperty,
  CHECKPOINT_NITRO_GRADIENT_COLORS: metroRequire,
  CHECKPOINT_PRIMARY: closure_7,
  CHECKPOINT_RARITY_TO_COLOR: closure_8,
  TRAIT_OPTION_HEIGHT,
} = CheckpointConstants);
const TRAIT_OPTION_WIDTH = CheckpointConstants.TRAIT_OPTION_WIDTH;
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const checkpointTraitGradient = "checkpointTraitGradient";
const PX_32 = nativeDefault.space.PX_32;
const PX_4 = nativeDefault.space.PX_4;
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
let obj = {
  assetItem: { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT, alignItems: "center", justifyContent: "center" },
  assetItemLocked: { opacity: 0.4 },
  assetShape: { position: "absolute", top: 0, left: 0 },
  rarityIndicator: { position: "absolute", top: PX_4, left: PX_4 },
  cornerFlag: { width: 0, height: 0, borderTopWidth: 12, borderRightWidth: 12, borderRightColor: "transparent" },
  cornerNitroIcon: { width: 12, height: 12 },
  cornerNitroIconGradient: { width: 12, height: 12 },
  assetImageLocked: null,
  assetImage: { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT },
};
let obj2 = { filter: null };
let items = [{ grayscale: 1 }];
obj2.filter = items;
obj.assetImageLocked = obj2;
let closure_17 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionItem.tsx");

export default function TraitOptionItem(disabled) {
  ({ traitOption, showSelectedBorder } = disabled);
  ({ accessibilityLabel, isSelected } = disabled);
  if (showSelectedBorder === undefined) {
    showSelectedBorder = false;
  }
  ({ hideCornerFlag, onPress } = disabled);
  if (hideCornerFlag === undefined) {
    hideCornerFlag = false;
  }
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_17();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: isSelected, disabled: flag });
  const obj2 = {
    onPress,
    disabled: flag,
    style: null,
    accessibilityRole: null,
    accessibilityLabel: null,
    accessibilityState: null,
    children: null,
  };
  const items = [tmp.assetItem];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  items[1] =
    (traitOption.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED || flag) &&
    tmp.assetItemLocked;
  obj2.style = items;
  obj2.accessibilityRole = accessibilityRole;
  obj2.accessibilityLabel = accessibilityLabel;
  obj2.accessibilityState = accessibilityState;
  const obj3 = { isNoneOption: null, isSelected: null };
  const tmp7 =
    (traitOption.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED || flag) &&
    tmp.assetItemLocked;
  obj3.isNoneOption = CheckpointCustomizationUtils.isNoneOption(traitOption);
  obj3.isSelected = showSelectedBorder;
  const items1 = [closure_1_11(AssetShape, obj3), ,];
  let tmp8Result = !hideCornerFlag;
  if (!hideCornerFlag) {
    tmp8Result = null != traitOption.rarity;
  }
  if (tmp8Result) {
    const obj4 = { rarity: traitOption.rarity };
    tmp8Result = closure_1_11(RarityIndicator, obj4);
  }
  items1[1] = tmp8Result;
  items1[2] = closure_1_11(TraitOptionImage, { traitOption });
  obj2.children = items1;
  return closure_1_12(React3, obj2);
}
