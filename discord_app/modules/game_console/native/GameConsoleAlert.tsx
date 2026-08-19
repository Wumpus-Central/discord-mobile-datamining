// discord_app/modules/game_console/native/GameConsoleAlert.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import set from "../GameConsoleStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ errorCodeText: { marginTop: 16 }, alertBody: { marginTop: 0 }, container: { flex: 1 }, body: { marginTop: 16 } });
const result = require("obj132").fileFinishedImporting("modules/game_console/native/GameConsoleAlert.tsx");

export const SelfDismissibleAlertBody = function SelfDismissibleAlertBody(errorCodeMessage) {
  ({ body, dismissCallback } = errorCodeMessage);
  errorCodeMessage = errorCodeMessage.errorCodeMessage;
  let stateFromStores;
  const tmp = callback3();
  let obj = dismissCallback(stateFromStores[5]);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => remoteSessionId.getRemoteSessionId());
  const items1 = [stateFromStores, dismissCallback];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      dismissCallback();
    }
  }, items1);
  let tmp6 = body;
  if (null != errorCodeMessage) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: null, children: null };
    const items2 = [, ];
    ({ body: arr3[0], alertBody: arr3[1] } = tmp);
    obj[2] = items2;
    obj[3] = body;
    const items3 = [callback(dismissCallback(tmp3[6]).Text, obj), ];
    obj1 = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: null, children: null };
    const items4 = [, ];
    ({ body: arr5[0], errorCodeText: arr5[1] } = tmp);
    obj1[2] = items4;
    obj1[3] = errorCodeMessage;
    items3[1] = callback(dismissCallback(tmp3[6]).Text, obj1);
    obj[1] = items3;
    tmp6 = callback2(View, obj);
  }
  return tmp6;
};