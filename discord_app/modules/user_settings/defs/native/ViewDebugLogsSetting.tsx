// discord_app/modules/user_settings/defs/native/ViewDebugLogsSetting.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import _mod19 from "../../../../../_runtime/metro/00019__.js";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import ClockIcon from "../../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ModalStackNavigatorDefault from "../../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import ChannelNotificationIcon from "../../../../design/components/Icon/native/redesign/generated/ChannelNotificationIcon.tsx";
import ChannelListMagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/ChannelListMagnifyingGlassIcon.tsx";
import WrenchIcon from "../../../../design/components/Icon/native/redesign/generated/WrenchIcon.tsx";
import UserSettingsDebugLogsDefault from "../../dev_tools/native/UserSettingsDebugLogs.tsx";
import UserSettingsStartupTimingsDefault from "../../dev_tools/native/UserSettingsStartupTimings.tsx";
import UserSettingsPushNotificationLogsDefault from "../../notifications/native/UserSettingsPushNotificationLogs.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const Suspense = _mod19.Suspense;
const Keyboard = _mod17.Keyboard;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ViewDebugLogsActionSheet = "ViewDebugLogsActionSheet";
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ViewDebugLogsActionSheetRow(screenKey) {
      const cResult = title(render[5]).c(8);
      ({ icon, title } = screenKey);
      screenKey = screenKey.screenKey;
      render = screenKey.render;
      if (cResult[0] === render) {
        if (cResult[1] === screenKey) {
          if (cResult[2] === title) {
            let tmp4 = cResult[3];
          }
          if (cResult[4] === icon) {
            if (cResult[5] === tmp4) {
              if (cResult[6] === title) {
                let tmp5 = cResult[7];
              }
              return tmp5;
            }
          }
          const obj2 = { icon, label: title, onPress: tmp4 };
          const tmp7 = closure_5(title(tmp2[8]).ActionSheetRow, obj2);
          cResult[4] = icon;
          cResult[5] = tmp4;
          cResult[6] = title;
          cResult[7] = tmp7;
          tmp5 = tmp7;
        }
      }
      const fn = function t() {
        ActionSheetActionCreatorsDefault.hideActionSheet(ViewDebugLogsActionSheet);
        ModalActionCreatorsDefault.pushLazy(
          Promise.resolve({
            default() {
              return closure_2_5(screenKey(render[7]), { title, render, screenKey });
            },
          }),
        );
      };
      cResult[0] = render;
      cResult[1] = screenKey;
      cResult[2] = title;
      cResult[3] = fn;
      tmp4 = fn;
      let obj = title(render[5]);
      tmp2 = render;
    }
  : function ViewDebugLogsActionSheetRow(icon) {
      const title = icon.title;
      ({ screenKey: importDefault, render: dependencyMap } = icon);
      return closure_5(title(6888).ActionSheetRow, {
        icon: icon.icon,
        label: title,
        onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet(ViewDebugLogsActionSheet);
          ModalActionCreatorsDefault.pushLazy(
            Promise.resolve({
              default() {
                return closure_2_5(ModalStackNavigatorDefault, { title, render, screenKey });
              },
            }),
          );
        },
      });
    };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ViewDebugLogsActionSheet() {
      const cResult = c.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t.BUOCPi);
        const tmp6 = hasOwnProperty(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp10 = hasOwnProperty(WrenchIcon.WrenchIcon, {});
        const intl2 = util.intl;
        const stringResult = intl2.string(util.t.XpPGhL);
        cResult[1] = tmp10;
        cResult[2] = stringResult;
        let tmp8 = stringResult;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          icon: tmp7,
          title: tmp8,
          screenKey: "debugLogs",
          render() {
            return closure_1_5(UserSettingsDebugLogsDefault, {});
          },
        };
        const tmp15 = hasOwnProperty(closure_8, obj3);
        cResult[3] = tmp15;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp19 = hasOwnProperty(ClockIcon.ClockIcon, {});
        const intl3 = util.intl;
        const stringResult1 = intl3.string(util.t.b0nJvk);
        cResult[4] = tmp19;
        cResult[5] = stringResult1;
        let tmp17 = stringResult1;
        let tmp16 = tmp19;
      } else {
        tmp16 = cResult[4];
        tmp17 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { header: first, children: null };
        const items = [tmp12, ,];
        const obj5 = {
          icon: tmp16,
          title: tmp17,
          screenKey: "startupTiming",
          render() {
            return closure_1_5(Suspense, { children: closure_1_5(UserSettingsStartupTimingsDefault, {}) });
          },
        };
        items[1] = hasOwnProperty(closure_8, obj5);
        let tmp22Result = null;
        if (tmpResult.isAndroid()) {
          const obj6 = {
            icon: hasOwnProperty(ChannelNotificationIcon.ChannelNotificationIcon, {}),
            title: null,
            screenKey: "pushNotificationLogs",
            render: null,
          };
          const intl4 = util.intl;
          obj6.title = intl4.string(util.t.Ljj0ps);
          obj6.render = function render() {
            return closure_1_5(UserSettingsPushNotificationLogsDefault, {});
          };
          tmp22Result = hasOwnProperty(closure_8, obj6);
        }
        const obj7 = { hasIcons: true, children: null };
        items[2] = tmp22Result;
        obj7.children = items;
        obj4.children = timestampProducer(ActionSheetRow.ActionSheetRow.Group, obj7);
        const tmp22Result2 = hasOwnProperty(ActionSheet.ActionSheet, obj4);
        cResult[6] = tmp22Result2;
        let tmp21 = tmp22Result2;
        tmpResult = PlatformUtils;
      } else {
        tmp21 = cResult[6];
      }
      return tmp21;
    }
  : function ViewDebugLogsActionSheet() {
      const obj = { header: null, children: null };
      const obj2 = { title: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.BUOCPi);
      obj.header = hasOwnProperty(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
      const obj3 = {
        icon: hasOwnProperty(WrenchIcon.WrenchIcon, {}),
        title: null,
        screenKey: "debugLogs",
        render: null,
      };
      const intl2 = util.intl;
      obj3.title = intl2.string(util.t.XpPGhL);
      obj3.render = function render() {
        return closure_1_5(UserSettingsDebugLogsDefault, {});
      };
      const items = [hasOwnProperty(closure_8, obj3), ,];
      const obj4 = {
        icon: hasOwnProperty(ClockIcon.ClockIcon, {}),
        title: null,
        screenKey: "startupTiming",
        render: null,
      };
      const intl3 = util.intl;
      obj4.title = intl3.string(util.t.b0nJvk);
      obj4.render = function render() {
        return closure_1_5(Suspense, { children: closure_1_5(UserSettingsStartupTimingsDefault, {}) });
      };
      items[1] = hasOwnProperty(closure_8, obj4);
      let tmpResult = null;
      if (obj5.isAndroid()) {
        const obj6 = {
          icon: hasOwnProperty(ChannelNotificationIcon.ChannelNotificationIcon, {}),
          title: null,
          screenKey: "pushNotificationLogs",
          render: null,
        };
        const intl4 = util.intl;
        obj6.title = intl4.string(util.t.Ljj0ps);
        obj6.render = function render() {
          return closure_1_5(UserSettingsPushNotificationLogsDefault, {});
        };
        tmpResult = hasOwnProperty(closure_8, obj6);
      }
      items[2] = tmpResult;
      obj.children = timestampProducer(ActionSheetRow.ActionSheetRow.Group, { hasIcons: true, children: items });
      return hasOwnProperty(ActionSheet.ActionSheet, obj);
    };
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.BUOCPi);
  },
  parent: null,
  IconComponent: ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon,
  usePredicate: UserSettings.DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_9 }), ViewDebugLogsActionSheet);
  },
  withArrow: true,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;
