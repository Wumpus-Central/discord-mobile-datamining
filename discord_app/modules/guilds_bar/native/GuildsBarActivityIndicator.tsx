// === Module 16429: GuildsBarActivityIndicator ===

// Module 16429 (GuildsBarActivityIndicator)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import useToken from "useToken" /* 4338 */;
import _modDef5114 from "module_5114" /* 5114 */;
import StageIcon from "StageIcon" /* 5178 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5182 */;
import AppsIcon from "AppsIcon" /* 5187 */;
import NativeViewDefault from "NativeView" /* 5670 */;
import _modDef8745 from "module_8745" /* 8745 */;
import ScreenIcon from "ScreenIcon" /* 9008 */;
import _modDef9913 from "module_9913" /* 9913 */;
import CalendarIcon from "CalendarIcon" /* 9915 */;
import VideoIcon from "VideoIcon" /* 10238 */;
import useGuildsBarGuildMediaStateDefault from "useGuildsBarGuildMediaState" /* 16425 */;
import _modDef16430 from "module_16430" /* 16430 */;
import _modDef16431 from "module_16431" /* 16431 */;
import _modDef16432 from "module_16432" /* 16432 */;
import noop from "module_19" /* 19 */;

require = fn;
function getMediaIcon(activeEvent) {
  if (activeEvent.activeEvent) {
    let obj = { icon: CalendarIcon.CalendarIcon, source: _modDef9913 };
    let tmp6 = obj;
  } else if (tmp4) {
    obj = { icon: StageIcon.StageIcon, source: _modDef8745 };
    tmp6 = obj;
  } else if (tmp3) {
    const obj1 = { icon: ScreenIcon.ScreenIcon, source: _modDef16430 };
    tmp6 = obj1;
  } else if (tmp2) {
    const obj2 = { icon: VideoIcon.VideoIcon, source: _modDef16431 };
    tmp6 = obj2;
  } else if (tmp) {
    const obj3 = { icon: VoiceNormalIcon.VoiceNormalIcon, source: _modDef16432 };
    tmp6 = obj3;
  } else {
    tmp6 = null;
    if (tmp5) {
      obj = { icon: AppsIcon.AppsIcon, source: _modDef5114 };
      tmp6 = obj;
    }
  }
  return tmp6;
}
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj = { activityWrapper: null, activityIconWrapper: null, activityIconWrapperActive: null, activityIcon: null };
let size = { position: "absolute", top: -3, right: -3, justifyContent: "center", width: 22, height: 22, padding: 3, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.activityWrapper = size;
const size1 = { justifyContent: "center", width: 16, height: 16, padding: 2, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.activityIconWrapper = size1;
obj = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
obj.activityIconWrapperActive = obj;
const size2 = { width: 12, height: 12, borderRadius: nativeDefault.radii.none };
obj.activityIcon = size2;
let closure_5 = createStyles.createStyles(obj);
const memoResult = noop.memo((arg0) => {
  ({ IconComponent, isCurrentUserConnected } = arg0);
  ({ style, source } = arg0);
  let activityIcon = closure_5();
  let obj = useToken;
  let WHITE = obj.useToken(nativeDefault.colors.ICON_DEFAULT);
  obj = { style: null, children: null };
  const items = [activityIcon.activityWrapper, style];
  obj.style = items;
  const items1 = [activityIcon.activityIconWrapper, ];
  let prop = null;
  if (isCurrentUserConnected) {
    prop = activityIcon.activityIconWrapperActive;
  }
  obj = { style: items1, children: null };
  items1[1] = prop;
  if (null != IconComponent) {
    const colors = { color: null, size: "xxs", style: null };
    colors.color = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
    activityIcon = activityIcon.activityIcon;
    colors.style = activityIcon;
    <IconComponent color={null} size="xxs" style={null} />;
    const tmp8 = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
  } else {
    const obj1 = { source, color: null, style: null };
    if (isCurrentUserConnected) {
      WHITE = nativeDefault.unsafe_rawColors.WHITE;
    }
    obj1.color = WHITE;
    obj1.style = activityIcon.activityIcon;
    obj.children = jsx(native.Icon, { source, color: null, style: null });
    obj.children = <tmp6 {...obj} />;
    return <tmp5 {...obj} />;
  }
});
const metroRequire = memoResult;
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarActivityIndicator.tsx");

export default noop.memo(function GuildsBarGuildActivityIndicator(arg0) {
  ({ guildId, style } = arg0);
  const tmp = useGuildsBarGuildMediaStateDefault(guildId);
  closure_0 = tmp;
  const tmp2 = getMediaIcon(tmp);
  closure_1 = tmp2;
  let icon;
  if (tmp2 != null) {
    icon = tmp2.icon;
  }
  const items = [icon, , ];
  let source;
  if (tmp2 != null) {
    source = tmp2.source;
  }
  items[1] = source;
  items[2] = tmp.isCurrentUserConnected;
  const memo = noop.useMemo(() => {
    let icon;
    if (closure_1 != null) {
      icon = closure_1.icon;
    }
    const obj = { IconComponent: icon, source: null, isCurrentUserConnected: null };
    let source;
    if (closure_1 != null) {
      source = closure_1.source;
    }
    if (source == null) {
      source = null;
    }
    obj.source = source;
    obj.isCurrentUserConnected = closure_0.isCurrentUserConnected;
    return obj;
  }, items);
  source = memo.source;
  let tmp9 = null;
  if (null != source) {
    let obj = { IconComponent: tmp7, style, source, isCurrentUserConnected: tmp8 };
    tmp9 = <memoResult IconComponent={tmp7} style={style} source={source} isCurrentUserConnected={tmp8} />;
  }
  return tmp9;
});
export const GuildsBarActivityIndicatorBase = memoResult;
export { getMediaIcon };
export const useActivityIndicatorState = function useActivityIndicatorState(guildId) {
  const tmp = useGuildsBarGuildMediaStateDefault(guildId);
  closure_0 = tmp;
  const tmp2 = getMediaIcon(tmp);
  closure_1 = tmp2;
  let icon;
  if (tmp2 != null) {
    icon = tmp2.icon;
  }
  const items = [icon, , ];
  let source;
  if (tmp2 != null) {
    source = tmp2.source;
  }
  items[1] = source;
  items[2] = tmp.isCurrentUserConnected;
  return noop.useMemo(() => {
    let icon;
    if (closure_1 != null) {
      icon = closure_1.icon;
    }
    const obj = { IconComponent: icon, source: null, isCurrentUserConnected: null };
    let source;
    if (closure_1 != null) {
      source = closure_1.source;
    }
    if (source == null) {
      source = null;
    }
    obj.source = source;
    obj.isCurrentUserConnected = closure_0.isCurrentUserConnected;
    return obj;
  }, items);
};