// discord_app/design/components/Illustration/native/redesign/generated/StreamEnded.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  let obj = require("../../index.tsx") /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10597);
    },
    darker() {
      return callback(10598);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamEndedSource = function useStreamEndedSource() {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10597);
    },
    darker() {
      return callback(10598);
    }
  };
  return require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamEnded = function StreamEnded(arg0) {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10597);
    },
    darker() {
      return callback(10598);
    }
  };
  obj = {};
  const illustrationSource = require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};