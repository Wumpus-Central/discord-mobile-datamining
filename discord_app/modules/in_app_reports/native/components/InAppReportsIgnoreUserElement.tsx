// === Module 13396: InAppReportsIgnoreUserElement ===

// Module 13396 (InAppReportsIgnoreUserElement)
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5105 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5405 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7004 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsIgnoreUserElement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function IgnoreUserElement(user) {
  const cResult = user(reportId[6]).c(28);
  user = user.user;
  const channelId = user.channelId;
  reportId = user.reportId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function _() {
      return { isIgnored: RelationshipStore.isIgnored(user.id), isBlocked: RelationshipStore.isBlocked(user.id) };
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== user) {
    const items1 = [user];
    cResult[3] = user;
    cResult[4] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[4];
  }
  let obj = user(reportId[6]);
  const stateFromStoresObject = user(reportId[7]).useStateFromStoresObject(first, tmp6, tmp7);
  let isBlocked = stateFromStoresObject.isIgnored;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[5] = items2;
    let tmp9 = items2;
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
    let tmp12 = items3;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[7];
    tmp12 = cResult[8];
  }
  const tmpResult = user(reportId[7]);
  const stateFromStores = user(reportId[7]).useStateFromStores(tmp9, tmp11, tmp12);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (cResult[9] === guild_id) {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (cResult[10] === id) {
      if (cResult[11] === user) {
        let tmp16 = cResult[12];
      }
      if (cResult[13] === channelId) {
        if (cResult[14] === reportId) {
          if (cResult[15] === user.id) {
            let tmp22 = cResult[16];
          }
          if (null == user) {
            return null;
          } else {
            if (cResult[17] !== tmp16) {
              const intl = tmp(tmp2[11]).intl;
              class B {
                constructor() {
                  obj = closure_1(closure_2[9]);
                  obj1 = { other_user_id: user.id, report_id: reportId };
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.IAR_IGNORE_USER_BUTTON_CLICKED, obj1);
                  obj3 = closure_1(closure_2[10]);
                  ignoreUserResult = obj3.ignoreUser(user.id, "mobile_iar_ignore_user_element", channelId);
                  return;
                }
              }
              tmp24[0] = tmp16;
              const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[11]).t.U3yyFs, tmp24);
              cResult[17] = tmp16;
              cResult[18] = formatToPlainStringResult;
              let tmp23 = formatToPlainStringResult;
            } else {
              tmp23 = cResult[18];
            }
            if (cResult[19] !== tmp16) {
              const intl2 = tmp(tmp2[11]).intl;
              class B {
                constructor() {
                  obj = closure_1(closure_2[9]);
                  obj1 = { other_user_id: user.id, report_id: reportId };
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.IAR_IGNORE_USER_BUTTON_CLICKED, obj1);
                  obj3 = closure_1(closure_2[10]);
                  ignoreUserResult = obj3.ignoreUser(user.id, "mobile_iar_ignore_user_element", channelId);
                  return;
                }
              }
              tmp27[0] = tmp16;
              const formatToPlainStringResult1 = intl2.formatToPlainString(tmp(tmp2[11]).t["264qVM"], tmp27);
              cResult[19] = tmp16;
              cResult[20] = formatToPlainStringResult1;
              let tmp26 = formatToPlainStringResult1;
            } else {
              tmp26 = cResult[20];
            }
            class B {
              constructor() {
                obj = closure_1(closure_2[9]);
                obj1 = { other_user_id: user.id, report_id: reportId };
                trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.IAR_IGNORE_USER_BUTTON_CLICKED, obj1);
                obj3 = closure_1(closure_2[10]);
                ignoreUserResult = obj3.ignoreUser(user.id, "mobile_iar_ignore_user_element", channelId);
                return;
              }
            }
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const string = tmp(tmp2[11]).intl.string;
              class B {
                constructor() {
                  obj = closure_1(closure_2[9]);
                  obj1 = { other_user_id: user.id, report_id: reportId };
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.IAR_IGNORE_USER_BUTTON_CLICKED, obj1);
                  obj3 = closure_1(closure_2[10]);
                  ignoreUserResult = obj3.ignoreUser(user.id, "mobile_iar_ignore_user_element", channelId);
                  return;
                }
              }
              cResult[21] = tmp30;
              let tmp29 = tmp30;
            } else {
              tmp29 = cResult[21];
            }
            if (!isBlocked) {
              isBlocked = stateFromStoresObject.isBlocked;
            }
            const _Symbol = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp33 = jsx(tmp(tmp2[12]).EyeSlashIcon, {});
              class B {
                constructor() {
                  obj = closure_1(closure_2[9]);
                  obj1 = { other_user_id: user.id, report_id: reportId };
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.IAR_IGNORE_USER_BUTTON_CLICKED, obj1);
                  obj3 = closure_1(closure_2[10]);
                  ignoreUserResult = obj3.ignoreUser(user.id, "mobile_iar_ignore_user_element", channelId);
                  return;
                }
              }
              cResult[22] = tmp33;
              let tmp31 = tmp33;
            } else {
              tmp31 = cResult[22];
            }
            if (cResult[23] === tmp22) {
              if (cResult[24] === tmp26) {
                if (cResult[25] === isBlocked) {
                  if (cResult[26] === tmp23) {
                    let tmp34 = cResult[27];
                  }
                  return tmp34;
                }
              }
            }
            let obj2 = { title: tmp23, disabledTitle: tmp26, description: tmp29, disabled: isBlocked, onPress: tmp22, icon: tmp31 };
            const tmp37 = jsx(channelId(tmp2[13]), { title: tmp23, disabledTitle: tmp26, description: tmp29, disabled: isBlocked, onPress: tmp22, icon: tmp31 });
            cResult[23] = tmp22;
            cResult[24] = tmp26;
            cResult[25] = isBlocked;
            cResult[26] = tmp23;
            cResult[27] = tmp37;
            tmp34 = tmp37;
          }
        }
      }
      class B {
        constructor() {
          obj = closure_1(closure_2[9]);
          obj1 = { other_user_id: user.id, report_id: reportId };
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.IAR_IGNORE_USER_BUTTON_CLICKED, obj1);
          obj3 = closure_1(closure_2[10]);
          ignoreUserResult = obj3.ignoreUser(user.id, "mobile_iar_ignore_user_element", channelId);
          return;
        }
      }
      cResult[13] = channelId;
      cResult[14] = reportId;
      cResult[15] = user.id;
      cResult[16] = B;
      tmp22 = B;
    }
  }
  const tmpResult2 = user(reportId[7]);
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const name = channelId(reportId[8]).getName(guild_id1, id1, user);
  let guild_id2;
  if (stateFromStores != null) {
    guild_id2 = stateFromStores.guild_id;
  }
  cResult[9] = guild_id2;
  let id2;
  if (stateFromStores != null) {
    id2 = stateFromStores.id;
  }
  cResult[10] = id2;
  cResult[11] = user;
  cResult[12] = name;
  tmp16 = name;
  const obj4 = channelId(reportId[8]);
}) : (function IgnoreUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  const items = [RelationshipStore];
  const items1 = [user];
  const stateFromStoresObject = user(reportId[7]).useStateFromStoresObject(items, () => ({ isIgnored: RelationshipStore.isIgnored(user.id), isBlocked: RelationshipStore.isBlocked(user.id) }), items1);
  ({ isIgnored, isBlocked } = stateFromStoresObject);
  let obj = user(reportId[7]);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores = user(reportId[7]).useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
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
    const intl = tmp(tmp2[11]).intl;
    const obj4 = { username: memo };
    obj3.title = intl.formatToPlainString(tmp(tmp2[11]).t.U3yyFs, obj4);
    const intl2 = tmp(tmp2[11]).intl;
    const obj5 = { username: memo };
    obj3.disabledTitle = intl2.formatToPlainString(tmp(tmp2[11]).t["264qVM"], obj5);
    const intl3 = tmp(tmp2[11]).intl;
    obj3.description = intl3.string(tmp(tmp2[11]).t.naWE6W);
    if (!isIgnored) {
      isIgnored = isBlocked;
    }
    obj3.disabled = isIgnored;
    obj3.onPress = tmp6;
    obj3.icon = jsx(tmp(tmp2[12]).EyeSlashIcon, {});
    tmp8Result = jsx(channelId(tmp2[13]), { title: null, disabledTitle: null, description: null, disabled: null, onPress: null, icon: null });
    const tmp10 = channelId(tmp2[13]);
  }
  return tmp8Result;
});