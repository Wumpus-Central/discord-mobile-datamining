// === Module 902: ? ===

// Module 902
import _lazyLoadIntegration from "_lazyLoadIntegration" /* 904 */;
import mergeOptions from "mergeOptions" /* 903 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({ lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration });