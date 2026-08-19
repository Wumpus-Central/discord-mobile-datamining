// discord_app/modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import markAllUserIdListsStale from "../../../../stores/RelationshipStore.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx");

export default function BlockUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  let obj = user(reportId[5]);
  const items = [closure_5];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.isBlocked(user.id), items1);
  obj1 = user(reportId[5]);
  const items2 = [closure_4];
  const items3 = [channelId];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => closure_1_4.getChannel(channelId), items3);
  const items4 = [stateFromStores1, user];
  const memo = stateFromStores1.useMemo(() => {
    let guild_id;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    return channelId(reportId[6]).getName(guild_id, id, user);
  }, items4);
  const items5 = [user, reportId, channelId];
  let tmp7 = null;
  if (null != user) {
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