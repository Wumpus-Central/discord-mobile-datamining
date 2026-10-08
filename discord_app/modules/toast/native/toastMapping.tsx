// === Module 4773: toastMapping ===

// Module 4773 (toastMapping)
import toastIconSubstitutions from "toastIconSubstitutions" /* 4774 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/toast/native/toastMapping.tsx");

export const toManaToast = function toManaToast(key) {
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
      const TOAST_STATUS_ICONS = toastIconSubstitutions.TOAST_STATUS_ICONS;
      value = TOAST_STATUS_ICONS.get(IconComponent);
      if (null != value) {
        const obj3 = {};
        const merged = Object.assign(obj2);
        obj3.text = content;
        obj3.variant = value;
        let obj4 = obj3;
      } else {
        obj4 = {};
        const merged1 = Object.assign(obj2);
        obj4.text = content;
        obj4.variant = "default";
        obj4.icon = IconComponent;
        obj4.iconColor = iconColor;
      }
      return obj4;
    } else if (null == icon) {
      const obj5 = {};
      const merged2 = Object.assign(obj2);
      obj5.text = content;
      obj5.variant = "default";
      return obj5;
    } else {
      const TOAST_PNG_SUBSTITUTIONS = toastIconSubstitutions.TOAST_PNG_SUBSTITUTIONS;
      let variant = TOAST_PNG_SUBSTITUTIONS.get(icon);
      if (null == variant) {
        return null;
      } else {
        const obj = {};
        const merged3 = Object.assign(obj2);
        obj.text = content;
        if (tmp5) {
          variant = variant.variant;
          obj.variant = variant;
        } else {
          obj.variant = "default";
          obj.icon = variant.icon;
          obj.iconColor = iconColor;
        }
        tmp5 = "variant" in variant;
      }
    }
  }
};