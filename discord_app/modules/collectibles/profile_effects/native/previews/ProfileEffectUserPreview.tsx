// === Module 8539: ProfileEffectUserPreview ===

// Module 8539 (ProfileEffectUserPreview)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import filterLayerDefault from "filterLayer" /* 8540 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx");

export default function ProfileEffectUserPreview(profileEffect) {
  profileEffect = profileEffect.profileEffect;
  const merged = Object.assign(profileEffect, Object.create(null));
  let obj = { profileEffectOverride: profileEffect, accessibilityLabel: null };
  if (null != profileEffect) {
    const intl2 = getSystemLocale.intl;
    obj = { a11y_text: null };
    obj[0] = profileEffect.accessibilityLabel;
    let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.mbHmX2, obj);
  } else {
    const intl = getSystemLocale.intl;
    formatToPlainStringResult = intl.string(getSystemLocale.t.XYdHeC);
  }
  obj[1] = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(filterLayerDefault, { profileEffectOverride: profileEffect, accessibilityLabel: null });
};