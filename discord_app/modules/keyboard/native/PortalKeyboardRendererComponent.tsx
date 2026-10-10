// discord_app/modules/keyboard/native/PortalKeyboardRendererComponent.tsx
import useBackPressHandler from "../../routing/native/useBackPressHandler.tsx";
import FakePlaceholderPrivateChannel from "../../channel/FakePlaceholderPrivateChannel.tsx";
import AppLauncherKeyboardDefault from "../../app_launcher/native/AppLauncherKeyboard.tsx";
import MediaKeyboardDefault from "../../media_keyboard/native/components/MediaKeyboard.tsx";
import ExpressionPickerKeyboardDefault from "../../expression_picker/native/ExpressionPickerKeyboard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRendererComponent.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function PortalKeyboardRendererComponent(arg0) {
        const cResult = chatInputRef(576).c(23);
        ({ item, state, cleanUp } = arg0);
        ({ channelId, chatInputRef } = item);
        const type = item.type;
        const tmp4 = state === chatInputRef(4827).TransitionStates.YEETED;
        importDefault = tmp4;
        if (cResult[0] === chatInputRef) {
          if (cResult[1] === tmp4) {
            let tmp5 = cResult[2];
            let tmp6 = cResult[3];
          }
          const layoutEffect = noop.useLayoutEffect(tmp5, tmp6);
          if (cResult[4] !== channelId) {
            const channel = ChannelStore.getChannel(channelId);
            cResult[4] = channelId;
            cResult[5] = channel;
            let FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
          } else {
            FAKE_PLACEHOLDER_PRIVATE_CHANNEL = cResult[5];
          }
          if (channelId === chatInputRef(6923).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            FAKE_PLACEHOLDER_PRIVATE_CHANNEL = chatInputRef(6923).FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
          }
          if (cResult[6] !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
            let tmp13;
            if (null != FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
              const obj2 = { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, type: "channel" };
              tmp13 = obj2;
            }
            cResult[6] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
            cResult[7] = tmp13;
            let tmp11 = tmp13;
          } else {
            tmp11 = cResult[7];
          }
          if (null != FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
            if (undefined !== tmp11) {
              if (chatInputRef(1629).KeyboardTypes.APP_LAUNCHER === type) {
                if (cResult[8] === chatInputRef) {
                  if (cResult[9] === cleanUp) {
                    if (cResult[10] === tmp11) {
                      if (cResult[11] === state) {
                        let tmp23 = cResult[12];
                      }
                      return tmp23;
                    }
                  }
                }
                const obj3 = {
                  context: tmp11,
                  chatInputRef,
                  onClose: cleanUp,
                  transitionState: state,
                  entrypoint: chatInputRef(10622).AppLauncherEntrypoint.TEXT,
                };
                const tmp27 = jsx(AppLauncherKeyboardDefault, {
                  context: tmp11,
                  chatInputRef,
                  onClose: cleanUp,
                  transitionState: state,
                  entrypoint: chatInputRef(10622).AppLauncherEntrypoint.TEXT,
                });
                cResult[8] = chatInputRef;
                cResult[9] = cleanUp;
                cResult[10] = tmp11;
                cResult[11] = state;
                cResult[12] = tmp27;
                tmp23 = tmp27;
              } else if (chatInputRef(1629).KeyboardTypes.MEDIA === type) {
                if (cResult[13] === chatInputRef) {
                  if (cResult[14] === cleanUp) {
                    if (cResult[15] === FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
                      if (cResult[16] === state) {
                        let tmp19 = cResult[17];
                      }
                      return tmp19;
                    }
                  }
                }
                const obj4 = {
                  channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL,
                  chatInputRef,
                  onClose: cleanUp,
                  transitionState: state,
                };
                const tmp22 = jsx(MediaKeyboardDefault, {
                  channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL,
                  chatInputRef,
                  onClose: cleanUp,
                  transitionState: state,
                });
                cResult[13] = chatInputRef;
                cResult[14] = cleanUp;
                cResult[15] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
                cResult[16] = state;
                cResult[17] = tmp22;
                tmp19 = tmp22;
              } else if (chatInputRef(1629).KeyboardTypes.EXPRESSION === type) {
                if (cResult[18] === chatInputRef) {
                  if (cResult[19] === cleanUp) {
                    if (cResult[20] === FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
                      if (cResult[21] === state) {
                        let tmp15 = cResult[22];
                      }
                      return tmp15;
                    }
                  }
                }
                const obj5 = {
                  channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL,
                  chatInputRef,
                  onClose: cleanUp,
                  transitionState: state,
                };
                const tmp18 = jsx(ExpressionPickerKeyboardDefault, {
                  channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL,
                  chatInputRef,
                  onClose: cleanUp,
                  transitionState: state,
                });
                cResult[18] = chatInputRef;
                cResult[19] = cleanUp;
                cResult[20] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
                cResult[21] = state;
                cResult[22] = tmp18;
                tmp15 = tmp18;
              } else {
                return null;
              }
            }
          }
          return null;
        }
        const fn = function u() {
          if (!closure_1) {
            return useBackPressHandler.subscribeToBackPress(() => {
              const current = ref.current;
              current.closeCustomKeyboard();
              return true;
            });
          }
        };
        const items = [chatInputRef, tmp4];
        cResult[0] = chatInputRef;
        cResult[1] = tmp4;
        cResult[2] = fn;
        cResult[3] = items;
        tmp6 = items;
        tmp5 = fn;
        const obj = chatInputRef(576);
      }
    : function PortalKeyboardRendererComponent(item) {
        item = item.item;
        const channelId = item.channelId;
        const chatInputRef = item.chatInputRef;
        const type = item.type;
        ({ state, cleanUp } = item);
        let channel;
        let memo;
        const tmp3 = state === channelId(4827).TransitionStates.YEETED;
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
            if (tmp(1629).KeyboardTypes.APP_LAUNCHER === type) {
              const obj2 = {
                context: memo1,
                chatInputRef,
                onClose: cleanUp,
                transitionState: state,
                entrypoint: tmp(10622).AppLauncherEntrypoint.TEXT,
              };
              return jsx(chatInputRef(11710), {
                context: memo1,
                chatInputRef,
                onClose: cleanUp,
                transitionState: state,
                entrypoint: tmp(10622).AppLauncherEntrypoint.TEXT,
              });
            } else if (tmp(1629).KeyboardTypes.MEDIA === type) {
              const obj3 = { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state };
              return jsx(chatInputRef(17103), {
                channel: memo,
                chatInputRef,
                onClose: cleanUp,
                transitionState: state,
              });
            } else if (tmp(1629).KeyboardTypes.EXPRESSION === type) {
              let obj = { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state };
              return jsx(chatInputRef(17109), {
                channel: memo,
                chatInputRef,
                onClose: cleanUp,
                transitionState: state,
              });
            } else {
              return null;
            }
          }
        }
        return null;
      },
);
