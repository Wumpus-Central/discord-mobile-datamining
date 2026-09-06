// discord_app/modules/game_console/native/GameConsoleAlert.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import GameConsoleStore from "../GameConsoleStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  errorCodeText: { marginTop: 16 },
  alertBody: { marginTop: 0 },
  container: { flex: 1 },
  body: { marginTop: 16 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/native/GameConsoleAlert.tsx");

export const SelfDismissibleAlertBody = function SelfDismissibleAlertBody(errorCodeMessage) {
  ({ body, dismissCallback } = errorCodeMessage);
  errorCodeMessage = errorCodeMessage.errorCodeMessage;
  let stateFromStores;
  const tmp = closure_7();
  let obj = dismissCallback(stateFromStores[5]);
  const items = [GameConsoleStore];
  stateFromStores = obj.useStateFromStores(items, () => remoteSessionId.getRemoteSessionId());
  const items1 = [stateFromStores, dismissCallback];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      dismissCallback();
    }
  }, items1);
  let tmp6 = body;
  if (null != errorCodeMessage) {
    obj = { style: tmp.container, children: null };
    obj = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: null, children: null };
    const items2 = [,];
    ({ body: arr3[0], alertBody: arr3[1] } = tmp);
    obj.style = items2;
    obj.children = body;
    const items3 = [closure_5(tmp2(tmp3[6]).Text, obj)];
    const obj1 = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: null, children: null };
    const items4 = [,];
    ({ body: arr5[0], errorCodeText: arr5[1] } = tmp);
    obj1.style = items4;
    obj1.children = errorCodeMessage;
    items3[1] = closure_5(tmp2(tmp3[6]).Text, obj1);
    obj.children = items3;
    tmp6 = closure_6(View, obj);
  }
  return tmp6;
};
