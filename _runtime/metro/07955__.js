// === Module 7955: ? ===

// Module 7955
import _mod7956 from "module_7956" /* 7956 */;
import noop from "module_19" /* 19 */;

function setString(arg0) {
  closure_0 = arg0;
  const Clipboard = _mod7956.Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((fn) => fn(closure_0));
}
const set = new Set();

export () => {
  state = noop.useState("");
  [tmp2, require] = state;
  const effect = noop.useEffect(() => {
    const Clipboard = _mod7956.Clipboard;
    const string = Clipboard.getString();
    string.then(closure_1_0);
  }, []);
  const effect1 = noop.useEffect(() => {
    set.add(require);
    return () => {
      set.delete(closure_1_0);
    };
  }, []);
  items = [tmp2, setString];
  return items;
}