// === Module 16012: TakeActionScreen ===

// Module 16012 (TakeActionScreen)
import nativeDefault from "native" /* 587 */;
import LinkingDefault from "Linking" /* 4765 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7011 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7017 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10361 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
let useState = fn(19).useState;
const View = fn(17).View;
const Constants = fn(10348);
({ MODAL_LOCATION_CONTEXT_MOBILE: c10, NOFILTR_URL: closure_11, THROUGHLINE_URL: closure_12, REPORTED_USER_CONFIRMATION_TOAST_KEY: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 }, helplineGroup: null, textCenter: null };
let obj3 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
obj2.helplineGroup = { display: "flex", alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
obj2.textCenter = { textAlign: "center" };
let closure_16 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { display: "flex", alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TakeActionButtons(senderId) {
  const cResult = require("c").c(44);
  senderId = senderId.senderId;
  _require = senderId;
  const channelId = senderId.channelId;
  ({ isReported, setReported } = senderId);
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== senderId) {
    const fn = function h() {
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
  [r10052, noop] = lastChannelMessage(navigation(false), 2);
  const tmp12 = lastChannelMessage(navigation(false), 2);
  navigation = require("useNavigation").useNavigation();
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
                  if (cResult[16] === trackAnalyticsEvent) {
                    let tmp17 = cResult[17];
                  }
                  closure_7 = tmp17;
                  class H {
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
                }
              }
            }
          }
          class H {
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
          _require = trackAnalyticsEvent(function*() {
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
                    const obj4 = { value, done: true };
                    return obj4;
                  } else if (null != user.getUser(tmp4)) {
                    noop(true);
                    c1 = 1;
                    c2 = 1;
                    const obj5 = {
                      value: tmp4(setReported[19]).submitReportForInappropriateConversationSafetyAlert(lastChannelMessage, () => {
                                dependencyMap(true);
                                const obj2 = { text: null, variant: "success" };
                                const intl = closure_0(1126).intl;
                                obj2.text = intl.string(closure_0(1126).t.gn2c6X);
                                c1(4768).openMana(closure_2_13, obj2);
                              }, () => {
                                const intl = closure_1_0(1126).intl;
                                closure_1_0(4767).presentFailedToast(intl.string(closure_1_0(1126).t["0YV04/"]));
                              }),
                      done: false
                    };
                    return obj5;
                  } else {
                    c2 = 3;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  noop(false);
                  const result = channelId(setReported[17]).showReportSuccessToast(tmp4, c1);
                  trackAnalyticsEvent(tmp4(setReported[18]).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
                  const obj = channelId(setReported[17]);
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
          cResult[16] = trackAnalyticsEvent;
          cResult[17] = t6;
          tmp17 = t6;
        }
      }
      class H {
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
      cResult[11] = H;
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
  const tmpResult8 = require("useHelpLineVisibility");
}) : (function TakeActionButtons(senderId) {
  senderId = senderId.senderId;
  const channelId = senderId.channelId;
  ({ isReported, setReported } = senderId);
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  noop = undefined;
  useState = undefined;
  const tmp = closure_16();
  const items = [RelationshipStore];
  const items1 = [senderId];
  const stateFromStores = senderId(setReported[12]).useStateFromStores(items, () => RelationshipStore.isBlocked(senderId), items1);
  let obj = senderId(setReported[12]);
  const lastChannelMessage = senderId(setReported[13]).useLastChannelMessage(channelId);
  let obj2 = senderId(setReported[13]);
  const shouldShowHelplineLink = senderId(setReported[14]).useShouldShowHelplineLink();
  const obj3 = senderId(setReported[14]);
  [tmp8, c5] = lastChannelMessage(useState(false), 2);
  const tmp7 = lastChannelMessage(useState(false), 2);
  useState = senderId(setReported[15]).useNavigation();
  let obj4 = senderId(setReported[15]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = senderId(setReported[14]).useShouldShowThroughlineLink();
  let callback = noop.useCallback(() => {
    const obj2 = { location: _location };
    RelationshipActionCreatorsDefault.blockUser(senderId, { location: _location }).then(() => {
      const result = channelId(setReported[17]).showBlockSuccessToast(senderId, closure_1_1);
    });
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
  }, items2);
  const items3 = [senderId, channelId, trackAnalyticsEvent];
  const callback1 = noop.useCallback(() => {
    RelationshipActionCreatorsDefault.unblockUser(senderId, { location: _location });
    const obj2 = { location: _location };
    const result = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast(senderId, channelId);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
  }, items3);
  const items4 = [senderId, channelId, setReported, lastChannelMessage, trackAnalyticsEvent];
  closure_7 = noop.useCallback(trackAnalyticsEvent(function*() {
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
            const obj4 = { value, done: true };
            return obj4;
          } else if (null != user.getUser(senderId)) {
            _undefined(true);
            v1 = 1;
            dependencyMap = 1;
            const obj5 = {
              value: tmp4(7704).submitReportForInappropriateConversationSafetyAlert(lastChannelMessage, () => {
                        dependencyMap(true);
                        const obj2 = { text: null, variant: "success" };
                        const intl = closure_0(1126).intl;
                        obj2.text = intl.string(closure_0(1126).t.gn2c6X);
                        c1(4768).openMana(closure_2_13, obj2);
                      }, () => {
                        const intl = closure_1_0(1126).intl;
                        closure_1_0(4767).presentFailedToast(intl.string(closure_1_0(1126).t["0YV04/"]));
                      }),
              done: false
            };
            return obj5;
          } else {
            dependencyMap = 3;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_5(false);
          const result = v1(7017).showReportSuccessToast(closure_128_0, closure_128_1);
          closure_128_3(tmp4(10361).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
          const obj = v1(7017);
        }
        dependencyMap = 3;
        const obj6 = { value, done: true };
        return obj6;
      } catch (tmp22) {
        dependencyMap = tmp;
        throw tmp22;
      }
    }
  }), items4);
  let obj6 = { style: tmp.container, children: null };
  const obj7 = { variant: "primary", size: "lg", icon: channelId(setReported[24]), text: null, grow: true, onPress: null };
  let intl = senderId(setReported[21]).intl;
  const string = intl.string;
  const t = senderId(setReported[21]).t;
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
  const items5 = [closure_14(senderId(setReported[23]).Button, obj7), , ];
  const obj8 = { variant: "secondary", size: "lg", icon: channelId(setReported[25]), loading: tmp8, disabled: isReported, text: null, grow: true, onPress: null };
  const intl2 = tmp2(setReported[21]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(setReported[21]).t;
  if (isReported) {
    let string2Result = string2(t2.QvwOJ6);
  } else {
    string2Result = string2(t2["7fHyE6"]);
  }
  obj8.text = string2Result;
  obj8.onPress = function onPress() {
    closure_7();
  };
  items5[1] = closure_14(senderId(setReported[23]).Button, obj8);
  if (shouldShowHelplineLink) {
    const obj9 = { variant: "secondary", size: "lg", icon: tmp15(setReported[26]), text: null, grow: true, onPress: null };
    const intl6 = tmp2(setReported[21]).intl;
    obj9.text = intl6.string(tmp2(setReported[21]).t.sZf6cz);
    obj9.onPress = function onPress() {
      closure_6.push("CRISIS_TEXT_LINE");
      trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
    };
    let tmp12Result = closure_14(tmp2(setReported[23]).Button, obj9);
  } else {
    const obj10 = { style: tmp.helplineGroup, children: null };
    const Button = tmp2(setReported[23]).Button;
    const obj11 = { variant: "secondary", size: "lg", icon: tmp15(setReported[27]), text: null, grow: true, onPress: null };
    const intl3 = tmp2(setReported[21]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(setReported[21]).t;
    if (shouldShowThroughlineLink) {
      obj11.text = string3(t3.HQ2nKl);
      obj11.onPress = function onPress() {
        LinkingDefault.openURL(__initData);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
      };
      const items6 = [closure_14(Button, obj11), ];
      const obj12 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: null };
      const intl5 = tmp2(setReported[21]).intl;
      obj12.children = intl5.string(tmp2(setReported[21]).t["PMeb/r"]);
      items6[1] = closure_14(tmp2(setReported[29]).Text, obj12);
      obj10.children = items6;
      let tmp18 = obj10;
    } else {
      obj11.text = string3(t3["65XQar"]);
      obj11.onPress = function onPress() {
        LinkingDefault.openURL(closure_2_11);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR);
      };
      const items7 = [closure_14(Button, obj11), ];
      const obj13 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: null };
      const intl4 = tmp2(setReported[21]).intl;
      obj13.children = intl4.string(tmp2(setReported[21]).t.XNwhxC);
      items7[1] = closure_14(tmp2(setReported[29]).Text, obj13);
      obj10.children = items7;
      tmp18 = obj10;
    }
    tmp12Result = closure_15(tmp13, tmp18);
  }
  items5[2] = tmp12Result;
  obj6.children = items5;
  return closure_15(closure_7, obj6);
});