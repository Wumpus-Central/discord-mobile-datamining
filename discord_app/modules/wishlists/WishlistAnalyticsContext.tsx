// === Module 12326: context ===

// Module 12326 (context)
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

let c0 = importAllResult;
const context = importAllResult.createContext(null);
const result = require("obj132").fileFinishedImporting("modules/wishlists/WishlistAnalyticsContext.tsx");

export const WishlistAnalyticsContext = context;
export const useWishlistAnalyticsContext = function useWishlistAnalyticsContext() {
  return importAllResult.useContext(context);
};
export const WishlistAnalyticsProvider = function WishlistAnalyticsProvider(children) {
  const merged = Object.assign(importAllResult.useContext(context));
  const merged1 = Object.assign(children.newValue);
  return <context.Provider value={{}}>{children.children}</context.Provider>;
};