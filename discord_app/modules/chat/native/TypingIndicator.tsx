// discord_app/modules/chat/native/TypingIndicator.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import CustomTypingIndicatorUtils from "../../custom_typing_indicator/CustomTypingIndicatorUtils.tsx";
import CustomTypingIndicatorAnalytics from "../../custom_typing_indicator/CustomTypingIndicatorAnalytics.tsx";
import openCustomTypingIndicatorAnnounceActionSheet from "../../custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import RawGuildEmojiStore from "../../emojis/RawGuildEmojiStore.tsx";
import TypingStore from "../../../stores/TypingStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function TypingIndicatorInner(channel) {
  channel = channel.channel;
  ({ typingUserIds, transitionState } = channel);
  const cleanUp = channel.cleanUp;
  let stateFromStoresObject;
  closure_7 = undefined;
  let analyticsLocations;
  let sharedValue;
  let sharedValue1;
  let customTypingIndicatorConfig = channel(cleanUp[14]).useCustomTypingIndicatorConfig("TypingIndicatorInner");
  const canView = customTypingIndicatorConfig.canView;
  let obj = channel(cleanUp[14]);
  let items = [stateFromStoresObject];
  const stateFromStores = channel(cleanUp[11]).useStateFromStores(items, () =>
    stateFromStoresObject.get("preview_own_typing_indicator"),
  );
  let obj3 = { channelId: channel.id, guildId: null, typingUserIds: null };
  let obj2 = channel(cleanUp[11]);
  obj3.guildId = channel.getGuildId();
  obj3.typingUserIds = typingUserIds;
  const tmp6Result = transitionState(cleanUp[15])(obj3);
  let style_owner_user_id = null;
  if (1 === typingUserIds.length) {
    style_owner_user_id = typingUserIds[0];
  }
  const tmp6 = transitionState(cleanUp[15]);
  const items1 = [sharedValue, sharedValue1, closure_7];
  const items2 = [style_owner_user_id, canView, stateFromStores, channel];
  stateFromStoresObject = channel(cleanUp[11]).useStateFromStoresObject(
    items1,
    () => {
      if (null != first) {
        if (canView) {
          const user = UserStore.getUser(first);
          if (stateFromStores) {
            let typingIndicatorStyle;
            if (user != null) {
              typingIndicatorStyle = user.typingIndicatorStyle;
            }
            if (typingIndicatorStyle == null) {
              typingIndicatorStyle = null;
            }
            let customTypingIndicatorConfig = typingIndicatorStyle;
          } else {
            customTypingIndicatorConfig = TypingStore.getCustomTypingIndicatorConfig(first);
          }
          if (null != customTypingIndicatorConfig) {
            if (null != user) {
              const guildId = channel.getGuildId();
              let guildEmojis = null;
              if (null != guildId) {
                guildEmojis = RawGuildEmojiStore.getGuildEmojis(guildId);
              }
              const obj = { config: null, name: null };
              const obj2 = CustomTypingIndicatorUtils;
              obj.config = obj2.getViewableCustomTypingIndicatorConfig(
                customTypingIndicatorConfig,
                channel,
                first,
                guildEmojis,
              );
              obj.name = NicknameUtilsDefault.getName(guildId, channel.id, user);
              return obj;
            }
          }
          return { config: null, name: null };
        }
      }
      return { config: null, name: null };
    },
    items2,
  );
  closure_7 = tmp10;
  const items3 = [null != stateFromStoresObject.config, ,];
  ({ id: arr4[1], type: arr4[2] } = channel);
  const effect = canView.useEffect(() => {
    if (closure_7) {
      ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
      AnalyticsUtilsDefault.track(AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN, { channel_id: null, channel_type: null });
      const obj3 = { channel_id: null, channel_type: null };
    }
  }, items3);
  const tmpResult = channel(cleanUp[11]);
  analyticsLocations = transitionState(cleanUp[19])(transitionState(tmp2[20]).CHAT_TYPING_INDICATOR).analyticsLocations;
  const items4 = [stateFromStoresObject, style_owner_user_id, , ,];
  ({ id: arr5[2], type: arr5[3] } = channel);
  items4[4] = analyticsLocations;
  const callback = canView.useCallback(() => {
    const config = stateFromStoresObject.config;
    let tmp = null != config;
    if (tmp) {
      tmp = null != style_owner_user_id;
    }
    if (tmp) {
      const obj5 = { channel_id: null, channel_type: null, style_owner_user_id: null };
      ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
      obj5.style_owner_user_id = style_owner_user_id;
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(CustomTypingIndicatorAnalytics.getTypingIndicatorStyleAnalytics(config));
      obj.track(AnalyticEvents.TYPING_INDICATOR_STYLE_CLICKED, obj5);
    }
    const result =
      openCustomTypingIndicatorAnnounceActionSheet.openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations);
  }, items4);
  const tmp5Result = transitionState(cleanUp[19]);
  sharedValue = channel(cleanUp[23]).useSharedValue(undefined);
  const items5 = [sharedValue];
  const callback1 = canView.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items5);
  const tmpResult6 = channel(cleanUp[23]);
  const tmp16 = closure_15(
    channel(cleanUp[24]).useToken(transitionState(cleanUp[13]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING),
  );
  const tmpResult7 = channel(cleanUp[24]);
  sharedValue1 = channel(cleanUp[23]).useSharedValue(0);
  const items6 = [cleanUp, transitionState, sharedValue1];
  const effect1 = canView.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      const result = sharedValue1.set(0);
      cleanUp();
    }
  }, items6);
  const tmpResult8 = channel(cleanUp[23]);
  class O {
    constructor() {
      return closure_9.get();
    }
  }
  O.__closure = { typingIndicatorLayout: sharedValue };
  O.__workletHash = 10758673194436;
  O.__initData = __initData;
  class P {
    constructor(arg0, arg1) {
      tmp = channel !== arg1;
      if (tmp) {
        tmp2 = null;
        tmp = null != channel;
      }
      if (tmp) {
        y = channel.y;
        num = 2;
        height = channel.height;
        toFixedResult = y.toFixed(2);
        tmp = toFixedResult === height.toFixed(2);
      }
      if (tmp) {
        tmp4 = closure_10;
        tmp5 = closure_0;
        tmp6 = closure_2;
        obj = closure_0(closure_2[26]);
        tmp7 = -channel.height;
        str = "respect-motion-settings";
        result = closure_10.set(
          obj.withSpring(tmp7, closure_0(closure_2[27]).springStandard, "respect-motion-settings"),
        );
      }
      return;
    }
  }
  const tmpResult9 = channel(cleanUp[23]);
  P.__closure = {
    translateYValue: sharedValue1,
    withSpring: channel(cleanUp[26]).withSpring,
    springStandard: channel(cleanUp[27]).springStandard,
  };
  P.__workletHash = 14874351700395;
  P.__initData = __initData2;
  const animatedReaction = tmpResult9.useAnimatedReaction(O, P);
  let obj4 = {
    translateYValue: sharedValue1,
    withSpring: channel(cleanUp[26]).withSpring,
    springStandard: channel(cleanUp[27]).springStandard,
  };
  const fn = function j() {
    value = sharedValue.get();
    if (0 === sharedValue1.get()) {
      let num = 0;
    } else {
      num = 1;
    }
    const obj2 = { opacity: num, top: null, transform: null };
    let height;
    if (value != null) {
      height = value.height;
    }
    obj2.top = height;
    const items = [{ translateY: sharedValue1.get() }];
    obj2.transform = items;
    return obj2;
  };
  const tmpResult10 = channel(cleanUp[23]);
  fn.__closure = {
    typingIndicatorLayout: sharedValue,
    translateYValue: sharedValue1,
    transitionState,
    TransitionStates: channel(cleanUp[25]).TransitionStates,
  };
  fn.__workletHash = 15240163018691;
  fn.__initData = __initData3;
  const animatedStyle = tmpResult10.useAnimatedStyle(fn);
  const obj6 = { style: null, onLayout: callback1, children: null };
  const items7 = [tmp16.typingWrapper, animatedStyle];
  obj6.style = items7;
  const obj7 = { style: tmp16.wrapperHoriz, children: null };
  const obj8 = { style: tmp16.horiz, children: null };
  if (null != stateFromStoresObject.config) {
    const obj9 = { config: null, username: null, onPress: null };
    ({ config: obj17.config, name: obj17.username } = stateFromStoresObject);
    let tmp28;
    if (customTypingIndicatorConfig.canSet) {
      tmp28 = callback;
    }
    obj9.onPress = tmp28;
    let tmp22Result = closure_12(transitionState(tmp2[28]), obj9);
    const tmp5Result2 = transitionState(tmp2[28]);
  } else {
    let tmp21Result3 = null;
    if (null != tmp6Result) {
      tmp21Result3 = closure_12(tmp(tmp2[29]).Ellipsis, {});
    }
    const obj10 = { children: null };
    const items8 = [tmp21Result3];
    const obj11 = {
      style: tmp16.text,
      lineClamp: 1,
      maxFontSizeMultiplier: 2,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      includeFontPadding: true,
      ellipsizeMode: "tail",
      children: tmp6Result,
    };
    items8[1] = closure_12(tmp(tmp2[30]).Text, obj11);
    obj10.children = items8;
    tmp22Result = closure_14(closure_13, obj10);
  }
  obj8.children = tmp22Result;
  const items9 = [closure_12(stateFromStores, obj8)];
  let tmp21Result4 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj12 = { channel, hasTypingText: null != tmp6Result, slowmodeType: analyticsLocations.SendMessage };
    tmp21Result4 = closure_12(transitionState(tmp2[31]), obj12);
  }
  items9[1] = tmp21Result4;
  obj7.children = items9;
  obj6.children = closure_14(stateFromStores, obj7);
  return closure_12(transitionState(cleanUp[23]).View, obj6);
}
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return closure_1_12(TypingIndicatorInner, obj, arg0);
}
const View = fn(17).View;
let closure_5 = fn(9874).useChatShowingAutoComplete;
const SlowmodeType = fn(7823).SlowmodeType;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5009);
let closure_15 = createStyles.createStyles((arg0) => {
  const obj = {
    typingWrapper: {
      paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP,
      paddingBottom: 4,
      paddingHorizontal: 16,
      alignSelf: "stretch",
      backgroundColor: "transparent",
      paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
      paddingLeft: 2 * arg0,
    },
    wrapperHoriz: { justifyContent: "space-between", flexDirection: "row", alignItems: "center" },
    horiz: null,
    text: null,
  };
  const obj2 = {
    paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP,
    paddingBottom: 4,
    paddingHorizontal: 16,
    alignSelf: "stretch",
    backgroundColor: "transparent",
    paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
    paddingLeft: 2 * arg0,
  };
  obj.horiz = { marginRight: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 };
  obj.text = { flex: 1 };
  return obj;
});
const __initData = {
  code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}",
};
const __initData2 = {
  code: "function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}",
};
const __initData3 = {
  code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default noop.memo(function TypingIndicator(channel) {
  channel = channel.channel;
  const tmp = closure_5(channel.screenIndex);
  let typingUserIds;
  let memo;
  typingUserIds = typingUserIds(memo[10]).useTypingUserIds(channel.id, 4);
  let obj = typingUserIds(memo[10]);
  let items = [DevSettingsStore];
  const stateFromStores = typingUserIds(memo[11]).useStateFromStores(items, () =>
    DevSettingsStore.get("preview_own_typing_indicator"),
  );
  const obj2 = typingUserIds(memo[11]);
  const items1 = [UserStore];
  const stateFromStores1 = typingUserIds(memo[11]).useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [stateFromStores, stateFromStores1, typingUserIds];
  memo = noop.useMemo(() => {
    if (stateFromStores) {
      if (null != memo) {
        const items = [tmp];
        let tmp3 = items;
      }
      return tmp3;
    }
    tmp3 = typingUserIds;
  }, items2);
  const items3 = [channel, memo, tmp];
  const memo1 = noop.useMemo(() => {
    let tmp3 = typingUserIds.rateLimitPerUser > 0;
    if (!tmp3) {
      tmp3 = memo.length > 0;
    }
    if (tmp3) {
      tmp3 = !stateFromStores;
    }
    let tmp4;
    if (tmp3) {
      const obj = { channel: typingUserIds, typingUserIds: memo };
      tmp4 = obj;
    }
    return tmp4;
  }, items3);
  return closure_12(typingUserIds(memo[25]).TransitionItem, { item: memo1, renderItem: renderTypingIndicator });
});
export function hasTypingIndicatorContent(channel, typingUserIdsForDisplay, arg2) {
  let tmp = channel.rateLimitPerUser > 0;
  if (!tmp) {
    tmp = typingUserIdsForDisplay.length > 0;
  }
  if (tmp) {
    tmp = !arg2;
  }
  return tmp;
}
export function useTypingUserIdsForDisplay(id, arg1) {
  typingUserIds = typingUserIds(stateFromStores1[10]).useTypingUserIds(id, arg1);
  const obj = typingUserIds(stateFromStores1[10]);
  const items = [DevSettingsStore];
  const stateFromStores = typingUserIds(stateFromStores1[11]).useStateFromStores(items, () =>
    DevSettingsStore.get("preview_own_typing_indicator"),
  );
  const obj2 = typingUserIds(stateFromStores1[11]);
  const items1 = [UserStore];
  stateFromStores1 = typingUserIds(stateFromStores1[11]).useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [stateFromStores, stateFromStores1, typingUserIds];
  return noop.useMemo(() => {
    if (stateFromStores) {
      if (null != memo) {
        const items = [tmp];
        let tmp3 = items;
      }
      return tmp3;
    }
    tmp3 = typingUserIds;
  }, items2);
}
