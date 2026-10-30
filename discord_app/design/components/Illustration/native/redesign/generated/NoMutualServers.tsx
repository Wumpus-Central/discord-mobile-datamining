// === Module 14132: NoMutualServers ===

// Module 14132 (NoMutualServers)
import shared from "shared" /* 5016 */;
import FastImageDefault from "FastImage" /* 5712 */;
import _mod8798 from "module_8798" /* 8798 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export function getNoMutualServersSource(theme) {
  return _mod8798.getIllustrationSource(theme, {
    dark() {
      return require("module_14133");
    },
    darker() {
      return require("module_14134");
    },
    light() {
      return require("module_14135");
    }
  });
}
export function useNoMutualServersSource() {
  const obj = shared;
  return _mod8798.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14133");
    },
    darker() {
      return require("module_14134");
    },
    light() {
      return require("module_14135");
    }
  });
}
export function NoMutualServers(arg0) {
  const obj = shared;
  const illustrationSource = _mod8798.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14133");
    },
    darker() {
      return require("module_14134");
    },
    light() {
      return require("module_14135");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_14133");
    },
    darker() {
      return require("module_14134");
    },
    light() {
      return require("module_14135");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}