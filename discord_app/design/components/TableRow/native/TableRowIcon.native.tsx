// === Module 5999: TableRowIcon ===

// Module 5999 (TableRowIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Icon from "Icon" /* 5596 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const IconDefault = Icon;

let obj2;
let obj3;
let obj4;
let size;
let closure_3 = ["color"];
let closure_4 = ["color"];
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: size, default: obj2, statusOnline: obj3, statusIdle: obj4, statusDND: { color: nativeDefault.colors.TEXT_STATUS_DND }, statusOffline: { color: nativeDefault.colors.TEXT_STATUS_OFFLINE }, xbox: { backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, color: nativeDefault.colors.WHITE }, playstation: { backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, color: nativeDefault.colors.WHITE }, danger: { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL }, secondary: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, translucent: { color: nativeDefault.colors.WHITE } };
size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj2 = { color: nativeDefault.colors.TABLEROW_ICON_COLOR_DEFAULT };
obj3 = { color: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj4 = { color: nativeDefault.colors.TEXT_STATUS_IDLE };
({ color: nativeDefault.colors.TEXT_STATUS_DND });
({ color: nativeDefault.colors.TEXT_STATUS_OFFLINE });
({ backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, color: nativeDefault.colors.WHITE });
({ backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL });
({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
({ color: nativeDefault.colors.WHITE });
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let IconComponent;
  let source;
  let tmp5;
  let translucent;
  let variant;
  const obj = react2;
  const cResult = obj.c(22);
  ({ source, IconComponent, variant } = arg0);
  let str = "default";
  if (undefined !== variant) {
    str = variant;
  }
  const tmp4 = closure_8();
  if (cResult[0] === tmp4) {
    let tmp7;
    let tmp6;
    let tmp11;
    let tmp12;
    let tmp14;
    if (cResult[1] === str) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      const color = tmp5.color;
      const tmp10 = _objectWithoutProperties(tmp5, closure_3);
      cResult[3] = tmp5;
      cResult[4] = color;
      cResult[5] = tmp10;
      tmp7 = tmp10;
      tmp6 = color;
    } else {
      tmp6 = cResult[4];
      tmp7 = cResult[5];
    }
    if (cResult[6] !== str) {
      let REFRESH_SMALL_16;
      if ("default" === str) {
        REFRESH_SMALL_16 = Icon.IconSizes.MEDIUM;
      } else {
        REFRESH_SMALL_16 = Icon.IconSizes.REFRESH_SMALL_16;
      }
      cResult[6] = str;
      cResult[7] = REFRESH_SMALL_16;
      tmp11 = REFRESH_SMALL_16;
    } else {
      tmp11 = cResult[7];
    }
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
      tmp12 = str3;
    } else {
      tmp12 = cResult[9];
    }
    if (null != source) {
      if (cResult[10] === tmp4.container) {
        let tmp15;
        let tmp19;
        if (cResult[11] === tmp7) {
          tmp15 = cResult[12];
        }
        if (cResult[13] === IconComponent) {
          if (cResult[14] === tmp11) {
            if (cResult[15] === tmp12) {
              if (cResult[16] === source) {
                let tmp16;
                if (cResult[17] === tmp6) {
                  tmp16 = cResult[18];
                }
                if (cResult[19] === tmp15) {
                  let tmp21;
                  if (cResult[20] === tmp16) {
                    tmp21 = cResult[21];
                  }
                  tmp14 = tmp21;
                }
                const tmp24 = <View style={tmp15}>{tmp16}</View>;
                cResult[19] = tmp15;
                cResult[20] = tmp16;
                cResult[21] = tmp24;
                tmp21 = tmp24;
              }
            }
          }
        }
        if (null != IconComponent) {
          tmp19 = <IconComponent size={tmp12} color={tmp6} />;
        } else {
          tmp19 = jsx(IconDefault, { color: tmp6, source, size: tmp11 });
        }
        cResult[13] = IconComponent;
        cResult[14] = tmp11;
        cResult[15] = tmp12;
        cResult[16] = source;
        cResult[17] = tmp6;
        cResult[18] = tmp19;
        tmp16 = tmp19;
      }
      const items = [tmp4.container, tmp7];
      cResult[10] = tmp4.container;
      cResult[11] = tmp7;
      cResult[12] = items;
      tmp15 = items;
    } else {
      tmp14 = null;
    }
    return tmp14;
  }
  switch (str) {
    case "default":
    {
      translucent = tmp4.default;
      cResult[0] = tmp4;
      cResult[1] = str;
      cResult[2] = translucent;
      tmp5 = translucent;
      break;
    }
    case "text-status-online":
    {
      translucent = tmp4.statusOnline;
      break;
    }
    case "text-status-idle":
    {
      translucent = tmp4.statusIdle;
      break;
    }
    case "text-status-dnd":
    {
      translucent = tmp4.statusDND;
      break;
    }
    case "text-status-offline":
    {
      translucent = tmp4.statusOffline;
      break;
    }
    case "xbox":
    {
      translucent = tmp4.xbox;
      break;
    }
    case "playstation":
    {
      translucent = tmp4.playstation;
      break;
    }
    case "danger":
    {
      translucent = tmp4.danger;
      break;
    }
    case "secondary":
    {
      translucent = tmp4.secondary;
      break;
    }
    case "translucent":
    {
      translucent = tmp4.translucent;
      break;
    }
  }
}) : ((arg0) => {
  let IconComponent;
  let source;
  let translucent;
  let variant;
  ({ source, IconComponent, variant } = arg0);
  if (variant === undefined) {
    variant = "default";
  }
  const tmp = closure_8();
  switch (variant) {
    case "default":
    {
      let REFRESH_SMALL_16;
      let tmp11Result2;
      translucent = tmp.default;
      const color = translucent.color;
      const tmp4 = _objectWithoutProperties(translucent, closure_4);
      if ("default" === variant) {
        REFRESH_SMALL_16 = Icon.IconSizes.MEDIUM;
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
      if (null != source) {
        let tmp11Result;
        const items = [tmp.container, tmp4];
        if (null != IconComponent) {
          tmp11Result = <IconComponent size={str3} color={color} />;
        } else {
          tmp11Result = jsx(IconDefault, { color, source, size: REFRESH_SMALL_16 });
        }
        tmp11Result2 = <View style={items}>{tmp11Result}</View>;
      } else {
        tmp11Result2 = null;
      }
      return tmp11Result2;
    }
    case "text-status-online":
    {
      translucent = tmp.statusOnline;
      break;
    }
    case "text-status-idle":
    {
      translucent = tmp.statusIdle;
      break;
    }
    case "text-status-dnd":
    {
      translucent = tmp.statusDND;
      break;
    }
    case "text-status-offline":
    {
      translucent = tmp.statusOffline;
      break;
    }
    case "xbox":
    {
      translucent = tmp.xbox;
      break;
    }
    case "playstation":
    {
      translucent = tmp.playstation;
      break;
    }
    case "danger":
    {
      translucent = tmp.danger;
      break;
    }
    case "secondary":
    {
      translucent = tmp.secondary;
      break;
    }
    case "translucent":
    {
      translucent = tmp.translucent;
      break;
    }
  }
});
size = size_mod;
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowIcon.native.tsx");

export const TableRowIcon = tmp4;