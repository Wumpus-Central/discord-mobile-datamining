// discord_app/design/components/Illustration/native/redesign/generated/ChannelSetup.tsx
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7907 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16891);
    },
    darker() {
      return callback(16892);
    },
    light() {
      return callback(16893);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16891);
    },
    darker() {
      return callback(16892);
    },
    light() {
      return callback(16893);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16891);
    },
    darker() {
      return callback(16892);
    },
    light() {
      return callback(16893);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};