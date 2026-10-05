// === Module 9453: GameConsoleAlert ===

// Module 9453 (GameConsoleAlert)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let errorCodeMessage;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ errorCodeText: { marginTop: 16 }, alertBody: { marginTop: 0 }, container: { flex: 1 }, body: { marginTop: 16 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((errorCodeMessage) => {
  let body;
  let dismissCallback;
  let items1;
  let remoteSessionId;
  let stateFromStores;
  let tmp5;
  let tmp6;
  const obj = dismissCallback(stateFromStores[6]);
  const cResult = obj.c(22);
  ({ body, dismissCallback } = errorCodeMessage);
  errorCodeMessage = errorCodeMessage.errorCodeMessage;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    const fn = function x() {
      return remoteSessionId.getRemoteSessionId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = dismissCallback(stateFromStores[7]);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === dismissCallback) {
    let tmp9;
    let tmp10;
    if (cResult[3] === stateFromStores) {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    const effect = react.useEffect(tmp9, tmp10);
    let tmp14 = body;
    if (null != errorCodeMessage) {
      if (cResult[6] === tmp4.alertBody) {
        let tmp15;
        if (cResult[7] === tmp4.body) {
          tmp15 = cResult[8];
        }
        if (cResult[9] === body) {
          let tmp16;
          if (cResult[10] === tmp15) {
            tmp16 = cResult[11];
          }
          if (cResult[12] === tmp4.body) {
            let tmp19;
            if (cResult[13] === tmp4.errorCodeText) {
              tmp19 = cResult[14];
            }
            if (cResult[15] === errorCodeMessage) {
              let tmp20;
              if (cResult[16] === tmp19) {
                tmp20 = cResult[17];
              }
              if (cResult[18] === tmp4.container) {
                if (cResult[19] === tmp16) {
                  let tmp23;
                  if (cResult[20] === tmp20) {
                    tmp23 = cResult[21];
                  }
                  tmp14 = tmp23;
                }
              }
              const obj2 = { style: tmp4.container, children: items1 };
              items1 = [tmp16, tmp20];
              const tmp26 = closure_6(View, obj2);
              cResult[18] = tmp4.container;
              cResult[19] = tmp16;
              cResult[20] = tmp20;
              cResult[21] = tmp26;
              tmp23 = tmp26;
            }
            const obj3 = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: tmp19, children: errorCodeMessage };
            const tmp22 = closure_5(dismissCallback(stateFromStores[8]).Text, obj3);
            cResult[15] = errorCodeMessage;
            cResult[16] = tmp19;
            cResult[17] = tmp22;
            tmp20 = tmp22;
          }
          const items2 = [, ];
          ({ body: arr4[0], errorCodeText: arr4[1] } = tmp4);
          cResult[12] = tmp4.body;
          cResult[13] = tmp4.errorCodeText;
          cResult[14] = items2;
          tmp19 = items2;
        }
        const obj4 = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: tmp15, children: body };
        const tmp18 = closure_5(dismissCallback(stateFromStores[8]).Text, obj4);
        cResult[9] = body;
        cResult[10] = tmp15;
        cResult[11] = tmp18;
        tmp16 = tmp18;
      }
      const items3 = [, ];
      ({ body: arr3[0], alertBody: arr3[1] } = tmp4);
      cResult[6] = tmp4.alertBody;
      cResult[7] = tmp4.body;
      cResult[8] = items3;
      tmp15 = items3;
    }
    return tmp14;
  }
  const fn2 = function p() {
    if (null != stateFromStores) {
      dismissCallback();
    }
  };
  const items4 = [stateFromStores, dismissCallback];
  cResult[2] = dismissCallback;
  cResult[3] = stateFromStores;
  cResult[4] = fn2;
  cResult[5] = items4;
  tmp10 = items4;
  tmp9 = fn2;
}) : ((errorCodeMessage) => {
  let body;
  let dismissCallback;
  let items2;
  let items3;
  let items4;
  let remoteSessionId;
  ({ body, dismissCallback } = errorCodeMessage);
  errorCodeMessage = errorCodeMessage.errorCodeMessage;
  let stateFromStores;
  const tmp = closure_7();
  const items = [GameConsoleStore];
  const obj = dismissCallback(stateFromStores[7]);
  stateFromStores = obj.useStateFromStores(items, () => remoteSessionId.getRemoteSessionId());
  const items1 = [stateFromStores, dismissCallback];
  const effect = react.useEffect(() => {
    if (null != stateFromStores) {
      dismissCallback();
    }
  }, items1);
  let tmp6 = body;
  if (null != errorCodeMessage) {
    const obj3 = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: items2, children: body };
    items2 = [, ];
    const obj2 = { style: tmp.container, children: items3 };
    ({ body: arr3[0], alertBody: arr3[1] } = tmp);
    items3 = [closure_5(dismissCallback(stateFromStores[8]).Text, obj3), ];
    const obj4 = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: items4, children: errorCodeMessage };
    items4 = [, ];
    ({ body: arr5[0], errorCodeText: arr5[1] } = tmp);
    items3[1] = closure_5(dismissCallback(stateFromStores[8]).Text, obj4);
    tmp6 = closure_6(View, obj2);
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/game_console/native/GameConsoleAlert.tsx");

export const SelfDismissibleAlertBody = tmp3;