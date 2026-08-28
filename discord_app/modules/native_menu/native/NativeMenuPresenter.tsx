// === Module 16423: MenuContainer ===

// Module 16423 (MenuContainer)
import useBackPressHandlerDefault from "useBackPressHandler" /* 4890 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "initialize" /* 9593 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default function MenuContainer() {
  const items = [closure_4];
  const stateFromStoresObject = key(589).useStateFromStoresObject(items, () => ({ key: store.getKey(), menu: store.getMenu() }), []);
  key = stateFromStoresObject.key;
  const menu = stateFromStoresObject.menu;
  const items1 = [key];
  const callback = React.useCallback(() => {
    if (null != key) {
      closure_1_1(closure_1_2[3]).hideNativeMenu(tmp);
      const obj = closure_1_1(closure_1_2[3]);
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