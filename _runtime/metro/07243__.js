// === Module 7243: ? ===

// Module 7243
import _mod7244 from "module_7244" /* 7244 */;
import noop from "module_19" /* 19 */;

function setString(arg0) {
  closure_0 = arg0;
  const Clipboard = _mod7244.Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((fn) => fn(closure_0));
}
const set = new Set();

export const useClipboard = () => {
  const state = noop.useState("");
  [tmp2, require] = state;
  const effect = noop.useEffect(() => {
    const Clipboard = _mod7244.Clipboard;
    const string = Clipboard.getString();
    string.then(closure_1_0);
  }, []);
  const effect1 = noop.useEffect(() => {
    set.add(require);
    return () => {
      set.delete(closure_1_0);
    };
  }, []);
  const items = [tmp2, setString];
  return items;
};