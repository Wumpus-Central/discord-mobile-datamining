// === Module 13644: GuildSubscriptionRemoval ===

// Module 13644 (GuildSubscriptionRemoval)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  const obj = {
    dark() {
      return require("module_13645");
    },
    darker() {
      return require("module_13646");
    },
    light() {
      return require("module_13647");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  const obj = {
    dark() {
      return require("module_13645");
    },
    darker() {
      return require("module_13646");
    },
    light() {
      return require("module_13647");
    }
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  let obj = {
    dark() {
      return require("module_13645");
    },
    darker() {
      return require("module_13646");
    },
    light() {
      return require("module_13647");
    }
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};