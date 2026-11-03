// === Module 19992: ChannelSetup ===

// Module 19992 (ChannelSetup)
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5837 */;
import _mod8930 from "module_8930" /* 8930 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export function getChannelSetupSource(theme) {
  return _mod8930.getIllustrationSource(theme, {
    dark() {
      return require("module_19993");
    },
    darker() {
      return require("module_19994");
    },
    light() {
      return require("module_19995");
    }
  });
}
export function useChannelSetupSource() {
  const obj = shared;
  return _mod8930.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19993");
    },
    darker() {
      return require("module_19994");
    },
    light() {
      return require("module_19995");
    }
  });
}
export function ChannelSetup(arg0) {
  const obj = shared;
  const illustrationSource = _mod8930.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19993");
    },
    darker() {
      return require("module_19994");
    },
    light() {
      return require("module_19995");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19993");
    },
    darker() {
      return require("module_19994");
    },
    light() {
      return require("module_19995");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}