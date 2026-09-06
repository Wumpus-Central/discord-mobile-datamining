// === Module 14575: KeyCommandsView ===

// Module 14575 (KeyCommandsView)
import KeyCommandsNativeComponentDefault from "KeyCommandsNativeComponent" /* 14576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ viewDefaults: { flex: 1 } });
const redux = noop.createContext({
  keyCommands: [],
  addKeyCommand() {

  },
  removeKeyCommand() {

  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/KeyCommandsView.tsx");

export default function KeyCommandsView(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const tmp3 = _slicedToArray(noop.useState([]), 2);
  const keyCommands = tmp3[0];
  closure_1 = tmp3[1];
  const addKeyCommand = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_1((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
      return items;
    });
  }, []);
  const callback1 = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_1((arr) => arr.filter((eventName) => eventName.eventName !== closure_1_0));
  }, []);
  let items = [keyCommands, addKeyCommand, callback1];
  let obj = { value: noop.useMemo(() => ({ keyCommands, addKeyCommand, removeKeyCommand: callback1 }), items), children: null };
  obj = {};
  const tmp2 = closure_5();
  const merged1 = Object.assign(merged);
  const items1 = [tmp2.viewDefaults, style.style];
  obj.style = items1;
  obj.keyCommands = keyCommands;
  obj.onKeyCommand = function onKeyCommand(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    const found = first.find((eventName) => eventName.eventName === nativeEvent.eventName);
    if (found != null) {
      found.onKeyCommand(nativeEvent);
    }
  };
  obj.children = jsx(KeyCommandsNativeComponentDefault, {});
  return <redux.Provider />;
};
export const useKeyCommands = function useKeyCommands(memo) {
  closure_0 = memo;
  const context = noop.useContext(closure_6);
  const addKeyCommand = context.addKeyCommand;
  const removeKeyCommand = context.removeKeyCommand;
  const items = [addKeyCommand, removeKeyCommand, memo];
  const effect = noop.useEffect(() => {
    for (const item10005 of closure_0) {
      let tmp2 = addKeyCommand(item10005);
      continue;
    }
    return () => {
      for (const item10005 of closure_1_0) {
        let tmp2 = removeKeyCommand(item10005.eventName);
        continue;
      }
    };
  }, items);
};