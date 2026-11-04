// === Module 20108: ChannelSetup ===

// Module 20108 (ChannelSetup)
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5851 */;
import _mod8947 from "module_8947" /* 8947 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export function getChannelSetupSource(theme) {
  return _mod8947.getIllustrationSource(theme, {
    dark() {
      return require("module_20109");
    },
    darker() {
      return require("module_20110");
    },
    light() {
      return require("module_20111");
    }
  });
}
export function useChannelSetupSource() {
  const obj = shared;
  return _mod8947.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20109");
    },
    darker() {
      return require("module_20110");
    },
    light() {
      return require("module_20111");
    }
  });
}
export function ChannelSetup(arg0) {
  const obj = shared;
  const illustrationSource = _mod8947.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20109");
    },
    darker() {
      return require("module_20110");
    },
    light() {
      return require("module_20111");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20109");
    },
    darker() {
      return require("module_20110");
    },
    light() {
      return require("module_20111");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}