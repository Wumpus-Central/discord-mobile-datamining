// === Module 19766: VoicePanelVoiceControlsButtons ===

// Module 19766 (VoicePanelVoiceControlsButtons)
import initialize from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4999 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5839 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5890 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6049 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6093 */;
import TableRow from "TableRow" /* 7041 */;
import TableRowIcon from "TableRowIcon" /* 7049 */;
import TableRowArrow from "TableRowArrow" /* 7050 */;
import TableRowGroup from "TableRowGroup" /* 7129 */;
import TableSwitchRow from "TableSwitchRow" /* 7432 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 8014 */;
import _modDef8424 from "module_8424" /* 8424 */;
import CallsUtils from "CallsUtils" /* 9307 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9314 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9324 */;
import GroupPlusIcon from "GroupPlusIcon" /* 11116 */;
import speakOnStageDefault from "speakOnStage" /* 11339 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 11341 */;
import _modDef11421 from "module_11421" /* 11421 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 12114 */;
import VolumeSliderDefault from "VolumeSlider" /* 12124 */;
import _modDef12143 from "module_12143" /* 12143 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 12177 */;
import SoundboardIcon from "SoundboardIcon" /* 14371 */;
import useInviteMembersCallback from "useInviteMembersCallback" /* 19569 */;
import useCanInviteMembers from "useCanInviteMembers" /* 19611 */;
import _modDef19627 from "module_19627" /* 19627 */;
import _modDef19628 from "module_19628" /* 19628 */;
import useSoundboardConfigDefault from "useSoundboardConfig" /* 19637 */;
import useHideSelfVideoDefault from "useHideSelfVideo" /* 19769 */;
import ChannelCallUtils from "ChannelCallUtils" /* 19770 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4990 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6901 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 11877 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6771 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import PermissionStore from "PermissionStore" /* 5074 */;
import VoiceStateStore from "VoiceStateStore" /* 5805 */;

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
    tmp3 = closure_1(closure_2[21])(channel);
    obj = channel(closure_2[21]);
    tmp5 = obj.useIsVoiceChannelLocked(channel) && !channel.isPrivate();
    closure_1 = tmp5;
    tmp4Result = tmp4(tmp2[22]);
    items = [];
    items[0] = closure_13;
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
      const intl2 = tmp5(1113).intl;
      const string2 = intl2.string;
      const t2 = tmp5(1113).t;
      if (closure_1) {
        let string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      ToastActionCreatorsDefault.open(stringResult, { text: string2Result });
    }, items1);
    tmp4Result1 = tmp4(tmp2[24]);
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
      intl3 = tmp4(tmp2[18]).intl;
      string3 = intl3.string;
      t = tmp4(tmp2[18]).t;
      if (connected) {
        t = t["qVE/VF"];
        string3Result = string3(t);
      } else {
        string3Result = string3(t.E8euSk);
      }
      tmp18 = string3Result;
    } else if (type === tmp11.PLAYSTATION) {
      intl2 = tmp4(tmp2[18]).intl;
      string2 = intl2.string;
      vzfxmY = tmp4(tmp2[18]).t;
      if (connected) {
        vzfxmY = vzfxmY.vzfxmY;
        string2Result = string2(vzfxmY);
      } else {
        string2Result = string2(vzfxmY.QxEYDj);
      }
      tmp15 = string2Result;
    } else if (type !== tmp11.PLAYSTATION_STAGING) {
      tmp19 = tmp(tmp2[25])(account.type);
      tmp20 = null;
      tmp22Result1 = null;
      if (null != undefined) {
        tmp22 = jsx;
        tmp22Result = undefined;
        if (null != tmp19) {
          obj1 = { source: null };
          obj1.source = tmp19;
          tmp22Result = tmp22(tmp4(tmp2[27]).TableRowIcon, obj1);
        }
        obj6 = { icon: null, label: null, disabled: null, onPress: null };
        obj6.icon = tmp22Result;
        obj6.label = undefined;
        obj6.disabled = tmp7;
        if (tmp7) {
          callback1 = callback;
        }
        obj6.onPress = callback1;
        tmp22Result1 = tmp22(tmp4(tmp2[26]).TableRow, obj6);
      }
      return tmp22Result1;
    } else {
      intl = tmp4(tmp2[18]).intl;
      string = intl.string;
      BDiXtV = tmp4(tmp2[18]).t;
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
class ChatButton {
  constructor(arg0) {
    openTab = global.openTab;
    dismissPanel = undefined;
    dismissPanel = closure_4.useContext(dismissPanel(closure_2[28])).dismissPanel;
    items = [, ];
    items[0] = dismissPanel;
    items[1] = openTab;
    callback = closure_4.useCallback(() => {
      dismissPanel();
      const timerId = setTimeout(() => {
        closure_1_0({ tab: "chat", source: openTab(dependencyMap[29]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
      }, 200);
    }, items);
    obj = { onPress: callback, icon: null, label: null };
    obj1 = { IconComponent: openTab(closure_2[31]).ChatIcon };
    obj.icon = jsx(openTab(closure_2[27]).TableRowIcon, obj1);
    intl = openTab(closure_2[18]).intl;
    obj.label = intl.string(openTab(closure_2[18]).t["5KxXrK"]);
    return jsx(openTab(closure_2[26]).TableRow, obj);
  }
}
class ScreenshareButton {
  constructor(arg0) {
    onPress = undefined;
    isActive = undefined;
    tmp = isActive(closure_2[34])(global.channel);
    onPress = tmp.onPress;
    isActive = tmp.isActive;
    items = [, ];
    items[0] = isActive;
    items[1] = onPress;
    ({ imgSource, text, isFeatureEnabled } = tmp);
    callback = closure_4.useCallback(() => {
      AnalyticsUtilsDefault.track(constants.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, { source: "voice controls", was_active: isActive });
      onPress();
    }, items);
    obj = { disabled: !isFeatureEnabled, onPress: callback, icon: jsx(onPress(closure_2[27]).TableRowIcon, { source: imgSource }), label: text };
    return jsx(onPress(closure_2[26]).TableRow, obj);
  }
}
function toggleDeaf() {
  AudioActionCreatorsDefault.toggleSelfDeaf();
}
const Constants = fn(1072);
({ AnalyticEvents: closure_14, PlatformTypes: closure_15 } = Constants);
let closure_16 = fn(19767).SelfStreamAndVideoAlertType;
const MediaEngineContextTypes = fn(5899).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx");

export function GameConsoles(channel) {
  channel = channel.channel;
  const connected = channel.connected;
  const arr = connected(12151)();
  let tmp2 = null;
  if (!channel.isGuildStageVoice()) {
    let tmp3 = null;
    if (arr.length > 0) {
      const obj = { title: null, hasIcons: true, children: null };
      const intl = channel(1113).intl;
      obj.title = intl.string(channel(1113).t["mbi/fB"]);
      obj.children = arr.map((account) => collapsedCategories(GameConsoleAccountButton, { account, channel, connected }, account.type));
      tmp3 = closure_18(channel(7129).TableRowGroup, obj);
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
export { GameConsoleAccountButton };
export function ActivitiesButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(11371)).dismissPanel;
  items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "app_launcher", source: openTab(dependencyMap[29]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  const obj = { onPress: callback, icon: closure_18(openTab(7049).TableRowIcon, { IconComponent: openTab(8755).AppsIcon }), label: null };
  const intl = openTab(1113).intl;
  obj.label = intl.string(openTab(1113).t.aeuOoh);
  return closure_18(openTab(7041).TableRow, obj);
}
export { ChatButton };
export function SoundboardButton(channel) {
  let tmp8 = null;
  if (tmp2Result.visible) {
    const obj = { label: null, onPress: null, disabled: null, accessibilityHint: null, icon: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.ABjMWI);
    obj.onPress = tmp5;
    obj.disabled = tmp6;
    obj.accessibilityHint = tmp7;
    const obj2 = { IconComponent: SoundboardIcon.SoundboardIcon };
    obj.icon = collapsedCategories(TableRowIcon.TableRowIcon, obj2);
    tmp8 = collapsedCategories(TableRow.TableRow, obj);
  }
  return tmp8;
}
export { ScreenshareButton };
export function StreamVolumeItem() {
  items = [ApplicationStreamingStore, AuthenticationStore];
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
    obj3.label = collapsedCategories(tmp4Result, obj4);
    obj2.children = collapsedCategories(TableRow.TableRow, obj3);
    tmp11Result = collapsedCategories(TableRowGroup.TableRowGroup, obj2);
    tmpResult = PlatformUtils;
  }
  return tmp11Result;
}
export function DeafenSwitch() {
  items = [MediaEngineStore];
  const stateFromStores = initialize.useStateFromStores(items, () => selfDeaf.isSelfDeaf());
  const obj2 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj2.icon = collapsedCategories(TableRowIcon.TableRowIcon, { IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: _modDef19628 });
  const intl = util.intl;
  obj2.accessibilityHint = intl.string(util.t.wjcRFX);
  obj2.value = stateFromStores;
  obj2.onValueChange = toggleDeaf;
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.wjcRFX);
  const intl3 = util.intl;
  obj2.subLabel = intl3.string(util.t.M3VN2U);
  return collapsedCategories(TableSwitchRow.TableSwitchRow, obj2);
}
export function AudioRouteButton(arg0) {
  ({ channel: require, connected: importDefault } = arg0);
  const obj2 = {
    icon: closure_18(TableRowIcon.TableRowIcon, { source: CallsUtils.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(id.id, importDefault);
    },
    label: null,
    trailing: null
  };
  const intl = util.intl;
  obj2.label = intl.string(util.t["A/Ly/2"]);
  obj2.trailing = closure_18(TableRowArrow.TableRowArrow, {});
  return closure_18(TableRow.TableRow, obj2);
}
export function InviteButton(channel) {
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
        const obj3 = { IconComponent: GroupPlusIcon.GroupPlusIcon, source: _modDef12143 };
        obj2.icon = collapsedCategories(TableRowIcon.TableRowIcon, obj3);
        const intl = util.intl;
        obj2.label = intl.string(util.t["f1+QIK"]);
        obj2.trailing = collapsedCategories(TableRowArrow.TableRowArrow, {});
        tmp8 = collapsedCategories(TableRow.TableRow, obj2);
      }
    }
  }
  return tmp8;
}
export function HideNonVideoParticipants(channelId) {
  channelId = channelId.channelId;
  items = [ChannelRTCStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelRTCStore.getVoiceParticipantsHidden(channelId));
  const items1 = [channelId, stateFromStores];
  const callback = noop.useCallback(() => {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  const obj2 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  const obj = channelId(504);
  obj2.icon = closure_18(channelId(7049).TableRowIcon, { IconComponent: channelId(11181).VideoIcon, source: stateFromStores(12094) });
  const intl = channelId(1113).intl;
  obj2.accessibilityHint = intl.string(channelId(1113).t.ZMTRyc);
  obj2.value = stateFromStores;
  obj2.onValueChange = callback;
  const intl2 = channelId(1113).intl;
  obj2.label = intl2.string(channelId(1113).t.ZMTRyc);
  const intl3 = channelId(1113).intl;
  obj2.subLabel = intl3.string(channelId(1113).t.MlpCFS);
  return closure_18(channelId(7432).TableSwitchRow, obj2);
}
export function HideSelfVideo() {
  const tmp3 = _slicedToArray(useHideSelfVideoDefault(AuthenticationStore.getId()), 3);
  _require = tmp4;
  importDefault = tmp3[2];
  items = [UnsyncedUserSettingsStore];
  dependencyMap = require("initialize").useStateFromStores(items, () => UnsyncedUserSettingsStore.disableHideSelfStreamAndVideoConfirmationAlert);
  let tmp6 = null;
  if (tmp3[0]) {
    let obj2 = { icon: null, value: null, onValueChange: null, label: null };
    const obj3 = { IconComponent: tmp5(10050).UserSquareIcon };
    obj2.icon = closure_18(tmp5(7049).TableRowIcon, obj3);
    obj2.value = !tmp4;
    obj2.onValueChange = function handleMaybeConfirmToggleSelfVideoHidden() {
      if (!paths) {
        if (!VIDEO) {
          VIDEO = constants.VIDEO;
          const f135793 = () => f135793(!VIDEO);
          const obj2 = {
            importer() {
                  return VIDEO(paths[17])(paths[16], paths.paths).then((result) => {
                    closure_0 = result.default;
                    return (arg0) => {
                      const obj = {};
                      const merged = Object.assign(arg0);
                      obj.type = type;
                      obj.onConfirm = onConfirm;
                      return closure_3_18(closure_0, obj);
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
    const intl = tmp5(1113).intl;
    obj2.label = intl.string(tmp5(1113).t.MH8ESU);
    tmp6 = closure_18(tmp5(7432).TableSwitchRow, obj2);
  }
  return tmp6;
}
export function LeaveActivitiesButton() {
  const obj = { icon: collapsedCategories(TableRowIcon.TableRowIcon, { source: _modDef11421 }), label: null, onPress: null };
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
    const result = require("leaveEmbeddedActivity").leaveEmbeddedActivity(obj2);
  };
  return collapsedCategories(TableRow.TableRow, obj);
}
export function ShareActivityLogsButton() {
  const shareActivityLogsResult = ChannelCallUtils.shareActivityLogs();
  const icon = shareActivityLogsResult.icon;
  ({ label, onPress } = shareActivityLogsResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = collapsedCategories(TableRowIcon.TableRowIcon, obj2);
  }
  return collapsedCategories(TableRow.TableRow, { icon: icon1, label, onPress });
}
export function ToggleShowActivitiesDebugOverlay() {
  items = [ChannelCallLifecycleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  const obj2 = { icon: null, value: null, onValueChange: null, label: null };
  obj2.icon = collapsedCategories(TableRowIcon.TableRowIcon, { source: _modDef8424 });
  obj2.value = stateFromStores;
  obj2.onValueChange = function onPressShowDebugOverlayChange(visible) {
    DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible });
  };
  const intl = util.intl;
  obj2.label = intl.string(util.t["qv5/SP"]);
  return collapsedCategories(TableSwitchRow.TableSwitchRow, obj2);
}
export function VoiceSettingsButton(guildId) {
  guildId = guildId.guildId;
  items = [guildId];
  const callback = noop.useCallback(() => {
    const result = ChannelCallConnectingScreen.showVoiceSettingsActionSheet(guildId);
  }, items);
  const obj = { onPress: callback, icon: closure_18(guildId(7049).TableRowIcon, { IconComponent: guildId(7636).SettingsIcon, source: _modDef19627 }), label: null, subLabel: null, trailing: null };
  const intl = guildId(1113).intl;
  obj.label = intl.string(guildId(1113).t.dsXapM);
  const intl2 = guildId(1113).intl;
  obj.subLabel = intl2.string(guildId(1113).t["16SG+O"]);
  obj.trailing = closure_18(guildId(7050).TableRowArrow, {});
  return closure_18(guildId(7041).TableRow, obj);
}
export function ReportStreamIssueButton(stream) {
  const reportStreamIssueResult = ChannelCallUtils.reportStreamIssue(stream.stream);
  const icon = reportStreamIssueResult.icon;
  ({ label, onPress } = reportStreamIssueResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = collapsedCategories(TableRowIcon.TableRowIcon, obj2);
  }
  return collapsedCategories(TableRow.TableRow, { icon: icon1, label, onPress });
}
export function RTCDebugPanelButton() {
  const rtcDebugPanelResult = ChannelCallUtils.rtcDebugPanel(() => {

  });
  const icon = rtcDebugPanelResult.icon;
  ({ label, onPress } = rtcDebugPanelResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = collapsedCategories(TableRowIcon.TableRowIcon, obj2);
  }
  return collapsedCategories(TableRow.TableRow, { icon: icon1, label, onPress });
}
export function StageButtons(channel) {
  channel = channel.channel;
  const tmp2 = useCanSpeakInChannelDefault(channel.id);
  const obj = channel(12025);
  items = [PermissionStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel));
  const obj2 = channel(504);
  const isStageSpeakingDisabledForCurrentUser = channel(6816).useIsStageSpeakingDisabledForCurrentUser();
  const obj3 = channel(6816);
  if (tmp2) {
    const obj4 = { channel };
    let tmp8 = closure_18(ScreenshareButton, obj4);
  } else {
    tmp8 = null;
    if (obj.useStageChannelStartEvent(channel.id).isModerator) {
      tmp8 = null;
      if (!isStageSpeakingDisabledForCurrentUser) {
        const obj5 = { icon: null, label: null, onPress: null };
        const obj6 = { IconComponent: tmp3(12061).MicrophoneArrowRightIcon };
        obj5.icon = closure_18(tmp3(7049).TableRowIcon, obj6);
        const intl = tmp3(1113).intl;
        obj5.label = intl.string(tmp3(1113).t["8Joh+p"]);
        obj5.onPress = function onPress() {
          return speakOnStageDefault(channel);
        };
        tmp8 = closure_18(tmp3(7041).TableRow, obj5);
      }
    }
  }
  const children = [tmp8, , ];
  let tmp12 = null;
  if (tmp2) {
    const obj7 = { openTab: channel.openTab };
    tmp12 = closure_18(ChatButton, obj7);
  }
  children[1] = tmp12;
  let tmp15 = null;
  if (stateFromStores) {
    tmp15 = null;
    if (!isStageSpeakingDisabledForCurrentUser) {
      const obj8 = { icon: null, label: null, onPress: null };
      const obj9 = { IconComponent: tmp3(8746).StageIcon };
      obj8.icon = closure_18(tmp3(7049).TableRowIcon, obj9);
      const intl2 = tmp3(1113).intl;
      const string = intl2.string;
      let t = tmp3(1113).t;
      if (tmp6) {
        t = t["5BKP4y"];
        let stringResult = string(t);
      } else {
        stringResult = string(t.s8mM8A);
      }
      obj8.label = stringResult;
      obj8.onPress = function onPress() {
        return StageChannelActionCreatorExtras.openStageChannelSettings(channel);
      };
      closure_18(tmp3(7041).TableRow, obj8);
    }
  }
  children[2] = tmp15;
  return closure_19(channel(7129).TableRowGroup, { hasIcons: true, children });
}