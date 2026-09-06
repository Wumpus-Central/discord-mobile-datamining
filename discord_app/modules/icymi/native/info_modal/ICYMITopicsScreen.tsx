// === Module 16476: ICYMITopicsScreen ===

// Module 16476 (ICYMITopicsScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import BookCheckIcon from "BookCheckIcon" /* 5075 */;
import ForumIcon from "ForumIcon" /* 5088 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 8359 */;
import GameControllerIcon from "GameControllerIcon" /* 9223 */;
import RobotIcon from "RobotIcon" /* 9435 */;
import MusicIcon from "MusicIcon" /* 9911 */;
import FoodIcon from "FoodIcon" /* 10352 */;
import BicycleIcon from "BicycleIcon" /* 10354 */;
import TvIcon from "TvIcon" /* 10883 */;
import PencilSparkleIcon from "PencilSparkleIcon" /* 11243 */;
import PiggyBankIcon from "PiggyBankIcon" /* 11924 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 13378 */;
import ScienceIcon from "ScienceIcon" /* 16478 */;
import MedalIcon from "MedalIcon" /* 16479 */;
import PaintbrushThinIcon from "PaintbrushThinIcon" /* 16481 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildDiscoveryCategoryStore from "GuildDiscoveryCategoryStore" /* 16470 */;

