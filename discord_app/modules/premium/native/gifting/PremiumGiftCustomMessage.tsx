// discord_app/modules/premium/native/gifting/PremiumGiftCustomMessage.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { CUSTOM_GIFT_MESSAGE_MAX_LENGTH as closure_4 } from "GuildFeatures";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
class GiftCustomMessage {
  constructor(arg0) {
    ({ setMessagePosition, setCustomGiftMessage } = global);
    ({ onFocusMessage, customGiftMessage } = global);
    tmp = jsx();
    intl = require("getSystemLocale").intl;
    items = [];
    items[0] = setCustomGiftMessage;
    stringResult = intl.string(require("getSystemLocale").t.ZkOo1U);
    obj = {
      style: tmp.container,
      onLayout(nativeEvent) {
            return callback(nativeEvent.nativeEvent.layout.y);
          },
      children: null
    };
    callback = __esModule.useCallback((arg0) => {
      setCustomGiftMessage(arg0);
    }, items);
    obj = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, onFocus: null };
    intl2 = require("getSystemLocale").intl;
    obj[0] = intl2.string(require("getSystemLocale").t.B3miE8);
    obj[1] = stringResult;
    obj[2] = customGiftMessage;
    obj[3] = callback;
    obj[4] = View;
    obj[5] = onFocusMessage;
    obj[2] = jsx(require("TextArea").TextArea, obj);
    return jsx(View, obj);
  }
}
let obj = { container: null };
obj = { marginTop: require("Themes").space.PX_24, marginHorizontal: require("Themes").space.PX_16 };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let onFocusMessage;
  let setMessagePosition;
  ({ onFocusMessage, setMessagePosition } = arg0);
  let obj = require(9529) /* NativeGiftContextProvider */;
  const nativeGiftContext = obj.useNativeGiftContext();
  obj = { onFocusMessage, setMessagePosition, customGiftMessage: nativeGiftContext.customGiftMessage, setCustomGiftMessage: nativeGiftContext.setCustomGiftMessage };
  return <GiftCustomMessage onFocusMessage={onFocusMessage} setMessagePosition={setMessagePosition} customGiftMessage={nativeGiftContext.customGiftMessage} setCustomGiftMessage={nativeGiftContext.setCustomGiftMessage} />;
});
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomMessage.tsx");

export default memoResult;
export { GiftCustomMessage };