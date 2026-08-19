// discord_app/modules/in_app_reports/native/components/InAppReportsIgnoreUserElement.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import markAllUserIdListsStale from "../../../../stores/RelationshipStore.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsIgnoreUserElement.tsx");

export default function IgnoreUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  let obj = user(reportId[5]);
  const items = [closure_5];
  const items1 = [user];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isIgnored: closure_1_5.isIgnored(user.id), isBlocked: closure_1_5.isBlocked(user.id) }), items1);
  ({ isIgnored, isBlocked } = stateFromStoresObject);
  obj1 = user(reportId[5]);
  const items2 = [closure_4];
  const items3 = [channelId];
  const stateFromStores = obj1.useStateFromStores(items2, () => closure_1_4.getChannel(channelId), items3);
  const items4 = [stateFromStores, user];
  const memo = stateFromStores.useMemo(() => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    return channelId(reportId[6]).getName(guild_id, id, user);
  }, items4);
  const items5 = [user, reportId, channelId];
  let tmp8Result = null;
  if (null != user) {
    const intl = tmp(tmp2[10]).intl;
    obj = { username: null };
    obj[0] = memo;
    obj[0] = intl.formatToPlainString(tmp(tmp2[10]).t.U3yyFs, obj);
    const intl2 = tmp(tmp2[10]).intl;
    obj1 = { username: null };
    obj1[0] = memo;
    obj[1] = intl2.formatToPlainString(tmp(tmp2[10]).t["264qVM"], obj1);
    const intl3 = tmp(tmp2[10]).intl;
    obj[2] = intl3.string(tmp(tmp2[10]).t.naWE6W);
    if (!isIgnored) {
      isIgnored = isBlocked;
    }
    obj[3] = isIgnored;
    obj[4] = tmp6;
    obj[5] = jsx(tmp(tmp2[11]).EyeSlashIcon, {});
    tmp8Result = jsx(channelId(tmp2[9]), { username: null });
    const tmp10 = channelId(tmp2[9]);
  }
  return tmp8Result;
};