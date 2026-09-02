// === Module 16546: useChannelTopicGradientBackground ===

// Module 16546 (useChannelTopicGradientBackground)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopicGradient.tsx");

export const useChannelTopicGradientBackground = function useChannelTopicGradientBackground() {
  token = token(4197).useToken(ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  return React.useMemo(() => {
    const obj = closure_1_1(closure_1_2[3])(token);
    const items = [closure_1_1(closure_1_2[3])(token).alpha(0).hex(), token];
    return items;
  }, items);
};