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
    icon: closure_9(SettingsIcon.SettingsIcon, {}),
  };
  return closure_9(InAppReportsUpsellsTableRowDefault, obj);
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4639);
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
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx",
);

export default function SettingsUpsellElement(settingsUpsells) {
  settingsUpsells = settingsUpsells.settingsUpsells;
  ({ channelId: importDefault, reportId } = settingsUpsells);
  const reportType = settingsUpsells.reportType;
  const reportSubType = settingsUpsells.reportSubType;
  closure_5 = undefined;
  const tmp = closure_11();
  const items = [ChannelStore];
  const stateFromStores = settingsUpsells(reportId[12]).useStateFromStores(items, () =>
    ChannelStore.getChannel(importDefault),
  );
  let obj = settingsUpsells(reportId[12]);
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  const settingsUpsellsConfigs = settingsUpsells(reportId[13]).useSettingsUpsellsConfigs(settingsUpsells, type);
  let obj2 = settingsUpsells(reportId[13]);
  closure_5 = settingsUpsells(reportId[9]).useTrackSettingsUpsellsAction(reportType, reportSubType, reportId);
  let tmp6 = null;
  if (0 !== settingsUpsellsConfigs.length) {
    let obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.settingsContainer, children: null };
    const obj5 = { title: null, hasIcons: true, children: null };
    const intl = tmp2(reportId[15]).intl;
    obj5.title = intl.string(tmp2(reportId[15]).t["1yxTIJ"]);
    obj5.children = settingsUpsellsConfigs.map((getTitle, index) => {
      ({ getDisabledTitle, getDescription, onApply } = getTitle);
      return React7(
        SettingsUpsellsTableRow,
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
    obj4.children = closure_9(tmp2(reportId[14]).TableRowGroup, obj5);
    const items1 = [closure_9(closure_5, obj4)];
    const obj6 = { variant: "text-sm/medium", style: tmp.goToSettingsText, children: null };
    const intl2 = tmp2(reportId[15]).intl;
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
            in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
        });
      },
    };
    obj6.children = intl2.format(tmp2(reportId[15]).t["u7mo+k"], obj7);
    items1[1] = closure_9(tmp2(reportId[16]).Text, obj6);
    obj3.children = items1;
    tmp6 = closure_10(closure_5, obj3);
  }
  return tmp6;
}
