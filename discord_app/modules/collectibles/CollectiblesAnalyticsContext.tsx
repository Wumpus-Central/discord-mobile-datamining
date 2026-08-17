// discord_app/modules/collectibles/CollectiblesAnalyticsContext.tsx
import importAllResult from "../../../_runtime/00019_noop.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

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