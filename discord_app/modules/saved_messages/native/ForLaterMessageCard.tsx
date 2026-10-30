// discord_app/modules/saved_messages/native/ForLaterMessageCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef5734 from "../../../../_runtime/metro/05734__.js";
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
    obj1 = { size: "xs", color: closure_1(closure_2[7]).colors.ICON_MUTED };
    tmp6 = closure_1;
    items1 = [, ,];
    items1[0] = jsx(savedMessage(closure_2[9]).CircleErrorIcon, obj1);
    obj6 = {
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
    obj6.children = stringResult;
    items1[1] = tmp5(savedMessage(closure_2[10]).Text, obj6);
    obj7 = { style: tmp.deletedActionButton, children: null };
    obj8 = { variant: "secondary", accessibilityLabel: null, size: "sm", icon: null, onPress: null };
    intl3 = tmp3(tmp4[11]).intl;
    obj8.accessibilityLabel = intl3.string(tmp3(tmp4[11]).t.SvXS1Z);
    obj8.icon = tmp6(tmp4[13]);
    obj8.onPress = function onPress() {
      return SavedMessageHelpers.removeSavedMessage(savedMessage.saveData);
    };
    obj7.children = tmp5(tmp3(tmp4[12]).IconButton, obj8);
    items1[2] = tmp5(View, obj7);
    obj.children = items1;
    return tmp2(savedMessage(closure_2[8]).Card, obj);
  }
}
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: closure_7, ChannelTypes: closure_8, Permissions: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5009);
let obj = {
  card: { gap: 16, marginBottom: 16 },
  cardDivider: {
    marginHorizontal: -16,
    height: 1,
    alignSelf: "stretch",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  },
  deletedCard: { flexDirection: "row", alignItems: "center", gap: 8 },
  deletedText: { flex: 1 },
  deletedActionButton: { marginLeft: "auto" },
};
let closure_12 = createStyles.createStyles(obj);
let obj3 = {
  marginHorizontal: -16,
  height: 1,
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageCard.tsx");

export default noop.memo(function ForLaterMessageCard(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const throttledNow = savedMessage.throttledNow;
  let forLaterCardMenuItems;
  const tmp = closure_12();
  const savedMessageChannel = savedMessage(forLaterCardMenuItems[15]).useSavedMessageChannel(savedMessage);
  const items = [savedMessage, savedMessageChannel];
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
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
              const v3 = async function _jumpTo() {
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
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        c1 = 1;
                        c2 = 1;
                        const obj5 = { value: v3(11144).savedMessageJumpToMessage(tmp4, c1), done: false };
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
                      v1(6738).pop();
                      const arr = v1(6738);
                      const obj8 = {
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
                      obj8.message_author_id = id;
                      if (null != tmp4.saveData.dueAt) {
                        let BOOKMARK = v3(10172).SavedMessageSortTypes.REMINDER;
                      } else {
                        BOOKMARK = v3(10172).SavedMessageSortTypes.BOOKMARK;
                      }
                      obj8.type = BOOKMARK;
                      let diffResult;
                      if (null != tmp4.saveData.dueAt) {
                        diffResult = v1(2044)().diff(tmp4.saveData.dueAt);
                        const obj = v1(2044)();
                      }
                      obj8.due_duration = diffResult;
                      v1(1253).track(constants.FOR_LATER_SAVED_MESSAGE_JUMP, obj8);
                      c2 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp26) {
                    c2 = tmp;
                    throw tmp26;
                  }
                }
              };
              if (v1(forLaterCardMenuItems[20])(savedMessage.message, jumpTo)) {
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
          return { value: "HermesInternal", done: null };
        } catch (tmp8) {
          c0 = tmp;
          throw tmp8;
        }
      }
    }),
    items,
  );
  let obj = savedMessage(forLaterCardMenuItems[15]);
  forLaterCardMenuItems = savedMessage(forLaterCardMenuItems[21]).useForLaterCardMenuItems({
    savedMessage,
    jumpToMessage: callback,
    throttledNow,
  });
  let obj2 = savedMessage(forLaterCardMenuItems[21]);
  const items1 = [PermissionStore];
  if (null != savedMessage.message) {
    if (null != savedMessageChannel) {
      if (
        obj3.useStateFromStores(items1, () => {
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
        })
      ) {
        const mapped = forLaterCardMenuItems.map((label) => ({ name: label.label, label: label.label }));
        let obj4 = {
          menuItems: forLaterCardMenuItems,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
        const tmp9 = closure_10(savedMessageChannel(tmp3[21]), obj4);
        let obj5 = {
          variant: "primary",
          border: "subtle",
          shadow: "none",
          style: tmp.card,
          onPress: callback,
          accessibilityActions: mapped,
          onAccessibilityAction(arg0) {
            const nativeEvent = arg0;
            const found = forLaterCardMenuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
            if (found != null) {
              found.action();
            }
          },
          children: null,
        };
        let tmp7Result = null;
        if (null != savedMessage.saveData.dueAt) {
          let obj6 = { savedMessage, throttledNow, actions: tmp9 };
          tmp7Result = closure_10(tmp2(tmp3[23]).ForLaterCardReminderHeader, obj6);
        }
        const items2 = [tmp7Result, , ,];
        const obj7 = { channel: savedMessageChannel, actions: null };
        let tmp13 = null;
        if (null == savedMessage.saveData.dueAt) {
          tmp13 = tmp9;
        }
        obj7.actions = tmp13;
        items2[1] = closure_10(tmp2(tmp3[24]).ForLaterCardHeader, obj7);
        let obj8 = { style: tmp.cardDivider };
        items2[2] = closure_10(View, obj8);
        const obj9 = { message: savedMessage.message, lineClamp: 2, maxHeight: 250 };
        items2[3] = closure_10(tmp2(tmp3[25]).ForLaterMessageRow, obj9);
        obj5.children = items2;
        return closure_11(tmp2(tmp3[8]).Card, obj5);
      }
    }
  }
  return closure_10(ForLaterDeletedMessageCard, { savedMessage });
});
export { ForLaterDeletedMessageCard };
