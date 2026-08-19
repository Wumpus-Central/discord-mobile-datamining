// discord_app/modules/collectibles/nameplates/native/EditNameplateSection.tsx
import useCollectibleListLayout from "../../native/useCollectibleListLayout.tsx";
import EditCollectibleListItem from "../../native/CollectiblesEditUserProfileListItems.tsx";
import useNameplateSections from "../useNameplateSections.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { isNameplateRecord } from "../../records/NameplateRecord.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
let c3 = importAllResult;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
let obj = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE };
obj[0] = obj;
const createCacheKey = { height: require("useCollectibleListLayout").GUTTER_SIZE };
obj[1] = createCacheKey;
obj[2] = { overflow: "hidden" };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ items, selectedSkuId: require, setSelectedNameplate } = arg0);
  ({ guildId: dependencyMap, size: closure_3 } = arg0);
  const tmp = callback3();
  items = [setSelectedNameplate];
  closure_4 = importAllResult.useCallback(() => {
    setSelectedNameplate(null);
  }, items);
  let obj = { style: tmp.row, children: null };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj[1] = substr.map((item, index) => {
    if (item === useNameplateSections.NONE_ITEM) {
      let obj = { size: null, onPress: null, isSelected: null, asDefault: null };
      obj[0] = closure_3;
      obj[1] = closure_4;
      obj[2] = null == closure_0;
      obj[3] = null != closure_2;
      return closure_1_6(EditCollectibleListItem.EditCollectiblesListItemNone, obj, "none");
    } else if (item === useNameplateSections.SHOP_ITEM) {
      obj = { size: null, analyticsSource: null };
      obj[0] = closure_3;
      obj[1] = setSelectedNameplate(dependencyMap[8]).EDIT_NAMEPLATE_SHEET;
      return closure_1_6(EditCollectibleListItem.EditCollectiblesListItemShop, obj, "shop");
    } else if (isNameplateRecord(item)) {
      obj1 = { nameplate: null, isSelected: null, setSelectedNameplate: null, size: null };
      obj1[0] = item;
      obj1[1] = closure_0 === item.skuId;
      obj1[2] = setSelectedNameplate;
      obj1[3] = closure_3;
      return closure_1_6(memoResult1, obj1, item.skuId);
    } else {
      obj = { style: null };
      const obj2 = { height: null, width: null };
      obj2[0] = closure_3;
      obj2[1] = closure_3;
      obj[0] = obj2;
      return closure_1_6(closure_4, obj, index);
    }
  });
  const items2 = [callback(closure_4, obj), ];
  obj = { style: tmp.rowSpacer };
  items2[1] = callback(closure_4, obj);
  obj[0] = items2;
  return callback2(closure_7, obj);
});
memoResult.displayName = "EditNameplateRow";
const memoResult1 = importAllResult.memo((nameplate) => {
  nameplate = nameplate.nameplate;
  const setSelectedNameplate = nameplate.setSelectedNameplate;
  ({ isSelected, size } = nameplate);
  const items = [nameplate];
  const items1 = [setSelectedNameplate, nameplate];
  const memo = importAllResult.useMemo(() => nameplate(dependencyMap[9]).getNameplateData(nameplate), items);
  const callback = importAllResult.useCallback(() => {
    setSelectedNameplate(nameplate);
  }, items1);
  const tmp = callback3();
  const items2 = [tmp.nameplate, { borderRadius: 6 }];
  return callback(nameplate(8396).EditCollectiblesListItemProduct, { skuId: nameplate.skuId, isSelected, onPress: callback, size, accessibilityLabel: nameplate.label, children: callback(setSelectedNameplate(9221), { nameplate: memo, fullOpacity: true, isSquarePreview: true, style: items2 }) });
});
memoResult1.displayName = "EditNameplateItem";
const result = require("obj132").fileFinishedImporting("modules/collectibles/nameplates/native/EditNameplateSection.tsx");

export const EditNameplateRow = memoResult;