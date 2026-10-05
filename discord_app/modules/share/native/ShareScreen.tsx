// === Module 13712: ShareScreen ===

// Module 13712 (ShareScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import UserRowConstants from "UserRowConstants" /* 10592 */;
import ForwardConstants from "ForwardConstants" /* 11309 */;
import ShareAttachmentsDefault from "ShareAttachments" /* 13716 */;
import ShareEmbedDefault from "ShareEmbed" /* 13717 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let React, c4, c5, c6, closure_0, closure_1, closure_4;

let closure_12;
let closure_16;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
let metroImportDefault;
let num;
let num2;
let obj2;
let unpackModuleId;
function getAttachmentsRestriction(type) {
  let intl;
  if (type instanceof metroImportDefault) {
    if (metroImportAll(type.type)) {
      let tmp4;
      if (!PermissionStore.can(constants.ATTACH_FILES, type)) {
        const obj = { label: intl.string(intl4.t.P7yvbm) };
        intl = intl4.intl;
        tmp4 = obj;
      }
      return tmp4;
    }
  }
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ ChannelRecordBase: metroImportDefault, isGuildChannelType: metroImportAll } = ChannelRecord);
({ AnalyticEvents: unpackModuleId, Permissions: closure_12, MAX_UPLOAD_COUNT: map1 } = Constants);
const MAX_DESTINATION_COUNT = ForwardConstants.MAX_DESTINATION_COUNT;
const UserRowModes = UserRowConstants.UserRowModes;
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerLeftContainer: { paddingLeft: num }, headerRightContainer: { paddingRight: num2 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
num = 0;
if (PlatformUtils.isIOS()) {
  num = nativeDefault.space.PX_16;
}
PlatformUtils = PlatformUtils_mod;
num2 = 0;
if (PlatformUtils.isIOS()) {
  num2 = nativeDefault.space.PX_16;
}
let closure_19 = createStyles(obj);
const result = size.fileFinishedImporting("modules/share/native/ShareScreen.tsx");

export default function ShareScreen(appEntryKey) {
  let PX_8;
  let _undefined;
  let c8;
  let closure_7;
  let first1;
  let headerCloseButton;
  let initialSelectedDestinations;
  let intl3;
  let items3;
  let stringResult;
  let tmp11;
  let tmp13;
  let tmp13Result6;
  let tmp29;
  let tmp31;
  let tmp9;
  appEntryKey = appEntryKey.appEntryKey;
  const sharedContent = appEntryKey.sharedContent;
  const onClose = appEntryKey.onClose;
  initialSelectedDestinations = undefined;
  _slicedToArray = undefined;
  let length;
  closure_7 = undefined;
  c8 = undefined;
  let first2;
  let embed;
  let isLoading;
  let tmp = closure_19();
  let obj = length;
  let items = [sharedContent];
  const tmp2 = _slicedToArray;
  [initialSelectedDestinations, _slicedToArray] = length.useState(length.useMemo(() => {
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
  }, items));
  length = initialSelectedDestinations.length;
  let tmp4 = sharedContent.attachments.length > closure_13;
  let closure_6 = tmp4;
  const callback = length.useCallback((arg0) => {
    closure_4(arg0);
  }, []);
  [first1, closure_7] = length.useState(0);
  [tmp9, c8] = _slicedToArray(length.useState(false), 2);
  const tmp8 = _slicedToArray(length.useState(false), 2);
  let closure_9 = length.useRef(tmp9);
  if (length <= 1) {
    let tmp14 = appEntryKey;
    let intl2 = appEntryKey(onClose[14]).intl;
    stringResult = intl2.string(appEntryKey(onClose[14]).t.TXNS7S);
    tmp11 = onClose;
    tmp13 = appEntryKey;
  } else {
    let tmp10 = appEntryKey;
    tmp11 = onClose;
    let intl = appEntryKey(onClose[14]).intl;
    let obj2 = { count: length };
    stringResult = intl.formatToPlainString(appEntryKey(onClose[14]).t.jWtYUm, obj2);
    tmp13 = appEntryKey;
  }
  let str = sharedContent.text;
  const useState = obj.useState;
  if (str == null) {
    str = "";
  }
  const tmp2Result = tmp2(useState(str), 2);
  first2 = tmp2Result[0];
  let tmp18 = tmp2Result[1];
  let tmp20 = sharedContent(tmp11[15])(first2);
  embed = tmp20.embed;
  isLoading = tmp20.isLoading;
  const items1 = [appEntryKey, onClose, initialSelectedDestinations, sharedContent.attachments, first2];
  const items2 = [embed, isLoading, sharedContent.attachments];
  const callback1 = obj.useCallback(initialSelectedDestinations(function*() {
    let closure_2;
    let intl;
    let intl2;
    let obj14;
    let paths;
    if (React === 2) {
      React = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let tmp;
        let attachments;
        let sentDestinations;
        let failedDestinations;
        let transitionChannelId;
        let uploadErrorToAlert;
        let closure_10;
        React = 2;
        const tmp4 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            React = 3;
            throw value;
          } else if (arg0 === 2) {
            React = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            appEntryKey = undefined;
            tmp = undefined;
            attachments = undefined;
            let closure_3;
            closure_4 = undefined;
            React = undefined;
            sentDestinations = undefined;
            failedDestinations = undefined;
            transitionChannelId = undefined;
            uploadErrorToAlert = undefined;
            closure_10 = undefined;
            if (!ref.current) {
              ref.current = true;
              _undefined(true);
              c3 = 1;
              c4 = 2;
              React = 1;
              let obj4 = { value: Promise.all(first.map(appEntryKey(paths[16]).getOrResolveChannelIdFromDestinationId)), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_129_8(false);
          closure_129_9.current = false;
          throw paths;
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            React = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_8(false);
            closure_129_9.current = false;
            React = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            appEntryKey = value;
            const obj21 = appEntryKey(paths[17]);
            tmp = obj21.pairDestinationsWithChannels(closure_129_3, appEntryKey);
            if (0 === tmp.length) {
              const showInformationToast = appEntryKey(paths[18]).showInformationToast;
              const tmp76 = appEntryKey(paths[18]);
              const intl3 = appEntryKey(paths[14]).intl;
              showInformationToast(intl3.string(appEntryKey(paths[14]).t.wFcUiF));
              c3 = 0;
              closure_129_8(false);
              closure_129_9.current = false;
              React = 3;
              let obj7 = { value: undefined, done: true };
              return obj7;
            } else {
              attachments = closure_129_1.attachments;
              closure_3 = attachments.map((mimeType) => {
                let str = mimeType.mimeType;
                if (str == null) {
                  str = "unknown";
                }
                return str;
              });
              c4 = 3;
              React = 1;
              let obj8 = {
                value: Promise.all(tmp.map((() => {
                            let comment;
                            closure_0 = c3(function*(destination) {
                              let attachment_mimetypes;
                              let c0;
                              let c1;
                              let obj4;
                              let obj6;
                              if (c6 === 2) {
                                c6 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp3 === 3) {
                                if (destination === 1) {
                                  throw value;
                                } else if (destination === 2) {
                                  const obj2 = { value, done: true };
                                  return obj2;
                                } else {
                                  return { value: "IconComponent", done: null };
                                }
                              } else {
                                try {
                                  let channelId;
                                  let tmp;
                                  c6 = 2;
                                  if (0 === c5) {
                                    if (destination === 1) {
                                      c6 = 3;
                                      throw value;
                                    } else if (destination === 2) {
                                      c6 = 3;
                                      const obj3 = { value, done: true };
                                      return obj3;
                                    } else {
                                      closure_1 = tmp4;
                                      destination = undefined;
                                      channelId = undefined;
                                      ({ destination: c0, channelId: c1 } = closure_0);
                                      tmp = undefined;
                                      c5 = 1;
                                      c6 = 1;
                                      return { value: "Set", done: true };
                                    }
                                  } else if (1 === c5) {
                                    if (destination === 1) {
                                      c6 = 3;
                                      throw value;
                                    } else if (destination === 2) {
                                      c6 = 3;
                                      const obj5 = { value, done: true };
                                      return obj5;
                                    } else {
                                      tmp = channel.getChannel(channelId);
                                      if (null == tmp) {
                                        const obj7 = { status: "failed", destination, uploadError: null };
                                        c6 = 3;
                                        const obj8 = { value: obj7, done: true };
                                        return obj8;
                                      } else {
                                        c4 = 1;
                                        const obj9 = { attachments: tmp, channel: tmp, comment };
                                        c5 = 3;
                                        c6 = 1;
                                        const obj10 = { value: obj6.sendShareMessage(obj9), done: false };
                                        obj6 = closure_3_0(paths[18]);
                                        return obj10;
                                      }
                                    }
                                  } else if (2 === c5) {
                                    c4 = 0;
                                    const obj11 = { status: "failed", destination, uploadError: obj4.getShareUploadError(attachment_mimetypes) };
                                    obj4 = closure_3_0(paths[17]);
                                    c6 = 3;
                                    const obj12 = { value: obj11, done: true };
                                    return obj12;
                                  } else if (destination === 1) {
                                    c6 = 3;
                                    throw value;
                                  } else if (destination === 2) {
                                    c4 = 0;
                                    c6 = 3;
                                    const obj13 = { value, done: true };
                                    return obj13;
                                  } else {
                                    c4 = 0;
                                    const obj15 = { guild_id: tmp.guild_id, channel_id: tmp.id, channel_type: tmp.type, num_attachments: tmp.length, attachment_mimetypes };
                                    const obj14 = tmp(paths[19]);
                                    obj14.track(constants.SHARE_MESSAGE_SENT, obj15);
                                    const obj16 = { status: "sent", destination, channelId };
                                    c6 = 3;
                                    const obj = { value: obj16, done: true };
                                    return obj;
                                  }
                                } catch (tmp23) {
                                  attachment_mimetypes = tmp23;
                                  if (0 === c4) {
                                    c6 = 3;
                                    throw tmp23;
                                  } else {
                                    c5 = 2;
                                  }
                                }
                              }
                            });
                            return function() {
                              return closure_0(...arguments);
                            };
                          })())),
                done: false
              };
              return obj8;
            }
          }
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            React = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_8(false);
            closure_129_9.current = false;
            React = 3;
            let obj9 = { value, done: true };
            return obj9;
          } else {
            closure_4 = value;
            const obj18 = appEntryKey(paths[17]);
            React = obj18.resolveShareSendOutcome(closure_4);
            sentDestinations = React.sentDestinations;
            failedDestinations = React.failedDestinations;
            transitionChannelId = React.transitionChannelId;
            uploadErrorToAlert = React.uploadErrorToAlert;
            if (0 === failedDestinations.length) {
              if (null != transitionChannelId) {
                let obj6 = tmp(paths[20]);
                let obj10 = { channelId: transitionChannelId };
                c4 = 4;
                React = 1;
                let obj11 = { value: obj6.fetchMessages(obj10), done: false };
                return obj11;
              }
            }
            const tmp23 = sentDestinations;
            if (sentDestinations.length > 0) {
              const tmp27 = closure_129_4((arr) => {
                const obj = appEntryKey(onClose[17]);
                return obj.withoutSentDestinations(arr, closure_1_6);
              });
              const tmp29 = closure_129_7((arg0) => arg0 + 1);
            }
            if (null != uploadErrorToAlert) {
              let obj12 = { file: uploadErrorToAlert.file, guildId: uploadErrorToAlert.guildId, analyticsLocations: [], code: uploadErrorToAlert.code, reason: uploadErrorToAlert.reason, appEntryKey: closure_129_0 };
              const obj19 = appEntryKey(paths[23]);
              if (obj19.handleUploadMessageAttachmentsErrors(obj12)) {
                c3 = 0;
                closure_129_8(false);
                closure_129_9.current = false;
                React = 3;
                return { value: "IconComponent", done: null };
              }
            }
            closure_10 = React.lazy(() => closure_1_0(paths[25])(paths[24], paths.paths));
            const tmp37 = appEntryKey(paths[26]);
            let obj13 = { title: intl.string(appEntryKey(paths[14]).t.dA1gbw), content: intl2.formatToPlainString(appEntryKey(paths[14]).t.thm88D, obj14), failedDestinations };
            const openAlert = tmp37.openAlert;
            intl = appEntryKey(paths[14]).intl;
            intl2 = appEntryKey(paths[14]).intl;
            obj14 = { count: failedDestinations.length };
            openAlert("share-failed-alert-modal", closure_1_16(closure_10, obj13));
            c3 = 0;
            closure_129_8(false);
            closure_129_9.current = false;
          }
        } else if (arg0 === 1) {
          React = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          const tmp18 = closure_129_8(false);
          closure_129_9.current = false;
          React = 3;
          let obj15 = { value, done: true };
          return obj15;
        } else {
          let obj16 = appEntryKey(paths[21]);
          obj16.transitionToChannel(transitionChannelId, { navigationReplace: true, openTextInVoiceIfVoiceChannel: true });
          const obj17 = appEntryKey(paths[13]);
          if (obj17.isAndroid()) {
            let obj = tmp(paths[22]);
            obj.launchApp();
          }
          closure_129_2();
          c3 = 0;
          const tmp14 = closure_129_8(false);
          closure_129_9.current = false;
          React = 3;
          const obj20 = { value: undefined, done: true };
          return obj20;
        }
        React = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp102) {
        paths = tmp102;
        if (0 === c3) {
          React = 3;
          throw tmp102;
        } else {
          c4 = 1;
        }
      }
    }
  }), items1);
  const memo = obj.useMemo(() => {
    let tmp4Result;
    if (null != embed) {
      const obj = { attachments: sharedContent.attachments, isRevamp: true };
      const items = [authStore3(ShareAttachmentsDefault, obj), ];
      embed = undefined;
      const tmp10 = ShareEmbedDefault;
      if (embed != null) {
        embed = tmp.embed;
      }
      const obj2 = { children: items };
      const obj3 = { embed, isLoadingEmbed: isLoading, isRevamp: true };
      items[1] = authStore3(tmp10, obj3);
      tmp4Result = authStore4(closure_17, obj2);
    } else {
      tmp4Result = null;
    }
    return tmp4Result;
  }, items2);
  let obj3 = { style: tmp.container, children: items3 };
  const SafeAreaProviderCompat = tmp13(tmp11[29]).SafeAreaProviderCompat;
  let tmp25 = closure_6;
  let obj5 = {
    title: intl3.string(tmp13(tmp11[14]).t["MR7/kg"]),
    headerTitle(children) {
      let subtitle;
      const title = children.children;
      if (closure_6) {
        const intl2 = intl4.intl;
        const obj2 = { limit: map1 };
        subtitle = intl2.formatToPlainString(intl4.t["qqyp/e"], obj2);
      } else if (length >= MAX_DESTINATION_COUNT) {
        const intl = intl4.intl;
        const obj = { count: tmp2 };
        subtitle = intl.formatToPlainString(intl4.t["3Fbkir"], obj);
      }
      return authStore3(HeaderShared.GenericHeaderTitle, { title, subtitle, subtitleColor: "text-feedback-warning", variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: headerCloseButton,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: PX_8
  };
  const Header = tmp13(tmp11[29]).Header;
  intl3 = tmp13(tmp11[14]).intl;
  headerCloseButton = undefined;
  const tmp13Result = tmp13(tmp11[31]);
  if (!tmp13Result.isMetaQuest()) {
    const tmp13Result4 = tmp13(tmp11[32]);
    headerCloseButton = tmp13Result4.getHeaderCloseButton(onClose);
  }
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  PX_8 = undefined;
  const tmp13Result5 = tmp13(tmp11[13]);
  if (tmp13Result5.isIOS()) {
    PX_8 = tmp19(tmp11[12]).space.PX_8;
  }
  items3 = [closure_16(Header, obj5), , ];
  let obj6 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations, onSelectedDestinationChange: callback, getRowIsUnavailable: tmp29, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: length >= MAX_DESTINATION_COUNT || tmp4, disableLongPress: tmp13Result6.isAndroid() };
  tmp29 = undefined;
  const tmp19Result = sharedContent(tmp11[33]);
  if (sharedContent.attachments.length > 0) {
    tmp29 = getAttachmentsRestriction;
  }
  tmp13Result6 = tmp13(tmp11[13]);
  items3[1] = closure_16(tmp19Result, obj6, first1);
  let obj7 = { text: first2, setText: tmp18, preview: memo, sendLabel: stringResult, canSend: tmp31, isSending: tmp9, onSend: callback1, disabled: tmp4, appEntryKey };
  tmp31 = length > 0;
  const tmp19Result2 = sharedContent(tmp11[34]);
  if (tmp31) {
    tmp31 = !tmp4;
  }
  let obj8 = { children: closure_18(tmp25, obj3) };
  items3[2] = closure_16(tmp19Result2, obj7);
  return closure_16(SafeAreaProviderCompat, obj8);
};