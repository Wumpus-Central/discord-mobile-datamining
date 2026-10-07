// discord_app/hooks/useLocalStorageState.tsx
import Storage3 from "../../discord_common/js/packages/storage/Storage.tsx";
import useMountEffectDefault from "useMountEffect.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import noop from "../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("hooks/useLocalStorageState.tsx");

export const useLocalStorageState = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      importDefault = arg1;
      const cResult = require("c").c(11);
      if (cResult[0] === arg1) {
        if (cResult[1] === arg0) {
          let tmp3 = cResult[2];
        }
        [tmp7, dependencyMap] = noop.useState(tmp3);
        if (cResult[3] === arg1) {
          if (cResult[4] === arg0) {
            let tmp8 = cResult[5];
          }
          useMountEffectDefault(tmp8);
          if (cResult[6] !== arg0) {
            const fn2 = function c(arg0) {
              dependencyMap(arg0);
              const Storage = Storage3.Storage;
              const result = Storage.set(closure_0, arg0);
            };
            cResult[6] = arg0;
            cResult[7] = fn2;
            let tmp11 = fn2;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp11) {
            if (cResult[9] === tmp7) {
              let tmp12 = cResult[10];
            }
            return tmp12;
          }
          const items = [tmp7, tmp11];
          class S {
            constructor() {
              tmp = closure_0;
              tmp2 = closure_2;
              Storage = closure_0(closure_2[4]).Storage;
              tmp3 = closure_0;
              if (null == Storage.get(closure_0)) {
                Storage2 = tmp(tmp2[4]).Storage;
                tmp4 = closure_1;
                result = Storage2.set(tmp3, closure_1);
              }
              return;
            }
          }
          cResult[8] = tmp11;
          cResult[9] = tmp7;
          cResult[10] = items;
          tmp12 = items;
        }
        class S {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            Storage = closure_0(closure_2[4]).Storage;
            tmp3 = closure_0;
            if (null == Storage.get(closure_0)) {
              Storage2 = tmp(tmp2[4]).Storage;
              tmp4 = closure_1;
              result = Storage2.set(tmp3, closure_1);
            }
            return;
          }
        }
        cResult[3] = arg1;
        cResult[4] = arg0;
        cResult[5] = S;
        tmp8 = S;
        const tmp6 = _slicedToArray(noop.useState(tmp3), 2);
      }
      const fn = function l() {
        const Storage = Storage3.Storage;
        value = Storage.get(closure_0);
        if (null == value) {
          value = closure_1;
        }
        return value;
      };
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = fn;
      tmp3 = fn;
      const obj = require("c");
    }
  : (arg0, arg1) => {
      closure_0 = arg0;
      importDefault = arg1;
      const tmp = _slicedToArray(
        noop.useState(() => {
          const Storage = Storage3.Storage;
          value = Storage.get(closure_0);
          if (null == value) {
            value = closure_1;
          }
          return value;
        }),
        2,
      );
      dependencyMap = tmp[1];
      useMountEffectDefault(() => {
        const Storage = Storage3.Storage;
        if (null == Storage.get(closure_0)) {
          const Storage2 = Storage3.Storage;
          const result = Storage2.set(closure_0, closure_1);
        }
      });
      const items = [tmp[0]];
      const items1 = [arg0];
      items[1] = noop.useCallback((arg0) => {
        closure_2(arg0);
        const Storage = Storage3.Storage;
        const result = Storage.set(closure_0, arg0);
      }, items1);
      return items;
    };
