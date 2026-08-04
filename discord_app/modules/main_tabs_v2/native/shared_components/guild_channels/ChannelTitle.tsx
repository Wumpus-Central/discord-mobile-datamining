// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx
import importAllResult from "noop";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyleProperties({ muted: require("Themes").colors.TEXT_MUTED, normal: require("Themes").colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: require("Themes").colors.REDESIGN_CHANNEL_NAME_TEXT });
let obj = { muted: require("Themes").colors.TEXT_MUTED, normal: require("Themes").colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: require("Themes").colors.REDESIGN_CHANNEL_NAME_TEXT };
const memoResult = importAllResult.memo(function ChannelTitle(unread) {
  let muted;
  let title;
  ({ title, muted } = unread);
  unread = unread.unread;
  const resolvedUnreadSetting = unread.resolvedUnreadSetting;
  const connected = unread.connected;
  let c4;
  let obj = muted(unread[5]);
  const layoutStyles = obj.getLayoutStyles(unread.layout);
  let tmp2 = callback();
  c4 = tmp2;
  const items = [unread, tmp2, connected, muted, resolvedUnreadSetting];
  const memo = resolvedUnreadSetting.useMemo(() => {
    let color = _undefined.normal;
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
  return c4(muted(unread[6]).Text, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx");

export default memoResult;