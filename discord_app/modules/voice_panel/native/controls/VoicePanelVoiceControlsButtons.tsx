// === Module 17002: VoicePanelVoiceControlsButtons ===

// Module 17002 (VoicePanelVoiceControlsButtons)
import initialize from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4525 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5030 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5197 */;
import TableRow from "TableRow" /* 5912 */;
import TableRowIcon from "TableRowIcon" /* 5918 */;
import TableRowArrow from "TableRowArrow" /* 5919 */;
import TableRowGroup from "TableRowGroup" /* 5994 */;
import TableSwitchRow from "TableSwitchRow" /* 6616 */;
import _modDef8079 from "module_8079" /* 8079 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8757 */;
import CallsUtils from "CallsUtils" /* 9086 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9093 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9116 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9125 */;
import useGameConsoleAccountsDefault from "useGameConsoleAccounts" /* 9229 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 9422 */;
import VolumeSliderDefault from "VolumeSlider" /* 9431 */;
import _modDef9450 from "module_9450" /* 9450 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 9466 */;
import GroupPlusIcon from "GroupPlusIcon" /* 9481 */;
import _modDef10902 from "module_10902" /* 10902 */;
import SoundboardIcon from "SoundboardIcon" /* 12006 */;
import useInviteMembersCallback from "useInviteMembersCallback" /* 16847 */;
import useCanInviteMembers from "useCanInviteMembers" /* 16894 */;
import _modDef16908 from "module_16908" /* 16908 */;
import _modDef16909 from "module_16909" /* 16909 */;
import useSoundboardConfigDefault from "useSoundboardConfig" /* 16991 */;
import useHideSelfVideoDefault from "useHideSelfVideo" /* 17005 */;
import ChannelCallUtils from "ChannelCallUtils" /* 17006 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4845 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 8836 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4851 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import VoiceStateStore from "VoiceStateStore" /* 4848 */;

