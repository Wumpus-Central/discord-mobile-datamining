// discord_app/modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import SafetyToastsActionCreatorsDefault from "../../../safety_common/SafetyToastsActionCreators.native.tsx";
import MuteSettingsUtils from "../../../main_tabs_v2/native/sidebar/details/screens/MuteSettingsUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const MuteUntilSeconds = fn(1084).MuteUntilSeconds;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx");

export default function MuteUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  ChannelStore = undefined;
  const dMFromUserId = ChannelStore.getDMFromUserId(user.id);
  let obj = user(reportId[6]);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
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
    return NicknameUtilsDefault.getName(guild_id, id, user);
  }, items2);
  const items3 = [dMFromUserId];
  let flag = stateFromStores.useMemo(() => MuteSettingsUtils.getMuteSettings(dMFromUserId), items3).muted;
  if (flag == null) {
    flag = false;
  }
  const tmp7 = dMFromUserId(stateFromStores.useState(flag), 2);
  ChannelStore = tmp7[1];
  const items4 = [dMFromUserId, channelId, user, reportId];
  let tmp9 = null;
  if (null != user) {
    obj = { title: null, disabledTitle: null, description: null, disabled: null, onPress: null, icon: null };
    const intl = tmp2(tmp3[12]).intl;
    obj = { username: memo };
    obj.title = intl.formatToPlainString(tmp2(tmp3[12]).t.TRp5wR, obj);
    const intl2 = tmp2(tmp3[12]).intl;
    const obj1 = { username: memo };
    obj.disabledTitle = intl2.formatToPlainString(tmp2(tmp3[12]).t.raALhx, obj1);
    const intl3 = tmp2(tmp3[12]).intl;
    obj.description = intl3.string(tmp2(tmp3[12]).t["yM/+AJ"]);
    obj.disabled = tmp7[0];
    obj.onPress = tmp8;
    obj.icon = jsx(tmp2(tmp3[13]).BellSlashIcon, {});
    tmp9 = jsx(channelId(tmp3[11]), { username: memo });
    const tmp12 = channelId(tmp3[11]);
  }
  return tmp9;
}
