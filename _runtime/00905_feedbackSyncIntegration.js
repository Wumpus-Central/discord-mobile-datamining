// _runtime/00905_feedbackSyncIntegration.js
import 00902__ from "metro/00902__.js";

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