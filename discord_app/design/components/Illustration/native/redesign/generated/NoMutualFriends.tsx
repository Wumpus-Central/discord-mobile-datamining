// === Module 14151: NoMutualFriends ===

// Module 14151 (NoMutualFriends)
import shared from "shared" /* 5317 */;
import FastImageDefault from "FastImage" /* 6014 */;
import _mod8194 from "module_8194" /* 8194 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export function getNoMutualFriendsSource(theme) {
  return _mod8194.getIllustrationSource(theme, {
    dark() {
      return require("module_14152");
    },
    darker() {
      return require("module_14153");
    },
    light() {
      return require("module_14154");
    }
  });
}
export function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14152");
    },
    darker() {
      return require("module_14153");
    },
    light() {
      return require("module_14154");
    }
  });
}
export function NoMutualFriends(arg0) {
  const obj = shared;
  const illustrationSource = _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14152");
    },
    darker() {
      return require("module_14153");
    },
    light() {
      return require("module_14154");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_14152");
    },
    darker() {
      return require("module_14153");
    },
    light() {
      return require("module_14154");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}