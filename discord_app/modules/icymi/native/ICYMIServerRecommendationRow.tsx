// discord_app/modules/icymi/native/ICYMIServerRecommendationRow.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import GuildIconSizesDefault from "../../guild/native/GuildIcon.tsx";
import _modDef7711 from "../../fastest_list/FastestList.android.tsx";
import SolidCutoutDefault from "../../../design/components/Icon/native/ClipView.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../a11y/AccessibilityStore.tsx";
import closure_8 from "../../../stores/GuildStore.tsx";
import closure_9 from "../ICYMIStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createICYMIStyles from "createICYMIStyles.tsx";

require = arg1;
function CutoutGuildBanner(guild) {
  guild = guild.guild;
  const tmp = callback5();
  let obj = guild(589);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let hasItem = !stateFromStores;
  if (!stateFromStores) {
    const features = guild.features;
    hasItem = features.has(constants.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    obj1 = getAvatarURLDefault;
    const animatableSourceWithFallback = obj1.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      let obj = closure_1_1(closure_1_2[12]);
      obj = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj, hasItem);
    });
  }
  const items1 = [guild];
  obj = { style: tmp.bannerImage, children: null };
  const memo = React.useMemo(() => guild(closure_1_2[13]).fromClientDiscoverableGuild(guild), items1);
  obj = { cutouts: null, children: null };
  obj1 = { shape: guild(8030).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
  const items2 = [obj1];
  obj[0] = items2;
  if (null != guild.banner) {
    const obj2 = { style: null, source: null, resizeMode: "cover" };
    obj2[0] = tmp.bannerImage;
    obj2[1] = animatableSourceWithFallback;
    let tmp12Result = tmp12(tmp13(5445), obj2);
  } else {
    const obj3 = { style: null };
    const items3 = [, ];
    ({ bannerImage: arr4[0], emptyBanner: arr4[1] } = tmp);
    obj3[0] = items3;
    tmp12Result = tmp12(tmp11, obj3);
  }
  obj[1] = tmp12Result;
  const items4 = [closure_14(SolidCutoutDefault, obj), ];
  const obj4 = { style: tmp.guildIcon, guild: memo, size: null, animate: null };
  const tmp10 = closure_15;
  const tmp14 = SolidCutoutDefault;
  obj4[2] = guild(5956).GuildIconSizes.LARGE;
  obj4[3] = !stateFromStores;
  items4[1] = closure_14(GuildIconSizesDefault, obj4);
  obj[1] = items4;
  return tmp10(View, obj);
}
function FeaturedServer(guild) {
  guild = guild.guild;
  closure_1 = undefined;
  const tmp = callback5();
  let obj = guild(589);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => null != closure_1_8.getGuild(guild.id));
  const items1 = [guild.id];
  let callback = React.useCallback(callback2(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp5;
            let obj4 = tmp2;
            obj4 = undefined;
            closure_1_1(true);
            closure_1_1(8553).itemInteracted("recommended_guilds", "recommended_guilds", "press_join_guild");
            const obj17 = closure_1_1(8553);
            obj1 = { itemId: null, itemType: "recommended_guilds", actionParameters: null };
            obj1[0] = closure_1_0.id;
            obj1[2] = { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "join", actionDestinationType: "guild" };
            closure_1_1(8553).feedItemActioned(obj1);
            const obj18 = closure_1_1(8553);
            const items = [closure_1_0.id];
            dependencyMap = 1;
            c3 = 1;
            let obj2 = { value: null, done: false };
            obj2[0] = closure_1_1(8553).gravityJoinGuild(items, "recommended_guilds");
            return obj2;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else if (arg1) {
            obj4 = { state: null };
            const obj5 = { analyticsSource: null };
            const obj6 = { page: null, section: null, object: null };
            obj6[0] = closure_1_11.ICYMI;
            obj6[1] = closure_1_12.ICYMI_RECOMMENDED_SERVERS;
            obj6[2] = closure_1_10.LIST_ITEM;
            obj5[0] = obj6;
            obj4[0] = obj5;
            let obj7 = closure_1_1(8553);
            const result = obj7.addedRecommendedGuild();
            let obj8 = closure_1_1(8553);
            const dehydrated = obj8.fetchDehydrated({ isReloading: true, forceRefresh: true });
            dehydrated.then(closure_1_4(function*() {
              if (dependencyMap === 2) {
                dependencyMap = 3;
                HermesBuiltin.throwTypeError();
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw arg1;
                } else if (arg0 === 2) {
                  let obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  dependencyMap = 2;
                  if (0 === v0) {
                    if (arg0 === 1) {
                      dependencyMap = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      dependencyMap = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      closure_0 = tmp4;
                      v0 = 1;
                      dependencyMap = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = v0(8553).reloadICYMITab();
                      return obj1;
                    }
                  } else if (1 === tmp4) {
                    if (arg0 === 1) {
                      dependencyMap = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      dependencyMap = 3;
                      let obj2 = { value: null, done: true };
                      obj2[0] = arg1;
                      return obj2;
                    } else {
                      obj2 = v0(8553);
                      v0 = 2;
                      dependencyMap = 1;
                      const obj3 = { value: null, done: false };
                      obj3[0] = obj2.getGuildChannelScores();
                      return obj3;
                    }
                  } else if (arg0 === 1) {
                    dependencyMap = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    dependencyMap = 3;
                    obj4 = { value: null, done: true };
                    obj4[0] = arg1;
                    return obj4;
                  } else {
                    obj = v0(8553);
                    const recommendedGuilds = obj.getRecommendedGuilds();
                    dependencyMap = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp14) {
                  dependencyMap = tmp;
                  throw tmp14;
                }
              }
            }));
            let obj9 = closure_1_1(5409);
            obj7 = {};
            const merged = Object.assign(obj4);
            dependencyMap = 2;
            c3 = 1;
            obj8 = { value: null, done: false };
            obj8[0] = obj9.transitionToGuildSync(obj4.id, obj7);
            return obj8;
          } else {
            callback(false);
            obj1 = closure_1_1(4162);
            obj9 = { key: "RecommeendedServersRow", content: null };
            const intl = closure_1_0(1236).intl;
            obj9[1] = intl.string(closure_1_0(1236).t.CG4Hks);
            obj1.open(obj9);
            c3 = 3;
            const obj10 = { value: null, done: true };
            obj10[0] = undefined;
            return obj10;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          callback(false);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp36) {
        c3 = tmp;
        throw tmp36;
      }
    }
  }), items1);
  const tmp4 = callback(React.useState(false), 2);
  closure_1 = tmp4[1];
  obj = { style: tmp.featuredServerContainer, children: null };
  const items2 = [callback3(CutoutGuildBanner, { guild }), , ];
  obj = { style: tmp.featuredServerInnerContainer, children: null };
  const items3 = [callback3(guild(4441).Text, { maxFontSizeMultiplier: 1, lineClamp: 1, style: tmp.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name }), callback3(guild(4441).Text, { maxFontSizeMultiplier: 1, lineClamp: 3, variant: "text-xs/normal", color: "text-default", children: guild.description })];
  obj[1] = items3;
  items2[1] = callback4(View, obj);
  let obj3 = { style: tmp.buttonContainer, children: null };
  let obj4 = { disabled: stateFromStores, loading: tmp4[0], text: null, size: "sm", onPress: null, grow: true };
  let intl = guild(1236).intl;
  const string = intl.string;
  const t = guild(1236).t;
  if (stateFromStores) {
    let stringResult = string(t.cEnaWx);
  } else {
    stringResult = string(t.VJlc0S);
  }
  obj4[2] = stringResult;
  obj4[4] = callback;
  obj3[1] = callback3(guild(4880).Button, obj4);
  items2[2] = callback3(View, obj3);
  obj[1] = items2;
  return callback4(View, obj);
}
function RecommendedGuildsRow(discoverableGuilds) {
  discoverableGuilds = discoverableGuilds.discoverableGuilds;
  [][0] = discoverableGuilds;
  let tmp2 = null;
  if (0 !== discoverableGuilds.length) {
    let obj = { sections: null, insetStart: null, renderItem: null, estimatedListSize: "windowSize", itemSize: null, horizontal: true, listId: "recommended-servers-list", showsHorizontalScrollIndicator: false };
    const items = [discoverableGuilds.length];
    obj[0] = items;
    obj[1] = ThemesDefault.space.PX_16;
    obj[2] = tmp;
    obj[4] = 200 + ThemesDefault.space.PX_16;
    tmp2 = callback3(_modDef7711, obj);
    const tmp6 = _modDef7711;
  }
  return tmp2;
}
({ AnalyticsObjects: c10, AnalyticsPages: unpackModuleId, AnalyticsSections: closure_12, GuildFeatures: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let closure_17 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  let obj = { container: null, title: null, subtitle: null, featuredServerInnerContainer: null, buttonContainer: null, featuredServerTitle: null, guildIcon: null, bannerImage: null, emptyBanner: null, featuredServerContainer: null };
  obj = { marginVertical: ThemesDefault.space.PX_24 };
  obj[0] = obj;
  obj = { marginBottom: ThemesDefault.space.PX_8, marginHorizontal: marginHorizontal.margin };
  obj[1] = obj;
  obj[2] = { marginBottom: ThemesDefault.space.PX_16, marginHorizontal: marginHorizontal.margin };
  obj1 = { marginBottom: ThemesDefault.space.PX_16, marginHorizontal: marginHorizontal.margin };
  obj[3] = { marginHorizontal: ThemesDefault.space.PX_12, marginTop: 36 };
  const obj2 = { marginHorizontal: ThemesDefault.space.PX_12, marginTop: 36 };
  obj[4] = { position: "absolute", bottom: ThemesDefault.space.PX_12, left: ThemesDefault.space.PX_12, right: ThemesDefault.space.PX_12 };
  const obj3 = { position: "absolute", bottom: ThemesDefault.space.PX_12, left: ThemesDefault.space.PX_12, right: ThemesDefault.space.PX_12 };
  obj[5] = { marginBottom: ThemesDefault.space.PX_8 };
  obj[6] = { position: "absolute", top: 50, left: 12 };
  obj[7] = { height: 72, width: 200 };
  const obj4 = { marginBottom: ThemesDefault.space.PX_8 };
  obj[8] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
  const obj5 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj[9] = { borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, height: 244, width: 200, overflow: "hidden" };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/icymi/native/ICYMIServerRecommendationRow.tsx");

export const ICYMIServerRecommendationRow = function ICYMIServerRecommendationRow() {
  let obj = initialize;
  const items = [closure_9];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => discoverableGuilds.getDiscoverableGuilds());
  const tmp3 = callback5();
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { children: null };
    obj = { style: null, children: null };
    obj[0] = tmp3.container;
    obj1 = { style: null, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
    obj1[0] = tmp3.title;
    const intl = tmp(1236).intl;
    obj1[3] = intl.string(tmp(1236).t.lv1tce);
    const items1 = [callback3(tmp(4441).Text, obj1), , ];
    const obj2 = { style: null, variant: "heading-sm/normal", color: "text-muted", children: null };
    obj2[0] = tmp3.subtitle;
    const intl2 = tmp(1236).intl;
    obj2[3] = intl2.string(tmp(1236).t.x4OezN);
    items1[1] = callback3(tmp(4441).Text, obj2);
    const obj3 = { discoverableGuilds: null };
    obj3[0] = stateFromStoresArray;
    items1[2] = callback3(RecommendedGuildsRow, obj3);
    obj[1] = items1;
    const items2 = [callback4(View, obj), callback3(tmp(15992).Separator, {})];
    obj[0] = items2;
    tmp4 = callback4(closure_16, obj);
  }
  return tmp4;
};