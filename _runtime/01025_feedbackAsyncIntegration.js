// _runtime/01025_feedbackAsyncIntegration.js
import _lazyLoadIntegration from "01027__lazyLoadIntegration.js";
import mergeOptions from "01026_mergeOptions.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({
  lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration,
});
