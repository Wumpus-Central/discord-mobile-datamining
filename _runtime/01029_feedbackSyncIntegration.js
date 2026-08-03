import mergeOptions from "mergeOptions";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackSyncIntegration = mergeOptions.buildFeedbackIntegration({
  getModalIntegration() {
    return require(1026) /* mergeOptions */.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return require(1026) /* mergeOptions */.feedbackScreenshotIntegration;
  }
});