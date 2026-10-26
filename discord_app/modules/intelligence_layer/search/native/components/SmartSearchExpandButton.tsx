// discord_app/modules/intelligence_layer/search/native/components/SmartSearchExpandButton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4085 from "../../SmartSearch.messages.js";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8 };
const createStyles = fn(4971);
let closure_10 = createStyles.createStyles((backgroundColor) => {
  const obj = {
    block: { position: "absolute", left: 0, right: 0, bottom: 0, alignItems: "center" },
    pill: {
      height: nativeDefault.space.PX_32,
      paddingHorizontal: nativeDefault.space.PX_16,
      borderRadius: nativeDefault.radii.round,
      borderWidth: 1,
      borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
      backgroundColor,
      alignItems: "center",
      justifyContent: "center",
    },
    surface: null,
  };
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.borderRadius = nativeDefault.radii.round;
  obj3.backgroundColor = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  obj.surface = obj3;
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/intelligence_layer/search/native/components/SmartSearchExpandButton.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SmartSearchExpandButton(arg0) {
        const cResult = onPress(576).c(17);
        ({ isCollapsed, onPress } = arg0);
        const obj = onPress(576);
        const tmp4 = closure_10(onPress(18141).useSearchHostSurfaceColor());
        if (isCollapsed) {
          let ChevronSmallUpIcon = onPress(11079).ChevronSmallDownIcon;
        } else {
          ChevronSmallUpIcon = onPress(14884).ChevronSmallUpIcon;
        }
        if (cResult[0] !== onPress) {
          const fn = function l() {
            const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
            onPress();
          };
          cResult[0] = onPress;
          cResult[1] = fn;
          let tmp5 = fn;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] !== isCollapsed) {
          const intl = onPress(1128).intl;
          const tmp10 = _modDef4085;
          const stringResult = intl.string(isCollapsed ? tmp10.NuTbB9 : tmp10.FKLBbW);
          cResult[2] = isCollapsed;
          cResult[3] = stringResult;
        } else {
          if (cResult[4] !== tmp4.surface) {
            const obj3 = { style: tmp4.surface, pointerEvents: "none" };
            const tmp16 = closure_7(closure_6, obj3);
            cResult[4] = tmp4.surface;
            cResult[5] = tmp16;
            let tmp13 = tmp16;
          } else {
            tmp13 = cResult[5];
          }
          if (cResult[6] !== ChevronSmallUpIcon) {
            const obj4 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
            const tmp20 = closure_7(ChevronSmallUpIcon, obj4);
            cResult[6] = ChevronSmallUpIcon;
            cResult[7] = tmp20;
            let tmp17 = tmp20;
          } else {
            tmp17 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp4.pill) {
              if (cResult[10] === tmp8) {
                if (cResult[11] === tmp13) {
                  if (cResult[12] === tmp17) {
                    let tmp21 = cResult[13];
                  }
                  if (cResult[14] === tmp4.block) {
                    if (cResult[15] === tmp21) {
                      let tmp26 = cResult[16];
                    }
                    return tmp26;
                  }
                  const obj5 = { style: tmp6, hitSlop: rect, children: tmp21 };
                  const tmp30 = closure_7(closure_6, obj5);
                  cResult[14] = tmp4.block;
                  cResult[15] = tmp21;
                  cResult[16] = tmp30;
                  tmp26 = tmp30;
                }
              }
            }
          }
          const obj6 = {
            style: tmp7,
            hitSlop: rect,
            accessibilityRole: "button",
            accessibilityLabel: cResult[3],
            onPress: tmp5,
            children: null,
          };
          const items = [tmp13, tmp17];
          obj6.children = items;
          const tmp25 = closure_8(closure_4, obj6);
          cResult[8] = tmp5;
          cResult[9] = tmp4.pill;
          cResult[10] = cResult[3];
          cResult[11] = tmp13;
          cResult[12] = tmp17;
          cResult[13] = tmp25;
          tmp21 = tmp25;
        }
        const obj2 = onPress(18141);
      }
    : function SmartSearchExpandButton(arg0) {
        ({ isCollapsed, onPress } = arg0);
        const tmp3 = closure_10(onPress(18141).useSearchHostSurfaceColor());
        if (isCollapsed) {
          let ChevronSmallUpIcon = onPress(11079).ChevronSmallDownIcon;
        } else {
          ChevronSmallUpIcon = onPress(14884).ChevronSmallUpIcon;
        }
        const items = [onPress];
        const obj2 = { style: tmp3.block, hitSlop: rect, children: null };
        const obj3 = {
          style: tmp3.pill,
          hitSlop: rect,
          accessibilityRole: "button",
          accessibilityLabel: null,
          onPress: null,
          children: null,
        };
        const callback = noop.useCallback(() => {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          onPress();
        }, items);
        const intl = onPress(1128).intl;
        const tmp10 = _modDef4085;
        if (isCollapsed) {
          let FKLBbW = tmp10.NuTbB9;
          let tmp11 = importDefault;
        } else {
          FKLBbW = tmp10.FKLBbW;
          tmp11 = importDefault;
        }
        obj3.accessibilityLabel = intl.string(FKLBbW);
        obj3.onPress = callback;
        const items1 = [closure_7(closure_6, { style: tmp3.surface, pointerEvents: "none" })];
        const obj = onPress(18141);
        const obj4 = { style: tmp3.surface, pointerEvents: "none" };
        items1[1] = closure_7(ChevronSmallUpIcon, { size: "sm", color: tmp11(587).colors.INTERACTIVE_ICON_DEFAULT });
        obj3.children = items1;
        obj2.children = closure_8(closure_4, obj3);
        return closure_7(closure_6, obj2);
      },
);
