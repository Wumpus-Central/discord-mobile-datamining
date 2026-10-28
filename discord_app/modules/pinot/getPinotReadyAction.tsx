// === Module 15330: getPinotReadyAction ===

// Module 15330 (getPinotReadyAction)
import PinotMemberSettingStore from "PinotMemberSettingStore" /* 15331 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/pinot/getPinotReadyAction.tsx");

export const getPinotReadyAction = function getPinotReadyAction(pinotReadyAction) {
  let flag = pinotReadyAction.swp_message_promotion_locked;
  if (flag == null) {
    flag = true;
  }
  const obj = { type: "PINOT_MEMBER_SETTING_STATE", locked: flag, defaultOptedOut: null };
  let prop = pinotReadyAction.swp_message_promotion_default_opted_out;
  if (prop == null) {
    prop = null;
  }
  obj.defaultOptedOut = prop;
  return obj;
};