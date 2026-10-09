// === Module 10185: PremiumGiftCustomMessage ===

// Module 10185 (PremiumGiftCustomMessage)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import TextArea from "TextArea" /* 6770 */;
import NativeGiftContext from "NativeGiftContext" /* 10025 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const maxLength = fn(1392).CUSTOM_GIFT_MESSAGE_MAX_LENGTH;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj = { container: { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftCustomMessage(arg0) {
  const cResult = c.c(14);
  ({ onFocusMessage, setMessagePosition } = arg0);
  ({ customGiftMessage, setCustomGiftMessage } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.ZkOo1U);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== setCustomGiftMessage) {
    const fn = function v(arg0) {
      setCustomGiftMessage(arg0);
    };
    cResult[1] = setCustomGiftMessage;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== setMessagePosition) {
    const fn2 = function y(nativeEvent) {
      return setMessagePosition(nativeEvent.nativeEvent.layout.y);
    };
    cResult[3] = setMessagePosition;
    cResult[4] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.B3miE8);
    cResult[5] = stringResult1;
    let tmp9 = stringResult1;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === customGiftMessage) {
    if (cResult[7] === tmp7) {
      if (cResult[8] === onFocusMessage) {
        let tmp11 = cResult[9];
      }
      if (cResult[10] === tmp4.container) {
        if (cResult[11] === tmp8) {
          if (cResult[12] === tmp11) {
            let tmp13 = cResult[13];
          }
          return tmp13;
        }
      }
      const obj2 = { style: tmp4.container, onLayout: tmp8, children: tmp11 };
      const tmp16 = <View style={tmp4.container} onLayout={tmp8}>{tmp11}</View>;
      cResult[10] = tmp4.container;
      cResult[11] = tmp8;
      cResult[12] = tmp11;
      cResult[13] = tmp16;
      tmp13 = tmp16;
    }
  }
  const tmp12 = jsx(TextArea.TextArea, { label: tmp9, placeholder: first, value: customGiftMessage, onChange: tmp7, maxLength, onFocus: onFocusMessage });
  cResult[6] = customGiftMessage;
  cResult[7] = tmp7;
  cResult[8] = onFocusMessage;
  cResult[9] = tmp12;
  tmp11 = tmp12;
  const obj3 = { label: tmp9, placeholder: first, value: customGiftMessage, onChange: tmp7, maxLength, onFocus: onFocusMessage };
}) : (function GiftCustomMessage(arg0) {
  ({ setMessagePosition: require, setCustomGiftMessage } = arg0);
  ({ onFocusMessage, customGiftMessage } = arg0);
  const intl = util.intl;
  const items = [setCustomGiftMessage];
  const tmp = closure_6();
  const obj = {
    style: tmp.container,
    onLayout(nativeEvent) {
      return require(nativeEvent.nativeEvent.layout.y);
    },
    children: null
  };
  const callback = noop.useCallback((arg0) => {
    setCustomGiftMessage(arg0);
  }, items);
  const obj2 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, onFocus: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.B3miE8);
  obj2.placeholder = intl.string(util.t.ZkOo1U);
  obj2.value = customGiftMessage;
  obj2.onChange = callback;
  obj2.maxLength = maxLength;
  obj2.onFocus = onFocusMessage;
  obj.children = jsx(TextArea.TextArea, { label: null, placeholder: null, value: null, onChange: null, maxLength: null, onFocus: null });
  return <View style={tmp.container} onLayout={function onLayout(nativeEvent) {
    return require(nativeEvent.nativeEvent.layout.y);
  }}>{null}</View>;
});
let closure_7 = tmp2;
ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomMessage.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGiftCustomMessage(arg0) {
  const cResult = c.c(5);
  ({ onFocusMessage, setMessagePosition } = arg0);
  const nativeGiftContext = NativeGiftContext.useNativeGiftContext();
  ({ customGiftMessage, setCustomGiftMessage } = nativeGiftContext);
  if (cResult[0] === customGiftMessage) {
    if (cResult[1] === onFocusMessage) {
      if (cResult[2] === setCustomGiftMessage) {
        if (cResult[3] === setMessagePosition) {
          let tmp3 = cResult[4];
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
}) : (function PremiumGiftCustomMessage(arg0) {
  ({ onFocusMessage, setMessagePosition } = arg0);
  const nativeGiftContext = NativeGiftContext.useNativeGiftContext();
  return <closure_7 onFocusMessage={onFocusMessage} setMessagePosition={setMessagePosition} customGiftMessage={nativeGiftContext.customGiftMessage} setCustomGiftMessage={nativeGiftContext.setCustomGiftMessage} />;
}));
export const GiftCustomMessage = tmp2;