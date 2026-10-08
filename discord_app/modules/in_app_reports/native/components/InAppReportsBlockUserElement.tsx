// discord_app/modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import RelationshipActionCreatorsDefault from "../../../../actions/RelationshipActionCreators.tsx";
import SafetyToastsActionCreatorsDefault from "../../../safety_common/SafetyToastsActionCreators.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BlockUserElement(user) {
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
        const fn = function u() {
          return RelationshipStore.isBlocked(user.id);
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
      const stateFromStores = user(reportId[7]).useStateFromStores(first, tmp6, tmp7);
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
      const stateFromStores1 = user(reportId[7]).useStateFromStores(tmp9, tmp11, tmp12);
      let guild_id;
      if (stateFromStores1 != null) {
        guild_id = stateFromStores1.guild_id;
      }
      if (cResult[9] === guild_id) {
        let id;
        if (stateFromStores1 != null) {
          id = stateFromStores1.id;
        }
        if (cResult[10] === id) {
          if (cResult[13] === channelId) {
            if (cResult[14] === reportId) {
              class U {
                constructor() {
                  obj = closure_1(closure_2[9]);
                  obj1 = { other_user_id: user.id, report_id: reportId };
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.IAR_BLOCK_USER_BUTTON_CLICKED, obj1);
                  obj3 = closure_1(closure_2[10]);
                  blockUserResult = obj3.blockUser(user.id, { location: "ReportMenuBlockUser-iOS" });
                  obj4 = closure_1(closure_2[11]);
                  result = obj4.showBlockSuccessToast(user.id, channelId);
                  return;
                }
              }
            }
          }
          class U {
            constructor() {
              obj = closure_1(closure_2[9]);
              obj1 = { other_user_id: user.id, report_id: reportId };
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.IAR_BLOCK_USER_BUTTON_CLICKED, obj1);
              obj3 = closure_1(closure_2[10]);
              blockUserResult = obj3.blockUser(user.id, { location: "ReportMenuBlockUser-iOS" });
              obj4 = closure_1(closure_2[11]);
              result = obj4.showBlockSuccessToast(user.id, channelId);
              return;
            }
          }
          cResult[13] = channelId;
          cResult[14] = reportId;
          cResult[15] = user.id;
          cResult[16] = U;
        }
      }
      const tmpResult2 = user(reportId[7]);
      let guild_id1;
      if (stateFromStores1 != null) {
        guild_id1 = stateFromStores1.guild_id;
      }
      let id1;
      if (stateFromStores1 != null) {
        id1 = stateFromStores1.id;
      }
      const name = channelId(reportId[8]).getName(guild_id1, id1, user);
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
      const obj4 = channelId(reportId[8]);
    }
  : function BlockUserElement(user) {
      user = user.user;
      const channelId = user.channelId;
      const reportId = user.reportId;
      const items = [RelationshipStore];
      const items1 = [user];
      const stateFromStores = user(reportId[7]).useStateFromStores(
        items,
        () => RelationshipStore.isBlocked(user.id),
        items1,
      );
      let obj = user(reportId[7]);
      const items2 = [ChannelStore];
      const items3 = [channelId];
      const stateFromStores1 = user(reportId[7]).useStateFromStores(
        items2,
        () => ChannelStore.getChannel(channelId),
        items3,
      );
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
        let obj3 = {
          title: null,
          disabledTitle: null,
          description: null,
          disabled: null,
          variant: "danger",
          onPress: null,
          icon: null,
        };
        const intl = tmp(tmp2[12]).intl;
        const obj4 = { username: memo };
        obj3.title = intl.formatToPlainString(tmp(tmp2[12]).t["Q1o/f3"], obj4);
        const intl2 = tmp(tmp2[12]).intl;
        const obj5 = { username: memo };
        obj3.disabledTitle = intl2.formatToPlainString(tmp(tmp2[12]).t["kA0S/d"], obj5);
        const intl3 = tmp(tmp2[12]).intl;
        obj3.description = intl3.string(tmp(tmp2[12]).t.G08MKu);
        obj3.disabled = stateFromStores;
        obj3.onPress = tmp6;
        obj3.icon = jsx(tmp(tmp2[13]).DenyIcon, { color: "text-feedback-critical" });
        tmp7 = jsx(channelId(tmp2[14]), {
          title: null,
          disabledTitle: null,
          description: null,
          disabled: null,
          variant: "danger",
          onPress: null,
          icon: null,
        });
        const tmp10 = channelId(tmp2[14]);
      }
      return tmp7;
    };
