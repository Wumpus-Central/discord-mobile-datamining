// discord_app/modules/video_calls/native/components/ChannelCallConnectingScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import MetaQuestUtils from "../../../device/MetaQuestUtils.android.tsx";
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import BottomSheetModal from "../../../../../_runtime/06305_BottomSheetModal.js";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import UserSettingsVoiceDefault from "../../../user_settings/voice/native/UserSettingsVoice.tsx";
import VoiceChatHeaderIconDefault from "../../../voice_chat/native/components/VoiceChatHeaderIcon.tsx";
import _modDef11060 from "../../../../../_runtime/metro/11060__.js";
import ChannelCallMicButton from "ChannelCallMicButton.tsx";
import coercePlatformTypeToConsoleType from "../../../game_console/coercePlatformTypeToConsoleType.tsx";
import beginConsoleTransfer from "../../../game_console/native/beginConsoleTransfer.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import SessionsStore from "../../../../stores/SessionsStore.tsx";

require = fn;
const View = fn(17).View;
const resetFocus = fn(10320).resetFocus;
const InstantInviteSources = fn(1085).InstantInviteSources;
const Permissions = fn(1096).Permissions;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  spacer: { width: 8 },
  actionBarContainer: {
    paddingHorizontal: 12,
    paddingTop: 16,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    height: fn(10830).CALL_ACTION_BAR_HEIGHT,
  },
};
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VoiceSettingsActionSheet() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const isMetaQuestResult = MetaQuestUtils.isMetaQuest();
        cResult[0] = isMetaQuestResult;
        let first = isMetaQuestResult;
        const tmpResult = MetaQuestUtils;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { scrollable: true, startExpanded: first, children: null };
        const obj3 = { children: __initData(UserSettingsVoiceDefault, {}) };
        obj2.children = __initData(BottomSheetModal.BottomSheetScrollView, obj3);
        const tmp9 = __initData(Sheet_BottomSheet.BottomSheet, obj2);
        cResult[1] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : function VoiceSettingsActionSheet() {
      const obj = { scrollable: true, startExpanded: MetaQuestUtils.isMetaQuest(), children: null };
      obj.children = __initData(BottomSheetModal.BottomSheetScrollView, {
        children: __initData(UserSettingsVoiceDefault, {}),
      });
      return __initData(Sheet_BottomSheet.BottomSheet, obj);
    };
