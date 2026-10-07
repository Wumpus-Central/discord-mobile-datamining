// discord_app/modules/conjure/shared/native/ConjureNativeCollapsibleSection.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ChevronSmallRightIcon2 from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import ChevronSmallDownIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = { root: { gap: nativeDefault.space.PX_8 }, header: null, headerTrailing: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.header = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
obj2.headerTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj2);
fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(4);
      ({ children, accessibilityLabel, accessibilityLiveRegion } = arg0);
      if (cResult[0] === accessibilityLabel) {
        if (cResult[1] === accessibilityLiveRegion) {
          if (cResult[2] === children) {
            let tmp4 = cResult[3];
          }
          return tmp4;
        }
      }
      const tmp5 = React4(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        accessibilityLabel,
        accessibilityLiveRegion,
        children,
      });
      cResult[0] = accessibilityLabel;
      cResult[1] = accessibilityLiveRegion;
      cResult[2] = children;
      cResult[3] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      ({ children, accessibilityLabel, accessibilityLiveRegion } = arg0);
      return React4(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        accessibilityLabel,
        accessibilityLiveRegion,
        children,
      });
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCollapsibleSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(16);
      ({ title, meta, showHeader, superseded, expanded, onToggleExpanded, showLabel, hideLabel } = children);
      let tmp4 = undefined === showHeader;
      if (!tmp4) {
        tmp4 = showHeader;
      }
      const tmp7 = closure_6();
      if (undefined === expanded || expanded) {
        let ChevronSmallRightIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
      } else {
        ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
      }
      if (cResult[0] === ChevronSmallRightIcon) {
        if (cResult[1] === tmp6) {
          if (cResult[2] === hideLabel) {
            if (cResult[3] === meta) {
              if (cResult[4] === onToggleExpanded) {
                if (cResult[5] === tmp4) {
                  if (cResult[6] === showLabel) {
                    if (cResult[7] === tmp7.header) {
                      if (cResult[8] === tmp7.headerTrailing) {
                        if (cResult[9] === tmp5) {
                          if (cResult[10] === title) {
                            let tmp8 = cResult[11];
                          }
                          children = null;
                          if (tmp6) {
                            children = children.children;
                          }
                          if (cResult[12] === tmp7.root) {
                            if (cResult[13] === tmp8) {
                              if (cResult[14] === children) {
                                let tmp17 = cResult[15];
                              }
                              return tmp17;
                            }
                          }
                          const obj2 = { style: tmp7.root, children: null };
                          const items = [tmp8, children];
                          obj2.children = items;
                          const tmp20 = hasOwnProperty(View, obj2);
                          cResult[12] = tmp7.root;
                          cResult[13] = tmp8;
                          cResult[14] = children;
                          cResult[15] = tmp20;
                          tmp17 = tmp20;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let tmp10Result = null;
      if (tmp4) {
        const obj3 = { style: tmp7.header, children: null };
        const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: title };
        const items1 = [React4(Text_Text.Text, obj4)];
        const obj5 = { style: tmp7.headerTrailing, children: null };
        const items2 = [meta];
        let tmp12Result = null;
        if (tmp5) {
          tmp12Result = null;
          if (null != onToggleExpanded) {
            const obj6 = {
              accessibilityRole: "button",
              accessibilityState: null,
              accessibilityLabel: null,
              hitSlop: 8,
              onPress: null,
              children: null,
            };
            const obj7 = { expanded: tmp6 };
            obj6.accessibilityState = obj7;
            let tmp14 = showLabel;
            if (tmp6) {
              tmp14 = hideLabel;
            }
            obj6.accessibilityLabel = tmp14;
            obj6.onPress = onToggleExpanded;
            const obj8 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
            obj6.children = React4(ChevronSmallRightIcon, obj8);
            tmp12Result = React4(Pressables.PressableOpacity, obj6);
          }
        }
        items2[1] = tmp12Result;
        obj5.children = items2;
        items1[1] = hasOwnProperty(View, obj5);
        obj3.children = items1;
        tmp10Result = hasOwnProperty(View, obj3);
      }
      cResult[0] = ChevronSmallRightIcon;
      cResult[1] = undefined === expanded || expanded;
      cResult[2] = hideLabel;
      cResult[3] = meta;
      cResult[4] = onToggleExpanded;
      cResult[5] = tmp4;
      cResult[6] = showLabel;
      cResult[7] = tmp7.header;
      cResult[8] = tmp7.headerTrailing;
      cResult[9] = undefined !== superseded && superseded;
      cResult[10] = title;
      cResult[11] = tmp10Result;
      tmp8 = tmp10Result;
    }
  : (showHeader) => {
      let flag = showHeader.showHeader;
      ({ title, meta } = showHeader);
      if (flag === undefined) {
        flag = true;
      }
      let flag2 = showHeader.superseded;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let flag3 = showHeader.expanded;
      if (flag3 === undefined) {
        flag3 = true;
      }
      ({ onToggleExpanded, showLabel } = showHeader);
      ({ hideLabel, children } = showHeader);
      const tmp = closure_6();
      if (flag3) {
        let ChevronSmallRightIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
        let tmp4 = require;
      } else {
        ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
        tmp4 = require;
      }
      const obj = { style: tmp.root, children: null };
      let tmp6Result = null;
      if (flag) {
        const obj2 = { style: tmp.header, children: null };
        const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: title };
        const items = [React4(tmp4(4892).Text, obj3)];
        const obj4 = { style: tmp.headerTrailing, children: null };
        const items1 = [meta];
        let tmp9Result = null;
        if (flag2) {
          tmp9Result = null;
          if (null != onToggleExpanded) {
            const obj5 = {
              accessibilityRole: "button",
              accessibilityState: null,
              accessibilityLabel: null,
              hitSlop: 8,
              onPress: null,
              children: null,
            };
            const obj6 = { expanded: flag3 };
            obj5.accessibilityState = obj6;
            if (flag3) {
              showLabel = hideLabel;
            }
            obj5.accessibilityLabel = showLabel;
            obj5.onPress = onToggleExpanded;
            const obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
            obj5.children = React4(ChevronSmallRightIcon, obj7);
            tmp9Result = React4(tmp4(5916).PressableOpacity, obj5);
          }
        }
        items1[1] = tmp9Result;
        obj4.children = items1;
        items[1] = hasOwnProperty(View, obj4);
        obj2.children = items;
        tmp6Result = hasOwnProperty(View, obj2);
      }
      const items2 = [tmp6Result];
      let tmp12 = null;
      if (flag3) {
        tmp12 = children;
      }
      items2[1] = tmp12;
      obj.children = items2;
      return hasOwnProperty(View, obj);
    };
export const ConjureNativeCollapsibleMeta = tmp4;
