// === Module 13935: TypingIndicator ===

// Module 13935 (TypingIndicator)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _modDef1652 from "module_1652" /* 1652 */;
import native from "native" /* 5229 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6199 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7410 */;
import useTypingTextDefault from "useTypingText" /* 13939 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 13940 */;
import CustomTypingIndicatorAnalytics from "CustomTypingIndicatorAnalytics" /* 13941 */;
import openCustomTypingIndicatorAnnounceActionSheet from "openCustomTypingIndicatorAnnounceActionSheet" /* 13942 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 5784 */;
import RawGuildEmojiStore from "RawGuildEmojiStore" /* 6877 */;
import TypingStore from "TypingStore" /* 13936 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function TypingIndicatorInner(channel) {
  channel = channel.channel;
  _require = channel;
  ({ typingUserIds, transitionState } = channel);
  importDefault = transitionState;
  const cleanUp = channel.cleanUp;
  dependencyMap = cleanUp;
  let stateFromStoresObject;
  closure_7 = undefined;
  let analyticsLocations;
  let sharedValue;
  let sharedValue1;
  let customTypingIndicatorConfig = require("CustomTypingIndicatorExperiment").useCustomTypingIndicatorConfig("TypingIndicatorInner");
  const canView = customTypingIndicatorConfig.canView;
  noop = canView;
  let obj = require("CustomTypingIndicatorExperiment");
  items = [stateFromStoresObject];
  const stateFromStores = require("initialize").useStateFromStores(items, () => stateFromStoresObject.get("preview_own_typing_indicator"));
  let obj3 = { channelId: channel.id, guildId: null, typingUserIds: null };
  let obj2 = require("initialize");
  obj3.guildId = channel.getGuildId();
  obj3.typingUserIds = typingUserIds;
  const tmp6Result = useTypingTextDefault(obj3);
  let style_owner_user_id = null;
  if (1 === typingUserIds.length) {
    style_owner_user_id = typingUserIds[0];
  }
  const items1 = [sharedValue, sharedValue1, closure_7];
  const items2 = [style_owner_user_id, canView, stateFromStores, channel];
  stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => {
    if (null != first) {
      if (c3) {
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
            const guildId = _undefined.getGuildId();
            let guildEmojis = null;
            if (null != guildId) {
              guildEmojis = RawGuildEmojiStore.getGuildEmojis(guildId);
            }
            const obj = { config: null, name: null };
            const obj2 = CustomTypingIndicatorUtils;
            obj.config = obj2.getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, _undefined, first, guildEmojis);
            obj.name = NicknameUtilsDefault.getName(guildId, _undefined.id, user);
            return obj;
          }
        }
        return { config: null, name: null };
      }
    }
    return { config: null, name: null };
  }, items2);
  closure_7 = tmp10;
  const items3 = [null != stateFromStoresObject.config, , ];
  ({ id: arr4[1], type: arr4[2] } = channel);
  const effect = noop.useEffect(() => {
    if (closure_7) {
      ({ id: obj2.channel_id, type: obj2.channel_type } = c0);
      AnalyticsUtilsDefault.track(AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN, { channel_id: null, channel_type: null });
      const obj3 = { channel_id: null, channel_type: null };
    }
  }, items3);
  const tmpResult = require("initialize");
  analyticsLocations = useAnalyticsLocationsDefault(tmp5(7435).CHAT_TYPING_INDICATOR).analyticsLocations;
  const items4 = [stateFromStoresObject, style_owner_user_id, , , ];
  ({ id: arr5[2], type: arr5[3] } = channel);
  items4[4] = analyticsLocations;
  const callback = noop.useCallback(() => {
    const config = stateFromStoresObject.config;
    let tmp = null != config;
    if (tmp) {
      tmp = null != style_owner_user_id;
    }
    if (tmp) {
      const obj5 = { channel_id: null, channel_type: null, style_owner_user_id: null };
      ({ id: obj2.channel_id, type: obj2.channel_type } = c0);
      obj5.style_owner_user_id = style_owner_user_id;
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(CustomTypingIndicatorAnalytics.getTypingIndicatorStyleAnalytics(config));
      obj.track(AnalyticEvents.TYPING_INDICATOR_STYLE_CLICKED, obj5);
    }
    const result = openCustomTypingIndicatorAnnounceActionSheet.openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations);
  }, items4);
  const tmp5Result = useAnalyticsLocationsDefault;
  sharedValue = require("module_1652").useSharedValue(undefined);
  const items5 = [sharedValue];
  const callback1 = noop.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items5);
  const tmpResult6 = require("module_1652");
  const tmp16 = closure_15(require("useToken").useToken(nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING));
  const tmpResult7 = require("useToken");
  sharedValue1 = require("module_1652").useSharedValue(0);
  const items6 = [cleanUp, transitionState, sharedValue1];
  const effect1 = noop.useEffect(() => {
    if (c1 === native.TransitionStates.YEETED) {
      const result = sharedValue1.set(0);
      _undefined3();
    }
  }, items6);
  const tmpResult8 = require("module_1652");
  const items7 = [closure_16, sharedValue];
  _require = undefined;
  [tmp19, tmp20] = items7;
  class TypingIndicatorTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items8 = [tmp20];
  TypingIndicatorTsx1.__closure = items8;
  TypingIndicatorTsx1.__workletHash = 14813085565405;
  TypingIndicatorTsx1.__initData = tmp19;
  const items9 = [closure_17, sharedValue1, require("spring/spring").withSpring, require("springPresets").springStandard];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp21, tmp22, tmp23, tmp24] = items9;
  class TypingIndicatorTsx2 {
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
        tmp4 = closure_0;
        tmp5 = closure_1;
        tmp6 = closure_2;
        str = "respect-motion-settings";
        result = closure_0.set(closure_1(-channel.height, closure_2, "respect-motion-settings"));
      }
      return;
    }
  }
  const items10 = [tmp22, tmp23, tmp24];
  TypingIndicatorTsx2.__closure = items10;
  TypingIndicatorTsx2.__workletHash = 3866076667250;
  TypingIndicatorTsx2.__initData = tmp21;
  const animatedReaction = require("module_1652").useAnimatedReaction(TypingIndicatorTsx1, TypingIndicatorTsx2);
  const tmpResult9 = require("module_1652");
  const items11 = [closure_18, sharedValue, sharedValue1, transitionState, require("native").TransitionStates];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp26, tmp27, tmp28, tmp29, tmp30] = items11;
  class TypingIndicatorTsx3 {
    constructor() {
      value = closure_0.get();
      obj = closure_1;
      if (0 === closure_1.get()) {
        num = 0;
      } else {
        tmp2 = closure_2;
        tmp3 = closure_3;
        num = 1;
      }
      obj1 = { opacity: num, top: null, transform: null };
      height = undefined;
      if (value != null) {
        height = value.height;
      }
      obj1.top = height;
      obj4 = { translateY: obj.get() };
      items = [];
      items[0] = obj4;
      obj1.transform = items;
      return obj1;
    }
  }
  const items12 = [tmp27, tmp28, tmp29, tmp30];
  TypingIndicatorTsx3.__closure = items12;
  TypingIndicatorTsx3.__workletHash = 15288723177178;
  TypingIndicatorTsx3.__initData = tmp26;
  const animatedStyle = require("module_1652").useAnimatedStyle(TypingIndicatorTsx3);
  let obj4 = { style: null, onLayout: callback1, children: null };
  const items13 = [tmp16.typingWrapper, animatedStyle];
  obj4.style = items13;
  let obj5 = { style: tmp16.wrapperHoriz, children: null };
  const obj6 = { style: tmp16.horiz, children: null };
  if (null != stateFromStoresObject.config) {
    const obj7 = { config: null, username: null, onPress: null };
    ({ config: obj15.config, name: obj15.username } = stateFromStoresObject);
    let tmp39;
    if (customTypingIndicatorConfig.canSet) {
      tmp39 = callback;
    }
    obj7.onPress = tmp39;
    let tmp33Result = closure_12(tmp5(13952), obj7);
    const tmp5Result2 = tmp5(13952);
  } else {
    let tmp32Result3 = null;
    if (null != tmp6Result) {
      tmp32Result3 = closure_12(tmp(1187).Ellipsis, {});
    }
    const obj8 = { children: null };
    const items14 = [tmp32Result3, ];
    const obj9 = { style: tmp16.text, lineClamp: 1, maxFontSizeMultiplier: 2, variant: "body-xs/medium", color: "interactive-text-default", includeFontPadding: true, ellipsizeMode: "tail", children: tmp6Result };
    items14[1] = closure_12(tmp(5781).Text, obj9);
    obj8.children = items14;
    tmp33Result = closure_14(closure_13, obj8);
  }
  obj6.children = tmp33Result;
  const items15 = [closure_12(stateFromStores, obj6), ];
  let tmp32Result4 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj10 = { channel, hasTypingText: null != tmp6Result, slowmodeType: analyticsLocations.SendMessage };
    tmp32Result4 = closure_12(tmp5(13956), obj10);
  }
  items15[1] = tmp32Result4;
  obj5.children = items15;
  obj4.children = closure_14(stateFromStores, obj5);
  return closure_12(_modDef1652.View, obj4);
}
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return application_id(TypingIndicatorInner, obj, arg0);
}
const View = fn(17).View;
let closure_5 = fn(10033).useChatShowingAutoComplete;
const SlowmodeType = fn(7929).SlowmodeType;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5170);
let closure_15 = createStyles.createStyles((arg0) => {
  const obj = { typingWrapper: { paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, paddingBottom: 4, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: "transparent", paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingLeft: 2 * arg0 }, wrapperHoriz: { justifyContent: "space-between", flexDirection: "row", alignItems: "center" }, horiz: null, text: null };
  const obj2 = { paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, paddingBottom: 4, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: "transparent", paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingLeft: 2 * arg0 };
  obj.horiz = { marginRight: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 };
  obj.text = { flex: 1 };
  return obj;
});
let closure_16 = { code: "(function TypingIndicatorTsx1(){let[typingIndicatorLayout]=this.__closure;return typingIndicatorLayout.get();})" };
let closure_17 = { code: "(function TypingIndicatorTsx2(current,prev){let[translateYValue,withSpring,springStandard]=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));})" };
let closure_18 = { code: "(function TypingIndicatorTsx3(){let[typingIndicatorLayout,translateYValue,transitionState,TransitionStates]=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default noop.memo(function TypingIndicator(channel) {
  channel = channel.channel;
  const tmp = closure_5(channel.screenIndex);
  let typingUserIds;
  let memo;
  typingUserIds = typingUserIds(memo[10]).useTypingUserIds(channel.id, 4);
  let obj = typingUserIds(memo[10]);
  items = [DevSettingsStore];
  const stateFromStores = typingUserIds(memo[11]).useStateFromStores(items, () => DevSettingsStore.get("preview_own_typing_indicator"));
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
        items = [tmp];
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
  items = [DevSettingsStore];
  const stateFromStores = typingUserIds(stateFromStores1[11]).useStateFromStores(items, () => DevSettingsStore.get("preview_own_typing_indicator"));
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
        items = [tmp];
        let tmp3 = items;
      }
      return tmp3;
    }
    tmp3 = typingUserIds;
  }, items2);
}