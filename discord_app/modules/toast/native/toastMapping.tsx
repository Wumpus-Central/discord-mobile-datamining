// discord_app/modules/toast/native/toastMapping.tsx
import toastIconSubstitutions from "toastIconSubstitutions.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/toast/native/toastMapping.tsx");

export const toManaToast = function toManaToast(key) {
  let IconComponent;
  let content;
  let icon;
  let iconColor;
  ({ content, icon, IconComponent, iconColor } = key);
  if (typeof content !== "string") {
    return null;
  } else if (null != tmp3) {
    return null;
  } else if (true === tmp4) {
    return null;
  } else {
    const obj2 = { surface: "app", position: tmp, duration: tmp2 };
    if (null != IconComponent) {
      let obj4;
      const TOAST_STATUS_ICONS = toastIconSubstitutions.TOAST_STATUS_ICONS;
      const value = TOAST_STATUS_ICONS.get(IconComponent);
      if (null != value) {
        const obj3 = { text: content, variant: value };
        const merged = Object.assign(obj2);
        obj4 = obj3;
      } else {
        obj4 = { text: content, variant: "default", icon: IconComponent, iconColor };
        const merged1 = Object.assign(obj2);
      }
      return obj4;
    } else if (null == icon) {
      const obj5 = { text: content, variant: "default" };
      const merged2 = Object.assign(obj2);
      return obj5;
    } else {
      const TOAST_PNG_SUBSTITUTIONS = toastIconSubstitutions.TOAST_PNG_SUBSTITUTIONS;
      const value2 = TOAST_PNG_SUBSTITUTIONS.get(icon);
      let tmp10 = null;
      if (null != value2) {
        let tmp9;
        const obj = { text: content };
        const tmp5 = "variant" in value2;
        const merged3 = Object.assign(obj2);
        if (tmp5) {
          obj.variant = value2.variant;
          tmp9 = obj;
        } else {
          obj.variant = "default";
          obj.icon = value2.icon;
          obj.iconColor = iconColor;
          tmp9 = obj;
        }
        tmp10 = tmp9;
      }
      return tmp10;
    }
  }
};
