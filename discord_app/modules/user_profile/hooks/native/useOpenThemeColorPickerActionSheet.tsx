// === Module 16441: useOpenThemeColorPickerActionSheet ===

// Module 16441 (useOpenThemeColorPickerActionSheet)
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 16395 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useOpenThemeColorPickerActionSheet.tsx");

export default function useOpenThemeColorPickerActionSheet(primaryColor) {
  primaryColor = primaryColor.primaryColor;
  const secondaryColor = primaryColor.secondaryColor;
  const avatarColors = primaryColor.avatarColors;
  const onChangeColors = primaryColor.onChangeColors;
  let obj = { openPrimaryColorPicker: null, openSecondaryColorPicker: null };
  let items = [avatarColors, onChangeColors, primaryColor, secondaryColor];
  obj.openPrimaryColorPicker = avatarColors.useCallback(() => {
    let tmp2 = null != primaryColor;
    if (tmp2) {
      tmp2 = null != secondaryColor;
    }
    if (tmp2) {
      const obj = {
        color: primaryColor,
        suggestedColors: avatarColors,
        onSelect(arg0) {
            if (arg0 !== primaryColor) {
              const items = [arg0, secondaryColor];
              onChangeColors(items);
            }
          }
      };
      showCustomColorPickerActionSheetDefault(obj);
    }
  }, items);
  const items1 = [avatarColors, onChangeColors, primaryColor, secondaryColor];
  obj.openSecondaryColorPicker = avatarColors.useCallback(() => {
    let tmp = null != primaryColor;
    if (tmp) {
      tmp = null != secondaryColor;
    }
    if (tmp) {
      const obj = {
        color: secondaryColor,
        suggestedColors: avatarColors,
        onSelect(arg0) {
            if (arg0 !== secondaryColor) {
              const items = [primaryColor, arg0];
              onChangeColors(items);
            }
          }
      };
      showCustomColorPickerActionSheetDefault(obj);
    }
  }, items1);
  return obj;
};