// === Module 17780: GuildsBarActivityIndicator ===

// Module 17780 (GuildsBarActivityIndicator)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import useToken from "useToken" /* 5358 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 6914 */;
import NativeViewDefault from "NativeView" /* 7204 */;
import _modDef7499 from "module_7499" /* 7499 */;
import StageIcon from "StageIcon" /* 7500 */;
import _modDef7521 from "module_7521" /* 7521 */;
import AppsIcon from "AppsIcon" /* 7584 */;
import CalendarIcon from "CalendarIcon" /* 7928 */;
import ScreenIcon from "ScreenIcon" /* 9784 */;
import _modDef10758 from "module_10758" /* 10758 */;
import VideoIcon from "VideoIcon" /* 11006 */;
import useGuildsBarGuildMediaStateDefault from "useGuildsBarGuildMediaState" /* 17779 */;
import _modDef17781 from "module_17781" /* 17781 */;
import _modDef17782 from "module_17782" /* 17782 */;
import _modDef17783 from "module_17783" /* 17783 */;
import noop from "module_19" /* 19 */;

require = fn;
function getMediaIcon(activeEvent) {
  if (activeEvent.activeEvent) {
    const obj2 = { icon: CalendarIcon.CalendarIcon, source: _modDef10758 };
    let tmp6 = obj2;
  } else if (tmp4) {
    const obj3 = { icon: StageIcon.StageIcon, source: _modDef7499 };
    tmp6 = obj3;
  } else if (tmp3) {
    const obj4 = { icon: ScreenIcon.ScreenIcon, source: _modDef17781 };
    tmp6 = obj4;
  } else if (tmp2) {
    const obj5 = { icon: VideoIcon.VideoIcon, source: _modDef17782 };
    tmp6 = obj5;
  } else if (tmp) {
    const obj6 = { icon: VoiceNormalIcon.VoiceNormalIcon, source: _modDef17783 };
    tmp6 = obj6;
  } else {
    tmp6 = null;
    if (tmp5) {
      const obj = { icon: AppsIcon.AppsIcon, source: _modDef7521 };
      tmp6 = obj;
    }
  }
  return tmp6;
}
const jsx = fn(21).jsx;
const createStyles = fn(4794);
let obj = { activityWrapper: null, activityIconWrapper: null, activityIconWrapperActive: null, activityIcon: null };
let size = { position: "absolute", top: -3, right: -3, justifyContent: "center", width: 22, height: 22, padding: 3, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.activityWrapper = size;
const size1 = { justifyContent: "center", width: 16, height: 16, padding: 2, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.activityIconWrapper = size1;
obj.activityIconWrapperActive = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
const size2 = { width: 12, height: 12, borderRadius: nativeDefault.radii.none };
obj.activityIcon = size2;
let closure_5 = createStyles.createStyles(obj);
const memoResult = noop.memo(function GuildsBarActivityIndicatorBase(arg0) {
  ({ IconComponent, isCurrentUserConnected } = arg0);
  ({ style, source } = arg0);
  let activityIcon = closure_5();
  let WHITE = useToken.useToken(nativeDefault.colors.ICON_DEFAULT);
  const obj2 = { style: null, children: null };
  items = [activityIcon.activityWrapper, style];
  obj2.style = items;
  const items1 = [activityIcon.activityIconWrapper, ];
  let prop = null;
  if (isCurrentUserConnected) {
    prop = activityIcon.activityIconWrapperActive;
  }
  const obj3 = { style: items1, children: null };
  items1[1] = prop;
  if (null != IconComponent) {
    colors = { color: null, size: "xxs", style: null };
    colors.color = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
    activityIcon = activityIcon.activityIcon;
    colors.style = activityIcon;
    <IconComponent color={null} size="xxs" style={null} />;
    const tmp8 = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
  } else {
    const obj4 = { source, color: null, style: null };
    if (isCurrentUserConnected) {
      WHITE = nativeDefault.unsafe_rawColors.WHITE;
    }
    obj4.color = WHITE;
    obj4.style = activityIcon.activityIcon;
    obj3.children = jsx(native.Icon, { source, color: null, style: null });
    obj2.children = <tmp6 {...obj3} />;
    return <tmp5 {...obj2} />;
  }
});
let obj3 = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
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
  items = [icon, , ];
  let source1;
  if (tmp2 != null) {
    source1 = tmp2.source;
  }
  items[1] = source1;
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
  let source = memo.source;
  let tmp9 = null;
  if (null != source) {
    let obj = { IconComponent: tmp7, style, source, isCurrentUserConnected: tmp8 };
    tmp9 = <memoResult IconComponent={tmp7} style={style} source={source} isCurrentUserConnected={tmp8} />;
  }
  return tmp9;
});
export const GuildsBarActivityIndicatorBase = memoResult;
export { getMediaIcon };
export function useActivityIndicatorState(guildId) {
  const tmp = useGuildsBarGuildMediaStateDefault(guildId);
  closure_0 = tmp;
  const tmp2 = getMediaIcon(tmp);
  closure_1 = tmp2;
  let icon;
  if (tmp2 != null) {
    icon = tmp2.icon;
  }
  items = [icon, , ];
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
}