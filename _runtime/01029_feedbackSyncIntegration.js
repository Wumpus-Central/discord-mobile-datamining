// _runtime/01029_feedbackSyncIntegration.js
import mergeOptions from "mergeOptions";
import { mergeOptions } from "01026_mergeOptions.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackSyncIntegration = mergeOptions.buildFeedbackIntegration({
  getModalIntegration() {
    return mergeOptions /* mergeOptions */.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return mergeOptions /* mergeOptions */.feedbackScreenshotIntegration;
  }
});