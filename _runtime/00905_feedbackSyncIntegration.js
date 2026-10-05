// === Module 905: feedbackSyncIntegration ===

// Module 905 (feedbackSyncIntegration)
import module_902 from "module_902" /* 902 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const obj = {
  getModalIntegration() {
    return module_902.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return module_902.feedbackScreenshotIntegration;
  }
};

export const feedbackSyncIntegration = module_902.buildFeedbackIntegration(obj);