// discord_app/modules/captcha/tooling/CaptchaTestUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import _testCaptcha from "CaptchaTestActionCreators.tsx";

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
