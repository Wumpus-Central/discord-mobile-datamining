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
import _modDef16504 from "../../../../_runtime/metro/16504__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UploadAttachmentStore from "../../../stores/UploadAttachmentStore.tsx";

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
  let obj = { style: { position: "absolute", top: -1000, overflow: "hidden" }, children: null };
  obj = { style: null, children: null };
  const items1 = [tmp.preview, { width: useWindowDimensionsDefault().width }];
  obj.style = items1;
  const clientThemesOverride = obj.useClientThemesOverride();
  const obj1 = { ref, options: { fileName: "icymi_content", format: "png", quality: 1 }, children: null };
  const obj2 = { style: tmp.base, children: null };
  const tmp4 = useColorThemeBackgroundDefault();
  const obj3 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
  const obj4 = { dark: null, light: null };
  const tmp6 = _modDef16504;
  obj4.dark = client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_7;
  obj4.light = client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_8;
  obj3.mixAmount = obj4;
  const items2 = [map1(ThemedGradientDefault, obj3)];
  const obj5 = { gradient: tmp4, children: null };
  const obj6 = { style: null, children: setUri.render() };
  const items3 = [tmp.contentContainer, clientThemesOverride];
  obj6.style = items3;
  obj5.children = map1(View, obj6);
  items2[1] = map1(native.ThemeContextProvider, obj5);
  obj2.children = items2;
  obj1.children = closure_1_14(View, obj2);
  obj.children = map1(tmp6, obj1);
  obj.children = map1(View, obj);
  return map1(View, obj);
}
function GravityShareFooter(arg0) {
  ({ count, isSending, onSend } = arg0);
  const tmp = closure_15();
  closure_1 = tmp;
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  const text = tmp2[0];
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  let obj = useShareChatInputActions;
  const shareChatInputActions = obj.useShareChatInputActions(tmp4);
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
    obj = { count };
    stringResult = intl.formatToPlainString(util.t.jWtYUm, obj);
  }
  const items1 = [tmp.footer, insets.bottom];
  let tmp14Result = null;
  if (0 !== count) {
    obj = { style: tmp11, children: null };
    const obj1 = {
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
    const items2 = [map1(ShareChatInputDefault, obj1)];
    const obj2 = { variant: "primary", size: "md", text: stringResult, disabled: tmp12, onPress: null, loading: null };
    let tmp17;
    if (!isSending) {
      tmp17 = callback;
    }
    obj2.onPress = tmp17;
    obj2.loading = isSending;
    items2[1] = map1(components_Button_Button.Button, obj2);
    obj.children = items2;
    tmp14Result = closure_1_14(View, obj);
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
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
                let obj1 = {
                  value: Promise.all(first.map(title(tmp2[29]).getOrResolveChannelIdFromDestinationId)),
                  done: false,
                };
                return obj1;
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
                      let obj = { value, done: true };
                      return obj;
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
                          obj = { value, done: true };
                          return obj;
                        } else {
                          if (null != guildId) {
                            if (guildId.trim().length > 0) {
                              const _HermesInternal = HermesInternal;
                              let combined = "" + guildId + "\n\n" + closure_2_1;
                            }
                            let obj1 = tmp3(dependencyMap[31]);
                            const parsed = obj1.parse(guildId, combined);
                            if (null == closure_2_3) {
                              let tmp14 = null != closure_2_2;
                              if (tmp14) {
                                tmp14 = null != originalUri;
                              }
                              uploads = undefined;
                              if (tmp14) {
                                let tmp8Result = tmp3(dependencyMap[32]);
                                obj1 = { channelId: guildId.id, file: null, draftType: null };
                                const obj2 = {
                                  uri: originalUri,
                                  originalUri,
                                  id: closure_3_0(dependencyMap[33]).v4(),
                                  platform: closure_3_0(dependencyMap[34]).UploadPlatform.REACT_NATIVE,
                                };
                                obj1.file = obj2;
                                obj1.draftType = closure_3_8.ChannelMessage;
                                tmp8Result.addFile(obj1);
                                uploads = uploads.getUploads(guildId.id, closure_3_8.ChannelMessage);
                                tmp8Result = tmp3(dependencyMap[32]);
                                tmp8Result.clearAll(guildId.id, closure_3_8.ChannelMessage);
                                const obj6 = closure_3_0(dependencyMap[33]);
                              }
                              const tmp8Result1 = tmp3(dependencyMap[35]);
                              const obj3 = {
                                location: constants.ICYMI,
                                attachmentsToUpload: uploads,
                                onAttachmentUploadError(file, code, reason) {
                                  guildId(c2[36]);
                                  const obj = {
                                    file,
                                    guildId: guildId.getGuildId(),
                                    analyticsLocations: [],
                                    code,
                                    reason,
                                  };
                                  const result = obj.handleUploadMessageAttachmentsErrors(obj);
                                },
                              };
                              c2 = 1;
                              c1 = 1;
                              const obj4 = {
                                value: tmp8Result1.sendMessage(guildId.id, parsed, false, obj3),
                                done: false,
                              };
                              return obj4;
                            } else {
                              tmp11(guildId);
                            }
                          }
                          combined = closure_2_1;
                        }
                      } else if (arg0 === 1) {
                        c1 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c1 = 3;
                        obj = { value, done: true };
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
          obj = { value, done: true };
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
      let arr = require("ModalActionCreators");
      arr = arr.pop();
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
    obj = {
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
    obj.headerStatusBarHeight = num + tmp7(tmp8[12]).space.PX_8;
    tmp12Result = tmp12(tmp8[41]);
    obj.headerLeft = tmp12Result.getHeaderCloseButton(callback);
    ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } =
      tmp6);
    items1 = [, , ,];
    items1[0] = tmp11(title(render[39]).Header, obj);
    tmp11Result = null != render;
    if (tmp11Result) {
      tmp14 = Screenshot;
      obj1 = { render: null, setUri: null };
      obj1.render = render;
      obj1.setUri = tmp4;
      tmp11Result = tmp11(Screenshot, obj1);
    }
    items1[1] = tmp11Result;
    obj2 = {
      rowMode: UserRowModes.TOGGLE,
      onSelectedDestinationChange: tmp[1],
      originDestination: global.originDestinationId,
      insetEnd: null,
      disableGradient: true,
      disableStickySections: true,
    };
    tmp7Result = tmp7(tmp8[42]);
    sum = rect.bottom + tmp7(tmp8[12]).space.PX_8;
    obj2.insetEnd = sum + tmp7(tmp8[12]).space.PX_96;
    items1[2] = tmp11(tmp7Result, obj2);
    obj3 = {
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
    items1[3] = tmp11(GravityShareFooter, obj3);
    obj.children = items1;
    return tmp9(tmp10, obj);
  }
}
const View = fn(17).View;
const DraftType = fn(4901).DraftType;
const AbortCodes = fn(1074).AbortCodes;
const UserRowModes = fn(10860).UserRowModes;
const MessageSendLocation = fn(4553).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = {
  headerLeftContainer: null,
  headerRightContainer: null,
  preview: null,
  base: null,
  contentContainer: null,
  footer: null,
};
createStyles = { paddingLeft: nativeDefault.space.PX_16 };
createStyles.headerLeftContainer = createStyles;
createStyles.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let obj1 = { paddingRight: nativeDefault.space.PX_16 };
createStyles.preview = {
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
};
createStyles.base = { position: "relative" };
let obj2 = {
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
};
createStyles.contentContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.footer = {
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
const __initData = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default ICYMIShareModal;
export const GuildEventShareModal = function GuildEventShareModal(event) {
  event = event.event;
  let obj = { guildId: event.guild_id, guildEventId: event.id };
  obj = { title: null, originDestinationId: null, linkText: null };
  const result = obj.SHARE_EVENT_DETAILS_LINK(obj);
  const intl = util.intl;
  obj.title = intl.string(util.t["7TVSLK"]);
  let tmp4;
  if (null != event.channel_id) {
    const obj1 = { type: "channel", id: event.channel_id };
    tmp4 = obj1;
  }
  obj.originDestinationId = tmp4;
  obj.linkText = result;
  return map1(ICYMIShareModal, obj);
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            c4 = 1;
            let obj3 = entry(16503);
            let obj1 = {
              channel: entry,
              content: "",
              entry,
              whenReady: false,
              doNotNotifyOnError: true,
              location: constants2.ICYMI,
            };
            c5 = 2;
            c6 = 1;
            const obj2 = { value: obj3.sendMessageWithEmbed(obj1), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          let tmp12 = null != closure_129_1.body;
          if (tmp12) {
            tmp12 = closure_129_1.body.code === constants.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
          }
          closure_129_0 = tmp12;
          obj1 = ToastActionCreatorsDefault;
          const intl = entry(1114).intl;
          const string = intl.string;
          let t = entry(1114).t;
          if (closure_129_0) {
            let stringResult = string(t.BC5vfD);
          } else {
            stringResult = string(t.F8FvUy);
          }
          obj3 = { key: "FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", content: stringResult };
          t = obj1.open(obj3);
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
          obj = { value, done: true };
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
