// === Module 15723: TakeActionScreen ===

// Module 15723 (TakeActionScreen)
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4255 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8404 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9042 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11370 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
let useState = fn(19).useState;
const View = fn(17).View;
const Constants = fn(11363);
({ MODAL_LOCATION_CONTEXT_MOBILE: c10, NOFILTR_URL: closure_11, THROUGHLINE_URL: closure_12, REPORTED_USER_CONFIRMATION_TOAST_KEY: map1, TOAST_CHECKMARK_ICON_COLOR: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
fn(4560);
let createStyles = { container: null, toastContainer: null, helplineGroup: null, textCenter: null };
createStyles = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.toastContainer = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
createStyles.helplineGroup = { display: "flex", alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
createStyles.textCenter = { textAlign: "center" };
let closure_17 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx");

export default function TakeActionButtons(senderId) {
  senderId = senderId.senderId;
  const channelId = senderId.channelId;
  ({ isReported, setReported } = senderId);
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  useState = undefined;
  closure_8 = undefined;
  const tmp = closure_17();
  _slicedToArray = tmp;
  let obj = senderId(setReported[10]);
  const items = [closure_8];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(senderId), items1);
  let obj1 = senderId(setReported[11]);
  const lastChannelMessage = obj1.useLastChannelMessage(channelId);
  let obj2 = senderId(setReported[12]);
  const shouldShowHelplineLink = obj2.useShouldShowHelplineLink();
  [tmp8, c6] = _slicedToArray(useState(false), 2);
  let obj3 = senderId(setReported[13]);
  closure_7 = obj3.useNavigation();
  let obj4 = senderId(setReported[12]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = obj4.useShouldShowThroughlineLink();
  let callback = lastChannelMessage.useCallback(() => {
    const obj = { location: _location };
    obj.blockUser(senderId, obj).then(() => {
      const result = channelId(setReported[15]).showBlockSuccessToast(senderId, closure_1_1);
    });
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
  }, items2);
  const items3 = [senderId, channelId, trackAnalyticsEvent];
  const callback1 = lastChannelMessage.useCallback(() => {
    const obj = { location: _location };
    obj.unblockUser(senderId, obj);
    const result = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast(senderId, channelId);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
  }, items3);
  const items4 = [senderId, channelId, tmp.toastContainer, setReported, lastChannelMessage, trackAnalyticsEvent];
  closure_8 = lastChannelMessage.useCallback(trackAnalyticsEvent(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else if (null != user.getUser(senderId)) {
            _undefined(true);
            let obj2 = tmp4(8629);
            v1 = 1;
            dependencyMap = 1;
            const obj1 = {
              value: obj2.submitReportForInappropriateConversationSafetyAlert(lastChannelMessage, () => {
                        dependencyMap(true);
                        c1(4259);
                        const obj = { key, content: null, IconComponent: null, iconColor: null, containerStyle: null };
                        const intl = closure_0(1114).intl;
                        obj.content = intl.string(closure_0(1114).t.gn2c6X);
                        obj.IconComponent = closure_0(4520).CircleCheckIcon;
                        obj.iconColor = iconColor;
                        obj.containerStyle = toastContainer.toastContainer;
                        obj.open(obj);
                      }, () => {
                        const intl = closure_1_0(1114).intl;
                        closure_1_0(4258).presentFailedToast(intl.string(closure_1_0(1114).t["0YV04/"]));
                      }),
              done: false
            };
            return obj1;
          } else {
            dependencyMap = 3;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_6(false);
          obj = v1(8404);
          const result = obj.showReportSuccessToast(closure_128_0, closure_128_1);
          closure_128_3(tmp4(11370).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
        }
        dependencyMap = 3;
        obj2 = { value, done: true };
        return obj2;
      } catch (tmp22) {
        dependencyMap = tmp;
        throw tmp22;
      }
    }
  }), items4);
  obj = { style: tmp.container, children: null };
  obj = { variant: "primary", size: "lg", icon: channelId(setReported[23]), text: null, grow: true, onPress: null };
  let intl = senderId(setReported[19]).intl;
  const string = intl.string;
  const t = senderId(setReported[19]).t;
  if (stateFromStores) {
    let stringResult = string(t.Hro40y);
  } else {
    stringResult = string(t.VTIBaD);
  }
  obj.text = stringResult;
  if (stateFromStores) {
    callback = callback1;
  }
  obj.onPress = callback;
  const items5 = [closure_15(senderId(setReported[22]).Button, obj), , ];
  obj1 = { variant: "secondary", size: "lg", icon: tmp15(setReported[24]), loading: tmp8, disabled: isReported, text: null, grow: true, onPress: null };
  const intl2 = tmp2(setReported[19]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(setReported[19]).t;
  if (isReported) {
    let string2Result = string2(t2.QvwOJ6);
  } else {
    string2Result = string2(t2["7fHyE6"]);
  }
  obj1.text = string2Result;
  obj1.onPress = function onPress() {
    closure_8();
  };
  items5[1] = closure_15(senderId(setReported[22]).Button, obj1);
  if (shouldShowHelplineLink) {
    obj2 = { variant: "secondary", size: "lg", icon: tmp15(setReported[25]), text: null, grow: true, onPress: null };
    const intl6 = tmp2(setReported[19]).intl;
    obj2.text = intl6.string(tmp2(setReported[19]).t.sZf6cz);
    obj2.onPress = function onPress() {
      closure_7.push("CRISIS_TEXT_LINE");
      trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
    };
    let tmp12Result = closure_15(tmp2(setReported[22]).Button, obj2);
  } else {
    obj3 = { style: tmp.helplineGroup, children: null };
    const Button = tmp2(setReported[22]).Button;
    obj4 = { variant: "secondary", size: "lg", icon: tmp15(setReported[26]), text: null, grow: true, onPress: null };
    const intl3 = tmp2(setReported[19]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(setReported[19]).t;
    if (shouldShowThroughlineLink) {
      obj4.text = string3(t3.HQ2nKl);
      obj4.onPress = function onPress() {
        LinkingDefault.openURL(closure_2_12);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
      };
      const items6 = [closure_15(Button, obj4), ];
      const obj5 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: null };
      const intl5 = tmp2(setReported[19]).intl;
      obj5.children = intl5.string(tmp2(setReported[19]).t["PMeb/r"]);
      items6[1] = closure_15(tmp2(setReported[28]).Text, obj5);
      obj3.children = items6;
      let tmp18 = obj3;
    } else {
      obj4.text = string3(t3["65XQar"]);
      obj4.onPress = function onPress() {
        LinkingDefault.openURL(closure_2_11);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR);
      };
      const items7 = [closure_15(Button, obj4), ];
      const obj6 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: null };
      const intl4 = tmp2(setReported[19]).intl;
      obj6.children = intl4.string(tmp2(setReported[19]).t.XNwhxC);
      items7[1] = closure_15(tmp2(setReported[28]).Text, obj6);
      obj3.children = items7;
      tmp18 = obj3;
    }
    tmp12Result = closure_16(tmp13, tmp18);
  }
  items5[2] = tmp12Result;
  obj.children = items5;
  return closure_16(closure_7, obj);
};