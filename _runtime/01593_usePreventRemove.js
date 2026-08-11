// _runtime/01593_usePreventRemove.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;

export const usePreventRemove = function usePreventRemove(stateFromStores, arg1) {
  const _require = stateFromStores;
  const importDefault = arg1;
  const first = navigation(key.useState(() => stateFromStores(first[2]).nanoid()), 1)[0];
  navigation = _require(first[3]).useNavigation();
  let obj = _require(first[3]);
  key = _require(first[4]).useRoute().key;
  const obj2 = _require(first[4]);
  const preventRemoveContext = _require(first[5]).usePreventRemoveContext();
  const setPreventRemove = preventRemoveContext.setPreventRemove;
  const notifyPreventRemove = preventRemoveContext.notifyPreventRemove;
  const items = [setPreventRemove, first, key, stateFromStores];
  const insertionEffect = key.useInsertionEffect(() => {
    setPreventRemove(first, key, closure_0);
    return () => {
      callback(closure_2, noop, false);
    };
  }, items);
  const items1 = [first, key, stateFromStores, notifyPreventRemove];
  const effect = key.useEffect(() => {
    notifyPreventRemove();
    return () => {
      callback();
    };
  }, items1);
  const tmp6 = importDefault(first[6])((preventDefault) => {
    if (closure_0) {
      preventDefault.preventDefault();
      const obj = { data: null };
      obj[0] = preventDefault.data;
      callback(obj);
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