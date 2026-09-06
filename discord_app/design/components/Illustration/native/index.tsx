// === Module 8233: ? ===

// Module 8233
import native from "native" /* 4271 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Illustration/native/index.tsx");

export const getIllustrationSource = function getIllustrationSource(theme, light) {
  if ("light" === theme) {
    light = light.light;
  } else if ("darker" === theme) {
    let midnight = light.darker;
    if (midnight == null) {
      midnight = light.midnight;
    }
    light = midnight;
  } else if ("midnight" === theme) {
    let darker = light.midnight;
    if (darker == null) {
      darker = light.darker;
    }
    light = darker;
  }
  if (null != light) {
    let lightResult = light();
  } else {
    lightResult = light.dark();
  }
  return lightResult;
};
export const useIllustrationSource = function useIllustrationSource(fn) {
  return fn(native.useThemeContext().theme);
};