// discord_app/modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import SafetyToastsActionCreatorsDefault from "../../../../safety_common/SafetyToastsActionCreators.native.tsx";
import RelationshipActionCreatorsDefault from "../../../../../actions/RelationshipActionCreators.tsx";
import SafetyWarningUtils from "../../../shared/SafetyWarningUtils.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
let useState = fn(19).useState;
const View = fn(17).View;
const Constants = fn(11624);
({
  MODAL_LOCATION_CONTEXT_MOBILE: c10,
  NOFILTR_URL: closure_11,
  THROUGHLINE_URL: closure_12,
  REPORTED_USER_CONFIRMATION_TOAST_KEY: map1,
  TOAST_CHECKMARK_ICON_COLOR: closure_14,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4756);
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
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx",
);

export default function TakeActionButtons(senderId) {
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
  const stateFromStores = senderId(setReported[10]).useStateFromStores(
    items,
    () => RelationshipStore.isBlocked(senderId),
    items1,
  );
  let obj = senderId(setReported[10]);
  const lastChannelMessage = senderId(setReported[11]).useLastChannelMessage(channelId);
  let obj2 = senderId(setReported[11]);
  const shouldShowHelplineLink = senderId(setReported[12]).useShouldShowHelplineLink();
  const obj3 = senderId(setReported[12]);
  [tmp8, c6] = useState(false);
  const tmp7 = _slicedToArray(useState(false), 2);
  closure_7 = senderId(setReported[13]).useNavigation();
  let obj4 = senderId(setReported[13]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = senderId(setReported[12]).useShouldShowThroughlineLink();
  let callback = lastChannelMessage.useCallback(() => {
    const obj2 = { location: _location };
    RelationshipActionCreatorsDefault.blockUser(senderId, { location: _location }).then(() => {
      const result = channelId(setReported[15]).showBlockSuccessToast(senderId, closure_1_1);
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
              const obj4 = { value, done: true };
              return obj4;
            } else if (null != user.getUser(senderId)) {
              _undefined(true);
              v1 = 1;
              dependencyMap = 1;
              const obj5 = {
                value: tmp4(8906).submitReportForInappropriateConversationSafetyAlert(
                  lastChannelMessage,
                  () => {
                    dependencyMap(true);
                    const obj2 = { key, content: null, IconComponent: null, iconColor: null, containerStyle: null };
                    const intl = closure_0(1115).intl;
                    obj2.content = intl.string(closure_0(1115).t.gn2c6X);
                    obj2.IconComponent = closure_0(4715).CircleCheckIcon;
                    obj2.iconColor = iconColor;
                    obj2.containerStyle = toastContainer.toastContainer;
                    c1(4454).open(obj2);
                  },
                  () => {
                    const intl = closure_1_0(1115).intl;
                    closure_1_0(4453).presentFailedToast(intl.string(closure_1_0(1115).t["0YV04/"]));
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
            const result = v1(8674).showReportSuccessToast(closure_128_0, closure_128_1);
            closure_128_3(tmp4(11631).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
            const obj = v1(8674);
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
    icon: channelId(setReported[23]),
    text: null,
    grow: true,
    onPress: null,
  };
  let intl = senderId(setReported[19]).intl;
  const string = intl.string;
  const t = senderId(setReported[19]).t;
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
  const items5 = [closure_15(senderId(setReported[22]).Button, obj7), ,];
  const obj8 = {
    variant: "secondary",
    size: "lg",
    icon: channelId(setReported[24]),
    loading: tmp8,
    disabled: isReported,
    text: null,
    grow: true,
    onPress: null,
  };
  const intl2 = tmp2(setReported[19]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(setReported[19]).t;
  if (isReported) {
    let string2Result = string2(t2.QvwOJ6);
  } else {
    string2Result = string2(t2["7fHyE6"]);
  }
  obj8.text = string2Result;
  obj8.onPress = function onPress() {
    closure_8();
  };
  items5[1] = closure_15(senderId(setReported[22]).Button, obj8);
  if (shouldShowHelplineLink) {
    const obj9 = {
      variant: "secondary",
      size: "lg",
      icon: tmp15(setReported[25]),
      text: null,
      grow: true,
      onPress: null,
    };
    const intl6 = tmp2(setReported[19]).intl;
    obj9.text = intl6.string(tmp2(setReported[19]).t.sZf6cz);
    obj9.onPress = function onPress() {
      closure_7.push("CRISIS_TEXT_LINE");
      trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
    };
    let tmp12Result = closure_15(tmp2(setReported[22]).Button, obj9);
  } else {
    const obj10 = { style: tmp.helplineGroup, children: null };
    const Button = tmp2(setReported[22]).Button;
    const obj11 = {
      variant: "secondary",
      size: "lg",
      icon: tmp15(setReported[26]),
      text: null,
      grow: true,
      onPress: null,
    };
    const intl3 = tmp2(setReported[19]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(setReported[19]).t;
    if (shouldShowThroughlineLink) {
      obj11.text = string3(t3.HQ2nKl);
      obj11.onPress = function onPress() {
        LinkingDefault.openURL(closure_2_12);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
      };
      const items6 = [closure_15(Button, obj11)];
      const obj12 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: null };
      const intl5 = tmp2(setReported[19]).intl;
      obj12.children = intl5.string(tmp2(setReported[19]).t["PMeb/r"]);
      items6[1] = closure_15(tmp2(setReported[28]).Text, obj12);
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
      const intl4 = tmp2(setReported[19]).intl;
      obj13.children = intl4.string(tmp2(setReported[19]).t.XNwhxC);
      items7[1] = closure_15(tmp2(setReported[28]).Text, obj13);
      obj10.children = items7;
      tmp18 = obj10;
    }
    tmp12Result = closure_16(tmp13, tmp18);
  }
  items5[2] = tmp12Result;
  obj6.children = items5;
  return closure_16(closure_7, obj6);
}
