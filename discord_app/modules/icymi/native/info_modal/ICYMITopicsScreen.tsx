// discord_app/modules/icymi/native/info_modal/ICYMITopicsScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import BookCheckIcon from "../../../../design/components/Icon/native/redesign/generated/BookCheckIcon.tsx";
import ForumIcon from "../../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import ICYMIAnalytics2 from "../../ICYMIAnalytics.tsx";
import GameControllerIcon from "../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import RobotIcon from "../../../../design/components/Icon/native/redesign/generated/RobotIcon.tsx";
import MusicIcon from "../../../../design/components/Icon/native/redesign/generated/MusicIcon.tsx";
import FoodIcon from "../../../../design/components/Icon/native/redesign/generated/FoodIcon.tsx";
import BicycleIcon from "../../../../design/components/Icon/native/redesign/generated/BicycleIcon.tsx";
import TvIcon from "../../../../design/components/Icon/native/redesign/generated/TvIcon.tsx";
import PencilSparkleIcon from "../../../../design/components/Icon/native/redesign/generated/PencilSparkleIcon.tsx";
import PiggyBankIcon from "../../../../design/components/Icon/native/redesign/generated/PiggyBankIcon.tsx";
import PaintPaletteIcon from "../../../../design/components/Icon/native/redesign/generated/PaintPaletteIcon.tsx";
import ScienceIcon from "../../../../design/components/Icon/native/redesign/generated/ScienceIcon.tsx";
import MedalIcon from "../../../../design/components/Icon/native/redesign/generated/MedalIcon.tsx";
import PaintbrushThinIcon from "../../../../design/components/Icon/native/redesign/generated/PaintbrushThinIcon.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildDiscoveryCategoryStore from "../../../global_discovery_servers/GuildDiscoveryCategoryStore.tsx";

