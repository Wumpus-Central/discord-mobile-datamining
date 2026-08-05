// discord_app/modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("filterLayer").fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx");

export default function ProfileFrameUserPreview(profileFrame) {
  profileFrame = profileFrame.profileFrame;
  const merged = Object.assign(profileFrame, Object.create(null));
  let obj = { profileFrameOverride: profileFrame, accessibilityLabel: null };
  if (null != profileFrame) {
    const intl2 = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { a11y_text: null };
    obj[0] = profileFrame.label;
    let formatToPlainStringResult = intl2.formatToPlainString(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t["DT/PwH"], obj);
  } else {
    const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.vQx51z);
  }
  obj[1] = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(require("../../../../user_profile/native/UserProfilePreview.tsx"), { profileFrameOverride: profileFrame, accessibilityLabel: null });
};