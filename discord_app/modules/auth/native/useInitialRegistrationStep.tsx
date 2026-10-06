// === Module 15921: useInitialRegistrationStep ===

// Module 15921 (useInitialRegistrationStep)
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6089 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 15905 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15906 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConsentStore from "ConsentStore" /* 6091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const resetRegistration = RegistrationUIStore.resetRegistration;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let authenticationConsentRequired;
  let closure_0;
  let tmp4;
  let tmp5;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(9);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConsentStore];
    const fn = function f() {
      return authenticationConsentRequired.getAuthenticationConsentRequired();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === stateFromStores) {
    let tmp8;
    let tmp9;
    let tmp12;
    if (cResult[3] === arg0) {
      tmp8 = cResult[4];
      tmp9 = cResult[5];
    }
    const effect = react.useEffect(tmp8, tmp9);
    if (cResult[6] !== arg0) {
      class F {
        constructor() {
          obj = closure_0(closure_2[4]);
          if (closure_0 === obj.getRegistrationSteps()[1]) {
            return () => {
              closure_1_6();
              if (!authenticated.isAuthenticated()) {
                const obj = stateFromStores(closure_1_2[8]);
                obj.loginReset();
              }
            };
          } else {
            return;
          }
        }
      }
      const items1 = [arg0];
      cResult[6] = arg0;
      cResult[7] = F;
      cResult[8] = items1;
      tmp12 = items1;
    } else {
      class F {
        constructor() {
          obj = closure_0(closure_2[4]);
          if (closure_0 === obj.getRegistrationSteps()[1]) {
            return () => {
              closure_1_6();
              if (!authenticated.isAuthenticated()) {
                const obj = stateFromStores(closure_1_2[8]);
                obj.loginReset();
              }
            };
          } else {
            return;
          }
        }
      }
      tmp12 = cResult[8];
    }
    const effect1 = react.useEffect(F, tmp12);
  }
  class S {
    constructor() {
      const obj = RegistrationStepsUtils;
      const tmp2 = closure_0 === obj.getRegistrationSteps()[1] && null == stateFromStores;
      if (tmp2) {
        const obj2 = AuthenticationActionCreatorsDefault;
        const locationMetadata = obj2.getLocationMetadata();
      }
    }
  }
  const items2 = [stateFromStores, arg0];
  cResult[2] = stateFromStores;
  cResult[3] = arg0;
  cResult[4] = S;
  cResult[5] = items2;
  tmp9 = items2;
  tmp8 = S;
}) : ((arg0) => {
  let authenticationConsentRequired;
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConsentStore];
  const stateFromStores = obj.useStateFromStores(items, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  const items1 = [stateFromStores, arg0];
  const effect = react.useEffect(() => {
    const obj = RegistrationStepsUtils;
    const tmp2 = closure_0 === obj.getRegistrationSteps()[1] && null == stateFromStores;
    if (tmp2) {
      const obj2 = AuthenticationActionCreatorsDefault;
      const locationMetadata = obj2.getLocationMetadata();
    }
  }, items1);
  const items2 = [arg0];
  const effect1 = react.useEffect(() => {
    let authenticated;
    let obj = RegistrationStepsUtils;
    if (closure_0 === obj.getRegistrationSteps()[1]) {
      return () => {
        closure_1_6();
        if (!authenticated.isAuthenticated()) {
          const obj = stateFromStores(closure_1_2[8]);
          obj.loginReset();
        }
      };
    }
  }, items2);
});
const result = size.fileFinishedImporting("modules/auth/native/useInitialRegistrationStep.tsx");

export default tmp2;