// discord_app/modules/game_console/native/GameConsoleAlert.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import GameConsoleStore from "../GameConsoleStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let closure_7 = createStyles.createStyles({
  errorCodeText: { marginTop: 16 },
  alertBody: { marginTop: 0 },
  container: { flex: 1 },
  body: { marginTop: 16 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/native/GameConsoleAlert.tsx");

export const SelfDismissibleAlertBody = ReactCompilerGating.isReactCompilerEnabled()
  ? function SelfDismissibleAlertBody(errorCodeMessage) {
      const cResult = dismissCallback(stateFromStores[6]).c(22);
      ({ body, dismissCallback } = errorCodeMessage);
      errorCodeMessage = errorCodeMessage.errorCodeMessage;
      let container = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameConsoleStore];
        const fn = function x() {
          return remoteSessionId.getRemoteSessionId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = dismissCallback(stateFromStores[6]);
      stateFromStores = dismissCallback(stateFromStores[7]).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === dismissCallback) {
        if (cResult[3] === stateFromStores) {
          let tmp8 = cResult[4];
          let tmp9 = cResult[5];
        }
        const effect = noop.useEffect(tmp8, tmp9);
        if (null == errorCodeMessage) {
          return body;
        } else {
          if (cResult[6] === container.alertBody) {
            if (cResult[7] === container.body) {
              let tmp14 = cResult[8];
            }
            if (cResult[9] === body) {
              if (cResult[10] === tmp14) {
                let tmp15 = cResult[11];
              }
              if (cResult[12] === container.body) {
                if (cResult[13] === container.errorCodeText) {
                  let tmp18 = cResult[14];
                }
                if (cResult[15] === errorCodeMessage) {
                  if (cResult[16] === tmp18) {
                    let tmp19 = cResult[17];
                  }
                  if (cResult[18] === container.container) {
                    if (cResult[19] === tmp15) {
                    }
                  }
                  const obj2 = { style: container.container, children: null };
                  const items1 = [tmp15, tmp19];
                  obj2.children = items1;
                  const tmp25 = closure_6(View, obj2);
                  container = container.container;
                  cResult[18] = container;
                  cResult[19] = tmp15;
                  cResult[20] = tmp19;
                  cResult[21] = tmp25;
                }
                const obj3 = {
                  maxFontSizeMultiplier: 1,
                  variant: "text-md/normal",
                  style: tmp18,
                  children: errorCodeMessage,
                };
                const tmp21 = closure_5(dismissCallback(tmp2[8]).Text, obj3);
                cResult[15] = errorCodeMessage;
                cResult[16] = tmp18;
                cResult[17] = tmp21;
                tmp19 = tmp21;
              }
              const items2 = [,];
              ({ body: arr4[0], errorCodeText: arr4[1] } = container);
              cResult[12] = container.body;
              cResult[13] = container.errorCodeText;
              cResult[14] = items2;
              tmp18 = items2;
            }
            const obj4 = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: tmp14, children: body };
            const tmp17 = closure_5(dismissCallback(tmp2[8]).Text, obj4);
            cResult[9] = body;
            cResult[10] = tmp14;
            cResult[11] = tmp17;
            tmp15 = tmp17;
          }
          const items3 = [,];
          ({ body: arr3[0], alertBody: arr3[1] } = container);
          cResult[6] = container.alertBody;
          cResult[7] = container.body;
          cResult[8] = items3;
          tmp14 = items3;
        }
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
      tmp9 = items4;
      tmp8 = fn2;
      const tmpResult = dismissCallback(stateFromStores[7]);
    }
  : function SelfDismissibleAlertBody(errorCodeMessage) {
      ({ body, dismissCallback } = errorCodeMessage);
      errorCodeMessage = errorCodeMessage.errorCodeMessage;
      let stateFromStores;
      const tmp = closure_7();
      const items = [GameConsoleStore];
      stateFromStores = dismissCallback(stateFromStores[7]).useStateFromStores(items, () =>
        remoteSessionId.getRemoteSessionId(),
      );
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
        const items2 = [,];
        ({ body: arr3[0], alertBody: arr3[1] } = tmp);
        obj3.style = items2;
        obj3.children = body;
        const items3 = [closure_5(dismissCallback(tmp3[8]).Text, obj3)];
        const obj4 = { maxFontSizeMultiplier: 1, variant: "text-md/normal", style: null, children: null };
        const items4 = [,];
        ({ body: arr5[0], errorCodeText: arr5[1] } = tmp);
        obj4.style = items4;
        obj4.children = errorCodeMessage;
        items3[1] = closure_5(dismissCallback(tmp3[8]).Text, obj4);
        obj2.children = items3;
        tmp6 = closure_6(View, obj2);
      }
      return tmp6;
    };
