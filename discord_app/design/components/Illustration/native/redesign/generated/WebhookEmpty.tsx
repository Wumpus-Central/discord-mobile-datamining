// === Module 19291: WebhookEmpty ===

// Module 19291 (WebhookEmpty)
import shared from "shared" /* 5147 */;
import FastImageDefault from "FastImage" /* 5842 */;
import _mod8880 from "module_8880" /* 8880 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export function getWebhookEmptySource(theme) {
  return _mod8880.getIllustrationSource(theme, {
    dark() {
      return require("module_19292");
    },
    darker() {
      return require("module_19293");
    },
    light() {
      return require("module_19294");
    }
  });
}
export function useWebhookEmptySource() {
  const obj = shared;
  return _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19292");
    },
    darker() {
      return require("module_19293");
    },
    light() {
      return require("module_19294");
    }
  });
}
export function WebhookEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19292");
    },
    darker() {
      return require("module_19293");
    },
    light() {
      return require("module_19294");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19292");
    },
    darker() {
      return require("module_19293");
    },
    light() {
      return require("module_19294");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}