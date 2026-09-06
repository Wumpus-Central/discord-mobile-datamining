// === Module 17669: ChannelSetup ===

// Module 17669 (ChannelSetup)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  const obj = {
    dark() {
      return require("module_17670");
    },
    darker() {
      return require("module_17671");
    },
    light() {
      return require("module_17672");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = {
    dark() {
      return require("module_17670");
    },
    darker() {
      return require("module_17671");
    },
    light() {
      return require("module_17672");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = {
    dark() {
      return require("module_17670");
    },
    darker() {
      return require("module_17671");
    },
    light() {
      return require("module_17672");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};