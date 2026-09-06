// discord_app/modules/favorites/native/FavoritesGuildCategoryActionSheet.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import openFavoritesGuildCategorySettingsModalDefault from "modal/openFavoritesGuildCategorySettingsModal.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FavoriteStore from "../FavoriteStore.tsx";

require = fn;
function FavoritesGuildCategoryActionSheetConnected(category) {
  category = category.category;
  const onClose = category.onClose;
  const tmp3 = onClose(10975)(category);
  dependencyMap = tmp3;
  const DeveloperMode = category(1935).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = {
    header: closure_5(category(7149).BottomSheetTitleHeader, { title: onClose(4713)(category, true) }),
    children: null,
  };
  let tmp7Result = null;
  if (null != tmp3) {
    obj = { hasIcons: true, children: null };
    obj = { label: tmp3.label, icon: null, onPress: null };
    const obj1 = { IconComponent: tmp4(10951).PlusLargeIcon };
    obj.icon = tmp7(tmp4(7200).ActionSheetRow.Icon, obj1);
    obj.onPress = function onPress() {
      closure_2.perform();
      onClose();
    };
    obj.children = tmp7(tmp4(7200).ActionSheetRow, obj);
    tmp7Result = tmp7(tmp4(7200).ActionSheetRow.Group, obj);
  }
  const items = [tmp7Result, ,];
  const obj2 = { hasIcons: true, children: null };
  const obj3 = { label: null, icon: null, onPress: null };
  const intl = tmp4(1114).intl;
  obj3.label = intl.string(category(1114).t.zdPFs9);
  const tmp2 = onClose(4713)(category, true);
  const tmp6 = closure_6;
  obj3.icon = closure_5(category(7200).ActionSheetRow.Icon, { IconComponent: category(7380).SettingsIcon });
  obj3.onPress = function onPress() {
    openFavoritesGuildCategorySettingsModalDefault(category.id);
    onClose();
  };
  obj2.children = closure_5(category(7200).ActionSheetRow, obj3);
  items[1] = closure_5(category(7200).ActionSheetRow.Group, obj2);
  tmp7Result = null;
  if (setting) {
    const obj5 = { hasIcons: true, children: null };
    const obj6 = { label: null, icon: null, onPress: null };
    const intl2 = tmp4(1114).intl;
    obj6.label = intl2.string(tmp4(1114).t["2visC6"]);
    const obj7 = { IconComponent: tmp4(10629).IdIcon };
    obj6.icon = tmp7(tmp4(7200).ActionSheetRow.Icon, obj7);
    obj6.onPress = function onPress() {
      ClipboardUtils.copy(category.id);
      ToastUtils.presentIdCopied();
      onClose();
    };
    obj5.children = tmp7(tmp4(7200).ActionSheetRow, obj6);
    tmp7Result = tmp7(tmp4(7200).ActionSheetRow.Group, obj5);
  }
  items[2] = tmp7Result;
  obj.children = items;
  return tmp6(category(7198).ActionSheet, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildCategoryActionSheet.tsx");

export default function FavoritesGuildCategoryActionSheet(categoryId) {
  categoryId = categoryId.categoryId;
  const onClose = categoryId.onClose;
  let stateFromStores;
  let memo;
  let obj = categoryId(stateFromStores[16]);
  const items = [FavoriteStore];
  stateFromStores = obj.useStateFromStores(items, () => FavoriteStore.getFavorite(categoryId));
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
    obj = { category: memo, onClose };
    tmp4 = closure_5(FavoritesGuildCategoryActionSheetConnected, obj);
  }
  return tmp4;
}
