// discord_app/design/components/Illustration/native/redesign/generated/ChannelSetup.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16611);
    },
    darker() {
      return callback(16612);
    },
    light() {
      return callback(16613);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16611);
    },
    darker() {
      return callback(16612);
    },
    light() {
      return callback(16613);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16611);
    },
    darker() {
      return callback(16612);
    },
    light() {
      return callback(16613);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};