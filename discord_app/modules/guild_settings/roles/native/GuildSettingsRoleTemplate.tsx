// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../../app_analytics/AppAnalyticsUtils.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import _modDef8278 from "../../../../../_runtime/metro/08278__.js";
import PaginationDefault from "../../../../../_runtime/10757_Pagination.js";
import _modDef11564 from "../../../../../_runtime/metro/11564__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Dimensions, ScrollView: metroRequire } = get_ActivityIndicator);
const GuildSettingsRoleConstants = fn(17609);
({
  PermissionTemplateTypes: closure_9,
  PermissionTemplates: c10,
  DEFAULT_TEMPLATE_TYPE: closure_11,
} = GuildSettingsRoleConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_12, GuildFeatures: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let width = Dimensions.get("window").width;
fn(4560);
let createStyles = {
  container: null,
  carousel: null,
  cardWrapper: null,
  card: null,
  templateTitle: null,
  templateSubtitle: null,
  templateContentWrapper: null,
  templateContent: null,
  templateContentText: null,
  templateButton: null,
  sliderContainer: null,
  slider: null,
  sliderLabels: null,
  sliderLabel: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles.container = createStyles;
createStyles.carousel = { flex: 1 };
createStyles.cardWrapper = { width: 300, alignSelf: "center", paddingHorizontal: 10, flex: 1 };
createStyles.card = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.sm,
  borderStyle: "solid",
  borderWidth: 1,
  flex: 1,
  flexDirection: "column",
  marginVertical: 16,
  padding: 16,
  paddingTop: 20,
};
createStyles.templateTitle = { alignItems: "center", textAlign: "center", paddingBottom: 16 };
createStyles.templateSubtitle = { paddingBottom: 16 };
createStyles.templateContentWrapper = { flex: 1, justifyContent: "flex-start" };
createStyles.templateContent = { alignItems: "center", flexDirection: "row", paddingBottom: 8 };
createStyles.templateContentText = { flex: 1, marginLeft: 12 };
createStyles.templateButton = { justifyContent: "flex-end", flexGrow: 0, paddingTop: 16 };
createStyles.sliderContainer = { alignItems: "center" };
createStyles.slider = { marginTop: 8, width: 300, maxWidth: "72%" };
createStyles.sliderLabels = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 16,
  textAlign: "center",
  width: 380,
  maxWidth: "85%",
};
createStyles.sliderLabel = { marginHorizontal: 0, width: "25%", textAlign: "center", alignItems: "center" };
let closure_17 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function GuildSettingsRoleTemplateTsx1(value){const{interpolate,sheetWidth,parallaxScrollingOffset,Extrapolation,inactiveOpacity}=this.__closure;const translate=interpolate(value,[-1,0,1],[-sheetWidth+parallaxScrollingOffset,0,sheetWidth-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,sheetWidth,0],Extrapolation.CLAMP));return{transform:[{translateX:translate}],opacity:interpolate(value,[-1,0,1],[inactiveOpacity,1,inactiveOpacity],Extrapolation.CLAMP),zIndex:zIndex};}",
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx");

