// === Module 15882: useInitialRegistrationStep ===

// Module 15882 (useInitialRegistrationStep)
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6082 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 15866 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConsentStore from "ConsentStore" /* 6084 */;

const require = globalThis.__r;

require = fn;
const resetRegistration = fn(15867).resetRegistration;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/useInitialRegistrationStep.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(9);
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
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === arg0) {
      let tmp8 = cResult[4];
      let tmp9 = cResult[5];
    }
    const effect = noop.useEffect(tmp8, tmp9);
    if (cResult[6] !== arg0) {
      class F {
        constructor() {
          obj = closure_0(closure_2[4]);
          if (closure_0 === obj.getRegistrationSteps()[1]) {
            return () => {
              closure_1_6();
              if (!authenticated.isAuthenticated()) {
                stateFromStores(dependencyMap[8]).loginReset();
                const obj = stateFromStores(dependencyMap[8]);
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
      let tmp12 = items1;
    } else {
      class F {
        constructor() {
          obj = closure_0(closure_2[4]);
          if (closure_0 === obj.getRegistrationSteps()[1]) {
            return () => {
              closure_1_6();
              if (!authenticated.isAuthenticated()) {
                stateFromStores(dependencyMap[8]).loginReset();
                const obj = stateFromStores(dependencyMap[8]);
              }
            };
          } else {
            return;
          }
        }
      }
      tmp12 = cResult[8];
    }
    const effect1 = noop.useEffect(F, tmp12);
  }
  class S {
    constructor() {
      tmp = closure_2;
      obj = closure_0(closure_2[4]);
      tmp2 = closure_0 === obj.getRegistrationSteps()[1];
      if (tmp2) {
        tmp3 = closure_1;
        tmp4 = null;
        tmp2 = null == closure_1;
      }
      if (tmp2) {
        tmp5 = closure_1;
        obj2 = closure_1(tmp[8]);
        locationMetadata = obj2.getLocationMetadata();
      }
      return;
    }
  }
  const items2 = [stateFromStores, arg0];
  cResult[2] = stateFromStores;
  cResult[3] = arg0;
  cResult[4] = S;
  cResult[5] = items2;
  tmp9 = items2;
  tmp8 = S;
  const tmpResult = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [ConsentStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  const items1 = [stateFromStores, arg0];
  const effect = noop.useEffect(() => {
    let tmp2 = closure_0 === RegistrationStepsUtils.getRegistrationSteps()[1];
    if (tmp2) {
      tmp2 = null == stateFromStores;
    }
    if (tmp2) {
      const locationMetadata = AuthenticationActionCreatorsDefault.getLocationMetadata();
    }
  }, items1);
  const items2 = [arg0];
  const effect1 = noop.useEffect(() => {
    if (closure_0 === obj.getRegistrationSteps()[1]) {
      return () => {
        closure_1_6();
        if (!authenticated.isAuthenticated()) {
          stateFromStores(dependencyMap[8]).loginReset();
          const obj = stateFromStores(dependencyMap[8]);
        }
      };
    }
    obj = RegistrationStepsUtils;
  }, items2);
});