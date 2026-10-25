// === Module 14002: useAppChannelOverflowMenuItems ===

// Module 14002 (useAppChannelOverflowMenuItems)
import util from "util" /* 1128 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5626 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5686 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8668 */;
import FlagIcon2 from "FlagIcon" /* 9971 */;
import restartFrames from "restartFrames" /* 10765 */;
import DoorExitIcon2 from "DoorExitIcon" /* 11535 */;
import RefreshIcon from "RefreshIcon" /* 11786 */;
import closeFrameDefault from "closeFrame" /* 13847 */;
import openAppChannelReportModalDefault from "openAppChannelReportModal" /* 14003 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const isLaunched = fn(6776).isLaunched;
const app_channel_header_mobile = "app_channel_header_mobile";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/useAppChannelOverflowMenuItems.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelOverflowMenuItems(application_id) {
  _require = application_id;
  let FlagIcon = dependencyMap;
  const cResult = require("c").c(27);
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  if (cResult[0] === application_id.guild_id) {
    if (cResult[1] === application_id.id) {
      let tmp4 = cResult[2];
    }
    const tmp6 = application_id(11885)(application_id, tmp4);
    dependencyMap = tmp6;
    const appChannelApplication = tmp(7346).useAppChannelApplication(application_id);
    let bot;
    if (appChannelApplication != null) {
      bot = appChannelApplication.bot;
    }
    if (null != application_id) {
      if (cResult[4] !== tmp6) {
        const items = [];
        if (!isLaunched(tmp6)) {
          cResult[4] = tmp6;
          cResult[5] = items;
          let tmp11 = items;
        } else {
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1128).intl;
            const stringResult = intl.string(tmp(1128).t.kHie4V);
            cResult[6] = stringResult;
            let tmp14 = stringResult;
          } else {
            tmp14 = cResult[6];
          }
          function t3() {
            return restartFrames.restartFrame(closure_2);
          }
          if (cResult[7] !== t3) {
            const obj2 = { label: tmp14, IconComponent: tmp(11786).RefreshIcon, action: t3 };
            cResult[7] = t3;
            cResult[8] = obj2;
            let tmp16 = obj2;
          } else {
            tmp16 = cResult[8];
          }
          items.push(tmp16);
          const _Symbol3 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1128).intl;
            const stringResult1 = intl2.string(tmp(1128).t.VkMnR2);
            cResult[9] = stringResult1;
            let DoorExitIcon = stringResult1;
          } else {
            DoorExitIcon = cResult[9];
          }
          function t6() {
            return closeFrameDefault(id.id);
          }
          if (cResult[10] !== t6) {
            const obj3 = { label: DoorExitIcon, IconComponent: null, action: null };
            DoorExitIcon = tmp(11535).DoorExitIcon;
            obj3.IconComponent = DoorExitIcon;
            obj3.action = t6;
            cResult[10] = t6;
            cResult[11] = obj3;
            let tmp19 = obj3;
          } else {
            tmp19 = cResult[11];
          }
          items.push(tmp19);
        }
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[12] === application_id) {
        if (cResult[13] === bot) {
          if (cResult[14] === application_id) {
            if (cResult[24] === cResult[15]) {
            }
            const items1 = [tmp11, cResult[15]];
            const found = items1.filter((item) => item.length > 0);
            cResult[24] = cResult[15];
            cResult[25] = tmp11;
            cResult[26] = found;
          }
        }
      }
      const items2 = [];
      if (null == bot) {
        const _Symbol4 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1128).intl;
          const stringResult2 = intl4.string(tmp(1128).t.NgA5vp);
          cResult[20] = stringResult2;
          let tmp26 = stringResult2;
        } else {
          tmp26 = cResult[20];
        }
        if (cResult[21] === application_id) {
          if (cResult[22] === application_id) {
            let tmp28 = cResult[23];
          }
          items2.push(tmp28);
          cResult[12] = application_id;
          cResult[13] = bot;
          cResult[14] = application_id;
          cResult[15] = items2;
        }
        const obj4 = { label: tmp26, IconComponent: null, variant: "destructive", action: null };
        FlagIcon = tmp(9971).FlagIcon;
        obj4.IconComponent = FlagIcon;
        obj4.action = function action() {
          return openAppChannelReportModalDefault(application_id, closure_0, app_channel_header_mobile);
        };
        cResult[21] = application_id;
        cResult[22] = application_id;
        cResult[23] = obj4;
        tmp28 = obj4;
      } else {
        const _Symbol5 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1128).intl;
          const stringResult3 = intl3.string(tmp(1128).t.Sh2z9g);
          cResult[16] = stringResult3;
          let id = stringResult3;
        } else {
          id = cResult[16];
        }
        if (cResult[17] === bot) {
          if (cResult[18] === application_id.id) {
            let tmp23 = cResult[19];
          }
          items2.push(tmp23);
        }
        const obj5 = {
          label: id,
          IconComponent: tmp(5686).CircleInformationIcon,
          action() {
                  return showUserProfileActionSheetDefault({ userId: bot.id, channelId: application_id.id, localUser: bot });
                }
        };
        cResult[17] = bot;
        id = application_id.id;
        cResult[18] = id;
        cResult[19] = obj5;
        tmp23 = obj5;
      }
    } else {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [];
        cResult[3] = items3;
        let tmp10 = items3;
      } else {
        tmp10 = cResult[3];
      }
      return tmp10;
    }
    const tmpResult = tmp(7346);
  }
  const obj6 = { type: require("EmbeddedSurfaceType").EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
  cResult[0] = application_id.guild_id;
  cResult[1] = application_id.id;
  cResult[2] = obj6;
  tmp4 = obj6;
  const obj = require("c");
}) : (function useAppChannelOverflowMenuItems(application_id) {
  _require = application_id;
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  let items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = application_id);
  const memo = bot.useMemo(() => ({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id }), items);
  const tmp3 = application_id(11885)(application_id, memo);
  dependencyMap = tmp3;
  const appChannelApplication = require("useAppChannelApplication").useAppChannelApplication(application_id);
  bot = undefined;
  if (appChannelApplication != null) {
    bot = appChannelApplication.bot;
  }
  let items1 = [application_id, bot, application_id, tmp3];
  return bot.useMemo(() => {
    if (null == application_id) {
      return [];
    } else {
      const items = [];
      if (isLaunched(id)) {
        const obj = { label: null, IconComponent: null, action: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.kHie4V);
        obj.IconComponent = RefreshIcon.RefreshIcon;
        obj.action = function action() {
          return closure_0(id[8]).restartFrame(closure_1_2);
        };
        items.push(obj);
        const obj2 = { label: null, IconComponent: null, action: null };
        const intl2 = util.intl;
        obj2.label = intl2.string(util.t.VkMnR2);
        obj2.IconComponent = DoorExitIcon2.DoorExitIcon;
        obj2.action = function action() {
          return application_id(id[10])(id.id);
        };
        items.push(obj2);
      }
      const items1 = [];
      if (null != bot) {
        const obj3 = { label: null, IconComponent: null, action: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(util.t.Sh2z9g);
        obj3.IconComponent = CircleInformationIcon.CircleInformationIcon;
        obj3.action = function action() {
          return application_id(id[13])({ userId: localUser.id, channelId: closure_1_0.id, localUser });
        };
        items1.push(obj3);
      }
      const obj4 = { label: null, IconComponent: null, variant: "destructive", action: null };
      const intl4 = util.intl;
      obj4.label = intl4.string(util.t.NgA5vp);
      obj4.IconComponent = FlagIcon2.FlagIcon;
      obj4.action = function action() {
        return application_id(id[15])(closure_1_1, closure_1_0, app_channel_header_mobile);
      };
      items1.push(obj4);
      const items2 = [items, items1];
      return items2.filter((item) => item.length > 0);
    }
  }, items1);
});