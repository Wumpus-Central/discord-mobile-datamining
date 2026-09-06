// === Module 17210: VoicePanelVoiceControlsButtons ===

// Module 17210 (VoicePanelVoiceControlsButtons)
import initialize from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import TableRow from "TableRow" /* 5605 */;
import TableRowIcon from "TableRowIcon" /* 5611 */;
import TableRowArrow from "TableRowArrow" /* 5612 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import TableSwitchRow from "TableSwitchRow" /* 7201 */;
import _modDef8627 from "module_8627" /* 8627 */;
import CallsUtils from "CallsUtils" /* 9082 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9114 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9123 */;
import useGameConsoleAccountsDefault from "useGameConsoleAccounts" /* 9214 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9515 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 9978 */;
import _modDef10001 from "module_10001" /* 10001 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 10017 */;
import _modDef11373 from "module_11373" /* 11373 */;
import useInviteMembersCallback from "useInviteMembersCallback" /* 17057 */;
import useCanInviteMembers from "useCanInviteMembers" /* 17102 */;
import _modDef17116 from "module_17116" /* 17116 */;
import _modDef17117 from "module_17117" /* 17117 */;
import useSoundboardConfigDefault from "useSoundboardConfig" /* 17199 */;
import useHideSelfVideoDefault from "useHideSelfVideo" /* 17213 */;
import ChannelCallUtils from "ChannelCallUtils" /* 17214 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9486 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
class GameConsoleAccountButton {
  constructor(arg0) {
    channel = global.channel;
    ({ account, connected } = global);
    closure_1 = undefined;
    closure_2 = undefined;
    tmp2 = closure_2;
    tmp = closure_1;
    tmp4 = channel;
    tmp3 = closure_1(closure_2[20])(channel);
    obj = channel(closure_2[20]);
    tmp5 = obj.useIsVoiceChannelLocked(channel) && !channel.isPrivate();
    closure_1 = tmp5;
    tmp4Result = tmp4(tmp2[21]);
    items = [];
    items[0] = closure_12;
    stateFromStores = tmp4Result.useStateFromStores(items, () => VoiceStateStore.isInChannel(channel.id));
    tmp7 = !stateFromStores;
    if (!stateFromStores) {
      tmp7 = tmp3;
    }
    if (!tmp7) {
      tmp7 = tmp5;
    }
    items1 = [];
    items1[0] = tmp5;
    callback = closure_4.useCallback(() => {
      let obj = ToastActionCreatorsDefault;
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (closure_1) {
        let stringResult = string(t.rimHDW);
        let tmp5 = tmp3;
      } else {
        stringResult = string(t.rZfiNq);
        tmp5 = tmp3;
      }
      obj = { key: stringResult, content: null };
      const intl2 = tmp5(1114).intl;
      const string2 = intl2.string;
      const t2 = tmp5(1114).t;
      if (closure_1) {
        let string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      obj.content = string2Result;
      obj.open(obj);
    }, items1);
    tmp4Result1 = tmp4(tmp2[23]);
    onConnectToConsole = tmp4Result1.useOnConnectToConsole(channel, account);
    closure_2 = onConnectToConsole;
    items2 = [];
    items2[0] = onConnectToConsole;
    callback1 = closure_4.useCallback(() => {
      onConnectToConsole();
    }, items2);
    type = account.type;
    tmp11 = PlatformTypes;
    if (type === PlatformTypes.XBOX) {
      intl3 = tmp4(tmp2[17]).intl;
      string3 = intl3.string;
      t = tmp4(tmp2[17]).t;
      if (connected) {
        t = t["qVE/VF"];
        string3Result = string3(t);
      } else {
        string3Result = string3(t.E8euSk);
      }
      tmp18 = string3Result;
    } else if (type === tmp11.PLAYSTATION) {
      intl2 = tmp4(tmp2[17]).intl;
      string2 = intl2.string;
      vzfxmY = tmp4(tmp2[17]).t;
      if (connected) {
        vzfxmY = vzfxmY.vzfxmY;
        string2Result = string2(vzfxmY);
      } else {
        string2Result = string2(vzfxmY.QxEYDj);
      }
      tmp15 = string2Result;
    } else if (type !== tmp11.PLAYSTATION_STAGING) {
      tmp19 = tmp(tmp2[24])(account.type);
      tmp20 = null;
      tmp22Result1 = null;
      if (null != undefined) {
        tmp22 = jsx;
        tmp22Result = undefined;
        if (null != tmp19) {
          obj = { source: null };
          obj.source = tmp19;
          tmp22Result = tmp22(tmp4(tmp2[26]).TableRowIcon, obj);
        }
        obj1 = { icon: null, label: null, disabled: null, onPress: null };
        obj1.icon = tmp22Result;
        obj1.label = undefined;
        obj1.disabled = tmp7;
        if (tmp7) {
          callback1 = callback;
        }
        obj1.onPress = callback1;
        tmp22Result1 = tmp22(tmp4(tmp2[25]).TableRow, obj1);
      }
      return tmp22Result1;
    } else {
      intl = tmp4(tmp2[17]).intl;
      string = intl.string;
      BDiXtV = tmp4(tmp2[17]).t;
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
  AudioActionCreatorsDefault.toggleSelfDeaf();
}
const Constants = fn(1074);
({ AnalyticEvents: map1, PlatformTypes: closure_14 } = Constants);
let closure_15 = fn(17211).SelfStreamAndVideoAlertType;
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx");

export const GameConsoles = function GameConsoles(arg0) {
  ({ channel: require, connected: importDefault } = arg0);
  const arr = useGameConsoleAccountsDefault();
  let tmp2 = null;
  if (arr.length > 0) {
    const obj = { title: null, hasIcons: true, children: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["mbi/fB"]);
    obj.children = arr.map((account) => <GameConsoleAccountButton key={arg0.type} account={arg0} channel={channel} connected={connected} />);
    tmp2 = jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: true, children: null });
  }
  return tmp2;
};
export { GameConsoleAccountButton };
export const ActivitiesButton = function ActivitiesButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(12272)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "app_launcher", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  let obj = { onPress: callback, icon: null, label: null };
  obj = { IconComponent: openTab(5106).AppsIcon };
  obj.icon = jsx(openTab(5611).TableRowIcon, { IconComponent: openTab(5106).AppsIcon });
  const intl = openTab(1114).intl;
  obj.label = intl.string(openTab(1114).t.aeuOoh);
  return jsx(openTab(5605).TableRow, { IconComponent: openTab(5106).AppsIcon });
};
export const ChatButton = function ChatButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(12272)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "chat", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  let obj = { onPress: callback, icon: null, label: null };
  obj = { IconComponent: openTab(5071).ChatIcon };
  obj.icon = jsx(openTab(5611).TableRowIcon, { IconComponent: openTab(5071).ChatIcon });
  const intl = openTab(1114).intl;
  obj.label = intl.string(openTab(1114).t["5KxXrK"]);
  return jsx(openTab(5605).TableRow, { IconComponent: openTab(5071).ChatIcon });
};
export const SoundboardButton = function SoundboardButton(channel) {
  let tmp8 = null;
  if (tmp2Result.visible) {
    let obj = { label: null, onPress: null, disabled: null, accessibilityHint: null, icon: null };
    const intl = tmp3(1114).intl;
    obj.label = intl.string(tmp3(1114).t.ABjMWI);
    obj.onPress = tmp5;
    obj.disabled = tmp6;
    obj.accessibilityHint = tmp7;
    obj = { IconComponent: tmp3(12528).SoundboardIcon };
    obj.icon = jsx(tmp3(5611).TableRowIcon, { IconComponent: tmp3(12528).SoundboardIcon });
    tmp8 = jsx(tmp3(5605).TableRow, { IconComponent: tmp3(12528).SoundboardIcon });
  }
  return tmp8;
};
export const ScreenshareButton = function ScreenshareButton(channel) {
  let isActive;
  const tmp = isActive(9951)(channel.channel);
  const onPress = tmp.onPress;
  isActive = tmp.isActive;
  const items = [isActive, onPress];
  ({ imgSource, text, isFeatureEnabled } = tmp);
  const callback = noop.useCallback(() => {
    const obj = { source: "voice controls", was_active: isActive };
    obj.track(constants.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj);
    onPress();
  }, items);
  return jsx(onPress(5605).TableRow, { disabled: !isFeatureEnabled, onPress: callback, icon: jsx(onPress(5611).TableRowIcon, { source: imgSource }), label: text });
};
export const StreamVolumeItem = function StreamVolumeItem() {
  let obj = initialize;
  const items = [ApplicationStreamingStore, AuthenticationStore];
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
  useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM);
  let tmp11Result = null;
  if (null != stateFromStores) {
    obj = { title: null, hasIcons: false, children: null };
    const intl = tmp(1114).intl;
    obj.title = intl.string(tmp(1114).t.pEAl4b);
    const tmp4Result = tmp4(9986);
    let fn;
    if (tmpResult.isAndroid()) {
      fn = () => true;
    }
    obj = { label: null };
    const obj1 = { onResponderGrant: fn, value: tmp8, onValueChange: tmp9, color: tmp4(576).unsafe_rawColors.WHITE, maxTrackTintColor: tmp4(576).unsafe_rawColors.PRIMARY_300, accessibilityLabel: null };
    const intl2 = tmp(1114).intl;
    obj1.accessibilityLabel = intl2.string(tmp(1114).t.pEAl4b);
    obj.label = <tmp4Result onResponderGrant={fn} value={tmp8} onValueChange={tmp9} color={tmp4(576).unsafe_rawColors.WHITE} maxTrackTintColor={tmp4(576).unsafe_rawColors.PRIMARY_300} accessibilityLabel={null} />;
    obj.children = jsx(tmp(5605).TableRow, { label: null });
    tmp11Result = tmp11(tmp(5687).TableRowGroup, obj);
    tmpResult = tmp(1115);
  }
  return tmp11Result;
};
export const DeafenSwitch = function DeafenSwitch() {
  let obj = initialize;
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => selfDeaf.isSelfDeaf());
  obj = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj = { IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: _modDef17117 };
  obj.icon = jsx(TableRowIcon.TableRowIcon, { IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: _modDef17117 });
  const intl = util.intl;
  obj.accessibilityHint = intl.string(util.t.wjcRFX);
  obj.value = stateFromStores;
  obj.onValueChange = toggleDeaf;
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.wjcRFX);
  const intl3 = util.intl;
  obj.subLabel = intl3.string(util.t.M3VN2U);
  return jsx(TableSwitchRow.TableSwitchRow, { IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: _modDef17117 });
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  ({ channel: require, connected: importDefault } = arg0);
  let obj = CallsUtils;
  obj = {
    icon: jsx(TableRowIcon.TableRowIcon, { source: obj.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(id.id, importDefault);
    },
    label: null,
    trailing: null
  };
  const intl = util.intl;
  obj.label = intl.string(util.t["A/Ly/2"]);
  obj.trailing = jsx(TableRowArrow.TableRowArrow, {});
  return jsx(TableRow.TableRow, {
    icon: jsx(TableRowIcon.TableRowIcon, { source: obj.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(id.id, importDefault);
    },
    label: null,
    trailing: null
  });
};
export const InviteButton = function InviteButton(channel) {
  channel = channel.channel;
  let obj = useCanInviteMembers;
  const canInviteMembers = obj.useCanInviteMembers(channel.id);
  useInviteMembersCallback;
  let tmp8 = null;
  if (!tmp5) {
    tmp8 = null;
    if (canInviteMembers) {
      tmp8 = null;
      if (channel.connected) {
        obj = { onPress: tmp7, icon: null, label: null, trailing: null };
        obj = { IconComponent: tmp(10032).GroupPlusIcon, source: _modDef10001 };
        obj.icon = jsx(tmp(5611).TableRowIcon, { IconComponent: tmp(10032).GroupPlusIcon, source: _modDef10001 });
        const intl = tmp(1114).intl;
        obj.label = intl.string(tmp(1114).t["f1+QIK"]);
        obj.trailing = jsx(tmp(5612).TableRowArrow, {});
        tmp8 = jsx(tmp(5605).TableRow, { IconComponent: tmp(10032).GroupPlusIcon, source: _modDef10001 });
      }
    }
  }
  return tmp8;
};
export const HideNonVideoParticipants = function HideNonVideoParticipants(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(504);
  const items = [ChannelRTCStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelRTCStore.getVoiceParticipantsHidden(channelId));
  const items1 = [channelId, stateFromStores];
  const callback = noop.useCallback(() => {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  obj = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj = { IconComponent: channelId(10110).VideoIcon, source: stateFromStores(9950) };
  obj.icon = jsx(channelId(5611).TableRowIcon, { IconComponent: channelId(10110).VideoIcon, source: stateFromStores(9950) });
  const intl = channelId(1114).intl;
  obj.accessibilityHint = intl.string(channelId(1114).t.ZMTRyc);
  obj.value = stateFromStores;
  obj.onValueChange = callback;
  const intl2 = channelId(1114).intl;
  obj.label = intl2.string(channelId(1114).t.ZMTRyc);
  const intl3 = channelId(1114).intl;
  obj.subLabel = intl3.string(channelId(1114).t.MlpCFS);
  return jsx(channelId(7201).TableSwitchRow, { IconComponent: channelId(10110).VideoIcon, source: stateFromStores(9950) });
};
export const HideSelfVideo = function HideSelfVideo() {
  const tmp3 = _slicedToArray(useHideSelfVideoDefault(AuthenticationStore.getId()), 3);
  _require = tmp4;
  importDefault = tmp3[2];
  let obj = require("initialize");
  const items = [UnsyncedUserSettingsStore];
  dependencyMap = obj.useStateFromStores(items, () => UnsyncedUserSettingsStore.disableHideSelfStreamAndVideoConfirmationAlert);
  let tmp6 = null;
  if (tmp3[0]) {
    obj = { icon: null, value: null, onValueChange: null, label: null };
    obj = { IconComponent: tmp5(9377).UserSquareIcon };
    obj.icon = jsx(tmp5(5611).TableRowIcon, { IconComponent: tmp5(9377).UserSquareIcon });
    obj.value = !tmp4;
    obj.onValueChange = function onValueChange() {
      if (!paths) {
        if (!VIDEO) {
          VIDEO = constants.VIDEO;
          const f119219 = () => f119219(!VIDEO);
          let obj = {
            importer() {
                  return VIDEO(paths[16])(paths[15], paths.paths).then((result) => {
                    closure_0 = result.default;
                    return (arg0) => {
                      const obj = {};
                      const merged = Object.assign(arg0);
                      obj.type = type;
                      obj.onConfirm = onConfirm;
                      return closure_3_17(closure_0, obj);
                    };
                  });
                }
          };
          obj.openLazy(obj);
        }
      }
      return closure_1(!VIDEO);
    };
    const intl = tmp5(1114).intl;
    obj.label = intl.string(tmp5(1114).t.MH8ESU);
    tmp6 = jsx(tmp5(7201).TableSwitchRow, { IconComponent: tmp5(9377).UserSquareIcon });
  }
  return tmp6;
};
export const LeaveActivitiesButton = function LeaveActivitiesButton() {
  let obj = { icon: null, label: null, onPress: null };
  obj = { source: _modDef11373 };
  obj.icon = jsx(TableRowIcon.TableRowIcon, { source: _modDef11373 });
  const intl = util.intl;
  obj.label = intl.string(util.t["R/FK4A"]);
  obj.onPress = function onPress() {
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let obj = EmbeddedActivitiesNativeManagerDefault;
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    obj = { location: _location, applicationId: null };
    let applicationId;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    obj.applicationId = applicationId;
    obj.leaveActivity(obj);
  };
  return jsx(TableRow.TableRow, { source: _modDef11373 });
};
export const ShareActivityLogsButton = function ShareActivityLogsButton() {
  let obj = ChannelCallUtils;
  const shareActivityLogsResult = obj.shareActivityLogs();
  ({ label, onPress } = shareActivityLogsResult);
  let icon;
  if (null != icon) {
    obj = { source: icon };
    icon = tmp4(TableRowIcon.TableRowIcon, obj);
  }
  return jsx(TableRow.TableRow, { icon, label, onPress });
};
export const ToggleShowActivitiesDebugOverlay = function ToggleShowActivitiesDebugOverlay() {
  let obj = initialize;
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = obj.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  obj = { icon: null, value: null, onValueChange: null, label: null };
  obj = { source: _modDef8627 };
  obj.icon = jsx(TableRowIcon.TableRowIcon, { source: _modDef8627 });
  obj.value = stateFromStores;
  obj.onValueChange = function onValueChange(visible) {
    const obj = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj);
  };
  const intl = util.intl;
  obj.label = intl.string(util.t["qv5/SP"]);
  return jsx(TableSwitchRow.TableSwitchRow, { source: _modDef8627 });
};
export const VoiceSettingsButton = function VoiceSettingsButton(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  const callback = noop.useCallback(() => {
    const result = ChannelCallConnectingScreen.showVoiceSettingsActionSheet(guildId);
  }, items);
  let obj = { onPress: callback, icon: null, label: null, subLabel: null, trailing: null };
  obj = { IconComponent: guildId(7380).SettingsIcon, source: _modDef17116 };
  obj.icon = jsx(guildId(5611).TableRowIcon, { IconComponent: guildId(7380).SettingsIcon, source: _modDef17116 });
  const intl = guildId(1114).intl;
  obj.label = intl.string(guildId(1114).t.NiTd0e);
  const intl2 = guildId(1114).intl;
  obj.subLabel = intl2.string(guildId(1114).t["16SG+O"]);
  obj.trailing = jsx(guildId(5612).TableRowArrow, {});
  return jsx(guildId(5605).TableRow, { IconComponent: guildId(7380).SettingsIcon, source: _modDef17116 });
};
export const ReportStreamIssueButton = function ReportStreamIssueButton(stream) {
  let obj = ChannelCallUtils;
  const reportStreamIssueResult = obj.reportStreamIssue(stream.stream);
  ({ label, onPress } = reportStreamIssueResult);
  let icon;
  if (null != icon) {
    obj = { source: icon };
    icon = tmp4(TableRowIcon.TableRowIcon, obj);
  }
  return jsx(TableRow.TableRow, { icon, label, onPress });
};
export const RTCDebugPanelButton = function RTCDebugPanelButton() {
  let obj = ChannelCallUtils;
  const rtcDebugPanelResult = obj.rtcDebugPanel(() => {

  });
  ({ label, onPress } = rtcDebugPanelResult);
  let icon;
  if (null != icon) {
    obj = { source: icon };
    icon = tmp4(TableRowIcon.TableRowIcon, obj);
  }
  return jsx(TableRow.TableRow, { icon, label, onPress });
};