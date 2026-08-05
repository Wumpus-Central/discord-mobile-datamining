// _runtime/01029_feedbackSyncIntegration.js
import mergeOptions from "mergeOptions";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackSyncIntegration = mergeOptions.buildFeedbackIntegration({
  getModalIntegration() {
    return require("01026_mergeOptions.js") /* mergeOptions */.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return require("01026_mergeOptions.js") /* mergeOptions */.feedbackScreenshotIntegration;
  }
});