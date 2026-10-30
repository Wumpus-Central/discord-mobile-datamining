// === Module 14504: useAppChannelOverflowMenuItems ===

// Module 14504 (useAppChannelOverflowMenuItems)
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5730 */;
import FlagIcon from "FlagIcon" /* 10064 */;
import restartFrames from "restartFrames" /* 10901 */;
import ShieldIcon from "ShieldIcon" /* 11255 */;
import DoorExitIcon from "DoorExitIcon" /* 11845 */;
import RefreshIcon from "RefreshIcon" /* 12518 */;
import closeFrameDefault from "closeFrame" /* 14344 */;
import noop from "module_19" /* 19 */;

require = fn;
function useAppChannelAppActions(channel) {
  _require = channel;
  let application_id = channel.application_id;
  if (application_id == null) {
    application_id = null;
  }
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const memo = bot.useMemo(() => ({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: channel.guild_id }), items);
  const tmp5 = application_id(12057)(application_id, memo);
  dependencyMap = tmp5;
  const appChannelApplication = require("useAppChannelApplication").useAppChannelApplication(channel);
  bot = undefined;
  if (appChannelApplication != null) {
    bot = appChannelApplication.bot;
  }
  const tmp8 = application_id(14505)(application_id);
  closure_4 = tmp8;
  const tmp9 = application_id(14506)(application_id).length > 0;
  closure_5 = tmp9;
  const items1 = [application_id, bot, channel, tmp8, tmp5, tmp9];
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
        fn3 = null;
        if (closure_5) {
          fn3 = () => application_id(14507)({ applicationId, appName });
        }
      }
    }
    obj.devicePermissions = fn3;
    let fn4 = null;
    if (null != application_id) {
      fn4 = null;
      if (null != bot) {
        fn4 = () => application_id(8742)({ userId: localUser.id, channelId: user.id, localUser });
      }
    }
    obj.appInfo = fn4;
    let fn5 = null;
    if (null != application_id) {
      fn5 = () => application_id(14510)(applicationId, closure_0, "app_channel_header_mobile");
    }
    obj.report = fn5;
    return obj;
  }, items1);
}
const isLaunched = fn(6841).isLaunched;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/useAppChannelOverflowMenuItems.tsx");

export default function useAppChannelOverflowMenuItems(channel) {
  const tmp = useAppChannelAppActions(channel);
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
        const obj2 = { label: null, IconComponent: null, action: null };
        const intl4 = util.intl;
        obj2.label = intl4.string(util.t.kHie4V);
        obj2.IconComponent = RefreshIcon.RefreshIcon;
        obj2.action = tmp26;
        items.push(obj2);
      }
      if (null != close) {
        const obj = { label: null, IconComponent: null, action: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.VkMnR2);
        obj.IconComponent = DoorExitIcon.DoorExitIcon;
        obj.action = tmp2;
        items.push(obj);
      }
      const items1 = [];
      if (null != devicePermissions) {
        const obj3 = { label: null, IconComponent: null, action: null };
        const intl2 = util.intl;
        obj3.label = intl2.string(_modDef3865.wum6n2);
        obj3.IconComponent = ShieldIcon.ShieldIcon;
        obj3.action = tmp10;
        items1.push(obj3);
      }
      if (null != appInfo) {
        const obj4 = { label: null, IconComponent: null, action: null };
        const intl5 = util.intl;
        obj4.label = intl5.string(util.t.Sh2z9g);
        obj4.IconComponent = CircleInformationIcon.CircleInformationIcon;
        obj4.action = tmp18;
        items1.push(obj4);
      }
      const obj5 = { label: null, IconComponent: null, variant: "destructive", action: null };
      const intl3 = util.intl;
      obj5.label = intl3.string(util.t.NgA5vp);
      obj5.IconComponent = FlagIcon.FlagIcon;
      obj5.action = tmp;
      items1.push(obj5);
      const items2 = [items, items1];
      return items2.filter((item) => item.length > 0);
    }
  }, items);
};
export { useAppChannelAppActions };