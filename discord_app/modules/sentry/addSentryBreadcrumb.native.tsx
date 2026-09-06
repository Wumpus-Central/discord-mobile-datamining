// discord_app/modules/sentry/addSentryBreadcrumb.native.tsx
import _modAll675 from "../../../_runtime/metro/00675__.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  const obj = {
    type: "default",
    level: "info",
    category: category.category,
    message: category.message,
    data: category.data,
    timestamp: Date.now(),
  };
  obj.addBreadcrumb(obj);
}
