// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { UnreadSetting } from "../../../../read_states/ReadStateConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let closure_5 = createCacheKey.createStyleProperties({ muted: ThemesDefault.colors.TEXT_MUTED, normal: ThemesDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: ThemesDefault.colors.REDESIGN_CHANNEL_NAME_TEXT });
let obj = { muted: ThemesDefault.colors.TEXT_MUTED, normal: ThemesDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: ThemesDefault.colors.REDESIGN_CHANNEL_NAME_TEXT };
const memoResult = importAllResult.memo(function ChannelTitle(unread) {
  ({ title, muted } = unread);
  unread = unread.unread;
  const resolvedUnreadSetting = unread.resolvedUnreadSetting;
  const connected = unread.connected;
  closure_4 = undefined;
  let obj = muted(unread[5]);
  const layoutStyles = obj.getLayoutStyles(unread.layout);
  let tmp2 = callback();
  closure_4 = tmp2;
  const items = [unread, tmp2, connected, muted, resolvedUnreadSetting];
  const memo = resolvedUnreadSetting.useMemo(() => {
    let color = normal.normal;
    if (muted) {
      color = tmp.muted;
    } else {
      let tmp2 = unread;
      if (unread) {
        tmp2 = resolvedUnreadSetting === connected.ALL_MESSAGES;
      }
      if (!tmp2) {
        tmp2 = connected;
      }
      if (tmp2) {
        color = tmp.unreadOrConnected;
      }
    }
    return { color, paddingRight: 4, flexShrink: 1 };
  }, items);
  obj = { variant: layoutStyles.channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: memo, children: null };
  if (title == null) {
    title = "";
  }
  obj[4] = title;
  return closure_4(muted(unread[6]).Text, obj);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx");

export default memoResult;