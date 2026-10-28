// === Module 14236: useAppChannelOverflowMenuItems ===

// Module 14236 (useAppChannelOverflowMenuItems)
import util from "util" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5662 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5722 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8705 */;
import FlagIcon2 from "FlagIcon" /* 10005 */;
import restartFrames from "restartFrames" /* 10802 */;
import ShieldIcon from "ShieldIcon" /* 10992 */;
import DoorExitIcon2 from "DoorExitIcon" /* 11578 */;
import RefreshIcon from "RefreshIcon" /* 12302 */;
import closeFrameDefault from "closeFrame" /* 14081 */;
import openConjureDevicePermissionSettingsDefault from "openConjureDevicePermissionSettings" /* 14238 */;
import openAppChannelReportModalDefault from "openAppChannelReportModal" /* 14241 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let isLaunched = fn(6811).isLaunched;
const app_channel_header_mobile = "app_channel_header_mobile";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/useAppChannelOverflowMenuItems.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelOverflowMenuItems(application_id) {
  _require = application_id;
  let FlagIcon = dependencyMap;
  const cResult = require("c").c(32);
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  if (cResult[0] === application_id.guild_id) {
    if (cResult[1] === application_id.id) {
      let tmp4 = cResult[2];
    }
    const tmp6 = application_id(11815)(application_id, tmp4);
    dependencyMap = tmp6;
    const appChannelApplication = tmp(7383).useAppChannelApplication(application_id);
    let bot;
    if (appChannelApplication != null) {
      bot = appChannelApplication.bot;
    }
    const tmp9 = application_id(14237)(application_id);
    isLaunched = tmp9;
    if (null != application_id) {
      if (cResult[4] !== tmp6) {
        const items = [];
        if (!isLaunched(tmp6)) {
          cResult[4] = tmp6;
          cResult[5] = items;
          let tmp12 = items;
        } else {
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1125).intl;
            const stringResult = intl.string(tmp(1125).t.kHie4V);
            cResult[6] = stringResult;
            let tmp15 = stringResult;
          } else {
            tmp15 = cResult[6];
          }
          function t3() {
            return restartFrames.restartFrame(closure_2);
          }
          if (cResult[7] !== t3) {
            const obj2 = { label: tmp15, IconComponent: tmp(12302).RefreshIcon, action: t3 };
            cResult[7] = t3;
            cResult[8] = obj2;
            let tmp17 = obj2;
          } else {
            tmp17 = cResult[8];
          }
          items.push(tmp17);
          const _Symbol3 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1125).intl;
            const stringResult1 = intl2.string(tmp(1125).t.VkMnR2);
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
            DoorExitIcon = tmp(11578).DoorExitIcon;
            obj3.IconComponent = DoorExitIcon;
            obj3.action = t6;
            cResult[10] = t6;
            cResult[11] = obj3;
            let tmp20 = obj3;
          } else {
            tmp20 = cResult[11];
          }
          items.push(tmp20);
        }
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[12] === application_id) {
        if (cResult[13] === bot) {
          if (cResult[14] === application_id) {
            if (cResult[15] === tmp9) {
              if (cResult[29] === cResult[16]) {
              }
              const items1 = [tmp12, cResult[16]];
              const found = items1.filter((item) => item.length > 0);
              cResult[29] = cResult[16];
              cResult[30] = tmp12;
              cResult[31] = found;
            }
          }
        }
      }
      const items2 = [];
      if (null == tmp9) {
        if (null == bot) {
          const _Symbol4 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            const intl5 = tmp(1125).intl;
            const stringResult2 = intl5.string(tmp(1125).t.NgA5vp);
            cResult[25] = stringResult2;
            let tmp30 = stringResult2;
          } else {
            tmp30 = cResult[25];
          }
          if (cResult[26] === application_id) {
            if (cResult[27] === application_id) {
              let tmp32 = cResult[28];
            }
            items2.push(tmp32);
            cResult[12] = application_id;
            cResult[13] = bot;
            cResult[14] = application_id;
            cResult[15] = tmp9;
            cResult[16] = items2;
          }
          const obj4 = { label: tmp30, IconComponent: null, variant: "destructive", action: null };
          FlagIcon = tmp(10005).FlagIcon;
          obj4.IconComponent = FlagIcon;
          obj4.action = function action() {
            return openAppChannelReportModalDefault(application_id, closure_0, app_channel_header_mobile);
          };
          cResult[26] = application_id;
          cResult[27] = application_id;
          cResult[28] = obj4;
          tmp32 = obj4;
        } else {
          const _Symbol6 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1125).intl;
            const stringResult3 = intl4.string(tmp(1125).t.Sh2z9g);
            cResult[21] = stringResult3;
            let id = stringResult3;
          } else {
            id = cResult[21];
          }
          if (cResult[22] === bot) {
            if (cResult[23] === application_id.id) {
              let tmp27 = cResult[24];
            }
            items2.push(tmp27);
          }
          const obj5 = {
            label: id,
            IconComponent: tmp(5722).CircleInformationIcon,
            action() {
                      return showUserProfileActionSheetDefault({ userId: bot.id, channelId: application_id.id, localUser: bot });
                    }
          };
          cResult[22] = bot;
          id = application_id.id;
          cResult[23] = id;
          cResult[24] = obj5;
          tmp27 = obj5;
        }
      } else {
        const _Symbol5 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1125).intl;
          const stringResult4 = intl3.string(tmp5(3863).wum6n2);
          cResult[17] = stringResult4;
          let action = stringResult4;
        } else {
          action = cResult[17];
        }
        if (cResult[18] === application_id) {
          if (cResult[19] === tmp9) {
            let tmp24 = cResult[20];
          }
          items2.push(tmp24);
        }
        const obj6 = { label: action, IconComponent: tmp(10992).ShieldIcon, action: null };
        action = function action() {
          return openConjureDevicePermissionSettingsDefault({ applicationId: application_id, appName });
        };
        obj6.action = action;
        cResult[18] = application_id;
        cResult[19] = tmp9;
        cResult[20] = obj6;
        tmp24 = obj6;
      }
    } else {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [];
        cResult[3] = items3;
        let tmp11 = items3;
      } else {
        tmp11 = cResult[3];
      }
      return tmp11;
    }
    const tmpResult = tmp(7383);
  }
  const obj7 = { type: require("EmbeddedSurfaceType").EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
  cResult[0] = application_id.guild_id;
  cResult[1] = application_id.id;
  cResult[2] = obj7;
  tmp4 = obj7;
}) : (function useAppChannelOverflowMenuItems(application_id) {
  _require = application_id;
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  let items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = application_id);
  const memo = bot.useMemo(() => ({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id }), items);
  const tmp5 = application_id(11815)(application_id, memo);
  dependencyMap = tmp5;
  const appChannelApplication = require("useAppChannelApplication").useAppChannelApplication(application_id);
  bot = undefined;
  if (appChannelApplication != null) {
    bot = appChannelApplication.bot;
  }
  const tmp8 = application_id(14237)(application_id);
  closure_4 = tmp8;
  let items1 = [application_id, bot, application_id, tmp8, tmp5];
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
          return closure_0(id[9]).restartFrame(closure_1_2);
        };
        items.push(obj);
        const obj2 = { label: null, IconComponent: null, action: null };
        const intl2 = util.intl;
        obj2.label = intl2.string(util.t.VkMnR2);
        obj2.IconComponent = DoorExitIcon2.DoorExitIcon;
        obj2.action = function action() {
          return application_id(id[11])(id.id);
        };
        items.push(obj2);
      }
      const items1 = [];
      if (null != appName) {
        const obj3 = { label: null, IconComponent: null, action: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(_modDef3863.wum6n2);
        obj3.IconComponent = ShieldIcon.ShieldIcon;
        obj3.action = function action() {
          return application_id(id[15])({ applicationId, appName });
        };
        items1.push(obj3);
      }
      if (null != bot) {
        const obj4 = { label: null, IconComponent: null, action: null };
        const intl4 = util.intl;
        obj4.label = intl4.string(util.t.Sh2z9g);
        obj4.IconComponent = CircleInformationIcon.CircleInformationIcon;
        obj4.action = function action() {
          return application_id(id[17])({ userId: localUser.id, channelId: closure_1_0.id, localUser });
        };
        items1.push(obj4);
      }
      const obj5 = { label: null, IconComponent: null, variant: "destructive", action: null };
      const intl5 = util.intl;
      obj5.label = intl5.string(util.t.NgA5vp);
      obj5.IconComponent = FlagIcon2.FlagIcon;
      obj5.action = function action() {
        return application_id(id[19])(applicationId, closure_1_0, app_channel_header_mobile);
      };
      items1.push(obj5);
      const items2 = [items, items1];
      return items2.filter((item) => item.length > 0);
    }
  }, items1);
});