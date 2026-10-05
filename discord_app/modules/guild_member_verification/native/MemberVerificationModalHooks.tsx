// === Module 5965: MemberVerificationModalHooks ===

// Module 5965 (MemberVerificationModalHooks)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import InitialMemberVerificationStore2 from "InitialMemberVerificationStore" /* 5966 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const InitialMemberVerificationStore = InitialMemberVerificationStore2;
let _require, currentUser, dependencyMap;

let react = react_mod;
const setInitialVerification = InitialMemberVerificationStore2.setInitialVerification;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let current;
  let ref;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(8);
  const tmp2 = closure_7(arg0);
  const tmp3 = closure_6();
  if (cResult[0] === tmp2) {
    let tmp4;
    let tmp8;
    if (cResult[1] === tmp3) {
      tmp4 = cResult[2];
    }
    dependencyMap = tmp4;
    react = react.useRef(tmp4);
    if (cResult[3] !== tmp4) {
      class S {
        constructor() {
          closure_2.current = closure_1;
          return;
        }
      }
      cResult[3] = tmp4;
      cResult[4] = S;
    } else {
      class S {
        constructor() {
          closure_2.current = closure_1;
          return;
        }
      }
    }
    const effect = obj3.useEffect(S);
    if (cResult[5] !== arg0) {
      class V {
        constructor() {
          if (null == closure_2.current.initial) {
            tmp2 = setInitialVerification;
            tmp3 = closure_0;
            tmp4 = setInitialVerification(closure_0, tmp);
          }
          return;
        }
      }
      const items = [arg0];
      cResult[5] = arg0;
      cResult[6] = V;
      cResult[7] = items;
      tmp8 = items;
    } else {
      class V {
        constructor() {
          if (null == closure_2.current.initial) {
            tmp2 = setInitialVerification;
            tmp3 = closure_0;
            tmp4 = setInitialVerification(closure_0, tmp);
          }
          return;
        }
      }
      tmp8 = cResult[7];
    }
    const effect1 = obj3.useEffect(V, tmp8);
    return tmp4.initial;
  }
  const obj2 = { initial: tmp2, current: tmp3 };
  cResult[0] = tmp2;
  cResult[1] = tmp3;
  cResult[2] = obj2;
  tmp4 = obj2;
}) : ((arg0) => {
  let ref;
  let closure_0 = arg0;
  const current = { initial: closure_7(arg0), current: closure_6() };
  react = react.useRef(current);
  const effect = react.useEffect(() => {
    ref.current = current;
  });
  const items = [arg0];
  const effect1 = react.useEffect(() => {
    if (null == ref.current.initial) {
      setInitialVerification(closure_0, tmp);
    }
  }, items);
  return current.initial;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      currentUser = currentUser.getCurrentUser();
      let flag;
      const EMAIL = require("MemberVerificationTypes").UserVerificationFieldPlatforms.EMAIL;
      if (currentUser != null) {
        flag = currentUser.verified;
      }
      if (flag == null) {
        flag = false;
      }
      const obj = {};
      obj[EMAIL] = flag;
      let flag2;
      const PHONE = require("MemberVerificationTypes").UserVerificationFieldPlatforms.PHONE;
      if (currentUser != null) {
        flag2 = currentUser.isPhoneVerified();
      }
      if (flag2 == null) {
        flag2 = false;
      }
      obj[PHONE] = flag2;
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresObject(tmp4, tmp5);
}) : (() => {
  let obj = get_initialized;
  const items = [UserStore];
  return obj.useStateFromStoresObject(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    const EMAIL = require("MemberVerificationTypes").UserVerificationFieldPlatforms.EMAIL;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    const obj = {};
    obj[EMAIL] = flag;
    let flag2;
    const PHONE = require("MemberVerificationTypes").UserVerificationFieldPlatforms.PHONE;
    if (currentUser != null) {
      flag2 = currentUser.isPhoneVerified();
    }
    if (flag2 == null) {
      flag2 = false;
    }
    obj[PHONE] = flag2;
    return obj;
  });
});
let closure_6 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [InitialMemberVerificationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return InitialMemberVerificationStore.getInitialVerificationState(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [InitialMemberVerificationStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => InitialMemberVerificationStore.getInitialVerificationState(closure_0), items1);
});
let closure_7 = tmp4;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalHooks.tsx");

export const useSetInitialVerificationEffect = tmp2;
export const useUserVerificationState = tmp3;
export const useInitialVerification = tmp4;