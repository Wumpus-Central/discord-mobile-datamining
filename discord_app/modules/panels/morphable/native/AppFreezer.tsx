// discord_app/modules/panels/morphable/native/AppFreezer.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AppFreezeStore from "../AppFreezeStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const NativeView = jsx(NativeViewDefault, { style: { flex: 1 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let lockKeys;
      let manualFreeze;
      let placeholder;
      let tmp5;
      let obj = lockKeys(576);
      const cResult = obj.c(6);
      ({ children, manualFreeze, placeholder, lockKeys } = arg0);
      const tmp4 = undefined !== manualFreeze && manualFreeze;
      if (undefined === placeholder) {
        placeholder = NativeView;
      }
      if (cResult[0] !== lockKeys) {
        const fn = function s(lockKeys) {
          let someResult;
          lockKeys = lockKeys.lockKeys;
          const obj = lockKeys;
          if (null != lockKeys) {
            someResult = obj.some((item) => lockKeys.has(item));
          } else {
            someResult = lockKeys.size > 0;
          }
          return someResult;
        };
        cResult[0] = lockKeys;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      const tmp6 = AppFreezeStore(tmp5) || tmp4;
      if (cResult[2] === children) {
        if (cResult[3] === placeholder) {
          let tmp7;
          if (cResult[4] === tmp6) {
            tmp7 = cResult[5];
          }
          return tmp7;
        }
      }
      const tmp8 = jsx(lockKeys(5745).Freeze, { freeze: tmp6, placeholder, children });
      cResult[2] = children;
      cResult[3] = placeholder;
      cResult[4] = tmp6;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : (manualFreeze) => {
      let flag = manualFreeze.manualFreeze;
      const children = manualFreeze.children;
      if (flag === undefined) {
        flag = false;
      }
      let placeholder = manualFreeze.placeholder;
      if (placeholder === undefined) {
        placeholder = NativeView;
      }
      let lockKeys = manualFreeze.lockKeys;
      let freeze = AppFreezeStore((lockKeys) => {
        let someResult;
        lockKeys = lockKeys.lockKeys;
        const obj = lockKeys;
        if (null != lockKeys) {
          someResult = obj.some((item) => lockKeys.has(item));
        } else {
          someResult = lockKeys.size > 0;
        }
        return someResult;
      });
      const Freeze = lockKeys(5745).Freeze;
      if (!freeze) {
        freeze = flag;
      }
      return (
        <Freeze freeze={freeze} placeholder={placeholder}>
          {children}
        </Freeze>
      );
    };
const result = size.fileFinishedImporting("modules/panels/morphable/native/AppFreezer.tsx");

export default tmp3;
