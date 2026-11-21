// === Module 18250: useConjurePublishButton ===

// Module 18250 (useConjurePublishButton)
import util from "util" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 12298 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishButton.tsx");

export default function useConjurePublishButton(arg0, guildId, busy, platform) {
  items = [guildId, platform, busy];
  const memo = noop.useMemo(() => ({ guildId, platform, busy }), items);
  const tmp4 = useConjurePublishActionDefault(arg0, memo);
  const obj = { publishOptions: memo, publish: tmp4, publishing: null, variant: null, text: null, indicator: null, pendingChanges: null };
  let publishing;
  if (tmp4 != null) {
    publishing = tmp4.publishing;
  }
  obj.publishing = true === publishing;
  let tmp6 = null != tmp4 && tmp4.upToDate;
  if (tmp6) {
    tmp6 = "publish" === tmp4.action;
  }
  if (tmp6) {
    tmp6 = !tmp4.awaitingApproval;
  }
  let str2 = "primary";
  if (tmp6) {
    str2 = "secondary";
  }
  obj.variant = str2;
  if (null == tmp4) {
    const intl2 = util.intl;
    let label = intl2.string(_modDef4190["120EFN"]);
  } else {
    let tmp7 = null != tmp4 && tmp4.upToDate;
    if (tmp7) {
      tmp7 = "publish" === tmp4.action;
    }
    if (tmp7) {
      tmp7 = !tmp4.awaitingApproval;
    }
    if (tmp7) {
      if (!tmp4.publishing) {
        const intl = util.intl;
        label = intl.string(_modDef4190.kAfbEN);
      }
    }
    label = tmp4.label;
  }
  obj.text = label;
  let tmp10 = null;
  if (null != tmp4) {
    let str4 = "publishing";
    if (!tmp4.publishing) {
      let tmp11 = null != tmp4 && tmp4.upToDate;
      if (tmp11) {
        tmp11 = "publish" === tmp4.action;
      }
      if (tmp11) {
        tmp11 = !tmp4.awaitingApproval;
      }
      let tmp12 = "unpublished";
      if (tmp11) {
        tmp12 = null;
      }
      str4 = tmp12;
    }
    tmp10 = str4;
  }
  obj.indicator = tmp10;
  let tmp13 = null != tmp4;
  if (tmp13) {
    let isUpdate = tmp4.isUpdate;
    if (!isUpdate) {
      const status = tmp4.status;
      let publishState;
      if (status != null) {
        publishState = status.publishState;
      }
      isUpdate = "not_live" === publishState;
    }
    tmp13 = isUpdate;
  }
  obj.pendingChanges = tmp13;
  return obj;
};