// discord_app/modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx
import util from "../../../../../intl/index.native.tsx";
import UserProfilePreviewDefault from "../../../../user_profile/native/UserProfilePreview.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx",
);

export default function ProfileFrameUserPreview(profileFrame) {
  profileFrame = profileFrame.profileFrame;
  const merged = Object.assign(profileFrame, Object.assign({ profileFrame: 0 }));
  let obj = { profileFrameOverride: profileFrame, accessibilityLabel: null };
  if (null != profileFrame) {
    const intl2 = util.intl;
    obj = { a11y_text: profileFrame.label };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t["DT/PwH"], obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(util.t.vQx51z);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(UserProfilePreviewDefault, { profileFrameOverride: profileFrame, accessibilityLabel: null });
}
