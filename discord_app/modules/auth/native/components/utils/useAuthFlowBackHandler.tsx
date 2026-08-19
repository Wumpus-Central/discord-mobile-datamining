// === Module 15228: useAuthFlowBackHandler ===

// Module 15228 (useAuthFlowBackHandler)
import noop from "noop" /* 19 */;
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes" /* 15213 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  dependencyMap = React.useContext(_require(15210).TrackRegistrationContext);
  _require(6318).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: closure_1_3.VIEWED });
    return false;
  });
};