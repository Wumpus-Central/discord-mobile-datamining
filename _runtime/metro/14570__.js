// _runtime/metro/14570__.js
import _modDef14568 from "14568__.js";
import noop from "00019__.js";

export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14568);
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
