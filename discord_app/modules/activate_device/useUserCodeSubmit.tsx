import getLocationContextServer from "getLocationContextServer";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { OAuthConstants } from "OAuthConstants";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/activate_device/useUserCodeSubmit.tsx");

export const useUserCodeSubmit = function useUserCodeSubmit(arr, onUserCodeAccepted, onClose) {
  let closure_0 = arr;
  let closure_1 = onUserCodeAccepted;
  const callback = onClose;
  const submitting = callback2(React.useState(false), 2);
  callback2 = submitting[1];
  const error = callback2(React.useState(null), 2);
  React = error[1];
  const items = [arr, onUserCodeAccepted, onClose];
  const manualSubmit = React.useCallback(callback(function*() {
    let lib = tmp3;
    let v0 = 1;
    v0(true);
    const obj2 = outer1_0(outer1_1[5]);
    yield obj2.verifyUserCode(outer1_0);
    if (1 === tmp7) {
      v0 = 0;
      lib = getLocationContextServer;
      let status;
      if (lib != null) {
        status = lib.status;
      }
      c4((function verifyUserCodeStatusToErrorMessage(status) {
        if (429 === status) {
          const intl3 = callback(1236).intl;
          let stringResult = intl3.string(callback(1236).t.BPmZvj);
        } else {
          if (404 !== status) {
            if (400 !== status) {
              const intl = callback(1236).intl;
              stringResult = intl.string(callback(1236).t.JNQRU4);
            }
          }
          const intl2 = callback(1236).intl;
          stringResult = intl2.string(callback(1236).t.aWa1Pw);
        }
        return stringResult;
      })(status));
      v0(false);
      let status1;
      if (outer1_1 != null) {
        status1 = outer1_1.status;
      }
      if (401 === status1) {
        outer1_2();
      }
      let c5 = 3;
      const tmp22 = c4;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      let closure_0 = arg1;
      v0(false);
      const obj = { userCode: null, clientId: null, scopes: null, twoWayLinkCode: null };
      obj[0] = closure_0;
      obj[1] = closure_0.body.client_id;
      obj[2] = closure_0.body.scopes;
      obj[3] = closure_0.body.two_way_link_code;
      lib(obj);
      v0 = 0;
    }
    v0 = 0;
    return arg1;
  }), items);
  const items1 = [arr, manualSubmit];
  const effect = React.useEffect(() => {
    if (arr.length === manualSubmit.USER_CODE_LENGTH) {
      manualSubmit();
    } else {
      callback(null);
    }
  }, items1);
  return { manualSubmit, error: error[0], submitting: submitting[0] };
};