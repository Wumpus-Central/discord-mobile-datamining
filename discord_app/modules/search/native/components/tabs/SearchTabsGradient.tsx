// === Module 16719: SearchTabsGradient ===

// Module 16719 (SearchTabsGradient)
import nativeDefault from "native" /* 576 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import TabsGradientDefault from "TabsGradient" /* 12759 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  let token;
  token = token(4262).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let items = [token];
  const colors = noop.useMemo(() => {
    const items = [token, ColorUtils.hexWithOpacity(token, 0)];
    return items;
  }, items);
  return jsx(TabsGradientDefault, { state: state.state, colors });
};