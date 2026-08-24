// === Module 9079: ForwardModal ===

// Module 9079 (ForwardModal)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "removePendingListFetch" /* 5014 */;
import closure_8 from "filterStaffGuild" /* 9044 */;
import closure_9 from "ensureGuildLoaded" /* 1391 */;
import closure_10 from "reinjectEphemerals" /* 4994 */;
import closure_11 from "messages" /* 9066 */;
import { MAX_DESTINATION_COUNT } from "MAX_DESTINATION_COUNT" /* 9080 */;
import { UserRowModes } from "UserRowModes" /* 9081 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { flex: 1, display: "flex", backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
let closure_16 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/forwarding/native/ForwardModal.tsx");

export default function ForwardModal(message) {
  message = message.message;
  let _require = message;
  const forwardOptions = message.forwardOptions;
  let prop = message.initialSelectedDestinations;
  if (prop === undefined) {
    prop = [];
  }
  const source = message.source;
  const customSendHandler = message.customSendHandler;
  let height;
  let channel_id;
  let id;
  c7 = undefined;
  let stateFromStores;
  let stateFromStores1;
  closure_10 = undefined;
  let trackForwardAddRecipientOnce;
  let trackForwardEditSearchOnce;
  UserRowModes = undefined;
  closure_14 = undefined;
  let first;
  let callback;
  closure_17 = undefined;
  let first1;
  closure_19 = undefined;
  let callback4;
  closure_21 = undefined;
  let tmp = callback();
  height = forwardOptions(source[14])({ ignoreKeyboard: true }).height;
  channel_id = message.channel_id;
  id = message.id;
  let obj = channel_id;
  const items = [channel_id];
  const memo = channel_id.useMemo(() => callback(source[15]).getDestinationIdFromChannelId(channel_id), items);
  [tmp7, c7] = height(channel_id.useState(false), 2);
  obj1 = _require(source[16]);
  const items1 = [closure_10, stateFromStores, trackForwardAddRecipientOnce, c7];
  const items2 = [channel_id, id, source, message];
  stateFromStores = obj1.useStateFromStores(items1, () => {
    if ("checkpoint" === source) {
      let message = closure_0;
    } else {
      message = message.getMessage(channel_id, id);
      if (message == null) {
        message = trackForwardAddRecipientOnce.getMessage(tmp3);
      }
      if (message == null) {
        message = stateFromStores.getMessage(tmp3);
      }
      if (message == null) {
        message = _undefined.getMessage(tmp2, tmp3);
      }
      tmp2 = channel_id;
    }
    return message;
  }, items2);
  let obj2 = _require(source[16]);
  const items3 = [stateFromStores1];
  const items4 = [channel_id];
  stateFromStores1 = obj2.useStateFromStores(items3, () => stateFromStores1.getChannel(channel_id), items4);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  closure_10 = null != id;
  let tmp8Result = tmp8(tmp3[17]);
  trackForwardAddRecipientOnce = tmp8Result.useTrackForwardAddRecipientOnce();
  tmp8Result = tmp8(tmp3[17]);
  trackForwardEditSearchOnce = tmp8Result.useTrackForwardEditSearchOnce();
  UserRowModes = obj.useRef(0);
  closure_14 = obj.useRef(0);
  let tmp5Result = tmp5(obj.useState(""), 2);
  first = tmp5Result[0];
  callback = tmp5Result[1];
  closure_17 = obj.useRef("");
  const items5 = [channel_id, id, trackForwardEditSearchOnce];
  callback = obj.useCallback((current) => {
    callback2(current);
    if (current !== ref3.current) {
      ref2.current = ref2.current + 1;
      if ("" !== current) {
        trackForwardEditSearchOnce(channel_id, id);
      }
    }
    ref3.current = current;
  }, items5);
  tmp5Result = tmp5(obj.useState(prop), 2);
  first1 = tmp5Result[0];
  closure_19 = tmp5Result[1];
  const items6 = [first1, channel_id, id, first, trackForwardAddRecipientOnce];
  const effect = obj.useEffect(() => {
    if (first1.length > 0) {
      trackForwardAddRecipientOnce(channel_id, id, "" !== first);
    }
  }, items6);
  const items7 = [channel_id, id];
  const callback1 = obj.useCallback((arg0) => {
    callback3(arg0);
    ref.current = ref.current + 1;
  }, []);
  const callback2 = obj.useCallback(() => {
    let obj = callback(source[17]);
    obj = { channelId: channel_id, messageId: id, numDestinationChanges: ref.current, numQueryChanges: ref2.current };
    obj.trackForwardCancel(obj);
    callback(source[18]).closeForwardModal();
  }, items7);
  const tmp18 = trackForwardEditSearchOnce;
  const tmp6 = height(channel_id.useState(false), 2);
  _require(source[19]).useNavigatorBackPressHandler(() => {
    let obj = callback(source[17]);
    obj = { channelId: channel_id, messageId: id, numDestinationChanges: ref.current, numQueryChanges: ref2.current };
    obj.trackForwardCancel(obj);
    return false;
  });
  const items8 = [stateFromStores, stateFromStores1];
  _require = undefined;
  const callback3 = obj.useCallback((type) => {
    let destinationIsUnavailable;
    if (null != stateFromStores) {
      if (null != stateFromStores1) {
        destinationIsUnavailable = callback(source[20]).getDestinationIsUnavailable(tmp, tmp3, type);
        const obj = callback(source[20]);
      }
    }
    return destinationIsUnavailable;
  }, items8);
  _require = customSendHandler((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0, arr) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else {
        let openResult = arg0;
        openResult = tmp4;
        if (tmp5 === 3) {
          if (arg0 === 1) {
            throw arr;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arr;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw arr;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arr;
                return obj;
              } else {
                closure_2 = tmp2;
                c1 = tmp3;
                c1 = undefined;
                closure_2 = undefined;
                c3 = undefined;
                openResult = null;
                if (null == c3) {
                  if (null != closure_1_8) {
                    closure_1_7(true);
                    c3 = 2;
                    c4 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = Promise.all(closure_1_18.map(callback(source[15]).getOrResolveChannelIdFromDestinationId));
                    return obj1;
                  } else {
                    openResult = forwardOptions;
                    openResult = source;
                    const obj2 = { key: "FORWARD_ERROR", content: null };
                    openResult = callback;
                    openResult = source;
                    const intl2 = callback(source[22]).intl;
                    openResult = callback;
                    openResult = source;
                    obj2[1] = intl2.string(callback(source[22]).t.R0RpRX);
                    openResult = forwardOptions(source[21]).open(obj2);
                    const obj28 = forwardOptions(source[21]);
                  }
                } else {
                  const obj3 = { withMessage: null };
                  obj3[0] = openResult;
                  c3 = 1;
                  c4 = 1;
                  let obj4 = { value: null, done: false };
                  obj4[0] = openResult(closure_1_18, obj3, closure_1_7);
                  return obj4;
                }
              }
            } else {
              if (1 === tmp6) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arr;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj5 = { value: null, done: true };
                  obj5[0] = arr;
                  return obj5;
                }
              } else {
                if (2 === tmp6) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw arr;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj6 = { value: null, done: true };
                    obj6[0] = arr;
                    return obj6;
                  } else {
                    openResult = c1;
                    openResult = closure_2;
                    openResult = callback;
                    openResult = source;
                    closure_1 = arr.filter(callback(source[23]).isNotNullish);
                    openResult = forwardOptions;
                    openResult = source;
                    openResult = closure_1_8;
                    openResult = closure_1;
                    if (forwardOptions(source[24])(closure_1_8, closure_1)) {
                      const promise = new Promise((arg0) => {
                        const callback = arg0;
                        let obj = callback(arr[25]);
                        obj = {
                          onConfirm() {
                            return callback(true);
                          },
                          onBack() {
                            return callback(false);
                          }
                        };
                        obj.openAlert("staff-to-non-staff-forward", callback2(_undefined(arr[26]), obj));
                      });
                      c3 = 3;
                      c4 = 1;
                      const obj7 = { value: null, done: false };
                      obj7[0] = promise;
                      return obj7;
                    }
                  }
                } else {
                  if (3 === tmp6) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw arr;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      let obj8 = { value: null, done: true };
                      obj8[0] = arr;
                      return obj8;
                    } else if (!arr) {
                      closure_1_7(false);
                      c4 = 3;
                      const obj9 = { value: null, done: true };
                      obj9[0] = undefined;
                      return obj9;
                    }
                  } else if (4 === tmp6) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw arr;
                    } else if (arg0 !== 2) {
                      obj8 = callback(source[28]);
                      obj8.transitionToChannel(c1[0], { navigationReplace: true, openTextInVoiceIfVoiceChannel: true });
                      let obj13 = forwardOptions(source[29]);
                      const obj10 = {};
                      const merged = Object.assign(closure_1);
                      obj10.withMessage = callback;
                      obj13.sendForwards(closure_1_8, c1, obj10);
                      c3 = 5;
                      c4 = 1;
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw arr;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj11 = { value: null, done: true };
                    obj11[0] = arr;
                    return obj11;
                  } else {
                    openResult = c1;
                    closure_2 = arr;
                    openResult = closure_2;
                    openResult = c1;
                    openResult = closure_2;
                    openResult = callback;
                    openResult = source;
                    openResult = closure_2.every((status) => "fulfilled" === status.status);
                    if (!openResult) {
                      obj = { channelId: null, messageId: null, hasError: true, hasContextMessage: null, numDestinations: null, numDestinationChanges: null, numQueryChanges: null };
                      obj[0] = closure_1_5;
                      obj[1] = closure_1_6;
                      let tmp11 = null != callback;
                      if (tmp11) {
                        tmp11 = "" !== callback;
                      }
                      obj[3] = tmp11;
                      obj[4] = c1.length;
                      obj[5] = closure_1_13.current;
                      obj[6] = closure_1_14.current;
                      obj27.trackForwardSent(obj);
                      c3 = closure_1_18.filter((arg0, arg1) => "rejected" === arr[arg1].status);
                      obj1 = callback(source[18]);
                      let obj12 = { message: null, failedDestinations: null, forwardOptions: null };
                      obj12[0] = closure_1_8;
                      obj12[1] = c3;
                      obj12[2] = closure_1;
                      const result = obj1.showForwardFailedAlertModal(obj12);
                    }
                    obj27 = callback(source[17]);
                  }
                  c4 = 3;
                  obj13 = { value: null, done: true };
                  obj13[0] = arr;
                  return obj13;
                }
                obj12 = callback(source[18]);
                obj12.closeForwardModal();
                if (1 === closure_1.length) {
                  let obj15 = forwardOptions(source[27]);
                  const obj14 = { channelId: null };
                  obj14[0] = forwardOptions[0];
                  c3 = 4;
                  c4 = 1;
                  obj15 = { value: null, done: false };
                  obj15[0] = obj15.fetchMessages(obj14);
                  return obj15;
                }
              }
              const obj16 = { channelId: null, messageId: null, hasError: false, hasContextMessage: null, numDestinations: null, numDestinationChanges: null, numQueryChanges: null, source: null };
              obj16[0] = closure_1_5;
              obj16[1] = closure_1_6;
              let tmp31 = null != callback;
              if (tmp31) {
                tmp31 = "" !== callback;
              }
              obj16[3] = tmp31;
              obj16[4] = closure_1.length;
              obj16[5] = closure_1_13.current;
              obj16[6] = closure_1_14.current;
              obj16[7] = closure_1_2;
              openResult(obj16);
              obj4 = forwardOptions(source[21]);
              const obj17 = { key: "FORWARD_SUCCESS", IconComponent: null, content: null };
              obj17[1] = forwardOptions(source[30]);
              const intl = callback(source[22]).intl;
              obj17[2] = intl.string(callback(source[22]).t.kwmYkt);
              obj4.open(obj17);
              c4 = 3;
              const obj18 = { value: null, done: true };
              obj18[0] = undefined;
              return obj18;
            }
            c4 = 3;
          } catch (tmp96) {
            c4 = openResult;
            throw tmp96;
          }
        }
      }
    })();
  });
  const items9 = [channel_id, forwardOptions, id, stateFromStores, first1, source, customSendHandler];
  callback4 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items9);
  const items10 = [callback4];
  const items11 = [channel_id, id];
  const callback5 = obj.useCallback(() => {
    callback4();
  }, items10);
  closure_21 = obj.useCallback(() => {
    const channel = stateFromStores1.getChannel(channel_id);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const channelPermalink = callback(source[31]).getChannelPermalink(guild_id, tmp, id);
    const obj = callback(source[31]);
    const result = callback(source[32]).triggerHapticFeedback(forwardOptions(source[33]).IMPACT_LIGHT);
    const obj2 = callback(source[32]);
    callback(source[34]).presentLinkCopied();
    const obj3 = callback(source[34]);
    callback(source[35]).copy(channelPermalink);
    const obj4 = callback(source[35]);
    callback(source[17]).trackForwardCopyLink(channel_id, id);
  }, items11);
  const items12 = [height];
  const memo1 = obj.useMemo(() => {
    height = "100%";
    return { height };
  }, items12);
  if (first1.length <= 1) {
    let intl2 = tmp8(tmp3[22]).intl;
    let stringResult = intl2.string(tmp8(tmp3[22]).t.TXNS7S);
  } else {
    let intl = tmp8(tmp3[22]).intl;
    obj = { count: null };
    obj[0] = length;
    stringResult = intl.formatToPlainString(tmp8(tmp3[22]).t.jWtYUm, obj);
  }
  obj = { style: memo1, children: null };
  obj1 = { title: null, subtitleColor: "text-feedback-warning", subtitle: null, headerRight: null, onClose: null };
  const tmp8Result1 = _require(source[19]);
  const intl3 = tmp8(tmp3[22]).intl;
  obj1[0] = intl3.string(_require(source[22]).t["+SkRRj"]);
  let formatToPlainStringResult;
  if (first1.length >= trackForwardEditSearchOnce) {
    const intl4 = tmp8(tmp3[22]).intl;
    obj2 = { count: null };
    obj2[0] = tmp18;
    formatToPlainStringResult = intl4.formatToPlainString(tmp8(tmp3[22]).t["3Fbkir"], obj2);
  }
  obj1[2] = formatToPlainStringResult;
  obj1[3] = function headerRight(arg0) {
    let tmp = null;
    if (closure_10) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.onPress = closure_21;
      const intl = callback(source[22]).intl;
      obj.accessibilityLabel = intl.string(callback(source[22]).t.Xrt5Po);
      obj.IconComponent = callback(source[39]).LinkIcon;
      tmp = ref2(callback(source[38]).HeaderActionButton, obj);
    }
    return tmp;
  };
  obj1[4] = callback2;
  const items13 = [closure_14(forwardOptions(source[37]), obj1), ];
  let obj3 = { style: tmp.container, children: null };
  const items14 = [closure_14(forwardOptions(source[40]), { absolute: true }), closure_14(forwardOptions(source[41]), { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: prop, onSelectedDestinationChange: callback1, onSearchTextChange: callback, getRowIsUnavailable: callback3, originDestination: memo, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first1.length >= trackForwardEditSearchOnce }), ];
  if (null != stateFromStores) {
    let obj5 = { message: null, forwardOptions: null, sendLabel: null, canSend: null, selectedDestinations: null, isSending: null, onSend: null };
    obj5[0] = stateFromStores;
    obj5[1] = forwardOptions;
    obj5[2] = stringResult;
    obj5[3] = length > 0;
    obj5[4] = first1;
    obj5[5] = tmp7;
    obj5[6] = callback4;
    let tmp31Result = tmp31(tmp8(tmp3[42]).ForwardMessageFooter, obj5);
  } else {
    let obj6 = { isVisible: null, floatingBackgroundColor: null, text: null, onPress: null, loading: null };
    obj6[0] = length > 0;
    obj6[1] = tmp.container.backgroundColor;
    if (1 === length) {
      const intl6 = tmp8(tmp3[22]).intl;
      let stringResult1 = intl6.string(tmp8(tmp3[22]).t.TXNS7S);
    } else {
      const intl5 = tmp8(tmp3[22]).intl;
      let obj7 = { count: null };
      obj7[0] = length;
      stringResult1 = intl5.formatToPlainString(tmp8(tmp3[22]).t.jWtYUm, obj7);
    }
    obj6[2] = stringResult1;
    let tmp35;
    if (!tmp7) {
      tmp35 = callback5;
    }
    obj6[3] = tmp35;
    obj6[4] = tmp7;
    tmp31Result = tmp31(tmp8(tmp3[43]).ModalFloatingAction, obj6);
  }
  items14[2] = tmp31Result;
  obj3[1] = items14;
  items13[1] = first(id, obj3);
  obj[1] = items13;
  return first(id, obj);
};