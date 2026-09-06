// discord_app/modules/search/native/components/tabs/SearchTabsGradient.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ColorUtils from "../../../../../utils/ColorUtils.tsx";
import TabsGradientDefault from "../../../../../design/components/Tabs/native/TabsGradient.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

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
}
