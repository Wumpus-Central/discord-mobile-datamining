// discord_app/modules/forwarding/native/ForwardModal.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl7 from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import ChannelUtils from "../../../utils/ChannelUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import HeaderActionButton2 from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import UserRowConstants from "../../main_tabs_v2/native/shared_components/user_list/UserRowConstants.tsx";
import formatResults from "../../share/formatResults.tsx";
import ForwardModalUtils from "ForwardModalUtils.tsx";
import ForwardingAnalyticsUtils from "../ForwardingAnalyticsUtils.tsx";
import ForwardConstants from "../ForwardConstants.tsx";
import ForwardDestinationUtils from "../ForwardDestinationUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ChannelConversationsStore from "../../conversations/ChannelConversationsStore.tsx";
import ConversationPreviewStore from "../../conversations/ConversationPreviewStore.tsx";
import ICYMIStore_mod from "../../icymi/ICYMIStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import MessagePreviewStore_mod from "../../../stores/native/MessagePreviewStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let failedDestinations, message;

let closure_15;
let closure_16;
let obj2;
const View = react_native.View;
let ICYMIStore = ICYMIStore_mod;
let MessagePreviewStore = MessagePreviewStore_mod;
const MAX_DESTINATION_COUNT = ForwardConstants.MAX_DESTINATION_COUNT;
let UserRowModes = UserRowConstants.UserRowModes;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let obj = { container: obj2 };
obj2 = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_17 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let closure_9;
      let customSendHandler;
      let initialSelectedDestinations;
      let onPress;
      let ref;
      let source;
      let stateFromStores;
      let stateFromStores1;
      let tmp11;
      let tmp6;
      let trackForwardAddRecipientOnce;
      let trackForwardEditSearchOnce;
      let tmp = message;
      let obj = message(source[16]);
      const cResult = obj.c(96);
      message = message.message;
      const forwardOptions = message.forwardOptions;
      ({ initialSelectedDestinations, source } = message);
      if (cResult[0] !== initialSelectedDestinations) {
        let items = initialSelectedDestinations;
        if (undefined === initialSelectedDestinations) {
          items = [];
        }
        cResult[0] = initialSelectedDestinations;
        cResult[1] = items;
      }
      length();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { ignoreKeyboard: true };
        cResult[2] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[2];
      }
      const height = forwardOptions(tmp2[17])(tmp6).height;
      const channel_id = message.channel_id;
      const id = message.id;
      if (cResult[3] !== channel_id) {
        const tmpResult = tmp(source[18]);
        const destinationIdFromChannelId = tmpResult.getDestinationIdFromChannelId(channel_id);
        cResult[3] = channel_id;
        cResult[4] = destinationIdFromChannelId;
      }
      let obj4 = id;
      [r10052, View] = channel_id(id.useState(false), 2);
      channel_id(id.useState(false), 2);
      const tmp9 = channel_id;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [trackForwardEditSearchOnce, ICYMIStore, MessagePreviewStore, stateFromStores, stateFromStores1];
        cResult[5] = items1;
        tmp11 = items1;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === channel_id) {
        if (cResult[7] === id) {
          if (cResult[8] === source) {
            let tmp17;
            let tmp18;
            let tmp20;
            let tmp23;
            let tmp22;
            if (cResult[9] === message) {
              tmp17 = cResult[10];
              tmp18 = cResult[11];
            }
            const tmpResult5 = tmp(source[19]);
            stateFromStores = tmpResult5.useStateFromStores(tmp11, tmp17, tmp18);
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [trackForwardAddRecipientOnce];
              cResult[12] = items2;
              tmp20 = items2;
            } else {
              tmp20 = cResult[12];
            }
            if (cResult[13] !== channel_id) {
              class Y {
                constructor() {
                  return ChannelStore.getChannel(channel_id);
                }
              }
              const items3 = [channel_id];
              cResult[13] = channel_id;
              cResult[14] = items3;
              cResult[15] = Y;
              tmp23 = Y;
              tmp22 = items3;
            } else {
              class Y {
                constructor() {
                  return ChannelStore.getChannel(channel_id);
                }
              }
              tmp23 = cResult[15];
            }
            const tmpResult6 = tmp(source[19]);
            stateFromStores1 = tmpResult6.useStateFromStores(tmp20, tmp23, tmp22);
            if (stateFromStores != null) {
              class Y {
                constructor() {
                  return ChannelStore.getChannel(channel_id);
                }
              }
            }
            ICYMIStore = null != tmp26;
            const tmpResult7 = tmp(source[20]);
            trackForwardAddRecipientOnce = tmpResult7.useTrackForwardAddRecipientOnce();
            const tmpResult8 = tmp(source[20]);
            trackForwardEditSearchOnce = tmpResult8.useTrackForwardEditSearchOnce();
            MessagePreviewStore = obj4.useRef(0);
            const ref2 = obj4.useRef(0);
            const tmp9Result = tmp9(obj4.useState(""), 2);
            let closure_14 = tmp9Result[0];
            let closure_15 = tmp9Result[1];
            const ref3 = obj4.useRef("");
            if (cResult[16] === channel_id) {
              class Y {
                constructor() {
                  return ChannelStore.getChannel(channel_id);
                }
              }
            }
            const fn = function q(current) {
              closure_15(current);
              if (current !== ref3.current) {
                ref2.current = ref2.current + 1;
                if ("" !== current) {
                  trackForwardEditSearchOnce(channel_id, id);
                }
              }
              ref3.current = current;
            };
            cResult[16] = channel_id;
            cResult[17] = id;
            cResult[18] = trackForwardEditSearchOnce;
            cResult[19] = fn;
          }
        }
      }
      class U {
        constructor() {
          if ("checkpoint" !== source) {
            message = MessageStore.getMessage(channel_id, id);
            if (message == null) {
              message = MessagePreviewStore.getMessage(id);
            }
            if (message == null) {
              message = ICYMIStore.getMessage(id);
            }
            if (message == null) {
              message = ChannelConversationsStore.getMessage(channel_id, id);
            }
            if (message == null) {
              message = ConversationPreviewStore.getMessage(id);
            }
          }
          return message;
        }
      }
      const items4 = [channel_id, id, source, message];
      cResult[6] = channel_id;
      cResult[7] = id;
      cResult[8] = source;
      cResult[9] = message;
      cResult[10] = U;
      cResult[11] = items4;
      tmp18 = items4;
      tmp17 = U;
    }
  : (message) => {
      let c7;
      let formatToPlainStringResult;
      let intl3;
      let items13;
      let items14;
      let ref2;
      let stringResult;
      let stringResult1;
      let tmp31Result;
      let tmp35;
      let tmp7;
      message = message.message;
      let forwardOptions = message.forwardOptions;
      let prop = message.initialSelectedDestinations;
      if (prop === undefined) {
        prop = [];
      }
      let source = message.source;
      c7 = undefined;
      let stateFromStores;
      let stateFromStores1;
      let closure_10;
      let trackForwardAddRecipientOnce;
      let trackForwardEditSearchOnce;
      let ref;
      UserRowModes = undefined;
      let first;
      let closure_16;
      let ref3;
      let first1;
      let closure_19;
      let callback4;
      let onPress;
      let tmp = ref3();
      const tmp2 = forwardOptions;
      const tmp3 = source;
      let height = forwardOptions(source[17])({ ignoreKeyboard: true }).height;
      const channel_id = message.channel_id;
      const id = message.id;
      let obj = channel_id;
      const items = [channel_id];
      const memo = channel_id.useMemo(() => {
        const obj = formatResults;
        return obj.getDestinationIdFromChannelId(channel_id);
      }, items);
      [tmp7, c7] = height(channel_id.useState(false), 2);
      const tmp6 = height(channel_id.useState(false), 2);
      let obj2 = message(source[19]);
      const items1 = [trackForwardAddRecipientOnce, stateFromStores1, trackForwardEditSearchOnce, c7, stateFromStores];
      const items2 = [channel_id, id, source, message];
      stateFromStores = obj2.useStateFromStores(
        items1,
        () => {
          if ("checkpoint" !== source) {
            message = MessageStore.getMessage(channel_id, id);
            if (message == null) {
              message = MessagePreviewStore.getMessage(id);
            }
            if (message == null) {
              message = ICYMIStore.getMessage(id);
            }
            if (message == null) {
              message = ChannelConversationsStore.getMessage(channel_id, id);
            }
            if (message == null) {
              message = ConversationPreviewStore.getMessage(id);
            }
          }
          return message;
        },
        items2,
      );
      let obj3 = message(source[19]);
      const items3 = [closure_10];
      const items4 = [channel_id];
      stateFromStores1 = obj3.useStateFromStores(items3, () => ChannelStore.getChannel(channel_id), items4);
      let id1;
      if (stateFromStores != null) {
        id1 = stateFromStores.id;
      }
      closure_10 = null != id1;
      const tmp8Result = message(tmp3[20]);
      trackForwardAddRecipientOnce = tmp8Result.useTrackForwardAddRecipientOnce();
      const tmp8Result3 = message(tmp3[20]);
      trackForwardEditSearchOnce = tmp8Result3.useTrackForwardEditSearchOnce();
      ref = obj.useRef(0);
      UserRowModes = obj.useRef(0);
      const tmp5Result = height(obj.useState(""), 2);
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
      const tmp5Result2 = height(obj.useState(prop), 2);
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
        const obj = ForwardingAnalyticsUtils;
        const obj2 = {
          channelId: channel_id,
          messageId: id,
          numDestinationChanges: ref.current,
          numQueryChanges: ref2.current,
        };
        obj.trackForwardCancel(obj2);
        const obj3 = ForwardModalUtils;
        obj3.closeForwardModal();
      }, items7);
      const tmp8Result4 = message(tmp3[22]);
      tmp8Result4.useNavigatorBackPressHandler(() => {
        const obj = ForwardingAnalyticsUtils;
        const obj2 = {
          channelId: channel_id,
          messageId: id,
          numDestinationChanges: ref.current,
          numQueryChanges: ref2.current,
        };
        obj.trackForwardCancel(obj2);
        return false;
      });
      const items8 = [stateFromStores, stateFromStores1];
      const callback3 = obj.useCallback((type) => {
        let destinationIsUnavailable;
        if (null != stateFromStores) {
          if (null != stateFromStores1) {
            const obj = ForwardDestinationUtils;
            destinationIsUnavailable = obj.getDestinationIsUnavailable(tmp, tmp3, type);
          }
        }
        return destinationIsUnavailable;
      }, items8);
      const useCallback = obj.useCallback;
      let closure_0 = customSendHandler((withMessage) => {
        let channelId;
        let messageId;
        let c3 = 0;
        let c4 = 0;
        return (function* (arg0) {
          let intl;
          let intl2;
          let obj15;
          let tmp10;
          let tmp30;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
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
                  return { value, done: true };
                } else {
                  forwardOptions = undefined;
                  source = undefined;
                  failedDestinations = undefined;
                  if (null == c3) {
                    if (null != message) {
                      closure_1_7(true);
                      c3 = 2;
                      c4 = 1;
                      const obj5 = {
                        value: Promise.all(
                          closure_1_18.map(withMessage(closure_2_2[18]).getOrResolveChannelIdFromDestinationId),
                        ),
                        done: false,
                      };
                      return obj5;
                    } else {
                      const obj6 = {
                        key: "FORWARD_ERROR",
                        content: intl2.string(withMessage(closure_2_2[25]).t.R0RpRX),
                      };
                      const open2 = closure_2_1(closure_2_2[24]).open;
                      closure_2_1(closure_2_2[24]);
                      intl2 = withMessage(closure_2_2[25]).intl;
                      open2(obj6);
                    }
                  } else {
                    c3 = 1;
                    c4 = 1;
                    const obj7 = { withMessage: tmp114 };
                    const obj9 = { value: tmp115(closure_1_18, obj7, closure_1_7), done: false };
                    return obj9;
                  }
                }
              } else if (1 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                }
              } else {
                if (2 === c3) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    return { value, done: true };
                  } else {
                    forwardOptions = value.filter(withMessage(closure_2_2[26]).isNotNullish);
                    if (closure_2_1(closure_2_2[27])(message, forwardOptions)) {
                      const self = this;
                      const self2 = this;
                      c3 = 3;
                      c4 = 1;
                      const obj13 = {
                        value: new Promise((arg0) => {
                          closure_0 = arg0;
                          const obj = withMessage(source[28]);
                          const obj2 = {
                            onConfirm() {
                              return closure_0(true);
                            },
                            onBack() {
                              return closure_0(false);
                            },
                          };
                          obj.openAlert("staff-to-non-staff-forward", closure_1_15(forwardOptions(source[29]), obj2));
                        }),
                        done: false,
                      };
                      return obj13;
                    }
                  }
                } else {
                  if (3 === c3) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      return { value, done: true };
                    } else if (!value) {
                      closure_1_7(false);
                      c4 = 3;
                      return { value: undefined, done: true };
                    }
                  } else if (4 === c3) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      return { value, done: true };
                    } else {
                      const obj8 = withMessage(closure_2_2[31]);
                      obj8.transitionToChannel(forwardOptions[0], {
                        navigationReplace: true,
                        openTextInVoiceIfVoiceChannel: true,
                      });
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    return { value, done: true };
                  } else {
                    source = value;
                    const everyResult = source.every((status) => "fulfilled" === status.status);
                    const trackForwardSent = withMessage(closure_2_2[20]).trackForwardSent;
                    withMessage(closure_2_2[20]);
                    if (everyResult) {
                      const obj19 = {
                        channelId,
                        messageId,
                        hasError: false,
                        hasContextMessage: tmp30,
                        numDestinations: forwardOptions.length,
                        numDestinationChanges: ref.current,
                        numQueryChanges: ref2.current,
                        source,
                      };
                      tmp30 = null != withMessage && "" !== withMessage;
                      trackForwardSent(obj19);
                      const obj20 = {
                        key: "FORWARD_SUCCESS",
                        IconComponent: closure_2_1(closure_2_2[33]),
                        content: intl.string(withMessage(closure_2_2[25]).t.kwmYkt),
                      };
                      const open = closure_2_1(closure_2_2[24]).open;
                      closure_2_1(closure_2_2[24]);
                      intl = withMessage(closure_2_2[25]).intl;
                      open(obj20);
                      c4 = 3;
                      return { value: undefined, done: true };
                    } else {
                      let obj = {
                        channelId,
                        messageId,
                        hasError: true,
                        hasContextMessage: tmp10,
                        numDestinations: forwardOptions.length,
                        numDestinationChanges: ref.current,
                        numQueryChanges: ref2.current,
                      };
                      tmp10 = null != withMessage && "" !== withMessage;
                      trackForwardSent(obj);
                      failedDestinations = closure_1_18.filter((item, index) => "rejected" === source[index].status);
                      let obj2 = withMessage(closure_2_2[21]);
                      const obj22 = { message, failedDestinations, forwardOptions };
                      const result = obj2.showForwardFailedAlertModal(obj22);
                    }
                  }
                  const obj23 = { withMessage };
                  const sendForwards = closure_2_1(closure_2_2[32]).sendForwards;
                  closure_2_1(closure_2_2[32]);
                  const merged = Object.assign(forwardOptions);
                  c3 = 5;
                  c4 = 1;
                  const obj24 = { value: sendForwards(message, forwardOptions, obj23), done: false };
                  return obj24;
                }
                const obj12 = withMessage(closure_2_2[21]);
                obj12.closeForwardModal();
                if (1 === forwardOptions.length) {
                  c3 = 4;
                  c4 = 1;
                  const obj25 = { channelId: forwardOptions[0] };
                  const obj26 = { value: obj15.fetchMessages(obj25), done: false };
                  obj15 = closure_2_1(closure_2_2[30]);
                  return obj26;
                }
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp94) {
              c4 = 3;
              throw tmp94;
            }
          }
        })();
      });
      const items9 = [channel_id, forwardOptions, id, stateFromStores, first1, source, customSendHandler];
      callback4 = useCallback(function () {
        return closure_0(...arguments);
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
        const obj = ChannelUtils;
        const channelPermalink = obj.getChannelPermalink(guild_id, channel_id, id);
        const obj2 = HapticUtils;
        const result = obj2.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        const obj3 = ToastUtils;
        obj3.presentLinkCopied();
        const obj4 = ClipboardUtils;
        obj4.copy(channelPermalink);
        const obj5 = ForwardingAnalyticsUtils;
        obj5.trackForwardCopyLink(channel_id, id);
      }, items11);
      const items12 = [height];
      const memo1 = obj.useMemo(() => {
        height = "100%";
        PlatformUtils;
        return { height };
      }, items12);
      const tmp18 = ref;
      if (first1.length <= 1) {
        let intl2 = tmp8(tmp3[25]).intl;
        stringResult = intl2.string(tmp8(tmp3[25]).t.TXNS7S);
      } else {
        let intl = tmp8(tmp3[25]).intl;
        let obj4 = { count: first1.length };
        stringResult = intl.formatToPlainString(tmp8(tmp3[25]).t.jWtYUm, obj4);
      }
      let tmp30 = id;
      let obj5 = { style: memo1, children: items13 };
      let obj6 = {
        title: intl3.string(message(tmp3[25]).t["+SkRRj"]),
        subtitleColor: "text-feedback-warning",
        subtitle: formatToPlainStringResult,
        headerRight(arg0) {
          let intl;
          let tmp = null;
          if (closure_10) {
            const obj = { onPress, accessibilityLabel: intl.string(intl7.t.Xrt5Po), IconComponent: LinkIcon.LinkIcon };
            const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
            const merged = Object.assign(arg0);
            intl = intl7.intl;
            tmp = first(HeaderActionButton, obj);
          }
          return tmp;
        },
        onClose: callback2,
      };
      const tmp2Result = tmp2(tmp3[42]);
      intl3 = tmp8(tmp3[25]).intl;
      formatToPlainStringResult = undefined;
      if (first1.length >= ref) {
        const intl4 = tmp8(tmp3[25]).intl;
        let obj7 = { count: tmp18 };
        formatToPlainStringResult = intl4.formatToPlainString(tmp8(tmp3[25]).t["3Fbkir"], obj7);
      }
      items13 = [tmp31(tmp2Result, obj6)];
      let obj8 = { style: tmp.container, children: items14 };
      items14 = [tmp31(tmp2(tmp3[43]), { absolute: true }), ,];
      let obj9 = {
        rowMode: UserRowModes.TOGGLE,
        initialSelectedDestinations: prop,
        onSelectedDestinationChange: callback1,
        onSearchTextChange: callback,
        getRowIsUnavailable: callback3,
        originDestination: memo,
        insetEnd: 0,
        disableGradient: true,
        disableStickySections: true,
        disableSelection: tmp19,
      };
      items14[1] = first(tmp2(tmp3[44]), obj9);
      if (null != stateFromStores) {
        const obj10 = {
          message: stateFromStores,
          forwardOptions,
          sendLabel: stringResult,
          canSend: first1.length > 0,
          selectedDestinations: first1,
          isSending: tmp7,
          onSend: callback4,
        };
        tmp31Result = tmp31(tmp8(tmp3[45]).ForwardMessageFooter, obj10);
      } else {
        const obj11 = {
          isVisible: first1.length > 0,
          floatingBackgroundColor: tmp.container.backgroundColor,
          text: stringResult1,
          onPress: tmp35,
          loading: tmp7,
        };
        const ModalFloatingAction = tmp8(tmp3[46]).ModalFloatingAction;
        if (1 === first1.length) {
          const intl6 = tmp8(tmp3[25]).intl;
          stringResult1 = intl6.string(tmp8(tmp3[25]).t.TXNS7S);
        } else {
          const intl5 = tmp8(tmp3[25]).intl;
          let obj12 = { count: first1.length };
          stringResult1 = intl5.formatToPlainString(tmp8(tmp3[25]).t.jWtYUm, obj12);
        }
        tmp35 = undefined;
        if (!tmp7) {
          tmp35 = callback5;
        }
        tmp31Result = tmp31(ModalFloatingAction, obj11);
      }
      items14[2] = tmp31Result;
      items13[1] = closure_16(tmp30, obj8);
      return closure_16(tmp30, obj5);
    };
let result = size.fileFinishedImporting("modules/forwarding/native/ForwardModal.tsx");

export default tmp3;
