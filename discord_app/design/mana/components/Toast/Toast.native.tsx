// === Module 14191: Toast/Toast ===

// Module 14191 (Toast/Toast)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let wrapper = { success: { color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, icon: fn(4801).CircleCheckIcon }, critical: null };
let obj2 = { color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, icon: fn(4801).CircleCheckIcon };
wrapper.critical = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, icon: fn(6214).CircleErrorIcon };
const createStyles = fn(4845);
let closure_9 = createStyles.createStyles((arg0) => {
  wrapper = { flexDirection: "row", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, justifyContent: "center", alignItems: "center", maxWidth: nativeDefault.modules.toast.MAX_WIDTH, backgroundColor: null };
  if ("default" === arg0) {
    let BACKGROUND_BASE_LOW = nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST;
  } else {
    BACKGROUND_BASE_LOW = nativeDefault.colors.BACKGROUND_BASE_LOW;
  }
  const obj2 = { wrapper: null, baselayer: null, default: null, success: null, critical: null, icon: null };
  wrapper.backgroundColor = BACKGROUND_BASE_LOW;
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj2.wrapper = wrapper;
  const merged1 = Object.assign(absoluteFill.absoluteFill);
  obj2.baselayer = { borderRadius: nativeDefault.radii.md, borderWidth: 1 };
  const obj3 = { borderRadius: nativeDefault.radii.md, borderWidth: 1 };
  obj2.default = { borderColor: nativeDefault.colors.BORDER_NORMAL };
  const obj4 = { borderColor: nativeDefault.colors.BORDER_NORMAL };
  obj2.success = { borderColor: nativeDefault.colors.TOAST_SUCCESS_BORDER, backgroundColor: nativeDefault.colors.TOAST_SUCCESS_BACKGROUND };
  const obj5 = { borderColor: nativeDefault.colors.TOAST_SUCCESS_BORDER, backgroundColor: nativeDefault.colors.TOAST_SUCCESS_BACKGROUND };
  obj2.critical = { borderColor: nativeDefault.colors.TOAST_CRITICAL_BORDER, backgroundColor: nativeDefault.colors.TOAST_CRITICAL_BACKGROUND };
  obj2.icon = { flexShrink: 0 };
  return obj2;
});
const size = fn(2);
const result = size.fileFinishedImporting("design/mana/components/Toast/Toast.native.tsx");

export const Toast = function Toast(variant) {
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  ({ text, icon } = variant);
  const iconColor = variant.iconColor;
  const secondaryIconColor = variant.secondaryIconColor;
  const tmp = closure_9(str);
  icon = tmp;
  const items = [icon, iconColor, secondaryIconColor, tmp.icon, str];
  const token = str(iconColor[7]).useToken(icon(iconColor[3]).modules.toast.TEXT_LINE_COUNT);
  let obj2 = { style: null, children: null };
  const items1 = [tmp.wrapper];
  obj2.style = items1;
  const obj3 = { style: null };
  const items2 = [tmp.baselayer, tmp[str]];
  obj3.style = items2;
  const memo = secondaryIconColor.useMemo(() => {
    icon = undefined;
    if (obj[str] != null) {
      icon = tmp.icon;
    }
    if (null == icon) {
      return null;
    } else {
      let color;
      if (tmp != null) {
        color = tmp.color;
      }
      if (color == null) {
        color = iconColor;
      }
      if (color == null) {
        color = nativeDefault.colors.ICON_DEFAULT;
      }
      obj = { color };
      if (null != secondaryIconColor) {
        obj.secondaryColor = secondaryIconColor;
      }
      const obj2 = { style: icon.icon, size: "sm" };
      const merged = Object.assign(obj);
      return timestampProducer(icon, obj2);
    }
  }, items);
  const items3 = [closure_6(closure_5, obj3), memo, ];
  const tmp9 = icon(iconColor[8])(text);
  let tmp8Result = !tmp9;
  if (!tmp9) {
    const obj4 = { variant: "text-md/normal", color: "text-strong", lineClamp: token, children: text };
    tmp8Result = closure_6(str(iconColor[9]).Text, obj4);
  }
  items3[2] = tmp8Result;
  obj2.children = items3;
  return closure_7(closure_5, obj2);
};