// === Module 20670: ChannelSetup ===

// Module 20670 (ChannelSetup)
import shared from "shared" /* 5317 */;
import FastImageDefault from "FastImage" /* 6014 */;
import _mod8194 from "module_8194" /* 8194 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export function getChannelSetupSource(theme) {
  return _mod8194.getIllustrationSource(theme, {
    dark() {
      return require("module_20671");
    },
    darker() {
      return require("module_20672");
    },
    light() {
      return require("module_20673");
    }
  });
}
export function useChannelSetupSource() {
  const obj = shared;
  return _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20671");
    },
    darker() {
      return require("module_20672");
    },
    light() {
      return require("module_20673");
    }
  });
}
export function ChannelSetup(arg0) {
  const obj = shared;
  const illustrationSource = _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20671");
    },
    darker() {
      return require("module_20672");
    },
    light() {
      return require("module_20673");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20671");
    },
    darker() {
      return require("module_20672");
    },
    light() {
      return require("module_20673");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}