// === Module 15466: useAuthFlowBackHandler ===

// Module 15466 (useAuthFlowBackHandler)
import closure_2 from "noop" /* 19 */;
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes" /* 15451 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  dependencyMap = React.useContext(_require(15448).TrackRegistrationContext);
  _require(5453).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: closure_1_3.VIEWED });
    return false;
  });
};