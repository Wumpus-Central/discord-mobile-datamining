// discord_app/modules/links/getLocalizedLink.tsx
import { getSystemLocale } from "../../intl/index.native.tsx";
const result = require("set").fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const formatted = getSystemLocale /* getSystemLocale */.intl.currentLocale.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};