// === Module 16943: WebhookEmpty ===

// Module 16943 (WebhookEmpty)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  const obj = {
    dark() {
      return require("module_16944");
    },
    darker() {
      return require("module_16945");
    },
    light() {
      return require("module_16946");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = {
    dark() {
      return require("module_16944");
    },
    darker() {
      return require("module_16945");
    },
    light() {
      return require("module_16946");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = {
    dark() {
      return require("module_16944");
    },
    darker() {
      return require("module_16945");
    },
    light() {
      return require("module_16946");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};