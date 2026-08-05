// _runtime/05640_setString.js
import noop from "noop";

function setString(arg0) {
  const _require = arg0;
  const Clipboard = _require(5641).Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((arg0) => arg0(closure_0));
}
const set = new Set();

export const useClipboard = () => {
  let require;
  let tmp2;
  const state = noop.useState("");
  [tmp2, require] = state;
  const effect = noop.useEffect(() => {
    const Clipboard = outer1_0(outer1_1[1]).Clipboard;
    const string = Clipboard.getString();
    string.then(closure_0);
  }, []);
  const effect1 = noop.useEffect(() => {
    outer1_3.add(closure_0);
    return () => {
      outer1_3.delete(closure_0);
    };
  }, []);
  const items = [tmp2, setString];
  return items;
};