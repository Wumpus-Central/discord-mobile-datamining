// === Module 17280: guild_channels/ChannelTitle ===

// Module 17280 (guild_channels/ChannelTitle)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5087 */;
import ChannelListLayout from "ChannelListLayout" /* 11714 */;
import noop from "module_19" /* 19 */;

require = fn;
const UnreadSetting = fn(5974).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_5 = createStyles.createStyleProperties({ muted: nativeDefault.colors.TEXT_MUTED, normal: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: nativeDefault.colors.REDESIGN_CHANNEL_NAME_TEXT });
const ReactCompilerGating = fn(558);
let obj = { muted: nativeDefault.colors.TEXT_MUTED, normal: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: nativeDefault.colors.REDESIGN_CHANNEL_NAME_TEXT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelTitle(arg0) {
  const cResult = c.c(8);
  ({ title, unread, layout, muted, resolvedUnreadSetting, connected } = arg0);
  if (cResult[0] !== layout) {
    const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
    cResult[0] = layout;
    cResult[1] = layoutStyles;
    let tmp4 = layoutStyles;
    const tmpResult = ChannelListLayout;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = closure_5();
  let unreadOrConnected = tmp6.normal;
  if (muted) {
    unreadOrConnected = tmp6.muted;
  } else {
    if (unread) {
      unread = resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
    }
    if (!unread) {
      unread = connected;
    }
    if (unread) {
      unreadOrConnected = tmp6.unreadOrConnected;
    }
  }
  if (cResult[2] !== unreadOrConnected) {
    const obj2 = { color: unreadOrConnected, paddingRight: 4, flexShrink: 1 };
    cResult[2] = unreadOrConnected;
    cResult[3] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[3];
  }
  if (title == null) {
    title = "";
  }
  if (cResult[4] === tmp4.channelName.text.variant) {
    if (cResult[5] === tmp8) {
      if (cResult[6] === title) {
        let tmp9 = cResult[7];
      }
      return tmp9;
    }
  }
  const tmp10 = jsx(Text_Text.Text, { variant: tmp4.channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: tmp8, children: title });
  cResult[4] = tmp4.channelName.text.variant;
  cResult[5] = tmp8;
  cResult[6] = title;
  cResult[7] = tmp10;
  tmp9 = tmp10;
  const obj3 = { variant: tmp4.channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: tmp8, children: title };
}) : (function ChannelTitle(unread) {
  ({ title, muted } = unread);
  unread = unread.unread;
  const resolvedUnreadSetting = unread.resolvedUnreadSetting;
  const connected = unread.connected;
  const layoutStyles = muted(unread[7]).getLayoutStyles(unread.layout);
  let tmp2 = closure_5();
  const normal = tmp2;
  const items = [unread, tmp2, connected, muted, resolvedUnreadSetting];
  const memo = resolvedUnreadSetting.useMemo(() => {
    let color = normal.normal;
    if (muted) {
      color = normal.muted;
    } else {
      let tmp2 = unread;
      if (unread) {
        tmp2 = resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
      }
      if (!tmp2) {
        tmp2 = connected;
      }
      if (tmp2) {
        color = normal.unreadOrConnected;
      }
    }
    return { color, paddingRight: 4, flexShrink: 1 };
  }, items);
  const obj2 = { variant: layoutStyles.channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: memo, children: null };
  if (title == null) {
    title = "";
  }
  obj2.children = title;
  return normal(muted(unread[8]).Text, obj2);
}));