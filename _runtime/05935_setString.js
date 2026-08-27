// === Module 5935: setString ===

// Module 5935 (setString)
import closure_2 from "noop" /* 19 */;

function setString(arg0) {
  const _require = arg0;
  const Clipboard = _require(5936).Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((arg0) => arg0(closure_0));
}
const set = new Set();

export const useClipboard = () => {
  const state = React.useState("");
  [tmp2, require] = state;
  const effect = React.useEffect(() => {
    const Clipboard = closure_1_0(closure_1_1[1]).Clipboard;
    const string = Clipboard.getString();
    string.then(closure_0);
  }, []);
  const effect1 = React.useEffect(() => {
    closure_1_3.add(closure_0);
    return () => {
      closure_1_3.delete(closure_0);
    };
  }, []);
  const items = [tmp2, setString];
  return items;
};