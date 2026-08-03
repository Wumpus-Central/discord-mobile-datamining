// === Module 15762: MenuContainer ===

// Module 15762 (MenuContainer)
import noop from "noop";
import initialize from "initialize";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default function MenuContainer() {
  const items = [initialize];
  const stateFromStoresObject = key(589).useStateFromStoresObject(items, () => ({ key: store.getKey(), menu: store.getMenu() }), []);
  key = stateFromStoresObject.key;
  const menu = stateFromStoresObject.menu;
  const items1 = [key];
  const callback = React.useCallback(() => {
    if (null != key) {
      outer1_1(outer1_2[3]).hideNativeMenu(tmp);
      const obj = outer1_1(outer1_2[3]);
    }
    return null != key;
  }, items1);
  importDefault(4601)(callback);
  let tmp4 = null;
  if (null != key) {
    tmp4 = null;
    if (null != menu) {
      tmp4 = menu;
    }
  }
  return tmp4;
};