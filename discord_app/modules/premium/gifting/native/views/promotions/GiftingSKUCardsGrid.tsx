// === Module 14408: GiftingSKUCardsGrid ===

// Module 14408 (GiftingSKUCardsGrid)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import ColorUtils from "ColorUtils" /* 5006 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5077 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import useToken from "useToken" /* 5591 */;
import Text_Text from "Text/Text" /* 5619 */;
import Pressables from "Pressables" /* 6974 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 9266 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11349 */;
import noop from "module_19" /* 19 */;

require = fn;
function GiftingSKUCardItemPreview(arg0) {
  ({ item, isSelected } = arg0);
  const tmp = closure_18();
  const currentUser = isSelected(8741).useCurrentUser();
  const items = [isSelected, currentUser];
  const memo = noop.useMemo(() => {
    let avatarSource;
    if (isSelected) {
      avatarSource = currentUser.getAvatarSource(null, true, c13);
    }
    return avatarSource;
  }, items);
  if (isNameplateRecord(item)) {
    const obj2 = { item, animate: isSelected };
    let tmp8 = closure_10(currentUser(9498), obj2);
  } else if (isAvatarDecorationRecord(item)) {
    const obj3 = { item, size, animate: isSelected, avatarSource: memo };
    tmp8 = closure_10(currentUser(9484), obj3);
  } else if (isProfileEffectRecord(item)) {
    const obj4 = { style: tmp.profileEffect, children: null };
    const obj5 = { source: null, style: null, resizeMode: "cover" };
    const obj6 = { uri: currentUser(9497) };
    obj5.source = obj6;
    obj5.style = tmp.sampleProfile;
    const items1 = [closure_10(currentUser(5712), obj5), ];
    const obj7 = { skuId: item.skuId, useThumbnail: !isSelected };
    items1[1] = closure_10(currentUser(9475), obj7);
    obj4.children = items1;
    tmp8 = closure_11(closure_4, obj4);
    const tmp19 = currentUser(5712);
  } else {
    tmp8 = null;
    if (isProfileFrameRecord(item)) {
      const obj8 = { style: tmp.profileFrame, children: null };
      const obj9 = { profileFrame: item, previewWidth, previewHeight, profileBackgroundColor: currentUser(575).colors.BACKGROUND_BASE_LOW };
      obj8.children = closure_10(currentUser(9496), obj9);
      tmp8 = closure_10(closure_4, obj8);
      const tmp12 = currentUser(9496);
    }
  }
  return tmp8;
}
function CollectibleTextFade() {
  const tmp = closure_18();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  const obj2 = ColorUtils;
  const hexToRgbaStringResult = obj2.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0.9));
  const obj4 = ColorUtils;
  const obj6 = { style: tmp.collectibleTextFade, colors: null, locations: [0, 0.4, 1], start: VerticalGradient.START, end: VerticalGradient.END };
  const items = [obj4.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0)), hexToRgbaStringResult, token];
  obj6.colors = items;
  return closure_1_10(LinearGradientDefault, obj6);
}
function GiftingSKUCardPreview(isSelected) {
  ({ item, claimed } = isSelected);
  const tmp = closure_18();
  let tmp7Result = isProfileEffectRecord(item);
  const tmp3 = isProfileFrameRecord(item);
  const items = [tmp.previewContainer, ];
  let expandedPreviewContainer = tmp7Result;
  if (!tmp7Result) {
    expandedPreviewContainer = tmp3;
  }
  if (expandedPreviewContainer) {
    expandedPreviewContainer = tmp.expandedPreviewContainer;
  }
  const obj = { style: items, children: null };
  items[1] = expandedPreviewContainer;
  const items1 = [tmp.preview, ];
  let claimed2 = claimed;
  if (claimed) {
    claimed2 = tmp.claimed;
  }
  items1[1] = claimed2;
  const items2 = [closure_1_10(React4, { style: items1, children: closure_1_10(GiftingSKUCardItemPreview, { item, isSelected: isSelected.isSelected }) }), ];
  if (claimed) {
    const obj3 = { size: "lg", style: tmp.checkmark };
    claimed = closure_1_10(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj3);
  }
  items2[1] = claimed;
  obj.children = items2;
  const children = [closure_1_11(React4, obj), ];
  if (!tmp7Result) {
    tmp7Result = tmp3;
  }
  if (tmp7Result) {
    tmp7Result = closure_1_10(CollectibleTextFade, {});
  }
  children[1] = tmp7Result;
  return closure_1_11(closure_1_12, { children });
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const isAvatarDecorationRecord = fn(7718).isAvatarDecorationRecord;
const isNameplateRecord = fn(1986).isNameplateRecord;
const isProfileEffectRecord = fn(7719).isProfileEffectRecord;
const isProfileFrameRecord = fn(7720).isProfileFrameRecord;
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let c13 = 100;
const PX_12 = nativeDefault.space.PX_12;
const previewWidth = 150 - nativeDefault.space.PX_32;
const sum = 100 + nativeDefault.space.PX_40;
const PX_122 = nativeDefault.space.PX_12;
let closure_17 = 2 * nativeDefault.space.PX_24;
let createStyles = fn(5009);
let obj = { card: { width: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16, paddingTop: PX_12, paddingBottom: nativeDefault.space.PX_16, borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderColor: nativeDefault.colors.BORDER_SUBTLE }, previewContainer: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: 100, overflow: "hidden" }, expandedPreviewContainer: { overflow: "visible" }, preview: null, selected: null, claimed: null, checkmark: null, profileEffect: null, sampleProfile: null, profileFrame: null, collectibleTextFade: null, textContainer: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.display = "flex";
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj.preview = obj4;
let obj3 = { width: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16, paddingTop: PX_12, paddingBottom: nativeDefault.space.PX_16, borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj.selected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.claimed = { opacity: 0.4 };
obj.checkmark = { position: "absolute", opacity: 1, fontWeight: "bold" };
const rect = { position: "absolute", top: -PX_12, left: 0, right: 0, overflow: "hidden", height: sum + PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.profileEffect = rect;
obj.sampleProfile = { aspectRatio: fn(9472).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
obj.profileFrame = { position: "absolute", top: 0, left: 0, right: 0, height: sum, alignItems: "center" };
const rect1 = { position: "absolute", left: 0, right: 0, bottom: 0, height: "45%", borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj.collectibleTextFade = rect1;
let obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.textContainer = { alignSelf: "stretch", paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
let closure_18 = createStyles.createStyles(obj);
let closure_22 = noop.memo(function GiftingSKUCard(rewardSkuId) {
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect: importDefault, isSelected } = rewardSkuId);
  const tmp = closure_18();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(rewardSkuId).product;
  if (null == product) {
    return null;
  } else {
    const first = product.items[0];
    const items = [tmp.card, ];
    let selected = isSelected;
    if (isSelected) {
      selected = tmp.selected;
    }
    const obj3 = { style: null, onPress: null, activeOpacity: 0.8, disabled: null, accessibilityRole: null, accessibilityState: null, children: null };
    items[1] = selected;
    obj3.style = items;
    obj3.onPress = function onPress() {
      return importDefault(rewardSkuId);
    };
    obj3.disabled = claimed;
    obj3.accessibilityRole = accessibilityRole;
    obj3.accessibilityState = accessibilityState;
    let tmp5 = null != first;
    if (tmp5) {
      const obj4 = { item: first, isSelected, claimed };
      tmp5 = closure_1_10(GiftingSKUCardPreview, obj4);
    }
    const items1 = [tmp5, ];
    const obj5 = { style: tmp.textContainer, children: null };
    const obj6 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
    const items2 = [closure_1_10(Text_Text.Text, obj6), ];
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (claimed) {
      let stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    const obj7 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: stringResult };
    items2[1] = closure_1_10(Text_Text.Text, obj7);
    obj5.children = items2;
    items1[1] = closure_1_11(React4, obj5);
    obj3.children = items1;
    return closure_1_11(Pressables.PressableOpacity, obj3);
  }
});
createStyles = fn(5009);
let closure_23 = createStyles.createStyles({ grid: { flexDirection: "column", alignSelf: "center", gap: PX_122 }, row: { flexDirection: "row", gap: PX_122 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default function GiftingSKUCardsGrid(rewardsToDisplay) {
  rewardsToDisplay = rewardsToDisplay.rewardsToDisplay;
  ({ claimableRewards: importDefault, onSelect: dependencyMap, highlightedSkuId: noop } = rewardsToDisplay);
  const tmp = closure_23();
  const row = tmp;
  let length = Math.max(1, Math.floor((useWindowDimensionsDefault().width - closure_17 + PX_122) / (150 + PX_122)));
  const items = [rewardsToDisplay, length];
  const memo = noop.useMemo(() => _modDef12.chunk(rewardsToDisplay, length), items);
  if (memo.length <= 1) {
    length = rewardsToDisplay.length;
  }
  const result = 150 * length;
  const obj = { style: null, children: null };
  const items1 = [tmp.grid, { width: result + Math.max(0, length - 1) * PX_122 }];
  obj.style = items1;
  obj.children = memo.map((arr, index) => closure_2_10(React4, {
    style: row.row,
    children: arr.map((rewardSkuId) => {
      closure_0 = rewardSkuId;
      return closure_2_10(closure_2_22, { rewardSkuId, claimed: !closure_1_1.some((item) => item === closure_0), isSelected: closure_1_3 === rewardSkuId, onSelect }, rewardSkuId);
    })
  }, index));
  return closure_10(row, obj);
};