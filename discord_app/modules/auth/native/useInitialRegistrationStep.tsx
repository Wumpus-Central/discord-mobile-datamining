// discord_app/modules/auth/native/useInitialRegistrationStep.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../../stores/AuthenticationStore.tsx";
import closure_5 from "../../../stores/ConsentStore.tsx";
import { resetRegistration } from "RegistrationUIStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/auth/native/useInitialRegistrationStep.tsx");

export default function useInitialRegistrationStep(arg0) {
  const _require = arg0;
  const items = [closure_5];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => authenticationConsentRequired.getAuthenticationConsentRequired(),
  );
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
}
