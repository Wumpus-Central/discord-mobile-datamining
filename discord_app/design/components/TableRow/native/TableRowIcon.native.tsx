// discord_app/design/components/TableRow/native/TableRowIcon.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Icon from "../../../void/Icon/native/Icon.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const IconDefault = Icon;

require = fn;
let closure_3 = ["color"];
let closure_4 = ["color"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = {
  container: null,
  default: null,
  statusOnline: null,
  statusIdle: null,
  statusDND: null,
  statusOffline: null,
  xbox: null,
  playstation: null,
  danger: null,
  secondary: null,
  translucent: null,
};
let size = {
  width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.lg,
};
obj2.container = size;
obj2.default = { color: nativeDefault.colors.TABLEROW_ICON_COLOR_DEFAULT };
let obj3 = { color: nativeDefault.colors.TABLEROW_ICON_COLOR_DEFAULT };
obj2.statusOnline = { color: nativeDefault.colors.TEXT_STATUS_ONLINE };
let obj4 = { color: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj2.statusIdle = { color: nativeDefault.colors.TEXT_STATUS_IDLE };
const obj5 = { color: nativeDefault.colors.TEXT_STATUS_IDLE };
obj2.statusDND = { color: nativeDefault.colors.TEXT_STATUS_DND };
const obj6 = { color: nativeDefault.colors.TEXT_STATUS_DND };
obj2.statusOffline = { color: nativeDefault.colors.TEXT_STATUS_OFFLINE };
const obj7 = { color: nativeDefault.colors.TEXT_STATUS_OFFLINE };
obj2.xbox = { backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, color: nativeDefault.colors.WHITE };
const obj8 = { backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, color: nativeDefault.colors.WHITE };
obj2.playstation = {
  backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION,
  color: nativeDefault.colors.WHITE,
};
const obj9 = {
  backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION,
  color: nativeDefault.colors.WHITE,
};
obj2.danger = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
const obj10 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.secondary = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const obj11 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.translucent = { color: nativeDefault.colors.WHITE };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj12 = { color: nativeDefault.colors.WHITE };
size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowIcon.native.tsx");

export const TableRowIcon = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(22);
      ({ source, IconComponent, variant } = arg0);
      let str = "default";
      if (undefined !== variant) {
        str = variant;
      }
      const tmp4 = closure_8();
      if (cResult[0] === tmp4) {
        if (cResult[1] === str) {
          if (cResult[3] !== cResult[2]) {
            const color = tmp5.color;
            const tmp11 = _objectWithoutProperties(tmp5, closure_3);
            cResult[3] = tmp5;
            cResult[4] = color;
            cResult[5] = tmp11;
            let tmp8 = tmp11;
            let tmp7 = color;
          } else {
            tmp7 = cResult[4];
            tmp8 = cResult[5];
          }
          if (cResult[6] !== str) {
            if ("default" === str) {
              let REFRESH_SMALL_16 = Icon.IconSizes.MEDIUM;
            } else {
              REFRESH_SMALL_16 = Icon.IconSizes.REFRESH_SMALL_16;
            }
            cResult[6] = str;
            cResult[7] = REFRESH_SMALL_16;
          } else {
            if (cResult[8] !== str) {
              let str3 = "md";
              if ("default" !== str) {
                str3 = "md";
                if ("danger" !== str) {
                  str3 = "md";
                  if ("secondary" !== str) {
                    str3 = "md";
                    if ("translucent" !== str) {
                      str3 = "sm";
                    }
                  }
                }
              }
              cResult[8] = str;
              cResult[9] = str3;
              let tmp14 = str3;
            } else {
              tmp14 = cResult[9];
            }
            if (null == source) {
              if (null == IconComponent) {
                return null;
              }
            }
            if (cResult[10] === tmp4.container) {
              if (cResult[11] === tmp8) {
                let tmp17 = cResult[12];
              }
              if (cResult[13] === IconComponent) {
                if (cResult[14] === tmp12) {
                  if (cResult[15] === tmp14) {
                    if (cResult[16] === source) {
                      if (cResult[17] === tmp7) {
                        if (cResult[19] === tmp17) {
                        }
                        const obj2 = { style: tmp17, children: cResult[18] };
                        const tmp27 = <View style={tmp17}>{cResult[18]}</View>;
                        cResult[19] = tmp17;
                        cResult[20] = cResult[18];
                        cResult[21] = tmp27;
                      }
                    }
                  }
                }
              }
              if (null != IconComponent) {
                const obj3 = { size: tmp14, color: tmp7 };
                let tmp21 = <IconComponent size={tmp14} color={tmp7} />;
              } else {
                const obj4 = { color: tmp7, source, size: tmp12 };
                tmp21 = jsx(IconDefault, { color: tmp7, source, size: tmp12 });
              }
              cResult[13] = IconComponent;
              cResult[14] = tmp12;
              cResult[15] = tmp14;
              cResult[16] = source;
              cResult[17] = tmp7;
              cResult[18] = tmp21;
            }
            const items = [tmp4.container, tmp8];
            cResult[10] = tmp4.container;
            cResult[11] = tmp8;
            cResult[12] = items;
            tmp17 = items;
          }
        }
      }
      switch (str) {
        case "default":
          let translucent = tmp4.default;
          cResult[0] = tmp4;
          cResult[1] = str;
          cResult[2] = translucent;
          translucent = tmp4.secondary;
          break;
        case "text-status-online":
          translucent = tmp4.statusOnline;
          break;
        case "text-status-idle":
          translucent = tmp4.statusIdle;
          break;
        case "text-status-dnd":
          translucent = tmp4.statusDND;
          break;
        case "text-status-offline":
          translucent = tmp4.statusOffline;
          break;
        case "xbox":
          translucent = tmp4.xbox;
          break;
        case "playstation":
          translucent = tmp4.playstation;
          break;
        case "danger":
          translucent = tmp4.danger;
          break;
        case "secondary":
          break;
        case "translucent":
          translucent = tmp4.translucent;
          break;
      }
    }
  : (arg0) => {
      ({ source, IconComponent, variant } = arg0);
      if (variant === undefined) {
        variant = "default";
      }
      const tmp = closure_8();
      switch (variant) {
        case "default":
          let translucent = tmp.default;
          const color = translucent.color;
          if ("default" === variant) {
            let REFRESH_SMALL_16 = Icon.IconSizes.MEDIUM;
          } else {
            REFRESH_SMALL_16 = Icon.IconSizes.REFRESH_SMALL_16;
          }
          let str3 = "md";
          if ("default" !== variant) {
            str3 = "md";
            if ("danger" !== variant) {
              str3 = "md";
              if ("secondary" !== variant) {
                str3 = "md";
                if ("translucent" !== variant) {
                  str3 = "sm";
                }
              }
            }
          }
          if (null == source) {
            if (null == IconComponent) {
              return null;
            }
          }
          const obj = { style: null, children: null };
          const items = [tmp.container, _objectWithoutProperties(translucent, closure_4)];
          obj.style = items;
          if (null != IconComponent) {
            const obj2 = { size: str3, color };
            let tmp11Result = <IconComponent size={str3} color={color} />;
          } else {
            const obj3 = { color, source, size: REFRESH_SMALL_16 };
            tmp11Result = jsx(IconDefault, { color, source, size: REFRESH_SMALL_16 });
          }
          obj.children = tmp11Result;
          <View style={null}>{null}</View>;
          const tmp4 = _objectWithoutProperties(translucent, closure_4);
          break;
        case "text-status-online":
          translucent = tmp.statusOnline;
          break;
        case "text-status-idle":
          translucent = tmp.statusIdle;
          break;
        case "text-status-dnd":
          translucent = tmp.statusDND;
          break;
        case "text-status-offline":
          translucent = tmp.statusOffline;
          break;
        case "xbox":
          translucent = tmp.xbox;
          break;
        case "playstation":
          translucent = tmp.playstation;
          break;
        case "danger":
          translucent = tmp.danger;
          break;
        case "secondary":
          translucent = tmp.secondary;
          break;
        case "translucent":
          translucent = tmp.translucent;
          break;
      }
    };
