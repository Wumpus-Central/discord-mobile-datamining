// === Module 15895: ? ===

// Module 15895
import importAllResult from "noop";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let closure_6 = createCacheKey.createStyleProperties({ muted: require("Themes").colors.TEXT_MUTED, normal: require("Themes").colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: require("Themes").colors.REDESIGN_CHANNEL_NAME_TEXT });
let obj = { muted: require("Themes").colors.TEXT_MUTED, normal: require("Themes").colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: require("Themes").colors.REDESIGN_CHANNEL_NAME_TEXT };
const memoResult = importAllResult.memo(function ChannelTitle(unread) {
  let muted;
  let title;
  ({ title, muted } = unread);
  unread = unread.unread;
  const resolvedUnreadSetting = unread.resolvedUnreadSetting;
  const connected = unread.connected;
  let c4;
  let tmp2 = callback();
  c4 = tmp2;
  const items = [unread, tmp2, connected, muted, resolvedUnreadSetting];
  const memo = connected.useMemo(() => {
    let color = _undefined.normal;
    if (muted) {
      color = tmp.muted;
    } else {
      let tmp2 = unread;
      if (unread) {
        tmp2 = resolvedUnreadSetting === _undefined.ALL_MESSAGES;
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
  const obj = { variant: unread(resolvedUnreadSetting[5])().channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: memo, children: null };
  if (title == null) {
    title = "";
  }
  obj[4] = title;
  return jsx(muted(resolvedUnreadSetting[6]).Text, { variant: unread(resolvedUnreadSetting[5])().channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: memo, children: null });
});
const result = require("jsxProd").fileFinishedImporting("modules/launchpad/native/shared/ChannelTitle.tsx");

export default memoResult;