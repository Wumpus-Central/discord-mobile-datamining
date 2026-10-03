// discord_app/modules/guilds_bar/native/GuildsBarGuildFolder.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import useToken2 from "../../../design/tokens/native/useToken.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import _modDef5815 from "../../../../_runtime/metro/05815__.js";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import NativeViewDefault from "../../core/native/NativeView.tsx";
import ReanimatedNativeViewDefault from "../../core/native/ReanimatedNativeView.tsx";
import ListUtils from "../../../utils/ListUtils.tsx";
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";

const GuildIconDefault = GuildIcon;

require = fn;
function getItemKey(type) {
  return type.type;
}
function renderGuildFolderContent(arg0, type, state, cleanUp) {
  type = type.type;
  if ("icon" === type) {
    const obj2 = { fromTop: true, cleanUp, state, children: null };
    const obj3 = { item: type };
    obj2.children = closure_16(closure_29, obj3);
    return closure_16(closure_27, obj2, arg0);
  } else if ("preview" === type) {
    let obj = { cleanUp, state, children: null };
    const guilds = type.guilds;
    obj.children = guilds.map((guildId, index) => {
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
          tmp2 = value2(closure_19, obj, guildId);
        }
      }
      return tmp2;
    });
    return closure_16(closure_27, obj, arg0);
  }
}
const GuildsNodeType = fn(5616).GuildsNodeType;
const GuildsBarDnDStore = fn(16221);
({ useItemDragState: closure_9, useFolderBGHeightOffset: c10 } = GuildsBarDnDStore);
let GuildsBarConstants = fn(16226);
({
  DEFAULT_FOLDER_COLOR: closure_11,
  isDefaultFolderColor: closure_12,
  normalizeFolderColor: map1,
} = GuildsBarConstants);
GuildsBarConstants = fn(16218);
({ TRANSITION_PHYSICS: closure_14, FOLDER_SPRING_PHYSICS: closure_15 } = GuildsBarConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4890);
let closure_18 = createStyles.createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 48;
  }
  let num2 = arg1;
  if (arg1 === undefined) {
    num2 = 0;
  }
  const obj = {
    folderBackground: null,
    folderScaleContainer: null,
    guildPreviewIcon: null,
    guildPreviewIconUnselected: null,
    guildPreview0: null,
    guildPreview1: null,
    guildPreview2: null,
    guildPreview3: null,
    guildPreviewWrapper: null,
  };
  const rect = {
    position: "absolute",
    top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN,
    left: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_LEFT,
    backgroundColor: nativeDefault.colors.GUILD_FOLDER_BACKGROUND,
    borderTopLeftRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS,
    borderTopRightRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS,
    borderBottomLeftRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS,
    borderBottomRightRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS,
    width: num + num2,
  };
  obj.folderBackground = rect;
  obj.folderScaleContainer = {
    position: "absolute",
    top: 0,
    left: 0,
    width: num,
    height: num,
    justifyContent: "center",
    alignItems: "center",
  };
  obj.guildPreviewIcon = {
    position: "absolute",
    margin: nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN,
  };
  const obj2 = { position: "absolute", margin: nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN };
  obj.guildPreviewIconUnselected = { borderRadius: nativeDefault.radii.sm };
  obj.guildPreview0 = { top: 0, left: 0 };
  obj.guildPreview1 = { top: 0, right: 0 };
  obj.guildPreview2 = { bottom: 0, left: 0 };
  obj.guildPreview3 = { bottom: 0, right: 0 };
  obj.guildPreviewWrapper = { position: "absolute", width: num, height: num };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(576).c(12);
      guildId = guildId.guildId;
      ({ position, selected } = guildId);
      const obj = guildId(576);
      const tmp5 = closure_18(guildId(4580).useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function l() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const obj2 = guildId(4580);
      const stateFromStores = guildId(504).useStateFromStores(first, tmp8);
      if (0 === position) {
        let guildPreview3 = tmp5.guildPreview0;
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
          if (cResult[5] === prop) {
            let tmp12 = cResult[6];
          }
          if (cResult[7] === stateFromStores) {
            if (cResult[8] === selected) {
              if (cResult[9] === combined) {
                if (cResult[10] === tmp12) {
                  let tmp13 = cResult[11];
                }
                return tmp13;
              }
            }
          }
          const obj3 = { style: tmp12, guild: stateFromStores, size: tmp(5971).GuildIconSizes.XXSMALL, selected };
          const tmp16 = closure_16(GuildIconDefault, obj3, combined);
          cResult[7] = stateFromStores;
          cResult[8] = selected;
          cResult[9] = combined;
          cResult[10] = tmp12;
          cResult[11] = tmp16;
          tmp13 = tmp16;
          const tmp4Result = GuildIconDefault;
        }
      }
      const items1 = [tmp5.guildPreviewIcon, prop, guildPreview3];
      cResult[3] = guildPreview3;
      cResult[4] = tmp5.guildPreviewIcon;
      cResult[5] = prop;
      cResult[6] = items1;
      tmp12 = items1;
      const tmpResult = guildId(504);
    }
  : (arg0) => {
      ({ guildId: require, position, selected } = arg0);
      const tmp4 = closure_18(useToken2.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
      const items = [GuildStore];
      const stateFromStores = initialize.useStateFromStores(items, () => GuildStore.getGuild(_require));
      if (0 === position) {
        let guildPreview3 = tmp4.guildPreview0;
      } else if (1 === position) {
        guildPreview3 = tmp4.guildPreview1;
      } else if (2 === position) {
        guildPreview3 = tmp4.guildPreview2;
      } else if (3 === position) {
        guildPreview3 = tmp4.guildPreview3;
      }
      const items1 = [tmp4.guildPreviewIcon, ,];
      let prop;
      if (!selected) {
        prop = tmp4.guildPreviewIconUnselected;
      }
      const tmp3Result = GuildIconDefault;
      items1[1] = prop;
      items1[2] = guildPreview3;
      return closure_16(
        tmp3Result,
        { style: items1, guild: stateFromStores, size: GuildIcon.GuildIconSizes.XXSMALL, selected },
        "" + selected,
      );
    };
const __initData = {
  code: 'function GuildsBarGuildFolderTsx1(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,"animate-always")},initialValues:{height:values.currentHeight}};}',
};
const __initData2 = {
  code: "function GuildsBarGuildFolderTsx2(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};}",
};
ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(12);
        ({ color, folderId, totalItems } = arg0);
        const token = useToken2.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
        const token1 = useToken2.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN);
        const tmp7 = closure_18(
          token,
          useToken2.useToken(nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET),
        );
        const sum = token + token1 + (token + 2 * token1) * totalItems;
        const sum1 = sum + v65535(folderId);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function o(height) {
            const obj = { animations: null, initialValues: null };
            const obj2 = {
              height: require("spring").withSpring(height.targetHeight, TRANSITION_PHYSICS, "animate-always"),
            };
            obj.animations = obj2;
            obj.initialValues = { height: height.currentHeight };
            return obj;
          };
          const obj5 = { withSpring: spring.withSpring, TRANSITION_PHYSICS };
          fn.__closure = obj5;
          fn.__workletHash = 11528904160406;
          fn.__initData = __initData;
          cResult[0] = fn;
          let first = fn;
        } else {
          first = cResult[0];
        }
        const token2 = useToken2.useToken(nativeDefault.modules.mobile.GUILD_FOLDER_COLOR_OPACITY);
        if (cResult[1] === color) {
          if (cResult[6] !== sum1) {
            const obj6 = { height: sum1 };
            cResult[6] = sum1;
            cResult[7] = obj6;
            let tmp19 = obj6;
          } else {
            tmp19 = cResult[7];
          }
          if (cResult[8] === tmp14) {
            if (cResult[9] === tmp7.folderBackground) {
              if (cResult[10] === tmp19) {
                let tmp20 = cResult[11];
              }
              return tmp20;
            }
          }
          const obj7 = { pointerEvents: "none", collapsable: false, layout: first, style: null };
          const items = [tmp7.folderBackground, tmp14, tmp19];
          obj7.style = items;
          const tmp22 = value2(ReanimatedNativeViewDefault, obj7);
          cResult[8] = tmp14;
          cResult[9] = tmp7.folderBackground;
          cResult[10] = tmp19;
          cResult[11] = tmp22;
          tmp20 = tmp22;
        }
        const tmp15 = __initData2(color);
        if (null == tmp15) {
          cResult[1] = color;
          cResult[2] = token2;
          cResult[3] = undefined;
        } else {
          const tmpResult3 = ColorUtils;
          const hexWithOpacityResult = tmpResult3.hexWithOpacity(utils_ColorUtils.int2hex(tmp15), token2);
          if (cResult[4] !== hexWithOpacityResult) {
            const obj8 = { backgroundColor: hexWithOpacityResult };
            cResult[4] = hexWithOpacityResult;
            cResult[5] = obj8;
          }
          const tmpResult4 = utils_ColorUtils;
        }
        const tmpResult = useToken2;
      }
    : (color) => {
        color = color.color;
        let token2;
        ({ folderId, totalItems } = color);
        const token = color(4580).useToken(token2(587).modules.mobile.GUILD_BAR_ITEM_SIZE);
        let obj = color(4580);
        const token1 = color(4580).useToken(token2(587).modules.mobile.GUILD_BAR_ITEM_MARGIN);
        let obj2 = color(4580);
        const obj3 = color(4580);
        const fn = function s(height) {
          const obj = { animations: null, initialValues: null };
          const obj2 = {
            height: color(dependencyMap[16]).withSpring(height.targetHeight, TRANSITION_PHYSICS, "animate-always"),
          };
          obj.animations = obj2;
          obj.initialValues = { height: height.currentHeight };
          return obj;
        };
        const obj4 = { withSpring: null, TRANSITION_PHYSICS: null };
        const tmp3 = closure_18(
          token,
          color(4580).useToken(token2(587).modules.mobile.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET),
        );
        obj4.withSpring = color(5597).withSpring;
        obj4.TRANSITION_PHYSICS = TRANSITION_PHYSICS;
        fn.__closure = obj4;
        fn.__workletHash = 15799331931829;
        fn.__initData = __initData2;
        const callback = noop.useCallback(fn, []);
        const tmp4 = closure_10(folderId);
        token2 = color(4580).useToken(token2(587).modules.mobile.GUILD_FOLDER_COLOR_OPACITY);
        const items = [color, token2];
        const memo = noop.useMemo(() => {
          const tmp = __initData2(color);
          if (null != tmp) {
            const obj = { backgroundColor: null };
            const obj2 = ColorUtils;
            obj.backgroundColor = obj2.hexWithOpacity(utils_ColorUtils.int2hex(tmp), token2);
            return obj;
          }
        }, items);
        const obj6 = { pointerEvents: "none", collapsable: false, layout: callback, style: null };
        const items1 = [
          tmp3.folderBackground,
          memo,
          { height: token + token1 + (token + 2 * token1) * totalItems + tmp4 },
        ];
        obj6.style = items1;
        return closure_16(token2(6570), obj6);
      },
);
const __initData3 = {
  code: "function GuildsBarGuildFolderTsx3(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,guildItemSize}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}",
};
let closure_24 = {
  code: "function GuildsBarGuildFolderTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
const __initData4 = {
  code: "function GuildsBarGuildFolderTsx5(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,guildItemSize}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}",
};
let closure_26 = {
  code: "function GuildsBarGuildFolderTsx6(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}",
};
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      const cResult = cleanUp(576).c(10);
      ({ children, fromTop, cleanUp } = state);
      state = state.state;
      dependencyMap = tmp4;
      let obj = cleanUp(576);
      const token = cleanUp(4580).useToken(state(587).modules.mobile.GUILD_BAR_ITEM_SIZE);
      const tmp7 = closure_18(token);
      const tmp5 = state;
      const tmpResult = cleanUp(4580);
      let num = 0;
      if (state === cleanUp(4589).TransitionStates.MOUNTED) {
        num = 1;
      }
      const sharedValue = cleanUp(4612).useSharedValue(num);
      const tmpResult3 = cleanUp(4612);
      let fn = function o() {
        let obj = { opacity: null, transform: null };
        value = sharedValue.get();
        const fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = state === cleanUp(4589).TransitionStates.YEETED;
          }
          if (tmp) {
            cleanUp(4612).runOnJS(closure_1_0)();
            const obj = cleanUp(4612);
          }
        };
        const obj2 = spring;
        fn.__closure = {
          state,
          TransitionStates: native.TransitionStates,
          runOnJS: ReanimatedRexport.runOnJS,
          cleanUp,
        };
        fn.__workletHash = 9309093779169;
        fn.__initData = __initData;
        obj.opacity = obj2.withSpring(value, FOLDER_SPRING_PHYSICS, undefined, fn);
        const obj4 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
        let num = 1;
        if (1 === sharedValue.get()) {
          const obj6 = { translateY: obj5.withSpring(0, FOLDER_SPRING_PHYSICS) };
          const items = [obj6];
          if (num !== sharedValue.get()) {
            let num2 = 1.3;
            if (dependencyMap) {
              num2 = 0.3;
            }
            num = num2;
          }
          const obj7 = { scale: spring.withSpring(num, FOLDER_SPRING_PHYSICS) };
          items[1] = obj7;
          obj.transform = items;
          return obj;
        }
        obj5 = spring;
      };
      const tmpResult4 = cleanUp(4612);
      fn.__closure = {
        withSpring: cleanUp(5597).withSpring,
        visible: sharedValue,
        FOLDER_SPRING_PHYSICS,
        state,
        TransitionStates: cleanUp(4589).TransitionStates,
        runOnJS: cleanUp(4612).runOnJS,
        cleanUp,
        fromTop: undefined !== fromTop && fromTop,
        guildItemSize: token,
      };
      fn.__workletHash = 6656244933777;
      fn.__initData = __initData3;
      const animatedStyle = tmpResult4.useAnimatedStyle(fn);
      if (cResult[0] === state) {
        if (cResult[1] === sharedValue) {
          let tmp10 = cResult[2];
          let tmp11 = cResult[3];
        }
        const effect = token.useEffect(tmp10, tmp11);
        if (cResult[4] === animatedStyle) {
          if (cResult[5] === tmp7.folderScaleContainer) {
            let tmp14 = cResult[6];
          }
          if (cResult[7] === children) {
            if (cResult[8] === tmp14) {
              let tmp15 = cResult[9];
            }
            return tmp15;
          }
          const obj3 = { style: tmp14, children };
          const tmp17 = closure_16(tmp5(6570), obj3);
          cResult[7] = children;
          cResult[8] = tmp14;
          cResult[9] = tmp17;
          tmp15 = tmp17;
        }
        let items = [animatedStyle, tmp7.folderScaleContainer];
        cResult[4] = animatedStyle;
        cResult[5] = tmp7.folderScaleContainer;
        cResult[6] = items;
        tmp14 = items;
      }
      const fn2 = function l() {
        let num = 1;
        if (state === native.TransitionStates.YEETED) {
          num = 0;
        }
        const result = sharedValue.set(num);
      };
      const items1 = [state, sharedValue];
      cResult[0] = state;
      cResult[1] = sharedValue;
      cResult[2] = fn2;
      cResult[3] = items1;
      tmp11 = items1;
      tmp10 = fn2;
      let obj2 = {
        withSpring: cleanUp(5597).withSpring,
        visible: sharedValue,
        FOLDER_SPRING_PHYSICS,
        state,
        TransitionStates: cleanUp(4589).TransitionStates,
        runOnJS: cleanUp(4612).runOnJS,
        cleanUp,
        fromTop: undefined !== fromTop && fromTop,
        guildItemSize: token,
      };
    }
  : (children) => {
      let flag = children.fromTop;
      if (flag === undefined) {
        flag = false;
      }
      const cleanUp = children.cleanUp;
      state = children.state;
      let sharedValue;
      const token = flag(state[13]).useToken(cleanUp(state[10]).modules.mobile.GUILD_BAR_ITEM_SIZE);
      let obj = flag(state[13]);
      const tmp3 = cleanUp;
      const tmp5 = closure_18(token);
      let num = 0;
      if (state === flag(state[21]).TransitionStates.MOUNTED) {
        num = 1;
      }
      sharedValue = flag(state[20]).useSharedValue(num);
      let obj2 = flag(state[20]);
      let fn = function u() {
        let obj = { opacity: null, transform: null };
        value = sharedValue.get();
        const fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = closure_1_2 === flag(state[21]).TransitionStates.YEETED;
          }
          if (tmp) {
            flag(state[20]).runOnJS(cleanUp)();
            const obj = flag(state[20]);
          }
        };
        const obj2 = spring;
        fn.__closure = {
          state,
          TransitionStates: native.TransitionStates,
          runOnJS: ReanimatedRexport.runOnJS,
          cleanUp,
        };
        fn.__workletHash = 2330476013541;
        fn.__initData = __initData;
        obj.opacity = obj2.withSpring(value, FOLDER_SPRING_PHYSICS, undefined, fn);
        const obj4 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
        let num = 1;
        if (1 === sharedValue.get()) {
          const obj6 = { translateY: obj5.withSpring(0, FOLDER_SPRING_PHYSICS) };
          const items = [obj6];
          if (num !== sharedValue.get()) {
            let num2 = 1.3;
            if (flag) {
              num2 = 0.3;
            }
            num = num2;
          }
          const obj7 = { scale: spring.withSpring(num, FOLDER_SPRING_PHYSICS) };
          items[1] = obj7;
          obj.transform = items;
          return obj;
        }
        obj5 = spring;
      };
      const tmpResult = flag(state[20]);
      fn.__closure = {
        withSpring: flag(state[16]).withSpring,
        visible: sharedValue,
        FOLDER_SPRING_PHYSICS,
        state,
        TransitionStates: flag(state[21]).TransitionStates,
        runOnJS: flag(state[20]).runOnJS,
        cleanUp,
        fromTop: flag,
        guildItemSize: token,
      };
      fn.__workletHash = 2276176184081;
      fn.__initData = __initData4;
      let items = [state, sharedValue];
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      const effect = token.useEffect(() => {
        let num = 1;
        if (state === native.TransitionStates.YEETED) {
          num = 0;
        }
        const result = sharedValue.set(num);
      }, items);
      let obj4 = { style: null, children: children.children };
      const items1 = [animatedStyle, tmp5.folderScaleContainer];
      obj4.style = items1;
      return closure_16(tmp3(state[19]), obj4);
    };
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (item) => {
      let tintStyle = dependencyMap;
      const cResult = c.c(2);
      let tintStyle2 = item.item;
      if ("icon" !== tintStyle2.type) {
        return null;
      } else if (cResult[0] !== tintStyle2.tintStyle) {
        const obj2 = { source: _modDef5815, style: null };
        tintStyle = tintStyle2.tintStyle;
        obj2.style = tintStyle;
        const tmp6 = value2(FastImageDefault, obj2);
        tintStyle2 = tintStyle2.tintStyle;
        cResult[0] = tintStyle2;
        cResult[1] = tmp6;
      }
    }
  : (item) => {
      item = item.item;
      let tmp = null;
      if ("icon" === item.type) {
        const obj = { source: _modDef5815, style: item.tintStyle };
        tmp = value2(FastImageDefault, obj);
      }
      return tmp;
    };
