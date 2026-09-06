// discord_app/modules/saved_messages/native/ForLaterMessageCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4519 from "../../../../_runtime/metro/04519__.js";
import SavedMessageHelpers from "../SavedMessageHelpers.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../stores/PermissionStore.tsx";

require = fn;
class ForLaterDeletedMessageCard {
  constructor(arg0) {
    savedMessage = global.savedMessage;
    tmp = closure_12();
    tmp3 = savedMessage;
    tmp4 = closure_2;
    tmp2 = jsxs;
    obj = { variant: "primary", border: "subtle", shadow: "none", style: null, children: null };
    items = [,];
    ({ card: arr[0], deletedCard: arr[1] } = tmp);
    obj.style = items;
    tmp5 = jsx;
    obj = { size: "xs", color: closure_1(closure_2[7]).colors.ICON_MUTED };
    tmp6 = closure_1;
    items1 = [, ,];
    items1[0] = jsx(savedMessage(closure_2[9]).CircleErrorIcon, obj);
    obj1 = {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      style: tmp.deletedText,
      children: null,
    };
    if (null != savedMessage.saveData.dueAt) {
      intl2 = tmp3(tmp4[11]).intl;
      stringResult = intl2.string(tmp3(tmp4[11]).t["wuQm+j"]);
    } else {
      intl = tmp3(tmp4[11]).intl;
      stringResult = intl.string(tmp3(tmp4[11]).t.o572Fe);
    }
    obj1.children = stringResult;
    items1[1] = tmp5(savedMessage(closure_2[10]).Text, obj1);
    obj2 = { style: tmp.deletedActionButton, children: null };
    obj3 = { variant: "secondary", accessibilityLabel: null, size: "sm", icon: null, onPress: null };
    intl3 = tmp3(tmp4[11]).intl;
    obj3.accessibilityLabel = intl3.string(tmp3(tmp4[11]).t.SvXS1Z);
    obj3.icon = tmp6(tmp4[13]);
    obj3.onPress = function onPress() {
      return SavedMessageHelpers.removeSavedMessage(savedMessage.saveData);
    };
    obj2.children = tmp5(tmp3(tmp4[12]).IconButton, obj3);
    items1[2] = tmp5(View, obj2);
    obj.children = items1;
    return tmp2(savedMessage(closure_2[8]).Card, obj);
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, ChannelTypes: closure_8, Permissions: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let obj = {
  card: { gap: 16, marginBottom: 16 },
  cardDivider: null,
  deletedCard: null,
  deletedText: null,
  deletedActionButton: null,
};
obj = {
  marginHorizontal: -16,
  height: 1,
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj.cardDivider = obj;
obj.deletedCard = { flexDirection: "row", alignItems: "center", gap: 8 };
obj.deletedText = { flex: 1 };
obj.deletedActionButton = { marginLeft: "auto" };
let closure_12 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageCard.tsx");

export default noop.memo(function ForLaterMessageCard(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const throttledNow = savedMessage.throttledNow;
  const tmp = closure_12();
  let obj = savedMessage(11711);
  const savedMessageChannel = obj.useSavedMessageChannel(savedMessage);
  const items = [savedMessage, savedMessageChannel];
  const callback = noop.useCallback(
    asyncGeneratorStep(async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
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
              const v3 = async function _jumpTo(arg0, value) {
                if (c2 === 2) {
                  c2 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    let obj = { value, done: true };
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: null };
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
                        obj = { value, done: true };
                        return obj;
                      } else {
                        let obj2 = v3(11711);
                        c1 = 1;
                        c2 = 1;
                        const obj1 = { value: obj2.savedMessageJumpToMessage(tmp4, c1), done: false };
                        return obj1;
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      obj2 = { value, done: true };
                      return obj2;
                    } else {
                      let arr = v1(4763);
                      arr = arr.pop();
                      const obj3 = {
                        channel_id: tmp4.saveData.channelId,
                        message_id: tmp4.saveData.messageId,
                        message_author_id: null,
                        type: null,
                        due_duration: null,
                      };
                      const message = tmp4.message;
                      let id;
                      if (message != null) {
                        id = message.author.id;
                      }
                      obj3.message_author_id = id;
                      if (null != tmp4.saveData.dueAt) {
                        let BOOKMARK = v3(7860).SavedMessageSortTypes.REMINDER;
                      } else {
                        BOOKMARK = v3(7860).SavedMessageSortTypes.BOOKMARK;
                      }
                      obj3.type = BOOKMARK;
                      let diffResult;
                      if (null != tmp4.saveData.dueAt) {
                        obj = v1(4153)();
                        diffResult = obj.diff(tmp4.saveData.dueAt);
                      }
                      obj3.due_duration = diffResult;
                      v1(1242).track(constants.FOR_LATER_SAVED_MESSAGE_JUMP, obj3);
                      c2 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp26) {
                    c2 = tmp;
                    throw tmp26;
                  }
                }
              };
              if (v1(dependencyMap[20])(savedMessage.message, jumpTo)) {
                v1 = 1;
                c0 = 1;
                let obj1 = { value: jumpTo(), done: false };
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp8) {
          c0 = tmp;
          throw tmp8;
        }
      }
    }),
    items,
  );
  let obj1 = savedMessage(504);
  const items1 = [PermissionStore];
  if (null != savedMessage.message) {
    if (null != savedMessageChannel) {
      if (
        obj1.useStateFromStores(items1, () => {
          let type;
          if (savedMessageChannel != null) {
            type = obj.type;
          }
          let tmp2 = type === constants.UNKNOWN;
          if (!tmp2) {
            let isPrivateResult;
            if (obj != null) {
              isPrivateResult = obj.isPrivate();
            }
            let canResult = isPrivateResult;
            if (!canResult) {
              canResult = PermissionStore.can(constants2.VIEW_CHANNEL, obj);
            }
            tmp2 = canResult;
          }
          return tmp2;
        })
      ) {
        obj = { savedMessage, jumpToMessage: callback, throttledNow };
        const tmp8 = closure_10(savedMessageChannel(13286), obj);
        obj = {
          variant: "primary",
          border: "subtle",
          shadow: "none",
          style: tmp.card,
          onPress: callback,
          children: null,
        };
        let tmp6Result = null;
        if (null != savedMessage.saveData.dueAt) {
          obj1 = { savedMessage, throttledNow, actions: tmp8 };
          tmp6Result = tmp6(tmp2(13289).ForLaterCardReminderHeader, obj1);
        }
        const items2 = [tmp6Result, , ,];
        let obj2 = { channel: savedMessageChannel, actions: null };
        let tmp12 = null;
        if (null == savedMessage.saveData.dueAt) {
          tmp12 = tmp8;
        }
        obj2.actions = tmp12;
        items2[1] = closure_10(tmp2(12215).ForLaterCardHeader, obj2);
        let obj3 = { style: tmp.cardDivider };
        items2[2] = closure_10(View, obj3);
        const obj4 = { message: savedMessage.message, lineClamp: 2, maxHeight: 250 };
        items2[3] = closure_10(tmp2(12216).ForLaterMessageRow, obj4);
        obj.children = items2;
        return closure_11(tmp2(5607).Card, obj);
      }
    }
  }
  return closure_10(ForLaterDeletedMessageCard, { savedMessage });
});
export { ForLaterDeletedMessageCard };
