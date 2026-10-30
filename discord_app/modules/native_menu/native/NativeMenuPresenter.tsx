// === Module 18952: NativeMenuPresenter ===

// Module 18952 (NativeMenuPresenter)
import initialize from "initialize" /* 504 */;
import NativeMenuStore from "NativeMenuStore" /* 10184 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default function MenuContainer() {
  const items = [NativeMenuStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ key: NativeMenuStore.getKey(), menu: NativeMenuStore.getMenu() }), []);
  const menu = stateFromStoresObject.menu;
  let tmp2 = null;
  if (null != stateFromStoresObject.key) {
    tmp2 = null;
    if (null != menu) {
      tmp2 = menu;
    }
  }
  return tmp2;
};