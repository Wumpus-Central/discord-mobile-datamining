// discord_app/modules/saved_messages/native/ForLaterMessageCard.tsx
import closure_3 from "jsxProd";
import importAllResult from "t";
import { View } from "expandEventProperties";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import jsxProd from "initialize";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
class ForLaterDeletedMessageCard {
  constructor(arg0) {
    savedMessage = global.savedMessage;
    tmp = jsxs();
    tmp3 = savedMessage;
    tmp4 = closure_2;
    tmp2 = jsxs;
    obj = { variant: "primary", border: "subtle", shadow: "none", style: items, children: null };
    items = [, ];
    ({ card: arr[0], deletedCard: arr[1] } = tmp);
    tmp5 = jsx;
    obj = { size: "xs", color: null };
    tmp6 = closure_1;
    obj[1] = require("Themes").colors.ICON_MUTED;
    items1 = [, , ];
    items1[0] = jsx(require("CircleErrorIcon").CircleErrorIcon, obj);
    obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.deletedText, children: null };
    if (null != savedMessage.saveData.dueAt) {
      intl2 = require("getSystemLocale").intl;
      stringResult = intl2.string(require("getSystemLocale").t["wuQm+j"]);
    } else {
      intl = require("getSystemLocale").intl;
      stringResult = intl.string(require("getSystemLocale").t.o572Fe);
    }
    obj1[3] = stringResult;
    items1[1] = tmp5(require("Text").Text, obj1);
    obj2 = { style: tmp.deletedActionButton, children: null };
    obj3 = { variant: "secondary", accessibilityLabel: null, size: "sm", icon: null, onPress: null };
    intl3 = require("getSystemLocale").intl;
    obj3[1] = intl3.string(require("getSystemLocale").t.SvXS1Z);
    obj3[3] = require("registerAsset");
    obj3[4] = function onPress() {
      return savedMessage(outer1_2[14]).removeSavedMessage(savedMessage.saveData);
    };
    obj2[1] = tmp5(require("IconButton").IconButton, obj3);
    items1[2] = tmp5(View, obj2);
    obj[4] = items1;
    return tmp2(require("PressableCard").Card, obj);
  }
}
let c4 = importAllResult;
({ AnalyticEvents: error, ChannelTypes: metroImportAll, Permissions: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { card: { gap: 16, marginBottom: 16 }, cardDivider: null, messagePreview: null, deletedCard: null, deletedText: null, deletedActionButton: null };
obj = { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
obj[1] = obj;
createCacheKey = { marginHorizontal: -16, marginTop: -9, marginBottom: -16, borderBottomLeftRadius: require("Themes").modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: require("Themes").modules.mobile.CARD_DEFAULT_RADIUS, overflow: "hidden" };
obj[2] = createCacheKey;
obj[3] = { flexDirection: "row", alignItems: "center", gap: 8 };
obj[4] = { flex: 1 };
obj[5] = { marginLeft: "auto" };
let closure_12 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ForLaterMessageCard(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const throttledNow = savedMessage.throttledNow;
  let savedMessageChannel;
  let tmp = callback3();
  let obj = savedMessage(10213);
  savedMessageChannel = obj.useSavedMessageChannel(savedMessage);
  const items = [savedMessage, savedMessageChannel];
  callback = importAllResult.useCallback(callback(function*() {
    if (message === 2) {
      message = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        message = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            message = 3;
            throw arg1;
          } else if (arg0 === 2) {
            message = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            function jumpTo() {
              const self = this;
              const apply = c0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            message = function _jumpTo() {
              const self = this;
              const tmp = outer2_3(function*() {
                if (c2 === 2) {
                  c2 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw arg1;
                  } else if (arg0 === 2) {
                    let obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    return { value: "T", done: null };
                  }
                } else {
                  try {
                    c2 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c2 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        const callback = tmp4;
                        let obj2 = callback(outer2_2[15]);
                        c1 = 1;
                        c2 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = obj2.savedMessageJumpToMessage(outer1_0, c1);
                        return obj1;
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      obj2 = { value: null, done: true };
                      obj2[0] = arg1;
                      return obj2;
                    } else {
                      let arr = outer2_1(outer2_2[16]);
                      arr = arr.pop();
                      const obj3 = { channel_id: null, message_id: null, message_author_id: null, type: null, due_duration: null };
                      obj3[0] = outer1_0.saveData.channelId;
                      obj3[1] = outer1_0.saveData.messageId;
                      const message = outer1_0.message;
                      let id;
                      if (message != null) {
                        id = message.author.id;
                      }
                      obj3[2] = id;
                      if (null != outer1_0.saveData.dueAt) {
                        let BOOKMARK = callback(outer2_2[18]).SavedMessageSortTypes.REMINDER;
                      } else {
                        BOOKMARK = callback(outer2_2[18]).SavedMessageSortTypes.BOOKMARK;
                      }
                      obj3[3] = BOOKMARK;
                      let diffResult;
                      if (null != outer1_0.saveData.dueAt) {
                        obj = outer2_1(outer2_2[19])();
                        diffResult = obj.diff(outer1_0.saveData.dueAt);
                      }
                      obj3[4] = diffResult;
                      outer2_1(outer2_2[17]).track(outer2_7.FOR_LATER_SAVED_MESSAGE_JUMP, obj3);
                      c2 = 3;
                      return { value: "T", done: null };
                    }
                  } catch (tmp26) {
                    c2 = tmp;
                    throw tmp26;
                  }
                }
              });
              let c0 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            if (v0(outer1_2[20])(message.message, jumpTo)) {
              v0 = 1;
              message = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = jumpTo();
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          message = 3;
          throw arg1;
        } else if (arg0 === 2) {
          message = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        message = 3;
        return { value: "T", done: null };
      } catch (tmp8) {
        message = tmp;
        throw tmp8;
      }
    }
  }), items);
  let obj1 = savedMessage(589);
  const items1 = [getUncachedChannelPermissions];
  if (null != savedMessage.message) {
    if (null != savedMessageChannel) {
      if (obj1.useStateFromStores(items1, () => {
        let type;
        if (savedMessageChannel != null) {
          type = obj.type;
        }
        let tmp2 = type === outer1_8.UNKNOWN;
        if (!tmp2) {
          let isPrivateResult;
          if (obj != null) {
            isPrivateResult = obj.isPrivate();
          }
          let canResult = isPrivateResult;
          if (!canResult) {
            canResult = outer1_6.can(outer1_9.VIEW_CHANNEL, obj);
          }
          tmp2 = canResult;
        }
        return tmp2;
      })) {
        obj = { savedMessage: null, jumpToMessage: null, throttledNow: null };
        obj[0] = savedMessage;
        obj[1] = callback;
        obj[2] = throttledNow;
        const tmp8 = callback2(savedMessageChannel(12493), obj);
        obj = { variant: "primary", border: "subtle", shadow: "none", style: null, onPress: null, children: null };
        obj[3] = tmp.card;
        obj[4] = callback;
        let tmp6Result = null;
        if (null != savedMessage.saveData.dueAt) {
          obj1 = { savedMessage: null, throttledNow: null, actions: null };
          obj1[0] = savedMessage;
          obj1[1] = throttledNow;
          obj1[2] = tmp8;
          tmp6Result = tmp6(tmp2(12496).ForLaterCardReminderHeader, obj1);
        }
        const items2 = [tmp6Result, , , ];
        let obj2 = { channel: null, actions: null };
        obj2[0] = savedMessageChannel;
        let tmp12 = null;
        if (null == savedMessage.saveData.dueAt) {
          tmp12 = tmp8;
        }
        obj2[1] = tmp12;
        items2[1] = callback2(tmp2(12497).ForLaterCardHeader, obj2);
        let obj3 = { style: null };
        obj3[0] = tmp.cardDivider;
        items2[2] = callback2(View, obj3);
        const obj4 = { style: null, children: null };
        obj4[0] = tmp.messagePreview;
        const obj5 = { message: null, lineClamp: 2, maxHeight: 250 };
        obj5[0] = savedMessage.message;
        obj4[1] = callback2(tmp2(12498).ForLaterMessageRow, obj5);
        items2[3] = callback2(View, obj4);
        obj[5] = items2;
        return closure_11(tmp2(5375).Card, obj);
      }
    }
  }
  return callback2(ForLaterDeletedMessageCard, { savedMessage });
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/saved_messages/native/ForLaterMessageCard.tsx");

export default memoResult;
export { ForLaterDeletedMessageCard };