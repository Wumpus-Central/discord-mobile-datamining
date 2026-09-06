// _runtime/metro/01577__.js
import _slicedToArray from "00032__.js";
import noop from "00019__.js";

const require = arg1;

export const usePreventRemove = function usePreventRemove(stateFromStores, arg1) {
  _require = stateFromStores;
  importDefault = arg1;
  const first = navigation(
    key.useState(() => stateFromStores(first[2]).nanoid()),
    1,
  )[0];
  navigation = require("01526__.js").useNavigation();
  let obj = require("01526__.js");
  key = require("01523__.js").useRoute().key;
  const obj2 = require("01523__.js");
  const preventRemoveContext = require("01578__.js").usePreventRemoveContext();
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
  const tmp6 = require("01505__.js")((preventDefault) => {
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
