// === Module 13329: GuildSubscriptionRemoval ===

// Module 13329 (GuildSubscriptionRemoval)
import shared from "shared" /* 4685 */;
import _mod7844 from "module_7844" /* 7844 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  return _mod7844.getIllustrationSource(theme, {
    dark() {
      return require("module_13330");
    },
    darker() {
      return require("module_13331");
    },
    light() {
      return require("module_13332");
    }
  });
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  const obj = shared;
  return _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13330");
    },
    darker() {
      return require("module_13331");
    },
    light() {
      return require("module_13332");
    }
  });
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13330");
    },
    darker() {
      return require("module_13331");
    },
    light() {
      return require("module_13332");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};