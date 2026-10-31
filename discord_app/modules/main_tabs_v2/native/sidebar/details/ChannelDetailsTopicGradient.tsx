// === Module 18810: ChannelDetailsTopicGradient ===

// Module 18810 (ChannelDetailsTopicGradient)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopicGradient.tsx");

export function useChannelTopicGradientBackground() {
  token = token(5596).useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  return noop.useMemo(() => {
    const obj = _modDef671(token);
    const items = [_modDef671(token).alpha(0).hex(), token];
    return items;
  }, items);
}