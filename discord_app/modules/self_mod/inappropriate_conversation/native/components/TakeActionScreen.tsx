// discord_app/modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00019_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import SafetyToastsActionCreatorsDefault from "../../../../safety_common/SafetyToastsActionCreators.native.tsx";
import RelationshipActionCreatorsDefault from "../../../../../actions/RelationshipActionCreators.tsx";
import SafetyWarningUtils from "../../../shared/SafetyWarningUtils.tsx";
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const react = react2;
let _require, c1, navigation, senderId;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let useState = react2.useState;
const View = react_native.View;
({
  MODAL_LOCATION_CONTEXT_MOBILE: c10,
  NOFILTR_URL: unpackModuleId,
  THROUGHLINE_URL: closure_12,
  REPORTED_USER_CONFIRMATION_TOAST_KEY: map1,
  TOAST_CHECKMARK_ICON_COLOR: closure_14,
} = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, toastContainer: obj3, helplineGroup: obj4, textCenter: { textAlign: "center" } };
obj2 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
obj4 = { display: "flex", alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
let closure_17 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (senderId) => {
      let closure_4;
      let first;
      let isReported;
      let items2;
      let setReported;
      let tmp13;
      let tmp7;
      let tmp8;
      const tmp = senderId;
      let obj = senderId(setReported[11]);
      const cResult = obj.c(45);
      senderId = senderId.senderId;
      const channelId = senderId.channelId;
      ({ isReported, setReported } = senderId);
      const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
      const tmp4 = closure_17();
      _slicedToArray = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_8];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== senderId) {
        const fn = function y() {
          return RelationshipStore.isBlocked(senderId);
        };
        const items1 = [senderId];
        cResult[1] = senderId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(setReported[12]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      const tmpResult5 = tmp(setReported[13]);
      const lastChannelMessage = tmpResult5.useLastChannelMessage(channelId);
      const tmpResult6 = tmp(setReported[14]);
      const shouldShowHelplineLink = tmpResult6.useShouldShowHelplineLink();
      const tmp12 = _slicedToArray(useState(false), 2);
      [tmp13, useState] = tmp12;
      const tmpResult7 = tmp(setReported[15]);
      navigation = tmpResult7.useNavigation();
      const tmpResult8 = tmp(setReported[14]);
      const shouldShowThroughlineLink = tmpResult8.useShouldShowThroughlineLink();
      if (cResult[4] === channelId) {
        if (cResult[5] === senderId) {
          let tmp16;
          if (cResult[6] === trackAnalyticsEvent) {
            tmp16 = cResult[7];
          }
          if (cResult[8] === channelId) {
            if (cResult[9] === senderId) {
              let tmp17;
              if (cResult[10] === trackAnalyticsEvent) {
                tmp17 = cResult[11];
              }
              if (cResult[12] === channelId) {
                if (cResult[13] === lastChannelMessage) {
                  if (cResult[14] === senderId) {
                    if (cResult[15] === setReported) {
                      if (cResult[16] === tmp4.toastContainer) {
                        let tmp18;
                        if (cResult[17] === trackAnalyticsEvent) {
                          tmp18 = cResult[18];
                        }
                        closure_8 = tmp18;
                        class X {
                          constructor() {
                            const obj = RelationshipActionCreatorsDefault;
                            const obj2 = { location: _location };
                            obj.unblockUser(senderId, obj2);
                            const obj3 = SafetyToastsActionCreatorsDefault;
                            const result = obj3.showUnblockSuccessToast(senderId, channelId);
                            trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
                          }
                        }
                        if (stateFromStores) {
                          tmp16 = tmp17;
                        }
                        if (cResult[21] === tmp19) {
                          let tmp20;
                          let tmp24;
                          if (cResult[22] === tmp16) {
                            tmp20 = cResult[23];
                          }
                          if (cResult[24] !== isReported) {
                            let stringResult;
                            let intl = tmp(setReported[22]).intl;
                            const string = intl.string;
                            class X {
                              constructor() {
                                const obj = RelationshipActionCreatorsDefault;
                                const obj2 = { location: _location };
                                obj.unblockUser(senderId, obj2);
                                const obj3 = SafetyToastsActionCreatorsDefault;
                                const result = obj3.showUnblockSuccessToast(senderId, channelId);
                                trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
                              }
                            }
                            if (isReported) {
                              stringResult = string(tmp25.QvwOJ6);
                            } else {
                              stringResult = string(tmp25["7fHyE6"]);
                            }
                            cResult[24] = isReported;
                            cResult[25] = stringResult;
                            tmp24 = stringResult;
                          } else {
                            tmp24 = cResult[25];
                          }
                          class X {
                            constructor() {
                              const obj = RelationshipActionCreatorsDefault;
                              const obj2 = { location: _location };
                              obj.unblockUser(senderId, obj2);
                              const obj3 = SafetyToastsActionCreatorsDefault;
                              const result = obj3.showUnblockSuccessToast(senderId, channelId);
                              trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
                            }
                          }
                          if (cResult[28] === tmp13) {
                            if (cResult[29] === isReported) {
                              if (cResult[30] === tmp24) {
                                let tmp28;
                                if (cResult[31] === tmp27) {
                                  tmp28 = cResult[32];
                                }
                                if (cResult[33] === navigation) {
                                  if (cResult[34] === shouldShowHelplineLink) {
                                    if (cResult[35] === shouldShowThroughlineLink) {
                                      if (cResult[36] === tmp4.helplineGroup) {
                                        if (cResult[37] === tmp4.textCenter) {
                                          let tmp32;
                                          if (cResult[38] === trackAnalyticsEvent) {
                                            tmp32 = cResult[39];
                                          }
                                          if (cResult[40] === tmp4.container) {
                                            if (cResult[41] === tmp28) {
                                              if (cResult[42] === tmp32) {
                                                let tmp34;
                                                if (cResult[43] === tmp20) {
                                                  tmp34 = cResult[44];
                                                }
                                                return tmp34;
                                              }
                                            }
                                          }
                                          class X {
                                            constructor() {
                                              const obj = RelationshipActionCreatorsDefault;
                                              const obj2 = { location: _location };
                                              obj.unblockUser(senderId, obj2);
                                              const obj3 = SafetyToastsActionCreatorsDefault;
                                              const result = obj3.showUnblockSuccessToast(senderId, channelId);
                                              trackAnalyticsEvent(
                                                SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK,
                                              );
                                            }
                                          }
                                          let obj2 = { style: tmp4.container, children: items2 };
                                          items2 = [tmp20, tmp28, tmp32];
                                          const tmp36 = closure_16(navigation, obj2);
                                          cResult[40] = tmp4.container;
                                          cResult[41] = tmp28;
                                          cResult[42] = tmp32;
                                          cResult[43] = tmp20;
                                          cResult[44] = tmp36;
                                          tmp34 = tmp36;
                                        }
                                      }
                                    }
                                  }
                                }
                                class X {
                                  constructor() {
                                    const obj = RelationshipActionCreatorsDefault;
                                    const obj2 = { location: _location };
                                    obj.unblockUser(senderId, obj2);
                                    const obj3 = SafetyToastsActionCreatorsDefault;
                                    const result = obj3.showUnblockSuccessToast(senderId, channelId);
                                    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
                                  }
                                }
                                cResult[33] = navigation;
                                cResult[34] = shouldShowHelplineLink;
                                cResult[35] = shouldShowThroughlineLink;
                                cResult[36] = tmp4.helplineGroup;
                                cResult[37] = tmp4.textCenter;
                                cResult[38] = trackAnalyticsEvent;
                                cResult[39] = tmp33;
                                tmp32 = tmp33;
                              }
                            }
                          }
                          let obj3 = {
                            variant: "secondary",
                            size: "lg",
                            icon: channelId(setReported[27]),
                            loading: tmp13,
                            disabled: isReported,
                            text: tmp24,
                            grow: true,
                            onPress: tmp27,
                          };
                          const Button2 = tmp(setReported[25]).Button;
                          const tmp31 = closure_15(Button2, obj3);
                          cResult[28] = tmp13;
                          cResult[29] = isReported;
                          cResult[30] = tmp24;
                          cResult[31] = tmp27;
                          cResult[32] = tmp31;
                          tmp28 = tmp31;
                        }
                        let obj4 = {
                          variant: "primary",
                          size: "lg",
                          icon: channelId(setReported[26]),
                          text: tmp19,
                          grow: true,
                          onPress: tmp16,
                        };
                        const Button = tmp(setReported[25]).Button;
                        const tmp23 = closure_15(Button, obj4);
                        cResult[21] = tmp19;
                        cResult[22] = tmp16;
                        cResult[23] = tmp23;
                        tmp20 = tmp23;
                      }
                    }
                  }
                }
              }
              class X {
                constructor() {
                  const obj = RelationshipActionCreatorsDefault;
                  const obj2 = { location: _location };
                  obj.unblockUser(senderId, obj2);
                  const obj3 = SafetyToastsActionCreatorsDefault;
                  const result = obj3.showUnblockSuccessToast(senderId, channelId);
                  trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
                }
              }
              _require = trackAnalyticsEvent(function* () {
                let iconColor;
                let key;
                if (c2 === 2) {
                  c2 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
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
                    c2 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj4 = { value, done: true };
                        return obj4;
                      } else if (null != user.getUser(tmp3)) {
                        closure_1_6(true);
                        let obj3 = tmp3(setReported[19]);
                        c1 = 1;
                        c2 = 1;
                        const obj5 = {
                          value: obj3.submitReportForInappropriateConversationSafetyAlert(
                            lastChannelMessage,
                            () => {
                              let intl;
                              let intl2;
                              closure_1_2(true);
                              const obj = closure_0(c2[20]);
                              const designSystemsNotificationComponents =
                                obj.getDesignSystemsNotificationComponents("TakeActionScreen");
                              const tmp5 = c1(c2[21]);
                              if (designSystemsNotificationComponents) {
                                const openMana = tmp5.openMana;
                                const obj2 = { text: intl2.string(closure_0(c2[22]).t.gn2c6X), variant: "success" };
                                intl2 = closure_0(c2[22]).intl;
                                openMana(key, obj2);
                              } else {
                                const open = tmp5.open;
                                const obj3 = {
                                  key,
                                  content: intl.string(closure_0(c2[22]).t.gn2c6X),
                                  IconComponent: closure_0(c2[23]).CircleCheckIcon,
                                  iconColor,
                                  containerStyle: toastContainer.toastContainer,
                                };
                                intl = closure_0(c2[22]).intl;
                                open(obj3);
                              }
                            },
                            () => {
                              const presentFailedToast = closure_1_0(closure_1_2[24]).presentFailedToast;
                              closure_1_0(closure_1_2[24]);
                              const intl = closure_1_0(closure_1_2[22]).intl;
                              presentFailedToast(intl.string(closure_1_0(closure_1_2[22]).t["0YV04/"]));
                            },
                          ),
                          done: false,
                        };
                        return obj5;
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj6 = { value, done: true };
                      return obj6;
                    } else {
                      closure_1_6(false);
                      let obj = channelId(setReported[17]);
                      const result = obj.showReportSuccessToast(tmp3, c1);
                      trackAnalyticsEvent(tmp3(setReported[18]).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
                    }
                    c2 = 3;
                    return { value: "IconComponent", done: null };
                  } catch (tmp21) {
                    c2 = 3;
                    throw tmp21;
                  }
                }
              });
              const fn3 = function () {
                return closure_0(...arguments);
              };
              cResult[12] = channelId;
              cResult[13] = lastChannelMessage;
              cResult[14] = senderId;
              cResult[15] = setReported;
              cResult[16] = tmp4.toastContainer;
              cResult[17] = trackAnalyticsEvent;
              cResult[18] = fn3;
              tmp18 = fn3;
            }
          }
          class X {
            constructor() {
              const obj = RelationshipActionCreatorsDefault;
              const obj2 = { location: _location };
              obj.unblockUser(senderId, obj2);
              const obj3 = SafetyToastsActionCreatorsDefault;
              const result = obj3.showUnblockSuccessToast(senderId, channelId);
              trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
            }
          }
          cResult[8] = channelId;
          cResult[9] = senderId;
          cResult[10] = trackAnalyticsEvent;
          cResult[11] = X;
          tmp17 = X;
        }
      }
      const fn2 = function w() {
        let obj = RelationshipActionCreatorsDefault;
        const obj2 = { location: _location };
        const blockUserResult = obj.blockUser(senderId, obj2);
        blockUserResult.then(() => {
          const obj = channelId(setReported[17]);
          const result = obj.showBlockSuccessToast(senderId, closure_1_1);
        });
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
      };
      cResult[4] = channelId;
      cResult[5] = senderId;
      cResult[6] = trackAnalyticsEvent;
      cResult[7] = fn2;
      tmp16 = fn2;
    }
  : (senderId) => {
      let _undefined;
      let c6;
      let closure_4;
      let intl4;
      let intl5;
      let intl6;
      let isReported;
      let items5;
      let setReported;
      let string2Result;
      let stringResult;
      let tmp12Result;
      let tmp8;
      senderId = senderId.senderId;
      const channelId = senderId.channelId;
      ({ isReported, setReported } = senderId);
      const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
      useState = undefined;
      let closure_8;
      const tmp = closure_17();
      _slicedToArray = tmp;
      const tmp2 = senderId;
      let obj = senderId(setReported[12]);
      const items = [closure_8];
      const items1 = [senderId];
      const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(senderId), items1);
      let obj2 = senderId(setReported[13]);
      const lastChannelMessage = obj2.useLastChannelMessage(channelId);
      let obj3 = senderId(setReported[14]);
      const shouldShowHelplineLink = obj3.useShouldShowHelplineLink();
      [tmp8, c6] = _slicedToArray(useState(false), 2);
      const tmp7 = _slicedToArray(useState(false), 2);
      let obj4 = senderId(setReported[15]);
      let closure_7 = obj4.useNavigation();
      let obj5 = senderId(setReported[14]);
      const items2 = [senderId, channelId, trackAnalyticsEvent];
      const shouldShowThroughlineLink = obj5.useShouldShowThroughlineLink();
      let callback = lastChannelMessage.useCallback(() => {
        let obj = RelationshipActionCreatorsDefault;
        const obj2 = { location: _location };
        const blockUserResult = obj.blockUser(senderId, obj2);
        blockUserResult.then(() => {
          const obj = channelId(setReported[17]);
          const result = obj.showBlockSuccessToast(senderId, closure_1_1);
        });
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
      }, items2);
      const items3 = [senderId, channelId, trackAnalyticsEvent];
      const callback1 = lastChannelMessage.useCallback(() => {
        const obj = RelationshipActionCreatorsDefault;
        const obj2 = { location: _location };
        obj.unblockUser(senderId, obj2);
        const obj3 = SafetyToastsActionCreatorsDefault;
        const result = obj3.showUnblockSuccessToast(senderId, channelId);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
      }, items3);
      const items4 = [senderId, channelId, tmp.toastContainer, setReported, lastChannelMessage, trackAnalyticsEvent];
      closure_8 = lastChannelMessage.useCallback(
        trackAnalyticsEvent(function* () {
          let c2;
          let closure_0;
          let iconColor;
          let key;
          let v1;
          if (setReported === 2) {
            setReported = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
              setReported = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  setReported = 3;
                  throw value;
                } else if (arg0 === 2) {
                  setReported = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else if (null != user.getUser(senderId)) {
                  _undefined(true);
                  let obj3 = tmp3(setReported[19]);
                  v1 = 1;
                  setReported = 1;
                  const obj5 = {
                    value: obj3.submitReportForInappropriateConversationSafetyAlert(
                      lastChannelMessage,
                      () => {
                        let intl;
                        let intl2;
                        closure_1_2(true);
                        const obj = senderId(c2[20]);
                        const designSystemsNotificationComponents =
                          obj.getDesignSystemsNotificationComponents("TakeActionScreen");
                        const tmp5 = c1(c2[21]);
                        if (designSystemsNotificationComponents) {
                          const openMana = tmp5.openMana;
                          const obj2 = { text: intl2.string(senderId(c2[22]).t.gn2c6X), variant: "success" };
                          intl2 = senderId(c2[22]).intl;
                          openMana(key, obj2);
                        } else {
                          const open = tmp5.open;
                          const obj3 = {
                            key,
                            content: intl.string(senderId(c2[22]).t.gn2c6X),
                            IconComponent: senderId(c2[23]).CircleCheckIcon,
                            iconColor,
                            containerStyle: toastContainer.toastContainer,
                          };
                          intl = senderId(c2[22]).intl;
                          open(obj3);
                        }
                      },
                      () => {
                        const presentFailedToast = closure_1_0(closure_1_2[24]).presentFailedToast;
                        closure_1_0(closure_1_2[24]);
                        const intl = closure_1_0(closure_1_2[22]).intl;
                        presentFailedToast(intl.string(closure_1_0(closure_1_2[22]).t["0YV04/"]));
                      },
                    ),
                    done: false,
                  };
                  return obj5;
                }
              } else if (arg0 === 1) {
                setReported = 3;
                throw value;
              } else if (arg0 === 2) {
                setReported = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_128_6(false);
                let obj = v1(setReported[17]);
                const result = obj.showReportSuccessToast(closure_128_0, closure_128_1);
                closure_128_3(tmp3(setReported[18]).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
              }
              setReported = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp21) {
              setReported = 3;
              throw tmp21;
            }
          }
        }),
        items4,
      );
      let obj6 = { style: tmp.container, children: items5 };
      const obj7 = {
        variant: "primary",
        size: "lg",
        icon: channelId(setReported[26]),
        text: stringResult,
        grow: true,
        onPress: callback,
      };
      const Button = senderId(setReported[25]).Button;
      let intl = senderId(setReported[22]).intl;
      const string = intl.string;
      const t = senderId(setReported[22]).t;
      if (stateFromStores) {
        stringResult = string(t.Hro40y);
      } else {
        stringResult = string(t.VTIBaD);
      }
      if (stateFromStores) {
        callback = callback1;
      }
      items5 = [closure_15(Button, obj7), ,];
      const obj8 = {
        variant: "secondary",
        size: "lg",
        icon: channelId(setReported[27]),
        loading: tmp8,
        disabled: isReported,
        text: string2Result,
        grow: true,
        onPress() {
          closure_8();
        },
      };
      const Button2 = tmp2(setReported[25]).Button;
      let intl2 = tmp2(setReported[22]).intl;
      const string2 = intl2.string;
      const t2 = tmp2(setReported[22]).t;
      if (isReported) {
        string2Result = string2(t2.QvwOJ6);
      } else {
        string2Result = string2(t2["7fHyE6"]);
      }
      items5[1] = closure_15(Button2, obj8);
      if (shouldShowHelplineLink) {
        const obj9 = {
          variant: "secondary",
          size: "lg",
          icon: channelId(setReported[28]),
          text: intl6.string(tmp2(setReported[22]).t.sZf6cz),
          grow: true,
          onPress() {
            closure_7.push("CRISIS_TEXT_LINE");
            trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
          },
        };
        const Button4 = tmp2(setReported[25]).Button;
        intl6 = tmp2(setReported[22]).intl;
        tmp12Result = closure_15(Button4, obj9);
      } else {
        let tmp18;
        const obj10 = { style: tmp.helplineGroup, children: null };
        const Button3 = tmp2(setReported[25]).Button;
        const obj11 = {
          variant: "secondary",
          size: "lg",
          icon: channelId(setReported[29]),
          text: null,
          grow: true,
          onPress: null,
        };
        const intl3 = tmp2(setReported[22]).intl;
        const string3 = intl3.string;
        const t3 = tmp2(setReported[22]).t;
        if (shouldShowThroughlineLink) {
          obj11.text = string3(t3.HQ2nKl);
          obj11.onPress = function onPress() {
            const obj = LinkingDefault;
            obj.openURL(closure_12);
            trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
          };
          const items6 = [closure_15(Button3, obj11)];
          const obj12 = {
            variant: "text-xs/medium",
            color: "text-default",
            style: tmp.textCenter,
            children: intl5.string(tmp2(setReported[22]).t["PMeb/r"]),
          };
          const Text2 = tmp2(setReported[31]).Text;
          intl5 = tmp2(setReported[22]).intl;
          items6[1] = closure_15(Text2, obj12);
          obj10.children = items6;
          tmp18 = obj10;
        } else {
          obj11.text = string3(t3["65XQar"]);
          obj11.onPress = function onPress() {
            const obj = LinkingDefault;
            obj.openURL(unpackModuleId);
            trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR);
          };
          const items7 = [closure_15(Button3, obj11)];
          const obj13 = {
            variant: "text-xs/medium",
            color: "text-default",
            style: tmp.textCenter,
            children: intl4.string(tmp2(setReported[22]).t.XNwhxC),
          };
          const Text = tmp2(setReported[31]).Text;
          intl4 = tmp2(setReported[22]).intl;
          items7[1] = closure_15(Text, obj13);
          obj10.children = items7;
          tmp18 = obj10;
        }
        tmp12Result = closure_16(tmp13, tmp18);
      }
      items5[2] = tmp12Result;
      return closure_16(closure_7, obj6);
    };
let result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx",
);

export default tmp5;
