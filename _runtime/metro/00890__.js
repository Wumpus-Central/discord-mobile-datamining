// _runtime/metro/00890__.js
import _lazyLoadIntegration from "../00892__lazyLoadIntegration.js";
import mergeOptions from "../00891_mergeOptions.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({
  lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration,
});
