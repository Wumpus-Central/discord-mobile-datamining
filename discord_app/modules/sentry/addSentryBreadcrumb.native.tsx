// === Module 809: addSentryBreadcrumb ===

// Module 809 (addSentryBreadcrumb)
const result = require("set").fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  let obj = importAll(810);
  obj = { type: "default", level: "info", category: category.category, message: category.message, data: category.data, timestamp: Date.now() };
  obj.addBreadcrumb(obj);
};