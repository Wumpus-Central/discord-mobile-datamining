// discord_app/modules/premium/gifting/native/GiftIntentGifModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
let closure_13 = async function _sendGiftIntentGif(arg0) {
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
        let obj6 = closure_130_1(closure_130_2[10]);
        const id2 = closure_129_0.id;
        let obj2 = { location: closure_130_9.GIFTING };
        c3 = 2;
        c4 = 1;
        let obj3 = {
          value: obj6.sendMessage(
            id2,
            closure_130_1(closure_130_2[11]).parse(closure_129_0, closure_129_2),
            true,
            obj2,
          ),
          done: false,
        };
        return obj3;
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
    const obj5 = { gift_intent_type: closure_129_1, is_custom_message: closure_129_4, location_stack: null };
    const items = [closure_130_1(closure_130_2[13]).PREMIUM_GIFT_INTENT_CARD];
    obj5.location_stack = items;
    closure_130_1(closure_130_2[12]).track(closure_130_8.GIFT_INTENT_MESSAGE_SENT, obj5);
    c4 = 3;
    return { value: "HermesInternal", done: null };
  }
  obj2 = closure_130_1(closure_130_2[10]);
  const id = closure_129_0.id;
  obj3 = closure_130_1(closure_130_2[11]);
  obj6 = { location: closure_130_9.GIFTING };
  await obj2.sendMessage(id, obj3.parse(closure_129_0, closure_129_3.url), true, obj6);
  closure_1 = tmp2;
  ({ channel: closure_129_0, giftIntentType: closure_129_1, text: closure_129_2, gif: closure_129_3 } = closure_0);
  return "PX_16";
};
function GiftIntentGifModalBody(channelId) {
  channelId = channelId.channelId;
  const giftIntentType = channelId.giftIntentType;
  const onClose = channelId.onClose;
  let gif;
  const tmp = closure_12();
  let obj = channelId(onClose[15]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const ref = gif.useRef(null);
  const tmp7 = stateFromStores(gif.useState(null), 2);
  gif = tmp7[0];
  closure_6 = tmp7[1];
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
  obj = { style: null, children: null };
  const items2 = [tmp.container, { paddingBottom: giftIntentType(onClose[14])().insets.bottom }];
  obj.style = items2;
  obj = { style: tmp.messageContainer, children: null };
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
      !(function sendGiftIntentGif() {
        const self = this;
        const apply = closure_1_13.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(obj);
      onClose();
    }
  }, items1);
  const obj1 = { ref, accessibilityLabel: null, placeholder: null };
  const intl = channelId(onClose[17]).intl;
  obj1.accessibilityLabel = intl.string(channelId(onClose[17]).t.ZV02cV);
  let obj4 = channelId(onClose[18]);
  obj1.placeholder = obj4.getGiftIntentCustomMessagePlaceholder();
  obj.children = closure_10(channelId(onClose[16]).TextArea, obj1);
  const items3 = [closure_10(closure_6, obj), ,];
  const obj2 = { style: tmp.pickerContainer, children: null };
  const obj3 = {
    bottomSheetRef: gif.useRef(null),
    channelId,
    guildId: null,
    initialQuery: null,
    inActionSheet: false,
    contentHorizontalPadding: null,
    selectedGifSrc: null,
    keyboardDismissMode: "on-drag",
    onPressGIF: null,
  };
  let guild_id;
  const ref1 = gif.useRef(null);
  let tmp2 = giftIntentType;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  obj3.guildId = guild_id;
  const intl2 = tmp4(tmp3[17]).intl;
  obj3.initialQuery = intl2.string(channelId(onClose[17]).t.jrtJi4);
  obj3.contentHorizontalPadding = tmp2(onClose[9]).space.PX_16;
  let src;
  if (gif != null) {
    src = gif.src;
  }
  obj3.selectedGifSrc = src;
  obj3.onPressGIF = callback;
  obj2.children = closure_10(giftIntentType(onClose[19]), obj3);
  items3[1] = closure_10(closure_6, obj2);
  obj4 = { style: tmp.footer, children: null };
  const obj5 = { grow: true, variant: "primary", text: null, onPress: null, disabled: null };
  const intl3 = tmp4(tmp3[17]).intl;
  obj5.text = intl3.string(channelId(onClose[17]).t.TXNS7S);
  obj5.onPress = callback1;
  obj5.disabled = null == gif;
  const items4 = [closure_10(channelId(onClose[20]).Button, obj5)];
  const obj6 = { grow: true, variant: "secondary", text: null, onPress: null };
  const intl4 = tmp4(tmp3[17]).intl;
  obj6.text = intl4.string(channelId(onClose[17]).t["ETE/oC"]);
  obj6.onPress = onClose;
  items4[1] = closure_10(channelId(onClose[20]).Button, obj6);
  obj4.children = items4;
  items3[2] = closure_11(closure_6, obj4);
  obj.children = items3;
  return closure_11(closure_6, obj);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const MessageSendLocation = fn(4553).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { container: null, messageContainer: null, pickerContainer: null, footer: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.messageContainer = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_8,
};
createStyles.pickerContainer = { flex: 1 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
createStyles.footer = {
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
};
let closure_12 = createStyles.createStyles(createStyles);
const constants = { GIFT_INTENT_GIF: "GIFT_INTENT_GIF" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/GiftIntentGifModal.tsx");

export default function GiftIntentGifModal(arg0) {
  ({ channelId: require, giftIntentType: importDefault, onDismiss } = arg0);
  const items = [onDismiss];
  closure_3 = noop.useCallback(() => {
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
    if (onDismiss != null) {
      onDismiss();
    }
  }, items);
  const tmp = require("useInitialValue")(() => {
    let obj = {};
    obj = { title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.PQRuGc);
    obj.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
    obj.render = function render() {
      return closure_2_10(GiftIntentGifModalBody, { channelId, giftIntentType, onClose });
    };
    obj[constants.GIFT_INTENT_GIF] = obj;
    return obj;
  });
  return closure_10(require("Navigator").Navigator, {
    initialRouteName: constants.GIFT_INTENT_GIF,
    screens: require("useInitialValue")(() => {
      let obj = {};
      obj = { title: null, headerLeft: null, render: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.PQRuGc);
      obj.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
      obj.render = function render() {
        return closure_2_10(GiftIntentGifModalBody, { channelId, giftIntentType, onClose });
      };
      obj[constants.GIFT_INTENT_GIF] = obj;
      return obj;
    }),
  });
}
