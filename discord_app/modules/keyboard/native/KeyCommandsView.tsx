// === Module 14468: KeyCommandsView ===

// Module 14468 (KeyCommandsView)
import closure_2 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

let c3 = importAllResult;
let closure_5 = createCacheKey.createStyles({ viewDefaults: { flex: 1 } });
let context = importAllResult.createContext({
  keyCommands: [],
  addKeyCommand(item10005) {

  },
  removeKeyCommand() {

  }
});
const result = require("set").fileFinishedImporting("modules/keyboard/native/KeyCommandsView.tsx");

export default function KeyCommandsView(style) {
  const merged = Object.assign(style, Object.create(null));
  let first;
  dependencyMap = undefined;
  let callback;
  let callback1;
  const tmp3 = callback(callback1.useState([]), 2);
  first = tmp3[0];
  dependencyMap = tmp3[1];
  callback = callback1.useCallback((arg0) => {
    closure_0 = arg0;
    callback((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
      return items;
    });
  }, []);
  callback1 = callback1.useCallback((arg0) => {
    closure_0 = arg0;
    callback((arr) => arr.filter((eventName) => eventName.eventName !== closure_0));
  }, []);
  let items = [first, callback, callback1];
  let obj = { value: callback1.useMemo(() => ({ keyCommands: first, addKeyCommand: callback, removeKeyCommand: callback1 }), items), children: null };
  obj = {};
  const tmp2 = callback();
  const merged1 = Object.assign(merged);
  const items1 = [tmp2.viewDefaults, style.style];
  obj.style = items1;
  obj.keyCommands = first;
  obj.onKeyCommand = function onKeyCommand(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    const found = nativeEvent.find((eventName) => eventName.eventName === nativeEvent.eventName);
    if (found != null) {
      found.onKeyCommand(nativeEvent);
    }
  };
  obj[1] = jsx(first(14469), {});
  return <redux.Provider />;
};
export const useKeyCommands = function useKeyCommands(memo) {
  closure_0 = memo;
  const context = importAllResult.useContext(closure_6);
  const addKeyCommand = context.addKeyCommand;
  const removeKeyCommand = context.removeKeyCommand;
  const items = [addKeyCommand, removeKeyCommand, memo];
  const effect = importAllResult.useEffect(() => {
    for (const item10005 of closure_0) {
      let tmp = addKeyCommand;
      let tmp2 = addKeyCommand(item10005);
      continue;
    }
    return () => {
      for (const item10005 of closure_0) {
        let tmp = callback;
        let tmp2 = callback(item10005.eventName);
        continue;
      }
    };
  }, items);
};