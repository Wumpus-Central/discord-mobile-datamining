import _slicedToArray from "_slicedToArray";
import Button from "Button";
import get_ActivityIndicator from "Button";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import title from "title";
import ME from "ME";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let Dimensions;
let c10;
let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
({ View: c5, Dimensions, AccessibilityInfo: closure_6, ScrollView: error } = get_ActivityIndicator);
({ PermissionTemplateTypes: c10, PermissionTemplates: unpackModuleId, DEFAULT_TEMPLATE_TYPE: closure_12 } = title);
({ AnalyticEvents: map1, GuildFeatures: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let width = Dimensions.get("window").width;
let closure_18 = width - 300;
createCacheKey = { container: null, carousel: null, cardWrapper: null, card: null, templateTitle: null, templateSubtitle: null, templateContentWrapper: null, templateContent: null, templateContentText: null, templateButton: null, sliderContainer: null, slider: null, sliderLabels: null, sliderLabel: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { paddingHorizontal: 10, flex: 1 };
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.sm, borderStyle: "solid", borderWidth: 1, flex: 1, flexDirection: "column", marginVertical: 16, padding: 16, paddingTop: 20 };
createCacheKey[4] = { alignItems: "center", textAlign: "center", paddingBottom: 16 };
createCacheKey[5] = { paddingBottom: 16 };
createCacheKey[6] = { flex: 1, justifyContent: "flex-start" };
createCacheKey[7] = { alignItems: "center", flexDirection: "row", paddingBottom: 8 };
createCacheKey[8] = { flex: 1, marginLeft: 12 };
createCacheKey[9] = { justifyContent: "flex-end", flexGrow: 0, paddingTop: 16 };
createCacheKey[10] = { alignItems: "center" };
createCacheKey[11] = { marginTop: 8, width: 300, maxWidth: "72%" };
createCacheKey[12] = { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 16, textAlign: "center", width: 380, maxWidth: "85%" };
createCacheKey[13] = { marginHorizontal: 0, width: "25%", textAlign: "center", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.sm, borderStyle: "solid", borderWidth: 1, flex: 1, flexDirection: "column", marginVertical: 16, padding: 16, paddingTop: 20 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx");

export default function GuildSettingsRoleTemplate(arg0) {
  let c10;
  let dependencyMap;
  let importDefault;
  let require;
  let tmp10;
  ({ onSelect: require, location: importDefault, guildId: dependencyMap } = arg0);
  let callback;
  let ref;
  let first;
  let closure_6;
  let first1;
  let maybeApplyNoTextColorForLightCustomTheme;
  let createGuildRecordFromRust;
  let constants;
  const tmp = createCacheKey();
  callback = tmp;
  ref = ref.useRef(null);
  const tmp4 = callback(ref.useState(closure_12), 2);
  first = tmp4[0];
  closure_6 = tmp4[1];
  const tmp6 = callback(ref.useState(width), 2);
  first1 = tmp6[0];
  maybeApplyNoTextColorForLightCustomTheme = tmp6[1];
  const tmp8 = callback(ref.useState(closure_18), 2);
  createGuildRecordFromRust = tmp8[1];
  const tmp2 = importDefault(7562)();
  [tmp10, c10] = callback(ref.useState(false), 2);
  const effect = ref.useEffect(() => {
    const result = screenReaderEnabled.isScreenReaderEnabled();
    result.then((arg0) => {
      callback(arg0);
    });
  }, []);
  const values = Object.values(closure_11);
  let obj = {
    style: tmp.container,
    onLayout(nativeEvent) {
      const width = nativeEvent.nativeEvent.layout.width;
      if (width !== first1) {
        lib(width);
        callback(width - 300);
      }
    },
    children: null
  };
  obj = { style: tmp.sliderContainer, children: null };
  obj = { accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: callback2(importDefault(7799), obj1) };
  let items = [callback2(first, obj), ];
  obj1 = {
    maximumValue: values.length - 1,
    minimumTrackTintColor: values[first].color,
    minimumValue: constants.COSMETIC,
    onSlidingComplete: function updateLevel(arg0) {
      const rounded = Math.round(arg0);
      screenReaderEnabled(rounded);
      if (tmp4) {
        const current = tmp3.current;
        current.snapToItem(rounded, !lib.useReducedMotion);
      }
    },
    style: tmp.slider,
    thumbTintColor: values[first].color,
    value: first,
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no"
  };
  const tmp12 = callback3;
  const tmp13 = first;
  const tmp14 = callback2;
  const tmp9 = callback(ref.useState(false), 2);
  items[1] = callback2(first, {
    style: tmp.sliderLabels,
    children: values.map((title) => {
      title = title.title;
      let closure_0 = arg1;
      let obj = { style: _undefined.sliderLabel, children: null };
      obj = {
        accessibilityRole: "button",
        accessibilityState: obj,
        onPress() {
          const rounded = Math.round(closure_0);
          outer1_6(rounded);
          if (tmp4) {
            const current = tmp3.current;
            current.snapToItem(rounded, !outer1_8.useReducedMotion);
          }
        },
        children: null
      };
      obj = { selected: first === arg1 };
      const obj1 = { variant: "text-sm/medium", children: null };
      obj1[1] = title();
      obj[3] = outer1_15(outer1_0(outer1_2[15]).Text, obj1);
      obj[1] = outer1_15(outer1_0(outer1_2[14]).PressableOpacity, obj);
      return outer1_15(first, obj, title());
    })
  });
  obj[1] = items;
  let items1 = [callback3(first, obj), ];
  let obj3 = { data: values, firstItem: 0, inactiveSlideScale: 1, inactiveSlideOpacity: null, itemWidth: null, onBeforeSnapToItem: null, enableMomentum: true, decelerationRate: 0.9, ref: null, renderItem: null, sliderWidth: null, style: null, scrollEnabled: null };
  let num = 0.7;
  let obj2 = {
    style: tmp.sliderLabels,
    children: values.map((title) => {
      title = title.title;
      let closure_0 = arg1;
      let obj = { style: _undefined.sliderLabel, children: null };
      obj = {
        accessibilityRole: "button",
        accessibilityState: obj,
        onPress() {
          const rounded = Math.round(closure_0);
          outer1_6(rounded);
          if (tmp4) {
            const current = tmp3.current;
            current.snapToItem(rounded, !outer1_8.useReducedMotion);
          }
        },
        children: null
      };
      obj = { selected: first === arg1 };
      const obj1 = { variant: "text-sm/medium", children: null };
      obj1[1] = title();
      obj[3] = outer1_15(outer1_0(outer1_2[15]).Text, obj1);
      obj[1] = outer1_15(outer1_0(outer1_2[14]).PressableOpacity, obj);
      return outer1_15(first, obj, title());
    })
  };
  if (tmp2) {
    num = 0.3;
  }
  obj3[3] = num;
  obj3[4] = first1 - tmp8[0];
  obj3[5] = function onBeforeSnapToItem(self) {
    screenReaderEnabled(self);
  };
  obj3[8] = ref;
  obj3[9] = function renderItem(item) {
    item = item.item;
    const contentPrefaceResult = item.contentPreface();
    let obj = { accessible: !item.index !== first && undefined, accessibilityElementsHidden: tmp5, importantForAccessibility: null, style: null, children: null };
    let str = "no-hide-descendants";
    if (item.index === first) {
      str = "yes";
    }
    obj[2] = str;
    obj[3] = _undefined.cardWrapper;
    obj = { style: _undefined.card, children: null };
    obj = { style: _undefined.templateTitle, variant: "heading-lg/extrabold", children: null };
    obj[2] = item.title();
    let items = [outer1_15(outer1_0(outer1_2[15]).Text, obj), , ];
    const obj1 = { style: _undefined.templateSubtitle, variant: "text-sm/medium", children: null };
    obj1[2] = item.description();
    items[1] = outer1_15(outer1_0(outer1_2[15]).Text, obj1);
    const obj2 = { style: _undefined.templateContentWrapper, children: null };
    let tmp3Result = null;
    if (null != contentPrefaceResult) {
      tmp3Result = null;
      if ("" !== contentPrefaceResult) {
        const obj3 = { style: null, variant: "text-sm/medium", children: null };
        obj3[0] = tmp7.templateSubtitle;
        obj3[2] = item.contentPreface();
        tmp3Result = tmp3(tmp10(tmp11[15]).Text, obj3);
      }
    }
    const obj4 = { children: null };
    const items1 = [tmp3Result, ];
    const obj5 = { accessibilityRole: "list", children: null };
    obj5[1] = item.contents().map((children) => {
      let obj = { style: outer1_3.templateContent, children: null };
      obj = { source: null, size: null, color: null };
      obj[0] = outer2_1(outer2_2[18]);
      obj[1] = outer2_0(outer2_2[17]).IconSizes.MEDIUM;
      obj[2] = outer2_1(outer2_2[9]).unsafe_rawColors.GREEN_360;
      const items = [outer2_15(outer2_0(outer2_2[17]).Icon, obj), ];
      obj = { style: outer1_3.templateContentText, variant: "text-sm/medium", children };
      items[1] = outer2_15(outer2_0(outer2_2[15]).Text, obj);
      obj[1] = items;
      return outer2_16(first, obj, "" + item.key + "_content_" + arg1);
    });
    items1[1] = outer1_15(first, obj5);
    obj2[1] = items1;
    items[2] = outer1_16(first, obj2);
    obj4[0] = items;
    const items2 = [outer1_16(first1, obj4), ];
    const obj6 = { style: _undefined.templateButton, children: null };
    const obj7 = { text: null, onPress: null };
    const intl = tmp10(tmp11[20]).intl;
    obj7[0] = intl.string(outer1_0(outer1_2[20]).t.mQS8Is);
    obj7[1] = function onPress() {
      let key;
      let permissions;
      const communityPermissions = item.communityPermissions;
      ({ permissions, key } = item);
      let obj = outer2_1(outer2_2[11]);
      obj = { location_page: outer1_1, template_name: key };
      const merged = Object.assign(outer2_0(outer2_2[12]).collectGuildAnalyticsMetadata(outer1_2));
      obj.track(outer2_13.ROLE_TEMPLATE_SELECTED, obj);
      guild = guild.getGuild(outer1_2);
      if (null != guild) {
        const features = guild.features;
        if (features.has(outer2_14.COMMUNITY)) {
          if (null != communityPermissions) {
            item(communityPermissions);
          }
        }
        item(permissions);
      }
    };
    obj6[1] = outer1_15(outer1_0(outer1_2[19]).Button, obj7);
    items2[1] = outer1_15(first, obj6);
    obj[1] = items2;
    obj[4] = outer1_16(first, obj);
    return outer1_15(first, obj);
  };
  obj3[10] = first1;
  obj3[11] = tmp.carousel;
  obj3[12] = !tmp10;
  items1[1] = tmp14(importDefault(13340), obj3);
  obj[2] = items1;
  return tmp12(tmp13, obj);
};