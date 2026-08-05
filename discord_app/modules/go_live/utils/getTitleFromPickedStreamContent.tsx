// discord_app/modules/go_live/utils/getTitleFromPickedStreamContent.tsx
import { getSystemLocale } from "../../../intl/index.native.tsx";
const result = require("set").fileFinishedImporting("modules/go_live/utils/getTitleFromPickedStreamContent.tsx");

export default function getTitleFromPickedStreamContent(windows) {
  if (windows.windows.length > 0) {
    windows = windows.windows;
    const mapped = windows.map((title) => title.title);
    let joined = mapped.join(", ");
  } else if (windows.applications.length > 0) {
    const applications = windows.applications;
    const mapped1 = applications.map((name) => name.name);
    joined = mapped1.join(", ");
  } else {
    joined = null;
    if (windows.displays.length > 0) {
      const intl = getSystemLocale /* getSystemLocale */.intl;
      joined = intl.string(getSystemLocale /* getSystemLocale */.t.R4wpLN);
    }
  }
  return joined;
};