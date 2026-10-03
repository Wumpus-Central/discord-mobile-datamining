// discord_app/modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import ClipViewDefault from "../../../../design/components/Icon/native/ClipView.tsx";
import ServerIcon from "../../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import ICYMIAnalytics2 from "../../ICYMIAnalytics.tsx";
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ICYMIPopularGuildsStore from "../../ICYMIPopularGuildsStore.tsx";

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const GuildFeatures = fn(1085).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let c15 = 50;
const createICYMIStyles = fn(16390);
let closure_16 = createICYMIStyles.createICYMIStyles((margin) => {
  const obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1, marginHorizontal: margin.margin }, scrollContentContainer: null, footer: null, title: null, subtitle: null, separator: null, featuredServerContainer: null, featuredServerInnerContainer: null, buttonContainer: null, featuredServerTitle: null, guildIcon: null, bannerImage: null, emptyBanner: null, guildsScrollContainer: null, guildsColumn: null, selectedServersRowContainer: null, selectedServerIcon: null, noServerContainer: null, noServerExtraContainer: null, pressableUnderlayColor: null, guildIconBorder: null };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1, marginHorizontal: margin.margin };
  obj.scrollContentContainer = { paddingTop: nativeDefault.space.PX_8 };
  const rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8 };
  obj.footer = rect;
  const obj3 = { paddingTop: nativeDefault.space.PX_8 };
  obj.title = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
  const obj4 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
  obj.subtitle = { marginHorizontal: nativeDefault.space.PX_24 };
  const size = { height: hairlineWidth.hairlineWidth, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.separator = size;
  const obj5 = { marginHorizontal: nativeDefault.space.PX_24 };
  obj.featuredServerContainer = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, overflow: "hidden", marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 };
  const obj6 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, overflow: "hidden", marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 };
  obj.featuredServerInnerContainer = { marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 };
  const obj7 = { marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 };
  obj.buttonContainer = { marginBottom: nativeDefault.space.PX_12, marginTop: margin.margin };
  const obj8 = { marginBottom: nativeDefault.space.PX_12, marginTop: margin.margin };
  obj.featuredServerTitle = { marginBottom: nativeDefault.space.PX_8 };
  obj.guildIcon = { position: "absolute", top: 50, left: 12 };
  obj.bannerImage = { height: 73, width: "100%" };
  const obj9 = { marginBottom: nativeDefault.space.PX_8 };
  obj.emptyBanner = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  const obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj.guildsScrollContainer = { flex: 1, marginHorizontal: nativeDefault.space.PX_8 };
  const obj11 = { flex: 1, marginHorizontal: nativeDefault.space.PX_8 };
  obj.guildsColumn = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_16 };
  const size1 = { height: v50, width: "100%", marginBottom: nativeDefault.space.PX_24 };
  obj.selectedServersRowContainer = size1;
  const size2 = { flex: 1, width: v50, height: v50, alignItems: "center", justifyContent: "center", borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.md, borderWidth: 1 };
  obj.selectedServerIcon = size2;
  const obj12 = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_16 };
  obj.noServerContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" };
  obj.noServerExtraContainer = { opacity: 0.4 };
  const obj13 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" };
  obj.pressableUnderlayColor = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  const obj14 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj.guildIconBorder = { borderRadius: nativeDefault.radii.md };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let LARGE = dependencyMap;
  const cResult = c.c(11);
  guild = guild.guild;
  let guildIconBorder = closure_16();
  const tmp5 = null == guild && guild.index >= 3 && guildIconBorder.noServerExtraContainer;
  if (cResult[0] === guildIconBorder.selectedServerIcon) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp5) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] === guild) {
        if (cResult[5] === tmp3) {
          if (cResult[6] === guildIconBorder.guildIconBorder) {
            if (cResult[8] === tmp6) {
              if (cResult[9] === tmp7) {
                let tmp15 = cResult[10];
              }
              return tmp15;
            }
            const obj2 = { style: tmp6, children: cResult[7] };
            const tmp18 = __initData(timestampProducer, obj2);
            cResult[8] = tmp6;
            cResult[9] = cResult[7];
            cResult[10] = tmp18;
            tmp15 = tmp18;
          }
        }
      }
      if (null != guild) {
        const obj3 = { style: guildIconBorder.guildIconBorder, guild, size: null };
        LARGE = GuildIcon.GuildIconSizes.LARGE;
        obj3.size = LARGE;
        let tmp8 = __initData(GuildIconDefault, obj3);
      } else {
        tmp8 = null;
        if (tmp3) {
          const obj4 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
          tmp8 = __initData(ServerIcon.ServerIcon, obj4);
        }
      }
      cResult[4] = guild;
      cResult[5] = tmp3;
      guildIconBorder = guildIconBorder.guildIconBorder;
      cResult[6] = guildIconBorder;
      cResult[7] = tmp8;
    }
  }
  const items = [guildIconBorder.selectedServerIcon, null == guild && guildIconBorder.noServerContainer, tmp5];
  cResult[0] = guildIconBorder.selectedServerIcon;
  cResult[1] = null == guild && guildIconBorder.noServerContainer;
  cResult[2] = tmp5;
  cResult[3] = items;
  tmp6 = items;
}) : ((guild) => {
  guild = guild.guild;
  const tmp = closure_16();
  const items = [tmp.selectedServerIcon, , ];
  let noServerContainer = null == guild;
  if (noServerContainer) {
    noServerContainer = tmp.noServerContainer;
  }
  items[1] = noServerContainer;
  const obj = { style: items, children: null };
  items[2] = null == guild && guild.index >= 3 && tmp.noServerExtraContainer;
  if (null != guild) {
    const obj2 = { style: tmp.guildIconBorder, guild, size: GuildIcon.GuildIconSizes.LARGE };
    let tmp3Result = __initData(GuildIconDefault, obj2);
  } else {
    tmp3Result = null;
    if (tmp2) {
      const obj3 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
      tmp3Result = __initData(ServerIcon.ServerIcon, obj3);
    }
  }
  obj.children = tmp3Result;
  return __initData(timestampProducer, obj);
});
const __initData = { code: "function ICYMIJoinGuildsScreenTsx1(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.space.PX_24:0)};}" };
const __initData2 = { code: "function ICYMIJoinGuildsScreenTsx2(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.space.PX_24:0)};}" };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedGuilds) => {
  const cResult = selectedGuilds(576).c(17);
  selectedGuilds = selectedGuilds.selectedGuilds;
  const tmp4 = closure_16();
  if (cResult[0] !== selectedGuilds) {
    const fn = function l(arg0, index) {
      let tmp3;
      if (index < selectedGuilds.length) {
        tmp3 = selectedGuilds[index];
      }
      return __initData(closure_17, { guild: tmp3, index });
    };
    cResult[0] = selectedGuilds;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  [first, dependencyMap] = noop.useState(selectedGuilds.length);
  let obj = selectedGuilds(576);
  if (cResult[2] === first) {
    if (cResult[3] === selectedGuilds.length) {
      let tmp9 = cResult[4];
      let tmp10 = cResult[5];
    }
    const effect = noop.useEffect(tmp9, tmp10);
    class G {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[16]);
        arr = selectedGuilds;
        num = 0;
        if (selectedGuilds.length > 0) {
          num = 1;
        }
        obj1 = { opacity: obj.withTiming(num), height: null, marginTop: null };
        tmpResult = tmp(tmp2[16]);
        num2 = 0;
        if (arr.length > 0) {
          num2 = c15;
        }
        obj1.height = tmpResult.withTiming(num2);
        tmpResult1 = tmp(tmp2[16]);
        num3 = 0;
        if (arr.length > 0) {
          tmp3 = closure_1;
          num3 = closure_1(tmp2[10]).space.PX_24;
        }
        obj1.marginTop = tmpResult1.withTiming(num3);
        return obj1;
      }
    }
    const obj3 = { withTiming: tmp(4891).withTiming, selectedGuilds, SELECTED_SERVER_SIZE_WITH_BORDER: v50, tokens: first(587) };
    G.__closure = obj3;
    G.__workletHash = 2911488630455;
    G.__initData = __initData;
    const animatedStyle = tmp(4612).useAnimatedStyle(G);
    if (cResult[6] === animatedStyle) {
      if (cResult[7] === tmp4.selectedServersRowContainer) {
        let tmp16 = cResult[8];
      }
      class G {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[16]);
          arr = selectedGuilds;
          num = 0;
          if (selectedGuilds.length > 0) {
            num = 1;
          }
          obj1 = { opacity: obj.withTiming(num), height: null, marginTop: null };
          tmpResult = tmp(tmp2[16]);
          num2 = 0;
          if (arr.length > 0) {
            num2 = c15;
          }
          obj1.height = tmpResult.withTiming(num2);
          tmpResult1 = tmp(tmp2[16]);
          num3 = 0;
          if (arr.length > 0) {
            tmp3 = closure_1;
            num3 = closure_1(tmp2[10]).space.PX_24;
          }
          obj1.marginTop = tmpResult1.withTiming(num3);
          return obj1;
        }
      }
      if (cResult[11] === tmp5) {
        if (cResult[12] === tmp17) {
          let tmp18 = cResult[13];
        }
        if (cResult[14] === tmp16) {
          if (cResult[15] === tmp18) {
            let tmp22 = cResult[16];
          }
          return tmp22;
        }
        class G {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[16]);
            arr = selectedGuilds;
            num = 0;
            if (selectedGuilds.length > 0) {
              num = 1;
            }
            obj1 = { opacity: obj.withTiming(num), height: null, marginTop: null };
            tmpResult = tmp(tmp2[16]);
            num2 = 0;
            if (arr.length > 0) {
              num2 = c15;
            }
            obj1.height = tmpResult.withTiming(num2);
            tmpResult1 = tmp(tmp2[16]);
            num3 = 0;
            if (arr.length > 0) {
              tmp3 = closure_1;
              num3 = closure_1(tmp2[10]).space.PX_24;
            }
            obj1.marginTop = tmpResult1.withTiming(num3);
            return obj1;
          }
        }
        tmp24[0] = tmp16;
        tmp24[1] = tmp18;
        const tmp25 = closure_12(tmp13(4612).View, tmp24);
        cResult[14] = tmp16;
        cResult[15] = tmp18;
        cResult[16] = tmp25;
        tmp22 = tmp25;
      }
      const obj4 = { ref, sections: tmp17, insetStart: tmp13(587).space.PX_24, insetEnd: tmp13(587).space.PX_12, renderItem: tmp5, estimatedListSize: "windowSize", itemSize: v50 + tmp13(587).space.PX_12, horizontal: true, listId: "selected-servers-list", showsHorizontalScrollIndicator: false };
      const tmp21 = closure_12(tmp13(6552), obj4);
      cResult[11] = tmp5;
      cResult[12] = tmp17;
      cResult[13] = tmp21;
      tmp18 = tmp21;
      const tmp13Result = tmp13(6552);
    }
    const items = [tmp4.selectedServersRowContainer, animatedStyle];
    cResult[6] = animatedStyle;
    cResult[7] = tmp4.selectedServersRowContainer;
    cResult[8] = items;
    tmp16 = items;
    let tmpResult = tmp(4612);
  }
  const fn2 = function h() {
    if (first < selectedGuilds.length) {
      const current = ref.current;
      if (current != null) {
        const obj = { animated: true, section: 0, item: selectedGuilds.length };
        current.scrollToLocation(obj);
      }
      closure_2(selectedGuilds.length);
    } else if (tmp !== selectedGuilds.length) {
      closure_2(selectedGuilds.length);
    }
  };
  const items1 = [first, selectedGuilds.length];
  cResult[2] = first;
  cResult[3] = selectedGuilds.length;
  cResult[4] = fn2;
  cResult[5] = items1;
  tmp10 = items1;
  tmp9 = fn2;
  ref = noop.useRef(null);
}) : ((selectedGuilds) => {
  selectedGuilds = selectedGuilds.selectedGuilds;
  first = undefined;
  dependencyMap = undefined;
  const items = [selectedGuilds];
  const callback = noop.useCallback((arg0, index) => {
    let tmp3;
    if (index < selectedGuilds.length) {
      tmp3 = selectedGuilds[index];
    }
    return __initData(closure_17, { guild: tmp3, index });
  }, items);
  [first, dependencyMap] = noop.useState(selectedGuilds.length);
  const ref = noop.useRef(null);
  const items1 = [first, selectedGuilds.length];
  const effect = noop.useEffect(() => {
    if (first < selectedGuilds.length) {
      const current = ref.current;
      if (current != null) {
        const obj = { animated: true, section: 0, item: selectedGuilds.length };
        current.scrollToLocation(obj);
      }
      closure_2(selectedGuilds.length);
    } else if (tmp !== selectedGuilds.length) {
      closure_2(selectedGuilds.length);
    }
  }, items1);
  const tmp = closure_16();
  const fn = function _() {
    let num = 0;
    if (selectedGuilds.length > 0) {
      num = 1;
    }
    const obj2 = { opacity: timing.withTiming(num), height: null, marginTop: null };
    let num2 = 0;
    if (selectedGuilds.length > 0) {
      num2 = c15;
    }
    obj2.height = timing.withTiming(num2);
    const tmpResult = timing;
    let num3 = 0;
    if (selectedGuilds.length > 0) {
      num3 = nativeDefault.space.PX_24;
    }
    obj2.marginTop = timing.withTiming(num3);
    return obj2;
  };
  let obj = selectedGuilds(4612);
  fn.__closure = { withTiming: selectedGuilds(4891).withTiming, selectedGuilds, SELECTED_SERVER_SIZE_WITH_BORDER: v50, tokens: first(587) };
  fn.__workletHash = 13469351702676;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  const items2 = [tmp.selectedServersRowContainer, animatedStyle];
  obj3.style = items2;
  const obj4 = { ref, sections: null, insetStart: null, insetEnd: null, renderItem: null, estimatedListSize: "windowSize", itemSize: null, horizontal: true, listId: "selected-servers-list", showsHorizontalScrollIndicator: false };
  let num = 3;
  let obj2 = { withTiming: selectedGuilds(4891).withTiming, selectedGuilds, SELECTED_SERVER_SIZE_WITH_BORDER: v50, tokens: first(587) };
  if (selectedGuilds.length >= 3) {
    num = selectedGuilds.length + 1;
  }
  const items3 = [num];
  obj4.sections = items3;
  obj4.insetStart = first(587).space.PX_24;
  obj4.insetEnd = first(587).space.PX_12;
  obj4.renderItem = callback;
  obj4.itemSize = v50 + first(587).space.PX_12;
  obj3.children = closure_12(first(6552), obj4);
  return closure_12(first(4612).View, obj3);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(576).c(24);
  guild = guild.guild;
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = guild(576);
  const stateFromStores = guild(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === guild.banner) {
    if (cResult[3] === guild.features) {
      if (cResult[4] === guild.id) {
        if (cResult[5] === stateFromStores) {
          emptyBanner = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const size = { shape: tmp(8469).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
          const items1 = [size];
          cResult[7] = items1;
          let tmp13 = items1;
        } else {
          tmp13 = cResult[7];
        }
        if (cResult[8] === emptyBanner) {
          if (cResult[9] === guild.banner) {
            if (cResult[10] === tmp4.bannerImage) {
              if (cResult[11] === tmp4.emptyBanner) {
                if (cResult[13] === tmp4.guildIcon) {
                  if (cResult[14] === tmp4.guildIconBorder) {
                    let tmp22 = cResult[15];
                  }
                  if (cResult[16] === guild) {
                    if (cResult[17] === tmp22) {
                      if (cResult[18] === tmp23) {
                        let tmp24 = cResult[19];
                      }
                      if (cResult[20] === tmp4.bannerImage) {
                        if (cResult[21] === tmp14) {
                          if (cResult[22] === tmp24) {
                            let tmp29 = cResult[23];
                          }
                          return tmp29;
                        }
                      }
                      const obj2 = { style: tmp4.bannerImage, children: null };
                      const items2 = [tmp14, tmp24];
                      obj2.children = items2;
                      const tmp32 = closure_13(closure_6, obj2);
                      cResult[20] = tmp4.bannerImage;
                      cResult[21] = tmp14;
                      cResult[22] = tmp24;
                      cResult[23] = tmp32;
                      tmp29 = tmp32;
                    }
                  }
                  const obj4 = { style: tmp22, guild, size: tmp(5971).GuildIconSizes.LARGE, animate: !stateFromStores };
                  const tmp28 = closure_12(GuildIconDefault, obj4);
                  cResult[16] = guild;
                  cResult[17] = tmp22;
                  cResult[18] = !stateFromStores;
                  cResult[19] = tmp28;
                  tmp24 = tmp28;
                }
                const items3 = [, ];
                ({ guildIcon: arr4[0], guildIconBorder: arr4[1] } = tmp4);
                cResult[13] = tmp4.guildIcon;
                cResult[14] = tmp4.guildIconBorder;
                cResult[15] = items3;
                tmp22 = items3;
              }
            }
          }
        }
        let tmp16 = importDefault;
        let obj5 = { cutouts: tmp13, children: null };
        if (null != guild.banner) {
          tmp16 = tmp16(5974);
          const obj6 = { style: tmp4.bannerImage, source: emptyBanner, resizeMode: "cover" };
          let tmp15Result = closure_12(tmp16, obj6);
        } else {
          const obj7 = { style: null };
          const items4 = [, ];
          ({ bannerImage: arr3[0], emptyBanner: arr3[1] } = tmp4);
          obj7.style = items4;
          tmp15Result = closure_12(closure_6, obj7);
        }
        obj5.children = tmp15Result;
        obj5 = closure_12(ClipViewDefault, obj5);
        cResult[8] = emptyBanner;
        cResult[9] = guild.banner;
        ({ bannerImage: tmp3[10], emptyBanner } = tmp4);
        cResult[11] = emptyBanner;
        cResult[12] = obj5;
      }
    }
  }
  let hasItem = !stateFromStores;
  if (!stateFromStores) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
  }
  let animatableSourceWithFallback;
  if (null != guild.banner) {
    animatableSourceWithFallback = AvatarUtilsDefault.getAnimatableSourceWithFallback(hasItem, (hasItem) => AvatarUtilsDefault.getGuildBannerSource({ id: guild.id, banner: guild.banner }, hasItem));
  }
  cResult[2] = guild.banner;
  cResult[3] = guild.features;
  cResult[4] = guild.id;
  cResult[5] = stateFromStores;
  cResult[6] = animatableSourceWithFallback;
  emptyBanner = animatableSourceWithFallback;
  const tmpResult = guild(504);
}) : ((guild) => {
  guild = guild.guild;
  const tmp = closure_16();
  const items = [AccessibilityStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let hasItem = !stateFromStores;
  if (!stateFromStores) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    const animatableSourceWithFallback = AvatarUtilsDefault.getAnimatableSourceWithFallback(hasItem, (hasItem) => AvatarUtilsDefault.getGuildBannerSource({ id: guild.id, banner: guild.banner }, hasItem));
  }
  const obj3 = { style: tmp.bannerImage, children: null };
  const obj4 = { cutouts: null, children: null };
  const size = { shape: null, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
  const obj = guild(504);
  size.shape = guild(8469).CutoutShape.RoundedRect;
  const items1 = [size];
  obj4.cutouts = items1;
  if (null != guild.banner) {
    const obj5 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
    let tmp11Result = closure_12(FastImageDefault, obj5);
  } else {
    const obj6 = { style: null };
    const items2 = [, ];
    ({ bannerImage: arr3[0], emptyBanner: arr3[1] } = tmp);
    obj6.style = items2;
    tmp11Result = closure_12(closure_6, obj6);
  }
  obj4.children = tmp11Result;
  const items3 = [closure_12(ClipViewDefault, obj4), ];
  const obj7 = { style: null, guild, size: null, animate: null };
  const items4 = [, ];
  ({ guildIcon: arr5[0], guildIconBorder: arr5[1] } = tmp);
  obj7.style = items4;
  obj7.size = guild(5971).GuildIconSizes.LARGE;
  obj7.animate = !stateFromStores;
  items3[1] = closure_12(GuildIconDefault, obj7);
  obj3.children = items3;
  return closure_13(closure_6, obj3);
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(576).c(42);
  guild = guild.guild;
  ({ selected, loading, handlePress } = guild);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function o() {
      return null != GuildStore.getGuild(guild.id);
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = guild(576);
  const stateFromStores = guild(504).useStateFromStores(first, tmp7);
  if (cResult[3] === guild) {
    if (cResult[4] === handlePress) {
      let tmp9 = cResult[5];
    }
    if (cResult[6] !== guild) {
      const obj2 = { guild };
      const tmp13 = closure_12(closure_21, obj2);
      cResult[6] = guild;
      cResult[7] = tmp13;
      let tmp10 = tmp13;
    } else {
      tmp10 = cResult[7];
    }
    if (cResult[8] === guild.name) {
      if (cResult[9] === tmp4.featuredServerTitle) {
        let tmp14 = cResult[10];
      }
      if (cResult[11] !== guild.description) {
        const obj3 = { maxFontSizeMultiplier: 1, lineClamp: 2, variant: "text-xs/normal", color: "text-default", children: guild.description };
        const tmp19 = closure_12(tmp(4886).Text, obj3);
        cResult[11] = guild.description;
        cResult[12] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[12];
      }
      if (cResult[13] !== selected) {
        const obj4 = { checked: selected };
        cResult[13] = selected;
        cResult[14] = obj4;
        let tmp20 = obj4;
      } else {
        tmp20 = cResult[14];
      }
      if (cResult[15] !== selected) {
        let tmp22;
        if (selected) {
          const obj5 = { size: "sm", color: handlePress(587).colors.CONTROL_CONNECTED_TEXT_DEFAULT };
          tmp22 = closure_12(tmp(4792).CircleCheckIcon, obj5);
        }
        cResult[15] = selected;
        cResult[16] = tmp22;
        let tmp21 = tmp22;
      } else {
        tmp21 = cResult[16];
      }
      if (cResult[17] === stateFromStores) {
        if (cResult[18] === loading) {
          if (cResult[19] === selected) {
            if (stateFromStores) {
              let str = "secondary";
            } else {
              str = "active";
            }
            if (cResult[21] === tmp9) {
              if (cResult[22] === stateFromStores) {
                if (cResult[23] === str) {
                  if (cResult[24] === tmp20) {
                    if (cResult[25] === tmp21) {
                      if (cResult[26] === tmp25) {
                        let tmp31 = cResult[27];
                      }
                      if (cResult[28] === tmp4.buttonContainer) {
                        if (cResult[29] === tmp31) {
                          let tmp34 = cResult[30];
                        }
                        if (cResult[31] === tmp4.featuredServerInnerContainer) {
                          if (cResult[32] === tmp34) {
                            if (cResult[33] === tmp14) {
                              if (cResult[34] === tmp17) {
                                let tmp38 = cResult[35];
                              }
                              if (cResult[36] === tmp9) {
                                if (cResult[37] === tmp4.featuredServerContainer) {
                                  if (cResult[38] === tmp4.pressableUnderlayColor.backgroundColor) {
                                    if (cResult[39] === tmp38) {
                                      if (cResult[40] === tmp10) {
                                        let tmp42 = cResult[41];
                                      }
                                      return tmp42;
                                    }
                                  }
                                }
                              }
                              const obj6 = { underlayColor: tmp4.pressableUnderlayColor.backgroundColor, unstable_pressDelay: 50, style: tmp4.featuredServerContainer, onPress: tmp9, children: null };
                              const items1 = [tmp10, tmp38];
                              obj6.children = items1;
                              const tmp44 = closure_13(tmp(5909).PressableHighlight, obj6);
                              cResult[36] = tmp9;
                              cResult[37] = tmp4.featuredServerContainer;
                              cResult[38] = tmp4.pressableUnderlayColor.backgroundColor;
                              cResult[39] = tmp38;
                              cResult[40] = tmp10;
                              cResult[41] = tmp44;
                              tmp42 = tmp44;
                            }
                          }
                        }
                        const obj7 = { style: tmp4.featuredServerInnerContainer, children: null };
                        const items2 = [tmp14, tmp17, tmp34];
                        obj7.children = items2;
                        const tmp41 = closure_13(closure_6, obj7);
                        cResult[31] = tmp4.featuredServerInnerContainer;
                        cResult[32] = tmp34;
                        cResult[33] = tmp14;
                        cResult[34] = tmp17;
                        cResult[35] = tmp41;
                        tmp38 = tmp41;
                      }
                      const obj8 = { style: tmp4.buttonContainer, children: tmp31 };
                      const tmp37 = closure_12(closure_6, obj8);
                      cResult[28] = tmp4.buttonContainer;
                      cResult[29] = tmp31;
                      cResult[30] = tmp37;
                      tmp34 = tmp37;
                    }
                  }
                }
              }
            }
            const obj9 = { accessibilityHint: "checkbox", accessibilityState: tmp20, disabled: stateFromStores, icon: tmp21, text: cResult[20], size: "sm", onPress: tmp9, variant: str, grow: true };
            const tmp33 = closure_12(tmp(5594).Button, obj9);
            cResult[21] = tmp9;
            cResult[22] = stateFromStores;
            cResult[23] = str;
            cResult[24] = tmp20;
            cResult[25] = tmp21;
            cResult[26] = cResult[20];
            cResult[27] = tmp33;
            tmp31 = tmp33;
          }
        }
      }
      if (stateFromStores) {
        if (!loading) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.cEnaWx);
          cResult[17] = stateFromStores;
          cResult[18] = loading;
          cResult[19] = selected;
          cResult[20] = stringResult;
        }
      }
      const intl2 = tmp(1126).intl;
      const string = intl2.string;
      let t = tmp(1126).t;
      if (selected) {
        t = t["TwueC+"];
        let stringResult1 = string(t);
      } else {
        stringResult1 = string(t.XqMe3N);
      }
    }
    const obj10 = { maxFontSizeMultiplier: 1, style: tmp4.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name };
    const tmp16 = closure_12(tmp(4886).Text, obj10);
    cResult[8] = guild.name;
    cResult[9] = tmp4.featuredServerTitle;
    cResult[10] = tmp16;
    tmp14 = tmp16;
  }
  const fn2 = function y() {
    handlePress(guild);
  };
  cResult[3] = guild;
  cResult[4] = handlePress;
  cResult[5] = fn2;
  tmp9 = fn2;
  const tmpResult = guild(504);
}) : ((guild) => {
  guild = guild.guild;
  ({ selected, handlePress } = guild);
  const tmp = closure_16();
  const items = [GuildStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => null != GuildStore.getGuild(guild.id));
  const items1 = [guild, handlePress];
  const callback = noop.useCallback(() => {
    handlePress(guild);
  }, items1);
  const obj2 = { underlayColor: tmp.pressableUnderlayColor.backgroundColor, unstable_pressDelay: 50, style: tmp.featuredServerContainer, onPress: callback, children: null };
  const items2 = [closure_12(closure_21, { guild }), ];
  const obj3 = { style: tmp.featuredServerInnerContainer, children: null };
  const items3 = [closure_12(guild(4886).Text, { maxFontSizeMultiplier: 1, style: tmp.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name }), closure_12(guild(4886).Text, { maxFontSizeMultiplier: 1, lineClamp: 2, variant: "text-xs/normal", color: "text-default", children: guild.description }), ];
  const obj6 = { style: tmp.buttonContainer, children: null };
  const obj7 = { accessibilityHint: "checkbox", accessibilityState: { checked: selected }, disabled: stateFromStores, icon: null, text: null, size: "sm", onPress: null, variant: null, grow: true };
  let tmp7Result;
  if (selected) {
    const obj8 = { size: "sm", color: handlePress(587).colors.CONTROL_CONNECTED_TEXT_DEFAULT };
    tmp7Result = closure_12(tmp2(4792).CircleCheckIcon, obj8);
  }
  obj7.icon = tmp7Result;
  if (stateFromStores) {
    if (!guild.loading) {
      const intl = tmp2(1126).intl;
      obj7.text = intl.string(tmp2(1126).t.cEnaWx);
      obj7.onPress = callback;
      if (stateFromStores) {
        let str = "secondary";
      } else {
        str = "active";
      }
      obj7.variant = str;
      obj6.children = closure_12(guild(5594).Button, obj7);
      items3[2] = closure_12(closure_6, obj6);
      obj3.children = items3;
      items2[1] = closure_13(closure_6, obj3);
      obj2.children = items2;
      return closure_13(guild(5909).PressableHighlight, obj2);
    }
  }
  const intl2 = tmp2(1126).intl;
  const string = intl2.string;
  let t = tmp2(1126).t;
  if (selected) {
    t = t["TwueC+"];
    string(t);
  } else {
    string(t.XqMe3N);
  }
  const obj = guild(504);
  const obj4 = { maxFontSizeMultiplier: 1, style: tmp.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name };
  const obj5 = { maxFontSizeMultiplier: 1, lineClamp: 2, variant: "text-xs/normal", color: "text-default", children: guild.description };
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(56);
  closure_16();
  const bottom = stateFromStoresArray1(stateFromStores[27])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ICYMIPopularGuildsStore];
    const fn = function c() {
      return closure_10.getOnboardingGuilds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp5, tmp6);
  _require = stateFromStoresArray;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ICYMIPopularGuildsStore];
    const fn2 = function f() {
      return closure_10.getOnboardingCategoryIds();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = require("initialize");
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ICYMIPopularGuildsStore];
    class T {
      constructor() {
        return closure_10.getCurrentOnboardingGuildOffset();
      }
    }
    cResult[4] = items2;
    cResult[5] = T;
    let tmp13 = T;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult3 = require("initialize");
  stateFromStores = require("initialize").useStateFromStores(tmp12, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const _Set = Set;
    class T {
      constructor() {
        return closure_10.getCurrentOnboardingGuildOffset();
      }
    }
    cResult[6] = tmp19;
    let tmp16 = tmp19;
  } else {
    tmp16 = cResult[6];
  }
  [first, _slicedToArray] = noop.useState(tmp16);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [];
    cResult[7] = items3;
    class T {
      constructor() {
        return closure_10.getCurrentOnboardingGuildOffset();
      }
    }
  } else {
    const tmp24 = cResult[7];
  }
  const tmpResult4 = require("initialize");
  [r10091, noop] = noop.useState(tmp24);
  [first1, closure_7] = noop.useState(0);
  if (cResult[8] !== first) {
    class M {
      constructor(arg0) {
        closure_0 = arg0;
        ICYMIAnalytics = closure_0(closure_2[28]).ICYMIAnalytics;
        obj = { guildId: arg0.id, toggled: !closure_3.has(arg0.id) };
        result = ICYMIAnalytics.trackFeedOnboardingGuildToggled(obj);
        tmp2 = closure_4;
        if (closure_3.has(arg0.id)) {
          tmp2Result = tmp2((items) => {
            items.delete(guildId.id);
            return new Set(items);
          });
          tmp7 = closure_5;
          tmp8 = closure_5((arr) => arr.filter(() => { ... }));
        } else {
          tmp2Result1 = tmp2((add) => {
            add.add(guildId.id);
            return new Set(add);
          });
          tmp4 = closure_5;
          tmp5 = closure_5((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
    cResult[8] = first;
    class T {
      constructor() {
        return closure_10.getCurrentOnboardingGuildOffset();
      }
    }
    cResult[9] = M;
  } else {
    class M {
      constructor(arg0) {
        closure_0 = arg0;
        ICYMIAnalytics = closure_0(closure_2[28]).ICYMIAnalytics;
        obj = { guildId: arg0.id, toggled: !closure_3.has(arg0.id) };
        result = ICYMIAnalytics.trackFeedOnboardingGuildToggled(obj);
        tmp2 = closure_4;
        if (closure_3.has(arg0.id)) {
          tmp2Result = tmp2((items) => {
            items.delete(guildId.id);
            return new Set(items);
          });
          tmp7 = closure_5;
          tmp8 = closure_5((arr) => arr.filter(() => { ... }));
        } else {
          tmp2Result1 = tmp2((add) => {
            add.add(guildId.id);
            return new Set(add);
          });
          tmp4 = closure_5;
          tmp5 = closure_5((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
  }
  const handlePress = M;
  [loading, ICYMIPopularGuildsStore] = noop.useState(false);
  if (cResult[10] !== first) {
    class M {
      constructor(arg0) {
        closure_0 = arg0;
        ICYMIAnalytics = closure_0(closure_2[28]).ICYMIAnalytics;
        obj = { guildId: arg0.id, toggled: !closure_3.has(arg0.id) };
        result = ICYMIAnalytics.trackFeedOnboardingGuildToggled(obj);
        tmp2 = closure_4;
        if (closure_3.has(arg0.id)) {
          tmp2Result = tmp2((items) => {
            items.delete(guildId.id);
            return new Set(items);
          });
          tmp7 = closure_5;
          tmp8 = closure_5((arr) => arr.filter(() => { ... }));
        } else {
          tmp2Result1 = tmp2((add) => {
            add.add(guildId.id);
            return new Set(add);
          });
          tmp4 = closure_5;
          tmp5 = closure_5((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
    _require = first(function*() {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1_10(true);
              const _Array = Array;
              c1 = 1;
              c2 = 1;
              const obj5 = { value: stateFromStoresArray1(stateFromStores[29]).gravityJoinGuild(Array.from(first), "icymi_info_modal"), done: false };
              return obj5;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (value) {
              c1 = 2;
              c2 = 1;
              const obj11 = { value: stateFromStoresArray1(stateFromStores[29]).fetchDehydrated({ isReloading: true, forceRefresh: true }), done: false };
              return obj11;
            } else {
              const obj12 = { key: "ICYMIInfoModal", content: null };
              const intl = tmp2(stateFromStores[24]).intl;
              obj12.content = intl.string(tmp2(stateFromStores[24]).t.CG4Hks);
              stateFromStoresArray1(stateFromStores[30]).open(obj12);
              const tmp52Result2 = stateFromStoresArray1(stateFromStores[30]);
              const dehydrated = stateFromStoresArray1(stateFromStores[29]).fetchDehydrated();
              const obj7 = stateFromStoresArray1(stateFromStores[29]);
              const guildChannelScores = stateFromStoresArray1(stateFromStores[29]).getGuildChannelScores();
              const obj8 = stateFromStoresArray1(stateFromStores[29]);
              const recommendedGuilds = stateFromStoresArray1(stateFromStores[29]).getRecommendedGuilds();
              const obj9 = stateFromStoresArray1(stateFromStores[29]);
              stateFromStoresArray1(stateFromStores[31]).popWithKey(tmp2(stateFromStores[32]).ICYMI_INFO_MODAL_KEY);
              c2 = 3;
              const obj13 = { value: undefined, done: true };
              return obj13;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              c1 = 3;
              c2 = 1;
              const obj16 = { value: stateFromStoresArray1(stateFromStores[29]).reloadICYMITab(), done: false };
              return obj16;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const guildChannelScores1 = stateFromStoresArray1(stateFromStores[29]).getGuildChannelScores();
            const obj19 = stateFromStoresArray1(stateFromStores[29]);
            const recommendedGuilds1 = stateFromStoresArray1(stateFromStores[29]).getRecommendedGuilds();
            const obj20 = stateFromStoresArray1(stateFromStores[29]);
            stateFromStoresArray1(stateFromStores[31]).popWithKey(tmp2(stateFromStores[32]).ICYMI_INFO_MODAL_KEY);
            c2 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp34) {
          c2 = tmp;
          throw tmp34;
        }
      }
    });
    const fn3 = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    class T {
      constructor() {
        return closure_10.getCurrentOnboardingGuildOffset();
      }
    }
    cResult[10] = first;
    cResult[11] = fn3;
  } else {
    class M {
      constructor(arg0) {
        closure_0 = arg0;
        ICYMIAnalytics = closure_0(closure_2[28]).ICYMIAnalytics;
        obj = { guildId: arg0.id, toggled: !closure_3.has(arg0.id) };
        result = ICYMIAnalytics.trackFeedOnboardingGuildToggled(obj);
        tmp2 = closure_4;
        if (closure_3.has(arg0.id)) {
          tmp2Result = tmp2((items) => {
            items.delete(guildId.id);
            return new Set(items);
          });
          tmp7 = closure_5;
          tmp8 = closure_5((arr) => arr.filter(() => { ... }));
        } else {
          tmp2Result1 = tmp2((add) => {
            add.add(guildId.id);
            return new Set(add);
          });
          tmp4 = closure_5;
          tmp5 = closure_5((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
  }
  if (cResult[12] === stateFromStoresArray1) {
    class M {
      constructor(arg0) {
        closure_0 = arg0;
        ICYMIAnalytics = closure_0(closure_2[28]).ICYMIAnalytics;
        obj = { guildId: arg0.id, toggled: !closure_3.has(arg0.id) };
        result = ICYMIAnalytics.trackFeedOnboardingGuildToggled(obj);
        tmp2 = closure_4;
        if (closure_3.has(arg0.id)) {
          tmp2Result = tmp2((items) => {
            items.delete(guildId.id);
            return new Set(items);
          });
          tmp7 = closure_5;
          tmp8 = closure_5((arr) => arr.filter(() => { ... }));
        } else {
          tmp2Result1 = tmp2((add) => {
            add.add(guildId.id);
            return new Set(add);
          });
          tmp4 = closure_5;
          tmp5 = closure_5((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
  }
  const fn4 = function q() {
    if (first1 <= stateFromStores) {
      if (length.length < 150) {
        const sum = tmp + ICYMIInfoModalTypes.ICYMI_DISCOVERABLE_GUILDS_PAGE_SIZE;
        closure_7(sum);
        const popularGuildsFromCategories = ICYMIActionCreatorsDefault.fetchPopularGuildsFromCategories(stateFromStoresArray1, sum);
      }
    }
  };
  cResult[12] = stateFromStoresArray1;
  cResult[13] = stateFromStores;
  cResult[14] = first1;
  cResult[15] = stateFromStoresArray.length;
  cResult[16] = fn4;
  const tmp21Result = _slicedToArray(noop.useState(tmp24), 2);
}) : (() => {
  const tmp = closure_16();
  const bottom = stateFromStoresArray1(stateFromStores[27])().bottom;
  let items = [closure_10];
  stateFromStoresArray = stateFromStoresArray(stateFromStores[18]).useStateFromStoresArray(items, () => closure_10.getOnboardingGuilds());
  let obj = stateFromStoresArray(stateFromStores[18]);
  const items1 = [closure_10];
  stateFromStoresArray1 = stateFromStoresArray(stateFromStores[18]).useStateFromStoresArray(items1, () => closure_10.getOnboardingCategoryIds());
  const obj2 = stateFromStoresArray(stateFromStores[18]);
  const items2 = [closure_10];
  stateFromStores = stateFromStoresArray(stateFromStores[18]).useStateFromStores(items2, () => closure_10.getCurrentOnboardingGuildOffset());
  let obj3 = stateFromStoresArray(stateFromStores[18]);
  [extraData, _slicedToArray] = noop.useState(new Set());
  const tmp9 = _slicedToArray(noop.useState([]), 2);
  noop = tmp9[1];
  [first1, closure_7] = noop.useState(0);
  const items3 = [extraData];
  const handlePress = noop.useCallback((guildId) => {
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const result = ICYMIAnalytics.trackFeedOnboardingGuildToggled({ guildId: guildId.id, toggled: !first.has(guildId.id) });
    if (first.has(guildId.id)) {
      closure_4((items) => {
        items.delete(guildId.id);
        return new Set(items);
      });
      closure_5((arr) => arr.filter((id) => id.id !== id.id));
    } else {
      closure_4((add) => {
        add.add(guildId.id);
        return new Set(add);
      });
      closure_5((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
    const obj = { guildId: guildId.id, toggled: !first.has(guildId.id) };
  }, items3);
  [first2, closure_10] = noop.useState(false);
  const items4 = [extraData];
  const items5 = [stateFromStoresArray1, stateFromStores, first1, stateFromStoresArray.length];
  const callback1 = noop.useCallback(extraData(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            stateFromStoresArray = tmp4;
            closure_10(true);
            const _Array = Array;
            v3 = 1;
            dependencyMap = 1;
            const obj5 = { value: v3(8029).gravityJoinGuild(Array.from(first), "icymi_info_modal"), done: false };
            return obj5;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else if (value) {
            v3 = 2;
            dependencyMap = 1;
            const obj11 = { value: tmp51(8029).fetchDehydrated({ isReloading: true, forceRefresh: true }), done: false };
            return obj11;
          } else {
            const obj12 = { key: "ICYMIInfoModal", content: null };
            const intl = stateFromStoresArray(1126).intl;
            obj12.content = intl.string(stateFromStoresArray(1126).t.CG4Hks);
            tmp51(4568).open(obj12);
            const tmp51Result2 = tmp51(4568);
            const dehydrated = v3(8029).fetchDehydrated();
            const obj7 = v3(8029);
            const guildChannelScores = v3(8029).getGuildChannelScores();
            const obj8 = v3(8029);
            const recommendedGuilds = v3(8029).getRecommendedGuilds();
            const obj9 = v3(8029);
            v3(5093).popWithKey(stateFromStoresArray(16407).ICYMI_INFO_MODAL_KEY);
            dependencyMap = 3;
            const obj13 = { value: undefined, done: true };
            return obj13;
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            v3 = 3;
            dependencyMap = 1;
            const obj16 = { value: v3(8029).reloadICYMITab(), done: false };
            return obj16;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const guildChannelScores1 = v3(8029).getGuildChannelScores();
          const obj19 = v3(8029);
          const recommendedGuilds1 = v3(8029).getRecommendedGuilds();
          const obj20 = v3(8029);
          v3(5093).popWithKey(stateFromStoresArray(16407).ICYMI_INFO_MODAL_KEY);
          dependencyMap = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp33) {
        dependencyMap = tmp;
        throw tmp33;
      }
    }
  }), items4);
  const items6 = [first2, extraData, handlePress];
  const callback2 = noop.useCallback(() => {
    if (first1 <= stateFromStores) {
      if (stateFromStoresArray.length < 150) {
        const sum = tmp + ICYMIInfoModalTypes.ICYMI_DISCOVERABLE_GUILDS_PAGE_SIZE;
        closure_7(sum);
        const popularGuildsFromCategories = ICYMIActionCreatorsDefault.fetchPopularGuildsFromCategories(stateFromStoresArray1, sum);
      }
    }
  }, items5);
  const callback3 = noop.useCallback((item) => {
    item = item.item;
    return __initData(closure_22, { guild: item, loading: first2, selected: first.has(item.id), handlePress }, item.id);
  }, items6);
  let obj4 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  let intl = stateFromStoresArray(stateFromStores[24]).intl;
  obj4.children = intl.string(stateFromStoresArray(stateFromStores[24]).t["19ldCF"]);
  const children = [closure_12(stateFromStoresArray(stateFromStores[22]).Text, obj4), , , , , ];
  let obj5 = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: null };
  const intl2 = stateFromStoresArray(stateFromStores[24]).intl;
  obj5.children = intl2.string(stateFromStoresArray(stateFromStores[24]).t.u0KPUS);
  children[1] = closure_12(stateFromStoresArray(stateFromStores[22]).Text, obj5);
  children[2] = closure_12(closure_20, { selectedGuilds: tmp9[0] });
  children[3] = closure_12(first1, { style: tmp.separator });
  let obj7 = { style: tmp.guildsScrollContainer, children: null };
  let obj8 = { data: stateFromStoresArray, extraData, contentContainerStyle: tmp.scrollContentContainer, contentInset: { bottom: 72 + bottom }, numColumns: 2, onEndReached: callback2, onEndReachedThreshold: 0.5, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, renderItem: callback3 };
  obj7.children = closure_12(stateFromStoresArray(stateFromStores[33]).MasonryFlashList, obj8);
  children[4] = closure_12(first1, obj7);
  let tmp20Result = extraData.size >= 1;
  if (tmp20Result) {
    const obj10 = { style: null, children: null };
    let obj11 = { marginBottom: bottom };
    const items8 = [obj11, tmp.footer];
    obj10.style = items8;
    let obj12 = { loading: first2, size: "lg", text: null, onPress: null };
    const intl3 = tmp3(tmp2[24]).intl;
    obj12.text = intl3.string(tmp3(tmp2[24]).t.K50GHd);
    obj12.onPress = callback1;
    obj10.children = closure_12(tmp3(tmp2[25]).Button, obj12);
    tmp20Result = closure_12(first1, obj10);
  }
  children[5] = tmp20Result;
  return closure_13(closure_14, { children });
});