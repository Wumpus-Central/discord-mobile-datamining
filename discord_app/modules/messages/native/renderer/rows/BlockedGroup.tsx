// === Module 7605: BlockedGroup ===

// Module 7605 (BlockedGroup)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import shared from "shared" /* 4735 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7603 */;
import react_native from "react-native" /* 7606 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const SeparatorAction = RowGeneratorConstants.SeparatorAction;
const UNSAFE_Colors = Constants.UNSAFE_Colors;
let closure_5 = module_12.memoize((arg0) => {
  let GREY1;
  let tmpResult10;
  let tmpResult8;
  let tmpResult9;
  let str = "#DBE0E4";
  const obj = shared;
  if (obj.isThemeDark(arg0)) {
    str = nativeDefault.unsafe_rawColors.PRIMARY_700;
  }
  let str2 = "#FAFAFA";
  const tmpResult = shared;
  if (tmpResult.isThemeDark(arg0)) {
    str2 = nativeDefault.unsafe_rawColors.PRIMARY_630;
  }
  const tmpResult6 = shared;
  if (tmpResult6.isThemeDark(arg0)) {
    const tmpResult7 = ColorUtils;
    GREY1 = tmpResult7.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_300, 0.6);
  } else {
    GREY1 = UNSAFE_Colors.GREY1;
  }
  const obj2 = { borderColor: tmpResult8.processColorOrThrow(str), backgroundColor: tmpResult9.processColorOrThrow(str2), color: tmpResult10.processColorOrThrow(GREY1) };
  tmpResult8 = react_native;
  tmpResult9 = react_native;
  tmpResult10 = react_native;
  return obj2;
});
const result = size.fileFinishedImporting("modules/messages/native/renderer/rows/BlockedGroup.tsx");

export const generateBlockedGroupRowData = function generateBlockedGroupRowData(canUncollapse, theme, self) {
  let changeType;
  let content;
  let context;
  let message;
  let obj2;
  let revealed;
  let rowType;
  let text;
  let closure_0 = self;
  ({ content, context } = canUncollapse);
  canUncollapse = !("canUncollapse" in canUncollapse);
  ({ changeType, message, text, revealed, rowType } = canUncollapse);
  if (!canUncollapse) {
    canUncollapse = canUncollapse.canUncollapse;
  }
  const obj = { type: rowType, content: content.map((item) => closure_0.generate(item)), button: { action: obj2 }, changeType, text, revealed, canUncollapse };
  const merged = Object.assign(closure_5(theme));
  obj2 = { type: SeparatorAction.TOGGLE_BLOCKED_MESSAGES, context };
  if (context == null) {
    context = message.id;
  }
  return obj;
};