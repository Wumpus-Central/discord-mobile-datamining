// === Module 891: feedbackSyncIntegration ===

// Module 891 (feedbackSyncIntegration)
import mergeOptions from "mergeOptions" /* 888 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackSyncIntegration = mergeOptions.buildFeedbackIntegration({
  getModalIntegration() {
    return mergeOptions.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return mergeOptions.feedbackScreenshotIntegration;
  }
});