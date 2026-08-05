// discord_app/modules/search/native/components/tabs/SearchTabsGradient.tsx
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  let token;
  token = token(3989).useToken(require("../../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_BASE_LOW);
  let items = [token];
  const colors = React.useMemo(() => {
    const items = [token, token(outer1_2[4]).hexWithOpacity(token, 0)];
    return items;
  }, items);
  return jsx(require("../../../../../design/components/Tabs/native/TabsGradient.native.tsx"), { state: state.state, colors });
};