// === Module 12863: NoMutualFriends ===

// Module 12863 (NoMutualFriends)
import shared from "shared" /* 4607 */;
import _mod8502 from "module_8502" /* 8502 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  return _mod8502.getIllustrationSource(theme, {
    dark() {
      return require("module_12864");
    },
    darker() {
      return require("module_12865");
    },
    light() {
      return require("module_12866");
    }
  });
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12864");
    },
    darker() {
      return require("module_12865");
    },
    light() {
      return require("module_12866");
    }
  });
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12864");
    },
    darker() {
      return require("module_12865");
    },
    light() {
      return require("module_12866");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};