fn(558);
let obj3 = {
  paddingHorizontal: 12,
  paddingTop: 16,
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "row",
  height: fn(10830).CALL_ACTION_BAR_HEIGHT,
};
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function JoinMutedButton(channel) {
      const cResult = c.c(3);
      channel = channel.channel;
      const tmp4 = "light" === useThemeDefault();
      if (cResult[0] === channel) {
        if (cResult[1] === tmp4) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = __initData(ChannelCallMicButton.ChannelCallMicButton, {
        channel,
        disableTint: tmp4,
        isSmallSize: false,
      });
      cResult[0] = channel;
      cResult[1] = tmp4;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : function JoinMutedButton(channel) {
      const tmp = useThemeDefault();
      return __initData(ChannelCallMicButton.ChannelCallMicButton, {
        channel: channel.channel,
        disableTint: "light" === useThemeDefault(),
        isSmallSize: false,
      });
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function JoinVoiceButton(channel) {
      const cResult = channel(stateFromStores1[14]).c(21);
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
      let obj = channel(stateFromStores1[14]);
      const stateFromStores = channel(stateFromStores1[31]).useStateFromStores(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SessionsStore];
        cResult[2] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[2];
      }
      let sessionId;
      if (tmp5 != null) {
        sessionId = tmp5.sessionId;
      }
      if (cResult[3] !== sessionId) {
        let sessionId1;
        if (tmp5 != null) {
          sessionId1 = tmp5.sessionId;
        }
        class S {
          constructor() {
            str = undefined;
            tmp = closure_8;
            if (closure_1 != null) {
              str = closure_1.sessionId;
            }
            if (str == null) {
              str = "";
            }
            sessionById = closure_8.getSessionById(str);
            os = undefined;
            if (sessionById != null) {
              os = sessionById.clientInfo.os;
            }
            return os;
          }
        }
        cResult[3] = sessionId1;
        cResult[4] = S;
        let tmp13 = S;
      } else {
        tmp13 = cResult[4];
      }
      const tmpResult = channel(stateFromStores1[31]);
      stateFromStores1 = channel(stateFromStores1[31]).useStateFromStores(tmp10, tmp13);
      const tmp16 = require("useGameConsoleAccounts")();
      closure_3 = tmp16;
      const tmp17 = require("useMuteStates")(channel);
      closure_4 = tmp18;
      if (cResult[5] === channel) {
        if (cResult[6] === tmp16) {
          if (cResult[7] === tmp18) {
            if (cResult[8] === stateFromStores1) {
              let tmp19 = cResult[9];
            }
            const tmp20 = tmp4(tmp2[20])(channel);
            class S {
              constructor() {
                str = undefined;
                tmp = closure_8;
                if (closure_1 != null) {
                  str = closure_1.sessionId;
                }
                if (str == null) {
                  str = "";
                }
                sessionById = closure_8.getSessionById(str);
                os = undefined;
                if (sessionById != null) {
                  os = sessionById.clientInfo.os;
                }
                return os;
              }
            }
            const isVoiceChannelLocked = obj4.useIsVoiceChannelLocked(channel);
            let tmp22 = tmp20;
            if (!tmp20) {
              tmp22 = isVoiceChannelLocked;
            }
            if (!tmp22) {
              tmp22 = stateFromStores;
            }
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              let obj2 = { tintColor: tmp4(tmp2[36]).unsafe_rawColors.WHITE };
              class S {
                constructor() {
                  str = undefined;
                  tmp = closure_8;
                  if (closure_1 != null) {
                    str = closure_1.sessionId;
                  }
                  if (str == null) {
                    str = "";
                  }
                  sessionById = closure_8.getSessionById(str);
                  os = undefined;
                  if (sessionById != null) {
                    os = sessionById.clientInfo.os;
                  }
                  return os;
                }
              }
              const stringResult = obj6.string(tmp(tmp2[24]).t["96ANUN"]);
              cResult[10] = obj2;
              cResult[11] = stringResult;
              let tmp24 = stringResult;
              let tmp23 = obj2;
            } else {
              tmp23 = cResult[10];
              tmp24 = cResult[11];
            }
            const tmp4Result = tmp4(tmp18 ? tmp2[37] : tmp2[38]);
            if (cResult[12] === tmp20) {
              if (cResult[13] === isVoiceChannelLocked) {
                if (cResult[14] === tmp18) {
                  if (cResult[16] === tmp22) {
                    if (cResult[17] === tmp19) {
                      if (cResult[18] === tmp4Result) {
                        if (cResult[19] === tmp27) {
                          let tmp30 = cResult[20];
                        }
                        return tmp30;
                      }
                    }
                  }
                  class S {
                    constructor() {
                      str = undefined;
                      tmp = closure_8;
                      if (closure_1 != null) {
                        str = closure_1.sessionId;
                      }
                      if (str == null) {
                        str = "";
                      }
                      sessionById = closure_8.getSessionById(str);
                      os = undefined;
                      if (sessionById != null) {
                        os = sessionById.clientInfo.os;
                      }
                      return os;
                    }
                  }
                  let obj3 = {
                    disabled: tmp22,
                    backgroundColor: tmp4(tmp2[36]).unsafe_rawColors.GREEN_360,
                    imageStyle: tmp23,
                    accessibilityLabel: tmp24,
                    source: tmp4Result,
                    onPress: tmp19,
                    label: cResult[15],
                    iconPosition: tmp(tmp2[39]).IconPosition.RIGHT,
                  };
                  const tmp31 = closure_12(tmp(tmp2[39]).LabeledActionButton, obj3);
                  cResult[16] = tmp22;
                  cResult[17] = tmp19;
                  cResult[18] = tmp4Result;
                  cResult[19] = cResult[15];
                  cResult[20] = tmp31;
                  tmp30 = tmp31;
                }
              }
            }
            const intl = tmp(tmp2[24]).intl;
            const string = intl.string;
            let TVBCKZ = tmp(tmp2[24]).t;
            if (isVoiceChannelLocked) {
              TVBCKZ = TVBCKZ.TVBCKZ;
              let stringResult1 = string(TVBCKZ);
            } else if (tmp20) {
              stringResult1 = string(TVBCKZ.rZfiNq);
            } else if (tmp18) {
              stringResult1 = string(TVBCKZ["Bd/Liz"]);
            } else {
              stringResult1 = string(TVBCKZ["96ANUN"]);
            }
            cResult[12] = tmp20;
            cResult[13] = isVoiceChannelLocked;
            cResult[14] = tmp18;
            cResult[15] = stringResult1;
          }
        }
      }
      class I {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[34]);
            tmp4 = closure_3;
            result = obj.coerceConsoleTypeToPlatformType(tmp, closure_3);
            if (null != result) {
              tmp13 = closure_0;
              tmp14 = closure_2;
              obj5 = closure_0(closure_2[35]);
              tmp15 = channel;
              return obj5.beginConsoleTransfer(channel, result);
            }
          }
          tmp6 = resetFocus();
          tmp7 = closure_2;
          obj2 = closure_0(closure_2[25]);
          result1 = obj2.dismissGlobalKeyboard();
          if (suppress) {
            tmp9 = closure_6;
            if (!closure_6.getSettings().mute) {
              tmp10 = closure_1;
              obj3 = closure_1(tmp7[26]);
              toggleSelfMuteResult = obj3.toggleSelfMute();
            }
          }
          obj4 = closure_1(tmp7[27]);
          voiceChannel = obj4.selectVoiceChannel(channel.id, false, false);
          return;
        }
      }
      cResult[5] = channel;
      cResult[6] = tmp16;
      cResult[7] = tmp17.selfMute || tmp17.mute || tmp17.suppress;
      cResult[8] = stateFromStores1;
      cResult[9] = I;
      tmp19 = I;
      const tmpResult2 = channel(stateFromStores1[31]);
    }
  : function JoinVoiceButton(channel) {
      channel = channel.channel;
      importDefault = undefined;
      let stateFromStores1;
      importDefault = require("useVoiceStateForRemoteSession")();
      const items = [GameConsoleStore];
      const stateFromStores = channel(stateFromStores1[31]).useStateFromStores(
        items,
        () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo(),
      );
      let obj = channel(stateFromStores1[31]);
      const items1 = [SessionsStore];
      stateFromStores1 = channel(stateFromStores1[31]).useStateFromStores(items1, () => {
        let str;
        if (sessionId != null) {
          str = sessionId.sessionId;
        }
        if (str == null) {
          str = "";
        }
        const sessionById = SessionsStore.getSessionById(str);
        let os;
        if (sessionById != null) {
          os = sessionById.clientInfo.os;
        }
        return os;
      });
      const tmp6 = require("useGameConsoleAccounts")();
      noop = tmp6;
      const tmp7 = require("useMuteStates")(channel);
      closure_4 = tmp8;
      const items2 = [channel, stateFromStores1, tmp6, tmp7.selfMute || tmp7.mute || tmp7.suppress];
      const callback = noop.useCallback(() => {
        if (null != stateFromStores1) {
          const result = coercePlatformTypeToConsoleType.coerceConsoleTypeToPlatformType(tmp, closure_3);
          if (null != result) {
            return beginConsoleTransfer.beginConsoleTransfer(channel, result);
          }
        }
        resetFocus();
        const result1 = KeyboardManagerUtils.dismissGlobalKeyboard();
        if (closure_4) {
          if (!MediaEngineStore.getSettings().mute) {
            AudioActionCreatorsDefault.toggleSelfMute();
          }
        }
        const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id, false, false);
      }, items2);
      const tmp10 = require("useIsVoiceChannelFull")(channel);
      let obj2 = channel(stateFromStores1[31]);
      const isVoiceChannelLocked = channel(stateFromStores1[20]).useIsVoiceChannelLocked(channel);
      let tmp13 = tmp10;
      if (!tmp10) {
        tmp13 = isVoiceChannelLocked;
      }
      if (!tmp13) {
        tmp13 = stateFromStores;
      }
      let obj3 = {
        disabled: tmp13,
        backgroundColor: require("native").unsafe_rawColors.GREEN_360,
        imageStyle: null,
        accessibilityLabel: null,
        source: null,
        onPress: null,
        label: null,
        iconPosition: null,
      };
      const tmp3Result = channel(stateFromStores1[20]);
      obj3.imageStyle = { tintColor: require("native").unsafe_rawColors.WHITE };
      const intl = tmp3(tmp2[24]).intl;
      obj3.accessibilityLabel = intl.string(channel(stateFromStores1[24]).t["96ANUN"]);
      obj3.source = importDefault(
        tmp7.selfMute || tmp7.mute || tmp7.suppress ? stateFromStores1[37] : stateFromStores1[38],
      );
      obj3.onPress = callback;
      const intl2 = tmp3(tmp2[24]).intl;
      const string = intl2.string;
      const t = tmp3(tmp2[24]).t;
      if (isVoiceChannelLocked) {
        let stringResult = string(t.TVBCKZ);
      } else if (tmp10) {
        stringResult = string(t.rZfiNq);
      } else if (tmp8) {
        stringResult = string(t["Bd/Liz"]);
      } else {
        stringResult = string(t["96ANUN"]);
      }
      obj3.label = stringResult;
      obj3.iconPosition = channel(stateFromStores1[39]).IconPosition.RIGHT;
      return closure_12(channel(stateFromStores1[39]).LabeledActionButton, obj3);
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelCallConnectingHeader(channel) {
      const cResult = channel(576).c(13);
      channel = channel.channel;
      const tmp4 = closure_15();
      const tmp6 = useChannelNameDefault(channel);
      const obj = channel(576);
      const isVoiceChannelLocked = channel(10976).useIsVoiceChannelLocked(channel);
      if (cResult[0] === channel) {
        if (cResult[1] === isVoiceChannelLocked) {
          let tmp8 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { style: { width: 4 } };
          const tmp13 = closure_12(View, obj3);
          cResult[3] = tmp13;
          let tmp10 = tmp13;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] === tmp6) {
          if (cResult[5] === tmp8) {
            let tmp14 = cResult[6];
          }
          if (cResult[7] !== tmp4.spacer) {
            const obj4 = { style: tmp4.spacer };
            const tmp21 = closure_12(View, obj4);
            cResult[7] = tmp4.spacer;
            cResult[8] = tmp21;
            let tmp18 = tmp21;
          } else {
            tmp18 = cResult[8];
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { style: { width: 4 } };
            const tmp25 = closure_12(View, obj5);
            cResult[9] = tmp25;
            let tmp22 = tmp25;
          } else {
            tmp22 = cResult[9];
          }
          if (cResult[10] === tmp14) {
            if (cResult[11] === tmp18) {
              let tmp26 = cResult[12];
            }
            return tmp26;
          }
          const obj6 = { children: null };
          const items = [tmp10, tmp14, tmp18, tmp22];
          obj6.children = items;
          const tmp29 = closure_14(closure_13, obj6);
          cResult[10] = tmp14;
          cResult[11] = tmp18;
          cResult[12] = tmp29;
          tmp26 = tmp29;
        }
        let tmp15 = null;
        if (null != tmp8) {
          const obj7 = { source: _modDef11060, onPress: tmp8, accessibilityLabel: null };
          const intl = tmp(1126).intl;
          const obj8 = { channelName: tmp6 };
          obj7.accessibilityLabel = intl.formatToPlainString(tmp(1126).t["dHHb/2"], obj8);
          tmp15 = closure_12(VoiceChatHeaderIconDefault, obj7);
          const tmp5Result = VoiceChatHeaderIconDefault;
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
          fn = () =>
            instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, {
              source: InstantInviteSources.VOICE_CHANNEL,
            });
        }
      }
      cResult[0] = channel;
      cResult[1] = isVoiceChannelLocked;
      cResult[2] = fn;
      tmp8 = fn;
      const obj2 = channel(10976);
    }
  : function ChannelCallConnectingHeader(channel) {
      channel = channel.channel;
      const tmp = closure_15();
      const tmp4 = useChannelNameDefault(channel);
      const isVoiceChannelLocked = channel(10976).useIsVoiceChannelLocked(channel);
      let fn = null;
      if (PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
        fn = null;
        if (!isVoiceChannelLocked) {
          fn = () =>
            instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, {
              source: InstantInviteSources.VOICE_CHANNEL,
            });
        }
      }
      const items = [closure_12(View, { style: { width: 4 } }), , ,];
      let tmp9Result = null;
      if (null != fn) {
        const obj2 = { source: _modDef11060, onPress: fn, accessibilityLabel: null };
        const intl = tmp5(1126).intl;
        const obj3 = { channelName: tmp4 };
        obj2.accessibilityLabel = intl.formatToPlainString(tmp5(1126).t["dHHb/2"], obj3);
        tmp9Result = closure_12(VoiceChatHeaderIconDefault, obj2);
        const tmp2Result = VoiceChatHeaderIconDefault;
      }
      const obj4 = { children: null };
      items[1] = tmp9Result;
      items[2] = closure_12(View, { style: tmp.spacer });
      items[3] = closure_12(View, { style: { width: 4 } });
      obj4.children = items;
      return closure_14(closure_13, obj4);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallConnectingScreen.tsx");

