// === Module 1029: feedbackSyncIntegration ===

// Module 1029 (feedbackSyncIntegration)
import mergeOptions from "mergeOptions" /* 1026 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackSyncIntegration = mergeOptions.buildFeedbackIntegration({
  getModalIntegration() {
    return mergeOptions.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return mergeOptions.feedbackScreenshotIntegration;
  }
});