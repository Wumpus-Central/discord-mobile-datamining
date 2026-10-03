// _runtime/metro/00901__.js
import _lazyLoadIntegration from "../00903__lazyLoadIntegration.js";
import mergeOptions from "../00902_mergeOptions.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({
  lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration,
});