export const showVoiceSettingsActionSheet = function showVoiceSettingsActionSheet(guildId) {
  ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_16), "voice settings", { guildId });
};
export const ChannelCallConnectingHeader = tmp3;
export const CallConnectingActionBar = ReactCompilerGating.isReactCompilerEnabled()
  ? function CallConnectingActionBar(channel) {
      const cResult = c.c(7);
      channel = channel.channel;
      const tmp2 = closure_15();
      if (cResult[0] !== channel) {
        const obj2 = { channel };
        const tmp7 = __initData(closure_17, obj2);
        const obj3 = { channel };
        const tmp9 = __initData(closure_18, obj3);
        cResult[0] = channel;
        cResult[1] = tmp7;
        cResult[2] = tmp9;
        let tmp4 = tmp9;
        let tmp3 = tmp7;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      if (cResult[3] === tmp2.actionBarContainer) {
        if (cResult[4] === tmp3) {
          if (cResult[5] === tmp4) {
            let tmp10 = cResult[6];
          }
          return tmp10;
        }
      }
      const obj4 = { style: tmp2.actionBarContainer, children: null };
      const items = [tmp3, tmp4];
      obj4.children = items;
      const tmp11 = state(View, obj4);
      cResult[3] = tmp2.actionBarContainer;
      cResult[4] = tmp3;
      cResult[5] = tmp4;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : function CallConnectingActionBar(channel) {
      channel = channel.channel;
      const obj = { style: closure_15().actionBarContainer, children: null };
      const items = [__initData(closure_17, { channel }), __initData(closure_18, { channel })];
      obj.children = items;
      return state(View, obj);
    };
