// === Module 16532: SearchTabsGradient ===

// Module 16532 (SearchTabsGradient)
import ThemesDefault from "Themes" /* 709 */;
import TabsGradientDefault from "TabsGradient" /* 12521 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  let token;
  token = token(4197).useToken(ThemesDefault.colors.BACKGROUND_BASE_LOW);
  let items = [token];
  const colors = React.useMemo(() => {
    const items = [token, token(closure_1_2[4]).hexWithOpacity(token, 0)];
    return items;
  }, items);
  return jsx(TabsGradientDefault, { state: state.state, colors });
};