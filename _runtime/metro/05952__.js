// _runtime/metro/05952__.js
import _modDef5927 from "05927__.js";
import noop from "00019__.js";

export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5927);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
}
