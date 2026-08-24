// === Module 6819: createTextStyle ===

// Module 6819 (createTextStyle)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const Fonts = ME.Fonts;
let closure_1 = { 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 16: 16, 18: 17, 20: 20, 24: 25, 32: 34 };
let closure_2 = { 10: 14, 11: 14, 12: 16, 13: 16, 14: 18, 16: 20, 18: 24, 20: 24, 24: 30, 32: 40 };
const result = set.fileFinishedImporting("modules/rebrand/native/TextStyles.tsx");

export default function createTextStyle(fontFamily, color, arg2, uppercase) {
  const obj = { fontFamily, fontSize: table[arg2], lineHeight: table2[arg2] };
  if (null != color) {
    obj.color = color;
  }
  uppercase = undefined;
  if (uppercase != null) {
    uppercase = uppercase.uppercase;
  }
  if (true === uppercase) {
    obj.textTransform = "uppercase";
    let tmp3 = tmp <= 14;
    if (tmp3) {
      tmp3 = fontFamily === Fonts.DISPLAY_EXTRABOLD || fontFamily === Fonts.DISPLAY_SEMIBOLD;
      const tmp4 = fontFamily === Fonts.DISPLAY_EXTRABOLD || fontFamily === Fonts.DISPLAY_SEMIBOLD;
    }
    if (tmp3) {
      obj.letterSpacing = 0.2;
    }
  }
  let marginBottom;
  if (uppercase != null) {
    marginBottom = uppercase.marginBottom;
  }
  if (null != marginBottom) {
    obj.marginBottom = uppercase.marginBottom;
  }
  return obj;
};