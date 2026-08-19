// === Module 7169: setString ===

// Module 7169 (setString)
import get_ActivityIndicator from "get ActivityIndicator" /* 7170 */;
import noop from "noop" /* 19 */;

function setString(arg0) {
  const _require = arg0;
  const Clipboard = _require(7170).Clipboard;
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