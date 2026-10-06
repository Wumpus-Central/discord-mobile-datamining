// === Module 12731: InAppReportsBlockUserElement ===

// Module 12731 (InAppReportsBlockUserElement)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8113 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9447 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let user;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let first;
  let reportId;
  let tmp11;
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = user(reportId[6]);
  const cResult = obj.c(28);
  user = user.user;
  const channelId = user.channelId;
  reportId = user.reportId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function u() {
      return RelationshipStore.isBlocked(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== user) {
    const items1 = [user];
    cResult[3] = user;
    cResult[4] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[4];
  }
  const tmpResult = user(reportId[7]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[5] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] !== channelId) {
    const fn2 = function h() {
      return ChannelStore.getChannel(channelId);
    };
    const items3 = [channelId];
    cResult[6] = channelId;
    cResult[7] = fn2;
    cResult[8] = items3;
    tmp12 = items3;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[7];
    tmp12 = cResult[8];
  }
  const tmpResult2 = user(reportId[7]);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp11, tmp12);
  let guild_id;
  const tmp14 = cResult[9];
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  if (tmp14 === guild_id) {
    let id;
    const tmp16 = cResult[10];
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    if (tmp16 === id) {
      if (cResult[13] === channelId) {
        if (cResult[14] === reportId) {
          class C {
            constructor() {
              const obj = AppAnalyticsUtilsDefault;
              const obj2 = { other_user_id: user.id, report_id: reportId };
              obj.trackWithMetadata(AnalyticEvents.IAR_BLOCK_USER_BUTTON_CLICKED, obj2);
              const obj3 = RelationshipActionCreatorsDefault;
              obj3.blockUser(user.id, { location: "ReportMenuBlockUser-iOS" });
              const obj4 = SafetyToastsActionCreatorsDefault;
              const result = obj4.showBlockSuccessToast(user.id, channelId);
            }
          }
          return null;
        }
      }
      class C {
        constructor() {
          const obj = AppAnalyticsUtilsDefault;
          const obj2 = { other_user_id: user.id, report_id: reportId };
          obj.trackWithMetadata(AnalyticEvents.IAR_BLOCK_USER_BUTTON_CLICKED, obj2);
          const obj3 = RelationshipActionCreatorsDefault;
          obj3.blockUser(user.id, { location: "ReportMenuBlockUser-iOS" });
          const obj4 = SafetyToastsActionCreatorsDefault;
          const result = obj4.showBlockSuccessToast(user.id, channelId);
        }
      }
      cResult[13] = channelId;
      cResult[14] = reportId;
      cResult[15] = user.id;
      cResult[16] = C;
    }
  }
  let guild_id1;
  const getName = channelId(reportId[8]).getName;
  channelId(reportId[8]);
  if (stateFromStores1 != null) {
    guild_id1 = stateFromStores1.guild_id;
  }
  let id1;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  const name = getName(guild_id1, id1, user);
  let guild_id2;
  if (stateFromStores1 != null) {
    guild_id2 = stateFromStores1.guild_id;
  }
  cResult[9] = guild_id2;
  let id2;
  if (stateFromStores1 != null) {
    id2 = stateFromStores1.id;
  }
  cResult[10] = id2;
  cResult[11] = user;
  cResult[12] = name;
}) : ((user) => {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  const tmp = user;
  let obj = user(reportId[7]);
  const items = [RelationshipStore];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(user.id), items1);
  let obj2 = user(reportId[7]);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
  const items4 = [stateFromStores1, user];
  const memo = stateFromStores1.useMemo(() => {
    let guild_id;
    const getName = NicknameUtilsDefault.getName;
    NicknameUtilsDefault;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    return getName(guild_id, id, user);
  }, items4);
  const items5 = [user, reportId, channelId];
  let tmp7 = null;
  if (null != user) {
    channelId(reportId[14]);
    const intl = tmp(tmp2[12]).intl;
    let obj4 = { username: memo };
    const intl2 = tmp(tmp2[12]).intl;
    const obj5 = { username: memo };
    const intl3 = tmp(tmp2[12]).intl;
    tmp7 = <tmp10 title={intl.formatToPlainString(tmp(reportId[12]).t["Q1o/f3"], obj4)} disabledTitle={intl2.formatToPlainString(tmp(reportId[12]).t["kA0S/d"], obj5)} description={intl3.string(tmp(reportId[12]).t.G08MKu)} disabled={stateFromStores} variant="danger" onPress={tmp6} icon={null} />;
  }
  return tmp7;
});
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx");

export default tmp2;