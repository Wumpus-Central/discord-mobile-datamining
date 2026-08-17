// discord_app/modules/keyboard/native/PortalKeyboardRendererComponent.tsx
import importAllResult from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function PortalKeyboardRendererComponent(item) {
  item = item.item;
  const channelId = item.channelId;
  ({ chatInputRef, type } = item);
  ({ state, cleanUp } = item);
  let channel;
  let memo;
  channel = channel.getChannel(channelId);
  const items = [channel, channelId];
  memo = importAllResult.useMemo(() => {
    if (channelId !== channelId(memo[3]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      let FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
    } else {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelId(memo[3]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    }
    return FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
  }, items);
  const items1 = [memo];
  const memo1 = importAllResult.useMemo(() => {
    let tmp2;
    if (null != memo) {
      const obj = { channel: null, type: "channel" };
      obj[0] = tmp;
      tmp2 = obj;
    }
    return tmp2;
  }, items1);
  if (null != memo) {
    if (undefined !== memo1) {
      if (channelId(memo[4]).KeyboardTypes.APP_LAUNCHER === type) {
        let obj = { context: null, chatInputRef: null, onClose: null, transitionState: null, entrypoint: null };
        obj[0] = memo1;
        obj[1] = chatInputRef;
        obj[2] = cleanUp;
        obj[3] = state;
        obj[4] = tmp11(tmp12[6]).AppLauncherEntrypoint.TEXT;
        return jsx(channel(tmp12[5]), { context: null, chatInputRef: null, onClose: null, transitionState: null, entrypoint: null });
      } else if (tmp11(tmp12[4]).KeyboardTypes.MEDIA === type) {
        obj = { channel: null, chatInputRef: null, onClose: null, transitionState: null };
        obj[0] = memo;
        obj[1] = chatInputRef;
        obj[2] = cleanUp;
        obj[3] = state;
        return jsx(channel(tmp12[7]), { channel: null, chatInputRef: null, onClose: null, transitionState: null });
      } else if (tmp11(tmp12[4]).KeyboardTypes.EXPRESSION === type) {
        obj = { channel: null, chatInputRef: null, onClose: null, transitionState: null };
        obj[0] = memo;
        obj[1] = chatInputRef;
        obj[2] = cleanUp;
        obj[3] = state;
        return jsx(channel(tmp12[8]), { channel: null, chatInputRef: null, onClose: null, transitionState: null });
      } else {
        return null;
      }
    }
  }
  return null;
});
const result = require("set").fileFinishedImporting("modules/keyboard/native/PortalKeyboardRendererComponent.tsx");

export default memoResult;