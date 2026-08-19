// discord_app/modules/links/getLocalizedLink.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";

const result = obj132.fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const formatted = getSystemLocale.intl.currentLocale.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};