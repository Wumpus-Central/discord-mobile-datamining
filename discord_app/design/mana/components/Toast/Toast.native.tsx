// === Module 14103: Toast/Toast ===

// Module 14103 (Toast/Toast)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4778 */;
import Text_Text from "Text/Text" /* 5086 */;
import _mod14104 from "module_14104" /* 14104 */;
import ToastEntity from "ToastEntity" /* 14105 */;
import _modDef14106 from "module_14106" /* 14106 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let wrapper = { success: { color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, icon: fn(4992).CircleCheckIcon }, critical: null };
let obj2 = { color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, icon: fn(4992).CircleCheckIcon };
wrapper.critical = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, icon: fn(5000).CircleErrorIcon };
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles((arg0) => {
  wrapper = { flexDirection: "row", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, justifyContent: "center", alignItems: "center", maxWidth: nativeDefault.modules.toast.MAX_WIDTH, backgroundColor: null };
  if ("default" === arg0) {
    let BACKGROUND_BASE_LOW = nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST;
  } else {
    BACKGROUND_BASE_LOW = nativeDefault.colors.BACKGROUND_BASE_LOW;
  }
  const obj2 = { wrapper: null, baselayer: null, default: null, success: null, critical: null, icon: null, text: null };
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
  obj2.text = { flexShrink: 1 };
  return obj2;
});
const ReactCompilerGating = fn(558);
let obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, icon: fn(5000).CircleErrorIcon };
const size = fn(2);
const result = size.fileFinishedImporting("design/mana/components/Toast/Toast.native.tsx");

export const Toast = ReactCompilerGating.isReactCompilerEnabled() ? (function Toast(iconColor) {
  const obj = c;
  const cResult = obj.c(21);
  ({ variant, text, icon, secondaryIconColor } = iconColor);
  let str = "default";
  if (undefined !== variant) {
    str = variant;
  }
  const tmp4 = closure_9(str);
  const token = useToken.useToken(nativeDefault.modules.toast.TEXT_LINE_COUNT);
  if (null == obj[str]) {
    if (tmpResult3.isToastEntity(icon)) {
      if (cResult[0] !== icon) {
        const obj2 = { entity: icon };
        const tmp21 = timestampProducer(ToastEntity.ToastEntity, obj2);
        cResult[0] = icon;
        cResult[1] = tmp21;
      }
    }
    tmpResult3 = _mod14104;
  }
  let icon1;
  if (obj[str] != null) {
    icon1 = tmp7.icon;
  }
  if (icon1 == null) {
    let tmp9;
    if (!tmpResult4.isToastEntity(icon)) {
      tmp9 = icon;
    }
    icon1 = tmp9;
    tmpResult4 = _mod14104;
  }
  let tmp10 = null;
  if (null != icon1) {
    let color;
    if (tmp7 != null) {
      color = tmp7.color;
    }
    if (color == null) {
      color = iconColor.iconColor;
    }
    if (color == null) {
      color = nativeDefault.colors.ICON_DEFAULT;
    }
    if (cResult[2] === secondaryIconColor) {
      if (cResult[3] === color) {
        let tmp12 = cResult[4];
      }
      if (cResult[5] === icon1) {
        if (cResult[6] === tmp12) {
          if (cResult[7] === tmp4.icon) {
            let tmp13 = cResult[8];
          }
          tmp10 = tmp13;
        }
      }
      const obj3 = { style: tmp4.icon, size: "sm" };
      const merged = Object.assign(tmp12);
      const tmp18 = timestampProducer(icon1, obj3);
      cResult[5] = icon1;
      cResult[6] = tmp12;
      cResult[7] = tmp4.icon;
      cResult[8] = tmp18;
      tmp13 = tmp18;
    }
    const obj4 = { color };
    if (null != secondaryIconColor) {
      obj4.secondaryColor = secondaryIconColor;
    }
    cResult[2] = secondaryIconColor;
    cResult[3] = color;
    cResult[4] = obj4;
    tmp12 = obj4;
  }
  if (cResult[9] === tmp4.baselayer) {
    if (cResult[10] === tmp23) {
      let tmp24 = cResult[11];
    }
    if (cResult[12] === tmp4.text) {
      if (cResult[13] === text) {
        if (cResult[14] === token) {
          let tmp26 = cResult[15];
        }
        if (cResult[16] === tmp10) {
          if (cResult[17] === tmp4.wrapper) {
            if (cResult[18] === tmp24) {
              if (cResult[19] === tmp26) {
                let tmp30 = cResult[20];
              }
              return tmp30;
            }
          }
        }
        const obj5 = { style: tmp4.wrapper, children: null };
        const items = [tmp24, tmp10, tmp26];
        obj5.children = items;
        const tmp33 = React5(hasOwnProperty, obj5);
        cResult[16] = tmp10;
        cResult[17] = tmp4.wrapper;
        cResult[18] = tmp24;
        cResult[19] = tmp26;
        cResult[20] = tmp33;
        tmp30 = tmp33;
      }
    }
    const tmp27 = _modDef14106(text);
    let tmp28 = !tmp27;
    if (!tmp27) {
      const obj6 = { variant: "text-md/normal", color: "text-strong", lineClamp: token, style: tmp4.text, children: text };
      tmp28 = timestampProducer(Text_Text.Text, obj6);
    }
    cResult[12] = tmp4.text;
    cResult[13] = text;
    cResult[14] = token;
    cResult[15] = tmp28;
    tmp26 = tmp28;
  }
  const obj7 = { style: null };
  const items1 = [tmp4.baselayer, tmp4[str]];
  obj7.style = items1;
  const tmp25 = timestampProducer(hasOwnProperty, obj7);
  cResult[9] = tmp4.baselayer;
  cResult[10] = tmp4[str];
  cResult[11] = tmp25;
  tmp24 = tmp25;
  const tmpResult = useToken;
}) : (function Toast(variant) {
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
  const token = str(iconColor[9]).useToken(icon(iconColor[3]).modules.toast.TEXT_LINE_COUNT);
  let obj2 = { style: tmp.wrapper, children: null };
  let obj3 = { style: null };
  const items1 = [tmp.baselayer, tmp[str]];
  obj3.style = items1;
  const memo = secondaryIconColor.useMemo(() => {
    if (null == obj[str]) {
      obj = _mod14104;
      if (obj.isToastEntity(icon)) {
        const obj3 = { entity: tmp4 };
        return timestampProducer(ToastEntity.ToastEntity, obj3);
      }
      tmp4 = icon;
    }
    icon = undefined;
    if (obj[str] != null) {
      icon = tmp.icon;
    }
    if (icon == null) {
      let tmp9;
      if (!obj2.isToastEntity(icon)) {
        tmp9 = tmp8;
      }
      icon = tmp9;
      obj2 = _mod14104;
      tmp8 = icon;
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
      const obj4 = { color };
      if (null != secondaryIconColor) {
        obj4.secondaryColor = secondaryIconColor;
      }
      const obj5 = { style: icon.icon, size: "sm" };
      const merged = Object.assign(obj4);
      return timestampProducer(icon, obj5);
    }
  }, items);
  const items2 = [closure_6(closure_5, obj3), memo, ];
  let tmp9 = icon(iconColor[12])(text);
  let tmp8Result = !tmp9;
  if (!tmp9) {
    let obj4 = { variant: "text-md/normal", color: "text-strong", lineClamp: token, style: tmp.text, children: text };
    tmp8Result = closure_6(str(iconColor[13]).Text, obj4);
  }
  items2[2] = tmp8Result;
  obj2.children = items2;
  return closure_7(closure_5, obj2);
});