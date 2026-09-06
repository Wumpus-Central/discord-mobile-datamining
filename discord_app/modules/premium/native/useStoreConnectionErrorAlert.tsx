// discord_app/modules/premium/native/useStoreConnectionErrorAlert.tsx
import util from "../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/useStoreConnectionErrorAlert.tsx");

export default function useStoreConnectionErrorAlert() {
  const items = [IAPStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => IAPStore.hasConnectionError());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      const obj = { title: null, body: null };
      const intl = util.intl;
      obj.title = intl.string(util.t["U+H+kd"]);
      const intl2 = util.intl;
      obj.body = intl2.string(util.t.Q9OYlM);
      obj.show(obj);
    }
  }, items1);
}
