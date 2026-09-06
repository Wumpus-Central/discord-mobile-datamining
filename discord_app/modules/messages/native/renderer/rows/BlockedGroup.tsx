// === Module 7935: BlockedGroup ===

// Module 7935 (BlockedGroup)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import shared from "shared" /* 4411 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7933 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 7936 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const SeparatorAction = RowGeneratorConstants.SeparatorAction;
const UNSAFE_Colors = Constants.UNSAFE_Colors;
let closure_5 = apply.memoize((arg0) => {
  let obj = shared;
  let str = "#DBE0E4";
  if (obj.isThemeDark(arg0)) {
    str = nativeDefault.unsafe_rawColors.PRIMARY_700;
  }
  let tmpResult = tmp(4411);
  let str2 = "#FAFAFA";
  if (tmpResult.isThemeDark(arg0)) {
    str2 = nativeDefault.unsafe_rawColors.PRIMARY_630;
  }
  tmpResult = tmp(4411);
  if (tmpResult.isThemeDark(arg0)) {
    let GREY1 = tmp(4409).hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_300, 0.6);
    const tmpResult1 = tmp(4409);
  } else {
    GREY1 = UNSAFE_Colors.GREY1;
  }
  obj = { borderColor: RowGeneratorStyleSheet.processColorOrThrow(str), backgroundColor: null, color: null };
  const tmpResult2 = RowGeneratorStyleSheet;
  obj.backgroundColor = RowGeneratorStyleSheet.processColorOrThrow(str2);
  const tmpResult3 = RowGeneratorStyleSheet;
  obj.color = RowGeneratorStyleSheet.processColorOrThrow(GREY1);
  return obj;
});
const result = size.fileFinishedImporting("modules/messages/native/renderer/rows/BlockedGroup.tsx");

export const generateBlockedGroupRowData = function generateBlockedGroupRowData(canUncollapse, theme, self) {
  const _self = self;
  ({ content, context } = canUncollapse);
  canUncollapse = !("canUncollapse" in canUncollapse);
  ({ changeType, message, text, revealed, rowType } = canUncollapse);
  if (!canUncollapse) {
    canUncollapse = canUncollapse.canUncollapse;
  }
  let obj = {};
  const merged = Object.assign(closure_5(theme));
  obj.type = rowType;
  obj.content = content.map((item) => _self.generate(item));
  obj = { type: SeparatorAction.TOGGLE_BLOCKED_MESSAGES, context: null };
  if (context == null) {
    context = message.id;
  }
  obj.context = context;
  obj.button = { action: obj };
  obj.changeType = changeType;
  obj.text = text;
  obj.revealed = revealed;
  obj.canUncollapse = canUncollapse;
  return obj;
};