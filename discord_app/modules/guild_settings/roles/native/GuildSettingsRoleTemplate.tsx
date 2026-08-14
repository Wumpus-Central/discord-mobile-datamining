// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx
import _slicedToArray from "_slicedToArray";
import Pagination from "Pagination";
import get_ActivityIndicator from "PressableBase";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import title from "title";
import ME from "ME";
import jsxProd from "registerAsset";
import createCacheKey from "createCacheKey";
import { _getRequireWildcardCache } from "../../../../../_runtime/08055__getRequireWildcardCache.js";
import { Pagination } from "../../../../../_runtime/10107_Pagination.js";
import { SCREEN_READER_ENABLED_GETTER } from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import { useIsWindowLarge } from "../../../screen/native/useIsWindowLarge.tsx";
import { useWindowDimensions } from "../../../screen/useWindowDimensions.native.tsx";

let Dimensions;
let c10;
let c5;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_6;
let map1;
let unpackModuleId;
const require = arg1;
({ View: c5, Dimensions, ScrollView: closure_6 } = get_ActivityIndicator);
({ PermissionTemplateTypes: c9, PermissionTemplates: c10, DEFAULT_TEMPLATE_TYPE: unpackModuleId } = title);
({ AnalyticEvents: closure_12, GuildFeatures: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let width = Dimensions.get("window").width;
createCacheKey = { container: null, carousel: null, cardWrapper: null, card: null, templateTitle: null, templateSubtitle: null, templateContentWrapper: null, templateContent: null, templateContentText: null, templateButton: null, sliderContainer: null, slider: null, sliderLabels: null, sliderLabel: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { width: 300, alignSelf: "center", paddingHorizontal: 10, flex: 1 };
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
let closure_18 = { code: "function GuildSettingsRoleTemplateTsx1(value){const{interpolate,sheetWidth,parallaxScrollingOffset,Extrapolation,inactiveOpacity}=this.__closure;const translate=interpolate(value,[-1,0,1],[-sheetWidth+parallaxScrollingOffset,0,sheetWidth-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,sheetWidth,0],Extrapolation.CLAMP));return{transform:[{translateX:translate}],opacity:interpolate(value,[-1,0,1],[inactiveOpacity,1,inactiveOpacity],Extrapolation.CLAMP),zIndex:zIndex};}" };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.sm, borderStyle: "solid", borderWidth: 1, flex: 1, flexDirection: "column", marginVertical: 16, padding: 16, paddingTop: 20 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx");

export default function GuildSettingsRoleTemplate(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ onSelect: require, location: importDefault, guildId: dependencyMap } = arg0);
  let callback;
  let ref;
  let ref1;
  let first;
  let maybeApplyNoTextColorForLightCustomTheme;
  let first1;
  let constants;
  let num;
  let bound;
  let tmp = createCacheKey();
  callback = tmp;
  const size = useWindowDimensions();
  const height = size.height;
  let obj = ref;
  ref = ref.useRef(null);
  ref1 = ref.useRef(null);
  const tmp7 = callback(ref.useState(bound), 2);
  first = tmp7[0];
  maybeApplyNoTextColorForLightCustomTheme = tmp7[1];
  const tmp9 = callback(ref.useState(width), 2);
  first1 = tmp9[0];
  constants = tmp9[1];
  let obj1 = SCREEN_READER_ENABLED_GETTER;
  num = 0.7;
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  if (tmp4) {
    num = 0.3;
  }
  function updateLevel(arg0) {
    const rounded = Math.round(arg0);
    lib(rounded);
    const current = ref1.current;
    if (current != null) {
      const obj = { index: null, animated: null };
      obj[0] = rounded;
      obj[1] = !lib.useReducedMotion;
      current.scrollTo(obj);
    }
  }
  bound = Math.max(first1 - 300, 0);
  let items = [size.width, height];
  let rounded = Math.round(0.45 * height);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    let width;
    if (current != null) {
      width = current.getBoundingClientRect().width;
    }
    let tmp2 = null != width;
    if (tmp2) {
      tmp2 = width > 0;
    }
    if (tmp2) {
      callback((arg0) => {
        let tmp = arg0;
        if (arg0 !== width) {
          tmp = width;
        }
        return tmp;
      });
    }
  }, items);
  class V {
    constructor(arg0) {
      obj = onSelect(guildId[13]);
      items = [, , ];
      items[0] = -c8 + useState;
      items[1] = 0;
      items[2] = c8 - useState;
      interpolateResult = obj.interpolate(arg0, [-1, 0, 1], items);
      obj2 = onSelect(guildId[13]);
      items1 = [0];
      items1[1] = c8;
      items1[2] = 0;
      obj = { transform: items2, opacity: null, zIndex: null };
      items2 = [];
      items2[0] = { translateX: interpolateResult };
      rounded = Math.round(obj2.interpolate(arg0, [-1, 0, 1], items1, onSelect(guildId[13]).Extrapolation.CLAMP));
      obj4 = onSelect(guildId[13]);
      items3 = [, , ];
      items3[0] = c10;
      items3[1] = 1;
      items3[2] = c10;
      obj[1] = obj4.interpolate(arg0, [-1, 0, 1], items3, onSelect(guildId[13]).Extrapolation.CLAMP);
      obj[2] = rounded;
      return obj;
    }
  }
  obj = { interpolate: tmp11(4083).interpolate, sheetWidth: first1, parallaxScrollingOffset: bound, Extrapolation: tmp11(4083).Extrapolation, inactiveOpacity: num };
  V.__closure = obj;
  V.__workletHash = 1786335394860;
  V.__initData = closure_18;
  let items1 = [first1, bound, num];
  callback = obj.useCallback(V, items1);
  const values = Object.values(num);
  obj = { ref, style: tmp.container, children: null };
  obj1 = { style: tmp.sliderContainer, children: null };
  tmp4 = useIsWindowLarge();
  let items2 = [callback2(ref1, { accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: callback2(_getRequireWildcardCache, obj3) }), ];
  let obj2 = { accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: callback2(_getRequireWildcardCache, obj3) };
  items2[1] = callback2(ref1, {
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
          outer1_7(rounded);
          const current = outer1_5.current;
          if (current != null) {
            const obj = { index: null, animated: null };
            obj[0] = rounded;
            obj[1] = !outer1_7.useReducedMotion;
            current.scrollTo(obj);
          }
        },
        children: null
      };
      obj = { selected: first === arg1 };
      const obj1 = { variant: "text-sm/medium", children: null };
      obj1[1] = title();
      obj[3] = outer1_14(outer1_0(outer1_2[18]).Text, obj1);
      obj[1] = outer1_14(outer1_0(outer1_2[17]).PressableOpacity, obj);
      return outer1_14(ref1, obj, title());
    })
  });
  obj1[1] = items2;
  let items3 = [callback3(ref1, obj1), ];
  let obj4 = {
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
          outer1_7(rounded);
          const current = outer1_5.current;
          if (current != null) {
            const obj = { index: null, animated: null };
            obj[0] = rounded;
            obj[1] = !outer1_7.useReducedMotion;
            current.scrollTo(obj);
          }
        },
        children: null
      };
      obj = { selected: first === arg1 };
      const obj1 = { variant: "text-sm/medium", children: null };
      obj1[1] = title();
      obj[3] = outer1_14(outer1_0(outer1_2[18]).Text, obj1);
      obj[1] = outer1_14(outer1_0(outer1_2[17]).PressableOpacity, obj);
      return outer1_14(ref1, obj, title());
    })
  };
  const items4 = [tmp.carousel, { minHeight: rounded }];
  items3[1] = callback2(ref1, { style: items4, children: callback2(Pagination, obj6) });
  obj[2] = items3;
  return callback3(ref1, obj);
};