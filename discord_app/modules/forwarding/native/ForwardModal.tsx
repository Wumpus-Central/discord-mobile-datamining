// === Module 11164: ForwardModal ===

// Module 11164 (ForwardModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ToastUtils from "ToastUtils" /* 4524 */;
import LinkIcon from "LinkIcon" /* 4771 */;
import HapticUtils from "HapticUtils" /* 4797 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4798 */;
import ChannelUtils from "ChannelUtils" /* 4974 */;
import ClipboardUtils from "ClipboardUtils" /* 6605 */;
import HeaderActionButton from "HeaderActionButton" /* 6790 */;
import formatResults from "formatResults" /* 10433 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11162 */;
import ForwardingAnalyticsUtils from "ForwardingAnalyticsUtils" /* 11163 */;
import ForwardDestinationUtils from "ForwardDestinationUtils" /* 11166 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7009 */;
import ConversationsStore from "ConversationsStore" /* 7013 */;
import ICYMIStore from "ICYMIStore" /* 7775 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import MessageStore from "MessageStore" /* 5049 */;
import MessagePreviewStore from "MessagePreviewStore" /* 7800 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const MAX_DESTINATION_COUNT = fn(11165).MAX_DESTINATION_COUNT;
let UserRowModes = fn(10308).UserRowModes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND } };
let closure_17 = createStyles.createStyles(obj2);
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
  let ref;
  UserRowModes = undefined;
  let first;
  closure_16 = undefined;
  let ref3;
  let first1;
  closure_19 = undefined;
  let callback4;
  let onPress;
  let tmp = ref3();
  let height = forwardOptions(source[15])({ ignoreKeyboard: true }).height;
  const channel_id = message.channel_id;
  const id = message.id;
  const items = [channel_id];
  const memo = channel_id.useMemo(() => formatResults.getDestinationIdFromChannelId(channel_id), items);
  [tmp7, c7] = height(channel_id.useState(false), 2);
  const tmp6 = height(channel_id.useState(false), 2);
  const items1 = [trackForwardAddRecipientOnce, stateFromStores1, trackForwardEditSearchOnce, stateFromStores, c7];
  const items2 = [channel_id, id, source, message];
  stateFromStores = require("initialize").useStateFromStores(items1, () => {
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
      if (message == null) {
        message = ConversationPreviewStore.getMessage(id);
      }
    }
    return message;
  }, items2);
  let obj2 = require("initialize");
  const items3 = [closure_10];
  const items4 = [channel_id];
  stateFromStores1 = require("initialize").useStateFromStores(items3, () => ChannelStore.getChannel(channel_id), items4);
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  closure_10 = null != id1;
  let obj3 = require("initialize");
  trackForwardAddRecipientOnce = require("ForwardingAnalyticsUtils").useTrackForwardAddRecipientOnce();
  const tmp8Result = require("ForwardingAnalyticsUtils");
  trackForwardEditSearchOnce = require("ForwardingAnalyticsUtils").useTrackForwardEditSearchOnce();
  ref = obj.useRef(0);
  UserRowModes = obj.useRef(0);
  const tmp5Result = height(channel_id.useState(""), 2);
  first = tmp5Result[0];
  closure_16 = tmp5Result[1];
  ref3 = obj.useRef("");
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
  const tmp5Result2 = height(channel_id.useState(prop), 2);
  first1 = tmp5Result2[0];
  closure_19 = tmp5Result2[1];
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
    ForwardingAnalyticsUtils.trackForwardCancel({ channelId: channel_id, messageId: id, numDestinationChanges: ref.current, numQueryChanges: ref2.current });
    const obj2 = { channelId: channel_id, messageId: id, numDestinationChanges: ref.current, numQueryChanges: ref2.current };
    ForwardModalUtils.closeForwardModal();
  }, items7);
  const tmp18 = ref;
  const tmp8Result3 = require("ForwardingAnalyticsUtils");
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    ForwardingAnalyticsUtils.trackForwardCancel({ channelId: channel_id, messageId: id, numDestinationChanges: ref.current, numQueryChanges: ref2.current });
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
                const obj6 = { value: Promise.all(first1.map(closure_0(source[16]).getOrResolveChannelIdFromDestinationId)), done: false };
                return obj6;
              } else {
                const obj7 = { key: "FORWARD_ERROR", content: null };
                const intl2 = closure_0(source[23]).intl;
                obj7.content = intl2.string(closure_0(source[23]).t.R0RpRX);
                forwardOptions(source[22]).open(obj7);
                const obj28 = forwardOptions(source[22]);
              }
            } else {
              const obj8 = { withMessage: tmp118 };
              c3 = 1;
              c4 = 1;
              const obj10 = { value: tmp119(first1, obj8, _undefined), done: false };
              return obj10;
            }
          }
        } else {
          if (1 === tmp6) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj11 = { value, done: true };
              return obj11;
            }
          } else {
            if (2 === tmp6) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                closure_129_1 = value.filter(closure_0(source[24]).isNotNullish);
                if (forwardOptions(source[25])(message, closure_129_1)) {
                  const promise = new Promise((arg0) => {
                    closure_0 = arg0;
                    closure_1_0(5198).openAlert("staff-to-non-staff-forward", closure_1_15(forwardOptions(11169), {
                      onConfirm() {
                        return closure_0(true);
                      },
                      onBack() {
                        return closure_0(false);
                      }
                    }));
                  });
                  c3 = 3;
                  c4 = 1;
                  const obj15 = { value: promise, done: false };
                  return obj15;
                }
              }
            } else {
              if (3 === tmp6) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj17 = { value, done: true };
                  return obj17;
                } else if (!value) {
                  _undefined(false);
                  c4 = 3;
                  const obj18 = { value: undefined, done: true };
                  return obj18;
                }
              } else if (4 === tmp6) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_0(source[29]).transitionToChannel(closure_129_1[0], { navigationReplace: true, openTextInVoiceIfVoiceChannel: true });
                  const obj9 = closure_0(source[29]);
                  const obj19 = {};
                  const merged = Object.assign(forwardOptions);
                  obj19.withMessage = closure_129_0;
                  forwardOptions(source[30]).sendForwards(message, closure_129_1, obj19);
                  c3 = 5;
                  c4 = 1;
                  const obj14 = forwardOptions(source[30]);
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj20 = { value, done: true };
                return obj20;
              } else {
                closure_129_2 = value;
                const everyResult = closure_129_2.every((status) => "fulfilled" === status.status);
                if (!everyResult) {
                  const obj = { channelId, messageId, hasError: true, hasContextMessage: null, numDestinations: null, numDestinationChanges: null, numQueryChanges: null };
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
                  const obj21 = { message, failedDestinations: closure_129_3, forwardOptions };
                  const result = closure_0(source[19]).showForwardFailedAlertModal(obj21);
                  const obj2 = closure_0(source[19]);
                }
                obj27 = closure_0(source[18]);
              }
              c4 = 3;
              const obj22 = { value, done: true };
              return obj22;
            }
            closure_0(source[19]).closeForwardModal();
            if (1 === closure_129_1.length) {
              const obj23 = { channelId: closure_129_1[0] };
              c3 = 4;
              c4 = 1;
              const obj24 = { value: forwardOptions(source[28]).fetchMessages(obj23), done: false };
              return obj24;
            }
            const obj13 = closure_0(source[19]);
          }
          const obj25 = { channelId, messageId, hasError: false, hasContextMessage: null, numDestinations: null, numDestinationChanges: null, numQueryChanges: null, source: null };
          let tmp31 = null != closure_129_0;
          if (tmp31) {
            tmp31 = "" !== closure_129_0;
          }
          obj25.hasContextMessage = tmp31;
          obj25.numDestinations = closure_129_1.length;
          obj25.numDestinationChanges = ref.current;
          obj25.numQueryChanges = ref2.current;
          obj25.source = source;
          tmp109(obj25);
          const obj26 = { key: "FORWARD_SUCCESS", IconComponent: forwardOptions(source[31]), content: null };
          const intl = closure_0(source[23]).intl;
          obj26.content = intl.string(closure_0(source[23]).t.kwmYkt);
          forwardOptions(source[22]).open(obj26);
          c4 = 3;
          const obj29 = { value: undefined, done: true };
          return obj29;
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
    let intl2 = tmp8(tmp3[23]).intl;
    let stringResult = intl2.string(tmp8(tmp3[23]).t.TXNS7S);
  } else {
    let intl = tmp8(tmp3[23]).intl;
    let obj4 = { count: length };
    stringResult = intl.formatToPlainString(tmp8(tmp3[23]).t.jWtYUm, obj4);
  }
  let obj5 = { style: memo1, children: null };
  let obj6 = { title: null, subtitleColor: "text-feedback-warning", subtitle: null, headerRight: null, onClose: null };
  const tmp8Result4 = require("useNavigatorBackPressHandler");
  const intl3 = tmp8(tmp3[23]).intl;
  obj6.title = intl3.string(require("util").t["+SkRRj"]);
  let formatToPlainStringResult;
  if (first1.length >= ref) {
    const intl4 = tmp8(tmp3[23]).intl;
    let obj7 = { count: tmp18 };
    formatToPlainStringResult = intl4.formatToPlainString(tmp8(tmp3[23]).t["3Fbkir"], obj7);
  }
  obj6.subtitle = formatToPlainStringResult;
  obj6.headerRight = function headerRight(arg0) {
    let tmp = null;
    if (closure_10) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.onPress = onPress;
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.Xrt5Po);
      obj.IconComponent = LinkIcon.LinkIcon;
      tmp = __initData(HeaderActionButton.HeaderActionButton, obj);
    }
    return tmp;
  };
  obj6.onClose = callback2;
  const items13 = [first(forwardOptions(source[38]), obj6), ];
  let obj8 = { style: tmp.container, children: null };
  const items14 = [first(forwardOptions(source[41]), { absolute: true }), first(forwardOptions(source[42]), { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: prop, onSelectedDestinationChange: callback1, onSearchTextChange: callback, getRowIsUnavailable: callback3, originDestination: memo, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first1.length >= ref }), ];
  if (null != stateFromStores) {
    let obj10 = { message: stateFromStores, forwardOptions, sendLabel: stringResult, canSend: length > 0, selectedDestinations: first1, isSending: tmp7, onSend: callback4 };
    let tmp31Result = tmp31(tmp8(tmp3[43]).ForwardMessageFooter, obj10);
  } else {
    let obj11 = { isVisible: length > 0, floatingBackgroundColor: tmp.container.backgroundColor, text: null, onPress: null, loading: null };
    if (1 === length) {
      const intl6 = tmp8(tmp3[23]).intl;
      let stringResult1 = intl6.string(tmp8(tmp3[23]).t.TXNS7S);
    } else {
      const intl5 = tmp8(tmp3[23]).intl;
      let obj12 = { count: length };
      stringResult1 = intl5.formatToPlainString(tmp8(tmp3[23]).t.jWtYUm, obj12);
    }
    obj11.text = stringResult1;
    let tmp35;
    if (!tmp7) {
      tmp35 = callback5;
    }
    obj11.onPress = tmp35;
    obj11.loading = tmp7;
    tmp31Result = tmp31(tmp8(tmp3[44]).ModalFloatingAction, obj11);
  }
  items14[2] = tmp31Result;
  obj8.children = items14;
  items13[1] = closure_16(id, obj8);
  obj5.children = items13;
  return closure_16(id, obj5);
};