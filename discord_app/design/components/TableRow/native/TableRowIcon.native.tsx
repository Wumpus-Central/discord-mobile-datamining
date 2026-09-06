// discord_app/design/components/TableRow/native/TableRowIcon.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Icon from "../../../void/Icon/native/Icon.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const IconDefault = Icon;

require = fn;
let closure_3 = ["color"];
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = {
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
createStyles.container = size;
createStyles = { color: nativeDefault.colors.TABLEROW_ICON_COLOR_DEFAULT };
createStyles.default = createStyles;
createStyles.statusOnline = { color: nativeDefault.colors.TEXT_STATUS_ONLINE };
const obj1 = { color: nativeDefault.colors.TEXT_STATUS_ONLINE };
createStyles.statusIdle = { color: nativeDefault.colors.TEXT_STATUS_IDLE };
const obj2 = { color: nativeDefault.colors.TEXT_STATUS_IDLE };
createStyles.statusDND = { color: nativeDefault.colors.TEXT_STATUS_DND };
const obj3 = { color: nativeDefault.colors.TEXT_STATUS_DND };
createStyles.statusOffline = { color: nativeDefault.colors.TEXT_STATUS_OFFLINE };
const obj4 = { color: nativeDefault.colors.TEXT_STATUS_OFFLINE };
createStyles.xbox = {
  backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX,
  color: nativeDefault.colors.WHITE,
};
const obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, color: nativeDefault.colors.WHITE };
createStyles.playstation = {
  backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION,
  color: nativeDefault.colors.WHITE,
};
const obj6 = {
  backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION,
  color: nativeDefault.colors.WHITE,
};
createStyles.danger = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
const obj7 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
createStyles.secondary = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const obj8 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.translucent = { color: nativeDefault.colors.WHITE };
let closure_7 = createStyles.createStyles(createStyles);
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
      let obj = { style: null, children: null };
      const items = [tmp.container, _objectWithoutProperties(translucent, closure_3)];
      obj.style = items;
      if (null != IconComponent) {
        obj = { size: str3, color };
        let tmp11Result = tmp11(IconComponent, obj);
      } else {
        obj = { color, source, size: REFRESH_SMALL_16 };
        tmp11Result = tmp11(IconDefault, obj);
      }
      obj.children = tmp11Result;
      tmp11Result = tmp11(View, obj);
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
