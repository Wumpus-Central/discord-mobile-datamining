// _runtime/metro/14666__.js
import _modDef14664 from "14664__.js";
import noop from "00019__.js";

export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14664);
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
