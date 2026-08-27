// discord_app/modules/favorites/native/FavoritesGuildCategoryActionSheet.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../FavoriteStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function FavoritesGuildCategoryActionSheetConnected(category) {
  category = category.category;
  const onClose = category.onClose;
  dependencyMap = undefined;
  const tmp3 = onClose(10632)(category);
  dependencyMap = tmp3;
  const DeveloperMode = category(4134).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = { header: callback(category(5573).BottomSheetTitleHeader, { title: onClose(4639)(category, true) }), children: null };
  let tmp7Result = null;
  if (null != tmp3) {
    obj = { hasIcons: true, children: null };
    obj = { label: null, icon: null, onPress: null };
    obj[0] = tmp3.label;
    obj1 = { IconComponent: null };
    obj1[0] = tmp4(10608).PlusLargeIcon;
    obj[1] = tmp7(tmp4(5943).ActionSheetRow.Icon, obj1);
    obj[2] = function onPress() {
      closure_2.perform();
      onClose();
    };
    obj[1] = tmp7(tmp4(5943).ActionSheetRow, obj);
    tmp7Result = tmp7(tmp4(5943).ActionSheetRow.Group, obj);
  }
  const items = [tmp7Result, , ];
  const obj2 = { hasIcons: true, children: null };
  const obj3 = { label: null, icon: null, onPress: null };
  const intl = tmp4(1236).intl;
  obj3[0] = intl.string(category(1236).t.zdPFs9);
  const tmp2 = onClose(4639)(category, true);
  const tmp6 = closure_6;
  obj3[1] = callback(category(5943).ActionSheetRow.Icon, { IconComponent: category(6192).SettingsIcon });
  obj3[2] = function onPress() {
    onClose(closure_2[12])(category.id);
    onClose();
  };
  obj2[1] = callback(category(5943).ActionSheetRow, obj3);
  items[1] = callback(category(5943).ActionSheetRow.Group, obj2);
  tmp7Result = null;
  if (setting) {
    const obj5 = { hasIcons: true, children: null };
    const obj6 = { label: null, icon: null, onPress: null };
    const intl2 = tmp4(1236).intl;
    obj6[0] = intl2.string(tmp4(1236).t["2visC6"]);
    const obj7 = { IconComponent: null };
    obj7[0] = tmp4(8969).IdIcon;
    obj6[1] = tmp7(tmp4(5943).ActionSheetRow.Icon, obj7);
    obj6[2] = function onPress() {
      category(closure_2[14]).copy(category.id);
      const obj = category(closure_2[14]);
      category(closure_2[15]).presentIdCopied();
      onClose();
    };
    obj5[1] = tmp7(tmp4(5943).ActionSheetRow, obj6);
    tmp7Result = tmp7(tmp4(5943).ActionSheetRow.Group, obj5);
  }
  items[2] = tmp7Result;
  obj[1] = items;
  return tmp6(category(5941).ActionSheet, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/favorites/native/FavoritesGuildCategoryActionSheet.tsx");

export default function FavoritesGuildCategoryActionSheet(categoryId) {
  categoryId = categoryId.categoryId;
  const onClose = categoryId.onClose;
  let stateFromStores;
  let memo;
  let obj = categoryId(stateFromStores[16]);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getFavorite(categoryId));
  const items1 = [categoryId, stateFromStores];
  memo = memo.useMemo(() => {
    let categoryRecord = null;
    if (null != stateFromStores) {
      categoryRecord = closure_1_4.getCategoryRecord(categoryId);
    }
    return categoryRecord;
  }, items1);
  const items2 = [memo, onClose];
  const effect = memo.useEffect(() => {
    if (null == memo) {
      onClose();
    }
  }, items2);
  let tmp4 = null;
  if (null != memo) {
    obj = { category: null, onClose: null };
    obj[0] = memo;
    obj[1] = onClose;
    tmp4 = callback(FavoritesGuildCategoryActionSheetConnected, obj);
  }
  return tmp4;
};