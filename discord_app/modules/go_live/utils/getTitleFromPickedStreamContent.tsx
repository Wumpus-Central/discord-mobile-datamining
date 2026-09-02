// === Module 13791: getTitleFromPickedStreamContent ===

// Module 13791 (getTitleFromPickedStreamContent)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;

const result = set.fileFinishedImporting("modules/go_live/utils/getTitleFromPickedStreamContent.tsx");

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
      const intl = getSystemLocale.intl;
      joined = intl.string(getSystemLocale.t.R4wpLN);
    }
  }
  return joined;
};