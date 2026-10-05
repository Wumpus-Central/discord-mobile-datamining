// === Module 16428: ICYMIJoinGuildsScreen ===

// Module 16428 (ICYMIJoinGuildsScreen)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import timing from "timing" /* 4891 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import FastImageDefault from "FastImage" /* 5974 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8029 */;
import ClipViewDefault from "ClipView" /* 8469 */;
import ServerIcon2 from "ServerIcon" /* 8791 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 14165 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16411 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import GuildStore from "GuildStore" /* 2074 */;
import ICYMIPopularGuildsStore from "ICYMIPopularGuildsStore" /* 16427 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16394 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let _require, c1, dependencyMap, guild, item, set, tmp2Result, tmp2Result1;

let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
({ View: metroRequire, StyleSheet: metroImportDefault } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let c15 = 50;
let closure_16 = createICYMIStyles.createICYMIStyles((margin) => {
  let rect;
  let size1;
  let size2;
  const obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1, marginHorizontal: margin.margin }, scrollContentContainer: { paddingTop: nativeDefault.space.PX_8 }, footer: rect, title: { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 }, subtitle: { marginHorizontal: nativeDefault.space.PX_24 }, separator: size, featuredServerContainer: { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, overflow: "hidden", marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 }, featuredServerInnerContainer: { marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 }, buttonContainer: { marginBottom: nativeDefault.space.PX_12, marginTop: margin.margin }, featuredServerTitle: { marginBottom: nativeDefault.space.PX_8 }, guildIcon: { position: "absolute", top: 50, left: 12 }, bannerImage: { height: 73, width: "100%" }, emptyBanner: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, guildsScrollContainer: { flex: 1, marginHorizontal: nativeDefault.space.PX_8 }, guildsColumn: { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_16 }, selectedServersRowContainer: size1, selectedServerIcon: size2, noServerContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" }, noServerExtraContainer: { opacity: 0.4 }, pressableUnderlayColor: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE }, guildIconBorder: { borderRadius: nativeDefault.radii.md } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1, marginHorizontal: margin.margin });
  ({ paddingTop: nativeDefault.space.PX_8 });
  rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8 };
  ({ marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 });
  ({ marginHorizontal: nativeDefault.space.PX_24 });
  size = { height: metroImportDefault.hairlineWidth, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  ({ borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, overflow: "hidden", marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 });
  ({ marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 });
  ({ marginBottom: nativeDefault.space.PX_12, marginTop: margin.margin });
  ({ marginBottom: nativeDefault.space.PX_8 });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
  ({ flex: 1, marginHorizontal: nativeDefault.space.PX_8 });
  ({ flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_16 });
  size1 = { height: v50, width: "100%", marginBottom: nativeDefault.space.PX_24 };
  size2 = { flex: 1, width: v50, height: v50, alignItems: "center", justifyContent: "center", borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.md, borderWidth: 1 };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" });
  ({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE });
  ({ borderRadius: nativeDefault.radii.md });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const obj = react2;
  const cResult = obj.c(11);
  guild = guild.guild;
  const index = guild.index;
  const tmp4 = closure_16();
  if (cResult[0] === tmp4.selectedServerIcon) {
    if (cResult[1] === (null == guild && tmp4.noServerContainer)) {
      let tmp8;
      let tmp10;
      if (cResult[2] === (null == guild && index >= 3 && tmp4.noServerExtraContainer)) {
        tmp8 = cResult[3];
      }
      if (cResult[4] === guild) {
        if (cResult[5] === index < 3) {
          let tmp9;
          if (cResult[6] === tmp4.guildIconBorder) {
            tmp9 = cResult[7];
          }
          if (cResult[8] === tmp8) {
            let tmp16;
            if (cResult[9] === tmp9) {
              tmp16 = cResult[10];
            }
            return tmp16;
          }
          const obj2 = { style: tmp8, children: tmp9 };
          const tmp19 = closure_12(metroRequire, obj2);
          cResult[8] = tmp8;
          cResult[9] = tmp9;
          cResult[10] = tmp19;
          tmp16 = tmp19;
        }
      }
      if (null != guild) {
        const obj3 = { style: tmp4.guildIconBorder, guild, size: GuildIcon.GuildIconSizes.LARGE };
        const tmp15 = GuildIconDefault;
        tmp10 = closure_12(tmp15, obj3);
      } else {
        tmp10 = null;
        if (index < 3) {
          const obj4 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
          const ServerIcon = ServerIcon2.ServerIcon;
          tmp10 = closure_12(ServerIcon, obj4);
        }
      }
      cResult[4] = guild;
      cResult[5] = index < 3;
      cResult[6] = tmp4.guildIconBorder;
      cResult[7] = tmp10;
      tmp9 = tmp10;
    }
  }
  const items = [tmp4.selectedServerIcon, null == guild && tmp4.noServerContainer, null == guild && index >= 3 && tmp4.noServerExtraContainer];
  cResult[0] = tmp4.selectedServerIcon;
  cResult[1] = null == guild && tmp4.noServerContainer;
  cResult[2] = null == guild && index >= 3 && tmp4.noServerExtraContainer;
  cResult[3] = items;
  tmp8 = items;
}) : ((guild) => {
  let tmp3Result;
  guild = guild.guild;
  const index = guild.index;
  const tmp = closure_16();
  const items = [tmp.selectedServerIcon, , ];
  const noServerContainer = null == guild && tmp.noServerContainer;
  items[1] = noServerContainer;
  const obj = { style: items, children: tmp3Result };
  const tmp5 = null == guild && index >= 3 && tmp.noServerExtraContainer;
  items[2] = tmp5;
  if (null != guild) {
    const obj2 = { style: tmp.guildIconBorder, guild, size: GuildIcon.GuildIconSizes.LARGE };
    const tmp12 = GuildIconDefault;
    tmp3Result = closure_12(tmp12, obj2);
  } else {
    tmp3Result = null;
    if (index < 3) {
      const obj3 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
      const ServerIcon = ServerIcon2.ServerIcon;
      tmp3Result = closure_12(ServerIcon, obj3);
    }
  }
  return closure_12(metroRequire, obj);
});
const __initData = { code: "function ICYMIJoinGuildsScreenTsx1(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.space.PX_24:0)};}" };
const __initData2 = { code: "function ICYMIJoinGuildsScreenTsx2(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.space.PX_24:0)};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedGuilds) => {
  let closure_2;
  let first;
  let tmp5;
  const tmp = selectedGuilds;
  let obj = selectedGuilds(576);
  const cResult = obj.c(17);
  selectedGuilds = selectedGuilds.selectedGuilds;
  const tmp4 = closure_16();
  if (cResult[0] !== selectedGuilds) {
    const fn = function l(arg0, index) {
      let tmp3;
      if (index < selectedGuilds.length) {
        tmp3 = selectedGuilds[index];
      }
      const obj = { guild: tmp3, index };
      return closure_12(closure_17, obj);
    };
    let num = 0;
    cResult[0] = selectedGuilds;
    let num2 = 1;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  [first, dependencyMap] = react.useState(selectedGuilds.length);
  const ref = react.useRef(null);
  if (cResult[2] === first) {
    let tmp9;
    let tmp10;
    if (cResult[3] === selectedGuilds.length) {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    const effect = react.useEffect(tmp9, tmp10);
    const tmpResult = tmp(4612);
    class G {
      constructor() {
        let num2;
        let num3;
        let withTiming2;
        let withTiming3;
        let num = 0;
        const withTiming = timing.withTiming;
        timing;
        if (selectedGuilds.length > 0) {
          num = 1;
        }
        const obj = { opacity: withTiming(num), height: withTiming2(num2), marginTop: withTiming3(num3) };
        num2 = 0;
        withTiming2 = timing.withTiming;
        timing;
        if (selectedGuilds.length > 0) {
          num2 = c15;
        }
        num3 = 0;
        withTiming3 = timing.withTiming;
        timing;
        if (selectedGuilds.length > 0) {
          num3 = nativeDefault.space.PX_24;
        }
        return obj;
      }
    }
    const useAnimatedStyle = tmpResult.useAnimatedStyle;
    G.__closure = { withTiming: tmp(4891).withTiming, selectedGuilds, SELECTED_SERVER_SIZE_WITH_BORDER: v50, tokens: first(587) };
    let num3 = 2911488630455;
    G.__workletHash = 2911488630455;
    G.__initData = __initData;
    const obj3 = { withTiming: tmp(4891).withTiming, selectedGuilds, SELECTED_SERVER_SIZE_WITH_BORDER: v50, tokens: first(587) };
    const animatedStyle = useAnimatedStyle(G);
    if (cResult[6] === animatedStyle) {
      let tmp17;
      if (cResult[7] === tmp4.selectedServersRowContainer) {
        tmp17 = cResult[8];
      }
      class G {
        constructor() {
          let num2;
          let num3;
          let withTiming2;
          let withTiming3;
          let num = 0;
          const withTiming = timing.withTiming;
          timing;
          if (selectedGuilds.length > 0) {
            num = 1;
          }
          const obj = { opacity: withTiming(num), height: withTiming2(num2), marginTop: withTiming3(num3) };
          num2 = 0;
          withTiming2 = timing.withTiming;
          timing;
          if (selectedGuilds.length > 0) {
            num2 = c15;
          }
          num3 = 0;
          withTiming3 = timing.withTiming;
          timing;
          if (selectedGuilds.length > 0) {
            num3 = nativeDefault.space.PX_24;
          }
          return obj;
        }
      }
      if (cResult[11] === tmp5) {
        let tmp19;
        if (cResult[12] === tmp18) {
          tmp19 = cResult[13];
        }
        if (cResult[14] === tmp17) {
          let tmp23;
          if (cResult[15] === tmp19) {
            tmp23 = cResult[16];
          }
          return tmp23;
        }
        class G {
          constructor() {
            let num2;
            let num3;
            let withTiming2;
            let withTiming3;
            let num = 0;
            const withTiming = timing.withTiming;
            timing;
            if (selectedGuilds.length > 0) {
              num = 1;
            }
            const obj = { opacity: withTiming(num), height: withTiming2(num2), marginTop: withTiming3(num3) };
            num2 = 0;
            withTiming2 = timing.withTiming;
            timing;
            if (selectedGuilds.length > 0) {
              num2 = c15;
            }
            num3 = 0;
            withTiming3 = timing.withTiming;
            timing;
            if (selectedGuilds.length > 0) {
              num3 = nativeDefault.space.PX_24;
            }
            return obj;
          }
        }
        tmp25[0] = tmp17;
        tmp25[1] = tmp19;
        const tmp26 = closure_12(first(4612).View, tmp25);
        cResult[14] = tmp17;
        cResult[15] = tmp19;
        cResult[16] = tmp26;
        tmp23 = tmp26;
      }
      const obj4 = { ref, sections: tmp18, insetStart: first(587).space.PX_24, insetEnd: first(587).space.PX_12, renderItem: tmp5, estimatedListSize: "windowSize", itemSize: v50 + first(587).space.PX_12, horizontal: true, listId: "selected-servers-list", showsHorizontalScrollIndicator: false };
      const tmp14Result = first(6552);
      const tmp22 = closure_12(tmp14Result, obj4);
      cResult[11] = tmp5;
      cResult[12] = tmp18;
      cResult[13] = tmp22;
      tmp19 = tmp22;
    }
    const items = [tmp4.selectedServersRowContainer, animatedStyle];
    cResult[6] = animatedStyle;
    cResult[7] = tmp4.selectedServersRowContainer;
    cResult[8] = items;
    tmp17 = items;
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
}) : ((selectedGuilds) => {
  let closure_2;
  let first;
  let items2;
  let items3;
  let obj4;
  let tmp12;
  selectedGuilds = selectedGuilds.selectedGuilds;
  first = undefined;
  dependencyMap = undefined;
  const items = [selectedGuilds];
  const tmp = closure_16();
  const callback = react.useCallback((arg0, index) => {
    let tmp3;
    if (index < selectedGuilds.length) {
      tmp3 = selectedGuilds[index];
    }
    const obj = { guild: tmp3, index };
    return closure_12(closure_17, obj);
  }, items);
  [first, dependencyMap] = react.useState(selectedGuilds.length);
  const ref = react.useRef(null);
  const items1 = [first, selectedGuilds.length];
  const effect = react.useEffect(() => {
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
  let obj = selectedGuilds(4612);
  const fn = function _() {
    let num2;
    let num3;
    let withTiming2;
    let withTiming3;
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (selectedGuilds.length > 0) {
      num = 1;
    }
    const obj = { opacity: withTiming(num), height: withTiming2(num2), marginTop: withTiming3(num3) };
    num2 = 0;
    withTiming2 = timing.withTiming;
    timing;
    if (selectedGuilds.length > 0) {
      num2 = c15;
    }
    num3 = 0;
    withTiming3 = timing.withTiming;
    timing;
    if (selectedGuilds.length > 0) {
      num3 = nativeDefault.space.PX_24;
    }
    return obj;
  };
  fn.__closure = { withTiming: selectedGuilds(4891).withTiming, selectedGuilds, SELECTED_SERVER_SIZE_WITH_BORDER: v50, tokens: first(587) };
  fn.__workletHash = 13469351702676;
  fn.__initData = __initData2;
  ({ withTiming: selectedGuilds(4891).withTiming, selectedGuilds, SELECTED_SERVER_SIZE_WITH_BORDER: v50, tokens: first(587) });
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items2, children: closure_12(tmp12, obj4) };
  items2 = [tmp.selectedServersRowContainer, animatedStyle];
  const View = first(4612).View;
  let num = 3;
  obj4 = { ref, sections: items3, insetStart: first(587).space.PX_24, insetEnd: first(587).space.PX_12, renderItem: callback, estimatedListSize: "windowSize", itemSize: v50 + first(587).space.PX_12, horizontal: true, listId: "selected-servers-list", showsHorizontalScrollIndicator: false };
  tmp12 = first(6552);
  if (selectedGuilds.length >= 3) {
    let num2 = 1;
    num = selectedGuilds.length + 1;
  }
  items3 = [num];
  return closure_12(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let items2;
  let items4;
  let tmp16Result;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  let obj = guild(576);
  const cResult = obj.c(24);
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
  const tmpResult = guild(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === guild.banner) {
    if (cResult[3] === guild.features) {
      if (cResult[4] === guild.id) {
        let tmp9;
        let tmp14;
        if (cResult[5] === stateFromStores) {
          tmp9 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          size = { shape: guild(8469).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
          const items1 = [size];
          cResult[7] = items1;
          tmp14 = items1;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === tmp9) {
          if (cResult[9] === guild.banner) {
            if (cResult[10] === tmp4.bannerImage) {
              let tmp15;
              if (cResult[11] === tmp4.emptyBanner) {
                tmp15 = cResult[12];
              }
              if (cResult[13] === tmp4.guildIcon) {
                let tmp23;
                if (cResult[14] === tmp4.guildIconBorder) {
                  tmp23 = cResult[15];
                }
                if (cResult[16] === guild) {
                  if (cResult[17] === tmp23) {
                    let tmp25;
                    if (cResult[18] === !stateFromStores) {
                      tmp25 = cResult[19];
                    }
                    if (cResult[20] === tmp4.bannerImage) {
                      if (cResult[21] === tmp15) {
                        let tmp30;
                        if (cResult[22] === tmp25) {
                          tmp30 = cResult[23];
                        }
                        return tmp30;
                      }
                    }
                    let obj2 = { style: tmp4.bannerImage, children: items2 };
                    items2 = [tmp15, tmp25];
                    const tmp33 = closure_13(closure_6, obj2);
                    cResult[20] = tmp4.bannerImage;
                    cResult[21] = tmp15;
                    cResult[22] = tmp25;
                    cResult[23] = tmp33;
                    tmp30 = tmp33;
                  }
                }
                const obj4 = { style: tmp23, guild, size: guild(5971).GuildIconSizes.LARGE, animate: !stateFromStores };
                const tmp28 = GuildIconDefault;
                const tmp29 = closure_12(tmp28, obj4);
                cResult[16] = guild;
                cResult[17] = tmp23;
                cResult[18] = !stateFromStores;
                cResult[19] = tmp29;
                tmp25 = tmp29;
              }
              const items3 = [, ];
              ({ guildIcon: arr4[0], guildIconBorder: arr4[1] } = tmp4);
              cResult[13] = tmp4.guildIcon;
              cResult[14] = tmp4.guildIconBorder;
              cResult[15] = items3;
              tmp23 = items3;
            }
          }
        }
        const obj5 = { cutouts: tmp14, children: tmp16Result };
        const tmp18 = ClipViewDefault;
        if (null != guild.banner) {
          const obj6 = { style: tmp4.bannerImage, source: tmp9, resizeMode: "cover" };
          tmp16Result = closure_12(FastImageDefault, obj6);
        } else {
          const obj7 = { style: items4 };
          items4 = [, ];
          ({ bannerImage: arr3[0], emptyBanner: arr3[1] } = tmp4);
          tmp16Result = closure_12(closure_6, obj7);
        }
        const tmp16Result2 = closure_12(tmp18, obj5);
        cResult[8] = tmp9;
        cResult[9] = guild.banner;
        cResult[10] = tmp4.bannerImage;
        cResult[11] = tmp4.emptyBanner;
        cResult[12] = tmp16Result2;
        tmp15 = tmp16Result2;
      }
    }
  }
  let hasItem = !stateFromStores;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
  }
  let animatableSourceWithFallback;
  if (null != guild.banner) {
    const obj3 = AvatarUtilsDefault;
    animatableSourceWithFallback = obj3.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      const obj = AvatarUtilsDefault;
      const obj2 = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj2, hasItem);
    });
  }
  cResult[2] = guild.banner;
  cResult[3] = guild.features;
  cResult[4] = guild.id;
  cResult[5] = stateFromStores;
  cResult[6] = animatableSourceWithFallback;
  tmp9 = animatableSourceWithFallback;
}) : ((guild) => {
  let animatableSourceWithFallback;
  let items1;
  let items2;
  let items3;
  let items4;
  let tmp11Result;
  let useReducedMotion;
  guild = guild.guild;
  const tmp = closure_16();
  let obj = guild(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let hasItem = !stateFromStores;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    let obj2 = AvatarUtilsDefault;
    animatableSourceWithFallback = obj2.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      const obj = AvatarUtilsDefault;
      const obj2 = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj2, hasItem);
    });
  }
  const obj3 = { style: tmp.bannerImage, children: items3 };
  const obj4 = { cutouts: items1, children: tmp11Result };
  size = { shape: guild(8469).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
  items1 = [size];
  const tmp13 = ClipViewDefault;
  if (null != guild.banner) {
    const obj5 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
    tmp11Result = closure_12(FastImageDefault, obj5);
  } else {
    const obj6 = { style: items2 };
    items2 = [, ];
    ({ bannerImage: arr3[0], emptyBanner: arr3[1] } = tmp);
    tmp11Result = closure_12(closure_6, obj6);
  }
  items3 = [closure_12(tmp13, obj4), ];
  const obj7 = { style: items4, guild, size: guild(5971).GuildIconSizes.LARGE, animate: !stateFromStores };
  items4 = [, ];
  ({ guildIcon: arr5[0], guildIconBorder: arr5[1] } = tmp);
  const tmp12Result = GuildIconDefault;
  items3[1] = closure_12(tmp12Result, obj7);
  return closure_13(closure_6, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let first;
  let handlePress;
  let items1;
  let items2;
  let loading;
  let selected;
  let tmp7;
  const obj = guild(576);
  const cResult = obj.c(42);
  guild = guild.guild;
  ({ selected, loading, handlePress } = guild);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function o() {
      return null != GuildStore.getGuild(guild.id);
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = guild(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === guild) {
    let tmp9;
    let tmp10;
    if (cResult[4] === handlePress) {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== guild) {
      const obj2 = { guild };
      const tmp13 = closure_12(closure_21, obj2);
      cResult[6] = guild;
      cResult[7] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[7];
    }
    if (cResult[8] === guild.name) {
      let tmp14;
      let tmp17;
      let tmp20;
      let tmp21;
      let tmp25;
      let stringResult1;
      if (cResult[9] === tmp4.featuredServerTitle) {
        tmp14 = cResult[10];
      }
      if (cResult[11] !== guild.description) {
        const obj3 = { maxFontSizeMultiplier: 1, lineClamp: 2, variant: "text-xs/normal", color: "text-default", children: guild.description };
        const tmp19 = closure_12(guild(4886).Text, obj3);
        cResult[11] = guild.description;
        cResult[12] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[12];
      }
      if (cResult[13] !== selected) {
        const obj4 = { checked: selected };
        cResult[13] = selected;
        cResult[14] = obj4;
        tmp20 = obj4;
      } else {
        tmp20 = cResult[14];
      }
      if (cResult[15] !== selected) {
        let tmp22;
        if (selected) {
          const obj5 = { size: "sm", color: handlePress(587).colors.CONTROL_CONNECTED_TEXT_DEFAULT };
          const CircleCheckIcon = tmp(4792).CircleCheckIcon;
          tmp22 = closure_12(CircleCheckIcon, obj5);
        }
        cResult[15] = selected;
        cResult[16] = tmp22;
        tmp21 = tmp22;
      } else {
        tmp21 = cResult[16];
      }
      if (cResult[17] === stateFromStores) {
        if (cResult[18] === loading) {
          let str;
          if (cResult[19] === selected) {
            tmp25 = cResult[20];
          }
          if (stateFromStores) {
            str = "secondary";
          } else {
            str = "active";
          }
          if (cResult[21] === tmp9) {
            if (cResult[22] === stateFromStores) {
              if (cResult[23] === str) {
                if (cResult[24] === tmp20) {
                  if (cResult[25] === tmp21) {
                    let tmp28;
                    if (cResult[26] === tmp25) {
                      tmp28 = cResult[27];
                    }
                    if (cResult[28] === tmp4.buttonContainer) {
                      let tmp31;
                      if (cResult[29] === tmp28) {
                        tmp31 = cResult[30];
                      }
                      if (cResult[31] === tmp4.featuredServerInnerContainer) {
                        if (cResult[32] === tmp31) {
                          if (cResult[33] === tmp14) {
                            let tmp35;
                            if (cResult[34] === tmp17) {
                              tmp35 = cResult[35];
                            }
                            if (cResult[36] === tmp9) {
                              if (cResult[37] === tmp4.featuredServerContainer) {
                                if (cResult[38] === tmp4.pressableUnderlayColor.backgroundColor) {
                                  if (cResult[39] === tmp35) {
                                    let tmp39;
                                    if (cResult[40] === tmp10) {
                                      tmp39 = cResult[41];
                                    }
                                    return tmp39;
                                  }
                                }
                              }
                            }
                            const obj6 = { underlayColor: tmp4.pressableUnderlayColor.backgroundColor, unstable_pressDelay: 50, style: tmp4.featuredServerContainer, onPress: tmp9, children: items1 };
                            items1 = [tmp10, tmp35];
                            const tmp41 = closure_13(guild(5909).PressableHighlight, obj6);
                            cResult[36] = tmp9;
                            cResult[37] = tmp4.featuredServerContainer;
                            cResult[38] = tmp4.pressableUnderlayColor.backgroundColor;
                            cResult[39] = tmp35;
                            cResult[40] = tmp10;
                            cResult[41] = tmp41;
                            tmp39 = tmp41;
                          }
                        }
                      }
                      const obj7 = { style: tmp4.featuredServerInnerContainer, children: items2 };
                      items2 = [tmp14, tmp17, tmp31];
                      const tmp38 = closure_13(closure_6, obj7);
                      cResult[31] = tmp4.featuredServerInnerContainer;
                      cResult[32] = tmp31;
                      cResult[33] = tmp14;
                      cResult[34] = tmp17;
                      cResult[35] = tmp38;
                      tmp35 = tmp38;
                    }
                    const obj8 = { style: tmp4.buttonContainer, children: tmp28 };
                    const tmp34 = closure_12(closure_6, obj8);
                    cResult[28] = tmp4.buttonContainer;
                    cResult[29] = tmp28;
                    cResult[30] = tmp34;
                    tmp31 = tmp34;
                  }
                }
              }
            }
          }
          const obj9 = { accessibilityHint: "checkbox", accessibilityState: tmp20, disabled: stateFromStores, icon: tmp21, text: tmp25, size: "sm", onPress: tmp9, variant: str, grow: true };
          const tmp30 = closure_12(guild(5594).Button, obj9);
          cResult[21] = tmp9;
          cResult[22] = stateFromStores;
          cResult[23] = str;
          cResult[24] = tmp20;
          cResult[25] = tmp21;
          cResult[26] = tmp25;
          cResult[27] = tmp30;
          tmp28 = tmp30;
        }
      }
      if (stateFromStores) {
        let stringResult;
        if (!loading) {
          const intl = tmp(1126).intl;
          stringResult = intl.string(tmp(1126).t.cEnaWx);
        }
        cResult[17] = stateFromStores;
        cResult[18] = loading;
        cResult[19] = selected;
        cResult[20] = stringResult;
        tmp25 = stringResult;
      }
      const intl2 = tmp(1126).intl;
      const string = intl2.string;
      const t = tmp(1126).t;
      if (selected) {
        stringResult1 = string(t["TwueC+"]);
      } else {
        stringResult1 = string(t.XqMe3N);
      }
      stringResult = stringResult1;
    }
    const obj10 = { maxFontSizeMultiplier: 1, style: tmp4.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name };
    const tmp16 = closure_12(guild(4886).Text, obj10);
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
}) : ((guild) => {
  let handlePress;
  let selected;
  let stringResult1;
  let tmp7Result;
  guild = guild.guild;
  ({ selected, handlePress } = guild);
  const loading = guild.loading;
  const tmp = closure_16();
  const items = [GuildStore];
  const obj = guild(504);
  const stateFromStores = obj.useStateFromStores(items, () => null != GuildStore.getGuild(guild.id));
  const items1 = [guild, handlePress];
  const callback = react.useCallback(() => {
    handlePress(guild);
  }, items1);
  const obj2 = { underlayColor: tmp.pressableUnderlayColor.backgroundColor, unstable_pressDelay: 50, style: tmp.featuredServerContainer, onPress: callback, children: null };
  const PressableHighlight = guild(5909).PressableHighlight;
  const items2 = [closure_12(closure_21, { guild }), ];
  const obj3 = { style: tmp.featuredServerInnerContainer, children: null };
  const items3 = [, , ];
  const obj4 = { maxFontSizeMultiplier: 1, style: tmp.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name };
  items3[0] = closure_12(guild(4886).Text, obj4);
  const obj5 = { maxFontSizeMultiplier: 1, lineClamp: 2, variant: "text-xs/normal", color: "text-default", children: guild.description };
  items3[1] = closure_12(guild(4886).Text, obj5);
  const obj6 = { style: tmp.buttonContainer, children: null };
  const obj7 = { accessibilityHint: "checkbox", accessibilityState: { checked: selected }, disabled: stateFromStores, icon: tmp7Result, text: null, size: "sm", onPress: null, variant: null, grow: true };
  tmp7Result = undefined;
  const Button = guild(5594).Button;
  if (selected) {
    const obj8 = { size: "sm", color: handlePress(587).colors.CONTROL_CONNECTED_TEXT_DEFAULT };
    const CircleCheckIcon = tmp2(4792).CircleCheckIcon;
    tmp7Result = closure_12(CircleCheckIcon, obj8);
  }
  if (stateFromStores) {
    let stringResult;
    let str;
    if (!loading) {
      const intl = tmp2(1126).intl;
      stringResult = intl.string(tmp2(1126).t.cEnaWx);
    }
    obj7.text = stringResult;
    obj7.onPress = callback;
    if (stateFromStores) {
      str = "secondary";
    } else {
      str = "active";
    }
    obj7.variant = str;
    obj6.children = closure_12(Button, obj7);
    items3[2] = closure_12(closure_6, obj6);
    obj3.children = items3;
    items2[1] = closure_13(closure_6, obj3);
    obj2.children = items2;
    return closure_13(PressableHighlight, obj2);
  }
  const intl2 = tmp2(1126).intl;
  const string = intl2.string;
  const t = tmp2(1126).t;
  if (selected) {
    stringResult1 = string(t["TwueC+"]);
  } else {
    stringResult1 = string(t.XqMe3N);
  }
  stringResult = stringResult1;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function() {
  let closure_10;
  let closure_4;
  let closure_7;
  let first;
  let first1;
  let loading;
  let stateFromStores;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp22;
  let tmp26;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  const tmp = stateFromStoresArray;
  let obj = stateFromStoresArray(stateFromStores[12]);
  const cResult = obj.c(56);
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
  const tmpResult = tmp(stateFromStores[18]);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ICYMIPopularGuildsStore];
    const fn2 = function f() {
      return closure_10.getOnboardingCategoryIds();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = tmp(stateFromStores[18]);
  stateFromStoresArray1 = tmpResult3.useStateFromStoresArray(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ICYMIPopularGuildsStore];
    class T {
      constructor() {
        return closure_10.getCurrentOnboardingGuildOffset();
      }
    }
    cResult[4] = items2;
    cResult[5] = T;
    tmp13 = T;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult4 = tmp(stateFromStores[18]);
  stateFromStores = tmpResult4.useStateFromStores(tmp12, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    class T {
      constructor() {
        return closure_10.getCurrentOnboardingGuildOffset();
      }
    }
    cResult[6] = tmp17;
    tmp16 = tmp17;
  } else {
    tmp16 = cResult[6];
  }
  [first, _slicedToArray] = react.useState(tmp16);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [];
    cResult[7] = items3;
    class T {
      constructor() {
        return closure_10.getCurrentOnboardingGuildOffset();
      }
    }
  } else {
    tmp22 = cResult[7];
  }
  const tmp19Result = _slicedToArray(react.useState(tmp22), 2);
  [r10091, react] = tmp19Result;
  [first1, closure_7] = react.useState(0);
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
            items.delete(user.id);
            set = new Set(items);
            return set;
          });
          tmp7 = closure_5;
          tmp8 = closure_5((arr) => {
            let id;
            return arr.filter(() => { /* body not rendered: F153401 */ });
          });
        } else {
          tmp2Result1 = tmp2((add) => {
            add.add(user.id);
            set = new Set(add);
            return set;
          });
          tmp4 = closure_5;
          tmp5 = closure_5((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = user;
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
    tmp26 = M;
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
            items.delete(user.id);
            set = new Set(items);
            return set;
          });
          tmp7 = closure_5;
          tmp8 = closure_5((arr) => {
            let id;
            return arr.filter(() => { /* body not rendered: F153401 */ });
          });
        } else {
          tmp2Result1 = tmp2((add) => {
            add.add(user.id);
            set = new Set(add);
            return set;
          });
          tmp4 = closure_5;
          tmp5 = closure_5((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = user;
            return items;
          });
        }
        return;
      }
    }
  }
  M = tmp26;
  [loading, ICYMIPopularGuildsStore] = react.useState(false);
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
            items.delete(user.id);
            set = new Set(items);
            return set;
          });
          tmp7 = closure_5;
          tmp8 = closure_5((arr) => {
            let id;
            return arr.filter(() => { /* body not rendered: F153401 */ });
          });
        } else {
          tmp2Result1 = tmp2((add) => {
            add.add(user.id);
            set = new Set(add);
            return set;
          });
          tmp4 = closure_5;
          tmp5 = closure_5((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = user;
            return items;
          });
        }
        return;
      }
    }
    _require = first(function*() {
      let intl;
      let obj14;
      let obj2;
      let tmp51Result;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj5 = { value: obj14.gravityJoinGuild(Array.from(first), "icymi_info_modal"), done: false };
              obj14 = stateFromStoresArray1(stateFromStores[29]);
              return obj5;
            }
          } else if (1 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else if (value) {
              c1 = 2;
              c2 = 1;
              const obj11 = { value: tmp51Result.fetchDehydrated({ isReloading: true, forceRefresh: true }), done: false };
              tmp51Result = stateFromStoresArray1(stateFromStores[29]);
              return obj11;
            } else {
              const obj12 = { key: "ICYMIInfoModal", content: intl.string(tmp(stateFromStores[24]).t.CG4Hks) };
              const open = stateFromStoresArray1(stateFromStores[30]).open;
              const tmp51Result2 = stateFromStoresArray1(stateFromStores[30]);
              intl = tmp(stateFromStores[24]).intl;
              open(obj12);
              const obj6 = stateFromStoresArray1(stateFromStores[29]);
              const dehydrated = obj6.fetchDehydrated();
              const obj7 = stateFromStoresArray1(stateFromStores[29]);
              const guildChannelScores = obj7.getGuildChannelScores();
              const obj8 = stateFromStoresArray1(stateFromStores[29]);
              const recommendedGuilds = obj8.getRecommendedGuilds();
              const obj9 = stateFromStoresArray1(stateFromStores[31]);
              obj9.popWithKey(tmp(stateFromStores[32]).ICYMI_INFO_MODAL_KEY);
              c2 = 3;
              const obj13 = { value: undefined, done: true };
              return obj13;
            }
          } else if (2 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              c1 = 3;
              c2 = 1;
              const obj16 = { value: obj2.reloadICYMITab(), done: false };
              obj2 = stateFromStoresArray1(stateFromStores[29]);
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
            const obj18 = stateFromStoresArray1(stateFromStores[29]);
            const guildChannelScores1 = obj18.getGuildChannelScores();
            const obj19 = stateFromStoresArray1(stateFromStores[29]);
            const recommendedGuilds1 = obj19.getRecommendedGuilds();
            const obj20 = stateFromStoresArray1(stateFromStores[31]);
            obj20.popWithKey(tmp(stateFromStores[32]).ICYMI_INFO_MODAL_KEY);
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp34) {
          c2 = 3;
          throw tmp34;
        }
      }
    });
    const fn3 = function() {
      return closure_0(...arguments);
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
            items.delete(user.id);
            set = new Set(items);
            return set;
          });
          tmp7 = closure_5;
          tmp8 = closure_5((arr) => {
            let id;
            return arr.filter(() => { /* body not rendered: F153401 */ });
          });
        } else {
          tmp2Result1 = tmp2((add) => {
            add.add(user.id);
            set = new Set(add);
            return set;
          });
          tmp4 = closure_5;
          tmp5 = closure_5((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = user;
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
            items.delete(user.id);
            set = new Set(items);
            return set;
          });
          tmp7 = closure_5;
          tmp8 = closure_5((arr) => {
            let id;
            return arr.filter(() => { /* body not rendered: F153401 */ });
          });
        } else {
          tmp2Result1 = tmp2((add) => {
            add.add(user.id);
            set = new Set(add);
            return set;
          });
          tmp4 = closure_5;
          tmp5 = closure_5((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = user;
            return items;
          });
        }
        return;
      }
    }
  }
  const fn4 = function q() {
    if (first1 <= stateFromStores) {
      if (stateFromStoresArray.length < 150) {
        const sum = tmp + ICYMIInfoModalTypes.ICYMI_DISCOVERABLE_GUILDS_PAGE_SIZE;
        closure_7(sum);
        const obj = ICYMIActionCreatorsDefault;
        const popularGuildsFromCategories = obj.fetchPopularGuildsFromCategories(stateFromStoresArray1, sum);
      }
    }
  };
  cResult[12] = stateFromStoresArray1;
  cResult[13] = stateFromStores;
  cResult[14] = first1;
  cResult[15] = stateFromStoresArray.length;
  cResult[16] = fn4;
}) : (() => {
  let Button;
  let closure_10;
  let closure_4;
  let closure_5;
  let closure_7;
  let extraData;
  let first1;
  let first2;
  let first3;
  let intl;
  let intl2;
  let intl3;
  let items8;
  let obj12;
  let obj8;
  let obj9;
  let stateFromStores;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  const tmp = closure_16();
  const tmp2 = stateFromStores;
  const bottom = stateFromStoresArray1(stateFromStores[27])().bottom;
  const tmp3 = stateFromStoresArray;
  let obj = stateFromStoresArray(stateFromStores[18]);
  let items = [closure_10];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => closure_10.getOnboardingGuilds());
  let obj2 = stateFromStoresArray(stateFromStores[18]);
  const items1 = [closure_10];
  stateFromStoresArray1 = obj2.useStateFromStoresArray(items1, () => closure_10.getOnboardingCategoryIds());
  let obj3 = stateFromStoresArray(stateFromStores[18]);
  const items2 = [closure_10];
  stateFromStores = obj3.useStateFromStores(items2, () => closure_10.getCurrentOnboardingGuildOffset());
  const useState = react.useState;
  set = new Set();
  [extraData, _slicedToArray] = useState(set);
  [first1, react] = react.useState([]);
  [first2, closure_7] = react.useState(0);
  const items3 = [extraData];
  const handlePress = react.useCallback((guildId) => {
    let closure_0 = guildId;
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const obj = { guildId: guildId.id, toggled: !first.has(guildId.id) };
    const result = ICYMIAnalytics.trackFeedOnboardingGuildToggled(obj);
    if (first.has(guildId.id)) {
      closure_4((items) => {
        items.delete(user.id);
        set = new Set(items);
        return set;
      });
      closure_5((arr) => {
        let id;
        return arr.filter((id) => id.id !== id.id);
      });
    } else {
      closure_4((add) => {
        add.add(user.id);
        set = new Set(add);
        return set;
      });
      closure_5((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = user;
        return items;
      });
    }
  }, items3);
  [first3, closure_10] = react.useState(false);
  const items4 = [extraData];
  const items5 = [stateFromStoresArray1, stateFromStores, first2, stateFromStoresArray.length];
  const callback1 = react.useCallback(extraData(function*() {
    let c2;
    let closure_0;
    let intl;
    let v3;
    if (stateFromStores === 2) {
      stateFromStores = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        stateFromStores = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            stateFromStoresArray = tmp3;
            closure_10(true);
            const _Array = Array;
            const obj14 = v3(stateFromStores[29]);
            v3 = 1;
            stateFromStores = 1;
            const obj5 = { value: obj14.gravityJoinGuild(Array.from(first), "icymi_info_modal"), done: false };
            return obj5;
          }
        } else if (1 === v3) {
          if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else if (value) {
            const tmp50Result = v3(stateFromStores[29]);
            v3 = 2;
            stateFromStores = 1;
            const obj11 = { value: tmp50Result.fetchDehydrated({ isReloading: true, forceRefresh: true }), done: false };
            return obj11;
          } else {
            const obj12 = { key: "ICYMIInfoModal", content: intl.string(stateFromStoresArray(stateFromStores[24]).t.CG4Hks) };
            const open = v3(stateFromStores[30]).open;
            const tmp50Result2 = v3(stateFromStores[30]);
            intl = stateFromStoresArray(stateFromStores[24]).intl;
            open(obj12);
            const obj6 = v3(stateFromStores[29]);
            const dehydrated = obj6.fetchDehydrated();
            const obj7 = v3(stateFromStores[29]);
            const guildChannelScores = obj7.getGuildChannelScores();
            const obj8 = v3(stateFromStores[29]);
            const recommendedGuilds = obj8.getRecommendedGuilds();
            const obj9 = v3(stateFromStores[31]);
            obj9.popWithKey(stateFromStoresArray(stateFromStores[32]).ICYMI_INFO_MODAL_KEY);
            stateFromStores = 3;
            const obj13 = { value: undefined, done: true };
            return obj13;
          }
        } else if (2 === v3) {
          if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            const obj2 = v3(stateFromStores[29]);
            v3 = 3;
            stateFromStores = 1;
            const obj16 = { value: obj2.reloadICYMITab(), done: false };
            return obj16;
          }
        } else if (arg0 === 1) {
          stateFromStores = 3;
          throw value;
        } else if (arg0 === 2) {
          stateFromStores = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const obj18 = v3(stateFromStores[29]);
          const guildChannelScores1 = obj18.getGuildChannelScores();
          const obj19 = v3(stateFromStores[29]);
          const recommendedGuilds1 = obj19.getRecommendedGuilds();
          const obj20 = v3(stateFromStores[31]);
          obj20.popWithKey(stateFromStoresArray(stateFromStores[32]).ICYMI_INFO_MODAL_KEY);
          stateFromStores = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp33) {
        stateFromStores = 3;
        throw tmp33;
      }
    }
  }), items4);
  const items6 = [first3, extraData, handlePress];
  const callback2 = react.useCallback(() => {
    if (first2 <= stateFromStores) {
      if (stateFromStoresArray.length < 150) {
        const sum = tmp + ICYMIInfoModalTypes.ICYMI_DISCOVERABLE_GUILDS_PAGE_SIZE;
        closure_7(sum);
        const obj = ICYMIActionCreatorsDefault;
        const popularGuildsFromCategories = obj.fetchPopularGuildsFromCategories(stateFromStoresArray1, sum);
      }
    }
  }, items5);
  const callback3 = react.useCallback((item) => {
    item = item.item;
    const obj = { guild: item, loading: first3, selected: first.has(item.id), handlePress };
    return closure_12(closure_22, obj, item.id);
  }, items6);
  let obj4 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: intl.string(stateFromStoresArray(stateFromStores[24]).t["19ldCF"]) };
  const Text = stateFromStoresArray(stateFromStores[22]).Text;
  intl = stateFromStoresArray(stateFromStores[24]).intl;
  const children = [closure_12(Text, obj4), , , , , ];
  let obj5 = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: intl2.string(stateFromStoresArray(stateFromStores[24]).t.u0KPUS) };
  const Text2 = stateFromStoresArray(stateFromStores[22]).Text;
  intl2 = stateFromStoresArray(stateFromStores[24]).intl;
  children[1] = closure_12(Text2, obj5);
  children[2] = closure_12(closure_20, { selectedGuilds: first1 });
  let obj6 = { style: tmp.separator };
  children[3] = closure_12(first2, obj6);
  let obj7 = { style: tmp.guildsScrollContainer, children: closure_12(stateFromStoresArray(stateFromStores[33]).MasonryFlashList, obj8) };
  obj8 = { data: stateFromStoresArray, extraData, contentContainerStyle: tmp.scrollContentContainer, contentInset: obj9, numColumns: 2, onEndReached: callback2, onEndReachedThreshold: 0.5, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, renderItem: callback3 };
  obj9 = { bottom: 72 + bottom };
  children[4] = closure_12(first2, obj7);
  let tmp21Result = extraData.size >= 1;
  const tmp22 = first2;
  if (tmp21Result) {
    let obj10 = { style: items8, children: closure_12(Button, obj12) };
    let obj11 = { marginBottom: bottom };
    items8 = [obj11, tmp.footer];
    obj12 = { loading: first3, size: "lg", text: intl3.string(tmp3(tmp2[24]).t.K50GHd), onPress: callback1 };
    Button = tmp3(tmp2[25]).Button;
    intl3 = tmp3(tmp2[24]).intl;
    tmp21Result = closure_12(tmp22, obj10);
  }
  children[5] = tmp21Result;
  return closure_13(closure_14, { children });
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx");

export default tmp4;