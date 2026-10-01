// === Module 12316: NoMutualServers ===

// Module 12316 (NoMutualServers)
import shared from "shared" /* 4714 */;
import _mod7861 from "module_7861" /* 7861 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  return _mod7861.getIllustrationSource(theme, {
    dark() {
      return require("module_12317");
    },
    darker() {
      return require("module_12318");
    },
    light() {
      return require("module_12319");
    }
  });
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  const obj = shared;
  return _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12317");
    },
    darker() {
      return require("module_12318");
    },
    light() {
      return require("module_12319");
    }
  });
};
export const NoMutualServers = function NoMutualServers(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12317");
    },
    darker() {
      return require("module_12318");
    },
    light() {
      return require("module_12319");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};