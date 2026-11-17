// _runtime/metro/06324__.js
import _modDef6299 from "06299__.js";
import noop from "00019__.js";

export default function useTransitionProgress() {
  const context = noop.useContext(_modDef6299);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
}
