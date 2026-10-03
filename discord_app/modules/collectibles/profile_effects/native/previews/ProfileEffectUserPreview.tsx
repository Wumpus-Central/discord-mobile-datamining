// === Module 10824: ProfileEffectUserPreview ===

// Module 10824 (ProfileEffectUserPreview)
import c from "c" /* 576 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 10825 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const util = mbHmX2(1126);
require = fn;
let closure_3 = ["profileEffect", "avatarDecorationOverride", "profileFrameOverride"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let mbHmX2 = require;
  const cResult = c.c(13);
  if (cResult[0] !== arg0) {
    ({ profileEffect, avatarDecorationOverride, profileFrameOverride } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = avatarDecorationOverride;
    cResult[2] = profileEffect;
    cResult[3] = profileFrameOverride;
    cResult[4] = tmp9;
    let tmp6 = tmp9;
    let tmp5 = profileFrameOverride;
    let tmp4 = profileEffect;
    let tmp3 = avatarDecorationOverride;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  if (cResult[5] !== tmp4) {
    if (null != tmp4) {
      const intl2 = util.intl;
      mbHmX2 = util.t.mbHmX2;
      const obj2 = { a11y_text: tmp4.accessibilityLabel };
      let formatToPlainStringResult = intl2.formatToPlainString(mbHmX2, obj2);
    } else {
      const intl = util.intl;
      formatToPlainStringResult = intl.string(util.t.XYdHeC);
    }
    cResult[5] = tmp4;
    cResult[6] = formatToPlainStringResult;
  } else {
    if (cResult[7] === tmp3) {
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp10) {
              let tmp14 = cResult[12];
            }
            return tmp14;
          }
        }
      }
    }
    const obj3 = { profileEffectOverride: tmp4, avatarDecorationOverride: tmp3, profileFrameOverride: tmp5, accessibilityLabel: cResult[6] };
    const merged = Object.assign(tmp6);
    const tmp21 = jsx(UserProfilePreviewDefault, { profileEffectOverride: tmp4, avatarDecorationOverride: tmp3, profileFrameOverride: tmp5, accessibilityLabel: cResult[6] });
    cResult[7] = tmp3;
    cResult[8] = tmp4;
    cResult[9] = tmp5;
    cResult[10] = tmp6;
    cResult[11] = cResult[6];
    cResult[12] = tmp21;
    tmp14 = tmp21;
  }
}) : ((profileEffect) => {
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
});