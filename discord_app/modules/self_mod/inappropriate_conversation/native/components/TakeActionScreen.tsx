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

require = fn;
let useState = fn(19).useState;
const View = fn(17).View;
const Constants = fn(11256);
({
  MODAL_LOCATION_CONTEXT_MOBILE: c10,
  NOFILTR_URL: closure_11,
  THROUGHLINE_URL: closure_12,
  REPORTED_USER_CONFIRMATION_TOAST_KEY: map1,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 },
  helplineGroup: null,
  textCenter: null,
};
let obj3 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
obj2.helplineGroup = { display: "flex", alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
obj2.textCenter = { textAlign: "center" };
let closure_16 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx",
);

export default function TakeActionButtons(senderId) {
  senderId = senderId.senderId;
  const channelId = senderId.channelId;
  ({ isReported, setReported } = senderId);
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  noop = undefined;
  useState = undefined;
  const tmp = closure_16();
  const items = [RelationshipStore];
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
  [tmp8, c5] = lastChannelMessage(useState(false), 2);
  const tmp7 = lastChannelMessage(useState(false), 2);
  useState = senderId(setReported[13]).useNavigation();
  let obj4 = senderId(setReported[13]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = senderId(setReported[12]).useShouldShowThroughlineLink();
  let callback = noop.useCallback(() => {
    const obj2 = { location: _location };
    RelationshipActionCreatorsDefault.blockUser(senderId, { location: _location }, channelId).then(() => {
      const result = channelId(setReported[15]).showBlockSuccessToast(senderId, closure_1_1);
    });
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
  }, items2);
  const items3 = [senderId, channelId, trackAnalyticsEvent];
  const callback1 = noop.useCallback(() => {
    RelationshipActionCreatorsDefault.unblockUser(senderId, { location: _location }, channelId);
    const obj2 = { location: _location };
    const result = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast(senderId, channelId);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
  }, items3);
  const items4 = [senderId, channelId, setReported, lastChannelMessage, trackAnalyticsEvent];
  closure_7 = noop.useCallback(
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
                value: tmp4(8352).submitReportForInappropriateConversationSafetyAlert(
                  lastChannelMessage,
                  () => {
                    dependencyMap(true);
                    const obj2 = { text: null, variant: "success" };
                    const intl = closure_0(1113).intl;
                    obj2.text = intl.string(closure_0(1113).t.gn2c6X);
                    c1(5712).open(closure_2_13, obj2);
                  },
                  () => {
                    const intl = closure_1_0(1113).intl;
                    closure_1_0(5711).presentFailedToast(intl.string(closure_1_0(1113).t["0YV04/"]));
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
            closure_128_5(false);
            const result = v1(7496).showReportSuccessToast(closure_128_0, closure_128_1);
            closure_128_3(tmp4(11269).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
            const obj = v1(7496);
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
    icon: channelId(setReported[22]),
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
  const items5 = [closure_14(senderId(setReported[21]).Button, obj7), ,];
  const obj8 = {
    variant: "secondary",
    size: "lg",
    icon: channelId(setReported[23]),
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
    closure_7();
  };
  items5[1] = closure_14(senderId(setReported[21]).Button, obj8);
  if (shouldShowHelplineLink) {
    const obj9 = {
      variant: "secondary",
      size: "lg",
      icon: tmp15(setReported[24]),
      text: null,
      grow: true,
      onPress: null,
    };
    const intl6 = tmp2(setReported[19]).intl;
    obj9.text = intl6.string(tmp2(setReported[19]).t.sZf6cz);
    obj9.onPress = function onPress() {
      closure_6.push("CRISIS_TEXT_LINE");
      trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
    };
    let tmp12Result = closure_14(tmp2(setReported[21]).Button, obj9);
  } else {
    const obj10 = { style: tmp.helplineGroup, children: null };
    const Button = tmp2(setReported[21]).Button;
    const obj11 = {
      variant: "secondary",
      size: "lg",
      icon: tmp15(setReported[25]),
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
      const items6 = [closure_14(Button, obj11)];
      const obj12 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: null };
      const intl5 = tmp2(setReported[19]).intl;
      obj12.children = intl5.string(tmp2(setReported[19]).t["PMeb/r"]);
      items6[1] = closure_14(tmp2(setReported[27]).Text, obj12);
      obj10.children = items6;
      let tmp18 = obj10;
    } else {
      obj11.text = string3(t3["65XQar"]);
      obj11.onPress = function onPress() {
        LinkingDefault.openURL(closure_2_11);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR);
      };
      const items7 = [closure_14(Button, obj11)];
      const obj13 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: null };
      const intl4 = tmp2(setReported[19]).intl;
      obj13.children = intl4.string(tmp2(setReported[19]).t.XNwhxC);
      items7[1] = closure_14(tmp2(setReported[27]).Text, obj13);
      obj10.children = items7;
      tmp18 = obj10;
    }
    tmp12Result = closure_15(tmp13, tmp18);
  }
  items5[2] = tmp12Result;
  obj6.children = items5;
  return closure_15(closure_7, obj6);
}
