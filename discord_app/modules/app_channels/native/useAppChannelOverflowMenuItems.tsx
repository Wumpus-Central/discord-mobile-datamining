// === Module 14472: useAppChannelOverflowMenuItems ===

// Module 14472 (useAppChannelOverflowMenuItems)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5664 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 5724 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8708 */;
import FlagIcon2 from "FlagIcon" /* 10037 */;
import restartFrames from "restartFrames" /* 10878 */;
import ShieldIcon2 from "ShieldIcon" /* 11027 */;
import DoorExitIcon2 from "DoorExitIcon" /* 11632 */;
import RefreshIcon2 from "RefreshIcon" /* 12356 */;
import closeFrameDefault from "closeFrame" /* 14314 */;
import openConjureDevicePermissionSettingsDefault from "openConjureDevicePermissionSettings" /* 14474 */;
import openAppChannelReportModalDefault from "openAppChannelReportModal" /* 14477 */;
import noop from "module_19" /* 19 */;

require = fn;
let isLaunched = fn(6834).isLaunched;
const app_channel_header_mobile = "app_channel_header_mobile";
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelAppActions(application_id) {
  _require = application_id;
  const cResult = require("c").c(26);
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  if (cResult[0] === application_id.guild_id) {
    if (cResult[1] === application_id.id) {
      let tmp5 = cResult[2];
    }
    const tmp7 = application_id(tmp2[5])(application_id, tmp5);
    const appChannelApplication = tmp(tmp2[6]).useAppChannelApplication(application_id);
    bot = undefined;
    if (appChannelApplication != null) {
      bot = appChannelApplication.bot;
    }
    const tmp10 = application_id(tmp2[7])(application_id);
    const appName = tmp10;
    if (cResult[3] === application_id) {
      if (cResult[4] === tmp7) {
        let tmp11 = cResult[5];
      }
      isLaunched = tmp11;
      if (cResult[6] !== tmp11) {
        let fn = null;
        if (null != tmp11) {
          fn = () => restartFrames.restartFrame(closure_4);
        }
        cResult[6] = tmp11;
        cResult[7] = fn;
        let tmp14 = fn;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== tmp11) {
        let fn2 = null;
        if (null != tmp11) {
          fn2 = () => closeFrameDefault(id.id);
        }
        cResult[8] = tmp11;
        cResult[9] = fn2;
        let tmp15 = fn2;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] === application_id) {
        if (cResult[11] === tmp10) {
          let tmp16 = cResult[12];
        }
        if (cResult[13] === application_id) {
          if (cResult[14] === bot) {
            if (cResult[15] === application_id.id) {
              let tmp17 = cResult[16];
            }
            if (cResult[17] === application_id) {
              if (cResult[18] === application_id) {
                let tmp18 = cResult[19];
              }
              if (cResult[20] === tmp14) {
                if (cResult[21] === tmp15) {
                  if (cResult[22] === tmp16) {
                    if (cResult[23] === tmp17) {
                      if (cResult[24] === tmp18) {
                        let tmp19 = cResult[25];
                      }
                      return tmp19;
                    }
                  }
                }
              }
              const obj2 = { reload: tmp14, close: tmp15, devicePermissions: tmp16, appInfo: tmp17, report: tmp18 };
              cResult[20] = tmp14;
              cResult[21] = tmp15;
              cResult[22] = tmp16;
              cResult[23] = tmp17;
              cResult[24] = tmp18;
              cResult[25] = obj2;
              tmp19 = obj2;
            }
            let fn5 = null;
            if (null != application_id) {
              fn5 = () => openAppChannelReportModalDefault(application_id, closure_0, app_channel_header_mobile);
            }
            cResult[17] = application_id;
            cResult[18] = application_id;
            cResult[19] = fn5;
            tmp18 = fn5;
          }
        }
        let fn4 = null;
        if (null != application_id) {
          fn4 = null;
          if (null != bot) {
            fn4 = () => showUserProfileActionSheetDefault({ userId: bot.id, channelId: application_id.id, localUser: bot });
          }
        }
        cResult[13] = application_id;
        cResult[14] = bot;
        cResult[15] = application_id.id;
        cResult[16] = fn4;
        tmp17 = fn4;
      }
      let fn3 = null;
      if (null != application_id) {
        fn3 = null;
        if (null != tmp10) {
          fn3 = () => openConjureDevicePermissionSettingsDefault({ applicationId: application_id, appName });
        }
      }
      cResult[10] = application_id;
      cResult[11] = tmp10;
      cResult[12] = fn3;
      tmp16 = fn3;
    }
    let tmp12 = null;
    if (null != application_id) {
      tmp12 = null;
      if (isLaunched(tmp7)) {
        tmp12 = tmp7;
      }
    }
    cResult[3] = application_id;
    cResult[4] = tmp7;
    cResult[5] = tmp12;
    tmp11 = tmp12;
    const tmpResult = tmp(tmp2[6]);
  }
  const obj3 = { type: require("EmbeddedSurfaceType").EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
  cResult[0] = application_id.guild_id;
  cResult[1] = application_id.id;
  cResult[2] = obj3;
  tmp5 = obj3;
}) : (function useAppChannelAppActions(application_id) {
  _require = application_id;
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = application_id);
  const memo = bot.useMemo(() => ({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id }), items);
  const tmp5 = application_id(11869)(application_id, memo);
  dependencyMap = tmp5;
  const appChannelApplication = require("useAppChannelApplication").useAppChannelApplication(application_id);
  bot = undefined;
  if (appChannelApplication != null) {
    bot = appChannelApplication.bot;
  }
  const tmp8 = application_id(14473)(application_id);
  closure_4 = tmp8;
  const items1 = [application_id, bot, application_id, tmp8, tmp5];
  return bot.useMemo(() => {
    let tmp2 = null;
    if (null != application_id) {
      tmp2 = null;
      if (appName(dependencyMap)) {
        tmp2 = dependencyMap;
      }
    }
    const user = tmp2;
    let fn = null;
    if (null != tmp2) {
      fn = () => restartFrames.restartFrame(closure_0);
    }
    const obj = { reload: fn, close: null, devicePermissions: null, appInfo: null, report: null };
    let fn2 = null;
    if (null != tmp2) {
      fn2 = () => closeFrameDefault(user.id);
    }
    obj.close = fn2;
    let fn3 = null;
    if (null != application_id) {
      fn3 = null;
      if (null != appName) {
        fn3 = () => application_id(14474)({ applicationId, appName });
      }
    }
    obj.devicePermissions = fn3;
    let fn4 = null;
    if (null != application_id) {
      fn4 = null;
      if (null != bot) {
        fn4 = () => application_id(8708)({ userId: localUser.id, channelId: user.id, localUser });
      }
    }
    obj.appInfo = fn4;
    let fn5 = null;
    if (null != application_id) {
      fn5 = () => application_id(14477)(applicationId, closure_0, app_channel_header_mobile);
    }
    obj.report = fn5;
    return obj;
  }, items1);
});
let closure_6 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/useAppChannelOverflowMenuItems.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelOverflowMenuItems(arg0) {
  let FlagIcon = dependencyMap;
  const cResult = c.c(26);
  ({ reload, close, devicePermissions, appInfo, report } = closure_6(arg0));
  if (null != report) {
    if (cResult[1] === close) {
      if (cResult[2] === reload) {
        let tmp6 = cResult[3];
      }
      if (cResult[10] === appInfo) {
        if (cResult[11] === devicePermissions) {
          if (cResult[12] === report) {
            if (cResult[23] === cResult[13]) {
            }
            const items = [tmp6, cResult[13]];
            const found = items.filter((item) => item.length > 0);
            cResult[23] = cResult[13];
            cResult[24] = tmp6;
            cResult[25] = found;
          }
        }
      }
      const items1 = [];
      if (null == devicePermissions) {
        if (null == appInfo) {
          const _Symbol2 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const intl5 = util.intl;
            const stringResult = intl5.string(util.t.NgA5vp);
            cResult[20] = stringResult;
            let tmp22 = stringResult;
          } else {
            tmp22 = cResult[20];
          }
          if (cResult[21] !== report) {
            const obj2 = { label: tmp22, IconComponent: null, variant: "destructive", action: null };
            FlagIcon = FlagIcon2.FlagIcon;
            obj2.IconComponent = FlagIcon;
            obj2.action = report;
            cResult[21] = report;
            cResult[22] = obj2;
            let tmp24 = obj2;
          } else {
            tmp24 = cResult[22];
          }
          items1.push(tmp24);
          cResult[10] = appInfo;
          cResult[11] = devicePermissions;
          cResult[12] = report;
          cResult[13] = items1;
        } else {
          const _Symbol6 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = util.intl;
            const stringResult1 = intl4.string(util.t.Sh2z9g);
            cResult[17] = stringResult1;
            let CircleInformationIcon = stringResult1;
          } else {
            CircleInformationIcon = cResult[17];
          }
          if (cResult[18] !== appInfo) {
            const obj3 = { label: CircleInformationIcon, IconComponent: null, action: null };
            CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
            obj3.IconComponent = CircleInformationIcon;
            obj3.action = appInfo;
            cResult[18] = appInfo;
            cResult[19] = obj3;
            let tmp19 = obj3;
          } else {
            tmp19 = cResult[19];
          }
          items1.push(tmp19);
        }
      } else {
        const _Symbol5 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = util.intl;
          const stringResult2 = intl3.string(_modDef3864.wum6n2);
          cResult[14] = stringResult2;
          let ShieldIcon = stringResult2;
        } else {
          ShieldIcon = cResult[14];
        }
        if (cResult[15] !== devicePermissions) {
          const obj4 = { label: ShieldIcon, IconComponent: null, action: null };
          ShieldIcon = ShieldIcon2.ShieldIcon;
          obj4.IconComponent = ShieldIcon;
          obj4.action = devicePermissions;
          cResult[15] = devicePermissions;
          cResult[16] = obj4;
          let tmp16 = obj4;
        } else {
          tmp16 = cResult[16];
        }
        items1.push(tmp16);
      }
    }
    const items2 = [];
    if (null == reload) {
      if (null == close) {
        cResult[1] = close;
        cResult[2] = reload;
        cResult[3] = items2;
        tmp6 = items2;
      } else {
        const _Symbol4 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult3 = intl2.string(util.t.VkMnR2);
          cResult[7] = stringResult3;
          let DoorExitIcon = stringResult3;
        } else {
          DoorExitIcon = cResult[7];
        }
        if (cResult[8] !== close) {
          const obj5 = { label: DoorExitIcon, IconComponent: null, action: null };
          DoorExitIcon = DoorExitIcon2.DoorExitIcon;
          obj5.IconComponent = DoorExitIcon;
          obj5.action = close;
          cResult[8] = close;
          cResult[9] = obj5;
          let tmp11 = obj5;
        } else {
          tmp11 = cResult[9];
        }
        items2.push(tmp11);
      }
    } else {
      const _Symbol3 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult4 = intl.string(util.t.kHie4V);
        cResult[4] = stringResult4;
        let RefreshIcon = stringResult4;
      } else {
        RefreshIcon = cResult[4];
      }
      if (cResult[5] !== reload) {
        const obj6 = { label: RefreshIcon, IconComponent: null, action: null };
        RefreshIcon = RefreshIcon2.RefreshIcon;
        obj6.IconComponent = RefreshIcon;
        obj6.action = reload;
        cResult[5] = reload;
        cResult[6] = obj6;
        let tmp8 = obj6;
      } else {
        tmp8 = cResult[6];
      }
      items2.push(tmp8);
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [];
      cResult[0] = items3;
      let first = items3;
    } else {
      first = cResult[0];
    }
    return first;
  }
  const tmp3 = closure_6(arg0);
}) : (function useAppChannelOverflowMenuItems(arg0) {
  const tmp = closure_6(arg0);
  const reload = tmp.reload;
  const close = tmp.close;
  const devicePermissions = tmp.devicePermissions;
  const appInfo = tmp.appInfo;
  const report = tmp.report;
  let items = [reload, close, devicePermissions, appInfo, report];
  return appInfo.useMemo(() => {
    if (null == report) {
      return [];
    } else {
      const items = [];
      if (null != reload) {
        const obj = { label: null, IconComponent: null, action: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.kHie4V);
        obj.IconComponent = RefreshIcon2.RefreshIcon;
        obj.action = tmp40;
        items.push(obj);
      }
      if (null != close) {
        const obj2 = { label: null, IconComponent: null, action: null };
        const intl2 = util.intl;
        obj2.label = intl2.string(util.t.VkMnR2);
        obj2.IconComponent = DoorExitIcon2.DoorExitIcon;
        obj2.action = tmp9;
        items.push(obj2);
      }
      const items1 = [];
      if (null != devicePermissions) {
        const obj3 = { label: null, IconComponent: null, action: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(_modDef3864.wum6n2);
        obj3.IconComponent = ShieldIcon2.ShieldIcon;
        obj3.action = tmp17;
        items1.push(obj3);
      }
      if (null != appInfo) {
        const obj4 = { label: null, IconComponent: null, action: null };
        const intl4 = util.intl;
        obj4.label = intl4.string(util.t.Sh2z9g);
        obj4.IconComponent = CircleInformationIcon2.CircleInformationIcon;
        obj4.action = tmp25;
        items1.push(obj4);
      }
      const obj5 = { label: null, IconComponent: null, variant: "destructive", action: null };
      const intl5 = util.intl;
      obj5.label = intl5.string(util.t.NgA5vp);
      obj5.IconComponent = FlagIcon2.FlagIcon;
      obj5.action = tmp;
      items1.push(obj5);
      const items2 = [items, items1];
      return items2.filter((item) => item.length > 0);
    }
  }, items);
});
export const useAppChannelAppActions = tmp2;