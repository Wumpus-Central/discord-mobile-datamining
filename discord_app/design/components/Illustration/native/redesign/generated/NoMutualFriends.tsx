// === Module 13455: NoMutualFriends ===

// Module 13455 (NoMutualFriends)
import shared from "shared" /* 4830 */;
import FastImageDefault from "FastImage" /* 5510 */;
import _mod7697 from "module_7697" /* 7697 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export function getNoMutualFriendsSource(theme) {
  return _mod7697.getIllustrationSource(theme, {
    dark() {
      return require("module_13456");
    },
    darker() {
      return require("module_13457");
    },
    light() {
      return require("module_13458");
    }
  });
}
export function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13456");
    },
    darker() {
      return require("module_13457");
    },
    light() {
      return require("module_13458");
    }
  });
}
export function NoMutualFriends(arg0) {
  const obj = shared;
  const illustrationSource = _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13456");
    },
    darker() {
      return require("module_13457");
    },
    light() {
      return require("module_13458");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_13456");
    },
    darker() {
      return require("module_13457");
    },
    light() {
      return require("module_13458");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}