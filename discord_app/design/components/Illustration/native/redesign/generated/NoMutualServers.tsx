// === Module 12604: NoMutualServers ===

// Module 12604 (NoMutualServers)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  const obj = {
    dark() {
      return require("module_12605");
    },
    darker() {
      return require("module_12606");
    },
    light() {
      return require("module_12607");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  const obj = {
    dark() {
      return require("module_12605");
    },
    darker() {
      return require("module_12606");
    },
    light() {
      return require("module_12607");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = {
    dark() {
      return require("module_12605");
    },
    darker() {
      return require("module_12606");
    },
    light() {
      return require("module_12607");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};