// discord_app/modules/rtc/native/SecureFramesCopyIcon.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCopyIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (chunks) => {
      const cResult = require("c").c(8);
      chunks = chunks.chunks;
      if (cResult[0] !== chunks) {
        const joined = chunks.join(" ");
        cResult[0] = chunks;
        cResult[1] = joined;
        let tmp4 = joined;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      if (cResult[2] !== tmp4) {
        const fn = function l() {
          const result = ToastUtils.presentCopiedToClipboard();
          ClipboardUtils.copy(closure_0);
        };
        cResult[2] = tmp4;
        cResult[3] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = jsx(tmp(4849).CopyIcon, { size: "sm" });
        cResult[4] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.e7GWjQ);
        cResult[5] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== tmp6) {
        const obj2 = { icon: tmp7, variant: "secondary", onPress: tmp6, accessibilityLabel: tmp10, size: "sm" };
        const tmp14 = jsx(tmp(7586).IconButton, {
          icon: tmp7,
          variant: "secondary",
          onPress: tmp6,
          accessibilityLabel: tmp10,
          size: "sm",
        });
        cResult[6] = tmp6;
        cResult[7] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
  : (chunks) => {
      chunks = chunks.chunks;
      const items = [chunks];
      const memo = noop.useMemo(() => chunks.join(" "), items);
      const items1 = [memo];
      const callback = noop.useCallback(() => {
        const result = ToastUtils.presentCopiedToClipboard();
        ClipboardUtils.copy(memo);
      }, items1);
      let obj = {
        icon: jsx(chunks(memo[6]).CopyIcon, { size: "sm" }),
        variant: "secondary",
        onPress: callback,
        accessibilityLabel: null,
        size: "sm",
      };
      const intl = chunks(memo[7]).intl;
      obj.accessibilityLabel = intl.string(chunks(memo[7]).t.e7GWjQ);
      return jsx(chunks(memo[8]).IconButton, {
        icon: jsx(chunks(memo[6]).CopyIcon, { size: "sm" }),
        variant: "secondary",
        onPress: callback,
        accessibilityLabel: null,
        size: "sm",
      });
    };
