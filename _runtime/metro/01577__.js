// === Module 1577: ? ===

// Module 1577
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = arg1;

export const usePreventRemove = function usePreventRemove(stateFromStores, arg1) {
  _require = stateFromStores;
  importDefault = arg1;
  const first = navigation(key.useState(() => stateFromStores(first[2]).nanoid()), 1)[0];
  navigation = require("module_1526").useNavigation();
  let obj = require("module_1526");
  key = require("module_1523").useRoute().key;
  const obj2 = require("module_1523");
  const preventRemoveContext = require("module_1578").usePreventRemoveContext();
  const setPreventRemove = preventRemoveContext.setPreventRemove;
  const notifyPreventRemove = preventRemoveContext.notifyPreventRemove;
  const items = [setPreventRemove, first, key, stateFromStores];
  const insertionEffect = key.useInsertionEffect(() => {
    setPreventRemove(first, key, closure_0);
    return () => {
      setPreventRemove(first, key, false);
    };
  }, items);
  const items1 = [first, key, stateFromStores, notifyPreventRemove];
  const effect = key.useEffect(() => {
    notifyPreventRemove();
    return () => {
      notifyPreventRemove();
    };
  }, items1);
  const tmp6 = require("module_1505")((preventDefault) => {
    if (closure_0) {
      preventDefault.preventDefault();
      const obj = { data: preventDefault.data };
      closure_1(obj);
    }
  });
  closure_7 = tmp6;
  const items2 = [navigation, tmp6];
  const effect1 = key.useEffect(() => {
    let addListenerResult;
    if (navigation != null) {
      addListenerResult = navigation.addListener("beforeRemove", closure_7);
    }
    return addListenerResult;
  }, items2);
};