// === Module 9075: InAppReportsSettingsUpsellsElement ===

// Module 9075 (InAppReportsSettingsUpsellsElement)
import nativeDefault from "native" /* 576 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import SettingsIcon from "SettingsIcon" /* 7380 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import in_app_reports_ReportUtils from "in_app_reports/ReportUtils" /* 8633 */;
import InAppReportsUpsellsTableRowDefault from "InAppReportsUpsellsTableRow" /* 9051 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function SettingsUpsellsTableRow(arg0) {
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
    icon: closure_9(SettingsIcon.SettingsIcon, {})
  };
  return closure_9(InAppReportsUpsellsTableRowDefault, obj);
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, settingsContainer: null, goToSettingsText: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.settingsContainer = { width: "100%", marginBottom: nativeDefault.space.PX_8 };
let obj1 = { width: "100%", marginBottom: nativeDefault.space.PX_8 };
createStyles.goToSettingsText = { marginTop: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx");

export default function SettingsUpsellElement(settingsUpsells) {
  settingsUpsells = settingsUpsells.settingsUpsells;
  ({ channelId: importDefault, reportId } = settingsUpsells);
  const reportType = settingsUpsells.reportType;
  const reportSubType = settingsUpsells.reportSubType;
  closure_5 = undefined;
  const tmp = closure_11();
  let obj = settingsUpsells(reportId[12]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(importDefault));
  let obj1 = settingsUpsells(reportId[13]);
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  const settingsUpsellsConfigs = obj1.useSettingsUpsellsConfigs(settingsUpsells, type);
  closure_5 = settingsUpsells(reportId[9]).useTrackSettingsUpsellsAction(reportType, reportSubType, reportId);
  let tmp6 = null;
  if (0 !== settingsUpsellsConfigs.length) {
    obj = { style: tmp.container, children: null };
    obj = { style: tmp.settingsContainer, children: null };
    obj1 = { title: null, hasIcons: true, children: null };
    const intl = tmp2(tmp3[15]).intl;
    obj1.title = intl.string(tmp2(tmp3[15]).t["1yxTIJ"]);
    obj1.children = settingsUpsellsConfigs.map((getTitle, index) => {
      ({ getDisabledTitle, getDescription, onApply } = getTitle);
      return React7(SettingsUpsellsTableRow, { title: getTitle.getTitle(), disabledTitle: getDisabledTitle(), description: getDescription(), onButtonClick: onApply, trackSettingsUpsellsAction: closure_5(settingsUpsells[index]) }, index);
    });
    obj.children = closure_9(tmp2(tmp3[14]).TableRowGroup, obj1);
    const items1 = [closure_9(closure_5, obj), ];
    const obj2 = { variant: "text-sm/medium", style: tmp.goToSettingsText, children: null };
    const intl2 = tmp2(tmp3[15]).intl;
    const obj3 = {
      goToSettingsHook() {
          let obj = { screen: constants2.CONTENT_AND_SOCIAL };
          obj.openUserSettings(obj);
          obj = { report_id: reportId, report_type: reportType.name, report_subtype: reportSubType, action: in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED };
          AppAnalyticsUtilsDefault.trackWithMetadata(constants.IAR_SETTINGS_UPSELLS_ACTION, obj);
        }
    };
    obj2.children = intl2.format(tmp2(tmp3[15]).t["u7mo+k"], obj3);
    items1[1] = closure_9(tmp2(tmp3[16]).Text, obj2);
    obj.children = items1;
    tmp6 = closure_10(closure_5, obj);
  }
  return tmp6;
};