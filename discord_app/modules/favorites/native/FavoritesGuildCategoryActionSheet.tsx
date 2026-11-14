// === Module 18830: FavoritesGuildCategoryActionSheet ===

// Module 18830 (FavoritesGuildCategoryActionSheet)
import ToastUtils from "ToastUtils" /* 6014 */;
import ClipboardUtils from "ClipboardUtils" /* 7943 */;
import openFavoritesGuildCategorySettingsModalDefault from "openFavoritesGuildCategorySettingsModal" /* 18831 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 5158 */;

require = fn;
function FavoritesGuildCategoryActionSheetConnected(category) {
  category = category.category;
  const onClose = category.onClose;
  const tmp3 = onClose(15153)(category);
  dependencyMap = tmp3;
  const DeveloperMode = category(5131).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = { header: closure_5(category(7913).BottomSheetTitleHeader, { title: onClose(5954)(category, true) }), children: null };
  let tmp7Result = null;
  if (null != tmp3) {
    const obj2 = { hasIcons: true, children: null };
    const obj3 = { label: tmp3.label, icon: null, onPress: null };
    const obj4 = { IconComponent: tmp4(10941).PlusLargeIcon };
    obj3.icon = closure_5(tmp4(7953).ActionSheetRow.Icon, obj4);
    obj3.onPress = function onPress() {
      closure_2.perform();
      onClose();
    };
    obj2.children = closure_5(tmp4(7953).ActionSheetRow, obj3);
    tmp7Result = closure_5(tmp4(7953).ActionSheetRow.Group, obj2);
  }
  items = [tmp7Result, , ];
  const obj5 = { hasIcons: true, children: null };
  const obj6 = { label: null, icon: null, onPress: null };
  const intl = tmp4(1113).intl;
  obj6.label = intl.string(category(1113).t.zdPFs9);
  const tmp2 = onClose(5954)(category, true);
  obj6.icon = closure_5(category(7953).ActionSheetRow.Icon, { IconComponent: category(10569).SettingsIcon });
  obj6.onPress = function onPress() {
    openFavoritesGuildCategorySettingsModalDefault(category.id);
    onClose();
  };
  obj5.children = closure_5(category(7953).ActionSheetRow, obj6);
  items[1] = closure_5(category(7953).ActionSheetRow.Group, obj5);
  let tmp7Result2 = null;
  if (setting) {
    const obj8 = { hasIcons: true, children: null };
    const obj9 = { label: null, icon: null, onPress: null };
    const intl2 = tmp4(1113).intl;
    obj9.label = intl2.string(tmp4(1113).t["2visC6"]);
    const obj10 = { IconComponent: tmp4(11629).IdIcon };
    obj9.icon = closure_5(tmp4(7953).ActionSheetRow.Icon, obj10);
    obj9.onPress = function onPress() {
      ClipboardUtils.copy(category.id);
      ToastUtils.presentIdCopied();
      onClose();
    };
    obj8.children = closure_5(tmp4(7953).ActionSheetRow, obj9);
    tmp7Result2 = closure_5(tmp4(7953).ActionSheetRow.Group, obj8);
  }
  items[2] = tmp7Result2;
  obj.children = items;
  return closure_6(category(7951).ActionSheet, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildCategoryActionSheet.tsx");

export default function FavoritesGuildCategoryActionSheet(categoryId) {
  categoryId = categoryId.categoryId;
  const onClose = categoryId.onClose;
  let stateFromStores;
  let memo;
  items = [FavoriteStore];
  stateFromStores = categoryId(stateFromStores[16]).useStateFromStores(items, () => FavoriteStore.getFavorite(categoryId));
  const items1 = [categoryId, stateFromStores];
  memo = memo.useMemo(() => {
    let categoryRecord = null;
    if (null != stateFromStores) {
      categoryRecord = FavoriteStore.getCategoryRecord(categoryId);
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
    const obj2 = { category: memo, onClose };
    tmp4 = closure_5(FavoritesGuildCategoryActionSheetConnected, obj2);
  }
  return tmp4;
};