// === Module 17764: ChannelSetup ===

// Module 17764 (ChannelSetup)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  const obj = {
    dark() {
      return require("module_17765");
    },
    darker() {
      return require("module_17766");
    },
    light() {
      return require("module_17767");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = {
    dark() {
      return require("module_17765");
    },
    darker() {
      return require("module_17766");
    },
    light() {
      return require("module_17767");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = {
    dark() {
      return require("module_17765");
    },
    darker() {
      return require("module_17766");
    },
    light() {
      return require("module_17767");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};