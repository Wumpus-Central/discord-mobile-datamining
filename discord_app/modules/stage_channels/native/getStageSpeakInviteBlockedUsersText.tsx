// === Module 12036: getStageSpeakInviteBlockedUsersText ===

// Module 12036 (getStageSpeakInviteBlockedUsersText)
import util from "util" /* 1113 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stage_channels/native/getStageSpeakInviteBlockedUsersText.tsx");

export default function getStageSpeakInviteBlockedUsersText(number, number2) {
  if (number > 0) {
    if (number2 > 0) {
      const intl3 = util.intl;
      const obj2 = { number: number + number2 };
      let formatResult = intl3.format(util.t["cXaoI+"], obj2);
    }
    return formatResult;
  }
  if (number2 > 0) {
    const intl2 = util.intl;
    const obj3 = { number: number2 };
    formatResult = intl2.format(util.t["0bU4FO"], obj3);
  } else {
    const intl = util.intl;
    const obj = { number };
    formatResult = intl.format(util.t.sFzx0G, obj);
  }
};