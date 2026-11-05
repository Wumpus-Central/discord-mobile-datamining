// === Module 14420: NoMutualFriends ===

// Module 14420 (NoMutualFriends)
import shared from "shared" /* 5150 */;
import FastImageDefault from "FastImage" /* 5854 */;
import _mod8952 from "module_8952" /* 8952 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export function getNoMutualFriendsSource(theme) {
  return _mod8952.getIllustrationSource(theme, {
    dark() {
      return require("module_14421");
    },
    darker() {
      return require("module_14422");
    },
    light() {
      return require("module_14423");
    }
  });
}
export function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod8952.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14421");
    },
    darker() {
      return require("module_14422");
    },
    light() {
      return require("module_14423");
    }
  });
}
export function NoMutualFriends(arg0) {
  const obj = shared;
  const illustrationSource = _mod8952.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14421");
    },
    darker() {
      return require("module_14422");
    },
    light() {
      return require("module_14423");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_14421");
    },
    darker() {
      return require("module_14422");
    },
    light() {
      return require("module_14423");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}