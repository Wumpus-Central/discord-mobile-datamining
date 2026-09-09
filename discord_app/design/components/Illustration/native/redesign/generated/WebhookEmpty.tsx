// === Module 16886: WebhookEmpty ===

// Module 16886 (WebhookEmpty)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  const obj = {
    dark() {
      return require("module_16887");
    },
    darker() {
      return require("module_16888");
    },
    light() {
      return require("module_16889");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = {
    dark() {
      return require("module_16887");
    },
    darker() {
      return require("module_16888");
    },
    light() {
      return require("module_16889");
    }
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = {
    dark() {
      return require("module_16887");
    },
    darker() {
      return require("module_16888");
    },
    light() {
      return require("module_16889");
    }
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};