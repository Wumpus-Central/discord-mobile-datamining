// === Module 15138: found ===

// Module 15138 (found)
import obj132 from "obj132" /* 2 */;
import _testCaptcha from "_testCaptcha" /* 15139 */;

const entries = Object.entries(_testCaptcha.HCaptchaDifficulty);
const mapped = entries.map((item, index) => {
  [tmp, str] = item;
  return { id: str.toString(), label: tmp, value: str };
});
const found = mapped.filter(function isHCaptchaDifficulty(item, index) {
  return typeof item.value !== "string";
});
const entries1 = Object.entries(_testCaptcha.CaptchaDeciderType);
const mapped1 = entries1.map((item, index) => {
  [tmp, tmp2] = item;
  return { id, label, value: id };
});
const result = obj132.fileFinishedImporting("modules/captcha/tooling/CaptchaTestUtils.tsx");

export const HCAPTCHA_DIFFICULTY_OPTIONS = found;
export const CAPTCHA_DECIDER_TYPE_OPTIONS = mapped1;