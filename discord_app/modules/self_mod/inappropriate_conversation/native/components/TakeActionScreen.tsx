// discord_app/modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import RelationshipActionCreatorsDefault from "../../../../../actions/RelationshipActionCreators.tsx";
import SafetyToastsActionCreatorsDefault from "../../../../safety_common/SafetyToastsActionCreators.native.tsx";
import SafetyWarningUtils from "../../../shared/SafetyWarningUtils.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
let useState = fn(19).useState;
const View = fn(17).View;
const Constants = fn(10361);
({
  MODAL_LOCATION_CONTEXT_MOBILE: c10,
  NOFILTR_URL: closure_11,
  THROUGHLINE_URL: closure_12,
  REPORTED_USER_CONFIRMATION_TOAST_KEY: map1,
  TOAST_CHECKMARK_ICON_COLOR: closure_14,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 },
  toastContainer: null,
  helplineGroup: null,
  textCenter: null,
};
let obj3 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
obj2.toastContainer = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
obj2.helplineGroup = { display: "flex", alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
obj2.textCenter = { textAlign: "center" };
let closure_17 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { display: "flex", alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function TakeActionButtons(senderId) {
      const cResult = require("c").c(45);
      senderId = senderId.senderId;
      _require = senderId;
      const channelId = senderId.channelId;
      ({ isReported, setReported } = senderId);
      const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
      const tmp4 = closure_17();
      _slicedToArray = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_8];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== senderId) {
        const fn = function y() {
          return RelationshipStore.isBlocked(closure_0);
        };
        const items1 = [senderId];
        cResult[1] = senderId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7, tmp8);
      const tmpResult = require("initialize");
      const lastChannelMessage = require("useLastChannelMessage").useLastChannelMessage(channelId);
      const tmpResult5 = require("useLastChannelMessage");
      const shouldShowHelplineLink = require("useHelpLineVisibility").useShouldShowHelplineLink();
      const tmpResult6 = require("useHelpLineVisibility");
      [r10052, useState] = useState(false);
      const tmp12 = _slicedToArray(useState(false), 2);
      const navigation = require("useNavigation").useNavigation();
      const tmpResult7 = require("useNavigation");
      const shouldShowThroughlineLink = require("useHelpLineVisibility").useShouldShowThroughlineLink();
      if (cResult[4] === channelId) {
        if (cResult[5] === senderId) {
          if (cResult[8] === channelId) {
            if (cResult[9] === senderId) {
              if (cResult[12] === channelId) {
                if (cResult[13] === lastChannelMessage) {
                  if (cResult[14] === senderId) {
                    if (cResult[15] === setReported) {
                      if (cResult[16] === tmp4.toastContainer) {
                        if (cResult[17] === trackAnalyticsEvent) {
                          let tmp17 = cResult[18];
                        }
                        closure_8 = tmp17;
                        class X {
                          constructor() {
                            obj = closure_1(closure_2[16]);
                            obj1 = { location: closure_10 };
                            unblockUserResult = obj.unblockUser(closure_0, obj1);
                            obj3 = closure_1(closure_2[17]);
                            result = obj3.showUnblockSuccessToast(closure_0, channelId);
                            tmp3 = trackAnalyticsEvent(
                              closure_0(closure_2[18]).CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK,
                            );
                            return;
                          }
                        }
                      }
                    }
                  }
                }
              }
              class X {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  obj1 = { location: closure_10 };
                  unblockUserResult = obj.unblockUser(closure_0, obj1);
                  obj3 = closure_1(closure_2[17]);
                  result = obj3.showUnblockSuccessToast(closure_0, channelId);
                  tmp3 = trackAnalyticsEvent(closure_0(closure_2[18]).CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
                  return;
                }
              }
              _require = trackAnalyticsEvent(function* () {
                if (c2 === 2) {
                  c2 = 3;
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
                  try {
                    c2 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        let obj4 = { value, done: true };
                        return obj4;
                      } else if (null != user.getUser(tmp4)) {
                        useState(true);
                        c1 = 1;
                        c2 = 1;
                        const obj5 = {
                          value: tmp4(setReported[19]).submitReportForInappropriateConversationSafetyAlert(
                            lastChannelMessage,
                            () => {
                              dependencyMap(true);
                              const designSystemsNotificationComponents =
                                closure_0(4772).getDesignSystemsNotificationComponents("TakeActionScreen");
                              const obj2 = c1(4766);
                              if (designSystemsNotificationComponents) {
                                const obj3 = { text: null, variant: "success" };
                                const intl2 = closure_0(1126).intl;
                                obj3.text = intl2.string(closure_0(1126).t.gn2c6X);
                                obj2.openMana(key, obj3);
                              } else {
                                const obj4 = {
                                  key,
                                  content: null,
                                  IconComponent: null,
                                  iconColor: null,
                                  containerStyle: null,
                                };
                                const intl = closure_0(1126).intl;
                                obj4.content = intl.string(closure_0(1126).t.gn2c6X);
                                obj4.IconComponent = closure_0(4992).CircleCheckIcon;
                                obj4.iconColor = iconColor;
                                obj4.containerStyle = toastContainer.toastContainer;
                                obj2.open(obj4);
                              }
                              const obj = closure_0(4772);
                            },
                            () => {
                              const intl = closure_1_0(1126).intl;
                              closure_1_0(4765).presentFailedToast(intl.string(closure_1_0(1126).t["0YV04/"]));
                            },
                          ),
                          done: false,
                        };
                        return obj5;
                      } else {
                        c2 = 3;
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 !== 2) {
                      useState(false);
                      const result = channelId(setReported[17]).showReportSuccessToast(tmp4, c1);
                      trackAnalyticsEvent(tmp4(setReported[18]).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
                      let obj = channelId(setReported[17]);
                    }
                    c2 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } catch (tmp22) {
                    c2 = tmp;
                    throw tmp22;
                  }
                }
              });
              function t6() {
                const self = this;
                const apply = closure_0.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              }
              cResult[12] = channelId;
              cResult[13] = lastChannelMessage;
              cResult[14] = senderId;
              cResult[15] = setReported;
              cResult[16] = tmp4.toastContainer;
              cResult[17] = trackAnalyticsEvent;
              cResult[18] = t6;
              tmp17 = t6;
            }
          }
          class X {
            constructor() {
              obj = closure_1(closure_2[16]);
              obj1 = { location: closure_10 };
              unblockUserResult = obj.unblockUser(closure_0, obj1);
              obj3 = closure_1(closure_2[17]);
              result = obj3.showUnblockSuccessToast(closure_0, channelId);
              tmp3 = trackAnalyticsEvent(closure_0(closure_2[18]).CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
              return;
            }
          }
          cResult[8] = channelId;
          cResult[9] = senderId;
          cResult[10] = trackAnalyticsEvent;
          cResult[11] = X;
        }
      }
      const fn2 = function w() {
        const obj2 = { location: _location };
        RelationshipActionCreatorsDefault.blockUser(closure_0, { location: _location }).then(() => {
          const result = channelId(setReported[17]).showBlockSuccessToast(closure_1_0, closure_1_1);
        });
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
      };
      cResult[4] = channelId;
      cResult[5] = senderId;
      cResult[6] = trackAnalyticsEvent;
      cResult[7] = fn2;
    }
  : function TakeActionButtons(senderId) {
      senderId = senderId.senderId;
      const channelId = senderId.channelId;
      ({ isReported, setReported } = senderId);
      const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
      useState = undefined;
      closure_8 = undefined;
      const tmp = closure_17();
      _slicedToArray = tmp;
      const items = [closure_8];
      const items1 = [senderId];
      const stateFromStores = senderId(setReported[12]).useStateFromStores(
        items,
        () => RelationshipStore.isBlocked(senderId),
        items1,
      );
      let obj = senderId(setReported[12]);
      const lastChannelMessage = senderId(setReported[13]).useLastChannelMessage(channelId);
      let obj2 = senderId(setReported[13]);
      const shouldShowHelplineLink = senderId(setReported[14]).useShouldShowHelplineLink();
      let obj3 = senderId(setReported[14]);
      [tmp8, c6] = useState(false);
      const tmp7 = _slicedToArray(useState(false), 2);
      closure_7 = senderId(setReported[15]).useNavigation();
      let obj4 = senderId(setReported[15]);
      const items2 = [senderId, channelId, trackAnalyticsEvent];
      const shouldShowThroughlineLink = senderId(setReported[14]).useShouldShowThroughlineLink();
      let callback = lastChannelMessage.useCallback(() => {
        const obj2 = { location: _location };
        RelationshipActionCreatorsDefault.blockUser(senderId, { location: _location }).then(() => {
          const result = channelId(setReported[17]).showBlockSuccessToast(senderId, closure_1_1);
        });
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
      }, items2);
      const items3 = [senderId, channelId, trackAnalyticsEvent];
      const callback1 = lastChannelMessage.useCallback(() => {
        RelationshipActionCreatorsDefault.unblockUser(senderId, { location: _location });
        const obj2 = { location: _location };
        const result = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast(senderId, channelId);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
      }, items3);
      const items4 = [senderId, channelId, tmp.toastContainer, setReported, lastChannelMessage, trackAnalyticsEvent];
      closure_8 = lastChannelMessage.useCallback(
        trackAnalyticsEvent(function* () {
          if (dependencyMap === 2) {
            dependencyMap = 3;
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
            try {
              dependencyMap = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  dependencyMap = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 3;
                  let obj4 = { value, done: true };
                  return obj4;
                } else if (null != user.getUser(senderId)) {
                  _undefined(true);
                  v1 = 1;
                  dependencyMap = 1;
                  const obj5 = {
                    value: tmp4(7695).submitReportForInappropriateConversationSafetyAlert(
                      lastChannelMessage,
                      () => {
                        dependencyMap(true);
                        const designSystemsNotificationComponents =
                          closure_0(4772).getDesignSystemsNotificationComponents("TakeActionScreen");
                        const obj2 = c1(4766);
                        if (designSystemsNotificationComponents) {
                          const obj3 = { text: null, variant: "success" };
                          const intl2 = closure_0(1126).intl;
                          obj3.text = intl2.string(closure_0(1126).t.gn2c6X);
                          obj2.openMana(key, obj3);
                        } else {
                          const obj4 = {
                            key,
                            content: null,
                            IconComponent: null,
                            iconColor: null,
                            containerStyle: null,
                          };
                          const intl = closure_0(1126).intl;
                          obj4.content = intl.string(closure_0(1126).t.gn2c6X);
                          obj4.IconComponent = closure_0(4992).CircleCheckIcon;
                          obj4.iconColor = iconColor;
                          obj4.containerStyle = toastContainer.toastContainer;
                          obj2.open(obj4);
                        }
                        const obj = closure_0(4772);
                      },
                      () => {
                        const intl = closure_1_0(1126).intl;
                        closure_1_0(4765).presentFailedToast(intl.string(closure_1_0(1126).t["0YV04/"]));
                      },
                    ),
                    done: false,
                  };
                  return obj5;
                } else {
                  dependencyMap = 3;
                }
              } else if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_128_6(false);
                const result = v1(7014).showReportSuccessToast(closure_128_0, closure_128_1);
                closure_128_3(tmp4(10374).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
                let obj = v1(7014);
              }
              dependencyMap = 3;
              const obj6 = { value, done: true };
              return obj6;
            } catch (tmp22) {
              dependencyMap = tmp;
              throw tmp22;
            }
          }
        }),
        items4,
      );
      let obj6 = { style: tmp.container, children: null };
      const obj7 = {
        variant: "primary",
        size: "lg",
        icon: channelId(setReported[26]),
        text: null,
        grow: true,
        onPress: null,
      };
      let intl = senderId(setReported[22]).intl;
      const string = intl.string;
      const t = senderId(setReported[22]).t;
      if (stateFromStores) {
        let stringResult = string(t.Hro40y);
      } else {
        stringResult = string(t.VTIBaD);
      }
      obj7.text = stringResult;
      if (stateFromStores) {
        callback = callback1;
      }
      obj7.onPress = callback;
      const items5 = [closure_15(senderId(setReported[25]).Button, obj7), ,];
      const obj8 = {
        variant: "secondary",
        size: "lg",
        icon: channelId(setReported[27]),
        loading: tmp8,
        disabled: isReported,
        text: null,
        grow: true,
        onPress: null,
      };
      let intl2 = tmp2(setReported[22]).intl;
      const string2 = intl2.string;
      const t2 = tmp2(setReported[22]).t;
      if (isReported) {
        let string2Result = string2(t2.QvwOJ6);
      } else {
        string2Result = string2(t2["7fHyE6"]);
      }
      obj8.text = string2Result;
      obj8.onPress = function onPress() {
        closure_8();
      };
      items5[1] = closure_15(senderId(setReported[25]).Button, obj8);
      if (shouldShowHelplineLink) {
        const obj9 = {
          variant: "secondary",
          size: "lg",
          icon: tmp15(setReported[28]),
          text: null,
          grow: true,
          onPress: null,
        };
        const intl6 = tmp2(setReported[22]).intl;
        obj9.text = intl6.string(tmp2(setReported[22]).t.sZf6cz);
        obj9.onPress = function onPress() {
          closure_7.push("CRISIS_TEXT_LINE");
          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
        };
        let tmp12Result = closure_15(tmp2(setReported[25]).Button, obj9);
      } else {
        const obj10 = { style: tmp.helplineGroup, children: null };
        const Button = tmp2(setReported[25]).Button;
        const obj11 = {
          variant: "secondary",
          size: "lg",
          icon: tmp15(setReported[29]),
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
            LinkingDefault.openURL(__initData);
            trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
          };
          const items6 = [closure_15(Button, obj11)];
          const obj12 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: null };
          const intl5 = tmp2(setReported[22]).intl;
          obj12.children = intl5.string(tmp2(setReported[22]).t["PMeb/r"]);
          items6[1] = closure_15(tmp2(setReported[31]).Text, obj12);
          obj10.children = items6;
          let tmp18 = obj10;
        } else {
          obj11.text = string3(t3["65XQar"]);
          obj11.onPress = function onPress() {
            LinkingDefault.openURL(closure_2_11);
            trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR);
          };
          const items7 = [closure_15(Button, obj11)];
          const obj13 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: null };
          const intl4 = tmp2(setReported[22]).intl;
          obj13.children = intl4.string(tmp2(setReported[22]).t.XNwhxC);
          items7[1] = closure_15(tmp2(setReported[31]).Text, obj13);
          obj10.children = items7;
          tmp18 = obj10;
        }
        tmp12Result = closure_16(tmp13, tmp18);
      }
      items5[2] = tmp12Result;
      obj6.children = items5;
      return closure_16(closure_7, obj6);
    };