export default function GuildSettingsRoleTemplate(arg0) {
  ({ onSelect: require, location: importDefault, guildId: dependencyMap } = arg0);
  let ref;
  let bound;
  let tmp = closure_17();
  _slicedToArray = tmp;
  const size = useWindowDimensionsDefault();
  const height = size.height;
  let obj = ref;
  ref = ref.useRef(null);
  const ref1 = ref.useRef(null);
  const tmp7 = _slicedToArray(ref.useState(bound), 2);
  value = tmp7[0];
  closure_7 = tmp7[1];
  let tmp9 = _slicedToArray(ref.useState(width), 2);
  const first1 = tmp9[0];
  constants = tmp9[1];
  let obj1 = useIsScreenReaderEnabled;
  let num = 0.7;
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
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
      items = [, ,];
      items[0] = -closure_8 + closure_11;
      items[1] = 0;
      items[2] = closure_8 - closure_11;
      interpolateResult = obj.interpolate(arg0, [-1, 0, 1], items);
      obj2 = closure_0(closure_2[13]);
      items1 = [0];
      items1[1] = closure_8;
      items1[2] = 0;
      obj = { transform: null, opacity: null, zIndex: null };
      items2 = [];
      items2[0] = { translateX: interpolateResult };
      obj.transform = items2;
      rounded = Math.round(obj2.interpolate(arg0, [-1, 0, 1], items1, closure_0(closure_2[13]).Extrapolation.CLAMP));
      obj4 = closure_0(closure_2[13]);
      items3 = [, ,];
      items3[0] = c10;
      items3[1] = 1;
      items3[2] = c10;
      obj.opacity = obj4.interpolate(arg0, [-1, 0, 1], items3, closure_0(closure_2[13]).Extrapolation.CLAMP);
      obj.zIndex = rounded;
      return obj;
    }
  }
  obj = {
    interpolate: tmp11(4296).interpolate,
    sheetWidth: first1,
    parallaxScrollingOffset: bound,
    Extrapolation: tmp11(4296).Extrapolation,
    inactiveOpacity: num,
  };
  V.__closure = obj;
  V.__workletHash = 1786335394860;
  V.__initData = __initData;
  let items1 = [first1, bound, num];
  const callback = obj.useCallback(V, items1);
  const values = Object.values(num);
  obj = { ref, style: tmp.container, children: null };
  obj1 = { style: tmp.sliderContainer, children: null };
  let obj2 = {
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: closure_14(_modDef8278, {
      maximumValue: values.length - 1,
      minimumTrackTintColor: values[value].color,
      minimumValue: constants.COSMETIC,
      onSlidingComplete: updateLevel,
      style: tmp.slider,
      thumbTintColor: values[value].color,
      value,
      accessible: false,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no",
    }),
  };
  let items2 = [closure_14(ref1, obj2)];
  let obj3 = {
    maximumValue: values.length - 1,
    minimumTrackTintColor: values[value].color,
    minimumValue: constants.COSMETIC,
    onSlidingComplete: updateLevel,
    style: tmp.slider,
    thumbTintColor: values[value].color,
    value,
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no",
  };
  tmp4 = useIsWindowLargeDefault();
  items2[1] = closure_14(ref1, {
    style: tmp.sliderLabels,
    children: values.map((title, index) => {
      title = title.title;
      closure_0 = index;
      let obj = { style: closure_3.sliderLabel, children: null };
      obj = {
        accessibilityRole: "button",
        accessibilityState: null,
        onPress() {
          const rounded = Math.round(closure_0);
          closure_7(rounded);
          const current = ref1.current;
          if (current != null) {
            const obj = { index: rounded, animated: !closure_1_7.useReducedMotion };
            current.scrollTo(obj);
          }
        },
        children: null,
      };
      obj = { selected: first === index };
      obj.accessibilityState = obj;
      obj.children = closure_1_14(require("Text/Text").Text, { variant: "text-sm/medium", children: title() });
      obj.children = closure_1_14(require("Pressables").PressableOpacity, obj);
      return closure_1_14(ref1, obj, title());
    }),
  });
  obj1.children = items2;
  let items3 = [closure_15(ref1, obj1)];
  let obj5 = {
    style: null,
    children: closure_14(PaginationDefault, {
      ref: ref1,
      data: values,
      renderItem(item) {
        item = item.item;
        const contentPrefaceResult = item.contentPreface();
        let obj = {
          accessible: !item.index !== first && undefined,
          accessibilityElementsHidden: tmp5,
          importantForAccessibility: null,
          style: null,
          children: null,
        };
        let str = "no-hide-descendants";
        if (item.index === first) {
          str = "yes";
        }
        obj.importantForAccessibility = str;
        obj.style = closure_3.cardWrapper;
        obj = { style: closure_3.card, children: null };
        obj = { style: closure_3.templateTitle, variant: "heading-lg/extrabold", children: item.title() };
        let items = [
          closure_1_14(require("Text/Text").Text, obj),
          closure_1_14(require("Text/Text").Text, {
            style: closure_3.templateSubtitle,
            variant: "text-sm/medium",
            children: item.description(),
          }),
        ];
        const obj2 = { style: closure_3.templateContentWrapper, children: null };
        let tmp3Result = null;
        if (null != contentPrefaceResult) {
          tmp3Result = null;
          if ("" !== contentPrefaceResult) {
            const obj3 = { style: tmp7.templateSubtitle, variant: "text-sm/medium", children: item.contentPreface() };
            tmp3Result = tmp3(tmp10(4556).Text, obj3);
          }
        }
        const obj4 = { children: null };
        const items1 = [tmp3Result];
        const obj5 = { accessibilityRole: "list", children: null };
        const obj1 = { style: closure_3.templateSubtitle, variant: "text-sm/medium", children: item.description() };
        const tmp6 = !item.index !== first && undefined;
        const tmp9 = first;
        obj5.children = item.contents().map((children, index) => {
          let obj = { style: closure_3.templateContent, children: null };
          obj = {
            source: _modDef11564,
            size: native.IconSizes.MEDIUM,
            color: nativeDefault.unsafe_rawColors.GREEN_360,
          };
          const items = [closure_3_14(native.Icon, obj)];
          obj = { style: closure_3.templateContentText, variant: "text-sm/medium", children };
          items[1] = closure_3_14(Text_Text.Text, obj);
          obj.children = items;
          return __initData(hasOwnProperty, obj, "" + item.key + "_content_" + index);
        });
        items1[1] = closure_1_14(ref1, obj5);
        obj2.children = items1;
        items[2] = closure_1_15(ref1, obj2);
        obj4.children = items;
        const items2 = [closure_1_15(tmp9, obj4)];
        const obj6 = { style: closure_3.templateButton, children: null };
        const obj7 = { text: null, onPress: null };
        const intl = tmp10(1114).intl;
        obj7.text = intl.string(require("util").t.mQS8Is);
        obj7.onPress = function onPress() {
          const communityPermissions = item.communityPermissions;
          ({ permissions, key } = item);
          const obj = { location_page, template_name: key };
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(dependencyMap));
          obj.track(constants2.ROLE_TEMPLATE_SELECTED, obj);
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
        obj6.children = closure_1_14(require("components/Button/Button").Button, obj7);
        items2[1] = closure_1_14(ref1, obj6);
        obj.children = items2;
        obj.children = closure_1_15(ref1, obj);
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
      },
    }),
  };
  const items4 = [tmp.carousel, { minHeight: rounded }];
  obj5.style = items4;
  items3[1] = closure_14(ref1, obj5);
  obj.children = items3;
  return closure_15(ref1, obj);
}
