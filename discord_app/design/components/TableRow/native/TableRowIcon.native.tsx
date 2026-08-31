// === Module 5573: TableRowIcon ===

// Module 5573 (TableRowIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import IconSizes from "IconSizes" /* 4898 */;
import IconSizesDefault from "IconSizes" /* 4898 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
let closure_3 = ["color"];
noopAll;
createCacheKey = { container: null, default: null, statusOnline: null, statusIdle: null, statusDND: null, statusOffline: null, xbox: null, playstation: null, danger: null, secondary: null, translucent: null };
createCacheKey = { width: ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.TABLEROW_ICON_COLOR_DEFAULT };
const obj1 = { color: ThemesDefault.colors.TABLEROW_ICON_COLOR_DEFAULT };
createCacheKey[2] = { color: ThemesDefault.colors.TEXT_STATUS_ONLINE };
const obj2 = { color: ThemesDefault.colors.TEXT_STATUS_ONLINE };
createCacheKey[3] = { color: ThemesDefault.colors.TEXT_STATUS_IDLE };
const obj3 = { color: ThemesDefault.colors.TEXT_STATUS_IDLE };
createCacheKey[4] = { color: ThemesDefault.colors.TEXT_STATUS_DND };
const obj4 = { color: ThemesDefault.colors.TEXT_STATUS_DND };
createCacheKey[5] = { color: ThemesDefault.colors.TEXT_STATUS_OFFLINE };
const obj5 = { color: ThemesDefault.colors.TEXT_STATUS_OFFLINE };
createCacheKey[6] = { backgroundColor: ThemesDefault.unsafe_rawColors.PLATFORM_XBOX, color: ThemesDefault.colors.WHITE };
const obj6 = { backgroundColor: ThemesDefault.unsafe_rawColors.PLATFORM_XBOX, color: ThemesDefault.colors.WHITE };
createCacheKey[7] = { backgroundColor: ThemesDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, color: ThemesDefault.colors.WHITE };
const obj7 = { backgroundColor: ThemesDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, color: ThemesDefault.colors.WHITE };
createCacheKey[8] = { color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
const obj8 = { color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey[9] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const obj9 = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[10] = { color: ThemesDefault.colors.WHITE };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj10 = { color: ThemesDefault.colors.WHITE };
const result = require("set").fileFinishedImporting("design/components/TableRow/native/TableRowIcon.native.tsx");

export const TableRowIcon = function TableRowIcon(arg0) {
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
      let REFRESH_SMALL_16 = IconSizes.IconSizes.MEDIUM;
      let tmp6 = dependencyMap;
    } else {
      let tmp5 = require;
      tmp6 = dependencyMap;
      REFRESH_SMALL_16 = IconSizes.IconSizes.REFRESH_SMALL_16;
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
      tmp11Result = tmp11(IconSizesDefault, obj);
    }
    obj[1] = tmp11Result;
    tmp11Result = tmp11(tmp12, obj);
  }
};