// === Module 13407: NoMutualFriends ===

// Module 13407 (NoMutualFriends)
import shared from "shared" /* 4801 */;
import FastImageDefault from "FastImage" /* 5481 */;
import _mod7666 from "module_7666" /* 7666 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export function getNoMutualFriendsSource(theme) {
  return _mod7666.getIllustrationSource(theme, {
    dark() {
      return require("module_13408");
    },
    darker() {
      return require("module_13409");
    },
    light() {
      return require("module_13410");
    }
  });
}
export function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13408");
    },
    darker() {
      return require("module_13409");
    },
    light() {
      return require("module_13410");
    }
  });
}
export function NoMutualFriends(arg0) {
  const obj = shared;
  const illustrationSource = _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13408");
    },
    darker() {
      return require("module_13409");
    },
    light() {
      return require("module_13410");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_13408");
    },
    darker() {
      return require("module_13409");
    },
    light() {
      return require("module_13410");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}