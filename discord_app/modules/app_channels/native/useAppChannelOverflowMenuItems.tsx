// === Module 13774: useAppChannelOverflowMenuItems ===

// Module 13774 (useAppChannelOverflowMenuItems)
import util from "util" /* 1128 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 6297 */;
import FlagIcon2 from "FlagIcon" /* 9873 */;
import restartFrames from "restartFrames" /* 11019 */;
import leaveFrame from "leaveFrame" /* 11020 */;
import DoorExitIcon from "DoorExitIcon" /* 11366 */;
import RefreshIcon from "RefreshIcon" /* 11614 */;
import openAppChannelReportModalDefault from "openAppChannelReportModal" /* 13775 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const isLaunched = fn(6296).isLaunched;
const app_channel_header_mobile = "app_channel_header_mobile";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/useAppChannelOverflowMenuItems.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelOverflowMenuItems(application_id) {
  _require = application_id;
  let FlagIcon = dependencyMap;
  const cResult = require("c").c(18);
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  if (cResult[0] === application_id.guild_id) {
    if (cResult[1] === application_id.id) {
      let tmp4 = cResult[2];
    }
    const tmp6 = application_id(11697)(application_id, tmp4);
    dependencyMap = tmp6;
    if (null != application_id) {
      const items = [];
      if (!isLaunched(tmp6)) {
        const _Symbol4 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1128).intl;
          const stringResult = intl3.string(tmp(1128).t.NgA5vp);
          cResult[14] = stringResult;
          let tmp19 = stringResult;
        } else {
          tmp19 = cResult[14];
        }
        if (cResult[15] === application_id) {
          if (cResult[16] === application_id) {
            let tmp21 = cResult[17];
          }
          items.push(tmp21);
          cResult[4] = application_id;
          cResult[5] = application_id;
          cResult[6] = tmp6;
          cResult[7] = items;
        }
        const obj2 = { label: tmp19, IconComponent: null, variant: "destructive", action: null };
        FlagIcon = tmp(9873).FlagIcon;
        obj2.IconComponent = FlagIcon;
        obj2.action = function action() {
          return openAppChannelReportModalDefault(application_id, closure_0, app_channel_header_mobile);
        };
        cResult[15] = application_id;
        cResult[16] = application_id;
        cResult[17] = obj2;
        tmp21 = obj2;
      } else {
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1128).intl;
          const stringResult1 = intl.string(tmp(1128).t.kHie4V);
          cResult[8] = stringResult1;
          let tmp11 = stringResult1;
        } else {
          tmp11 = cResult[8];
        }
        if (cResult[9] !== tmp6) {
          const obj3 = {
            label: tmp11,
            IconComponent: tmp(11614).RefreshIcon,
            action() {
                      return restartFrames.restartFrame(closure_2);
                    }
          };
          cResult[9] = tmp6;
          cResult[10] = obj3;
          let tmp13 = obj3;
        } else {
          tmp13 = cResult[10];
        }
        items.push(tmp13);
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1128).intl;
          const stringResult2 = intl2.string(tmp(1128).t.VkMnR2);
          cResult[11] = stringResult2;
          let action = stringResult2;
        } else {
          action = cResult[11];
        }
        if (cResult[12] !== tmp6) {
          const obj4 = { label: action, IconComponent: tmp(11366).DoorExitIcon, action: null };
          action = function action() {
            return leaveFrame.leaveFrame(id.id);
          };
          obj4.action = action;
          cResult[12] = tmp6;
          cResult[13] = obj4;
          let tmp16 = obj4;
        } else {
          tmp16 = cResult[13];
        }
        items.push(tmp16);
      }
    } else {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [];
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  }
  const obj5 = { type: require("EmbeddedSurfaceType").EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
  cResult[0] = application_id.guild_id;
  cResult[1] = application_id.id;
  cResult[2] = obj5;
  tmp4 = obj5;
  const obj = require("c");
}) : (function useAppChannelOverflowMenuItems(application_id) {
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  let items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = application_id);
  const memo = noop.useMemo(() => ({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id }), items);
  const tmp3 = application_id(11697)(application_id, memo);
  dependencyMap = tmp3;
  const items1 = [application_id, application_id, tmp3];
  return noop.useMemo(() => {
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
        obj2.IconComponent = DoorExitIcon.DoorExitIcon;
        obj2.action = function action() {
          return closure_0(id[10]).leaveFrame(id.id);
        };
        items.push(obj2);
      }
      const obj3 = { label: null, IconComponent: null, variant: "destructive", action: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.NgA5vp);
      obj3.IconComponent = FlagIcon2.FlagIcon;
      obj3.action = function action() {
        return application_id(id[12])(closure_1_1, closure_1_0, app_channel_header_mobile);
      };
      items.push(obj3);
      return items;
    }
  }, items1);
});