// discord_app/modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import UserSettingsConstants from "../../../user_settings/UserSettingsConstants.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import SafetyToastsActionCreatorsDefault from "../../../safety_common/SafetyToastsActionCreators.native.tsx";
import MuteSettingsUtils from "../../../main_tabs_v2/native/sidebar/details/screens/MuteSettingsUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore_mod from "../../../../stores/ChannelStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channelId, obj1, obj5, obj6, showMuteSuccessToastResult, trackWithMetadataResult, user;

let ChannelStore = ChannelStore_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const MuteUntilSeconds = UserSettingsConstants.MuteUntilSeconds;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let obj3;
      let reportId;
      let tmp10;
      let tmp4;
      let tmp7;
      let obj = user(reportId[7]);
      const cResult = obj.c(28);
      const tmp = user;
      user = user.user;
      channelId = user.channelId;
      reportId = user.reportId;
      if (cResult[0] !== user.id) {
        const dMFromUserId = ChannelStore.getDMFromUserId(user.id);
        cResult[0] = user.id;
        cResult[1] = dMFromUserId;
        tmp4 = dMFromUserId;
      } else {
        tmp4 = cResult[1];
      }
      channelId = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[2] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== channelId) {
        class T {
          constructor() {
            return closure_5.getChannel(channelId);
          }
        }
        const items1 = [channelId];
        cResult[3] = channelId;
        cResult[4] = T;
        cResult[5] = items1;
        tmp10 = items1;
      } else {
        class T {
          constructor() {
            return closure_5.getChannel(channelId);
          }
        }
        tmp10 = cResult[5];
      }
      const tmpResult = tmp(reportId[8]);
      const stateFromStores = tmpResult.useStateFromStores(tmp7, T, tmp10);
      const tmp12 = cResult[6];
      if (stateFromStores != null) {
        class T {
          constructor() {
            return closure_5.getChannel(channelId);
          }
        }
      }
      if (tmp12 === undefined) {
        class T {
          constructor() {
            return closure_5.getChannel(channelId);
          }
        }
        const tmp13 = cResult[7];
        if (stateFromStores != null) {
          class T {
            constructor() {
              return closure_5.getChannel(channelId);
            }
          }
        }
        if (tmp13 === tmp14) {
          let tmp17;
          class T {
            constructor() {
              return closure_5.getChannel(channelId);
            }
          }
          if (cResult[10] !== tmp4) {
            class T {
              constructor() {
                return closure_5.getChannel(channelId);
              }
            }
            const muteSettings = obj3.getMuteSettings(tmp4);
            cResult[10] = tmp4;
            cResult[11] = muteSettings;
            tmp17 = muteSettings;
          } else {
            class T {
              constructor() {
                return closure_5.getChannel(channelId);
              }
            }
          }
          const muted = tmp17.muted;
          const useState = react.useState;
          if (muted == null) {
            class T {
              constructor() {
                return closure_5.getChannel(channelId);
              }
            }
          }
          [r10085, react] = channelId(useState(muted), 2);
          channelId(useState(muted), 2);
          if (cResult[12] === channelId) {
            class T {
              constructor() {
                return closure_5.getChannel(channelId);
              }
            }
          }
          class E {
            constructor() {
              tmp = closure_4(true);
              obj = closure_1(closure_2[11]);
              obj1 = { other_user_id: user.id, report_id: reportId };
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.IAR_MUTE_USER_BUTTON_CLICKED, obj1);
              obj3 = closure_0(closure_2[10]);
              obj6 = { channelId: closure_3, guildId: null, muteDurationSeconds: MuteUntilSeconds.ALWAYS };
              result = obj3.handleMuteSettingPress(obj6);
              obj5 = closure_1(closure_2[12]);
              showMuteSuccessToastResult = obj5.showMuteSuccessToast(user.id, channelId);
              return;
            }
          }
          cResult[12] = channelId;
          cResult[13] = tmp4;
          cResult[14] = reportId;
          cResult[15] = user.id;
          cResult[16] = E;
        }
      }
      const getName = channelId(reportId[9]).getName;
      channelId(reportId[9]);
      if (stateFromStores != null) {
        class T {
          constructor() {
            return closure_5.getChannel(channelId);
          }
        }
      }
      if (stateFromStores != null) {
        class T {
          constructor() {
            return closure_5.getChannel(channelId);
          }
        }
      }
      const name = getName(undefined, undefined, user);
      if (stateFromStores != null) {
        class T {
          constructor() {
            return closure_5.getChannel(channelId);
          }
        }
      }
      cResult[6] = undefined;
      if (stateFromStores != null) {
        class T {
          constructor() {
            return closure_5.getChannel(channelId);
          }
        }
      }
      cResult[7] = undefined;
      cResult[8] = user;
      cResult[9] = name;
    }
  : (user) => {
      let closure_5;
      user = user.user;
      channelId = user.channelId;
      const reportId = user.reportId;
      ChannelStore = undefined;
      const dMFromUserId = ChannelStore.getDMFromUserId(user.id);
      let obj = user(reportId[8]);
      const items = [ChannelStore];
      const items1 = [channelId];
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
      const items2 = [stateFromStores, user];
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
      }, items2);
      const items3 = [dMFromUserId];
      let flag = stateFromStores.useMemo(() => {
        const obj = MuteSettingsUtils;
        return obj.getMuteSettings(dMFromUserId);
      }, items3).muted;
      const useState = stateFromStores.useState;
      if (flag == null) {
        flag = false;
      }
      const tmp7 = dMFromUserId(useState(flag), 2);
      ChannelStore = tmp7[1];
      const items4 = [dMFromUserId, channelId, user, reportId];
      const first = tmp7[0];
      let tmp10 = null;
      if (null != user) {
        channelId(reportId[15]);
        const intl = tmp2(tmp3[13]).intl;
        let obj3 = { username: memo };
        const intl2 = tmp2(tmp3[13]).intl;
        let obj4 = { username: memo };
        const intl3 = tmp2(tmp3[13]).intl;
        tmp10 = (
          <tmp13
            title={intl.formatToPlainString(user(reportId[13]).t.TRp5wR, obj3)}
            disabledTitle={intl2.formatToPlainString(user(reportId[13]).t.raALhx, obj4)}
            description={intl3.string(user(reportId[13]).t["yM/+AJ"])}
            disabled={first}
            onPress={tmp9}
            icon={null}
          />
        );
      }
      return tmp10;
    };
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx");

export default tmp2;
