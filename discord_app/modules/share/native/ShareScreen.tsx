// === Module 13900: ShareScreen ===

// Module 13900 (ShareScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import ShareAttachmentsDefault from "ShareAttachments" /* 13903 */;
import ShareEmbedDefault from "ShareEmbed" /* 13904 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;

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
const MAX_DESTINATION_COUNT = fn(11683).MAX_DESTINATION_COUNT;
const UserRowModes = fn(10860).UserRowModes;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
fn(4560);
let createStyles = { container: null, headerLeftContainer: null, headerRightContainer: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.container = createStyles;
let PlatformUtils = fn(1115);
let num = 0;
if (PlatformUtils.isIOS()) {
  num = nativeDefault.space.PX_16;
}
createStyles.headerLeftContainer = { paddingLeft: num };
PlatformUtils = fn(1115);
let num2 = 0;
if (PlatformUtils.isIOS()) {
  num2 = nativeDefault.space.PX_16;
}
createStyles.headerRightContainer = { paddingRight: num2 };
let closure_19 = createStyles.createStyles(createStyles);
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
  let obj = noop;
  let items = [sharedContent];
  const tmp3 = length(noop.useState(noop.useMemo(() => {
    const items = [];
    if (null != sharedContent.targetUserId) {
      let obj = { type: "user", id: sharedContent.targetUserId };
      items.push(obj);
    }
    if (null != sharedContent.targetChannelId) {
      obj = { type: "channel", id: sharedContent.targetChannelId };
      items.push(obj);
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
    obj = { count: length };
    stringResult = intl.formatToPlainString(sharedContent(initialSelectedDestinations[14]).t.jWtYUm, obj);
    tmp11 = sharedContent;
  }
  let str = sharedContent.text;
  if (str == null) {
    str = "";
  }
  const tmp2Result = length(obj.useState(str), 2);
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
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
              let obj1 = { value: Promise.all(first.map(sharedContent(tmp80[16]).getOrResolveChannelIdFromDestinationId)), done: false };
              return obj1;
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
            let obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_0 = value.filter(sharedContent(tmp80[17]).isNotNullish);
            if (0 === closure_128_0.length) {
              let obj11 = sharedContent(tmp80[18]);
              const intl3 = sharedContent(tmp80[14]).intl;
              obj11.showInformationToast(intl3.string(sharedContent(tmp80[14]).t.wFcUiF));
              c3 = 0;
              closure_129_6(false);
              closure_129_7.current = false;
              React = 3;
              let obj3 = { value: undefined, done: true };
              return obj3;
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
              const obj4 = {
                value: tmp3(tmp80[19])(closure_128_0.map((() => {
                            closure_0 = dependencyMap(function*(arg0) {
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
                                      const attachment_mimetypes = tmp3;
                                      const attachments = tmp2;
                                      closure_129_0 = undefined;
                                      channel = channel.getChannel(closure_0);
                                      closure_129_0 = channel;
                                      if (null == channel) {
                                        c4 = 3;
                                        return { value: false, done: true };
                                      } else {
                                        let obj1 = closure_3_0(paths[18]);
                                        obj1 = { attachments, channel, comment };
                                        c3 = 1;
                                        c4 = 1;
                                        const obj2 = { value: obj1.sendShareMessage(obj1), done: false };
                                        return obj2;
                                      }
                                    }
                                  } else if (arg0 === 1) {
                                    c4 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c4 = 3;
                                    obj = { value, done: true };
                                    return obj;
                                  } else {
                                    const obj3 = { guild_id: closure_129_0.guild_id, channel_id: closure_129_0.id, channel_type: closure_129_0.type, num_attachments: attachments.length, attachment_mimetypes };
                                    tmp3(paths[20]).track(constants.SHARE_MESSAGE_SENT, obj3);
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
              return obj4;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_128_3 = value;
            if (!closure_128_3.every((status) => "fulfilled" === status.status)) {
              closure_128_5 = closure_129_2.filter((item, index) => "rejected" === dependencyMap[index].status);
              closure_128_6 = React.lazy(() => closure_1_0(paths[25])(paths[24], paths.paths));
              obj3 = sharedContent(tmp80[26]);
              let obj6 = { title: null, content: null, failedDestinations: null };
              const intl = sharedContent(tmp80[14]).intl;
              obj6.title = intl.string(sharedContent(tmp80[14]).t.dA1gbw);
              const intl2 = sharedContent(tmp80[14]).intl;
              const obj7 = { count: closure_128_5.length };
              obj6.content = intl2.formatToPlainString(sharedContent(tmp80[14]).t.thm88D, obj7);
              obj6.failedDestinations = closure_128_5;
              obj3.openAlert("share-failed-alert-modal", closure_1_16(closure_128_6, obj6));
              c3 = 0;
              closure_129_6(false);
              closure_129_7.current = false;
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
          const obj8 = { value, done: true };
          return obj8;
        } else {
          sharedContent(tmp80[22]).transitionToChannel(closure_128_4, { navigationReplace: true, openTextInVoiceIfVoiceChannel: true });
          const obj18 = sharedContent(tmp80[22]);
          if (obj19.isAndroid()) {
            obj = tmp3(tmp80[23]);
            obj.launchApp();
          }
          closure_129_1();
          c3 = 0;
          closure_129_6(false);
          closure_129_7.current = false;
          React = 3;
          const obj9 = { value: undefined, done: true };
          return obj9;
        }
        closure_128_4 = closure_128_0[0];
        obj6 = tmp3(tmp80[21]);
        const obj10 = { channelId: closure_128_4 };
        c4 = 4;
        React = 1;
        obj11 = { value: obj6.fetchMessages(obj10), done: false };
        return obj11;
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
      let obj = { attachments: sharedContent.attachments, isRevamp: true };
      const items = [value2(ShareAttachmentsDefault, obj), ];
      embed = undefined;
      if (tmp != null) {
        embed = tmp.embed;
      }
      obj = { children: null };
      obj = { embed, isLoadingEmbed: isLoading, isRevamp: true };
      items[1] = value2(ShareEmbedDefault, obj);
      obj.children = items;
      let tmp4Result = collapsedCategories(closure_2_17, obj);
    } else {
      tmp4Result = null;
    }
    return tmp4Result;
  }, items2);
  obj = { style: tmp.container, children: null };
  let obj1 = { title: null, headerTitle: null, headerTitleAlign: "center", headerLeft: null, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: null };
  let intl3 = tmp11(tmp9[14]).intl;
  obj1.title = intl3.string(tmp11(tmp9[14]).t["MR7/kg"]);
  obj1.headerTitle = function headerTitle(title) {
    if (closure_5) {
      const intl2 = util.intl;
      let obj = { limit };
      let subtitle = intl2.formatToPlainString(util.t["qqyp/e"], obj);
    } else if (length >= MAX_DESTINATION_COUNT) {
      const intl = util.intl;
      obj = { count: tmp2 };
      subtitle = intl.formatToPlainString(util.t["3Fbkir"], obj);
    }
    return value2(HeaderShared.GenericHeaderTitle, { title: title.children, subtitle, subtitleColor: "text-feedback-warning", variant: "redesign/heading-18/bold" });
  };
  let tmp11Result = tmp11(tmp9[31]);
  let headerCloseButton;
  if (!tmp11Result.isMetaQuest()) {
    tmp11Result = tmp11(tmp9[32]);
    headerCloseButton = tmp11Result.getHeaderCloseButton(onClose);
  }
  obj1.headerLeft = headerCloseButton;
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  const tmp22 = c6;
  const tmp6 = length(noop.useState(false), 2);
  let PX_8;
  if (tmp11Result1.isIOS()) {
    PX_8 = tmp16(tmp9[12]).space.PX_8;
  }
  obj1.headerStatusBarHeight = PX_8;
  const items3 = [closure_16(tmp11(tmp9[29]).Header, obj1), , ];
  let obj2 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations, onSelectedDestinationChange: callback, getRowIsUnavailable: null, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: null, disableLongPress: null };
  let tmp26;
  let tmp16Result = tmp16(tmp9[33]);
  if (sharedContent.attachments.length > 0) {
    tmp26 = getAttachmentsRestriction;
  }
  obj2.getRowIsUnavailable = tmp26;
  obj2.disableSelection = length >= MAX_DESTINATION_COUNT || sharedContent.attachments.length > closure_13;
  tmp11Result1 = tmp11(tmp9[13]);
  obj2.disableLongPress = tmp11(tmp9[13]).isAndroid();
  items3[1] = closure_16(tmp16Result, obj2);
  let obj3 = { text: first1, setText: tmp2Result[1], preview: memo, sendLabel: stringResult, canSend: null, isSending: null, onSend: null, disabled: null, appEntryKey: null };
  let tmp28 = length > 0;
  tmp16Result = tmp16(tmp9[34]);
  if (tmp28) {
    tmp28 = !tmp4;
  }
  let obj4 = { children: null };
  obj3.canSend = tmp28;
  obj3.isSending = tmp7;
  obj3.onSend = callback1;
  obj3.disabled = sharedContent.attachments.length > closure_13;
  obj3.appEntryKey = sharedContent.appEntryKey;
  items3[2] = closure_16(tmp16Result, obj3);
  obj.children = items3;
  obj4.children = closure_18(tmp22, obj);
  return closure_16(tmp11(tmp9[29]).SafeAreaProviderCompat, obj4);
};