// === Module 890: feedbackAsyncIntegration ===

// Module 890 (feedbackAsyncIntegration)
import _lazyLoadIntegration from "_lazyLoadIntegration" /* 892 */;
import mergeOptions from "mergeOptions" /* 891 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({ lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration });