// === Module 19123: WebhookEmpty ===

// Module 19123 (WebhookEmpty)
import shared from "shared" /* 5019 */;
import FastImageDefault from "FastImage" /* 5699 */;
import _mod8524 from "module_8524" /* 8524 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export function getWebhookEmptySource(theme) {
  return _mod8524.getIllustrationSource(theme, {
    dark() {
      return require("module_19124");
    },
    darker() {
      return require("module_19125");
    },
    light() {
      return require("module_19126");
    }
  });
}
export function useWebhookEmptySource() {
  const obj = shared;
  return _mod8524.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19124");
    },
    darker() {
      return require("module_19125");
    },
    light() {
      return require("module_19126");
    }
  });
}
export function WebhookEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8524.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19124");
    },
    darker() {
      return require("module_19125");
    },
    light() {
      return require("module_19126");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19124");
    },
    darker() {
      return require("module_19125");
    },
    light() {
      return require("module_19126");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}