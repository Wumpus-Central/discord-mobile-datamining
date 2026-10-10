// discord_app/modules/panels/morphable/native/AppFreezer.tsx
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AppFreezeStore from "../AppFreezeStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const NativeView = jsx(NativeViewDefault, { style: { flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/panels/morphable/native/AppFreezer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppFreezer(arg0) {
      const cResult = lockKeys(576).c(6);
      ({ children, manualFreeze, placeholder, lockKeys } = arg0);
      if (undefined === placeholder) {
        placeholder = NativeView;
      }
      if (cResult[0] !== lockKeys) {
        const fn = function s(lockKeys) {
          lockKeys = lockKeys.lockKeys;
          if (null != lockKeys) {
            let someResult = lockKeys.some((item) => lockKeys.has(item));
          } else {
            someResult = lockKeys.size > 0;
          }
          return someResult;
        };
        cResult[0] = lockKeys;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      const tmp6 = AppFreezeStore(tmp5) || (undefined !== manualFreeze && manualFreeze);
      if (cResult[2] === children) {
        if (cResult[3] === placeholder) {
          if (cResult[4] === tmp6) {
            let tmp7 = cResult[5];
          }
          return tmp7;
        }
      }
      const tmp8 = jsx(lockKeys(5330).Freeze, { freeze: tmp6, placeholder, children });
      cResult[2] = children;
      cResult[3] = placeholder;
      cResult[4] = tmp6;
      cResult[5] = tmp8;
      tmp7 = tmp8;
      const obj = lockKeys(576);
      const tmp4 = undefined !== manualFreeze && manualFreeze;
    }
  : function AppFreezer(children) {
      let flag = children.manualFreeze;
      if (flag === undefined) {
        flag = false;
      }
      let placeholder = children.placeholder;
      if (placeholder === undefined) {
        placeholder = NativeView;
      }
      let lockKeys = children.lockKeys;
      let freeze = AppFreezeStore((lockKeys) => {
        lockKeys = lockKeys.lockKeys;
        if (null != lockKeys) {
          let someResult = lockKeys.some((item) => lockKeys.has(item));
        } else {
          someResult = lockKeys.size > 0;
        }
        return someResult;
      });
      if (!freeze) {
        freeze = flag;
      }
      return jsx(lockKeys(5330).Freeze, { freeze, placeholder, children: children.children });
    };
