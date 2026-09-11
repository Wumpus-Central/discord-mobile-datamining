// === Module 12697: NoMutualServers ===

// Module 12697 (NoMutualServers)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  const obj = {
    dark() {
      return require("module_12698");
    },
    darker() {
      return require("module_12699");
    },
    light() {
      return require("module_12700");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  const obj = {
    dark() {
      return require("module_12698");
    },
    darker() {
      return require("module_12699");
    },
    light() {
      return require("module_12700");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = {
    dark() {
      return require("module_12698");
    },
    darker() {
      return require("module_12699");
    },
    light() {
      return require("module_12700");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};