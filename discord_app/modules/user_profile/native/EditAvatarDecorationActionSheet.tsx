// discord_app/modules/user_profile/native/EditAvatarDecorationActionSheet.tsx
import useShopProductItems from "../../collectibles/hooks/useShopProductItems.tsx";
import EditAvatarDecorationSection from "../../collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesPurchaseStore from "../../collectibles/CollectiblesPurchaseStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

require = fn;
function EditAvatarDecorationInner(pendingAvatarSrc) {
  const user = pendingAvatarSrc.user;
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = pendingAvatarSrc);
  const guildId = pendingAvatarSrc.guildId;
  let flag = pendingAvatarSrc.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const getOrFetchCollectiblesCategoriesAndPurchases = user(
    guildId[21],
  ).useGetOrFetchCollectiblesCategoriesAndPurchases();
  const obj = user(guildId[21]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = user(guildId[22]).useStateFromStores(items, () => isFetching.isFetching);
  const obj2 = user(guildId[22]);
  const tmp6 = setSelectedAvatarDecoration(guildId[23])();
  const shouldPinCollectiblesEditPreview = user(guildId[24]).useShouldPinCollectiblesEditPreview();
  const obj3 = user(guildId[24]);
  const items1 = [GuildMemberStore];
  const stateFromStores1 = user(guildId[22]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj4 = user(guildId[22]);
  const obj6 = { pendingValue: selectedAvatarDecoration, userValue: null, guildValue: null, guildId: null };
  let avatarDecoration;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  obj6.userValue = avatarDecoration;
  let avatarDecoration1;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  obj6.guildValue = avatarDecoration1;
  obj6.guildId = guildId;
  const profilePreviewValue = user(guildId[25]).getProfilePreviewValue(obj6);
  const items2 = [setSelectedAvatarDecoration, guildId, flag];
  let skuId;
  const callback = noop.useCallback((arg0) => {
    ({ items, size, selectedSkuId } = arg0);
    return closure_2_10(EditAvatarDecorationSection.EditAvatarDecorationRow, {
      items,
      size,
      selectedSkuId,
      setSelectedAvatarDecoration,
      guildId,
      isTryItOut: flag,
    });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [
    closure_10(AvatarDecorationSectionPreview, {
      previewSkuId: skuId,
      user,
      guildId,
      pendingAvatarSrc: pendingAvatarSrc.pendingAvatarSrc,
    }),
  ];
  const obj7 = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj5 = user(guildId[25]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  const obj8 = { children: null };
  obj7.previewSkuId = skuId1;
  const intl = tmp(tmp2[19]).intl;
  obj7.nitroJoinCTA = intl.string(user(guildId[19]).t.FyBDiY);
  const intl2 = tmp(tmp2[19]).intl;
  obj7.nitroUpgradeCTA = intl2.string(user(guildId[19]).t.e1UiOa);
  items3[1] = closure_10(setSelectedAvatarDecoration(guildId[27]), obj7);
  obj8.children = items3;
  const tmp13Result = closure_11(closure_12, obj8);
  let tmp21 = null;
  if (shouldPinCollectiblesEditPreview) {
    tmp21 = tmp13Result;
  }
  const items4 = [tmp21];
  const obj9 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null, ListHeaderComponent: null };
  let skuId2;
  if (selectedAvatarDecoration != null) {
    skuId2 = selectedAvatarDecoration.skuId;
  }
  obj9.selectedSkuId = skuId2;
  obj9.renderRow = callback;
  obj9.isFetching = stateFromStores;
  let tmp23 = null;
  if (!shouldPinCollectiblesEditPreview) {
    tmp23 = tmp13Result;
  }
  const obj10 = { children: null };
  obj9.ListHeaderComponent = tmp23;
  items4[1] = closure_10(user(guildId[28]).EditCollectiblesPickerList, obj9);
  obj10.children = items4;
  return closure_11(closure_12, obj10);
}
function AvatarDecorationSectionPreview(previewSkuId) {
  ({ user, guildId, pendingAvatarSrc } = previewSkuId);
  let purchase;
  const tmp4 = purchase(8736)(previewSkuId.previewSkuId);
  const product = tmp4.product;
  _require = product;
  purchase = tmp4.purchase;
  const items = [purchase, product];
  const memo = noop.useMemo(() => {
    let first;
    if (_undefined != null) {
      first = _undefined.items[0];
    }
    if (first == null) {
      let first1;
      if (purchase != null) {
        first1 = purchase.items[0];
      }
      first = first1;
    }
    let tmp3 = null;
    if (isAvatarDecorationRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  const obj = {
    style: closure_13().avatarDisplayContainer,
    accessibilityLabel: null,
    accessibilityRole: "image",
    accessible: true,
    children: null,
  };
  if (null != memo) {
    const intl2 = require("util").intl;
    const obj2 = { a11y_text: memo.label };
    let formatToPlainStringResult = intl2.formatToPlainString(require("util").t.Do2lxE, obj2);
    let tmp10 = _require;
  } else {
    const intl = require("util").intl;
    formatToPlainStringResult = intl.string(require("util").t["7hRBmC"]);
    tmp10 = _require;
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const obj3 = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo, size: null };
  const tmp = closure_13();
  obj3.size = tmp10(1188).AvatarSizes.EDIT_AVATAR_DECORATION;
  const items1 = [
    closure_10(purchase(8821), obj3),
    closure_10(purchase(15039), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo }),
  ];
  obj.children = items1;
  return closure_11(View, obj);
}
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7718).isAvatarDecorationRecord;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5009);
let closure_13 = createStyles.createStyles({
  container: { flex: 1 },
  avatarDisplayContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditAvatarDecorationActionSheet.tsx");

export default function EditAvatarDecorationActionSheet(arg0) {
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  let selectedAvatarDecoration;
  const tmp4 = selectedAvatarDecoration(8722)({ analyticsLocations, isTryItOut, guildId });
  const setPendingAvatarDecoration = tmp4.setPendingAvatarDecoration;
  const tmp = closure_13();
  const pendingAvatarSrc = setPendingAvatarDecoration(8732).getPendingAvatarSrc({
    userId: user.id,
    image: tmp4.pendingAvatar,
  });
  const tmp7 = _slicedToArray(noop.useState(currentAvatarDecoration), 2);
  selectedAvatarDecoration = tmp7[0];
  let obj = setPendingAvatarDecoration(8732);
  const obj2 = { userId: user.id, image: tmp4.pendingAvatar };
  const obj4 = setPendingAvatarDecoration(8733);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  const analyticsLocations2 = selectedAvatarDecoration(7320)(
    analyticsLocations,
    tmp2(7345).EDIT_AVATAR_DECORATION_SHEET,
  ).analyticsLocations;
  const items = [selectedAvatarDecoration, setPendingAvatarDecoration];
  const callback = noop.useCallback(() => {
    const obj = first(1253);
    obj.track(constants.OPEN_POPOUT, { type: first(7345).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true });
  }, []);
  const callback1 = noop.useCallback((arg0) => {
    let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstAvatarDecoration");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    setPendingAvatarDecoration(purchasedItem);
  }, items);
  const obj5 = { value: analyticsLocations2, children: null };
  const obj6 = {
    scrollable: true,
    ref: obj4.useBottomSheetRef().bottomSheetRef,
    onExpand: callback,
    startExpanded: true,
    header: null,
    children: null,
  };
  const obj7 = { title: null };
  const intl = tmp5(1114).intl;
  obj7.title = intl.string(setPendingAvatarDecoration(1114).t.HykynS);
  obj6.header = closure_10(setPendingAvatarDecoration(7315).BottomSheetTitleHeader, obj7);
  const tmp9 = selectedAvatarDecoration(7320);
  const items1 = [
    closure_10(View, {
      style: tmp.container,
      children: closure_10(EditAvatarDecorationInner, {
        user,
        guildId,
        pendingAvatarSrc,
        selectedAvatarDecoration,
        setSelectedAvatarDecoration: tmp7[1],
        isTryItOut,
      }),
    }),
  ];
  const obj9 = {
    user,
    currentSkuId: null,
    selectedSkuId: null,
    isTryItOut: null,
    onApply: null,
    analyticsLocations: null,
    analyticsSource: null,
  };
  let skuId;
  const obj8 = {
    style: tmp.container,
    children: closure_10(EditAvatarDecorationInner, {
      user,
      guildId,
      pendingAvatarSrc,
      selectedAvatarDecoration,
      setSelectedAvatarDecoration: tmp7[1],
      isTryItOut,
    }),
  };
  if (currentAvatarDecoration != null) {
    skuId = currentAvatarDecoration.skuId;
  }
  obj9.currentSkuId = skuId;
  let skuId1;
  if (selectedAvatarDecoration != null) {
    skuId1 = selectedAvatarDecoration.skuId;
  }
  const obj10 = { children: null };
  obj9.selectedSkuId = skuId1;
  obj9.isTryItOut = isTryItOut;
  obj9.onApply = callback1;
  obj9.analyticsLocations = analyticsLocations2;
  obj9.analyticsSource = selectedAvatarDecoration(7345).EDIT_AVATAR_DECORATION_SHEET;
  items1[1] = closure_10(selectedAvatarDecoration(8735), obj9);
  obj6.children = items1;
  obj5.children = closure_11(setPendingAvatarDecoration(5267).BottomSheet, obj6);
  obj10.children = closure_10(setPendingAvatarDecoration(7320).AnalyticsLocationProvider, obj5);
  return closure_10(setPendingAvatarDecoration(5075).ThemeContextProvider, obj10);
}
