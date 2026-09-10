// === Module 12674: NoMutualServers ===

// Module 12674 (NoMutualServers)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  const obj = {
    dark() {
      return require("module_12675");
    },
    darker() {
      return require("module_12676");
    },
    light() {
      return require("module_12677");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  const obj = {
    dark() {
      return require("module_12675");
    },
    darker() {
      return require("module_12676");
    },
    light() {
      return require("module_12677");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = {
    dark() {
      return require("module_12675");
    },
    darker() {
      return require("module_12676");
    },
    light() {
      return require("module_12677");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};