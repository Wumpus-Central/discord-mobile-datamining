// discord_app/modules/icymi/native/ICYMIShareModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ShareEventUtils from "../../guild_scheduled_events/utils/ShareEventUtils.tsx";
import useShareChatInputActions from "../../share/native/useShareChatInputActions.tsx";
import ShareChatInputDefault from "../../share/native/ShareChatInput.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
function GravityShareFooter(arg0) {
  ({ count, isSending, onSend } = arg0);
  text = undefined;
  const tmp = closure_13();
  closure_1 = tmp;
  [text] = noop.useState("");
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const shareChatInputActions = useShareChatInputActions.useShareChatInputActions(tmp4);
  let items = [text, onSend];
  ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } =
    shareChatInputActions);
  const callback = noop.useCallback(() => {
    onSend(first);
  }, items);
  if (count <= 1) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.TXNS7S);
  } else {
    const intl = util.intl;
    const obj2 = { count };
    stringResult = intl.formatToPlainString(util.t.jWtYUm, obj2);
  }
  const items1 = [tmp.footer, insets.bottom];
  let tmp14Result = null;
  if (0 !== count) {
    const obj3 = { style: tmp11, children: null };
    const obj4 = {
      inputRef: textInputRef,
      text,
      onChange: tmp4,
      onSelectionChange: handleSelectionChange,
      onFocus: handleMessageFocus,
      onBlur: handleMessageBlur,
      onPressEmoji: handlePressEmoji,
      onSend: callback,
      disabled: isSending,
    };
    const items2 = [closure_1_11(ShareChatInputDefault, obj4)];
    const obj5 = { variant: "primary", size: "md", text: stringResult, disabled: tmp12, onPress: null, loading: null };
    let tmp17;
    if (!isSending) {
      tmp17 = callback;
    }
    obj5.onPress = tmp17;
    obj5.loading = isSending;
    items2[1] = closure_1_11(components_Button_Button.Button, obj5);
    obj3.children = items2;
    tmp14Result = closure_1_12(View, obj3);
  }
  return tmp14Result;
}
class ICYMIShareModal {
  constructor(arg0) {
    ({ linkText, forwardToChannel } = global);
    closure_2 = undefined;
    closure_3 = undefined;
    closure_5 = undefined;
    height = undefined;
    closure_4 = async function _handleSendForwards(arg0) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_129_0 = closure_0;
              _slicedToArray(true);
              c3 = 1;
              c4 = 1;
              let obj4 = {
                value: Promise.all(first.map(closure_0(tmp2[20]).getOrResolveChannelIdFromDestinationId)),
                done: false,
              };
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            const mapped = value.map((item) => channel.getChannel(item));
            const found = mapped.filter(closure_0(tmp2[21]).isNotNullish);
            const item = found.forEach(
              (() => {
                closure_0 = c4(function* (arg0) {
                  if (c1 === 2) {
                    c1 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    try {
                      c1 = 2;
                      if (0 === c2) {
                        if (arg0 === 1) {
                          c1 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c1 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          if (null != closure_0) {
                            if (closure_0.trim().length > 0) {
                              const _HermesInternal = HermesInternal;
                              let combined = "" + closure_0 + "\n\n" + closure_0;
                            }
                            const parsed = tmp3(dependencyMap[22]).parse(closure_0, combined);
                            if (null == closure_2_1) {
                              const tmp8Result = tmp3(dependencyMap[23]);
                              const obj5 = { location: constants.ICYMI };
                              c2 = 1;
                              c1 = 1;
                              const obj6 = {
                                value: tmp8Result.sendMessage(closure_0.id, parsed, false, obj5),
                                done: false,
                              };
                              return obj6;
                            } else {
                              tmp11(closure_0);
                            }
                            const obj2 = tmp3(dependencyMap[22]);
                          }
                          combined = closure_0;
                        }
                      } else if (arg0 === 1) {
                        c1 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c1 = 3;
                        const obj = { value, done: true };
                        return obj;
                      }
                      c1 = 3;
                      return { value: "HermesInternal", done: null };
                    } catch (tmp17) {
                      c1 = tmp;
                      throw tmp17;
                    }
                  }
                });
                return function (arg0) {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
              })(),
            );
            tmp3(tmp2[19]).pop();
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp7) {
          c4 = tmp;
          throw tmp7;
        }
      }
    };
    ({ title, originDestinationId } = global);
    tmp = closure_3(closure_5.useState([]), 2);
    first = tmp[0];
    closure_2 = first;
    tmp2 = closure_3(closure_5.useState(false), 2);
    [tmp3, closure_3] = tmp2;
    callback = closure_5.useCallback(() => {
      require("ModalActionCreators").pop();
    }, []);
    tmp5 = forwardToChannel(closure_2[24])();
    closure_5 = tmp5;
    height = forwardToChannel(closure_2[25])().height;
    items = [,];
    items[0] = tmp5.bottom;
    items[1] = height;
    obj = {
      style: closure_5.useMemo(() => {
        height = "100%";
        if (obj.isAndroid()) {
          height = height + bottom.bottom;
        }
        return { height };
      }, items),
      children: null,
    };
    items1 = [, ,];
    items1[0] = jsx(forwardToChannel(closure_2[27]), { title, onClose: callback });
    obj1 = {
      rowMode: UserRowModes.TOGGLE,
      onSelectedDestinationChange: tmp[1],
      originDestination: originDestinationId,
      insetEnd: null,
      disableGradient: true,
      disableStickySections: true,
    };
    tmp6 = forwardToChannel(closure_2[28]);
    sum = tmp5.bottom + forwardToChannel(closure_2[10]).space.PX_8;
    obj1.insetEnd = sum + forwardToChannel(closure_2[10]).space.PX_96;
    items1[1] = jsx(tmp6, obj1);
    obj4 = {
      count: first.length,
      isSending: tmp3,
      onSend: function handleSendForwards(arg0) {
        const self = this;
        const apply = closure_4.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
    };
    items1[2] = jsx(GravityShareFooter, obj4);
    obj.children = items1;
    return jsxs(height, obj);
  }
}
const View = fn(17).View;
const AbortCodes = fn(1072).AbortCodes;
const UserRowModes = fn(10707).UserRowModes;
const MessageSendLocation = fn(5014).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_12,
    gap: nativeDefault.space.PX_12,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderTopWidth: 1,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  },
};
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default ICYMIShareModal;
export function GuildEventShareModal(event) {
  event = event.event;
  const obj3 = { title: null, originDestinationId: null, linkText: null };
  const result = ShareEventUtils.SHARE_EVENT_DETAILS_LINK({ guildId: event.guild_id, guildEventId: event.id });
  const intl = util.intl;
  obj3.title = intl.string(util.t["7TVSLK"]);
  let tmp4;
  if (null != event.channel_id) {
    const obj4 = { type: "channel", id: event.channel_id };
    tmp4 = obj4;
  }
  obj3.originDestinationId = tmp4;
  obj3.linkText = result;
  return closure_1_11(ICYMIShareModal, obj3);
}
export function GameShareModal(content) {
  _require = content.content;
  let obj = { title: null, linkText: "", forwardToChannel: null };
  let intl = require("util").intl;
  obj.title = intl.string(require("util").t["59CWHK"]);
  _require = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            c4 = 1;
            const obj6 = {
              channel: entry,
              content: "",
              entry,
              whenReady: false,
              doNotNotifyOnError: true,
              location: constants2.ICYMI,
            };
            c5 = 2;
            c6 = 1;
            const obj7 = { value: entry(18523).sendMessageWithEmbed(obj6), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          let tmp12 = null != closure_129_1.body;
          if (tmp12) {
            tmp12 = closure_129_1.body.code === constants.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
          }
          closure_129_0 = tmp12;
          const intl = entry(1114).intl;
          const string = intl.string;
          let t = entry(1114).t;
          if (closure_129_0) {
            let stringResult = string(t.BC5vfD);
          } else {
            stringResult = string(t.F8FvUy);
          }
          const obj8 = { text: stringResult };
          t = ToastActionCreatorsDefault.open("FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", obj8);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else {
          if (arg0 !== 2) {
            c4 = 0;
            c6 = 3;
          }
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp33) {
        closure_3 = tmp33;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp33;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  obj.forwardToChannel = function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return closure_11(ICYMIShareModal, obj);
}
