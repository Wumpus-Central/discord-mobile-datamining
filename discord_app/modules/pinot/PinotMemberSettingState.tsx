// === Module 17773: PinotMemberSettingState ===

// Module 17773 (PinotMemberSettingState)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import wrappers from "wrappers" /* 1239 */;
import PinotMemberSettingStore from "PinotMemberSettingStore" /* 15566 */;

require = fn;
const UserSettingDefinitions = fn(4837);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/PinotMemberSettingState.tsx");

export const PinotMemberOptedOut = defineProtoSettingResult;
export const usePinotMemberSettingState = ReactCompilerGating.isReactCompilerEnabled() ? (function usePinotMemberSettingState() {
  const cResult = c.c(5);
  let setting = defineProtoSettingResult.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PinotMemberSettingStore];
    const fn = function n() {
      return { locked: PinotMemberSettingStore.isLocked(), defaultOptedOut: PinotMemberSettingStore.defaultsToOptedOut() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp5, tmp6);
  const locked = stateFromStoresObject.locked;
  let tmp10 = locked;
  if (!locked) {
    if (setting == null) {
      setting = tmp9;
    }
    tmp10 = setting;
  }
  if (cResult[2] === locked) {
    if (cResult[3] === tmp10) {
      let tmp12 = cResult[4];
    }
    return tmp12;
  }
  const obj2 = { locked, optedOut: tmp10 };
  cResult[2] = locked;
  cResult[3] = tmp10;
  cResult[4] = obj2;
  tmp12 = obj2;
  const tmpResult = initialize;
}) : (function usePinotMemberSettingState() {
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
});