// discord_app/modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensions from "../../../screen/useWindowDimensions.native.tsx";
import _mod1708 from "../../../../../_runtime/metro/01708__.js";
import EmbeddedActivityOrientationLockState from "../../../../../discord_common/js/shared/shared-constants/EmbeddedActivityOrientationLockState.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05598_LegacyBaseButton.js";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import isOrientationLockSupportedDefault from "../../../device/native/isOrientationLockSupported.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import fetchShelf from "../../../activities/fetchShelf.tsx";
import useCurrentEmbeddedApplicationDefault from "../../../activities/utils/useCurrentEmbeddedApplication.tsx";
import useAnimatedKeyboardHeightDefault from "../../../keyboard/native/useAnimatedKeyboardHeight.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelCallLifecycleStore from "../../../video_calls/native/ChannelCallLifecycleStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
function VoicePanelAnimatedActivityCardInner(applicationId) {
  applicationId = applicationId.applicationId;
  _require = applicationId;
  let _slicedToArray;
  noop = undefined;
  c7 = undefined;
  c8 = undefined;
  let gridOrientationLockState;
  closure_10 = undefined;
  let first1;
  let callback1;
  closure_13 = undefined;
  ({ sharedVisible, layout } = applicationId);
  let tmp3 = _slicedToArray(noop.useState(0), 2);
  importDefault = tmp3[1];
  const context = noop.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  dependencyMap = channelId;
  const layoutManager = context.layoutManager;
  _slicedToArray = layoutManager;
  ({ mode, windowDimensions, hideControls } = context);
  noop = hideControls;
  const controlsSpecs = context.controlsSpecs;
  c5 = controlsSpecs;
  let tmp = closure_16();
  const tmp7 = useAnimatedKeyboardHeightDefault();
  items = [c7];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(c2));
  c6 = stateFromStores;
  let items1 = [stateFromStores];
  let guild_id;
  const memo = noop.useMemo(() => ({ channel, type: "channel" }), items1);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  c7 = guild_id;
  const obj2 = require("initialize");
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  if (guild_id1 == null) {
    guild_id1 = null;
  }
  const activityShelfItemData = require("useActivityShelfItemData").useActivityShelfItemData(guild_id1, applicationId);
  const items2 = [guild_id];
  const effect = obj.useEffect(() => {
    const shelf = fetchShelf.fetchShelf({ guildId });
  }, items2);
  const items3 = [applicationId];
  const first = tmp2(tmp4(7259)(items3), 1)[0];
  c8 = first;
  const tmp8Result = require("useActivityShelfItemData");
  const items4 = [c5];
  const items5 = [applicationId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items4,
    () => ({
      gridOrientationLockState: EmbeddedActivitiesStore.getGridOrientationLockStateForApp(c0),
      focusedOrientationLockState: EmbeddedActivitiesStore.getOrientationLockStateForApp(c0),
    }),
    items5,
  );
  gridOrientationLockState = stateFromStoresObject.gridOrientationLockState;
  const tmp17 = useCurrentEmbeddedApplicationDefault();
  const tmp8Result10 = require("initialize");
  const items6 = [c5];
  const stateFromStores1 = require("initialize").useStateFromStores(items6, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(c2);
    return embeddedActivitiesForChannel.find((applicationId) => {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return applicationId.applicationId === id;
    });
  });
  const tmp8Result11 = require("initialize");
  const tmp4Result = useAnalyticsLocationsDefault;
  let tmp21 = null != tmp17;
  const analyticsContext = require("analytics").useAnalyticsContext();
  if (tmp21) {
    let id;
    if (first != null) {
      id = first.id;
    }
    tmp21 = tmp17.id === id;
  }
  if (!tmp21) {
    let found;
    if (stateFromStores1 != null) {
      const participants = stateFromStores1.participants;
      if (participants != null) {
        found = participants.find((item) =>
          _undefined(_undefined3[23]).isActivityParticipantCurrentUserCurrentSession(item),
        );
      }
    }
    tmp21 = null != found;
  }
  closure_10 = tmp21;
  const items7 = [tmp21];
  const callback = obj.useCallback(() => {
    if (closure_10) {
      _undefined2((arg0) => arg0 + 1);
    }
  }, items7);
  const tmp8Result12 = require("analytics");
  const items8 = [closure_17, sharedVisible, mode];
  _require = undefined;
  importDefault = undefined;
  [tmp25, tmp26, tmp27] = items8;
  class VoicePanelAnimatedActivityCardTsx1 {
    constructor() {
      obj = { visible: closure_0.get(), mode: closure_1.get() };
      return obj;
    }
  }
  const items9 = [tmp26, tmp27];
  VoicePanelAnimatedActivityCardTsx1.__closure = items9;
  VoicePanelAnimatedActivityCardTsx1.__workletHash = 16491261226517;
  VoicePanelAnimatedActivityCardTsx1.__initData = tmp25;
  const items10 = [
    closure_18,
    gridOrientationLockState,
    require("../../../../../_runtime/metro/01708__.js").scheduleOnRN,
    callback,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp29, tmp30, tmp31, tmp32] = items10;
  class VoicePanelAnimatedActivityCardTsx2 {
    constructor(arg0, arg1) {
      tmp = 1 === applicationId.visible;
      if (tmp) {
        tmp2 = null;
        tmp = null != arg1;
      }
      if (tmp) {
        num = 0;
        tmp = 0 === arg1.visible;
      }
      if (!tmp) {
        tmp4 = applicationId.mode !== closure_0.PIP;
        if (tmp4) {
          tmp5 = null;
          mode = undefined;
          if (arg1 != null) {
            mode = arg1.mode;
          }
          tmp4 = mode === tmp3.PIP;
        }
        tmp = tmp4;
      }
      if (tmp) {
        tmp7 = closure_1;
        tmp8 = closure_2;
        tmp9 = closure_1(closure_2);
      }
      return;
    }
  }
  const items11 = [tmp30, tmp31, tmp32];
  VoicePanelAnimatedActivityCardTsx2.__closure = items11;
  VoicePanelAnimatedActivityCardTsx2.__workletHash = 99201814605;
  VoicePanelAnimatedActivityCardTsx2.__initData = tmp29;
  const animatedReaction = require("../../../../../_runtime/metro/01655__.js").useAnimatedReaction(
    VoicePanelAnimatedActivityCardTsx1,
    VoicePanelAnimatedActivityCardTsx2,
  );
  const tmp2Result = _slicedToArray(noop.useState(false), 2);
  first1 = tmp2Result[0];
  let embeddedActivityParticipantId = null;
  if (null != stateFromStores1) {
    ({ applicationId: obj9.applicationId, compositeInstanceId: obj9.instanceId } = stateFromStores1);
    embeddedActivityParticipantId = tmp8(7025).getEmbeddedActivityParticipantId({
      applicationId: null,
      instanceId: null,
    });
    const obj3 = { applicationId: null, instanceId: null };
    const tmp8Result14 = tmp8(7025);
  }
  const tmp28 = gridOrientationLockState;
  const tmp8Result13 = require("../../../../../_runtime/metro/01655__.js");
  const items12 = [closure_19, embeddedActivityParticipantId, context.focused, mode, tmp28];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp37, tmp38, tmp39, tmp40, tmp41] = items12;
  class VoicePanelAnimatedActivityCardTsx3 {
    constructor() {
      tmp2 = null != closure_0;
      if (tmp2) {
        tmp3 = closure_1;
        value = closure_1.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp2 = id === tmp;
      }
      if (tmp2) {
        tmp6 = closure_2;
        tmp7 = closure_3;
        tmp2 = closure_2.get() === closure_3.PANEL;
      }
      return tmp2;
    }
  }
  const items13 = [tmp38, tmp39, tmp40, tmp41];
  VoicePanelAnimatedActivityCardTsx3.__closure = items13;
  VoicePanelAnimatedActivityCardTsx3.__workletHash = 9763688087086;
  VoicePanelAnimatedActivityCardTsx3.__initData = tmp37;
  const items14 = [closure_20, require("../../../../../_runtime/metro/01708__.js").scheduleOnRN, tmp2Result[1]];
  _require = undefined;
  importDefault = undefined;
  [tmp42, tmp43, tmp44] = items14;
  class VoicePanelAnimatedActivityCardTsx4 {
    constructor(arg0, arg1) {
      if (applicationId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, applicationId);
      }
      return;
    }
  }
  const items15 = [tmp43, tmp44];
  VoicePanelAnimatedActivityCardTsx4.__closure = items15;
  VoicePanelAnimatedActivityCardTsx4.__workletHash = 15038072144431;
  VoicePanelAnimatedActivityCardTsx4.__initData = tmp42;
  const animatedReaction1 = require("../../../../../_runtime/metro/01655__.js").useAnimatedReaction(
    VoicePanelAnimatedActivityCardTsx3,
    VoicePanelAnimatedActivityCardTsx4,
  );
  const items16 = [layoutManager, applicationId];
  const memo1 = obj.useMemo(() => {
    const Gesture = _undefined(_undefined3[27]).Gesture;
    return Gesture.Tap();
  }, []);
  callback1 = obj.useCallback((arg0, arg1, arg2) => {
    if (arg2) {
      if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE === arg1) {
        _undefined4.setTargetAspectRatio(c0, "landscape");
      } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT === arg1) {
        _undefined4.setTargetAspectRatio(c0, "portrait");
      } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED === arg1) {
        let str2 = "portrait";
        if (arg0) {
          str2 = "landscape";
        }
        _undefined4.setTargetAspectRatio(c0, str2);
      }
    } else {
      _undefined4.setTargetAspectRatio(c0, "square");
    }
  }, items16);
  const items17 = [callback1, windowDimensions, gridOrientationLockState, tmp21];
  const layoutEffect = obj.useLayoutEffect(() => {
    const size = useWindowDimensions.getWindowDimensions();
    callback1(size.width > size.height, gridOrientationLockState, closure_10);
  }, items17);
  const tmp2Result2 = _slicedToArray(noop.useState(layoutManager.getDefaultTargetDimensions()), 2);
  closure_13 = tmp50;
  const items18 = [layoutManager, tmp2Result2[1]];
  const callback2 = obj.useCallback(() => {
    closure_13(_undefined4.getDefaultTargetDimensions());
  }, items18);
  const tmp8Result15 = require("../../../../../_runtime/metro/01655__.js");
  const items19 = [closure_21, windowDimensions];
  _require = undefined;
  [tmp52, tmp53] = items19;
  class VoicePanelAnimatedActivityCardTsx5 {
    constructor() {
      return closure_0.get();
    }
  }
  const items20 = [tmp53];
  VoicePanelAnimatedActivityCardTsx5.__closure = items20;
  VoicePanelAnimatedActivityCardTsx5.__workletHash = 5144095293283;
  VoicePanelAnimatedActivityCardTsx5.__initData = tmp52;
  const items21 = [
    closure_22,
    require("../../../../../_runtime/metro/01708__.js").scheduleOnRN,
    callback1,
    gridOrientationLockState,
    tmp21,
    callback2,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp54, tmp55, tmp56, tmp57, tmp58, tmp59] = items21;
  class VoicePanelAnimatedActivityCardTsx6 {
    constructor(arg0, arg1) {
      landscape = undefined;
      if (arg1 != null) {
        landscape = arg1.landscape;
      }
      if (applicationId.landscape !== landscape) {
        tmp2 = closure_0;
        tmp3 = closure_1;
        tmp4 = closure_2;
        tmp5 = closure_3;
        tmp6 = closure_0(closure_1, applicationId.landscape, closure_2, closure_3);
      }
      tmp7 = closure_0(closure_4);
      return;
    }
  }
  const items22 = [tmp55, tmp56, tmp57, tmp58, tmp59];
  VoicePanelAnimatedActivityCardTsx6.__closure = items22;
  VoicePanelAnimatedActivityCardTsx6.__workletHash = 2894942813743;
  VoicePanelAnimatedActivityCardTsx6.__initData = tmp54;
  const animatedReaction2 = require("../../../../../_runtime/metro/01655__.js").useAnimatedReaction(
    VoicePanelAnimatedActivityCardTsx5,
    VoicePanelAnimatedActivityCardTsx6,
  );
  const tmp8Result16 = require("../../../../../_runtime/metro/01655__.js");
  const tmp61 = !isOrientationLockSupportedDefault();
  const items23 = [
    closure_23,
    c8,
    tmp7,
    windowDimensions,
    tmp61,
    stateFromStoresObject.focusedOrientationLockState,
    require("EmbeddedActivityOrientationLockState").EmbeddedActivityOrientationLockState,
    callback1,
    first1,
    tmp.activityContainerBackground.backgroundColor,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71] = items23;
  class VoicePanelAnimatedActivityCardTsx7 {
    constructor() {
      num = 0;
      if (closure_0) {
        tmp = closure_1;
        num = closure_1.get();
      }
      landscape = closure_2.get().landscape;
      width = closure_2.get().width;
      height = closure_2.get().height;
      tmp2 = closure_3;
      tmp3 = closure_3;
      if (closure_3) {
        tmp4 = closure_4;
        tmp5 = closure_5;
        tmp3 = closure_4 === closure_5.LANDSCAPE;
      }
      if (tmp3) {
        tmp3 = !landscape;
      }
      if (tmp2) {
        tmp6 = closure_4;
        tmp7 = closure_5;
        tmp2 = closure_4 === closure_5.PORTRAIT;
      }
      if (tmp2) {
        tmp2 = landscape;
      }
      if (tmp3) {
        tmp9 = closure_6;
        num5 = 2;
        num3 = (height - width * closure_6) / 2;
        num2 = 0;
      } else {
        num2 = 0;
        num3 = 0;
        if (tmp2) {
          tmp8 = closure_6;
          num4 = 2;
          num2 = (width - height * closure_6) / 2;
          num3 = 0;
        }
      }
      tmp10 = closure_7;
      num6 = 1;
      if (closure_7) {
        num6 = 0;
      }
      size = {
        flex: num6,
        backgroundColor: closure_8,
        paddingVertical: num3,
        paddingHorizontal: num2,
        width: null,
        height: null,
        maxHeight: "100%",
        maxWidth: "100%",
      };
      str = "auto";
      str2 = "auto";
      if (tmp10) {
        str2 = width;
      }
      size.width = str2;
      if (tmp10) {
        str = height - num;
      }
      size.height = str;
      return size;
    }
  }
  const items24 = [tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71];
  VoicePanelAnimatedActivityCardTsx7.__closure = items24;
  VoicePanelAnimatedActivityCardTsx7.__workletHash = 7847728562905;
  VoicePanelAnimatedActivityCardTsx7.__initData = tmp62;
  const animatedStyle = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(
    VoicePanelAnimatedActivityCardTsx7,
  );
  const tmp8Result17 = require("../../../../../_runtime/metro/01655__.js");
  const items25 = [c6];
  const items26 = [controlsSpecs, first1, hideControls];
  const stateFromStores2 = require("initialize").useStateFromStores(items25, () =>
    channel.getShowActivitiesDebugOverlay(),
  );
  if (null == stateFromStores) {
    return null;
  } else {
    if (tmp21) {
      const obj4 = { gesture: tmp74, children: null };
      const obj5 = { layout, pointerEvents: null, style: null, children: null };
      let str = "none";
      if (first1) {
        str = "auto";
      }
      obj5.pointerEvents = str;
      obj5.style = animatedStyle;
      const obj6 = { channelId, activityName: null, isActivityFocused: null, children: null };
      let name;
      if (first != null) {
        name = first.name;
      }
      obj6.activityName = name;
      obj6.isActivityFocused = first1;
      const obj7 = { channel: stateFromStores, layoutMode: tmp75 };
      obj6.children = closure_14(tmp4(12848), obj7, tmp3[0]);
      const items27 = [closure_14(tmp4(20024), obj6)];
      let tmp79Result = null;
      if (stateFromStores2) {
        tmp79Result = closure_14(tmp4(20025), {});
      }
      items27[1] = tmp79Result;
      obj5.children = items27;
      obj4.children = closure_15(tmp4(1655).View, obj5);
      let tmp79Result2 = closure_14(tmp8(5598).GestureDetector, obj4);
      let tmp76 = closure_14;
      const tmp4Result2 = tmp4(20024);
    } else if (null == activityShelfItemData) {
      const obj8 = { activity: stateFromStores1, application: first };
      tmp79Result2 = closure_14(tmp4(20026), obj8);
      tmp76 = closure_14;
    } else {
      tmp76 = closure_14;
      const obj10 = { gesture: memo1, children: null };
      const obj11 = {
        context: memo,
        guildId: stateFromStores.guild_id,
        activityItem: activityShelfItemData,
        locationObject: analyticsContext.location,
        itemDimensions: tmp2Result2[0],
        disableBadges: true,
      };
      obj10.children = closure_14(tmp4(20030), obj11);
      tmp79Result2 = closure_14(tmp8(5598).GestureDetector, obj10);
    }
    const obj12 = { value: tmp4Result(tmp4(7937).ACTIVITY_TILE).analyticsLocations, children: tmp79Result2 };
    return tmp76(tmp8(7918).AnalyticsLocationProvider, obj12);
  }
  const tmp8Result18 = require("initialize");
}
const VoicePanelConstants = fn(11985);
({ IS_IOS: closure_8, VoicePanelModes: closure_9 } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11983).VoicePanelControlsModes;
const ThemeTypes = fn(1072).ThemeTypes;
let closure_12 = fn(2145).ACTIVITY_LOCKED_ASPECT_RATIO;
const ActivityLayoutMode = fn(12706).ActivityLayoutMode;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5306);
let obj = { activityContainerBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_16 = createStyles.createStyles(obj);
let closure_17 = {
  code: "(function VoicePanelAnimatedActivityCardTsx1(){let[sharedVisible,mode]=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};})",
};
let closure_18 = {
  code: "(function VoicePanelAnimatedActivityCardTsx2({visible:visible,mode:mode},prev){let[VoicePanelModes,scheduleOnRN,incrementActivityKey]=this.__closure;if(visible===1&&prev!=null&&prev.visible===0||mode!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){scheduleOnRN(incrementActivityKey);}})",
};
let closure_19 = {
  code: "(function VoicePanelAnimatedActivityCardTsx3(){let[activityParticipantId,focused,mode,VoicePanelModes]=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;})",
};
let closure_20 = {
  code: "(function VoicePanelAnimatedActivityCardTsx4(isActivityFocused,wasActivityFocused){let[scheduleOnRN,setIsActivityFocused]=this.__closure;if(isActivityFocused!==wasActivityFocused){scheduleOnRN(setIsActivityFocused,isActivityFocused);}})",
};
let closure_21 = {
  code: "(function VoicePanelAnimatedActivityCardTsx5(){let[windowDimensions]=this.__closure;return windowDimensions.get();})",
};
let closure_22 = {
  code: "(function VoicePanelAnimatedActivityCardTsx6(windowDimensionsValue,prevWindowDimensionsValue){let[scheduleOnRN,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions]=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){scheduleOnRN(handleTargetAspectRatioParams,windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}scheduleOnRN(updateNotJoinedActivityDimensions);})",
};
let closure_23 = {
  code: "(function VoicePanelAnimatedActivityCardTsx7(){let[IS_IOS,animatedKeyboardHeight,windowDimensions,shouldLetterboxOrientationLock,focusedOrientationLockState,EmbeddedActivityOrientationLockState,ACTIVITY_LOCKED_ASPECT_RATIO,isActivityFocused,backgroundColor]=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===EmbeddedActivityOrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===EmbeddedActivityOrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_LOCKED_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_LOCKED_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto',maxHeight:'100%',maxWidth:'100%'};})",
};
let closure_24 = {
  code: "(function VoicePanelAnimatedActivityCardTsx8(event,manager){let[controlsSpecs,VoicePanelControlsModes,scheduleOnRN,hideControls]=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){scheduleOnRN(hideControls,{debounce:true});}})",
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx");

export default noop.memo(function VoicePanelAnimatedActivityCard(arg0) {
  const obj = { theme: ThemeTypes.DARK, children: null };
  const merged = Object.assign(arg0);
  obj.children = gesture(VoicePanelAnimatedActivityCardInner, {});
  return gesture(native.ThemeContextProvider, obj);
});
