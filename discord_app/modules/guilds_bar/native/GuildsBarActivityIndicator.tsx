// === Module 16333: GuildsBarActivityIndicator ===

// Module 16333 (GuildsBarActivityIndicator)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import useToken from "useToken" /* 4262 */;
import _modDef5033 from "module_5033" /* 5033 */;
import StageIcon from "StageIcon" /* 5097 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5101 */;
import AppsIcon from "AppsIcon" /* 5106 */;
import NativeViewDefault from "NativeView" /* 5589 */;
import _modDef8622 from "module_8622" /* 8622 */;
import ScreenIcon from "ScreenIcon" /* 8879 */;
import _modDef9783 from "module_9783" /* 9783 */;
import CalendarIcon from "CalendarIcon" /* 9785 */;
import VideoIcon from "VideoIcon" /* 10110 */;
import useGuildsBarGuildMediaStateDefault from "useGuildsBarGuildMediaState" /* 16329 */;
import _modDef16334 from "module_16334" /* 16334 */;
import _modDef16335 from "module_16335" /* 16335 */;
import _modDef16336 from "module_16336" /* 16336 */;
import noop from "module_19" /* 19 */;

require = fn;
function getMediaIcon(activeEvent) {
  if (activeEvent.activeEvent) {
    let obj = { icon: CalendarIcon.CalendarIcon, source: _modDef9783 };
    let tmp6 = obj;
  } else if (tmp4) {
    obj = { icon: StageIcon.StageIcon, source: _modDef8622 };
    tmp6 = obj;
  } else if (tmp3) {
    const obj1 = { icon: ScreenIcon.ScreenIcon, source: _modDef16334 };
    tmp6 = obj1;
  } else if (tmp2) {
    const obj2 = { icon: VideoIcon.VideoIcon, source: _modDef16335 };
    tmp6 = obj2;
  } else if (tmp) {
    const obj3 = { icon: VoiceNormalIcon.VoiceNormalIcon, source: _modDef16336 };
    tmp6 = obj3;
  } else {
    tmp6 = null;
    if (tmp5) {
      obj = { icon: AppsIcon.AppsIcon, source: _modDef5033 };
      tmp6 = obj;
    }
  }
  return tmp6;
}
const jsx = fn(21).jsx;
const createStyles = fn(4560);
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