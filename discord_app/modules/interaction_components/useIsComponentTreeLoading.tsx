// === Module 12413: useIsComponentTreeLoading ===

// Module 12413 (useIsComponentTreeLoading)
import InteractionComponentUtils from "InteractionComponentUtils" /* 6395 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6405 */;
import usePreviousDefault from "usePrevious" /* 6831 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/useIsComponentTreeLoading.tsx");

export function useIsComponentTreeLoading(memo, callback) {
  _require = memo;
  importDefault = callback;
  items = [memo];
  memo = found.useMemo(() => {
    const flattenComponentsResult = InteractionComponentUtils.flattenComponents(closure_0);
    return Array.from(InteractionComponentUtils.flattenComponents(closure_0).values()).filter(InteractionComponentUtils.isActionComponent);
  }, items);
  dependencyMap = require("ComponentStateContext").useGetActionComponentState();
  found = memo.find((item) => closure_2(item) === InteractionComponentTypes.ActionComponentState.LOADING);
  const items1 = [found];
  const memo1 = found.useMemo(() => {
    if (null != found) {
      const obj2 = { loading: true, component: tmp };
      let obj = obj2;
    } else {
      obj = { loading: false, component: "r" };
    }
    return obj;
  }, items1);
  const tmp3 = usePreviousDefault(memo1.loading);
  closure_5 = tmp3;
  const items2 = [tmp3, memo1, callback];
  const effect = found.useEffect(() => {
    let tmp2 = null != closure_5;
    if (tmp2) {
      tmp2 = tmp !== memo1.loading;
    }
    if (tmp2) {
      if (closure_1 != null) {
        tmp4(memo1);
      }
    }
  }, items2);
  return memo1;
}