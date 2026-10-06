// discord_app/modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import Constants2 from "../../../../../discord_common/js/packages/media-engine/Constants.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowIcon2 from "../../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow2 from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../../../activities/native/EmbeddedActivitiesNativeManager.tsx";
import CallsUtils from "../../../voice_calls/native/CallsUtils.tsx";
import showAudioOutputSelector from "../../../voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx";
import HeadphonesSlashIcon from "../../../../design/components/Icon/native/redesign/generated/HeadphonesSlashIcon.tsx";
import useGameConsoleAccountsDefault from "../../../game_console/useGameConsoleAccounts.tsx";
import useIsVoiceChannelFullDefault from "../../../voice_calls/useIsVoiceChannelFull.tsx";
import ChannelCallConnectingScreen from "../../../video_calls/native/components/ChannelCallConnectingScreen.tsx";
import VolumeSliderDefault from "../../../../components_native/common/VolumeSlider.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09698_AssetRegistry.js";
import useMuteAwareLocalVolumeDefault from "../../../media_engine/useMuteAwareLocalVolume.tsx";
import GroupPlusIcon from "../../../../design/components/Icon/native/redesign/generated/GroupPlusIcon.tsx";
import AssetRegistryDefault2 from "../../../../../_runtime/09816_AssetRegistry.js";
import SoundboardIcon from "../../../../design/components/Icon/native/redesign/generated/SoundboardIcon.tsx";
import AssetRegistryDefault3 from "../../../../../_runtime/12743_AssetRegistry.js";
import useCanInviteMembers from "../hooks/useCanInviteMembers.tsx";
import useInviteMembersCallback from "../hooks/useInviteMembersCallback.tsx";
import AssetRegistryDefault4 from "../../../../../_runtime/17285_AssetRegistry.js";
import AssetRegistryDefault5 from "../../../../../_runtime/17286_AssetRegistry.js";
import useSoundboardConfig from "../hooks/useSoundboardConfig.tsx";
import HideSelfStreamAndVideoConstants from "../../../calls/HideSelfStreamAndVideoConstants.tsx";
import useHideSelfVideoDefault from "../../../calls/useHideSelfVideo.tsx";
import ChannelCallUtils from "../../../video_calls/native/ChannelCallUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import UnsyncedUserSettingsStore from "../../../user_settings/UnsyncedUserSettingsStore.tsx";
import ChannelCallLifecycleStore from "../../../video_calls/native/ChannelCallLifecycleStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import Constants from "../../../../Constants.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useSoundboardConfigDefault = useSoundboardConfig;
let _require,
  channelId,
  currentEmbeddedActivity,
  dependencyMap,
  f148626,
  guildId,
  importDefault,
  lastActiveStream,
  obj1,
  openLazyResult,
  openTab,
  stream;

