// discord_app/design/components/Illustration/native/redesign/generated/TopPattern.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = getIllustrationSource /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12696);
    },
    darker() {
      return callback(12697);
    },
    light() {
      return callback(12698);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12696);
    },
    darker() {
      return callback(12697);
    },
    light() {
      return callback(12698);
    }
  };
  return getIllustrationSource /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12696);
    },
    darker() {
      return callback(12697);
    },
    light() {
      return callback(12698);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};