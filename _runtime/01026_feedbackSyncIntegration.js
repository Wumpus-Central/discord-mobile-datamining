// === Module 1026: feedbackSyncIntegration ===

// Module 1026 (feedbackSyncIntegration)
import mergeOptions from "mergeOptions" /* 1023 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackSyncIntegration = mergeOptions.buildFeedbackIntegration({
  getModalIntegration() {
    return mergeOptions.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return mergeOptions.feedbackScreenshotIntegration;
  }
});