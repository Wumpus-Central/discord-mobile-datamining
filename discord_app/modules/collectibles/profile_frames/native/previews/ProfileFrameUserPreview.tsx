// === Module 9771: ProfileFrameUserPreview ===

// Module 9771 (ProfileFrameUserPreview)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import filterLayerDefault from "filterLayer" /* 9661 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx");

export default function ProfileFrameUserPreview(profileFrame) {
  profileFrame = profileFrame.profileFrame;
  const merged = Object.assign(profileFrame, Object.create(null));
  let obj = { profileFrameOverride: profileFrame, accessibilityLabel: null };
  if (null != profileFrame) {
    const intl2 = getSystemLocale.intl;
    obj = { a11y_text: null };
    obj[0] = profileFrame.label;
    let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t["DT/PwH"], obj);
  } else {
    const intl = getSystemLocale.intl;
    formatToPlainStringResult = intl.string(getSystemLocale.t.vQx51z);
  }
  obj[1] = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(filterLayerDefault, { profileFrameOverride: profileFrame, accessibilityLabel: null });
};