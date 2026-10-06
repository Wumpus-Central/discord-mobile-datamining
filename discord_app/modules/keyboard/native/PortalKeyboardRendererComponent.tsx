// === Module 16644: PortalKeyboardRendererComponent ===

// Module 16644 (PortalKeyboardRendererComponent)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6736 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8961 */;
import AppLauncherKeyboardDefault from "AppLauncherKeyboard" /* 11663 */;
import MediaKeyboardDefault from "MediaKeyboard" /* 16645 */;
import ExpressionPickerKeyboardDefault from "ExpressionPickerKeyboard" /* 16651 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
  let channelId;
  let chatInputRef;
  let cleanUp;
  let item;
  let state;
  let tmp6;
  let type;
  const obj = react2;
  const cResult = obj.c(19);
  ({ item, state, cleanUp } = arg0);
  ({ channelId, chatInputRef, type } = item);
  if (cResult[0] !== channelId) {
    const channel = ChannelStore.getChannel(channelId);
    cResult[0] = channelId;
    cResult[1] = channel;
    FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
  } else {
    FAKE_PLACEHOLDER_PRIVATE_CHANNEL = cResult[1];
  }
  if (channelId === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    FAKE_PLACEHOLDER_PRIVATE_CHANNEL = FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
  }
  if (cResult[2] !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
    let tmp8;
    if (null != FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
      tmp8 = { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, type: "channel" };
      const obj2 = { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, type: "channel" };
    }
    cResult[2] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    cResult[3] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (null != FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
    if (undefined !== tmp6) {
      if (KeyboardTypes.KeyboardTypes.APP_LAUNCHER === type) {
        if (cResult[4] === chatInputRef) {
          if (cResult[5] === cleanUp) {
            if (cResult[6] === tmp6) {
              let tmp17;
              if (cResult[7] === state) {
                tmp17 = cResult[8];
              }
              return tmp17;
            }
          }
        }
        AppLauncherKeyboardDefault;
        const tmp21 = <tmp20 context={tmp6} chatInputRef={chatInputRef} onClose={cleanUp} transitionState={state} entrypoint={AppLauncherTypes.AppLauncherEntrypoint.TEXT} />;
        cResult[4] = chatInputRef;
        cResult[5] = cleanUp;
        cResult[6] = tmp6;
        cResult[7] = state;
        cResult[8] = tmp21;
        tmp17 = tmp21;
      } else if (KeyboardTypes.KeyboardTypes.MEDIA === type) {
        if (cResult[9] === chatInputRef) {
          if (cResult[10] === cleanUp) {
            if (cResult[11] === FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
              let tmp13;
              if (cResult[12] === state) {
                tmp13 = cResult[13];
              }
              return tmp13;
            }
          }
        }
        const tmp16 = jsx(MediaKeyboardDefault, { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, chatInputRef, onClose: cleanUp, transitionState: state });
        cResult[9] = chatInputRef;
        cResult[10] = cleanUp;
        cResult[11] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
        cResult[12] = state;
        cResult[13] = tmp16;
        tmp13 = tmp16;
      } else if (KeyboardTypes.KeyboardTypes.EXPRESSION === type) {
        if (cResult[14] === chatInputRef) {
          if (cResult[15] === cleanUp) {
            if (cResult[16] === FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
              let tmp9;
              if (cResult[17] === state) {
                tmp9 = cResult[18];
              }
              return tmp9;
            }
          }
        }
        const tmp12 = jsx(ExpressionPickerKeyboardDefault, { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, chatInputRef, onClose: cleanUp, transitionState: state });
        cResult[14] = chatInputRef;
        cResult[15] = cleanUp;
        cResult[16] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
        cResult[17] = state;
        cResult[18] = tmp12;
        tmp9 = tmp12;
      } else {
        return null;
      }
    }
  }
  return null;
}) : ((item) => {
  let chatInputRef;
  let cleanUp;
  let state;
  let type;
  item = item.item;
  const channelId = item.channelId;
  ({ chatInputRef, type } = item);
  ({ state, cleanUp } = item);
  const channel = ChannelStore.getChannel(channelId);
  const items = [channel, channelId];
  const memo = react.useMemo(() => {
    let FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    if (channelId !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
    } else {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    }
    return FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
  }, items);
  const items1 = [memo];
  const memo1 = react.useMemo(() => {
    let tmp2;
    if (null != memo) {
      tmp2 = { channel: tmp, type: "channel" };
      const obj = { channel: tmp, type: "channel" };
    }
    return tmp2;
  }, items1);
  if (null != memo) {
    if (undefined !== memo1) {
      if (channelId(memo[6]).KeyboardTypes.APP_LAUNCHER === type) {
        channel(memo[7]);
        return <tmp10 context={memo1} chatInputRef={chatInputRef} onClose={cleanUp} transitionState={state} entrypoint={channelId(memo[8]).AppLauncherEntrypoint.TEXT} />;
      } else if (channelId(memo[6]).KeyboardTypes.MEDIA === type) {
        return jsx(channel(memo[9]), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else if (channelId(memo[6]).KeyboardTypes.EXPRESSION === type) {
        return jsx(channel(memo[10]), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else {
        return null;
      }
    }
  }
  return null;
}));
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRendererComponent.tsx");

export default memoResult;