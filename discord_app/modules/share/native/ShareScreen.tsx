// discord_app/modules/share/native/ShareScreen.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import createChannelRecord from "../../../records/ChannelRecord.tsx";
import closure_9 from "../../../stores/ChannelStore.tsx";
import closure_10 from "../../../stores/PermissionStore.tsx";
import ME from "../../../Constants.tsx";
import { MAX_DESTINATION_COUNT } from "../../forwarding/ForwardConstants.tsx";
import { UserRowModes } from "../../main_tabs_v2/native/shared_components/user_list/UserRowConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import set from "../../../utils/PlatformUtils.tsx";

require = arg1;
function getAttachmentsRestriction(type) {
  if (type instanceof closure_7) {
    if (callback2(type.type)) {
      let tmp4;
      if (!closure_10.can(constants.ATTACH_FILES, type)) {
        const obj = { label: null };
        const intl = getSystemLocale.intl;
        obj[0] = intl.string(getSystemLocale.t.P7yvbm);
        tmp4 = obj;
      }
      return tmp4;
    }
  }
}
({ ChannelRecordBase: error, isGuildChannelType: closure_8 } = createChannelRecord);
({ AnalyticEvents: unpackModuleId, Permissions: closure_12, MAX_UPLOAD_COUNT: map1 } = ME);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
createCacheKey = { container: null, headerLeftContainer: null, headerRightContainer: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
let num = 0;
if (set.isIOS()) {
  num = ThemesDefault.space.PX_16;
}
createCacheKey[1] = { paddingLeft: num };
let num2 = 0;
if (set.isIOS()) {
  num2 = ThemesDefault.space.PX_16;
}
createCacheKey[2] = { paddingRight: num2 };
let closure_19 = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/share/native/ShareScreen.tsx");

export default function ShareScreen(sharedContent) {
  sharedContent = sharedContent.sharedContent;
  const onClose = sharedContent.onClose;
  let first;
  let callback;
  let length;
  let React;
  c6 = undefined;
  closure_7 = undefined;
  let first1;
  let embed;
  let isLoading;
  let tmp = callback3();
  let obj = React;
  let items = [sharedContent];
  const tmp3 = length(React.useState(React.useMemo(() => {
    const items = [];
    if (null != sharedContent.targetUserId) {
      let obj = { type: "user", id: null };
      obj[1] = tmp.targetUserId;
      items.push(obj);
    }
    if (null != sharedContent.targetChannelId) {
      obj = { type: "channel", id: null };
      obj[1] = tmp.targetChannelId;
      items.push(obj);
    }
    return items;
  }, items)), 2);
  first = tmp3[0];
  callback = tmp3[1];
  length = first.length;
  React = tmp4;
  callback = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  [tmp7, c6] = length(React.useState(false), 2);
  closure_7 = React.useRef(tmp7);
  if (length <= 1) {
    let intl2 = sharedContent(first[14]).intl;
    let stringResult = intl2.string(sharedContent(first[14]).t.TXNS7S);
    let tmp9 = first;
    let tmp11 = sharedContent;
  } else {
    tmp9 = first;
    let intl = sharedContent(first[14]).intl;
    obj = { count: null };
    obj[0] = length;
    stringResult = intl.formatToPlainString(sharedContent(first[14]).t.jWtYUm, obj);
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
  const items1 = [onClose, first, sharedContent.attachments, first1];
  const items2 = [embed, isLoading, sharedContent.attachments];
  const callback1 = obj.useCallback(callback(function*() {
    if (React === 2) {
      React = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        React = 2;
        if (0 === closure_4) {
          if (arg0 === 1) {
            React = 3;
            throw arg1;
          } else if (arg0 === 2) {
            React = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = tmp3;
            let lib = tmp7;
            lib = undefined;
            c1 = undefined;
            c2 = undefined;
            c3 = undefined;
            closure_4 = undefined;
            React = undefined;
            let callback;
            let tmp = closure_1_7;
            if (closure_1_7.current) {
              React = 3;
            } else {
              closure_1_7.current = true;
              closure_1_6(true);
              c3 = 1;
              closure_4 = 2;
              React = 1;
              obj1 = { value: null, done: false };
              obj1[0] = Promise.all(closure_2.map(lib(closure_2[16]).getOrResolveChannelIdFromDestinationId));
              return obj1;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_1_6(false);
          closure_1_7.current = false;
          throw c2;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            React = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_1_6(false);
            closure_1_7.current = false;
            React = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            tmp = lib;
            tmp = c1;
            tmp = lib;
            tmp = closure_2;
            lib = arg1.filter(lib(closure_2[17]).isNotNullish);
            tmp = lib;
            if (0 === lib.length) {
              let obj11 = lib(closure_2[18]);
              const intl3 = lib(closure_2[14]).intl;
              obj11.showInformationToast(intl3.string(lib(closure_2[14]).t.wFcUiF));
              c3 = 0;
              closure_1_6(false);
              closure_1_7.current = false;
              React = 3;
              let obj3 = { value: null, done: true };
              obj3[0] = undefined;
              return obj3;
            } else {
              tmp = lib;
              tmp = c1;
              tmp = lib;
              const attachments = lib.attachments;
              tmp = attachments;
              closure_2 = attachments.map((mimeType) => {
                let str = mimeType.mimeType;
                if (str == null) {
                  str = "unknown";
                }
                return str;
              });
              tmp = attachments;
              tmp = closure_2;
              tmp = lib;
              tmp = attachments(closure_2[19]);
              closure_4 = 3;
              React = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = tmp(lib.map((() => {
                closure_0 = dependencyMap((arg0) => {
                  closure_0 = arg0;
                  c3 = 0;
                  c4 = 0;
                  return (function*(arg0) {
                    if (c4 === 2) {
                      c4 = 3;
                      HermesBuiltin.throwTypeError();
                    } else if (tmp5 === 3) {
                      if (arg0 === 1) {
                        throw arg1;
                      } else if (arg0 === 2) {
                        let obj = { value: null, done: true };
                        obj[0] = arg1;
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
                            throw arg1;
                          } else if (arg0 === 2) {
                            c4 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            closure_2 = tmp3;
                            closure_1 = tmp2;
                            let channel;
                            channel = closure_3_9.getChannel(channel);
                            if (null == channel) {
                              c4 = 3;
                              return { value: false, done: true };
                            } else {
                              obj1 = callback(13574);
                              obj1 = { attachments: null, channel: null, comment: null };
                              obj1[0] = closure_1_1;
                              obj1[1] = channel;
                              obj1[2] = closure_2_8;
                              c3 = 1;
                              c4 = 1;
                              const obj2 = { value: null, done: false };
                              obj2[0] = obj1.sendShareMessage(obj1);
                              return obj2;
                            }
                          }
                        } else if (arg0 === 1) {
                          c4 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c4 = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          const obj3 = { guild_id: null, channel_id: null, channel_type: null, num_attachments: null, attachment_mimetypes: null };
                          obj3[0] = channel.guild_id;
                          obj3[1] = channel.id;
                          obj3[2] = channel.type;
                          obj3[3] = closure_1_1.length;
                          obj3[4] = closure_1_2;
                          callback2(698).track(closure_3_11.SHARE_MESSAGE_SENT, obj3);
                          c4 = 3;
                          return { value: "HermesInternal", done: null };
                        }
                      } catch (tmp11) {
                        c4 = tmp;
                        throw tmp11;
                      }
                    }
                  })();
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
              })()));
              return obj4;
            }
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            React = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_1_6(false);
            closure_1_7.current = false;
            React = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_3 = arg1;
            tmp = c1;
            if (!closure_3.every((status) => "fulfilled" === status.status)) {
              React = closure_2.filter((arg0, arg1) => "rejected" === dependencyMap[arg1].status);
              callback = React.lazy(() => _undefined(_undefined2[25])(_undefined2[24], _undefined2.paths));
              obj3 = lib(closure_2[26]);
              let obj6 = { title: null, content: null, failedDestinations: null };
              const intl = lib(closure_2[14]).intl;
              obj6[0] = intl.string(lib(closure_2[14]).t.dA1gbw);
              const intl2 = lib(closure_2[14]).intl;
              const obj7 = { count: null };
              obj7[0] = React.length;
              obj6[1] = intl2.formatToPlainString(lib(closure_2[14]).t.thm88D, obj7);
              obj6[2] = React;
              obj3.openAlert("share-failed-alert-modal", closure_1_16(callback, obj6));
              c3 = 0;
              callback(false);
              closure_7.current = false;
            }
          }
        } else if (arg0 === 1) {
          React = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_1_6(false);
          closure_1_7.current = false;
          React = 3;
          const obj8 = { value: null, done: true };
          obj8[0] = arg1;
          return obj8;
        } else {
          lib(closure_2[22]).transitionToChannel(closure_4, { navigationReplace: true, openTextInVoiceIfVoiceChannel: true });
          const obj18 = lib(closure_2[22]);
          if (obj19.isAndroid()) {
            obj = attachments(closure_2[23]);
            obj.launchApp();
          }
          attachments();
          c3 = 0;
          callback(false);
          closure_7.current = false;
          React = 3;
          const obj9 = { value: null, done: true };
          obj9[0] = undefined;
          return obj9;
        }
        closure_4 = lib[0];
        obj6 = attachments(closure_2[21]);
        const obj10 = { channelId: null };
        obj10[0] = closure_4;
        closure_4 = 4;
        React = 1;
        obj11 = { value: null, done: false };
        obj11[0] = obj6.fetchMessages(obj10);
        return obj11;
      } catch (tmp80) {
        c2 = tmp80;
        if (tmp4 === c3) {
          React = tmp2;
          throw tmp80;
        } else {
          closure_4 = tmp;
        }
      }
    }
  }), items1);
  const memo = obj.useMemo(() => {
    if (null != embed) {
      let obj = { attachments: null, isRevamp: true };
      obj[0] = sharedContent.attachments;
      const items = [closure_1_16(onClose(first[27]), obj), ];
      embed = undefined;
      if (tmp != null) {
        embed = tmp.embed;
      }
      obj = { children: null };
      obj = { embed: null, isLoadingEmbed: null, isRevamp: true };
      obj[0] = embed;
      obj[1] = isLoading;
      items[1] = closure_1_16(onClose(first[28]), obj);
      obj[0] = items;
      let tmp4Result = closure_1_18(closure_1_17, obj);
      const tmp10 = onClose(first[28]);
      const tmp4 = closure_1_18;
      const tmp5 = closure_1_17;
      const tmp6 = closure_1_16;
    } else {
      tmp4Result = null;
    }
    return tmp4Result;
  }, items2);
  obj = { style: tmp.container, children: null };
  obj1 = { title: null, headerTitle: null, headerTitleAlign: "center", headerLeft: null, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: null };
  let intl3 = tmp11(tmp9[14]).intl;
  obj1[0] = intl3.string(tmp11(tmp9[14]).t["MR7/kg"]);
  obj1[1] = function headerTitle(title) {
    if (closure_5) {
      const intl2 = sharedContent(first[14]).intl;
      let obj = { limit: null };
      obj[0] = closure_1_13;
      let subtitle = intl2.formatToPlainString(sharedContent(first[14]).t["qqyp/e"], obj);
    } else if (length >= closure_1_14) {
      const intl = sharedContent(first[14]).intl;
      obj = { count: null };
      obj[0] = tmp2;
      subtitle = intl.formatToPlainString(sharedContent(first[14]).t["3Fbkir"], obj);
    }
    return closure_1_16(sharedContent(first[30]).GenericHeaderTitle, { title: title.children, subtitle, subtitleColor: "text-feedback-warning", variant: "redesign/heading-18/bold" });
  };
  let tmp11Result = tmp11(tmp9[31]);
  let headerCloseButton;
  if (!tmp11Result.isMetaQuest()) {
    tmp11Result = tmp11(tmp9[32]);
    headerCloseButton = tmp11Result.getHeaderCloseButton(onClose);
  }
  obj1[3] = headerCloseButton;
  ({ headerLeftContainer: obj4[4], headerRightContainer: obj4[5] } = tmp);
  const tmp2 = length;
  const tmp21 = closure_18;
  const tmp22 = c6;
  let tmp6 = length(React.useState(false), 2);
  let PX_8;
  if (tmp11Result1.isIOS()) {
    PX_8 = tmp16(tmp9[12]).space.PX_8;
  }
  obj1[6] = PX_8;
  const items3 = [closure_16(tmp11(tmp9[29]).Header, obj1), , ];
  let obj2 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: first, onSelectedDestinationChange: callback, getRowIsUnavailable: null, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: null, disableLongPress: null };
  let tmp26;
  let tmp16Result = tmp16(tmp9[33]);
  if (sharedContent.attachments.length > 0) {
    tmp26 = getAttachmentsRestriction;
  }
  obj2[3] = tmp26;
  obj2[7] = length >= MAX_DESTINATION_COUNT || sharedContent.attachments.length > closure_13;
  tmp11Result1 = tmp11(tmp9[13]);
  obj2[8] = tmp11(tmp9[13]).isAndroid();
  items3[1] = closure_16(tmp16Result, obj2);
  let obj3 = { text: first1, setText: tmp2Result[1], preview: memo, sendLabel: stringResult, canSend: null, isSending: null, onSend: null, disabled: null, appEntryKey: null };
  let tmp28 = length > 0;
  tmp16Result = tmp16(tmp9[34]);
  if (tmp28) {
    tmp28 = !tmp4;
  }
  let obj4 = { children: null };
  obj3[4] = tmp28;
  obj3[5] = tmp7;
  obj3[6] = callback1;
  obj3[7] = sharedContent.attachments.length > closure_13;
  obj3[8] = sharedContent.appEntryKey;
  items3[2] = closure_16(tmp16Result, obj3);
  obj[1] = items3;
  obj4[0] = tmp21(tmp22, obj);
  return closure_16(tmp11(tmp9[29]).SafeAreaProviderCompat, obj4);
};