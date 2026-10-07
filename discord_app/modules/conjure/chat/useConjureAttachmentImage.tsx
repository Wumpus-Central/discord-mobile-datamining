// discord_app/modules/conjure/chat/useConjureAttachmentImage.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const ConjureConnectionStore = fn(12923);
({ getAttachmentUrl: closure_4, isAttachmentAvailable: hasOwnProperty } = ConjureConnectionStore);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/useConjureAttachmentImage.tsx");

export const useConjureAttachmentImage = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(13);
      const obj = require("c");
      [tmp3, _slicedToArray] = noop.useState(null);
      const tmp2 = _slicedToArray(noop.useState(null), 2);
      [tmp5, noop] = noop.useState(false);
      [first, closure_5] = noop.useState(0);
      if (cResult[0] === arg1) {
        if (cResult[1] === first) {
          if (cResult[2] === arg0) {
            let tmp8 = cResult[3];
            let tmp9 = cResult[4];
          }
          const effect = noop.useEffect(tmp8, tmp9);
          if (cResult[5] === arg1) {
            if (cResult[6] === first) {
              if (cResult[7] === arg0) {
                let tmp11 = cResult[8];
              }
              if (cResult[9] === tmp5) {
                if (cResult[10] === tmp11) {
                  if (cResult[11] === tmp3) {
                    let tmp12 = cResult[12];
                  }
                  return tmp12;
                }
              }
              const obj3 = { src: tmp3, gone: tmp5, handleError: tmp11 };
              cResult[9] = tmp5;
              cResult[10] = tmp11;
              cResult[11] = tmp3;
              cResult[12] = obj3;
              tmp12 = obj3;
            }
          }
          const fn2 = function f() {
            _slicedToArray(null);
            hasOwnProperty(closure_0, closure_1).then(
              (result) => {
                if (result) {
                  if (0 === first) {
                    closure_1_5(1);
                  }
                }
                closure_1_3(true);
              },
              () => closure_1_3(true),
            );
          };
          cResult[5] = arg1;
          cResult[6] = first;
          cResult[7] = arg0;
          cResult[8] = fn2;
          tmp11 = fn2;
        }
      }
      const fn = function o() {
        c0 = false;
        first(c0, closure_1).then(
          (result) => {
            if (!c0) {
              _slicedToArray(result);
            }
          },
          () => {
            if (!c0) {
              if (0 === first) {
                closure_5(1);
              } else {
                noop(true);
              }
            }
          },
        );
        return () => {
          c0 = true;
        };
      };
      const items = [arg0, arg1, first];
      cResult[0] = arg1;
      cResult[1] = first;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items;
      tmp9 = items;
      tmp8 = fn;
      const tmp4 = _slicedToArray(noop.useState(false), 2);
    }
  : (arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const tmp = _slicedToArray(noop.useState(null), 2);
      _slicedToArray = tmp[1];
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      noop = tmp2[1];
      [first, closure_5] = noop.useState(0);
      const items = [arg0, arg1, first];
      const effect = noop.useEffect(() => {
        c0 = false;
        first(c0, closure_1).then(
          (result) => {
            if (!c0) {
              closure_2(result);
            }
          },
          () => {
            if (!c0) {
              if (0 === first) {
                closure_5(1);
              } else {
                closure_3(true);
              }
            }
          },
        );
        return () => {
          c0 = true;
        };
      }, items);
      const obj = { src: tmp[0], gone: tmp2[0], handleError: null };
      const items1 = [arg0, arg1, first];
      obj.handleError = noop.useCallback(() => {
        closure_2(null);
        hasOwnProperty(closure_0, closure_1).then(
          (result) => {
            if (result) {
              if (0 === first) {
                closure_1_5(1);
              }
            }
            closure_1_3(true);
          },
          () => closure_1_3(true),
        );
      }, items1);
      return obj;
    };
