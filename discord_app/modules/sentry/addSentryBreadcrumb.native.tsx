// discord_app/modules/sentry/addSentryBreadcrumb.native.tsx
import set from "set" /* 2 */;
import addBreadcrumbAll from "addBreadcrumb" /* 810 */;

const result = set.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  let obj = addBreadcrumbAll;
  obj = { type: "default", level: "info", category: category.category, message: category.message, data: category.data, timestamp: Date.now() };
  obj.addBreadcrumb(obj);
};