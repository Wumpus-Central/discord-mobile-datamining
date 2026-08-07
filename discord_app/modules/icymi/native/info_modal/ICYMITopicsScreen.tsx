// discord_app/modules/icymi/native/info_modal/ICYMITopicsScreen.tsx
import GuildPrimaryCategory from "GuildPrimaryCategory";
import initialize from "initialize";
import BicycleIcon from "BicycleIcon";
import get_ActivityIndicator from "FoodIcon";
import getPrimaryCategories from "getPrimaryCategories";
import { GuildPrimaryCategory } from "GuildPrimaryCategory";
import jsxProd from "createCacheKey";
import createCacheKey from "createCacheKey";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";

let StyleSheet;
let c10;
let closure_12;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function WordTopic(categoryid) {
  let importDefault;
  let selected;
  categoryid = categoryid.categoryid;
  ({ selected, handlePress: importDefault } = categoryid);
  if (GuildPrimaryCategory.GAMING === categoryid) {
    let tmp2 = callback2(categoryid(8702).GameControllerIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.ENTERTAINMENT === categoryid) {
    tmp2 = callback2(categoryid(9579).TvIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.GENERAL_CHATTING === categoryid) {
    tmp2 = callback2(categoryid(4814).ForumIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.SCIENCE_AND_TECH === categoryid) {
    tmp2 = callback2(categoryid(15510).ScienceIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.MUSIC === categoryid) {
    tmp2 = callback2(categoryid(9584).MusicIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.EDUCATION === categoryid) {
    tmp2 = callback2(categoryid(4802).BookCheckIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.CREATIVE_ARTS === categoryid) {
    tmp2 = callback2(categoryid(7661).PaintPaletteIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.FINANCE === categoryid) {
    tmp2 = callback2(categoryid(11265).PiggyBankIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.BOTS === categoryid) {
    tmp2 = callback2(categoryid(10475).RobotIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.SPORTS === categoryid) {
    tmp2 = callback2(categoryid(15511).MedalIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.TRAVEL_AND_FOOD === categoryid) {
    tmp2 = callback2(categoryid(8700).FoodIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.FASHION_AND_BEAUTY === categoryid) {
    tmp2 = callback2(categoryid(15513).PaintbrushThinIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.FITNESS_AND_HEALTH === categoryid) {
    tmp2 = callback2(categoryid(8703).BicycleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (16 === categoryid) {
    tmp2 = callback2(categoryid(10118).PencilSparkleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  }
  let obj = categoryid(4019);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  let tmp48Result = null;
  if (null != tmp2) {
    obj = { accessibilityRole: null, accessibilityState: null, variant: null, text: null, onPress: null, icon: null };
    obj[0] = tmp45;
    obj[1] = tmp46;
    let str = "tertiary";
    if (selected) {
      str = "primary";
    }
    obj[2] = str;
    obj[3] = categoryid.topic;
    obj[4] = function onPress() {
      return callback(categoryid);
    };
    obj[5] = tmp2;
    tmp48Result = callback2(categoryid(4712).Button, obj);
    const tmp48 = callback2;
  }
  return tmp48Result;
}
({ View: closure_6, ScrollView: error, StyleSheet } = get_ActivityIndicator);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: null, footer: null, title: null, subtitle: null, separator: null, topicsContainer: null, scrollContentContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", bottom: 0, left: require("Themes").space.PX_24, right: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_8 };
let obj1 = { position: "absolute", bottom: 0, left: require("Themes").space.PX_24, right: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_8 };
createCacheKey[2] = { marginTop: require("Themes").space.PX_24, marginBottom: require("Themes").space.PX_8, marginHorizontal: require("Themes").space.PX_24 };
let obj2 = { marginTop: require("Themes").space.PX_24, marginBottom: require("Themes").space.PX_8, marginHorizontal: require("Themes").space.PX_24 };
createCacheKey[3] = { marginBottom: require("Themes").space.PX_24, marginHorizontal: require("Themes").space.PX_24 };
let obj3 = { marginBottom: require("Themes").space.PX_24, marginHorizontal: require("Themes").space.PX_24 };
createCacheKey[4] = { height: StyleSheet.hairlineWidth, width: "100%", backgroundColor: require("Themes").colors.BORDER_SUBTLE };
let obj4 = { height: StyleSheet.hairlineWidth, width: "100%", backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[5] = { flex: 1, marginHorizontal: require("Themes").space.PX_16, flexWrap: "wrap", flexDirection: "row", gap: require("Themes").space.PX_12 };
let obj5 = { flex: 1, marginHorizontal: require("Themes").space.PX_16, flexWrap: "wrap", flexDirection: "row", gap: require("Themes").space.PX_12 };
createCacheKey[6] = { paddingTop: require("Themes").space.PX_24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj6 = { paddingTop: require("Themes").space.PX_24 };
let result = require("noop").fileFinishedImporting("modules/icymi/native/info_modal/ICYMITopicsScreen.tsx");

export default function ICYMITopicsScreen() {
  const tmp = createCacheKey();
  const bottom = useSafeAreaInsets().bottom;
  const tmp4 = callback(React.useState(new Set()), 2);
  const first = tmp4[0];
  importDefault = tmp4[1];
  const tmp6 = callback(React.useState(false), 2);
  const dependencyMap = tmp6[1];
  let obj = first(1480);
  const navigation = obj.useNavigation();
  const items = [navigation, first];
  callback = React.useCallback(navigation(function*() {
    if (arr === 2) {
      arr = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        arr = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            arr = 3;
            throw arg1;
          } else if (arg0 === 2) {
            arr = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp4;
            let closure_0 = tmp4;
            v0(true);
            v0 = 1;
            arr = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0(v0[28])(v0[27], v0.paths);
            return obj1;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            arr = 3;
            throw arg1;
          } else if (arg0 === 2) {
            arr = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            let obj3 = outer1_1(v0[29]);
            const _Array = Array;
            v0 = 2;
            arr = 1;
            obj3 = { value: null, done: false };
            obj3[0] = obj3.fetchPopularGuildsFromCategories(Array.from(closure_0), 0);
            return obj3;
          }
        } else if (arg0 === 1) {
          arr = 3;
          throw arg1;
        } else if (arg0 === 2) {
          arr = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          if (arg1) {
            arr = arr.push("join_guilds");
          } else {
            obj = outer1_1(v0[30]);
            const obj5 = { key: "ICYMIInfoModal", content: null };
            const intl = outer1_0(v0[31]).intl;
            obj5[1] = intl.string(outer1_0(v0[31]).t.CG4Hks);
            obj.open(obj5);
          }
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => v2(false), 500);
          arr = 3;
        }
      } catch (tmp28) {
        arr = tmp;
        throw tmp28;
      }
    }
  }), items);
  let obj1 = first(589);
  const items1 = [getPrimaryCategories];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items1, () => allCategories.getAllCategories());
  const items2 = [first];
  callback = React.useCallback((categoryId) => {
    const ICYMIAnalytics = first(table[33]).ICYMIAnalytics;
    const result = ICYMIAnalytics.trackFeedOnboardingCategoryToggled({ categoryId, toggled: !categoryId.has(categoryId) });
    if (categoryId.has(categoryId)) {
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
  let intl = first(1236).intl;
  obj[3] = intl.string(first(1236).t.Y5d99L);
  const children = [callback2(first(4298).Text, obj), , , , ];
  obj = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: null };
  const intl2 = first(1236).intl;
  obj[3] = intl2.string(first(1236).t.MGZsfv);
  children[1] = callback2(first(4298).Text, obj);
  obj1 = { style: tmp.separator };
  children[2] = callback2(closure_6, obj1);
  let obj2 = { showsVerticalScrollIndicator: false, style: tmp.container, contentContainerStyle: tmp.scrollContentContainer, contentInset: obj3, children: null };
  obj3 = { bottom: 72 + bottom };
  const set = new Set();
  const tmp10 = closure_12;
  const tmp11 = closure_11;
  const tmp13 = closure_6;
  obj2[4] = callback2(closure_6, { style: tmp.topicsContainer, children: stateFromStoresArray.map((categoryId) => outer1_10(outer1_14, { selected: first.has(categoryId.categoryId), topic: categoryId.name, categoryid: categoryId.categoryId, handlePress: initialize }, categoryId.categoryId)) });
  children[3] = callback2(closure_7, obj2);
  let tmp12Result = first.size > 0;
  if (tmp12Result) {
    let obj5 = { style: null, children: null };
    const obj6 = { marginBottom: null };
    obj6[0] = bottom;
    const items4 = [obj6, tmp.footer];
    obj5[0] = items4;
    const obj7 = { loading: null, size: "lg", text: null, onPress: null };
    obj7[0] = tmp6[0];
    const intl3 = tmp7(1236).intl;
    obj7[2] = intl3.string(tmp7(1236).t.PDTjLN);
    obj7[3] = callback;
    obj5[1] = tmp12(tmp7(4712).Button, obj7);
    tmp12Result = tmp12(tmp13, obj5);
  }
  children[4] = tmp12Result;
  return tmp10(tmp11, { children });
};