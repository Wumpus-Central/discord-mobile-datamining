// === Module 13988: ShareScreen ===

// Module 13988 (ShareScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import HeaderShared from "HeaderShared" /* 7966 */;
import ShareAttachmentsDefault from "ShareAttachments" /* 13991 */;
import ShareEmbedDefault from "ShareEmbed" /* 13992 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4275 */;

require = fn;
function getAttachmentsRestriction(type) {
  if (type instanceof React5) {
    if (React6(type.type)) {
      let tmp4;
      if (!PermissionStore.can(constants.ATTACH_FILES, type)) {
        const obj = { label: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.P7yvbm);
        tmp4 = obj;
      }
      return tmp4;
    }
  }
}
const View = fn(17).View;
const ChannelRecord = fn(1961);
({ ChannelRecordBase: closure_7, isGuildChannelType: closure_8 } = ChannelRecord);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, Permissions: closure_12, MAX_UPLOAD_COUNT: map1 } = Constants);
const MAX_DESTINATION_COUNT = fn(11813).MAX_DESTINATION_COUNT;
const UserRowModes = fn(10989).UserRowModes;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, headerLeftContainer: null, headerRightContainer: null };
let PlatformUtils = fn(1363);
let num = 0;
if (PlatformUtils.isIOS()) {
  num = nativeDefault.space.PX_16;
}
obj2.headerLeftContainer = { paddingLeft: num };
PlatformUtils = fn(1363);
let num2 = 0;
if (PlatformUtils.isIOS()) {
  num2 = nativeDefault.space.PX_16;
}
obj2.headerRightContainer = { paddingRight: num2 };
let closure_19 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareScreen.tsx");

