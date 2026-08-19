// === Module 12816: LeaveGuildElement ===

// Module 12816 (LeaveGuildElement)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsLeaveGuildElement.tsx");

export default function LeaveGuildElement(guild) {
  guild = guild.guild;
  const addCallback = guild.addCallback;
  const reportId = guild.reportId;
  let callback;
  let React;
  closure_5 = undefined;
  const tmp = callback(React.useState(false), 2);
  callback = tmp[1];
  React = tmp2;
  const items = [null != guild];
  const effect = React.useEffect(() => {
    callback(!closure_4);
  }, items);
  const items1 = [addCallback, reportId, guild];
  closure_5 = React.useCallback(() => {
    if (null != guild) {
      addCallback(() => closure_1_1(closure_1_2[4]).leaveGuild(id.id));
      let obj = addCallback(reportId[5]);
      obj = { guild_id: null, report_id: null };
      obj[0] = tmp.id;
      obj[1] = reportId;
      obj.trackWithMetadata(constants.IAR_LEAVE_GUILD_BUTTON_CLICKED, obj);
      callback(true);
    }
  }, items1);
  let obj = { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null };
  let intl = guild(reportId[7]).intl;
  obj[0] = intl.string(guild(reportId[7]).t.cU96ip);
  let intl2 = guild(reportId[7]).intl;
  obj[1] = intl2.string(guild(reportId[7]).t.rJGMXU);
  let intl3 = guild(reportId[7]).intl;
  let name;
  if (guild != null) {
    name = guild.name;
  }
  obj[2] = intl3.formatToPlainString(guild(reportId[7]).t["26mR6/"], { guildName: name });
  obj[3] = tmp[0];
  obj[5] = function onPress() {
    let obj = addCallback(reportId[8]);
    obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, confirmColor: null };
    const intl = guild(reportId[7]).intl;
    obj[0] = intl.string(guild(reportId[7]).t.J2TBi3);
    const intl2 = guild(reportId[7]).intl;
    let name;
    if (guild != null) {
      name = guild.name;
    }
    obj[1] = intl2.formatToPlainString(guild(reportId[7]).t.TB1og8, { name });
    const intl3 = tmp3(tmp2[7]).intl;
    obj[2] = intl3.string(guild(reportId[7]).t.p89ACt);
    const intl4 = tmp3(tmp2[7]).intl;
    obj[3] = intl4.string(guild(reportId[7]).t.gm1Vej);
    obj[4] = closure_5;
    obj[5] = addCallback(reportId[9]).Colors.RED;
    obj.show(obj);
  };
  obj[6] = jsx(guild(reportId[10]).DoorExitIcon, { color: "text-feedback-critical" });
  return jsx(addCallback(reportId[6]), { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null });
};