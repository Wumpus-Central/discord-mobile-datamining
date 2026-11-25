// discord_app/modules/checkpoint/hooks/useCheckpointCharacterExit.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

const require = fn;
const CheckpointTransitionConstants = fn(12595);
({
  CHECKPOINT_CHARACTER_EXIT_TEXTURE_TIMEOUT_MS: closure_6,
  CHECKPOINT_CHARACTER_EXIT_ZOOM_DURATION_MS: metroImportDefault,
} = CheckpointTransitionConstants);
const constants = { NONE: "none", LOADING_TEXTURES: "loading_textures", BEAMING: "beaming" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCharacterExit.tsx");

export default function useCheckpointCharacterExit(onExitFinished) {
  onExitFinished = onExitFinished.onExitFinished;
  first = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_5 = undefined;
  items = [closure_5];
  importDefault = onExitFinished(first[4]).useStateFromStores(items, () => closure_5.useReducedMotion);
  [first, _slicedToArray] = noop.useState(constants.NONE);
  const tmp3 = require("useStableCallback")(() => {
    closure_3(constants.NONE);
    onExitFinished();
  });
  noop = tmp3;
  const items1 = [first, tmp3];
  const effect = noop.useEffect(() => {
    if (first !== constants.NONE) {
      const timeout = setTimeout(closure_4, tmp === tmp2.BEAMING ? metroImportDefault : timestampProducer);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const obj = onExitFinished(first[4]);
  const tmp5 = require("useStableCallback")(() => {
    if (closure_1) {
      onExitFinished();
    } else {
      closure_3(constants.LOADING_TEXTURES);
    }
  });
  const tmp7 = require("useStableCallback")(onExitFinished.onExitPlaying);
  closure_5 = tmp7;
  const items2 = [first, tmp7];
  const effect1 = noop.useEffect(() => {
    if (first === constants.BEAMING) {
      closure_5();
    }
  }, items2);
  const tmp6 = require("useStableCallback")(() => {
    closure_3((arg0) => {
      let BEAMING = arg0;
      if (arg0 === constants.LOADING_TEXTURES) {
        BEAMING = constants.BEAMING;
      }
      return BEAMING;
    });
  });
  return {
    isCharacterExiting: first !== constants.NONE,
    startExit: tmp5,
    handleExitPlaying: require("useStableCallback")(() => {
      closure_3((arg0) => {
        let BEAMING = arg0;
        if (arg0 === constants.LOADING_TEXTURES) {
          BEAMING = constants.BEAMING;
        }
        return BEAMING;
      });
    }),
  };
}