let closure_14;
let map1;
function importer() {
  let onConfirm;
  let type;
  const promise = closure_2_0(paths[16])(paths[15], paths.paths);
  return promise.then((result) => {
    closure_0 = result.default;
    return (arg0) => {
      const obj = { type, onConfirm };
      const merged = Object.assign(arg0);
      return closure_3_17(closure_0, obj);
    };
  });
}
function getGameConsoleLabel(connected, type) {
  let tmp2;
  if (type === constants2.XBOX) {
    let string3Result;
    const intl3 = intl4.intl;
    const string3 = intl3.string;
    const t3 = intl4.t;
    if (connected) {
      string3Result = string3(t3["qVE/VF"]);
    } else {
      string3Result = string3(t3.E8euSk);
    }
    tmp2 = string3Result;
  } else if (type === constants2.PLAYSTATION) {
    let string2Result;
    const intl2 = intl4.intl;
    const string2 = intl2.string;
    const t2 = intl4.t;
    if (connected) {
      string2Result = string2(t2.vzfxmY);
    } else {
      string2Result = string2(t2.QxEYDj);
    }
    tmp2 = string2Result;
  } else if (type === constants2.PLAYSTATION_STAGING) {
    let stringResult;
    const intl = intl4.intl;
    const string = intl.string;
    const t = intl4.t;
    if (connected) {
      stringResult = string(t.BDiXtV);
    } else {
      stringResult = string(t["bhdB9+"]);
    }
    tmp2 = stringResult;
  }
  return tmp2;
}
function toggleDeaf() {
  const obj = AudioActionCreatorsDefault;
  obj.toggleSelfDeaf();
}
({ AnalyticEvents: map1, PlatformTypes: closure_14 } = Constants);
const constants3 = HideSelfStreamAndVideoConstants.SelfStreamAndVideoAlertType;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const obj = channel(576);
      const cResult = obj.c(4);
      channel = channel.channel;
      const connected = channel.connected;
      const arr = connected(9457)();
      if (cResult[0] === channel) {
        if (cResult[1] === connected) {
          let tmp4;
          if (cResult[2] === arr) {
            tmp4 = cResult[3];
          }
          return tmp4;
        }
      }
      let tmp5 = null;
      if (arr.length > 0) {
        const TableRowGroup = tmp(6081).TableRowGroup;
        const intl = tmp(1126).intl;
        tmp5 = (
          <TableRowGroup title={intl.string(channel(1126).t["mbi/fB"])} hasIcons>
            {arr.map((account) => (
              <closure_19 key={account.type} account={account} channel={channel} connected={connected} />
            ))}
          </TableRowGroup>
        );
      }
      cResult[0] = channel;
      cResult[1] = connected;
      cResult[2] = arr;
      cResult[3] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      let channel;
      let connected;
      let require;
      ({ channel: require, connected: importDefault } = arg0);
      const arr = useGameConsoleAccountsDefault();
      let tmp2 = null;
      if (arr.length > 0) {
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        const intl = intl4.intl;
        tmp2 = (
          <TableRowGroup title={intl.string(intl4.t["mbi/fB"])} hasIcons>
            {arr.map((account) => (
              <closure_19 key={account.type} account={account} channel={require} connected={importDefault} />
            ))}
          </TableRowGroup>
        );
      }
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let account;
      let closure_1;
      let connected;
      let first;
      let onConnectToConsole;
      let tmp8;
      const tmp2 = onConnectToConsole;
      let obj = channel(onConnectToConsole[19]);
      const cResult = obj.c(19);
      channel = channel.channel;
      ({ account, connected } = channel);
      const tmp4 = require("useIsVoiceChannelFull")(channel);
      const obj2 = channel(onConnectToConsole[22]);
      const tmp5 = obj2.useIsVoiceChannelLocked(channel) && !channel.isPrivate();
      importDefault = tmp5;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [VoiceStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        const fn = function t() {
          return VoiceStateStore.isInChannel(channel.id);
        };
        cResult[1] = channel.id;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = channel(tmp2[23]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      if (cResult[3] !== tmp5) {
        class T {
          constructor() {
            let string2Result;
            let stringResult;
            let tmp6;
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            const intl = intl4.intl;
            const string = intl.string;
            const t = intl4.t;
            if (closure_1) {
              stringResult = string(t.rimHDW);
              tmp6 = require;
            } else {
              stringResult = string(t.rZfiNq);
              tmp6 = require;
            }
            const obj = { key: stringResult, content: string2Result };
            const intl2 = tmp6(1126).intl;
            const string2 = intl2.string;
            const t2 = tmp6(1126).t;
            if (closure_1) {
              string2Result = string2(t2.rimHDW);
            } else {
              string2Result = string2(t2.rZfiNq);
            }
            open(obj);
          }
        }
        cResult[3] = tmp5;
        cResult[4] = T;
      } else {
        class T {
          constructor() {
            let string2Result;
            let stringResult;
            let tmp6;
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            const intl = intl4.intl;
            const string = intl.string;
            const t = intl4.t;
            if (closure_1) {
              stringResult = string(t.rimHDW);
              tmp6 = require;
            } else {
              stringResult = string(t.rZfiNq);
              tmp6 = require;
            }
            const obj = { key: stringResult, content: string2Result };
            const intl2 = tmp6(1126).intl;
            const string2 = intl2.string;
            const t2 = tmp6(1126).t;
            if (closure_1) {
              string2Result = string2(t2.rimHDW);
            } else {
              string2Result = string2(t2.rZfiNq);
            }
            open(obj);
          }
        }
      }
      const tmpResult2 = channel(tmp2[25]);
      onConnectToConsole = tmpResult2.useOnConnectToConsole(channel, account);
      if (cResult[5] !== onConnectToConsole) {
        class R {
          constructor() {
            onConnectToConsole();
          }
        }
        cResult[5] = onConnectToConsole;
        cResult[6] = R;
      } else {
        class R {
          constructor() {
            onConnectToConsole();
          }
        }
      }
      if (cResult[7] === account.type) {
        class R {
          constructor() {
            onConnectToConsole();
          }
        }
        if (cResult[10] !== account.type) {
          class R {
            constructor() {
              onConnectToConsole();
            }
          }
          cResult[10] = account.type;
          cResult[11] = tmp17;
        } else {
          class R {
            constructor() {
              onConnectToConsole();
            }
          }
        }
        if (null == tmp14) {
          class R {
            constructor() {
              onConnectToConsole();
            }
          }
        } else {
          class R {
            constructor() {
              onConnectToConsole();
            }
          }
          if ((!stateFromStores && tmp4) || tmp5) {
            class R {
              constructor() {
                onConnectToConsole();
              }
            }
          }
          if (cResult[14] === ((!stateFromStores && tmp4) || tmp5)) {
            class R {
              constructor() {
                onConnectToConsole();
              }
            }
          }
          cResult[14] = (!stateFromStores && tmp4) || tmp5;
          cResult[15] = tmp14;
          cResult[16] = tmp19;
          cResult[17] = R;
          cResult[18] = jsx(channel(tmp2[28]).TableRow, {
            icon: tmp19,
            label: tmp14,
            disabled: (!stateFromStores && tmp4) || tmp5,
            onPress: R,
          });
          const tmp22 = jsx(channel(tmp2[28]).TableRow, {
            icon: tmp19,
            label: tmp14,
            disabled: (!stateFromStores && tmp4) || tmp5,
            onPress: R,
          });
        }
      }
      cResult[7] = account.type;
      cResult[8] = connected;
      cResult[9] = getGameConsoleLabel(connected, account.type);
      const tmp15 = getGameConsoleLabel(connected, account.type);
    }
  : (channel) => {
      let closure_1;
      channel = channel.channel;
      const account = channel.account;
      importDefault = undefined;
      let onConnectToConsole;
      const tmp2 = onConnectToConsole;
      const connected = channel.connected;
      const tmp3 = require("useIsVoiceChannelFull")(channel);
      let obj = channel(onConnectToConsole[22]);
      const tmp5 = obj.useIsVoiceChannelLocked(channel) && !channel.isPrivate();
      const tmp = importDefault;
      importDefault = tmp5;
      const items = [VoiceStateStore];
      const tmp4Result = channel(tmp2[23]);
      const stateFromStores = tmp4Result.useStateFromStores(items, () => VoiceStateStore.isInChannel(channel.id));
      const items1 = [tmp5];
      const callback = react.useCallback(() => {
        let string2Result;
        let stringResult;
        let tmp6;
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        const intl = intl4.intl;
        const string = intl.string;
        const t = intl4.t;
        if (closure_1) {
          stringResult = string(t.rimHDW);
          tmp6 = require;
        } else {
          stringResult = string(t.rZfiNq);
          tmp6 = require;
        }
        const obj = { key: stringResult, content: string2Result };
        const intl2 = tmp6(1126).intl;
        const string2 = intl2.string;
        const t2 = tmp6(1126).t;
        if (closure_1) {
          string2Result = string2(t2.rimHDW);
        } else {
          string2Result = string2(t2.rZfiNq);
        }
        open(obj);
      }, items1);
      const tmp4Result2 = channel(tmp2[25]);
      onConnectToConsole = tmp4Result2.useOnConnectToConsole(channel, account);
      const items2 = [onConnectToConsole];
      let callback1 = react.useCallback(() => {
        onConnectToConsole();
      }, items2);
      const tmp11 = getGameConsoleLabel(connected, account.type);
      const tmp12 = tmp(tmp2[26])(account.type);
      let tmp14Result2 = null;
      if (null != tmp11) {
        let tmp14Result;
        const TableRow = tmp4(tmp2[28]).TableRow;
        if (null != tmp12) {
          tmp14Result = jsx(tmp4(tmp2[27]).TableRowIcon, { source: tmp12 });
        }
        if ((!stateFromStores && tmp3) || tmp5) {
          callback1 = callback;
        }
        tmp14Result2 = (
          <TableRow
            icon={tmp14Result}
            label={tmp11}
            disabled={(!stateFromStores && tmp3) || tmp5}
            onPress={callback1}
          />
        );
      }
      return tmp14Result2;
    };
let closure_19 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (openTab) => {
      let dismissPanel;
      const tmp = openTab;
      let obj = openTab(576);
      const cResult = obj.c(7);
      openTab = openTab.openTab;
      dismissPanel = react.useContext(dismissPanel(11915)).dismissPanel;
      if (cResult[0] === dismissPanel) {
        let tmp4;
        let tmp7;
        let tmp6;
        let tmp11;
        if (cResult[1] === openTab) {
          tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const TableRowIcon = tmp(6006).TableRowIcon;
          const tmp9 = <TableRowIcon IconComponent={tmp(5897).AppsIcon} />;
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.aeuOoh);
          cResult[3] = tmp9;
          cResult[4] = stringResult;
          tmp7 = stringResult;
          tmp6 = tmp9;
        } else {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        if (cResult[5] !== tmp4) {
          const tmp13 = jsx(tmp(6000).TableRow, { onPress: tmp4, icon: tmp6, label: tmp7 });
          cResult[5] = tmp4;
          cResult[6] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[6];
        }
        return tmp11;
      }
      const fn = function t() {
        dismissPanel();
        const timerId = setTimeout(() => {
          const obj = {
            tab: "app_launcher",
            source: openTab(dependencyMap[30]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS,
          };
          closure_1_0(obj);
        }, 200);
      };
      cResult[0] = dismissPanel;
      cResult[1] = openTab;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : (openTab) => {
      openTab = openTab.openTab;
      let dismissPanel;
      dismissPanel = react.useContext(dismissPanel(11915)).dismissPanel;
      const items = [dismissPanel, openTab];
      const callback = react.useCallback(() => {
        dismissPanel();
        const timerId = setTimeout(() => {
          const obj = {
            tab: "app_launcher",
            source: openTab(dependencyMap[30]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS,
          };
          closure_1_0(obj);
        }, 200);
      }, items);
      const TableRow = openTab(6000).TableRow;
      ({ IconComponent: openTab(5897).AppsIcon });
      const TableRowIcon = openTab(6006).TableRowIcon;
      const intl = openTab(1126).intl;
      return <TableRow onPress={callback} icon={null} label={intl.string(openTab(1126).t.aeuOoh)} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (openTab) => {
      let dismissPanel;
      const tmp = openTab;
      let obj = openTab(576);
      const cResult = obj.c(7);
      openTab = openTab.openTab;
      dismissPanel = react.useContext(dismissPanel(11915)).dismissPanel;
      if (cResult[0] === dismissPanel) {
        let tmp4;
        let tmp7;
        let tmp6;
        let tmp11;
        if (cResult[1] === openTab) {
          tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const TableRowIcon = tmp(6006).TableRowIcon;
          const tmp9 = <TableRowIcon IconComponent={tmp(5862).ChatIcon} />;
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t["5KxXrK"]);
          cResult[3] = tmp9;
          cResult[4] = stringResult;
          tmp7 = stringResult;
          tmp6 = tmp9;
        } else {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        if (cResult[5] !== tmp4) {
          const tmp13 = jsx(tmp(6000).TableRow, { onPress: tmp4, icon: tmp6, label: tmp7 });
          cResult[5] = tmp4;
          cResult[6] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[6];
        }
        return tmp11;
      }
      const fn = function t() {
        dismissPanel();
        const timerId = setTimeout(() => {
          const obj = { tab: "chat", source: openTab(dependencyMap[30]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS };
          closure_1_0(obj);
        }, 200);
      };
      cResult[0] = dismissPanel;
      cResult[1] = openTab;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : (openTab) => {
      openTab = openTab.openTab;
      let dismissPanel;
      dismissPanel = react.useContext(dismissPanel(11915)).dismissPanel;
      const items = [dismissPanel, openTab];
      const callback = react.useCallback(() => {
        dismissPanel();
        const timerId = setTimeout(() => {
          const obj = { tab: "chat", source: openTab(dependencyMap[30]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS };
          closure_1_0(obj);
        }, 200);
      }, items);
      const TableRow = openTab(6000).TableRow;
      ({ IconComponent: openTab(5862).ChatIcon });
      const TableRowIcon = openTab(6006).TableRowIcon;
      const intl = openTab(1126).intl;
      return <TableRow onPress={callback} icon={null} label={intl.string(openTab(1126).t["5KxXrK"])} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let disabled;
      let disabledAccessibilityHint;
      let handlePress;
      let visible;
      const obj = react2;
      const cResult = obj.c(5);
      channel = channel.channel;
      const tmp4 = useSoundboardConfigDefault;
      ({ visible, handlePress, disabled, disabledAccessibilityHint } = tmp4(
        channel.id,
        useSoundboardConfig.SoundboardButtonLocation.VOICE_CONTROLS,
      ));
      tmp4(channel.id, useSoundboardConfig.SoundboardButtonLocation.VOICE_CONTROLS);
      if (cResult[0] === disabled) {
        if (cResult[1] === disabledAccessibilityHint) {
          if (cResult[2] === handlePress) {
            let tmp6;
            if (cResult[3] === visible) {
              tmp6 = cResult[4];
            }
            return tmp6;
          }
        }
      }
      let tmp7 = null;
      if (visible) {
        const TableRow = TableRow2.TableRow;
        const intl = intl4.intl;
        ({ IconComponent: SoundboardIcon.SoundboardIcon });
        const TableRowIcon = TableRowIcon2.TableRowIcon;
        tmp7 = (
          <TableRow
            label={intl.string(intl4.t.ABjMWI)}
            onPress={handlePress}
            disabled={disabled}
            accessibilityHint={disabledAccessibilityHint}
            icon={null}
          />
        );
      }
      cResult[0] = disabled;
      cResult[1] = disabledAccessibilityHint;
      cResult[2] = handlePress;
      cResult[3] = visible;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    }
  : (channel) => {
      channel = channel.channel;
      let tmp8 = null;
      const tmp2 = useSoundboardConfigDefault;
      const tmp2Result = tmp2(channel.id, useSoundboardConfig.SoundboardButtonLocation.VOICE_CONTROLS);
      if (tmp2Result.visible) {
        const TableRow = TableRow2.TableRow;
        const intl = intl4.intl;
        ({ IconComponent: SoundboardIcon.SoundboardIcon });
        const TableRowIcon = TableRowIcon2.TableRowIcon;
        tmp8 = (
          <TableRow
            label={intl.string(intl4.t.ABjMWI)}
            onPress={tmp5}
            disabled={tmp6}
            accessibilityHint={tmp7}
            icon={null}
          />
        );
      }
      return tmp8;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let imgSource;
      let isActive;
      let onPress;
      let text;
      let obj = onPress(576);
      const cResult = obj.c(10);
      const tmp4 = isActive(9644)(channel.channel);
      onPress = tmp4.onPress;
      ({ imgSource, text, isActive } = tmp4);
      if (cResult[0] === isActive) {
        let tmp6;
        let tmp8;
        if (cResult[1] === onPress) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== imgSource) {
          const tmp10 = jsx(onPress(6006).TableRowIcon, { source: imgSource });
          cResult[3] = imgSource;
          cResult[4] = tmp10;
          tmp8 = tmp10;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp6) {
          if (cResult[6] === !tmp5) {
            if (cResult[7] === tmp8) {
              let tmp11;
              if (cResult[8] === text) {
                tmp11 = cResult[9];
              }
              return tmp11;
            }
          }
        }
        const tmp13 = jsx(onPress(6000).TableRow, { disabled: !tmp5, onPress: tmp6, icon: tmp8, label: text });
        cResult[5] = tmp6;
        cResult[6] = !tmp5;
        cResult[7] = tmp8;
        cResult[8] = text;
        cResult[9] = tmp13;
        tmp11 = tmp13;
      }
      const fn = function o() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { source: "voice controls", was_active: isActive };
        obj.track(map1.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj2);
        onPress();
      };
      cResult[0] = isActive;
      cResult[1] = onPress;
      cResult[2] = fn;
      tmp6 = fn;
    }
  : (channel) => {
      let imgSource;
      let isFeatureEnabled;
      let text;
      let isActive;
      const tmp = isActive(9644)(channel.channel);
      const onPress = tmp.onPress;
      isActive = tmp.isActive;
      const items = [isActive, onPress];
      ({ imgSource, text, isFeatureEnabled } = tmp);
      const callback = react.useCallback(() => {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { source: "voice controls", was_active: isActive };
        obj.track(map1.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj2);
        onPress();
      }, items);
      const TableRow = onPress(6000).TableRow;
      return <TableRow disabled={!isFeatureEnabled} onPress={callback} icon={null} label={text} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let effectiveVolume;
      let handleVolumeChange;
      let id;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ApplicationStreamingStore, AuthenticationStore];
        const fn = function o() {
          lastActiveStream = lastActiveStream.getLastActiveStream();
          let tmp2 = null;
          if (null != lastActiveStream) {
            tmp2 = null;
            if (lastActiveStream.ownerId !== id.getId()) {
              tmp2 = lastActiveStream;
            }
          }
          return tmp2;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      let ownerId;
      const tmp10 = useMuteAwareLocalVolumeDefault;
      if (stateFromStores != null) {
        ownerId = stateFromStores.ownerId;
      }
      ({ effectiveVolume, handleVolumeChange } = tmp10(ownerId, MediaEngineContextTypes.STREAM));
      let tmp13 = null;
      tmp10(ownerId, MediaEngineContextTypes.STREAM);
      if (null != stateFromStores) {
        let tmp14;
        let tmp16;
        let tmp17;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl4.intl;
          const stringResult = intl.string(intl4.t.pEAl4b);
          cResult[2] = stringResult;
          tmp14 = stringResult;
        } else {
          tmp14 = cResult[2];
        }
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let fn2;
          const tmpResult2 = PlatformUtils;
          if (tmpResult2.isAndroid()) {
            fn2 = () => true;
          }
          cResult[3] = fn2;
          tmp16 = fn2;
        } else {
          tmp16 = cResult[3];
        }
        const _Symbol3 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl4.intl;
          const stringResult1 = intl2.string(intl4.t.pEAl4b);
          cResult[4] = stringResult1;
          tmp17 = stringResult1;
        } else {
          tmp17 = cResult[4];
        }
        if (cResult[5] === effectiveVolume) {
          let tmp19;
          if (cResult[6] === handleVolumeChange) {
            tmp19 = cResult[7];
          }
          tmp13 = tmp19;
        }
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        const TableRow = TableRow2.TableRow;
        ({
          onResponderGrant: tmp16,
          value: effectiveVolume,
          onValueChange: handleVolumeChange,
          color: nativeDefault.unsafe_rawColors.WHITE,
          maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300,
          accessibilityLabel: tmp17,
        });
        VolumeSliderDefault;
        const tmp22 = (
          <TableRowGroup title={tmp14} hasIcons={false}>
            {null}
          </TableRowGroup>
        );
        cResult[5] = effectiveVolume;
        cResult[6] = handleVolumeChange;
        cResult[7] = tmp22;
        tmp19 = tmp22;
      }
      return tmp13;
    }
  : () => {
      let id;
      let intl2;
      const items = [ApplicationStreamingStore, AuthenticationStore];
      const obj = get_initialized;
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
      const tmp5 = useMuteAwareLocalVolumeDefault;
      if (stateFromStores != null) {
        ownerId = stateFromStores.ownerId;
      }
      tmp5(ownerId, MediaEngineContextTypes.STREAM);
      let tmp11Result = null;
      if (null != stateFromStores) {
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        const intl = intl4.intl;
        const TableRow = TableRow2.TableRow;
        VolumeSliderDefault;
        let fn;
        const tmpResult = PlatformUtils;
        if (tmpResult.isAndroid()) {
          fn = () => true;
        }
        ({
          onResponderGrant: fn,
          value: tmp8,
          onValueChange: tmp9,
          color: nativeDefault.unsafe_rawColors.WHITE,
          maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300,
          accessibilityLabel: intl2.string(intl4.t.pEAl4b),
        });
        intl2 = intl4.intl;
        tmp11Result = (
          <TableRowGroup title={intl.string(intl4.t.pEAl4b)} hasIcons={false}>
            {null}
          </TableRowGroup>
        );
      }
      return tmp11Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let selfDeaf;
      let tmp14;
      let tmp15;
      let tmp18;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function o() {
          return selfDeaf.isSelfDeaf();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const TableRowIcon = TableRowIcon2.TableRowIcon;
        const tmp12 = (
          <TableRowIcon IconComponent={HeadphonesSlashIcon.HeadphonesSlashIcon} source={AssetRegistryDefault5} />
        );
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t.wjcRFX);
        cResult[2] = tmp12;
        cResult[3] = stringResult;
        tmp9 = stringResult;
        tmp8 = tmp12;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl4.intl;
        const stringResult1 = intl2.string(intl4.t.wjcRFX);
        const intl3 = intl4.intl;
        const stringResult2 = intl3.string(intl4.t.M3VN2U);
        cResult[4] = stringResult1;
        cResult[5] = stringResult2;
        tmp15 = stringResult2;
        tmp14 = stringResult1;
      } else {
        tmp14 = cResult[4];
        tmp15 = cResult[5];
      }
      if (cResult[6] !== stateFromStores) {
        const tmp21 = jsx(TableSwitchRow2.TableSwitchRow, {
          icon: tmp8,
          accessibilityHint: tmp9,
          value: stateFromStores,
          onValueChange: toggleDeaf,
          label: tmp14,
          subLabel: tmp15,
        });
        cResult[6] = stateFromStores;
        cResult[7] = tmp21;
        tmp18 = tmp21;
      } else {
        tmp18 = cResult[7];
      }
      return tmp18;
    }
  : () => {
      let selfDeaf;
      const items = [MediaEngineStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => selfDeaf.isSelfDeaf());
      const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      ({ IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: AssetRegistryDefault5 });
      const TableRowIcon = TableRowIcon2.TableRowIcon;
      const intl = intl4.intl;
      const intl2 = intl4.intl;
      const intl3 = intl4.intl;
      return (
        <TableSwitchRow
          icon={null}
          accessibilityHint={intl.string(intl4.t.wjcRFX)}
          value={stateFromStores}
          onValueChange={toggleDeaf}
          label={intl2.string(intl4.t.wjcRFX)}
          subLabel={intl3.string(intl4.t.M3VN2U)}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp4;
      let obj = channel(576);
      const cResult = obj.c(10);
      channel = channel.channel;
      const connected = channel.connected;
      const obj2 = channel(9334);
      const routeSource = obj2.useMaskedSpeakerStates().routeSource;
      if (cResult[0] !== routeSource) {
        const tmp6 = jsx(channel(6006).TableRowIcon, { source: routeSource });
        cResult[0] = routeSource;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === channel.id) {
        let tmp7;
        let tmp10;
        let tmp9;
        if (cResult[3] === connected) {
          tmp7 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(channel(1126).t["A/Ly/2"]);
          const tmp13 = jsx(channel(6007).TableRowArrow, {});
          cResult[5] = stringResult;
          cResult[6] = tmp13;
          tmp10 = tmp13;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[5];
          tmp10 = cResult[6];
        }
        if (cResult[7] === tmp4) {
          let tmp14;
          if (cResult[8] === tmp7) {
            tmp14 = cResult[9];
          }
          return tmp14;
        }
        const tmp16 = jsx(channel(6000).TableRow, { icon: tmp4, onPress: tmp7, label: tmp9, trailing: tmp10 });
        cResult[7] = tmp4;
        cResult[8] = tmp7;
        cResult[9] = tmp16;
        tmp14 = tmp16;
      }
      const fn = function t() {
        const obj = showAudioOutputSelector;
        const result = obj.showAudioOutputSelector(channel.id, connected);
      };
      cResult[2] = channel.id;
      cResult[3] = connected;
      cResult[4] = fn;
      tmp7 = fn;
    }
  : (arg0) => {
      let id;
      let require;
      ({ channel: require, connected: importDefault } = arg0);
      let obj = CallsUtils;
      const routeSource = obj.useMaskedSpeakerStates().routeSource;
      const TableRow = TableRow2.TableRow;
      const intl = intl4.intl;
      return (
        <TableRow
          icon={null}
          onPress={function onPress() {
            const obj = showAudioOutputSelector;
            const result = obj.showAudioOutputSelector(require.id, importDefault);
          }}
          label={intl.string(intl4.t["A/Ly/2"])}
          trailing={null}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let connected;
      const obj = react2;
      const cResult = obj.c(5);
      ({ channel, connected } = arg0);
      const obj2 = useCanInviteMembers;
      const canInviteMembers = obj2.useCanInviteMembers(channel.id);
      const tmp6 = useIsVoiceChannelFullDefault(channel);
      const obj3 = useInviteMembersCallback;
      const inviteMembersCallback = obj3.useInviteMembersCallback(channel.id);
      if (cResult[0] === canInviteMembers) {
        if (cResult[1] === connected) {
          if (cResult[2] === tmp6) {
            let tmp8;
            if (cResult[3] === inviteMembersCallback) {
              tmp8 = cResult[4];
            }
            return tmp8;
          }
        }
      }
      let tmp9 = null;
      if (!tmp6) {
        tmp9 = null;
        if (canInviteMembers) {
          tmp9 = null;
          if (connected) {
            const TableRow = TableRow2.TableRow;
            ({ IconComponent: GroupPlusIcon.GroupPlusIcon, source: AssetRegistryDefault });
            const TableRowIcon = TableRowIcon2.TableRowIcon;
            const intl = intl4.intl;
            tmp9 = (
              <TableRow
                onPress={inviteMembersCallback}
                icon={null}
                label={intl.string(intl4.t["f1+QIK"])}
                trailing={null}
              />
            );
          }
        }
      }
      cResult[0] = canInviteMembers;
      cResult[1] = connected;
      cResult[2] = tmp6;
      cResult[3] = inviteMembersCallback;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (channel) => {
      channel = channel.channel;
      const connected = channel.connected;
      const obj = useCanInviteMembers;
      const canInviteMembers = obj.useCanInviteMembers(channel.id);
      const tmp5 = useIsVoiceChannelFullDefault(channel);
      useInviteMembersCallback;
      let tmp8 = null;
      if (!tmp5) {
        tmp8 = null;
        if (canInviteMembers) {
          tmp8 = null;
          if (connected) {
            const TableRow = TableRow2.TableRow;
            ({ IconComponent: GroupPlusIcon.GroupPlusIcon, source: AssetRegistryDefault });
            const TableRowIcon = TableRowIcon2.TableRowIcon;
            const intl = intl4.intl;
            tmp8 = <TableRow onPress={tmp7} icon={null} label={intl.string(intl4.t["f1+QIK"])} trailing={null} />;
          }
        }
      }
      return tmp8;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp6;
      let obj = channelId(576);
      const cResult = obj.c(13);
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function t() {
          return ChannelRTCStore.getVoiceParticipantsHidden(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = channelId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === channelId) {
        let tmp8;
        let tmp10;
        let tmp9;
        let tmp16;
        let tmp15;
        if (cResult[4] === stateFromStores) {
          tmp8 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const TableRowIcon = tmp(6006).TableRowIcon;
          const tmp13 = <TableRowIcon IconComponent={channelId(11247).VideoIcon} source={stateFromStores(9643)} />;
          const intl = tmp(1126).intl;
          const stringResult = intl.string(channelId(1126).t.ZMTRyc);
          cResult[6] = tmp13;
          cResult[7] = stringResult;
          tmp10 = stringResult;
          tmp9 = tmp13;
        } else {
          tmp9 = cResult[6];
          tmp10 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(channelId(1126).t.ZMTRyc);
          const intl3 = tmp(1126).intl;
          const stringResult2 = intl3.string(channelId(1126).t.MlpCFS);
          cResult[8] = stringResult1;
          cResult[9] = stringResult2;
          tmp16 = stringResult2;
          tmp15 = stringResult1;
        } else {
          tmp15 = cResult[8];
          tmp16 = cResult[9];
        }
        if (cResult[10] === tmp8) {
          let tmp19;
          if (cResult[11] === stateFromStores) {
            tmp19 = cResult[12];
          }
          return tmp19;
        }
        const tmp21 = jsx(channelId(6705).TableSwitchRow, {
          icon: tmp9,
          accessibilityHint: tmp10,
          value: stateFromStores,
          onValueChange: tmp8,
          label: tmp15,
          subLabel: tmp16,
        });
        cResult[10] = tmp8;
        cResult[11] = stateFromStores;
        cResult[12] = tmp21;
        tmp19 = tmp21;
      }
      const fn2 = function u() {
        const obj = ChannelRTCActionCreatorsDefault;
        const result = obj.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
      };
      cResult[3] = channelId;
      cResult[4] = stateFromStores;
      cResult[5] = fn2;
      tmp8 = fn2;
    }
  : (channelId) => {
      channelId = channelId.channelId;
      let obj = channelId(504);
      const items = [ChannelRTCStore];
      const stateFromStores = obj.useStateFromStores(items, () =>
        ChannelRTCStore.getVoiceParticipantsHidden(channelId),
      );
      const items1 = [channelId, stateFromStores];
      const callback = react.useCallback(() => {
        const obj = ChannelRTCActionCreatorsDefault;
        const result = obj.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
      }, items1);
      const TableSwitchRow = channelId(6705).TableSwitchRow;
      ({ IconComponent: channelId(11247).VideoIcon, source: stateFromStores(9643) });
      const TableRowIcon = channelId(6006).TableRowIcon;
      const intl = channelId(1126).intl;
      const intl2 = channelId(1126).intl;
      const intl3 = channelId(1126).intl;
      return (
        <TableSwitchRow
          icon={null}
          accessibilityHint={intl.string(channelId(1126).t.ZMTRyc)}
          value={stateFromStores}
          onValueChange={callback}
          label={intl2.string(channelId(1126).t.ZMTRyc)}
          subLabel={intl3.string(channelId(1126).t.MlpCFS)}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp14 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let closure_1;
      let first;
      let require;
      let stateFromStores;
      let tmp11;
      let tmp12;
      let tmp8;
      let tmp9;
      let obj = require("react");
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const id = AuthenticationStore.getId();
        cResult[0] = id;
        first = id;
      } else {
        first = cResult[0];
      }
      const tmp7 = _slicedToArray(require("useHideSelfVideo")(first), 3);
      [tmp8, tmp9] = tmp7;
      require = tmp9;
      importDefault = tmp10;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UnsyncedUserSettingsStore];
        const fn = function s() {
          return UnsyncedUserSettingsStore.disableHideSelfStreamAndVideoConfirmationAlert;
        };
        cResult[1] = items;
        cResult[2] = fn;
        tmp12 = fn;
        tmp11 = items;
      } else {
        tmp11 = cResult[1];
        tmp12 = cResult[2];
      }
      const tmpResult = require("get initialized");
      stateFromStores = tmpResult.useStateFromStores(tmp11, tmp12);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === tmp7[2]) {
          let tmp15;
          if (cResult[5] === tmp9) {
            tmp15 = cResult[6];
          }
          if (cResult[7] === tmp15) {
            if (cResult[8] === tmp9) {
              let tmp16;
              if (cResult[9] === tmp8) {
                tmp16 = cResult[10];
              }
              return tmp16;
            }
          }
          let tmp17 = null;
          if (tmp8) {
            const TableSwitchRow = tmp(tmp2[44]).TableSwitchRow;
            ({ IconComponent: require("UserSquareIcon").UserSquareIcon });
            const TableRowIcon = tmp(tmp2[27]).TableRowIcon;
            const intl = tmp(tmp2[17]).intl;
            tmp17 = (
              <TableSwitchRow
                icon={null}
                value={!tmp9}
                onValueChange={tmp15}
                label={intl.string(require("intl").t.MH8ESU)}
              />
            );
          }
          cResult[7] = tmp15;
          cResult[8] = tmp9;
          cResult[9] = tmp8;
          cResult[10] = tmp17;
          tmp16 = tmp17;
        }
      }
      class R {
        constructor() {
          tmp = closure_2;
          if (!tmp) {
            tmp2 = closure_0;
            if (!tmp2) {
              tmp3 = closure_15;
              VIDEO = closure_15.VIDEO;
              f148626 = () => f148626(!VIDEO);
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj = closure_1(closure_2[14]);
              obj1 = { importer: null, isDismissable: false };
              obj1.importer = function importer() {
                let onConfirm;
                let type;
                const promise = closure_2_0(paths[16])(paths[15], paths.paths);
                return promise.then(() => {
                  /* body not rendered: F148621 */
                });
              };
              openLazyResult = obj.openLazy(obj1);
              return;
            }
          }
          return closure_1(!closure_0);
        }
      }
      cResult[3] = stateFromStores;
      cResult[4] = tmp7[2];
      cResult[5] = tmp9;
      cResult[6] = R;
      tmp15 = R;
    }
  : () => {
      let closure_1;
      let closure_2;
      const tmp2 = useHideSelfVideoDefault;
      const tmp3 = _slicedToArray(tmp2(AuthenticationStore.getId()), 3);
      _require = tmp5;
      importDefault = tmp3[2];
      const first = tmp3[0];
      let obj = require("get initialized");
      const items = [UnsyncedUserSettingsStore];
      dependencyMap = obj.useStateFromStores(
        items,
        () => UnsyncedUserSettingsStore.disableHideSelfStreamAndVideoConfirmationAlert,
      );
      let tmp7 = null;
      if (first) {
        const TableSwitchRow = tmp6(6705).TableSwitchRow;
        ({ IconComponent: require("UserSquareIcon").UserSquareIcon });
        const TableRowIcon = tmp6(6006).TableRowIcon;
        const intl = tmp6(1126).intl;
        tmp7 = (
          <TableSwitchRow
            icon={null}
            value={!tmp3[1]}
            onValueChange={function onValueChange() {
              if (!paths) {
                if (!closure_0) {
                  const VIDEO = constants.VIDEO;
                  const f148627 = () => f148627(!VIDEO);
                  let obj = actions_AlertActionCreatorsDefault;
                  const obj2 = { importer, isDismissable: false };
                  obj.openLazy(obj2);
                }
              }
              return closure_1(!closure_0);
            }}
            label={intl.string(require("intl").t.MH8ESU)}
          />
        );
      }
      return tmp7;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp15 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp5;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          let applicationId;
          currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
          let _location;
          const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
          EmbeddedActivitiesNativeManagerDefault;
          if (currentEmbeddedActivity != null) {
            _location = currentEmbeddedActivity.location;
          }
          const obj = { location: _location, applicationId };
          applicationId = undefined;
          if (currentEmbeddedActivity != null) {
            applicationId = currentEmbeddedActivity.applicationId;
          }
          leaveActivity(obj);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const TableRow = TableRow2.TableRow;
        ({ source: AssetRegistryDefault2 });
        const TableRowIcon = TableRowIcon2.TableRowIcon;
        const intl = intl4.intl;
        const tmp8 = <TableRow icon={null} label={intl.string(intl4.t["R/FK4A"])} onPress={first} />;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const TableRow = TableRow2.TableRow;
      ({ source: AssetRegistryDefault2 });
      const TableRowIcon = TableRowIcon2.TableRowIcon;
      const intl = intl4.intl;
      return (
        <TableRow
          icon={null}
          label={intl.string(intl4.t["R/FK4A"])}
          onPress={function onPress() {
            let applicationId;
            currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
            let _location;
            const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
            EmbeddedActivitiesNativeManagerDefault;
            if (currentEmbeddedActivity != null) {
              _location = currentEmbeddedActivity.location;
            }
            const obj = { location: _location, applicationId };
            applicationId = undefined;
            if (currentEmbeddedActivity != null) {
              applicationId = currentEmbeddedActivity.applicationId;
            }
            leaveActivity(obj);
          }}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let label;
      let onPress;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = ChannelCallUtils;
        const shareActivityLogsResult = tmpResult.shareActivityLogs();
        cResult[0] = shareActivityLogsResult;
        first = shareActivityLogsResult;
      } else {
        first = cResult[0];
      }
      const icon = first.icon;
      ({ label, onPress } = first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let tmp7Result;
        const TableRow = TableRow2.TableRow;
        if (null != icon) {
          tmp7Result = jsx(TableRowIcon2.TableRowIcon, { source: icon });
        }
        const tmp7Result2 = <TableRow icon={tmp7Result} label={label} onPress={onPress} />;
        cResult[1] = tmp7Result2;
        tmp6 = tmp7Result2;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : () => {
      let label;
      let onPress;
      const obj = ChannelCallUtils;
      const shareActivityLogsResult = obj.shareActivityLogs();
      const icon = shareActivityLogsResult.icon;
      ({ label, onPress } = shareActivityLogsResult);
      let icon1;
      const TableRow = TableRow2.TableRow;
      if (null != icon) {
        icon1 = jsx(TableRowIcon2.TableRowIcon, { source: icon });
      }
      return <TableRow icon={icon1} label={label} onPress={onPress} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let showActivitiesDebugOverlay;
      let tmp13;
      let tmp15;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelCallLifecycleStore];
        const fn = function o() {
          return showActivitiesDebugOverlay.getShowActivitiesDebugOverlay();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l(visible) {
          const obj = DispatcherDefault;
          const obj2 = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
          obj.dispatch(obj2);
        };
        cResult[2] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const TableRowIcon = TableRowIcon2.TableRowIcon;
        const tmp12 = <TableRowIcon source={AssetRegistryDefault3} />;
        cResult[3] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t["qv5/SP"]);
        cResult[4] = stringResult;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] !== stateFromStores) {
        const tmp17 = jsx(TableSwitchRow2.TableSwitchRow, {
          icon: tmp9,
          value: stateFromStores,
          onValueChange: tmp8,
          label: tmp13,
        });
        cResult[5] = stateFromStores;
        cResult[6] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      return tmp15;
    }
  : () => {
      let showActivitiesDebugOverlay;
      let obj = get_initialized;
      const items = [ChannelCallLifecycleStore];
      const stateFromStores = obj.useStateFromStores(items, () =>
        showActivitiesDebugOverlay.getShowActivitiesDebugOverlay(),
      );
      const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      ({ source: AssetRegistryDefault3 });
      const TableRowIcon = TableRowIcon2.TableRowIcon;
      const intl = intl4.intl;
      return (
        <TableSwitchRow
          icon={null}
          value={stateFromStores}
          onValueChange={function onValueChange(visible) {
            const obj = DispatcherDefault;
            const obj2 = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
            obj.dispatch(obj2);
          }}
          label={intl.string(intl4.t["qv5/SP"])}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let tmp15;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let obj = guildId(576);
      const cResult = obj.c(8);
      guildId = guildId.guildId;
      if (cResult[0] !== guildId) {
        const fn = function o() {
          const obj = ChannelCallConnectingScreen;
          const result = obj.showVoiceSettingsActionSheet(guildId);
        };
        cResult[0] = guildId;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const TableRowIcon = tmp(6006).TableRowIcon;
        const tmp11 = <TableRowIcon IconComponent={guildId(6893).SettingsIcon} source={AssetRegistryDefault4} />;
        const intl = tmp(1126).intl;
        const stringResult = intl.string(guildId(1126).t.dsXapM);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(guildId(1126).t["16SG+O"]);
        const tmp14 = jsx(guildId(6007).TableRowArrow, {});
        cResult[2] = tmp11;
        cResult[3] = stringResult;
        cResult[4] = stringResult1;
        cResult[5] = tmp14;
        tmp8 = tmp14;
        tmp7 = stringResult1;
        tmp6 = stringResult;
        tmp5 = tmp11;
      } else {
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
      }
      if (cResult[6] !== tmp4) {
        const tmp17 = jsx(guildId(6000).TableRow, {
          onPress: tmp4,
          icon: tmp5,
          label: tmp6,
          subLabel: tmp7,
          trailing: tmp8,
        });
        cResult[6] = tmp4;
        cResult[7] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[7];
      }
      return tmp15;
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const items = [guildId];
      const callback = react.useCallback(() => {
        const obj = ChannelCallConnectingScreen;
        const result = obj.showVoiceSettingsActionSheet(guildId);
      }, items);
      const TableRow = guildId(6000).TableRow;
      ({ IconComponent: guildId(6893).SettingsIcon, source: AssetRegistryDefault4 });
      const TableRowIcon = guildId(6006).TableRowIcon;
      const intl = guildId(1126).intl;
      const intl2 = guildId(1126).intl;
      return (
        <TableRow
          onPress={callback}
          icon={null}
          label={intl.string(guildId(1126).t.dsXapM)}
          subLabel={intl2.string(guildId(1126).t["16SG+O"])}
          trailing={null}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (stream) => {
      let icon;
      let label;
      let onPress;
      let tmp4;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(8);
      stream = stream.stream;
      if (cResult[0] !== stream) {
        const tmpResult = ChannelCallUtils;
        const reportStreamIssueResult = tmpResult.reportStreamIssue(stream);
        cResult[0] = stream;
        cResult[1] = reportStreamIssueResult;
        tmp4 = reportStreamIssueResult;
      } else {
        tmp4 = cResult[1];
      }
      ({ label, icon, onPress } = tmp4);
      if (cResult[2] !== icon) {
        let tmp8;
        if (null != icon) {
          tmp8 = jsx(TableRowIcon2.TableRowIcon, { source: icon });
        }
        cResult[2] = icon;
        cResult[3] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === label) {
        if (cResult[5] === onPress) {
          let tmp10;
          if (cResult[6] === tmp6) {
            tmp10 = cResult[7];
          }
          return tmp10;
        }
      }
      const tmp11 = jsx(TableRow2.TableRow, { icon: tmp6, label, onPress });
      cResult[4] = label;
      cResult[5] = onPress;
      cResult[6] = tmp6;
      cResult[7] = tmp11;
      tmp10 = tmp11;
    }
  : (stream) => {
      let label;
      let onPress;
      stream = stream.stream;
      const obj = ChannelCallUtils;
      const reportStreamIssueResult = obj.reportStreamIssue(stream);
      const icon = reportStreamIssueResult.icon;
      ({ label, onPress } = reportStreamIssueResult);
      let icon1;
      const TableRow = TableRow2.TableRow;
      if (null != icon) {
        icon1 = jsx(TableRowIcon2.TableRowIcon, { source: icon });
      }
      return <TableRow icon={icon1} label={label} onPress={onPress} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp20 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let label;
      let onPress;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = ChannelCallUtils;
        const rtcDebugPanelResult = tmpResult.rtcDebugPanel(() => {});
        cResult[0] = rtcDebugPanelResult;
        first = rtcDebugPanelResult;
      } else {
        first = cResult[0];
      }
      const icon = first.icon;
      ({ label, onPress } = first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let tmp7Result;
        const TableRow = TableRow2.TableRow;
        if (null != icon) {
          tmp7Result = jsx(TableRowIcon2.TableRowIcon, { source: icon });
        }
        const tmp7Result2 = <TableRow icon={tmp7Result} label={label} onPress={onPress} />;
        cResult[1] = tmp7Result2;
        tmp6 = tmp7Result2;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : () => {
      let label;
      let onPress;
      const obj = ChannelCallUtils;
      const rtcDebugPanelResult = obj.rtcDebugPanel(() => {});
      const icon = rtcDebugPanelResult.icon;
      ({ label, onPress } = rtcDebugPanelResult);
      let icon1;
      const TableRow = TableRow2.TableRow;
      if (null != icon) {
        icon1 = jsx(TableRowIcon2.TableRowIcon, { source: icon });
      }
      return <TableRow icon={icon1} label={label} onPress={onPress} />;
    };
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx");

export const GameConsoles = tmp3;
export const GameConsoleAccountButton = tmp4;
export const ActivitiesButton = tmp5;
export const ChatButton = tmp6;
export const SoundboardButton = tmp7;
export const ScreenshareButton = tmp8;
export const StreamVolumeItem = tmp9;
export const DeafenSwitch = tmp10;
export const AudioRouteButton = tmp11;
export const InviteButton = tmp12;
export const HideNonVideoParticipants = tmp13;
export const HideSelfVideo = tmp14;
export const LeaveActivitiesButton = tmp15;
export const ShareActivityLogsButton = tmp16;
export const ToggleShowActivitiesDebugOverlay = tmp17;
export const VoiceSettingsButton = tmp18;
export const ReportStreamIssueButton = tmp19;
export const RTCDebugPanelButton = tmp20;
