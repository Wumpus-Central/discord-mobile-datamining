// === Module 11370: GiftIntentGifModal ===

// Module 11370 (GiftIntentGifModal)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import NavigatorHeader from "NavigatorHeader" /* 6200 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;

const require = globalThis.__r;

require = fn;
function sendGiftIntentGif() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _sendGiftIntentGif(arg0) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      closure_129_4 = closure_129_2.trim().length > 0;
      if (closure_129_4) {
        const id2 = closure_129_0.id;
        c3 = 2;
        c4 = 1;
        closure_130_1(closure_130_2[10]);
        return { value: closure_130_1(closure_130_2[10]).sendMessage(id2, closure_130_1(closure_130_2[11]).parse(closure_129_0, closure_129_2), true, { location: closure_130_9.GIFTING }), done: false };
      }
    }
  } else if (2 === tmp5) {
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
    const obj12 = { gift_intent_type: closure_129_1, is_custom_message: closure_129_4, location_stack: null };
    const items = [closure_130_1(closure_130_2[13]).PREMIUM_GIFT_INTENT_CARD];
    obj12.location_stack = items;
    closure_130_1(closure_130_2[12]).track(closure_130_8.GIFT_INTENT_MESSAGE_SENT, obj12);
    c4 = 3;
    return { value: "IconComponent", done: "+51" };
  }
  const id = closure_129_0.id;
  await closure_130_1(closure_130_2[10]).sendMessage(id, closure_130_1(closure_130_2[11]).parse(closure_129_0, closure_129_3.url), true, { location: closure_130_9.GIFTING });
  closure_1 = tmp2;
  ({ channel: closure_129_0, giftIntentType: closure_129_1, text: closure_129_2, gif: closure_129_3 } = closure_0);
  return "Set";
};
let View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const MessageSendLocation = fn(5085).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, messageContainer: null, pickerContainer: null, footer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.messageContainer = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj2.pickerContainer = { flex: 1 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj2.footer = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftIntentGifModalBody(channelId) {
  const cResult = channelId(onClose[15]).c(41);
  channelId = channelId.channelId;
  const giftIntentType = channelId.giftIntentType;
  onClose = channelId.onClose;
  closure_12();
  const insets = giftIntentType(onClose[16])().insets;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function f() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = channelId(onClose[15]);
  const stateFromStores = channelId(onClose[17]).useStateFromStores(first, tmp7);
  first1.useRef(null);
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
  class M {
    constructor() {
      tmp2 = null != closure_3;
      tmp = closure_3;
      if (tmp2) {
        tmp3 = closure_5;
        tmp2 = null != closure_5;
      }
      if (tmp2) {
        tmp4 = closure_5;
        num = 0;
        tmp2 = 0 !== closure_5.url.length;
      }
      if (tmp2) {
        obj = { channel: null, giftIntentType: null, text: null, gif: null };
        obj.channel = tmp;
        tmp6 = giftIntentType;
        obj.giftIntentType = giftIntentType;
        tmp7 = closure_4;
        current = closure_4.current;
        str = undefined;
        tmp5 = sendGiftIntentGif;
        if (current != null) {
          str = current.getText();
        }
        if (str == null) {
          str = "";
        }
        obj.text = str;
        tmp8 = closure_5;
        obj.gif = closure_5;
        tmp5Result = tmp5(obj);
        tmp10 = onClose;
        tmp11 = onClose();
      }
      return;
    }
  }
  cResult[4] = stateFromStores;
  cResult[5] = giftIntentType;
  cResult[6] = onClose;
  cResult[7] = first1;
  cResult[8] = M;
  const tmpResult = channelId(onClose[17]);
}) : (function GiftIntentGifModalBody(channelId) {
  channelId = channelId.channelId;
  const giftIntentType = channelId.giftIntentType;
  const onClose = channelId.onClose;
  gif = undefined;
  const tmp = closure_12();
  const items = [ChannelStore];
  const stateFromStores = channelId(onClose[17]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const ref = gif.useRef(null);
  const tmp7 = stateFromStores(gif.useState(null), 2);
  gif = tmp7[0];
  closure_6 = tmp7[1];
  let obj = channelId(onClose[17]);
  let tmp2 = giftIntentType;
  const items1 = [stateFromStores, giftIntentType, gif, onClose];
  const callback = gif.useCallback((arg0) => {
    let src = arg0;
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
  const obj2 = { style: null, children: null };
  const items2 = [tmp.container, { paddingBottom: giftIntentType(onClose[16])().insets.bottom }];
  obj2.style = items2;
  const obj3 = { style: tmp.messageContainer, children: null };
  const callback1 = gif.useCallback(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = null != gif;
    }
    if (tmp2) {
      tmp2 = 0 !== gif.url.length;
    }
    if (tmp2) {
      const obj = { channel: stateFromStores, giftIntentType, text: null, gif: null };
      const current = ref.current;
      let str;
      if (current != null) {
        str = current.getText();
      }
      if (str == null) {
        str = "";
      }
      obj.text = str;
      obj.gif = gif;
      sendGiftIntentGif(obj);
      onClose();
    }
  }, items1);
  const obj4 = { ref, accessibilityLabel: null, placeholder: null };
  const intl = channelId(onClose[19]).intl;
  obj4.accessibilityLabel = intl.string(channelId(onClose[19]).t.ZV02cV);
  const ref1 = gif.useRef(null);
  obj4.placeholder = channelId(onClose[20]).getGiftIntentCustomMessagePlaceholder();
  obj3.children = closure_10(channelId(onClose[18]).TextArea, obj4);
  const items3 = [closure_10(closure_6, obj3), , ];
  const obj6 = { style: tmp.pickerContainer, children: null };
  const obj7 = { bottomSheetRef: ref1, channelId, guildId: null, initialQuery: null, inActionSheet: false, contentHorizontalPadding: null, selectedGifSrc: null, keyboardDismissMode: "on-drag", onPressGIF: null };
  let guild_id;
  const obj5 = channelId(onClose[20]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  obj7.guildId = guild_id;
  const intl2 = tmp4(tmp3[19]).intl;
  obj7.initialQuery = intl2.string(channelId(onClose[19]).t.jrtJi4);
  obj7.contentHorizontalPadding = tmp2(onClose[9]).space.PX_16;
  let src;
  if (gif != null) {
    src = gif.src;
  }
  obj7.selectedGifSrc = src;
  obj7.onPressGIF = callback;
  obj6.children = closure_10(giftIntentType(onClose[21]), obj7);
  items3[1] = closure_10(closure_6, obj6);
  const obj8 = { style: tmp.footer, children: null };
  const obj9 = { grow: true, variant: "primary", text: null, onPress: null, disabled: null };
  const intl3 = tmp4(tmp3[19]).intl;
  obj9.text = intl3.string(channelId(onClose[19]).t.TXNS7S);
  obj9.onPress = callback1;
  obj9.disabled = null == gif;
  const items4 = [closure_10(channelId(onClose[22]).Button, obj9), ];
  const obj10 = { grow: true, variant: "secondary", text: null, onPress: null };
  const intl4 = tmp4(tmp3[19]).intl;
  obj10.text = intl4.string(channelId(onClose[19]).t["ETE/oC"]);
  obj10.onPress = onClose;
  items4[1] = closure_10(channelId(onClose[22]).Button, obj10);
  obj8.children = items4;
  items3[2] = closure_11(closure_6, obj8);
  obj2.children = items3;
  return closure_11(closure_6, obj2);
});
const constants = { GIFT_INTENT_GIF: "GIFT_INTENT_GIF" };
ReactCompilerGating = fn(558);
let obj5 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/GiftIntentGifModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftIntentGifModal(channelId) {
  const cResult = channelId(onDismiss[15]).c(8);
  channelId = channelId.channelId;
  const giftIntentType = channelId.giftIntentType;
  onDismiss = channelId.onDismiss;
  if (cResult[0] !== onDismiss) {
    const fn = function n() {
      ModalActionCreatorsDefault.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    };
    cResult[0] = onDismiss;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  closure_3 = tmp4;
  if (cResult[2] === channelId) {
    if (cResult[3] === giftIntentType) {
      if (cResult[4] === tmp4) {
        let tmp5 = cResult[5];
      }
      const tmp7 = giftIntentType(tmp2[25])(tmp5);
      if (cResult[6] !== tmp7) {
        let obj2 = { initialRouteName: constants.GIFT_INTENT_GIF, screens: tmp7 };
        const tmp11 = closure_10(tmp(tmp2[26]).Navigator, obj2);
        cResult[6] = tmp7;
        cResult[7] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[7];
      }
      return tmp8;
    }
  }
  const fn2 = function f() {
    const obj = {};
    const obj2 = { title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.PQRuGc);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
    obj2.render = function render() {
      return closure_2_10(closure_2_15, { channelId, giftIntentType, onClose });
    };
    obj[constants.GIFT_INTENT_GIF] = obj2;
    return obj;
  };
  cResult[2] = channelId;
  cResult[3] = giftIntentType;
  cResult[4] = tmp4;
  cResult[5] = fn2;
  tmp5 = fn2;
  let obj = channelId(onDismiss[15]);
  tmp = channelId;
}) : (function GiftIntentGifModal(arg0) {
  ({ channelId: require, giftIntentType: importDefault, onDismiss } = arg0);
  const items = [onDismiss];
  closure_3 = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    if (onDismiss != null) {
      onDismiss();
    }
  }, items);
  const tmp = require("useInitialValue")(() => {
    const obj = {};
    const obj2 = { title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.PQRuGc);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
    obj2.render = function render() {
      return closure_2_10(closure_2_15, { channelId, giftIntentType, onClose });
    };
    obj[constants.GIFT_INTENT_GIF] = obj2;
    return obj;
  });
  return closure_10(require("Navigator").Navigator, {
    initialRouteName: constants.GIFT_INTENT_GIF,
    screens: require("useInitialValue")(() => {
      const obj = {};
      const obj2 = { title: null, headerLeft: null, render: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.PQRuGc);
      obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
      obj2.render = function render() {
        return closure_2_10(closure_2_15, { channelId, giftIntentType, onClose });
      };
      obj[constants.GIFT_INTENT_GIF] = obj2;
      return obj;
    })
  });
});