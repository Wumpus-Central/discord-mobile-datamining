// discord_app/modules/guilds_bar/native/GuildsBarActivityIndicator.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import NativeViewDefault from "../../core/native/NativeView.tsx";
import _modDef8139 from "../../../../_runtime/metro/08139__.js";
import StageIcon from "../../../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import VoiceNormalIcon from "../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import AppsIcon from "../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import _modDef8536 from "../../../../_runtime/metro/08536__.js";
import _modDef8638 from "../../../../_runtime/metro/08638__.js";
import CalendarIcon from "../../../design/components/Icon/native/redesign/generated/CalendarIcon.tsx";
import ScreenIcon from "../../../design/components/Icon/native/redesign/generated/ScreenIcon.tsx";
import VideoIcon from "../../../design/components/Icon/native/redesign/generated/VideoIcon.tsx";
import useGuildsBarGuildMediaStateDefault from "../useGuildsBarGuildMediaState.tsx";
import _modDef16575 from "../../../../_runtime/metro/16575__.js";
import _modDef16576 from "../../../../_runtime/metro/16576__.js";
import _modDef16577 from "../../../../_runtime/metro/16577__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getMediaIcon(activeEvent) {
  if (activeEvent.activeEvent) {
    const obj2 = { icon: CalendarIcon.CalendarIcon, source: _modDef8638 };
    let tmp6 = obj2;
  } else if (tmp4) {
    const obj3 = { icon: StageIcon.StageIcon, source: _modDef8536 };
    tmp6 = obj3;
  } else if (tmp3) {
    const obj4 = { icon: ScreenIcon.ScreenIcon, source: _modDef16575 };
    tmp6 = obj4;
  } else if (tmp2) {
    const obj5 = { icon: VideoIcon.VideoIcon, source: _modDef16576 };
    tmp6 = obj5;
  } else if (tmp) {
    const obj6 = { icon: VoiceNormalIcon.VoiceNormalIcon, source: _modDef16577 };
    tmp6 = obj6;
  } else {
    tmp6 = null;
    if (tmp5) {
      const obj = { icon: AppsIcon.AppsIcon, source: _modDef8139 };
      tmp6 = obj;
    }
  }
  return tmp6;
}
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj = { activityWrapper: null, activityIconWrapper: null, activityIconWrapperActive: null, activityIcon: null };
let size = {
  position: "absolute",
  top: -3,
  right: -3,
  justifyContent: "center",
  width: 22,
  height: 22,
  padding: 3,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj.activityWrapper = size;
const size1 = {
  justifyContent: "center",
  width: 16,
  height: 16,
  padding: 2,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj.activityIconWrapper = size1;
obj.activityIconWrapperActive = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
const size2 = { width: 12, height: 12, borderRadius: nativeDefault.radii.none };
obj.activityIcon = size2;
let closure_5 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildsBarActivityIndicatorBase(arg0) {
        const cResult = c.c(18);
        ({ IconComponent, style, source, isCurrentUserConnected } = arg0);
        let activityIcon = closure_5();
        const token = useToken.useToken(nativeDefault.colors.ICON_DEFAULT);
        if (cResult[0] === style) {
          if (cResult[1] === activityIcon.activityWrapper) {
            let tmp6 = cResult[2];
          }
          let prop = null;
          if (isCurrentUserConnected) {
            prop = activityIcon.activityIconWrapperActive;
          }
          if (cResult[3] === activityIcon.activityIconWrapper) {
            if (cResult[4] === prop) {
              let tmp9 = cResult[5];
            }
            if (cResult[6] === IconComponent) {
              if (cResult[7] === token) {
                if (cResult[8] === isCurrentUserConnected) {
                  if (cResult[9] === source) {
                    if (cResult[10] === activityIcon.activityIcon) {
                      if (cResult[12] === tmp9) {
                        if (cResult[13] === tmp10) {
                          let tmp17 = cResult[14];
                        }
                        if (cResult[15] === tmp6) {
                          if (cResult[16] === tmp17) {
                            let tmp20 = cResult[17];
                          }
                          return tmp20;
                        }
                        const obj3 = { style: tmp6, children: tmp17 };
                        const tmp22 = jsx(NativeViewDefault, { style: tmp6, children: tmp17 });
                        cResult[15] = tmp6;
                        cResult[16] = tmp17;
                        cResult[17] = tmp22;
                        tmp20 = tmp22;
                      }
                      const obj4 = { style: tmp9, children: cResult[11] };
                      const tmp19 = jsx(NativeViewDefault, { style: tmp9, children: cResult[11] });
                      cResult[12] = tmp9;
                      cResult[13] = cResult[11];
                      cResult[14] = tmp19;
                      tmp17 = tmp19;
                    }
                  }
                }
              }
            }
            if (null == IconComponent) {
              const obj5 = { source, color: null, style: null };
              let WHITE = token;
              if (isCurrentUserConnected) {
                WHITE = nativeDefault.unsafe_rawColors.WHITE;
              }
              obj5.color = WHITE;
              obj5.style = activityIcon.activityIcon;
              const tmp11Result = jsx(native.Icon, { source, color: null, style: null });
              cResult[6] = IconComponent;
              cResult[7] = token;
              cResult[8] = isCurrentUserConnected;
              cResult[9] = source;
              activityIcon = activityIcon.activityIcon;
              cResult[10] = activityIcon;
              cResult[11] = tmp11Result;
            }
            const colors = { color: null, size: "xxs", style: null };
            colors.color = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
            colors.style = activityIcon.activityIcon;
            <IconComponent color={null} size="xxs" style={null} />;
            const tmp14 = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
          }
          const items = [activityIcon.activityIconWrapper, prop];
          cResult[3] = activityIcon.activityIconWrapper;
          cResult[4] = prop;
          cResult[5] = items;
          tmp9 = items;
        }
        const items1 = [activityIcon.activityWrapper, style];
        cResult[0] = style;
        cResult[1] = activityIcon.activityWrapper;
        cResult[2] = items1;
        tmp6 = items1;
      }
    : function GuildsBarActivityIndicatorBase(arg0) {
        ({ IconComponent, isCurrentUserConnected } = arg0);
        ({ style, source } = arg0);
        let activityIcon = closure_5();
        let WHITE = useToken.useToken(nativeDefault.colors.ICON_DEFAULT);
        const obj2 = { style: null, children: null };
        const items = [activityIcon.activityWrapper, style];
        obj2.style = items;
        const items1 = [activityIcon.activityIconWrapper];
        let prop = null;
        if (isCurrentUserConnected) {
          prop = activityIcon.activityIconWrapperActive;
        }
        const obj3 = { style: items1, children: null };
        items1[1] = prop;
        if (null != IconComponent) {
          const colors = { color: null, size: "xxs", style: null };
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
      },
);
const metroRequire = memoResult;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useActivityIndicatorState(arg0) {
      const cResult = c.c(6);
      const tmp2 = useGuildsBarGuildMediaStateDefault(arg0);
      if (cResult[0] !== tmp2) {
        const tmp5 = getMediaIcon(tmp2);
        cResult[0] = tmp2;
        cResult[1] = tmp5;
        let tmp3 = tmp5;
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
          if (cResult[4] === source) {
            let tmp8 = cResult[5];
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
    }
  : function useActivityIndicatorState(arg0) {
      const tmp = useGuildsBarGuildMediaStateDefault(arg0);
      closure_0 = tmp;
      const tmp2 = getMediaIcon(tmp);
      closure_1 = tmp2;
      let icon;
      if (tmp2 != null) {
        icon = tmp2.icon;
      }
      const items = [icon, ,];
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
let closure_8 = tmp3;
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarActivityIndicator.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildsBarGuildActivityIndicator(style) {
        const cResult = c.c(5);
        style = style.style;
        ({ IconComponent, source, isCurrentUserConnected } = closure_8(style.guildId));
        if (cResult[0] === IconComponent) {
          if (cResult[1] === isCurrentUserConnected) {
            if (cResult[2] === source) {
              if (cResult[3] === style) {
                let tmp3 = cResult[4];
              }
              return tmp3;
            }
          }
        }
        let tmp4 = null;
        if (null != source) {
          const obj2 = { IconComponent, style, source, isCurrentUserConnected };
          tmp4 = (
            <memoResult
              IconComponent={IconComponent}
              style={style}
              source={source}
              isCurrentUserConnected={isCurrentUserConnected}
            />
          );
        }
        cResult[0] = IconComponent;
        cResult[1] = isCurrentUserConnected;
        cResult[2] = source;
        cResult[3] = style;
        cResult[4] = tmp4;
        tmp3 = tmp4;
        const tmp2 = closure_8(style.guildId);
      }
    : function GuildsBarGuildActivityIndicator(guildId) {
        const source = closure_8(guildId.guildId).source;
        let tmp4 = null;
        if (null != source) {
          const obj = { IconComponent: tmp2, style: guildId.style, source, isCurrentUserConnected: tmp3 };
          tmp4 = (
            <memoResult IconComponent={tmp2} style={guildId.style} source={source} isCurrentUserConnected={tmp3} />
          );
        }
        return tmp4;
      },
);
export const GuildsBarActivityIndicatorBase = memoResult;
export { getMediaIcon };
export const useActivityIndicatorState = tmp3;
