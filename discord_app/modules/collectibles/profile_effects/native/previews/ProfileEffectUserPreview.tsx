// === Module 10560: ProfileEffectUserPreview ===

// Module 10560 (ProfileEffectUserPreview)
import util from "util" /* 1115 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 10561 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx");

export default function ProfileEffectUserPreview(profileEffect) {
  profileEffect = profileEffect.profileEffect;
  ({ avatarDecorationOverride, profileFrameOverride } = profileEffect);
  const merged = Object.assign(profileEffect, Object.assign({ profileEffect: 0, avatarDecorationOverride: 0, profileFrameOverride: 0 }));
  const obj = { profileEffectOverride: profileEffect, avatarDecorationOverride, profileFrameOverride, accessibilityLabel: null };
  if (null != profileEffect) {
    const intl2 = util.intl;
    const obj2 = { a11y_text: profileEffect.accessibilityLabel };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t.mbHmX2, obj2);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(util.t.XYdHeC);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(UserProfilePreviewDefault, { profileEffectOverride: profileEffect, avatarDecorationOverride, profileFrameOverride, accessibilityLabel: null });
};