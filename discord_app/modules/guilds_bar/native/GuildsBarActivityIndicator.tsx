// === Module 16333: getMediaIcon ===

// Module 16333 (getMediaIcon)
import ThemesDefault from "Themes" /* 576 */;
import Button from "Button" /* 1178 */;
import map from "map" /* 4262 */;
import registerAssetDefault from "registerAsset" /* 5033 */;
import StageIcon from "StageIcon" /* 5097 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5101 */;
import AppsIcon from "AppsIcon" /* 5106 */;
import setDefault from "set" /* 5589 */;
import registerAssetDefault2 from "registerAsset" /* 8622 */;
import ScreenIcon from "ScreenIcon" /* 8879 */;
import registerAssetDefault3 from "registerAsset" /* 9783 */;
import CalendarIcon from "CalendarIcon" /* 9785 */;
import VideoIcon from "VideoIcon" /* 10110 */;
import useGuildsBarGuildMediaStateDefault from "useGuildsBarGuildMediaState" /* 16329 */;
import registerAssetDefault4 from "registerAsset" /* 16334 */;
import registerAssetDefault5 from "registerAsset" /* 16335 */;
import registerAssetDefault6 from "registerAsset" /* 16336 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function getMediaIcon(closure_3) {
  if (closure_3.activeEvent) {
    let obj = { icon: null, source: null };
    obj[0] = CalendarIcon.CalendarIcon;
    obj[1] = registerAssetDefault3;
    let tmp6 = obj;
  } else if (tmp4) {
    obj = { icon: null, source: null };
    obj[0] = StageIcon.StageIcon;
    obj[1] = registerAssetDefault2;
    tmp6 = obj;
  } else if (tmp3) {
    obj1 = { icon: null, source: null };
    obj1[0] = ScreenIcon.ScreenIcon;
    obj1[1] = registerAssetDefault4;
    tmp6 = obj1;
  } else if (tmp2) {
    const obj2 = { icon: null, source: null };
    obj2[0] = VideoIcon.VideoIcon;
    obj2[1] = registerAssetDefault5;
    tmp6 = obj2;
  } else if (tmp) {
    const obj3 = { icon: null, source: null };
    obj3[0] = VoiceNormalIcon.VoiceNormalIcon;
    obj3[1] = registerAssetDefault6;
    tmp6 = obj3;
  } else {
    tmp6 = null;
    if (tmp5) {
      obj = { icon: null, source: null };
      obj[0] = AppsIcon.AppsIcon;
      obj[1] = registerAssetDefault;
      tmp6 = obj;
    }
  }
  return tmp6;
}
let c3 = importAllResult;
let obj = { activityWrapper: null, activityIconWrapper: null, activityIconWrapperActive: null, activityIcon: null };
obj = { position: "absolute", top: -3, right: -3, justifyContent: "center", width: 22, height: 22, padding: 3, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
obj[0] = obj;
createCacheKey = { justifyContent: "center", width: 16, height: 16, padding: 2, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
obj[1] = createCacheKey;
obj[2] = { backgroundColor: ThemesDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
let obj2 = { backgroundColor: ThemesDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
obj[3] = { width: 12, height: 12, borderRadius: ThemesDefault.radii.none };
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ IconComponent, isCurrentUserConnected } = arg0);
  ({ style, source } = arg0);
  let activityIcon = callback();
  let obj = map;
  let WHITE = obj.useToken(ThemesDefault.colors.ICON_DEFAULT);
  obj = { style: items, children: null };
  items = [activityIcon.activityWrapper, style];
  const items1 = [activityIcon.activityIconWrapper, ];
  let prop = null;
  const tmp = require;
  const tmp5 = setDefault;
  if (isCurrentUserConnected) {
    prop = activityIcon.activityIconWrapperActive;
  }
  obj = { style: items1, children: null };
  items1[1] = prop;
  if (null != IconComponent) {
    let colors = tmp3(576).colors;
    colors = { color: null, size: "xxs", style: null };
    colors[0] = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
    activityIcon = activityIcon.activityIcon;
    colors[2] = activityIcon;
    tmp4(IconComponent, colors);
    const tmp8 = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
  } else {
    obj1 = { source: null, color: null, style: null };
    obj1[0] = source;
    if (isCurrentUserConnected) {
      WHITE = tmp3(576).unsafe_rawColors.WHITE;
    }
    obj1[1] = WHITE;
    obj1[2] = activityIcon.activityIcon;
    obj[1] = tmp4(Button.Icon, obj1);
    obj[1] = tmp4(tmp6, obj);
    return tmp4(tmp5, obj);
  }
});
let obj3 = { width: 12, height: 12, borderRadius: ThemesDefault.radii.none };
const memoResult1 = importAllResult.memo(function GuildsBarGuildActivityIndicator(arg0) {
  closure_0 = undefined;
  importDefault = undefined;
  ({ guildId, style } = arg0);
  const tmp = useGuildsBarGuildMediaStateDefault(guildId);
  closure_0 = tmp;
  const tmp2 = getMediaIcon(tmp);
  importDefault = tmp2;
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
  const memo = importAllResult.useMemo(() => {
    let icon;
    if (closure_1 != null) {
      icon = tmp.icon;
    }
    const obj = { IconComponent: icon, source: null, isCurrentUserConnected: null };
    let source;
    if (closure_1 != null) {
      source = tmp.source;
    }
    if (source == null) {
      source = null;
    }
    obj[1] = source;
    obj[2] = obj.isCurrentUserConnected;
    return obj;
  }, items);
  source = memo.source;
  let tmp9 = null;
  if (null != source) {
    let obj = { IconComponent: null, style: null, source: null, isCurrentUserConnected: null };
    obj[0] = tmp7;
    obj[1] = style;
    obj[2] = source;
    obj[3] = tmp8;
    tmp9 = <closure_6 IconComponent={null} style={null} source={null} isCurrentUserConnected={null} />;
  }
  return tmp9;
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarActivityIndicator.tsx");

export default memoResult1;
export const GuildsBarActivityIndicatorBase = memoResult;
export { getMediaIcon };
export const useActivityIndicatorState = function useActivityIndicatorState(guildId) {
  const tmp = useGuildsBarGuildMediaStateDefault(guildId);
  closure_0 = tmp;
  const tmp2 = getMediaIcon(tmp);
  importDefault = tmp2;
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
  return importAllResult.useMemo(() => {
    let icon;
    if (closure_1 != null) {
      icon = tmp.icon;
    }
    const obj = { IconComponent: icon, source: null, isCurrentUserConnected: null };
    let source;
    if (closure_1 != null) {
      source = tmp.source;
    }
    if (source == null) {
      source = null;
    }
    obj[1] = source;
    obj[2] = obj.isCurrentUserConnected;
    return obj;
  }, items);
};