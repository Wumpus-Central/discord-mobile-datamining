// discord_app/modules/in_app_reports/native/components/InAppReportsIgnoreUserElement.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import RelationshipActionCreatorsDefault from "../../../../actions/RelationshipActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let user;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
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
        const fn = function _() {
          const obj = {
            isIgnored: RelationshipStore.isIgnored(user.id),
            isBlocked: RelationshipStore.isBlocked(user.id),
          };
          return obj;
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
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
      let isIgnored = stateFromStoresObject.isIgnored;
      const isBlocked = stateFromStoresObject.isBlocked;
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
      const stateFromStores = tmpResult2.useStateFromStores(tmp9, tmp11, tmp12);
      let guild_id;
      const tmp14 = cResult[9];
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (tmp14 === guild_id) {
        let id;
        const tmp16 = cResult[10];
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        if (tmp16 === id) {
          let tmp18;
          if (cResult[11] === user) {
            tmp18 = cResult[12];
          }
          if (cResult[13] === channelId) {
            if (cResult[14] === reportId) {
              let tmp25;
              if (cResult[15] === user.id) {
                tmp25 = cResult[16];
              }
              if (null == user) {
                return null;
              } else {
                let tmp26;
                let tmp29;
                let tmp32;
                let tmp34;
                if (cResult[17] !== tmp18) {
                  const intl = tmp(tmp2[11]).intl;
                  const formatToPlainString = intl.formatToPlainString;
                  class B {
                    constructor() {
                      const obj = AppAnalyticsUtilsDefault;
                      const obj2 = { other_user_id: user.id, report_id: reportId };
                      obj.trackWithMetadata(AnalyticEvents.IAR_IGNORE_USER_BUTTON_CLICKED, obj2);
                      const obj3 = RelationshipActionCreatorsDefault;
                      obj3.ignoreUser(user.id, "mobile_iar_ignore_user_element", channelId);
                    }
                  }
                  tmp27[0] = tmp18;
                  const formatToPlainStringResult = formatToPlainString(user(reportId[11]).t.U3yyFs, tmp27);
                  cResult[17] = tmp18;
                  cResult[18] = formatToPlainStringResult;
                  tmp26 = formatToPlainStringResult;
                } else {
                  tmp26 = cResult[18];
                }
                if (cResult[19] !== tmp18) {
                  const intl2 = tmp(tmp2[11]).intl;
                  const formatToPlainString2 = intl2.formatToPlainString;
                  class B {
                    constructor() {
                      const obj = AppAnalyticsUtilsDefault;
                      const obj2 = { other_user_id: user.id, report_id: reportId };
                      obj.trackWithMetadata(AnalyticEvents.IAR_IGNORE_USER_BUTTON_CLICKED, obj2);
                      const obj3 = RelationshipActionCreatorsDefault;
                      obj3.ignoreUser(user.id, "mobile_iar_ignore_user_element", channelId);
                    }
                  }
                  tmp30[0] = tmp18;
                  const formatToPlainString2Result = formatToPlainString2(user(reportId[11]).t["264qVM"], tmp30);
                  cResult[19] = tmp18;
                  cResult[20] = formatToPlainString2Result;
                  tmp29 = formatToPlainString2Result;
                } else {
                  tmp29 = cResult[20];
                }
                class B {
                  constructor() {
                    const obj = AppAnalyticsUtilsDefault;
                    const obj2 = { other_user_id: user.id, report_id: reportId };
                    obj.trackWithMetadata(AnalyticEvents.IAR_IGNORE_USER_BUTTON_CLICKED, obj2);
                    const obj3 = RelationshipActionCreatorsDefault;
                    obj3.ignoreUser(user.id, "mobile_iar_ignore_user_element", channelId);
                  }
                }
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const string = tmp(tmp2[11]).intl.string;
                  class B {
                    constructor() {
                      const obj = AppAnalyticsUtilsDefault;
                      const obj2 = { other_user_id: user.id, report_id: reportId };
                      obj.trackWithMetadata(AnalyticEvents.IAR_IGNORE_USER_BUTTON_CLICKED, obj2);
                      const obj3 = RelationshipActionCreatorsDefault;
                      obj3.ignoreUser(user.id, "mobile_iar_ignore_user_element", channelId);
                    }
                  }
                  cResult[21] = tmp33;
                  tmp32 = tmp33;
                } else {
                  tmp32 = cResult[21];
                }
                if (!isIgnored) {
                  isIgnored = isBlocked;
                }
                const _Symbol = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp36 = jsx(user(reportId[12]).EyeSlashIcon, {});
                  class B {
                    constructor() {
                      const obj = AppAnalyticsUtilsDefault;
                      const obj2 = { other_user_id: user.id, report_id: reportId };
                      obj.trackWithMetadata(AnalyticEvents.IAR_IGNORE_USER_BUTTON_CLICKED, obj2);
                      const obj3 = RelationshipActionCreatorsDefault;
                      obj3.ignoreUser(user.id, "mobile_iar_ignore_user_element", channelId);
                    }
                  }
                  cResult[22] = tmp36;
                  tmp34 = tmp36;
                } else {
                  tmp34 = cResult[22];
                }
                if (cResult[23] === tmp25) {
                  if (cResult[24] === tmp29) {
                    if (cResult[25] === isIgnored) {
                      let tmp37;
                      if (cResult[26] === tmp26) {
                        tmp37 = cResult[27];
                      }
                      return tmp37;
                    }
                  }
                }
                const tmp40 = jsx(channelId(reportId[13]), {
                  title: tmp26,
                  disabledTitle: tmp29,
                  description: tmp32,
                  disabled: isIgnored,
                  onPress: tmp25,
                  icon: tmp34,
                });
                cResult[23] = tmp25;
                cResult[24] = tmp29;
                cResult[25] = isIgnored;
                cResult[26] = tmp26;
                cResult[27] = tmp40;
                tmp37 = tmp40;
              }
            }
          }
          class B {
            constructor() {
              const obj = AppAnalyticsUtilsDefault;
              const obj2 = { other_user_id: user.id, report_id: reportId };
              obj.trackWithMetadata(AnalyticEvents.IAR_IGNORE_USER_BUTTON_CLICKED, obj2);
              const obj3 = RelationshipActionCreatorsDefault;
              obj3.ignoreUser(user.id, "mobile_iar_ignore_user_element", channelId);
            }
          }
          cResult[13] = channelId;
          cResult[14] = reportId;
          cResult[15] = user.id;
          cResult[16] = B;
          tmp25 = B;
        }
      }
      let guild_id1;
      const getName = channelId(reportId[8]).getName;
      channelId(reportId[8]);
      if (stateFromStores != null) {
        guild_id1 = stateFromStores.guild_id;
      }
      let id1;
      if (stateFromStores != null) {
        id1 = stateFromStores.id;
      }
      const name = getName(guild_id1, id1, user);
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
      tmp18 = name;
    }
  : (user) => {
      let isBlocked;
      let isIgnored;
      user = user.user;
      const channelId = user.channelId;
      const reportId = user.reportId;
      const tmp = user;
      let obj = user(reportId[7]);
      const items = [RelationshipStore];
      const items1 = [user];
      const stateFromStoresObject = obj.useStateFromStoresObject(
        items,
        () => {
          const obj = {
            isIgnored: RelationshipStore.isIgnored(user.id),
            isBlocked: RelationshipStore.isBlocked(user.id),
          };
          return obj;
        },
        items1,
      );
      ({ isIgnored, isBlocked } = stateFromStoresObject);
      let obj2 = user(reportId[7]);
      const items2 = [ChannelStore];
      const items3 = [channelId];
      const stateFromStores = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
      const items4 = [stateFromStores, user];
      const memo = stateFromStores.useMemo(() => {
        let guild_id;
        const getName = NicknameUtilsDefault.getName;
        NicknameUtilsDefault;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        return getName(guild_id, id, user);
      }, items4);
      const items5 = [user, reportId, channelId];
      let tmp8Result = null;
      if (null != user) {
        channelId(reportId[13]);
        const intl = tmp(tmp2[11]).intl;
        const obj4 = { username: memo };
        const intl2 = tmp(tmp2[11]).intl;
        const obj5 = { username: memo };
        const intl3 = tmp(tmp2[11]).intl;
        if (!isIgnored) {
          isIgnored = isBlocked;
        }
        tmp8Result = (
          <tmp10
            title={intl.formatToPlainString(tmp(reportId[11]).t.U3yyFs, obj4)}
            disabledTitle={intl2.formatToPlainString(tmp(reportId[11]).t["264qVM"], obj5)}
            description={intl3.string(tmp(reportId[11]).t.naWE6W)}
            disabled={isIgnored}
            onPress={tmp6}
            icon={null}
          />
        );
      }
      return tmp8Result;
    };
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsIgnoreUserElement.tsx");

export default tmp2;
