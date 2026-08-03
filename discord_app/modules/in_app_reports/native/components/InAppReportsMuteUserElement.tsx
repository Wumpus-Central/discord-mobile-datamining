// === Module 12525: MuteUserElement ===

// Module 12525 (MuteUserElement)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { AnalyticEvents } from "ME";
import { MuteUntilSeconds } from "MAX_FAVORITES";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx");

export default function MuteUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  let dMFromUserId;
  let stateFromStores;
  dMFromUserId = undefined;
  dMFromUserId = dMFromUserId.getDMFromUserId(user.id);
  let obj = user(reportId[6]);
  const items = [dMFromUserId];
  const items1 = [channelId];
  stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId), items1);
  const items2 = [stateFromStores, user];
  const memo = stateFromStores.useMemo(() => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = tmp.guild_id;
    }
    let id;
    if (stateFromStores != null) {
      id = tmp.id;
    }
    return channelId(reportId[7]).getName(guild_id, id, user);
  }, items2);
  const items3 = [dMFromUserId];
  let flag = stateFromStores.useMemo(() => user(reportId[8]).getMuteSettings(dMFromUserId), items3).muted;
  if (flag == null) {
    flag = false;
  }
  const tmp7 = dMFromUserId(stateFromStores.useState(flag), 2);
  dMFromUserId = tmp7[1];
  const items4 = [dMFromUserId, channelId, user, reportId];
  let tmp9 = null;
  if (null != user) {
    obj = { title: null, disabledTitle: null, description: null, disabled: null, onPress: null, icon: null };
    const intl = tmp2(tmp3[12]).intl;
    obj = { username: null };
    obj[0] = memo;
    obj[0] = intl.formatToPlainString(tmp2(tmp3[12]).t.TRp5wR, obj);
    const intl2 = tmp2(tmp3[12]).intl;
    const obj1 = { username: null };
    obj1[0] = memo;
    obj[1] = intl2.formatToPlainString(tmp2(tmp3[12]).t.raALhx, obj1);
    const intl3 = tmp2(tmp3[12]).intl;
    obj[2] = intl3.string(tmp2(tmp3[12]).t["yM/+AJ"]);
    obj[3] = tmp7[0];
    obj[4] = tmp8;
    obj[5] = jsx(tmp2(tmp3[13]).BellSlashIcon, {});
    tmp9 = jsx(channelId(tmp3[11]), { username: null });
    const tmp12 = channelId(tmp3[11]);
  }
  return tmp9;
};