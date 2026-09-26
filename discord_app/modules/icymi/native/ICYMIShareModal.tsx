// discord_app/modules/icymi/native/ICYMIShareModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import client_themes_ClientThemesUtils from "../../client_themes/native/ClientThemesUtils.tsx";
import useColorThemeBackgroundDefault from "../../client_themes/native/useColorThemeBackground.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ThemedGradientDefault from "../../client_themes/native/ThemedGradient.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import ClientThemesOverrides from "../../client_themes/native/ClientThemesOverrides.tsx";
import ShareEventUtils from "../../guild_scheduled_events/utils/ShareEventUtils.tsx";
import useShareChatInputActions from "../../share/native/useShareChatInputActions.tsx";
import ShareChatInputDefault from "../../share/native/ShareChatInput.tsx";
import _modDef16147 from "../../../../_runtime/metro/16147__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UploadAttachmentStore from "../../../stores/UploadAttachmentStore.tsx";

const require = globalThis.__r;

require = fn;
function Screenshot(setUri) {
  setUri = setUri.setUri;
  const tmp = closure_15();
  const ref = noop.useRef(null);
  const items = [setUri];
  const effect = noop.useEffect(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      let nextPromise;
      if (current != null) {
        const capture = current.capture;
        if (capture != null) {
          nextPromise = capture().then((result) => {
            closure_1_0(result);
          });
          const captureResult = capture();
        }
      }
      return nextPromise;
    }, 500);
  }, items);
  const tmp4 = useColorThemeBackgroundDefault();
  const obj2 = { style: { position: "absolute", top: -1000, overflow: "hidden" }, children: null };
  const obj3 = { style: null, children: null };
  const items1 = [tmp.preview, { width: useWindowDimensionsDefault().width }];
  obj3.style = items1;
  const clientThemesOverride = ClientThemesOverrides.useClientThemesOverride();
  const obj4 = { ref, options: { fileName: "icymi_content", format: "png", quality: 1 }, children: null };
  const obj5 = { style: tmp.base, children: null };
  const obj6 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
  const obj7 = { dark: null, light: null };
  const tmp6 = _modDef16147;
  obj7.dark = client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_7;
  obj7.light = client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_8;
  obj6.mixAmount = obj7;
  const items2 = [map1(ThemedGradientDefault, obj6)];
  const obj8 = { gradient: tmp4, children: null };
  const obj9 = { style: null, children: setUri.render() };
  const items3 = [tmp.contentContainer, clientThemesOverride];
  obj9.style = items3;
  obj8.children = map1(View, obj9);
  items2[1] = map1(native.ThemeContextProvider, obj8);
  obj5.children = items2;
  obj4.children = closure_1_14(View, obj5);
  obj3.children = map1(tmp6, obj4);
  obj2.children = map1(View, obj3);
  return map1(View, obj2);
}
function GravityShareFooter(arg0) {
  ({ count, isSending, onSend } = arg0);
  text = undefined;
  const tmp = closure_15();
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
    const items2 = [map1(ShareChatInputDefault, obj4)];
    const obj5 = { variant: "primary", size: "md", text: stringResult, disabled: tmp12, onPress: null, loading: null };
    let tmp17;
    if (!isSending) {
      tmp17 = callback;
    }
    obj5.onPress = tmp17;
    obj5.loading = isSending;
    items2[1] = map1(components_Button_Button.Button, obj5);
    obj3.children = items2;
    tmp14Result = closure_1_14(View, obj3);
  }
  return tmp14Result;
}
class ICYMIShareModal {
  constructor(arg0) {
    title = global.title;
    ({ linkText, render } = global);
    ({ forwardToChannel, onShare } = global);
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_9 = undefined;
    height = undefined;
    closure_8 = async function _handleSendForwards(arg0) {
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
              closure_129_0 = title;
              View(true);
              let tmp8 = null == render;
              if (!tmp8) {
                tmp8 = null != ChannelStore;
              }
              if (tmp8) {
                c3 = 1;
                c4 = 1;
                let obj4 = {
                  value: Promise.all(first.map(title(tmp2[29]).getOrResolveChannelIdFromDestinationId)),
                  done: false,
                };
                return obj4;
              } else {
                c4 = 3;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            const mapped = value.map((item) => channel.getChannel(item));
            const found = mapped.filter(title(tmp2[30]).isNotNullish);
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
                          if (null != guildId) {
                            if (guildId.trim().length > 0) {
                              const _HermesInternal = HermesInternal;
                              let combined = "" + guildId + "\n\n" + closure_2_1;
                            }
                            const parsed = tmp3(dependencyMap[31]).parse(guildId, combined);
                            if (null == closure_2_3) {
                              let tmp14 = null != closure_2_2;
                              if (tmp14) {
                                tmp14 = null != originalUri;
                              }
                              uploads = undefined;
                              if (tmp14) {
                                const obj5 = { channelId: guildId.id, file: null, draftType: null };
                                const obj7 = { uri: originalUri, originalUri, id: null, platform: null };
                                const tmp8Result = tmp3(dependencyMap[32]);
                                obj7.id = closure_3_0(dependencyMap[33]).v4();
                                obj7.platform = closure_3_0(dependencyMap[34]).UploadPlatform.REACT_NATIVE;
                                obj5.file = obj7;
                                obj5.draftType = closure_3_8.ChannelMessage;
                                tmp8Result.addFile(obj5);
                                uploads = uploads.getUploads(guildId.id, closure_3_8.ChannelMessage);
                                const obj6 = closure_3_0(dependencyMap[33]);
                                tmp3(dependencyMap[32]).clearAll(guildId.id, closure_3_8.ChannelMessage);
                                const tmp8Result3 = tmp3(dependencyMap[32]);
                              }
                              const tmp8Result4 = tmp3(dependencyMap[35]);
                              const obj8 = {
                                location: constants.ICYMI,
                                attachmentsToUpload: uploads,
                                onAttachmentUploadError(file, code, reason) {
                                  const obj = guildId(c2[36]);
                                  const result = obj.handleUploadMessageAttachmentsErrors({
                                    file,
                                    guildId: guildId.getGuildId(),
                                    analyticsLocations: [],
                                    code,
                                    reason,
                                  });
                                },
                              };
                              c2 = 1;
                              c1 = 1;
                              const obj9 = {
                                value: tmp8Result4.sendMessage(guildId.id, parsed, false, obj8),
                                done: false,
                              };
                              return obj9;
                            } else {
                              tmp11(guildId);
                            }
                            const obj2 = tmp3(dependencyMap[31]);
                          }
                          combined = closure_2_1;
                        }
                      } else if (arg0 === 1) {
                        c1 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c1 = 3;
                        let obj = { value, done: true };
                        return obj;
                      }
                      c1 = 3;
                      return { value: "HermesInternal", done: null };
                    } catch (tmp27) {
                      c1 = tmp;
                      throw tmp27;
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
            tmp3(tmp2[28]).pop();
            if (null != closure_130_4) {
              closure_130_4();
            }
            const arr3 = tmp3(tmp2[28]);
          }
          c4 = 3;
          let obj = { value, done: true };
          return obj;
        } catch (tmp13) {
          c4 = tmp;
          throw tmp13;
        }
      }
    };
    tmp = forwardToChannel(closure_5.useState([]), 2);
    first = tmp[0];
    closure_5 = first;
    tmp2 = forwardToChannel(closure_5.useState(false), 2);
    closure_6 = tmp2[1];
    tmp3 = forwardToChannel(closure_5.useState(null), 2);
    [closure_7, tmp4] = tmp3;
    callback = closure_5.useCallback(() => {
      require("ModalActionCreators").pop();
    }, []);
    tmp6 = closure_15();
    tmp7 = linkText;
    tmp8 = render;
    rect = linkText(render[37])();
    closure_9 = rect;
    height = linkText(render[17])().height;
    items = [,];
    items[0] = rect.bottom;
    items[1] = height;
    obj = {
      style: closure_5.useMemo(() => {
        height = "100%";
        if (obj.isAndroid()) {
          height = height + rect.bottom;
        }
        return { height };
      }, items),
      children: null,
    };
    tmp11 = jsx;
    tmp9 = jsxs;
    tmp10 = closure_6;
    tmp12 = title;
    obj1 = {
      title,
      headerTitle() {
        return map1(HeaderShared.GenericHeaderTitle, { title });
      },
      headerTitleAlign: "center",
      headerStatusBarHeight: null,
      headerLeft: null,
      headerLeftContainerStyle: null,
      headerRightContainerStyle: null,
    };
    obj3 = title(render[38]);
    num = 0;
    if (!obj3.isIOS()) {
      num = rect.top;
    }
    obj1.headerStatusBarHeight = num + tmp7(tmp8[12]).space.PX_8;
    tmp12Result = tmp12(tmp8[41]);
    obj1.headerLeft = tmp12Result.getHeaderCloseButton(callback);
    ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } =
      tmp6);
    items1 = [, , ,];
    items1[0] = tmp11(title(render[39]).Header, obj1);
    tmp11Result = null != render;
    if (tmp11Result) {
      tmp14 = Screenshot;
      obj8 = { render: null, setUri: null };
      obj8.render = render;
      obj8.setUri = tmp4;
      tmp11Result = tmp11(Screenshot, obj8);
    }
    items1[1] = tmp11Result;
    obj9 = {
      rowMode: UserRowModes.TOGGLE,
      onSelectedDestinationChange: tmp[1],
      originDestination: global.originDestinationId,
      insetEnd: null,
      disableGradient: true,
      disableStickySections: true,
    };
    tmp7Result = tmp7(tmp8[42]);
    sum = rect.bottom + tmp7(tmp8[12]).space.PX_8;
    obj9.insetEnd = sum + tmp7(tmp8[12]).space.PX_96;
    items1[2] = tmp11(tmp7Result, obj9);
    obj10 = {
      count: first.length,
      isSending: tmp2[0],
      onSend: function handleSendForwards(arg0) {
        const self = this;
        const apply = closure_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
    };
    items1[3] = tmp11(GravityShareFooter, obj10);
    obj.children = items1;
    return tmp9(tmp10, obj);
  }
}
const View = fn(17).View;
const DraftType = fn(5200).DraftType;
const AbortCodes = fn(1074).AbortCodes;
const UserRowModes = fn(10320).UserRowModes;
const MessageSendLocation = fn(4829).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  headerLeftContainer: { paddingLeft: nativeDefault.space.PX_16 },
  headerRightContainer: null,
  preview: null,
  base: null,
  contentContainer: null,
  footer: null,
};
let obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj2.preview = {
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
};
obj2.base = { position: "relative" };
let obj5 = {
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
};
obj2.contentContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.footer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
const __initData = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default ICYMIShareModal;
export const GuildEventShareModal = function GuildEventShareModal(event) {
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
  return map1(ICYMIShareModal, obj3);
};
export const GameShareModal = function GameShareModal(content) {
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
            const obj7 = { value: entry(16146).sendMessageWithEmbed(obj6), done: false };
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
          const intl = entry(1115).intl;
          const string = intl.string;
          let t = entry(1115).t;
          if (closure_129_0) {
            let stringResult = string(t.BC5vfD);
          } else {
            stringResult = string(t.F8FvUy);
          }
          const obj8 = { key: "FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", content: stringResult };
          t = ToastActionCreatorsDefault.open(obj8);
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
  return closure_13(ICYMIShareModal, obj);
};
