// discord_app/modules/icymi/native/ICYMIServerRecommendationRow.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import GuildRecordUtils from "../../../utils/GuildRecordUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import FastestListDefault from "../../fastest_list/FastestList.android.tsx";
import ClipViewDefault from "../../../design/components/Icon/native/ClipView.tsx";
import ICYMIShared from "ICYMIShared.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import ICYMIStore from "../ICYMIStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createICYMIStyles from "createICYMIStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let c2, c3, closure_0;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let unpackModuleId;
function FeaturedServer(guild) {
  let Button;
  let closure_1;
  let first;
  let items2;
  let items3;
  let obj7;
  let stringResult;
  guild = guild.guild;
  closure_1 = undefined;
  const tmp = closure_18();
  let obj = guild(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => null != GuildStore.getGuild(guild.id));
  const items1 = [guild.id];
  const callback = react.useCallback(
    _asyncToGenerator(async () => {
      let intl;
      let obj10;
      let obj11;
      if (c3 === 2) {
        c3 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let obj9;
          c3 = 2;
          const tmp4 = c2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp4;
              obj9 = undefined;
              closure_1(true);
              const obj15 = closure_1(c2[19]);
              obj15.itemInteracted("recommended_guilds", "recommended_guilds", "press_join_guild");
              let obj4 = {
                itemId: guild.id,
                itemType: "recommended_guilds",
                actionParameters: {
                  actionGestureType: "press",
                  actionTargetElement: "item_container",
                  actionIntentType: "join",
                  actionDestinationType: "guild",
                },
              };
              const obj16 = closure_1(c2[19]);
              obj16.feedItemActioned(obj4);
              const items = [guild.id];
              const obj18 = closure_1(c2[19]);
              c2 = 1;
              c3 = 1;
              let obj5 = { value: obj18.gravityJoinGuild(items, "recommended_guilds"), done: false };
              return obj5;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              let obj6 = { value, done: true };
              return obj6;
            } else if (value) {
              obj9 = { state: obj10 };
              obj10 = { analyticsSource: obj11 };
              obj11 = {
                page: constants2.ICYMI,
                section: constants3.ICYMI_RECOMMENDED_SERVERS,
                object: constants.LIST_ITEM,
              };
              let obj7 = closure_1(c2[19]);
              const result = obj7.addedRecommendedGuild();
              let obj8 = closure_1(c2[19]);
              const dehydrated = obj8.fetchDehydrated({ isReloading: true, forceRefresh: true });
              dehydrated.then(
                _asyncToGenerator(async () => {
                  let v2;
                  if (c2 === 2) {
                    c2 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp2 === 3) {
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
                      c2 = 2;
                      if (0 === v2) {
                        if (arg0 === 1) {
                          c2 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          closure_0 = tmp3;
                          const obj6 = v2(c2[19]);
                          v2 = 1;
                          c2 = 1;
                          const obj5 = { value: obj6.reloadICYMITab(), done: false };
                          return obj5;
                        }
                      } else if (1 === v2) {
                        if (arg0 === 1) {
                          c2 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj7 = { value, done: true };
                          return obj7;
                        } else {
                          const obj3 = v2(c2[19]);
                          v2 = 2;
                          c2 = 1;
                          const obj8 = { value: obj3.getGuildChannelScores(), done: false };
                          return obj8;
                        }
                      } else if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj9 = { value, done: true };
                        return obj9;
                      } else {
                        const obj = v2(c2[19]);
                        const recommendedGuilds = obj.getRecommendedGuilds();
                        c2 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    } catch (tmp13) {
                      c2 = 3;
                      throw tmp13;
                    }
                  }
                }),
              );
              const obj12 = {};
              const transitionToGuildSync = closure_1(c2[22]).transitionToGuildSync;
              const id = closure_129_0.id;
              const tmp32 = closure_1(c2[22]);
              const merged = Object.assign(obj9);
              c2 = 2;
              c3 = 1;
              const obj13 = { value: transitionToGuildSync(id, obj12), done: false };
              return obj13;
            } else {
              const tmp10 = closure_129_1(false);
              const tmp13 = closure_1(c2[20]);
              const obj14 = { key: "RecommeendedServersRow", content: intl.string(tmp(c2[21]).t.CG4Hks) };
              const open = tmp13.open;
              intl = tmp(c2[21]).intl;
              open(obj14);
              c3 = 3;
              const obj17 = { value: undefined, done: true };
              return obj17;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            closure_129_1(false);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp37) {
          c3 = 3;
          throw tmp37;
        }
      }
    }),
    items1,
  );
  [first, closure_1] = react.useState(false);
  let obj2 = { style: tmp.featuredServerContainer, children: items2 };
  items2 = [closure_14(closure_19, { guild }), ,];
  let obj3 = { style: tmp.featuredServerInnerContainer, children: items3 };
  let obj4 = {
    maxFontSizeMultiplier: 1,
    lineClamp: 1,
    style: tmp.featuredServerTitle,
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    children: guild.name,
  };
  items3 = [closure_14(guild(4886).Text, obj4)];
  let obj5 = {
    maxFontSizeMultiplier: 1,
    lineClamp: 3,
    variant: "text-xs/normal",
    color: "text-default",
    children: guild.description,
  };
  items3[1] = closure_14(guild(4886).Text, obj5);
  items2[1] = closure_15(View, obj3);
  let obj6 = { style: tmp.buttonContainer, children: closure_14(Button, obj7) };
  obj7 = { disabled: stateFromStores, loading: first, text: stringResult, size: "sm", onPress: callback, grow: true };
  Button = guild(5594).Button;
  let intl = guild(1126).intl;
  const string = intl.string;
  const t = guild(1126).t;
  if (stateFromStores) {
    stringResult = string(t.cEnaWx);
  } else {
    stringResult = string(t.VJlc0S);
  }
  items2[2] = closure_14(View, obj6);
  return closure_15(View, obj2);
}
const View = react_native.View;
({
  AnalyticsObjects: c10,
  AnalyticsPages: unpackModuleId,
  AnalyticsSections: closure_12,
  GuildFeatures: map1,
} = Constants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let c17 = 200;
let closure_18 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  let rect;
  let size1;
  const obj = {
    container: { marginVertical: nativeDefault.space.PX_24 },
    title: { marginBottom: nativeDefault.space.PX_8, marginHorizontal: marginHorizontal.margin },
    subtitle: { marginBottom: nativeDefault.space.PX_16, marginHorizontal: marginHorizontal.margin },
    featuredServerInnerContainer: { marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 },
    buttonContainer: rect,
    featuredServerTitle: { marginBottom: nativeDefault.space.PX_8 },
    guildIcon: { position: "absolute", top: 50, left: 12 },
    bannerImage: size,
    emptyBanner: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE },
    featuredServerContainer: size1,
  };
  ({ marginVertical: nativeDefault.space.PX_24 });
  ({ marginBottom: nativeDefault.space.PX_8, marginHorizontal: marginHorizontal.margin });
  ({ marginBottom: nativeDefault.space.PX_16, marginHorizontal: marginHorizontal.margin });
  ({ marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 });
  rect = {
    position: "absolute",
    bottom: nativeDefault.space.PX_12,
    left: nativeDefault.space.PX_12,
    right: nativeDefault.space.PX_12,
  };
  size = { height: 72, width };
  ({ marginBottom: nativeDefault.space.PX_8 });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
  size1 = {
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
    height: 244,
    width,
    overflow: "hidden",
  };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let items2;
      let items3;
      let tmp18Result;
      let tmp5;
      let tmp6;
      let useReducedMotion;
      let obj = guild(576);
      const cResult = obj.c(23);
      guild = guild.guild;
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
      const tmpResult = guild(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === guild.banner) {
        if (cResult[3] === guild.features) {
          if (cResult[4] === guild.id) {
            let tmp9;
            let tmp14;
            let tmp16;
            if (cResult[5] === stateFromStores) {
              tmp9 = cResult[6];
            }
            if (cResult[7] !== guild) {
              const tmpResult2 = guild(2066);
              const result = tmpResult2.fromClientDiscoverableGuild(guild);
              cResult[7] = guild;
              cResult[8] = result;
              tmp14 = result;
            } else {
              tmp14 = cResult[8];
            }
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              size = {
                shape: guild(8469).CutoutShape.RoundedRect,
                x: 8,
                y: 46,
                width: 56,
                height: 56,
                cornerRadius: 20,
              };
              const items1 = [size];
              cResult[9] = items1;
              tmp16 = items1;
            } else {
              tmp16 = cResult[9];
            }
            if (cResult[10] === tmp9) {
              if (cResult[11] === guild.banner) {
                if (cResult[12] === tmp4.bannerImage) {
                  let tmp17;
                  if (cResult[13] === tmp4.emptyBanner) {
                    tmp17 = cResult[14];
                  }
                  if (cResult[15] === tmp14) {
                    if (cResult[16] === tmp4.guildIcon) {
                      let tmp26;
                      if (cResult[17] === !stateFromStores) {
                        tmp26 = cResult[18];
                      }
                      if (cResult[19] === tmp4.bannerImage) {
                        if (cResult[20] === tmp17) {
                          let tmp31;
                          if (cResult[21] === tmp26) {
                            tmp31 = cResult[22];
                          }
                          return tmp31;
                        }
                      }
                      let obj2 = { style: tmp4.bannerImage, children: items2 };
                      items2 = [tmp17, tmp26];
                      const tmp34 = closure_15(View, obj2);
                      cResult[19] = tmp4.bannerImage;
                      cResult[20] = tmp17;
                      cResult[21] = tmp26;
                      cResult[22] = tmp34;
                      tmp31 = tmp34;
                    }
                  }
                  const obj4 = {
                    style: tmp4.guildIcon,
                    guild: tmp14,
                    size: guild(5971).GuildIconSizes.LARGE,
                    animate: !stateFromStores,
                  };
                  const tmp29 = GuildIconDefault;
                  const tmp30 = closure_14(tmp29, obj4);
                  cResult[15] = tmp14;
                  cResult[16] = tmp4.guildIcon;
                  cResult[17] = !stateFromStores;
                  cResult[18] = tmp30;
                  tmp26 = tmp30;
                }
              }
            }
            const obj5 = { cutouts: tmp16, children: tmp18Result };
            const tmp20 = ClipViewDefault;
            if (null != guild.banner) {
              const obj6 = { style: tmp4.bannerImage, source: tmp9, resizeMode: "cover" };
              tmp18Result = closure_14(FastImageDefault, obj6);
            } else {
              const obj7 = { style: items3 };
              items3 = [,];
              ({ bannerImage: arr3[0], emptyBanner: arr3[1] } = tmp4);
              tmp18Result = closure_14(View, obj7);
            }
            const tmp18Result2 = closure_14(tmp20, obj5);
            cResult[10] = tmp9;
            cResult[11] = guild.banner;
            cResult[12] = tmp4.bannerImage;
            cResult[13] = tmp4.emptyBanner;
            cResult[14] = tmp18Result2;
            tmp17 = tmp18Result2;
          }
        }
      }
      let hasItem = !stateFromStores;
      if (hasItem) {
        const features = guild.features;
        hasItem = features.has(constants.ANIMATED_BANNER);
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
    }
  : (guild) => {
      let animatableSourceWithFallback;
      let items2;
      let items3;
      let items4;
      let tmp12Result;
      let useReducedMotion;
      guild = guild.guild;
      const tmp = closure_18();
      let obj = guild(504);
      const items = [AccessibilityStore];
      const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let hasItem = !stateFromStores;
      if (hasItem) {
        const features = guild.features;
        hasItem = features.has(constants.ANIMATED_BANNER);
      }
      if (null != guild.banner) {
        let obj2 = AvatarUtilsDefault;
        animatableSourceWithFallback = obj2.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
          const obj = AvatarUtilsDefault;
          const obj2 = { id: guild.id, banner: guild.banner };
          return obj.getGuildBannerSource(obj2, hasItem);
        });
      }
      const items1 = [guild];
      const obj3 = { style: tmp.bannerImage, children: items4 };
      const memo = react.useMemo(() => {
        const obj = GuildRecordUtils;
        return obj.fromClientDiscoverableGuild(guild);
      }, items1);
      const obj4 = { cutouts: items2, children: tmp12Result };
      size = { shape: guild(8469).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
      items2 = [size];
      const tmp14 = ClipViewDefault;
      if (null != guild.banner) {
        const obj5 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
        tmp12Result = closure_14(FastImageDefault, obj5);
      } else {
        const obj6 = { style: items3 };
        items3 = [,];
        ({ bannerImage: arr4[0], emptyBanner: arr4[1] } = tmp);
        tmp12Result = closure_14(View, obj6);
      }
      items4 = [closure_14(tmp14, obj4)];
      const obj7 = {
        style: tmp.guildIcon,
        guild: memo,
        size: guild(5971).GuildIconSizes.LARGE,
        animate: !stateFromStores,
      };
      const tmp13Result = GuildIconDefault;
      items4[1] = closure_14(tmp13Result, obj7);
      return closure_15(View, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let container;
      let discoverableGuilds;
      let items1;
      let items2;
      let title;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(18);
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
      const tmpResult = get_initialized;
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
      const tmp7 = closure_18();
      if (0 === stateFromStoresArray.length) {
        return null;
      } else {
        let tmp8;
        let tmp10;
        let tmp13;
        let tmp15;
        let tmp18;
        const _Symbol3 = Symbol;
        ({ container, title } = tmp7);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(intl3.t.lv1tce);
          cResult[2] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] !== tmp7.title) {
          const obj2 = {
            style: title,
            variant: "heading-lg/semibold",
            color: "mobile-text-heading-primary",
            children: tmp8,
          };
          const tmp12 = authStore2(Text_Text.Text, obj2);
          cResult[3] = tmp7.title;
          cResult[4] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[4];
        }
        const _Symbol = Symbol;
        const subtitle = tmp7.subtitle;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl3.intl;
          const stringResult1 = intl2.string(intl3.t.x4OezN);
          cResult[5] = stringResult1;
          tmp13 = stringResult1;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] !== tmp7.subtitle) {
          const obj3 = { style: subtitle, variant: "heading-sm/normal", color: "text-muted", children: tmp13 };
          const tmp17 = authStore2(Text_Text.Text, obj3);
          cResult[6] = tmp7.subtitle;
          cResult[7] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[7];
        }
        if (cResult[8] !== stateFromStoresArray) {
          const obj4 = { discoverableGuilds: stateFromStoresArray };
          const tmp21 = authStore2(closure_21, obj4);
          cResult[8] = stateFromStoresArray;
          cResult[9] = tmp21;
          tmp18 = tmp21;
        } else {
          tmp18 = cResult[9];
        }
        if (cResult[10] === tmp7.container) {
          if (cResult[11] === tmp10) {
            if (cResult[12] === tmp15) {
              let tmp22;
              let tmp26;
              let tmp29;
              if (cResult[13] === tmp18) {
                tmp22 = cResult[14];
              }
              const _Symbol2 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp28 = authStore2(ICYMIShared.Separator, {});
                cResult[15] = tmp28;
                tmp26 = tmp28;
              } else {
                tmp26 = cResult[15];
              }
              if (cResult[16] !== tmp22) {
                const obj5 = { children: items1 };
                items1 = [tmp22, tmp26];
                const tmp32 = closure_15(authStore3, obj5);
                cResult[16] = tmp22;
                cResult[17] = tmp32;
                tmp29 = tmp32;
              } else {
                tmp29 = cResult[17];
              }
              return tmp29;
            }
          }
        }
        const obj6 = { style: container, children: items2 };
        items2 = [tmp10, tmp15, tmp18];
        const tmp25 = closure_15(View, obj6);
        cResult[10] = tmp7.container;
        cResult[11] = tmp10;
        cResult[12] = tmp15;
        cResult[13] = tmp18;
        cResult[14] = tmp25;
        tmp22 = tmp25;
      }
    }
  : () => {
      let discoverableGuilds;
      let intl;
      let intl2;
      let items1;
      let items2;
      const items = [ICYMIStore];
      const obj = get_initialized;
      const stateFromStoresArray = obj.useStateFromStoresArray(items, () => discoverableGuilds.getDiscoverableGuilds());
      const tmp3 = closure_18();
      let tmp4 = null;
      if (0 !== stateFromStoresArray.length) {
        const obj2 = { children: items2 };
        const obj3 = { style: tmp3.container, children: items1 };
        const obj4 = {
          style: tmp3.title,
          variant: "heading-lg/semibold",
          color: "mobile-text-heading-primary",
          children: intl.string(intl3.t.lv1tce),
        };
        const Text = Text_Text.Text;
        intl = intl3.intl;
        items1 = [authStore2(Text, obj4), ,];
        const obj5 = {
          style: tmp3.subtitle,
          variant: "heading-sm/normal",
          color: "text-muted",
          children: intl2.string(intl3.t.x4OezN),
        };
        const Text2 = Text_Text.Text;
        intl2 = intl3.intl;
        items1[1] = authStore2(Text2, obj5);
        const obj6 = { discoverableGuilds: stateFromStoresArray };
        items1[2] = authStore2(closure_21, obj6);
        items2 = [closure_15(View, obj3), authStore2(ICYMIShared.Separator, {})];
        tmp4 = closure_15(authStore3, obj2);
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (discoverableGuilds) => {
      let tmp3;
      let obj = discoverableGuilds(576);
      const cResult = obj.c(7);
      discoverableGuilds = discoverableGuilds.discoverableGuilds;
      if (cResult[0] !== discoverableGuilds) {
        const fn = function n(arg0, arg1) {
          let tmp2 = null;
          if (null != discoverableGuilds[arg1]) {
            const obj = { guild: discoverableGuilds[arg1] };
            tmp2 = authStore2(FeaturedServer, obj);
          }
          return tmp2;
        };
        cResult[0] = discoverableGuilds;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      let tmp4 = null;
      if (0 !== discoverableGuilds.length) {
        let tmp5;
        if (cResult[2] !== discoverableGuilds.length) {
          const items = [discoverableGuilds.length];
          cResult[2] = discoverableGuilds.length;
          cResult[3] = items;
          tmp5 = items;
        } else {
          tmp5 = cResult[3];
        }
        if (cResult[4] === tmp3) {
          let tmp6;
          if (cResult[5] === tmp5) {
            tmp6 = cResult[6];
          }
          tmp4 = tmp6;
        }
        const obj2 = {
          sections: tmp5,
          insetStart: nativeDefault.space.PX_16,
          renderItem: tmp3,
          estimatedListSize: "windowSize",
          itemSize: c17 + nativeDefault.space.PX_16,
          horizontal: true,
          listId: "recommended-servers-list",
          showsHorizontalScrollIndicator: false,
        };
        const tmp9 = FastestListDefault;
        const tmp11 = closure_14(tmp9, obj2);
        cResult[4] = tmp3;
        cResult[5] = tmp5;
        cResult[6] = tmp11;
        tmp6 = tmp11;
      }
      return tmp4;
    }
  : (discoverableGuilds) => {
      let items;
      discoverableGuilds = discoverableGuilds.discoverableGuilds;
      [][0] = discoverableGuilds;
      let tmp2 = null;
      if (0 !== discoverableGuilds.length) {
        let obj = {
          sections: items,
          insetStart: nativeDefault.space.PX_16,
          renderItem: tmp,
          estimatedListSize: "windowSize",
          itemSize: c17 + nativeDefault.space.PX_16,
          horizontal: true,
          listId: "recommended-servers-list",
          showsHorizontalScrollIndicator: false,
        };
        items = [discoverableGuilds.length];
        const tmp6 = FastestListDefault;
        tmp2 = closure_14(tmp6, obj);
      }
      return tmp2;
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIServerRecommendationRow.tsx");

export const ICYMIServerRecommendationRow = tmp4;
