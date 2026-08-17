// discord_app/modules/auth/native/useInitialRegistrationStep.tsx
import closure_3 from "noop" /* 19 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "hasConsented" /* 5258 */;
import { resetRegistration } from "useRegistrationUIStore" /* 15212 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/auth/native/useInitialRegistrationStep.tsx");

export default function useInitialRegistrationStep(arg0) {
  const _require = arg0;
  const items = [closure_5];
  const stateFromStores = _initialize.useStateFromStores(items, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  const items1 = [stateFromStores, arg0];
  const effect = React.useEffect(() => {
    let tmp2 = callback === callback(closure_1_2[4]).getRegistrationSteps()[1];
    if (tmp2) {
      tmp2 = null == stateFromStores;
    }
    if (tmp2) {
      const locationMetadata = stateFromStores(closure_1_2[6]).getLocationMetadata();
      const obj2 = stateFromStores(closure_1_2[6]);
    }
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
    obj = callback(closure_1_2[4]);
  }, items2);
};