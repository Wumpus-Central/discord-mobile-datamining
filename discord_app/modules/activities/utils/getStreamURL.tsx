// === Module 12133: getStreamURL ===

// Module 12133 (getStreamURL)
import obj132 from "obj132" /* 2 */;
import items3 from "items3" /* 4481 */;

const validStreamURL = items3.validStreamURL;
const result = obj132.fileFinishedImporting("modules/activities/utils/getStreamURL.tsx");

export default function getStreamURL(url) {
  if (null != url) {
    if (null != url.url) {
      if (validStreamURL.test(url.url)) {
        return url.url;
      }
    }
  }
};