// === Module 809: addSentryBreadcrumb ===

// Module 809 (addSentryBreadcrumb)
import obj132 from "obj132" /* 2 */;
import addBreadcrumbAll from "addBreadcrumb" /* 810 */;

const result = obj132.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  const obj = { type: "default", level: "info", category: category.category, message: category.message, data: category.data, timestamp: Date.now() };
  obj.addBreadcrumb(obj);
};