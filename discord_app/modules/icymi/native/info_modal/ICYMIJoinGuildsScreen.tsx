// discord_app/modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import ICYMIAnalytics2 from "../../ICYMIAnalytics.tsx";
import ClipViewDefault from "../../../../design/components/Icon/native/ClipView.tsx";
import ServerIcon from "../../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ICYMIPopularGuildsStore from "../../ICYMIPopularGuildsStore.tsx";

const GuildIconDefault = GuildIcon;

require = fn;
function SelectedServerIcon(guild) {
  guild = guild.guild;
  const tmp = closure_16();
  const items = [tmp.selectedServerIcon, ,];
  let noServerContainer = null == guild;
  if (noServerContainer) {
    noServerContainer = tmp.noServerContainer;
  }
  items[1] = noServerContainer;
  const obj = { style: items, children: null };
  items[2] = null == guild && guild.index >= 3 && tmp.noServerExtraContainer;
  if (null != guild) {
    const obj2 = { style: tmp.guildIconBorder, guild, size: GuildIcon.GuildIconSizes.LARGE };
    let tmp3Result = closure_1_12(GuildIconDefault, obj2);
  } else {
    tmp3Result = null;
    if (tmp2) {
      const obj3 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
      tmp3Result = closure_1_12(ServerIcon.ServerIcon, obj3);
    }
  }
  obj.children = tmp3Result;
  return closure_1_12(timestampProducer, obj);
}
function SelectedServersRow(selectedGuilds) {
  selectedGuilds = selectedGuilds.selectedGuilds;
  first = undefined;
  dependencyMap = undefined;
  const items = [selectedGuilds];
  const callback = noop.useCallback((arg0, index) => {
    let tmp3;
    if (index < selectedGuilds.length) {
      tmp3 = selectedGuilds[index];
    }
    return closure_2_12(SelectedServerIcon, { guild: tmp3, index });
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
  let obj = selectedGuilds(4563);
  fn.__closure = {
    withTiming: selectedGuilds(4830).withTiming,
    selectedGuilds,
    SELECTED_SERVER_SIZE_WITH_BORDER: v50,
    tokens: first(576),
  };
  fn.__workletHash = 2911488630455;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  const items2 = [tmp.selectedServersRowContainer, animatedStyle];
  obj3.style = items2;
  const obj4 = {
    ref,
    sections: null,
    insetStart: null,
    insetEnd: null,
    renderItem: null,
    estimatedListSize: "windowSize",
    itemSize: null,
    horizontal: true,
    listId: "selected-servers-list",
    showsHorizontalScrollIndicator: false,
  };
  let num = 3;
  let obj2 = {
    withTiming: selectedGuilds(4830).withTiming,
    selectedGuilds,
    SELECTED_SERVER_SIZE_WITH_BORDER: v50,
    tokens: first(576),
  };
  if (selectedGuilds.length >= 3) {
    num = selectedGuilds.length + 1;
  }
  const items3 = [num];
  obj4.sections = items3;
  obj4.insetStart = first(576).space.PX_24;
  obj4.insetEnd = first(576).space.PX_12;
  obj4.renderItem = callback;
  obj4.itemSize = v50 + first(576).space.PX_12;
  obj3.children = closure_12(first(6471), obj4);
  return closure_12(first(4563).View, obj3);
}
function CutoutGuildBanner(guild) {
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
    const animatableSourceWithFallback = AvatarUtilsDefault.getAnimatableSourceWithFallback(hasItem, (hasItem) =>
      AvatarUtilsDefault.getGuildBannerSource({ id: guild.id, banner: guild.banner }, hasItem),
    );
  }
  const obj3 = { style: tmp.bannerImage, children: null };
  const obj4 = { cutouts: null, children: null };
  const size = { shape: null, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
  const obj = guild(504);
  size.shape = guild(8268).CutoutShape.RoundedRect;
  const items1 = [size];
  obj4.cutouts = items1;
  if (null != guild.banner) {
    const obj5 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
    let tmp11Result = closure_12(FastImageDefault, obj5);
  } else {
    const obj6 = { style: null };
    const items2 = [,];
    ({ bannerImage: arr3[0], emptyBanner: arr3[1] } = tmp);
    obj6.style = items2;
    tmp11Result = closure_12(closure_6, obj6);
  }
  obj4.children = tmp11Result;
  const items3 = [closure_12(ClipViewDefault, obj4)];
  const obj7 = { style: null, guild, size: null, animate: null };
  const items4 = [,];
  ({ guildIcon: arr5[0], guildIconBorder: arr5[1] } = tmp);
  obj7.style = items4;
  obj7.size = guild(5891).GuildIconSizes.LARGE;
  obj7.animate = !stateFromStores;
  items3[1] = closure_12(GuildIconDefault, obj7);
  obj3.children = items3;
  return closure_13(closure_6, obj3);
}
function FeaturedServer(guild) {
  guild = guild.guild;
  ({ selected, handlePress } = guild);
  const tmp = closure_16();
  const items = [GuildStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => null != GuildStore.getGuild(guild.id));
  const items1 = [guild, handlePress];
  const callback = noop.useCallback(() => {
    handlePress(guild);
  }, items1);
  const obj2 = {
    underlayColor: tmp.pressableUnderlayColor.backgroundColor,
    unstable_pressDelay: 50,
    style: tmp.featuredServerContainer,
    onPress: callback,
    children: null,
  };
  const items2 = [closure_12(CutoutGuildBanner, { guild })];
  const obj3 = { style: tmp.featuredServerInnerContainer, children: null };
  const items3 = [
    closure_12(guild(4825).Text, {
      maxFontSizeMultiplier: 1,
      style: tmp.featuredServerTitle,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: guild.name,
    }),
    closure_12(guild(4825).Text, {
      maxFontSizeMultiplier: 1,
      lineClamp: 2,
      variant: "text-xs/normal",
      color: "text-default",
      children: guild.description,
    }),
  ];
  const obj6 = { style: tmp.buttonContainer, children: null };
  const obj7 = {
    accessibilityHint: "checkbox",
    accessibilityState: { checked: selected },
    disabled: stateFromStores,
    icon: null,
    text: null,
    size: "sm",
    onPress: null,
    variant: null,
    grow: true,
  };
  let tmp7Result;
  if (selected) {
    const obj8 = { size: "sm", color: handlePress(576).colors.CONTROL_CONNECTED_TEXT_DEFAULT };
    tmp7Result = closure_12(tmp2(4788).CircleCheckIcon, obj8);
  }
  obj7.icon = tmp7Result;
  if (stateFromStores) {
    if (!guild.loading) {
      const intl = tmp2(1115).intl;
      obj7.text = intl.string(tmp2(1115).t.cEnaWx);
      obj7.onPress = callback;
      if (stateFromStores) {
        let str = "secondary";
      } else {
        str = "active";
      }
      obj7.variant = str;
      obj6.children = closure_12(guild(5274).Button, obj7);
      items3[2] = closure_12(closure_6, obj6);
      obj3.children = items3;
      items2[1] = closure_13(closure_6, obj3);
      obj2.children = items2;
      return closure_13(guild(5428).PressableHighlight, obj2);
    }
  }
  const intl2 = tmp2(1115).intl;
  const string = intl2.string;
  let t = tmp2(1115).t;
  if (selected) {
    t = t["TwueC+"];
    string(t);
  } else {
    string(t.XqMe3N);
  }
  const obj = guild(504);
  const obj4 = {
    maxFontSizeMultiplier: 1,
    style: tmp.featuredServerTitle,
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    children: guild.name,
  };
  const obj5 = {
    maxFontSizeMultiplier: 1,
    lineClamp: 2,
    variant: "text-xs/normal",
    color: "text-default",
    children: guild.description,
  };
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let c15 = 50;
const createICYMIStyles = fn(16067);
let closure_16 = createICYMIStyles.createICYMIStyles((margin) => {
  const obj = {
    container: {
      backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
      position: "relative",
      flex: 1,
      marginHorizontal: margin.margin,
    },
    scrollContentContainer: null,
    footer: null,
    title: null,
    subtitle: null,
    separator: null,
    featuredServerContainer: null,
    featuredServerInnerContainer: null,
    buttonContainer: null,
    featuredServerTitle: null,
    guildIcon: null,
    bannerImage: null,
    emptyBanner: null,
    guildsScrollContainer: null,
    guildsColumn: null,
    selectedServersRowContainer: null,
    selectedServerIcon: null,
    noServerContainer: null,
    noServerExtraContainer: null,
    pressableUnderlayColor: null,
    guildIconBorder: null,
  };
  const obj2 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    position: "relative",
    flex: 1,
    marginHorizontal: margin.margin,
  };
  obj.scrollContentContainer = { paddingTop: nativeDefault.space.PX_8 };
  const rect = {
    position: "absolute",
    bottom: 0,
    left: nativeDefault.space.PX_24,
    right: nativeDefault.space.PX_24,
    paddingBottom: nativeDefault.space.PX_8,
  };
  obj.footer = rect;
  const obj3 = { paddingTop: nativeDefault.space.PX_8 };
  obj.title = {
    marginTop: nativeDefault.space.PX_24,
    marginBottom: nativeDefault.space.PX_8,
    marginHorizontal: nativeDefault.space.PX_24,
  };
  const obj4 = {
    marginTop: nativeDefault.space.PX_24,
    marginBottom: nativeDefault.space.PX_8,
    marginHorizontal: nativeDefault.space.PX_24,
  };
  obj.subtitle = { marginHorizontal: nativeDefault.space.PX_24 };
  const size = {
    height: hairlineWidth.hairlineWidth,
    width: "100%",
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  };
  obj.separator = size;
  const obj5 = { marginHorizontal: nativeDefault.space.PX_24 };
  obj.featuredServerContainer = {
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
    overflow: "hidden",
    marginHorizontal: nativeDefault.space.PX_8,
    marginVertical: nativeDefault.space.PX_8,
  };
  const obj6 = {
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
    overflow: "hidden",
    marginHorizontal: nativeDefault.space.PX_8,
    marginVertical: nativeDefault.space.PX_8,
  };
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
  const size2 = {
    flex: 1,
    width: v50,
    height: v50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: nativeDefault.colors.BORDER_STRONG,
    borderRadius: nativeDefault.radii.md,
    borderWidth: 1,
  };
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
const __initData = {
  code: "function ICYMIJoinGuildsScreenTsx1(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.space.PX_24:0)};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx");

export default function ICYMIJoinGuildsScreen() {
  const tmp = closure_16();
  const bottom = stateFromStoresArray1(stateFromStores[25])().bottom;
  let items = [closure_10];
  stateFromStoresArray = stateFromStoresArray(stateFromStores[16]).useStateFromStoresArray(items, () =>
    closure_10.getOnboardingGuilds(),
  );
  let obj = stateFromStoresArray(stateFromStores[16]);
  const items1 = [closure_10];
  stateFromStoresArray1 = stateFromStoresArray(stateFromStores[16]).useStateFromStoresArray(items1, () =>
    closure_10.getOnboardingCategoryIds(),
  );
  const obj2 = stateFromStoresArray(stateFromStores[16]);
  const items2 = [closure_10];
  stateFromStores = stateFromStoresArray(stateFromStores[16]).useStateFromStores(items2, () =>
    closure_10.getCurrentOnboardingGuildOffset(),
  );
  let obj3 = stateFromStoresArray(stateFromStores[16]);
  [extraData, _slicedToArray] = noop.useState(new Set());
  const tmp9 = _slicedToArray(noop.useState([]), 2);
  noop = tmp9[1];
  [first1, closure_7] = noop.useState(0);
  const items3 = [extraData];
  const handlePress = noop.useCallback((guildId) => {
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const result = ICYMIAnalytics.trackFeedOnboardingGuildToggled({
      guildId: guildId.id,
      toggled: !first.has(guildId.id),
    });
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
  const callback1 = noop.useCallback(
    extraData(function* () {
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              stateFromStoresArray = tmp4;
              closure_10(true);
              const _Array = Array;
              v3 = 1;
              dependencyMap = 1;
              const obj5 = { value: v3(7791).gravityJoinGuild(Array.from(first), "icymi_info_modal"), done: false };
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
              const obj11 = {
                value: tmp51(7791).fetchDehydrated({ isReloading: true, forceRefresh: true }),
                done: false,
              };
              return obj11;
            } else {
              const obj12 = { key: "ICYMIInfoModal", content: null };
              const intl = stateFromStoresArray(1115).intl;
              obj12.content = intl.string(stateFromStoresArray(1115).t.CG4Hks);
              tmp51(4525).open(obj12);
              const tmp51Result2 = tmp51(4525);
              const dehydrated = v3(7791).fetchDehydrated();
              const obj7 = v3(7791);
              const guildChannelScores = v3(7791).getGuildChannelScores();
              const obj8 = v3(7791);
              const recommendedGuilds = v3(7791).getRecommendedGuilds();
              const obj9 = v3(7791);
              v3(5032).popWithKey(stateFromStoresArray(16082).ICYMI_INFO_MODAL_KEY);
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
              const obj16 = { value: v3(7791).reloadICYMITab(), done: false };
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
            const guildChannelScores1 = v3(7791).getGuildChannelScores();
            const obj19 = v3(7791);
            const recommendedGuilds1 = v3(7791).getRecommendedGuilds();
            const obj20 = v3(7791);
            v3(5032).popWithKey(stateFromStoresArray(16082).ICYMI_INFO_MODAL_KEY);
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp33) {
          dependencyMap = tmp;
          throw tmp33;
        }
      }
    }),
    items4,
  );
  const items6 = [first2, extraData, handlePress];
  const callback2 = noop.useCallback(() => {
    if (first1 <= stateFromStores) {
      if (stateFromStoresArray.length < 150) {
        const sum = tmp + ICYMIInfoModalTypes.ICYMI_DISCOVERABLE_GUILDS_PAGE_SIZE;
        closure_7(sum);
        const popularGuildsFromCategories = ICYMIActionCreatorsDefault.fetchPopularGuildsFromCategories(
          stateFromStoresArray1,
          sum,
        );
      }
    }
  }, items5);
  const callback3 = noop.useCallback((item) => {
    item = item.item;
    return closure_2_12(
      FeaturedServer,
      { guild: item, loading: first2, selected: first.has(item.id), handlePress },
      item.id,
    );
  }, items6);
  let obj4 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  let intl = stateFromStoresArray(stateFromStores[24]).intl;
  obj4.children = intl.string(stateFromStoresArray(stateFromStores[24]).t["19ldCF"]);
  const children = [closure_12(stateFromStoresArray(stateFromStores[21]).Text, obj4), , , , ,];
  let obj5 = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: null };
  const intl2 = stateFromStoresArray(stateFromStores[24]).intl;
  obj5.children = intl2.string(stateFromStoresArray(stateFromStores[24]).t.u0KPUS);
  children[1] = closure_12(stateFromStoresArray(stateFromStores[21]).Text, obj5);
  children[2] = closure_12(SelectedServersRow, { selectedGuilds: tmp9[0] });
  children[3] = closure_12(first1, { style: tmp.separator });
  let obj7 = { style: tmp.guildsScrollContainer, children: null };
  let obj8 = {
    data: stateFromStoresArray,
    extraData,
    contentContainerStyle: tmp.scrollContentContainer,
    contentInset: { bottom: 72 + bottom },
    numColumns: 2,
    onEndReached: callback2,
    onEndReachedThreshold: 0.5,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    renderItem: callback3,
  };
  obj7.children = closure_12(stateFromStoresArray(stateFromStores[31]).MasonryFlashList, obj8);
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
    obj10.children = closure_12(tmp3(tmp2[22]).Button, obj12);
    tmp20Result = closure_12(first1, obj10);
  }
  children[5] = tmp20Result;
  return closure_13(closure_14, { children });
}
