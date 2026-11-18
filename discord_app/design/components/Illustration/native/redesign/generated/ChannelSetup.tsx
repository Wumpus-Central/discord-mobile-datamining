// === Module 19943: ChannelSetup ===

// Module 19943 (ChannelSetup)
import shared from "shared" /* 4830 */;
import FastImageDefault from "FastImage" /* 5510 */;
import _mod7697 from "module_7697" /* 7697 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export function getChannelSetupSource(theme) {
  return _mod7697.getIllustrationSource(theme, {
    dark() {
      return require("module_19944");
    },
    darker() {
      return require("module_19945");
    },
    light() {
      return require("module_19946");
    }
  });
}
export function useChannelSetupSource() {
  const obj = shared;
  return _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19944");
    },
    darker() {
      return require("module_19945");
    },
    light() {
      return require("module_19946");
    }
  });
}
export function ChannelSetup(arg0) {
  const obj = shared;
  const illustrationSource = _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19944");
    },
    darker() {
      return require("module_19945");
    },
    light() {
      return require("module_19946");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19944");
    },
    darker() {
      return require("module_19945");
    },
    light() {
      return require("module_19946");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}