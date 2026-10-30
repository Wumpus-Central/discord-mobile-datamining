// discord_app/modules/user_profile/native/EditNameplateActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserProfileSettingsActionCreators from "../UserProfileSettingsActionCreators.tsx";
import useShopProductItems from "../../collectibles/hooks/useShopProductItems.tsx";
import EditNameplateSection from "../../collectibles/nameplates/native/EditNameplateSection.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesPurchaseStore from "../../collectibles/CollectiblesPurchaseStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

require = fn;
function EditNameplateInner(user) {
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  const guildId = user.guildId;
  const getOrFetchCollectiblesCategoriesAndPurchases = user(
    guildId[20],
  ).useGetOrFetchCollectiblesCategoriesAndPurchases();
  const obj = user(guildId[20]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = user(guildId[21]).useStateFromStores(items, () => isFetching.isFetching);
  const obj2 = user(guildId[21]);
  const tmp6 = setSelectedNameplate(guildId[22])();
  const shouldPinCollectiblesEditPreview = user(guildId[23]).useShouldPinCollectiblesEditPreview();
  const obj3 = user(guildId[23]);
  const items1 = [GuildMemberStore];
  const stateFromStores1 = user(guildId[21]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj4 = user(guildId[21]);
  const obj6 = { pendingValue: selectedNameplate, userValue: null, guildValue: null, guildId: null };
  let nameplate;
  if (user != null) {
    const collectibles = user.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  obj6.userValue = nameplate;
  let nameplate1;
  if (stateFromStores1 != null) {
    const collectibles2 = stateFromStores1.collectibles;
    if (collectibles2 != null) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  obj6.guildValue = nameplate1;
  obj6.guildId = guildId;
  const profilePreviewValue = user(guildId[24]).getProfilePreviewValue(obj6);
  const items2 = [setSelectedNameplate, guildId];
  let skuId;
  const callback = noop.useCallback((arg0) => {
    ({ items, size, selectedSkuId } = arg0);
    return closure_2_10(EditNameplateSection.EditNameplateRow, {
      items,
      size,
      selectedSkuId,
      setSelectedNameplate,
      guildId,
    });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(NameplateActionSheetPreview, { previewSkuId: skuId, user, guildId })];
  const obj7 = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj5 = user(guildId[24]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  const obj8 = { children: null };
  obj7.previewSkuId = skuId1;
  const intl = tmp(tmp2[18]).intl;
  obj7.nitroJoinCTA = intl.string(user(guildId[18]).t["V+IE93"]);
  const intl2 = tmp(tmp2[18]).intl;
  obj7.nitroUpgradeCTA = intl2.string(user(guildId[18]).t.a6SrkR);
  items3[1] = closure_10(setSelectedNameplate(guildId[26]), obj7);
  obj8.children = items3;
  const tmp13Result = closure_11(closure_12, obj8);
  let tmp21 = null;
  if (shouldPinCollectiblesEditPreview) {
    tmp21 = tmp13Result;
  }
  const items4 = [tmp21];
  const obj9 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null, ListHeaderComponent: null };
  let skuId2;
  if (selectedNameplate != null) {
    skuId2 = selectedNameplate.skuId;
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
  items4[1] = closure_10(user(guildId[27]).EditCollectiblesPickerList, obj9);
  obj10.children = items4;
  return closure_11(closure_12, obj10);
}
function NameplateActionSheetPreview(arg0) {
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_13();
  const tmp4 = purchase(8736)(previewSkuId);
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
    if (isNameplateRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  const obj = {
    style: tmp.nameplatePreviewContainer,
    accessibilityLabel: null,
    accessibilityRole: "image",
    accessible: true,
    children: null,
  };
  if (null != memo) {
    const intl2 = require("util").intl;
    const obj2 = { a11y_text: memo.label };
    let formatToPlainStringResult = intl2.formatToPlainString(require("util").t.YJig7C, obj2);
    let tmp10 = _require;
  } else {
    const intl = require("util").intl;
    formatToPlainStringResult = intl.string(require("util").t.aqlsGS);
    tmp10 = _require;
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const obj3 = { style: tmp.nameplateGradientContainer, children: null };
  const items1 = [
    closure_10(tmp10(9491).NameplateDummyUserPreview, { width: 100 }),
    closure_10(tmp10(9491).NameplateDummyUserPreview, { width: 140 }),
  ];
  const obj4 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.1 }, end: { x: 0, y: 0.8 }, colors: null };
  const items2 = [tmp.nameplatePreviewGradient.color, "" + tmp.nameplatePreviewGradient.color + "00"];
  obj4.colors = items2;
  items1[2] = closure_10(purchase(5582), obj4);
  obj3.children = items1;
  const items3 = [
    closure_11(View, obj3),
    closure_10(tmp10(11472).NameplatePreview, { nameplate: memo, user, guildId, animate: true, "aria-hidden": true }),
  ];
  const obj5 = { style: tmp.nameplateGradientContainer, children: null };
  const items4 = [
    closure_10(tmp10(9491).NameplateDummyUserPreview, { width: 140 }),
    closure_10(tmp10(9491).NameplateDummyUserPreview, { width: 100 }),
  ];
  const obj6 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.2 }, end: { x: 0, y: 0.9 }, colors: null };
  const tmp2Result = purchase(5582);
  const items5 = ["" + tmp.nameplatePreviewGradient.color + "00", tmp.nameplatePreviewGradient.color];
  obj6.colors = items5;
  items4[2] = closure_10(purchase(5582), obj6);
  obj5.children = items4;
  items3[2] = closure_11(View, obj5);
  obj.children = items3;
  return closure_11(View, obj);
}
const View = fn(17).View;
const isNameplateRecord = fn(1986).isNameplateRecord;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  container: { flex: 1 },
  nameplatePreviewContainer: { width: "80%", alignSelf: "center", justifyContent: "center", alignItems: "center" },
  nameplateGradientContainer: { width: "100%" },
  nameplatePreviewGradient: null,
};
let size = {
  position: "absolute",
  width: "100%",
  height: "100%",
  color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj2.nameplatePreviewGradient = size;
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditNameplateActionSheet.tsx");

export default function EditNameplateActionSheet(arg0) {
  ({ user, currentNameplate, guildId } = arg0);
  const tmp = closure_13();
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
  const first = tmp4[0];
  let tmp6 = currentNameplate;
  if (undefined !== first) {
    tmp6 = first;
  }
  let obj = guildId(8733);
  const tmp7 = first;
  const analyticsLocations = first(7320)(first(7345).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  const items = [first, guildId];
  const callback = noop.useCallback(() => {
    const obj = first(1253);
    obj.track(constants.OPEN_POPOUT, { type: first(7345).EDIT_NAMEPLATE_SHEET, is_fullscreen: true });
  }, []);
  const callback1 = noop.useCallback((arg0) => {
    const obj2 = { guildId, nameplate: null };
    const obj = UserProfileSettingsActionCreators;
    let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstNameplate");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    obj2.nameplate = purchasedItem;
    obj.setPendingChanges(obj2);
  }, items);
  const obj3 = { value: analyticsLocations, children: null };
  const obj4 = {
    scrollable: true,
    ref: obj.useBottomSheetRef().bottomSheetRef,
    onExpand: callback,
    startExpanded: true,
    header: null,
    children: null,
  };
  const obj5 = { title: null };
  const intl = guildId(1114).intl;
  obj5.title = intl.string(guildId(1114).t.BwdeM1);
  obj4.header = closure_10(guildId(7315).BottomSheetTitleHeader, obj5);
  const tmp8 = first(7320);
  const items1 = [
    closure_10(View, {
      style: tmp.container,
      children: closure_10(EditNameplateInner, {
        user,
        selectedNameplate: tmp6,
        setSelectedNameplate: tmp4[1],
        guildId,
      }),
    }),
  ];
  const obj7 = {
    user,
    currentSkuId: null,
    selectedSkuId: null,
    onApply: null,
    analyticsLocations: null,
    analyticsSource: null,
  };
  let skuId;
  const obj6 = {
    style: tmp.container,
    children: closure_10(EditNameplateInner, { user, selectedNameplate: tmp6, setSelectedNameplate: tmp4[1], guildId }),
  };
  if (currentNameplate != null) {
    skuId = currentNameplate.skuId;
  }
  obj7.currentSkuId = skuId;
  let skuId1;
  if (tmp6 != null) {
    skuId1 = tmp6.skuId;
  }
  obj7.selectedSkuId = skuId1;
  obj7.onApply = callback1;
  obj7.analyticsLocations = analyticsLocations;
  obj7.analyticsSource = tmp7(7345).EDIT_NAMEPLATE_SHEET;
  items1[1] = closure_10(first(8735), obj7);
  obj4.children = items1;
  obj3.children = closure_11(guildId(5267).BottomSheet, obj4);
  return closure_10(guildId(7320).AnalyticsLocationProvider, obj3);
}
