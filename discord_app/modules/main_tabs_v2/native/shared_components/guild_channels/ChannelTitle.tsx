// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const UnreadSetting = fn(4742).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyleProperties({
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
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx",
);

export default noop.memo(function ChannelTitle(unread) {
  ({ title, muted } = unread);
  unread = unread.unread;
  const resolvedUnreadSetting = unread.resolvedUnreadSetting;
  const connected = unread.connected;
  let obj = muted(unread[5]);
  const layoutStyles = obj.getLayoutStyles(unread.layout);
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
  obj = {
    variant: layoutStyles.channelName.text.variant,
    lineClamp: 1,
    maxFontSizeMultiplier: 1.75,
    style: memo,
    children: null,
  };
  if (title == null) {
    title = "";
  }
  obj.children = title;
  return normal(muted(unread[6]).Text, obj);
});
