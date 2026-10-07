// discord_app/modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import in_app_reports_ReportUtils from "../../ReportUtils.tsx";
import InAppReportsUpsellsTableRowDefault from "InAppReportsUpsellsTableRow.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { paddingHorizontal: nativeDefault.space.PX_16 },
  settingsContainer: null,
  goToSettingsText: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.settingsContainer = { width: "100%", marginBottom: nativeDefault.space.PX_8 };
let obj4 = { width: "100%", marginBottom: nativeDefault.space.PX_8 };
obj2.goToSettingsText = { marginTop: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (trackSettingsUpsellsAction) => {
      const cResult = onButtonClick(576).c(12);
      ({ title, disabledTitle, description, onButtonClick } = trackSettingsUpsellsAction);
      trackSettingsUpsellsAction = trackSettingsUpsellsAction.trackSettingsUpsellsAction;
      const obj = onButtonClick(576);
      [tmp5, dependencyMap] = noop.useState(false);
      if (cResult[0] !== trackSettingsUpsellsAction) {
        const fn = function o() {
          trackSettingsUpsellsAction(
            in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_VIEWED,
          );
        };
        cResult[0] = trackSettingsUpsellsAction;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      trackSettingsUpsellsAction(5597)(tmp6);
      if (cResult[2] === onButtonClick) {
        if (cResult[3] === trackSettingsUpsellsAction) {
          let tmp9 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = closure_9(onButtonClick(6893).SettingsIcon, {});
          cResult[5] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] === description) {
          if (cResult[7] === disabledTitle) {
            if (cResult[8] === tmp5) {
              if (cResult[9] === tmp9) {
                if (cResult[10] === title) {
                  let tmp14 = cResult[11];
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
      const tmp4 = _slicedToArray(noop.useState(false), 2);
      tmp7 = trackSettingsUpsellsAction;
    }
  : (arg0) => {
      ({ onButtonClick: require, trackSettingsUpsellsAction: importDefault } = arg0);
      ({ title, disabledTitle, description } = arg0);
      const tmp = _slicedToArray(noop.useState(false), 2);
      dependencyMap = tmp[1];
      useMountEffectDefault(() => {
        importDefault(in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_VIEWED);
      });
      const obj = {
        title,
        disabledTitle,
        description,
        disabled: tmp[0],
        onPress() {
          closure_1_0();
          closure_2(true);
          importDefault(in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_APPLY_CLICKED);
        },
        icon: closure_9(SettingsIcon.SettingsIcon, {}),
      };
      return closure_9(InAppReportsUpsellsTableRowDefault, obj);
    };
ReactCompilerGating = fn(558);
let obj5 = { marginTop: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (settingsUpsells) => {
      const cResult = settingsUpsells(reportId[9]).c(27);
      settingsUpsells = settingsUpsells.settingsUpsells;
      const channelId = settingsUpsells.channelId;
      reportId = settingsUpsells.reportId;
      const reportType = settingsUpsells.reportType;
      const reportSubType = settingsUpsells.reportSubType;
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function l() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = settingsUpsells(reportId[9]);
      const stateFromStores = settingsUpsells(reportId[14]).useStateFromStores(first, tmp7);
      const tmpResult = settingsUpsells(reportId[14]);
      let type;
      if (stateFromStores != null) {
        type = stateFromStores.type;
      }
      const settingsUpsellsConfigs = settingsUpsells(reportId[15]).useSettingsUpsellsConfigs(settingsUpsells, type);
      const tmpResult3 = settingsUpsells(reportId[15]);
      const trackSettingsUpsellsAction = settingsUpsells(reportId[10]).useTrackSettingsUpsellsAction(
        reportType,
        reportSubType,
        reportId,
      );
      if (0 === settingsUpsellsConfigs.length) {
        return null;
      } else {
        const _Symbol = Symbol;
        ({ container, settingsContainer } = tmp4);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[16]).intl;
          const stringResult = intl.string(tmp(tmp2[16]).t["1yxTIJ"]);
          cResult[3] = stringResult;
          let tmp11 = stringResult;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] === settingsUpsells) {
          if (cResult[5] === settingsUpsellsConfigs) {
            if (cResult[6] === trackSettingsUpsellsAction) {
              if (cResult[11] !== cResult[7]) {
                let obj2 = { title: tmp11, hasIcons: true, children: tmp13 };
                const tmp19 = closure_9(tmp(tmp2[17]).TableRowGroup, obj2);
                cResult[11] = tmp13;
                cResult[12] = tmp19;
                let tmp17 = tmp19;
              } else {
                tmp17 = cResult[12];
              }
              if (cResult[13] === tmp4.settingsContainer) {
                if (cResult[14] === tmp17) {
                  let tmp20 = cResult[15];
                }
                if (cResult[16] === reportId) {
                  if (cResult[17] === reportSubType) {
                    if (cResult[18] === reportType) {
                      let tmp25 = cResult[19];
                    }
                    if (cResult[20] === tmp4.goToSettingsText) {
                      if (cResult[21] === tmp25) {
                        let tmp27 = cResult[22];
                      }
                      if (cResult[23] === tmp4.container) {
                        if (cResult[24] === tmp27) {
                          if (cResult[25] === tmp20) {
                            let tmp30 = cResult[26];
                          }
                          return tmp30;
                        }
                      }
                      let obj3 = { style: container, children: null };
                      const items1 = [tmp20, tmp27];
                      obj3.children = items1;
                      const tmp33 = closure_10(trackSettingsUpsellsAction, obj3);
                      cResult[23] = tmp4.container;
                      cResult[24] = tmp27;
                      cResult[25] = tmp20;
                      cResult[26] = tmp33;
                      tmp30 = tmp33;
                    }
                    const obj4 = { variant: "text-sm/medium", style: tmp24, children: tmp25 };
                    const tmp29 = closure_9(tmp(tmp2[20]).Text, obj4);
                    cResult[20] = tmp4.goToSettingsText;
                    cResult[21] = tmp25;
                    cResult[22] = tmp29;
                    tmp27 = tmp29;
                  }
                }
                const intl2 = tmp(tmp2[16]).intl;
                const obj5 = {
                  goToSettingsHook() {
                    openUserSettings.openUserSettings({ screen: constants2.CONTENT_AND_SOCIAL });
                    const obj2 = { screen: constants2.CONTENT_AND_SOCIAL };
                    const obj3 = AppAnalyticsUtilsDefault;
                    obj3.trackWithMetadata(constants.IAR_SETTINGS_UPSELLS_ACTION, {
                      report_id: reportId,
                      report_type: reportType.name,
                      report_subtype: reportSubType,
                      action:
                        in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType
                          .SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                    });
                  },
                };
                const formatResult = intl2.format(tmp(tmp2[16]).t["u7mo+k"], obj5);
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
        }
        if (cResult[8] === settingsUpsells) {
          if (cResult[9] === trackSettingsUpsellsAction) {
            let tmp14 = cResult[10];
          }
          const mapped = settingsUpsellsConfigs.map(tmp14);
          cResult[4] = settingsUpsells;
          cResult[5] = settingsUpsellsConfigs;
          cResult[6] = trackSettingsUpsellsAction;
          cResult[7] = mapped;
        }
        const fn2 = function f(getTitle, arg1) {
          ({ getDisabledTitle, getDescription, onApply } = getTitle);
          return options(
            closure_12,
            {
              title: getTitle.getTitle(),
              disabledTitle: getDisabledTitle(),
              description: getDescription(),
              onButtonClick: onApply,
              trackSettingsUpsellsAction: trackSettingsUpsellsAction(settingsUpsells[arg1]),
            },
            arg1,
          );
        };
        cResult[8] = settingsUpsells;
        cResult[9] = trackSettingsUpsellsAction;
        cResult[10] = fn2;
        tmp14 = fn2;
      }
      const tmpResult4 = settingsUpsells(reportId[10]);
    }
  : (settingsUpsells) => {
      settingsUpsells = settingsUpsells.settingsUpsells;
      ({ channelId: importDefault, reportId } = settingsUpsells);
      const reportType = settingsUpsells.reportType;
      const reportSubType = settingsUpsells.reportSubType;
      closure_5 = undefined;
      const tmp = closure_11();
      const items = [ChannelStore];
      const stateFromStores = settingsUpsells(reportId[14]).useStateFromStores(items, () =>
        ChannelStore.getChannel(importDefault),
      );
      let obj = settingsUpsells(reportId[14]);
      let type;
      if (stateFromStores != null) {
        type = stateFromStores.type;
      }
      const settingsUpsellsConfigs = settingsUpsells(reportId[15]).useSettingsUpsellsConfigs(settingsUpsells, type);
      let obj2 = settingsUpsells(reportId[15]);
      closure_5 = settingsUpsells(reportId[10]).useTrackSettingsUpsellsAction(reportType, reportSubType, reportId);
      let tmp6 = null;
      if (0 !== settingsUpsellsConfigs.length) {
        let obj3 = { style: tmp.container, children: null };
        const obj4 = { style: tmp.settingsContainer, children: null };
        const obj5 = { title: null, hasIcons: true, children: null };
        const intl = tmp2(reportId[16]).intl;
        obj5.title = intl.string(tmp2(reportId[16]).t["1yxTIJ"]);
        obj5.children = settingsUpsellsConfigs.map((getTitle, index) => {
          ({ getDisabledTitle, getDescription, onApply } = getTitle);
          return options(
            closure_12,
            {
              title: getTitle.getTitle(),
              disabledTitle: getDisabledTitle(),
              description: getDescription(),
              onButtonClick: onApply,
              trackSettingsUpsellsAction: closure_5(settingsUpsells[index]),
            },
            index,
          );
        });
        obj4.children = closure_9(tmp2(reportId[17]).TableRowGroup, obj5);
        const items1 = [closure_9(closure_5, obj4)];
        const obj6 = { variant: "text-sm/medium", style: tmp.goToSettingsText, children: null };
        const intl2 = tmp2(reportId[16]).intl;
        const obj7 = {
          goToSettingsHook() {
            openUserSettings.openUserSettings({ screen: constants2.CONTENT_AND_SOCIAL });
            const obj2 = { screen: constants2.CONTENT_AND_SOCIAL };
            const obj3 = AppAnalyticsUtilsDefault;
            obj3.trackWithMetadata(constants.IAR_SETTINGS_UPSELLS_ACTION, {
              report_id: reportId,
              report_type: reportType.name,
              report_subtype: reportSubType,
              action:
                in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType
                  .SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
            });
          },
        };
        obj6.children = intl2.format(tmp2(reportId[16]).t["u7mo+k"], obj7);
        items1[1] = closure_9(tmp2(reportId[20]).Text, obj6);
        obj3.children = items1;
        tmp6 = closure_10(closure_5, obj3);
      }
      return tmp6;
    };
