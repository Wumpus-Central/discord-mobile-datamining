// _runtime/01022_feedbackAsyncIntegration.js
import _lazyLoadIntegration from "01024__lazyLoadIntegration.js";
import mergeOptions from "01023_mergeOptions.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({
  lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration,
});
