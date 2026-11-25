// === Module 18403: useConjurePublishButton ===

// Module 18403 (useConjurePublishButton)
import util from "util" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 11412 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishButton.tsx");

export default function useConjurePublishButton(arg0, guildId, busy, platform) {
  items = [guildId, platform, busy];
  const memo = noop.useMemo(() => ({ guildId, platform, busy }), items);
  const tmp4 = useConjurePublishActionDefault(arg0, memo);
  let str;
  if (tmp4 != null) {
    str = tmp4.state;
  }
  if (str == null) {
    str = "hidden";
  }
  let tmp5 = "up_to_date" === str;
  if (!tmp5) {
    tmp5 = "auto_synced" === str;
  }
  const obj = { publishOptions: memo, publish: tmp4, state: str, variant: null, text: null, indicator: null, hint: null, pendingChanges: null };
  let str3 = "primary";
  if (tmp5) {
    str3 = "secondary";
  }
  obj.variant = str3;
  if (tmp5) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef4244.kAfbEN);
  } else {
    stringResult = undefined;
    if (tmp4 != null) {
      stringResult = tmp4.label;
    }
    if (stringResult == null) {
      const intl = util.intl;
      stringResult = intl.string(_modDef4244["120EFN"]);
    }
  }
  obj.text = stringResult;
  let str4 = "publishing";
  if ("publishing" !== str) {
    let str6 = null;
    if ("action_needed" === str) {
      str6 = "unpublished";
    }
    str4 = str6;
  }
  obj.indicator = str4;
  let stringResult1 = null;
  if ("auto_synced" === str) {
    const intl3 = util.intl;
    stringResult1 = intl3.string(_modDef4244.W4LzCY);
  }
  obj.hint = stringResult1;
  let tmp11 = null != tmp4;
  if (tmp11) {
    let isUpdate = tmp4.isUpdate;
    if (!isUpdate) {
      const status = tmp4.status;
      let publishState;
      if (status != null) {
        publishState = status.publishState;
      }
      isUpdate = "not_live" === publishState;
    }
    tmp11 = isUpdate;
  }
  obj.pendingChanges = tmp11;
  return obj;
};