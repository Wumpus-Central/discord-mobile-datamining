// discord_app/modules/conjure/publish/useConjurePublishButton.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef3863 from "../intl/ConjureUntranslated.messages.js";
import useConjurePublishActionDefault from "useConjurePublishAction.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function publishButtonText(upToDate, arg1) {
  if (null != arg1) {
    return arg1;
  } else if (null == upToDate) {
    const intl2 = util.intl;
    let label = intl2.string(_modDef3863["120EFN"]);
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
        label = intl.string(_modDef3863.kAfbEN);
      }
    }
    label = upToDate.label;
  }
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjurePublishButton(arg0, guildId, busy, arg3) {
      const cResult = c.c(29);
      [r10015, require] = noop.useState(null);
      noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          if (null != ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
          }
          ref.current = null;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function y() {
          return first;
        };
        const items = [first];
        cResult[1] = fn2;
        cResult[2] = items;
        let tmp5 = items;
        let tmp4 = fn2;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = noop.useEffect(tmp4, tmp5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(arg0) {
            tmp = closure_2();
            tmp2 = closure_0(arg0);
            closure_1.current = setTimeout(() => {
              ref.current = null;
              closure_1_0(null);
            }, 1500);
            return;
          }
        }
        cResult[3] = P;
      } else {
        class P {
          constructor(arg0) {
            tmp = closure_2();
            tmp2 = closure_0(arg0);
            closure_1.current = setTimeout(() => {
              ref.current = null;
              closure_1_0(null);
            }, 1500);
            return;
          }
        }
      }
      if (cResult[4] !== arg3) {
        class P {
          constructor(arg0) {
            tmp = closure_2();
            tmp2 = closure_0(arg0);
            closure_1.current = setTimeout(() => {
              ref.current = null;
              closure_1_0(null);
            }, 1500);
            return;
          }
        }
        const merged = Object.assign(arg3);
        tmp9.showConfirmation = P;
        cResult[4] = arg3;
        cResult[5] = tmp9;
      } else {
        class P {
          constructor(arg0) {
            tmp = closure_2();
            tmp2 = closure_0(arg0);
            closure_1.current = setTimeout(() => {
              ref.current = null;
              closure_1_0(null);
            }, 1500);
            return;
          }
        }
      }
      if (cResult[6] === busy) {
        class P {
          constructor(arg0) {
            tmp = closure_2();
            tmp2 = closure_0(arg0);
            closure_1.current = setTimeout(() => {
              ref.current = null;
              closure_1_0(null);
            }, 1500);
            return;
          }
        }
      }
      cResult[6] = busy;
      cResult[7] = guildId;
      cResult[8] = tmp9;
      cResult[9] = { guildId, platform: tmp9, busy };
      const obj3 = { guildId, platform: tmp9, busy };
      const tmp2 = _slicedToArray(noop.useState(null), 2);
    }
  : function useConjurePublishButton(arg0, guildId, busy, arg3) {
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
      const obj2 = {
        publishOptions: memo1,
        publish: tmp7,
        publishing: true === publishing,
        confirmation: tmp11,
        variant: null,
        text: null,
        label: null,
        indicator: null,
      };
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
