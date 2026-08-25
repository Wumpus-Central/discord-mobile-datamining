// === Module 14157: memoResult1 ===

// Module 14157 (memoResult1)
import useCollectibleListLayout from "useCollectibleListLayout" /* 8440 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isNameplateRecord } from "fromServer" /* 1948 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
let c3 = importAllResult;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
let obj = { row: null, rowSpacer: null, nameplate: null };
obj = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE };
obj[0] = obj;
createCacheKey = { height: require("useCollectibleListLayout").GUTTER_SIZE };
obj[1] = createCacheKey;
obj[2] = { overflow: "hidden" };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ items, selectedSkuId: require, setSelectedNameplate } = arg0);
  ({ guildId: dependencyMap, size: closure_3 } = arg0);
  closure_4 = undefined;
  const tmp = callback3();
  items = [setSelectedNameplate];
  closure_4 = importAllResult.useCallback(() => {
    setSelectedNameplate(null);
  }, items);
  let obj = { children: null };
  obj = { style: tmp.row, children: null };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj[1] = substr.map((skuId) => {
    if (skuId === closure_1_0(closure_1_2[6]).NONE_ITEM) {
      let obj = { size: null, onPress: null, isSelected: null, asDefault: null };
      obj[0] = closure_3;
      obj[1] = closure_4;
      obj[2] = null == closure_0;
      obj[3] = null != closure_2;
      return closure_1_6(tmp(tmp2[7]).EditCollectiblesListItemNone, obj, "none");
    } else if (skuId === tmp(tmp2[6]).SHOP_ITEM) {
      obj = { size: null, analyticsSource: null };
      obj[0] = closure_3;
      obj[1] = setSelectedNameplate(tmp2[8]).EDIT_NAMEPLATE_SHEET;
      return closure_1_6(tmp(tmp2[7]).EditCollectiblesListItemShop, obj, "shop");
    } else if (closure_1_5(skuId)) {
      obj1 = { nameplate: null, isSelected: null, setSelectedNameplate: null, size: null };
      obj1[0] = skuId;
      obj1[1] = closure_0 === skuId.skuId;
      obj1[2] = setSelectedNameplate;
      obj1[3] = closure_3;
      return closure_1_6(closure_1_10, obj1, skuId.skuId);
    } else {
      obj = { style: null };
      const obj2 = { height: null, width: null };
      obj2[0] = closure_3;
      obj2[1] = closure_3;
      obj[0] = obj2;
      return closure_1_6(closure_4, obj, arg1);
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
  const memo = importAllResult.useMemo(() => nameplate(closure_1_2[9]).getNameplateData(nameplate), items);
  const callback = importAllResult.useCallback(() => {
    setSelectedNameplate(nameplate);
  }, items1);
  const tmp = callback3();
  const items2 = [tmp.nameplate, { borderRadius: 6 }];
  return callback(nameplate(8441).EditCollectiblesListItemProduct, { skuId: nameplate.skuId, isSelected, onPress: callback, size, accessibilityLabel: nameplate.label, children: callback(setSelectedNameplate(9537), { nameplate: memo, fullOpacity: true, isSquarePreview: true, style: items2 }) });
});
memoResult1.displayName = "EditNameplateItem";
const result = require("set").fileFinishedImporting("modules/collectibles/nameplates/native/EditNameplateSection.tsx");

export const EditNameplateRow = memoResult;