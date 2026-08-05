// discord_app/modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx
import "noop";
import { jsx } from "jsxProd";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { filterLayer } from "../../../../user_profile/native/UserProfilePreview.tsx";

const require = arg1;
const result = require("filterLayer").fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx");

export default function ProfileFrameUserPreview(profileFrame) {
  profileFrame = profileFrame.profileFrame;
  const merged = Object.assign(profileFrame, Object.create(null));
  let obj = { profileFrameOverride: profileFrame, accessibilityLabel: null };
  if (null != profileFrame) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj = { a11y_text: null };
    obj[0] = profileFrame.label;
    let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale /* getSystemLocale */.t["DT/PwH"], obj);
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(getSystemLocale /* getSystemLocale */.t.vQx51z);
  }
  obj[1] = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(filterLayer, { profileFrameOverride: profileFrame, accessibilityLabel: null });
};