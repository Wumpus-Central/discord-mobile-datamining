// discord_app/modules/collectibles/nameplates/native/EditNameplateSection.tsx
import utils from "../utils.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import useCollectibleListLayout from "../../native/useCollectibleListLayout.tsx";
import CollectiblesEditUserProfileListItems from "../../native/CollectiblesEditUserProfileListItems.tsx";
import useNameplateSections from "../useNameplateSections.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const isNameplateRecord = fn(1971).isNameplateRecord;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj = {
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: fn(13474).GUTTER_SIZE,
  },
  rowSpacer: null,
  nameplate: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: fn(13474).GUTTER_SIZE,
};
obj.rowSpacer = { height: fn(13474).GUTTER_SIZE };
obj.nameplate = { overflow: "hidden" };
let closure_9 = createStyles.createStyles(obj);
const memoResult = noop.memo((arg0) => {
  ({ items, selectedSkuId: require, setSelectedNameplate } = arg0);
  ({ guildId: dependencyMap, size: noop } = arg0);
  const tmp = closure_9();
  const items1 = [setSelectedNameplate];
  const onPress = noop.useCallback(() => {
    setSelectedNameplate(null);
  }, items1);
  let obj = { children: null };
  let obj2 = { style: tmp.row, children: null };
  const items2 = [...items, null, null];
  const substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj2.children = substr.map((nameplate, index) => {
    if (nameplate === useNameplateSections.NONE_ITEM) {
      const obj2 = { size: width, onPress, isSelected: null == closure_1_0, asDefault: null != dependencyMap };
      return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
    } else if (nameplate === useNameplateSections.SHOP_ITEM) {
      const obj3 = { size: width, analyticsSource: AnalyticsLocationDefault.EDIT_NAMEPLATE_SHEET };
      return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj3, "shop");
    } else if (isNameplateRecord(nameplate)) {
      const obj4 = { nameplate, isSelected: closure_1_0 === nameplate.skuId, setSelectedNameplate, size: width };
      return timestampProducer(memoResult1, obj4, nameplate.skuId);
    } else {
      const obj = { style: null };
      const size = { height: width, width };
      obj.style = size;
      return timestampProducer(View, obj, index);
    }
  });
  const items3 = [closure_6(onPress, obj2), closure_6(onPress, { style: tmp.rowSpacer })];
  obj.children = items3;
  return closure_8(closure_7, obj);
});
memoResult.displayName = "EditNameplateRow";
const memoResult1 = noop.memo((nameplate) => {
  nameplate = nameplate.nameplate;
  const setSelectedNameplate = nameplate.setSelectedNameplate;
  ({ isSelected, size } = nameplate);
  const items = [nameplate];
  const items1 = [setSelectedNameplate, nameplate];
  const memo = noop.useMemo(() => utils.getNameplateData(nameplate), items);
  const callback = noop.useCallback(() => {
    setSelectedNameplate(nameplate);
  }, items1);
  const obj = {
    skuId: nameplate.skuId,
    isSelected,
    onPress: callback,
    size,
    accessibilityLabel: nameplate.label,
    children: null,
  };
  const obj2 = { nameplate: memo, fullOpacity: true, isSquarePreview: true, style: null };
  const items2 = [closure_9().nameplate, { borderRadius: 6 }];
  obj2.style = items2;
  obj.children = closure_6(setSelectedNameplate(9099), obj2);
  return closure_6(nameplate(13475).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditNameplateItem";
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/EditNameplateSection.tsx");

export const EditNameplateRow = memoResult;
