// === Module 16932: WebhookEmpty ===

// Module 16932 (WebhookEmpty)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  const obj = {
    dark() {
      return require("module_16933");
    },
    darker() {
      return require("module_16934");
    },
    light() {
      return require("module_16935");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = {
    dark() {
      return require("module_16933");
    },
    darker() {
      return require("module_16934");
    },
    light() {
      return require("module_16935");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = {
    dark() {
      return require("module_16933");
    },
    darker() {
      return require("module_16934");
    },
    light() {
      return require("module_16935");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};