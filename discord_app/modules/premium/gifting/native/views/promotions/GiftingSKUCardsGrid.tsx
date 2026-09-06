// discord_app/modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import useA11yRolesNative from "../../../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import useCurrentUser from "../../../../../collectibles/hooks/useCurrentUser.tsx";
import AvatarDecorationSampleV2Default from "../../../../../collectibles/native/AvatarDecorationSampleV2.tsx";
import NameplateCardPreviewDefault from "../../../../../collectibles/nameplates/native/NameplateCardPreview.tsx";
import useFetchCollectiblesProduct from "../../../../../collectibles/hooks/useFetchCollectiblesProduct.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7547).isAvatarDecorationRecord;
const isNameplateRecord = fn(1887).isNameplateRecord;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4560);
let obj = {
  card: null,
  overlayContainer: null,
  selected: null,
  claimed: null,
  checkmark: null,
  checkmarkContainer: null,
  textContainer: null,
};
let size = {
  height: 178,
  width: 150,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  margin: nativeDefault.space.PX_4,
};
obj.card = size;
obj.overlayContainer = {
  position: "absolute",
  top: 10,
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "75%",
};
obj = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.selected = obj;
obj.claimed = { opacity: 0.4 };
obj.checkmark = { position: "absolute", opacity: 1, fontWeight: "bold" };
obj.checkmarkContainer = {
  position: "absolute",
  top: 10,
  zIndex: 3,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "75%",
};
const rect = {
  position: "absolute",
  bottom: 20,
  left: 0,
  right: 0,
  paddingHorizontal: nativeDefault.space.PX_16,
  alignItems: "flex-start",
};
obj.textContainer = rect;
let closure_9 = createStyles.createStyles(obj);
let closure_10 = noop.memo((rewardSkuId) => {
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect: importDefault, isSelected } = rewardSkuId);
  const tmp = closure_9();
  let obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  let obj1 = useA11yRolesNative;
  const radioA11yNative = obj1.useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  let obj2 = useFetchCollectiblesProduct;
  const product = obj2.useFetchCollectiblesProduct(rewardSkuId).product;
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
    obj = {
      style: null,
      onPress: null,
      activeOpacity: 0.8,
      disabled: null,
      accessibilityRole: null,
      accessibilityState: null,
      children: null,
    };
    items1[1] = selected;
    obj.style = items1;
    obj.onPress = function onPress() {
      return importDefault(rewardSkuId);
    };
    obj.disabled = claimed;
    obj.accessibilityRole = accessibilityRole;
    obj.accessibilityState = accessibilityState;
    const items2 = [tmp.overlayContainer];
    let claimed2 = claimed;
    if (claimed) {
      claimed2 = tmp.claimed;
    }
    obj = { style: null, children: null };
    items2[1] = claimed2;
    obj.style = items2;
    if (isNameplateRecord(first)) {
      obj1 = { item: first, animate: isSelected };
      let tmp7Result = tmp7(NameplateCardPreviewDefault, obj1);
    } else if (isAvatarDecorationRecord(first)) {
      obj2 = { item: first, size: 100, animate: isSelected, avatarSource: tmp6 };
      tmp7Result = tmp7(AvatarDecorationSampleV2Default, obj2);
    }
    obj.children = tmp7Result;
    const items3 = [React5(View, obj), ,];
    tmp7Result = claimed;
    if (claimed) {
      const obj3 = { style: tmp.checkmarkContainer, children: null };
      const obj4 = { size: "lg", style: tmp.checkmark };
      obj3.children = tmp7(tmp2(8795).CheckmarkLargeBoldIcon, obj4);
      tmp7Result = tmp7(tmp8, obj3);
    }
    items3[1] = tmp7Result;
    const obj5 = { style: tmp.textContainer, children: null };
    const obj6 = {
      variant: "heading-sm/bold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      accessibilityRole: "header",
      children: product.name,
    };
    const items4 = [React5(tmp2(4556).Text, obj6)];
    const intl = tmp2(1114).intl;
    const string = intl.string;
    const t = tmp2(1114).t;
    if (claimed) {
      let stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    const obj7 = {
      variant: "text-xs/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      children: stringResult,
    };
    items4[1] = React5(tmp2(4556).Text, obj7);
    obj5.children = items4;
    items3[2] = React6(View, obj5);
    obj.children = items3;
    return React6(tmp2(5123).PressableOpacity, obj);
  }
});
createStyles = fn(4560);
let closure_11 = createStyles.createStyles({
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
});
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default function GiftingSKUCardsGrid(arg0) {
  ({ rewardsToDisplay, claimableRewards: require, onSelect: importDefault, highlightedSkuId: dependencyMap } = arg0);
  return closure_7(View, {
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
