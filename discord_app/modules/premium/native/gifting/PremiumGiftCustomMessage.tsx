// discord_app/modules/premium/native/gifting/PremiumGiftCustomMessage.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import TextArea from "../../../../design/components/TextInput/native/TextArea.native.tsx";
import NativeGiftContext from "../../../payments/native/NativeGiftContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const maxLength = fn(1379).CUSTOM_GIFT_MESSAGE_MAX_LENGTH;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { container: { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(14);
      ({ onFocusMessage, setMessagePosition } = arg0);
      ({ customGiftMessage, setCustomGiftMessage } = arg0);
      closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.ZkOo1U);
        cResult[0] = stringResult;
        let first = stringResult;
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
        const stringResult1 = obj2.string(util.t.B3miE8);
        cResult[5] = stringResult1;
        const tmp10 = stringResult1;
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
      const obj3 = {
        label: tmp10,
        placeholder: first,
        value: customGiftMessage,
        onChange: C,
        maxLength,
        onFocus: onFocusMessage,
      };
      cResult[6] = customGiftMessage;
      cResult[7] = C;
      cResult[8] = onFocusMessage;
      cResult[9] = jsx(TextArea.TextArea, {
        label: tmp10,
        placeholder: first,
        value: customGiftMessage,
        onChange: C,
        maxLength,
        onFocus: onFocusMessage,
      });
      const tmp12 = jsx(TextArea.TextArea, {
        label: tmp10,
        placeholder: first,
        value: customGiftMessage,
        onChange: C,
        maxLength,
        onFocus: onFocusMessage,
      });
    }
  : (arg0) => {
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
        children: null,
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
      obj.children = jsx(TextArea.TextArea, {
        label: null,
        placeholder: null,
        value: null,
        onChange: null,
        maxLength: null,
        onFocus: null,
      });
      return (
        <View
          style={tmp.container}
          onLayout={function onLayout(nativeEvent) {
            return require(nativeEvent.nativeEvent.layout.y);
          }}
        >
          {null}
        </View>
      );
    };
let closure_7 = tmp2;
ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomMessage.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
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
        const tmp4 = (
          <closure_7
            onFocusMessage={onFocusMessage}
            setMessagePosition={setMessagePosition}
            customGiftMessage={customGiftMessage}
            setCustomGiftMessage={setCustomGiftMessage}
          />
        );
        cResult[0] = customGiftMessage;
        cResult[1] = onFocusMessage;
        cResult[2] = setCustomGiftMessage;
        cResult[3] = setMessagePosition;
        cResult[4] = tmp4;
        tmp3 = tmp4;
      }
    : (arg0) => {
        ({ onFocusMessage, setMessagePosition } = arg0);
        const nativeGiftContext = NativeGiftContext.useNativeGiftContext();
        return (
          <closure_7
            onFocusMessage={onFocusMessage}
            setMessagePosition={setMessagePosition}
            customGiftMessage={nativeGiftContext.customGiftMessage}
            setCustomGiftMessage={nativeGiftContext.setCustomGiftMessage}
          />
        );
      },
);
export const GiftCustomMessage = tmp2;
