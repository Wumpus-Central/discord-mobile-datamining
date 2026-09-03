// discord_app/design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import AccessibilityAnnouncer from "../../../../../shared.tsx";
import getIllustrationSource from "../../index.tsx";
import { Image } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx",
);

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(11456);
    },
    darker() {
      return callback(11457);
    },
    light() {
      return callback(11458);
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11456);
    },
    darker() {
      return callback(11457);
    },
    light() {
      return callback(11458);
    },
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11456);
    },
    darker() {
      return callback(11457);
    },
    light() {
      return callback(11458);
    },
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
