// discord_app/modules/premium/gifting/native/GiftIntentGifModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import MessageConstants from "../../../messages/MessageConstants.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let closure_2, gif, gift_intent_type, is_custom_message, ref, url;

let c10;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function sendGiftIntentGif() {
  return obj(...arguments);
}
let obj = function _sendGiftIntentGif() {
  obj = _asyncToGenerator(async (arg0) => {
    let user = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let items;
      let obj3;
      let obj6;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === url) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              let closure_1 = tmp;
              user = undefined;
              gift_intent_type = undefined;
              c2 = undefined;
              ({ channel: c0, giftIntentType: c1, text: c2, gif: c3 } = closure_0);
              is_custom_message = undefined;
              url = 1;
              c4 = 1;
              return { value: "Set", done: true };
            }
          } else {
            if (1 === url) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                is_custom_message = c2.trim().length > 0;
                const tmp51 = is_custom_message;
                if (tmp51) {
                  const id2 = user.id;
                  const sendMessage2 = closure_130_1(closure_130_2[10]).sendMessage;
                  url = 2;
                  c4 = 1;
                  const obj7 = { location: closure_130_9.GIFTING };
                  const tmp23 = closure_130_1(closure_130_2[10]);
                  const obj8 = { value: sendMessage2(id2, obj6.parse(user, c2), true, obj7), done: false };
                  obj6 = closure_130_1(closure_130_2[11]);
                  return obj8;
                }
              }
            } else if (2 === url) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              const obj10 = { gift_intent_type, is_custom_message, location_stack: items };
              const track = closure_130_1(closure_130_2[12]).track;
              const GIFT_INTENT_MESSAGE_SENT = closure_130_8.GIFT_INTENT_MESSAGE_SENT;
              items = [];
              closure_130_1(closure_130_2[12]);
              items[0] = closure_130_1(closure_130_2[13]).PREMIUM_GIFT_INTENT_CARD;
              track(GIFT_INTENT_MESSAGE_SENT, obj10);
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
            const id = user.id;
            const sendMessage = closure_130_1(closure_130_2[10]).sendMessage;
            url = 3;
            c4 = 1;
            const obj11 = { location: closure_130_9.GIFTING };
            const tmp9 = closure_130_1(closure_130_2[10]);
            const obj12 = { value: sendMessage(id, obj3.parse(user, url.url), true, obj11), done: false };
            obj3 = closure_130_1(closure_130_2[11]);
            return obj12;
          }
        } catch (tmp34) {
          c4 = 3;
          throw tmp34;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
let View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const MessageSendLocation = MessageConstants.MessageSendLocation;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
obj = { container: obj2, messageContainer: obj3, pickerContainer: { flex: 1 }, footer: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj4 = {
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
};
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let closure_6;
      let first;
      let first1;
      let onClose;
      let tmp7;
      let tmp2 = onClose;
      obj = channelId(onClose[15]);
      const cResult = obj.c(41);
      const tmp = channelId;
      channelId = channelId.channelId;
      const giftIntentType = channelId.giftIntentType;
      onClose = channelId.onClose;
      closure_12();
      const insets = giftIntentType(onClose[16])().insets;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function u() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(tmp2[17]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      ref = first1.useRef(null);
      const tmp10 = stateFromStores(first1.useState(null), 2);
      first1 = tmp10[0];
      View = tmp10[1];
      first1.useRef(null);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            closure_0 = channelId;
            tmp = closure_6((src) => {
              src = undefined;
              if (src != null) {
                src = src.src;
              }
              let tmp2 = null;
              if (src !== src.src) {
                tmp2 = src;
              }
              return tmp2;
            });
            return;
          }
        }
        cResult[3] = S;
      } else {
        class S {
          constructor(arg0) {
            closure_0 = channelId;
            tmp = closure_6((src) => {
              src = undefined;
              if (src != null) {
                src = src.src;
              }
              let tmp2 = null;
              if (src !== src.src) {
                tmp2 = src;
              }
              return tmp2;
            });
            return;
          }
        }
      }
      if (cResult[4] === stateFromStores) {
        class S {
          constructor(arg0) {
            closure_0 = channelId;
            tmp = closure_6((src) => {
              src = undefined;
              if (src != null) {
                src = src.src;
              }
              let tmp2 = null;
              if (src !== src.src) {
                tmp2 = src;
              }
              return tmp2;
            });
            return;
          }
        }
      }
      class R {
        constructor() {
          let str;
          const tmp2 = null != stateFromStores && null != first1 && 0 !== first1.url.length;
          if (tmp2) {
            const current = ref.current;
            obj = { channel: stateFromStores, giftIntentType, text: str, gif: first1 };
            str = undefined;
            if (current != null) {
              str = current.getText();
            }
            if (str == null) {
              str = "";
            }
            sendGiftIntentGif(obj);
            onClose();
          }
        }
      }
      cResult[4] = stateFromStores;
      cResult[5] = giftIntentType;
      cResult[6] = onClose;
      cResult[7] = first1;
      cResult[8] = R;
    }
  : (channelId) => {
      let TextArea;
      let guild_id;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items2;
      let items3;
      let items4;
      let obj4;
      let obj5;
      let obj7;
      let src;
      let tmp15;
      channelId = channelId.channelId;
      const giftIntentType = channelId.giftIntentType;
      const onClose = channelId.onClose;
      gif = undefined;
      const tmp = closure_12();
      let tmp2 = giftIntentType;
      const insets = giftIntentType(onClose[16])().insets;
      obj = channelId(onClose[17]);
      const items = [ChannelStore];
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      ref = gif.useRef(null);
      const tmp7 = stateFromStores(gif.useState(null), 2);
      gif = tmp7[0];
      let closure_6 = tmp7[1];
      const items1 = [stateFromStores, giftIntentType, gif, onClose];
      const ref1 = gif.useRef(null);
      const callback = gif.useCallback((arg0) => {
        let closure_0 = arg0;
        closure_6((src) => {
          src = undefined;
          if (src != null) {
            src = src.src;
          }
          let tmp2 = null;
          if (src !== src.src) {
            tmp2 = src;
          }
          return tmp2;
        });
      }, []);
      const obj2 = { style: items2, children: items3 };
      items2 = [tmp.container, { paddingBottom: insets.bottom }];
      const obj3 = { style: tmp.messageContainer, children: closure_10(TextArea, obj4) };
      const callback1 = gif.useCallback(() => {
        let str;
        const tmp2 = null != stateFromStores && null != gif && 0 !== gif.url.length;
        if (tmp2) {
          const current = ref.current;
          obj = { channel: stateFromStores, giftIntentType, text: str, gif };
          str = undefined;
          if (current != null) {
            str = current.getText();
          }
          if (str == null) {
            str = "";
          }
          sendGiftIntentGif(obj);
          onClose();
        }
      }, items1);
      obj4 = {
        ref,
        accessibilityLabel: intl.string(channelId(onClose[19]).t.ZV02cV),
        placeholder: obj5.getGiftIntentCustomMessagePlaceholder(),
      };
      TextArea = channelId(onClose[18]).TextArea;
      intl = channelId(onClose[19]).intl;
      obj5 = channelId(onClose[20]);
      items3 = [closure_10(closure_6, obj3), ,];
      const obj6 = { style: tmp.pickerContainer, children: closure_10(tmp15, obj7) };
      obj7 = {
        bottomSheetRef: ref1,
        channelId,
        guildId: guild_id,
        initialQuery: intl2.string(channelId(onClose[19]).t.jrtJi4),
        inActionSheet: false,
        contentHorizontalPadding: tmp2(onClose[9]).space.PX_16,
        selectedGifSrc: src,
        keyboardDismissMode: "on-drag",
        onPressGIF: callback,
      };
      guild_id = undefined;
      tmp15 = giftIntentType(onClose[21]);
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      intl2 = tmp4(tmp3[19]).intl;
      src = undefined;
      if (gif != null) {
        src = gif.src;
      }
      items3[1] = closure_10(closure_6, obj6);
      const obj8 = { style: tmp.footer, children: items4 };
      const obj9 = {
        grow: true,
        variant: "primary",
        text: intl3.string(channelId(onClose[19]).t.TXNS7S),
        onPress: callback1,
        disabled: null == gif,
      };
      const Button = tmp4(tmp3[22]).Button;
      intl3 = tmp4(tmp3[19]).intl;
      items4 = [closure_10(Button, obj9)];
      const obj10 = {
        grow: true,
        variant: "secondary",
        text: intl4.string(channelId(onClose[19]).t["ETE/oC"]),
        onPress: onClose,
      };
      const Button2 = tmp4(tmp3[22]).Button;
      intl4 = tmp4(tmp3[19]).intl;
      items4[1] = closure_10(Button2, obj10);
      items3[2] = closure_11(closure_6, obj8);
      return closure_11(closure_6, obj2);
    };
