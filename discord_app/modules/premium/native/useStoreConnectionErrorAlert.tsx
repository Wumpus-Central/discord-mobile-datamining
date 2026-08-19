// discord_app/modules/premium/native/useStoreConnectionErrorAlert.tsx
import obj132Default from "../../../actions/AlertActionCreators.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import updateProduct from "../../../stores/native/IAPStore.android.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/native/useStoreConnectionErrorAlert.tsx");

export default function useStoreConnectionErrorAlert() {
  const items = [closure_4];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => closure_4.hasConnectionError());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      const obj = { title: null, body: null };
      const intl = stateFromStores(dependencyMap[4]).intl;
      obj[0] = intl.string(stateFromStores(dependencyMap[4]).t["U+H+kd"]);
      const intl2 = stateFromStores(dependencyMap[4]).intl;
      obj[1] = intl2.string(stateFromStores(dependencyMap[4]).t.Q9OYlM);
      obj.show(obj);
    }
  }, items1);
};