// === Module 14422: TraitOptionItem ===

// Module 14422 (TraitOptionItem)
import nativeDefault from "native" /* 575 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5315 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import FastImageDefault from "FastImage" /* 5957 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6315 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 6360 */;
import _modDef7467 from "module_7467" /* 7467 */;
import inlineStyles from "inlineStyles" /* 8197 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9369 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import jsxProd from "jsxProd" /* 21 */;
import CheckpointCustomizationUtils_mod from "CheckpointCustomizationUtils" /* 6681 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

function RarityIndicator(rarity) {
  rarity = rarity.rarity;
  const tmp = closure_18();
  if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    obj2 = { style: null, maskElement: null, pointerEvents: "none", children: null };
    items = [, ];
    ({ rarityIndicator: arr2[0], cornerNitroIcon: arr2[1] } = tmp);
    obj2.style = items;
    obj2.maskElement = React6(NitroWheelIcon.NitroWheelIcon, { size: "xxs" });
    const obj3 = { colors, start, end, style: tmp.cornerNitroIconGradient };
    obj2.children = React6(LinearGradientDefault, obj3);
    let tmp4Result = React6(_modDef7467, obj2);
  } else {
    const items1 = [, , ];
    ({ rarityIndicator: arr[0], cornerFlag: arr[1] } = tmp);
    let tmp7 = React5[rarity];
    if (tmp7 == null) {
      tmp7 = metroImportDefault;
    }
    const obj = { style: null };
    const obj4 = { borderTopColor: tmp7 };
    items1[2] = obj4;
    obj.style = items1;
    tmp4Result = React6(React4, obj);
  }
  return tmp4Result;
}
function TraitOptionImage(arg0) {
  ({ traitOption, size } = arg0);
  const tmp = closure_18();
  if (obj.isNoneOption(traitOption)) {
    const size1 = { width: PX_32, height: PX_32, pointerEvents: "none", children: null };
    obj2 = { x1: "0", y1: "0", x2: PX_32, y2: PX_32, stroke, strokeWidth: 1, strokeLinecap: "round" };
    size1.children = React6(inlineStyles.Line, obj2);
    return React6(inlineStylesDefault, size1);
  } else {
    ({ asset, status } = traitOption);
    if (status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED) {
      const obj3 = { style: tmp.assetImageLocked, children: null };
      const obj4 = { source: null, style: null, resizeMode: "contain" };
      const obj5 = { uri: asset };
      obj4.source = obj5;
      obj4.style = dependencyMap[size];
      obj3.children = React6(FastImageDefault, obj4);
      let tmp7 = React6(React4, obj3);
    } else {
      const obj6 = { source: null, style: null, resizeMode: "contain" };
      const obj7 = { uri: asset };
      obj6.source = obj7;
      obj6.style = dependencyMap[size];
      tmp7 = React6(FastImageDefault, obj6);
    }
    return tmp7;
  }
  obj = CheckpointCustomizationUtils;
}
function AssetShape(arg0) {
  ({ size, isNoneOption, isSelected } = arg0);
  ({ width, height } = obj[size]);
  const size1 = { width, height, style: closure_18().assetShape, pointerEvents: "none", children: null };
  let tmp6 = !isNoneOption;
  const tmp = closure_18();
  if (!isNoneOption) {
    obj = { children: null };
    obj2 = { id: checkpointTraitGradient, x1: "0", y1: "1", x2: "0", y2: "0", children: null };
    const obj3 = { offset: "0", stopColor, stopOpacity: 0.04 };
    items = [React6(inlineStyles.Stop, obj3), ];
    const obj4 = { offset: "1", stopColor, stopOpacity: 0.04 };
    items[1] = React6(inlineStyles.Stop, obj4);
    obj2.children = items;
    obj.children = closure_1_10(inlineStyles.LinearGradient, obj2);
    tmp6 = React6(inlineStyles.Defs, obj);
  }
  const items1 = [tmp6, , ];
  const obj5 = { points: obj2[size], fill: "transparent", stroke: isSelected ? stopColor : stopColor, strokeWidth: null };
  let num = 1;
  if (isSelected) {
    num = CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH;
  }
  obj5.strokeWidth = num;
  items1[1] = React6(inlineStyles.Polygon, obj5);
  let tmp12Result = !isNoneOption;
  if (!isNoneOption) {
    const obj6 = { points: tmp2, fill: null };
    const _HermesInternal = HermesInternal;
    obj6.fill = "url(#" + checkpointTraitGradient + ")";
    tmp12Result = React6(inlineStyles.Polygon, obj6);
  }
  items1[2] = tmp12Result;
  size1.children = items1;
  return closure_1_10(inlineStylesDefault, size1);
}
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_NITRO_GRADIENT_COLORS: closure_6, CHECKPOINT_PRIMARY: metroImportDefault, CHECKPOINT_RARITY_TO_COLOR: closure_8 } = CheckpointConstants);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const checkpointTraitGradient = "checkpointTraitGradient";
const PX_32 = nativeDefault.space.PX_32;
const PX_4 = nativeDefault.space.PX_4;
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
const TRAIT_OPTION_SIZE_TO_DIMENSIONS = { sm: { width: 56, height: 64 }, md: { width: 72, height: 80 } };
const dependencyMap = { sm: { width: 48, height: 56 }, md: { width: 64, height: 72 } };
let obj2 = { sm: null, md: null };
let CheckpointCustomizationUtils = CheckpointCustomizationUtils_mod;
obj2.sm = CheckpointCustomizationUtils.getTraitOptionShapePoints(TRAIT_OPTION_SIZE_TO_DIMENSIONS.sm.width, TRAIT_OPTION_SIZE_TO_DIMENSIONS.sm.height);
let CheckpointCustomizationUtils = CheckpointCustomizationUtils_mod;
obj2.md = CheckpointCustomizationUtils.getTraitOptionShapePoints(TRAIT_OPTION_SIZE_TO_DIMENSIONS.md.width, TRAIT_OPTION_SIZE_TO_DIMENSIONS.md.height);
let obj3 = { assetItem: { alignItems: "center", justifyContent: "center" }, assetItemLocked: { opacity: 0.4 }, assetShape: { position: "absolute", top: 0, left: 0 }, rarityIndicator: { position: "absolute", top: PX_4, left: PX_4 }, cornerFlag: { width: 0, height: 0, borderTopWidth: 12, borderRightWidth: 12, borderRightColor: "transparent" }, cornerNitroIcon: { width: 12, height: 12 }, cornerNitroIconGradient: { width: 12, height: 12 }, assetImageLocked: null };
let obj4 = { filter: null };
let items = [{ grayscale: 1 }];
obj4.filter = items;
obj3.assetImageLocked = obj4;
let closure_18 = createStyles.createStyles(obj3);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionItem.tsx");

export default function TraitOptionItem(disabled) {
  ({ traitOption, size, showSelectedBorder } = disabled);
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
  const tmp = closure_18();
  const obj = useA11yRolesNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected: isSelected, disabled: flag });
  obj2 = { onPress, disabled: flag, style: null, accessibilityRole: null, accessibilityLabel: null, accessibilityState: null, children: null };
  items = [tmp.assetItem, obj[size], ];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  items[2] = (traitOption.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED || flag) && tmp.assetItemLocked;
  obj2.style = items;
  obj2.accessibilityRole = accessibilityRole;
  obj2.accessibilityLabel = accessibilityLabel;
  obj2.accessibilityState = accessibilityState;
  const obj3 = { size, isNoneOption: null, isSelected: null };
  const tmp7 = (traitOption.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED || flag) && tmp.assetItemLocked;
  obj3.isNoneOption = CheckpointCustomizationUtils.isNoneOption(traitOption);
  obj3.isSelected = showSelectedBorder;
  const items1 = [React6(AssetShape, obj3), , ];
  let tmp8Result = !hideCornerFlag;
  if (!hideCornerFlag) {
    tmp8Result = null != traitOption.rarity;
  }
  if (tmp8Result) {
    const obj4 = { rarity: traitOption.rarity };
    tmp8Result = React6(RarityIndicator, obj4);
  }
  items1[1] = tmp8Result;
  items1[2] = React6(TraitOptionImage, { traitOption, size });
  obj2.children = items1;
  return closure_1_10(React3, obj2);
};
export { TRAIT_OPTION_SIZE_TO_DIMENSIONS };
export const TRAIT_OPTION_SIZE_TO_SHAPE_POINTS = obj2;