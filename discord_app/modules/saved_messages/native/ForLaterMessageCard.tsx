// === Module 12651: ForLaterMessageCard ===

// Module 12651 (ForLaterMessageCard)
import nativeDefault from "native" /* 587 */;
import _modDef5050 from "module_5050" /* 5050 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 12652 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4750 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: closure_7, ChannelTypes: closure_8, Permissions: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj = { card: { gap: 16, marginBottom: 16 }, cardDivider: { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED }, deletedCard: { flexDirection: "row", alignItems: "center", gap: 8 }, deletedText: { flex: 1 }, deletedActionButton: { marginLeft: "auto" } };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterDeletedMessageCard(savedMessage) {
  const cResult = savedMessage(576).c(19);
  savedMessage = savedMessage.savedMessage;
  const tmp4 = closure_12();
  if (cResult[0] === tmp4.card) {
    if (cResult[1] === tmp4.deletedCard) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const tmp10 = closure_10(tmp(6289).CircleErrorIcon, obj2);
      cResult[3] = tmp10;
      let tmp7 = tmp10;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== savedMessage.saveData.dueAt) {
      if (null != savedMessage.saveData.dueAt) {
        const intl2 = tmp(1126).intl;
        let stringResult = intl2.string(tmp(1126).t["wuQm+j"]);
      } else {
        const intl = tmp(1126).intl;
        stringResult = intl.string(tmp(1126).t.o572Fe);
      }
      cResult[4] = savedMessage.saveData.dueAt;
      cResult[5] = stringResult;
    } else {
      if (cResult[6] === tmp4.deletedText) {
        if (cResult[7] === tmp11) {
          let tmp15 = cResult[8];
        }
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult1 = intl3.string(tmp(1126).t.SvXS1Z);
          cResult[9] = stringResult1;
          let tmp18 = stringResult1;
        } else {
          tmp18 = cResult[9];
        }
        if (cResult[10] !== savedMessage.saveData) {
          const obj3 = {
            variant: "secondary",
            accessibilityLabel: tmp18,
            size: "sm",
            icon: _modDef5050,
            onPress() {
                      return SavedMessageHelpers.removeSavedMessage(savedMessage.saveData);
                    }
          };
          const tmp23 = closure_10(tmp(7573).IconButton, obj3);
          cResult[10] = savedMessage.saveData;
          cResult[11] = tmp23;
          let tmp20 = tmp23;
        } else {
          tmp20 = cResult[11];
        }
        if (cResult[12] === tmp4.deletedActionButton) {
          if (cResult[13] === tmp20) {
            let tmp24 = cResult[14];
          }
          if (cResult[15] === tmp5) {
            if (cResult[16] === tmp15) {
              if (cResult[17] === tmp24) {
                let tmp28 = cResult[18];
              }
              return tmp28;
            }
          }
          const obj4 = { variant: "primary", border: "subtle", shadow: "none", style: tmp5, children: null };
          const items = [tmp7, tmp15, tmp24];
          obj4.children = items;
          const tmp30 = closure_11(tmp(6181).Card, obj4);
          cResult[15] = tmp5;
          cResult[16] = tmp15;
          cResult[17] = tmp24;
          cResult[18] = tmp30;
          tmp28 = tmp30;
        }
        const obj5 = { style: tmp4.deletedActionButton, children: tmp20 };
        const tmp27 = closure_10(View, obj5);
        cResult[12] = tmp4.deletedActionButton;
        cResult[13] = tmp20;
        cResult[14] = tmp27;
        tmp24 = tmp27;
      }
      const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp4.deletedText, children: cResult[5] };
      const tmp17 = closure_10(tmp(5088).Text, obj6);
      cResult[6] = tmp4.deletedText;
      cResult[7] = cResult[5];
      cResult[8] = tmp17;
      tmp15 = tmp17;
    }
  }
  const items1 = [, ];
  ({ card: arr[0], deletedCard: arr[1] } = tmp4);
  cResult[0] = tmp4.card;
  cResult[1] = tmp4.deletedCard;
  cResult[2] = items1;
  tmp5 = items1;
  const obj = savedMessage(576);
}) : (function ForLaterDeletedMessageCard(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const tmp = closure_12();
  const obj = { variant: "primary", border: "subtle", shadow: "none", style: null, children: null };
  const items = [, ];
  ({ card: arr[0], deletedCard: arr[1] } = tmp);
  obj.style = items;
  const items1 = [closure_10(savedMessage(6289).CircleErrorIcon, { size: "xs", color: nativeDefault.colors.ICON_MUTED }), , ];
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.deletedText, children: null };
  if (null != savedMessage.saveData.dueAt) {
    const intl2 = tmp3(1126).intl;
    let stringResult = intl2.string(tmp3(1126).t["wuQm+j"]);
  } else {
    const intl = tmp3(1126).intl;
    stringResult = intl.string(tmp3(1126).t.o572Fe);
  }
  obj3.children = stringResult;
  items1[1] = closure_10(savedMessage(5088).Text, obj3);
  const obj4 = { style: tmp.deletedActionButton, children: null };
  const obj5 = { variant: "secondary", accessibilityLabel: null, size: "sm", icon: null, onPress: null };
  const intl3 = tmp3(1126).intl;
  obj5.accessibilityLabel = intl3.string(savedMessage(1126).t.SvXS1Z);
  obj5.icon = _modDef5050;
  obj5.onPress = function onPress() {
    return SavedMessageHelpers.removeSavedMessage(savedMessage.saveData);
  };
  obj4.children = closure_10(savedMessage(7573).IconButton, obj5);
  items1[2] = closure_10(View, obj4);
  obj.children = items1;
  return closure_11(savedMessage(6181).Card, obj);
});
let closure_13 = tmp4;
ReactCompilerGating = fn(558);
let obj3 = { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageCard.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterMessageCard(savedMessage) {
  const cResult = require("c").c(31);
  savedMessage = savedMessage.savedMessage;
  _require = savedMessage;
  closure_12();
  let obj = require("c");
  const tmp = _require;
  const savedMessageChannel = require("SavedMessageUtils").useSavedMessageChannel(savedMessage);
  if (cResult[0] === savedMessageChannel) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [PermissionStore];
      cResult[3] = items;
    }
    if (cResult[4] !== savedMessageChannel) {
      class T {
        constructor() {
          obj = closure_1;
          type = undefined;
          if (closure_1 != null) {
            type = obj.type;
          }
          tmp2 = type === ChannelTypes.UNKNOWN;
          if (!tmp2) {
            isPrivateResult = undefined;
            if (obj != null) {
              isPrivateResult = obj.isPrivate();
            }
            canResult = isPrivateResult;
            if (!canResult) {
              tmp5 = closure_6;
              tmp6 = Permissions;
              canResult = closure_6.can(Permissions.VIEW_CHANNEL, obj);
            }
            tmp2 = canResult;
          }
          return tmp2;
        }
      }
      cResult[4] = savedMessageChannel;
      cResult[5] = T;
    } else {
      class T {
        constructor() {
          obj = closure_1;
          type = undefined;
          if (closure_1 != null) {
            type = obj.type;
          }
          tmp2 = type === ChannelTypes.UNKNOWN;
          if (!tmp2) {
            isPrivateResult = undefined;
            if (obj != null) {
              isPrivateResult = obj.isPrivate();
            }
            canResult = isPrivateResult;
            if (!canResult) {
              tmp5 = closure_6;
              tmp6 = Permissions;
              canResult = closure_6.can(Permissions.VIEW_CHANNEL, obj);
            }
            tmp2 = canResult;
          }
          return tmp2;
        }
      }
    }
    tmp(504);
    if (null != savedMessage.message) {
      class T {
        constructor() {
          obj = closure_1;
          type = undefined;
          if (closure_1 != null) {
            type = obj.type;
          }
          tmp2 = type === ChannelTypes.UNKNOWN;
          if (!tmp2) {
            isPrivateResult = undefined;
            if (obj != null) {
              isPrivateResult = obj.isPrivate();
            }
            canResult = isPrivateResult;
            if (!canResult) {
              tmp5 = closure_6;
              tmp6 = Permissions;
              canResult = closure_6.can(Permissions.VIEW_CHANNEL, obj);
            }
            tmp2 = canResult;
          }
          return tmp2;
        }
      }
    }
    if (cResult[6] !== savedMessage) {
      class T {
        constructor() {
          obj = closure_1;
          type = undefined;
          if (closure_1 != null) {
            type = obj.type;
          }
          tmp2 = type === ChannelTypes.UNKNOWN;
          if (!tmp2) {
            isPrivateResult = undefined;
            if (obj != null) {
              isPrivateResult = obj.isPrivate();
            }
            canResult = isPrivateResult;
            if (!canResult) {
              tmp5 = closure_6;
              tmp6 = Permissions;
              canResult = closure_6.can(Permissions.VIEW_CHANNEL, obj);
            }
            tmp2 = canResult;
          }
          return tmp2;
        }
      }
      let obj3 = { savedMessage };
      const tmp15 = closure_10(closure_13, obj3);
      cResult[6] = savedMessage;
      cResult[7] = tmp15;
      const tmp13 = tmp15;
    } else {
      class T {
        constructor() {
          obj = closure_1;
          type = undefined;
          if (closure_1 != null) {
            type = obj.type;
          }
          tmp2 = type === ChannelTypes.UNKNOWN;
          if (!tmp2) {
            isPrivateResult = undefined;
            if (obj != null) {
              isPrivateResult = obj.isPrivate();
            }
            canResult = isPrivateResult;
            if (!canResult) {
              tmp5 = closure_6;
              tmp6 = Permissions;
              canResult = closure_6.can(Permissions.VIEW_CHANNEL, obj);
            }
            tmp2 = canResult;
          }
          return tmp2;
        }
      }
    }
    return tmp13;
  }
  _require = asyncGeneratorStep(async () => {
    if (message === 2) {
      message = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        message = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            message = 3;
            throw value;
          } else if (arg0 === 2) {
            message = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp5 = (() => {
              closure_0 = closure_1_3(function*() {
                if (c2 === 2) {
                  c2 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: "+51" };
                  }
                } else {
                  try {
                    c2 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        c1 = 1;
                        c2 = 1;
                        const obj5 = { value: tmp4(12656).savedMessageJumpToMessage(tmp4, c1), done: false };
                        return obj5;
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj6 = { value, done: true };
                      return obj6;
                    } else {
                      closure_2_1(5934).pop();
                      const arr = closure_2_1(5934);
                      const obj8 = { channel_id: tmp4.saveData.channelId, message_id: tmp4.saveData.messageId, message_author_id: null, type: null, due_duration: null };
                      message = tmp4.message;
                      let id;
                      if (message != null) {
                        id = message.author.id;
                      }
                      obj8.message_author_id = id;
                      if (null != tmp4.saveData.dueAt) {
                        let BOOKMARK = tmp4(9681).SavedMessageSortTypes.REMINDER;
                      } else {
                        BOOKMARK = tmp4(9681).SavedMessageSortTypes.BOOKMARK;
                      }
                      obj8.type = BOOKMARK;
                      let diffResult;
                      if (null != tmp4.saveData.dueAt) {
                        diffResult = closure_2_1(4702)().diff(tmp4.saveData.dueAt);
                        const obj = closure_2_1(4702)();
                      }
                      obj8.due_duration = diffResult;
                      closure_2_1(1265).track(constants.FOR_LATER_SAVED_MESSAGE_JUMP, obj8);
                      c2 = 3;
                      return { value: "IconComponent", done: "+51" };
                    }
                  } catch (tmp26) {
                    c2 = tmp;
                    throw tmp26;
                  }
                }
              });
              return function jumpTo() {
                const self = this;
                const apply = closure_0.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
            })();
            if (savedMessageChannel(dependencyMap[22])(message.message, tmp5)) {
              c1 = 1;
              message = 1;
              let obj4 = { value: tmp5(), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          message = 3;
          throw value;
        } else if (arg0 === 2) {
          message = 3;
          let obj = { value, done: true };
          return obj;
        }
        message = 3;
        return { value: "IconComponent", done: "+51" };
      } catch (tmp9) {
        message = tmp;
        throw tmp9;
      }
    }
  });
  function t1() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = savedMessageChannel;
  cResult[1] = savedMessage;
  cResult[2] = t1;
  let obj2 = require("SavedMessageUtils");
}) : (function ForLaterMessageCard(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const throttledNow = savedMessage.throttledNow;
  const tmp = closure_12();
  const savedMessageChannel = savedMessage(12656).useSavedMessageChannel(savedMessage);
  const items = [savedMessage, savedMessageChannel];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c0 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            function jumpTo() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            const v3 = async function _jumpTo2() {
              if (c2 === 2) {
                c2 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: "+51" };
                }
              } else {
                try {
                  c2 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      c1 = 1;
                      c2 = 1;
                      const obj5 = { value: v3(12656).savedMessageJumpToMessage(tmp4, c1), done: false };
                      return obj5;
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    v1(5934).pop();
                    const arr = v1(5934);
                    const obj8 = { channel_id: tmp4.saveData.channelId, message_id: tmp4.saveData.messageId, message_author_id: null, type: null, due_duration: null };
                    const message = tmp4.message;
                    let id;
                    if (message != null) {
                      id = message.author.id;
                    }
                    obj8.message_author_id = id;
                    if (null != tmp4.saveData.dueAt) {
                      let BOOKMARK = v3(9681).SavedMessageSortTypes.REMINDER;
                    } else {
                      BOOKMARK = v3(9681).SavedMessageSortTypes.BOOKMARK;
                    }
                    obj8.type = BOOKMARK;
                    let diffResult;
                    if (null != tmp4.saveData.dueAt) {
                      diffResult = v1(4702)().diff(tmp4.saveData.dueAt);
                      const obj = v1(4702)();
                    }
                    obj8.due_duration = diffResult;
                    v1(1265).track(constants.FOR_LATER_SAVED_MESSAGE_JUMP, obj8);
                    c2 = 3;
                    return { value: "IconComponent", done: "+51" };
                  }
                } catch (tmp26) {
                  c2 = tmp;
                  throw tmp26;
                }
              }
            };
            if (v1(dependencyMap[22])(savedMessage.message, jumpTo)) {
              v1 = 1;
              c0 = 1;
              let obj4 = { value: jumpTo(), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          let obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "IconComponent", done: "+51" };
      } catch (tmp8) {
        c0 = tmp;
        throw tmp8;
      }
    }
  }), items);
  let obj = savedMessage(12656);
  const items1 = [PermissionStore];
  if (null != savedMessage.message) {
    if (null != savedMessageChannel) {
      if (obj2.useStateFromStores(items1, () => {
        let type;
        if (savedMessageChannel != null) {
          type = savedMessageChannel.type;
        }
        let tmp2 = type === constants.UNKNOWN;
        if (!tmp2) {
          let isPrivateResult;
          if (savedMessageChannel != null) {
            isPrivateResult = savedMessageChannel.isPrivate();
          }
          let canResult = isPrivateResult;
          if (!canResult) {
            canResult = PermissionStore.can(constants2.VIEW_CHANNEL, savedMessageChannel);
          }
          tmp2 = canResult;
        }
        return tmp2;
      })) {
        let obj3 = { savedMessage, jumpToMessage: callback, throttledNow };
        const tmp8 = closure_10(savedMessageChannel(12658), obj3);
        let obj4 = { variant: "primary", border: "subtle", shadow: "none", style: tmp.card, onPress: callback, children: null };
        let tmp6Result = null;
        if (null != savedMessage.saveData.dueAt) {
          let obj5 = { savedMessage, throttledNow, actions: tmp8 };
          tmp6Result = closure_10(tmp2(12667).ForLaterCardReminderHeader, obj5);
        }
        const items2 = [tmp6Result, , , ];
        let obj6 = { channel: savedMessageChannel, actions: null };
        let tmp12 = null;
        if (null == savedMessage.saveData.dueAt) {
          tmp12 = tmp8;
        }
        obj6.actions = tmp12;
        items2[1] = closure_10(tmp2(12669).ForLaterCardHeader, obj6);
        const obj7 = { style: tmp.cardDivider };
        items2[2] = closure_10(View, obj7);
        let obj8 = { message: savedMessage.message, lineClamp: 2, maxHeight: 250 };
        items2[3] = closure_10(tmp2(12670).ForLaterMessageRow, obj8);
        obj4.children = items2;
        return closure_11(tmp2(6181).Card, obj4);
      }
    }
  }
  return closure_10(closure_13, { savedMessage });
}));
export const ForLaterDeletedMessageCard = tmp4;