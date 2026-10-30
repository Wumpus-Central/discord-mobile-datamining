// _runtime/metro/00887__.js
import _lazyLoadIntegration from "../00889__lazyLoadIntegration.js";
import mergeOptions from "../00888_mergeOptions.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({
  lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration,
});
