// === Module 13706: useAppChannelOverflowMenuItems ===

// Module 13706 (useAppChannelOverflowMenuItems)
import util from "util" /* 1128 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7263 */;
import FlagIcon2 from "FlagIcon" /* 9809 */;
import restartFrames from "restartFrames" /* 10959 */;
import RefreshIcon from "RefreshIcon" /* 11555 */;
import openAppChannelReportModalDefault from "openAppChannelReportModal" /* 13707 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const isLaunched = fn(10931).isLaunched;
const app_channel_header_mobile = "app_channel_header_mobile";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/useAppChannelOverflowMenuItems.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelOverflowMenuItems(application_id) {
  _require = application_id;
  let FlagIcon = dependencyMap;
  const cResult = require("c").c(15);
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  if (cResult[0] === application_id.guild_id) {
    if (cResult[1] === application_id.id) {
      let tmp4 = cResult[2];
    }
    const tmp6 = application_id(11635)(application_id, tmp4);
    dependencyMap = tmp6;
    if (null != application_id) {
      const items = [];
      if (!isLaunched(tmp6)) {
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1128).intl;
          const stringResult = intl2.string(tmp(1128).t.NgA5vp);
          cResult[11] = stringResult;
          let tmp15 = stringResult;
        } else {
          tmp15 = cResult[11];
        }
        if (cResult[12] === application_id) {
          if (cResult[13] === application_id) {
            let tmp17 = cResult[14];
          }
          items.push(tmp17);
          cResult[4] = application_id;
          cResult[5] = application_id;
          cResult[6] = tmp6;
          cResult[7] = items;
        }
        const obj2 = { label: tmp15, IconComponent: null, variant: "destructive", action: null };
        FlagIcon = tmp(9809).FlagIcon;
        obj2.IconComponent = FlagIcon;
        obj2.action = function action() {
          return openAppChannelReportModalDefault(application_id, closure_0, app_channel_header_mobile);
        };
        cResult[12] = application_id;
        cResult[13] = application_id;
        cResult[14] = obj2;
        tmp17 = obj2;
      } else {
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1128).intl;
          const stringResult1 = intl.string(tmp(1128).t.kHie4V);
          cResult[8] = stringResult1;
          let action = stringResult1;
        } else {
          action = cResult[8];
        }
        if (cResult[9] !== tmp6) {
          const obj3 = { label: action, IconComponent: tmp(11555).RefreshIcon, action: null };
          action = function action() {
            return restartFrames.restartFrame(closure_2);
          };
          obj3.action = action;
          cResult[9] = tmp6;
          cResult[10] = obj3;
          let tmp12 = obj3;
        } else {
          tmp12 = cResult[10];
        }
        items.push(tmp12);
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
  const obj4 = { type: require("EmbeddedSurfaceType").EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
  cResult[0] = application_id.guild_id;
  cResult[1] = application_id.id;
  cResult[2] = obj4;
  tmp4 = obj4;
  const obj = require("c");
}) : (function useAppChannelOverflowMenuItems(application_id) {
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  let items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = application_id);
  const memo = noop.useMemo(() => ({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id }), items);
  const tmp3 = application_id(11635)(application_id, memo);
  dependencyMap = tmp3;
  const items1 = [application_id, application_id, tmp3];
  return noop.useMemo(() => {
    if (null == application_id) {
      return [];
    } else {
      const items = [];
      if (isLaunched(dependencyMap)) {
        const obj = { label: null, IconComponent: null, action: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.kHie4V);
        obj.IconComponent = RefreshIcon.RefreshIcon;
        obj.action = function action() {
          return closure_0(10959).restartFrame(dependencyMap);
        };
        items.push(obj);
      }
      const obj2 = { label: null, IconComponent: null, variant: "destructive", action: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.NgA5vp);
      obj2.IconComponent = FlagIcon2.FlagIcon;
      obj2.action = function action() {
        return application_id(13707)(closure_1_1, closure_1_0, app_channel_header_mobile);
      };
      items.push(obj2);
      return items;
    }
  }, items1);
});