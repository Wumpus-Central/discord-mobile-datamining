// _runtime/metro/00902__.js
import _lazyLoadIntegration from "../00904__lazyLoadIntegration.js";
import mergeOptions from "../00903_mergeOptions.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({
  lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration,
});
