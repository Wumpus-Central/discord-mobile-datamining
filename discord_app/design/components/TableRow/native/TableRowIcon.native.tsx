// === Module 5230: TableRowIcon ===

// Module 5230 (TableRowIcon)
import _objectWithoutProperties from "_objectWithoutProperties";
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_3 = ["color"];
createCacheKey = { container: null, default: null, statusOnline: null, statusIdle: null, statusDND: null, statusOffline: null, xbox: null, playstation: null, danger: null, secondary: null, translucent: null };
createCacheKey = { width: require("Themes").modules.mobile.TABLE_ROW_ICON_SIZE, height: require("Themes").modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: require("Themes").radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.TABLEROW_ICON_COLOR_DEFAULT };
const obj1 = { color: require("Themes").colors.TABLEROW_ICON_COLOR_DEFAULT };
createCacheKey[2] = { color: require("Themes").colors.TEXT_STATUS_ONLINE };
const obj2 = { color: require("Themes").colors.TEXT_STATUS_ONLINE };
createCacheKey[3] = { color: require("Themes").colors.TEXT_STATUS_IDLE };
const obj3 = { color: require("Themes").colors.TEXT_STATUS_IDLE };
createCacheKey[4] = { color: require("Themes").colors.TEXT_STATUS_DND };
const obj4 = { color: require("Themes").colors.TEXT_STATUS_DND };
createCacheKey[5] = { color: require("Themes").colors.TEXT_STATUS_OFFLINE };
const obj5 = { color: require("Themes").colors.TEXT_STATUS_OFFLINE };
createCacheKey[6] = { backgroundColor: require("Themes").unsafe_rawColors.PLATFORM_XBOX, color: require("Themes").colors.WHITE };
const obj6 = { backgroundColor: require("Themes").unsafe_rawColors.PLATFORM_XBOX, color: require("Themes").colors.WHITE };
createCacheKey[7] = { backgroundColor: require("Themes").unsafe_rawColors.PLATFORM_PLAYSTATION, color: require("Themes").colors.WHITE };
const obj7 = { backgroundColor: require("Themes").unsafe_rawColors.PLATFORM_PLAYSTATION, color: require("Themes").colors.WHITE };
createCacheKey[8] = { color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
const obj8 = { color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey[9] = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
const obj9 = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[10] = { color: require("Themes").colors.WHITE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj10 = { color: require("Themes").colors.WHITE };
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/TableRow/native/TableRowIcon.native.tsx");

export const TableRowIcon = function TableRowIcon(arg0) {
  let IconComponent;
  let source;
  let variant;
  ({ source, IconComponent, variant } = arg0);
  if (variant === undefined) {
    variant = "default";
  }
  const translucent = tmp.translucent;
  while (true) {
    let color = translucent.color;
    let tmp2 = callback;
    let tmp3 = closure_3;
    let str = "default";
    let tmp4 = callback(translucent, closure_3);
    if ("default" === variant) {
      let tmp7 = require;
      let tmp8 = dependencyMap;
      let REFRESH_SMALL_16 = require(4606) /* IconSizes */.IconSizes.MEDIUM;
      let tmp6 = dependencyMap;
    } else {
      let tmp5 = require;
      tmp6 = dependencyMap;
      REFRESH_SMALL_16 = require(4606) /* IconSizes */.IconSizes.REFRESH_SMALL_16;
    }
    let str2 = "md";
    let str3 = "md";
    if ("default" !== variant) {
      let str4 = "danger";
      str3 = "md";
      if ("danger" !== variant) {
        let str5 = "secondary";
        str3 = "md";
        if ("secondary" !== variant) {
          let str6 = "translucent";
          str3 = "md";
          if ("translucent" !== variant) {
            str3 = "sm";
          }
        }
      }
    }
    let tmp9 = null;
    if (null == source) {
      let tmp10 = null;
      if (null == IconComponent) {
        return null;
      }
    }
    let tmp11 = jsx;
    let obj = { style: null, children: null };
    let items = [tmp.container, tmp4];
    obj[0] = items;
    let tmp12 = View;
    if (null != IconComponent) {
      obj = { size: null, color: null };
      obj[0] = str3;
      obj[1] = color;
      let tmp11Result = tmp11(IconComponent, obj);
    } else {
      let tmp13 = importDefault;
      obj = { color: null, source: null, size: null };
      obj[0] = color;
      obj[1] = source;
      obj[2] = REFRESH_SMALL_16;
      tmp11Result = tmp11(importDefault(4606), obj);
    }
    obj[1] = tmp11Result;
    tmp11Result = tmp11(tmp12, obj);
  }
};