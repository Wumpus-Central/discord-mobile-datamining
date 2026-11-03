// === Module 19875: EmptyServerSettingsAuditLog ===

// Module 19875 (EmptyServerSettingsAuditLog)
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5837 */;
import _mod8930 from "module_8930" /* 8930 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export function getEmptyServerSettingsAuditLogSource(theme) {
  return _mod8930.getIllustrationSource(theme, {
    dark() {
      return require("module_19876");
    },
    darker() {
      return require("module_19877");
    },
    light() {
      return require("module_19878");
    }
  });
}
export function useEmptyServerSettingsAuditLogSource() {
  const obj = shared;
  return _mod8930.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19876");
    },
    darker() {
      return require("module_19877");
    },
    light() {
      return require("module_19878");
    }
  });
}
export function EmptyServerSettingsAuditLog(arg0) {
  const obj = shared;
  const illustrationSource = _mod8930.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19876");
    },
    darker() {
      return require("module_19877");
    },
    light() {
      return require("module_19878");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19876");
    },
    darker() {
      return require("module_19877");
    },
    light() {
      return require("module_19878");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}