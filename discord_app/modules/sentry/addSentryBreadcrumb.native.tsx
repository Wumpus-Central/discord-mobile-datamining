// discord_app/modules/sentry/addSentryBreadcrumb.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import addBreadcrumbAll from "../../../_runtime/00810_addBreadcrumb.js";

const result = obj132.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  const obj = { type: "default", level: "info", category: category.category, message: category.message, data: category.data, timestamp: Date.now() };
  obj.addBreadcrumb(obj);
};