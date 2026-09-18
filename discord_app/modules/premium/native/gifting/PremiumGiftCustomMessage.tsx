// === Module 11106: PremiumGiftCustomMessage ===

// Module 11106 (PremiumGiftCustomMessage)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import TextArea from "TextArea" /* 7281 */;
import NativeGiftContext from "NativeGiftContext" /* 10942 */;
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
    obj1 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, onFocus: null };
    intl2 = closure_0(closure_1[6]).intl;
    obj1.label = intl2.string(closure_0(closure_1[6]).t.B3miE8);
    obj1.placeholder = stringResult;
    obj1.value = customGiftMessage;
    obj1.onChange = callback;
    obj1.maxLength = closure_4;
    obj1.onFocus = onFocusMessage;
    obj.children = jsx(closure_0(closure_1[7]).TextArea, obj1);
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const React4 = fn(1374).CUSTOM_GIFT_MESSAGE_MAX_LENGTH;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let obj = { container: { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 } };
const timestampProducer = createStyles.createStyles(obj);
const obj3 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomMessage.tsx");

export default noop.memo((arg0) => {
  ({ onFocusMessage, setMessagePosition } = arg0);
  const nativeGiftContext = NativeGiftContext.useNativeGiftContext();
  return <GiftCustomMessage onFocusMessage={onFocusMessage} setMessagePosition={setMessagePosition} customGiftMessage={nativeGiftContext.customGiftMessage} setCustomGiftMessage={nativeGiftContext.setCustomGiftMessage} />;
});
export { GiftCustomMessage };