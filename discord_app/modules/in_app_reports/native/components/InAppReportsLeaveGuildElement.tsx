// discord_app/modules/in_app_reports/native/components/InAppReportsLeaveGuildElement.tsx
import util from "../../../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsLeaveGuildElement.tsx");

export default function LeaveGuildElement(guild) {
  guild = guild.guild;
  const addCallback = guild.addCallback;
  const reportId = guild.reportId;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp[1];
  noop = tmp2;
  const items = [null != guild];
  const effect = noop.useEffect(() => {
    closure_3(!closure_4);
  }, items);
  const items1 = [addCallback, reportId, guild];
  const onConfirm = noop.useCallback(() => {
    if (null != guild) {
      addCallback(() => addCallback(reportId[4]).leaveGuild(id.id));
      const obj = { guild_id: tmp.id, report_id: reportId };
      obj.trackWithMetadata(AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED, obj);
      closure_3(true);
    }
  }, items1);
  let obj = {
    title: null,
    disabledTitle: null,
    description: null,
    disabled: null,
    variant: "danger",
    onPress: null,
    icon: null,
  };
  let intl = guild(reportId[7]).intl;
  obj.title = intl.string(guild(reportId[7]).t.cU96ip);
  let intl2 = guild(reportId[7]).intl;
  obj.disabledTitle = intl2.string(guild(reportId[7]).t.rJGMXU);
  let intl3 = guild(reportId[7]).intl;
  let name;
  if (guild != null) {
    name = guild.name;
  }
  obj.description = intl3.formatToPlainString(guild(reportId[7]).t["26mR6/"], { guildName: name });
  obj.disabled = tmp[0];
  obj.onPress = function onPress() {
    const obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, confirmColor: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.J2TBi3);
    const intl2 = util.intl;
    let name;
    if (guild != null) {
      name = guild.name;
    }
    obj.body = intl2.formatToPlainString(util.t.TB1og8, { name });
    const intl3 = tmp3(1114).intl;
    obj.confirmText = intl3.string(util.t.p89ACt);
    const intl4 = tmp3(1114).intl;
    obj.cancelText = intl4.string(util.t.gm1Vej);
    obj.onConfirm = onConfirm;
    obj.confirmColor = common_AlertDefault.Colors.RED;
    obj.show(obj);
  };
  obj.icon = jsx(guild(reportId[10]).DoorExitIcon, { color: "text-feedback-critical" });
  return jsx(addCallback(reportId[6]), {
    title: null,
    disabledTitle: null,
    description: null,
    disabled: null,
    variant: "danger",
    onPress: null,
    icon: null,
  });
}
