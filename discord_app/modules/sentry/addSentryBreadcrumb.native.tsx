// === Module 674: addSentryBreadcrumb ===

// Module 674 (addSentryBreadcrumb)
import set from "set" /* 2 */;
import addBreadcrumbAll from "addBreadcrumb" /* 675 */;

const result = set.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  let obj = addBreadcrumbAll;
  obj = { type: "default", level: "info", category: category.category, message: category.message, data: category.data, timestamp: Date.now() };
  obj.addBreadcrumb(obj);
};