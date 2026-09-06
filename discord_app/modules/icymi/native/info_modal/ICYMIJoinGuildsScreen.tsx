// === Module 16484: ICYMIJoinGuildsScreen ===

// Module 16484 (ICYMIJoinGuildsScreen)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import timing from "timing" /* 4561 */;
import GuildIcon from "GuildIcon" /* 5584 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 8359 */;
import ClipViewDefault from "ClipView" /* 8813 */;
import ServerIcon from "ServerIcon" /* 9286 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16467 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GuildStore from "GuildStore" /* 1979 */;
import ICYMIPopularGuildsStore from "ICYMIPopularGuildsStore" /* 16483 */;

const GuildIconDefault = GuildIcon;

require = fn;
function SelectedServerIcon(guild) {
  guild = guild.guild;
  const tmp = closure_16();
  const items = [tmp.selectedServerIcon, , ];
  let noServerContainer = null == guild;
  if (noServerContainer) {
    noServerContainer = tmp.noServerContainer;
  }
  items[1] = noServerContainer;
  let obj = { style: items, children: null };
  items[2] = null == guild && guild.index >= 3 && tmp.noServerExtraContainer;
  if (null != guild) {
    obj = { style: tmp.guildIconBorder, guild, size: GuildIcon.GuildIconSizes.LARGE };
    let tmp3Result = tmp3(GuildIconDefault, obj);
  } else {
    tmp3Result = null;
    if (tmp2) {
      obj = { size: "md", color: nativeDefault.colors.ICON_MUTED };
      tmp3Result = tmp3(ServerIcon.ServerIcon, obj);
    }
  }
  obj.children = tmp3Result;
  return closure_1_12(timestampProducer, obj);
}
function SelectedServersRow(selectedGuilds) {
  selectedGuilds = selectedGuilds.selectedGuilds;
  const items = [selectedGuilds];
  const callback = noop.useCallback((arg0, index) => {
    let tmp3;
    if (index < selectedGuilds.length) {
      tmp3 = selectedGuilds[index];
    }
    return closure_2_12(SelectedServerIcon, { guild: tmp3, index });
  }, items);
  let tmp3 = _slicedToArray(noop.useState(selectedGuilds.length), 2);
  const first = tmp3[0];
  dependencyMap = tmp3[1];
  const ref = noop.useRef(null);
  const items1 = [first, selectedGuilds.length];
  const effect = noop.useEffect(() => {
    if (first < selectedGuilds.length) {
      const current = ref.current;
      if (current != null) {
        const obj = { animated: true, section: 0, item: arr.length };
        current.scrollToLocation(obj);
      }
      closure_2(arr.length);
    } else if (tmp !== arr.length) {
      closure_2(arr.length);
    }
  }, items1);
  selectedGuilds(4296);
  const fn = function _() {
    let obj = timing;
    let num = 0;
    if (selectedGuilds.length > 0) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num), height: null, marginTop: null };
    let tmpResult = tmp(4561);
    let num2 = 0;
    if (selectedGuilds.length > 0) {
      num2 = c15;
    }
    obj.height = tmpResult.withTiming(num2);
    tmpResult = tmp(4561);
    let num3 = 0;
    if (selectedGuilds.length > 0) {
      num3 = nativeDefault.space.PX_24;
    }
    obj.marginTop = tmpResult.withTiming(num3);
    return obj;
  };
  let obj = { withTiming: selectedGuilds(4561).withTiming, selectedGuilds, SELECTED_SERVER_SIZE_WITH_BORDER: v50, tokens: first(576) };
  fn.__closure = obj;
  fn.__workletHash = 2911488630455;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: null, children: null };
  const items2 = [closure_16().selectedServersRowContainer, animatedStyle];
  obj.style = items2;
  const obj1 = { ref, sections: null, insetStart: null, insetEnd: null, renderItem: null, estimatedListSize: "windowSize", itemSize: null, horizontal: true, listId: "selected-servers-list", showsHorizontalScrollIndicator: false };
  let num = 3;
  const tmp = closure_16();
  const tmp8 = v50;
  if (selectedGuilds.length >= 3) {
    num = selectedGuilds.length + 1;
  }
  const items3 = [num];
  obj1.sections = items3;
  obj1.insetStart = first(576).space.PX_24;
  obj1.insetEnd = first(576).space.PX_12;
  obj1.renderItem = callback;
  obj1.itemSize = tmp8 + first(576).space.PX_12;
  obj.children = closure_12(first(7055), obj1);
  return closure_12(first(4296).View, obj);
}
function CutoutGuildBanner(guild) {
  guild = guild.guild;
  const tmp = closure_16();
  let obj = guild(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let hasItem = !stateFromStores;
  if (!stateFromStores) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    let obj1 = AvatarUtilsDefault;
    const animatableSourceWithFallback = obj1.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      const obj = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj, hasItem);
    });
  }
  obj = { style: tmp.bannerImage, children: null };
  obj = { cutouts: null, children: null };
  const size = { shape: guild(8813).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
  const items1 = [size];
  obj.cutouts = items1;
  if (null != guild.banner) {
    obj1 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
    let tmp11Result = tmp11(tmp12(5587), obj1);
  } else {
    const obj2 = { style: null };
    const items2 = [, ];
    ({ bannerImage: arr3[0], emptyBanner: arr3[1] } = tmp);
    obj2.style = items2;
    tmp11Result = tmp11(tmp10, obj2);
  }
  obj.children = tmp11Result;
  const items3 = [closure_12(ClipViewDefault, obj), ];
  const obj3 = { style: null, guild, size: null, animate: null };
  const items4 = [, ];
  ({ guildIcon: arr5[0], guildIconBorder: arr5[1] } = tmp);
  obj3.style = items4;
  const tmp9 = closure_13;
  obj3.size = guild(5584).GuildIconSizes.LARGE;
  obj3.animate = !stateFromStores;
  items3[1] = closure_12(GuildIconDefault, obj3);
  obj.children = items3;
  return tmp9(closure_6, obj);
}
function FeaturedServer(guild) {
  guild = guild.guild;
  ({ selected, handlePress } = guild);
  const tmp = closure_16();
  let obj = guild(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => null != GuildStore.getGuild(guild.id));
  const items1 = [guild, handlePress];
  const callback = noop.useCallback(() => {
    handlePress(guild);
  }, items1);
  obj = { underlayColor: tmp.pressableUnderlayColor.backgroundColor, unstable_pressDelay: 50, style: tmp.featuredServerContainer, onPress: callback, children: null };
  const items2 = [closure_12(CutoutGuildBanner, { guild }), ];
  obj = { style: tmp.featuredServerInnerContainer, children: null };
  const items3 = [closure_12(guild(4556).Text, { maxFontSizeMultiplier: 1, style: tmp.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name }), closure_12(guild(4556).Text, { maxFontSizeMultiplier: 1, lineClamp: 2, variant: "text-xs/normal", color: "text-default", children: guild.description }), ];
  const obj3 = { style: tmp.buttonContainer, children: null };
  const obj4 = { accessibilityHint: "checkbox", accessibilityState: { checked: selected }, disabled: stateFromStores, icon: null, text: null, size: "sm", onPress: null, variant: null, grow: true };
  let tmp7Result;
  if (selected) {
    const obj5 = { size: "sm", color: handlePress(576).colors.CONTROL_CONNECTED_TEXT_DEFAULT };
    tmp7Result = tmp7(tmp2(4520).CircleCheckIcon, obj5);
  }
  obj4.icon = tmp7Result;
  if (stateFromStores) {
    if (!guild.loading) {
      const intl = tmp2(1114).intl;
      obj4.text = intl.string(tmp2(1114).t.cEnaWx);
      obj4.onPress = callback;
      if (stateFromStores) {
        let str = "secondary";
      } else {
        str = "active";
      }
      obj4.variant = str;
      obj3.children = tmp7(guild(4975).Button, obj4);
      items3[2] = tmp7(tmp8, obj3);
      obj.children = items3;
      items2[1] = tmp6(tmp8, obj);
      obj.children = items2;
      return tmp6(guild(5123).PressableHighlight, obj);
    }
  }
  const intl2 = tmp2(1114).intl;
  const string = intl2.string;
  let t = tmp2(1114).t;
  if (selected) {
    t = t["TwueC+"];
    string(t);
  } else {
    string(t.XqMe3N);
  }
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let c15 = 50;
const createICYMIStyles = fn(16452);
let closure_16 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = { container: null, scrollContentContainer: null, footer: null, title: null, subtitle: null, separator: null, featuredServerContainer: null, featuredServerInnerContainer: null, buttonContainer: null, featuredServerTitle: null, guildIcon: null, bannerImage: null, emptyBanner: null, guildsScrollContainer: null, guildsColumn: null, selectedServersRowContainer: null, selectedServerIcon: null, noServerContainer: null, noServerExtraContainer: null, pressableUnderlayColor: null, guildIconBorder: null };
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1, marginHorizontal: margin.margin };
  obj.container = obj;
  obj = { paddingTop: nativeDefault.space.PX_8 };
  obj.scrollContentContainer = obj;
  const rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8 };
  obj.footer = rect;
  obj.title = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
  const obj1 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
  obj.subtitle = { marginHorizontal: nativeDefault.space.PX_24 };
  const size = { height: hairlineWidth.hairlineWidth, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.separator = size;
  const obj2 = { marginHorizontal: nativeDefault.space.PX_24 };
  obj.featuredServerContainer = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, overflow: "hidden", marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 };
  const obj3 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, overflow: "hidden", marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 };
  obj.featuredServerInnerContainer = { marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 };
  const obj4 = { marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 };
  obj.buttonContainer = { marginBottom: nativeDefault.space.PX_12, marginTop: margin.margin };
  const obj5 = { marginBottom: nativeDefault.space.PX_12, marginTop: margin.margin };
  obj.featuredServerTitle = { marginBottom: nativeDefault.space.PX_8 };
  obj.guildIcon = { position: "absolute", top: 50, left: 12 };
  obj.bannerImage = { height: 73, width: "100%" };
  const obj6 = { marginBottom: nativeDefault.space.PX_8 };
  obj.emptyBanner = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  const obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj.guildsScrollContainer = { flex: 1, marginHorizontal: nativeDefault.space.PX_8 };
  const obj8 = { flex: 1, marginHorizontal: nativeDefault.space.PX_8 };
  obj.guildsColumn = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_16 };
  const size1 = { height: v50, width: "100%", marginBottom: nativeDefault.space.PX_24 };
  obj.selectedServersRowContainer = size1;
  const size2 = { flex: 1, width: v50, height: v50, alignItems: "center", justifyContent: "center", borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.md, borderWidth: 1 };
  obj.selectedServerIcon = size2;
  const obj9 = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_16 };
  obj.noServerContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" };
  obj.noServerExtraContainer = { opacity: 0.4 };
  const obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" };
  obj.pressableUnderlayColor = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  const obj11 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj.guildIconBorder = { borderRadius: nativeDefault.radii.md };
  return obj;
});
const __initData = { code: "function ICYMIJoinGuildsScreenTsx1(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.space.PX_24:0)};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx");

