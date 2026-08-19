// discord_app/modules/search/native/components/tabs/SearchTabsGradient.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import TabsGradientDefault from "../../../../../design/components/Tabs/native/TabsGradient.native.tsx";
import noop from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

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