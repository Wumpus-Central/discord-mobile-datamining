// === Module 9053: SelfDismissibleAlertBody ===

// Module 9053 (SelfDismissibleAlertBody)
import noop from "noop";
import { View } from "get ActivityIndicator";
import set from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ errorCodeText: { marginTop: 16 }, alertBody: { marginTop: 0 }, container: { flex: 1 }, body: { marginTop: 16 } });
const result = require("set").fileFinishedImporting("modules/game_console/native/GameConsoleAlert.tsx");

export const SelfDismissibleAlertBody = function SelfDismissibleAlertBody(errorCodeMessage) {
  let body;
  let dismissCallback;
  ({ body, dismissCallback } = errorCodeMessage);
  errorCodeMessage = errorCodeMessage.errorCodeMessage;
  let stateFromStores;
  const tmp = callback3();
  let obj = dismissCallback(stateFromStores[5]);
  const items = [set];
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
    const items3 = [callback(tmp2(tmp3[6]).Text, obj), ];
    const obj1 = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: null, children: null };
    const items4 = [, ];
    ({ body: arr5[0], errorCodeText: arr5[1] } = tmp);
    obj1[2] = items4;
    obj1[3] = errorCodeMessage;
    items3[1] = callback(tmp2(tmp3[6]).Text, obj1);
    obj[1] = items3;
    tmp6 = callback2(View, obj);
  }
  return tmp6;
};