// === Module 10858: PremiumGiftCustomMessage ===

// Module 10858 (PremiumGiftCustomMessage)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import TextArea from "TextArea" /* 7085 */;
import NativeGiftContext from "NativeGiftContext" /* 10699 */;
import noop from "module_19" /* 19 */;

require = fn;
class GiftCustomMessage {
  constructor(arg0) {
    ({ setMessagePosition, setCustomGiftMessage } = global);
    ({ onFocusMessage, customGiftMessage } = global);
    tmp = closure_6();
    intl = closure_0(closure_1[6]).intl;
    items = [];
    items[0] = setCustomGiftMessage;
    stringResult = intl.string(closure_0(closure_1[6]).t.ZkOo1U);
    obj = {
      style: tmp.container,
      onLayout(nativeEvent) {
            return require(nativeEvent.nativeEvent.layout.y);
          },
      children: null
    };
    callback = closure_2.useCallback((arg0) => {
      setCustomGiftMessage(arg0);
    }, items);
    obj = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, onFocus: null };
    intl2 = closure_0(closure_1[6]).intl;
    obj.label = intl2.string(closure_0(closure_1[6]).t.B3miE8);
    obj.placeholder = stringResult;
    obj.value = customGiftMessage;
    obj.onChange = callback;
    obj.maxLength = closure_4;
    obj.onFocus = onFocusMessage;
    obj.children = jsx(closure_0(closure_1[7]).TextArea, obj);
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const React4 = fn(1373).CUSTOM_GIFT_MESSAGE_MAX_LENGTH;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: null };
obj = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
obj.container = obj;
const timestampProducer = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomMessage.tsx");

export default noop.memo((arg0) => {
  ({ onFocusMessage, setMessagePosition } = arg0);
  let obj = NativeGiftContext;
  const nativeGiftContext = obj.useNativeGiftContext();
  obj = { onFocusMessage, setMessagePosition, customGiftMessage: nativeGiftContext.customGiftMessage, setCustomGiftMessage: nativeGiftContext.setCustomGiftMessage };
  return <GiftCustomMessage onFocusMessage={onFocusMessage} setMessagePosition={setMessagePosition} customGiftMessage={nativeGiftContext.customGiftMessage} setCustomGiftMessage={nativeGiftContext.setCustomGiftMessage} />;
});
export { GiftCustomMessage };