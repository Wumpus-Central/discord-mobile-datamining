// === Module 20041: EmptyServerSettingsAuditLog ===

// Module 20041 (EmptyServerSettingsAuditLog)
import shared from "shared" /* 5150 */;
import FastImageDefault from "FastImage" /* 5854 */;
import _mod8952 from "module_8952" /* 8952 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export function getEmptyServerSettingsAuditLogSource(theme) {
  return _mod8952.getIllustrationSource(theme, {
    dark() {
      return require("module_20042");
    },
    darker() {
      return require("module_20043");
    },
    light() {
      return require("module_20044");
    }
  });
}
export function useEmptyServerSettingsAuditLogSource() {
  const obj = shared;
  return _mod8952.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20042");
    },
    darker() {
      return require("module_20043");
    },
    light() {
      return require("module_20044");
    }
  });
}
export function EmptyServerSettingsAuditLog(arg0) {
  const obj = shared;
  const illustrationSource = _mod8952.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20042");
    },
    darker() {
      return require("module_20043");
    },
    light() {
      return require("module_20044");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20042");
    },
    darker() {
      return require("module_20043");
    },
    light() {
      return require("module_20044");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}