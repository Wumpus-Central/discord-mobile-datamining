// === Module 16129: MenuContainer ===

// Module 16129 (MenuContainer)
import useBackPressHandlerDefault from "useBackPressHandler" /* 4732 */;
import _modDef10284 from "module_10284" /* 10284 */;
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 10046 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default function MenuContainer() {
  const items = [closure_4];
  const stateFromStoresObject = key(589).useStateFromStoresObject(items, () => ({ key: store.getKey(), menu: store.getMenu() }), []);
  key = stateFromStoresObject.key;
  const menu = stateFromStoresObject.menu;
  const items1 = [key];
  const callback = React.useCallback(() => {
    if (null != key) {
      _modDef10284.hideNativeMenu(tmp);
    }
    return null != key;
  }, items1);
  useBackPressHandlerDefault(callback);
  let tmp4 = null;
  if (null != key) {
    tmp4 = null;
    if (null != menu) {
      tmp4 = menu;
    }
  }
  return tmp4;
};