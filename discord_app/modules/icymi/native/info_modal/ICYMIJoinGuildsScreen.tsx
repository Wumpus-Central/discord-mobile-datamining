// discord_app/modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../../utils/AvatarUtils.tsx";
import GuildIconSizes from "../../../guild/native/GuildIcon.tsx";
import GuildIconSizesDefault from "../../../guild/native/GuildIcon.tsx";
import SolidCutoutDefault from "../../../../design/components/Icon/native/ClipView.tsx";
import ServerIcon from "../../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../a11y/AccessibilityStore.tsx";
import closure_9 from "../../../../stores/GuildStore.tsx";
import closure_10 from "../../ICYMIPopularGuildsStore.tsx";
import { GuildFeatures } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createICYMIStyles from "../createICYMIStyles.tsx";

require = arg1;
function SelectedServerIcon(guild) {
  guild = guild.guild;
  const tmp = callback3();
  const items = [tmp.selectedServerIcon, ,];
  let noServerContainer = null == guild;
  if (noServerContainer) {
    noServerContainer = tmp.noServerContainer;
  }
  items[1] = noServerContainer;
  let obj = { style: items, children: null };
  items[2] = null == guild && guild.index >= 3 && tmp.noServerExtraContainer;
  if (null != guild) {
    obj = { style: null, guild: null, size: null };
    obj[0] = tmp.guildIconBorder;
    obj[1] = guild;
    obj[2] = GuildIconSizes.GuildIconSizes.LARGE;
    let tmp3Result = tmp3(GuildIconSizesDefault, obj);
    const tmp12 = GuildIconSizesDefault;
  } else {
    tmp3Result = null;
    if (tmp2) {
      obj = { size: "md", color: null };
      obj[1] = ThemesDefault.colors.ICON_MUTED;
      tmp3Result = tmp3(ServerIcon.ServerIcon, obj);
    }
  }
  obj[1] = tmp3Result;
  return closure_12(closure_6, obj);
}
function SelectedServersRow(selectedGuilds) {
  selectedGuilds = selectedGuilds.selectedGuilds;
  let first;
  dependencyMap = undefined;
  let ref;
  const items = [selectedGuilds];
  const callback = React.useCallback((arg0, index) => {
    let tmp3;
    if (index < selectedGuilds.length) {
      tmp3 = selectedGuilds[index];
    }
    return closure_1_12(closure_1_17, { guild: tmp3, index });
  }, items);
  let tmp3 = callback(React.useState(selectedGuilds.length), 2);
  first = tmp3[0];
  dependencyMap = tmp3[1];
  ref = React.useRef(null);
  const items1 = [first, selectedGuilds.length];
  const effect = React.useEffect(() => {
    if (first < selectedGuilds.length) {
      const current = ref.current;
      if (current != null) {
        const obj = { animated: true, section: 0, item: null };
        obj[2] = arr.length;
        current.scrollToLocation(obj);
      }
      dependencyMap(arr.length);
    } else if (tmp !== arr.length) {
      dependencyMap(arr.length);
    }
  }, items1);
  let obj = selectedGuilds(4217);
  const fn = function _() {
    let obj = selectedGuilds(4479);
    let num = 0;
    if (selectedGuilds.length > 0) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num), height: null, marginTop: null };
    let tmpResult = tmp(4479);
    let num2 = 0;
    if (selectedGuilds.length > 0) {
      num2 = closure_1_15;
    }
    obj[1] = tmpResult.withTiming(num2);
    tmpResult = tmp(4479);
    let num3 = 0;
    if (selectedGuilds.length > 0) {
      num3 = first(709).space.PX_24;
    }
    obj[2] = tmpResult.withTiming(num3);
    return obj;
  };
  obj = {
    withTiming: selectedGuilds(4479).withTiming,
    selectedGuilds,
    SELECTED_SERVER_SIZE_WITH_BORDER: c15,
    tokens: first(709),
  };
  fn.__closure = obj;
  fn.__workletHash = 2911488630455;
  fn.__initData = closure_18;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items2, children: null };
  items2 = [callback3().selectedServersRowContainer, animatedStyle];
  obj1 = {
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
  const tmp = callback3();
  const tmp8 = c15;
  if (selectedGuilds.length >= 3) {
    num = selectedGuilds.length + 1;
  }
  const items3 = [num];
  obj1[1] = items3;
  obj1[2] = first(709).space.PX_24;
  obj1[3] = first(709).space.PX_12;
  obj1[4] = callback;
  obj1[6] = tmp8 + first(709).space.PX_12;
  obj[1] = closure_12(first(7790), obj1);
  return closure_12(first(4217).View, obj);
}
function CutoutGuildBanner(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let obj = guild(586);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let hasItem = !stateFromStores;
  if (!stateFromStores) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    obj1 = getAvatarURLDefault;
    const animatableSourceWithFallback = obj1.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      let obj = closure_1_1(closure_1_2[17]);
      obj = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj, hasItem);
    });
  }
  obj = { style: tmp.bannerImage, children: null };
  obj = { cutouts: null, children: null };
  obj1 = { shape: guild(8109).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
  const items1 = [obj1];
  obj[0] = items1;
  if (null != guild.banner) {
    const obj2 = { style: null, source: null, resizeMode: "cover" };
    obj2[0] = tmp.bannerImage;
    obj2[1] = animatableSourceWithFallback;
    let tmp11Result = tmp11(tmp12(5502), obj2);
  } else {
    const obj3 = { style: null };
    const items2 = [,];
    ({ bannerImage: arr3[0], emptyBanner: arr3[1] } = tmp);
    obj3[0] = items2;
    tmp11Result = tmp11(tmp10, obj3);
  }
  obj[1] = tmp11Result;
  const items3 = [closure_12(SolidCutoutDefault, obj)];
  const obj4 = { style: items4, guild, size: null, animate: null };
  items4 = [,];
  ({ guildIcon: arr5[0], guildIconBorder: arr5[1] } = tmp);
  const tmp13 = SolidCutoutDefault;
  const tmp9 = closure_13;
  obj4[2] = guild(6013).GuildIconSizes.LARGE;
  obj4[3] = !stateFromStores;
  items3[1] = closure_12(GuildIconSizesDefault, obj4);
  obj[1] = items3;
  return tmp9(closure_6, obj);
}
function FeaturedServer(guild) {
  guild = guild.guild;
  ({ selected, handlePress } = guild);
  const tmp = callback3();
  let obj = guild(586);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => null != closure_1_9.getGuild(guild.id));
  const items1 = [guild, handlePress];
  const callback = React.useCallback(() => {
    handlePress(guild);
  }, items1);
  obj = {
    underlayColor: tmp.pressableUnderlayColor.backgroundColor,
    unstable_pressDelay: 50,
    style: tmp.featuredServerContainer,
    onPress: callback,
    children: null,
  };
  const items2 = [callback2(CutoutGuildBanner, { guild })];
  obj = { style: tmp.featuredServerInnerContainer, children: null };
  const items3 = [
    callback2(guild(4474).Text, {
      maxFontSizeMultiplier: 1,
      style: tmp.featuredServerTitle,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: guild.name,
    }),
    callback2(guild(4474).Text, {
      maxFontSizeMultiplier: 1,
      lineClamp: 2,
      variant: "text-xs/normal",
      color: "text-default",
      children: guild.description,
    }),
  ];
  const obj3 = { style: tmp.buttonContainer, children: null };
  const obj4 = {
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
    const obj5 = { size: "sm", color: null };
    obj5[1] = handlePress(709).colors.CONTROL_CONNECTED_TEXT_DEFAULT;
    tmp7Result = tmp7(tmp2(4438).CircleCheckIcon, obj5);
  }
  obj4[3] = tmp7Result;
  if (stateFromStores) {
    if (!guild.loading) {
      const intl = tmp2(1233).intl;
      obj4[4] = intl.string(tmp2(1233).t.cEnaWx);
      obj4[6] = callback;
      if (stateFromStores) {
        let str = "secondary";
      } else {
        str = "active";
      }
      obj4[7] = str;
      obj3[1] = tmp7(guild(4929).Button, obj4);
      items3[2] = tmp7(tmp8, obj3);
      obj[1] = items3;
      items2[1] = tmp6(tmp8, obj);
      obj[4] = items2;
      return tmp6(guild(5077).PressableHighlight, obj);
    }
  }
  const intl2 = tmp2(1233).intl;
  const string = intl2.string;
  TwueC_ = tmp2(1233).t;
  if (selected) {
    TwueC_ = TwueC_["TwueC+"];
    string(TwueC_);
  } else {
    string(TwueC_.XqMe3N);
  }
}
({ View: closure_6, StyleSheet: error } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let c15 = 50;
let closure_16 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = {
    container: null,
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
  obj = {
    backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER,
    position: "relative",
    flex: 1,
    marginHorizontal: margin.margin,
  };
  obj[0] = obj;
  obj = { paddingTop: ThemesDefault.space.PX_8 };
  obj[1] = obj;
  obj[2] = {
    position: "absolute",
    bottom: 0,
    left: ThemesDefault.space.PX_24,
    right: ThemesDefault.space.PX_24,
    paddingBottom: ThemesDefault.space.PX_8,
  };
  obj1 = {
    position: "absolute",
    bottom: 0,
    left: ThemesDefault.space.PX_24,
    right: ThemesDefault.space.PX_24,
    paddingBottom: ThemesDefault.space.PX_8,
  };
  obj[3] = {
    marginTop: ThemesDefault.space.PX_24,
    marginBottom: ThemesDefault.space.PX_8,
    marginHorizontal: ThemesDefault.space.PX_24,
  };
  const obj2 = {
    marginTop: ThemesDefault.space.PX_24,
    marginBottom: ThemesDefault.space.PX_8,
    marginHorizontal: ThemesDefault.space.PX_24,
  };
  obj[4] = { marginHorizontal: ThemesDefault.space.PX_24 };
  const obj3 = { marginHorizontal: ThemesDefault.space.PX_24 };
  obj[5] = { height: hairlineWidth.hairlineWidth, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
  const obj4 = {
    height: hairlineWidth.hairlineWidth,
    width: "100%",
    backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
  };
  obj[6] = {
    borderRadius: ThemesDefault.radii.lg,
    backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT,
    overflow: "hidden",
    marginHorizontal: ThemesDefault.space.PX_8,
    marginVertical: ThemesDefault.space.PX_8,
  };
  const obj5 = {
    borderRadius: ThemesDefault.radii.lg,
    backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT,
    overflow: "hidden",
    marginHorizontal: ThemesDefault.space.PX_8,
    marginVertical: ThemesDefault.space.PX_8,
  };
  obj[7] = { marginHorizontal: ThemesDefault.space.PX_12, marginTop: 36 };
  const obj6 = { marginHorizontal: ThemesDefault.space.PX_12, marginTop: 36 };
  obj[8] = { marginBottom: ThemesDefault.space.PX_12, marginTop: margin.margin };
  const obj7 = { marginBottom: ThemesDefault.space.PX_12, marginTop: margin.margin };
  obj[9] = { marginBottom: ThemesDefault.space.PX_8 };
  obj[10] = { position: "absolute", top: 50, left: 12 };
  obj[11] = { height: 73, width: "100%" };
  const obj8 = { marginBottom: ThemesDefault.space.PX_8 };
  obj[12] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
  const obj9 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj[13] = { flex: 1, marginHorizontal: ThemesDefault.space.PX_8 };
  const obj10 = { flex: 1, marginHorizontal: ThemesDefault.space.PX_8 };
  obj[14] = { flex: 1, flexDirection: "column", gap: ThemesDefault.space.PX_16 };
  const obj11 = { flex: 1, flexDirection: "column", gap: ThemesDefault.space.PX_16 };
  obj[15] = { height: c15, width: "100%", marginBottom: ThemesDefault.space.PX_24 };
  const obj12 = { height: c15, width: "100%", marginBottom: ThemesDefault.space.PX_24 };
  obj[16] = {
    flex: 1,
    width: c15,
    height: c15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: ThemesDefault.colors.BORDER_STRONG,
    borderRadius: ThemesDefault.radii.md,
    borderWidth: 1,
  };
  const obj13 = {
    flex: 1,
    width: c15,
    height: c15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: ThemesDefault.colors.BORDER_STRONG,
    borderRadius: ThemesDefault.radii.md,
    borderWidth: 1,
  };
  obj[17] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" };
  obj[18] = { opacity: 0.4 };
  const obj14 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" };
  obj[19] = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  const obj15 = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj[20] = { borderRadius: ThemesDefault.radii.md };
  return obj;
});
let closure_18 = {
  code: "function ICYMIJoinGuildsScreenTsx1(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.space.PX_24:0)};}",
};
let result = require("set").fileFinishedImporting("modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx");

export default function ICYMIJoinGuildsScreen() {
  const tmp = callback3();
  const bottom = stateFromStoresArray1(stateFromStores[25])().bottom;
  let obj = stateFromStoresArray(stateFromStores[16]);
  let items = [closure_10];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => store.getOnboardingGuilds());
  obj1 = stateFromStoresArray(stateFromStores[16]);
  const items1 = [closure_10];
  stateFromStoresArray1 = obj1.useStateFromStoresArray(items1, () => store.getOnboardingCategoryIds());
  let obj2 = stateFromStoresArray(stateFromStores[16]);
  const items2 = [closure_10];
  stateFromStores = obj2.useStateFromStores(items2, () => store.getCurrentOnboardingGuildOffset());
  const tmp7 = callback(React.useState(new Set()), 2);
  const first = tmp7[0];
  callback = tmp7[1];
  const tmp9 = callback(React.useState([]), 2);
  React = tmp9[1];
  const tmp10 = callback(React.useState(0), 2);
  const first1 = tmp10[0];
  closure_7 = tmp10[1];
  const items3 = [first];
  callback = React.useCallback((guildId) => {
    closure_0 = guildId;
    const ICYMIAnalytics = stateFromStoresArray(stateFromStores[26]).ICYMIAnalytics;
    const result = ICYMIAnalytics.trackFeedOnboardingGuildToggled({
      guildId: guildId.id,
      toggled: !first.has(guildId.id),
    });
    if (first.has(guildId.id)) {
      tmp2((items) => {
        items.delete(guildId.id);
        return new Set(items);
      });
      callback((arr) => arr.filter((id) => id.id !== id.id));
    } else {
      tmp2((add) => {
        add.add(guildId.id);
        return new Set(add);
      });
      callback((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }, items3);
  const tmp13 = callback(React.useState(false), 2);
  const first2 = tmp13[0];
  closure_10 = tmp13[1];
  const items4 = [first];
  const items5 = [stateFromStoresArray1, stateFromStores, first1, stateFromStoresArray.length];
  const callback1 = React.useCallback(
    first(function* () {
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
              closure_1_10(true);
              const _Array = Array;
              v0 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = v0(8641).gravityJoinGuild(Array.from(closure_1_3), "icymi_info_modal");
              return obj1;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else if (arg1) {
              let tmp52Result = tmp52(8641);
              v0 = 2;
              dependencyMap = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = tmp52Result.fetchDehydrated({ isReloading: true, forceRefresh: true });
              return obj3;
            } else {
              tmp52Result = tmp52(4194);
              const obj4 = { key: "ICYMIInfoModal", content: null };
              const intl = closure_1_0(1233).intl;
              obj4[1] = intl.string(closure_1_0(1233).t.CG4Hks);
              tmp52Result.open(obj4);
              let obj6 = v0(8641);
              const dehydrated = obj6.fetchDehydrated();
              let obj7 = v0(8641);
              const guildChannelScores = obj7.getGuildChannelScores();
              const recommendedGuilds = v0(8641).getRecommendedGuilds();
              const obj9 = v0(8641);
              v0(4724).popWithKey(closure_1_0(16305).ICYMI_INFO_MODAL_KEY);
              dependencyMap = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = undefined;
              return obj5;
            }
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              obj1 = v0(8641);
              v0 = 3;
              dependencyMap = 1;
              obj7 = { value: null, done: false };
              obj7[0] = obj1.reloadICYMITab();
              return obj7;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const guildChannelScores1 = v0(8641).getGuildChannelScores();
            const obj19 = v0(8641);
            const recommendedGuilds1 = v0(8641).getRecommendedGuilds();
            const obj20 = v0(8641);
            v0(4724).popWithKey(closure_1_0(16305).ICYMI_INFO_MODAL_KEY);
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
  const items6 = [first2, first, callback];
  const callback2 = React.useCallback(() => {
    if (first1 <= stateFromStores) {
      if (stateFromStoresArray.length < 150) {
        const sum = tmp + stateFromStoresArray(stateFromStores[30]).ICYMI_DISCOVERABLE_GUILDS_PAGE_SIZE;
        callback2(sum);
        const popularGuildsFromCategories = stateFromStoresArray1(stateFromStores[27]).fetchPopularGuildsFromCategories(
          stateFromStoresArray1,
          sum,
        );
        const obj = stateFromStoresArray1(stateFromStores[27]);
      }
    }
  }, items5);
  callback3 = React.useCallback((item) => {
    item = item.item;
    return closure_1_12(
      closure_1_21,
      { guild: item, loading: first2, selected: first.has(item.id), handlePress: callback },
      item.id,
    );
  }, items6);
  obj = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  let intl = stateFromStoresArray(stateFromStores[24]).intl;
  obj[3] = intl.string(stateFromStoresArray(stateFromStores[24]).t["19ldCF"]);
  const children = [callback2(stateFromStoresArray(stateFromStores[21]).Text, obj), , , , ,];
  obj = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: null };
  const intl2 = stateFromStoresArray(stateFromStores[24]).intl;
  obj[3] = intl2.string(stateFromStoresArray(stateFromStores[24]).t.u0KPUS);
  children[1] = callback2(stateFromStoresArray(stateFromStores[21]).Text, obj);
  children[2] = callback2(SelectedServersRow, { selectedGuilds: tmp9[0] });
  obj1 = { style: tmp.separator };
  children[3] = callback2(first1, obj1);
  obj2 = {
    style: tmp.guildsScrollContainer,
    children: callback2(stateFromStoresArray(stateFromStores[31]).MasonryFlashList, obj3),
  };
  children[4] = callback2(first1, obj2);
  let tmp20Result = first.size >= 1;
  if (tmp20Result) {
    let obj5 = { style: null, children: null };
    let obj6 = { marginBottom: null };
    obj6[0] = bottom;
    const items8 = [obj6, tmp.footer];
    obj5[0] = items8;
    let obj7 = { loading: null, size: "lg", text: null, onPress: null };
    obj7[0] = first2;
    const intl3 = tmp3(tmp2[24]).intl;
    obj7[2] = intl3.string(tmp3(tmp2[24]).t.K50GHd);
    obj7[3] = callback1;
    obj5[1] = tmp20(tmp3(tmp2[22]).Button, obj7);
    tmp20Result = tmp20(first1, obj5);
  }
  children[5] = tmp20Result;
  return closure_13(closure_14, { children });
}
