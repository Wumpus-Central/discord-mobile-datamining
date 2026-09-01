// discord_app/modules/premium/native/gifting/PremiumGiftCustomMessage.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NativeGiftContextProvider from "../../../payments/native/NativeGiftContext.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { CUSTOM_GIFT_MESSAGE_MAX_LENGTH as closure_4 } from "../../PremiumConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
class GiftCustomMessage {
  constructor(arg0) {
    ({ setMessagePosition, setCustomGiftMessage } = global);
    ({ onFocusMessage, customGiftMessage } = global);
    tmp = closure_6();
    intl = require("getSystemLocale").intl;
    items = [];
    items[0] = setCustomGiftMessage;
    stringResult = intl.string(require("getSystemLocale").t.ZkOo1U);
    obj = {
      style: tmp.container,
      onLayout(nativeEvent) {
        return callback(nativeEvent.nativeEvent.layout.y);
      },
      children: null,
    };
    callback = closure_2.useCallback((arg0) => {
      setCustomGiftMessage(arg0);
    }, items);
    obj = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, onFocus: null };
    intl2 = require("getSystemLocale").intl;
    obj[0] = intl2.string(require("getSystemLocale").t.B3miE8);
    obj[1] = stringResult;
    obj[2] = customGiftMessage;
    obj[3] = callback;
    obj[4] = closure_4;
    obj[5] = onFocusMessage;
    obj[2] = jsx(require("TextArea").TextArea, obj);
    return jsx(View, obj);
  }
}
let obj = { container: null };
obj = { marginTop: ThemesDefault.space.PX_24, marginHorizontal: ThemesDefault.space.PX_16 };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ onFocusMessage, setMessagePosition } = arg0);
  let obj = NativeGiftContextProvider;
  const nativeGiftContext = obj.useNativeGiftContext();
  obj = {
    onFocusMessage,
    setMessagePosition,
    customGiftMessage: nativeGiftContext.customGiftMessage,
    setCustomGiftMessage: nativeGiftContext.setCustomGiftMessage,
  };
  return (
    <GiftCustomMessage
      onFocusMessage={onFocusMessage}
      setMessagePosition={setMessagePosition}
      customGiftMessage={nativeGiftContext.customGiftMessage}
      setCustomGiftMessage={nativeGiftContext.setCustomGiftMessage}
    />
  );
});
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomMessage.tsx");

export default memoResult;
export { GiftCustomMessage };
