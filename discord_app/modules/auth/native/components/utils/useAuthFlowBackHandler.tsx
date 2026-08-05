import { useNavigatorBackPressHandler } from "../../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";
import { NavigatorWithCaptchaHook } from "../Auth.tsx";
// discord_app/modules/auth/native/components/utils/useAuthFlowBackHandler.tsx
import noop from "noop";
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes";

const require = arg1;
const result = require("NavigatorWithCaptchaHook").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  const dependencyMap = React.useContext(_NavigatorWithCaptchaHook.TrackRegistrationContext);
  _useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: outer1_3.VIEWED });
    return false;
  });
};