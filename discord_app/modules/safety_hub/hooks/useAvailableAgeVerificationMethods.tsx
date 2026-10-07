// === Module 14568: useAvailableAgeVerificationMethods ===

// Module 14568 (useAvailableAgeVerificationMethods)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAvailableAgeVerificationMethods.tsx");

export const useAvailableAgeVerificationMethods = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { methods: null, loading: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp3 = _slicedToArray(noop.useState(first), 2);
  _require = tmp3[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h() {
      c0 = false;
      const ageVerificationMethodsV2SuspendedUser = _true(dependencyMap[4]).fetchAgeVerificationMethodsV2SuspendedUser();
      let obj = _true(dependencyMap[4]);
      const nextPromise = ageVerificationMethodsV2SuspendedUser.then((methods) => {
        closure_1_1(584).dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage });
        const obj = closure_1_1(584);
        const obj2 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage };
        return _true(8147).getAvailableMethodsV2(methods.methods);
      });
      ageVerificationMethodsV2SuspendedUser.then((methods) => {
        closure_1_1(584).dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage });
        const obj = closure_1_1(584);
        const obj2 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage };
        return _true(8147).getAvailableMethodsV2(methods.methods);
      }).then((methods) => {
        if (!c0) {
          const obj = { methods, loading: false };
          _true(obj);
        }
      }).catch(() => {
        if (!c0) {
          _true({ methods: null, loading: false });
        }
      });
      return () => {
        c0 = true;
      };
    };
    const items = [];
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  return tmp3[0];
}) : (() => {
  [tmp2, require] = noop.useState({ methods: null, loading: true });
  const effect = noop.useEffect(() => {
    c0 = false;
    const ageVerificationMethodsV2SuspendedUser = require("AgeVerificationMethodsV2").fetchAgeVerificationMethodsV2SuspendedUser();
    let obj = require("AgeVerificationMethodsV2");
    const nextPromise = ageVerificationMethodsV2SuspendedUser.then((methods) => {
      closure_1_1(584).dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage });
      const obj = closure_1_1(584);
      const obj2 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage };
      return _true(8147).getAvailableMethodsV2(methods.methods);
    });
    ageVerificationMethodsV2SuspendedUser.then((methods) => {
      closure_1_1(584).dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage });
      const obj = closure_1_1(584);
      const obj2 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage };
      return _true(8147).getAvailableMethodsV2(methods.methods);
    }).then((methods) => {
      if (!c0) {
        const obj = { methods, loading: false };
        _require(obj);
      }
    }).catch(() => {
      if (!c0) {
        _require({ methods: null, loading: false });
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  return tmp2;
});