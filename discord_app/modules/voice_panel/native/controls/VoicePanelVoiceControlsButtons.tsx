// === Module 16051: GameConsoleAccountButton ===

// Module 16051 (GameConsoleAccountButton)
import SoundboardIcon from "SoundboardIcon";
import TableRowGroupTitle from "TableRowGroupTitle";
import participantFromServer from "participantFromServer";
import getParticipants from "getParticipants";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import initialize from "initialize";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import updateVoiceState from "updateVoiceState";
import ME from "ME";
import { SelfStreamAndVideoAlertType as closure_15 } from "SelfStreamAndVideoAlertType";
import { MediaEngineContextTypes } from "DesktopSources";
import { jsx } from "initialize";

let closure_14;
let map1;
let require = arg1;
class GameConsoleAccountButton {
  constructor(arg0) {
    channel = global.channel;
    ({ account, connected } = global);
    useIsVoiceChannelLocked = undefined;
    channel = undefined;
    tmp2 = channel;
    tmp = useIsVoiceChannelLocked;
    tmp4 = channel;
    tmp3 = require("useIsVoiceChannelFull")(channel);
    obj = require("useIsVoiceChannelFull");
    tmp5 = obj.useIsVoiceChannelLocked(channel) && !channel.isPrivate();
    useIsVoiceChannelLocked = tmp5;
    tmp4Result = require("initialize");
    items = [];
    items[0] = updateVoiceState;
    stateFromStores = tmp4Result.useStateFromStores(items, () => outer1_12.isInChannel(channel.id));
    tmp7 = !stateFromStores;
    if (!stateFromStores) {
      tmp7 = tmp3;
    }
    if (!tmp7) {
      tmp7 = tmp5;
    }
    items1 = [];
    items1[0] = tmp5;
    callback = TableRowGroupTitle.useCallback(() => {
      let obj = _undefined(onConnectToConsole[22]);
      const intl = channel(onConnectToConsole[17]).intl;
      const string = intl.string;
      const t = channel(onConnectToConsole[17]).t;
      if (_undefined) {
        let stringResult = string(t.rimHDW);
        let tmp5 = tmp3;
      } else {
        stringResult = string(t.rZfiNq);
        tmp5 = tmp3;
      }
      obj = { key: stringResult, content: null };
      const intl2 = tmp5(tmp[17]).intl;
      const string2 = intl2.string;
      const t2 = tmp5(tmp[17]).t;
      if (_undefined) {
        let string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      obj[1] = string2Result;
      obj.open(obj);
    }, items1);
    tmp4Result1 = require("onConnectToConsole");
    onConnectToConsole = tmp4Result1.useOnConnectToConsole(channel, account);
    channel = onConnectToConsole;
    items2 = [];
    items2[0] = onConnectToConsole;
    callback1 = TableRowGroupTitle.useCallback(() => {
      onConnectToConsole();
    }, items2);
    type = account.type;
    tmp11 = PlatformTypes;
    if (type === PlatformTypes.XBOX) {
      intl3 = require("getSystemLocale").intl;
      string3 = intl3.string;
      qVE_VF = require("getSystemLocale").t;
      if (connected) {
        qVE_VF = qVE_VF["qVE/VF"];
        string3Result = string3(qVE_VF);
      } else {
        string3Result = string3(qVE_VF.E8euSk);
      }
      tmp17 = string3Result;
    } else if (type === tmp11.PLAYSTATION) {
      intl2 = require("getSystemLocale").intl;
      string2 = intl2.string;
      vzfxmY = require("getSystemLocale").t;
      if (connected) {
        vzfxmY = vzfxmY.vzfxmY;
        string2Result = string2(vzfxmY);
      } else {
        string2Result = string2(vzfxmY.QxEYDj);
      }
      tmp15 = string2Result;
    } else if (type !== tmp11.PLAYSTATION_STAGING) {
      tmp18 = require("getConsoleIcon")(account.type);
      tmp19 = null;
      tmp21Result1 = null;
      if (null != undefined) {
        tmp21 = jsx;
        tmp21Result = undefined;
        if (null != tmp18) {
          obj = { source: null };
          obj[0] = tmp18;
          tmp21Result = tmp21(require("TableRowIcon").TableRowIcon, obj);
        }
        obj1 = { icon: null, label: null, disabled: null, onPress: null };
        obj1[0] = tmp21Result;
        obj1[1] = undefined;
        obj1[2] = tmp7;
        if (tmp7) {
          callback1 = callback;
        }
        obj1[3] = callback1;
        tmp21Result1 = tmp21(require("TableRowInner").TableRow, obj1);
      }
      return tmp21Result1;
    } else {
      intl = require("getSystemLocale").intl;
      string = intl.string;
      BDiXtV = require("getSystemLocale").t;
      if (connected) {
        BDiXtV = BDiXtV.BDiXtV;
        stringResult = string(BDiXtV);
      } else {
        stringResult = string(BDiXtV["bhdB9+"]);
      }
      tmp13 = stringResult;
    }
    return;
  }
}
function toggleDeaf() {
  importDefault(8847).toggleSelfDeaf();
}
({ AnalyticEvents: map1, PlatformTypes: closure_14 } = ME);
let result = require("participantFromServer").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx");

export const GameConsoles = function GameConsoles(arg0) {
  let importDefault;
  let require;
  ({ channel: require, connected: importDefault } = arg0);
  const arr = importDefault(8937)();
  let tmp2 = null;
  if (arr.length > 0) {
    const obj = { title: null, hasIcons: true, children: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t["mbi/fB"]);
    obj[2] = arr.map((account) => outer1_17(outer1_18, { account, channel: closure_0, connected: closure_1 }, account.type));
    tmp2 = jsx(require(5558) /* TableRowGroupTitle */.TableRowGroup, { title: null, hasIcons: true, children: null });
  }
  return tmp2;
};
export { GameConsoleAccountButton };
export const ActivitiesButton = function ActivitiesButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = React.useContext(dismissPanel(10050)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = React.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      callback({ tab: "app_launcher", source: outer1_0(outer1_2[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  let obj = { onPress: callback, icon: null, label: null };
  obj = { IconComponent: null };
  obj[0] = openTab(6616).AppsIcon;
  obj[1] = jsx(openTab(5230).TableRowIcon, { IconComponent: null });
  const intl = openTab(1236).intl;
  obj[2] = intl.string(openTab(1236).t.aeuOoh);
  return jsx(openTab(5224).TableRow, { IconComponent: null });
};
export const ChatButton = function ChatButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = React.useContext(dismissPanel(10050)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = React.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      callback({ tab: "chat", source: outer1_0(outer1_2[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  let obj = { onPress: callback, icon: null, label: null };
  obj = { IconComponent: null };
  obj[0] = openTab(4690).ChatIcon;
  obj[1] = jsx(openTab(5230).TableRowIcon, { IconComponent: null });
  const intl = openTab(1236).intl;
  obj[2] = intl.string(openTab(1236).t["5KxXrK"]);
  return jsx(openTab(5224).TableRow, { IconComponent: null });
};
export const SoundboardButton = function SoundboardButton(channel) {
  const tmp2 = importDefault(16042);
  let tmp7 = null;
  if (tmp2Result.visible) {
    let obj = { label: null, onPress: null, disabled: null, icon: null };
    const intl = tmp3(1236).intl;
    obj[0] = intl.string(tmp3(1236).t.ABjMWI);
    obj[1] = tmp5;
    obj[2] = tmp6;
    obj = { IconComponent: null };
    obj[0] = tmp3(6635).SoundboardIcon;
    obj[3] = jsx(tmp3(5230).TableRowIcon, { IconComponent: null });
    tmp7 = jsx(tmp3(5224).TableRow, { IconComponent: null });
  }
  return tmp7;
};
export const ScreenshareButton = function ScreenshareButton(channel) {
  let imgSource;
  let isFeatureEnabled;
  let text;
  let onPress;
  let isActive;
  const tmp = isActive(10759)(channel.channel);
  onPress = tmp.onPress;
  isActive = tmp.isActive;
  const items = [isActive, onPress];
  ({ imgSource, text, isFeatureEnabled } = tmp);
  const callback = React.useCallback(() => {
    let obj = isActive(outer1_2[34]);
    obj = { source: "voice controls", was_active: isActive };
    obj.track(outer1_13.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj);
    onPress();
  }, items);
  let obj = { disabled: !isFeatureEnabled, onPress: callback, icon: null, label: null };
  obj[2] = jsx(onPress(5230).TableRowIcon, { source: imgSource });
  obj[3] = text;
  return jsx(onPress(5224).TableRow, { disabled: !isFeatureEnabled, onPress: callback, icon: null, label: null });
};
export const StreamVolumeItem = function StreamVolumeItem() {
  let obj = require(589) /* initialize */;
  const items = [reset, fetchFingerprint];
  const stateFromStores = obj.useStateFromStores(items, () => {
    lastActiveStream = lastActiveStream.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== id.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  let ownerId;
  if (stateFromStores != null) {
    ownerId = stateFromStores.ownerId;
  }
  importDefault(10825)(ownerId, MediaEngineContextTypes.STREAM);
  let tmp11Result = null;
  if (null != stateFromStores) {
    obj = { title: null, hasIcons: false, children: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t.pEAl4b);
    const tmp4Result = tmp4(10786);
    let fn;
    if (tmpResult.isAndroid()) {
      fn = () => true;
    }
    obj = { label: null };
    const obj1 = { onResponderGrant: null, value: null, onValueChange: null, color: null, maxTrackTintColor: null };
    obj1[0] = fn;
    obj1[1] = tmp8;
    obj1[2] = tmp9;
    obj1[3] = tmp4(712).unsafe_rawColors.WHITE;
    obj1[4] = tmp4(712).unsafe_rawColors.PRIMARY_300;
    obj[0] = <tmp4Result onResponderGrant={null} value={null} onValueChange={null} color={null} maxTrackTintColor={null} />;
    obj[2] = jsx(tmp(5224).TableRow, { label: null });
    tmp11Result = tmp11(tmp(5558).TableRowGroup, obj);
    tmpResult = tmp(500);
  }
  return tmp11Result;
};
export const DeafenSwitch = function DeafenSwitch() {
  let obj = require(589) /* initialize */;
  const items = [_detectH265HardwareDecode];
  const stateFromStores = obj.useStateFromStores(items, () => selfDeaf.isSelfDeaf());
  obj = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj = { IconComponent: null, source: null };
  obj[0] = require(8874) /* HeadphonesSlashIcon */.HeadphonesSlashIcon;
  obj[1] = importDefault(15965);
  obj[0] = jsx(require(5230) /* TableRowIcon */.TableRowIcon, { IconComponent: null, source: null });
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.wjcRFX);
  obj[2] = stateFromStores;
  obj[3] = toggleDeaf;
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[4] = intl2.string(require(1236) /* getSystemLocale */.t.wjcRFX);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[5] = intl3.string(require(1236) /* getSystemLocale */.t.M3VN2U);
  return jsx(require(5559) /* TableSwitchRow */.TableSwitchRow, { IconComponent: null, source: null });
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  let importDefault;
  let require;
  ({ channel: require, connected: importDefault } = arg0);
  let obj = require(8840) /* _handleToggleVideo */;
  obj = { icon: null, onPress: null, label: null, trailing: null };
  obj[0] = jsx(require(5230) /* TableRowIcon */.TableRowIcon, { source: obj.useMaskedSpeakerStates().routeSource });
  obj[1] = function onPress() {
    const result = outer1_0(outer1_2[44]).showAudioOutputSelector(id.id, closure_1);
  };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["A/Ly/2"]);
  obj[3] = jsx(require(5231) /* TableRowArrow */.TableRowArrow, {});
  return jsx(require(5224) /* TableRowInner */.TableRow, { icon: null, onPress: null, label: null, trailing: null });
};
export const InviteButton = function InviteButton(channel) {
  channel = channel.channel;
  let obj = require(15950) /* useCanInviteMembers */;
  const canInviteMembers = obj.useCanInviteMembers(channel.id);
  require(15908) /* useInviteMembersCallback */;
  let tmp8 = null;
  if (!tmp5) {
    tmp8 = null;
    if (canInviteMembers) {
      tmp8 = null;
      if (channel.connected) {
        obj = { onPress: null, icon: null, label: null, trailing: null };
        obj[0] = tmp7;
        obj = { IconComponent: null, source: null };
        obj[0] = tmp(10236).GroupPlusIcon;
        obj[1] = importDefault(10809);
        obj[1] = jsx(tmp(5230).TableRowIcon, { IconComponent: null, source: null });
        const intl = tmp(1236).intl;
        obj[2] = intl.string(tmp(1236).t["f1+QIK"]);
        obj[3] = jsx(tmp(5231).TableRowArrow, {});
        tmp8 = jsx(tmp(5224).TableRow, { IconComponent: null, source: null });
      }
    }
  }
  return tmp8;
};
export const HideNonVideoParticipants = function HideNonVideoParticipants(channelId) {
  channelId = channelId.channelId;
  let stateFromStores;
  let obj = channelId(589);
  const items = [getParticipants];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getVoiceParticipantsHidden(channelId));
  const items1 = [channelId, stateFromStores];
  const callback = React.useCallback(() => {
    const result = stateFromStores(outer1_2[50]).toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  obj = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj = { IconComponent: null, source: null };
  obj[0] = channelId(6640).VideoIcon;
  obj[1] = stateFromStores(10758);
  obj[0] = jsx(channelId(5230).TableRowIcon, { IconComponent: null, source: null });
  const intl = channelId(1236).intl;
  obj[1] = intl.string(channelId(1236).t.ZMTRyc);
  obj[2] = stateFromStores;
  obj[3] = callback;
  const intl2 = channelId(1236).intl;
  obj[4] = intl2.string(channelId(1236).t.ZMTRyc);
  const intl3 = channelId(1236).intl;
  obj[5] = intl3.string(channelId(1236).t.MlpCFS);
  return jsx(channelId(5559).TableSwitchRow, { IconComponent: null, source: null });
};
export const HideSelfVideo = function HideSelfVideo() {
  const tmp3 = callback(importDefault(16054)(id.getId()), 3);
  const require = tmp4;
  importDefault = tmp3[2];
  let obj = require(589) /* initialize */;
  const items = [CHANNEL_SIDEBAR_WIDTH];
  const dependencyMap = obj.useStateFromStores(items, () => obj.disableHideSelfStreamAndVideoConfirmationAlert);
  let tmp6 = null;
  if (tmp3[0]) {
    obj = { icon: null, value: null, onValueChange: null, label: null };
    obj = { IconComponent: null };
    obj[0] = tmp5(6618).UserSquareIcon;
    obj[0] = jsx(tmp5(5230).TableRowIcon, { IconComponent: null });
    obj[1] = !tmp4;
    obj[2] = function onValueChange() {
      if (!table) {
        if (!VIDEO) {
          VIDEO = outer1_15.VIDEO;
          const f112711 = (arg0) => f112711(!VIDEO);
          let obj = callback(table[14]);
          obj = { importer: null };
          obj[0] = function importer() {
            return VIDEO(outer1_2[16])(outer1_2[15], outer1_2.paths).then((arg0) => {
              let closure_0 = arg0.default;
              return (arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj.type = closure_0;
                obj.onConfirm = outer1_1;
                return outer2_17(closure_0, obj);
              };
            });
          };
          obj.openLazy(obj);
        }
      }
      return f112711(!VIDEO);
    };
    const intl = tmp5(1236).intl;
    obj[3] = intl.string(tmp5(1236).t.MH8ESU);
    tmp6 = jsx(tmp5(5559).TableSwitchRow, { IconComponent: null });
  }
  return tmp6;
};
export const LeaveActivitiesButton = function LeaveActivitiesButton() {
  let obj = { icon: null, label: null, onPress: null };
  obj = { source: null };
  obj[0] = importDefault(10454);
  obj[0] = jsx(require(5230) /* TableRowIcon */.TableRowIcon, { source: null });
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["R/FK4A"]);
  obj[2] = function onPress() {
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let obj = callback(table[56]);
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    obj = { location: _location, applicationId: null };
    let applicationId;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    obj[1] = applicationId;
    obj.leaveActivity(obj);
  };
  return jsx(require(5224) /* TableRowInner */.TableRow, { source: null });
};
export const ShareActivityLogsButton = function ShareActivityLogsButton() {
  let label;
  let onPress;
  let obj = require(16055) /* voiceSettings */;
  const shareActivityLogsResult = obj.shareActivityLogs();
  let icon = shareActivityLogsResult.icon;
  ({ label, onPress } = shareActivityLogsResult);
  icon = undefined;
  if (null != icon) {
    obj = { source: null };
    obj[0] = icon;
    icon = tmp4(require(5230) /* TableRowIcon */.TableRowIcon, obj);
  }
  return jsx(require(5224) /* TableRowInner */.TableRow, { icon, label, onPress });
};
export const ToggleShowActivitiesDebugOverlay = function ToggleShowActivitiesDebugOverlay() {
  let obj = require(589) /* initialize */;
  const items = [initialize];
  const stateFromStores = obj.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  obj = { icon: null, value: null, onValueChange: null, label: null };
  obj = { source: null };
  obj[0] = importDefault(7695);
  obj[0] = jsx(require(5230) /* TableRowIcon */.TableRowIcon, { source: null });
  obj[1] = stateFromStores;
  obj[2] = function onValueChange(visible) {
    let obj = callback(table[59]);
    obj = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj);
  };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["qv5/SP"]);
  return jsx(require(5559) /* TableSwitchRow */.TableSwitchRow, { source: null });
};
export const VoiceSettingsButton = function VoiceSettingsButton(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  const callback = React.useCallback(() => {
    const result = guildId(outer1_2[60]).showVoiceSettingsActionSheet(guildId);
  }, items);
  let obj = { onPress: callback, icon: null, label: null, subLabel: null, trailing: null };
  obj = { IconComponent: null, source: null };
  obj[0] = guildId(9020).SettingsIcon;
  obj[1] = importDefault(15964);
  obj[1] = jsx(guildId(5230).TableRowIcon, { IconComponent: null, source: null });
  const intl = guildId(1236).intl;
  obj[2] = intl.string(guildId(1236).t.NiTd0e);
  const intl2 = guildId(1236).intl;
  obj[3] = intl2.string(guildId(1236).t["16SG+O"]);
  obj[4] = jsx(guildId(5231).TableRowArrow, {});
  return jsx(guildId(5224).TableRow, { IconComponent: null, source: null });
};
export const ReportStreamIssueButton = function ReportStreamIssueButton(stream) {
  let label;
  let onPress;
  let obj = require(16055) /* voiceSettings */;
  const reportStreamIssueResult = obj.reportStreamIssue(stream.stream);
  let icon = reportStreamIssueResult.icon;
  ({ label, onPress } = reportStreamIssueResult);
  icon = undefined;
  if (null != icon) {
    obj = { source: null };
    obj[0] = icon;
    icon = tmp4(require(5230) /* TableRowIcon */.TableRowIcon, obj);
  }
  return jsx(require(5224) /* TableRowInner */.TableRow, { icon, label, onPress });
};
export const RTCDebugPanelButton = function RTCDebugPanelButton() {
  let label;
  let onPress;
  let obj = require(16055) /* voiceSettings */;
  const rtcDebugPanelResult = obj.rtcDebugPanel(() => {

  });
  let icon = rtcDebugPanelResult.icon;
  ({ label, onPress } = rtcDebugPanelResult);
  icon = undefined;
  if (null != icon) {
    obj = { source: null };
    obj[0] = icon;
    icon = tmp4(require(5230) /* TableRowIcon */.TableRowIcon, obj);
  }
  return jsx(require(5224) /* TableRowInner */.TableRow, { icon, label, onPress });
};