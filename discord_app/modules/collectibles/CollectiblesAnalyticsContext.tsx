// === Module 9352: CollectiblesAnalyticsContext ===

// Module 9352 (CollectiblesAnalyticsContext)
import useShallowObjectMemoDefault from "useShallowObjectMemo" /* 9353 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
let context = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesAnalyticsContext.tsx");

export const CollectiblesAnalyticsContext = context;
export function useCollectiblesAnalyticsContext() {
  return noop.useContext(context);
}
export function CollectiblesAnalyticsProvider(arg0) {
  context = undefined;
  ({ newValue, children } = arg0);
  context = noop.useContext(context);
  const tmp2 = useShallowObjectMemoDefault(newValue);
  closure_1 = tmp2;
  items = [context, tmp2];
  return <context.Provider value={noop.useMemo(() => {
    const merged = Object.assign(context);
    const merged1 = Object.assign(closure_1);
    return {};
  }, items)}>{children}</context.Provider>;
}