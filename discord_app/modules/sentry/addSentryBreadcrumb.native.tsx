// discord_app/modules/sentry/addSentryBreadcrumb.native.tsx
import set from "../../../_runtime/00002_set.js";
import addBreadcrumbAll from "../../../_runtime/00807_addBreadcrumb.js";

const result = set.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  let obj = addBreadcrumbAll;
  obj = {
    type: "default",
    level: "info",
    category: category.category,
    message: category.message,
    data: category.data,
    timestamp: Date.now(),
  };
  obj.addBreadcrumb(obj);
}
