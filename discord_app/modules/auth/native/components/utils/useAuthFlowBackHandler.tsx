// discord_app/modules/auth/native/components/utils/useAuthFlowBackHandler.tsx
import closure_2 from "../../../../../../_runtime/00019_noop.js";
import { RegistrationTransitionActionTypes as closure_3 } from "../../../RegistrationConstants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  dependencyMap = React.useContext(require("../Auth.tsx").TrackRegistrationContext);
  require("../../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx").useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: closure_1_3.VIEWED });
    return false;
  });
};