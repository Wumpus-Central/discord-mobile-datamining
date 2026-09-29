// === Module 17663: ChannelSetup ===

// Module 17663 (ChannelSetup)
import shared from "shared" /* 4685 */;
import _mod7844 from "module_7844" /* 7844 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod7844.getIllustrationSource(theme, {
    dark() {
      return require("module_17664");
    },
    darker() {
      return require("module_17665");
    },
    light() {
      return require("module_17666");
    }
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17664");
    },
    darker() {
      return require("module_17665");
    },
    light() {
      return require("module_17666");
    }
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17664");
    },
    darker() {
      return require("module_17665");
    },
    light() {
      return require("module_17666");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};