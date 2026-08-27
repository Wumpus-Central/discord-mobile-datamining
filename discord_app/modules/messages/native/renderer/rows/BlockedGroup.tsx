// === Module 7777: generateBlockedGroupRowData ===

// Module 7777 (generateBlockedGroupRowData)
import set from "set" /* 2 */;
import sum from "sum" /* 505 */;
import ThemesDefault from "Themes" /* 712 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import Changeset from "Changeset" /* 7775 */;
import processColorOrThrow from "processColorOrThrow" /* 7778 */;
import apply from "apply" /* 12 */;

const SeparatorAction = Changeset.SeparatorAction;
const UNSAFE_Colors = sum.UNSAFE_Colors;
let closure_5 = apply.memoize((arg0) => {
  let obj = AccessibilityAnnouncer;
  let str = "#DBE0E4";
  if (obj.isThemeDark(arg0)) {
    str = ThemesDefault.unsafe_rawColors.PRIMARY_700;
  }
  let tmpResult = tmp(1363);
  let str2 = "#FAFAFA";
  if (tmpResult.isThemeDark(arg0)) {
    str2 = ThemesDefault.unsafe_rawColors.PRIMARY_630;
  }
  tmpResult = tmp(1363);
  if (tmpResult.isThemeDark(arg0)) {
    let GREY1 = tmp(4293).hexWithOpacity(ThemesDefault.unsafe_rawColors.PRIMARY_300, 0.6);
    const tmpResult1 = tmp(4293);
  } else {
    GREY1 = UNSAFE_Colors.GREY1;
  }
  obj = { borderColor: processColorOrThrow.processColorOrThrow(str), backgroundColor: null, color: null };
  const tmpResult2 = processColorOrThrow;
  obj[1] = processColorOrThrow.processColorOrThrow(str2);
  const tmpResult3 = processColorOrThrow;
  obj[2] = processColorOrThrow.processColorOrThrow(GREY1);
  return obj;
});
const result = set.fileFinishedImporting("modules/messages/native/renderer/rows/BlockedGroup.tsx");

export const generateBlockedGroupRowData = function generateBlockedGroupRowData(canUncollapse, theme, self) {
  closure_0 = self;
  ({ content, context } = canUncollapse);
  canUncollapse = !("canUncollapse" in canUncollapse);
  ({ changeType, message, text, revealed, rowType } = canUncollapse);
  if (!canUncollapse) {
    canUncollapse = canUncollapse.canUncollapse;
  }
  let obj = {};
  const merged = Object.assign(callback(theme));
  obj.type = rowType;
  obj.content = content.map((arg0) => _self.generate(arg0));
  obj = { type: SeparatorAction.TOGGLE_BLOCKED_MESSAGES, context: null };
  if (context == null) {
    context = message.id;
  }
  obj[1] = context;
  obj.button = { action: obj };
  obj.changeType = changeType;
  obj.text = text;
  obj.revealed = revealed;
  obj.canUncollapse = canUncollapse;
  return obj;
};