// discord_app/modules/user_profile/hooks/native/useOpenThemeColorPickerActionSheet.tsx
import showCustomColorPickerActionSheetDefault from "../../../color_picker/native/showCustomColorPickerActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useOpenThemeColorPickerActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useOpenThemeColorPickerActionSheet(primaryColor) {
      const cResult = primaryColor(avatarColors[2]).c(13);
      primaryColor = primaryColor.primaryColor;
      const secondaryColor = primaryColor.secondaryColor;
      avatarColors = primaryColor.avatarColors;
      const onChangeColors = primaryColor.onChangeColors;
      if (cResult[0] === avatarColors) {
        if (cResult[1] === onChangeColors) {
          if (cResult[2] === primaryColor) {
            if (cResult[3] === secondaryColor) {
              let tmp2 = cResult[4];
            }
            if (cResult[5] === avatarColors) {
              if (cResult[6] === onChangeColors) {
                if (cResult[7] === primaryColor) {
                  if (cResult[8] === secondaryColor) {
                    let tmp3 = cResult[9];
                  }
                  if (cResult[10] === tmp2) {
                    if (cResult[11] === tmp3) {
                      let tmp4 = cResult[12];
                    }
                    return tmp4;
                  }
                  class C {
                    constructor() {
                      tmp = null != primaryColor;
                      if (tmp) {
                        tmp2 = secondaryColor;
                        tmp = null != secondaryColor;
                      }
                      if (tmp) {
                        tmp3 = closure_1;
                        tmp4 = closure_2;
                        obj = { color: null, suggestedColors: null, onSelect: null };
                        tmp5 = secondaryColor;
                        obj.color = secondaryColor;
                        tmp6 = avatarColors;
                        obj.suggestedColors = avatarColors;
                        obj.onSelect = function onSelect(arg0) {
                          if (arg0 !== secondaryColor) {
                            const items = [primaryColor, arg0];
                            onChangeColors(items);
                          }
                        };
                        tmp7 = closure_1(closure_2[3])(obj);
                      }
                      return;
                    }
                  }
                  tmp5[0] = tmp2;
                  tmp5[1] = tmp3;
                  cResult[10] = tmp2;
                  cResult[11] = tmp3;
                  cResult[12] = tmp5;
                  tmp4 = tmp5;
                }
              }
            }
            class C {
              constructor() {
                tmp = null != primaryColor;
                if (tmp) {
                  tmp2 = secondaryColor;
                  tmp = null != secondaryColor;
                }
                if (tmp) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = { color: null, suggestedColors: null, onSelect: null };
                  tmp5 = secondaryColor;
                  obj.color = secondaryColor;
                  tmp6 = avatarColors;
                  obj.suggestedColors = avatarColors;
                  obj.onSelect = function onSelect(arg0) {
                    if (arg0 !== secondaryColor) {
                      const items = [primaryColor, arg0];
                      onChangeColors(items);
                    }
                  };
                  tmp7 = closure_1(closure_2[3])(obj);
                }
                return;
              }
            }
            cResult[5] = avatarColors;
            cResult[6] = onChangeColors;
            cResult[7] = primaryColor;
            cResult[8] = secondaryColor;
            cResult[9] = C;
            tmp3 = C;
          }
        }
      }
      const fn = function l() {
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
            },
          };
          showCustomColorPickerActionSheetDefault(obj);
        }
      };
      cResult[0] = avatarColors;
      cResult[1] = onChangeColors;
      cResult[2] = primaryColor;
      cResult[3] = secondaryColor;
      cResult[4] = fn;
      tmp2 = fn;
    }
  : function useOpenThemeColorPickerActionSheet(primaryColor) {
      primaryColor = primaryColor.primaryColor;
      const secondaryColor = primaryColor.secondaryColor;
      const avatarColors = primaryColor.avatarColors;
      const onChangeColors = primaryColor.onChangeColors;
      let obj = { openPrimaryColorPicker: null, openSecondaryColorPicker: null };
      let items = [avatarColors, onChangeColors, primaryColor, secondaryColor];
      obj.openPrimaryColorPicker = onChangeColors.useCallback(() => {
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
            },
          };
          showCustomColorPickerActionSheetDefault(obj);
        }
      }, items);
      const items1 = [avatarColors, onChangeColors, primaryColor, secondaryColor];
      obj.openSecondaryColorPicker = onChangeColors.useCallback(() => {
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
            },
          };
          showCustomColorPickerActionSheetDefault(obj);
        }
      }, items1);
      return obj;
    };
