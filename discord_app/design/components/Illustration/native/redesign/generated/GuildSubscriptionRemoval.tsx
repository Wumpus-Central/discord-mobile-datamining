// === Module 13672: GuildSubscriptionRemoval ===

// Module 13672 (GuildSubscriptionRemoval)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  const obj = {
    dark() {
      return require("module_13673");
    },
    darker() {
      return require("module_13674");
    },
    light() {
      return require("module_13675");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  const obj = {
    dark() {
      return require("module_13673");
    },
    darker() {
      return require("module_13674");
    },
    light() {
      return require("module_13675");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  let obj = {
    dark() {
      return require("module_13673");
    },
    darker() {
      return require("module_13674");
    },
    light() {
      return require("module_13675");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};