const constants = { GIFT_INTENT_GIF: "GIFT_INTENT_GIF" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let onDismiss;
      let tmp4;
      obj = channelId(onDismiss[15]);
      const cResult = obj.c(8);
      const tmp = channelId;
      channelId = channelId.channelId;
      const giftIntentType = channelId.giftIntentType;
      onDismiss = channelId.onDismiss;
      if (cResult[0] !== onDismiss) {
        const fn = function n() {
          const arr = ModalActionCreatorsDefault;
          arr.pop();
          if (onDismiss != null) {
            onDismiss();
          }
        };
        cResult[0] = onDismiss;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      let closure_3 = tmp4;
      if (cResult[2] === channelId) {
        if (cResult[3] === giftIntentType) {
          let tmp5;
          let tmp8;
          if (cResult[4] === tmp4) {
            tmp5 = cResult[5];
          }
          const tmp7 = giftIntentType(onDismiss[25])(tmp5);
          if (cResult[6] !== tmp7) {
            let obj2 = { initialRouteName: constants.GIFT_INTENT_GIF, screens: tmp7 };
            const tmp11 = closure_10(tmp(onDismiss[26]).Navigator, obj2);
            cResult[6] = tmp7;
            cResult[7] = tmp11;
            tmp8 = tmp11;
          } else {
            tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
      const fn2 = function u() {
        let intl;
        let obj3;
        obj = {};
        const GIFT_INTENT_GIF = constants.GIFT_INTENT_GIF;
        const obj2 = {
          title: intl.string(intl5.t.PQRuGc),
          headerLeft: obj3.getHeaderCloseButton(onClose),
          render() {
            obj = { channelId, giftIntentType, onClose };
            return closure_2_10(closure_2_15, obj);
          },
        };
        intl = intl5.intl;
        obj[GIFT_INTENT_GIF] = obj2;
        obj3 = NavigatorHeader;
        return obj;
      };
      cResult[2] = channelId;
      cResult[3] = giftIntentType;
      cResult[4] = tmp4;
      cResult[5] = fn2;
      tmp5 = fn2;
    }
  : (arg0) => {
      let onDismiss;
      const f107642 = () => {
        let channelId;
        let giftIntentType;
        let intl;
        let obj3;
        obj = {};
        const GIFT_INTENT_GIF = constants.GIFT_INTENT_GIF;
        const obj2 = {
          title: intl.string(intl5.t.PQRuGc),
          headerLeft: obj3.getHeaderCloseButton(onClose),
          render() {
            obj = { channelId, giftIntentType, onClose };
            return closure_2_10(closure_2_15, obj);
          },
        };
        intl = intl5.intl;
        obj[GIFT_INTENT_GIF] = obj2;
        obj3 = NavigatorHeader;
        return obj;
      };
      ({ channelId: require, giftIntentType: importDefault, onDismiss } = arg0);
      const items = [onDismiss];
      let closure_3 = react.useCallback(() => {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        if (onDismiss != null) {
          onDismiss();
        }
      }, items);
      obj = { initialRouteName: constants.GIFT_INTENT_GIF, screens: require("useInitialValue")(f107642) };
      require("useInitialValue")(f107642);
      return closure_10(require("Navigator").Navigator, obj);
    };
const result = size.fileFinishedImporting("modules/premium/gifting/native/GiftIntentGifModal.tsx");

export default tmp4;
