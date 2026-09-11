// === Module 17755: ChannelSetup ===

// Module 17755 (ChannelSetup)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  const obj = {
    dark() {
      return require("module_17756");
    },
    darker() {
      return require("module_17757");
    },
    light() {
      return require("module_17758");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = {
    dark() {
      return require("module_17756");
    },
    darker() {
      return require("module_17757");
    },
    light() {
      return require("module_17758");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = {
    dark() {
      return require("module_17756");
    },
    darker() {
      return require("module_17757");
    },
    light() {
      return require("module_17758");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};