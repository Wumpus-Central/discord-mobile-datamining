// discord_app/modules/share/native/ShareScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import ShareAttachmentsDefault from "ShareAttachments.tsx";
import ShareEmbedDefault from "ShareEmbed.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

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
const ChannelRecord = fn(2045);
({ ChannelRecordBase: closure_7, isGuildChannelType: closure_8 } = ChannelRecord);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, Permissions: closure_12, MAX_UPLOAD_COUNT: map1 } = Constants);
const MAX_DESTINATION_COUNT = fn(11933).MAX_DESTINATION_COUNT;
const UserRowModes = fn(11121).UserRowModes;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  headerLeftContainer: null,
  headerRightContainer: null,
};
let PlatformUtils = fn(1364);
let num = 0;
if (PlatformUtils.isIOS()) {
  num = nativeDefault.space.PX_16;
}
obj2.headerLeftContainer = { paddingLeft: num };
PlatformUtils = fn(1364);
let num2 = 0;
if (PlatformUtils.isIOS()) {
  num2 = nativeDefault.space.PX_16;
}
obj2.headerRightContainer = { paddingRight: num2 };
let closure_19 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareScreen.tsx");

export default function ShareScreen(appEntryKey) {
  appEntryKey = appEntryKey.appEntryKey;
  const sharedContent = appEntryKey.sharedContent;
  const onClose = appEntryKey.onClose;
  initialSelectedDestinations = undefined;
  _slicedToArray = undefined;
  let length;
  c8 = undefined;
  let first1;
  let embed;
  let isLoading;
  const tmp = closure_19();
  let items = [sharedContent];
  [initialSelectedDestinations, _slicedToArray] = length.useState(
    length.useMemo(() => {
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
    }, items),
  );
  length = initialSelectedDestinations.length;
  closure_6 = tmp4;
  const callback = length.useCallback((arg0) => {
    closure_4(arg0);
  }, []);
  const tmp6 = _slicedToArray(length.useState(0), 2);
  closure_7 = tmp6[1];
  [tmp8, c8] = length.useState(false);
  closure_9 = length.useRef(tmp8);
  if (length <= 1) {
    let intl2 = appEntryKey(onClose[14]).intl;
    let stringResult = intl2.string(appEntryKey(onClose[14]).t.TXNS7S);
    let tmp10 = onClose;
    let tmp12 = appEntryKey;
  } else {
    tmp10 = onClose;
    let intl = appEntryKey(onClose[14]).intl;
    let obj2 = { count: length };
    stringResult = intl.formatToPlainString(appEntryKey(onClose[14]).t.jWtYUm, obj2);
    tmp12 = appEntryKey;
  }
  let str = sharedContent.text;
  if (str == null) {
    str = "";
  }
  const tmp2Result = _slicedToArray(length.useState(str), 2);
  first1 = tmp2Result[0];
  const tmp18 = sharedContent(tmp10[15])(first1);
  embed = tmp18.embed;
  isLoading = tmp18.isLoading;
  const items1 = [appEntryKey, onClose, initialSelectedDestinations, sharedContent.attachments, first1];
  const items2 = [embed, isLoading, sharedContent.attachments];
  const callback1 = obj.useCallback(
    initialSelectedDestinations(function* () {
      if (React === 2) {
        React = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
              appEntryKey = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              let attachments;
              closure_128_3 = undefined;
              closure_128_4 = undefined;
              closure_128_5 = undefined;
              let sentDestinations;
              let failedDestinations;
              let transitionChannelId;
              let uploadErrorToAlert;
              closure_128_10 = undefined;
              if (!ref.current) {
                ref.current = true;
                _undefined(true);
                c3 = 1;
                c4 = 2;
                React = 1;
                let obj5 = {
                  value: Promise.all(first.map(appEntryKey(tmp103[16]).getOrResolveChannelIdFromDestinationId)),
                  done: false,
                };
                return obj5;
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_129_8(false);
            closure_129_9.current = false;
            throw tmp103;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              React = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_8(false);
              closure_129_9.current = false;
              React = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_128_0 = value;
              closure_128_1 = appEntryKey(tmp103[17]).pairDestinationsWithChannels(closure_129_3, closure_128_0);
              if (0 === closure_128_1.length) {
                const intl3 = appEntryKey(tmp103[14]).intl;
                appEntryKey(tmp103[18]).showInformationToast(intl3.string(appEntryKey(tmp103[14]).t.wFcUiF));
                c3 = 0;
                closure_129_8(false);
                closure_129_9.current = false;
                React = 3;
                let obj8 = { value: undefined, done: true };
                return obj8;
              } else {
                attachments = closure_129_1.attachments;
                closure_128_3 = attachments.map((mimeType) => {
                  let str = mimeType.mimeType;
                  if (str == null) {
                    str = "unknown";
                  }
                  return str;
                });
                c4 = 3;
                React = 1;
                let obj9 = {
                  value: Promise.all(
                    closure_128_1.map(
                      (() => {
                        closure_0 = c3(function* (arg0) {
                          if (c6 === 2) {
                            c6 = 3;
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
                              c6 = 2;
                              if (0 === c5) {
                                if (arg0 === 1) {
                                  c6 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c6 = 3;
                                  const obj3 = { value, done: true };
                                  return obj3;
                                } else {
                                  const attachments = tmp3;
                                  closure_1 = tmp7;
                                  closure_129_0 = undefined;
                                  closure_129_1 = undefined;
                                  ({ destination: closure_129_0, channelId: closure_129_1 } = closure_0);
                                  let channel2;
                                  c5 = 1;
                                  c6 = 1;
                                  return { value: "PX_16", done: true };
                                }
                              } else if (1 === tmp7) {
                                if (arg0 === 1) {
                                  c6 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c6 = 3;
                                  const obj5 = { value, done: true };
                                  return obj5;
                                } else {
                                  channel2 = channel.getChannel(closure_129_1);
                                  if (null == channel2) {
                                    const obj7 = { status: "failed", destination: closure_129_0, uploadError: null };
                                    c6 = 3;
                                    const obj8 = { value: obj7, done: true };
                                    return obj8;
                                  } else {
                                    c4 = 1;
                                    const obj9 = { attachments, channel: channel2, comment };
                                    c5 = 3;
                                    c6 = 1;
                                    const obj10 = { value: closure_3_0(paths[18]).sendShareMessage(obj9), done: false };
                                    return obj10;
                                  }
                                }
                              } else if (2 === tmp7) {
                                c4 = 0;
                                closure_129_3 = attachment_mimetypes;
                                const obj11 = {
                                  status: "failed",
                                  destination: closure_129_0,
                                  uploadError: closure_3_0(paths[17]).getShareUploadError(closure_129_3),
                                };
                                c6 = 3;
                                const obj12 = { value: obj11, done: true };
                                return obj12;
                              } else if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c4 = 0;
                                c6 = 3;
                                const obj13 = { value, done: true };
                                return obj13;
                              } else {
                                c4 = 0;
                                const obj15 = {
                                  guild_id: channel2.guild_id,
                                  channel_id: channel2.id,
                                  channel_type: channel2.type,
                                  num_attachments: attachments.length,
                                  attachment_mimetypes,
                                };
                                tmp3(paths[19]).track(constants.SHARE_MESSAGE_SENT, obj15);
                                const obj16 = { status: "sent", destination: closure_129_0, channelId: closure_129_1 };
                                c6 = 3;
                                const obj = { value: obj16, done: true };
                                return obj;
                              }
                            } catch (tmp26) {
                              attachment_mimetypes = tmp26;
                              if (tmp4 === c4) {
                                c6 = tmp2;
                                throw tmp26;
                              } else {
                                c5 = tmp;
                              }
                            }
                          }
                        });
                        return function () {
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
                    ),
                  ),
                  done: false,
                };
                return obj9;
              }
              const obj23 = appEntryKey(tmp103[17]);
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              React = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_8(false);
              closure_129_9.current = false;
              React = 3;
              let obj10 = { value, done: true };
              return obj10;
            } else {
              closure_128_4 = value;
              closure_128_5 = appEntryKey(tmp103[17]).resolveShareSendOutcome(closure_128_4);
              sentDestinations = closure_128_5.sentDestinations;
              failedDestinations = closure_128_5.failedDestinations;
              transitionChannelId = closure_128_5.transitionChannelId;
              uploadErrorToAlert = closure_128_5.uploadErrorToAlert;
              if (0 === failedDestinations.length) {
                if (null != transitionChannelId) {
                  let obj11 = { channelId: transitionChannelId };
                  c4 = 4;
                  React = 1;
                  let obj13 = { value: tmp3(tmp103[20]).fetchMessages(obj11), done: false };
                  return obj13;
                }
              }
              if (sentDestinations.length > 0) {
                closure_129_4((arr) => appEntryKey(onClose[17]).withoutSentDestinations(arr, closure_1_6));
                closure_129_7((arg0) => arg0 + 1);
              }
              if (null == uploadErrorToAlert) {
                closure_128_10 = React.lazy(() => closure_1_0(paths[25])(paths[24], paths.paths));
                const obj14 = { title: null, content: null, failedDestinations: null };
                const intl = appEntryKey(tmp103[14]).intl;
                obj14.title = intl.string(appEntryKey(tmp103[14]).t.dA1gbw);
                const intl2 = appEntryKey(tmp103[14]).intl;
                let obj15 = { count: failedDestinations.length };
                obj14.content = intl2.formatToPlainString(appEntryKey(tmp103[14]).t.thm88D, obj15);
                obj14.failedDestinations = failedDestinations;
                appEntryKey(tmp103[26]).openAlert("share-failed-alert-modal", closure_1_16(closure_128_10, obj14));
                c3 = 0;
                closure_129_8(false);
                closure_129_9.current = false;
                const obj4 = appEntryKey(tmp103[26]);
              } else {
                appEntryKey(tmp103[23]);
                let obj16 = {
                  file: uploadErrorToAlert.file,
                  guildId: uploadErrorToAlert.guildId,
                  analyticsLocations: [],
                  code: uploadErrorToAlert.code,
                  reason: uploadErrorToAlert.reason,
                  appEntryKey: closure_129_0,
                };
              }
              c3 = 0;
              closure_129_8(false);
              closure_129_9.current = false;
              React = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            React = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_8(false);
            closure_129_9.current = false;
            React = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            appEntryKey(tmp103[21]).transitionToChannel(transitionChannelId, {
              navigationReplace: true,
              openTextInVoiceIfVoiceChannel: true,
            });
            const obj18 = appEntryKey(tmp103[21]);
            if (obj19.isAndroid()) {
              tmp3(tmp103[22]).launchApp();
              let obj = tmp3(tmp103[22]);
            }
            closure_129_2();
            c3 = 0;
            closure_129_8(false);
            closure_129_9.current = false;
            React = 3;
            const obj22 = { value: undefined, done: true };
            return obj22;
          }
          React = 3;
        } catch (tmp103) {
          if (tmp4 === c3) {
            React = tmp2;
            throw tmp103;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items1,
  );
  const memo = obj.useMemo(() => {
    if (null != embed) {
      const obj = { attachments: sharedContent.attachments, isRevamp: true };
      const items = [value2(ShareAttachmentsDefault, obj)];
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
  let obj5 = {
    title: null,
    headerTitle: null,
    headerTitleAlign: "center",
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null,
  };
  let intl3 = tmp12(tmp10[14]).intl;
  obj5.title = intl3.string(tmp12(tmp10[14]).t["MR7/kg"]);
  obj5.headerTitle = function headerTitle(title) {
    if (closure_6) {
      const intl2 = util.intl;
      const obj2 = { limit };
      let subtitle = intl2.formatToPlainString(util.t["qqyp/e"], obj2);
    } else if (length >= MAX_DESTINATION_COUNT) {
      const intl = util.intl;
      const obj = { count: tmp2 };
      subtitle = intl.formatToPlainString(util.t["3Fbkir"], obj);
    }
    return value2(HeaderShared.GenericHeaderTitle, {
      title: title.children,
      subtitle,
      subtitleColor: "text-feedback-warning",
      variant: "redesign/heading-18/bold",
    });
  };
  const tmp23 = closure_6;
  const tmp7 = _slicedToArray(length.useState(false), 2);
  let headerCloseButton;
  if (!tmp12Result.isMetaQuest()) {
    headerCloseButton = tmp12(tmp10[32]).getHeaderCloseButton(onClose);
    const tmp12Result4 = tmp12(tmp10[32]);
  }
  obj5.headerLeft = headerCloseButton;
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  tmp12Result = tmp12(tmp10[31]);
  let PX_8;
  if (tmp12Result5.isIOS()) {
    PX_8 = tmp17(tmp10[12]).space.PX_8;
  }
  obj5.headerStatusBarHeight = PX_8;
  const items3 = [closure_16(tmp12(tmp10[29]).Header, obj5), ,];
  let obj6 = {
    rowMode: UserRowModes.TOGGLE,
    initialSelectedDestinations,
    onSelectedDestinationChange: callback,
    getRowIsUnavailable: null,
    insetEnd: 0,
    disableGradient: true,
    disableStickySections: true,
    disableSelection: null,
    disableLongPress: null,
  };
  let tmp27;
  tmp12Result5 = tmp12(tmp10[13]);
  if (sharedContent.attachments.length > 0) {
    tmp27 = getAttachmentsRestriction;
  }
  obj6.getRowIsUnavailable = tmp27;
  obj6.disableSelection = length >= MAX_DESTINATION_COUNT || sharedContent.attachments.length > closure_13;
  const tmp17Result = sharedContent(tmp10[33]);
  obj6.disableLongPress = tmp12(tmp10[13]).isAndroid();
  items3[1] = closure_16(tmp17Result, obj6, tmp6[0]);
  let obj7 = {
    text: first1,
    setText: tmp2Result[1],
    preview: memo,
    sendLabel: stringResult,
    canSend: null,
    isSending: null,
    onSend: null,
    disabled: null,
    appEntryKey: null,
  };
  let tmp29 = length > 0;
  const tmp12Result6 = tmp12(tmp10[13]);
  if (tmp29) {
    tmp29 = !tmp4;
  }
  let obj8 = { children: null };
  obj7.canSend = tmp29;
  obj7.isSending = tmp8;
  obj7.onSend = callback1;
  obj7.disabled = sharedContent.attachments.length > closure_13;
  obj7.appEntryKey = appEntryKey;
  items3[2] = closure_16(sharedContent(tmp10[34]), obj7);
  obj3.children = items3;
  obj8.children = closure_18(tmp23, obj3);
  return closure_16(tmp12(tmp10[29]).SafeAreaProviderCompat, obj8);
}
