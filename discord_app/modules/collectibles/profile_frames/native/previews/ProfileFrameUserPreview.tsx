// === Module 11186: ProfileFrameUserPreview ===

// Module 11186 (ProfileFrameUserPreview)
import c from "c" /* 576 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 10487 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const util = prop(1126);
require = fn;
let closure_3 = ["profileFrame", "avatarDecorationOverride", "profileEffectOverride"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileFrameUserPreview(arg0) {
  let prop = require;
  const cResult = c.c(13);
  if (cResult[0] !== arg0) {
    ({ profileFrame, avatarDecorationOverride, profileEffectOverride } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = avatarDecorationOverride;
    cResult[2] = profileEffectOverride;
    cResult[3] = profileFrame;
    cResult[4] = tmp10;
    let tmp7 = tmp10;
    let tmp6 = profileFrame;
    let tmp5 = profileEffectOverride;
    let tmp4 = avatarDecorationOverride;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  if (cResult[5] !== tmp6) {
    if (null != tmp6) {
      const intl2 = util.intl;
      prop = util.t["DT/PwH"];
      const obj2 = { a11y_text: tmp6.label };
      let formatToPlainStringResult = intl2.formatToPlainString(prop, obj2);
    } else {
      const intl = util.intl;
      formatToPlainStringResult = intl.string(util.t.vQx51z);
    }
    cResult[5] = tmp6;
    cResult[6] = formatToPlainStringResult;
  } else {
    if (cResult[7] === tmp4) {
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp7) {
            if (cResult[11] === tmp11) {
              let tmp15 = cResult[12];
            }
            return tmp15;
          }
        }
      }
    }
    const obj3 = { profileFrameOverride: tmp6, avatarDecorationOverride: tmp4, profileEffectOverride: tmp5, accessibilityLabel: cResult[6] };
    const merged = Object.assign(tmp7);
    const tmp22 = jsx(UserProfilePreviewDefault, { profileFrameOverride: tmp6, avatarDecorationOverride: tmp4, profileEffectOverride: tmp5, accessibilityLabel: cResult[6] });
    cResult[7] = tmp4;
    cResult[8] = tmp5;
    cResult[9] = tmp6;
    cResult[10] = tmp7;
    cResult[11] = cResult[6];
    cResult[12] = tmp22;
    tmp15 = tmp22;
  }
}) : (function ProfileFrameUserPreview(profileFrame) {
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
});