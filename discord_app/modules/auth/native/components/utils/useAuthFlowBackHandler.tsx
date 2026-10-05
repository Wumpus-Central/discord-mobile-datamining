// discord_app/modules/auth/native/components/utils/useAuthFlowBackHandler.tsx
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(15868).RegistrationTransitionActionTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (step) => {
      _require = step;
      const cResult = require("c").c(3);
      context = noop.useContext(require("Auth").TrackRegistrationContext);
      if (cResult[0] === step) {
        if (cResult[1] === context) {
          let tmp5 = cResult[2];
        }
        require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(tmp5);
      }
      const fn = function o() {
        context({ step, actionType: constants.VIEWED });
        return false;
      };
      cResult[0] = step;
      cResult[1] = context;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (step) => {
      _require = step;
      dependencyMap = noop.useContext(require("Auth").TrackRegistrationContext);
      require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
        closure_1({ step, actionType: constants.VIEWED });
        return false;
      });
    };
