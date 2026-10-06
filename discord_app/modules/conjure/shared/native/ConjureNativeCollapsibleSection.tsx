// discord_app/modules/conjure/shared/native/ConjureNativeCollapsibleSection.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ChevronSmallRightIcon2 from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import ChevronSmallDownIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: obj2, header: obj3, headerTrailing: obj4 };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let accessibilityLiveRegion;
      let children;
      const obj = react2;
      const cResult = obj.c(4);
      ({ children, accessibilityLabel, accessibilityLiveRegion } = arg0);
      if (cResult[0] === accessibilityLabel) {
        if (cResult[1] === accessibilityLiveRegion) {
          let tmp4;
          if (cResult[2] === children) {
            tmp4 = cResult[3];
          }
          return tmp4;
        }
      }
      const tmp5 = React3(Text_Text.Text, {
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
      let accessibilityLabel;
      let accessibilityLiveRegion;
      let children;
      ({ children, accessibilityLabel, accessibilityLiveRegion } = arg0);
      return React3(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        accessibilityLabel,
        accessibilityLiveRegion,
        children,
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let ChevronSmallRightIcon;
      let expanded;
      let hideLabel;
      let items;
      let items1;
      let items2;
      let meta;
      let obj7;
      let obj8;
      let onToggleExpanded;
      let showHeader;
      let showLabel;
      let superseded;
      let title;
      let tmp14;
      const obj = react2;
      const cResult = obj.c(16);
      ({ title, meta, showHeader, superseded, expanded, onToggleExpanded, showLabel, hideLabel } = children);
      let tmp4 = undefined === showHeader;
      children = children.children;
      if (!tmp4) {
        tmp4 = showHeader;
      }
      const tmp7 = closure_6();
      if (undefined === expanded || expanded) {
        ChevronSmallRightIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
      } else {
        ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
      }
      if (cResult[0] === ChevronSmallRightIcon) {
        if (cResult[1] === (undefined === expanded || expanded)) {
          if (cResult[2] === hideLabel) {
            if (cResult[3] === meta) {
              if (cResult[4] === onToggleExpanded) {
                if (cResult[5] === tmp4) {
                  if (cResult[6] === showLabel) {
                    if (cResult[7] === tmp7.header) {
                      if (cResult[8] === tmp7.headerTrailing) {
                        if (cResult[9] === (undefined !== superseded && superseded)) {
                          let tmp8;
                          if (cResult[10] === title) {
                            tmp8 = cResult[11];
                          }
                          let tmp16 = null;
                          if (undefined === expanded || expanded) {
                            tmp16 = children;
                          }
                          if (cResult[12] === tmp7.root) {
                            if (cResult[13] === tmp8) {
                              let tmp17;
                              if (cResult[14] === tmp16) {
                                tmp17 = cResult[15];
                              }
                              return tmp17;
                            }
                          }
                          const obj2 = { style: tmp7.root, children: items };
                          items = [tmp8, tmp16];
                          const tmp20 = hasOwnProperty(View, obj2);
                          cResult[12] = tmp7.root;
                          cResult[13] = tmp8;
                          cResult[14] = tmp16;
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
        const obj3 = { style: tmp7.header, children: items1 };
        const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: title };
        items1 = [React3(Text_Text.Text, obj4)];
        const obj5 = { style: tmp7.headerTrailing, children: items2 };
        items2 = [meta];
        let tmp12Result = null;
        if (undefined !== superseded && superseded) {
          tmp12Result = null;
          if (null != onToggleExpanded) {
            const obj6 = {
              accessibilityRole: "button",
              accessibilityState: obj7,
              accessibilityLabel: tmp14,
              hitSlop: 8,
              onPress: onToggleExpanded,
              children: React3(ChevronSmallRightIcon, obj8),
            };
            tmp14 = showLabel;
            obj7 = { expanded: undefined === expanded || expanded };
            const PressableOpacity = Pressables.PressableOpacity;
            if (undefined === expanded || expanded) {
              tmp14 = hideLabel;
            }
            obj8 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
            tmp12Result = React3(PressableOpacity, obj6);
          }
        }
        items2[1] = tmp12Result;
        items1[1] = hasOwnProperty(View, obj5);
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
      let ChevronSmallRightIcon;
      let children;
      let hideLabel;
      let items;
      let items1;
      let items2;
      let meta;
      let obj6;
      let obj7;
      let onToggleExpanded;
      let showLabel;
      let title;
      let tmp4;
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
        ChevronSmallRightIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
        tmp4 = require;
      } else {
        ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
        tmp4 = require;
      }
      let tmp6Result = null;
      const obj = { style: tmp.root, children: items2 };
      if (flag) {
        const obj2 = { style: tmp.header, children: items };
        const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: title };
        items = [React3(tmp4(4892).Text, obj3)];
        const obj4 = { style: tmp.headerTrailing, children: items1 };
        items1 = [meta];
        let tmp9Result = null;
        if (flag2) {
          tmp9Result = null;
          if (null != onToggleExpanded) {
            const obj5 = {
              accessibilityRole: "button",
              accessibilityState: obj6,
              accessibilityLabel: showLabel,
              hitSlop: 8,
              onPress: onToggleExpanded,
              children: React3(ChevronSmallRightIcon, obj7),
            };
            obj6 = { expanded: flag3 };
            const PressableOpacity = tmp4(5916).PressableOpacity;
            if (flag3) {
              showLabel = hideLabel;
            }
            obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
            tmp9Result = React3(PressableOpacity, obj5);
          }
        }
        items1[1] = tmp9Result;
        items[1] = hasOwnProperty(View, obj4);
        tmp6Result = hasOwnProperty(View, obj2);
      }
      items2 = [tmp6Result];
      let tmp12 = null;
      if (flag3) {
        tmp12 = children;
      }
      items2[1] = tmp12;
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCollapsibleSection.tsx");

export default tmp6;
export const ConjureNativeCollapsibleMeta = tmp5;
