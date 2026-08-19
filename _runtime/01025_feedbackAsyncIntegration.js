// === Module 1025: feedbackAsyncIntegration ===

// Module 1025 (feedbackAsyncIntegration)
import _lazyLoadIntegration from "_lazyLoadIntegration" /* 1027 */;
import mergeOptions from "mergeOptions" /* 1026 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({ lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration });