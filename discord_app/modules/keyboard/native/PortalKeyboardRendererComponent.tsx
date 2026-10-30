// === Module 12184: PortalKeyboardRendererComponent ===

// Module 12184 (PortalKeyboardRendererComponent)
import useBackPressHandler from "useBackPressHandler" /* 6017 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7390 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRendererComponent.tsx");

export default noop.memo(function PortalKeyboardRendererComponent(item) {
  item = item.item;
  const channelId = item.channelId;
  const chatInputRef = item.chatInputRef;
  const type = item.type;
  ({ state, cleanUp } = item);
  let channel;
  let memo;
  const tmp3 = state === channelId(5075).TransitionStates.YEETED;
  dependencyMap = tmp3;
  const items = [chatInputRef, tmp3];
  const layoutEffect = channel.useLayoutEffect(() => {
    if (!closure_2) {
      return useBackPressHandler.subscribeToBackPress(() => {
        const current = ref.current;
        current.closeCustomKeyboard();
        return true;
      });
    }
  }, items);
  channel = memo.getChannel(channelId);
  const items1 = [channel, channelId];
  memo = channel.useMemo(() => {
    if (channelId !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      let FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
    } else {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    }
    return FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
  }, items1);
  const items2 = [memo];
  const memo1 = channel.useMemo(() => {
    let tmp2;
    if (null != memo) {
      const obj = { channel: tmp, type: "channel" };
      tmp2 = obj;
    }
    return tmp2;
  }, items2);
  if (null != memo) {
    if (undefined !== memo1) {
      if (tmp(1624).KeyboardTypes.APP_LAUNCHER === type) {
        const obj2 = { context: memo1, chatInputRef, onClose: cleanUp, transitionState: state, entrypoint: tmp(11467).AppLauncherEntrypoint.TEXT };
        return jsx(chatInputRef(12185), { context: memo1, chatInputRef, onClose: cleanUp, transitionState: state, entrypoint: tmp(11467).AppLauncherEntrypoint.TEXT });
      } else if (tmp(1624).KeyboardTypes.MEDIA === type) {
        const obj3 = { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state };
        return jsx(chatInputRef(12353), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else if (tmp(1624).KeyboardTypes.EXPRESSION === type) {
        let obj = { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state };
        return jsx(chatInputRef(12395), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else {
        return null;
      }
    }
  }
  return null;
});