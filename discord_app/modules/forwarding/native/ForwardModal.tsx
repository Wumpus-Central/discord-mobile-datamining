// === Module 11682: ForwardModal ===

// Module 11682 (ForwardModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import LinkIcon from "LinkIcon" /* 4503 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import ChannelUtils from "ChannelUtils" /* 4705 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import HeaderActionButton from "HeaderActionButton" /* 7377 */;
import formatResults from "formatResults" /* 10981 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11680 */;
import ForwardingAnalyticsUtils from "ForwardingAnalyticsUtils" /* 11681 */;
import ForwardDestinationUtils from "ForwardDestinationUtils" /* 11684 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7596 */;
import ICYMIStore from "ICYMIStore" /* 8335 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MessageStore from "MessageStore" /* 4781 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8360 */;

require = fn;
const View = fn(17).View;
const MAX_DESTINATION_COUNT = fn(11683).MAX_DESTINATION_COUNT;
let UserRowModes = fn(10860).UserRowModes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { container: null };
createStyles = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.container = createStyles;
let closure_16 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forwarding/native/ForwardModal.tsx");

export default function ForwardModal(message) {
  message = message.message;
  _require = message;
  let forwardOptions = message.forwardOptions;
  let prop = message.initialSelectedDestinations;
  if (prop === undefined) {
    prop = [];
  }
  let source = message.source;
  const customSendHandler = message.customSendHandler;
  c7 = undefined;
  let stateFromStores;
  let stateFromStores1;
  closure_10 = undefined;
  let trackForwardAddRecipientOnce;
  let trackForwardEditSearchOnce;
  UserRowModes = undefined;
  let ref2;
  let first;
  closure_16 = undefined;
  let first1;
  closure_19 = undefined;
  let callback4;
  let onPress;
  let tmp = closure_16();
  let height = forwardOptions(source[14])({ ignoreKeyboard: true }).height;
  const channel_id = message.channel_id;
  let id = message.id;
  let obj = channel_id;
  const items = [channel_id];
  const memo = channel_id.useMemo(() => formatResults.getDestinationIdFromChannelId(channel_id), items);
  [tmp7, c7] = height(channel_id.useState(false), 2);
  let obj1 = require("initialize");
  const items1 = [closure_10, stateFromStores, trackForwardAddRecipientOnce, c7];
  const items2 = [channel_id, id, source, message];
  stateFromStores = obj1.useStateFromStores(items1, () => {
    if ("checkpoint" === source) {
      let message = closure_0;
    } else {
      message = MessageStore.getMessage(channel_id, id);
      if (message == null) {
        message = MessagePreviewStore.getMessage(id);
      }
      if (message == null) {
        message = ICYMIStore.getMessage(id);
      }
      if (message == null) {
        message = ConversationsStore.getMessage(channel_id, id);
      }
    }
    return message;
  }, items2);
  let obj2 = require("initialize");
  const items3 = [stateFromStores1];
  const items4 = [channel_id];
  stateFromStores1 = obj2.useStateFromStores(items3, () => ChannelStore.getChannel(channel_id), items4);
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
  ref2 = obj.useRef(0);
  let tmp5Result = tmp5(obj.useState(""), 2);
  first = tmp5Result[0];
  closure_16 = tmp5Result[1];
  obj.useRef("");
  const items5 = [channel_id, id, trackForwardEditSearchOnce];
  const callback = obj.useCallback((current) => {
    closure_16(current);
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
    closure_19(arg0);
    ref.current = ref.current + 1;
  }, []);
  const callback2 = obj.useCallback(() => {
    const obj = { channelId: channel_id, messageId: id, numDestinationChanges: ref.current, numQueryChanges: ref2.current };
    obj.trackForwardCancel(obj);
    ForwardModalUtils.closeForwardModal();
  }, items7);
  const tmp18 = trackForwardEditSearchOnce;
  const tmp6 = height(channel_id.useState(false), 2);
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    const obj = { channelId: channel_id, messageId: id, numDestinationChanges: ref.current, numQueryChanges: ref2.current };
    obj.trackForwardCancel(obj);
    return false;
  });
  const items8 = [stateFromStores, stateFromStores1];
  const callback3 = obj.useCallback((type) => {
    let destinationIsUnavailable;
    if (null != stateFromStores) {
      if (null != stateFromStores1) {
        destinationIsUnavailable = ForwardDestinationUtils.getDestinationIsUnavailable(tmp, tmp3, type);
      }
    }
    return destinationIsUnavailable;
  }, items8);
  _require = customSendHandler(function*(arg0) {
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
            source = tmp2;
            forwardOptions = tmp3;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            if (null == c3) {
              if (null != message) {
                _undefined(true);
                c3 = 2;
                c4 = 1;
                let obj1 = { value: Promise.all(first1.map(closure_0(source[15]).getOrResolveChannelIdFromDestinationId)), done: false };
                return obj1;
              } else {
                const obj2 = { key: "FORWARD_ERROR", content: null };
                const intl2 = closure_0(source[22]).intl;
                obj2.content = intl2.string(closure_0(source[22]).t.R0RpRX);
                forwardOptions(source[21]).open(obj2);
                const obj28 = forwardOptions(source[21]);
              }
            } else {
              const obj3 = { withMessage: tmp118 };
              c3 = 1;
              c4 = 1;
              let obj4 = { value: tmp119(first1, obj3, _undefined), done: false };
              return obj4;
            }
          }
        } else {
          if (1 === tmp6) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            }
          } else {
            if (2 === tmp6) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_129_1 = value.filter(closure_0(source[23]).isNotNullish);
                if (forwardOptions(source[24])(message, closure_129_1)) {
                  const promise = new Promise((arg0) => {
                    closure_0 = arg0;
                    closure_1_0(4906);
                    const obj = {
                      onConfirm() {
                        return closure_0(true);
                      },
                      onBack() {
                        return closure_0(false);
                      }
                    };
                    obj.openAlert("staff-to-non-staff-forward", ref2(forwardOptions(11686), obj));
                  });
                  c3 = 3;
                  c4 = 1;
                  const obj7 = { value: promise, done: false };
                  return obj7;
                }
              }
            } else {
              if (3 === tmp6) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  let obj8 = { value, done: true };
                  return obj8;
                } else if (!value) {
                  _undefined(false);
                  c4 = 3;
                  const obj9 = { value: undefined, done: true };
                  return obj9;
                }
              } else if (4 === tmp6) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  obj8 = closure_0(source[28]);
                  obj8.transitionToChannel(closure_129_1[0], { navigationReplace: true, openTextInVoiceIfVoiceChannel: true });
                  let obj13 = forwardOptions(source[29]);
                  const obj10 = {};
                  const merged = Object.assign(forwardOptions);
                  obj10.withMessage = closure_129_0;
                  obj13.sendForwards(message, closure_129_1, obj10);
                  c3 = 5;
                  c4 = 1;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else {
                closure_129_2 = value;
                const everyResult = closure_129_2.every((status) => "fulfilled" === status.status);
                if (!everyResult) {
                  obj = { channelId, messageId, hasError: true, hasContextMessage: null, numDestinations: null, numDestinationChanges: null, numQueryChanges: null };
                  let tmp11 = null != closure_129_0;
                  if (tmp11) {
                    tmp11 = "" !== closure_129_0;
                  }
                  obj.hasContextMessage = tmp11;
                  obj.numDestinations = closure_129_1.length;
                  obj.numDestinationChanges = ref.current;
                  obj.numQueryChanges = ref2.current;
                  obj27.trackForwardSent(obj);
                  closure_129_3 = first1.filter((item, index) => "rejected" === dependencyMap[index].status);
                  obj1 = closure_0(source[18]);
                  let obj12 = { message, failedDestinations: closure_129_3, forwardOptions };
                  const result = obj1.showForwardFailedAlertModal(obj12);
                }
                obj27 = closure_0(source[17]);
              }
              c4 = 3;
              obj13 = { value, done: true };
              return obj13;
            }
            obj12 = closure_0(source[18]);
            obj12.closeForwardModal();
            if (1 === closure_129_1.length) {
              let obj15 = forwardOptions(source[27]);
              const obj14 = { channelId: closure_129_1[0] };
              c3 = 4;
              c4 = 1;
              obj15 = { value: null, done: false };
              obj15.value = obj15.fetchMessages(obj14);
              return obj15;
            }
          }
          const obj16 = { channelId, messageId, hasError: false, hasContextMessage: null, numDestinations: null, numDestinationChanges: null, numQueryChanges: null, source: null };
          let tmp31 = null != closure_129_0;
          if (tmp31) {
            tmp31 = "" !== closure_129_0;
          }
          obj16.hasContextMessage = tmp31;
          obj16.numDestinations = closure_129_1.length;
          obj16.numDestinationChanges = ref.current;
          obj16.numQueryChanges = ref2.current;
          obj16.source = source;
          tmp109(obj16);
          obj4 = forwardOptions(source[21]);
          const obj17 = { key: "FORWARD_SUCCESS", IconComponent: forwardOptions(source[30]), content: null };
          const intl = closure_0(source[22]).intl;
          obj17.content = intl.string(closure_0(source[22]).t.kwmYkt);
          obj4.open(obj17);
          c4 = 3;
          const obj18 = { value: undefined, done: true };
          return obj18;
        }
        c4 = 3;
      } catch (tmp96) {
        c4 = tmp;
        throw tmp96;
      }
    }
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
  onPress = obj.useCallback(() => {
    const channel = ChannelStore.getChannel(channel_id);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, channel_id, id);
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    ToastUtils.presentLinkCopied();
    ClipboardUtils.copy(channelPermalink);
    ForwardingAnalyticsUtils.trackForwardCopyLink(channel_id, id);
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
    obj = { count: length };
    stringResult = intl.formatToPlainString(tmp8(tmp3[22]).t.jWtYUm, obj);
  }
  obj = { style: memo1, children: null };
  obj1 = { title: null, subtitleColor: "text-feedback-warning", subtitle: null, headerRight: null, onClose: null };
  const tmp8Result1 = require("useNavigatorBackPressHandler");
  const intl3 = tmp8(tmp3[22]).intl;
  obj1.title = intl3.string(require("util").t["+SkRRj"]);
  let formatToPlainStringResult;
  if (first1.length >= trackForwardEditSearchOnce) {
    const intl4 = tmp8(tmp3[22]).intl;
    obj2 = { count: tmp18 };
    formatToPlainStringResult = intl4.formatToPlainString(tmp8(tmp3[22]).t["3Fbkir"], obj2);
  }
  obj1.subtitle = formatToPlainStringResult;
  obj1.headerRight = function headerRight(arg0) {
    let tmp = null;
    if (closure_10) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.onPress = onPress;
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.Xrt5Po);
      obj.IconComponent = LinkIcon.LinkIcon;
      tmp = closure_2_14(HeaderActionButton.HeaderActionButton, obj);
    }
    return tmp;
  };
  obj1.onClose = callback2;
  const items13 = [ref2(forwardOptions(source[37]), obj1), ];
  let obj3 = { style: tmp.container, children: null };
  const items14 = [ref2(forwardOptions(source[40]), { absolute: true }), ref2(forwardOptions(source[41]), { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: prop, onSelectedDestinationChange: callback1, onSearchTextChange: callback, getRowIsUnavailable: callback3, originDestination: memo, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first1.length >= trackForwardEditSearchOnce }), ];
  if (null != stateFromStores) {
    let obj5 = { message: stateFromStores, forwardOptions, sendLabel: stringResult, canSend: length > 0, selectedDestinations: first1, isSending: tmp7, onSend: callback4 };
    let tmp31Result = tmp31(tmp8(tmp3[42]).ForwardMessageFooter, obj5);
  } else {
    let obj6 = { isVisible: length > 0, floatingBackgroundColor: tmp.container.backgroundColor, text: null, onPress: null, loading: null };
    if (1 === length) {
      const intl6 = tmp8(tmp3[22]).intl;
      let stringResult1 = intl6.string(tmp8(tmp3[22]).t.TXNS7S);
    } else {
      const intl5 = tmp8(tmp3[22]).intl;
      let obj7 = { count: length };
      stringResult1 = intl5.formatToPlainString(tmp8(tmp3[22]).t.jWtYUm, obj7);
    }
    obj6.text = stringResult1;
    let tmp35;
    if (!tmp7) {
      tmp35 = callback5;
    }
    obj6.onPress = tmp35;
    obj6.loading = tmp7;
    tmp31Result = tmp31(tmp8(tmp3[43]).ModalFloatingAction, obj6);
  }
  items14[2] = tmp31Result;
  obj3.children = items14;
  items13[1] = first(id, obj3);
  obj.children = items13;
  return first(id, obj);
};