// === Module 20465: ChannelSetup ===

// Module 20465 (ChannelSetup)
import shared from "shared" /* 5250 */;
import FastImageDefault from "FastImage" /* 5957 */;
import _mod8117 from "module_8117" /* 8117 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export function getChannelSetupSource(theme) {
  return _mod8117.getIllustrationSource(theme, {
    dark() {
      return require("module_20466");
    },
    darker() {
      return require("module_20467");
    },
    light() {
      return require("module_20468");
    }
  });
}
export function useChannelSetupSource() {
  const obj = shared;
  return _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20466");
    },
    darker() {
      return require("module_20467");
    },
    light() {
      return require("module_20468");
    }
  });
}
export function ChannelSetup(arg0) {
  const obj = shared;
  const illustrationSource = _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20466");
    },
    darker() {
      return require("module_20467");
    },
    light() {
      return require("module_20468");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20466");
    },
    darker() {
      return require("module_20467");
    },
    light() {
      return require("module_20468");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}