// === Module 16314: GuildsBarActivityIndicator ===

// Module 16314 (GuildsBarActivityIndicator)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import useToken from "useToken" /* 4586 */;
import AssetRegistryDefault from "AssetRegistry" /* 5824 */;
import StageIcon from "StageIcon" /* 5888 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5892 */;
import AppsIcon from "AppsIcon" /* 5897 */;
import NativeViewDefault from "NativeView" /* 5983 */;
import ScreenIcon from "ScreenIcon" /* 8577 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9228 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9308 */;
import CalendarIcon from "CalendarIcon" /* 9310 */;
import VideoIcon from "VideoIcon" /* 11247 */;
import useGuildsBarGuildMediaStateDefault from "useGuildsBarGuildMediaState" /* 16310 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 16315 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 16316 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 16317 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
let size1;
let size2;
function getMediaIcon(activeEvent) {
  let tmp6;
  if (activeEvent.activeEvent) {
    tmp6 = { icon: CalendarIcon.CalendarIcon, source: AssetRegistryDefault3 };
    const obj2 = { icon: CalendarIcon.CalendarIcon, source: AssetRegistryDefault3 };
  } else if (tmp4) {
    tmp6 = { icon: StageIcon.StageIcon, source: AssetRegistryDefault2 };
    const obj3 = { icon: StageIcon.StageIcon, source: AssetRegistryDefault2 };
  } else if (tmp3) {
    tmp6 = { icon: ScreenIcon.ScreenIcon, source: AssetRegistryDefault4 };
    const obj4 = { icon: ScreenIcon.ScreenIcon, source: AssetRegistryDefault4 };
  } else if (tmp2) {
    tmp6 = { icon: VideoIcon.VideoIcon, source: AssetRegistryDefault5 };
    const obj5 = { icon: VideoIcon.VideoIcon, source: AssetRegistryDefault5 };
  } else if (tmp) {
    tmp6 = { icon: VoiceNormalIcon.VoiceNormalIcon, source: AssetRegistryDefault6 };
    const obj6 = { icon: VoiceNormalIcon.VoiceNormalIcon, source: AssetRegistryDefault6 };
  } else {
    tmp6 = null;
    if (tmp5) {
      tmp6 = { icon: AppsIcon.AppsIcon, source: AssetRegistryDefault };
      const obj = { icon: AppsIcon.AppsIcon, source: AssetRegistryDefault };
    }
  }
  return tmp6;
}
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { activityWrapper: size, activityIconWrapper: size1, activityIconWrapperActive: obj2, activityIcon: size2 };
size = { position: "absolute", top: -3, right: -3, justifyContent: "center", width: 22, height: 22, padding: 3, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
size1 = { justifyContent: "center", width: 16, height: 16, padding: 2, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2 = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
size2 = { width: 12, height: 12, borderRadius: nativeDefault.radii.none };
let closure_5 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let IconComponent;
  let isCurrentUserConnected;
  let source;
  let style;
  const obj = react2;
  const cResult = obj.c(18);
  ({ IconComponent, style, source, isCurrentUserConnected } = arg0);
  const tmp4 = closure_5();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.ICON_DEFAULT);
  if (cResult[0] === style) {
    let tmp7;
    if (cResult[1] === tmp4.activityWrapper) {
      tmp7 = cResult[2];
    }
    let prop = null;
    if (isCurrentUserConnected) {
      prop = tmp4.activityIconWrapperActive;
    }
    if (cResult[3] === tmp4.activityIconWrapper) {
      let tmp10;
      let tmp12Result;
      if (cResult[4] === prop) {
        tmp10 = cResult[5];
      }
      if (cResult[6] === IconComponent) {
        if (cResult[7] === token) {
          if (cResult[8] === isCurrentUserConnected) {
            if (cResult[9] === source) {
              let tmp11;
              if (cResult[10] === tmp4.activityIcon) {
                tmp11 = cResult[11];
              }
              if (cResult[12] === tmp10) {
                let tmp15;
                if (cResult[13] === tmp11) {
                  tmp15 = cResult[14];
                }
                if (cResult[15] === tmp7) {
                  let tmp18;
                  if (cResult[16] === tmp15) {
                    tmp18 = cResult[17];
                  }
                  return tmp18;
                }
                const tmp20 = jsx(NativeViewDefault, { style: tmp7, children: tmp15 });
                cResult[15] = tmp7;
                cResult[16] = tmp15;
                cResult[17] = tmp20;
                tmp18 = tmp20;
              }
              const tmp17 = jsx(NativeViewDefault, { style: tmp10, children: tmp11 });
              cResult[12] = tmp10;
              cResult[13] = tmp11;
              cResult[14] = tmp17;
              tmp15 = tmp17;
            }
          }
        }
      }
      if (null != IconComponent) {
        const colors = nativeDefault.colors;
        tmp12Result = <IconComponent color={isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT} size="xxs" style={tmp4.activityIcon} />;
      } else {
        let WHITE = token;
        const Icon = native.Icon;
        if (isCurrentUserConnected) {
          WHITE = nativeDefault.unsafe_rawColors.WHITE;
        }
        tmp12Result = <Icon source={source} color={WHITE} style={tmp4.activityIcon} />;
      }
      cResult[6] = IconComponent;
      cResult[7] = token;
      cResult[8] = isCurrentUserConnected;
      cResult[9] = source;
      cResult[10] = tmp4.activityIcon;
      cResult[11] = tmp12Result;
      tmp11 = tmp12Result;
    }
    const items = [tmp4.activityIconWrapper, prop];
    cResult[3] = tmp4.activityIconWrapper;
    cResult[4] = prop;
    cResult[5] = items;
    tmp10 = items;
  }
  const items1 = [tmp4.activityWrapper, style];
  cResult[0] = style;
  cResult[1] = tmp4.activityWrapper;
  cResult[2] = items1;
  tmp7 = items1;
}) : ((arg0) => {
  let IconComponent;
  let isCurrentUserConnected;
  let source;
  let style;
  ({ IconComponent, isCurrentUserConnected } = arg0);
  ({ style, source } = arg0);
  const tmp = closure_5();
  const obj = useToken;
  let WHITE = obj.useToken(nativeDefault.colors.ICON_DEFAULT);
  const items = [tmp.activityWrapper, style];
  const items1 = [tmp.activityIconWrapper, ];
  let prop = null;
  NativeViewDefault;
  NativeViewDefault;
  if (isCurrentUserConnected) {
    prop = tmp.activityIconWrapperActive;
  }
  items1[1] = prop;
  if (null != IconComponent) {
    const colors = nativeDefault.colors;
    let tmp5Result = <IconComponent color={isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT} size="xxs" style={tmp.activityIcon} />;
  } else {
    const Icon = native.Icon;
    if (isCurrentUserConnected) {
      WHITE = nativeDefault.unsafe_rawColors.WHITE;
    }
    tmp5Result = <Icon source={source} color={WHITE} style={tmp.activityIcon} />;
  }
  return <tmp6 style={items}>{null}</tmp6>;
}));
const metroRequire = memoResult;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp2 = useGuildsBarGuildMediaStateDefault(arg0);
  if (cResult[0] !== tmp2) {
    const tmp5 = getMediaIcon(tmp2);
    cResult[0] = tmp2;
    cResult[1] = tmp5;
    tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  let icon;
  if (tmp3 != null) {
    icon = tmp3.icon;
  }
  let source;
  if (tmp3 != null) {
    source = tmp3.source;
  }
  if (source == null) {
    source = null;
  }
  if (cResult[2] === tmp2.isCurrentUserConnected) {
    if (cResult[3] === icon) {
      let tmp8;
      if (cResult[4] === source) {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const obj2 = { IconComponent: icon, source, isCurrentUserConnected: tmp2.isCurrentUserConnected };
  cResult[2] = tmp2.isCurrentUserConnected;
  cResult[3] = icon;
  cResult[4] = source;
  cResult[5] = obj2;
  tmp8 = obj2;
}) : ((arg0) => {
  const tmp = useGuildsBarGuildMediaStateDefault(arg0);
  let closure_0 = tmp;
  const tmp2 = getMediaIcon(tmp);
  let closure_1 = tmp2;
  let icon;
  const useMemo = react.useMemo;
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
  return useMemo(() => {
    let source;
    let icon;
    if (closure_1 != null) {
      icon = closure_1.icon;
    }
    const obj = { IconComponent: icon, source, isCurrentUserConnected: closure_0.isCurrentUserConnected };
    source = undefined;
    if (closure_1 != null) {
      source = closure_1.source;
    }
    if (source == null) {
      source = null;
    }
    return obj;
  }, items);
});
let closure_8 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult1 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let IconComponent;
  let isCurrentUserConnected;
  let source;
  const obj = react2;
  const cResult = obj.c(5);
  style = style.style;
  ({ IconComponent, source, isCurrentUserConnected } = closure_8(style.guildId));
  closure_8(style.guildId);
  if (cResult[0] === IconComponent) {
    if (cResult[1] === isCurrentUserConnected) {
      if (cResult[2] === source) {
        let tmp3;
        if (cResult[3] === style) {
          tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  let tmp4 = null;
  if (null != source) {
    tmp4 = <metroRequire IconComponent={IconComponent} style={style} source={source} isCurrentUserConnected={isCurrentUserConnected} />;
  }
  cResult[0] = IconComponent;
  cResult[1] = isCurrentUserConnected;
  cResult[2] = source;
  cResult[3] = style;
  cResult[4] = tmp4;
  tmp3 = tmp4;
}) : ((style) => {
  style = style.style;
  const source = closure_8(style.guildId).source;
  let tmp4 = null;
  closure_8(style.guildId);
  if (null != source) {
    tmp4 = <metroRequire IconComponent={tmp2} style={style} source={source} isCurrentUserConnected={tmp3} />;
  }
  return tmp4;
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarActivityIndicator.tsx");

export default memoResult1;
export const GuildsBarActivityIndicatorBase = memoResult;
export { getMediaIcon };
export const useActivityIndicatorState = tmp4;