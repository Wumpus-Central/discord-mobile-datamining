// _runtime/07169_setString.js
import get_ActivityIndicator from "07170_get_ActivityIndicator.js";
import noop from "00019_noop.js";

function setString(arg0) {
  const _require = arg0;
  const Clipboard = require("07170_get_ActivityIndicator.js").Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((item, index) => item(closure_0));
}
const set = new Set();

export const useClipboard = () => {
  const state = noop.useState("");
  [tmp2, require] = state;
  const effect = noop.useEffect(() => {
    const Clipboard = get_ActivityIndicator.Clipboard;
    const string = Clipboard.getString();
    string.then(closure_0);
  }, []);
  const effect1 = noop.useEffect(() => {
    set.add(closure_0);
    return () => {
      closure_1_3.delete(closure_0);
    };
  }, []);
  const items = [tmp2, setString];
  return items;
};