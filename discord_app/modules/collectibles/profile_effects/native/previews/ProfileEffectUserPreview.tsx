// discord_app/modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("filterLayer").fileFinishedImporting("modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx");

export default function ProfileEffectUserPreview(profileEffect) {
  profileEffect = profileEffect.profileEffect;
  const merged = Object.assign(profileEffect, Object.create(null));
  let obj = { profileEffectOverride: profileEffect, accessibilityLabel: null };
  if (null != profileEffect) {
    const intl2 = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { a11y_text: null };
    obj[0] = profileEffect.accessibilityLabel;
    let formatToPlainStringResult = intl2.formatToPlainString(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.mbHmX2, obj);
  } else {
    const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.XYdHeC);
  }
  obj[1] = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(require("../../../../user_profile/native/UserProfilePreview.tsx"), { profileEffectOverride: profileEffect, accessibilityLabel: null });
};