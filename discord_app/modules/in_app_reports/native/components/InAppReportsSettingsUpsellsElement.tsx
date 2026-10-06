// discord_app/modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import in_app_reports_ReportUtils from "../../ReportUtils.tsx";
import InAppReportsUpsellsTableRowDefault from "InAppReportsUpsellsTableRow.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, settingsUpsells;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, settingsContainer: obj3, goToSettingsText: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginTop: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (trackSettingsUpsellsAction) => {
      let description;
      let disabledTitle;
      let onButtonClick;
      let title;
      let tmp5;
      let tmp6;
      const obj = onButtonClick(576);
      const cResult = obj.c(12);
      ({ title, disabledTitle, description, onButtonClick } = trackSettingsUpsellsAction);
      trackSettingsUpsellsAction = trackSettingsUpsellsAction.trackSettingsUpsellsAction;
      [tmp5, dependencyMap] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      if (cResult[0] !== trackSettingsUpsellsAction) {
        const fn = function o() {
          trackSettingsUpsellsAction(
            in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_VIEWED,
          );
        };
        cResult[0] = trackSettingsUpsellsAction;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      trackSettingsUpsellsAction(5597)(tmp6);
      const tmp7 = trackSettingsUpsellsAction;
      if (cResult[2] === onButtonClick) {
        let tmp9;
        let tmp11;
        if (cResult[3] === trackSettingsUpsellsAction) {
          tmp9 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = closure_9(onButtonClick(6893).SettingsIcon, {});
          cResult[5] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] === description) {
          if (cResult[7] === disabledTitle) {
            if (cResult[8] === tmp5) {
              if (cResult[9] === tmp9) {
                let tmp14;
                if (cResult[10] === title) {
                  tmp14 = cResult[11];
                }
                return tmp14;
              }
            }
          }
        }
        const obj2 = { title, disabledTitle, description, disabled: tmp5, onPress: tmp9, icon: tmp11 };
        const tmp16 = closure_9(tmp7(12728), obj2);
        cResult[6] = description;
        cResult[7] = disabledTitle;
        cResult[8] = tmp5;
        cResult[9] = tmp9;
        cResult[10] = title;
        cResult[11] = tmp16;
        tmp14 = tmp16;
      }
      const fn2 = function l() {
        onButtonClick();
        dependencyMap(true);
        trackSettingsUpsellsAction(
          in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_APPLY_CLICKED,
        );
      };
      cResult[2] = onButtonClick;
      cResult[3] = trackSettingsUpsellsAction;
      cResult[4] = fn2;
      tmp9 = fn2;
    }
  : (arg0) => {
      let closure_2;
      let description;
      let disabledTitle;
      let first;
      let title;
      ({ onButtonClick: require, trackSettingsUpsellsAction: importDefault } = arg0);
      dependencyMap = undefined;
      ({ title, disabledTitle, description } = arg0);
      [first, dependencyMap] = react.useState(false);
      useMountEffectDefault(() => {
        importDefault(in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_VIEWED);
      });
      const obj = {
        title,
        disabledTitle,
        description,
        disabled: first,
        onPress() {
          require();
          closure_2(true);
          importDefault(in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_APPLY_CLICKED);
        },
        icon: closure_9(SettingsIcon.SettingsIcon, {}),
      };
      const tmp4 = InAppReportsUpsellsTableRowDefault;
      return closure_9(tmp4, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (settingsUpsells) => {
      let container;
      let first;
      let items1;
      let reportId;
      let settingsContainer;
      let tmp7;
      let obj = settingsUpsells(reportId[9]);
      const cResult = obj.c(27);
      settingsUpsells = settingsUpsells.settingsUpsells;
      const channelId = settingsUpsells.channelId;
      reportId = settingsUpsells.reportId;
      const reportType = settingsUpsells.reportType;
      const reportSubType = settingsUpsells.reportSubType;
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function l() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = settingsUpsells(reportId[14]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      let type;
      const useSettingsUpsellsConfigs = settingsUpsells(reportId[15]).useSettingsUpsellsConfigs;
      settingsUpsells(reportId[15]);
      if (stateFromStores != null) {
        type = stateFromStores.type;
      }
      const settingsUpsellsConfigs = useSettingsUpsellsConfigs(settingsUpsells, type);
      const tmpResult4 = settingsUpsells(reportId[10]);
      const trackSettingsUpsellsAction = tmpResult4.useTrackSettingsUpsellsAction(reportType, reportSubType, reportId);
      if (0 === settingsUpsellsConfigs.length) {
        return null;
      } else {
        let tmp12;
        let tmp14;
        const _Symbol = Symbol;
        ({ container, settingsContainer } = tmp4);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[16]).intl;
          const stringResult = intl.string(settingsUpsells(reportId[16]).t["1yxTIJ"]);
          cResult[3] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[3];
        }
        if (cResult[4] === settingsUpsells) {
          if (cResult[5] === settingsUpsellsConfigs) {
            let tmp17;
            if (cResult[6] === trackSettingsUpsellsAction) {
              tmp14 = cResult[7];
            }
            if (cResult[11] !== tmp14) {
              let obj2 = { title: tmp12, hasIcons: true, children: tmp14 };
              const tmp19 = closure_9(settingsUpsells(reportId[17]).TableRowGroup, obj2);
              cResult[11] = tmp14;
              cResult[12] = tmp19;
              tmp17 = tmp19;
            } else {
              tmp17 = cResult[12];
            }
            if (cResult[13] === tmp4.settingsContainer) {
              let tmp20;
              if (cResult[14] === tmp17) {
                tmp20 = cResult[15];
              }
              if (cResult[16] === reportId) {
                if (cResult[17] === reportSubType) {
                  let tmp25;
                  if (cResult[18] === reportType) {
                    tmp25 = cResult[19];
                  }
                  if (cResult[20] === tmp4.goToSettingsText) {
                    let tmp27;
                    if (cResult[21] === tmp25) {
                      tmp27 = cResult[22];
                    }
                    if (cResult[23] === tmp4.container) {
                      if (cResult[24] === tmp27) {
                        let tmp30;
                        if (cResult[25] === tmp20) {
                          tmp30 = cResult[26];
                        }
                        return tmp30;
                      }
                    }
                    let obj3 = { style: container, children: items1 };
                    items1 = [tmp20, tmp27];
                    const tmp33 = closure_10(trackSettingsUpsellsAction, obj3);
                    cResult[23] = tmp4.container;
                    cResult[24] = tmp27;
                    cResult[25] = tmp20;
                    cResult[26] = tmp33;
                    tmp30 = tmp33;
                  }
                  let obj4 = { variant: "text-sm/medium", style: tmp24, children: tmp25 };
                  const tmp29 = closure_9(settingsUpsells(reportId[20]).Text, obj4);
                  cResult[20] = tmp4.goToSettingsText;
                  cResult[21] = tmp25;
                  cResult[22] = tmp29;
                  tmp27 = tmp29;
                }
              }
              const intl2 = tmp(tmp2[16]).intl;
              const obj5 = {
                goToSettingsHook() {
                  const obj = openUserSettings;
                  const obj2 = { screen: metroImportAll.CONTENT_AND_SOCIAL };
                  obj.openUserSettings(obj2);
                  const obj3 = AppAnalyticsUtilsDefault;
                  const obj4 = {
                    report_id: reportId,
                    report_type: reportType.name,
                    report_subtype: reportSubType,
                    action:
                      in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType
                        .SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                  };
                  obj3.trackWithMetadata(metroImportDefault.IAR_SETTINGS_UPSELLS_ACTION, obj4);
                },
              };
              const formatResult = intl2.format(settingsUpsells(reportId[16]).t["u7mo+k"], obj5);
              cResult[16] = reportId;
              cResult[17] = reportSubType;
              cResult[18] = reportType;
              cResult[19] = formatResult;
              tmp25 = formatResult;
            }
            const obj6 = { style: settingsContainer, children: tmp17 };
            const tmp23 = closure_9(trackSettingsUpsellsAction, obj6);
            cResult[13] = tmp4.settingsContainer;
            cResult[14] = tmp17;
            cResult[15] = tmp23;
            tmp20 = tmp23;
          }
        }
        if (cResult[8] === settingsUpsells) {
          let tmp15;
          if (cResult[9] === trackSettingsUpsellsAction) {
            tmp15 = cResult[10];
          }
          const mapped = settingsUpsellsConfigs.map(tmp15);
          cResult[4] = settingsUpsells;
          cResult[5] = settingsUpsellsConfigs;
          cResult[6] = trackSettingsUpsellsAction;
          cResult[7] = mapped;
          tmp14 = mapped;
        }
        const fn2 = function f(getTitle, arg1) {
          let getDescription;
          let getDisabledTitle;
          let onApply;
          const obj = {
            title: getTitle.getTitle(),
            disabledTitle: getDisabledTitle(),
            description: getDescription(),
            onButtonClick: onApply,
            trackSettingsUpsellsAction: trackSettingsUpsellsAction(settingsUpsells[arg1]),
          };
          ({ getDisabledTitle, getDescription, onApply } = getTitle);
          return React4(closure_12, obj, arg1);
        };
        cResult[8] = settingsUpsells;
        cResult[9] = trackSettingsUpsellsAction;
        cResult[10] = fn2;
        tmp15 = fn2;
      }
    }
  : (settingsUpsells) => {
      let TableRowGroup;
      let intl;
      let intl2;
      let items1;
      let obj4;
      let obj6;
      let reportId;
      settingsUpsells = settingsUpsells.settingsUpsells;
      ({ channelId: importDefault, reportId } = settingsUpsells);
      const reportType = settingsUpsells.reportType;
      const reportSubType = settingsUpsells.reportSubType;
      let closure_5;
      const tmp = closure_11();
      let obj = settingsUpsells(reportId[14]);
      const items = [ChannelStore];
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(importDefault));
      let type;
      const useSettingsUpsellsConfigs = settingsUpsells(reportId[15]).useSettingsUpsellsConfigs;
      settingsUpsells(reportId[15]);
      if (stateFromStores != null) {
        type = stateFromStores.type;
      }
      const settingsUpsellsConfigs = useSettingsUpsellsConfigs(settingsUpsells, type);
      const tmp2Result = settingsUpsells(reportId[10]);
      closure_5 = tmp2Result.useTrackSettingsUpsellsAction(reportType, reportSubType, reportId);
      let tmp7 = null;
      if (0 !== settingsUpsellsConfigs.length) {
        let obj2 = { style: tmp.container, children: items1 };
        let obj3 = { style: tmp.settingsContainer, children: closure_9(TableRowGroup, obj4) };
        obj4 = {
          title: intl.string(settingsUpsells(reportId[16]).t["1yxTIJ"]),
          hasIcons: true,
          children: settingsUpsellsConfigs.map((getTitle, index) => {
            let getDescription;
            let getDisabledTitle;
            let onApply;
            const obj = {
              title: getTitle.getTitle(),
              disabledTitle: getDisabledTitle(),
              description: getDescription(),
              onButtonClick: onApply,
              trackSettingsUpsellsAction: closure_5(settingsUpsells[index]),
            };
            ({ getDisabledTitle, getDescription, onApply } = getTitle);
            return React4(closure_12, obj, index);
          }),
        };
        TableRowGroup = tmp2(reportId[17]).TableRowGroup;
        intl = tmp2(reportId[16]).intl;
        items1 = [closure_9(closure_5, obj3)];
        const obj5 = {
          variant: "text-sm/medium",
          style: tmp.goToSettingsText,
          children: intl2.format(settingsUpsells(reportId[16]).t["u7mo+k"], obj6),
        };
        const Text = tmp2(reportId[20]).Text;
        intl2 = tmp2(reportId[16]).intl;
        obj6 = {
          goToSettingsHook() {
            const obj = openUserSettings;
            const obj2 = { screen: metroImportAll.CONTENT_AND_SOCIAL };
            obj.openUserSettings(obj2);
            const obj3 = AppAnalyticsUtilsDefault;
            const obj4 = {
              report_id: reportId,
              report_type: reportType.name,
              report_subtype: reportSubType,
              action:
                in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType
                  .SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
            };
            obj3.trackWithMetadata(metroImportDefault.IAR_SETTINGS_UPSELLS_ACTION, obj4);
          },
        };
        items1[1] = closure_9(Text, obj5);
        tmp7 = closure_10(closure_5, obj2);
      }
      return tmp7;
    };
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx",
);

export default tmp5;
