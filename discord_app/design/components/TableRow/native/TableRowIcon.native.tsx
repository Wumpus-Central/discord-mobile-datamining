// === Module 5830: TableRowIcon ===

// Module 5830 (TableRowIcon)
import nativeDefault from "native" /* 576 */;
import Icon from "Icon" /* 5189 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const IconDefault = Icon;

require = fn;
let closure_3 = ["color"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { container: null, default: null, statusOnline: null, statusIdle: null, statusDND: null, statusOffline: null, xbox: null, playstation: null, danger: null, secondary: null, translucent: null };
let size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.lg };
obj2.container = size;
obj2.default = { color: nativeDefault.colors.TABLEROW_ICON_COLOR_DEFAULT };
let obj3 = { color: nativeDefault.colors.TABLEROW_ICON_COLOR_DEFAULT };
obj2.statusOnline = { color: nativeDefault.colors.TEXT_STATUS_ONLINE };
const obj4 = { color: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj2.statusIdle = { color: nativeDefault.colors.TEXT_STATUS_IDLE };
const obj5 = { color: nativeDefault.colors.TEXT_STATUS_IDLE };
obj2.statusDND = { color: nativeDefault.colors.TEXT_STATUS_DND };
const obj6 = { color: nativeDefault.colors.TEXT_STATUS_DND };
obj2.statusOffline = { color: nativeDefault.colors.TEXT_STATUS_OFFLINE };
const obj7 = { color: nativeDefault.colors.TEXT_STATUS_OFFLINE };
obj2.xbox = { backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, color: nativeDefault.colors.WHITE };
const obj8 = { backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, color: nativeDefault.colors.WHITE };
obj2.playstation = { backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, color: nativeDefault.colors.WHITE };
const obj9 = { backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, color: nativeDefault.colors.WHITE };
obj2.danger = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
const obj10 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.secondary = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const obj11 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.translucent = { color: nativeDefault.colors.WHITE };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowIcon.native.tsx");

export const TableRowIcon = function TableRowIcon(arg0) {
  ({ source, IconComponent, variant } = arg0);
  if (variant === undefined) {
    variant = "default";
  }
  const tmp = closure_7();
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
      const items = [tmp.container, _objectWithoutProperties(translucent, closure_3)];
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
      const tmp4 = _objectWithoutProperties(translucent, closure_3);
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