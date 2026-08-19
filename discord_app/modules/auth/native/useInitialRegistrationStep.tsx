// discord_app/modules/auth/native/useInitialRegistrationStep.tsx
import noop from "../../../../_runtime/00019_noop.js";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import hasConsented from "../../../stores/ConsentStore.tsx";
import { resetRegistration } from "RegistrationUIStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/auth/native/useInitialRegistrationStep.tsx");

export default function useInitialRegistrationStep(arg0) {
  const _require = arg0;
  const items = [closure_5];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  const items1 = [stateFromStores, arg0];
  const effect = React.useEffect(() => {
    let tmp2 = callback === callback(dependencyMap[4]).getRegistrationSteps()[1];
    if (tmp2) {
      tmp2 = null == stateFromStores;
    }
    if (tmp2) {
      const locationMetadata = stateFromStores(dependencyMap[6]).getLocationMetadata();
      const obj2 = stateFromStores(dependencyMap[6]);
    }
    const obj = callback(dependencyMap[4]);
  }, items1);
  const items2 = [arg0];
  const effect1 = React.useEffect(() => {
    if (callback === obj.getRegistrationSteps()[1]) {
      return () => {
        callback2();
        if (!authenticated.isAuthenticated()) {
          callback(table[6]).loginReset();
          const obj = callback(table[6]);
        }
      };
    }
    obj = callback(dependencyMap[4]);
  }, items2);
};