// === Module 8767: CollectiblesAnalyticsContext ===

// Module 8767 (CollectiblesAnalyticsContext)
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
let context = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesAnalyticsContext.tsx");

export const CollectiblesAnalyticsContext = context;
export const useCollectiblesAnalyticsContext = function useCollectiblesAnalyticsContext() {
  return noop.useContext(context);
};
export const CollectiblesAnalyticsProvider = function CollectiblesAnalyticsProvider(children) {
  const newValue = children.newValue;
  context = undefined;
  context = noop.useContext(context);
  const items = [context, newValue];
  return <context.Provider value={noop.useMemo(() => {
    const merged = Object.assign(context);
    const merged1 = Object.assign(newValue);
    return {};
  }, items)}>{children.children}</context.Provider>;
};