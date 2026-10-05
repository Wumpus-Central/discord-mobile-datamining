// discord_app/modules/video_calls/native/components/ChannelCallConnectingScreen.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import Constants2 from "../../../../../discord_common/js/shared/Constants.tsx";
import MetaQuestUtils from "../../../device/MetaQuestUtils.android.tsx";
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import BottomSheetModal from "../../../../../_runtime/06112_BottomSheetModal.js";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import ChannelCallStore from "../ChannelCallStore.tsx";
import useActionBarHeight from "../useActionBarHeight.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import beginConsoleTransfer from "../../../game_console/native/beginConsoleTransfer.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import UserSettingsVoiceDefault from "../../../user_settings/voice/native/UserSettingsVoice.tsx";
import VoiceChatHeaderIconDefault from "../../../voice_chat/native/components/VoiceChatHeaderIcon.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09685_AssetRegistry.js";
import ChannelCallMicButton from "ChannelCallMicButton.tsx";
import coercePlatformTypeToConsoleType from "../../../game_console/coercePlatformTypeToConsoleType.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import SessionsStore from "../../../../stores/SessionsStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, channel, importDefault;

let closure_12;
let closure_14;
let map1;
let obj2;
let react = react_mod;
const View = react_native.View;
const resetFocus = ChannelCallStore.resetFocus;
const InstantInviteSources = Constants.InstantInviteSources;
const Permissions = Constants2.Permissions;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let obj = { spacer: { width: 8 }, actionBarContainer: obj2 };
obj2 = {
  paddingHorizontal: 12,
  paddingTop: 16,
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "row",
  height: useActionBarHeight.CALL_ACTION_BAR_HEIGHT,
};
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let BottomSheetScrollView;
      let first;
      let obj3;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = MetaQuestUtils;
        const isMetaQuestResult = tmpResult.isMetaQuest();
        cResult[0] = isMetaQuestResult;
        first = isMetaQuestResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { scrollable: true, startExpanded: first, children: closure_12(BottomSheetScrollView, obj3) };
        BottomSheet = Sheet_BottomSheet.BottomSheet;
        obj3 = { children: closure_12(UserSettingsVoiceDefault, {}) };
        BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
        const tmp9 = closure_12(BottomSheet, obj2);
        cResult[1] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : () => {
      let BottomSheetScrollView;
      let obj2;
      let obj3;
      const obj = {
        scrollable: true,
        startExpanded: obj2.isMetaQuest(),
        children: closure_12(BottomSheetScrollView, obj3),
      };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      obj2 = MetaQuestUtils;
      obj3 = { children: closure_12(UserSettingsVoiceDefault, {}) };
      BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
      return closure_12(BottomSheet, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let intl;
      let items;
      let obj8;
      let obj = channel(576);
      const cResult = obj.c(13);
      channel = channel.channel;
      const tmp4 = closure_15();
      const tmp6 = useChannelNameDefault(channel);
      let obj2 = channel(9600);
      const isVoiceChannelLocked = obj2.useIsVoiceChannelLocked(channel);
      if (cResult[0] === channel) {
        let tmp8;
        let tmp10;
        if (cResult[1] === isVoiceChannelLocked) {
          tmp8 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { style: { width: 4 } };
          const tmp13 = closure_12(View, obj3);
          cResult[3] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] === tmp6) {
          let tmp14;
          let tmp18;
          let tmp22;
          if (cResult[5] === tmp8) {
            tmp14 = cResult[6];
          }
          if (cResult[7] !== tmp4.spacer) {
            const obj4 = { style: tmp4.spacer };
            const tmp21 = closure_12(View, obj4);
            cResult[7] = tmp4.spacer;
            cResult[8] = tmp21;
            tmp18 = tmp21;
          } else {
            tmp18 = cResult[8];
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { style: { width: 4 } };
            const tmp25 = closure_12(View, obj5);
            cResult[9] = tmp25;
            tmp22 = tmp25;
          } else {
            tmp22 = cResult[9];
          }
          if (cResult[10] === tmp14) {
            let tmp26;
            if (cResult[11] === tmp18) {
              tmp26 = cResult[12];
            }
            return tmp26;
          }
          const obj6 = { children: items };
          items = [tmp10, tmp14, tmp18, tmp22];
          const tmp29 = closure_14(closure_13, obj6);
          cResult[10] = tmp14;
          cResult[11] = tmp18;
          cResult[12] = tmp29;
          tmp26 = tmp29;
        }
        let tmp15 = null;
        if (null != tmp8) {
          const obj7 = {
            source: AssetRegistryDefault,
            onPress: tmp8,
            accessibilityLabel: intl.formatToPlainString(channel(1126).t["dHHb/2"], obj8),
          };
          const tmp5Result = VoiceChatHeaderIconDefault;
          intl = tmp(1126).intl;
          obj8 = { channelName: tmp6 };
          tmp15 = closure_12(tmp5Result, obj7);
        }
        cResult[4] = tmp6;
        cResult[5] = tmp8;
        cResult[6] = tmp15;
        tmp14 = tmp15;
      }
      let fn = null;
      if (PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
        fn = null;
        if (!isVoiceChannelLocked) {
          fn = () => {
            const obj = instant_invite_InstantInviteUtils;
            const obj2 = { source: InstantInviteSources.VOICE_CHANNEL };
            return obj.showInstantInviteActionSheet(channel, obj2);
          };
        }
      }
      cResult[0] = channel;
      cResult[1] = isVoiceChannelLocked;
      cResult[2] = fn;
      tmp8 = fn;
    }
  : (channel) => {
      let intl;
      let obj3;
      channel = channel.channel;
      const tmp = closure_15();
      const tmp4 = useChannelNameDefault(channel);
      let obj = channel(9600);
      const isVoiceChannelLocked = obj.useIsVoiceChannelLocked(channel);
      let fn = null;
      if (PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
        fn = null;
        if (!isVoiceChannelLocked) {
          fn = () => {
            const obj = instant_invite_InstantInviteUtils;
            const obj2 = { source: InstantInviteSources.VOICE_CHANNEL };
            return obj.showInstantInviteActionSheet(channel, obj2);
          };
        }
      }
      const items = [closure_12(View, { style: { width: 4 } }), , ,];
      let tmp9Result = null;
      if (null != fn) {
        let obj2 = {
          source: AssetRegistryDefault,
          onPress: fn,
          accessibilityLabel: intl.formatToPlainString(channel(1126).t["dHHb/2"], obj3),
        };
        const tmp2Result = VoiceChatHeaderIconDefault;
        intl = tmp5(1126).intl;
        obj3 = { channelName: tmp4 };
        tmp9Result = closure_12(tmp2Result, obj2);
      }
      const obj4 = { children: items };
      items[1] = tmp9Result;
      const obj5 = { style: tmp.spacer };
      items[2] = closure_12(View, obj5);
      items[3] = closure_12(View, { style: { width: 4 } });
      return closure_14(closure_13, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const obj = react2;
      const cResult = obj.c(3);
      channel = channel.channel;
      const tmp4 = "light" === useThemeDefault();
      if (cResult[0] === channel) {
        let tmp5;
        if (cResult[1] === tmp4) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = closure_12(ChannelCallMicButton.ChannelCallMicButton, {
        channel,
        disableTint: tmp4,
        isSmallSize: false,
      });
      cResult[0] = channel;
      cResult[1] = tmp4;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (channel) => {
      channel = channel.channel;
      const obj = { channel, disableTint: "light" === useThemeDefault(), isSmallSize: false };
      return closure_12(ChannelCallMicButton.ChannelCallMicButton, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let awaitingRemoteSessionInfo;
      let stateFromStores1;
      let tmp10;
      let tmp14;
      let tmp6;
      let tmp7;
      const tmp = channel;
      let obj = channel(stateFromStores1[14]);
      const cResult = obj.c(21);
      channel = channel.channel;
      const tmp5 = require("useVoiceStateForRemoteSession")();
      importDefault = tmp5;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameConsoleStore];
        const fn = function l() {
          return null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = tmp(stateFromStores1[31]);
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SessionsStore];
        cResult[2] = items1;
        tmp10 = items1;
      } else {
        tmp10 = cResult[2];
      }
      let sessionId;
      const tmp12 = cResult[3];
      if (tmp5 != null) {
        sessionId = tmp5.sessionId;
      }
      if (tmp12 !== sessionId) {
        let sessionId1;
        if (tmp5 != null) {
          sessionId1 = tmp5.sessionId;
        }
        const fn2 = function f() {
          let str;
          const getSessionById = SessionsStore.getSessionById;
          if (sessionId != null) {
            str = sessionId.sessionId;
          }
          if (str == null) {
            str = "";
          }
          const sessionById = getSessionById(str);
          let os;
          if (sessionById != null) {
            os = sessionById.clientInfo.os;
          }
          return os;
        };
        cResult[3] = sessionId1;
        cResult[4] = fn2;
        tmp14 = fn2;
      } else {
        tmp14 = cResult[4];
      }
      const tmpResult3 = tmp(stateFromStores1[31]);
      stateFromStores1 = tmpResult3.useStateFromStores(tmp10, tmp14);
      const tmp17 = require("useGameConsoleAccounts")();
      let closure_3 = tmp17;
      const tmp18 = require("useMuteStates")(channel);
      let closure_4 = tmp19;
      if (cResult[5] === channel) {
        if (cResult[6] === tmp17) {
          if (cResult[7] === (tmp18.selfMute || tmp18.mute || tmp18.suppress)) {
            let tmp20;
            let tmp25;
            let tmp24;
            let stringResult1;
            if (cResult[8] === stateFromStores1) {
              tmp20 = cResult[9];
            }
            const tmp21 = require("useIsVoiceChannelFull")(channel);
            const tmpResult4 = tmp(stateFromStores1[20]);
            const isVoiceChannelLocked = tmpResult4.useIsVoiceChannelLocked(channel);
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              let obj2 = { tintColor: require("native").unsafe_rawColors.WHITE };
              const intl = tmp(tmp2[24]).intl;
              const stringResult = intl.string(tmp(stateFromStores1[24]).t["96ANUN"]);
              cResult[10] = obj2;
              cResult[11] = stringResult;
              tmp25 = stringResult;
              tmp24 = obj2;
            } else {
              tmp24 = cResult[10];
              tmp25 = cResult[11];
            }
            const tmp4Result = importDefault(
              tmp18.selfMute || tmp18.mute || tmp18.suppress ? stateFromStores1[37] : stateFromStores1[38],
            );
            if (cResult[12] === tmp21) {
              if (cResult[13] === isVoiceChannelLocked) {
                let tmp28;
                if (cResult[14] === (tmp18.selfMute || tmp18.mute || tmp18.suppress)) {
                  tmp28 = cResult[15];
                }
                if (cResult[16] === (tmp21 || isVoiceChannelLocked || stateFromStores)) {
                  if (cResult[17] === tmp20) {
                    if (cResult[18] === tmp4Result) {
                      let tmp30;
                      if (cResult[19] === tmp28) {
                        tmp30 = cResult[20];
                      }
                      return tmp30;
                    }
                  }
                }
                let obj3 = {
                  disabled: tmp21 || isVoiceChannelLocked || stateFromStores,
                  backgroundColor: require("native").unsafe_rawColors.GREEN_360,
                  imageStyle: tmp24,
                  accessibilityLabel: tmp25,
                  source: tmp4Result,
                  onPress: tmp20,
                  label: tmp28,
                  iconPosition: tmp(stateFromStores1[39]).IconPosition.RIGHT,
                };
                const LabeledActionButton = tmp(tmp2[39]).LabeledActionButton;
                const tmp32 = closure_12(LabeledActionButton, obj3);
                cResult[16] = tmp21 || isVoiceChannelLocked || stateFromStores;
                cResult[17] = tmp20;
                cResult[18] = tmp4Result;
                cResult[19] = tmp28;
                cResult[20] = tmp32;
                tmp30 = tmp32;
              }
            }
            const intl2 = tmp(tmp2[24]).intl;
            const string = intl2.string;
            const t = tmp(tmp2[24]).t;
            if (isVoiceChannelLocked) {
              stringResult1 = string(t.TVBCKZ);
            } else if (tmp21) {
              stringResult1 = string(t.rZfiNq);
            } else if (tmp18.selfMute || tmp18.mute || tmp18.suppress) {
              stringResult1 = string(t["Bd/Liz"]);
            } else {
              stringResult1 = string(t["96ANUN"]);
            }
            cResult[12] = tmp21;
            cResult[13] = isVoiceChannelLocked;
            cResult[14] = tmp18.selfMute || tmp18.mute || tmp18.suppress;
            cResult[15] = stringResult1;
            tmp28 = stringResult1;
          }
        }
      }
      class I {
        constructor() {
          if (null != stateFromStores1) {
            const obj = coercePlatformTypeToConsoleType;
            const result = obj.coerceConsoleTypeToPlatformType(tmp, closure_3);
            if (null != result) {
              const obj5 = beginConsoleTransfer;
              return obj5.beginConsoleTransfer(channel, result);
            }
          }
          const id = channel.id;
          resetFocus();
          const obj2 = KeyboardManagerUtils;
          const result1 = obj2.dismissGlobalKeyboard();
          if (closure_4) {
            if (!MediaEngineStore.getSettings().mute) {
              const obj3 = AudioActionCreatorsDefault;
              obj3.toggleSelfMute();
            }
          }
          const obj4 = SelectedChannelActionCreatorsDefault;
          const voiceChannel = obj4.selectVoiceChannel(id, false, false);
        }
      }
      cResult[5] = channel;
      cResult[6] = tmp17;
      cResult[7] = tmp18.selfMute || tmp18.mute || tmp18.suppress;
      cResult[8] = stateFromStores1;
      cResult[9] = I;
      tmp20 = I;
    }
  : (channel) => {
      let awaitingRemoteSessionInfo;
      let closure_3;
      let intl;
      let obj4;
      let sessionId;
      let stringResult;
      channel = channel.channel;
      importDefault = undefined;
      let stateFromStores1;
      const tmp = importDefault;
      importDefault = require("useVoiceStateForRemoteSession")();
      let obj = channel(stateFromStores1[31]);
      const items = [GameConsoleStore];
      const stateFromStores = obj.useStateFromStores(
        items,
        () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo(),
      );
      let obj2 = channel(stateFromStores1[31]);
      const items1 = [SessionsStore];
      stateFromStores1 = obj2.useStateFromStores(items1, () => {
        let str;
        const getSessionById = SessionsStore.getSessionById;
        if (sessionId != null) {
          str = sessionId.sessionId;
        }
        if (str == null) {
          str = "";
        }
        const sessionById = getSessionById(str);
        let os;
        if (sessionById != null) {
          os = sessionById.clientInfo.os;
        }
        return os;
      });
      const tmp6 = require("useGameConsoleAccounts")();
      react = tmp6;
      const tmp7 = require("useMuteStates")(channel);
      let closure_4 = tmp8;
      const items2 = [channel, stateFromStores1, tmp6, tmp7.selfMute || tmp7.mute || tmp7.suppress];
      const callback = react.useCallback(() => {
        if (null != stateFromStores1) {
          const obj = coercePlatformTypeToConsoleType;
          const result = obj.coerceConsoleTypeToPlatformType(tmp, closure_3);
          if (null != result) {
            const obj5 = beginConsoleTransfer;
            return obj5.beginConsoleTransfer(channel, result);
          }
        }
        const id = channel.id;
        resetFocus();
        const obj2 = KeyboardManagerUtils;
        const result1 = obj2.dismissGlobalKeyboard();
        if (closure_4) {
          if (!MediaEngineStore.getSettings().mute) {
            const obj3 = AudioActionCreatorsDefault;
            obj3.toggleSelfMute();
          }
        }
        const obj4 = SelectedChannelActionCreatorsDefault;
        const voiceChannel = obj4.selectVoiceChannel(id, false, false);
      }, items2);
      const tmp10 = tmp(stateFromStores1[20])(channel);
      const tmp3Result = channel(stateFromStores1[20]);
      const isVoiceChannelLocked = tmp3Result.useIsVoiceChannelLocked(channel);
      let tmp13 = tmp10;
      const LabeledActionButton = tmp3(tmp2[39]).LabeledActionButton;
      if (!tmp10) {
        tmp13 = isVoiceChannelLocked;
      }
      if (!tmp13) {
        tmp13 = stateFromStores;
      }
      let obj3 = {
        disabled: tmp13,
        backgroundColor: tmp(tmp2[36]).unsafe_rawColors.GREEN_360,
        imageStyle: obj4,
        accessibilityLabel: intl.string(channel(stateFromStores1[24]).t["96ANUN"]),
        source: tmp(tmp7.selfMute || tmp7.mute || tmp7.suppress ? stateFromStores1[37] : stateFromStores1[38]),
        onPress: callback,
        label: stringResult,
        iconPosition: channel(stateFromStores1[39]).IconPosition.RIGHT,
      };
      obj4 = { tintColor: tmp(tmp2[36]).unsafe_rawColors.WHITE };
      intl = tmp3(tmp2[24]).intl;
      const intl2 = tmp3(tmp2[24]).intl;
      const string = intl2.string;
      const t = tmp3(tmp2[24]).t;
      if (isVoiceChannelLocked) {
        stringResult = string(t.TVBCKZ);
      } else if (tmp10) {
        stringResult = string(t.rZfiNq);
      } else if (tmp7.selfMute || tmp7.mute || tmp7.suppress) {
        stringResult = string(t["Bd/Liz"]);
      } else {
        stringResult = string(t["96ANUN"]);
      }
      return closure_12(LabeledActionButton, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let items;
      let tmp3;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(7);
      channel = channel.channel;
      const tmp2 = closure_15();
      if (cResult[0] !== channel) {
        const obj2 = { channel };
        const tmp7 = closure_12(closure_17, obj2);
        const obj3 = { channel };
        const tmp9 = closure_12(closure_18, obj3);
        cResult[0] = channel;
        cResult[1] = tmp7;
        cResult[2] = tmp9;
        tmp4 = tmp9;
        tmp3 = tmp7;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      if (cResult[3] === tmp2.actionBarContainer) {
        if (cResult[4] === tmp3) {
          let tmp10;
          if (cResult[5] === tmp4) {
            tmp10 = cResult[6];
          }
          return tmp10;
        }
      }
      const obj4 = { style: tmp2.actionBarContainer, children: items };
      items = [tmp3, tmp4];
      const tmp11 = authStore2(View, obj4);
      cResult[3] = tmp2.actionBarContainer;
      cResult[4] = tmp3;
      cResult[5] = tmp4;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : (channel) => {
      let items;
      channel = channel.channel;
      const obj = { style: closure_15().actionBarContainer, children: items };
      items = [closure_12(closure_17, { channel }), closure_12(closure_18, { channel })];
      return authStore2(View, obj);
    };
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallConnectingScreen.tsx");

export const showVoiceSettingsActionSheet = function showVoiceSettingsActionSheet(guildId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { guildId };
  obj.openLazy(() => Promise.resolve(closure_1_16), "voice settings", obj2);
};
export const ChannelCallConnectingHeader = tmp3;
export const CallConnectingActionBar = tmp4;
