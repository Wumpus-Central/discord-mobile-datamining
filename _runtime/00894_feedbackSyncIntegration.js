// === Module 894: feedbackSyncIntegration ===

// Module 894 (feedbackSyncIntegration)
import mergeOptions from "mergeOptions" /* 891 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackSyncIntegration = mergeOptions.buildFeedbackIntegration({
  getModalIntegration() {
    return mergeOptions.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return mergeOptions.feedbackScreenshotIntegration;
  }
});