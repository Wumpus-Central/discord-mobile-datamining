// === Module 17921: ChannelSetup ===

// Module 17921 (ChannelSetup)
import shared from "shared" /* 4491 */;
import _mod8380 from "module_8380" /* 8380 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod8380.getIllustrationSource(theme, {
    dark() {
      return require("module_17922");
    },
    darker() {
      return require("module_17923");
    },
    light() {
      return require("module_17924");
    }
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17922");
    },
    darker() {
      return require("module_17923");
    },
    light() {
      return require("module_17924");
    }
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17922");
    },
    darker() {
      return require("module_17923");
    },
    light() {
      return require("module_17924");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};