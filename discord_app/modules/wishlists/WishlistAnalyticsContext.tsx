// === Module 14966: WishlistAnalyticsContext ===

// Module 14966 (WishlistAnalyticsContext)
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
let context = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/WishlistAnalyticsContext.tsx");

export const WishlistAnalyticsContext = context;
export function useWishlistAnalyticsContext() {
  return noop.useContext(context);
}
export function WishlistAnalyticsProvider(children) {
  const newValue = children.newValue;
  context = undefined;
  context = noop.useContext(context);
  const items = [context, newValue];
  return <context.Provider value={noop.useMemo(() => {
    const merged = Object.assign(context);
    const merged1 = Object.assign(newValue);
    return {};
  }, items)}>{children.children}</context.Provider>;
}