// === Module 13212: InAppReportsBlockUserElement ===

// Module 13212 (InAppReportsBlockUserElement)
import NicknameUtilsDefault from "NicknameUtils" /* 4909 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4937 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8679 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 10009 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import RelationshipStore from "RelationshipStore" /* 4406 */;

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx");

export default function BlockUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  const items = [RelationshipStore];
  const items1 = [user];
  const stateFromStores = user(reportId[5]).useStateFromStores(items, () => RelationshipStore.isBlocked(user.id), items1);
  let obj = user(reportId[5]);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores1 = user(reportId[5]).useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
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
    return NicknameUtilsDefault.getName(guild_id, id, user);
  }, items4);
  const items5 = [user, reportId, channelId];
  let tmp7 = null;
  if (null != user) {
    let obj3 = { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null };
    const intl = tmp(tmp2[11]).intl;
    const obj4 = { username: memo };
    obj3.title = intl.formatToPlainString(tmp(tmp2[11]).t["Q1o/f3"], obj4);
    const intl2 = tmp(tmp2[11]).intl;
    const obj5 = { username: memo };
    obj3.disabledTitle = intl2.formatToPlainString(tmp(tmp2[11]).t["kA0S/d"], obj5);
    const intl3 = tmp(tmp2[11]).intl;
    obj3.description = intl3.string(tmp(tmp2[11]).t.G08MKu);
    obj3.disabled = stateFromStores;
    obj3.onPress = tmp6;
    obj3.icon = jsx(tmp(tmp2[12]).DenyIcon, { color: "text-feedback-critical" });
    tmp7 = jsx(channelId(tmp2[10]), { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null });
    const tmp10 = channelId(tmp2[10]);
  }
  return tmp7;
};