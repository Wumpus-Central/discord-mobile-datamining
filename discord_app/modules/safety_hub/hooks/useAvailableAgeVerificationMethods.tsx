// === Module 16587: useAvailableAgeVerificationMethods ===

// Module 16587 (useAvailableAgeVerificationMethods)
import AgeVerificationMethodsV2 from "AgeVerificationMethodsV2" /* 7993 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAvailableAgeVerificationMethods.tsx");

export function useAvailableAgeVerificationMethods() {
  [tmp2, require] = noop.useState({ methods: null, loading: true });
  const effect = noop.useEffect(() => {
    c0 = false;
    const ageVerificationMethodsV2SuspendedUser = AgeVerificationMethodsV2.fetchAgeVerificationMethodsV2SuspendedUser();
    const nextPromise = ageVerificationMethodsV2SuspendedUser.then((methods) => {
      closure_1_1(572).dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage });
      const obj = closure_1_1(572);
      const obj2 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage };
      return _true(7994).getAvailableMethodsV2(methods.methods);
    });
    ageVerificationMethodsV2SuspendedUser.then((methods) => {
      closure_1_1(572).dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage });
      const obj = closure_1_1(572);
      const obj2 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage };
      return _true(7994).getAvailableMethodsV2(methods.methods);
    }).then((methods) => {
      if (!c0) {
        const obj = { methods, loading: false };
        require(obj);
      }
    }).catch(() => {
      if (!c0) {
        require({ methods: null, loading: false });
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  return tmp2;
}