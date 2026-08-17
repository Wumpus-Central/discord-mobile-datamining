// discord_app/modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowIcon from "../../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import TableRowArrow from "../../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import registerAssetDefault from "../../../../../_runtime/08134_registerAsset.js";
import _handleToggleVideo from "../../../voice_calls/native/CallsUtils.tsx";
import trackDeviceChangedDefault from "../../../../actions/AudioActionCreators.tsx";
import HeadphonesSlashIcon from "../../../../design/components/Icon/native/redesign/generated/HeadphonesSlashIcon.tsx";
import useGameConsoleAccountsDefault from "../../../game_console/useGameConsoleAccounts.tsx";
import registerAssetDefault2 from "../../../../../_runtime/10585_registerAsset.js";
import useMuteAwareLocalVolumeDefault from "../../../media_engine/useMuteAwareLocalVolume.tsx";
import registerAssetDefault3 from "../../../../../_runtime/12565_registerAsset.js";
import useInviteMembersCallback from "../hooks/useInviteMembersCallback.tsx";
import useCanInviteMembers from "../hooks/useCanInviteMembers.tsx";
import registerAssetDefault4 from "../../../../../_runtime/16334_registerAsset.js";
import registerAssetDefault5 from "../../../../../_runtime/16335_registerAsset.js";
import useSoundboardConfigDefault from "../hooks/useSoundboardConfig.tsx";
import useHideSelfVideoDefault from "../../../calls/useHideSelfVideo.tsx";
import voiceSettings from "../../../video_calls/native/ChannelCallUtils.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import closure_5 from "../../../activities/EmbeddedActivitiesStore.tsx";
import closure_6 from "../../../calls/ChannelRTCStore.tsx";
import closure_7 from "../../../user_settings/UnsyncedUserSettingsStore.tsx";
import closure_8 from "../../../video_calls/native/ChannelCallLifecycleStore.tsx";
import closure_9 from "../../../../stores/ApplicationStreamingStore.tsx";
import closure_10 from "../../../../stores/AuthenticationStore.tsx";
import closure_11 from "../../../../stores/MediaEngineStore.tsx";
import closure_12 from "../../../../stores/VoiceStateStore.tsx";
import ME from "../../../../Constants.tsx";
import { SelfStreamAndVideoAlertType as closure_15 } from "../../../calls/HideSelfStreamAndVideoConstants.tsx";
import { MediaEngineContextTypes } from "../../../../../discord_common/js/packages/media-engine/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
class GameConsoleAccountButton {
  constructor(arg0) {
    channel = global.channel;
    ({ account, connected } = global);
    closure_1 = undefined;
    closure_2 = undefined;
    tmp2 = closure_2;
    tmp = closure_1;
    tmp4 = channel;
    tmp3 = require("useIsVoiceChannelFull")(channel);
    obj = require("useIsVoiceChannelFull");
    tmp5 = obj.useIsVoiceChannelLocked(channel) && !channel.isPrivate();
    closure_1 = tmp5;
    tmp4Result = require("initialize");
    items = [];
    items[0] = closure_12;
    stateFromStores = tmp4Result.useStateFromStores(items, () => closure_1_12.isInChannel(channel.id));
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
      let obj = callback(onConnectToConsole[22]);
      const intl = channel(onConnectToConsole[17]).intl;
      const string = intl.string;
      const t = channel(onConnectToConsole[17]).t;
      if (callback) {
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
      if (callback) {
        let string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      obj[1] = string2Result;
      obj.open(obj);
    }, items1);
    tmp4Result1 = require("onConnectToConsole");
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
  trackDeviceChangedDefault.toggleSelfDeaf();
}
({ AnalyticEvents: map1, PlatformTypes: closure_14 } = ME);
let result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx");

export const GameConsoles = function GameConsoles(arg0) {
  ({ channel: require, connected: importDefault } = arg0);
  const arr = useGameConsoleAccountsDefault();
  let tmp2 = null;
  if (arr.length > 0) {
    const obj = { title: null, hasIcons: true, children: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["mbi/fB"]);
    obj[2] = arr.map((account) => closure_1_17(closure_1_18, { account, channel: closure_0, connected: closure_1 }, account.type));
    tmp2 = jsx(TableRowGroupTitle.TableRowGroup, { title: null, hasIcons: true, children: null });
  }
  return tmp2;
};
export { GameConsoleAccountButton };
export const ActivitiesButton = function ActivitiesButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = React.useContext(dismissPanel(11439)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = React.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      callback({ tab: "app_launcher", source: closure_1_0(closure_1_2[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  let obj = { onPress: callback, icon: null, label: null };
  obj = { IconComponent: openTab(7974).AppsIcon };
  obj[1] = jsx(openTab(6296).TableRowIcon, { IconComponent: openTab(7974).AppsIcon });
  const intl = openTab(1236).intl;
  obj[2] = intl.string(openTab(1236).t.aeuOoh);
  return jsx(openTab(6291).TableRow, { IconComponent: openTab(7974).AppsIcon });
};
export const ChatButton = function ChatButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = React.useContext(dismissPanel(11439)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = React.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      callback({ tab: "chat", source: closure_1_0(closure_1_2[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  let obj = { onPress: callback, icon: null, label: null };
  obj = { IconComponent: openTab(6867).ChatIcon };
  obj[1] = jsx(openTab(6296).TableRowIcon, { IconComponent: openTab(6867).ChatIcon });
  const intl = openTab(1236).intl;
  obj[2] = intl.string(openTab(1236).t["5KxXrK"]);
  return jsx(openTab(6291).TableRow, { IconComponent: openTab(6867).ChatIcon });
};
export const SoundboardButton = function SoundboardButton(channel) {
  const tmp2 = useSoundboardConfigDefault;
  let tmp7 = null;
  if (tmp2Result.visible) {
    let obj = { label: null, onPress: null, disabled: null, icon: null };
    const intl = tmp3(1236).intl;
    obj[0] = intl.string(tmp3(1236).t.ABjMWI);
    obj[1] = tmp5;
    obj[2] = tmp6;
    obj = { IconComponent: null };
    obj[0] = tmp3(7993).SoundboardIcon;
    obj[3] = jsx(tmp3(6296).TableRowIcon, { IconComponent: null });
    tmp7 = jsx(tmp3(6291).TableRow, { IconComponent: null });
  }
  return tmp7;
};
export const ScreenshareButton = function ScreenshareButton(channel) {
  let onPress;
  let isActive;
  const tmp = isActive(10931)(channel.channel);
  onPress = tmp.onPress;
  isActive = tmp.isActive;
  const items = [isActive, onPress];
  ({ imgSource, text, isFeatureEnabled } = tmp);
  const callback = React.useCallback(() => {
    let obj = isActive(closure_1_2[34]);
    obj = { source: "voice controls", was_active: isActive };
    obj.track(closure_1_13.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj);
    onPress();
  }, items);
  return jsx(onPress(6291).TableRow, { disabled: !isFeatureEnabled, onPress: callback, icon: jsx(onPress(6296).TableRowIcon, { source: imgSource }), label: text });
};
export const StreamVolumeItem = function StreamVolumeItem() {
  let obj = initialize;
  const items = [closure_9, closure_10];
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
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t.pEAl4b);
    const tmp4Result = tmp4(12139);
    let fn;
    if (tmpResult.isAndroid()) {
      fn = () => true;
    }
    obj = { label: null };
    obj1 = { onResponderGrant: null, value: null, onValueChange: null, color: null, maxTrackTintColor: null };
    obj1[0] = fn;
    obj1[1] = tmp8;
    obj1[2] = tmp9;
    obj1[3] = tmp4(712).unsafe_rawColors.WHITE;
    obj1[4] = tmp4(712).unsafe_rawColors.PRIMARY_300;
    obj[0] = <tmp4Result onResponderGrant={null} value={null} onValueChange={null} color={null} maxTrackTintColor={null} />;
    obj[2] = jsx(tmp(6291).TableRow, { label: null });
    tmp11Result = tmp11(tmp(6286).TableRowGroup, obj);
    tmpResult = tmp(500);
  }
  return tmp11Result;
};
export const DeafenSwitch = function DeafenSwitch() {
  let obj = initialize;
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => selfDeaf.isSelfDeaf());
  obj = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj = { IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: registerAssetDefault5 };
  obj[0] = jsx(TableRowIcon.TableRowIcon, { IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: registerAssetDefault5 });
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.wjcRFX);
  obj[2] = stateFromStores;
  obj[3] = toggleDeaf;
  const intl2 = getSystemLocale.intl;
  obj[4] = intl2.string(getSystemLocale.t.wjcRFX);
  const intl3 = getSystemLocale.intl;
  obj[5] = intl3.string(getSystemLocale.t.M3VN2U);
  return jsx(TableSwitchRow.TableSwitchRow, { IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: registerAssetDefault5 });
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  ({ channel: require, connected: importDefault } = arg0);
  let obj = _handleToggleVideo;
  obj = {
    icon: jsx(TableRowIcon.TableRowIcon, { source: obj.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = closure_1_0(closure_1_2[44]).showAudioOutputSelector(id.id, closure_1);
    },
    label: null,
    trailing: null
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["A/Ly/2"]);
  obj[3] = jsx(TableRowArrow.TableRowArrow, {});
  return jsx(TableRowInner.TableRow, {
    icon: jsx(TableRowIcon.TableRowIcon, { source: obj.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = closure_1_0(closure_1_2[44]).showAudioOutputSelector(id.id, closure_1);
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
        obj = { onPress: null, icon: null, label: null, trailing: null };
        obj[0] = tmp7;
        obj = { IconComponent: null, source: null };
        obj[0] = tmp(9991).GroupPlusIcon;
        obj[1] = registerAssetDefault3;
        obj[1] = jsx(tmp(6296).TableRowIcon, { IconComponent: null, source: null });
        const intl = tmp(1236).intl;
        obj[2] = intl.string(tmp(1236).t["f1+QIK"]);
        obj[3] = jsx(tmp(6297).TableRowArrow, {});
        tmp8 = jsx(tmp(6291).TableRow, { IconComponent: null, source: null });
      }
    }
  }
  return tmp8;
};
export const HideNonVideoParticipants = function HideNonVideoParticipants(channelId) {
  channelId = channelId.channelId;
  let stateFromStores;
  let obj = channelId(589);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getVoiceParticipantsHidden(channelId));
  const items1 = [channelId, stateFromStores];
  const callback = React.useCallback(() => {
    const result = stateFromStores(closure_1_2[50]).toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  obj = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj = { IconComponent: channelId(7998).VideoIcon, source: stateFromStores(12542) };
  obj[0] = jsx(channelId(6296).TableRowIcon, { IconComponent: channelId(7998).VideoIcon, source: stateFromStores(12542) });
  const intl = channelId(1236).intl;
  obj[1] = intl.string(channelId(1236).t.ZMTRyc);
  obj[2] = stateFromStores;
  obj[3] = callback;
  const intl2 = channelId(1236).intl;
  obj[4] = intl2.string(channelId(1236).t.ZMTRyc);
  const intl3 = channelId(1236).intl;
  obj[5] = intl3.string(channelId(1236).t.MlpCFS);
  return jsx(channelId(7178).TableSwitchRow, { IconComponent: channelId(7998).VideoIcon, source: stateFromStores(12542) });
};
export const HideSelfVideo = function HideSelfVideo() {
  const tmp3 = callback(useHideSelfVideoDefault(id.getId()), 3);
  const _require = tmp4;
  importDefault = tmp3[2];
  let obj = _initialize;
  const items = [closure_7];
  dependencyMap = obj.useStateFromStores(items, () => obj.disableHideSelfStreamAndVideoConfirmationAlert);
  let tmp6 = null;
  if (tmp3[0]) {
    obj = { icon: null, value: null, onValueChange: null, label: null };
    obj = { IconComponent: null };
    obj[0] = tmp5(7976).UserSquareIcon;
    obj[0] = jsx(tmp5(6296).TableRowIcon, { IconComponent: null });
    obj[1] = !tmp4;
    obj[2] = function onValueChange() {
      if (!table) {
        if (!VIDEO) {
          VIDEO = closure_1_15.VIDEO;
          const f114333 = (arg0) => f114333(!VIDEO);
          let obj = callback(table[14]);
          obj = { importer: null };
          obj[0] = function importer() {
            return VIDEO(closure_1_2[16])(closure_1_2[15], closure_1_2.paths).then((arg0) => {
              closure_0 = arg0.default;
              return (arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj.type = closure_0;
                obj.onConfirm = closure_1_1;
                return closure_2_17(closure_0, obj);
              };
            });
          };
          obj.openLazy(obj);
        }
      }
      return f114333(!VIDEO);
    };
    const intl = tmp5(1236).intl;
    obj[3] = intl.string(tmp5(1236).t.MH8ESU);
    tmp6 = jsx(tmp5(7178).TableSwitchRow, { IconComponent: null });
  }
  return tmp6;
};
export const LeaveActivitiesButton = function LeaveActivitiesButton() {
  let obj = { icon: null, label: null, onPress: null };
  obj = { source: registerAssetDefault2 };
  obj[0] = jsx(TableRowIcon.TableRowIcon, { source: registerAssetDefault2 });
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["R/FK4A"]);
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
  return jsx(TableRowInner.TableRow, { source: registerAssetDefault2 });
};
export const ShareActivityLogsButton = function ShareActivityLogsButton() {
  let obj = voiceSettings;
  const shareActivityLogsResult = obj.shareActivityLogs();
  let icon = shareActivityLogsResult.icon;
  ({ label, onPress } = shareActivityLogsResult);
  icon = undefined;
  if (null != icon) {
    obj = { source: null };
    obj[0] = icon;
    icon = tmp4(TableRowIcon.TableRowIcon, obj);
  }
  return jsx(TableRowInner.TableRow, { icon, label, onPress });
};
export const ToggleShowActivitiesDebugOverlay = function ToggleShowActivitiesDebugOverlay() {
  let obj = initialize;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  obj = { icon: null, value: null, onValueChange: null, label: null };
  obj = { source: registerAssetDefault };
  obj[0] = jsx(TableRowIcon.TableRowIcon, { source: registerAssetDefault });
  obj[1] = stateFromStores;
  obj[2] = function onValueChange(visible) {
    let obj = callback(table[59]);
    obj = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj);
  };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["qv5/SP"]);
  return jsx(TableSwitchRow.TableSwitchRow, { source: registerAssetDefault });
};
export const VoiceSettingsButton = function VoiceSettingsButton(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  const callback = React.useCallback(() => {
    const result = guildId(closure_1_2[60]).showVoiceSettingsActionSheet(guildId);
  }, items);
  let obj = { onPress: callback, icon: null, label: null, subLabel: null, trailing: null };
  obj = { IconComponent: guildId(7355).SettingsIcon, source: registerAssetDefault4 };
  obj[1] = jsx(guildId(6296).TableRowIcon, { IconComponent: guildId(7355).SettingsIcon, source: registerAssetDefault4 });
  const intl = guildId(1236).intl;
  obj[2] = intl.string(guildId(1236).t.NiTd0e);
  const intl2 = guildId(1236).intl;
  obj[3] = intl2.string(guildId(1236).t["16SG+O"]);
  obj[4] = jsx(guildId(6297).TableRowArrow, {});
  return jsx(guildId(6291).TableRow, { IconComponent: guildId(7355).SettingsIcon, source: registerAssetDefault4 });
};
export const ReportStreamIssueButton = function ReportStreamIssueButton(stream) {
  let obj = voiceSettings;
  const reportStreamIssueResult = obj.reportStreamIssue(stream.stream);
  let icon = reportStreamIssueResult.icon;
  ({ label, onPress } = reportStreamIssueResult);
  icon = undefined;
  if (null != icon) {
    obj = { source: null };
    obj[0] = icon;
    icon = tmp4(TableRowIcon.TableRowIcon, obj);
  }
  return jsx(TableRowInner.TableRow, { icon, label, onPress });
};
export const RTCDebugPanelButton = function RTCDebugPanelButton() {
  let obj = voiceSettings;
  const rtcDebugPanelResult = obj.rtcDebugPanel(() => {

  });
  let icon = rtcDebugPanelResult.icon;
  ({ label, onPress } = rtcDebugPanelResult);
  icon = undefined;
  if (null != icon) {
    obj = { source: null };
    obj[0] = icon;
    icon = tmp4(TableRowIcon.TableRowIcon, obj);
  }
  return jsx(TableRowInner.TableRow, { icon, label, onPress });
};