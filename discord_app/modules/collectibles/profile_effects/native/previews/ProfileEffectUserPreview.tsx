// === Module 10837: ProfileEffectUserPreview ===

// Module 10837 (ProfileEffectUserPreview)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 10838 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["profileEffect", "avatarDecorationOverride", "profileFrameOverride"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let avatarDecorationOverride;
  let profileEffect;
  let profileFrameOverride;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] !== arg0) {
    ({ profileEffect, avatarDecorationOverride, profileFrameOverride } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = avatarDecorationOverride;
    cResult[2] = profileEffect;
    cResult[3] = profileFrameOverride;
    cResult[4] = tmp10;
    tmp7 = tmp10;
    tmp6 = profileFrameOverride;
    tmp5 = profileEffect;
    tmp4 = avatarDecorationOverride;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  if (cResult[5] !== tmp5) {
    let formatToPlainStringResult;
    if (null != tmp5) {
      const intl2 = intl3.intl;
      const obj2 = { a11y_text: tmp5.accessibilityLabel };
      formatToPlainStringResult = intl2.formatToPlainString(intl3.t.mbHmX2, obj2);
    } else {
      const intl = intl3.intl;
      formatToPlainStringResult = intl.string(intl3.t.XYdHeC);
    }
    cResult[5] = tmp5;
    cResult[6] = formatToPlainStringResult;
    tmp11 = formatToPlainStringResult;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] === tmp4) {
    if (cResult[8] === tmp5) {
      if (cResult[9] === tmp6) {
        if (cResult[10] === tmp7) {
          let tmp14;
          if (cResult[11] === tmp11) {
            tmp14 = cResult[12];
          }
          return tmp14;
        }
      }
    }
  }
  UserProfilePreviewDefault;
  const merged = Object.assign(tmp7);
  const tmp17 = <tmp15 profileEffectOverride={tmp5} avatarDecorationOverride={tmp4} profileFrameOverride={tmp6} accessibilityLabel={tmp11} />;
  cResult[7] = tmp4;
  cResult[8] = tmp5;
  cResult[9] = tmp6;
  cResult[10] = tmp7;
  cResult[11] = tmp11;
  cResult[12] = tmp17;
  tmp14 = tmp17;
}) : ((profileEffect) => {
  let avatarDecorationOverride;
  let formatToPlainStringResult;
  let profileFrameOverride;
  profileEffect = profileEffect.profileEffect;
  ({ avatarDecorationOverride, profileFrameOverride } = profileEffect);
  const merged = Object.assign(profileEffect, Object.assign({ profileEffect: 0, avatarDecorationOverride: 0, profileFrameOverride: 0 }));
  UserProfilePreviewDefault;
  if (null != profileEffect) {
    const intl2 = intl3.intl;
    const obj2 = { a11y_text: profileEffect.accessibilityLabel };
    formatToPlainStringResult = intl2.formatToPlainString(intl3.t.mbHmX2, obj2);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(intl3.t.XYdHeC);
  }
  const merged1 = Object.assign(merged);
  return <tmp4 profileEffectOverride={profileEffect} avatarDecorationOverride={avatarDecorationOverride} profileFrameOverride={profileFrameOverride} accessibilityLabel={formatToPlainStringResult} />;
});
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx");

export default tmp3;