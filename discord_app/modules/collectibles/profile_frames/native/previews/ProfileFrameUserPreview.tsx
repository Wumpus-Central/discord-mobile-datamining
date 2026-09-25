// === Module 10776: ProfileFrameUserPreview ===

// Module 10776 (ProfileFrameUserPreview)
import util from "util" /* 1115 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 10561 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx");

export default function ProfileFrameUserPreview(profileFrame) {
  profileFrame = profileFrame.profileFrame;
  ({ avatarDecorationOverride, profileEffectOverride } = profileFrame);
  const merged = Object.assign(profileFrame, Object.assign({ profileFrame: 0, avatarDecorationOverride: 0, profileEffectOverride: 0 }));
  const obj = { profileFrameOverride: profileFrame, avatarDecorationOverride, profileEffectOverride, accessibilityLabel: null };
  if (null != profileFrame) {
    const intl2 = util.intl;
    const obj2 = { a11y_text: profileFrame.label };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t["DT/PwH"], obj2);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(util.t.vQx51z);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(UserProfilePreviewDefault, { profileFrameOverride: profileFrame, avatarDecorationOverride, profileEffectOverride, accessibilityLabel: null });
};