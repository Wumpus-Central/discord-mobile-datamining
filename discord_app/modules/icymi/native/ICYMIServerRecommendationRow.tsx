// discord_app/modules/icymi/native/ICYMIServerRecommendationRow.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import GuildRecordUtils from "../../../utils/GuildRecordUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import FastestListDefault from "../../fastest_list/FastestList.android.tsx";
import ClipViewDefault from "../../../design/components/Icon/native/ClipView.tsx";
import ICYMIShared from "ICYMIShared.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import ICYMIStore from "../ICYMIStore.tsx";

require = fn;
function CutoutGuildBanner(guild) {
  guild = guild.guild;
  const tmp = closure_17();
  let obj = guild(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let hasItem = !stateFromStores;
  if (!stateFromStores) {
    const features = guild.features;
    hasItem = features.has(constants.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    let obj1 = AvatarUtilsDefault;
    const animatableSourceWithFallback = obj1.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      const obj = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj, hasItem);
    });
  }
  const items1 = [guild];
  obj = { style: tmp.bannerImage, children: null };
  const memo = noop.useMemo(() => GuildRecordUtils.fromClientDiscoverableGuild(guild), items1);
  obj = { cutouts: null, children: null };
  const size = { shape: guild(8813).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
  const items2 = [size];
  obj.cutouts = items2;
  if (null != guild.banner) {
    obj1 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
    let tmp12Result = closure_14(FastImageDefault, obj1);
  } else {
    const obj2 = { style: null };
    const items3 = [,];
    ({ bannerImage: arr4[0], emptyBanner: arr4[1] } = tmp);
    obj2.style = items3;
    tmp12Result = closure_14(View, obj2);
  }
  obj.children = tmp12Result;
  const items4 = [closure_14(ClipViewDefault, obj)];
  const obj3 = { style: tmp.guildIcon, guild: memo, size: null, animate: null };
  obj3.size = guild(5584).GuildIconSizes.LARGE;
  obj3.animate = !stateFromStores;
  items4[1] = closure_14(GuildIconDefault, obj3);
  obj.children = items4;
  return closure_15(View, obj);
}
function FeaturedServer(guild) {
  guild = guild.guild;
  const tmp = closure_17();
  let obj = guild(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => null != GuildStore.getGuild(guild.id));
  const items1 = [guild.id];
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              closure_1(true);
              closure_1(8351).itemInteracted("recommended_guilds", "recommended_guilds", "press_join_guild");
              const obj17 = closure_1(8351);
              let obj1 = {
                itemId: guild.id,
                itemType: "recommended_guilds",
                actionParameters: {
                  actionGestureType: "press",
                  actionTargetElement: "item_container",
                  actionIntentType: "join",
                  actionDestinationType: "guild",
                },
              };
              closure_1(8351).feedItemActioned(obj1);
              const obj18 = closure_1(8351);
              const items = [guild.id];
              dependencyMap = 1;
              c3 = 1;
              let obj2 = { value: closure_1(8351).gravityJoinGuild(items, "recommended_guilds"), done: false };
              return obj2;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else if (value) {
              let obj4 = { state: null };
              const obj5 = { analyticsSource: null };
              const obj6 = {
                page: constants2.ICYMI,
                section: constants3.ICYMI_RECOMMENDED_SERVERS,
                object: constants.LIST_ITEM,
              };
              obj5.analyticsSource = obj6;
              obj4.state = obj5;
              closure_128_0 = obj4;
              let obj7 = closure_1(8351);
              const result = obj7.addedRecommendedGuild();
              let obj8 = closure_1(8351);
              const dehydrated = obj8.fetchDehydrated({ isReloading: true, forceRefresh: true });
              dehydrated.then(
                asyncGeneratorStep(async () => {
                  if (dependencyMap === 2) {
                    dependencyMap = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      let obj = { value, done: true };
                      return obj;
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
                          obj = { value, done: true };
                          return obj;
                        } else {
                          closure_0 = tmp4;
                          v2 = 1;
                          dependencyMap = 1;
                          const obj1 = { value: v2(8351).reloadICYMITab(), done: false };
                          return obj1;
                        }
                      } else if (1 === tmp4) {
                        if (arg0 === 1) {
                          dependencyMap = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          dependencyMap = 3;
                          let obj2 = { value, done: true };
                          return obj2;
                        } else {
                          obj2 = v2(8351);
                          v2 = 2;
                          dependencyMap = 1;
                          const obj3 = { value: obj2.getGuildChannelScores(), done: false };
                          return obj3;
                        }
                      } else if (arg0 === 1) {
                        dependencyMap = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        dependencyMap = 3;
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        obj = v2(8351);
                        const recommendedGuilds = obj.getRecommendedGuilds();
                        dependencyMap = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    } catch (tmp14) {
                      dependencyMap = tmp;
                      throw tmp14;
                    }
                  }
                }),
              );
              let obj9 = closure_1(5520);
              obj7 = {};
              const merged = Object.assign(closure_128_0);
              dependencyMap = 2;
              c3 = 1;
              obj8 = { value: obj9.transitionToGuildSync(closure_129_0.id, obj7), done: false };
              return obj8;
            } else {
              closure_129_1(false);
              obj1 = closure_1(4259);
              obj9 = { key: "RecommeendedServersRow", content: null };
              const intl = tmp2(1114).intl;
              obj9.content = intl.string(tmp2(1114).t.CG4Hks);
              obj1.open(obj9);
              c3 = 3;
              const obj10 = { value: undefined, done: true };
              return obj10;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
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
    }),
    items1,
  );
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp4[1];
  obj = { style: tmp.featuredServerContainer, children: null };
  const items2 = [closure_14(CutoutGuildBanner, { guild }), ,];
  obj = { style: tmp.featuredServerInnerContainer, children: null };
  const items3 = [
    closure_14(guild(4556).Text, {
      maxFontSizeMultiplier: 1,
      lineClamp: 1,
      style: tmp.featuredServerTitle,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: guild.name,
    }),
    closure_14(guild(4556).Text, {
      maxFontSizeMultiplier: 1,
      lineClamp: 3,
      variant: "text-xs/normal",
      color: "text-default",
      children: guild.description,
    }),
  ];
  obj.children = items3;
  items2[1] = closure_15(View, obj);
  let obj3 = { style: tmp.buttonContainer, children: null };
  let obj4 = { disabled: stateFromStores, loading: tmp4[0], text: null, size: "sm", onPress: null, grow: true };
  let intl = guild(1114).intl;
  const string = intl.string;
  const t = guild(1114).t;
  if (stateFromStores) {
    let stringResult = string(t.cEnaWx);
  } else {
    stringResult = string(t.VJlc0S);
  }
  obj4.text = stringResult;
  obj4.onPress = callback;
  obj3.children = closure_14(guild(4975).Button, obj4);
  items2[2] = closure_14(View, obj3);
  obj.children = items2;
  return closure_15(View, obj);
}
function RecommendedGuildsRow(discoverableGuilds) {
  discoverableGuilds = discoverableGuilds.discoverableGuilds;
  [][0] = discoverableGuilds;
  let tmp2 = null;
  if (0 !== discoverableGuilds.length) {
    let obj = {
      sections: null,
      insetStart: null,
      renderItem: null,
      estimatedListSize: "windowSize",
      itemSize: null,
      horizontal: true,
      listId: "recommended-servers-list",
      showsHorizontalScrollIndicator: false,
    };
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
const createICYMIStyles = fn(16452);
let closure_17 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  let obj = {
    container: null,
    title: null,
    subtitle: null,
    featuredServerInnerContainer: null,
    buttonContainer: null,
    featuredServerTitle: null,
    guildIcon: null,
    bannerImage: null,
    emptyBanner: null,
    featuredServerContainer: null,
  };
  obj = { marginVertical: nativeDefault.space.PX_24 };
  obj.container = obj;
  obj = { marginBottom: nativeDefault.space.PX_8, marginHorizontal: marginHorizontal.margin };
  obj.title = obj;
  obj.subtitle = { marginBottom: nativeDefault.space.PX_16, marginHorizontal: marginHorizontal.margin };
  const obj1 = { marginBottom: nativeDefault.space.PX_16, marginHorizontal: marginHorizontal.margin };
  obj.featuredServerInnerContainer = { marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 };
  const rect = {
    position: "absolute",
    bottom: nativeDefault.space.PX_12,
    left: nativeDefault.space.PX_12,
    right: nativeDefault.space.PX_12,
  };
  obj.buttonContainer = rect;
  const obj2 = { marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 };
  obj.featuredServerTitle = { marginBottom: nativeDefault.space.PX_8 };
  obj.guildIcon = { position: "absolute", top: 50, left: 12 };
  obj.bannerImage = { height: 72, width: 200 };
  const obj3 = { marginBottom: nativeDefault.space.PX_8 };
  obj.emptyBanner = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  const size = {
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
    height: 244,
    width: 200,
    overflow: "hidden",
  };
  obj.featuredServerContainer = size;
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIServerRecommendationRow.tsx");

export const ICYMIServerRecommendationRow = function ICYMIServerRecommendationRow() {
  let obj = initialize;
  const items = [ICYMIStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => discoverableGuilds.getDiscoverableGuilds());
  const tmp3 = closure_17();
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { children: null };
    obj = { style: tmp3.container, children: null };
    const obj1 = {
      style: tmp3.title,
      variant: "heading-lg/semibold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl = util.intl;
    obj1.children = intl.string(util.t.lv1tce);
    const items1 = [closure_1_14(Text_Text.Text, obj1), ,];
    const obj2 = { style: tmp3.subtitle, variant: "heading-sm/normal", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(util.t.x4OezN);
    items1[1] = closure_1_14(Text_Text.Text, obj2);
    const obj3 = { discoverableGuilds: stateFromStoresArray };
    items1[2] = closure_1_14(RecommendedGuildsRow, obj3);
    obj.children = items1;
    const items2 = [__initData(View, obj), closure_1_14(ICYMIShared.Separator, {})];
    obj.children = items2;
    tmp4 = __initData(value2, obj);
  }
  return tmp4;
};
