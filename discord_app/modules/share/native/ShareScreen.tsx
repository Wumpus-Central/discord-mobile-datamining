// === Module 15147: ShareScreen ===

// Module 15147 (ShareScreen)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import ShareAttachmentsDefault from "ShareAttachments" /* 15151 */;
import ShareEmbedDefault from "ShareEmbed" /* 15152 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import PermissionStore from "PermissionStore" /* 4903 */;

require = fn;
function getAttachmentsRestriction(type) {
  if (type instanceof React5) {
    if (closure_1_8(type.type)) {
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
const ChannelRecord = fn(4827);
({ ChannelRecordBase: closure_7, isGuildChannelType: closure_8 } = ChannelRecord);
const Constants = fn(1087);
({ AnalyticEvents: closure_11, Permissions: closure_12, MAX_UPLOAD_COUNT: map1 } = Constants);
const MAX_DESTINATION_COUNT = fn(12906).MAX_DESTINATION_COUNT;
const UserRowModes = fn(10616).UserRowModes;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4971);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_19 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareScreen.tsx");

export default function ShareScreen(appEntryKey) {
  appEntryKey = appEntryKey.appEntryKey;
  const sharedContent = appEntryKey.sharedContent;
  const onClose = appEntryKey.onClose;
  initialSelectedDestinations = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c6 = undefined;
  closure_7 = undefined;
  let first1;
  let embed;
  let isLoading;
  let items = [sharedContent];
  [initialSelectedDestinations, _slicedToArray] = noop.useState(noop.useMemo(() => {
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
  if (sharedContent.attachments.length > closure_13) {
    let intl2 = appEntryKey(onClose[13]).intl;
    let obj2 = { limit: tmp4 };
    let formatToPlainStringResult = intl2.formatToPlainString(appEntryKey(onClose[13]).t["qqyp/e"], obj2);
  } else if (length >= MAX_DESTINATION_COUNT) {
    let intl = appEntryKey(onClose[13]).intl;
    let obj3 = { count: tmp6 };
    formatToPlainStringResult = intl.formatToPlainString(appEntryKey(onClose[13]).t["3Fbkir"], obj3);
  }
  const callback = obj.useCallback((arg0) => {
    closure_4(arg0);
  }, []);
  const tmp2Result = _slicedToArray(noop.useState(0), 2);
  noop = tmp2Result[1];
  const tmp = closure_19();
  [tmp15, c6] = noop.useState(false);
  closure_7 = obj.useRef(tmp15);
  if (initialSelectedDestinations.length <= 1) {
    const intl4 = appEntryKey(onClose[13]).intl;
    let stringResult = intl4.string(appEntryKey(onClose[13]).t.TXNS7S);
    let tmp17 = onClose;
    let tmp19 = appEntryKey;
  } else {
    tmp17 = onClose;
    let intl3 = appEntryKey(onClose[13]).intl;
    let obj4 = { count: length };
    stringResult = intl3.formatToPlainString(appEntryKey(onClose[13]).t.jWtYUm, obj4);
    tmp19 = appEntryKey;
  }
  let str = sharedContent.text;
  if (str == null) {
    str = "";
  }
  const tmp2Result4 = _slicedToArray(noop.useState(str), 2);
  first1 = tmp2Result4[0];
  const tmp25 = sharedContent(tmp17[14])(first1);
  embed = tmp25.embed;
  isLoading = tmp25.isLoading;
  const items1 = [appEntryKey, onClose, initialSelectedDestinations, sharedContent.attachments, first1];
  const items2 = [embed, isLoading, sharedContent.attachments];
  const callback1 = obj.useCallback(initialSelectedDestinations(function*() {
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
        return { value: "IconComponent", done: null };
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
              let obj5 = { value: Promise.all(first.map(appEntryKey(tmp103[15]).getOrResolveChannelIdFromDestinationId)), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_129_6(false);
          closure_129_7.current = false;
          throw tmp103;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            React = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_6(false);
            closure_129_7.current = false;
            React = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_0 = value;
            closure_128_1 = appEntryKey(tmp103[16]).pairDestinationsWithChannels(closure_129_3, closure_128_0);
            if (0 === closure_128_1.length) {
              const intl3 = appEntryKey(tmp103[13]).intl;
              appEntryKey(tmp103[17]).showInformationToast(intl3.string(appEntryKey(tmp103[13]).t.wFcUiF));
              c3 = 0;
              closure_129_6(false);
              closure_129_7.current = false;
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
                value: Promise.all(closure_128_1.map((() => {
                            closure_0 = c3(function*(arg0) {
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
                                  return { value: "IconComponent", done: null };
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
                                      return { value: "Reflect", done: true };
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
                                        const obj10 = { value: closure_3_0(paths[17]).sendShareMessage(obj9), done: false };
                                        return obj10;
                                      }
                                    }
                                  } else if (2 === tmp7) {
                                    c4 = 0;
                                    closure_129_3 = attachment_mimetypes;
                                    const obj11 = { status: "failed", destination: closure_129_0, uploadError: closure_3_0(paths[16]).getShareUploadError(closure_129_3) };
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
                                    const obj15 = { guild_id: channel2.guild_id, channel_id: channel2.id, channel_type: channel2.type, num_attachments: attachments.length, attachment_mimetypes };
                                    tmp3(paths[18]).track(constants.SHARE_MESSAGE_SENT, obj15);
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
            const obj23 = appEntryKey(tmp103[16]);
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
            let obj10 = { value, done: true };
            return obj10;
          } else {
            closure_128_4 = value;
            closure_128_5 = appEntryKey(tmp103[16]).resolveShareSendOutcome(closure_128_4);
            sentDestinations = closure_128_5.sentDestinations;
            failedDestinations = closure_128_5.failedDestinations;
            transitionChannelId = closure_128_5.transitionChannelId;
            uploadErrorToAlert = closure_128_5.uploadErrorToAlert;
            if (0 === failedDestinations.length) {
              if (null != transitionChannelId) {
                let obj11 = { channelId: transitionChannelId };
                c4 = 4;
                React = 1;
                let obj13 = { value: tmp3(tmp103[19]).fetchMessages(obj11), done: false };
                return obj13;
              }
            }
            if (sentDestinations.length > 0) {
              closure_129_4((arr) => appEntryKey(onClose[16]).withoutSentDestinations(arr, closure_1_6));
              closure_129_5((arg0) => arg0 + 1);
            }
            if (null == uploadErrorToAlert) {
              closure_128_10 = React.lazy(() => closure_1_0(paths[25])(paths[24], paths.paths));
              const obj14 = { title: null, content: null, failedDestinations: null };
              const intl = appEntryKey(tmp103[13]).intl;
              obj14.title = intl.string(appEntryKey(tmp103[13]).t.dA1gbw);
              const intl2 = appEntryKey(tmp103[13]).intl;
              let obj15 = { count: failedDestinations.length };
              obj14.content = intl2.formatToPlainString(appEntryKey(tmp103[13]).t.thm88D, obj15);
              obj14.failedDestinations = failedDestinations;
              appEntryKey(tmp103[26]).openAlert("share-failed-alert-modal", closure_1_16(closure_128_10, obj14));
              c3 = 0;
              closure_129_6(false);
              closure_129_7.current = false;
              const obj4 = appEntryKey(tmp103[26]);
            } else {
              appEntryKey(tmp103[23]);
              let obj16 = { file: uploadErrorToAlert.file, guildId: uploadErrorToAlert.guildId, analyticsLocations: [], code: uploadErrorToAlert.code, reason: uploadErrorToAlert.reason, appEntryKey: closure_129_0 };
            }
            c3 = 0;
            closure_129_6(false);
            closure_129_7.current = false;
            React = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          React = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_6(false);
          closure_129_7.current = false;
          React = 3;
          const obj17 = { value, done: true };
          return obj17;
        } else {
          appEntryKey(tmp103[20]).transitionToChannel(transitionChannelId, { navigationReplace: true, openTextInVoiceIfVoiceChannel: true });
          const obj18 = appEntryKey(tmp103[20]);
          if (obj19.isAndroid()) {
            tmp3(tmp103[22]).launchApp();
            let obj = tmp3(tmp103[22]);
          }
          closure_129_2();
          c3 = 0;
          closure_129_6(false);
          closure_129_7.current = false;
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
  }), items1);
  const memo = obj.useMemo(() => {
    if (null != embed) {
      const obj = { attachments: sharedContent.attachments, isRevamp: true };
      const items = [value3(ShareAttachmentsDefault, obj), ];
      embed = undefined;
      if (tmp != null) {
        embed = tmp.embed;
      }
      const obj2 = { children: null };
      const obj3 = { embed, isLoadingEmbed: isLoading, isRevamp: true };
      items[1] = value3(ShareEmbedDefault, obj3);
      obj2.children = items;
      let tmp4Result = collapsedCategories(constants, obj2);
    } else {
      tmp4Result = null;
    }
    return tmp4Result;
  }, items2);
  let obj5 = { style: tmp.container, children: null };
  let obj6 = { title: null, subtitle: null, subtitleColor: "text-feedback-warning", headerStatusBarHeight: null, onClose: null };
  const tmp2Result3 = _slicedToArray(noop.useState(false), 2);
  const tmp30 = c6;
  const intl5 = tmp19(tmp17[13]).intl;
  obj6.title = intl5.string(tmp19(tmp17[13]).t["MR7/kg"]);
  obj6.subtitle = formatToPlainStringResult;
  const tmp31 = sharedContent(tmp17[30]);
  let PX_8;
  if (tmp19Result.isIOS()) {
    PX_8 = tmp24(tmp17[12]).space.PX_8;
  }
  obj6.headerStatusBarHeight = PX_8;
  tmp19Result = tmp19(tmp17[21]);
  let tmp33;
  if (!tmp19Result3.isMetaQuest()) {
    tmp33 = onClose;
  }
  obj6.onClose = tmp33;
  const items3 = [closure_16(tmp31, obj6), , ];
  let obj7 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations, onSelectedDestinationChange: callback, getRowIsUnavailable: null, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: null, disableLongPress: null };
  let tmp35;
  tmp19Result3 = tmp19(tmp17[31]);
  if (sharedContent.attachments.length > 0) {
    tmp35 = getAttachmentsRestriction;
  }
  obj7.getRowIsUnavailable = tmp35;
  obj7.disableSelection = initialSelectedDestinations.length >= MAX_DESTINATION_COUNT || sharedContent.attachments.length > closure_13;
  const tmp24Result = sharedContent(tmp17[32]);
  obj7.disableLongPress = tmp19(tmp17[21]).isAndroid();
  items3[1] = closure_16(tmp24Result, obj7, tmp2Result[0]);
  let obj8 = { text: first1, setText: tmp2Result4[1], preview: memo, sendLabel: stringResult, canSend: null, isSending: null, onSend: null, disabled: null, appEntryKey: null };
  let tmp37 = length > 0;
  const tmp19Result4 = tmp19(tmp17[21]);
  if (tmp37) {
    tmp37 = !tmp5;
  }
  let obj9 = { children: null };
  obj8.canSend = tmp37;
  obj8.isSending = tmp15;
  obj8.onSend = callback1;
  obj8.disabled = sharedContent.attachments.length > closure_13;
  obj8.appEntryKey = appEntryKey;
  items3[2] = closure_16(sharedContent(tmp17[33]), obj8);
  obj5.children = items3;
  obj9.children = closure_18(tmp30, obj5);
  return closure_16(tmp19(tmp17[29]).SafeAreaProviderCompat, obj9);
};