// discord_app/modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import SafetyToastsActionCreatorsDefault from "../../../safety_common/SafetyToastsActionCreators.native.tsx";
import RelationshipActionCreatorsDefault from "../../../../actions/RelationshipActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx");

export default function BlockUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  let obj = user(reportId[5]);
  const items = [RelationshipStore];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(user.id), items1);
  let obj1 = user(reportId[5]);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
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
    obj = {
      title: null,
      disabledTitle: null,
      description: null,
      disabled: null,
      variant: "danger",
      onPress: null,
      icon: null,
    };
    const intl = tmp(tmp2[11]).intl;
    obj = { username: memo };
    obj.title = intl.formatToPlainString(tmp(tmp2[11]).t["Q1o/f3"], obj);
    const intl2 = tmp(tmp2[11]).intl;
    obj1 = { username: memo };
    obj.disabledTitle = intl2.formatToPlainString(tmp(tmp2[11]).t["kA0S/d"], obj1);
    const intl3 = tmp(tmp2[11]).intl;
    obj.description = intl3.string(tmp(tmp2[11]).t.G08MKu);
    obj.disabled = stateFromStores;
    obj.onPress = tmp6;
    obj.icon = jsx(tmp(tmp2[12]).DenyIcon, { color: "text-feedback-critical" });
    tmp7 = jsx(channelId(tmp2[10]), { username: memo });
    const tmp10 = channelId(tmp2[10]);
  }
  return tmp7;
}
