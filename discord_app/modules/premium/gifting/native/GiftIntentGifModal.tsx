// === Module 11389: _sendGiftIntentGif ===

// Module 11389 (_sendGiftIntentGif)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "ensureGuildLoaded" /* 1387 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING" /* 4471 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function _sendGiftIntentGif() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === url) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = tmp5;
              let callback = tmp2;
              let user;
              callback = undefined;
              c2 = undefined;
              url = undefined;
              ({ channel: c0, giftIntentType: c1, text: c2, gif: c3 } = user);
              c4 = undefined;
              url = 1;
              c4 = 1;
              return { value: "PX_16", done: null };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                c4 = c2.trim().length > 0;
                if (c4) {
                  let obj6 = callback(c2[10]);
                  const id2 = user.id;
                  let obj7 = callback(c2[11]);
                  let obj2 = { location: null };
                  obj2[0] = constants2.GIFTING;
                  url = 2;
                  c4 = 1;
                  let obj3 = { value: null, done: false };
                  obj3[0] = obj6.sendMessage(id2, obj7.parse(user, c2), true, obj2);
                  return obj3;
                }
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const obj5 = { gift_intent_type: null, is_custom_message: null, location_stack: null };
              obj5[0] = callback;
              obj5[1] = c4;
              const items = [callback(c2[13]).PREMIUM_GIFT_INTENT_CARD];
              obj5[2] = items;
              callback(c2[12]).track(constants.GIFT_INTENT_MESSAGE_SENT, obj5);
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
            obj2 = callback(c2[10]);
            const id = user.id;
            obj3 = callback(c2[11]);
            obj6 = { location: null };
            obj6[0] = constants2.GIFTING;
            url = 3;
            c4 = 1;
            obj7 = { value: null, done: false };
            obj7[0] = obj2.sendMessage(id, obj3.parse(user, url.url), true, obj6);
            return obj7;
          }
        } catch (tmp33) {
          c4 = tmp;
          throw tmp33;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function GiftIntentGifModalBody(channelId) {
  channelId = channelId.channelId;
  const giftIntentType = channelId.giftIntentType;
  const onClose = channelId.onClose;
  let stateFromStores;
  let ref;
  let first;
  closure_6 = undefined;
  const tmp = callback3();
  let obj = channelId(onClose[15]);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getChannel(channelId));
  ref = first.useRef(null);
  const tmp7 = stateFromStores(first.useState(null), 2);
  first = tmp7[0];
  closure_6 = tmp7[1];
  const items1 = [stateFromStores, giftIntentType, first, onClose];
  const callback = first.useCallback((arg0) => {
    closure_0 = arg0;
    callback((src) => {
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
  obj = { style: items2, children: null };
  items2 = [tmp.container, { paddingBottom: giftIntentType(onClose[14])().insets.bottom }];
  obj = { style: tmp.messageContainer, children: null };
  const callback1 = first.useCallback(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = null != first;
    }
    if (tmp2) {
      tmp2 = 0 !== first.url.length;
    }
    if (tmp2) {
      const obj = { channel: null, giftIntentType: null, text: null, gif: null };
      obj[0] = stateFromStores;
      obj[1] = giftIntentType;
      const current = ref.current;
      let str;
      if (current != null) {
        str = current.getText();
      }
      if (str == null) {
        str = "";
      }
      obj[2] = str;
      obj[3] = first;
      !(function sendGiftIntentGif(arg0) {
        const self = this;
        const apply = closure_13.apply;
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
  obj1 = { ref, accessibilityLabel: null, placeholder: null };
  const intl = channelId(onClose[17]).intl;
  obj1[1] = intl.string(channelId(onClose[17]).t.ZV02cV);
  let obj4 = channelId(onClose[18]);
  obj1[2] = obj4.getGiftIntentCustomMessagePlaceholder();
  obj[1] = callback2(channelId(onClose[16]).TextArea, obj1);
  const items3 = [callback2(closure_6, obj), , ];
  const obj2 = { style: tmp.pickerContainer, children: null };
  const obj3 = { bottomSheetRef: first.useRef(null), channelId, guildId: null, initialQuery: null, inActionSheet: false, contentHorizontalPadding: null, selectedGifSrc: null, keyboardDismissMode: "on-drag", onPressGIF: null };
  let guild_id;
  const ref1 = first.useRef(null);
  let tmp2 = giftIntentType;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  obj3[2] = guild_id;
  const intl2 = tmp4(tmp3[17]).intl;
  obj3[3] = intl2.string(channelId(onClose[17]).t.jrtJi4);
  obj3[5] = tmp2(onClose[9]).space.PX_16;
  let src;
  if (first != null) {
    src = first.src;
  }
  obj3[6] = src;
  obj3[8] = callback;
  obj2[1] = callback2(giftIntentType(onClose[19]), obj3);
  items3[1] = callback2(closure_6, obj2);
  obj4 = { style: tmp.footer, children: null };
  const obj5 = { grow: true, variant: "primary", text: null, onPress: null, disabled: null };
  const intl3 = tmp4(tmp3[17]).intl;
  obj5[2] = intl3.string(channelId(onClose[17]).t.TXNS7S);
  obj5[3] = callback1;
  obj5[4] = null == first;
  const items4 = [callback2(channelId(onClose[20]).Button, obj5), ];
  const obj6 = { grow: true, variant: "secondary", text: null, onPress: null };
  const intl4 = tmp4(tmp3[17]).intl;
  obj6[2] = intl4.string(channelId(onClose[17]).t["ETE/oC"]);
  obj6[3] = onClose;
  items4[1] = callback2(channelId(onClose[20]).Button, obj6);
  obj4[1] = items4;
  items3[2] = closure_11(closure_6, obj4);
  obj[1] = items3;
  return closure_11(closure_6, obj);
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, messageContainer: null, pickerContainer: null, footer: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[2] = { flex: 1 };
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[3] = { gap: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_8 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let closure_15 = { GIFT_INTENT_GIF: "GIFT_INTENT_GIF" };
let obj2 = { gap: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/GiftIntentGifModal.tsx");

export default function GiftIntentGifModal(arg0) {
  ({ channelId: require, giftIntentType: importDefault, onDismiss } = arg0);
  closure_3 = undefined;
  const items = [onDismiss];
  closure_3 = React.useCallback(() => {
    let arr = closure_1_1(onDismiss[21]);
    arr = arr.pop();
    if (onDismiss != null) {
      onDismiss();
    }
  }, items);
  const tmp = importDefault(onDismiss[22])(() => {
    let obj = {};
    obj = { title: null, headerLeft: null, render: null };
    const intl = closure_1_0(onDismiss[17]).intl;
    obj[0] = intl.string(closure_1_0(onDismiss[17]).t.PQRuGc);
    obj[1] = closure_1_0(onDismiss[23]).getHeaderCloseButton(closure_3);
    obj[2] = function render() {
      return closure_1_10(closure_1_14, { channelId: closure_0, giftIntentType: closure_1, onClose: closure_3 });
    };
    obj[closure_1_15.GIFT_INTENT_GIF] = obj;
    return obj;
  });
  return callback2(require(onDismiss[24]).Navigator, {
    initialRouteName: constants.GIFT_INTENT_GIF,
    screens: importDefault(onDismiss[22])(() => {
      let obj = {};
      obj = { title: null, headerLeft: null, render: null };
      const intl = closure_1_0(onDismiss[17]).intl;
      obj[0] = intl.string(closure_1_0(onDismiss[17]).t.PQRuGc);
      obj[1] = closure_1_0(onDismiss[23]).getHeaderCloseButton(closure_3);
      obj[2] = function render() {
        return closure_1_10(closure_1_14, { channelId: closure_0, giftIntentType: closure_1, onClose: closure_3 });
      };
      obj[closure_1_15.GIFT_INTENT_GIF] = obj;
      return obj;
    })
  });
};