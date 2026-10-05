// === Module 16420: ICYMITopicsScreen ===

// Module 16420 (ICYMITopicsScreen)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import react_native from "react-native" /* 4594 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import BookCheckIcon from "BookCheckIcon" /* 5859 */;
import ForumIcon from "ForumIcon" /* 5872 */;
import GameControllerIcon from "GameControllerIcon" /* 8739 */;
import RobotIcon from "RobotIcon" /* 8958 */;
import MusicIcon from "MusicIcon" /* 9571 */;
import FoodIcon from "FoodIcon" /* 9961 */;
import BicycleIcon from "BicycleIcon" /* 9963 */;
import TvIcon from "TvIcon" /* 10616 */;
import PencilSparkleIcon from "PencilSparkleIcon" /* 11040 */;
import PiggyBankIcon from "PiggyBankIcon" /* 11534 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 14165 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15080 */;
import GuildSettingsDiscoveryConstants from "GuildSettingsDiscoveryConstants" /* 16421 */;
import ScienceIcon from "ScienceIcon" /* 16422 */;
import MedalIcon from "MedalIcon" /* 16423 */;
import PaintbrushThinIcon from "PaintbrushThinIcon" /* 16425 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import GuildDiscoveryCategoryStore from "GuildDiscoveryCategoryStore" /* 16414 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3, closure_1, navigation, set;

let StyleSheet;
let c10;
let closure_12;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let size;
let unpackModuleId;
function primaryCategoryToEmojiIcon(categoryid) {
  if (GuildPrimaryCategory.GAMING === categoryid) {
    return authStore(GameControllerIcon.GameControllerIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.ENTERTAINMENT === categoryid) {
    return authStore(TvIcon.TvIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.GENERAL_CHATTING === categoryid) {
    return authStore(ForumIcon.ForumIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.SCIENCE_AND_TECH === categoryid) {
    return authStore(ScienceIcon.ScienceIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.MUSIC === categoryid) {
    return authStore(MusicIcon.MusicIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.EDUCATION === categoryid) {
    return authStore(BookCheckIcon.BookCheckIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.CREATIVE_ARTS === categoryid) {
    return authStore(PaintPaletteIcon.PaintPaletteIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.FINANCE === categoryid) {
    return authStore(PiggyBankIcon.PiggyBankIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.BOTS === categoryid) {
    return authStore(RobotIcon.RobotIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.SPORTS === categoryid) {
    return authStore(MedalIcon.MedalIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.TRAVEL_AND_FOOD === categoryid) {
    return authStore(FoodIcon.FoodIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.FASHION_AND_BEAUTY === categoryid) {
    return authStore(PaintbrushThinIcon.PaintbrushThinIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.FITNESS_AND_HEALTH === categoryid) {
    return authStore(BicycleIcon.BicycleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (16 === categoryid) {
    return authStore(PencilSparkleIcon.PencilSparkleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  }
}
let _slicedToArray = _slicedToArray_mod;
({ View: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native2);
const GuildPrimaryCategory = GuildSettingsDiscoveryConstants.GuildPrimaryCategory;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, footer: rect, title: obj3, subtitle: obj4, separator: size, topicsContainer: obj5, scrollContentContainer: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8 };
obj3 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
obj4 = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
size = { height: StyleSheet.hairlineWidth, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { flex: 1, marginHorizontal: nativeDefault.space.PX_16, flexWrap: "wrap", flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj6 = { paddingTop: nativeDefault.space.PX_24 };
let closure_14 = createStyles(obj);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let categoryid;
  let handlePress;
  let selected;
  let tmp4;
  let tmp7;
  let topic;
  const obj = react2;
  const cResult = obj.c(14);
  ({ topic, categoryid } = arg0);
  ({ selected, handlePress } = arg0);
  if (cResult[0] !== categoryid) {
    const tmp6 = primaryCategoryToEmojiIcon(categoryid);
    cResult[0] = categoryid;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== selected) {
    const obj2 = { checked: selected };
    cResult[2] = selected;
    cResult[3] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[3];
  }
  const tmpResult = react_native;
  const checkboxA11yNative = tmpResult.useCheckboxA11yNative(tmp7);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (null == tmp4) {
    return null;
  } else {
    let str = "tertiary";
    if (selected) {
      str = "primary";
    }
    if (cResult[4] === categoryid) {
      let tmp9;
      if (cResult[5] === handlePress) {
        tmp9 = cResult[6];
      }
      if (cResult[7] === accessibilityRole) {
        if (cResult[8] === accessibilityState) {
          if (cResult[9] === tmp4) {
            if (cResult[10] === str) {
              if (cResult[11] === tmp9) {
                let tmp10;
                if (cResult[12] === topic) {
                  tmp10 = cResult[13];
                }
                return tmp10;
              }
            }
          }
        }
      }
      const obj3 = { accessibilityRole, accessibilityState, variant: str, text: topic, onPress: tmp9, icon: tmp4 };
      const tmp12 = authStore(components_Button_Button.Button, obj3);
      cResult[7] = accessibilityRole;
      cResult[8] = accessibilityState;
      cResult[9] = tmp4;
      cResult[10] = str;
      cResult[11] = tmp9;
      cResult[12] = topic;
      cResult[13] = tmp12;
      tmp10 = tmp12;
    }
    const fn = function x() {
      return handlePress(categoryid);
    };
    cResult[4] = categoryid;
    cResult[5] = handlePress;
    cResult[6] = fn;
    tmp9 = fn;
  }
}) : ((categoryid) => {
  let closure_129_1;
  let selected;
  let str;
  categoryid = categoryid.categoryid;
  ({ selected, handlePress: closure_129_1 } = categoryid);
  const topic = categoryid.topic;
  const tmp = primaryCategoryToEmojiIcon(categoryid);
  const obj = react_native;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  let tmp8Result = null;
  if (null != tmp) {
    const obj2 = {
      accessibilityRole: tmp5,
      accessibilityState: tmp6,
      variant: str,
      text: topic,
      onPress() {
          return closure_1_1(categoryid);
        },
      icon: tmp
    };
    str = "tertiary";
    const Button = components_Button_Button.Button;
    if (selected) {
      str = "primary";
    }
    tmp8Result = authStore(Button, obj2);
  }
  return tmp8Result;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMITopicsScreen.tsx");

export default function ICYMITopicsScreen() {
  let Button;
  let allCategories;
  let closure_2;
  let first;
  let first1;
  let handlePress;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let obj11;
  let obj7;
  let obj8;
  const tmp = closure_14();
  const tmp2 = dependencyMap;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const useState = react.useState;
  set = new Set();
  [first, importDefault] = useState(set);
  [first1, dependencyMap] = react.useState(false);
  let obj = first(1490);
  navigation = obj.useNavigation();
  const items = [navigation, first];
  const callback = react.useCallback(navigation(function*() {
    let closure_0;
    let intl;
    let v2;
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp3;
            first = tmp3;
            v2(true);
            v2 = 1;
            c3 = 1;
            const obj5 = { value: first(v2[30])(v2[29], v2.paths), done: false };
            return obj5;
          }
        } else if (1 === v2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const _Array = Array;
            const obj3 = closure_1(v2[31]);
            v2 = 2;
            c3 = 1;
            const obj7 = { value: obj3.fetchPopularGuildsFromCategories(Array.from(closure_129_0), 0), done: false };
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
            const obj = { key: "ICYMIInfoModal", content: intl.string(first(v2[33]).t.CG4Hks) };
            const open = closure_1(v2[32]).open;
            const tmp6 = closure_1(v2[32]);
            intl = first(v2[33]).intl;
            open(obj);
          }
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => v2(false), 500);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp28) {
        c3 = 3;
        throw tmp28;
      }
    }
  }), items);
  let obj2 = first(504);
  const items1 = [GuildDiscoveryCategoryStore];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => allCategories.getAllCategories());
  const items2 = [first];
  _slicedToArray = react.useCallback((categoryId) => {
    let closure_0 = categoryId;
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const obj = { categoryId, toggled: !first.has(categoryId) };
    const result = ICYMIAnalytics.trackFeedOnboardingCategoryToggled(obj);
    if (first.has(categoryId)) {
      closure_1((items) => {
        items.delete(closure_0);
        set = new Set(items);
        return set;
      });
    } else {
      closure_1((add) => {
        add.add(closure_0);
        set = new Set(add);
        return set;
      });
    }
  }, items2);
  let obj3 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: intl.string(first(1126).t.Y5d99L) };
  const Text = first(4886).Text;
  intl = first(1126).intl;
  const children = [closure_10(Text, obj3), , , , ];
  let obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: intl2.string(first(1126).t.MGZsfv) };
  const Text2 = first(4886).Text;
  intl2 = first(1126).intl;
  children[1] = closure_10(Text2, obj4);
  let obj5 = { style: tmp.separator };
  children[2] = closure_10(closure_6, obj5);
  let obj6 = { showsVerticalScrollIndicator: false, style: tmp.container, contentContainerStyle: tmp.scrollContentContainer, contentInset: obj7, children: closure_10(closure_6, obj8) };
  obj7 = { bottom: 72 + bottom };
  obj8 = {
    style: tmp.topicsContainer,
    children: stateFromStoresArray.map((categoryId) => {
      const obj = { selected: first.has(categoryId.categoryId), topic: categoryId.name, categoryid: categoryId.categoryId, handlePress };
      return authStore(closure_15, obj, categoryId.categoryId);
    })
  };
  children[3] = closure_10(closure_7, obj6);
  let tmp13Result = first.size > 0;
  if (tmp13Result) {
    const obj9 = { style: items4, children: closure_10(Button, obj11) };
    items4 = [{ marginBottom: bottom }, tmp.footer];
    const obj10 = { marginBottom: bottom };
    obj11 = { loading: first1, size: "lg", text: intl3.string(first(1126).t.PDTjLN), onPress: callback };
    Button = tmp8(5594).Button;
    intl3 = tmp8(1126).intl;
    tmp13Result = closure_10(closure_6, obj9);
  }
  children[4] = tmp13Result;
  return closure_12(closure_11, { children });
};