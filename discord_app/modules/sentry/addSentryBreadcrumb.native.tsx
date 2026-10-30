// === Module 673: addSentryBreadcrumb ===

// Module 673 (addSentryBreadcrumb)
import _modAll674 from "module_674" /* 674 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  const obj = _modAll674;
  obj.addBreadcrumb({ type: "default", level: "info", category: category.category, message: category.message, data: category.data, timestamp: Date.now() });
};