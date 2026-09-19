// discord_app/modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowIcon from "../../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import TableRowArrow from "../../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import _modDef8904 from "../../../../../_runtime/metro/08904__.js";
import EmbeddedActivitiesNativeManagerDefault from "../../../activities/native/EmbeddedActivitiesNativeManager.tsx";
import CallsUtils from "../../../voice_calls/native/CallsUtils.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import showAudioOutputSelector from "../../../voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx";
import HeadphonesSlashIcon from "../../../../design/components/Icon/native/redesign/generated/HeadphonesSlashIcon.tsx";
import useGameConsoleAccountsDefault from "../../../game_console/useGameConsoleAccounts.tsx";
import ChannelCallConnectingScreen from "../../../video_calls/native/components/ChannelCallConnectingScreen.tsx";
import VolumeSliderDefault from "../../../../components_native/common/VolumeSlider.tsx";
import _modDef10257 from "../../../../../_runtime/metro/10257__.js";
import useMuteAwareLocalVolumeDefault from "../../../media_engine/useMuteAwareLocalVolume.tsx";
import GroupPlusIcon from "../../../../design/components/Icon/native/redesign/generated/GroupPlusIcon.tsx";
import _modDef11634 from "../../../../../_runtime/metro/11634__.js";
import SoundboardIcon from "../../../../design/components/Icon/native/redesign/generated/SoundboardIcon.tsx";
import useInviteMembersCallback from "../hooks/useInviteMembersCallback.tsx";
import useCanInviteMembers from "../hooks/useCanInviteMembers.tsx";
import _modDef17569 from "../../../../../_runtime/metro/17569__.js";
import _modDef17570 from "../../../../../_runtime/metro/17570__.js";
import useSoundboardConfigDefault from "../hooks/useSoundboardConfig.tsx";
import useHideSelfVideoDefault from "../../../calls/useHideSelfVideo.tsx";
import ChannelCallUtils from "../../../video_calls/native/ChannelCallUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import UnsyncedUserSettingsStore from "../../../user_settings/UnsyncedUserSettingsStore.tsx";
import ChannelCallLifecycleStore from "../../../video_calls/native/ChannelCallLifecycleStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";

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
let closure_15 = fn(17664).SelfStreamAndVideoAlertType;
const MediaEngineContextTypes = fn(4781).MediaEngineContextTypes;
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
    obj.children = arr.map((account) => (
      <GameConsoleAccountButton key={account.type} account={account} channel={channel} connected={connected} />
    ));
    tmp2 = jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: true, children: null });
  }
  return tmp2;
};
export { GameConsoleAccountButton };
export const ActivitiesButton = function ActivitiesButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(12523)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({
        tab: "app_launcher",
        source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS,
      });
    }, 200);
  }, items);
  const obj = {
    onPress: callback,
    icon: jsx(openTab(5823).TableRowIcon, { IconComponent: openTab(5317).AppsIcon }),
    label: null,
  };
  const intl = openTab(1115).intl;
  obj.label = intl.string(openTab(1115).t.aeuOoh);
  return jsx(openTab(5817).TableRow, {
    onPress: callback,
    icon: jsx(openTab(5823).TableRowIcon, { IconComponent: openTab(5317).AppsIcon }),
    label: null,
  });
};
export const ChatButton = function ChatButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(12523)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "chat", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  const obj = {
    onPress: callback,
    icon: jsx(openTab(5823).TableRowIcon, { IconComponent: openTab(5282).ChatIcon }),
    label: null,
  };
  const intl = openTab(1115).intl;
  obj.label = intl.string(openTab(1115).t["5KxXrK"]);
  return jsx(openTab(5817).TableRow, {
    onPress: callback,
    icon: jsx(openTab(5823).TableRowIcon, { IconComponent: openTab(5282).ChatIcon }),
    label: null,
  });
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
  const tmp = isActive(10208)(channel.channel);
  const onPress = tmp.onPress;
  isActive = tmp.isActive;
  const items = [isActive, onPress];
  ({ imgSource, text, isFeatureEnabled } = tmp);
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, {
      source: "voice controls",
      was_active: isActive,
    });
    onPress();
  }, items);
  return jsx(onPress(5817).TableRow, {
    disabled: !isFeatureEnabled,
    onPress: callback,
    icon: jsx(onPress(5823).TableRowIcon, { source: imgSource }),
    label: text,
  });
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
    const obj4 = {
      onResponderGrant: fn,
      value: tmp8,
      onValueChange: tmp9,
      color: nativeDefault.unsafe_rawColors.WHITE,
      maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300,
      accessibilityLabel: null,
    };
    const intl2 = util.intl;
    obj4.accessibilityLabel = intl2.string(util.t.pEAl4b);
    obj3.label = (
      <tmp4Result
        onResponderGrant={fn}
        value={tmp8}
        onValueChange={tmp9}
        color={nativeDefault.unsafe_rawColors.WHITE}
        maxTrackTintColor={nativeDefault.unsafe_rawColors.PRIMARY_300}
        accessibilityLabel={null}
      />
    );
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
  obj2.icon = jsx(TableRowIcon.TableRowIcon, {
    IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon,
    source: _modDef17570,
  });
  const intl = util.intl;
  obj2.accessibilityHint = intl.string(util.t.wjcRFX);
  obj2.value = stateFromStores;
  obj2.onValueChange = toggleDeaf;
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.wjcRFX);
  const intl3 = util.intl;
  obj2.subLabel = intl3.string(util.t.M3VN2U);
  return jsx(TableSwitchRow.TableSwitchRow, {
    icon: null,
    accessibilityHint: null,
    value: null,
    onValueChange: null,
    label: null,
    subLabel: null,
  });
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  ({ channel: require, connected: importDefault } = arg0);
  const obj2 = {
    icon: jsx(TableRowIcon.TableRowIcon, { source: CallsUtils.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(id.id, importDefault);
    },
    label: null,
    trailing: null,
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
    trailing: null,
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
        const obj3 = { IconComponent: GroupPlusIcon.GroupPlusIcon, source: _modDef10257 };
        obj2.icon = jsx(TableRowIcon.TableRowIcon, {
          IconComponent: GroupPlusIcon.GroupPlusIcon,
          source: _modDef10257,
        });
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
  const stateFromStores = channelId(504).useStateFromStores(items, () =>
    ChannelRTCStore.getVoiceParticipantsHidden(channelId),
  );
  const items1 = [channelId, stateFromStores];
  const callback = noop.useCallback(() => {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  const obj2 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  const obj = channelId(504);
  obj2.icon = jsx(channelId(5823).TableRowIcon, {
    IconComponent: channelId(10365).VideoIcon,
    source: stateFromStores(10207),
  });
  const intl = channelId(1115).intl;
  obj2.accessibilityHint = intl.string(channelId(1115).t.ZMTRyc);
  obj2.value = stateFromStores;
  obj2.onValueChange = callback;
  const intl2 = channelId(1115).intl;
  obj2.label = intl2.string(channelId(1115).t.ZMTRyc);
  const intl3 = channelId(1115).intl;
  obj2.subLabel = intl3.string(channelId(1115).t.MlpCFS);
  return jsx(channelId(7440).TableSwitchRow, {
    icon: null,
    accessibilityHint: null,
    value: null,
    onValueChange: null,
    label: null,
    subLabel: null,
  });
};
export const HideSelfVideo = function HideSelfVideo() {
  const tmp3 = _slicedToArray(useHideSelfVideoDefault(AuthenticationStore.getId()), 3);
  _require = tmp4;
  importDefault = tmp3[2];
  const items = [UnsyncedUserSettingsStore];
  dependencyMap = require("initialize").useStateFromStores(
    items,
    () => UnsyncedUserSettingsStore.disableHideSelfStreamAndVideoConfirmationAlert,
  );
  let tmp6 = null;
  if (tmp3[0]) {
    let obj2 = { icon: null, value: null, onValueChange: null, label: null };
    const obj3 = { IconComponent: tmp5(9490).UserSquareIcon };
    obj2.icon = jsx(tmp5(5823).TableRowIcon, { IconComponent: tmp5(9490).UserSquareIcon });
    obj2.value = !tmp4;
    obj2.onValueChange = function onValueChange() {
      if (!paths) {
        if (!VIDEO) {
          VIDEO = constants.VIDEO;
          const f121759 = () => f121759(!VIDEO);
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
            isDismissable: false,
          };
          actions_AlertActionCreatorsDefault.openLazy(obj2);
        }
      }
      return closure_1(!VIDEO);
    };
    const intl = tmp5(1115).intl;
    obj2.label = intl.string(tmp5(1115).t.MH8ESU);
    tmp6 = jsx(tmp5(7440).TableSwitchRow, { icon: null, value: null, onValueChange: null, label: null });
  }
  return tmp6;
};
export const LeaveActivitiesButton = function LeaveActivitiesButton() {
  const obj = { icon: jsx(TableRowIcon.TableRowIcon, { source: _modDef11634 }), label: null, onPress: null };
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
  return jsx(TableRow.TableRow, {
    icon: jsx(TableRowIcon.TableRowIcon, { source: _modDef11634 }),
    label: null,
    onPress: null,
  });
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
  const stateFromStores = initialize.useStateFromStores(items, () =>
    showActivitiesDebugOverlay.getShowActivitiesDebugOverlay(),
  );
  const obj2 = { icon: null, value: null, onValueChange: null, label: null };
  obj2.icon = jsx(TableRowIcon.TableRowIcon, { source: _modDef8904 });
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
  const obj = {
    onPress: callback,
    icon: jsx(guildId(5823).TableRowIcon, { IconComponent: guildId(7620).SettingsIcon, source: _modDef17569 }),
    label: null,
    subLabel: null,
    trailing: null,
  };
  const intl = guildId(1115).intl;
  obj.label = intl.string(guildId(1115).t.NiTd0e);
  const intl2 = guildId(1115).intl;
  obj.subLabel = intl2.string(guildId(1115).t["16SG+O"]);
  obj.trailing = jsx(guildId(5824).TableRowArrow, {});
  return jsx(guildId(5817).TableRow, {
    onPress: callback,
    icon: jsx(guildId(5823).TableRowIcon, { IconComponent: guildId(7620).SettingsIcon, source: _modDef17569 }),
    label: null,
    subLabel: null,
    trailing: null,
  });
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
  const rtcDebugPanelResult = ChannelCallUtils.rtcDebugPanel(() => {});
  const icon = rtcDebugPanelResult.icon;
  ({ label, onPress } = rtcDebugPanelResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = jsx(TableRowIcon.TableRowIcon, { source: icon });
  }
  return jsx(TableRow.TableRow, { icon: icon1, label, onPress });
};
