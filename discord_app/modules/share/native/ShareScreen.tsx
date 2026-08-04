import ensureGuildLoaded from "ensureGuildLoaded";
import HeaderBackImage from "HeaderBackImage";
import allSettled from "allSettled";
import { View } from "isDiscordFrontendDevelopment";
import createChannelRecord from "createChannelRecord";
import closure_9 from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import { MAX_DESTINATION_COUNT } from "MAX_DESTINATION_COUNT";
import { UserRowModes } from "UserRowModes";
import jsxProd from "fetchMessages";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "set";
import set from "noop";

let closure_12;
let closure_16;
let closure_17;
let closure_18;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function getAttachmentsRestriction(type) {
  if (type instanceof closure_7) {
    if (callback2(type.type)) {
      let tmp4;
      if (!getUncachedChannelPermissions.can(constants.ATTACH_FILES, type)) {
        const obj = { label: null };
        const intl = require(1236) /* getSystemLocale */.intl;
        obj[0] = intl.string(require(1236) /* getSystemLocale */.t.P7yvbm);
        tmp4 = obj;
      }
      return tmp4;
    }
  }
}
({ ChannelRecordBase: error, isGuildChannelType: metroImportAll } = createChannelRecord);
({ AnalyticEvents: unpackModuleId, Permissions: closure_12, MAX_UPLOAD_COUNT: map1 } = ME);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
createCacheKey = { container: null, headerContainer: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
let num = 0;
if (set.isIOS()) {
  num = require("Themes").space.PX_16;
}
let obj1 = { paddingHorizontal: num, paddingVertical: null };
let num2 = 0;
if (set.isIOS()) {
  num2 = require("Themes").space.PX_8;
}
obj1[1] = num2;
createCacheKey[1] = obj1;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/share/native/ShareScreen.tsx");

export default function ShareScreen(sharedContent) {
  let c6;
  let tmp7;
  sharedContent = sharedContent.sharedContent;
  const onClose = sharedContent.onClose;
  let first;
  let callback;
  let length;
  let React;
  c6 = undefined;
  let closure_7;
  let first1;
  let embed;
  let isLoading;
  let tmp = createCacheKey();
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
        if (0 === c4) {
          if (arg0 === 1) {
            React = 3;
            throw arg1;
          } else if (arg0 === 2) {
            React = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let c1 = tmp3;
            let table = tmp7;
            table = undefined;
            c1 = undefined;
            let c2;
            let c3;
            c4 = undefined;
            React = undefined;
            let callback;
            let tmp = outer1_7;
            if (outer1_7.current) {
              React = 3;
            } else {
              outer1_7.current = true;
              outer1_6(true);
              c3 = 1;
              c4 = 2;
              React = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = Promise.all(outer1_2.map(outer1_0(outer1_2[16]).getOrResolveChannelIdFromDestinationId));
              return obj1;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          outer1_6(false);
          outer1_7.current = false;
          throw c2;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            React = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            outer1_6(false);
            outer1_7.current = false;
            React = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            tmp = table;
            tmp = c1;
            tmp = outer1_0;
            tmp = outer1_2;
            outer1_0 = arg1.filter(outer1_0(outer1_2[17]).isNotNullish);
            tmp = outer1_0;
            if (0 === outer1_0.length) {
              let obj11 = outer1_0(outer1_2[18]);
              const intl3 = outer1_0(outer1_2[14]).intl;
              obj11.showInformationToast(intl3.string(outer1_0(outer1_2[14]).t.wFcUiF));
              c3 = 0;
              outer1_6(false);
              outer1_7.current = false;
              React = 3;
              let obj3 = { value: null, done: true };
              obj3[0] = undefined;
              return obj3;
            } else {
              tmp = table;
              tmp = c1;
              tmp = outer1_0;
              const outer1_1 = outer1_0.attachments;
              tmp = outer1_1;
              outer1_2 = outer1_1.map((mimeType) => {
                let str = mimeType.mimeType;
                if (str == null) {
                  str = "unknown";
                }
                return str;
              });
              tmp = outer1_1;
              tmp = outer1_2;
              tmp = outer1_0;
              tmp = outer1_1(outer1_2[19]);
              c4 = 3;
              React = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = tmp(outer1_0.map((() => {
                let closure_0 = dependencyMap((arg0) => {
                  let closure_0 = arg0;
                  let c3 = 0;
                  let c4 = 0;
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
                            let closure_2 = tmp3;
                            let closure_1 = tmp2;
                            let channel;
                            channel = outer3_9.getChannel(channel);
                            if (null == channel) {
                              c4 = 3;
                              return { value: false, done: true };
                            } else {
                              let obj1 = callback(13156);
                              obj1 = { attachments: null, channel: null, comment: null };
                              obj1[0] = outer1_1;
                              obj1[1] = channel;
                              obj1[2] = outer2_8;
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
                          obj3[3] = outer1_1.length;
                          obj3[4] = outer1_2;
                          callback2(698).track(outer3_11.SHARE_MESSAGE_SENT, obj3);
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
            outer1_6(false);
            outer1_7.current = false;
            React = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            c3 = arg1;
            tmp = c1;
            if (!c3.every((status) => "fulfilled" === status.status)) {
              React = outer1_2.filter((arg0, arg1) => "rejected" === dependencyMap[arg1].status);
              callback = React.lazy(() => _undefined(_undefined2[25])(_undefined2[24], _undefined2.paths));
              obj3 = outer1_0(outer1_2[26]);
              let obj6 = { title: null, content: null, failedDestinations: null };
              const intl = outer1_0(outer1_2[14]).intl;
              obj6[0] = intl.string(outer1_0(outer1_2[14]).t.dA1gbw);
              const intl2 = outer1_0(outer1_2[14]).intl;
              const obj7 = { count: null };
              obj7[0] = React.length;
              obj6[1] = intl2.formatToPlainString(outer1_0(outer1_2[14]).t.thm88D, obj7);
              obj6[2] = React;
              obj3.openAlert("share-failed-alert-modal", outer1_16(callback, obj6));
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
          outer1_6(false);
          outer1_7.current = false;
          React = 3;
          const obj8 = { value: null, done: true };
          obj8[0] = arg1;
          return obj8;
        } else {
          outer1_0(outer1_2[22]).transitionToChannel(c4, { navigationReplace: true, openTextInVoiceIfVoiceChannel: true });
          const obj18 = outer1_0(outer1_2[22]);
          if (obj19.isAndroid()) {
            obj = outer1_1(outer1_2[23]);
            obj.launchApp();
          }
          outer1_1();
          c3 = 0;
          callback(false);
          closure_7.current = false;
          React = 3;
          const obj9 = { value: null, done: true };
          obj9[0] = undefined;
          return obj9;
        }
        c4 = table[0];
        obj6 = outer1_1(outer1_2[21]);
        const obj10 = { channelId: null };
        obj10[0] = c4;
        c4 = 4;
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
          c4 = tmp;
        }
      }
    }
  }), items1);
  obj = { style: tmp.container, children: null };
  let obj1 = { style: tmp.headerContainer, children: null };
  const memo = obj.useMemo(() => {
    if (null != embed) {
      let obj = { attachments: null, isRevamp: true };
      obj[0] = sharedContent.attachments;
      const items = [outer1_16(onClose(first[27]), obj), ];
      embed = undefined;
      if (tmp != null) {
        embed = tmp.embed;
      }
      obj = { children: null };
      obj = { embed: null, isLoadingEmbed: null, isRevamp: true };
      obj[0] = embed;
      obj[1] = isLoading;
      items[1] = outer1_16(onClose(first[28]), obj);
      obj[0] = items;
      let tmp4Result = outer1_18(outer1_17, obj);
      const tmp10 = onClose(first[28]);
      const tmp4 = outer1_18;
      const tmp5 = outer1_17;
      const tmp6 = outer1_16;
    } else {
      tmp4Result = null;
    }
    return tmp4Result;
  }, items2);
  let obj2 = { title: null, headerTitle: null, headerTitleAlign: "center", headerLeft: null, headerStatusBarHeight: null };
  let intl3 = tmp11(tmp9[14]).intl;
  obj2[0] = intl3.string(tmp11(tmp9[14]).t["MR7/kg"]);
  obj2[1] = function headerTitle(title) {
    if (c5) {
      const intl2 = sharedContent(first[14]).intl;
      let obj = { limit: null };
      obj[0] = outer1_13;
      let subtitle = intl2.formatToPlainString(sharedContent(first[14]).t["qqyp/e"], obj);
    } else if (length >= outer1_14) {
      const intl = sharedContent(first[14]).intl;
      obj = { count: null };
      obj[0] = tmp2;
      subtitle = intl.formatToPlainString(sharedContent(first[14]).t["3Fbkir"], obj);
    }
    return outer1_16(sharedContent(first[30]).GenericHeaderTitle, { title: title.children, subtitle, subtitleColor: "text-feedback-warning", variant: "redesign/heading-18/bold" });
  };
  let tmp11Result = tmp11(tmp9[31]);
  let headerCloseButton;
  if (!tmp11Result.isMetaQuest()) {
    tmp11Result = tmp11(tmp9[32]);
    headerCloseButton = tmp11Result.getHeaderCloseButton(onClose);
  }
  obj2[3] = headerCloseButton;
  const tmp2 = length;
  const tmp20 = closure_18;
  let tmp6 = length(React.useState(false), 2);
  let num;
  if (tmp11Result1.isIOS()) {
    num = 0;
  }
  obj2[4] = num;
  obj1[1] = closure_16(tmp11(tmp9[29]).Header, obj2);
  const items3 = [closure_16(c6, obj1), , ];
  let obj3 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: first, onSelectedDestinationChange: callback, getRowIsUnavailable: null, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: null, disableLongPress: null };
  let tmp25;
  let tmp16Result = tmp16(tmp9[33]);
  if (sharedContent.attachments.length > 0) {
    tmp25 = getAttachmentsRestriction;
  }
  obj3[3] = tmp25;
  obj3[7] = length >= MAX_DESTINATION_COUNT || sharedContent.attachments.length > closure_13;
  tmp11Result1 = tmp11(tmp9[13]);
  obj3[8] = tmp11(tmp9[13]).isAndroid();
  items3[1] = closure_16(tmp16Result, obj3);
  let obj4 = { text: first1, setText: tmp2Result[1], preview: memo, sendLabel: stringResult, canSend: null, isSending: null, onSend: null, disabled: null, appEntryKey: null };
  let tmp27 = length > 0;
  tmp16Result = tmp16(tmp9[34]);
  if (tmp27) {
    tmp27 = !tmp4;
  }
  obj4[4] = tmp27;
  obj4[5] = tmp7;
  obj4[6] = callback1;
  obj4[7] = sharedContent.attachments.length > closure_13;
  obj4[8] = sharedContent.appEntryKey;
  items3[2] = closure_16(tmp16Result, obj4);
  obj[1] = items3;
  return tmp20(c6, obj);
};