require = fn;
function WordTopic(categoryid) {
  categoryid = categoryid.categoryid;
  ({ selected, handlePress: importDefault } = categoryid);
  if (GuildPrimaryCategory.GAMING === categoryid) {
    let tmp2 = closure_1_10(GameControllerIcon.GameControllerIcon, {
      size: "md",
      color: "redesign-button-tertiary-text",
    });
  } else if (GuildPrimaryCategory.ENTERTAINMENT === categoryid) {
    tmp2 = closure_1_10(TvIcon.TvIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.GENERAL_CHATTING === categoryid) {
    tmp2 = closure_1_10(ForumIcon.ForumIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.SCIENCE_AND_TECH === categoryid) {
    tmp2 = closure_1_10(ScienceIcon.ScienceIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.MUSIC === categoryid) {
    tmp2 = closure_1_10(MusicIcon.MusicIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.EDUCATION === categoryid) {
    tmp2 = closure_1_10(BookCheckIcon.BookCheckIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.CREATIVE_ARTS === categoryid) {
    tmp2 = closure_1_10(PaintPaletteIcon.PaintPaletteIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.FINANCE === categoryid) {
    tmp2 = closure_1_10(PiggyBankIcon.PiggyBankIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.BOTS === categoryid) {
    tmp2 = closure_1_10(RobotIcon.RobotIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.SPORTS === categoryid) {
    tmp2 = closure_1_10(MedalIcon.MedalIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.TRAVEL_AND_FOOD === categoryid) {
    tmp2 = closure_1_10(FoodIcon.FoodIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.FASHION_AND_BEAUTY === categoryid) {
    tmp2 = closure_1_10(PaintbrushThinIcon.PaintbrushThinIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.FITNESS_AND_HEALTH === categoryid) {
    tmp2 = closure_1_10(BicycleIcon.BicycleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (16 === categoryid) {
    tmp2 = closure_1_10(PencilSparkleIcon.PencilSparkleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  }
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked: selected });
  let tmp48Result = null;
  if (null != tmp2) {
    const obj2 = {
      accessibilityRole: tmp45,
      accessibilityState: tmp46,
      variant: null,
      text: null,
      onPress: null,
      icon: null,
    };
    let str = "tertiary";
    if (selected) {
      str = "primary";
    }
    obj2.variant = str;
    obj2.text = categoryid.topic;
    obj2.onPress = function onPress() {
      return importDefault(categoryid);
    };
    obj2.icon = tmp2;
    tmp48Result = closure_1_10(components_Button_Button.Button, obj2);
  }
  return tmp48Result;
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7, StyleSheet } = get_ActivityIndicator);
const GuildPrimaryCategory = fn(16574).GuildPrimaryCategory;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 },
  footer: null,
  title: null,
  subtitle: null,
  separator: null,
  topicsContainer: null,
  scrollContentContainer: null,
};
const rect = {
  position: "absolute",
  bottom: 0,
  left: nativeDefault.space.PX_24,
  right: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_8,
};
obj2.footer = rect;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj2.title = {
  marginTop: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_8,
  marginHorizontal: nativeDefault.space.PX_24,
};
let obj4 = {
  marginTop: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_8,
  marginHorizontal: nativeDefault.space.PX_24,
};
obj2.subtitle = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
let size = { height: StyleSheet.hairlineWidth, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.separator = size;
let obj5 = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
obj2.topicsContainer = {
  flex: 1,
  marginHorizontal: nativeDefault.space.PX_16,
  flexWrap: "wrap",
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
};
let obj6 = {
  flex: 1,
  marginHorizontal: nativeDefault.space.PX_16,
  flexWrap: "wrap",
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
};
obj2.scrollContentContainer = { paddingTop: nativeDefault.space.PX_24 };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMITopicsScreen.tsx");

export default function ICYMITopicsScreen() {
  const tmp = closure_13();
  const bottom = useSafeAreaInsetsDefault().bottom;
  [first, importDefault] = noop.useState(new Set());
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp6[1];
  const set = new Set();
  const navigation = first(1483).useNavigation();
  const items = [navigation, first];
  const callback = noop.useCallback(
    navigation(function* () {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp4;
              closure_0 = tmp4;
              v2(true);
              v2 = 1;
              c3 = 1;
              const obj5 = { value: closure_0(v2[28])(v2[27], v2.paths), done: false };
              return obj5;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const _Array = Array;
              v2 = 2;
              c3 = 1;
              const obj7 = {
                value: closure_1(v2[29]).fetchPopularGuildsFromCategories(Array.from(closure_129_0), 0),
                done: false,
              };
              return obj7;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            if (value) {
              closure_129_3.push("join_guilds");
            } else {
              const obj9 = { key: "ICYMIInfoModal", content: null };
              const intl = closure_0(v2[31]).intl;
              obj9.content = intl.string(closure_0(v2[31]).t.CG4Hks);
              closure_1(v2[30]).open(obj9);
              const obj = closure_1(v2[30]);
            }
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => v2(false), 500);
            c3 = 3;
          }
        } catch (tmp28) {
          c3 = tmp;
          throw tmp28;
        }
      }
    }),
    items,
  );
  let obj = first(1483);
  const items1 = [GuildDiscoveryCategoryStore];
  const stateFromStoresArray = first(504).useStateFromStoresArray(items1, () => allCategories.getAllCategories());
  const items2 = [first];
  _slicedToArray = noop.useCallback((categoryId) => {
    closure_0 = categoryId;
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const result = ICYMIAnalytics.trackFeedOnboardingCategoryToggled({ categoryId, toggled: !first.has(categoryId) });
    if (first.has(categoryId)) {
      closure_1((items) => {
        items.delete(closure_0);
        return new Set(items);
      });
    } else {
      closure_1((add) => {
        add.add(closure_0);
        return new Set(add);
      });
    }
    const obj = { categoryId, toggled: !first.has(categoryId) };
  }, items2);
  let obj3 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  let intl = first(1114).intl;
  obj3.children = intl.string(first(1114).t.Y5d99L);
  const children = [closure_10(first(4632).Text, obj3), , , ,];
  const obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: null };
  const intl2 = first(1114).intl;
  obj4.children = intl2.string(first(1114).t.MGZsfv);
  children[1] = closure_10(first(4632).Text, obj4);
  children[2] = closure_10(closure_6, { style: tmp.separator });
  let obj6 = {
    showsVerticalScrollIndicator: false,
    style: tmp.container,
    contentContainerStyle: tmp.scrollContentContainer,
    contentInset: { bottom: 72 + bottom },
    children: null,
  };
  let obj2 = first(504);
  let obj5 = { style: tmp.separator };
  let obj7 = { bottom: 72 + bottom };
  obj6.children = closure_10(closure_6, {
    style: tmp.topicsContainer,
    children: stateFromStoresArray.map((categoryId) =>
      closure_2_10(
        WordTopic,
        {
          selected: first.has(categoryId.categoryId),
          topic: categoryId.name,
          categoryid: categoryId.categoryId,
          handlePress,
        },
        categoryId.categoryId,
      ),
    ),
  });
  children[3] = closure_10(closure_7, obj6);
  let tmp12Result = first.size > 0;
  if (tmp12Result) {
    let obj9 = { style: null, children: null };
    const obj10 = { marginBottom: bottom };
    const items4 = [obj10, tmp.footer];
    obj9.style = items4;
    const obj11 = { loading: tmp6[0], size: "lg", text: null, onPress: null };
    const intl3 = tmp7(1114).intl;
    obj11.text = intl3.string(tmp7(1114).t.PDTjLN);
    obj11.onPress = callback;
    obj9.children = closure_10(tmp7(5056).Button, obj11);
    tmp12Result = closure_10(closure_6, obj9);
  }
  children[4] = tmp12Result;
  return closure_12(closure_11, { children });
}
