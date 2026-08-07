// discord_app/modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import _slicedToArray from "_slicedToArray";
import getSystemLocale from "getSystemLocale";
import { useState } from "getSystemLocale";
import { View } from "_submitHamReportForFirstDM";
import upsertRelationship from "upsertRelationship";
import closure_9 from "mergeGuildAvatar";
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "presentAddedFriendToast";
import createCacheKey from "createCacheKey";

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let unpackModuleId;
const require = arg1;
({ MODAL_LOCATION_CONTEXT_MOBILE: c10, NOFILTR_URL: unpackModuleId, THROUGHLINE_URL: closure_12, REPORTED_USER_CONFIRMATION_TOAST_KEY: map1, TOAST_CHECKMARK_ICON_COLOR: closure_14 } = LOCATION_CONTEXT_MOBILE);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
createCacheKey = { container: null, toastContainer: null, helplineGroup: null, textCenter: null };
createCacheKey = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_12 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_12 };
createCacheKey[2] = { display: "flex", alignSelf: "stretch", gap: require("Themes").space.PX_4 };
createCacheKey[3] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { display: "flex", alignSelf: "stretch", gap: require("Themes").space.PX_4 };
let result = require("noop").fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx");

export default function TakeActionButtons(senderId) {
  let c6;
  let isReported;
  let setReported;
  let tmp8;
  senderId = senderId.senderId;
  const channelId = senderId.channelId;
  ({ isReported, setReported } = senderId);
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  let callback;
  let lastChannelMessage;
  let useState;
  let closure_7;
  let upsertRelationship;
  const tmp = createCacheKey();
  callback = tmp;
  let obj = senderId(setReported[10]);
  const items = [upsertRelationship];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => blocked.isBlocked(senderId), items1);
  let obj1 = senderId(setReported[11]);
  lastChannelMessage = obj1.useLastChannelMessage(channelId);
  let obj2 = senderId(setReported[12]);
  const shouldShowHelplineLink = obj2.useShouldShowHelplineLink();
  [tmp8, c6] = callback(useState(false), 2);
  let obj3 = senderId(setReported[13]);
  closure_7 = obj3.useNavigation();
  let obj4 = senderId(setReported[12]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = obj4.useShouldShowThroughlineLink();
  callback = lastChannelMessage.useCallback(() => {
    let obj = channelId(setReported[14]);
    obj = { location: outer1_10 };
    obj.blockUser(senderId, obj).then(() => {
      const result = outer1_1(outer1_2[15]).showBlockSuccessToast(closure_0, closure_1);
    });
    trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
  }, items2);
  const items3 = [senderId, channelId, trackAnalyticsEvent];
  const callback1 = lastChannelMessage.useCallback(() => {
    let obj = channelId(setReported[14]);
    obj = { location: outer1_10 };
    obj.unblockUser(senderId, obj);
    const result = channelId(setReported[15]).showUnblockSuccessToast(senderId, channelId);
    trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
  }, items3);
  const items4 = [senderId, channelId, tmp.toastContainer, setReported, lastChannelMessage, trackAnalyticsEvent];
  upsertRelationship = lastChannelMessage.useCallback(trackAnalyticsEvent(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            if (null != outer1_9.getUser(outer1_0)) {
              outer1_6(true);
              let obj2 = outer1_0(7960);
              v0 = 1;
              dependencyMap = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj2.submitReportForInappropriateConversationSafetyAlert(outer1_5, () => {
                dependencyMap(true);
                let obj = v1(4002);
                obj = { key: outer1_13, content: null, IconComponent: null, iconColor: null, containerStyle: null };
                const intl = tmp4(1236).intl;
                obj[1] = intl.string(tmp4(1236).t.gn2c6X);
                obj[2] = tmp4(4263).CircleCheckIcon;
                obj[3] = outer1_14;
                obj[4] = toastContainer.toastContainer;
                obj.open(obj);
              }, () => {
                const intl = tmp4(1236).intl;
                tmp4(4001).presentFailedToast(intl.string(tmp4(1236).t["0YV04/"]));
              });
              return obj1;
            } else {
              dependencyMap = 3;
            }
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          callback2(false);
          obj = v0(7724);
          const result = obj.showReportSuccessToast(closure_0, v0);
          callback(outer1_0(10285).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
        }
        dependencyMap = 3;
        obj2 = { value: null, done: true };
        obj2[0] = arg1;
        return obj2;
      } catch (tmp22) {
        dependencyMap = tmp;
        throw tmp22;
      }
    }
  }), items4);
  obj = { style: tmp.container, children: null };
  obj = { variant: "primary", size: "lg", icon: null, text: null, grow: true, onPress: null };
  obj[2] = channelId(setReported[23]);
  let intl = senderId(setReported[19]).intl;
  const string = intl.string;
  const t = senderId(setReported[19]).t;
  if (stateFromStores) {
    let stringResult = string(t.Hro40y);
  } else {
    stringResult = string(t.VTIBaD);
  }
  obj[3] = stringResult;
  if (stateFromStores) {
    callback = callback1;
  }
  obj[5] = callback;
  const items5 = [closure_15(senderId(setReported[22]).Button, obj), , ];
  obj1 = { variant: "secondary", size: "lg", icon: null, loading: null, disabled: null, text: null, grow: true, onPress: null };
  obj1[2] = channelId(setReported[24]);
  obj1[3] = tmp8;
  obj1[4] = isReported;
  const intl2 = tmp2(tmp3[19]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(tmp3[19]).t;
  if (isReported) {
    let string2Result = string2(t2.QvwOJ6);
  } else {
    string2Result = string2(t2["7fHyE6"]);
  }
  obj1[5] = string2Result;
  obj1[7] = function onPress() {
    blocked();
  };
  items5[1] = closure_15(senderId(setReported[22]).Button, obj1);
  if (shouldShowHelplineLink) {
    obj2 = { variant: "secondary", size: "lg", icon: null, text: null, grow: true, onPress: null };
    obj2[2] = tmp15(tmp3[25]);
    const intl6 = tmp2(tmp3[19]).intl;
    obj2[3] = intl6.string(tmp2(tmp3[19]).t.sZf6cz);
    obj2[5] = function onPress() {
      trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
    };
    let tmp12Result = tmp14(tmp2(tmp3[22]).Button, obj2);
  } else {
    obj3 = { style: null, children: null };
    obj3[0] = tmp.helplineGroup;
    const Button = tmp2(tmp3[22]).Button;
    obj4 = { variant: "secondary", size: "lg", icon: null, text: null, grow: true, onPress: null };
    obj4[2] = tmp15(tmp3[26]);
    const intl3 = tmp2(tmp3[19]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(tmp3[19]).t;
    if (shouldShowThroughlineLink) {
      obj4[3] = string3(t3.HQ2nKl);
      obj4[5] = function onPress() {
        channelId(setReported[27]).openURL(outer1_12);
        trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
      };
      const items6 = [tmp14(Button, obj4), ];
      const obj5 = { variant: "text-xs/medium", color: "text-default", style: null, children: null };
      obj5[2] = tmp.textCenter;
      const intl5 = tmp2(tmp3[19]).intl;
      obj5[3] = intl5.string(tmp2(tmp3[19]).t["PMeb/r"]);
      items6[1] = tmp14(tmp2(tmp3[28]).Text, obj5);
      obj3[1] = items6;
      let tmp18 = obj3;
    } else {
      obj4[3] = string3(t3["65XQar"]);
      obj4[5] = function onPress() {
        channelId(setReported[27]).openURL(outer1_11);
        trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR);
      };
      const items7 = [tmp14(Button, obj4), ];
      const obj6 = { variant: "text-xs/medium", color: "text-default", style: null, children: null };
      obj6[2] = tmp.textCenter;
      const intl4 = tmp2(tmp3[19]).intl;
      obj6[3] = intl4.string(tmp2(tmp3[19]).t.XNwhxC);
      items7[1] = tmp14(tmp2(tmp3[28]).Text, obj6);
      obj3[1] = items7;
      tmp18 = obj3;
    }
    tmp12Result = tmp12(tmp13, tmp18);
  }
  items5[2] = tmp12Result;
  obj[1] = items5;
  return closure_16(closure_7, obj);
};