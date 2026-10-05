// === Module 685: addSentryBreadcrumb ===

// Module 685 (addSentryBreadcrumb)
import _modAll686 from "module_686" /* 686 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  const obj = _modAll686;
  const obj2 = { type: "default", level: "info", category: category.category, message: category.message, data: category.data, timestamp: Date.now() };
  obj.addBreadcrumb(obj2);
};