export default function ICYMIJoinGuildsScreen() {
  const tmp = closure_16();
  const bottom = stateFromStoresArray1(stateFromStores[25])().bottom;
  let obj = stateFromStoresArray(stateFromStores[16]);
  let items = [closure_10];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => closure_10.getOnboardingGuilds());
  let obj1 = stateFromStoresArray(stateFromStores[16]);
  const items1 = [closure_10];
  stateFromStoresArray1 = obj1.useStateFromStoresArray(items1, () => closure_10.getOnboardingCategoryIds());
  let obj2 = stateFromStoresArray(stateFromStores[16]);
  const items2 = [closure_10];
  stateFromStores = obj2.useStateFromStores(items2, () => closure_10.getCurrentOnboardingGuildOffset());
  const tmp7 = _slicedToArray(noop.useState(new Set()), 2);
  const extraData = tmp7[0];
  _slicedToArray = tmp7[1];
  const tmp9 = _slicedToArray(noop.useState([]), 2);
  noop = tmp9[1];
  const tmp10 = _slicedToArray(noop.useState(0), 2);
  const first1 = tmp10[0];
  closure_7 = tmp10[1];
  const items3 = [extraData];
  const handlePress = noop.useCallback((guildId) => {
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const result = ICYMIAnalytics.trackFeedOnboardingGuildToggled({ guildId: guildId.id, toggled: !first.has(guildId.id) });
    if (first.has(guildId.id)) {
      tmp2((items) => {
        items.delete(guildId.id);
        return new Set(items);
      });
      closure_5((arr) => arr.filter((id) => id.id !== id.id));
    } else {
      tmp2((add) => {
        add.add(guildId.id);
        return new Set(add);
      });
      closure_5((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }, items3);
  const tmp13 = _slicedToArray(noop.useState(false), 2);
  const first2 = tmp13[0];
  closure_10 = tmp13[1];
  const items4 = [extraData];
  const items5 = [stateFromStoresArray1, stateFromStores, first1, stateFromStoresArray.length];
  const callback1 = noop.useCallback(extraData(function*(arg0, value) {
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
        if (0 === v3) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            stateFromStoresArray = tmp4;
            closure_10(true);
            const _Array = Array;
            v3 = 1;
            dependencyMap = 1;
            let obj1 = { value: v3(8351).gravityJoinGuild(Array.from(first), "icymi_info_modal"), done: false };
            return obj1;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else if (value) {
            let tmp51Result = tmp51(8351);
            v3 = 2;
            dependencyMap = 1;
            const obj3 = { value: tmp51Result.fetchDehydrated({ isReloading: true, forceRefresh: true }), done: false };
            return obj3;
          } else {
            tmp51Result = tmp51(4259);
            const obj4 = { key: "ICYMIInfoModal", content: null };
            const intl = stateFromStoresArray(1114).intl;
            obj4.content = intl.string(stateFromStoresArray(1114).t.CG4Hks);
            tmp51Result.open(obj4);
            let obj6 = v3(8351);
            const dehydrated = obj6.fetchDehydrated();
            let obj7 = v3(8351);
            const guildChannelScores = obj7.getGuildChannelScores();
            const recommendedGuilds = v3(8351).getRecommendedGuilds();
            const obj9 = v3(8351);
            v3(4763).popWithKey(stateFromStoresArray(16467).ICYMI_INFO_MODAL_KEY);
            dependencyMap = 3;
            const obj5 = { value: undefined, done: true };
            return obj5;
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj6 = { value, done: true };
            return obj6;
          } else {
            obj1 = v3(8351);
            v3 = 3;
            dependencyMap = 1;
            obj7 = { value: obj1.reloadICYMITab(), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const guildChannelScores1 = v3(8351).getGuildChannelScores();
          const obj19 = v3(8351);
          const recommendedGuilds1 = v3(8351).getRecommendedGuilds();
          const obj20 = v3(8351);
          v3(4763).popWithKey(stateFromStoresArray(16467).ICYMI_INFO_MODAL_KEY);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
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
    return closure_2_12(FeaturedServer, { guild: item, loading: first2, selected: first.has(item.id), handlePress }, item.id);
  }, items6);
  obj = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  let intl = stateFromStoresArray(stateFromStores[24]).intl;
  obj.children = intl.string(stateFromStoresArray(stateFromStores[24]).t["19ldCF"]);
  const children = [closure_12(stateFromStoresArray(stateFromStores[21]).Text, obj), , , , , ];
  obj = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: null };
  const intl2 = stateFromStoresArray(stateFromStores[24]).intl;
  obj.children = intl2.string(stateFromStoresArray(stateFromStores[24]).t.u0KPUS);
  children[1] = closure_12(stateFromStoresArray(stateFromStores[21]).Text, obj);
  children[2] = closure_12(SelectedServersRow, { selectedGuilds: tmp9[0] });
  obj1 = { style: tmp.separator };
  children[3] = closure_12(first1, obj1);
  obj2 = { style: tmp.guildsScrollContainer, children: null };
  let obj3 = { data: stateFromStoresArray, extraData, contentContainerStyle: tmp.scrollContentContainer, contentInset: { bottom: 72 + bottom }, numColumns: 2, onEndReached: callback2, onEndReachedThreshold: 0.5, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, renderItem: callback3 };
  obj2.children = closure_12(stateFromStoresArray(stateFromStores[31]).MasonryFlashList, obj3);
  children[4] = closure_12(first1, obj2);
  let tmp20Result = extraData.size >= 1;
  if (tmp20Result) {
    let obj5 = { style: null, children: null };
    let obj6 = { marginBottom: bottom };
    const items8 = [obj6, tmp.footer];
    obj5.style = items8;
    let obj7 = { loading: first2, size: "lg", text: null, onPress: null };
    const intl3 = tmp3(tmp2[24]).intl;
    obj7.text = intl3.string(tmp3(tmp2[24]).t.K50GHd);
    obj7.onPress = callback1;
    obj5.children = tmp20(tmp3(tmp2[22]).Button, obj7);
    tmp20Result = tmp20(first1, obj5);
  }
  children[5] = tmp20Result;
  return closure_13(closure_14, { children });
};