// === Module 17830: GuildSettingsRoleTemplate ===

// Module 17830 (GuildSettingsRoleTemplate)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import Text_Text from "Text/Text" /* 4892 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5777 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6440 */;
import _modDef7963 from "module_7963" /* 7963 */;
import PaginationDefault from "Pagination" /* 10504 */;
import AssetRegistryDefault from "AssetRegistry" /* 11194 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildSettingsRoleConstants from "GuildSettingsRoleConstants" /* 17826 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let onSelect, title, tmp3;

let Dimensions;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Dimensions, ScrollView: metroRequire } = react_native);
({ PermissionTemplateTypes: c9, PermissionTemplates: c10, DEFAULT_TEMPLATE_TYPE: unpackModuleId } = GuildSettingsRoleConstants);
({ AnalyticEvents: closure_12, GuildFeatures: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let width = Dimensions.get("window").width;
let c17 = 300;
let createStyles = createStyles_mod;
let obj = { container: obj2, carousel: { flex: 1 }, cardWrapper: { width: 300, alignSelf: "center", paddingHorizontal: 10, flex: 1 }, card: obj3, templateTitle: { alignItems: "center", textAlign: "center", paddingBottom: 16 }, templateSubtitle: { paddingBottom: 16 }, templateContentWrapper: { flex: 1, justifyContent: "flex-start" }, templateContent: { alignItems: "center", flexDirection: "row", paddingBottom: 8 }, templateContentText: { flex: 1, marginLeft: 12 }, templateButton: { justifyContent: "flex-end", flexGrow: 0, paddingTop: 16 }, sliderContainer: { alignItems: "center" }, slider: { marginTop: 8, width: 300, maxWidth: "72%" }, sliderLabels: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 16, textAlign: "center", width: 380, maxWidth: "85%" }, sliderLabel: { marginHorizontal: 0, width: "25%", textAlign: "center", alignItems: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, borderStyle: "solid", borderWidth: 1, flex: 1, flexDirection: "column", marginVertical: 16, padding: 16, paddingTop: 20 };
let closure_18 = createStyles(obj);
const __initData = { code: "function GuildSettingsRoleTemplateTsx1(value){const{interpolate,sheetWidth,parallaxScrollingOffset,Extrapolation,inactiveOpacity}=this.__closure;const translate=interpolate(value,[-1,0,1],[-sheetWidth+parallaxScrollingOffset,0,sheetWidth-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,sheetWidth,0],Extrapolation.CLAMP));return{transform:[{translateX:translate}],opacity:interpolate(value,[-1,0,1],[inactiveOpacity,1,inactiveOpacity],Extrapolation.CLAMP),zIndex:zIndex};}" };
const __initData2 = { code: "function GuildSettingsRoleTemplateTsx2(value){const{interpolate,sheetWidth,parallaxScrollingOffset,Extrapolation,inactiveOpacity}=this.__closure;const translate=interpolate(value,[-1,0,1],[-sheetWidth+parallaxScrollingOffset,0,sheetWidth-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,sheetWidth,0],Extrapolation.CLAMP));return{transform:[{translateX:translate}],opacity:interpolate(value,[-1,0,1],[inactiveOpacity,1,inactiveOpacity],Extrapolation.CLAMP),zIndex:zIndex};}" };
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((onSelect) => {
  let bound;
  let closure_3;
  let closure_6;
  let closure_7;
  let closure_9;
  let guildId;
  let height;
  let items;
  let ref;
  let sheetWidth;
  let tmp = onSelect;
  let tmp2 = guildId;
  let obj = onSelect(guildId[11]);
  const cResult = obj.c(83);
  onSelect = onSelect.onSelect;
  const location = onSelect.location;
  guildId = onSelect.guildId;
  _slicedToArray = closure_18();
  const tmp4 = closure_18();
  const tmp5 = location(guildId[12])();
  const tmp6 = location(guildId[13])();
  ({ width, height } = tmp6);
  let obj2 = ref;
  ref = ref.useRef(null);
  const ref1 = ref.useRef(null);
  [closure_6, closure_7] = ref.useState(bound);
  [sheetWidth, closure_9] = ref.useState(width);
  let obj3 = onSelect(guildId[14]);
  let num = 0.7;
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  if (tmp5) {
    num = 0.3;
  }
  bound = Math.max(sheetWidth - c17, 0);
  if (cResult[0] !== height) {
    const _Math = Math;
    let rounded = Math.round(0.45 * height);
    cResult[0] = height;
    cResult[1] = rounded;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        current = closure_4.current;
        width = undefined;
        if (current != null) {
          width = current.getBoundingClientRect().width;
        }
        tmp2 = null != width;
        if (tmp2) {
          num = 0;
          tmp2 = width > 0;
        }
        if (tmp2) {
          tmp3 = closure_9;
          tmp4 = closure_9((arg0) => {
            let tmp = arg0;
            if (arg0 !== width) {
              tmp = width;
            }
            return tmp;
          });
        }
        return;
      }
    }
    cResult[2] = K;
  } else {
    class K {
      constructor() {
        current = closure_4.current;
        width = undefined;
        if (current != null) {
          width = current.getBoundingClientRect().width;
        }
        tmp2 = null != width;
        if (tmp2) {
          num = 0;
          tmp2 = width > 0;
        }
        if (tmp2) {
          tmp3 = closure_9;
          tmp4 = closure_9((arg0) => {
            let tmp = arg0;
            if (arg0 !== width) {
              tmp = width;
            }
            return tmp;
          });
        }
        return;
      }
    }
  }
  if (cResult[3] === height) {
    class K {
      constructor() {
        current = closure_4.current;
        width = undefined;
        if (current != null) {
          width = current.getBoundingClientRect().width;
        }
        tmp2 = null != width;
        if (tmp2) {
          num = 0;
          tmp2 = width > 0;
        }
        if (tmp2) {
          tmp3 = closure_9;
          tmp4 = closure_9((arg0) => {
            let tmp = arg0;
            if (arg0 !== width) {
              tmp = width;
            }
            return tmp;
          });
        }
        return;
      }
    }
    const layoutEffect = obj2.useLayoutEffect(K, items);
    if (cResult[6] === num) {
      class K {
        constructor() {
          current = closure_4.current;
          width = undefined;
          if (current != null) {
            width = current.getBoundingClientRect().width;
          }
          tmp2 = null != width;
          if (tmp2) {
            num = 0;
            tmp2 = width > 0;
          }
          if (tmp2) {
            tmp3 = closure_9;
            tmp4 = closure_9((arg0) => {
              let tmp = arg0;
              if (arg0 !== width) {
                tmp = width;
              }
              return tmp;
            });
          }
          return;
        }
      }
    }
    const fn = function q(arg0) {
      let items2;
      let items3;
      let obj4;
      let roundResult;
      const items = [-first + bound, 0, first - bound];
      const obj = ReanimatedRexport;
      const items1 = [0, first, 0];
      const interpolateResult = obj.interpolate(arg0, [-1, 0, 1], items);
      const obj3 = { transform: items2, opacity: obj4.interpolate(arg0, [-1, 0, 1], items3, ReanimatedRexport.Extrapolation.CLAMP), zIndex: roundResult };
      items2 = [{ translateX: interpolateResult }];
      const obj2 = ReanimatedRexport;
      items3 = [num, 1, num];
      roundResult = round(obj2.interpolate(arg0, [-1, 0, 1], items1, ReanimatedRexport.Extrapolation.CLAMP));
      obj4 = ReanimatedRexport;
      return obj3;
    };
    let obj4 = { interpolate: tmp(tmp2[15]).interpolate, sheetWidth, parallaxScrollingOffset: bound, Extrapolation: tmp(tmp2[15]).Extrapolation, inactiveOpacity: num };
    fn.__closure = obj4;
    fn.__workletHash = 1786335394860;
    fn.__initData = __initData;
    cResult[6] = num;
    cResult[7] = bound;
    cResult[8] = sheetWidth;
    cResult[9] = fn;
  }
  items = [width, height];
  cResult[3] = height;
  cResult[4] = width;
  cResult[5] = items;
}) : ((arg0) => {
  let closure_3;
  let closure_7;
  let closure_9;
  let first1;
  let items2;
  let items3;
  let items4;
  let location_page;
  let obj10;
  let obj7;
  let require;
  let value;
  ({ onSelect: require, location: importDefault, guildId: dependencyMap } = arg0);
  let ref;
  value = undefined;
  closure_7 = undefined;
  first1 = undefined;
  closure_9 = undefined;
  let bound;
  let tmp = closure_18();
  _slicedToArray = tmp;
  const tmp4 = useIsWindowLargeDefault();
  size = useWindowDimensionsDefault();
  const height = size.height;
  let obj = ref;
  width = size.width;
  ref = ref.useRef(null);
  const ref1 = ref.useRef(null);
  [value, closure_7] = ref.useState(bound);
  [first1, closure_9] = ref.useState(width);
  let obj2 = useIsScreenReaderEnabled;
  let num = 0.7;
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
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
  bound = Math.max(first1 - c17, 0);
  let items = [width, height];
  let rounded = Math.round(0.45 * height);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    width = undefined;
    if (current != null) {
      width = current.getBoundingClientRect().width;
    }
    const tmp2 = null != width && width > 0;
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
  class X {
    constructor(arg0) {
      let items2;
      let items3;
      let obj4;
      let roundResult;
      const items = [-first1 + bound, 0, first1 - bound];
      const obj = ReanimatedRexport;
      const items1 = [0, first1, 0];
      const interpolateResult = obj.interpolate(arg0, [-1, 0, 1], items);
      const obj3 = { transform: items2, opacity: obj4.interpolate(arg0, [-1, 0, 1], items3, ReanimatedRexport.Extrapolation.CLAMP), zIndex: roundResult };
      items2 = [{ translateX: interpolateResult }];
      const obj2 = ReanimatedRexport;
      items3 = [num, 1, num];
      roundResult = round(obj2.interpolate(arg0, [-1, 0, 1], items1, ReanimatedRexport.Extrapolation.CLAMP));
      obj4 = ReanimatedRexport;
      return obj3;
    }
  }
  let obj3 = { interpolate: ReanimatedRexport.interpolate, sheetWidth: first1, parallaxScrollingOffset: bound, Extrapolation: ReanimatedRexport.Extrapolation, inactiveOpacity: num };
  X.__closure = obj3;
  X.__workletHash = 989185039823;
  X.__initData = __initData2;
  let items1 = [first1, bound, num];
  const callback = obj.useCallback(X, items1);
  const values = Object.values(num);
  let obj4 = { ref, style: tmp.container, children: items3 };
  let obj5 = { style: tmp.sliderContainer, children: items2 };
  let obj6 = { accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_14(_modDef7963, obj7) };
  obj7 = { maximumValue: values.length - 1, minimumTrackTintColor: values[value].color, minimumValue: closure_9.COSMETIC, onSlidingComplete: updateLevel, style: tmp.slider, thumbTintColor: values[value].color, value, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" };
  items2 = [closure_14(ref1, obj6), ];
  let obj8 = {
    style: tmp.sliderLabels,
    children: values.map((title, index) => {
      let PressableOpacity;
      let Text;
      let obj2;
      let obj3;
      let obj4;
      title = title.title;
      const require = index;
      let obj = { style: closure_3.sliderLabel, children: closure_1_14(PressableOpacity, obj2) };
      obj2 = {
        accessibilityRole: "button",
        accessibilityState: obj3,
        onPress() {
          const rounded = Math.round(index);
          closure_7(rounded);
          const current = ref1.current;
          if (current != null) {
            const obj = { index: rounded, animated: !closure_1_7.useReducedMotion };
            current.scrollTo(obj);
          }
        },
        children: closure_1_14(Text, obj4)
      };
      obj3 = { selected: first === index };
      PressableOpacity = require("Pressables").PressableOpacity;
      obj4 = { variant: "text-sm/medium", children: title() };
      Text = require("Text/Text").Text;
      return closure_1_14(ref1, obj, title());
    })
  };
  items2[1] = closure_14(ref1, obj8);
  items3 = [closure_15(ref1, obj5), ];
  let obj9 = { style: items4, children: closure_14(PaginationDefault, obj10) };
  items4 = [tmp.carousel, { minHeight: rounded }];
  obj10 = {
    ref: ref1,
    data: values,
    renderItem(item) {
      let Button;
      let contentsResult;
      let intl;
      let items1;
      let items2;
      let obj10;
      let obj2;
      let str;
      item = item.item;
      const tmp = item.index === first;
      const contentPrefaceResult = item.contentPreface();
      let obj = { accessible: !(!tmp) && undefined, accessibilityElementsHidden: tmp5, importantForAccessibility: str, style: closure_3.cardWrapper, children: closure_1_15(ref1, obj2) };
      str = "no-hide-descendants";
      if (tmp) {
        str = "yes";
      }
      obj2 = { style: closure_3.card, children: items2 };
      let obj3 = { style: closure_3.templateTitle, variant: "heading-lg/extrabold", children: item.title() };
      const Text = require("Text/Text").Text;
      let items = [closure_1_14(Text, obj3), , ];
      const obj4 = { style: closure_3.templateSubtitle, variant: "text-sm/medium", children: item.description() };
      const Text2 = require("Text/Text").Text;
      items[1] = closure_1_14(Text2, obj4);
      let tmp3Result = null;
      const obj5 = { style: closure_3.templateContentWrapper, children: items1 };
      if (null != contentPrefaceResult) {
        tmp3Result = null;
        if ("" !== contentPrefaceResult) {
          const obj6 = { style: closure_3.templateSubtitle, variant: "text-sm/medium", children: item.contentPreface() };
          const Text3 = require("Text/Text").Text;
          tmp3Result = closure_1_14(Text3, obj6);
        }
      }
      items1 = [tmp3Result, ];
      const obj7 = { children: items };
      const obj8 = {
        accessibilityRole: "list",
        children: contentsResult.map((children, index) => {
          let items;
          const obj = { style: closure_3.templateContent, children: items };
          const obj2 = { source: AssetRegistryDefault, size: native.IconSizes.MEDIUM, color: nativeDefault.unsafe_rawColors.GREEN_360 };
          const Icon = native.Icon;
          items = [authStore2(Icon, obj2), ];
          const obj3 = { style: closure_3.templateContentText, variant: "text-sm/medium", children };
          items[1] = authStore2(Text_Text.Text, obj3);
          return closure_15(hasOwnProperty, obj, "" + item.key + "_content_" + index);
        })
      };
      contentsResult = item.contents();
      items1[1] = closure_1_14(ref1, obj8);
      items[2] = closure_1_15(ref1, obj5);
      items2 = [closure_1_15(first, obj7), ];
      const obj9 = { style: closure_3.templateButton, children: closure_1_14(Button, obj10) };
      obj10 = {
        text: intl.string(require("intl").t.mQS8Is),
        onPress() {
          let key;
          let permissions;
          const communityPermissions = item.communityPermissions;
          ({ permissions, key } = item);
          const track = AnalyticsUtilsDefault.track;
          const ROLE_TEMPLATE_SELECTED = constants.ROLE_TEMPLATE_SELECTED;
          const obj = { location_page: importDefault, template_name: key };
          AnalyticsUtilsDefault;
          const obj2 = AppAnalyticsUtils;
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(dependencyMap));
          track(ROLE_TEMPLATE_SELECTED, obj);
          const guild = GuildStore.getGuild(dependencyMap);
          if (null != guild) {
            const features = guild.features;
            if (features.has(map1.COMMUNITY)) {
              if (null != communityPermissions) {
                _require(communityPermissions);
              }
            }
            _require(permissions);
          }
        }
      };
      Button = require("components/Button/Button").Button;
      intl = require("intl").intl;
      items2[1] = closure_1_14(ref1, obj9);
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
  };
  items3[1] = closure_14(ref1, obj9);
  return closure_15(ref1, obj4);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx");

export default tmp7;