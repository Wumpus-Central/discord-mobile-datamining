// === Module 16733: ChannelDetailsTopicGradient ===

// Module 16733 (ChannelDetailsTopicGradient)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopicGradient.tsx");

export const useChannelTopicGradientBackground = function useChannelTopicGradientBackground() {
  token = token(4262).useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  return noop.useMemo(() => {
    const obj = _modDef672(token);
    const items = [_modDef672(token).alpha(0).hex(), token];
    return items;
  }, items);
};