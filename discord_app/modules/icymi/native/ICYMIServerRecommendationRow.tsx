// === Module 16459: ICYMIServerRecommendationRow ===

// Module 16459 (ICYMIServerRecommendationRow)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import Text_Text from "Text/Text" /* 4886 */;
import GuildIconDefault from "GuildIcon" /* 5971 */;
import FastImageDefault from "FastImage" /* 5974 */;
import FastestListDefault from "FastestList" /* 6552 */;
import ClipViewDefault from "ClipView" /* 8469 */;
import ICYMIShared from "ICYMIShared" /* 16435 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import GuildStore from "GuildStore" /* 2074 */;
import ICYMIStore from "ICYMIStore" /* 8011 */;

require = fn;
function FeaturedServer(guild) {
  guild = guild.guild;
  const tmp = closure_18();
  let items = [GuildStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => null != GuildStore.getGuild(guild.id));
  const items1 = [guild.id];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            closure_1(true);
            closure_1(8029).itemInteracted("recommended_guilds", "recommended_guilds", "press_join_guild");
            const obj17 = closure_1(8029);
            let obj5 = { itemId: guild.id, itemType: "recommended_guilds", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "join", actionDestinationType: "guild" } };
            closure_1(8029).feedItemActioned(obj5);
            const obj18 = closure_1(8029);
            const items = [guild.id];
            dependencyMap = 1;
            c3 = 1;
            const obj6 = { value: closure_1(8029).gravityJoinGuild(items, "recommended_guilds"), done: false };
            return obj6;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj7 = { value, done: true };
            return obj7;
          } else if (value) {
            const obj11 = { state: null };
            const obj12 = { analyticsSource: null };
            const obj13 = { page: constants2.ICYMI, section: constants3.ICYMI_RECOMMENDED_SERVERS, object: constants.LIST_ITEM };
            obj12.analyticsSource = obj13;
            obj11.state = obj12;
            closure_128_0 = obj11;
            const result = closure_1(8029).addedRecommendedGuild();
            let obj8 = closure_1(8029);
            const dehydrated = closure_1(8029).fetchDehydrated({ isReloading: true, forceRefresh: true });
            dehydrated.then(asyncGeneratorStep(async () => {
              if (dependencyMap === 2) {
                dependencyMap = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  dependencyMap = 2;
                  if (0 === v2) {
                    if (arg0 === 1) {
                      dependencyMap = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      dependencyMap = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      closure_0 = tmp4;
                      v2 = 1;
                      dependencyMap = 1;
                      const obj5 = { value: v2(8029).reloadICYMITab(), done: false };
                      return obj5;
                    }
                  } else if (1 === tmp4) {
                    if (arg0 === 1) {
                      dependencyMap = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      dependencyMap = 3;
                      const obj7 = { value, done: true };
                      return obj7;
                    } else {
                      v2 = 2;
                      dependencyMap = 1;
                      const obj8 = { value: v2(8029).getGuildChannelScores(), done: false };
                      return obj8;
                    }
                  } else if (arg0 === 1) {
                    dependencyMap = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    dependencyMap = 3;
                    const obj9 = { value, done: true };
                    return obj9;
                  } else {
                    const recommendedGuilds = v2(8029).getRecommendedGuilds();
                    dependencyMap = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp14) {
                  dependencyMap = tmp;
                  throw tmp14;
                }
              }
            }));
            let obj9 = closure_1(8029);
            const obj14 = {};
            const merged = Object.assign(closure_128_0);
            dependencyMap = 2;
            c3 = 1;
            const obj15 = { value: closure_1(5705).transitionToGuildSync(closure_129_0.id, obj14), done: false };
            return obj15;
          } else {
            closure_129_1(false);
            const obj16 = { key: "RecommeendedServersRow", content: null };
            const intl = tmp2(1126).intl;
            obj16.content = intl.string(tmp2(1126).t.CG4Hks);
            closure_1(4568).open(obj16);
            c3 = 3;
            const obj19 = { value: undefined, done: true };
            return obj19;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_129_1(false);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp36) {
        c3 = tmp;
        throw tmp36;
      }
    }
  }), items1);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp4[1];
  let obj2 = { style: tmp.featuredServerContainer, children: null };
  const items2 = [closure_14(closure_19, { guild }), , ];
  let obj3 = { style: tmp.featuredServerInnerContainer, children: null };
  const items3 = [closure_14(guild(4886).Text, { maxFontSizeMultiplier: 1, lineClamp: 1, style: tmp.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name }), closure_14(guild(4886).Text, { maxFontSizeMultiplier: 1, lineClamp: 3, variant: "text-xs/normal", color: "text-default", children: guild.description })];
  obj3.children = items3;
  items2[1] = closure_15(View, obj3);
  let obj6 = { style: tmp.buttonContainer, children: null };
  let obj7 = { disabled: stateFromStores, loading: tmp4[0], text: null, size: "sm", onPress: null, grow: true };
  let intl = guild(1126).intl;
  const string = intl.string;
  const t = guild(1126).t;
  if (stateFromStores) {
    let stringResult = string(t.cEnaWx);
  } else {
    stringResult = string(t.VJlc0S);
  }
  obj7.text = stringResult;
  obj7.onPress = callback;
  obj6.children = closure_14(guild(5594).Button, obj7);
  items2[2] = closure_14(View, obj6);
  obj2.children = items2;
  return closure_15(View, obj2);
}
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticsObjects: c10, AnalyticsPages: closure_11, AnalyticsSections: closure_12, GuildFeatures: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let c17 = 200;
const createICYMIStyles = fn(16394);
let closure_18 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  const obj = { container: { marginVertical: nativeDefault.space.PX_24 }, title: null, subtitle: null, featuredServerInnerContainer: null, buttonContainer: null, featuredServerTitle: null, guildIcon: null, bannerImage: null, emptyBanner: null, featuredServerContainer: null };
  const obj2 = { marginVertical: nativeDefault.space.PX_24 };
  obj.title = { marginBottom: nativeDefault.space.PX_8, marginHorizontal: marginHorizontal.margin };
  const obj3 = { marginBottom: nativeDefault.space.PX_8, marginHorizontal: marginHorizontal.margin };
  obj.subtitle = { marginBottom: nativeDefault.space.PX_16, marginHorizontal: marginHorizontal.margin };
  const obj4 = { marginBottom: nativeDefault.space.PX_16, marginHorizontal: marginHorizontal.margin };
  obj.featuredServerInnerContainer = { marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 };
  const rect = { position: "absolute", bottom: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
  obj.buttonContainer = rect;
  const obj5 = { marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 };
  obj.featuredServerTitle = { marginBottom: nativeDefault.space.PX_8 };
  obj.guildIcon = { position: "absolute", top: 50, left: 12 };
  const size = { height: 72, width };
  obj.bannerImage = size;
  const obj6 = { marginBottom: nativeDefault.space.PX_8 };
  obj.emptyBanner = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  const size1 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, height: 244, width, overflow: "hidden" };
  obj.featuredServerContainer = size1;
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = emptyBanner(576).c(23);
  emptyBanner = guild.guild;
  const tmp4 = closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function l() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = emptyBanner(576);
  const stateFromStores = emptyBanner(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === emptyBanner.banner) {
    if (cResult[3] === emptyBanner.features) {
      if (cResult[4] === emptyBanner.id) {
        if (cResult[5] === stateFromStores) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] !== emptyBanner) {
          const result = tmp(2066).fromClientDiscoverableGuild(emptyBanner);
          cResult[7] = emptyBanner;
          cResult[8] = result;
          let tmp14 = result;
          const tmpResult2 = tmp(2066);
        } else {
          tmp14 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const size = { shape: tmp(8469).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
          const items1 = [size];
          cResult[9] = items1;
          let tmp16 = items1;
        } else {
          tmp16 = cResult[9];
        }
        if (cResult[10] === tmp9) {
          if (cResult[11] === emptyBanner.banner) {
            if (cResult[12] === tmp4.bannerImage) {
              if (cResult[13] === tmp4.emptyBanner) {
                if (cResult[15] === tmp14) {
                  if (cResult[16] === tmp4.guildIcon) {
                    if (cResult[17] === tmp25) {
                      let tmp26 = cResult[18];
                    }
                    if (cResult[19] === tmp4.bannerImage) {
                      if (cResult[20] === tmp17) {
                        if (cResult[21] === tmp26) {
                          let tmp31 = cResult[22];
                        }
                        return tmp31;
                      }
                    }
                    const obj2 = { style: tmp4.bannerImage, children: null };
                    const items2 = [tmp17, tmp26];
                    obj2.children = items2;
                    const tmp34 = closure_15(View, obj2);
                    cResult[19] = tmp4.bannerImage;
                    cResult[20] = tmp17;
                    cResult[21] = tmp26;
                    cResult[22] = tmp34;
                    tmp31 = tmp34;
                  }
                }
                const obj4 = { style: tmp4.guildIcon, guild: tmp14, size: tmp(5971).GuildIconSizes.LARGE, animate: !stateFromStores };
                const tmp30 = closure_14(GuildIconDefault, obj4);
                cResult[15] = tmp14;
                cResult[16] = tmp4.guildIcon;
                cResult[17] = !stateFromStores;
                cResult[18] = tmp30;
                tmp26 = tmp30;
              }
            }
          }
        }
        let tmp19 = importDefault;
        let obj5 = { cutouts: tmp16, children: null };
        if (null != emptyBanner.banner) {
          tmp19 = tmp19(5974);
          const obj6 = { style: tmp4.bannerImage, source: tmp9, resizeMode: "cover" };
          let tmp18Result = closure_14(tmp19, obj6);
        } else {
          const obj7 = { style: null };
          const items3 = [, ];
          ({ bannerImage: arr3[0], emptyBanner: arr3[1] } = tmp4);
          obj7.style = items3;
          tmp18Result = closure_14(View, obj7);
        }
        obj5.children = tmp18Result;
        obj5 = closure_14(ClipViewDefault, obj5);
        cResult[10] = tmp9;
        cResult[11] = emptyBanner.banner;
        ({ bannerImage: tmp3[12], emptyBanner } = tmp4);
        cResult[13] = emptyBanner;
        cResult[14] = obj5;
      }
    }
  }
  let hasItem = !stateFromStores;
  if (!stateFromStores) {
    const features = emptyBanner.features;
    hasItem = features.has(constants.ANIMATED_BANNER);
  }
  let animatableSourceWithFallback;
  if (null != emptyBanner.banner) {
    animatableSourceWithFallback = AvatarUtilsDefault.getAnimatableSourceWithFallback(hasItem, (hasItem) => AvatarUtilsDefault.getGuildBannerSource({ id: emptyBanner.id, banner: emptyBanner.banner }, hasItem));
  }
  cResult[2] = emptyBanner.banner;
  cResult[3] = emptyBanner.features;
  cResult[4] = emptyBanner.id;
  cResult[5] = stateFromStores;
  cResult[6] = animatableSourceWithFallback;
  tmp9 = animatableSourceWithFallback;
  const tmpResult = emptyBanner(504);
}) : ((guild) => {
  guild = guild.guild;
  const tmp = closure_18();
  const items = [AccessibilityStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let hasItem = !stateFromStores;
  if (!stateFromStores) {
    const features = guild.features;
    hasItem = features.has(constants.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    const animatableSourceWithFallback = AvatarUtilsDefault.getAnimatableSourceWithFallback(hasItem, (hasItem) => AvatarUtilsDefault.getGuildBannerSource({ id: guild.id, banner: guild.banner }, hasItem));
  }
  const items1 = [guild];
  const obj3 = { style: tmp.bannerImage, children: null };
  const memo = noop.useMemo(() => GuildRecordUtils.fromClientDiscoverableGuild(guild), items1);
  const obj4 = { cutouts: null, children: null };
  const size = { shape: null, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
  const obj = guild(504);
  size.shape = guild(8469).CutoutShape.RoundedRect;
  const items2 = [size];
  obj4.cutouts = items2;
  if (null != guild.banner) {
    const obj5 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
    let tmp12Result = closure_14(FastImageDefault, obj5);
  } else {
    const obj6 = { style: null };
    const items3 = [, ];
    ({ bannerImage: arr4[0], emptyBanner: arr4[1] } = tmp);
    obj6.style = items3;
    tmp12Result = closure_14(View, obj6);
  }
  obj4.children = tmp12Result;
  const items4 = [closure_14(ClipViewDefault, obj4), ];
  const obj7 = { style: tmp.guildIcon, guild: memo, size: null, animate: null };
  obj7.size = guild(5971).GuildIconSizes.LARGE;
  obj7.animate = !stateFromStores;
  items4[1] = closure_14(GuildIconDefault, obj7);
  obj3.children = items4;
  return closure_15(View, obj3);
});
fn(558);
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((discoverableGuilds) => {
  let sum = dependencyMap;
  const cResult = discoverableGuilds(576).c(7);
  discoverableGuilds = discoverableGuilds.discoverableGuilds;
  if (cResult[0] !== discoverableGuilds) {
    const fn = function n(arg0, arg1) {
      let tmp2 = null;
      if (null != discoverableGuilds[arg1]) {
        const obj = { guild: tmp };
        tmp2 = state(FeaturedServer, obj);
      }
      return tmp2;
    };
    cResult[0] = discoverableGuilds;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (0 === discoverableGuilds.length) {
    return null;
  } else {
    if (cResult[2] !== discoverableGuilds.length) {
      const items = [discoverableGuilds.length];
      cResult[2] = discoverableGuilds.length;
      cResult[3] = items;
      let tmp4 = items;
    } else {
      tmp4 = cResult[3];
    }
    if (cResult[4] === tmp3) {
    }
    const obj2 = { sections: tmp4, insetStart: nativeDefault.space.PX_16, renderItem: tmp3, estimatedListSize: "windowSize", itemSize: null, horizontal: true, listId: "recommended-servers-list", showsHorizontalScrollIndicator: false };
    sum = c17 + nativeDefault.space.PX_16;
    obj2.itemSize = sum;
    const tmp10 = closure_14(FastestListDefault, obj2);
    cResult[4] = tmp3;
    cResult[5] = tmp4;
    cResult[6] = tmp10;
  }
  let obj = discoverableGuilds(576);
}) : ((discoverableGuilds) => {
  discoverableGuilds = discoverableGuilds.discoverableGuilds;
  [][0] = discoverableGuilds;
  let tmp2 = null;
  if (0 !== discoverableGuilds.length) {
    let obj = { sections: null, insetStart: null, renderItem: null, estimatedListSize: "windowSize", itemSize: null, horizontal: true, listId: "recommended-servers-list", showsHorizontalScrollIndicator: false };
    const items = [discoverableGuilds.length];
    obj.sections = items;
    obj.insetStart = nativeDefault.space.PX_16;
    obj.renderItem = tmp;
    obj.itemSize = c17 + nativeDefault.space.PX_16;
    tmp2 = closure_14(FastestListDefault, obj);
  }
  return tmp2;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIServerRecommendationRow.tsx");

export const ICYMIServerRecommendationRow = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ICYMIStore];
    const fn = function n() {
      return discoverableGuilds.getDiscoverableGuilds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresArray = initialize.useStateFromStoresArray(tmp4, tmp5);
  const tmp7 = closure_18();
  if (0 === stateFromStoresArray.length) {
    return null;
  } else {
    const _Symbol3 = Symbol;
    ({ container, title } = tmp7);
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.lv1tce);
      cResult[2] = stringResult;
      let tmp8 = stringResult;
    } else {
      tmp8 = cResult[2];
    }
    if (cResult[3] !== tmp7.title) {
      const obj2 = { style: title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp8 };
      const tmp12 = state(Text_Text.Text, obj2);
      cResult[3] = tmp7.title;
      cResult[4] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.x4OezN);
      cResult[5] = stringResult1;
      let tmp13 = stringResult1;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] !== tmp7.subtitle) {
      const obj3 = { style: tmp7.subtitle, variant: "heading-sm/normal", color: "text-muted", children: tmp13 };
      const tmp17 = state(Text_Text.Text, obj3);
      cResult[6] = tmp7.subtitle;
      cResult[7] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] !== stateFromStoresArray) {
      const obj4 = { discoverableGuilds: stateFromStoresArray };
      const tmp21 = state(closure_21, obj4);
      cResult[8] = stateFromStoresArray;
      cResult[9] = tmp21;
      let tmp18 = tmp21;
    } else {
      tmp18 = cResult[9];
    }
    if (cResult[10] === tmp7.container) {
      if (cResult[11] === tmp10) {
        if (cResult[12] === tmp15) {
          if (cResult[13] === tmp18) {
            let tmp22 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp28 = state(ICYMIShared.Separator, {});
            cResult[15] = tmp28;
            let tmp26 = tmp28;
          } else {
            tmp26 = cResult[15];
          }
          if (cResult[16] !== tmp22) {
            const obj5 = { children: null };
            const items1 = [tmp22, tmp26];
            obj5.children = items1;
            const tmp32 = closure_1_15(value2, obj5);
            cResult[16] = tmp22;
            cResult[17] = tmp32;
            let tmp29 = tmp32;
          } else {
            tmp29 = cResult[17];
          }
          return tmp29;
        }
      }
    }
    const obj6 = { style: container, children: null };
    const items2 = [tmp10, tmp15, tmp18];
    obj6.children = items2;
    const tmp25 = closure_1_15(View, obj6);
    cResult[10] = tmp7.container;
    cResult[11] = tmp10;
    cResult[12] = tmp15;
    cResult[13] = tmp18;
    cResult[14] = tmp25;
    tmp22 = tmp25;
  }
  const tmpResult = initialize;
}) : (() => {
  const items = [ICYMIStore];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => discoverableGuilds.getDiscoverableGuilds());
  const tmp3 = closure_18();
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { children: null };
    const obj3 = { style: tmp3.container, children: null };
    const obj4 = { style: tmp3.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj4.children = intl.string(util.t.lv1tce);
    const items1 = [state(Text_Text.Text, obj4), , ];
    const obj5 = { style: tmp3.subtitle, variant: "heading-sm/normal", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t.x4OezN);
    items1[1] = state(Text_Text.Text, obj5);
    const obj6 = { discoverableGuilds: stateFromStoresArray };
    items1[2] = state(closure_21, obj6);
    obj3.children = items1;
    const items2 = [closure_1_15(View, obj3), state(ICYMIShared.Separator, {})];
    obj2.children = items2;
    tmp4 = closure_1_15(value2, obj2);
  }
  return tmp4;
});