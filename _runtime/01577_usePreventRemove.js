// === Module 1577: usePreventRemove ===

// Module 1577 (usePreventRemove)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;

const require = arg1;

export const usePreventRemove = function usePreventRemove(stateFromStores, arg1) {
  const _require = stateFromStores;
  importDefault = arg1;
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
      callback(closure_2, closure_4, false);
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