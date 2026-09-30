// === Module 12304: NoMutualServers ===

// Module 12304 (NoMutualServers)
import shared from "shared" /* 4715 */;
import _mod7874 from "module_7874" /* 7874 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("module_12305");
    },
    darker() {
      return require("module_12306");
    },
    light() {
      return require("module_12307");
    }
  });
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12305");
    },
    darker() {
      return require("module_12306");
    },
    light() {
      return require("module_12307");
    }
  });
};
export const NoMutualServers = function NoMutualServers(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12305");
    },
    darker() {
      return require("module_12306");
    },
    light() {
      return require("module_12307");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};