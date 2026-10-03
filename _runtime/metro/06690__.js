// === Module 6690: ? ===

// Module 6690
import _mod6691 from "module_6691" /* 6691 */;
import noop from "module_19" /* 19 */;

function setString(arg0) {
  closure_0 = arg0;
  const Clipboard = _mod6691.Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((fn) => fn(closure_0));
}
const set = new Set();

export const useClipboard = () => {
  state = noop.useState("");
  [tmp2, require] = state;
  const effect = noop.useEffect(() => {
    const Clipboard = _mod6691.Clipboard;
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