require = fn;
function WordTopic(categoryid) {
  categoryid = categoryid.categoryid;
  ({ selected, handlePress: importDefault } = categoryid);
  if (GuildPrimaryCategory.GAMING === categoryid) {
    let tmp2 = closure_1_10(GameControllerIcon.GameControllerIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.ENTERTAINMENT === categoryid) {
    tmp2 = closure_1_10(TvIcon.TvIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.GENERAL_CHATTING === categoryid) {
    tmp2 = closure_1_10(ForumIcon.ForumIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.SCIENCE_AND_TECH === categoryid) {
    tmp2 = closure_1_10(ScienceIcon.ScienceIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.MUSIC === categoryid) {
    tmp2 = closure_1_10(MusicIcon.MusicIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.EDUCATION === categoryid) {
    tmp2 = closure_1_10(BookCheckIcon.BookCheckIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.CREATIVE_ARTS === categoryid) {
    tmp2 = closure_1_10(PaintPaletteIcon.PaintPaletteIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.FINANCE === categoryid) {
    tmp2 = closure_1_10(PiggyBankIcon.PiggyBankIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.BOTS === categoryid) {
    tmp2 = closure_1_10(RobotIcon.RobotIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.SPORTS === categoryid) {
    tmp2 = closure_1_10(MedalIcon.MedalIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.TRAVEL_AND_FOOD === categoryid) {
    tmp2 = closure_1_10(FoodIcon.FoodIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.FASHION_AND_BEAUTY === categoryid) {
    tmp2 = closure_1_10(PaintbrushThinIcon.PaintbrushThinIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.FITNESS_AND_HEALTH === categoryid) {
    tmp2 = closure_1_10(BicycleIcon.BicycleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (16 === categoryid) {
    tmp2 = closure_1_10(PencilSparkleIcon.PencilSparkleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  }
  let obj = useA11yRolesNative;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  let tmp48Result = null;
  if (null != tmp2) {
    obj = { accessibilityRole: tmp45, accessibilityState: tmp46, variant: null, text: null, onPress: null, icon: null };
    let str = "tertiary";
    if (selected) {
      str = "primary";
    }
    obj.variant = str;
    obj.text = categoryid.topic;
    obj.onPress = function onPress() {
      return importDefault(categoryid);
    };
    obj.icon = tmp2;
    tmp48Result = closure_1_10(components_Button_Button.Button, obj);
  }
  return tmp48Result;
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7, StyleSheet } = get_ActivityIndicator);
const GuildPrimaryCategory = fn(16477).GuildPrimaryCategory;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: null, footer: null, title: null, subtitle: null, separator: null, topicsContainer: null, scrollContentContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles.container = createStyles;
const rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8 };
createStyles.footer = rect;
createStyles.title = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
let obj1 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
createStyles.subtitle = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
let size = { height: StyleSheet.hairlineWidth, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.separator = size;
let obj2 = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
createStyles.topicsContainer = { flex: 1, marginHorizontal: nativeDefault.space.PX_16, flexWrap: "wrap", flexDirection: "row", gap: nativeDefault.space.PX_12 };
let obj3 = { flex: 1, marginHorizontal: nativeDefault.space.PX_16, flexWrap: "wrap", flexDirection: "row", gap: nativeDefault.space.PX_12 };
createStyles.scrollContentContainer = { paddingTop: nativeDefault.space.PX_24 };
let closure_13 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMITopicsScreen.tsx");

export default function ICYMITopicsScreen() {
  const tmp = closure_13();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp4 = _slicedToArray(noop.useState(new Set()), 2);
  const first = tmp4[0];
  importDefault = tmp4[1];
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp6[1];
  let obj = first(1483);
  const navigation = obj.useNavigation();
  const items = [navigation, first];
  const callback = noop.useCallback(navigation(function*(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp4;
            closure_0 = tmp4;
            v2(true);
            v2 = 1;
            c3 = 1;
            const obj1 = { value: closure_0(v2[28])(v2[27], v2.paths), done: false };
            return obj1;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            let obj3 = closure_1(v2[29]);
            const _Array = Array;
            v2 = 2;
            c3 = 1;
            obj3 = { value: null, done: false };
            obj3.value = obj3.fetchPopularGuildsFromCategories(Array.from(closure_129_0), 0);
            return obj3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          if (value) {
            closure_129_3.push("join_guilds");
          } else {
            obj = closure_1(v2[30]);
            const obj5 = { key: "ICYMIInfoModal", content: null };
            const intl = closure_0(v2[31]).intl;
            obj5.content = intl.string(closure_0(v2[31]).t.CG4Hks);
            obj.open(obj5);
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
  }), items);
  let obj1 = first(504);
  const items1 = [GuildDiscoveryCategoryStore];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items1, () => allCategories.getAllCategories());
  const items2 = [first];
  _slicedToArray = noop.useCallback((categoryId) => {
    closure_0 = categoryId;
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const result = ICYMIAnalytics.trackFeedOnboardingCategoryToggled({ categoryId, toggled: !first.has(categoryId) });
    if (first.has(categoryId)) {
      tmp2((items) => {
        items.delete(closure_0);
        return new Set(items);
      });
    } else {
      tmp2((add) => {
        add.add(closure_0);
        return new Set(add);
      });
    }
  }, items2);
  obj = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  let intl = first(1114).intl;
  obj.children = intl.string(first(1114).t.Y5d99L);
  const children = [closure_10(first(4556).Text, obj), , , , ];
  obj = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: null };
  const intl2 = first(1114).intl;
  obj.children = intl2.string(first(1114).t.MGZsfv);
  children[1] = closure_10(first(4556).Text, obj);
  obj1 = { style: tmp.separator };
  children[2] = closure_10(closure_6, obj1);
  let obj2 = { showsVerticalScrollIndicator: false, style: tmp.container, contentContainerStyle: tmp.scrollContentContainer, contentInset: { bottom: 72 + bottom }, children: null };
  let obj3 = { bottom: 72 + bottom };
  const set = new Set();
  const tmp10 = closure_12;
  const tmp11 = closure_11;
  const tmp13 = closure_6;
  obj2.children = closure_10(closure_6, { style: tmp.topicsContainer, children: stateFromStoresArray.map((categoryId) => closure_2_10(WordTopic, { selected: first.has(categoryId.categoryId), topic: categoryId.name, categoryid: categoryId.categoryId, handlePress }, categoryId.categoryId)) });
  children[3] = closure_10(closure_7, obj2);
  let tmp12Result = first.size > 0;
  if (tmp12Result) {
    let obj5 = { style: null, children: null };
    const obj6 = { marginBottom: bottom };
    const items4 = [obj6, tmp.footer];
    obj5.style = items4;
    const obj7 = { loading: tmp6[0], size: "lg", text: null, onPress: null };
    const intl3 = tmp7(1114).intl;
    obj7.text = intl3.string(tmp7(1114).t.PDTjLN);
    obj7.onPress = callback;
    obj5.children = tmp12(tmp7(4975).Button, obj7);
    tmp12Result = tmp12(tmp13, obj5);
  }
  children[4] = tmp12Result;
  return tmp10(tmp11, { children });
};