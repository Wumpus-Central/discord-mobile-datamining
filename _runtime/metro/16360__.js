// _runtime/metro/16360__.js
import _modDef16358 from "16358__.js";
import noop from "00019__.js";

export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef16358);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error(
      "Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?",
    );
    throw error;
  } else {
    return context;
  }
}
