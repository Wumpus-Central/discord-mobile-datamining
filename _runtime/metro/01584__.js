// === Module 1584: ? ===

// Module 1584
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, importDefault, navigation;


export const usePreventRemove = function usePreventRemove(stateFromStores, arg1) {
  let closure_1;
  let key;
  _require = stateFromStores;
  importDefault = arg1;
  const first = navigation(key.useState(() => {
    const obj = stateFromStores(first[2]);
    return obj.nanoid();
  }), 1)[0];
  let obj = require("module_1533");
  navigation = obj.useNavigation();
  const obj2 = require("react");
  key = obj2.useRoute().key;
  const obj3 = require("react");
  const preventRemoveContext = obj3.usePreventRemoveContext();
  const setPreventRemove = preventRemoveContext.setPreventRemove;
  const notifyPreventRemove = preventRemoveContext.notifyPreventRemove;
  const items = [setPreventRemove, first, key, stateFromStores];
  const insertionEffect = key.useInsertionEffect(() => {
    setPreventRemove(first, key, stateFromStores);
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
  const tmp6 = require("useLatestCallback")((preventDefault) => {
    if (stateFromStores) {
      preventDefault.preventDefault();
      const obj = { data: preventDefault.data };
      closure_1(obj);
    }
  });
  let closure_7 = tmp6;
  const items2 = [navigation, tmp6];
  const effect1 = key.useEffect(() => {
    let addListenerResult;
    if (navigation != null) {
      addListenerResult = navigation.addListener("beforeRemove", closure_7);
    }
    return addListenerResult;
  }, items2);
};