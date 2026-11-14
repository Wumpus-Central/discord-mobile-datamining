// === Module 20559: GuildSettingsRoleTemplate ===

// Module 20559 (GuildSettingsRoleTemplate)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import Text_Text from "Text/Text" /* 5929 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 6067 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7771 */;
import PaginationDefault from "Pagination" /* 11689 */;
import _modDef12481 from "module_12481" /* 12481 */;
import _modDef13007 from "module_13007" /* 13007 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import GuildStore from "GuildStore" /* 5177 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Dimensions, ScrollView: closure_6 } = get_ActivityIndicator);
const GuildSettingsRoleConstants = fn(20555);
({ PermissionTemplateTypes: closure_9, PermissionTemplates: closure_10, DEFAULT_TEMPLATE_TYPE: closure_11 } = GuildSettingsRoleConstants);
const Constants = fn(1072);
({ AnalyticEvents: closure_12, GuildFeatures: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let width = Dimensions.get("window").width;
const createStyles = fn(5306);
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
let closure_18 = { code: "(function GuildSettingsRoleTemplateTsx1(value){let[interpolate,sheetWidth,parallaxScrollingOffset,Extrapolation,inactiveOpacity]=this.__closure;const translate=interpolate(value,[-1,0,1],[-sheetWidth+parallaxScrollingOffset,0,sheetWidth-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,sheetWidth,0],Extrapolation.CLAMP));return{transform:[{translateX:translate}],opacity:interpolate(value,[-1,0,1],[inactiveOpacity,1,inactiveOpacity],Extrapolation.CLAMP),zIndex:zIndex};})" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx");

export default function GuildSettingsRoleTemplate(arg0) {
  ({ onSelect: c0, location: c1, guildId: c2 } = arg0);
  noop = undefined;
  value = undefined;
  closure_7 = undefined;
  c8 = undefined;
  let tmp = closure_17();
  let _slicedToArray = tmp;
  const size = useWindowDimensionsDefault();
  const height = size.height;
  const ref = noop.useRef(null);
  noop = ref;
  const ref1 = noop.useRef(null);
  [value, closure_7] = noop.useState(closure_11);
  const tmp4 = useIsWindowLargeDefault();
  [tmp10, c8] = noop.useState(width);
  const tmp9 = _slicedToArray(noop.useState(width), 2);
  let num = 0.7;
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  if (tmp4) {
    num = 0.3;
  }
  const bound = Math.max(tmp10 - 300, 0);
  items = [size.width, height];
  let rounded = Math.round(0.45 * height);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = _undefined4.current;
    width = undefined;
    if (current != null) {
      width = current.getBoundingClientRect().width;
    }
    let tmp2 = null != width;
    if (tmp2) {
      tmp2 = width > 0;
    }
    if (tmp2) {
      _undefined5((arg0) => {
        let tmp = arg0;
        if (arg0 !== width) {
          tmp = width;
        }
        return tmp;
      });
    }
  }, items);
  let items1 = [closure_18, require("module_1655").interpolate, tmp10, bound, require("module_1655").Extrapolation, num];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items1;
  class GuildSettingsRoleTemplateTsx1 {
    constructor(arg0) {
      items = [, , ];
      items[0] = -closure_1 + closure_2;
      items[1] = 0;
      items[2] = closure_1 - closure_2;
      items1 = [0];
      items1[1] = closure_1;
      items1[2] = 0;
      tmp = closure_0(arg0, [-1, 0, 1], items);
      obj = { transform: null, opacity: null, zIndex: null };
      items2 = [];
      items2[0] = { translateX: tmp };
      obj.transform = items2;
      items3 = [, , ];
      items3[0] = closure_4;
      items3[1] = 1;
      items3[2] = closure_4;
      rounded = Math.round(closure_0(arg0, [-1, 0, 1], items1, closure_3.CLAMP));
      obj.opacity = closure_0(arg0, [-1, 0, 1], items3, closure_3.CLAMP);
      obj.zIndex = rounded;
      return obj;
    }
  }
  let items2 = [tmp17, tmp18, tmp19, tmp20, tmp21];
  GuildSettingsRoleTemplateTsx1.__closure = items2;
  GuildSettingsRoleTemplateTsx1.__workletHash = 3460011847829;
  GuildSettingsRoleTemplateTsx1.__initData = tmp16;
  let items3 = [tmp10, bound, num];
  function updateLevel(arg0) {
    const rounded = Math.round(arg0);
    closure_7(rounded);
    const current = ref1.current;
    if (current != null) {
      const obj = { index: rounded, animated: !AccessibilityStore.useReducedMotion };
      current.scrollTo(obj);
    }
  }
  const callback = obj.useCallback(GuildSettingsRoleTemplateTsx1, items3);
  const values = Object.values(closure_10);
  let obj3 = { ref, style: tmp.container, children: null };
  let obj4 = { style: tmp.sliderContainer, children: null };
  let obj5 = { accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_14(_modDef13007, { maximumValue: values.length - 1, minimumTrackTintColor: values[value].color, minimumValue: constants.COSMETIC, onSlidingComplete: updateLevel, style: tmp.slider, thumbTintColor: values[value].color, value, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" }) };
  const items4 = [closure_14(ref1, obj5), ];
  let obj2 = require("useIsScreenReaderEnabled");
  let obj6 = { maximumValue: values.length - 1, minimumTrackTintColor: values[value].color, minimumValue: constants.COSMETIC, onSlidingComplete: updateLevel, style: tmp.slider, thumbTintColor: values[value].color, value, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" };
  items4[1] = closure_14(ref1, {
    style: tmp.sliderLabels,
    children: values.map((title, index) => {
      title = title.title;
      closure_0 = index;
      let obj = { style: _undefined3.sliderLabel, children: null };
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
        children: closure_1_14(_undefined(_undefined2[18]).Text, { variant: "body-sm/medium", children: title() })
      };
      obj.children = closure_1_14(_undefined(_undefined2[17]).PressableOpacity, obj2);
      return closure_1_14(ref1, obj, title());
    })
  });
  obj4.children = items4;
  const items5 = [closure_15(ref1, obj4), ];
  let obj8 = {
    style: null,
    children: closure_14(PaginationDefault, {
      ref: ref1,
      data: values,
      renderItem: function renderCarouselItem(item) {
        item = item.item;
        const contentPrefaceResult = item.contentPreface();
        let obj = { accessible: !item.index !== first && undefined, accessibilityElementsHidden: item.index !== first, importantForAccessibility: null, style: null, children: null };
        let str = "no-hide-descendants";
        if (item.index === first) {
          str = "yes";
        }
        obj.importantForAccessibility = str;
        obj.style = _undefined3.cardWrapper;
        let obj2 = { style: _undefined3.card, children: null };
        items = [closure_1_14(_undefined(_undefined2[18]).Text, { style: _undefined3.templateTitle, variant: "heading-lg/semibold", children: item.title() }), , ];
        let obj3 = { style: _undefined3.templateTitle, variant: "heading-lg/semibold", children: item.title() };
        const tmp6 = !item.index !== first && undefined;
        items[1] = closure_1_14(_undefined(_undefined2[18]).Text, { style: _undefined3.templateSubtitle, variant: "body-sm/medium", children: item.description() });
        const obj5 = { style: _undefined3.templateContentWrapper, children: null };
        let tmp3Result = null;
        if (null != contentPrefaceResult) {
          tmp3Result = null;
          if ("" !== contentPrefaceResult) {
            const obj6 = { style: _undefined3.templateSubtitle, variant: "body-sm/medium", children: item.contentPreface() };
            tmp3Result = closure_1_14(_undefined(_undefined2[18]).Text, obj6);
          }
        }
        const obj7 = { children: null };
        const items1 = [tmp3Result, ];
        const obj8 = { accessibilityRole: "list", children: null };
        const obj4 = { style: _undefined3.templateSubtitle, variant: "body-sm/medium", children: item.description() };
        obj8.children = item.contents().map((children, index) => {
          const obj = { style: c3.templateContent, children: null };
          items = [gesture(native.Icon, { source: _modDef12481, size: native.IconSizes.MEDIUM, color: nativeDefault.unsafe_rawColors.GREEN_360 }), gesture(Text_Text.Text, { style: c3.templateContentText, variant: "body-sm/medium", children })];
          obj.children = items;
          return colors(hasOwnProperty, obj, "" + item.key + "_content_" + index);
        });
        items1[1] = closure_1_14(ref1, obj8);
        obj5.children = items1;
        items[2] = closure_1_15(ref1, obj5);
        obj7.children = items;
        const items2 = [closure_1_15(first, obj7), ];
        const obj9 = { style: _undefined3.templateButton, children: null };
        const obj10 = { text: null, onPress: null };
        const intl = _undefined(_undefined2[23]).intl;
        obj10.text = intl.string(_undefined(_undefined2[23]).t.mQS8Is);
        obj10.onPress = function onPress() {
          const communityPermissions = item.communityPermissions;
          ({ permissions, key } = item);
          const obj = AnalyticsUtilsDefault;
          const obj2 = { location_page, template_name: key };
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(c2));
          obj.track(constants2.ROLE_TEMPLATE_SELECTED, obj2);
          guild = GuildStore.getGuild(c2);
          if (null != guild) {
            const features = guild.features;
            if (features.has(constants3.COMMUNITY)) {
              if (null != communityPermissions) {
                item(communityPermissions);
              }
            }
            item(permissions);
          }
        };
        obj9.children = closure_1_14(_undefined(_undefined2[22]).Button, obj10);
        items2[1] = closure_1_14(ref1, obj9);
        obj2.children = items2;
        obj.children = closure_1_15(ref1, obj2);
        return closure_1_14(ref1, obj);
      },
      width: tmp10,
      loop: false,
      enabled: !isScreenReaderEnabled,
      scrollAnimationDuration: 200,
      customAnimation: callback,
      onSnapToItem: function handleCarouselSnap(arg0) {
        closure_7(arg0);
      },
      onConfigurePanGesture(activeOffsetX) {
        activeOffsetX.activeOffsetX([-10, 10]);
      }
    })
  };
  const items6 = [tmp.carousel, { minHeight: rounded }];
  obj8.style = items6;
  items5[1] = closure_14(ref1, obj8);
  obj3.children = items5;
  return closure_15(ref1, obj3);
};