// === Module 12703: NoMutualFriends ===

// Module 12703 (NoMutualFriends)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  const obj = {
    dark() {
      return require("module_12704");
    },
    darker() {
      return require("module_12705");
    },
    light() {
      return require("module_12706");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  const obj = {
    dark() {
      return require("module_12704");
    },
    darker() {
      return require("module_12705");
    },
    light() {
      return require("module_12706");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  let obj = {
    dark() {
      return require("module_12704");
    },
    darker() {
      return require("module_12705");
    },
    light() {
      return require("module_12706");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};