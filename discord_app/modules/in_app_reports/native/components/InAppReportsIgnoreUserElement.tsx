// === Module 9041: InAppReportsIgnoreUserElement ===

// Module 9041 (InAppReportsIgnoreUserElement)
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9042 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsIgnoreUserElement.tsx");

export default function IgnoreUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  let obj = user(reportId[5]);
  const items = [RelationshipStore];
  const items1 = [user];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isIgnored: RelationshipStore.isIgnored(user.id), isBlocked: RelationshipStore.isBlocked(user.id) }), items1);
  ({ isIgnored, isBlocked } = stateFromStoresObject);
  let obj1 = user(reportId[5]);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores = obj1.useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
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
    obj = { title: null, disabledTitle: null, description: null, disabled: null, onPress: null, icon: null };
    const intl = tmp(tmp2[10]).intl;
    obj = { username: memo };
    obj.title = intl.formatToPlainString(tmp(tmp2[10]).t.U3yyFs, obj);
    const intl2 = tmp(tmp2[10]).intl;
    obj1 = { username: memo };
    obj.disabledTitle = intl2.formatToPlainString(tmp(tmp2[10]).t["264qVM"], obj1);
    const intl3 = tmp(tmp2[10]).intl;
    obj.description = intl3.string(tmp(tmp2[10]).t.naWE6W);
    if (!isIgnored) {
      isIgnored = isBlocked;
    }
    obj.disabled = isIgnored;
    obj.onPress = tmp6;
    obj.icon = jsx(tmp(tmp2[11]).EyeSlashIcon, {});
    tmp8Result = jsx(channelId(tmp2[9]), { username: memo });
    const tmp10 = channelId(tmp2[9]);
  }
  return tmp8Result;
};