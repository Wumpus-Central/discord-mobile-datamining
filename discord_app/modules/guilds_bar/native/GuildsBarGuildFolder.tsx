// === Module 16273: GuildsBarGuildFolder ===

// Module 16273 (GuildsBarGuildFolder)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import useToken2 from "useToken" /* 4586 */;
import native from "native" /* 4595 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import spring from "spring" /* 5604 */;
import SortedGuildStore2 from "SortedGuildStore" /* 5623 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import AssetRegistryDefault from "AssetRegistry" /* 5822 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import FastImageDefault from "FastImage" /* 5981 */;
import NativeViewDefault from "NativeView" /* 5983 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6577 */;
import ListUtils from "ListUtils" /* 12300 */;
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems" /* 16267 */;
import react from "react" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7134 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 16265 */;
import GuildsBarConstants_mod from "guilds_bar/GuildsBarConstants" /* 16270 */;
import GuildsBarConstants_mod2 from "GuildsBarConstants" /* 16262 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
const SortedGuildStore = SortedGuildStore2;
let dependencyMap, item, set;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let unpackModuleId;
function getItemKey(type) {
  return type.type;
}
function renderGuildFolderContent(arg0, type, state, cleanUp) {
  let guilds;
  let obj3;
  type = type.type;
  if ("icon" === type) {
    const obj2 = { fromTop: true, cleanUp, state, children: closure_16(closure_29, obj3) };
    obj3 = { item: type };
    return closure_16(closure_27, obj2, arg0);
  } else if ("preview" === type) {
    let obj = {
      cleanUp,
      state,
      children: guilds.map((guildId, index) => {
          let tmp = index;
          if (0 !== index) {
            tmp = index;
            if (1 !== index) {
              tmp = index;
              if (2 !== index) {
                tmp = index;
              }
            }
          }
          let tmp2 = null;
          if (null != guildId) {
            tmp2 = null;
            if (null != tmp) {
              const obj = { guildId, selected: guildId === type.selectedGuildId, position: tmp };
              tmp2 = authStore3(closure_19, obj, guildId);
            }
          }
          return tmp2;
        })
    };
    guilds = type.guilds;
    return closure_16(closure_27, obj, arg0);
  }
}
const GuildsNodeType = SortedGuildStore2.GuildsNodeType;
({ useItemDragState: c9, useFolderBGHeightOffset: c10 } = GuildsBarDnDStore);
let GuildsBarConstants = GuildsBarConstants_mod2;
({ DEFAULT_FOLDER_COLOR: unpackModuleId, isDefaultFolderColor: closure_12, normalizeFolderColor: map1 } = GuildsBarConstants);
GuildsBarConstants = GuildsBarConstants_mod2;
({ TRANSITION_PHYSICS: closure_14, FOLDER_SPRING_PHYSICS: closure_15 } = GuildsBarConstants);
let Fragment = Fragment_mod;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles(() => {
  let rect;
  let num = arg0;
  if (arg0 === undefined) {
    num = 48;
  }
  let num2 = arg1;
  if (arg1 === undefined) {
    num2 = 0;
  }
  const obj = { folderBackground: rect, folderScaleContainer: { position: "absolute", top: 0, left: 0, width: num, height: num, justifyContent: "center", alignItems: "center" }, guildPreviewIcon: { position: "absolute", margin: nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN }, guildPreviewIconUnselected: { borderRadius: nativeDefault.radii.sm }, guildPreview0: { top: 0, left: 0 }, guildPreview1: { top: 0, right: 0 }, guildPreview2: { bottom: 0, left: 0 }, guildPreview3: { bottom: 0, right: 0 }, guildPreviewWrapper: { position: "absolute", width: num, height: num } };
  rect = { position: "absolute", top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_LEFT, backgroundColor: nativeDefault.colors.GUILD_FOLDER_BACKGROUND, borderTopLeftRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderTopRightRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomLeftRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, width: num + num2 };
  ({ position: "absolute", margin: nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN });
  ({ borderRadius: nativeDefault.radii.sm });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let guildPreview3;
  let position;
  let selected;
  let tmp8;
  const obj = guildId(576);
  const cResult = obj.c(12);
  guildId = guildId.guildId;
  ({ position, selected } = guildId);
  const obj2 = guildId(4586);
  const tmp5 = closure_18(obj2.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (0 === position) {
    guildPreview3 = tmp5.guildPreview0;
  } else if (1 === position) {
    guildPreview3 = tmp5.guildPreview1;
  } else if (2 === position) {
    guildPreview3 = tmp5.guildPreview2;
  } else if (3 === position) {
    guildPreview3 = tmp5.guildPreview3;
  }
  const combined = "" + selected;
  let prop;
  if (!selected) {
    prop = tmp5.guildPreviewIconUnselected;
  }
  if (cResult[3] === guildPreview3) {
    if (cResult[4] === tmp5.guildPreviewIcon) {
      let tmp12;
      if (cResult[5] === prop) {
        tmp12 = cResult[6];
      }
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === selected) {
          if (cResult[9] === combined) {
            let tmp13;
            if (cResult[10] === tmp12) {
              tmp13 = cResult[11];
            }
            return tmp13;
          }
        }
      }
      const obj3 = { style: tmp12, guild: stateFromStores, size: guildId(5978).GuildIconSizes.XXSMALL, selected };
      const tmp4Result = GuildIconDefault;
      const tmp16 = closure_16(tmp4Result, obj3, combined);
      cResult[7] = stateFromStores;
      cResult[8] = selected;
      cResult[9] = combined;
      cResult[10] = tmp12;
      cResult[11] = tmp16;
      tmp13 = tmp16;
    }
  }
  const items1 = [tmp5.guildPreviewIcon, prop, guildPreview3];
  cResult[3] = guildPreview3;
  cResult[4] = tmp5.guildPreviewIcon;
  cResult[5] = prop;
  cResult[6] = items1;
  tmp12 = items1;
}) : ((arg0) => {
  let guildPreview3;
  let position;
  let require;
  let selected;
  ({ guildId: require, position, selected } = arg0);
  const obj = useToken2;
  const tmp4 = closure_18(obj.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
  const items = [GuildStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(_require));
  if (0 === position) {
    guildPreview3 = tmp4.guildPreview0;
  } else if (1 === position) {
    guildPreview3 = tmp4.guildPreview1;
  } else if (2 === position) {
    guildPreview3 = tmp4.guildPreview2;
  } else if (3 === position) {
    guildPreview3 = tmp4.guildPreview3;
  }
  const items1 = [tmp4.guildPreviewIcon, , ];
  let prop;
  const tmp3Result = GuildIconDefault;
  if (!selected) {
    prop = tmp4.guildPreviewIconUnselected;
  }
  items1[1] = prop;
  items1[2] = guildPreview3;
  const obj3 = { style: items1, guild: stateFromStores, size: GuildIcon.GuildIconSizes.XXSMALL, selected };
  return closure_16(tmp3Result, obj3, "" + selected);
});
const __initData = { code: "function GuildsBarGuildFolderTsx1(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,\"animate-always\")},initialValues:{height:values.currentHeight}};}" };
const __initData2 = { code: "function GuildsBarGuildFolderTsx2(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};}" };
ReactCompilerGating = ReactCompilerGating_mod;
const __initData3 = { code: "function GuildsBarGuildFolderTsx3(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,guildItemSize}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}" };
let closure_24 = { code: "function GuildsBarGuildFolderTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData4 = { code: "function GuildsBarGuildFolderTsx5(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,guildItemSize}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}" };
let closure_26 = { code: "function GuildsBarGuildFolderTsx6(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let color;
  let first;
  let folderId;
  let items;
  let totalItems;
  let obj = react2;
  const cResult = obj.c(12);
  ({ color, folderId, totalItems } = arg0);
  let obj2 = useToken2;
  const token = obj2.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj3 = useToken2;
  const token1 = obj3.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const obj4 = useToken2;
  const tmp7 = closure_18(token, obj4.useToken(nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET));
  const sum = token + token1 + (token + 2 * token1) * totalItems;
  const sum1 = sum + authStore(folderId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(height) {
      let obj2;
      let obj3;
      const obj = { animations: obj2, initialValues: { height: height.currentHeight } };
      obj2 = { height: obj3.withSpring(height.targetHeight, TRANSITION_PHYSICS, "animate-always") };
      obj3 = require("spring");
      return obj;
    };
    fn.__closure = { withSpring: spring.withSpring, TRANSITION_PHYSICS };
    fn.__workletHash = 11528904160406;
    fn.__initData = __initData;
    cResult[0] = fn;
    first = fn;
    const obj5 = { withSpring: spring.withSpring, TRANSITION_PHYSICS };
  } else {
    first = cResult[0];
  }
  const tmpResult = useToken2;
  const token2 = tmpResult.useToken(nativeDefault.modules.mobile.GUILD_FOLDER_COLOR_OPACITY);
  if (cResult[1] === color) {
    let tmp14;
    let tmp20;
    if (cResult[2] === token2) {
      tmp14 = cResult[3];
    }
    if (cResult[6] !== sum1) {
      const obj6 = { height: sum1 };
      cResult[6] = sum1;
      cResult[7] = obj6;
      tmp20 = obj6;
    } else {
      tmp20 = cResult[7];
    }
    if (cResult[8] === tmp14) {
      if (cResult[9] === tmp7.folderBackground) {
        let tmp21;
        if (cResult[10] === tmp20) {
          tmp21 = cResult[11];
        }
        return tmp21;
      }
    }
    const obj7 = { pointerEvents: "none", collapsable: false, layout: first, style: items };
    items = [tmp7.folderBackground, tmp14, tmp20];
    const tmp23 = authStore3(ReanimatedNativeViewDefault, obj7);
    cResult[8] = tmp14;
    cResult[9] = tmp7.folderBackground;
    cResult[10] = tmp20;
    cResult[11] = tmp23;
    tmp21 = tmp23;
  }
  const tmp15 = map1(color);
  let tmp16;
  if (null != tmp15) {
    let tmp19;
    const hexWithOpacity = ColorUtils.hexWithOpacity;
    ColorUtils;
    const tmpResult4 = utils_ColorUtils;
    const hexWithOpacityResult = hexWithOpacity(tmpResult4.int2hex(tmp15), token2);
    if (cResult[4] !== hexWithOpacityResult) {
      const obj8 = { backgroundColor: hexWithOpacityResult };
      cResult[4] = hexWithOpacityResult;
      cResult[5] = obj8;
      tmp19 = obj8;
    } else {
      tmp19 = cResult[5];
    }
    tmp16 = tmp19;
  }
  cResult[1] = color;
  cResult[2] = token2;
  cResult[3] = tmp16;
  tmp14 = tmp16;
}) : ((color) => {
  let folderId;
  let items1;
  let totalItems;
  color = color.color;
  let token2;
  ({ folderId, totalItems } = color);
  let obj = color(4586);
  const token = obj.useToken(token2(587).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = color(4586);
  const token1 = obj2.useToken(token2(587).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let obj3 = color(4586);
  const fn = function s(height) {
    let obj2;
    let obj3;
    const obj = { animations: obj2, initialValues: { height: height.currentHeight } };
    obj2 = { height: obj3.withSpring(height.targetHeight, TRANSITION_PHYSICS, "animate-always") };
    obj3 = color(dependencyMap[16]);
    return obj;
  };
  const obj4 = { withSpring: color(5604).withSpring, TRANSITION_PHYSICS };
  const tmp3 = closure_18(token, obj3.useToken(token2(587).modules.mobile.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET));
  const tmp4 = closure_10(folderId);
  const useCallback = react.useCallback;
  fn.__closure = obj4;
  fn.__workletHash = 15799331931829;
  fn.__initData = __initData2;
  const callback = useCallback(fn, []);
  const obj5 = color(4586);
  token2 = obj5.useToken(token2(587).modules.mobile.GUILD_FOLDER_COLOR_OPACITY);
  const items = [color, token2];
  const memo = react.useMemo(() => {
    let hexWithOpacity;
    let obj2;
    const tmp = map1(color);
    if (null != tmp) {
      const obj = { backgroundColor: hexWithOpacity(obj2.int2hex(tmp), token2) };
      hexWithOpacity = ColorUtils.hexWithOpacity;
      ColorUtils;
      obj2 = utils_ColorUtils;
      return obj;
    }
  }, items);
  const obj6 = { pointerEvents: "none", collapsable: false, layout: callback, style: items1 };
  items1 = [tmp3.folderBackground, memo, ];
  const obj7 = { height: token + token1 + (token + 2 * token1) * totalItems + tmp4 };
  items1[2] = obj7;
  return closure_16(token2(6577), obj6);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  let children;
  let cleanUp;
  let closure_2;
  let fromTop;
  let obj = cleanUp(576);
  const cResult = obj.c(10);
  ({ children, fromTop, cleanUp } = state);
  state = state.state;
  dependencyMap = tmp4;
  const tmpResult = cleanUp(4586);
  const token = tmpResult.useToken(state(587).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp7 = closure_18(token);
  const useSharedValue = cleanUp(4618).useSharedValue;
  let num = 0;
  cleanUp(4618);
  const tmp5 = state;
  if (state === cleanUp(4595).TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = useSharedValue(num);
  let fn = function o() {
    let fn;
    let items;
    let value;
    let withSpring;
    let obj = { opacity: withSpring(value, closure_15, undefined, fn), transform: items };
    withSpring = spring.withSpring;
    spring;
    value = sharedValue.get();
    fn = function t(arg0) {
      const tmp = arg0 && state === cleanUp(closure_2[21]).TransitionStates.YEETED;
      if (tmp) {
        const obj = cleanUp(closure_2[20]);
        obj.runOnJS(closure_1_0)();
      }
    };
    fn.__closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 9309093779169;
    fn.__initData = __initData;
    ({ state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp });
    const withSpring2 = spring.withSpring;
    let num = 1;
    let num2 = 0;
    spring;
    if (1 !== sharedValue.get()) {
      num2 = closure_2 ? -token : token;
    }
    items = [{ translateY: withSpring2(num2, closure_15) }, ];
    ({ translateY: withSpring2(num2, closure_15) });
    const withSpring3 = spring.withSpring;
    spring;
    if (num !== sharedValue.get()) {
      let num3 = 1.3;
      if (closure_2) {
        num3 = 0.3;
      }
      num = num3;
    }
    items[1] = { scale: withSpring3(num, closure_15) };
    ({ scale: withSpring3(num, closure_15) });
    return obj;
  };
  const tmpResult4 = cleanUp(4618);
  fn.__closure = { withSpring: cleanUp(5604).withSpring, visible: sharedValue, FOLDER_SPRING_PHYSICS, state, TransitionStates: cleanUp(4595).TransitionStates, runOnJS: cleanUp(4618).runOnJS, cleanUp, fromTop: undefined !== fromTop && fromTop, guildItemSize: token };
  fn.__workletHash = 6656244933777;
  fn.__initData = __initData3;
  ({ withSpring: cleanUp(5604).withSpring, visible: sharedValue, FOLDER_SPRING_PHYSICS, state, TransitionStates: cleanUp(4595).TransitionStates, runOnJS: cleanUp(4618).runOnJS, cleanUp, fromTop: undefined !== fromTop && fromTop, guildItemSize: token });
  const animatedStyle = tmpResult4.useAnimatedStyle(fn);
  if (cResult[0] === state) {
    let tmp11;
    let tmp12;
    if (cResult[1] === sharedValue) {
      tmp11 = cResult[2];
      tmp12 = cResult[3];
    }
    const effect = token.useEffect(tmp11, tmp12);
    if (cResult[4] === animatedStyle) {
      let tmp15;
      if (cResult[5] === tmp7.folderScaleContainer) {
        tmp15 = cResult[6];
      }
      if (cResult[7] === children) {
        let tmp16;
        if (cResult[8] === tmp15) {
          tmp16 = cResult[9];
        }
        return tmp16;
      }
      const obj3 = { style: tmp15, children };
      const tmp18 = closure_16(tmp5(6577), obj3);
      cResult[7] = children;
      cResult[8] = tmp15;
      cResult[9] = tmp18;
      tmp16 = tmp18;
    }
    let items = [animatedStyle, tmp7.folderScaleContainer];
    let num2 = 4;
    cResult[4] = animatedStyle;
    let num3 = 5;
    cResult[5] = tmp7.folderScaleContainer;
    cResult[6] = items;
    tmp15 = items;
  }
  const fn2 = function l() {
    let num = 1;
    set = sharedValue.set;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  };
  const items1 = [state, sharedValue];
  cResult[0] = state;
  cResult[1] = sharedValue;
  cResult[2] = fn2;
  cResult[3] = items1;
  tmp12 = items1;
  tmp11 = fn2;
}) : ((fromTop) => {
  let items1;
  let flag = fromTop.fromTop;
  const children = fromTop.children;
  if (flag === undefined) {
    flag = false;
  }
  const cleanUp = fromTop.cleanUp;
  const state = fromTop.state;
  let sharedValue;
  let tmp = flag;
  let obj = flag(state[13]);
  const tmp3 = cleanUp;
  const token = obj.useToken(cleanUp(state[10]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_18(token);
  const tmp6 = flag(state[20]);
  const useSharedValue = tmp6.useSharedValue;
  let num = 0;
  if (state === flag(state[21]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const tmpResult = tmp(tmp2[20]);
  let fn = function u() {
    let fn;
    let items;
    let value;
    let withSpring;
    let obj = { opacity: withSpring(value, closure_15, undefined, fn), transform: items };
    withSpring = spring.withSpring;
    spring;
    value = sharedValue.get();
    fn = function t(arg0) {
      const tmp = arg0 && closure_1_2 === flag(state[21]).TransitionStates.YEETED;
      if (tmp) {
        const obj = flag(state[20]);
        obj.runOnJS(cleanUp)();
      }
    };
    fn.__closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 2330476013541;
    fn.__initData = __initData;
    ({ state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp });
    const withSpring2 = spring.withSpring;
    let num = 1;
    let num2 = 0;
    spring;
    if (1 !== sharedValue.get()) {
      num2 = flag ? -token : token;
    }
    items = [{ translateY: withSpring2(num2, closure_15) }, ];
    ({ translateY: withSpring2(num2, closure_15) });
    const withSpring3 = spring.withSpring;
    spring;
    if (num !== sharedValue.get()) {
      let num3 = 1.3;
      if (flag) {
        num3 = 0.3;
      }
      num = num3;
    }
    items[1] = { scale: withSpring3(num, closure_15) };
    ({ scale: withSpring3(num, closure_15) });
    return obj;
  };
  fn.__closure = { withSpring: tmp(state[16]).withSpring, visible: sharedValue, FOLDER_SPRING_PHYSICS, state, TransitionStates: tmp(state[21]).TransitionStates, runOnJS: tmp(state[20]).runOnJS, cleanUp, fromTop: flag, guildItemSize: token };
  fn.__workletHash = 2276176184081;
  fn.__initData = __initData4;
  let items = [state, sharedValue];
  ({ withSpring: tmp(state[16]).withSpring, visible: sharedValue, FOLDER_SPRING_PHYSICS, state, TransitionStates: tmp(state[21]).TransitionStates, runOnJS: tmp(state[20]).runOnJS, cleanUp, fromTop: flag, guildItemSize: token });
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = token.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items);
  const obj3 = { style: items1, children };
  items1 = [animatedStyle, tmp5.folderScaleContainer];
  return closure_16(tmp3(state[19]), obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((item) => {
  const obj = react2;
  const cResult = obj.c(2);
  item = item.item;
  let tmp3 = null;
  if ("icon" === item.type) {
    let tmp4;
    if (cResult[0] !== item.tintStyle) {
      const obj2 = { source: AssetRegistryDefault, style: item.tintStyle };
      const tmp7 = FastImageDefault;
      const tmp8 = authStore3(tmp7, obj2);
      cResult[0] = item.tintStyle;
      cResult[1] = tmp8;
      tmp4 = tmp8;
    } else {
      tmp4 = cResult[1];
    }
    tmp3 = tmp4;
  }
  return tmp3;
}) : ((item) => {
  item = item.item;
  let tmp = null;
  if ("icon" === item.type) {
    const obj = { source: AssetRegistryDefault, style: item.tintStyle };
    const tmp5 = FastImageDefault;
    tmp = authStore3(tmp5, obj);
  }
  return tmp;
});
const __initData5 = { code: "function GuildsBarGuildFolderTsx7(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===\"\"+id&&!isDragTarget;sharedId.set(\"\"+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,\"animate-always\"):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,\"animate-always\"):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
const __initData6 = { code: "function GuildsBarGuildFolderTsx8(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===\"\"+id&&!isDragTarget;sharedId.set(\"\"+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult1 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let accessibilityActions;
  let badge;
  let childNodes;
  let color;
  let cutouts;
  let dragDropInProgress;
  let dragState;
  let first;
  let folderPreviewStyle;
  let foldersChanged;
  let hasGuildSelected;
  let hideExpandedChildren;
  let isDragPreview;
  let isDragTarget;
  let isMentionLowImportance;
  let itemSize;
  let mentionCount;
  let name;
  let onAccessibilityAction;
  let overState;
  let selectedPreviewId;
  let tintStyle;
  let tmp10;
  let tmp = id;
  const tmp2 = name;
  let obj = id(name[12]);
  const cResult = obj.c(92);
  id = id.id;
  const expanded = id.expanded;
  name = id.name;
  ({ color, childNodes } = id);
  ({ isDragPreview, hideExpandedChildren, foldersChanged } = id);
  let tmp4 = undefined !== isDragPreview && isDragPreview;
  const tmp5 = undefined !== hideExpandedChildren && hideExpandedChildren;
  let tmp6 = expanded;
  const tmpResult = tmp(tmp2[13]);
  let tmp7 = closure_18(tmpResult.useToken(expanded(tmp2[10]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  const guildPreviewWrapper = tmp7;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { disableSelectedColor: true, disableBGColor: true };
    let num = 0;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult9 = tmp(tmp2[24]);
  const guildsBarAnimatedWrapperStyles = tmpResult9.useGuildsBarAnimatedWrapperStyles(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [foldersChanged];
    let num2 = 1;
    cResult[1] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === childNodes) {
    let tmp12;
    let tmp14;
    if (cResult[3] === expanded) {
      tmp12 = cResult[4];
    }
    const tmpResult10 = tmp(tmp2[14]);
    const stateFromStoresObject = tmpResult10.useStateFromStoresObject(tmp10, tmp12);
    ({ mentionCount, isMentionLowImportance } = stateFromStoresObject);
    const _Symbol = Symbol;
    let unread = stateFromStoresObject.unread;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [folderPreviewStyle, SortedGuildStore];
      cResult[5] = items1;
      tmp14 = items1;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === childNodes) {
      if (cResult[7] === expanded) {
        let tmp17;
        let tmp18;
        if (cResult[8] === id) {
          tmp17 = cResult[9];
          tmp18 = cResult[10];
        }
        const tmpResult11 = tmp(tmp2[14]);
        const stateFromStoresObject1 = tmpResult11.useStateFromStoresObject(tmp14, tmp17, tmp18);
        ({ selectedPreviewId, hasGuildSelected } = stateFromStoresObject1);
        if (cResult[11] === isMentionLowImportance) {
          let tmp20;
          let tmp22;
          if (cResult[12] === mentionCount) {
            tmp20 = cResult[13];
          }
          ({ badge, cutouts } = tmp6(tmp2[25])(tmp20));
          const _Symbol2 = Symbol;
          tmp6(tmp2[25])(tmp20);
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [guildPreviewWrapper];
            cResult[14] = items2;
            tmp22 = items2;
          } else {
            tmp22 = cResult[14];
          }
          if (cResult[15] === childNodes) {
            let tmp24;
            let tmp25;
            if (cResult[16] === name) {
              tmp24 = cResult[17];
              tmp25 = cResult[18];
            }
            const tmpResult12 = tmp(tmp2[14]);
            const label = tmpResult12.useStateFromStores(tmp22, tmp24, tmp25, tmp6(tmp2[27])).label;
            const useToken = tmp(tmp2[13]).useToken;
            tmp(tmp2[13]);
            class B {
              constructor() {
                let num = 0;
                const guildId = SelectedGuildStore.getGuildId();
                const iter = childNodes[Symbol.iterator]();
                while (iter !== undefined) {
                  let tmp;
                  if (iter.next().id === guildId) {
                    tmp = guildId;
                    iter.return();
                    break;
                  } else {
                    let sum = num + 1;
                    num = sum;
                    if (4 <= sum) {
                      iter.return();
                      break;
                    }
                    break;
                  }
                  let flag = false;
                  if (!expanded) {
                    flag = false;
                    if (null != guildId) {
                      let guildsTree = SortedGuildStore.getGuildsTree();
                      let node = guildsTree.getNode(guildId);
                      let parentId;
                      if (node != null) {
                        parentId = node.parentId;
                      }
                      flag = parentId === id;
                    }
                  }
                  let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
                  return obj;
                }
              }
            }
            const tmpResult14 = tmp(tmp2[13]);
            const token = tmpResult14.useToken(tmp6(tmp2[10]).modules.mobile.GUILD_FOLDER_PREVIEW_OPACITY);
            if (cResult[19] === color) {
              if (cResult[20] === tmp31) {
                let tmp33;
                let tmp34;
                let tmp41;
                let tmp42;
                if (cResult[21] === token) {
                  tmp33 = cResult[22];
                  tmp34 = cResult[23];
                }
                if (cResult[24] !== tmp34) {
                  let obj3 = { tintColor: tmp34 };
                  cResult[24] = tmp34;
                  cResult[25] = obj3;
                  tmp41 = obj3;
                } else {
                  tmp41 = cResult[25];
                }
                if (cResult[26] !== tmp33) {
                  let obj4 = { backgroundColor: tmp33 };
                  cResult[26] = tmp33;
                  cResult[27] = obj4;
                  tmp42 = obj4;
                } else {
                  tmp42 = cResult[27];
                }
                if (cResult[28] === tmp41) {
                  let tmp43;
                  if (cResult[29] === tmp42) {
                    tmp43 = cResult[30];
                  }
                  ({ tintStyle, folderPreviewStyle } = tmp43);
                  if (cResult[31] === foldersChanged) {
                    let tmp44;
                    let tmp55;
                    if (cResult[32] === id) {
                      tmp44 = cResult[33];
                    }
                    if (expanded) {
                      let tmp56;
                      if (cResult[34] !== tintStyle) {
                        let obj5 = { type: "icon", tintStyle };
                        const items3 = [obj5];
                        cResult[34] = tintStyle;
                        cResult[35] = items3;
                        tmp56 = items3;
                      } else {
                        tmp56 = cResult[35];
                      }
                      tmp55 = tmp56;
                    } else {
                      let tmp45;
                      if (cResult[36] !== childNodes) {
                        const items4 = [];
                        let iter = childNodes[Symbol.iterator]();
                        const nextResult = iter.next();
                        while (iter !== undefined) {
                          if (nextResult.type === isDragTarget.GUILD) {
                            let arr = items4.push(tmp50.id);
                            if (items4.length >= 4) {
                              iter.return();
                              break;
                            }
                            cResult[36] = childNodes;
                            cResult[37] = items4;
                            tmp45 = items4;
                          }
                          continue;
                        }
                      } else {
                        tmp45 = cResult[37];
                      }
                      if (cResult[38] === tmp45) {
                        if (cResult[39] === selectedPreviewId) {
                          tmp55 = cResult[40];
                        }
                      }
                      const items5 = [{ type: "preview", guilds: tmp45, selectedGuildId: selectedPreviewId }];
                      const obj6 = { type: "preview", guilds: tmp45, selectedGuildId: selectedPreviewId };
                      cResult[38] = tmp45;
                      class B {
                        constructor() {
                          let num = 0;
                          const guildId = SelectedGuildStore.getGuildId();
                          const iter = childNodes[Symbol.iterator]();
                          while (iter !== undefined) {
                            let tmp;
                            if (iter.next().id === guildId) {
                              tmp = guildId;
                              iter.return();
                              break;
                            } else {
                              let sum = num + 1;
                              num = sum;
                              if (4 <= sum) {
                                iter.return();
                                break;
                              }
                              break;
                            }
                            let flag = false;
                            if (!expanded) {
                              flag = false;
                              if (null != guildId) {
                                let guildsTree = SortedGuildStore.getGuildsTree();
                                let node = guildsTree.getNode(guildId);
                                let parentId;
                                if (node != null) {
                                  parentId = node.parentId;
                                }
                                flag = parentId === id;
                              }
                            }
                            let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
                            return obj;
                          }
                        }
                      }
                      cResult[40] = items5;
                      tmp55 = items5;
                    }
                    if (cResult[41] === expanded) {
                      if (cResult[42] === folderPreviewStyle) {
                        const tmp59 = dragDropInProgress(id, tmp4);
                        isDragTarget = tmp59.isDragTarget;
                        ({ dragState, overState, itemSize, dragDropInProgress } = tmp59);
                        class B {
                          constructor() {
                            let num = 0;
                            const guildId = SelectedGuildStore.getGuildId();
                            const iter = childNodes[Symbol.iterator]();
                            while (iter !== undefined) {
                              let tmp;
                              if (iter.next().id === guildId) {
                                tmp = guildId;
                                iter.return();
                                break;
                              } else {
                                let sum = num + 1;
                                num = sum;
                                if (4 <= sum) {
                                  iter.return();
                                  break;
                                }
                                break;
                              }
                              let flag = false;
                              if (!expanded) {
                                flag = false;
                                if (null != guildId) {
                                  let guildsTree = SortedGuildStore.getGuildsTree();
                                  let node = guildsTree.getNode(guildId);
                                  let parentId;
                                  if (node != null) {
                                    parentId = node.parentId;
                                  }
                                  flag = parentId === id;
                                }
                              }
                              let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
                              return obj;
                            }
                          }
                        }
                        if (cResult[49] === tmp60) {
                          let tmp62;
                          if (cResult[50] === tmp61) {
                            tmp62 = cResult[51];
                          }
                          ({ accessibilityActions, onAccessibilityAction } = tmp62);
                          let _HermesInternal = HermesInternal;
                          const obj17 = id(name[20]);
                          const sharedValue = obj17.useSharedValue("" + id);
                          const tmp64 = id;
                          class B {
                            constructor() {
                              let num = 0;
                              const guildId = SelectedGuildStore.getGuildId();
                              const iter = childNodes[Symbol.iterator]();
                              while (iter !== undefined) {
                                let tmp;
                                if (iter.next().id === guildId) {
                                  tmp = guildId;
                                  iter.return();
                                  break;
                                } else {
                                  let sum = num + 1;
                                  num = sum;
                                  if (4 <= sum) {
                                    iter.return();
                                    break;
                                  }
                                  break;
                                }
                                let flag = false;
                                if (!expanded) {
                                  flag = false;
                                  if (null != guildId) {
                                    let guildsTree = SortedGuildStore.getGuildsTree();
                                    let node = guildsTree.getNode(guildId);
                                    let parentId;
                                    if (node != null) {
                                      parentId = node.parentId;
                                    }
                                    flag = parentId === id;
                                  }
                                }
                                let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
                                return obj;
                              }
                            }
                          }
                          if (cResult[52] === dragDropInProgress) {
                            if (cResult[53] === id) {
                              if (cResult[54] === isDragTarget) {
                                let tmp67;
                                if (cResult[55] === sharedValue) {
                                  tmp67 = cResult[56];
                                }
                                let _HermesInternal2 = HermesInternal;
                                const combined = "" + id;
                                if (cResult[57] === badge) {
                                  if (cResult[58] === childNodes) {
                                    if (cResult[59] === color) {
                                      if (cResult[60] === expanded) {
                                        if (cResult[61] === id) {
                                          let tmp72;
                                          if (cResult[62] === tmp4) {
                                            tmp72 = cResult[63];
                                          }
                                          if (cResult[64] === expanded) {
                                            if (cResult[65] === tmp5) {
                                              if (cResult[68] === tmp55) {
                                                let tmp80;
                                                if (cResult[69] === tmp57) {
                                                  tmp80 = cResult[70];
                                                }
                                                if (cResult[71] === accessibilityActions) {
                                                  if (cResult[72] === tmp44) {
                                                    if (cResult[73] === cutouts) {
                                                      if (cResult[74] === dragState) {
                                                        if (cResult[75] === expanded) {
                                                          if (cResult[76] === hasGuildSelected) {
                                                            if (cResult[77] === tmp4) {
                                                              if (cResult[78] === isDragTarget) {
                                                                if (cResult[79] === itemSize) {
                                                                  if (cResult[80] === label) {
                                                                    if (cResult[81] === tmp67) {
                                                                      if (cResult[82] === onAccessibilityAction) {
                                                                        if (cResult[83] === overState) {
                                                                          if (cResult[84] === sharedValue) {
                                                                            if (cResult[85] === combined) {
                                                                              if (cResult[86] === (!expanded && unread)) {
                                                                                if (cResult[87] === tmp72) {
                                                                                  if (cResult[88] === tmp76) {
                                                                                    if (cResult[89] === tmp80) {
                                                                                      let tmp85;
                                                                                      if (cResult[90] === guildsBarAnimatedWrapperStyles) {
                                                                                        tmp85 = cResult[91];
                                                                                      }
                                                                                      return tmp85;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj7 = { id: combined, draggedItemSize: itemSize, accessibilityActions, onAccessibilityAction, selected: hasGuildSelected, unread: null, circle: false, styles: guildsBarAnimatedWrapperStyles, label: null, isDragTarget, dragState, sharedId: sharedValue, cutouts, config: tmp44, isDragPreview: tmp4, overState, preventClipping: true, expanded, layout: tmp67, externalChildren: tmp72, expandedChildren: tmp76, children: tmp80 };
                                                class B {
                                                  constructor() {
                                                    let num = 0;
                                                    const guildId = SelectedGuildStore.getGuildId();
                                                    const iter = childNodes[Symbol.iterator]();
                                                    while (iter !== undefined) {
                                                      let tmp;
                                                      if (iter.next().id === guildId) {
                                                        tmp = guildId;
                                                        iter.return();
                                                        break;
                                                      } else {
                                                        let sum = num + 1;
                                                        num = sum;
                                                        if (4 <= sum) {
                                                          iter.return();
                                                          break;
                                                        }
                                                        break;
                                                      }
                                                      let flag = false;
                                                      if (!expanded) {
                                                        flag = false;
                                                        if (null != guildId) {
                                                          let guildsTree = SortedGuildStore.getGuildsTree();
                                                          let node = guildsTree.getNode(guildId);
                                                          let parentId;
                                                          if (node != null) {
                                                            parentId = node.parentId;
                                                          }
                                                          flag = parentId === id;
                                                        }
                                                      }
                                                      let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
                                                      return obj;
                                                    }
                                                  }
                                                }
                                                class Ue {
                                                  constructor(originY) {
                                                    let targetHeight;
                                                    let targetOriginY;
                                                    let value = dragDropInProgress.get();
                                                    if (value) {
                                                      const _HermesInternal = HermesInternal;
                                                      const value2 = closure_1_10.get();
                                                      value = value2 === "" + id;
                                                    }
                                                    if (value) {
                                                      value = !isDragTarget;
                                                    }
                                                    let tmp8 = id;
                                                    set = closure_1_10.set;
                                                    if (id == null) {
                                                      tmp8 = null;
                                                    }
                                                    const result = set("" + tmp8);
                                                    if (value) {
                                                      const obj = spring;
                                                      targetOriginY = obj.withSpring(originY.targetOriginY, closure_14, "animate-always");
                                                    } else {
                                                      targetOriginY = originY.targetOriginY;
                                                    }
                                                    const obj2 = { originY: targetOriginY, height: targetHeight };
                                                    if (value) {
                                                      const obj3 = spring;
                                                      targetHeight = obj3.withSpring(originY.targetHeight, closure_14, "animate-always");
                                                    } else {
                                                      targetHeight = originY.targetHeight;
                                                    }
                                                    return { animations: obj2, initialValues: { originY: originY.currentOriginY, height: originY.currentHeight } };
                                                  }
                                                }
                                                const tmp88 = closure_16(expanded(name[24]), obj7);
                                                cResult[71] = accessibilityActions;
                                                cResult[72] = tmp44;
                                                cResult[73] = cutouts;
                                                cResult[74] = dragState;
                                                cResult[75] = expanded;
                                                cResult[76] = hasGuildSelected;
                                                cResult[77] = tmp4;
                                                class H {
                                                  constructor() {
                                                    if (expanded) {
                                                      return { unread: false, mentionCount: 0, isMentionLowImportance: false };
                                                    } else {
                                                      const mutableGuildStates = GuildReadStateStore.getMutableGuildStates();
                                                      return childNodes.reduce((mentionCount, id) => {
                                                        if (null != id.id) {
                                                          let num;
                                                          if (closure_0[id.id] != null) {
                                                            num = tmp5.highImportanceMentionCount;
                                                          }
                                                          if (num == null) {
                                                            num = 0;
                                                          }
                                                          let num2;
                                                          if (closure_0[id.id] != null) {
                                                            num2 = tmp.lowImportanceMentionCount;
                                                          }
                                                          if (num2 == null) {
                                                            num2 = 0;
                                                          }
                                                          mentionCount.mentionCount = mentionCount.mentionCount + num + num2;
                                                          let flag = mentionCount.unread;
                                                          if (!flag) {
                                                            let unread;
                                                            if (closure_0[id.id] != null) {
                                                              unread = tmp2.unread;
                                                            }
                                                            flag = unread;
                                                          }
                                                          if (flag == null) {
                                                            flag = false;
                                                          }
                                                          mentionCount.unread = flag;
                                                          const isMentionLowImportance = mentionCount.isMentionLowImportance && 0 === num;
                                                          mentionCount.isMentionLowImportance = isMentionLowImportance;
                                                        }
                                                        return mentionCount;
                                                      }, { unread: false, mentionCount: 0, isMentionLowImportance: true });
                                                    }
                                                  }
                                                }
                                                cResult[78] = isDragTarget;
                                                cResult[79] = itemSize;
                                                cResult[80] = label;
                                                cResult[81] = tmp67;
                                                cResult[82] = onAccessibilityAction;
                                                cResult[83] = overState;
                                                cResult[84] = sharedValue;
                                                cResult[85] = combined;
                                                cResult[86] = !expanded && unread;
                                                cResult[87] = tmp72;
                                                cResult[88] = tmp76;
                                                cResult[89] = tmp80;
                                                cResult[90] = guildsBarAnimatedWrapperStyles;
                                                cResult[91] = tmp88;
                                                tmp85 = tmp88;
                                              }
                                              class B {
                                                constructor() {
                                                  let num = 0;
                                                  const guildId = SelectedGuildStore.getGuildId();
                                                  const iter = childNodes[Symbol.iterator]();
                                                  while (iter !== undefined) {
                                                    let tmp;
                                                    if (iter.next().id === guildId) {
                                                      tmp = guildId;
                                                      iter.return();
                                                      break;
                                                    } else {
                                                      let sum = num + 1;
                                                      num = sum;
                                                      if (4 <= sum) {
                                                        iter.return();
                                                        break;
                                                      }
                                                      break;
                                                    }
                                                    let flag = false;
                                                    if (!expanded) {
                                                      flag = false;
                                                      if (null != guildId) {
                                                        let guildsTree = SortedGuildStore.getGuildsTree();
                                                        let node = guildsTree.getNode(guildId);
                                                        let parentId;
                                                        if (node != null) {
                                                          parentId = node.parentId;
                                                        }
                                                        flag = parentId === id;
                                                      }
                                                    }
                                                    let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
                                                    return obj;
                                                  }
                                                }
                                              }
                                              class Ue {
                                                constructor(originY) {
                                                  let targetHeight;
                                                  let targetOriginY;
                                                  let value = dragDropInProgress.get();
                                                  if (value) {
                                                    const _HermesInternal = HermesInternal;
                                                    const value2 = closure_1_10.get();
                                                    value = value2 === "" + id;
                                                  }
                                                  if (value) {
                                                    value = !isDragTarget;
                                                  }
                                                  let tmp8 = id;
                                                  set = closure_1_10.set;
                                                  if (id == null) {
                                                    tmp8 = null;
                                                  }
                                                  const result = set("" + tmp8);
                                                  if (value) {
                                                    const obj = spring;
                                                    targetOriginY = obj.withSpring(originY.targetOriginY, closure_14, "animate-always");
                                                  } else {
                                                    targetOriginY = originY.targetOriginY;
                                                  }
                                                  const obj2 = { originY: targetOriginY, height: targetHeight };
                                                  if (value) {
                                                    const obj3 = spring;
                                                    targetHeight = obj3.withSpring(originY.targetHeight, closure_14, "animate-always");
                                                  } else {
                                                    targetHeight = originY.targetHeight;
                                                  }
                                                  return { animations: obj2, initialValues: { originY: originY.currentOriginY, height: originY.currentHeight } };
                                                }
                                              }
                                              cResult[69] = tmp57;
                                              cResult[70] = tmp84;
                                              tmp80 = tmp84;
                                            }
                                          }
                                          let tmp77;
                                          if (!tmp5) {
                                            const obj9 = { folderId: id, expanded };
                                            tmp77 = closure_16(expanded(tmp65[32]), obj9);
                                          }
                                          cResult[64] = expanded;
                                          cResult[65] = tmp5;
                                          cResult[66] = id;
                                          class B {
                                            constructor() {
                                              let num = 0;
                                              const guildId = SelectedGuildStore.getGuildId();
                                              const iter = childNodes[Symbol.iterator]();
                                              while (iter !== undefined) {
                                                let tmp;
                                                if (iter.next().id === guildId) {
                                                  tmp = guildId;
                                                  iter.return();
                                                  break;
                                                } else {
                                                  let sum = num + 1;
                                                  num = sum;
                                                  if (4 <= sum) {
                                                    iter.return();
                                                    break;
                                                  }
                                                  break;
                                                }
                                                let flag = false;
                                                if (!expanded) {
                                                  flag = false;
                                                  if (null != guildId) {
                                                    let guildsTree = SortedGuildStore.getGuildsTree();
                                                    let node = guildsTree.getNode(guildId);
                                                    let parentId;
                                                    if (node != null) {
                                                      parentId = node.parentId;
                                                    }
                                                    flag = parentId === id;
                                                  }
                                                }
                                                let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
                                                return obj;
                                              }
                                            }
                                          }
                                          cResult[67] = tmp77;
                                          class Ue {
                                            constructor(originY) {
                                              let targetHeight;
                                              let targetOriginY;
                                              let value = dragDropInProgress.get();
                                              if (value) {
                                                const _HermesInternal = HermesInternal;
                                                const value2 = closure_1_10.get();
                                                value = value2 === "" + id;
                                              }
                                              if (value) {
                                                value = !isDragTarget;
                                              }
                                              let tmp8 = id;
                                              set = closure_1_10.set;
                                              if (id == null) {
                                                tmp8 = null;
                                              }
                                              const result = set("" + tmp8);
                                              if (value) {
                                                const obj = spring;
                                                targetOriginY = obj.withSpring(originY.targetOriginY, closure_14, "animate-always");
                                              } else {
                                                targetOriginY = originY.targetOriginY;
                                              }
                                              const obj2 = { originY: targetOriginY, height: targetHeight };
                                              if (value) {
                                                const obj3 = spring;
                                                targetHeight = obj3.withSpring(originY.targetHeight, closure_14, "animate-always");
                                              } else {
                                                targetHeight = originY.targetHeight;
                                              }
                                              return { animations: obj2, initialValues: { originY: originY.currentOriginY, height: originY.currentHeight } };
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                let tmp73 = badge;
                                if (expanded) {
                                  tmp73 = badge;
                                  if (!tmp4) {
                                    const obj10 = { color, folderId: id, totalItems: childNodes.length };
                                    tmp73 = closure_16(closure_22, obj10);
                                  }
                                }
                                cResult[57] = badge;
                                class B {
                                  constructor() {
                                    let num = 0;
                                    const guildId = SelectedGuildStore.getGuildId();
                                    const iter = childNodes[Symbol.iterator]();
                                    while (iter !== undefined) {
                                      let tmp;
                                      if (iter.next().id === guildId) {
                                        tmp = guildId;
                                        iter.return();
                                        break;
                                      } else {
                                        let sum = num + 1;
                                        num = sum;
                                        if (4 <= sum) {
                                          iter.return();
                                          break;
                                        }
                                        break;
                                      }
                                      let flag = false;
                                      if (!expanded) {
                                        flag = false;
                                        if (null != guildId) {
                                          let guildsTree = SortedGuildStore.getGuildsTree();
                                          let node = guildsTree.getNode(guildId);
                                          let parentId;
                                          if (node != null) {
                                            parentId = node.parentId;
                                          }
                                          flag = parentId === id;
                                        }
                                      }
                                      let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
                                      return obj;
                                    }
                                  }
                                }
                                class Ue {
                                  constructor(originY) {
                                    let targetHeight;
                                    let targetOriginY;
                                    let value = dragDropInProgress.get();
                                    if (value) {
                                      const _HermesInternal = HermesInternal;
                                      const value2 = closure_1_10.get();
                                      value = value2 === "" + id;
                                    }
                                    if (value) {
                                      value = !isDragTarget;
                                    }
                                    let tmp8 = id;
                                    set = closure_1_10.set;
                                    if (id == null) {
                                      tmp8 = null;
                                    }
                                    const result = set("" + tmp8);
                                    if (value) {
                                      const obj = spring;
                                      targetOriginY = obj.withSpring(originY.targetOriginY, closure_14, "animate-always");
                                    } else {
                                      targetOriginY = originY.targetOriginY;
                                    }
                                    const obj2 = { originY: targetOriginY, height: targetHeight };
                                    if (value) {
                                      const obj3 = spring;
                                      targetHeight = obj3.withSpring(originY.targetHeight, closure_14, "animate-always");
                                    } else {
                                      targetHeight = originY.targetHeight;
                                    }
                                    return { animations: obj2, initialValues: { originY: originY.currentOriginY, height: originY.currentHeight } };
                                  }
                                }
                                cResult[60] = expanded;
                                cResult[61] = id;
                                cResult[62] = tmp4;
                                cResult[63] = tmp73;
                                tmp72 = tmp73;
                              }
                            }
                          }
                          class Ue {
                            constructor(originY) {
                              let targetHeight;
                              let targetOriginY;
                              let value = dragDropInProgress.get();
                              if (value) {
                                const _HermesInternal = HermesInternal;
                                const value2 = closure_1_10.get();
                                value = value2 === "" + id;
                              }
                              if (value) {
                                value = !isDragTarget;
                              }
                              let tmp8 = id;
                              set = closure_1_10.set;
                              if (id == null) {
                                tmp8 = null;
                              }
                              const result = set("" + tmp8);
                              if (value) {
                                const obj = spring;
                                targetOriginY = obj.withSpring(originY.targetOriginY, closure_14, "animate-always");
                              } else {
                                targetOriginY = originY.targetOriginY;
                              }
                              const obj2 = { originY: targetOriginY, height: targetHeight };
                              if (value) {
                                const obj3 = spring;
                                targetHeight = obj3.withSpring(originY.targetHeight, closure_14, "animate-always");
                              } else {
                                targetHeight = originY.targetHeight;
                              }
                              return { animations: obj2, initialValues: { originY: originY.currentOriginY, height: originY.currentHeight } };
                            }
                          }
                          Ue.__closure = { dragDropInProgress, sharedId: sharedValue, id, isDragTarget, withSpring: tmp64(name[16]).withSpring, TRANSITION_PHYSICS };
                          Ue.__workletHash = 15487218884708;
                          Ue.__initData = __initData5;
                          cResult[52] = dragDropInProgress;
                          cResult[53] = id;
                          cResult[54] = isDragTarget;
                          cResult[55] = sharedValue;
                          cResult[56] = Ue;
                          tmp67 = Ue;
                          const obj11 = { dragDropInProgress, sharedId: sharedValue, id, isDragTarget, withSpring: tmp64(name[16]).withSpring, TRANSITION_PHYSICS };
                        }
                        tmp63[0] = tmp61;
                        tmp63[1] = function onAccessibilityAction(arg0) {
                          let closure_0 = arg0;
                          const found = SortedGuildStore.find((label) => label.label === nativeEvent.nativeEvent.actionName);
                          if (found != null) {
                            const action = found.action;
                            if (action != null) {
                              action();
                            }
                          }
                        };
                        cResult[49] = tmp60;
                        cResult[50] = tmp61;
                        cResult[51] = tmp63;
                        tmp62 = tmp63;
                      }
                    }
                    function be(arg0) {
                      let items1;
                      const Fragment = react.Fragment;
                      const items = [guildPreviewWrapper.guildPreviewWrapper, ];
                      let tmp4;
                      const tmp3 = NativeViewDefault;
                      if (!expanded) {
                        tmp4 = folderPreviewStyle;
                      }
                      const obj = { children: items1 };
                      items[1] = tmp4;
                      items1 = [authStore3(tmp3, { style: items }), arg0];
                      return closure_17(Fragment, obj, "wrapper");
                    }
                    cResult[41] = expanded;
                    cResult[42] = folderPreviewStyle;
                    cResult[43] = tmp7.guildPreviewWrapper;
                    class B {
                      constructor() {
                        let num = 0;
                        const guildId = SelectedGuildStore.getGuildId();
                        const iter = childNodes[Symbol.iterator]();
                        while (iter !== undefined) {
                          let tmp;
                          if (iter.next().id === guildId) {
                            tmp = guildId;
                            iter.return();
                            break;
                          } else {
                            let sum = num + 1;
                            num = sum;
                            if (4 <= sum) {
                              iter.return();
                              break;
                            }
                            break;
                          }
                          let flag = false;
                          if (!expanded) {
                            flag = false;
                            if (null != guildId) {
                              let guildsTree = SortedGuildStore.getGuildsTree();
                              let node = guildsTree.getNode(guildId);
                              let parentId;
                              if (node != null) {
                                parentId = node.parentId;
                              }
                              flag = parentId === id;
                            }
                          }
                          let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
                          return obj;
                        }
                      }
                    }
                    cResult[44] = be;
                  }
                  const obj12 = {
                    onPress() {
                                      if (null != foldersChanged) {
                                        const value = foldersChanged.get();
                                        const _HermesInternal = HermesInternal;
                                        if (value.has("" + id)) {
                                          const _Set = Set;
                                          const self = this;
                                          const self2 = this;
                                          set = new Set(foldersChanged.get());
                                          const _HermesInternal2 = HermesInternal;
                                          set.add("" + id);
                                          const result = foldersChanged.set(set);
                                        }
                                      }
                                      const obj4 = HapticUtils;
                                      const result1 = obj4.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
                                      const obj5 = GuildActionCreatorsDefault;
                                      const result2 = obj5.toggleGuildFolderExpand(id);
                                    }
                  };
                  cResult[31] = foldersChanged;
                  class B {
                    constructor() {
                      let num = 0;
                      const guildId = SelectedGuildStore.getGuildId();
                      const iter = childNodes[Symbol.iterator]();
                      while (iter !== undefined) {
                        let tmp;
                        if (iter.next().id === guildId) {
                          tmp = guildId;
                          iter.return();
                          break;
                        } else {
                          let sum = num + 1;
                          num = sum;
                          if (4 <= sum) {
                            iter.return();
                            break;
                          }
                          break;
                        }
                        let flag = false;
                        if (!expanded) {
                          flag = false;
                          if (null != guildId) {
                            let guildsTree = SortedGuildStore.getGuildsTree();
                            let node = guildsTree.getNode(guildId);
                            let parentId;
                            if (node != null) {
                              parentId = node.parentId;
                            }
                            flag = parentId === id;
                          }
                        }
                        let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
                        return obj;
                      }
                    }
                  }
                  tmp44 = obj12;
                }
                const obj13 = { tintStyle: tmp41, folderPreviewStyle: tmp42 };
                cResult[28] = tmp41;
                class B {
                  constructor() {
                    let num = 0;
                    const guildId = SelectedGuildStore.getGuildId();
                    const iter = childNodes[Symbol.iterator]();
                    while (iter !== undefined) {
                      let tmp;
                      if (iter.next().id === guildId) {
                        tmp = guildId;
                        iter.return();
                        break;
                      } else {
                        let sum = num + 1;
                        num = sum;
                        if (4 <= sum) {
                          iter.return();
                          break;
                        }
                        break;
                      }
                      let flag = false;
                      if (!expanded) {
                        flag = false;
                        if (null != guildId) {
                          let guildsTree = SortedGuildStore.getGuildsTree();
                          let node = guildsTree.getNode(guildId);
                          let parentId;
                          if (node != null) {
                            parentId = node.parentId;
                          }
                          flag = parentId === id;
                        }
                      }
                      let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
                      return obj;
                    }
                  }
                }
                tmp43 = obj13;
              }
            }
            let tmp37 = color;
            const int2hex = tmp(tmp2[18]).int2hex;
            tmp(tmp2[18]);
            if (color == null) {
              tmp37 = closure_11;
            }
            const int2hexResult = int2hex(tmp37);
            let hexWithOpacityResult = tmp31;
            if (!closure_12(color)) {
              const tmpResult16 = tmp(tmp2[17]);
              hexWithOpacityResult = tmpResult16.hexWithOpacity(int2hexResult, token);
            }
            cResult[19] = color;
            cResult[20] = tmp31;
            cResult[21] = token;
            cResult[22] = hexWithOpacityResult;
            cResult[23] = int2hexResult;
            tmp33 = hexWithOpacityResult;
            tmp34 = int2hexResult;
          }
          const fn = function q() {
            let items;
            let obj2;
            if (null != name) {
              const obj3 = { count: 1, names: items, label: name };
              items = [name];
              return obj3;
            } else {
              const items1 = [];
              let num = 0;
              const obj4 = childNodes[Symbol.iterator]();
              while (obj4 !== undefined) {
                let guild = GuildStore.getGuild(tmp3.id);
                if (null != guild) {
                  let arr = items1.push(tmp7.name);
                }
                let sum = num + 1;
                num = sum;
                if (3 <= sum) {
                  obj4.return();
                  break;
                }
                let obj = { names: items1, count: childNodes.length, label: obj2.getListSummaryLabel(items1, childNodes.length) };
                obj2 = ListUtils;
                return obj;
              }
            }
          };
          const items6 = [, ];
          class B {
            constructor() {
              let num = 0;
              const guildId = SelectedGuildStore.getGuildId();
              const iter = childNodes[Symbol.iterator]();
              while (iter !== undefined) {
                let tmp;
                if (iter.next().id === guildId) {
                  tmp = guildId;
                  iter.return();
                  break;
                } else {
                  let sum = num + 1;
                  num = sum;
                  if (4 <= sum) {
                    iter.return();
                    break;
                  }
                  break;
                }
                let flag = false;
                if (!expanded) {
                  flag = false;
                  if (null != guildId) {
                    let guildsTree = SortedGuildStore.getGuildsTree();
                    let node = guildsTree.getNode(guildId);
                    let parentId;
                    if (node != null) {
                      parentId = node.parentId;
                    }
                    flag = parentId === id;
                  }
                }
                let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
                return obj;
              }
            }
          }
          items6[1] = childNodes;
          cResult[15] = childNodes;
          cResult[16] = name;
          cResult[17] = fn;
          cResult[18] = items6;
          tmp25 = items6;
          tmp24 = fn;
        }
        const obj14 = { mentionCount, isMentionLowImportance };
        class B {
          constructor() {
            let num = 0;
            const guildId = SelectedGuildStore.getGuildId();
            const iter = childNodes[Symbol.iterator]();
            while (iter !== undefined) {
              let tmp;
              if (iter.next().id === guildId) {
                tmp = guildId;
                iter.return();
                break;
              } else {
                let sum = num + 1;
                num = sum;
                if (4 <= sum) {
                  iter.return();
                  break;
                }
                break;
              }
              let flag = false;
              if (!expanded) {
                flag = false;
                if (null != guildId) {
                  let guildsTree = SortedGuildStore.getGuildsTree();
                  let node = guildsTree.getNode(guildId);
                  let parentId;
                  if (node != null) {
                    parentId = node.parentId;
                  }
                  flag = parentId === id;
                }
              }
              let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
              return obj;
            }
          }
        }
        cResult[13] = obj14;
        tmp20 = obj14;
      }
    }
    class B {
      constructor() {
        let num = 0;
        const guildId = SelectedGuildStore.getGuildId();
        const iter = childNodes[Symbol.iterator]();
        while (iter !== undefined) {
          let tmp;
          if (iter.next().id === guildId) {
            tmp = guildId;
            iter.return();
            break;
          } else {
            let sum = num + 1;
            num = sum;
            if (4 <= sum) {
              iter.return();
              break;
            }
            break;
          }
          let flag = false;
          if (!expanded) {
            flag = false;
            if (null != guildId) {
              let guildsTree = SortedGuildStore.getGuildsTree();
              let node = guildsTree.getNode(guildId);
              let parentId;
              if (node != null) {
                parentId = node.parentId;
              }
              flag = parentId === id;
            }
          }
          let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
          return obj;
        }
      }
    }
    const items7 = [, id, childNodes];
    cResult[6] = childNodes;
    cResult[7] = expanded;
    cResult[8] = id;
    cResult[9] = B;
    cResult[10] = items7;
    tmp18 = items7;
    tmp17 = B;
  }
  class H {
    constructor() {
      if (expanded) {
        return { unread: false, mentionCount: 0, isMentionLowImportance: false };
      } else {
        const mutableGuildStates = GuildReadStateStore.getMutableGuildStates();
        return childNodes.reduce((mentionCount, id) => {
          if (null != id.id) {
            let num;
            if (closure_0[id.id] != null) {
              num = tmp5.highImportanceMentionCount;
            }
            if (num == null) {
              num = 0;
            }
            let num2;
            if (closure_0[id.id] != null) {
              num2 = tmp.lowImportanceMentionCount;
            }
            if (num2 == null) {
              num2 = 0;
            }
            mentionCount.mentionCount = mentionCount.mentionCount + num + num2;
            let flag = mentionCount.unread;
            if (!flag) {
              let unread;
              if (closure_0[id.id] != null) {
                unread = tmp2.unread;
              }
              flag = unread;
            }
            if (flag == null) {
              flag = false;
            }
            mentionCount.unread = flag;
            const isMentionLowImportance = mentionCount.isMentionLowImportance && 0 === num;
            mentionCount.isMentionLowImportance = isMentionLowImportance;
          }
          return mentionCount;
        }, { unread: false, mentionCount: 0, isMentionLowImportance: true });
      }
    }
  }
  cResult[2] = childNodes;
  cResult[3] = expanded;
  cResult[4] = H;
  tmp12 = H;
}) : ((id) => {
  let accessibilityActions;
  let badge;
  let cutouts;
  let dragState;
  let isMentionLowImportance;
  let itemSize;
  let mentionCount;
  let obj13;
  let onAccessibilityAction;
  let overState;
  let tmp19Result;
  let tmp19Result2;
  let unread;
  id = id.id;
  const expanded = id.expanded;
  const name = id.name;
  const color = id.color;
  const childNodes = id.childNodes;
  let flag = id.isDragPreview;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = id.hideExpandedChildren;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const foldersChanged = id.foldersChanged;
  let selectedPreviewId;
  const tmp2 = name;
  let tmp = id;
  let obj = id(name[13]);
  let tmp3 = expanded;
  let tmp4 = closure_18(obj.useToken(expanded(name[10]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  const guildPreviewWrapper = tmp4;
  let obj2 = id(name[24]);
  const guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  let obj3 = id(name[14]);
  let items = [childNodes];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    if (expanded) {
      return { unread: false, mentionCount: 0, isMentionLowImportance: false };
    } else {
      const mutableGuildStates = GuildReadStateStore.getMutableGuildStates();
      return childNodes.reduce((mentionCount, id) => {
        if (null != id.id) {
          let num;
          if (closure_0[id.id] != null) {
            num = tmp5.highImportanceMentionCount;
          }
          if (num == null) {
            num = 0;
          }
          let num2;
          if (closure_0[id.id] != null) {
            num2 = tmp.lowImportanceMentionCount;
          }
          if (num2 == null) {
            num2 = 0;
          }
          mentionCount.mentionCount = mentionCount.mentionCount + num + num2;
          let flag = mentionCount.unread;
          if (!flag) {
            let unread;
            if (closure_0[id.id] != null) {
              unread = tmp2.unread;
            }
            flag = unread;
          }
          if (flag == null) {
            flag = false;
          }
          mentionCount.unread = flag;
          const isMentionLowImportance = mentionCount.isMentionLowImportance && 0 === num;
          mentionCount.isMentionLowImportance = isMentionLowImportance;
        }
        return mentionCount;
      }, { unread: false, mentionCount: 0, isMentionLowImportance: true });
    }
  });
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  let obj4 = id(name[14]);
  let items1 = [guildPreviewWrapper, selectedPreviewId];
  let items2 = [expanded, id, childNodes];
  const stateFromStoresObject1 = obj4.useStateFromStoresObject(items1, () => {
    let num = 0;
    const guildId = SelectedGuildStore.getGuildId();
    const iter = childNodes[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp;
      if (iter.next().id === guildId) {
        tmp = guildId;
        iter.return();
        break;
      } else {
        let sum = num + 1;
        num = sum;
        if (4 <= sum) {
          iter.return();
          break;
        }
        break;
      }
      let flag = false;
      if (!expanded) {
        flag = false;
        if (null != guildId) {
          let guildsTree = SortedGuildStore.getGuildsTree();
          let node = guildsTree.getNode(guildId);
          let parentId;
          if (node != null) {
            parentId = node.parentId;
          }
          flag = parentId === id;
        }
      }
      let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
      return obj;
    }
  }, items2);
  selectedPreviewId = stateFromStoresObject1.selectedPreviewId;
  const hasGuildSelected = stateFromStoresObject1.hasGuildSelected;
  let tmp8 = expanded(name[25])({ mentionCount, isMentionLowImportance });
  ({ badge, cutouts } = tmp8);
  let obj5 = id(name[14]);
  const items3 = [foldersChanged];
  const items4 = [name, childNodes];
  const label = obj5.useStateFromStores(items3, () => {
    let items;
    let obj2;
    if (null != name) {
      const obj3 = { count: 1, names: items, label: name };
      items = [name];
      return obj3;
    } else {
      const items1 = [];
      let num = 0;
      const obj4 = childNodes[Symbol.iterator]();
      while (obj4 !== undefined) {
        let guild = GuildStore.getGuild(tmp3.id);
        if (null != guild) {
          let arr = items1.push(tmp7.name);
        }
        let sum = num + 1;
        num = sum;
        if (3 <= sum) {
          obj4.return();
          break;
        }
        let obj = { names: items1, count: childNodes.length, label: obj2.getListSummaryLabel(items1, childNodes.length) };
        obj2 = ListUtils;
        return obj;
      }
    }
  }, items4, expanded(name[27])).label;
  const obj6 = id(name[13]);
  const token = obj6.useToken(expanded(name[10]).colors.GUILD_FOLDER_BACKGROUND);
  const obj7 = id(name[13]);
  const token1 = obj7.useToken(expanded(name[10]).modules.mobile.GUILD_FOLDER_PREVIEW_OPACITY);
  const items5 = [color, token, token1];
  const memo = color.useMemo(() => {
    let hexWithOpacityResult;
    let tmp5 = color;
    const int2hex = utils_ColorUtils.int2hex;
    utils_ColorUtils;
    if (color == null) {
      tmp5 = unpackModuleId;
    }
    const int2hexResult = int2hex(tmp5);
    const obj = { tintStyle: { tintColor: int2hexResult }, folderPreviewStyle: { backgroundColor: hexWithOpacityResult } };
    if (isDragTarget(color)) {
      hexWithOpacityResult = token;
    } else {
      const tmpResult = ColorUtils;
      hexWithOpacityResult = tmpResult.hexWithOpacity(int2hexResult, token1);
    }
    return obj;
  }, items5);
  const tintStyle = memo.tintStyle;
  const folderPreviewStyle = memo.folderPreviewStyle;
  const items6 = [id, foldersChanged];
  const items7 = [expanded, childNodes, tintStyle, selectedPreviewId];
  const memo1 = color.useMemo(() => ({
    onPress() {
      if (null != foldersChanged) {
        const value = foldersChanged.get();
        const _HermesInternal = HermesInternal;
        if (value.has("" + closure_1_0)) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set(foldersChanged.get());
          const _HermesInternal2 = HermesInternal;
          set.add("" + closure_1_0);
          const result = foldersChanged.set(set);
        }
      }
      const obj4 = id(name[28]);
      const result1 = obj4.triggerHapticFeedback(id(name[28]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj5 = expanded(name[29]);
      const result2 = obj5.toggleGuildFolderExpand(closure_1_0);
    }
  }), items6);
  const items8 = [expanded, tmp4.guildPreviewWrapper, folderPreviewStyle];
  const memo2 = color.useMemo(() => {
    if (expanded) {
      const items = [{ type: "icon", tintStyle }];
      return items;
    } else {
      const items1 = [];
      const iter = childNodes[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult.type === GuildsNodeType.GUILD) {
          let arr = items1.push(tmp7.id);
          if (items1.length >= 4) {
            iter.return();
            break;
          }
          let obj = { type: "preview", guilds: items1, selectedGuildId: selectedPreviewId };
          let items2 = [obj];
          return items2;
        }
        continue;
      }
    }
  }, items7);
  const callback = color.useCallback((arg0) => {
    let items1;
    const Fragment = react.Fragment;
    const items = [guildPreviewWrapper.guildPreviewWrapper, ];
    let tmp4;
    const tmp3 = NativeViewDefault;
    if (!expanded) {
      tmp4 = folderPreviewStyle;
    }
    const obj = { children: items1 };
    items[1] = tmp4;
    items1 = [authStore3(tmp3, { style: items }), arg0];
    return closure_17(Fragment, obj, "wrapper");
  }, items8);
  const tmp15 = token1(id, flag);
  const isDragTarget = tmp15.isDragTarget;
  const dragDropInProgress = tmp15.dragDropInProgress;
  const items9 = [id];
  ({ dragState, overState, itemSize } = tmp15);
  const memo3 = color.useMemo(() => {
    const obj = GuildsBarFolderMenuItems;
    const guildFolderMenuItems = obj.getGuildFolderMenuItems(id);
    const obj2 = {
      accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        let closure_0 = arg0;
        const found = guildFolderMenuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      }
    };
    return obj2;
  }, items9);
  ({ accessibilityActions, onAccessibilityAction } = memo3);
  const obj8 = id(name[20]);
  const sharedValue = obj8.useSharedValue("" + id);
  class R {
    constructor(originY) {
      let targetHeight;
      let targetOriginY;
      let value = dragDropInProgress.get();
      if (value) {
        const _HermesInternal = HermesInternal;
        const value2 = sharedValue.get();
        value = value2 === "" + id;
      }
      if (value) {
        value = !isDragTarget;
      }
      let tmp8 = id;
      set = sharedValue.set;
      if (id == null) {
        tmp8 = null;
      }
      const result = set("" + tmp8);
      if (value) {
        const obj = spring;
        targetOriginY = obj.withSpring(originY.targetOriginY, closure_14, "animate-always");
      } else {
        targetOriginY = originY.targetOriginY;
      }
      const obj2 = { originY: targetOriginY, height: targetHeight };
      if (value) {
        const obj3 = spring;
        targetHeight = obj3.withSpring(originY.targetHeight, closure_14, "animate-always");
      } else {
        targetHeight = originY.targetHeight;
      }
      return { animations: obj2, initialValues: { originY: originY.currentOriginY, height: originY.currentHeight } };
    }
  }
  R.__closure = { dragDropInProgress, sharedId: sharedValue, id, isDragTarget, withSpring: id(name[16]).withSpring, TRANSITION_PHYSICS: sharedValue };
  R.__workletHash = 10548965010347;
  R.__initData = __initData6;
  const items10 = [id, sharedValue, isDragTarget, dragDropInProgress];
  ({ dragDropInProgress, sharedId: sharedValue, id, isDragTarget, withSpring: id(name[16]).withSpring, TRANSITION_PHYSICS: sharedValue });
  const callback1 = color.useCallback(R, items10);
  const obj10 = { id: "" + id, draggedItemSize: itemSize, accessibilityActions, onAccessibilityAction, selected: hasGuildSelected, unread: !expanded && unread, circle: false, styles: guildsBarAnimatedWrapperStyles, label, isDragTarget, dragState, sharedId: sharedValue, cutouts, config: memo1, isDragPreview: flag, overState, preventClipping: true, expanded, layout: callback1, externalChildren: tmp19Result, expandedChildren: tmp19Result2, children: closure_16(tmp(tmp2[21]).TransitionGroup, obj13) };
  tmp19Result = badge;
  const tmp20 = expanded(name[24]);
  if (expanded) {
    tmp19Result = badge;
    if (!flag) {
      const obj11 = { color, folderId: id, totalItems: childNodes.length };
      tmp19Result = closure_16(closure_22, obj11);
    }
  }
  tmp19Result2 = undefined;
  if (!flag2) {
    const obj12 = { folderId: id, expanded };
    tmp19Result2 = closure_16(tmp3(tmp2[32]), obj12);
  }
  obj13 = { renderItem: renderGuildFolderContent, getItemKey, items: memo2, wrapChildren: callback };
  return closure_16(tmp20, obj10);
}));
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildFolder.tsx");

export default memoResult1;
export const GuildsBarGuildFolderBG = memoResult;