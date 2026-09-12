// === Module 13706: GuildSubscriptionRemoval ===

// Module 13706 (GuildSubscriptionRemoval)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  const obj = {
    dark() {
      return require("module_13707");
    },
    darker() {
      return require("module_13708");
    },
    light() {
      return require("module_13709");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  const obj = {
    dark() {
      return require("module_13707");
    },
    darker() {
      return require("module_13708");
    },
    light() {
      return require("module_13709");
    }
  };
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  let obj = {
    dark() {
      return require("module_13707");
    },
    darker() {
      return require("module_13708");
    },
    light() {
      return require("module_13709");
    }
  };
  obj = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};