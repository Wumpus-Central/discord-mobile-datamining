// discord_app/modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ArrowLargeLeftIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import SearchField from "../../../../design/components/TextField/native/SearchField.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["onClose"];
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: fn(6075).NAV_BAR_HEIGHT,
    paddingHorizontal: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: nativeDefault.colors.BORDER_STRONG,
  },
  cancelText: null,
  cancelIcon: null,
  flex: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  height: fn(6075).NAV_BAR_HEIGHT,
  paddingHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: nativeDefault.colors.BORDER_STRONG,
};
obj.cancelText = { paddingLeft: nativeDefault.space.PX_16 };
let obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj.cancelIcon = { marginRight: nativeDefault.space.PX_16 };
obj.flex = { flex: 1 };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj5 = { marginRight: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx");

export default noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onClose, ref) => {
        const cResult = c.c(26);
        if (cResult[0] !== onClose) {
          onClose = onClose.onClose;
          const tmp8 = _objectWithoutProperties(onClose, closure_2);
          cResult[0] = onClose;
          cResult[1] = onClose;
          cResult[2] = tmp8;
          let tmp5 = tmp8;
          let tmp4 = onClose;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
        }
        const tmp9 = closure_7();
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["ETE/oC"]);
          cResult[3] = stringResult;
          let tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const rect = { top: 8, right: 8, bottom: 8, left: 8 };
          cResult[4] = rect;
          let tmp12 = rect;
        } else {
          tmp12 = cResult[4];
        }
        if (cResult[5] === tmp9.cancelIcon) {
          if (cResult[6] === tmp9.cancelText) {
            if (cResult[8] === tmp4) {
              if (cResult[9] === tmp13) {
                let tmp16 = cResult[10];
              }
              if (cResult[11] !== tmp16) {
                let tmp20 = null;
                if (tmpResult.isAndroid()) {
                  tmp20 = tmp16;
                }
                cResult[11] = tmp16;
                cResult[12] = tmp20;
                let tmp19 = tmp20;
                tmpResult = PlatformUtils;
              } else {
                tmp19 = cResult[12];
              }
              if (cResult[13] === tmp5) {
                if (cResult[14] === ref) {
                  let tmp22 = cResult[15];
                }
                if (cResult[16] === tmp9.flex) {
                  if (cResult[17] === tmp22) {
                    let tmp29 = cResult[18];
                  }
                  if (cResult[19] !== tmp16) {
                    let tmp34 = null;
                    if (!tmpResult3.isAndroid()) {
                      tmp34 = tmp16;
                    }
                    cResult[19] = tmp16;
                    cResult[20] = tmp34;
                    let tmp33 = tmp34;
                    tmpResult3 = PlatformUtils;
                  } else {
                    tmp33 = cResult[20];
                  }
                  if (cResult[21] === tmp9.container) {
                    if (cResult[22] === tmp19) {
                      if (cResult[23] === tmp29) {
                        if (cResult[24] === tmp33) {
                          let tmp35 = cResult[25];
                        }
                        return tmp35;
                      }
                    }
                  }
                  const obj2 = { style: tmp9.container, children: null };
                  const items = [tmp19, tmp29, tmp33];
                  obj2.children = items;
                  const tmp38 = timestampProducer(React4, obj2);
                  cResult[21] = tmp9.container;
                  cResult[22] = tmp19;
                  cResult[23] = tmp29;
                  cResult[24] = tmp33;
                  cResult[25] = tmp38;
                  tmp35 = tmp38;
                }
                const obj3 = { style: tmp9.flex, children: tmp22 };
                const tmp32 = hasOwnProperty(React4, obj3);
                cResult[16] = tmp9.flex;
                cResult[17] = tmp22;
                cResult[18] = tmp32;
                tmp29 = tmp32;
              }
              const obj4 = { children: null };
              const obj5 = { size: "md", round: true, ref };
              const merged = Object.assign(tmp5);
              obj4.children = hasOwnProperty(SearchField.SearchField, obj5);
              const tmp28 = hasOwnProperty(React4, obj4);
              cResult[13] = tmp5;
              cResult[14] = ref;
              cResult[15] = tmp28;
              tmp22 = tmp28;
            }
            const obj6 = {
              accessibilityRole: "button",
              accessibilityLabel: tmp10,
              onPress: tmp4,
              hitSlop: tmp12,
              children: cResult[7],
            };
            const tmp18 = hasOwnProperty(Pressables.PressableOpacity, obj6);
            cResult[8] = tmp4;
            cResult[9] = cResult[7];
            cResult[10] = tmp18;
            tmp16 = tmp18;
          }
        }
        if (tmpResult4.isAndroid()) {
          const obj7 = { style: tmp9.cancelIcon };
          let tmp14Result = hasOwnProperty(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj7);
        } else {
          const obj8 = {
            style: tmp9.cancelText,
            maxFontSizeMultiplier: 2,
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: null,
          };
          const intl2 = util.intl;
          obj8.children = intl2.string(util.t["ETE/oC"]);
          tmp14Result = hasOwnProperty(Text_Text.Text, obj8);
        }
        cResult[5] = tmp9.cancelIcon;
        cResult[6] = tmp9.cancelText;
        cResult[7] = tmp14Result;
        tmpResult4 = PlatformUtils;
      }
    : (onClose, ref) => {
        const merged = Object.assign(onClose, Object.assign({ onClose: 0 }));
        const tmp2 = closure_7();
        const obj = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          onPress: null,
          hitSlop: null,
          children: null,
        };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(util.t["ETE/oC"]);
        obj.onPress = onClose.onClose;
        obj.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
        if (obj2.isAndroid()) {
          const obj3 = { style: tmp2.cancelIcon };
          let tmp3Result = hasOwnProperty(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj3);
        } else {
          const obj4 = {
            style: tmp2.cancelText,
            maxFontSizeMultiplier: 2,
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: null,
          };
          const intl2 = util.intl;
          obj4.children = intl2.string(util.t["ETE/oC"]);
          tmp3Result = hasOwnProperty(Text_Text.Text, obj4);
        }
        obj.children = tmp3Result;
        const tmp3Result2 = hasOwnProperty(Pressables.PressableOpacity, obj);
        const obj5 = { style: tmp2.container, children: null };
        obj2 = PlatformUtils;
        let tmp10 = null;
        if (tmp4Result.isAndroid()) {
          tmp10 = tmp3Result2;
        }
        const items = [tmp10, ,];
        const obj6 = { style: tmp2.flex, children: null };
        const obj7 = { children: null };
        const merged1 = Object.assign(merged);
        obj7.children = hasOwnProperty(SearchField.SearchField, { size: "md", round: true, ref });
        obj6.children = hasOwnProperty(React4, obj7);
        items[1] = hasOwnProperty(React4, obj6);
        const obj8 = { size: "md", round: true, ref };
        tmp4Result = PlatformUtils;
        let tmp12 = null;
        if (!tmp4Result2.isAndroid()) {
          tmp12 = tmp3Result2;
        }
        items[2] = tmp12;
        obj5.children = items;
        return timestampProducer(React4, obj5);
      },
);
