// discord_app/design/mana/components/Toast/Toast.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import _mod14280 from "../../../../../discord_common/js/packages/design/components/Toast/ToastTypes.shared.tsx";
import ToastEntity from "ToastEntity.native.tsx";
import _modDef14282 from "../../../../../_runtime/metro/14282__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let wrapper = {
  success: { color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, icon: fn(4798).CircleCheckIcon },
  critical: null,
};
let obj2 = { color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, icon: fn(4798).CircleCheckIcon };
wrapper.critical = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, icon: fn(4806).CircleErrorIcon };
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles((arg0) => {
  wrapper = {
    flexDirection: "row",
    gap: nativeDefault.space.PX_8,
    padding: nativeDefault.space.PX_12,
    borderRadius: nativeDefault.radii.md,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: nativeDefault.modules.toast.MAX_WIDTH,
    backgroundColor: null,
  };
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
  obj2.success = {
    borderColor: nativeDefault.colors.TOAST_SUCCESS_BORDER,
    backgroundColor: nativeDefault.colors.TOAST_SUCCESS_BACKGROUND,
  };
  const obj5 = {
    borderColor: nativeDefault.colors.TOAST_SUCCESS_BORDER,
    backgroundColor: nativeDefault.colors.TOAST_SUCCESS_BACKGROUND,
  };
  obj2.critical = {
    borderColor: nativeDefault.colors.TOAST_CRITICAL_BORDER,
    backgroundColor: nativeDefault.colors.TOAST_CRITICAL_BACKGROUND,
  };
  obj2.icon = { flexShrink: 0 };
  obj2.text = { flexShrink: 1 };
  return obj2;
});
const ReactCompilerGating = fn(558);
let obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, icon: fn(4806).CircleErrorIcon };
const size = fn(2);
const result = size.fileFinishedImporting("design/mana/components/Toast/Toast.native.tsx");

export const Toast = ReactCompilerGating.isReactCompilerEnabled()
  ? (iconColor) => {
      const obj = c;
      const cResult = obj.c(23);
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
        tmpResult3 = _mod14280;
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
        tmpResult4 = _mod14280;
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
      if (cResult[9] !== tmp4.wrapper) {
        const items = [tmp4.wrapper];
        cResult[9] = tmp4.wrapper;
        cResult[10] = items;
        let tmp23 = items;
      } else {
        tmp23 = cResult[10];
      }
      if (cResult[11] === tmp4.baselayer) {
        if (cResult[12] === tmp24) {
          let tmp25 = cResult[13];
        }
        if (cResult[14] === tmp4.text) {
          if (cResult[15] === text) {
            if (cResult[16] === token) {
              let tmp27 = cResult[17];
            }
            if (cResult[18] === tmp10) {
              if (cResult[19] === tmp23) {
                if (cResult[20] === tmp25) {
                  if (cResult[21] === tmp27) {
                    let tmp31 = cResult[22];
                  }
                  return tmp31;
                }
              }
            }
            const obj5 = { style: tmp23, children: null };
            const items1 = [tmp25, tmp10, tmp27];
            obj5.children = items1;
            const tmp34 = React5(hasOwnProperty, obj5);
            cResult[18] = tmp10;
            cResult[19] = tmp23;
            cResult[20] = tmp25;
            cResult[21] = tmp27;
            cResult[22] = tmp34;
            tmp31 = tmp34;
          }
        }
        const tmp28 = _modDef14282(text);
        let tmp29 = !tmp28;
        if (!tmp28) {
          const obj6 = {
            variant: "text-md/normal",
            color: "text-strong",
            lineClamp: token,
            style: tmp4.text,
            children: text,
          };
          tmp29 = timestampProducer(Text_Text.Text, obj6);
        }
        cResult[14] = tmp4.text;
        cResult[15] = text;
        cResult[16] = token;
        cResult[17] = tmp29;
        tmp27 = tmp29;
      }
      const obj7 = { style: null };
      const items2 = [tmp4.baselayer, tmp4[str]];
      obj7.style = items2;
      const tmp26 = timestampProducer(hasOwnProperty, obj7);
      cResult[11] = tmp4.baselayer;
      cResult[12] = tmp4[str];
      cResult[13] = tmp26;
      tmp25 = tmp26;
      const tmpResult = useToken;
    }
  : (variant) => {
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
      let obj2 = { style: null, children: null };
      const items1 = [tmp.wrapper];
      obj2.style = items1;
      let obj3 = { style: null };
      const items2 = [tmp.baselayer, tmp[str]];
      obj3.style = items2;
      const memo = secondaryIconColor.useMemo(() => {
        if (null == obj[str]) {
          obj = _mod14280;
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
          obj2 = _mod14280;
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
      const items3 = [closure_6(closure_5, obj3), memo];
      let tmp9 = icon(iconColor[12])(text);
      let tmp8Result = !tmp9;
      if (!tmp9) {
        let obj4 = {
          variant: "text-md/normal",
          color: "text-strong",
          lineClamp: token,
          style: tmp.text,
          children: text,
        };
        tmp8Result = closure_6(str(iconColor[13]).Text, obj4);
      }
      items3[2] = tmp8Result;
      obj2.children = items3;
      return closure_7(closure_5, obj2);
    };
