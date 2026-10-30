// === Module 12399: useConjurePublishButton ===

// Module 12399 (useConjurePublishButton)
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 12400 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function publishButtonText(upToDate, arg1) {
  if (null != arg1) {
    return arg1;
  } else if (null == upToDate) {
    const intl2 = util.intl;
    let label = intl2.string(_modDef3865["120EFN"]);
  } else {
    let tmp = null != upToDate && upToDate.upToDate;
    if (tmp) {
      tmp = "publish" === upToDate.action;
    }
    if (tmp) {
      tmp = !upToDate.awaitingApproval;
    }
    if (tmp) {
      if (!upToDate.publishing) {
        const intl = util.intl;
        label = intl.string(_modDef3865.kAfbEN);
      }
    }
    label = upToDate.label;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishButton.tsx");

export default function useConjurePublishButton(arg0, guildId, busy, arg3) {
  closure_2 = arg3;
  [tmp2, _slicedToArray] = noop.useState(null);
  noop.useRef(null);
  const callback = noop.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    ref.current = null;
  }, []);
  const items = [callback];
  const effect = noop.useEffect(() => callback, items);
  const items1 = [arg3, callback];
  const memo = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_2);
    obj.showConfirmation = function showConfirmation(intl) {
      callback();
      closure_1_3(intl);
      ref.current = setTimeout(() => {
        closure_1_4.current = null;
        closure_1_3(null);
      }, 1500);
    };
    return obj;
  }, items1);
  const items2 = [guildId, memo, busy];
  const memo1 = noop.useMemo(() => ({ guildId, platform: memo, busy }), items2);
  const tmp7 = useConjurePublishActionDefault(arg0, memo1);
  let publishing;
  if (tmp7 != null) {
    publishing = tmp7.publishing;
  }
  closure_7 = tmp9;
  const items3 = [true === publishing, callback];
  const effect1 = noop.useEffect(() => {
    if (closure_7) {
      callback();
      _slicedToArray(null);
    }
  }, items3);
  let tmp11 = null;
  if (true !== publishing) {
    tmp11 = tmp2;
  }
  const obj2 = { publishOptions: memo1, publish: tmp7, publishing: true === publishing, confirmation: tmp11, variant: null, text: null, label: null, indicator: null };
  let tmp12 = null != tmp7 && tmp7.upToDate;
  if (tmp12) {
    tmp12 = "publish" === tmp7.action;
  }
  if (tmp12) {
    tmp12 = !tmp7.awaitingApproval;
  }
  let str2 = "primary";
  if (tmp12) {
    str2 = "secondary";
  }
  obj2.variant = str2;
  obj2.text = publishButtonText(tmp7, tmp11);
  obj2.label = publishButtonText(tmp7, null);
  let tmp13 = null;
  if (null != tmp7) {
    let str3 = "publishing";
    if (!tmp7.publishing) {
      let tmp14 = null != tmp7 && tmp7.upToDate;
      if (tmp14) {
        tmp14 = "publish" === tmp7.action;
      }
      if (tmp14) {
        tmp14 = !tmp7.awaitingApproval;
      }
      let tmp15 = "unpublished";
      if (tmp14) {
        tmp15 = null;
      }
      str3 = tmp15;
    }
    tmp13 = str3;
  }
  obj2.indicator = tmp13;
  return obj2;
};