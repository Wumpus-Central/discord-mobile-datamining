// discord_app/modules/toast/native/toastMapping.tsx
import toastIconSubstitutions from "toastIconSubstitutions.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/toast/native/toastMapping.tsx");

export const toManaToast = function toManaToast(position) {
  ({ content, icon, IconComponent, iconColor } = position);
  const obj = { surface: "app", position: position.position, duration: position.toastDurationMs };
  if (null != IconComponent) {
    const TOAST_STATUS_ICONS = toastIconSubstitutions.TOAST_STATUS_ICONS;
    value = TOAST_STATUS_ICONS.get(IconComponent);
    if (null != value) {
      const obj2 = {};
      const merged = Object.assign(obj);
      obj2.text = content;
      obj2.variant = value;
      let obj3 = obj2;
    } else {
      obj3 = {};
      const merged1 = Object.assign(obj);
      obj3.text = content;
      obj3.variant = "default";
      obj3.icon = IconComponent;
      obj3.iconColor = iconColor;
    }
    return obj3;
  } else {
    value2 = undefined;
    if (null != icon) {
      const TOAST_PNG_SUBSTITUTIONS = toastIconSubstitutions.TOAST_PNG_SUBSTITUTIONS;
      value2 = TOAST_PNG_SUBSTITUTIONS.get(icon);
    }
    if (null == value2) {
      const obj4 = {};
      const merged2 = Object.assign(obj);
      obj4.text = content;
      obj4.variant = "default";
      let tmp8 = obj4;
    } else {
      const obj5 = {};
      const merged3 = Object.assign(obj);
      obj5.text = content;
      if (tmp4) {
        obj5.variant = value2.variant;
        tmp8 = obj5;
      } else {
        obj5.variant = "default";
        obj5.icon = value2.icon;
        obj5.iconColor = iconColor;
        tmp8 = obj5;
      }
      tmp4 = "variant" in value2;
    }
    return tmp8;
  }
};
