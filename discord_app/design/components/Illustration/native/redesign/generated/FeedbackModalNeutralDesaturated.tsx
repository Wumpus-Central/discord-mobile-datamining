// discord_app/design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export const getFeedbackModalNeutralDesaturatedSource = function getFeedbackModalNeutralDesaturatedSource(theme) {
  let obj = getIllustrationSource /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11013);
    },
    darker() {
      return callback(11014);
    },
    light() {
      return callback(11015);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  let obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11013);
    },
    darker() {
      return callback(11014);
    },
    light() {
      return callback(11015);
    }
  };
  return getIllustrationSource /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  let obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11013);
    },
    darker() {
      return callback(11014);
    },
    light() {
      return callback(11015);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};