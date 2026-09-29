// _runtime/metro/05427__.js
import _modDef5402 from "05402__.js";
import noop from "00019__.js";

export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5402);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
}