let closure_31 = {
  code: 'function GuildsBarGuildFolderTsx7(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===""+id&&!isDragTarget;sharedId.set(""+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,"animate-always"):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,"animate-always"):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}',
};
const __initData5 = {
  code: "function GuildsBarGuildFolderTsx8(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===\"\"+id&&!isDragTarget;sharedId.set(\"\"+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}",
};
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildFolder.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (id) => {
        const cResult = id(name[12]).c(92);
        id = id.id;
        const expanded = id.expanded;
        name = id.name;
        ({ color, childNodes } = id);
        ({ isDragPreview, hideExpandedChildren, foldersChanged } = id);
        let obj = id(name[12]);
        let tmp4 = undefined !== isDragPreview && isDragPreview;
        let tmp6 = closure_18(id(name[13]).useToken(expanded(name[10]).modules.mobile.GUILD_BAR_ITEM_SIZE));
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { disableSelectedColor: true, disableBGColor: true };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        const tmpResult = id(name[13]);
        id(name[24]).useGuildsBarAnimatedWrapperStyles(first);
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [foldersChanged];
          cResult[1] = items;
          let tmp9 = items;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] === childNodes) {
          if (cResult[3] === expanded) {
            let tmp11 = cResult[4];
          }
          const stateFromStoresObject = tmp(tmp2[14]).useStateFromStoresObject(tmp9, tmp11);
          ({ mentionCount, isMentionLowImportance } = stateFromStoresObject);
          const _Symbol = Symbol;
          let unread = stateFromStoresObject.unread;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            let items1 = [folderPreviewStyle, SortedGuildStore];
            cResult[5] = items1;
            let tmp13 = items1;
          } else {
            tmp13 = cResult[5];
          }
          if (cResult[6] === childNodes) {
            if (cResult[7] === expanded) {
              if (cResult[8] === id) {
                let tmp16 = cResult[9];
                let tmp17 = cResult[10];
              }
              const stateFromStoresObject1 = tmp(tmp2[14]).useStateFromStoresObject(tmp13, tmp16, tmp17);
              ({ selectedPreviewId, hasGuildSelected } = stateFromStoresObject1);
              if (cResult[11] === isMentionLowImportance) {
                if (cResult[12] === mentionCount) {
                  let tmp19 = cResult[13];
                }
                ({ badge, cutouts } = tmp5(tmp2[25])(tmp19));
                const _Symbol2 = Symbol;
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  const items2 = [guildPreviewWrapper];
                  cResult[14] = items2;
                  let tmp21 = items2;
                } else {
                  tmp21 = cResult[14];
                }
                if (cResult[15] === childNodes) {
                  if (cResult[16] === name) {
                    let tmp23 = cResult[17];
                    let tmp24 = cResult[18];
                  }
                  const tmpResult12 = tmp(tmp2[14]);
                  const label = tmpResult12.useStateFromStores(tmp21, tmp23, tmp24, tmp5(tmp2[27])).label;
                  const useToken = tmp(tmp2[13]).useToken;
                  class B {
                    constructor() {
                      num = 0;
                      guildId = closure_6.getGuildId();
                      tmp3 = childNodes;
                      iter = childNodes[Symbol.iterator]();
                      while (iter !== undefined) {
                        if (iter.next().id === guildId) {
                          tmp = guildId;
                          tmp7 = iter;
                          iter.return();
                          break;
                        } else {
                          tmp4 = num;
                          sum = num + 1;
                          num = sum;
                          if (4 <= sum) {
                            tmp6 = iter;
                            iter.return();
                            break;
                          }
                          break;
                        }
                        tmp8 = expanded;
                        flag = false;
                        if (!expanded) {
                          tmp9 = null;
                          flag = false;
                          if (null != guildId) {
                            tmp10 = closure_7;
                            guildsTree = closure_7.getGuildsTree();
                            node = guildsTree.getNode(guildId);
                            parentId = undefined;
                            if (node != null) {
                              parentId = node.parentId;
                            }
                            tmp13 = id;
                            flag = parentId === id;
                          }
                        }
                        obj1 = { selectedPreviewId: null, hasGuildSelected: null };
                        obj1.selectedPreviewId = tmp;
                        obj1.hasGuildSelected = flag;
                        return obj1;
                      }
                      return;
                    }
                  }
                  const tmpResult13 = tmp(tmp2[13]);
                  const token = tmp(tmp2[13]).useToken(tmp5(tmp2[10]).modules.mobile.GUILD_FOLDER_PREVIEW_OPACITY);
                  if (cResult[19] === color) {
                    if (cResult[20] === tmp30) {
                      if (cResult[21] === token) {
                        let tmp32 = cResult[22];
                        let tmp33 = cResult[23];
                      }
                      if (cResult[24] !== tmp33) {
                        let obj3 = { tintColor: tmp33 };
                        cResult[24] = tmp33;
                        cResult[25] = obj3;
                        let tmp39 = obj3;
                      } else {
                        tmp39 = cResult[25];
                      }
                      if (cResult[26] !== tmp32) {
                        let obj4 = { backgroundColor: tmp32 };
                        cResult[26] = tmp32;
                        cResult[27] = obj4;
                        let tmp40 = obj4;
                      } else {
                        tmp40 = cResult[27];
                      }
                      if (cResult[28] === tmp39) {
                        if (cResult[29] === tmp40) {
                          let tmp41 = cResult[30];
                        }
                        ({ tintStyle, folderPreviewStyle } = tmp41);
                        if (cResult[31] === foldersChanged) {
                          if (expanded) {
                            if (cResult[34] !== tintStyle) {
                              let obj5 = { type: "icon", tintStyle };
                              const items3 = [obj5];
                              cResult[34] = tintStyle;
                              cResult[35] = items3;
                            }
                          } else if (cResult[36] !== childNodes) {
                            const items4 = [];
                            let iter = childNodes[Symbol.iterator]();
                            const nextResult = iter.next();
                            while (iter !== undefined) {
                              if (nextResult.type === isDragTarget.GUILD) {
                                let arr = items4.push(tmp48.id);
                                if (items4.length >= 4) {
                                  iter.return();
                                  break;
                                }
                                cResult[36] = childNodes;
                                cResult[37] = items4;
                                iter.return();
                                class B {
                                  constructor() {
                                    num = 0;
                                    guildId = closure_6.getGuildId();
                                    tmp3 = childNodes;
                                    iter = childNodes[Symbol.iterator]();
                                    while (iter !== undefined) {
                                      if (iter.next().id === guildId) {
                                        tmp = guildId;
                                        tmp7 = iter;
                                        iter.return();
                                        break;
                                      } else {
                                        tmp4 = num;
                                        sum = num + 1;
                                        num = sum;
                                        if (4 <= sum) {
                                          tmp6 = iter;
                                          iter.return();
                                          break;
                                        }
                                        break;
                                      }
                                      tmp8 = expanded;
                                      flag = false;
                                      if (!expanded) {
                                        tmp9 = null;
                                        flag = false;
                                        if (null != guildId) {
                                          tmp10 = closure_7;
                                          guildsTree = closure_7.getGuildsTree();
                                          node = guildsTree.getNode(guildId);
                                          parentId = undefined;
                                          if (node != null) {
                                            parentId = node.parentId;
                                          }
                                          tmp13 = id;
                                          flag = parentId === id;
                                        }
                                      }
                                      obj1 = { selectedPreviewId: null, hasGuildSelected: null };
                                      obj1.selectedPreviewId = tmp;
                                      obj1.hasGuildSelected = flag;
                                      return obj1;
                                    }
                                    return;
                                  }
                                }
                              }
                              continue;
                            }
                          } else {
                            if (cResult[38] === cResult[37]) {
                              if (cResult[41] === expanded) {
                                if (cResult[42] === folderPreviewStyle) {
                                  const tmp60 = dragDropInProgress(id, tmp4);
                                  isDragTarget = tmp60.isDragTarget;
                                  ({ dragState, overState, itemSize, dragDropInProgress } = tmp60);
                                  class B {
                                    constructor() {
                                      num = 0;
                                      guildId = closure_6.getGuildId();
                                      tmp3 = childNodes;
                                      iter = childNodes[Symbol.iterator]();
                                      while (iter !== undefined) {
                                        if (iter.next().id === guildId) {
                                          tmp = guildId;
                                          tmp7 = iter;
                                          iter.return();
                                          break;
                                        } else {
                                          tmp4 = num;
                                          sum = num + 1;
                                          num = sum;
                                          if (4 <= sum) {
                                            tmp6 = iter;
                                            iter.return();
                                            break;
                                          }
                                          break;
                                        }
                                        tmp8 = expanded;
                                        flag = false;
                                        if (!expanded) {
                                          tmp9 = null;
                                          flag = false;
                                          if (null != guildId) {
                                            tmp10 = closure_7;
                                            guildsTree = closure_7.getGuildsTree();
                                            node = guildsTree.getNode(guildId);
                                            parentId = undefined;
                                            if (node != null) {
                                              parentId = node.parentId;
                                            }
                                            tmp13 = id;
                                            flag = parentId === id;
                                          }
                                        }
                                        obj1 = { selectedPreviewId: null, hasGuildSelected: null };
                                        obj1.selectedPreviewId = tmp;
                                        obj1.hasGuildSelected = flag;
                                        return obj1;
                                      }
                                      return;
                                    }
                                  }
                                }
                              }
                              function be(arg0) {
                                const items = [guildPreviewWrapper.guildPreviewWrapper];
                                let tmp4;
                                if (!expanded) {
                                  tmp4 = folderPreviewStyle;
                                }
                                const obj = { children: null };
                                items[1] = tmp4;
                                const items1 = [value2(NativeViewDefault, { style: items }), arg0];
                                obj.children = items1;
                                return constants(noop.Fragment, obj, "wrapper");
                              }
                              cResult[41] = expanded;
                              cResult[42] = folderPreviewStyle;
                              cResult[43] = tmp6.guildPreviewWrapper;
                              class B {
                                constructor() {
                                  num = 0;
                                  guildId = closure_6.getGuildId();
                                  tmp3 = childNodes;
                                  iter = childNodes[Symbol.iterator]();
                                  while (iter !== undefined) {
                                    if (iter.next().id === guildId) {
                                      tmp = guildId;
                                      tmp7 = iter;
                                      iter.return();
                                      break;
                                    } else {
                                      tmp4 = num;
                                      sum = num + 1;
                                      num = sum;
                                      if (4 <= sum) {
                                        tmp6 = iter;
                                        iter.return();
                                        break;
                                      }
                                      break;
                                    }
                                    tmp8 = expanded;
                                    flag = false;
                                    if (!expanded) {
                                      tmp9 = null;
                                      flag = false;
                                      if (null != guildId) {
                                        tmp10 = closure_7;
                                        guildsTree = closure_7.getGuildsTree();
                                        node = guildsTree.getNode(guildId);
                                        parentId = undefined;
                                        if (node != null) {
                                          parentId = node.parentId;
                                        }
                                        tmp13 = id;
                                        flag = parentId === id;
                                      }
                                    }
                                    obj1 = { selectedPreviewId: null, hasGuildSelected: null };
                                    obj1.selectedPreviewId = tmp;
                                    obj1.hasGuildSelected = flag;
                                    return obj1;
                                  }
                                  return;
                                }
                              }
                            }
                            const obj6 = { type: "preview", guilds: cResult[37], selectedGuildId: selectedPreviewId };
                            const items5 = [obj6];
                            cResult[38] = cResult[37];
                            class B {
                              constructor() {
                                num = 0;
                                guildId = closure_6.getGuildId();
                                tmp3 = childNodes;
                                iter = childNodes[Symbol.iterator]();
                                while (iter !== undefined) {
                                  if (iter.next().id === guildId) {
                                    tmp = guildId;
                                    tmp7 = iter;
                                    iter.return();
                                    break;
                                  } else {
                                    tmp4 = num;
                                    sum = num + 1;
                                    num = sum;
                                    if (4 <= sum) {
                                      tmp6 = iter;
                                      iter.return();
                                      break;
                                    }
                                    break;
                                  }
                                  tmp8 = expanded;
                                  flag = false;
                                  if (!expanded) {
                                    tmp9 = null;
                                    flag = false;
                                    if (null != guildId) {
                                      tmp10 = closure_7;
                                      guildsTree = closure_7.getGuildsTree();
                                      node = guildsTree.getNode(guildId);
                                      parentId = undefined;
                                      if (node != null) {
                                        parentId = node.parentId;
                                      }
                                      tmp13 = id;
                                      flag = parentId === id;
                                    }
                                  }
                                  obj1 = { selectedPreviewId: null, hasGuildSelected: null };
                                  obj1.selectedPreviewId = tmp;
                                  obj1.hasGuildSelected = flag;
                                  return obj1;
                                }
                                return;
                              }
                            }
                            cResult[40] = items5;
                          }
                        }
                        const obj7 = {
                          onPress() {
                            if (null != foldersChanged) {
                              value = foldersChanged.get();
                              const _HermesInternal = HermesInternal;
                              if (value.has("" + id)) {
                                const _Set = Set;
                                const set = new Set(foldersChanged.get());
                                const _HermesInternal2 = HermesInternal;
                                set.add("" + id);
                                const result = foldersChanged.set(set);
                              }
                            }
                            const result1 = HapticUtils.triggerHapticFeedback(
                              HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT,
                            );
                            const result2 = GuildActionCreatorsDefault.toggleGuildFolderExpand(id);
                          },
                        };
                        cResult[31] = foldersChanged;
                        class B {
                          constructor() {
                            num = 0;
                            guildId = closure_6.getGuildId();
                            tmp3 = childNodes;
                            iter = childNodes[Symbol.iterator]();
                            while (iter !== undefined) {
                              if (iter.next().id === guildId) {
                                tmp = guildId;
                                tmp7 = iter;
                                iter.return();
                                break;
                              } else {
                                tmp4 = num;
                                sum = num + 1;
                                num = sum;
                                if (4 <= sum) {
                                  tmp6 = iter;
                                  iter.return();
                                  break;
                                }
                                break;
                              }
                              tmp8 = expanded;
                              flag = false;
                              if (!expanded) {
                                tmp9 = null;
                                flag = false;
                                if (null != guildId) {
                                  tmp10 = closure_7;
                                  guildsTree = closure_7.getGuildsTree();
                                  node = guildsTree.getNode(guildId);
                                  parentId = undefined;
                                  if (node != null) {
                                    parentId = node.parentId;
                                  }
                                  tmp13 = id;
                                  flag = parentId === id;
                                }
                              }
                              obj1 = { selectedPreviewId: null, hasGuildSelected: null };
                              obj1.selectedPreviewId = tmp;
                              obj1.hasGuildSelected = flag;
                              return obj1;
                            }
                            return;
                          }
                        }
                        cResult[33] = obj7;
                      }
                      const obj8 = { tintStyle: tmp39, folderPreviewStyle: tmp40 };
                      cResult[28] = tmp39;
                      class B {
                        constructor() {
                          num = 0;
                          guildId = closure_6.getGuildId();
                          tmp3 = childNodes;
                          iter = childNodes[Symbol.iterator]();
                          while (iter !== undefined) {
                            if (iter.next().id === guildId) {
                              tmp = guildId;
                              tmp7 = iter;
                              iter.return();
                              break;
                            } else {
                              tmp4 = num;
                              sum = num + 1;
                              num = sum;
                              if (4 <= sum) {
                                tmp6 = iter;
                                iter.return();
                                break;
                              }
                              break;
                            }
                            tmp8 = expanded;
                            flag = false;
                            if (!expanded) {
                              tmp9 = null;
                              flag = false;
                              if (null != guildId) {
                                tmp10 = closure_7;
                                guildsTree = closure_7.getGuildsTree();
                                node = guildsTree.getNode(guildId);
                                parentId = undefined;
                                if (node != null) {
                                  parentId = node.parentId;
                                }
                                tmp13 = id;
                                flag = parentId === id;
                              }
                            }
                            obj1 = { selectedPreviewId: null, hasGuildSelected: null };
                            obj1.selectedPreviewId = tmp;
                            obj1.hasGuildSelected = flag;
                            return obj1;
                          }
                          return;
                        }
                      }
                      cResult[30] = obj8;
                      tmp41 = obj8;
                    }
                  }
                  const tmpResult14 = tmp(tmp2[13]);
                  let tmp35 = color;
                  if (color == null) {
                    tmp35 = closure_11;
                  }
                  const int2hexResult = tmp(tmp2[18]).int2hex(tmp35);
                  let hexWithOpacityResult = tmp30;
                  if (!closure_12(color)) {
                    hexWithOpacityResult = tmp(tmp2[17]).hexWithOpacity(int2hexResult, token);
                    const tmpResult16 = tmp(tmp2[17]);
                  }
                  cResult[19] = color;
                  cResult[20] = tmp30;
                  cResult[21] = token;
                  cResult[22] = hexWithOpacityResult;
                  cResult[23] = int2hexResult;
                  tmp32 = hexWithOpacityResult;
                  tmp33 = int2hexResult;
                  const tmpResult15 = tmp(tmp2[18]);
                }
                const fn = function q() {
                  if (null != name) {
                    const obj3 = { count: 1, names: null, label: null };
                    const items = [name];
                    obj3.names = items;
                    obj3.label = name;
                    return obj3;
                  } else {
                    const items1 = [];
                    let num = 0;
                    const obj4 = childNodes[Symbol.iterator]();
                    while (obj4 !== undefined) {
                      guild = GuildStore.getGuild(tmp3.id);
                      if (null != guild) {
                        let arr = items1.push(tmp7.name);
                      }
                      let sum = num + 1;
                      num = sum;
                      if (3 <= sum) {
                        obj4.return();
                        break;
                      }
                      let obj = { names: items1, count: childNodes.length, label: null };
                      let obj2 = ListUtils;
                      obj.label = obj2.getListSummaryLabel(items1, childNodes.length);
                      return obj;
                    }
                  }
                };
                const items6 = [,];
                class B {
                  constructor() {
                    num = 0;
                    guildId = closure_6.getGuildId();
                    tmp3 = childNodes;
                    iter = childNodes[Symbol.iterator]();
                    while (iter !== undefined) {
                      if (iter.next().id === guildId) {
                        tmp = guildId;
                        tmp7 = iter;
                        iter.return();
                        break;
                      } else {
                        tmp4 = num;
                        sum = num + 1;
                        num = sum;
                        if (4 <= sum) {
                          tmp6 = iter;
                          iter.return();
                          break;
                        }
                        break;
                      }
                      tmp8 = expanded;
                      flag = false;
                      if (!expanded) {
                        tmp9 = null;
                        flag = false;
                        if (null != guildId) {
                          tmp10 = closure_7;
                          guildsTree = closure_7.getGuildsTree();
                          node = guildsTree.getNode(guildId);
                          parentId = undefined;
                          if (node != null) {
                            parentId = node.parentId;
                          }
                          tmp13 = id;
                          flag = parentId === id;
                        }
                      }
                      obj1 = { selectedPreviewId: null, hasGuildSelected: null };
                      obj1.selectedPreviewId = tmp;
                      obj1.hasGuildSelected = flag;
                      return obj1;
                    }
                    return;
                  }
                }
                items6[1] = childNodes;
                cResult[15] = childNodes;
                cResult[16] = name;
                cResult[17] = fn;
                cResult[18] = items6;
                tmp24 = items6;
                tmp23 = fn;
                const tmp20 = tmp5(tmp2[25])(tmp19);
              }
              const obj9 = { mentionCount, isMentionLowImportance };
              class B {
                constructor() {
                  num = 0;
                  guildId = closure_6.getGuildId();
                  tmp3 = childNodes;
                  iter = childNodes[Symbol.iterator]();
                  while (iter !== undefined) {
                    if (iter.next().id === guildId) {
                      tmp = guildId;
                      tmp7 = iter;
                      iter.return();
                      break;
                    } else {
                      tmp4 = num;
                      sum = num + 1;
                      num = sum;
                      if (4 <= sum) {
                        tmp6 = iter;
                        iter.return();
                        break;
                      }
                      break;
                    }
                    tmp8 = expanded;
                    flag = false;
                    if (!expanded) {
                      tmp9 = null;
                      flag = false;
                      if (null != guildId) {
                        tmp10 = closure_7;
                        guildsTree = closure_7.getGuildsTree();
                        node = guildsTree.getNode(guildId);
                        parentId = undefined;
                        if (node != null) {
                          parentId = node.parentId;
                        }
                        tmp13 = id;
                        flag = parentId === id;
                      }
                    }
                    obj1 = { selectedPreviewId: null, hasGuildSelected: null };
                    obj1.selectedPreviewId = tmp;
                    obj1.hasGuildSelected = flag;
                    return obj1;
                  }
                  return;
                }
              }
              cResult[12] = mentionCount;
              cResult[13] = obj9;
              tmp19 = obj9;
              const tmpResult11 = tmp(tmp2[14]);
            }
          }
          class B {
            constructor() {
              num = 0;
              guildId = closure_6.getGuildId();
              tmp3 = childNodes;
              iter = childNodes[Symbol.iterator]();
              while (iter !== undefined) {
                if (iter.next().id === guildId) {
                  tmp = guildId;
                  tmp7 = iter;
                  iter.return();
                  break;
                } else {
                  tmp4 = num;
                  sum = num + 1;
                  num = sum;
                  if (4 <= sum) {
                    tmp6 = iter;
                    iter.return();
                    break;
                  }
                  break;
                }
                tmp8 = expanded;
                flag = false;
                if (!expanded) {
                  tmp9 = null;
                  flag = false;
                  if (null != guildId) {
                    tmp10 = closure_7;
                    guildsTree = closure_7.getGuildsTree();
                    node = guildsTree.getNode(guildId);
                    parentId = undefined;
                    if (node != null) {
                      parentId = node.parentId;
                    }
                    tmp13 = id;
                    flag = parentId === id;
                  }
                }
                obj1 = { selectedPreviewId: null, hasGuildSelected: null };
                obj1.selectedPreviewId = tmp;
                obj1.hasGuildSelected = flag;
                return obj1;
              }
              return;
            }
          }
          const items7 = [expanded, id, childNodes];
          cResult[6] = childNodes;
          cResult[7] = expanded;
          cResult[8] = id;
          cResult[9] = B;
          cResult[10] = items7;
          tmp17 = items7;
          tmp16 = B;
          const tmpResult10 = tmp(tmp2[14]);
        }
        class H {
          constructor() {
            if (expanded) {
              return { unread: false, mentionCount: 0, isMentionLowImportance: false };
            } else {
              tmp = closure_4;
              closure_0 = closure_4.getMutableGuildStates();
              tmp2 = childNodes;
              return childNodes.reduce(
                (mentionCount, id) => {
                  if (null != id.id) {
                    let num;
                    if (dependencyMap[id.id] != null) {
                      num = tmp5.highImportanceMentionCount;
                    }
                    if (num == null) {
                      num = 0;
                    }
                    let num2;
                    if (dependencyMap[id.id] != null) {
                      num2 = tmp.lowImportanceMentionCount;
                    }
                    if (num2 == null) {
                      num2 = 0;
                    }
                    mentionCount.mentionCount = mentionCount.mentionCount + num + num2;
                    let flag = mentionCount.unread;
                    if (!flag) {
                      let unread;
                      if (dependencyMap[id.id] != null) {
                        unread = tmp2.unread;
                      }
                      flag = unread;
                    }
                    if (flag == null) {
                      flag = false;
                    }
                    mentionCount.unread = flag;
                    let isMentionLowImportance = mentionCount.isMentionLowImportance;
                    if (isMentionLowImportance) {
                      isMentionLowImportance = 0 === num;
                    }
                    mentionCount.isMentionLowImportance = isMentionLowImportance;
                  }
                  return mentionCount;
                },
                { unread: false, mentionCount: 0, isMentionLowImportance: true },
              );
            }
          }
        }
        cResult[2] = childNodes;
        cResult[3] = expanded;
        cResult[4] = H;
        tmp11 = H;
        const tmpResult9 = id(name[24]);
      }
    : (id) => {
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
        let tmp4 = closure_18(id(name[13]).useToken(expanded(name[10]).modules.mobile.GUILD_BAR_ITEM_SIZE));
        const guildPreviewWrapper = tmp4;
        let obj = id(name[13]);
        let tmp = id;
        const tmp3 = expanded;
        let obj2 = id(name[24]);
        const guildsBarAnimatedWrapperStyles = id(name[24]).useGuildsBarAnimatedWrapperStyles({
          disableSelectedColor: true,
          disableBGColor: true,
        });
        let items = [childNodes];
        const stateFromStoresObject = id(name[14]).useStateFromStoresObject(items, () => {
          if (expanded) {
            return { unread: false, mentionCount: 0, isMentionLowImportance: false };
          } else {
            const mutableGuildStates = GuildReadStateStore.getMutableGuildStates();
            return childNodes.reduce(
              (mentionCount, id) => {
                if (null != id.id) {
                  let num;
                  if (dependencyMap[id.id] != null) {
                    num = tmp5.highImportanceMentionCount;
                  }
                  if (num == null) {
                    num = 0;
                  }
                  let num2;
                  if (dependencyMap[id.id] != null) {
                    num2 = tmp.lowImportanceMentionCount;
                  }
                  if (num2 == null) {
                    num2 = 0;
                  }
                  mentionCount.mentionCount = mentionCount.mentionCount + num + num2;
                  let flag = mentionCount.unread;
                  if (!flag) {
                    let unread;
                    if (dependencyMap[id.id] != null) {
                      unread = tmp2.unread;
                    }
                    flag = unread;
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  mentionCount.unread = flag;
                  let isMentionLowImportance = mentionCount.isMentionLowImportance;
                  if (isMentionLowImportance) {
                    isMentionLowImportance = 0 === num;
                  }
                  mentionCount.isMentionLowImportance = isMentionLowImportance;
                }
                return mentionCount;
              },
              { unread: false, mentionCount: 0, isMentionLowImportance: true },
            );
          }
        });
        ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
        let obj3 = id(name[14]);
        let items1 = [guildPreviewWrapper, selectedPreviewId];
        let items2 = [expanded, id, childNodes];
        const stateFromStoresObject1 = id(name[14]).useStateFromStoresObject(
          items1,
          () => {
            let num = 0;
            const guildId = SelectedGuildStore.getGuildId();
            const iter = childNodes[Symbol.iterator]();
            while (iter !== undefined) {
              if (iter.next().id === guildId) {
                let tmp = guildId;
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
          },
          items2,
        );
        selectedPreviewId = stateFromStoresObject1.selectedPreviewId;
        let obj4 = id(name[14]);
        ({ badge, cutouts } = expanded(name[25])({ mentionCount, isMentionLowImportance }));
        let tmp8 = expanded(name[25])({ mentionCount, isMentionLowImportance });
        const items3 = [foldersChanged];
        const items4 = [name, childNodes];
        let obj5 = id(name[14]);
        const token = id(name[13]).useToken(expanded(name[10]).colors.GUILD_FOLDER_BACKGROUND);
        const obj6 = id(name[13]);
        const token1 = id(name[13]).useToken(expanded(name[10]).modules.mobile.GUILD_FOLDER_PREVIEW_OPACITY);
        const items5 = [color, token, token1];
        const memo = color.useMemo(() => {
          let tmp4 = color;
          if (color == null) {
            tmp4 = closure_2_11;
          }
          const int2hexResult = utils_ColorUtils.int2hex(tmp4);
          const obj2 = { tintStyle: { tintColor: int2hexResult }, folderPreviewStyle: null };
          if (__initData(color)) {
            let hexWithOpacityResult = token;
          } else {
            hexWithOpacityResult = ColorUtils.hexWithOpacity(int2hexResult, token1);
            const tmpResult = ColorUtils;
          }
          obj2.folderPreviewStyle = { backgroundColor: hexWithOpacityResult };
          return obj2;
        }, items5);
        const tintStyle = memo.tintStyle;
        const folderPreviewStyle = memo.folderPreviewStyle;
        const items6 = [id, foldersChanged];
        const items7 = [expanded, childNodes, tintStyle, selectedPreviewId];
        const memo1 = color.useMemo(
          () => ({
            onPress() {
              if (null != foldersChanged) {
                value = foldersChanged.get();
                const _HermesInternal = HermesInternal;
                if (value.has("" + closure_1_0)) {
                  const _Set = Set;
                  const set = new Set(foldersChanged.get());
                  const _HermesInternal2 = HermesInternal;
                  set.add("" + closure_1_0);
                  const result = foldersChanged.set(set);
                }
              }
              const result1 = id(name[28]).triggerHapticFeedback(id(name[28]).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj4 = id(name[28]);
              const result2 = expanded(name[29]).toggleGuildFolderExpand(closure_1_0);
              const obj5 = expanded(name[29]);
            },
          }),
          items6,
        );
        const items8 = [expanded, tmp4.guildPreviewWrapper, folderPreviewStyle];
        const memo2 = color.useMemo(() => {
          if (expanded) {
            const obj2 = { type: "icon", tintStyle };
            const items = [obj2];
            return items;
          } else {
            const items1 = [];
            const iter = childNodes[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              if (nextResult.type === GuildsNodeType.GUILD) {
                let arr = items1.push(tmp6.id);
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
          const items = [guildPreviewWrapper.guildPreviewWrapper];
          let tmp4;
          if (!expanded) {
            tmp4 = folderPreviewStyle;
          }
          const obj = { children: null };
          items[1] = tmp4;
          const items1 = [value2(NativeViewDefault, { style: items }), arg0];
          obj.children = items1;
          return constants(noop.Fragment, obj, "wrapper");
        }, items8);
        const tmp15 = token1(id, flag);
        const isDragTarget = tmp15.isDragTarget;
        const dragDropInProgress = tmp15.dragDropInProgress;
        const items9 = [id];
        ({ dragState, overState, itemSize } = tmp15);
        const memo3 = color.useMemo(() => {
          const guildFolderMenuItems = GuildsBarFolderMenuItems.getGuildFolderMenuItems(id);
          return {
            accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
            onAccessibilityAction(arg0) {
              const nativeEvent = arg0;
              const found = guildFolderMenuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
              if (found != null) {
                const action = found.action;
                if (action != null) {
                  action();
                }
              }
            },
          };
        }, items9);
        ({ accessibilityActions, onAccessibilityAction } = memo3);
        const obj7 = id(name[13]);
        const sharedValue = id(name[20]).useSharedValue("" + id);
        class R {
          constructor(arg0) {
            value = dragDropInProgress.get();
            if (value) {
              tmp2 = closure_14;
              tmp4 = id;
              tmp5 = globalThis;
              _HermesInternal = HermesInternal;
              str = "";
              value1 = closure_14.get();
              value = value1 === "" + id;
            }
            if (value) {
              tmp6 = isDragTarget;
              value = !isDragTarget;
            }
            tmp8 = id;
            tmp7 = closure_14;
            if (id == null) {
              tmp8 = null;
            }
            result = closure_14.set("" + tmp8);
            if (value) {
              tmp10 = closure_0;
              tmp11 = closure_2;
              obj = closure_0(closure_2[16]);
              tmp12 = TRANSITION_PHYSICS;
              str2 = "animate-always";
              targetOriginY = obj.withSpring(id.targetOriginY, TRANSITION_PHYSICS, "animate-always");
            } else {
              targetOriginY = id.targetOriginY;
            }
            obj1 = { originY: targetOriginY, height: null };
            if (value) {
              tmp13 = closure_0;
              tmp14 = closure_2;
              obj3 = closure_0(closure_2[16]);
              tmp15 = TRANSITION_PHYSICS;
              str3 = "animate-always";
              targetHeight = obj3.withSpring(id.targetHeight, TRANSITION_PHYSICS, "animate-always");
            } else {
              targetHeight = id.targetHeight;
            }
            obj5 = { animations: obj1, initialValues: { originY: id.currentOriginY, height: id.currentHeight } };
            obj1.height = targetHeight;
            return obj5;
          }
        }
        const obj8 = id(name[20]);
        R.__closure = {
          dragDropInProgress,
          sharedId: sharedValue,
          id,
          isDragTarget,
          withSpring: id(name[16]).withSpring,
          TRANSITION_PHYSICS: sharedValue,
        };
        R.__workletHash = 10548965010347;
        R.__initData = __initData5;
        const items10 = [id, sharedValue, isDragTarget, dragDropInProgress];
        const callback1 = color.useCallback(R, items10);
        const obj10 = {
          id: null,
          draggedItemSize: null,
          accessibilityActions: null,
          onAccessibilityAction: null,
          selected: null,
          unread: null,
          circle: false,
          styles: null,
          label: null,
          isDragTarget: null,
          dragState: null,
          sharedId: null,
          cutouts: null,
          config: null,
          isDragPreview: null,
          overState: null,
          preventClipping: true,
          expanded: null,
          layout: null,
          externalChildren: null,
          expandedChildren: null,
          children: null,
        };
        const obj9 = {
          dragDropInProgress,
          sharedId: sharedValue,
          id,
          isDragTarget,
          withSpring: id(name[16]).withSpring,
          TRANSITION_PHYSICS: sharedValue,
        };
        obj10.id = "" + id;
        obj10.draggedItemSize = itemSize;
        obj10.accessibilityActions = accessibilityActions;
        obj10.onAccessibilityAction = onAccessibilityAction;
        obj10.selected = stateFromStoresObject1.hasGuildSelected;
        let tmp21 = !expanded;
        if (!expanded) {
          tmp21 = unread;
        }
        obj10.unread = tmp21;
        obj10.styles = guildsBarAnimatedWrapperStyles;
        obj10.label = obj5.useStateFromStores(
          items3,
          () => {
            if (null != name) {
              const obj3 = { count: 1, names: null, label: null };
              const items = [name];
              obj3.names = items;
              obj3.label = name;
              return obj3;
            } else {
              const items1 = [];
              let num = 0;
              const obj4 = childNodes[Symbol.iterator]();
              while (obj4 !== undefined) {
                guild = GuildStore.getGuild(tmp3.id);
                if (null != guild) {
                  let arr = items1.push(tmp7.name);
                }
                let sum = num + 1;
                num = sum;
                if (3 <= sum) {
                  obj4.return();
                  break;
                }
                let obj = { names: items1, count: childNodes.length, label: null };
                let obj2 = ListUtils;
                obj.label = obj2.getListSummaryLabel(items1, childNodes.length);
                return obj;
              }
            }
          },
          items4,
          expanded(name[27]),
        ).label;
        obj10.isDragTarget = isDragTarget;
        obj10.dragState = dragState;
        obj10.sharedId = sharedValue;
        obj10.cutouts = cutouts;
        obj10.config = memo1;
        obj10.isDragPreview = flag;
        obj10.overState = overState;
        obj10.expanded = expanded;
        obj10.layout = callback1;
        let tmp19Result = badge;
        if (expanded) {
          tmp19Result = badge;
          if (!flag) {
            const obj11 = { color, folderId: id, totalItems: childNodes.length };
            tmp19Result = closure_16(closure_22, obj11);
          }
        }
        obj10.externalChildren = tmp19Result;
        let tmp19Result2;
        if (!flag2) {
          const obj12 = { folderId: id, expanded };
          tmp19Result2 = closure_16(tmp3(tmp2[32]), obj12);
        }
        obj10.expandedChildren = tmp19Result2;
        obj10.children = closure_16(tmp(name[21]).TransitionGroup, {
          renderItem: renderGuildFolderContent,
          getItemKey,
          items: memo2,
          wrapChildren: callback,
        });
        return closure_16(expanded(name[24]), obj10);
      },
);
export const GuildsBarGuildFolderBG = memoResult;
