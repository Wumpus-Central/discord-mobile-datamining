// === Module 13883: useUserCodeSubmit ===

// Module 13883 (useUserCodeSubmit)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const OAuthConstants = fn(13882).OAuthConstants;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/useUserCodeSubmit.tsx");

export const useUserCodeSubmit = function useUserCodeSubmit(arr, onUserCodeAccepted, onClose) {
  closure_0 = arr;
  closure_1 = onUserCodeAccepted;
  asyncGeneratorStep = onClose;
  const submitting = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = submitting[1];
  const error = _slicedToArray(noop.useState(null), 2);
  noop = error[1];
  const items = [arr, onUserCodeAccepted, onClose];
  const manualSubmit = noop.useCallback(asyncGeneratorStep(async () => {
    v0(true);
    await closure_0(tmp3[5]).verifyUserCode(closure_0);
    if (1 === tmp7) {
      c3 = 0;
      closure_128_1 = closure_2;
      let status;
      if (closure_128_1 != null) {
        status = closure_128_1.status;
      }
      closure_129_4((function verifyUserCodeStatusToErrorMessage(status) {
        if (429 === status) {
          const intl3 = closure_1_0(1114).intl;
          let stringResult = intl3.string(closure_1_0(1114).t.BPmZvj);
        } else {
          if (404 !== status) {
            if (400 !== status) {
              const intl = closure_1_0(1114).intl;
              stringResult = intl.string(closure_1_0(1114).t.JNQRU4);
            }
          }
          const intl2 = closure_1_0(1114).intl;
          stringResult = intl2.string(closure_1_0(1114).t.aWa1Pw);
        }
        return stringResult;
      })(status));
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
      closure_129_1({ userCode: closure_129_0, clientId: closure_128_0.body.client_id, scopes: closure_128_0.body.scopes, twoWayLinkCode: closure_128_0.body.two_way_link_code });
      c3 = 0;
    }
    return value;
  }), items);
  const items1 = [arr, manualSubmit];
  const effect = noop.useEffect(() => {
    if (closure_0.length === OAuthConstants.USER_CODE_LENGTH) {
      manualSubmit();
    } else {
      closure_4(null);
    }
  }, items1);
  return { manualSubmit, error: error[0], submitting: submitting[0] };
};