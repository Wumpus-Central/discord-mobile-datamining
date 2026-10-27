// _runtime/metro/00899__.js
import _lazyLoadIntegration from "../00901__lazyLoadIntegration.js";
import mergeOptions from "../00900_mergeOptions.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({
  lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration,
});
