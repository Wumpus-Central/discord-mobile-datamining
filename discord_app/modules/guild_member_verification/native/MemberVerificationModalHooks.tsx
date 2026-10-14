// discord_app/modules/guild_member_verification/native/MemberVerificationModalHooks.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import InitialMemberVerificationStore from "InitialMemberVerificationStore.tsx";

const require = globalThis.__r;

require = fn;
const setInitialVerification = fn(6158).setInitialVerification;
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useUserVerificationState() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function c() {
          currentUser = currentUser.getCurrentUser();
          let flag;
          if (currentUser != null) {
            flag = currentUser.verified;
          }
          if (flag == null) {
            flag = false;
          }
          const obj = {};
          obj[require("MemberVerificationTypes").UserVerificationFieldPlatforms.EMAIL] = flag;
          let flag2;
          if (currentUser != null) {
            flag2 = currentUser.isPhoneVerified();
          }
          if (flag2 == null) {
            flag2 = false;
          }
          obj[require("MemberVerificationTypes").UserVerificationFieldPlatforms.PHONE] = flag2;
          return obj;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStoresObject(tmp4, tmp5);
    }
  : function useUserVerificationState() {
      const items = [UserStore];
      return initialize.useStateFromStoresObject(items, () => {
        currentUser = currentUser.getCurrentUser();
        let flag;
        if (currentUser != null) {
          flag = currentUser.verified;
        }
        if (flag == null) {
          flag = false;
        }
        const obj = {};
        obj[require("MemberVerificationTypes").UserVerificationFieldPlatforms.EMAIL] = flag;
        let flag2;
        if (currentUser != null) {
          flag2 = currentUser.isPhoneVerified();
        }
        if (flag2 == null) {
          flag2 = false;
        }
        obj[require("MemberVerificationTypes").UserVerificationFieldPlatforms.PHONE] = flag2;
        return obj;
      });
    };
let closure_6 = tmp3;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useInitialVerification(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [InitialMemberVerificationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return InitialMemberVerificationStore.getInitialVerificationState(closure_0);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6, tmp7);
    }
  : function useInitialVerification(arg0) {
      _require = arg0;
      const items = [InitialMemberVerificationStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStores(
        items,
        () => InitialMemberVerificationStore.getInitialVerificationState(closure_0),
        items1,
      );
    };
let closure_7 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalHooks.tsx");

export const useSetInitialVerificationEffect = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSetInitialVerificationEffect(arg0) {
      _require = arg0;
      const cResult = require("c").c(8);
      const tmp2 = closure_7(arg0);
      const tmp3 = closure_6();
      if (cResult[0] === tmp2) {
        if (cResult[1] === tmp3) {
          let tmp4 = cResult[2];
        }
        dependencyMap = tmp4;
        noop = noop.useRef(tmp4);
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
          class S {
            constructor() {
              closure_2.current = closure_1;
              return;
            }
          }
          const items = [arg0];
          cResult[5] = arg0;
          cResult[6] = tmp9;
          cResult[7] = items;
          let tmp8 = items;
        } else {
          class S {
            constructor() {
              closure_2.current = closure_1;
              return;
            }
          }
          tmp8 = cResult[7];
        }
        const effect1 = obj3.useEffect(tmp9, tmp8);
        return tmp4.initial;
      }
      const obj2 = { initial: tmp2, current: tmp3 };
      cResult[0] = tmp2;
      cResult[1] = tmp3;
      cResult[2] = obj2;
      tmp4 = obj2;
      const obj = require("c");
    }
  : function useSetInitialVerificationEffect(arg0) {
      closure_0 = arg0;
      const current = { initial: closure_7(arg0), current: closure_6() };
      noop = noop.useRef(current);
      const effect = noop.useEffect(() => {
        closure_2.current = current;
      });
      const items = [arg0];
      const effect1 = noop.useEffect(() => {
        if (null == ref.current.initial) {
          setInitialVerification(closure_0, tmp);
        }
      }, items);
      return current.initial;
    };
export const useUserVerificationState = tmp3;
export const useInitialVerification = tmp4;
