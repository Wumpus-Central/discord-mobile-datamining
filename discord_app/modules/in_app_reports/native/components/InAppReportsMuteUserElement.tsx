// === Module 12732: InAppReportsMuteUserElement ===

// Module 12732 (InAppReportsMuteUserElement)
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8113 */;
import MuteSettingsUtils from "MuteSettingsUtils" /* 9813 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const MuteUntilSeconds = fn(1095).MuteUntilSeconds;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(reportId[7]).c(28);
  user = user.user;
  channelId = user.channelId;
  reportId = user.reportId;
  if (cResult[0] !== user.id) {
    const dMFromUserId = ChannelStore.getDMFromUserId(user.id);
    cResult[0] = user.id;
    cResult[1] = dMFromUserId;
    let tmp4 = dMFromUserId;
  } else {
    tmp4 = cResult[1];
  }
  channelId = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[2] = items;
    let tmp7 = items;
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
    let tmp10 = items1;
  } else {
    class T {
      constructor() {
        return closure_5.getChannel(channelId);
      }
    }
    tmp10 = cResult[5];
  }
  let obj = user(reportId[7]);
  const stateFromStores = user(reportId[8]).useStateFromStores(tmp7, T, tmp10);
  if (stateFromStores != null) {
    class T {
      constructor() {
        return closure_5.getChannel(channelId);
      }
    }
  }
  if (cResult[6] === undefined) {
    class T {
      constructor() {
        return closure_5.getChannel(channelId);
      }
    }
    if (stateFromStores != null) {
      class T {
        constructor() {
          return closure_5.getChannel(channelId);
        }
      }
    }
    if (cResult[7] === tmp12) {
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
        const muteSettings = obj4.getMuteSettings(tmp4);
        cResult[10] = tmp4;
        cResult[11] = muteSettings;
        const tmp14 = muteSettings;
      } else {
        class T {
          constructor() {
            return closure_5.getChannel(channelId);
          }
        }
      }
      const muted = tmp14.muted;
      if (muted == null) {
        class T {
          constructor() {
            return closure_5.getChannel(channelId);
          }
        }
      }
      [r10085, noop] = channelId(noop.useState(muted), 2);
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
      const tmp18 = channelId(noop.useState(muted), 2);
    }
  }
  const tmpResult = user(reportId[8]);
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
  const name = channelId(reportId[9]).getName(undefined, undefined, user);
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
  let obj3 = channelId(reportId[9]);
}) : ((user) => {
  user = user.user;
  channelId = user.channelId;
  const reportId = user.reportId;
  ChannelStore = undefined;
  const dMFromUserId = ChannelStore.getDMFromUserId(user.id);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = user(reportId[8]).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const items2 = [stateFromStores, user];
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
    let obj2 = { title: null, disabledTitle: null, description: null, disabled: null, onPress: null, icon: null };
    const intl = tmp2(tmp3[13]).intl;
    let obj3 = { username: memo };
    obj2.title = intl.formatToPlainString(tmp2(tmp3[13]).t.TRp5wR, obj3);
    const intl2 = tmp2(tmp3[13]).intl;
    let obj4 = { username: memo };
    obj2.disabledTitle = intl2.formatToPlainString(tmp2(tmp3[13]).t.raALhx, obj4);
    const intl3 = tmp2(tmp3[13]).intl;
    obj2.description = intl3.string(tmp2(tmp3[13]).t["yM/+AJ"]);
    obj2.disabled = tmp7[0];
    obj2.onPress = tmp8;
    obj2.icon = jsx(tmp2(tmp3[14]).BellSlashIcon, {});
    tmp9 = jsx(channelId(tmp3[15]), { title: null, disabledTitle: null, description: null, disabled: null, onPress: null, icon: null });
    const tmp12 = channelId(tmp3[15]);
  }
  return tmp9;
});