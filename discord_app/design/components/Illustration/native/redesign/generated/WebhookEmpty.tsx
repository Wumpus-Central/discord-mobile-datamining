// === Module 17095: WebhookEmpty ===

// Module 17095 (WebhookEmpty)
import shared from "shared" /* 4491 */;
import _mod8380 from "module_8380" /* 8380 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod8380.getIllustrationSource(theme, {
    dark() {
      return require("module_17096");
    },
    darker() {
      return require("module_17097");
    },
    light() {
      return require("module_17098");
    }
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17096");
    },
    darker() {
      return require("module_17097");
    },
    light() {
      return require("module_17098");
    }
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17096");
    },
    darker() {
      return require("module_17097");
    },
    light() {
      return require("module_17098");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};