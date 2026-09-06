// discord_app/modules/wishlists/WishlistAnalyticsContext.tsx
import noop from "../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const context = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/WishlistAnalyticsContext.tsx");

export const WishlistAnalyticsContext = context;
export const useWishlistAnalyticsContext = function useWishlistAnalyticsContext() {
  return noop.useContext(context);
};
export const WishlistAnalyticsProvider = function WishlistAnalyticsProvider(children) {
  const merged = Object.assign(noop.useContext(context));
  const merged1 = Object.assign(children.newValue);
  return <context.Provider value={{}}>{children.children}</context.Provider>;
};
