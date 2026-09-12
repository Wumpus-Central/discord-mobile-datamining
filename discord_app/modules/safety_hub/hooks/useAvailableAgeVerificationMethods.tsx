// === Module 14855: useAvailableAgeVerificationMethods ===

// Module 14855 (useAvailableAgeVerificationMethods)
import AgeVerificationMethodsV2 from "AgeVerificationMethodsV2" /* 8555 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAvailableAgeVerificationMethods.tsx");

export const useAvailableAgeVerificationMethods = function useAvailableAgeVerificationMethods() {
  [tmp2, require] = _slicedToArray(noop.useState({ methods: null, loading: true }), 2);
  const effect = noop.useEffect(() => {
    c0 = false;
    const ageVerificationMethodsV2SuspendedUser = AgeVerificationMethodsV2.fetchAgeVerificationMethodsV2SuspendedUser();
    const nextPromise = ageVerificationMethodsV2SuspendedUser.then((methods) => {
      closure_1_1(573);
      const obj = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage };
      obj.dispatch(obj);
      return _true(8556).getAvailableMethodsV2(methods.methods);
    });
    ageVerificationMethodsV2SuspendedUser.then((methods) => {
      closure_1_1(573);
      const obj = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage };
      obj.dispatch(obj);
      return _true(8556).getAvailableMethodsV2(methods.methods);
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
};