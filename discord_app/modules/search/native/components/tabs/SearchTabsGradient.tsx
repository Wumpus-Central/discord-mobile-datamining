// === Module 19375: SearchTabsGradient ===

// Module 19375 (SearchTabsGradient)
import nativeDefault from "native" /* 575 */;
import ColorUtils from "ColorUtils" /* 5240 */;
import TabsGradientDefault from "TabsGradient" /* 15014 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  let token;
  token = token(5839).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  items = [token];
  colors = noop.useMemo(() => {
    items = [token, ColorUtils.hexWithOpacity(token, 0)];
    return items;
  }, items);
  return jsx(TabsGradientDefault, { state: state.state, colors });
};