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
  const tmp3 = onClose(11112)(category);
  dependencyMap = tmp3;
  const DeveloperMode = category(1936).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = {
    header: closure_5(category(7256).BottomSheetTitleHeader, { title: onClose(4792)(category, true) }),
    children: null,
  };
  let tmp7Result = null;
  if (null != tmp3) {
    const obj2 = { hasIcons: true, children: null };
    const obj3 = { label: tmp3.label, icon: null, onPress: null };
    const obj4 = { IconComponent: tmp4(11087).PlusLargeIcon };
    obj3.icon = closure_5(tmp4(7306).ActionSheetRow.Icon, obj4);
    obj3.onPress = function onPress() {
      closure_2.perform();
      onClose();
    };
    obj2.children = closure_5(tmp4(7306).ActionSheetRow, obj3);
    tmp7Result = closure_5(tmp4(7306).ActionSheetRow.Group, obj2);
  }
  const items = [tmp7Result, ,];
  const obj5 = { hasIcons: true, children: null };
  const obj6 = { label: null, icon: null, onPress: null };
  const intl = tmp4(1115).intl;
  obj6.label = intl.string(category(1115).t.zdPFs9);
  const tmp2 = onClose(4792)(category, true);
  obj6.icon = closure_5(category(7306).ActionSheetRow.Icon, { IconComponent: category(7487).SettingsIcon });
  obj6.onPress = function onPress() {
    openFavoritesGuildCategorySettingsModalDefault(category.id);
    onClose();
  };
  obj5.children = closure_5(category(7306).ActionSheetRow, obj6);
  items[1] = closure_5(category(7306).ActionSheetRow.Group, obj5);
  let tmp7Result2 = null;
  if (setting) {
    const obj8 = { hasIcons: true, children: null };
    const obj9 = { label: null, icon: null, onPress: null };
    const intl2 = tmp4(1115).intl;
    obj9.label = intl2.string(tmp4(1115).t["2visC6"]);
    const obj10 = { IconComponent: tmp4(10762).IdIcon };
    obj9.icon = closure_5(tmp4(7306).ActionSheetRow.Icon, obj10);
    obj9.onPress = function onPress() {
      ClipboardUtils.copy(category.id);
      ToastUtils.presentIdCopied();
      onClose();
    };
    obj8.children = closure_5(tmp4(7306).ActionSheetRow, obj9);
    tmp7Result2 = closure_5(tmp4(7306).ActionSheetRow.Group, obj8);
  }
  items[2] = tmp7Result2;
  obj.children = items;
  return closure_6(category(7304).ActionSheet, obj);
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
  const items = [FavoriteStore];
  stateFromStores = categoryId(stateFromStores[16]).useStateFromStores(items, () =>
    FavoriteStore.getFavorite(categoryId),
  );
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
}
