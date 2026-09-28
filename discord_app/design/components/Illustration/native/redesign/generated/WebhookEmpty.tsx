// === Module 16668: WebhookEmpty ===

// Module 16668 (WebhookEmpty)
import shared from "shared" /* 4685 */;
import _mod7679 from "module_7679" /* 7679 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod7679.getIllustrationSource(theme, {
    dark() {
      return require("module_16669");
    },
    darker() {
      return require("module_16670");
    },
    light() {
      return require("module_16671");
    }
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16669");
    },
    darker() {
      return require("module_16670");
    },
    light() {
      return require("module_16671");
    }
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16669");
    },
    darker() {
      return require("module_16670");
    },
    light() {
      return require("module_16671");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};