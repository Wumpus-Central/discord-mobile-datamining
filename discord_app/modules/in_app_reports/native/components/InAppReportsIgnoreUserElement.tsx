// === Module 13299: InAppReportsIgnoreUserElement ===

// Module 13299 (InAppReportsIgnoreUserElement)
import NicknameUtilsDefault from "NicknameUtils" /* 4981 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5009 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 10087 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import RelationshipStore from "RelationshipStore" /* 4474 */;

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsIgnoreUserElement.tsx");

export default function IgnoreUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  const items = [RelationshipStore];
  const items1 = [user];
  const stateFromStoresObject = user(reportId[5]).useStateFromStoresObject(items, () => ({ isIgnored: RelationshipStore.isIgnored(user.id), isBlocked: RelationshipStore.isBlocked(user.id) }), items1);
  ({ isIgnored, isBlocked } = stateFromStoresObject);
  let obj = user(reportId[5]);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores = user(reportId[5]).useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
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
    return NicknameUtilsDefault.getName(guild_id, id, user);
  }, items4);
  const items5 = [user, reportId, channelId];
  let tmp8Result = null;
  if (null != user) {
    const obj3 = { title: null, disabledTitle: null, description: null, disabled: null, onPress: null, icon: null };
    const intl = tmp(tmp2[10]).intl;
    const obj4 = { username: memo };
    obj3.title = intl.formatToPlainString(tmp(tmp2[10]).t.U3yyFs, obj4);
    const intl2 = tmp(tmp2[10]).intl;
    const obj5 = { username: memo };
    obj3.disabledTitle = intl2.formatToPlainString(tmp(tmp2[10]).t["264qVM"], obj5);
    const intl3 = tmp(tmp2[10]).intl;
    obj3.description = intl3.string(tmp(tmp2[10]).t.naWE6W);
    if (!isIgnored) {
      isIgnored = isBlocked;
    }
    obj3.disabled = isIgnored;
    obj3.onPress = tmp6;
    obj3.icon = jsx(tmp(tmp2[11]).EyeSlashIcon, {});
    tmp8Result = jsx(channelId(tmp2[9]), { title: null, disabledTitle: null, description: null, disabled: null, onPress: null, icon: null });
    const tmp10 = channelId(tmp2[9]);
  }
  return tmp8Result;
};