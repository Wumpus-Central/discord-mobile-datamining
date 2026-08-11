// discord_app/modules/favorites/native/FavoritesGuildCategoryActionSheet.tsx
import noop from "noop";
import initializeFromUserSettings from "initializeFromUserSettings";
import jsxProd from "jsxProd";

let c5;
let closure_6;
const require = arg1;
function FavoritesGuildCategoryActionSheetConnected(category) {
  category = category.category;
  const onClose = category.onClose;
  let dependencyMap;
  const tmp3 = onClose(12137)(category);
  dependencyMap = tmp3;
  const DeveloperMode = category(3993).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = { header: null, children: null };
  obj[0] = callback(category(5396).BottomSheetTitleHeader, { title: onClose(4494)(category, true) });
  let tmp7Result = null;
  if (null != tmp3) {
    obj = { hasIcons: true, children: null };
    obj = { label: null, icon: null, onPress: null };
    obj[0] = tmp3.label;
    const obj1 = { IconComponent: null };
    obj1[0] = tmp4(9711).PlusLargeIcon;
    obj[1] = tmp7(tmp4(5766).ActionSheetRow.Icon, obj1);
    obj[2] = function onPress() {
      _undefined.perform();
      onClose();
    };
    obj[1] = tmp7(tmp4(5766).ActionSheetRow, obj);
    tmp7Result = tmp7(tmp4(5766).ActionSheetRow.Group, obj);
  }
  const items = [tmp7Result, , ];
  const obj2 = { hasIcons: true, children: null };
  const obj3 = { label: null, icon: null, onPress: null };
  const intl = tmp4(1236).intl;
  obj3[0] = intl.string(category(1236).t.zdPFs9);
  const obj4 = { IconComponent: null };
  obj4[0] = category(6013).SettingsIcon;
  obj3[1] = callback(category(5766).ActionSheetRow.Icon, obj4);
  obj3[2] = function onPress() {
    onClose(_undefined[12])(category.id);
    onClose();
  };
  obj2[1] = callback(category(5766).ActionSheetRow, obj3);
  items[1] = callback(category(5766).ActionSheetRow.Group, obj2);
  tmp7Result = null;
  if (setting) {
    const obj5 = { hasIcons: true, children: null };
    const obj6 = { label: null, icon: null, onPress: null };
    const intl2 = tmp4(1236).intl;
    obj6[0] = intl2.string(tmp4(1236).t["2visC6"]);
    const obj7 = { IconComponent: null };
    obj7[0] = tmp4(9552).IdIcon;
    obj6[1] = tmp7(tmp4(5766).ActionSheetRow.Icon, obj7);
    obj6[2] = function onPress() {
      category(_undefined[14]).copy(category.id);
      const obj = category(_undefined[14]);
      category(_undefined[15]).presentIdCopied();
      onClose();
    };
    obj5[1] = tmp7(tmp4(5766).ActionSheetRow, obj6);
    tmp7Result = tmp7(tmp4(5766).ActionSheetRow.Group, obj5);
  }
  items[2] = tmp7Result;
  obj[1] = items;
  return closure_6(category(5764).ActionSheet, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/favorites/native/FavoritesGuildCategoryActionSheet.tsx");

export default function FavoritesGuildCategoryActionSheet(categoryId) {
  categoryId = categoryId.categoryId;
  const onClose = categoryId.onClose;
  let stateFromStores;
  let memo;
  let obj = categoryId(stateFromStores[16]);
  const items = [initializeFromUserSettings];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.getFavorite(categoryId));
  const items1 = [categoryId, stateFromStores];
  memo = memo.useMemo(() => {
    let categoryRecord = null;
    if (null != stateFromStores) {
      categoryRecord = outer1_4.getCategoryRecord(categoryId);
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