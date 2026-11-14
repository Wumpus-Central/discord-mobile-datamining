// _runtime/metro/07945__.js
import _mod7946 from "07946__.js";
import noop from "00019__.js";

function setString(arg0) {
  closure_0 = arg0;
  const Clipboard = _mod7946.Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((fn) => fn(closure_0));
}
const set = new Set();

export () => {
  state = noop.useState("");
  [tmp2, require] = state;
  const effect = noop.useEffect(() => {
    const Clipboard = _mod7946.Clipboard;
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