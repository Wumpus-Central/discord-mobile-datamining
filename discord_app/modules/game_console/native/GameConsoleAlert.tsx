// === Module 9596: GameConsoleAlert ===

// Module 9596 (GameConsoleAlert)
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4655 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4638);
let closure_7 = createStyles.createStyles({ errorCodeText: { marginTop: 16 }, alertBody: { marginTop: 0 }, container: { flex: 1 }, body: { marginTop: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/native/GameConsoleAlert.tsx");

export const SelfDismissibleAlertBody = function SelfDismissibleAlertBody(errorCodeMessage) {
  ({ body, dismissCallback } = errorCodeMessage);
  errorCodeMessage = errorCodeMessage.errorCodeMessage;
  let stateFromStores;
  const tmp = closure_7();
  const items = [GameConsoleStore];
  stateFromStores = dismissCallback(stateFromStores[5]).useStateFromStores(items, () => remoteSessionId.getRemoteSessionId());
  const items1 = [stateFromStores, dismissCallback];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      dismissCallback();
    }
  }, items1);
  let tmp6 = body;
  if (null != errorCodeMessage) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: null, children: null };
    const items2 = [, ];
    ({ body: arr3[0], alertBody: arr3[1] } = tmp);
    obj3.style = items2;
    obj3.children = body;
    const items3 = [closure_5(dismissCallback(tmp3[6]).Text, obj3), ];
    const obj4 = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: null, children: null };
    const items4 = [, ];
    ({ body: arr5[0], errorCodeText: arr5[1] } = tmp);
    obj4.style = items4;
    obj4.children = errorCodeMessage;
    items3[1] = closure_5(dismissCallback(tmp3[6]).Text, obj4);
    obj2.children = items3;
    tmp6 = closure_6(View, obj2);
  }
  return tmp6;
};