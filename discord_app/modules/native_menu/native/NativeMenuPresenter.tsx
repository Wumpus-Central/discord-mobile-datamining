// discord_app/modules/native_menu/native/NativeMenuPresenter.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import NativeMenuStore from "NativeMenuStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default function MenuContainer() {
  const items = [NativeMenuStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(
    items,
    () => ({ key: NativeMenuStore.getKey(), menu: NativeMenuStore.getMenu() }),
    [],
  );
  const menu = stateFromStoresObject.menu;
  let tmp2 = null;
  if (null != stateFromStoresObject.key) {
    tmp2 = null;
    if (null != menu) {
      tmp2 = menu;
    }
  }
  return tmp2;
}
