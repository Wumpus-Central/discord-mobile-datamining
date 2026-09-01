// === Module 15284: found ===

// Module 15284 (found)
import set from "set" /* 2 */;
import _testCaptcha from "_testCaptcha" /* 15285 */;

const entries = Object.entries(_testCaptcha.HCaptchaDifficulty);
const mapped = entries.map((arg0) => {
  [tmp, str] = arg0;
  return { id: str.toString(), label: tmp, value: str };
});
const found = mapped.filter(function isHCaptchaDifficulty(value) {
  return typeof value.value !== "string";
});
const entries1 = Object.entries(_testCaptcha.CaptchaDeciderType);
const mapped1 = entries1.map((arg0) => {
  [tmp, tmp2] = arg0;
  return { id, label, value: id };
});
const result = set.fileFinishedImporting("modules/captcha/tooling/CaptchaTestUtils.tsx");

export const HCAPTCHA_DIFFICULTY_OPTIONS = found;
export const CAPTCHA_DECIDER_TYPE_OPTIONS = mapped1;