const require = globalThis.__r;

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
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (closure_1) {
        let stringResult = string(t.rimHDW);
        let tmp5 = require;
      } else {
        stringResult = string(t.rZfiNq);
        tmp5 = require;
      }
      const obj2 = { key: stringResult, content: null };
      const intl2 = tmp5(1115).intl;
      const string2 = intl2.string;
      const t2 = tmp5(1115).t;
      if (closure_1) {
        let string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      obj2.content = string2Result;
      ToastActionCreatorsDefault.open(obj2);
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
          obj1 = { source: null };
          obj1.source = tmp19;
          tmp22Result = tmp22(tmp4(tmp2[26]).TableRowIcon, obj1);
        }
        obj6 = { icon: null, label: null, disabled: null, onPress: null };
        obj6.icon = tmp22Result;
        obj6.label = undefined;
        obj6.disabled = tmp7;
        if (tmp7) {
          callback1 = callback;
        }
        obj6.onPress = callback1;
        tmp22Result1 = tmp22(tmp4(tmp2[25]).TableRow, obj6);
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
let closure_15 = fn(17003).SelfStreamAndVideoAlertType;
const MediaEngineContextTypes = fn(4854).MediaEngineContextTypes;
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
    obj.children = arr.map((account) => <GameConsoleAccountButton key={account.type} account={account} channel={channel} connected={connected} />);
    tmp2 = jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: true, children: null });
  }
  return tmp2;
};
export { GameConsoleAccountButton };
export const ActivitiesButton = function ActivitiesButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(11740)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "app_launcher", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  const obj = { onPress: callback, icon: jsx(openTab(5918).TableRowIcon, { IconComponent: openTab(5367).AppsIcon }), label: null };
  const intl = openTab(1115).intl;
  obj.label = intl.string(openTab(1115).t.aeuOoh);
  return jsx(openTab(5912).TableRow, { onPress: callback, icon: jsx(openTab(5918).TableRowIcon, { IconComponent: openTab(5367).AppsIcon }), label: null });
};
export const ChatButton = function ChatButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(11740)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "chat", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  const obj = { onPress: callback, icon: jsx(openTab(5918).TableRowIcon, { IconComponent: openTab(5378).ChatIcon }), label: null };
  const intl = openTab(1115).intl;
  obj.label = intl.string(openTab(1115).t["5KxXrK"]);
  return jsx(openTab(5912).TableRow, { onPress: callback, icon: jsx(openTab(5918).TableRowIcon, { IconComponent: openTab(5378).ChatIcon }), label: null });
};
export const SoundboardButton = function SoundboardButton(channel) {
  let tmp8 = null;
  if (tmp2Result.visible) {
    const obj = { label: null, onPress: null, disabled: null, accessibilityHint: null, icon: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.ABjMWI);
    obj.onPress = tmp5;
    obj.disabled = tmp6;
    obj.accessibilityHint = tmp7;
    const obj2 = { IconComponent: SoundboardIcon.SoundboardIcon };
    obj.icon = jsx(TableRowIcon.TableRowIcon, { IconComponent: SoundboardIcon.SoundboardIcon });
    tmp8 = jsx(TableRow.TableRow, { label: null, onPress: null, disabled: null, accessibilityHint: null, icon: null });
  }
  return tmp8;
};
export const ScreenshareButton = function ScreenshareButton(channel) {
  let isActive;
  const tmp = isActive(9397)(channel.channel);
  const onPress = tmp.onPress;
  isActive = tmp.isActive;
  const items = [isActive, onPress];
  ({ imgSource, text, isFeatureEnabled } = tmp);
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, { source: "voice controls", was_active: isActive });
    onPress();
  }, items);
  return jsx(onPress(5912).TableRow, { disabled: !isFeatureEnabled, onPress: callback, icon: jsx(onPress(5918).TableRowIcon, { source: imgSource }), label: text });
};
export const StreamVolumeItem = function StreamVolumeItem() {
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
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
    const obj2 = { title: null, hasIcons: false, children: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.pEAl4b);
    const tmp4Result = VolumeSliderDefault;
    let fn;
    if (tmpResult.isAndroid()) {
      fn = () => true;
    }
    const obj3 = { label: null };
    const obj4 = { onResponderGrant: fn, value: tmp8, onValueChange: tmp9, color: nativeDefault.unsafe_rawColors.WHITE, maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300, accessibilityLabel: null };
    const intl2 = util.intl;
    obj4.accessibilityLabel = intl2.string(util.t.pEAl4b);
    obj3.label = <tmp4Result onResponderGrant={fn} value={tmp8} onValueChange={tmp9} color={nativeDefault.unsafe_rawColors.WHITE} maxTrackTintColor={nativeDefault.unsafe_rawColors.PRIMARY_300} accessibilityLabel={null} />;
    obj2.children = jsx(TableRow.TableRow, { label: null });
    tmp11Result = jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: false, children: null });
    tmpResult = PlatformUtils;
  }
  return tmp11Result;
};
export const DeafenSwitch = function DeafenSwitch() {
  const items = [MediaEngineStore];
  const stateFromStores = initialize.useStateFromStores(items, () => selfDeaf.isSelfDeaf());
  const obj2 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj2.icon = jsx(TableRowIcon.TableRowIcon, { IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: _modDef16909 });
  const intl = util.intl;
  obj2.accessibilityHint = intl.string(util.t.wjcRFX);
  obj2.value = stateFromStores;
  obj2.onValueChange = toggleDeaf;
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.wjcRFX);
  const intl3 = util.intl;
  obj2.subLabel = intl3.string(util.t.M3VN2U);
  return jsx(TableSwitchRow.TableSwitchRow, { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null });
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  ({ channel: require, connected: importDefault } = arg0);
  const obj2 = {
    icon: jsx(TableRowIcon.TableRowIcon, { source: CallsUtils.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(id.id, importDefault);
    },
    label: null,
    trailing: null
  };
  const intl = util.intl;
  obj2.label = intl.string(util.t["A/Ly/2"]);
  obj2.trailing = jsx(TableRowArrow.TableRowArrow, {});
  return jsx(TableRow.TableRow, {
    icon: jsx(TableRowIcon.TableRowIcon, { source: CallsUtils.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(id.id, importDefault);
    },
    label: null,
    trailing: null
  });
};
export const InviteButton = function InviteButton(channel) {
  channel = channel.channel;
  const canInviteMembers = useCanInviteMembers.useCanInviteMembers(channel.id);
  useInviteMembersCallback;
  let tmp8 = null;
  if (!tmp5) {
    tmp8 = null;
    if (canInviteMembers) {
      tmp8 = null;
      if (channel.connected) {
        const obj2 = { onPress: tmp7, icon: null, label: null, trailing: null };
        const obj3 = { IconComponent: GroupPlusIcon.GroupPlusIcon, source: _modDef9450 };
        obj2.icon = jsx(TableRowIcon.TableRowIcon, { IconComponent: GroupPlusIcon.GroupPlusIcon, source: _modDef9450 });
        const intl = util.intl;
        obj2.label = intl.string(util.t["f1+QIK"]);
        obj2.trailing = jsx(TableRowArrow.TableRowArrow, {});
        tmp8 = jsx(TableRow.TableRow, { onPress: tmp7, icon: null, label: null, trailing: null });
      }
    }
  }
  return tmp8;
};
export const HideNonVideoParticipants = function HideNonVideoParticipants(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelRTCStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelRTCStore.getVoiceParticipantsHidden(channelId));
  const items1 = [channelId, stateFromStores];
  const callback = noop.useCallback(() => {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  const obj2 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  const obj = channelId(504);
  obj2.icon = jsx(channelId(5918).TableRowIcon, { IconComponent: channelId(9558).VideoIcon, source: stateFromStores(9396) });
  const intl = channelId(1115).intl;
  obj2.accessibilityHint = intl.string(channelId(1115).t.ZMTRyc);
  obj2.value = stateFromStores;
  obj2.onValueChange = callback;
  const intl2 = channelId(1115).intl;
  obj2.label = intl2.string(channelId(1115).t.ZMTRyc);
  const intl3 = channelId(1115).intl;
  obj2.subLabel = intl3.string(channelId(1115).t.MlpCFS);
  return jsx(channelId(6616).TableSwitchRow, { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null });
};
export const HideSelfVideo = function HideSelfVideo() {
  const tmp3 = _slicedToArray(useHideSelfVideoDefault(AuthenticationStore.getId()), 3);
  _require = tmp4;
  importDefault = tmp3[2];
  const items = [UnsyncedUserSettingsStore];
  dependencyMap = require("initialize").useStateFromStores(items, () => UnsyncedUserSettingsStore.disableHideSelfStreamAndVideoConfirmationAlert);
  let tmp6 = null;
  if (tmp3[0]) {
    let obj2 = { icon: null, value: null, onValueChange: null, label: null };
    const obj3 = { IconComponent: tmp5(8672).UserSquareIcon };
    obj2.icon = jsx(tmp5(5918).TableRowIcon, { IconComponent: tmp5(8672).UserSquareIcon });
    obj2.value = !tmp4;
    obj2.onValueChange = function onValueChange() {
      if (!paths) {
        if (!VIDEO) {
          VIDEO = constants.VIDEO;
          const f121367 = () => f121367(!VIDEO);
          const obj2 = {
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
                },
            isDismissable: false
          };
          actions_AlertActionCreatorsDefault.openLazy(obj2);
        }
      }
      return closure_1(!VIDEO);
    };
    const intl = tmp5(1115).intl;
    obj2.label = intl.string(tmp5(1115).t.MH8ESU);
    tmp6 = jsx(tmp5(6616).TableSwitchRow, { icon: null, value: null, onValueChange: null, label: null });
  }
  return tmp6;
};
export const LeaveActivitiesButton = function LeaveActivitiesButton() {
  const obj = { icon: jsx(TableRowIcon.TableRowIcon, { source: _modDef10902 }), label: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["R/FK4A"]);
  obj.onPress = function onPress() {
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const obj2 = { location: _location, applicationId: null };
    let applicationId;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    obj2.applicationId = applicationId;
    EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj2);
  };
  return jsx(TableRow.TableRow, { icon: jsx(TableRowIcon.TableRowIcon, { source: _modDef10902 }), label: null, onPress: null });
};
export const ShareActivityLogsButton = function ShareActivityLogsButton() {
  const shareActivityLogsResult = ChannelCallUtils.shareActivityLogs();
  const icon = shareActivityLogsResult.icon;
  ({ label, onPress } = shareActivityLogsResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = jsx(TableRowIcon.TableRowIcon, { source: icon });
  }
  return jsx(TableRow.TableRow, { icon: icon1, label, onPress });
};
export const ToggleShowActivitiesDebugOverlay = function ToggleShowActivitiesDebugOverlay() {
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  const obj2 = { icon: null, value: null, onValueChange: null, label: null };
  obj2.icon = jsx(TableRowIcon.TableRowIcon, { source: _modDef8079 });
  obj2.value = stateFromStores;
  obj2.onValueChange = function onValueChange(visible) {
    DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible });
  };
  const intl = util.intl;
  obj2.label = intl.string(util.t["qv5/SP"]);
  return jsx(TableSwitchRow.TableSwitchRow, { icon: null, value: null, onValueChange: null, label: null });
};
export const VoiceSettingsButton = function VoiceSettingsButton(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  const callback = noop.useCallback(() => {
    const result = ChannelCallConnectingScreen.showVoiceSettingsActionSheet(guildId);
  }, items);
  const obj = { onPress: callback, icon: jsx(guildId(5918).TableRowIcon, { IconComponent: guildId(6793).SettingsIcon, source: _modDef16908 }), label: null, subLabel: null, trailing: null };
  const intl = guildId(1115).intl;
  obj.label = intl.string(guildId(1115).t.dsXapM);
  const intl2 = guildId(1115).intl;
  obj.subLabel = intl2.string(guildId(1115).t["16SG+O"]);
  obj.trailing = jsx(guildId(5919).TableRowArrow, {});
  return jsx(guildId(5912).TableRow, { onPress: callback, icon: jsx(guildId(5918).TableRowIcon, { IconComponent: guildId(6793).SettingsIcon, source: _modDef16908 }), label: null, subLabel: null, trailing: null });
};
export const ReportStreamIssueButton = function ReportStreamIssueButton(stream) {
  const reportStreamIssueResult = ChannelCallUtils.reportStreamIssue(stream.stream);
  const icon = reportStreamIssueResult.icon;
  ({ label, onPress } = reportStreamIssueResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = jsx(TableRowIcon.TableRowIcon, { source: icon });
  }
  return jsx(TableRow.TableRow, { icon: icon1, label, onPress });
};
export const RTCDebugPanelButton = function RTCDebugPanelButton() {
  const rtcDebugPanelResult = ChannelCallUtils.rtcDebugPanel(() => {

  });
  const icon = rtcDebugPanelResult.icon;
  ({ label, onPress } = rtcDebugPanelResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = jsx(TableRowIcon.TableRowIcon, { source: icon });
  }
  return jsx(TableRow.TableRow, { icon: icon1, label, onPress });
};