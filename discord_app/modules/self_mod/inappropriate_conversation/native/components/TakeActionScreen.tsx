// discord_app/modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import { useState } from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import markAllUserIdListsStale from "../../../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import LOCATION_CONTEXT_MOBILE from "../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ MODAL_LOCATION_CONTEXT_MOBILE: c10, NOFILTR_URL: unpackModuleId, THROUGHLINE_URL: closure_12, REPORTED_USER_CONFIRMATION_TOAST_KEY: map1, TOAST_CHECKMARK_ICON_COLOR: closure_14 } = LOCATION_CONTEXT_MOBILE);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createCacheKey = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_12 };
createCacheKey[2] = { display: "flex", alignSelf: "stretch", gap: ThemesDefault.space.PX_4 };
createCacheKey[3] = { textAlign: "center" };
let closure_17 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx");

export default function TakeActionButtons(senderId) {
  senderId = senderId.senderId;
  const channelId = senderId.channelId;
  ({ isReported, setReported } = senderId);
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  useState = undefined;
  closure_8 = undefined;
  const tmp = callback2();
  let callback = tmp;
  let obj = senderId(setReported[10]);
  const items = [closure_8];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => blocked.isBlocked(senderId), items1);
  obj1 = senderId(setReported[11]);
  const lastChannelMessage = obj1.useLastChannelMessage(channelId);
  let obj2 = senderId(setReported[12]);
  const shouldShowHelplineLink = obj2.useShouldShowHelplineLink();
  [tmp8, c6] = callback(useState(false), 2);
  let obj3 = senderId(setReported[13]);
  closure_7 = obj3.useNavigation();
  let obj4 = senderId(setReported[12]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = obj4.useShouldShowThroughlineLink();
  callback = lastChannelMessage.useCallback(() => {
    channelId(setReported[14]);
    const obj = { location: closure_1_10 };
    obj.blockUser(senderId, obj).then((result) => {
      result = channelId(setReported[15]).showBlockSuccessToast(closure_0, closure_1);
    });
    trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
  }, items2);
  const items3 = [senderId, channelId, trackAnalyticsEvent];
  const callback1 = lastChannelMessage.useCallback(() => {
    channelId(setReported[14]);
    const obj = { location: closure_1_10 };
    obj.unblockUser(senderId, obj);
    const result = channelId(setReported[15]).showUnblockSuccessToast(senderId, channelId);
    trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
  }, items3);
  const items4 = [senderId, channelId, tmp.toastContainer, setReported, lastChannelMessage, trackAnalyticsEvent];
  closure_8 = lastChannelMessage.useCallback(trackAnalyticsEvent(function*() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            closure_0 = tmp4;
            if (null != closure_1_9.getUser(senderId)) {
              closure_1_6(true);
              let obj2 = senderId(8136);
              v0 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj2.submitReportForInappropriateConversationSafetyAlert(lastChannelMessage, () => {
                dependencyMap(true);
                v1(4094);
                const obj = { key: closure_1_13, content: null, IconComponent: null, iconColor: null, containerStyle: null };
                const intl = tmp4(1236).intl;
                obj[1] = intl.string(tmp4(1236).t.gn2c6X);
                obj[2] = tmp4(4335).CircleCheckIcon;
                obj[3] = closure_1_14;
                obj[4] = toastContainer.toastContainer;
                obj.open(obj);
              }, () => {
                const intl = tmp4(1236).intl;
                tmp4(4093).presentFailedToast(intl.string(tmp4(1236).t["0YV04/"]));
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
          obj = v0(6553);
          const result = obj.showReportSuccessToast(closure_0, v0);
          callback(senderId(10582).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
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
  obj = { variant: "primary", size: "lg", icon: channelId(setReported[23]), text: null, grow: true, onPress: null };
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
  const items5 = [callback(senderId(setReported[22]).Button, obj), , ];
  obj1 = { variant: "secondary", size: "lg", icon: tmp15(setReported[24]), loading: tmp8, disabled: isReported, text: null, grow: true, onPress: null };
  const intl2 = tmp2(setReported[19]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(setReported[19]).t;
  if (isReported) {
    let string2Result = string2(t2.QvwOJ6);
  } else {
    string2Result = string2(t2["7fHyE6"]);
  }
  obj1[5] = string2Result;
  obj1[7] = function onPress() {
    blocked();
  };
  items5[1] = callback(senderId(setReported[22]).Button, obj1);
  if (shouldShowHelplineLink) {
    obj2 = { variant: "secondary", size: "lg", icon: null, text: null, grow: true, onPress: null };
    obj2[2] = tmp15(setReported[25]);
    const intl6 = tmp2(setReported[19]).intl;
    obj2[3] = intl6.string(tmp2(setReported[19]).t.sZf6cz);
    obj2[5] = function onPress() {
      trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
    };
    let tmp12Result = callback(tmp2(setReported[22]).Button, obj2);
  } else {
    obj3 = { style: null, children: null };
    obj3[0] = tmp.helplineGroup;
    const Button = tmp2(setReported[22]).Button;
    obj4 = { variant: "secondary", size: "lg", icon: null, text: null, grow: true, onPress: null };
    obj4[2] = tmp15(setReported[26]);
    const intl3 = tmp2(setReported[19]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(setReported[19]).t;
    if (shouldShowThroughlineLink) {
      obj4[3] = string3(t3.HQ2nKl);
      obj4[5] = function onPress() {
        channelId(setReported[27]).openURL(closure_1_12);
        trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
      };
      const items6 = [callback(Button, obj4), ];
      const obj5 = { variant: "text-xs/medium", color: "text-default", style: null, children: null };
      obj5[2] = tmp.textCenter;
      const intl5 = tmp2(setReported[19]).intl;
      obj5[3] = intl5.string(tmp2(setReported[19]).t["PMeb/r"]);
      items6[1] = callback(tmp2(setReported[28]).Text, obj5);
      obj3[1] = items6;
      let tmp18 = obj3;
    } else {
      obj4[3] = string3(t3["65XQar"]);
      obj4[5] = function onPress() {
        channelId(setReported[27]).openURL(closure_1_11);
        trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR);
      };
      const items7 = [callback(Button, obj4), ];
      const obj6 = { variant: "text-xs/medium", color: "text-default", style: null, children: null };
      obj6[2] = tmp.textCenter;
      const intl4 = tmp2(setReported[19]).intl;
      obj6[3] = intl4.string(tmp2(setReported[19]).t.XNwhxC);
      items7[1] = callback(tmp2(setReported[28]).Text, obj6);
      obj3[1] = items7;
      tmp18 = obj3;
    }
    tmp12Result = callback2(tmp13, tmp18);
  }
  items5[2] = tmp12Result;
  obj[1] = items5;
  return callback2(closure_7, obj);
};