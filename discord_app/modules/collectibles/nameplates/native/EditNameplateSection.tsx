// === Module 14638: EditNameplateSection ===

// Module 14638 (EditNameplateSection)
import utils from "utils" /* 1886 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 13170 */;
import CollectiblesEditUserProfileListItems from "CollectiblesEditUserProfileListItems" /* 13171 */;
import useNameplateSections from "useNameplateSections" /* 14637 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isNameplateRecord = fn(1887).isNameplateRecord;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let obj = { row: null, rowSpacer: null, nameplate: null };
obj = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: fn(13170).GUTTER_SIZE };
obj.row = obj;
const createStyles = { height: fn(13170).GUTTER_SIZE };
obj.rowSpacer = createStyles;
obj.nameplate = { overflow: "hidden" };
let closure_9 = createStyles.createStyles(obj);
const memoResult = noop.memo((arg0) => {
  ({ items, selectedSkuId: require, setSelectedNameplate } = arg0);
  ({ guildId: dependencyMap, size: noop } = arg0);
  const tmp = closure_9();
  items = [setSelectedNameplate];
  const onPress = noop.useCallback(() => {
    setSelectedNameplate(null);
  }, items);
  let obj = { children: null };
  obj = { style: tmp.row, children: null };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj.children = substr.map((nameplate, index) => {
    if (nameplate === useNameplateSections.NONE_ITEM) {
      let obj = { size: width, onPress, isSelected: null == closure_1_0, asDefault: null != dependencyMap };
      return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj, "none");
    } else if (nameplate === useNameplateSections.SHOP_ITEM) {
      obj = { size: width, analyticsSource: AnalyticsLocationDefault.EDIT_NAMEPLATE_SHEET };
      return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj, "shop");
    } else if (isNameplateRecord(nameplate)) {
      const obj1 = { nameplate, isSelected: closure_1_0 === nameplate.skuId, setSelectedNameplate, size: width };
      return timestampProducer(memoResult1, obj1, nameplate.skuId);
    } else {
      obj = { style: null };
      const size = { height: width, width };
      obj.style = size;
      return timestampProducer(View, obj, index);
    }
  });
  const items2 = [closure_6(onPress, obj), ];
  obj = { style: tmp.rowSpacer };
  items2[1] = closure_6(onPress, obj);
  obj.children = items2;
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
  let obj = { skuId: nameplate.skuId, isSelected, onPress: callback, size, accessibilityLabel: nameplate.label, children: null };
  obj = { nameplate: memo, fullOpacity: true, isSquarePreview: true, style: null };
  const items2 = [closure_9().nameplate, { borderRadius: 6 }];
  obj.style = items2;
  obj.children = closure_6(setSelectedNameplate(8818), obj);
  return closure_6(nameplate(13171).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditNameplateItem";
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/EditNameplateSection.tsx");

export const EditNameplateRow = memoResult;