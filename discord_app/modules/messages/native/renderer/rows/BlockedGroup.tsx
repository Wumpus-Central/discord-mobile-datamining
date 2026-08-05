// discord_app/modules/messages/native/renderer/rows/BlockedGroup.tsx
import { SeparatorAction } from "Changeset";
import { UNSAFE_Colors } from "sum";
import apply from "apply";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { AccessibilityAnnouncer } from "../../../../../design/shared.tsx";
import { processColorOrThrow } from "../RowGeneratorStyleSheet.tsx";

let closure_5 = apply.memoize((arg0) => {
  let obj = AccessibilityAnnouncer;
  let str = "#DBE0E4";
  if (obj.isThemeDark(arg0)) {
    str = Themes.unsafe_rawColors.PRIMARY_700;
  }
  let tmpResult = tmp(4101);
  let str2 = "#FAFAFA";
  if (tmpResult.isThemeDark(arg0)) {
    str2 = Themes.unsafe_rawColors.PRIMARY_630;
  }
  tmpResult = tmp(4101);
  if (tmpResult.isThemeDark(arg0)) {
    let GREY1 = tmp(4099).hexWithOpacity(Themes.unsafe_rawColors.PRIMARY_300, 0.6);
    const tmpResult1 = tmp(4099);
  } else {
    GREY1 = UNSAFE_Colors.GREY1;
  }
  obj = { borderColor: null, backgroundColor: null, color: null };
  obj[0] = processColorOrThrow.processColorOrThrow(str);
  const tmpResult2 = processColorOrThrow;
  obj[1] = processColorOrThrow.processColorOrThrow(str2);
  const tmpResult3 = processColorOrThrow;
  obj[2] = processColorOrThrow.processColorOrThrow(GREY1);
  return obj;
});
const result = require("apply").fileFinishedImporting("modules/messages/native/renderer/rows/BlockedGroup.tsx");

export const generateBlockedGroupRowData = function generateBlockedGroupRowData(canUncollapse, theme, self) {
  let changeType;
  let content;
  let context;
  let message;
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