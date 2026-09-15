// === Module 16627: ICYMIServerRecommendationRow ===

// Module 16627 (ICYMIServerRecommendationRow)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1972 */;
import Text_Text from "Text/Text" /* 4635 */;
import GuildIconDefault from "GuildIcon" /* 5669 */;
import FastImageDefault from "FastImage" /* 5672 */;
import FastestListDefault from "FastestList" /* 7162 */;
import ClipViewDefault from "ClipView" /* 8943 */;
import ICYMIShared from "ICYMIShared" /* 16601 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4631 */;
import GuildStore from "GuildStore" /* 1980 */;
import ICYMIStore from "ICYMIStore" /* 8456 */;

require = fn;
function CutoutGuildBanner(guild) {
  guild = guild.guild;
  const tmp = closure_17();
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
  size.shape = guild(8943).CutoutShape.RoundedRect;
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
  obj7.size = guild(5669).GuildIconSizes.LARGE;
  obj7.animate = !stateFromStores;
  items4[1] = closure_14(GuildIconDefault, obj7);
  obj3.children = items4;
  return closure_15(View, obj3);
}
function FeaturedServer(guild) {
  guild = guild.guild;
  const tmp = closure_17();
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
        return { value: "HermesInternal", done: null };
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
            closure_1(8472).itemInteracted("recommended_guilds", "recommended_guilds", "press_join_guild");
            const obj17 = closure_1(8472);
            let obj5 = { itemId: guild.id, itemType: "recommended_guilds", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "join", actionDestinationType: "guild" } };
            closure_1(8472).feedItemActioned(obj5);
            const obj18 = closure_1(8472);
            const items = [guild.id];
            dependencyMap = 1;
            c3 = 1;
            const obj6 = { value: closure_1(8472).gravityJoinGuild(items, "recommended_guilds"), done: false };
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
            const result = closure_1(8472).addedRecommendedGuild();
            let obj8 = closure_1(8472);
            const dehydrated = closure_1(8472).fetchDehydrated({ isReloading: true, forceRefresh: true });
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
                  return { value: "HermesInternal", done: null };
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
                      const obj5 = { value: v2(8472).reloadICYMITab(), done: false };
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
                      const obj8 = { value: v2(8472).getGuildChannelScores(), done: false };
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
                    const recommendedGuilds = v2(8472).getRecommendedGuilds();
                    dependencyMap = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp14) {
                  dependencyMap = tmp;
                  throw tmp14;
                }
              }
            }));
            let obj9 = closure_1(8472);
            const obj14 = {};
            const merged = Object.assign(closure_128_0);
            dependencyMap = 2;
            c3 = 1;
            const obj15 = { value: closure_1(5605).transitionToGuildSync(closure_129_0.id, obj14), done: false };
            return obj15;
          } else {
            closure_129_1(false);
            const obj16 = { key: "RecommeendedServersRow", content: null };
            const intl = tmp2(1115).intl;
            obj16.content = intl.string(tmp2(1115).t.CG4Hks);
            closure_1(4338).open(obj16);
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
          return { value: "HermesInternal", done: null };
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
  const items2 = [closure_14(CutoutGuildBanner, { guild }), , ];
  let obj3 = { style: tmp.featuredServerInnerContainer, children: null };
  const items3 = [closure_14(guild(4635).Text, { maxFontSizeMultiplier: 1, lineClamp: 1, style: tmp.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name }), closure_14(guild(4635).Text, { maxFontSizeMultiplier: 1, lineClamp: 3, variant: "text-xs/normal", color: "text-default", children: guild.description })];
  obj3.children = items3;
  items2[1] = closure_15(View, obj3);
  let obj6 = { style: tmp.buttonContainer, children: null };
  let obj7 = { disabled: stateFromStores, loading: tmp4[0], text: null, size: "sm", onPress: null, grow: true };
  let intl = guild(1115).intl;
  const string = intl.string;
  const t = guild(1115).t;
  if (stateFromStores) {
    let stringResult = string(t.cEnaWx);
  } else {
    stringResult = string(t.VJlc0S);
  }
  obj7.text = stringResult;
  obj7.onPress = callback;
  obj6.children = closure_14(guild(5059).Button, obj7);
  items2[2] = closure_14(View, obj6);
  obj2.children = items2;
  return closure_15(View, obj2);
}
function RecommendedGuildsRow(discoverableGuilds) {
  discoverableGuilds = discoverableGuilds.discoverableGuilds;
  [][0] = discoverableGuilds;
  let tmp2 = null;
  if (0 !== discoverableGuilds.length) {
    let obj = { sections: null, insetStart: null, renderItem: null, estimatedListSize: "windowSize", itemSize: null, horizontal: true, listId: "recommended-servers-list", showsHorizontalScrollIndicator: false };
    const items = [discoverableGuilds.length];
    obj.sections = items;
    obj.insetStart = nativeDefault.space.PX_16;
    obj.renderItem = tmp;
    obj.itemSize = 200 + nativeDefault.space.PX_16;
    tmp2 = closure_14(FastestListDefault, obj);
  }
  return tmp2;
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsObjects: c10, AnalyticsPages: closure_11, AnalyticsSections: closure_12, GuildFeatures: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createICYMIStyles = fn(16562);
let closure_17 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
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
  obj.bannerImage = { height: 72, width: 200 };
  const obj6 = { marginBottom: nativeDefault.space.PX_8 };
  obj.emptyBanner = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  const size = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, height: 244, width: 200, overflow: "hidden" };
  obj.featuredServerContainer = size;
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIServerRecommendationRow.tsx");

export const ICYMIServerRecommendationRow = function ICYMIServerRecommendationRow() {
  const items = [ICYMIStore];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => discoverableGuilds.getDiscoverableGuilds());
  const tmp3 = closure_17();
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { children: null };
    const obj3 = { style: tmp3.container, children: null };
    const obj4 = { style: tmp3.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj4.children = intl.string(util.t.lv1tce);
    const items1 = [closure_1_14(Text_Text.Text, obj4), , ];
    const obj5 = { style: tmp3.subtitle, variant: "heading-sm/normal", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t.x4OezN);
    items1[1] = closure_1_14(Text_Text.Text, obj5);
    const obj6 = { discoverableGuilds: stateFromStoresArray };
    items1[2] = closure_1_14(RecommendedGuildsRow, obj6);
    obj3.children = items1;
    const items2 = [__initData(View, obj3), closure_1_14(ICYMIShared.Separator, {})];
    obj2.children = items2;
    tmp4 = __initData(value2, obj2);
  }
  return tmp4;
};