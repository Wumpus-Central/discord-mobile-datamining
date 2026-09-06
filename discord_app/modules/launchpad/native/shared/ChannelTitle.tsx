// discord_app/modules/launchpad/native/shared/ChannelTitle.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const UnreadSetting = fn(4742).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyleProperties({
  muted: nativeDefault.colors.TEXT_MUTED,
  normal: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT,
  unreadOrConnected: nativeDefault.colors.REDESIGN_CHANNEL_NAME_TEXT,
});
let obj = {
  muted: nativeDefault.colors.TEXT_MUTED,
  normal: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT,
  unreadOrConnected: nativeDefault.colors.REDESIGN_CHANNEL_NAME_TEXT,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/ChannelTitle.tsx");

export default noop.memo(function ChannelTitle(unread) {
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
      color = tmp.muted;
    } else {
      let tmp2 = unread;
      if (unread) {
        tmp2 = resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
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
  const obj = {
    variant: unread(resolvedUnreadSetting[5])().channelName.text.variant,
    lineClamp: 1,
    maxFontSizeMultiplier: 1.75,
    style: memo,
    children: null,
  };
  if (title == null) {
    title = "";
  }
  obj.children = title;
  return jsx(muted(resolvedUnreadSetting[6]).Text, {
    variant: unread(resolvedUnreadSetting[5])().channelName.text.variant,
    lineClamp: 1,
    maxFontSizeMultiplier: 1.75,
    style: memo,
    children: null,
  });
});
