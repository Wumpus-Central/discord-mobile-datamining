// === Module 15940: SearchTabsGradient ===

// Module 15940 (SearchTabsGradient)
import ThemesDefault from "Themes" /* 712 */;
import TabsGradientDefault from "TabsGradient" /* 11938 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  let token;
  token = token(4097).useToken(ThemesDefault.colors.BACKGROUND_BASE_LOW);
  let items = [token];
  const colors = React.useMemo(() => {
    const items = [token, token(dependencyMap[4]).hexWithOpacity(token, 0)];
    return items;
  }, items);
  return jsx(TabsGradientDefault, { state: state.state, colors });
};