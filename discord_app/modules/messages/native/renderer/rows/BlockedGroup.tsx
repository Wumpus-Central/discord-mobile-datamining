// discord_app/modules/messages/native/renderer/rows/BlockedGroup.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../../discord_common/js/shared/Constants.tsx";
import ColorUtils from "../../../../../utils/ColorUtils.tsx";
import shared from "../../../../../design/shared.tsx";
import RowGeneratorConstants from "../RowGeneratorConstants.tsx";
import RowGeneratorStyleSheet from "../RowGeneratorStyleSheet.tsx";
import apply from "../../../../../../_runtime/metro/00012__.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const SeparatorAction = RowGeneratorConstants.SeparatorAction;
const UNSAFE_Colors = Constants.UNSAFE_Colors;
let closure_5 = apply.memoize((arg0) => {
  let str = "#DBE0E4";
  if (obj.isThemeDark(arg0)) {
    str = nativeDefault.unsafe_rawColors.PRIMARY_700;
  }
  obj = shared;
  let str2 = "#FAFAFA";
  if (tmpResult.isThemeDark(arg0)) {
    str2 = nativeDefault.unsafe_rawColors.PRIMARY_630;
  }
  tmpResult = shared;
  if (tmpResult6.isThemeDark(arg0)) {
    let GREY1 = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_300, 0.6);
    const tmpResult7 = ColorUtils;
  } else {
    GREY1 = UNSAFE_Colors.GREY1;
  }
  const obj2 = { borderColor: null, backgroundColor: null, color: null };
  tmpResult6 = shared;
  obj2.borderColor = RowGeneratorStyleSheet.processColorOrThrow(str);
  const tmpResult8 = RowGeneratorStyleSheet;
  obj2.backgroundColor = RowGeneratorStyleSheet.processColorOrThrow(str2);
  const tmpResult9 = RowGeneratorStyleSheet;
  obj2.color = RowGeneratorStyleSheet.processColorOrThrow(GREY1);
  return obj2;
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
  const obj = {};
  const merged = Object.assign(closure_5(theme));
  obj.type = rowType;
  obj.content = content.map((item) => _self.generate(item));
  const obj2 = { type: SeparatorAction.TOGGLE_BLOCKED_MESSAGES, context: null };
  if (context == null) {
    context = message.id;
  }
  obj2.context = context;
  obj.button = { action: obj2 };
  obj.changeType = changeType;
  obj.text = text;
  obj.revealed = revealed;
  obj.canUncollapse = canUncollapse;
  return obj;
};
