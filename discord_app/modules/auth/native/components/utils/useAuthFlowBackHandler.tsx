// discord_app/modules/auth/native/components/utils/useAuthFlowBackHandler.tsx
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_3 = fn(15947).RegistrationTransitionActionTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(step) {
  _require = step;
  dependencyMap = noop.useContext(require("Auth").TrackRegistrationContext);
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    closure_1({ step, actionType: constants.VIEWED });
    return false;
  });
}
