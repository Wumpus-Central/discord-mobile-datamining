// === Module 18128: GuildSettingsRoleTemplate ===

// Module 18128 (GuildSettingsRoleTemplate)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4559 */;
import Text_Text from "Text/Text" /* 4823 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5007 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5256 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7274 */;
import _modDef8624 from "module_8624" /* 8624 */;
import PaginationDefault from "Pagination" /* 11101 */;
import _modDef11895 from "module_11895" /* 11895 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;
import GuildStore from "GuildStore" /* 2064 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Dimensions, ScrollView: metroRequire } = get_ActivityIndicator);
const GuildSettingsRoleConstants = fn(18124);
({ PermissionTemplateTypes: closure_9, PermissionTemplates: c10, DEFAULT_TEMPLATE_TYPE: closure_11 } = GuildSettingsRoleConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_12, GuildFeatures: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let width = Dimensions.get("window").width;
const createStyles = fn(4827);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 }, carousel: { flex: 1 }, cardWrapper: { width: 300, alignSelf: "center", paddingHorizontal: 10, flex: 1 }, card: null, templateTitle: null, templateSubtitle: null, templateContentWrapper: null, templateContent: null, templateContentText: null, templateButton: null, sliderContainer: null, slider: null, sliderLabels: null, sliderLabel: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj2.card = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, borderStyle: "solid", borderWidth: 1, flex: 1, flexDirection: "column", marginVertical: 16, padding: 16, paddingTop: 20 };
obj2.templateTitle = { alignItems: "center", textAlign: "center", paddingBottom: 16 };
obj2.templateSubtitle = { paddingBottom: 16 };
obj2.templateContentWrapper = { flex: 1, justifyContent: "flex-start" };
obj2.templateContent = { alignItems: "center", flexDirection: "row", paddingBottom: 8 };
obj2.templateContentText = { flex: 1, marginLeft: 12 };
obj2.templateButton = { justifyContent: "flex-end", flexGrow: 0, paddingTop: 16 };
obj2.sliderContainer = { alignItems: "center" };
obj2.slider = { marginTop: 8, width: 300, maxWidth: "72%" };
obj2.sliderLabels = { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 16, textAlign: "center", width: 380, maxWidth: "85%" };
obj2.sliderLabel = { marginHorizontal: 0, width: "25%", textAlign: "center", alignItems: "center" };
let closure_17 = createStyles.createStyles(obj2);
const __initData = { code: "function GuildSettingsRoleTemplateTsx1(value){const{interpolate,sheetWidth,parallaxScrollingOffset,Extrapolation,inactiveOpacity}=this.__closure;const translate=interpolate(value,[-1,0,1],[-sheetWidth+parallaxScrollingOffset,0,sheetWidth-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,sheetWidth,0],Extrapolation.CLAMP));return{transform:[{translateX:translate}],opacity:interpolate(value,[-1,0,1],[inactiveOpacity,1,inactiveOpacity],Extrapolation.CLAMP),zIndex:zIndex};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx");

export default function GuildSettingsRoleTemplate(arg0) {
  ({ onSelect: require, location: importDefault, guildId: dependencyMap } = arg0);
  let ref;
  value = undefined;
  closure_7 = undefined;
  first1 = undefined;
  constants = undefined;
  let bound;
  let tmp = closure_17();
  _slicedToArray = tmp;
  const size = useWindowDimensionsDefault();
  const height = size.height;
  ref = ref.useRef(null);
  const ref1 = ref.useRef(null);
  [value, closure_7] = ref.useState(bound);
  [first1, constants] = ref.useState(width);
  const tmp4 = useIsWindowLargeDefault();
  let num = 0.7;
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (tmp4) {
    num = 0.3;
  }
  function updateLevel(arg0) {
    const rounded = Math.round(arg0);
    closure_7(rounded);
    const current = ref1.current;
    if (current != null) {
      const obj = { index: rounded, animated: !AccessibilityStore.useReducedMotion };
      current.scrollTo(obj);
    }
  }
  bound = Math.max(first1 - 300, 0);
  let items = [size.width, height];
  let rounded = Math.round(0.45 * height);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    width = undefined;
    if (current != null) {
      width = current.getBoundingClientRect().width;
    }
    let tmp2 = null != width;
    if (tmp2) {
      tmp2 = width > 0;
    }
    if (tmp2) {
      closure_9((arg0) => {
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
      obj = closure_0(closure_2[13]);
      items = [, , ];
      items[0] = -closure_8 + closure_11;
      items[1] = 0;
      items[2] = closure_8 - closure_11;
      interpolateResult = obj.interpolate(arg0, [-1, 0, 1], items);
      obj2 = closure_0(closure_2[13]);
      items1 = [0];
      items1[1] = closure_8;
      items1[2] = 0;
      obj1 = { transform: null, opacity: null, zIndex: null };
      items2 = [];
      items2[0] = { translateX: interpolateResult };
      obj1.transform = items2;
      rounded = Math.round(obj2.interpolate(arg0, [-1, 0, 1], items1, closure_0(closure_2[13]).Extrapolation.CLAMP));
      obj4 = closure_0(closure_2[13]);
      items3 = [, , ];
      items3[0] = c10;
      items3[1] = 1;
      items3[2] = c10;
      obj1.opacity = obj4.interpolate(arg0, [-1, 0, 1], items3, closure_0(closure_2[13]).Extrapolation.CLAMP);
      obj1.zIndex = rounded;
      return obj1;
    }
  }
  V.__closure = { interpolate: ReanimatedRexport.interpolate, sheetWidth: first1, parallaxScrollingOffset: bound, Extrapolation: ReanimatedRexport.Extrapolation, inactiveOpacity: num };
  V.__workletHash = 1786335394860;
  V.__initData = __initData;
  let items1 = [first1, bound, num];
  const callback = obj.useCallback(V, items1);
  const values = Object.values(num);
  let obj4 = { ref, style: tmp.container, children: null };
  let obj5 = { style: tmp.sliderContainer, children: null };
  let obj6 = { accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_14(_modDef8624, { maximumValue: values.length - 1, minimumTrackTintColor: values[value].color, minimumValue: constants.COSMETIC, onSlidingComplete: updateLevel, style: tmp.slider, thumbTintColor: values[value].color, value, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" }) };
  let items2 = [closure_14(ref1, obj6), ];
  let obj3 = { interpolate: ReanimatedRexport.interpolate, sheetWidth: first1, parallaxScrollingOffset: bound, Extrapolation: ReanimatedRexport.Extrapolation, inactiveOpacity: num };
  let obj7 = { maximumValue: values.length - 1, minimumTrackTintColor: values[value].color, minimumValue: constants.COSMETIC, onSlidingComplete: updateLevel, style: tmp.slider, thumbTintColor: values[value].color, value, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" };
  items2[1] = closure_14(ref1, {
    style: tmp.sliderLabels,
    children: values.map((title, index) => {
      title = title.title;
      closure_0 = index;
      let obj = { style: closure_3.sliderLabel, children: null };
      const obj2 = {
        accessibilityRole: "button",
        accessibilityState: { selected: first === index },
        onPress() {
          const rounded = Math.round(closure_0);
          closure_7(rounded);
          const current = ref1.current;
          if (current != null) {
            const obj = { index: rounded, animated: !closure_1_7.useReducedMotion };
            current.scrollTo(obj);
          }
        },
        children: closure_1_14(require("Text/Text").Text, { variant: "text-sm/medium", children: title() })
      };
      obj.children = closure_1_14(require("Pressables").PressableOpacity, obj2);
      return closure_1_14(ref1, obj, title());
    })
  });
  obj5.children = items2;
  let items3 = [closure_15(ref1, obj5), ];
  let obj9 = {
    style: null,
    children: closure_14(PaginationDefault, {
      ref: ref1,
      data: values,
      renderItem(item) {
        item = item.item;
        const contentPrefaceResult = item.contentPreface();
        let obj = { accessible: !item.index !== first && undefined, accessibilityElementsHidden: item.index !== first, importantForAccessibility: null, style: null, children: null };
        let str = "no-hide-descendants";
        if (item.index === first) {
          str = "yes";
        }
        obj.importantForAccessibility = str;
        obj.style = closure_3.cardWrapper;
        let obj2 = { style: closure_3.card, children: null };
        let items = [closure_1_14(require("Text/Text").Text, { style: closure_3.templateTitle, variant: "heading-lg/extrabold", children: item.title() }), , ];
        let obj3 = { style: closure_3.templateTitle, variant: "heading-lg/extrabold", children: item.title() };
        const tmp6 = !item.index !== first && undefined;
        items[1] = closure_1_14(require("Text/Text").Text, { style: closure_3.templateSubtitle, variant: "text-sm/medium", children: item.description() });
        const obj5 = { style: closure_3.templateContentWrapper, children: null };
        let tmp3Result = null;
        if (null != contentPrefaceResult) {
          tmp3Result = null;
          if ("" !== contentPrefaceResult) {
            const obj6 = { style: closure_3.templateSubtitle, variant: "text-sm/medium", children: item.contentPreface() };
            tmp3Result = closure_1_14(require("Text/Text").Text, obj6);
          }
        }
        const obj7 = { children: null };
        const items1 = [tmp3Result, ];
        const obj8 = { accessibilityRole: "list", children: null };
        const obj4 = { style: closure_3.templateSubtitle, variant: "text-sm/medium", children: item.description() };
        obj8.children = item.contents().map((children, index) => {
          const obj = { style: closure_3.templateContent, children: null };
          const items = [closure_3_14(native.Icon, { source: _modDef11895, size: native.IconSizes.MEDIUM, color: nativeDefault.unsafe_rawColors.GREEN_360 }), closure_3_14(Text_Text.Text, { style: closure_3.templateContentText, variant: "text-sm/medium", children })];
          obj.children = items;
          return __initData(hasOwnProperty, obj, "" + item.key + "_content_" + index);
        });
        items1[1] = closure_1_14(ref1, obj8);
        obj5.children = items1;
        items[2] = closure_1_15(ref1, obj5);
        obj7.children = items;
        const items2 = [closure_1_15(first, obj7), ];
        const obj9 = { style: closure_3.templateButton, children: null };
        const obj10 = { text: null, onPress: null };
        const intl = require("util").intl;
        obj10.text = intl.string(require("util").t.mQS8Is);
        obj10.onPress = function onPress() {
          const communityPermissions = item.communityPermissions;
          ({ permissions, key } = item);
          const obj = AnalyticsUtilsDefault;
          const obj2 = { location_page, template_name: key };
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(dependencyMap));
          obj.track(constants2.ROLE_TEMPLATE_SELECTED, obj2);
          const guild = GuildStore.getGuild(dependencyMap);
          if (null != guild) {
            const features = guild.features;
            if (features.has(constants3.COMMUNITY)) {
              if (null != communityPermissions) {
                _require(communityPermissions);
              }
            }
            _require(permissions);
          }
        };
        obj9.children = closure_1_14(require("components/Button/Button").Button, obj10);
        items2[1] = closure_1_14(ref1, obj9);
        obj2.children = items2;
        obj.children = closure_1_15(ref1, obj2);
        return closure_1_14(ref1, obj);
      },
      width: first1,
      loop: false,
      enabled: !isScreenReaderEnabled,
      scrollAnimationDuration: 200,
      customAnimation: callback,
      onSnapToItem(result) {
        closure_7(result);
      },
      onConfigurePanGesture(activeOffsetX) {
        activeOffsetX.activeOffsetX([-10, 10]);
      }
    })
  };
  const items4 = [tmp.carousel, { minHeight: rounded }];
  obj9.style = items4;
  items3[1] = closure_14(ref1, obj9);
  obj4.children = items3;
  return closure_15(ref1, obj4);
};