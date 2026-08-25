// === Module 7020: useStoreConnectionErrorAlert ===

// Module 7020 (useStoreConnectionErrorAlert)
import closure_3 from "noop" /* 19 */;
import closure_4 from "updateProduct" /* 5965 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/native/useStoreConnectionErrorAlert.tsx");

export default function useStoreConnectionErrorAlert() {
  const items = [closure_4];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => closure_4.hasConnectionError());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      let obj = closure_1_1(closure_1_2[3]);
      obj = { title: null, body: null };
      const intl = stateFromStores(closure_1_2[4]).intl;
      obj[0] = intl.string(stateFromStores(closure_1_2[4]).t["U+H+kd"]);
      const intl2 = stateFromStores(closure_1_2[4]).intl;
      obj[1] = intl2.string(stateFromStores(closure_1_2[4]).t.Q9OYlM);
      obj.show(obj);
    }
  }, items1);
};