// === Module 11108: ProfileEffectUserPreview ===

// Module 11108 (ProfileEffectUserPreview)
import util from "util" /* 1114 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 11109 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx");

export default function ProfileEffectUserPreview(profileEffect) {
  profileEffect = profileEffect.profileEffect;
  const merged = Object.assign(profileEffect, Object.assign({ profileEffect: 0 }));
  let obj = { profileEffectOverride: profileEffect, accessibilityLabel: null };
  if (null != profileEffect) {
    const intl2 = util.intl;
    obj = { a11y_text: profileEffect.accessibilityLabel };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t.mbHmX2, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(util.t.XYdHeC);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(UserProfilePreviewDefault, { profileEffectOverride: profileEffect, accessibilityLabel: null });
};