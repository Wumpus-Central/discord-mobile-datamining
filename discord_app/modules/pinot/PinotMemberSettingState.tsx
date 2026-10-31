// === Module 11327: PinotMemberSettingState ===

// Module 11327 (PinotMemberSettingState)
import initialize from "initialize" /* 504 */;
import wrappers from "wrappers" /* 1227 */;
import PinotMemberSettingStore from "PinotMemberSettingStore" /* 11328 */;

require = fn;
const UserSettingDefinitions = fn(4843);
const defineProtoSettingResult = UserSettingDefinitions.defineProtoSetting("privacy", "swpMessagePromotionOptedOut", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  if (value == null) {
    value = null;
  }
  return value;
}, (value) => {
  let obj2;
  if (null != value) {
    const BoolValue = wrappers.BoolValue;
    const obj = { value };
    obj2 = BoolValue.create(obj);
  }
  return obj2;
});
let c3 = defineProtoSettingResult;
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/PinotMemberSettingState.tsx");

export const PinotMemberOptedOut = defineProtoSettingResult;
export function usePinotMemberSettingState() {
  let setting = defineProtoSettingResult.useSetting();
  const items = [PinotMemberSettingStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ locked: PinotMemberSettingStore.isLocked(), defaultOptedOut: PinotMemberSettingStore.defaultsToOptedOut() }));
  let locked = stateFromStoresObject.locked;
  const obj2 = { locked, optedOut: null };
  if (!locked) {
    if (setting == null) {
      setting = tmp3;
    }
    locked = setting;
  }
  obj2.optedOut = locked;
  return obj2;
}