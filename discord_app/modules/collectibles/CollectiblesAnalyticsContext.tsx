// === Module 9212: context ===

// Module 9212 (context)
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

let c0 = importAllResult;
let context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/collectibles/CollectiblesAnalyticsContext.tsx");

export const CollectiblesAnalyticsContext = context;
export const useCollectiblesAnalyticsContext = function useCollectiblesAnalyticsContext() {
  return importAllResult.useContext(context);
};
export const CollectiblesAnalyticsProvider = function CollectiblesAnalyticsProvider(children) {
  const newValue = children.newValue;
  context = undefined;
  context = newValue.useContext(context);
  const items = [context, newValue];
  return context(context.Provider, {
    value: newValue.useMemo(() => {
      const merged = Object.assign(context);
      const merged1 = Object.assign(newValue);
      return {};
    }, items),
    children: children.children
  });
};