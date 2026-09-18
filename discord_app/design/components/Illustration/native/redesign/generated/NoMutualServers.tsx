// === Module 12846: NoMutualServers ===

// Module 12846 (NoMutualServers)
import shared from "shared" /* 4573 */;
import _mod8463 from "module_8463" /* 8463 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  return _mod8463.getIllustrationSource(theme, {
    dark() {
      return require("module_12847");
    },
    darker() {
      return require("module_12848");
    },
    light() {
      return require("module_12849");
    }
  });
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  const obj = shared;
  return _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12847");
    },
    darker() {
      return require("module_12848");
    },
    light() {
      return require("module_12849");
    }
  });
};
export const NoMutualServers = function NoMutualServers(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12847");
    },
    darker() {
      return require("module_12848");
    },
    light() {
      return require("module_12849");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};