export default function ShareScreen(sharedContent) {
  sharedContent = sharedContent.sharedContent;
  const onClose = sharedContent.onClose;
  let length;
  noop = undefined;
  c6 = undefined;
  let first1;
  let embed;
  let isLoading;
  const tmp = closure_19();
  let items = [sharedContent];
  const tmp3 = length(noop.useState(noop.useMemo(() => {
    const items = [];
    if (null != sharedContent.targetUserId) {
      const obj = { type: "user", id: sharedContent.targetUserId };
      items.push(obj);
    }
    if (null != sharedContent.targetChannelId) {
      const obj2 = { type: "channel", id: sharedContent.targetChannelId };
      items.push(obj2);
    }
    return items;
  }, items)), 2);
  const initialSelectedDestinations = tmp3[0];
  asyncGeneratorStep = tmp3[1];
  length = initialSelectedDestinations.length;
  noop = tmp4;
  const callback = noop.useCallback((arg0) => {
    closure_3(arg0);
  }, []);
  [tmp7, c6] = length(noop.useState(false), 2);
  closure_7 = noop.useRef(tmp7);
  if (length <= 1) {
    let intl2 = sharedContent(initialSelectedDestinations[14]).intl;
    let stringResult = intl2.string(sharedContent(initialSelectedDestinations[14]).t.TXNS7S);
    let tmp9 = initialSelectedDestinations;
    let tmp11 = sharedContent;
  } else {
    tmp9 = initialSelectedDestinations;
    let intl = sharedContent(initialSelectedDestinations[14]).intl;
    let obj2 = { count: length };
    stringResult = intl.formatToPlainString(sharedContent(initialSelectedDestinations[14]).t.jWtYUm, obj2);
    tmp11 = sharedContent;
  }
  let str = sharedContent.text;
  if (str == null) {
    str = "";
  }
  const tmp2Result = length(noop.useState(str), 2);
  first1 = tmp2Result[0];
  const tmp17 = onClose(tmp9[15])(first1);
  embed = tmp17.embed;
  isLoading = tmp17.isLoading;
  const items1 = [onClose, initialSelectedDestinations, sharedContent.attachments, first1];
  const items2 = [embed, isLoading, sharedContent.attachments];
  const callback1 = obj.useCallback(asyncGeneratorStep(async () => {
    if (React === 2) {
      React = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        React = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            React = 3;
            throw value;
          } else if (arg0 === 2) {
            React = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            sharedContent = tmp7;
            closure_128_0 = undefined;
            let attachments;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            closure_128_5 = undefined;
            closure_128_6 = undefined;
            if (ref.current) {
              React = 3;
            } else {
              ref.current = true;
              _undefined(true);
              c3 = 1;
              c4 = 2;
              React = 1;
              let obj5 = { value: Promise.all(first.map(sharedContent(tmp80[16]).getOrResolveChannelIdFromDestinationId)), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_129_6(false);
          closure_129_7.current = false;
          throw tmp80;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            React = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_6(false);
            closure_129_7.current = false;
            React = 3;
            let obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_0 = value.filter(sharedContent(tmp80[17]).isNotNullish);
            if (0 === closure_128_0.length) {
              const intl3 = sharedContent(tmp80[14]).intl;
              sharedContent(tmp80[18]).showInformationToast(intl3.string(sharedContent(tmp80[14]).t.wFcUiF));
              c3 = 0;
              closure_129_6(false);
              closure_129_7.current = false;
              React = 3;
              let obj8 = { value: undefined, done: true };
              return obj8;
            } else {
              attachments = closure_129_0.attachments;
              closure_128_2 = attachments.map((mimeType) => {
                let str = mimeType.mimeType;
                if (str == null) {
                  str = "unknown";
                }
                return str;
              });
              c4 = 3;
              React = 1;
              const obj9 = {
                value: tmp3(tmp80[19])(closure_128_0.map((() => {
                            closure_0 = dependencyMap(function*(arg0) {
                              if (c4 === 2) {
                                c4 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp5 === 3) {
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
                                  c4 = 2;
                                  if (0 === c3) {
                                    if (arg0 === 1) {
                                      c4 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c4 = 3;
                                      const obj4 = { value, done: true };
                                      return obj4;
                                    } else {
                                      const attachment_mimetypes = tmp3;
                                      const attachments = tmp2;
                                      closure_129_0 = undefined;
                                      channel = channel.getChannel(closure_0);
                                      closure_129_0 = channel;
                                      if (null == channel) {
                                        c4 = 3;
                                        return { value: false, done: true };
                                      } else {
                                        const obj5 = { attachments, channel, comment };
                                        c3 = 1;
                                        c4 = 1;
                                        const obj6 = { value: closure_3_0(paths[18]).sendShareMessage(obj5), done: false };
                                        return obj6;
                                      }
                                    }
                                  } else if (arg0 === 1) {
                                    c4 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c4 = 3;
                                    const obj = { value, done: true };
                                    return obj;
                                  } else {
                                    const obj8 = { guild_id: closure_129_0.guild_id, channel_id: closure_129_0.id, channel_type: closure_129_0.type, num_attachments: attachments.length, attachment_mimetypes };
                                    tmp3(paths[20]).track(constants.SHARE_MESSAGE_SENT, obj8);
                                    c4 = 3;
                                    return { value: "HermesInternal", done: null };
                                  }
                                } catch (tmp11) {
                                  c4 = tmp;
                                  throw tmp11;
                                }
                              }
                            });
                            return function() {
                              const self = this;
                              const apply = closure_0.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            };
                          })())),
                done: false
              };
              return obj9;
            }
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            React = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_6(false);
            closure_129_7.current = false;
            React = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_128_3 = value;
            if (!closure_128_3.every((status) => "fulfilled" === status.status)) {
              closure_128_5 = closure_129_2.filter((item, index) => "rejected" === dependencyMap[index].status);
              closure_128_6 = React.lazy(() => closure_1_0(paths[25])(paths[24], paths.paths));
              const obj11 = { title: null, content: null, failedDestinations: null };
              const intl = sharedContent(tmp80[14]).intl;
              obj11.title = intl.string(sharedContent(tmp80[14]).t.dA1gbw);
              const intl2 = sharedContent(tmp80[14]).intl;
              const obj13 = { count: closure_128_5.length };
              obj11.content = intl2.formatToPlainString(sharedContent(tmp80[14]).t.thm88D, obj13);
              obj11.failedDestinations = closure_128_5;
              sharedContent(tmp80[26]).openAlert("share-failed-alert-modal", closure_1_16(closure_128_6, obj11));
              c3 = 0;
              closure_129_6(false);
              closure_129_7.current = false;
              let obj4 = sharedContent(tmp80[26]);
            }
          }
        } else if (arg0 === 1) {
          React = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_6(false);
          closure_129_7.current = false;
          React = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          sharedContent(tmp80[22]).transitionToChannel(closure_128_4, { navigationReplace: true, openTextInVoiceIfVoiceChannel: true });
          const obj18 = sharedContent(tmp80[22]);
          if (obj19.isAndroid()) {
            tmp3(tmp80[23]).launchApp();
            let obj = tmp3(tmp80[23]);
          }
          closure_129_1();
          c3 = 0;
          closure_129_6(false);
          closure_129_7.current = false;
          React = 3;
          const obj15 = { value: undefined, done: true };
          return obj15;
        }
        closure_128_4 = closure_128_0[0];
        const obj16 = { channelId: closure_128_4 };
        c4 = 4;
        React = 1;
        const obj17 = { value: tmp3(tmp80[21]).fetchMessages(obj16), done: false };
        return obj17;
      } catch (tmp80) {
        if (tmp4 === c3) {
          React = tmp2;
          throw tmp80;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items1);
  const memo = obj.useMemo(() => {
    if (null != embed) {
      const obj = { attachments: sharedContent.attachments, isRevamp: true };
      const items = [value2(ShareAttachmentsDefault, obj), ];
      embed = undefined;
      if (tmp != null) {
        embed = tmp.embed;
      }
      const obj2 = { children: null };
      const obj3 = { embed, isLoadingEmbed: isLoading, isRevamp: true };
      items[1] = value2(ShareEmbedDefault, obj3);
      obj2.children = items;
      let tmp4Result = collapsedCategories(closure_2_17, obj2);
    } else {
      tmp4Result = null;
    }
    return tmp4Result;
  }, items2);
  let obj3 = { style: tmp.container, children: null };
  let obj5 = { title: null, headerTitle: null, headerTitleAlign: "center", headerLeft: null, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: null };
  let intl3 = tmp11(tmp9[14]).intl;
  obj5.title = intl3.string(tmp11(tmp9[14]).t["MR7/kg"]);
  obj5.headerTitle = function headerTitle(title) {
    if (closure_5) {
      const intl2 = util.intl;
      const obj2 = { limit };
      let subtitle = intl2.formatToPlainString(util.t["qqyp/e"], obj2);
    } else if (length >= MAX_DESTINATION_COUNT) {
      const intl = util.intl;
      const obj = { count: tmp2 };
      subtitle = intl.formatToPlainString(util.t["3Fbkir"], obj);
    }
    return value2(HeaderShared.GenericHeaderTitle, { title: title.children, subtitle, subtitleColor: "text-feedback-warning", variant: "redesign/heading-18/bold" });
  };
  const tmp22 = c6;
  const tmp6 = length(noop.useState(false), 2);
  let headerCloseButton;
  if (!tmp11Result.isMetaQuest()) {
    headerCloseButton = tmp11(tmp9[32]).getHeaderCloseButton(onClose);
    const tmp11Result4 = tmp11(tmp9[32]);
  }
  obj5.headerLeft = headerCloseButton;
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  tmp11Result = tmp11(tmp9[31]);
  let PX_8;
  if (tmp11Result5.isIOS()) {
    PX_8 = tmp16(tmp9[12]).space.PX_8;
  }
  obj5.headerStatusBarHeight = PX_8;
  const items3 = [closure_16(tmp11(tmp9[29]).Header, obj5), , ];
  let obj6 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations, onSelectedDestinationChange: callback, getRowIsUnavailable: null, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: null, disableLongPress: null };
  let tmp26;
  tmp11Result5 = tmp11(tmp9[13]);
  if (sharedContent.attachments.length > 0) {
    tmp26 = getAttachmentsRestriction;
  }
  obj6.getRowIsUnavailable = tmp26;
  obj6.disableSelection = length >= MAX_DESTINATION_COUNT || sharedContent.attachments.length > closure_13;
  const tmp16Result = onClose(tmp9[33]);
  obj6.disableLongPress = tmp11(tmp9[13]).isAndroid();
  items3[1] = closure_16(tmp16Result, obj6);
  const obj7 = { text: first1, setText: tmp2Result[1], preview: memo, sendLabel: stringResult, canSend: null, isSending: null, onSend: null, disabled: null, appEntryKey: null };
  let tmp28 = length > 0;
  const tmp11Result6 = tmp11(tmp9[13]);
  if (tmp28) {
    tmp28 = !tmp4;
  }
  let obj8 = { children: null };
  obj7.canSend = tmp28;
  obj7.isSending = tmp7;
  obj7.onSend = callback1;
  obj7.disabled = sharedContent.attachments.length > closure_13;
  obj7.appEntryKey = sharedContent.appEntryKey;
  items3[2] = closure_16(onClose(tmp9[34]), obj7);
  obj3.children = items3;
  obj8.children = closure_18(tmp22, obj3);
  return closure_16(tmp11(tmp9[29]).SafeAreaProviderCompat, obj8);
};