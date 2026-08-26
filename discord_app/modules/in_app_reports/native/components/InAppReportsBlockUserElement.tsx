// === Module 12929: BlockUserElement ===

// Module 12929 (BlockUserElement)
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "markAllUserIdListsStale" /* 4098 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx");

export default function BlockUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  let stateFromStores1;
  let obj = user(reportId[5]);
  const items = [closure_5];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.isBlocked(user.id), items1);
  obj1 = user(reportId[5]);
  const items2 = [closure_4];
  const items3 = [channelId];
  stateFromStores1 = obj1.useStateFromStores(items2, () => closure_1_4.getChannel(channelId), items3);
  const items4 = [stateFromStores1, user];
  const memo = stateFromStores1.useMemo(() => {
    let guild_id;
    if (stateFromStores1 != null) {
      guild_id = tmp.guild_id;
    }
    let id;
    if (stateFromStores1 != null) {
      id = tmp.id;
    }
    return channelId(reportId[6]).getName(guild_id, id, user);
  }, items4);
  const items5 = [user, reportId, channelId];
  let tmp7 = null;
  if (null != user) {
    obj = { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null };
    const intl = tmp(tmp2[11]).intl;
    obj = { username: null };
    obj[0] = memo;
    obj[0] = intl.formatToPlainString(tmp(tmp2[11]).t["Q1o/f3"], obj);
    const intl2 = tmp(tmp2[11]).intl;
    obj1 = { username: null };
    obj1[0] = memo;
    obj[1] = intl2.formatToPlainString(tmp(tmp2[11]).t["kA0S/d"], obj1);
    const intl3 = tmp(tmp2[11]).intl;
    obj[2] = intl3.string(tmp(tmp2[11]).t.G08MKu);
    obj[3] = stateFromStores;
    obj[5] = tmp6;
    obj[6] = jsx(tmp(tmp2[12]).DenyIcon, { color: "text-feedback-critical" });
    tmp7 = jsx(channelId(tmp2[10]), { username: null });
    const tmp10 = channelId(tmp2[10]);
  }
  return tmp7;
};