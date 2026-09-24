// === Module 13306: InAppReportsLeaveGuildElement ===

// Module 13306 (InAppReportsLeaveGuildElement)
import util from "util" /* 1115 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5009 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5196 */;
import common_AlertDefault from "common/Alert" /* 5292 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsLeaveGuildElement.tsx");

export default function LeaveGuildElement(guild) {
  guild = guild.guild;
  const reportId = guild.reportId;
  _slicedToArray = undefined;
  noop = undefined;
  [obj.disabled, _slicedToArray] = noop.useState(false);
  noop = tmp2;
  const items = [null != guild];
  const effect = noop.useEffect(() => {
    closure_3(!closure_4);
  }, items);
  const items1 = [guild.addCallback, reportId, guild];
  const onConfirm = noop.useCallback(() => {
    if (null != guild) {
      addCallback(() => addCallback(reportId[4]).leaveGuild(id.id));
      const obj2 = { guild_id: tmp.id, report_id: reportId };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED, obj2);
      closure_3(true);
    }
  }, items1);
  let obj = { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null };
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
  obj.onPress = function onPress() {
    const obj2 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, confirmColor: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.J2TBi3);
    const intl2 = util.intl;
    let name;
    if (guild != null) {
      name = guild.name;
    }
    obj2.body = intl2.formatToPlainString(util.t.TB1og8, { name });
    const intl3 = util.intl;
    obj2.confirmText = intl3.string(util.t.p89ACt);
    const intl4 = util.intl;
    obj2.cancelText = intl4.string(util.t.gm1Vej);
    obj2.onConfirm = onConfirm;
    obj2.confirmColor = common_AlertDefault.Colors.RED;
    actions_AlertActionCreatorsDefault.show(obj2);
  };
  obj.icon = jsx(guild(reportId[10]).DoorExitIcon, { color: "text-feedback-critical" });
  return jsx(guild.addCallback(reportId[6]), { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null });
};