// discord_app/modules/safety_hub/hooks/useAvailableAgeVerificationMethods.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let first;
      let first1;
      let tmp5;
      let tmp6;
      let obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { methods: null, loading: true };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      [first1, _require] = react.useState(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h() {
          let c0 = false;
          let obj = _true(dependencyMap[4]);
          const ageVerificationMethodsV2SuspendedUser = obj.fetchAgeVerificationMethodsV2SuspendedUser();
          const nextPromise = ageVerificationMethodsV2SuspendedUser.then((methods) => {
            const obj = closure_1_1(closure_1_2[5]);
            const obj2 = {
              type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
              methods: methods.methods,
              footerMessage: methods.footerMessage,
              outageBannerMessage: methods.outageBannerMessage,
            };
            obj.dispatch(obj2);
            const obj3 = _true(closure_1_2[6]);
            return obj3.getAvailableMethodsV2(methods.methods);
          });
          const nextPromise1 = nextPromise.then((methods) => {
            if (!c0) {
              const obj = { methods, loading: false };
              _true(obj);
            }
          });
          nextPromise1.catch(() => {
            if (!c0) {
              _true({ methods: null, loading: false });
            }
          });
          return () => {
            let c0 = true;
          };
        };
        const items = [];
        cResult[1] = fn;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = react.useEffect(tmp5, tmp6);
      return first1;
    }
  : () => {
      let require;
      let tmp2;
      [tmp2, require] = react.useState({ methods: null, loading: true });
      _slicedToArray(react.useState({ methods: null, loading: true }), 2);
      const effect = react.useEffect(() => {
        let _true;
        let c0 = false;
        let obj = require("AgeVerificationMethodsV2");
        const ageVerificationMethodsV2SuspendedUser = obj.fetchAgeVerificationMethodsV2SuspendedUser();
        const nextPromise = ageVerificationMethodsV2SuspendedUser.then((methods) => {
          const obj = closure_1_1(closure_1_2[5]);
          const obj2 = {
            type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
            methods: methods.methods,
            footerMessage: methods.footerMessage,
            outageBannerMessage: methods.outageBannerMessage,
          };
          obj.dispatch(obj2);
          const obj3 = _true(closure_1_2[6]);
          return obj3.getAvailableMethodsV2(methods.methods);
        });
        const nextPromise1 = nextPromise.then((methods) => {
          if (!c0) {
            const obj = { methods, loading: false };
            _require(obj);
          }
        });
        nextPromise1.catch(() => {
          if (!c0) {
            _require({ methods: null, loading: false });
          }
        });
        return () => {
          let c0 = true;
        };
      }, []);
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAvailableAgeVerificationMethods.tsx");

export const useAvailableAgeVerificationMethods = tmp2;
