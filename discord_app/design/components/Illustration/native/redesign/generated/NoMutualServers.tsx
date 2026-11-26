// === Module 13602: NoMutualServers ===

// Module 13602 (NoMutualServers)
import shared from "shared" /* 5050 */;
import FastImageDefault from "FastImage" /* 5730 */;
import _mod8566 from "module_8566" /* 8566 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export function getNoMutualServersSource(theme) {
  return _mod8566.getIllustrationSource(theme, {
    dark() {
      return require("module_13603");
    },
    darker() {
      return require("module_13604");
    },
    light() {
      return require("module_13605");
    }
  });
}
export function useNoMutualServersSource() {
  const obj = shared;
  return _mod8566.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13603");
    },
    darker() {
      return require("module_13604");
    },
    light() {
      return require("module_13605");
    }
  });
}
export function NoMutualServers(arg0) {
  const obj = shared;
  const illustrationSource = _mod8566.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13603");
    },
    darker() {
      return require("module_13604");
    },
    light() {
      return require("module_13605");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_13603");
    },
    darker() {
      return require("module_13604");
    },
    light() {
      return require("module_13605");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}