// discord_app/modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import useA11yRolesNative from "../../../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../../design/void/Pressables/native/Pressables.tsx";
import useCurrentUser from "../../../../../collectibles/hooks/useCurrentUser.tsx";
import CheckmarkLargeBoldIcon from "../../../../../../design/components/Icon/native/redesign/generated/CheckmarkLargeBoldIcon.tsx";
import AvatarDecorationSampleV2Default from "../../../../../collectibles/native/AvatarDecorationSampleV2.tsx";
import NameplateCardPreviewDefault from "../../../../../collectibles/nameplates/native/NameplateCardPreview.tsx";
import useFetchCollectiblesProduct from "../../../../../collectibles/hooks/useFetchCollectiblesProduct.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const isAvatarDecorationRecord = fn(6967).isAvatarDecorationRecord;
const isNameplateRecord = fn(1972).isNameplateRecord;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4836);
let obj = {
  card: {
    width: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_16,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.sm,
    overflow: "hidden",
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    margin: nativeDefault.space.PX_4,
  },
  previewContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
    overflow: "hidden",
  },
  preview: null,
  selected: null,
  claimed: null,
  checkmark: null,
  textContainer: null,
};
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.display = "flex";
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj.preview = obj4;
let obj3 = {
  width: 150,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_16,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  margin: nativeDefault.space.PX_4,
};
obj.selected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.claimed = { opacity: 0.4 };
obj.checkmark = { position: "absolute", opacity: 1, fontWeight: "bold" };
let obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.textContainer = { alignSelf: "stretch", paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
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
    const items1 = [tmp.card];
    let selected = isSelected;
    if (isSelected) {
      selected = tmp.selected;
    }
    const obj4 = {
      style: null,
      onPress: null,
      activeOpacity: 0.8,
      disabled: null,
      accessibilityRole: null,
      accessibilityState: null,
      children: null,
    };
    items1[1] = selected;
    obj4.style = items1;
    obj4.onPress = function onPress() {
      return importDefault(rewardSkuId);
    };
    obj4.disabled = claimed;
    obj4.accessibilityRole = accessibilityRole;
    obj4.accessibilityState = accessibilityState;
    const obj5 = { style: tmp.previewContainer, children: null };
    const items2 = [tmp.preview];
    let claimed2 = claimed;
    if (claimed) {
      claimed2 = tmp.claimed;
    }
    const obj6 = { style: null, children: null };
    items2[1] = claimed2;
    obj6.style = items2;
    if (isNameplateRecord(first)) {
      const obj7 = { item: first, animate: isSelected };
      let tmp8Result = React5(NameplateCardPreviewDefault, obj7);
    } else if (isAvatarDecorationRecord(first)) {
      const obj8 = { item: first, size: 100, animate: isSelected, avatarSource: tmp6 };
      tmp8Result = React5(AvatarDecorationSampleV2Default, obj8);
    }
    obj6.children = tmp8Result;
    const items3 = [React5(React4, obj6)];
    let tmp8Result2 = claimed;
    if (claimed) {
      const obj9 = { size: "lg", style: tmp.checkmark };
      tmp8Result2 = React5(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj9);
    }
    items3[1] = tmp8Result2;
    obj5.children = items3;
    const items4 = [React6(React4, obj5)];
    const obj10 = { style: tmp.textContainer, children: null };
    const obj11 = {
      variant: "heading-sm/bold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      accessibilityRole: "header",
      children: product.name,
    };
    const items5 = [React5(Text_Text.Text, obj11)];
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (claimed) {
      let stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    const obj12 = {
      variant: "text-xs/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      children: stringResult,
    };
    items5[1] = React5(Text_Text.Text, obj12);
    obj10.children = items5;
    items4[1] = React6(React4, obj10);
    obj4.children = items4;
    return React6(Pressables.PressableOpacity, obj4);
  }
});
createStyles = fn(4836);
let closure_11 = createStyles.createStyles({
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default function GiftingSKUCardsGrid(arg0) {
  ({ rewardsToDisplay, claimableRewards: require, onSelect: importDefault, highlightedSkuId: dependencyMap } = arg0);
  return closure_7(closure_4, {
    style: closure_11().grid,
    children: rewardsToDisplay.map((rewardSkuId) => {
      closure_0 = rewardSkuId;
      return React5(
        closure_10,
        {
          rewardSkuId,
          claimed: !require.some((item) => item === closure_0),
          isSelected: dependencyMap === rewardSkuId,
          onSelect,
        },
        rewardSkuId,
      );
    }),
  });
}
