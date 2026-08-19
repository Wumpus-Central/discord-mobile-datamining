// discord_app/modules/auth/native/components/utils/useAuthFlowBackHandler.tsx
import noop from "../../../../../../_runtime/00019_noop.js";
import { RegistrationTransitionActionTypes as closure_3 } from "../../../RegistrationConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  dependencyMap = React.useContext(require("../Auth.tsx").TrackRegistrationContext);
  require("../../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx").useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: closure_1_3.VIEWED });
    return false;
  });
};