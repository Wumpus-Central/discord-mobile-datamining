// === Module 10068: ChannelCallConnectingScreen ===

// Module 10068 (ChannelCallConnectingScreen)
import _mod17 from "module_17" /* 17 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import useThemeDefault from "useTheme" /* 4541 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5462 */;
import BottomSheetModal from "BottomSheetModal" /* 6698 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7223 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9179 */;
import beginConsoleTransfer from "beginConsoleTransfer" /* 9538 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9911 */;
import UserSettingsVoiceDefault from "UserSettingsVoice" /* 10069 */;
import VoiceChatHeaderIconDefault from "VoiceChatHeaderIcon" /* 10090 */;
import _modDef10091 from "module_10091" /* 10091 */;
import ChannelCallMicButton from "ChannelCallMicButton" /* 10092 */;
import coercePlatformTypeToConsoleType from "coercePlatformTypeToConsoleType" /* 10099 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4623 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import PermissionStore from "PermissionStore" /* 4245 */;
import SessionsStore from "SessionsStore" /* 4624 */;

require = fn;
function VoiceSettingsActionSheet() {
  let obj = { scrollable: true, startExpanded: MetaQuestUtils.isMetaQuest(), children: null };
  obj = { children: closure_1_12(UserSettingsVoiceDefault, {}) };
  obj.children = closure_1_12(BottomSheetModal.BottomSheetScrollView, obj);
  return closure_1_12(Sheet_BottomSheet.BottomSheet, obj);
}
function JoinMutedButton(channel) {
  const tmp = useThemeDefault();
  return closure_1_12(ChannelCallMicButton.ChannelCallMicButton, { channel: channel.channel, disableTint: "light" === useThemeDefault(), isSmallSize: false });
}
function JoinVoiceButton(channel) {
  channel = channel.channel;
  importDefault = undefined;
  let stateFromStores1;
  importDefault = require("useVoiceStateForRemoteSession")();
  let obj = channel(stateFromStores1[28]);
  const items = [GameConsoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [SessionsStore];
  stateFromStores1 = channel(stateFromStores1[28]).useStateFromStores(items1, () => {
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
    const tmp8 = _mod17;
    if (tmp8 != null) {
      const NativeModules = tmp8.NativeModules;
      if (NativeModules != null) {
        const KeyboardManager = NativeModules.KeyboardManager;
        if (KeyboardManager != null) {
          const dismissGlobalKeyboard = KeyboardManager.dismissGlobalKeyboard;
          if (dismissGlobalKeyboard != null) {
            const result1 = dismissGlobalKeyboard();
          }
        }
      }
    }
    if (closure_4) {
      if (!MediaEngineStore.getSettings().mute) {
        AudioActionCreatorsDefault.toggleSelfMute();
      }
    }
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id, false, false);
  }, items2);
  const tmp10 = require("useIsVoiceChannelFull")(channel);
  let obj2 = channel(stateFromStores1[28]);
  const isVoiceChannelLocked = channel(stateFromStores1[18]).useIsVoiceChannelLocked(channel);
  let tmp13 = tmp10;
  if (!tmp10) {
    tmp13 = isVoiceChannelLocked;
  }
  if (!tmp13) {
    tmp13 = stateFromStores;
  }
  obj = { disabled: tmp13, backgroundColor: tmp(tmp2[34]).unsafe_rawColors.GREEN_360, imageStyle: null, accessibilityLabel: null, source: null, onPress: null, label: null, iconPosition: null };
  obj = { tintColor: tmp(tmp2[34]).unsafe_rawColors.WHITE };
  obj.imageStyle = obj;
  const intl = tmp3(tmp2[22]).intl;
  obj.accessibilityLabel = intl.string(channel(stateFromStores1[22]).t["96ANUN"]);
  obj.source = importDefault(tmp7.selfMute || tmp7.mute || tmp7.suppress ? stateFromStores1[35] : stateFromStores1[36]);
  obj.onPress = callback;
  const intl2 = tmp3(tmp2[22]).intl;
  const string = intl2.string;
  const t = tmp3(tmp2[22]).t;
  if (isVoiceChannelLocked) {
    let stringResult = string(t.TVBCKZ);
  } else if (tmp10) {
    stringResult = string(t.rZfiNq);
  } else if (tmp8) {
    stringResult = string(t["Bd/Liz"]);
  } else {
    stringResult = string(t["96ANUN"]);
  }
  obj.label = stringResult;
  obj.iconPosition = channel(stateFromStores1[33]).IconPosition.RIGHT;
  return closure_12(channel(stateFromStores1[33]).LabeledActionButton, obj);
}
const View = fn(17).View;
const resetFocus = fn(9558).resetFocus;
const InstantInviteSources = fn(1074).InstantInviteSources;
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
fn(4606);
let createStyles = { spacer: { width: 8 }, actionBarContainer: null };
createStyles = { paddingHorizontal: 12, paddingTop: 16, justifyContent: "center", alignItems: "flex-start", flexDirection: "row", height: fn(9587).CALL_ACTION_BAR_HEIGHT };
createStyles.actionBarContainer = createStyles;
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallConnectingScreen.tsx");

export const showVoiceSettingsActionSheet = function showVoiceSettingsActionSheet(guildId) {
  const obj = { guildId };
  obj.openLazy(() => Promise.resolve(VoiceSettingsActionSheet), "voice settings", obj);
};
export const ChannelCallConnectingHeader = function ChannelCallConnectingHeader(channel) {
  channel = channel.channel;
  const tmp = closure_15();
  let obj = channel(10028);
  const isVoiceChannelLocked = obj.useIsVoiceChannelLocked(channel);
  let fn = null;
  if (PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
    fn = null;
    if (!isVoiceChannelLocked) {
      fn = () => {
        const obj = { source: InstantInviteSources.VOICE_CHANNEL };
        return obj.showInstantInviteActionSheet(channel, obj);
      };
    }
  }
  const items = [closure_12(View, { style: { width: 4 } }), , , ];
  let tmp9Result = null;
  if (null != fn) {
    obj = { source: _modDef10091, onPress: fn, accessibilityLabel: null };
    const intl = tmp5(1114).intl;
    obj = { channelName: tmp4 };
    obj.accessibilityLabel = intl.formatToPlainString(tmp5(1114).t["dHHb/2"], obj);
    tmp9Result = closure_12(VoiceChatHeaderIconDefault, obj);
    const tmp2Result = VoiceChatHeaderIconDefault;
  }
  const obj1 = { children: null };
  items[1] = tmp9Result;
  items[2] = closure_12(View, { style: tmp.spacer });
  items[3] = closure_12(View, { style: { width: 4 } });
  obj1.children = items;
  return closure_14(closure_13, obj1);
};
export const CallConnectingActionBar = function CallConnectingActionBar(channel) {
  channel = channel.channel;
  const obj = { style: closure_15().actionBarContainer, children: null };
  const items = [closure_1_12(JoinMutedButton, { channel }), closure_1_12(JoinVoiceButton, { channel })];
  obj.children = items;
  return closure_1_14(View, obj);
};