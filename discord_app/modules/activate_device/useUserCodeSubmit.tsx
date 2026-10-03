// discord_app/modules/activate_device/useUserCodeSubmit.tsx
import util from "../../intl/index.native.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function verifyUserCodeStatusToErrorMessage(status) {
  if (429 === status) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t.BPmZvj);
  } else {
    if (404 !== status) {
      if (400 !== status) {
        const intl = util.intl;
        stringResult = intl.string(util.t.JNQRU4);
      }
    }
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.aWa1Pw);
  }
  return stringResult;
}
const OAuthConstants = fn(13692).OAuthConstants;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/useUserCodeSubmit.tsx");

export const useUserCodeSubmit = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      _require = arg0;
      dependencyMap = arg1;
      asyncGeneratorStep = arg2;
      const cResult = require("c").c(12);
      const obj = require("c");
      [tmp3, _slicedToArray] = noop.useState(false);
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      [tmp5, noop] = noop.useState(null);
      if (cResult[0] === arg2) {
        if (cResult[1] === arg1) {
          if (cResult[2] === arg0) {
            let tmp6 = cResult[3];
          }
          closure_5 = tmp6;
          if (cResult[4] === tmp6) {
            if (cResult[5] === arg0) {
              let tmp7 = cResult[6];
              let tmp8 = cResult[7];
            }
            const effect = noop.useEffect(tmp7, tmp8);
            if (cResult[8] === tmp5) {
              if (cResult[9] === tmp6) {
                if (cResult[10] === tmp3) {
                  let tmp10 = cResult[11];
                }
                return tmp10;
              }
            }
            const obj3 = { manualSubmit: tmp6, error: tmp5, submitting: tmp3 };
            cResult[8] = tmp5;
            cResult[9] = tmp6;
            cResult[10] = tmp3;
            cResult[11] = obj3;
            tmp10 = obj3;
          }
          const fn2 = function h() {
            if (length.length === OAuthConstants.USER_CODE_LENGTH) {
              closure_5();
            } else {
              noop(null);
            }
          };
          const items = [arg0, tmp6];
          cResult[4] = tmp6;
          cResult[5] = arg0;
          cResult[6] = fn2;
          cResult[7] = items;
          tmp8 = items;
          tmp7 = fn2;
        }
      }
      _require = asyncGeneratorStep(async () => {
        let v0 = 1;
        v0(true);
        await userCode(tmp3[7]).verifyUserCode(userCode);
        if (1 === tmp7) {
          v0 = 0;
          closure_128_1 = tmp39;
          let status;
          if (closure_128_1 != null) {
            status = closure_128_1.status;
          }
          c4(verifyUserCodeStatusToErrorMessage(status));
          v0(false);
          let status1;
          if (closure_128_1 != null) {
            status1 = closure_128_1.status;
          }
          if (401 === status1) {
            tmp39();
          }
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value;
          v0(false);
          tmp3({
            userCode,
            clientId: closure_128_0.body.client_id,
            scopes: closure_128_0.body.scopes,
            twoWayLinkCode: closure_128_0.body.two_way_link_code,
          });
          v0 = 0;
        }
        v0 = 0;
        return value;
      });
      const fn = function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      cResult[0] = arg2;
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      tmp6 = fn;
      const tmp4 = _slicedToArray(noop.useState(null), 2);
    }
  : (arg0, arg1, arg2) => {
      closure_1 = arg1;
      asyncGeneratorStep = arg2;
      const submitting = _slicedToArray(noop.useState(false), 2);
      _slicedToArray = submitting[1];
      const error = _slicedToArray(noop.useState(null), 2);
      noop = error[1];
      const items = [arg0, arg1, arg2];
      const manualSubmit = noop.useCallback(
        asyncGeneratorStep(async () => {
          v0(true);
          await closure_0(tmp3[7]).verifyUserCode(closure_0);
          if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = closure_2;
            let status;
            if (closure_128_1 != null) {
              status = closure_128_1.status;
            }
            closure_129_4(verifyUserCodeStatusToErrorMessage(status));
            closure_129_3(false);
            let status1;
            if (closure_128_1 != null) {
              status1 = closure_128_1.status;
            }
            if (401 === status1) {
              closure_129_2();
            }
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            closure_129_3(false);
            closure_129_1({
              userCode: closure_129_0,
              clientId: closure_128_0.body.client_id,
              scopes: closure_128_0.body.scopes,
              twoWayLinkCode: closure_128_0.body.two_way_link_code,
            });
            c3 = 0;
          }
          return value;
        }),
        items,
      );
      const items1 = [arg0, manualSubmit];
      const effect = noop.useEffect(() => {
        if (length.length === OAuthConstants.USER_CODE_LENGTH) {
          manualSubmit();
        } else {
          closure_4(null);
        }
      }, items1);
      return { manualSubmit, error: error[0], submitting: submitting[0] };
    };
