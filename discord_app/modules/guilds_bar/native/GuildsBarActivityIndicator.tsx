// discord_app/modules/guilds_bar/native/GuildsBarActivityIndicator.tsx
import importAllResult from "canConnectToChannel";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/07736_registerAsset.js";
import { registerAsset } from "../../../../_runtime/08058_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09092_registerAsset.js";
import { registerAsset } from "../../../../_runtime/15529_registerAsset.js";
import { registerAsset } from "../../../../_runtime/15530_registerAsset.js";
import { registerAsset } from "../../../../_runtime/15531_registerAsset.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { AppsIcon } from "../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import { CalendarIcon } from "../../../design/components/Icon/native/redesign/generated/CalendarIcon.tsx";
import { ScreenIcon } from "../../../design/components/Icon/native/redesign/generated/ScreenIcon.tsx";
import { StageIcon } from "../../../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import { VideoIcon } from "../../../design/components/Icon/native/redesign/generated/VideoIcon.tsx";
import { VoiceNormalIcon } from "../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";
import { set } from "../../core/native/NativeView.tsx";
import { canConnectToChannel } from "../useGuildMediaState.tsx";

let require = arg1;
function getMediaIcon(closure_3) {
  if (closure_3.activeEvent) {
    let obj = { icon: null, source: null };
    obj[0] = CalendarIcon.CalendarIcon;
    obj[1] = registerAsset;
    let tmp6 = obj;
  } else if (tmp4) {
    obj = { icon: null, source: null };
    obj[0] = StageIcon.StageIcon;
    obj[1] = registerAsset;
    tmp6 = obj;
  } else if (tmp3) {
    const obj1 = { icon: null, source: null };
    obj1[0] = ScreenIcon.ScreenIcon;
    obj1[1] = registerAsset;
    tmp6 = obj1;
  } else if (tmp2) {
    const obj2 = { icon: null, source: null };
    obj2[0] = VideoIcon.VideoIcon;
    obj2[1] = registerAsset;
    tmp6 = obj2;
  } else if (tmp) {
    const obj3 = { icon: null, source: null };
    obj3[0] = VoiceNormalIcon.VoiceNormalIcon;
    obj3[1] = registerAsset;
    tmp6 = obj3;
  } else {
    tmp6 = null;
    if (tmp5) {
      obj = { icon: null, source: null };
      obj[0] = AppsIcon.AppsIcon;
      obj[1] = registerAsset;
      tmp6 = obj;
    }
  }
  return tmp6;
}
let c3 = importAllResult;
let obj = { activityWrapper: null, activityIconWrapper: null, activityIconWrapperActive: null, activityIcon: null };
obj = { position: "absolute", top: -3, right: -3, justifyContent: "center", width: 22, height: 22, padding: 3, borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
obj[0] = obj;
createCacheKey = { justifyContent: "center", width: 16, height: 16, padding: 2, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
obj[1] = createCacheKey;
obj[2] = { backgroundColor: require("Themes").colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
let obj2 = { backgroundColor: require("Themes").colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
obj[3] = { width: 12, height: 12, borderRadius: require("Themes").radii.none };
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let IconComponent;
  let isCurrentUserConnected;
  let source;
  let style;
  ({ IconComponent, isCurrentUserConnected } = arg0);
  ({ style, source } = arg0);
  let activityIcon = callback();
  let obj = map;
  let WHITE = obj.useToken(Themes.colors.ICON_DEFAULT);
  obj = { style: items, children: null };
  items = [activityIcon.activityWrapper, style];
  const items1 = [activityIcon.activityIconWrapper, ];
  let prop = null;
  const tmp = require;
  const tmp5 = set;
  if (isCurrentUserConnected) {
    prop = activityIcon.activityIconWrapperActive;
  }
  obj = { style: items1, children: null };
  items1[1] = prop;
  if (null != IconComponent) {
    let colors = tmp3(712).colors;
    colors = { color: null, size: "xxs", style: null };
    colors[0] = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
    activityIcon = activityIcon.activityIcon;
    colors[2] = activityIcon;
    tmp4(IconComponent, colors);
    const tmp8 = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
  } else {
    const obj1 = { source: null, color: null, style: null };
    obj1[0] = source;
    if (isCurrentUserConnected) {
      WHITE = tmp3(712).unsafe_rawColors.WHITE;
    }
    obj1[1] = WHITE;
    obj1[2] = activityIcon.activityIcon;
    obj[1] = tmp4(tmp(1297).Icon, obj1);
    obj[1] = tmp4(tmp6, obj);
    return tmp4(tmp5, obj);
  }
});
let obj3 = { width: 12, height: 12, borderRadius: require("Themes").radii.none };
const memoResult1 = importAllResult.memo(function GuildsBarGuildActivityIndicator(arg0) {
  let guildId;
  let style;
  let c0;
  let importDefault;
  ({ guildId, style } = arg0);
  const tmp = canConnectToChannel(guildId);
  c0 = tmp;
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
    if (c1 != null) {
      icon = tmp.icon;
    }
    const obj = { IconComponent: icon, source: null, isCurrentUserConnected: null };
    let source;
    if (c1 != null) {
      source = tmp.source;
    }
    if (source == null) {
      source = null;
    }
    obj[1] = source;
    obj[2] = _undefined.isCurrentUserConnected;
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
const result = require("createCacheKey").fileFinishedImporting("modules/guilds_bar/native/GuildsBarActivityIndicator.tsx");

export default memoResult1;
export const GuildsBarActivityIndicatorBase = memoResult;
export { getMediaIcon };
export const useActivityIndicatorState = function useActivityIndicatorState(guildId) {
  const tmp = canConnectToChannel(guildId);
  const require = tmp;
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
    if (c1 != null) {
      icon = tmp.icon;
    }
    const obj = { IconComponent: icon, source: null, isCurrentUserConnected: null };
    let source;
    if (c1 != null) {
      source = tmp.source;
    }
    if (source == null) {
      source = null;
    }
    obj[1] = source;
    obj[2] = _undefined.isCurrentUserConnected;
    return obj;
  }, items);
};