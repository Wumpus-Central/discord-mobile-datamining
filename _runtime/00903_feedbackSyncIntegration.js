// === Module 903: feedbackSyncIntegration ===

// Module 903 (feedbackSyncIntegration)
import mergeOptions from "mergeOptions" /* 900 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackSyncIntegration = mergeOptions.buildFeedbackIntegration({
  getModalIntegration() {
    return mergeOptions.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return mergeOptions.feedbackScreenshotIntegration;
  }
});