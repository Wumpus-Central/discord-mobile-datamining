// === Module 15961: useInitialRegistrationStep ===

// Module 15961 (useInitialRegistrationStep)
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 15945 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConsentStore from "ConsentStore" /* 6595 */;

require = fn;
const resetRegistration = fn(15946).resetRegistration;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/useInitialRegistrationStep.tsx");

export default function useInitialRegistrationStep(arg0) {
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
          stateFromStores(dependencyMap[6]).loginReset();
          const obj = stateFromStores(dependencyMap[6]);
        }
      };
    }
    obj = RegistrationStepsUtils;
  }, items2);
};