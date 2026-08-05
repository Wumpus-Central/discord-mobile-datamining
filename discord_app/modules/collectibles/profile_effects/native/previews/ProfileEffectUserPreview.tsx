// discord_app/modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx
import "noop";
import { jsx } from "jsxProd";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { filterLayer } from "../../../../user_profile/native/UserProfilePreview.tsx";

const require = arg1;
const result = require("filterLayer").fileFinishedImporting("modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx");

export default function ProfileEffectUserPreview(profileEffect) {
  profileEffect = profileEffect.profileEffect;
  const merged = Object.assign(profileEffect, Object.create(null));
  let obj = { profileEffectOverride: profileEffect, accessibilityLabel: null };
  if (null != profileEffect) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj = { a11y_text: null };
    obj[0] = profileEffect.accessibilityLabel;
    let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale /* getSystemLocale */.t.mbHmX2, obj);
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(getSystemLocale /* getSystemLocale */.t.XYdHeC);
  }
  obj[1] = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(filterLayer, { profileEffectOverride: profileEffect, accessibilityLabel: null });
};