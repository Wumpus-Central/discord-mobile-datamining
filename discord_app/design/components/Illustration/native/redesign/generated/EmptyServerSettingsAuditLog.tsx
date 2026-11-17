// === Module 20553: EmptyServerSettingsAuditLog ===

// Module 20553 (EmptyServerSettingsAuditLog)
import shared from "shared" /* 5317 */;
import FastImageDefault from "FastImage" /* 6014 */;
import _mod8194 from "module_8194" /* 8194 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export function getEmptyServerSettingsAuditLogSource(theme) {
  return _mod8194.getIllustrationSource(theme, {
    dark() {
      return require("module_20554");
    },
    darker() {
      return require("module_20555");
    },
    light() {
      return require("module_20556");
    }
  });
}
export function useEmptyServerSettingsAuditLogSource() {
  const obj = shared;
  return _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20554");
    },
    darker() {
      return require("module_20555");
    },
    light() {
      return require("module_20556");
    }
  });
}
export function EmptyServerSettingsAuditLog(arg0) {
  const obj = shared;
  const illustrationSource = _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20554");
    },
    darker() {
      return require("module_20555");
    },
    light() {
      return require("module_20556");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20554");
    },
    darker() {
      return require("module_20555");
    },
    light() {
      return require("module_20556");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}