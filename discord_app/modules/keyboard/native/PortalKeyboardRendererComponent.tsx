// === Module 16757: PortalKeyboardRendererComponent ===

// Module 16757 (PortalKeyboardRendererComponent)
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7221 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRendererComponent.tsx");

export default noop.memo(function PortalKeyboardRendererComponent(item) {
  item = item.item;
  const channelId = item.channelId;
  ({ chatInputRef, type } = item);
  ({ state, cleanUp } = item);
  const channel = ChannelStore.getChannel(channelId);
  const items = [channel, channelId];
  const memo = noop.useMemo(() => {
    if (channelId !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      let FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
    } else {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    }
    return FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
  }, items);
  const items1 = [memo];
  const memo1 = noop.useMemo(() => {
    let tmp2;
    if (null != memo) {
      const obj = { channel: tmp, type: "channel" };
      tmp2 = obj;
    }
    return tmp2;
  }, items1);
  if (null != memo) {
    if (undefined !== memo1) {
      if (channelId(memo[4]).KeyboardTypes.APP_LAUNCHER === type) {
        let obj = { context: memo1, chatInputRef, onClose: cleanUp, transitionState: state, entrypoint: tmp11(tmp12[6]).AppLauncherEntrypoint.TEXT };
        return jsx(channel(tmp12[5]), { context: memo1, chatInputRef, onClose: cleanUp, transitionState: state, entrypoint: tmp11(tmp12[6]).AppLauncherEntrypoint.TEXT });
      } else if (tmp11(tmp12[4]).KeyboardTypes.MEDIA === type) {
        obj = { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state };
        return jsx(channel(tmp12[7]), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else if (tmp11(tmp12[4]).KeyboardTypes.EXPRESSION === type) {
        obj = { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state };
        return jsx(channel(tmp12[8]), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else {
        return null;
      }
    }
  }
  return null;
});