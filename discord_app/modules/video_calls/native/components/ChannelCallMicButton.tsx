// discord_app/modules/video_calls/native/components/ChannelCallMicButton.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useMuteStatesDefault from "../../useMuteStates.tsx";
import CallBarActionAll from "CallBarAction.tsx";
import VoiceActionUtils from "../VoiceActionUtils.tsx";
import VoicePanelRiveMicButton from "../../../voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallMicButton.tsx");

export const ChannelCallMicButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelCallMicButton(channel) {
      const cResult = c.c(16);
      ({ isSmallSize, disableTint } = channel);
      let tmp4 = undefined !== disableTint;
      if (tmp4) {
        tmp4 = disableTint;
      }
      const tmp6 = useMuteStatesDefault(channel.channel);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameConsoleStore];
        const fn = function s() {
          return null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === tmp6) {
          let tmp11 = cResult[4];
        }
        ({ mute, onPress } = tmp11);
        if (cResult[5] !== mute) {
          const obj2 = { muted: mute };
          const tmp15 = jsx(VoicePanelRiveMicButton.VoicePanelRiveMicButton, { muted: mute });
          cResult[5] = mute;
          cResult[6] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.B3zz0G);
          cResult[7] = stringResult;
          let tmp16 = stringResult;
        } else {
          tmp16 = cResult[7];
        }
        const tmp5Result = importDefault(mute ? 10893 : 10894);
        if (!tmp4) {
          tmp4 = mute;
        }
        let RED_400;
        if (mute) {
          RED_400 = nativeDefault.unsafe_rawColors.RED_400;
        }
        if (cResult[8] === stateFromStores) {
          if (cResult[9] === isSmallSize) {
            if (cResult[10] === tmp13) {
              if (cResult[11] === onPress) {
                if (cResult[12] === tmp5Result) {
                  if (cResult[13] === tmp4) {
                    if (cResult[14] === RED_400) {
                      let tmp20 = cResult[15];
                    }
                    return tmp20;
                  }
                }
              }
            }
          }
        }
        const obj3 = {
          appearsDisabled: stateFromStores,
          accessibilityLabel: tmp16,
          onPress,
          source: tmp5Result,
          isActive: tmp4,
          isSmallSize,
          lottieComponent: tmp13,
          tintColor: RED_400,
        };
        const tmp23 = jsx(CallBarActionAll.ToggledActionButton, {
          appearsDisabled: stateFromStores,
          accessibilityLabel: tmp16,
          onPress,
          source: tmp5Result,
          isActive: tmp4,
          isSmallSize,
          lottieComponent: tmp13,
          tintColor: RED_400,
        });
        cResult[8] = stateFromStores;
        cResult[9] = isSmallSize;
        cResult[10] = tmp13;
        cResult[11] = onPress;
        cResult[12] = tmp5Result;
        cResult[13] = tmp4;
        cResult[14] = RED_400;
        cResult[15] = tmp23;
        tmp20 = tmp23;
      }
      const tmpResult = initialize;
      const muteHandler = VoiceActionUtils.createMuteHandler(tmp6, stateFromStores);
      cResult[2] = stateFromStores;
      cResult[3] = tmp6;
      cResult[4] = muteHandler;
      tmp11 = muteHandler;
      const tmpResult2 = VoiceActionUtils;
    }
  : function ChannelCallMicButton(disableTint) {
      let flag = disableTint.disableTint;
      ({ channel, isSmallSize } = disableTint);
      if (flag === undefined) {
        flag = false;
      }
      let mute;
      const tmp3 = useMuteStatesDefault(channel);
      const items = [GameConsoleStore];
      const stateFromStores = mute(504).useStateFromStores(
        items,
        () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo(),
      );
      const obj = mute(504);
      const muteHandler = mute(10889).createMuteHandler(tmp3, stateFromStores);
      mute = muteHandler.mute;
      const items1 = [mute];
      const memo = noop.useMemo(() => jsx(VoicePanelRiveMicButton.VoicePanelRiveMicButton, { muted: mute }), items1);
      const obj3 = {
        appearsDisabled: stateFromStores,
        accessibilityLabel: null,
        onPress: null,
        source: null,
        isActive: null,
        isSmallSize: null,
        lottieComponent: null,
        tintColor: null,
      };
      const intl = mute(1126).intl;
      obj3.accessibilityLabel = intl.string(mute(1126).t.B3zz0G);
      obj3.onPress = muteHandler.onPress;
      obj3.source = importDefault(mute ? 10893 : 10894);
      if (!flag) {
        flag = mute;
      }
      obj3.isActive = flag;
      obj3.isSmallSize = isSmallSize;
      obj3.lottieComponent = memo;
      let RED_400;
      if (mute) {
        RED_400 = nativeDefault.unsafe_rawColors.RED_400;
      }
      obj3.tintColor = RED_400;
      return jsx(CallBarActionAll.ToggledActionButton, {
        appearsDisabled: stateFromStores,
        accessibilityLabel: null,
        onPress: null,
        source: null,
        isActive: null,
        isSmallSize: null,
        lottieComponent: null,
        tintColor: null,
      });
    };
