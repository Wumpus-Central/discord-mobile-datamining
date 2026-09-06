// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopicGradient.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../../_runtime/metro/00672__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopicGradient.tsx",
);

export const useChannelTopicGradientBackground = function useChannelTopicGradientBackground() {
  token = token(4262).useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  return noop.useMemo(() => {
    const obj = _modDef672(token);
    const items = [_modDef672(token).alpha(0).hex(), token];
    return items;
  }, items);
};
