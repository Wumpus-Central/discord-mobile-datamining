// === Module 901: ? ===

// Module 901
import _lazyLoadIntegration from "_lazyLoadIntegration" /* 903 */;
import mergeOptions from "mergeOptions" /* 902 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({ lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration });