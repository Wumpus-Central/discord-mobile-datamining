// === Module 17358: ChannelTitle ===

// Module 17358 (ChannelTitle)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 17354 */;
import noop from "module_19" /* 19 */;

require = fn;
const UnreadSetting = fn(5967).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_6 = createStyles.createStyleProperties({ muted: nativeDefault.colors.TEXT_MUTED, normal: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: nativeDefault.colors.REDESIGN_CHANNEL_NAME_TEXT });
const ReactCompilerGating = fn(558);
let obj = { muted: nativeDefault.colors.TEXT_MUTED, normal: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: nativeDefault.colors.REDESIGN_CHANNEL_NAME_TEXT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/ChannelTitle.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelTitle(arg0) {
  const cResult = c.c(6);
  ({ title, unread } = arg0);
  ({ muted, resolvedUnreadSetting, connected } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = getLayoutStylesDefault();
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  const tmp7 = closure_6();
  let unreadOrConnected = tmp7.normal;
  if (muted) {
    unreadOrConnected = tmp7.muted;
  } else {
    if (unread) {
      unread = resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
    }
    if (!unread) {
      unread = connected;
    }
    if (unread) {
      unreadOrConnected = tmp7.unreadOrConnected;
    }
  }
  if (cResult[1] !== unreadOrConnected) {
    const obj2 = { color: unreadOrConnected, paddingRight: 4, flexShrink: 1 };
    cResult[1] = unreadOrConnected;
    cResult[2] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[2];
  }
  if (title == null) {
    title = "";
  }
  if (cResult[3] === tmp9) {
    if (cResult[4] === title) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = jsx(Text_Text.Text, { variant: first.channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: tmp9, children: title });
  cResult[3] = tmp9;
  cResult[4] = title;
  cResult[5] = tmp11;
  tmp10 = tmp11;
  const obj3 = { variant: first.channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: tmp9, children: title };
}) : (function ChannelTitle(unread) {
  ({ title, muted } = unread);
  unread = unread.unread;
  const resolvedUnreadSetting = unread.resolvedUnreadSetting;
  const connected = unread.connected;
  let tmp2 = closure_6();
  const normal = tmp2;
  const items = [unread, tmp2, connected, muted, resolvedUnreadSetting];
  const memo = connected.useMemo(() => {
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
  const obj = { variant: unread(resolvedUnreadSetting[7])().channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: memo, children: null };
  if (title == null) {
    title = "";
  }
  obj.children = title;
  return jsx(muted(resolvedUnreadSetting[8]).Text, { variant: unread(resolvedUnreadSetting[7])().channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: memo, children: null });
}));