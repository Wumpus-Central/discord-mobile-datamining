// discord_app/design/components/Illustration/native/redesign/generated/StreamFailed.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  let obj = require("../../index.tsx") /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10600);
    },
    darker() {
      return callback(10601);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamFailedSource = function useStreamFailedSource() {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10600);
    },
    darker() {
      return callback(10601);
    }
  };
  return require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamFailed = function StreamFailed(arg0) {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10600);
    },
    darker() {
      return callback(10601);
    }
  };
  obj = {};
  const illustrationSource = require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};