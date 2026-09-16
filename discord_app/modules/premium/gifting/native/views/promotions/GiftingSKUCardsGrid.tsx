// === Module 11194: GiftingSKUCardsGrid ===

// Module 11194 (GiftingSKUCardsGrid)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4356 */;
import Text_Text from "Text/Text" /* 4634 */;
import Pressables from "Pressables" /* 5208 */;
import useCurrentUser from "useCurrentUser" /* 8307 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 8936 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8951 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 8965 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11195 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7657).isAvatarDecorationRecord;
const isNameplateRecord = fn(1888).isNameplateRecord;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4638);
let obj = { card: null, overlayContainer: null, selected: null, claimed: null, checkmark: null, checkmarkContainer: null, textContainer: null };
let size = { height: 178, width: 150, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderColor: nativeDefault.colors.BORDER_SUBTLE, margin: nativeDefault.space.PX_4 };
obj.card = size;
obj.overlayContainer = { position: "absolute", top: 10, zIndex: 2, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "75%" };
obj.selected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.claimed = { opacity: 0.4 };
obj.checkmark = { position: "absolute", opacity: 1, fontWeight: "bold" };
obj.checkmarkContainer = { position: "absolute", top: 10, zIndex: 3, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "75%" };
const rect = { position: "absolute", bottom: 20, left: 0, right: 0, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
obj.textContainer = rect;
let closure_9 = createStyles.createStyles(obj);
let closure_10 = noop.memo((rewardSkuId) => {
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect: importDefault, isSelected } = rewardSkuId);
  const tmp = closure_9();
  const currentUser = useCurrentUser.useCurrentUser();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(rewardSkuId).product;
  const items = [isSelected, currentUser];
  if (null == product) {
    return null;
  } else {
    const first = product.items[0];
    const items1 = [tmp.card, ];
    let selected = isSelected;
    if (isSelected) {
      selected = tmp.selected;
    }
    const obj4 = { style: null, onPress: null, activeOpacity: 0.8, disabled: null, accessibilityRole: null, accessibilityState: null, children: null };
    items1[1] = selected;
    obj4.style = items1;
    obj4.onPress = function onPress() {
      return importDefault(rewardSkuId);
    };
    obj4.disabled = claimed;
    obj4.accessibilityRole = accessibilityRole;
    obj4.accessibilityState = accessibilityState;
    const items2 = [tmp.overlayContainer, ];
    let claimed2 = claimed;
    if (claimed) {
      claimed2 = tmp.claimed;
    }
    const obj5 = { style: null, children: null };
    items2[1] = claimed2;
    obj5.style = items2;
    if (isNameplateRecord(first)) {
      const obj6 = { item: first, animate: isSelected };
      let tmp7Result = React5(NameplateCardPreviewDefault, obj6);
    } else if (isAvatarDecorationRecord(first)) {
      const obj7 = { item: first, size: 100, animate: isSelected, avatarSource: tmp6 };
      tmp7Result = React5(AvatarDecorationSampleV2Default, obj7);
    }
    obj5.children = tmp7Result;
    const items3 = [React5(View, obj5), , ];
    let tmp7Result2 = claimed;
    if (claimed) {
      const obj8 = { style: tmp.checkmarkContainer, children: null };
      const obj9 = { size: "lg", style: tmp.checkmark };
      obj8.children = React5(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj9);
      tmp7Result2 = React5(View, obj8);
    }
    items3[1] = tmp7Result2;
    const obj10 = { style: tmp.textContainer, children: null };
    const obj11 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
    const items4 = [React5(Text_Text.Text, obj11), ];
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (claimed) {
      let stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    const obj12 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: stringResult };
    items4[1] = React5(Text_Text.Text, obj12);
    obj10.children = items4;
    items3[2] = React6(View, obj10);
    obj4.children = items3;
    return React6(Pressables.PressableOpacity, obj4);
  }
});
createStyles = fn(4638);
let closure_11 = createStyles.createStyles({ grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" } });
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default function GiftingSKUCardsGrid(arg0) {
  ({ rewardsToDisplay, claimableRewards: require, onSelect: importDefault, highlightedSkuId: dependencyMap } = arg0);
  return closure_7(View, {
    style: closure_11().grid,
    children: rewardsToDisplay.map((rewardSkuId) => {
      closure_0 = rewardSkuId;
      return React5(closure_10, { rewardSkuId, claimed: !require.some((item) => item === closure_0), isSelected: dependencyMap === rewardSkuId, onSelect }, rewardSkuId);
    })
  });
};