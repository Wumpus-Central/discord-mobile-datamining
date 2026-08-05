// discord_app/modules/video_calls/native/components/ChannelCallConnectingScreen.tsx
import VoiceChatCallScreenHeaderIconInner from "VoiceChatCallScreenHeaderIconInner";
import { View } from "useIsVoiceChannelFull";
import set from "set";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleUpdate from "handleUpdate";
import { resetFocus } from "VoiceChatDrawerState";
import { InstantInviteSources } from "ME";
import { Permissions } from "sum";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";
import { BottomSheetModal } from "../../../../../_runtime/05340_BottomSheetModal.js";
import { Background } from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { useTheme } from "../../../../hooks/useTheme.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import { UserSettingsVoice } from "../../../user_settings/voice/native/UserSettingsVoice.tsx";
import { ChannelCallMicButton } from "ChannelCallMicButton.tsx";

let closure_12;
let closure_14;
let map1;
const require = arg1;
function VoiceSettingsActionSheet() {
  let obj = { scrollable: true, children: null };
  obj = { children: null };
  obj[0] = callback(UserSettingsVoice, {});
  obj[1] = callback(BottomSheetModal.BottomSheetScrollView, obj);
  return callback(Background.BottomSheet, obj);
}
function JoinMutedButton(channel) {
  const tmp = useTheme();
  return callback(ChannelCallMicButton.ChannelCallMicButton, { channel: channel.channel, disableTint: "light" === useTheme(), isSmallSize: false });
}
function JoinVoiceButton(channel) {
  channel = channel.channel;
  let importDefault;
  let stateFromStores1;
  let React;
  let c4;
  importDefault = importDefault(stateFromStores1[26])();
  let obj = channel(stateFromStores1[27]);
  const items = [set];
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [handleUpdate];
  stateFromStores1 = channel(stateFromStores1[27]).useStateFromStores(items1, () => {
    let str;
    if (lib != null) {
      str = lib.sessionId;
    }
    if (str == null) {
      str = "";
    }
    const sessionById = outer1_8.getSessionById(str);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    return os;
  });
  const tmp6 = importDefault(stateFromStores1[28])();
  React = tmp6;
  const tmp7 = importDefault(stateFromStores1[29])(channel);
  c4 = tmp8;
  const items2 = [channel, stateFromStores1, tmp6, tmp7.selfMute || tmp7.mute || tmp7.suppress];
  const callback = React.useCallback(() => {
    if (null != stateFromStores1) {
      const result = channel(stateFromStores1[30]).coerceConsoleTypeToPlatformType(tmp, c3);
      if (null != result) {
        return channel(stateFromStores1[31]).beginConsoleTransfer(channel, result);
      }
      const obj = channel(stateFromStores1[30]);
    }
    outer1_9();
    const tmp8 = channel(stateFromStores1[1]);
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
    if (c4) {
      if (!outer1_6.getSettings().mute) {
        lib(stateFromStores1[22]).toggleSelfMute();
        const obj2 = lib(stateFromStores1[22]);
      }
    }
    const voiceChannel = lib(stateFromStores1[23]).selectVoiceChannel(channel.id, false, false);
  }, items2);
  const tmp10 = importDefault(stateFromStores1[17])(channel);
  let obj2 = channel(stateFromStores1[27]);
  const isVoiceChannelLocked = channel(stateFromStores1[17]).useIsVoiceChannelLocked(channel);
  let tmp13 = tmp10;
  if (!tmp10) {
    tmp13 = isVoiceChannelLocked;
  }
  if (!tmp13) {
    tmp13 = stateFromStores;
  }
  obj = { disabled: tmp13, backgroundColor: tmp(tmp2[33]).unsafe_rawColors.GREEN_360, imageStyle: null, accessibilityLabel: null, source: null, onPress: null, label: null, iconPosition: null };
  obj = { tintColor: tmp(tmp2[33]).unsafe_rawColors.WHITE };
  obj[2] = obj;
  const intl = tmp3(tmp2[21]).intl;
  obj[3] = intl.string(channel(stateFromStores1[21]).t["96ANUN"]);
  obj[4] = importDefault(tmp7.selfMute || tmp7.mute || tmp7.suppress ? stateFromStores1[34] : stateFromStores1[35]);
  obj[5] = callback;
  const intl2 = tmp3(tmp2[21]).intl;
  const string = intl2.string;
  const t = tmp3(tmp2[21]).t;
  if (isVoiceChannelLocked) {
    let stringResult = string(t.TVBCKZ);
  } else if (tmp10) {
    stringResult = string(t.rZfiNq);
  } else if (tmp8) {
    stringResult = string(t["Bd/Liz"]);
  } else {
    stringResult = string(t["96ANUN"]);
  }
  obj[6] = stringResult;
  obj[7] = channel(stateFromStores1[32]).IconPosition.RIGHT;
  return closure_12(channel(stateFromStores1[32]).LabeledActionButton, obj);
}
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { spacer: { width: 8 }, actionBarContainer: null };
createCacheKey = { paddingHorizontal: 12, paddingTop: 16, justifyContent: "center", alignItems: "flex-start", flexDirection: "row", height: require("sum").CALL_ACTION_BAR_HEIGHT };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/video_calls/native/components/ChannelCallConnectingScreen.tsx");

export const showVoiceSettingsActionSheet = function showVoiceSettingsActionSheet(guildId) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { guildId };
  obj.openLazy(() => Promise.resolve(closure_16), "voice settings", obj);
};
export const ChannelCallConnectingHeader = function ChannelCallConnectingHeader(channel) {
  channel = channel.channel;
  const tmp = createCacheKey();
  let obj = channel(10709);
  const isVoiceChannelLocked = obj.useIsVoiceChannelLocked(channel);
  let fn = null;
  if (getUncachedChannelPermissions.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
    fn = null;
    if (!isVoiceChannelLocked) {
      fn = () => {
        let obj = channel(outer1_2[18]);
        obj = { source: outer1_10.VOICE_CHANNEL };
        return obj.showInstantInviteActionSheet(channel, obj);
      };
    }
  }
  const items = [callback(View, { style: { width: 4 } }), , , ];
  let tmp9Result = null;
  if (null != fn) {
    obj = { source: null, onPress: null, accessibilityLabel: null };
    obj[0] = tmp2(10762);
    obj[1] = fn;
    const intl = tmp5(1236).intl;
    obj = { channelName: null };
    obj[0] = tmp4;
    obj[2] = intl.formatToPlainString(tmp5(1236).t["dHHb/2"], obj);
    tmp9Result = tmp9(tmp2(10761), obj);
    const tmp2Result = tmp2(10761);
  }
  const obj1 = { children: null };
  items[1] = tmp9Result;
  items[2] = callback(View, { style: tmp.spacer });
  items[3] = callback(View, { style: { width: 4 } });
  obj1[0] = items;
  return closure_14(closure_13, obj1);
};
export const CallConnectingActionBar = function CallConnectingActionBar(channel) {
  channel = channel.channel;
  const obj = { style: createCacheKey().actionBarContainer, children: null };
  const items = [callback(JoinMutedButton, { channel }), callback(JoinVoiceButton, { channel })];
  obj[1] = items;
  return callback2(View, obj);
};