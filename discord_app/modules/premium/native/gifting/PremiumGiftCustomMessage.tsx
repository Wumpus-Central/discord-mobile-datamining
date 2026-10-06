// === Module 10603: PremiumGiftCustomMessage ===

// Module 10603 (PremiumGiftCustomMessage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import TextArea2 from "TextArea" /* 6587 */;
import NativeGiftContext from "NativeGiftContext" /* 10443 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const maxLength = PremiumConstants.CUSTOM_GIFT_MESSAGE_MAX_LENGTH;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let customGiftMessage;
  let first;
  let onFocusMessage;
  let setCustomGiftMessage;
  let setMessagePosition;
  const obj = react2;
  const cResult = obj.c(14);
  ({ onFocusMessage, setMessagePosition } = arg0);
  ({ customGiftMessage, setCustomGiftMessage } = arg0);
  closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.ZkOo1U);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== setCustomGiftMessage) {
    class C {
      constructor(arg0) {
        tmp = setCustomGiftMessage(arg0);
        return;
      }
    }
    cResult[1] = setCustomGiftMessage;
    cResult[2] = C;
  } else {
    class C {
      constructor(arg0) {
        tmp = setCustomGiftMessage(arg0);
        return;
      }
    }
  }
  if (cResult[3] !== setMessagePosition) {
    class C {
      constructor(arg0) {
        tmp = setCustomGiftMessage(arg0);
        return;
      }
    }
    cResult[3] = setMessagePosition;
    cResult[4] = tmp9;
  } else {
    class C {
      constructor(arg0) {
        tmp = setCustomGiftMessage(arg0);
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        tmp = setCustomGiftMessage(arg0);
        return;
      }
    }
    const stringResult1 = obj2.string(intl3.t.B3miE8);
    cResult[5] = stringResult1;
  } else {
    class C {
      constructor(arg0) {
        tmp = setCustomGiftMessage(arg0);
        return;
      }
    }
  }
  if (cResult[6] === customGiftMessage) {
    class C {
      constructor(arg0) {
        tmp = setCustomGiftMessage(arg0);
        return;
      }
    }
  }
  cResult[6] = customGiftMessage;
  cResult[7] = C;
  cResult[8] = onFocusMessage;
  cResult[9] = jsx(TextArea2.TextArea, { label: tmp10, placeholder: first, value: customGiftMessage, onChange: C, maxLength, onFocus: onFocusMessage });
  jsx(TextArea2.TextArea, { label: tmp10, placeholder: first, value: customGiftMessage, onChange: C, maxLength, onFocus: onFocusMessage });
}) : ((arg0) => {
  let closure_129_0;
  let customGiftMessage;
  let intl2;
  let onFocusMessage;
  let setCustomGiftMessage;
  ({ setMessagePosition: closure_129_0, setCustomGiftMessage } = arg0);
  ({ onFocusMessage, customGiftMessage } = arg0);
  const tmp = closure_6();
  const intl = intl3.intl;
  const items = [setCustomGiftMessage];
  const stringResult = intl.string(intl3.t.ZkOo1U);
  const callback = react.useCallback((arg0) => {
    setCustomGiftMessage(arg0);
  }, items);
  ({ label: intl2.string(intl3.t.B3miE8), placeholder: stringResult, value: customGiftMessage, onChange: callback, maxLength, onFocus: onFocusMessage });
  const TextArea = TextArea2.TextArea;
  intl2 = intl3.intl;
  return <View style={tmp.container} onLayout={function onLayout(nativeEvent) {
    return closure_1_0(nativeEvent.nativeEvent.layout.y);
  }}>{null}</View>;
});
let closure_7 = tmp3;
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let customGiftMessage;
  let onFocusMessage;
  let setCustomGiftMessage;
  let setMessagePosition;
  const obj = react2;
  const cResult = obj.c(5);
  ({ onFocusMessage, setMessagePosition } = arg0);
  const obj2 = NativeGiftContext;
  const nativeGiftContext = obj2.useNativeGiftContext();
  ({ customGiftMessage, setCustomGiftMessage } = nativeGiftContext);
  if (cResult[0] === customGiftMessage) {
    if (cResult[1] === onFocusMessage) {
      if (cResult[2] === setCustomGiftMessage) {
        let tmp3;
        if (cResult[3] === setMessagePosition) {
          tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  const tmp4 = <closure_7 onFocusMessage={onFocusMessage} setMessagePosition={setMessagePosition} customGiftMessage={customGiftMessage} setCustomGiftMessage={setCustomGiftMessage} />;
  cResult[0] = customGiftMessage;
  cResult[1] = onFocusMessage;
  cResult[2] = setCustomGiftMessage;
  cResult[3] = setMessagePosition;
  cResult[4] = tmp4;
  tmp3 = tmp4;
}) : ((arg0) => {
  let onFocusMessage;
  let setMessagePosition;
  ({ onFocusMessage, setMessagePosition } = arg0);
  const obj = NativeGiftContext;
  const nativeGiftContext = obj.useNativeGiftContext();
  return <closure_7 onFocusMessage={onFocusMessage} setMessagePosition={setMessagePosition} customGiftMessage={nativeGiftContext.customGiftMessage} setCustomGiftMessage={nativeGiftContext.setCustomGiftMessage} />;
}));
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomMessage.tsx");

export default memoResult;
export const GiftCustomMessage = tmp3;