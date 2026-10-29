// discord_app/modules/pinot/getPinotReadyAction.tsx
import PinotMemberSettingStore from "PinotMemberSettingStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/pinot/getPinotReadyAction.tsx");

export function getPinotReadyAction(pinotReadyAction) {
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
}
