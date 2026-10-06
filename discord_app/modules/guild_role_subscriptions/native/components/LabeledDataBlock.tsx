// === Module 15053: LabeledDataBlock ===

// Module 15053 (LabeledDataBlock)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles from "TextStyles" /* 5922 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: { marginRight: 4 }, data: obj3, titleSection: { flexDirection: "row", alignItems: "center", marginBottom: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, flexBasis: "auto", flexGrow: 1, padding: 16 };
createStyles = createStyles.createStyles;
obj3 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
let closure_5 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Icon;
  let children;
  let icon;
  let items;
  let items1;
  let obj6;
  let onPressIcon;
  let style;
  let title;
  const obj = react2;
  const cResult = obj.c(20);
  ({ children, title, style, icon, onPressIcon } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === style) {
    let tmp5;
    if (cResult[1] === tmp4.container) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.title) {
      let tmp6;
      if (cResult[4] === title) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === icon) {
        let tmp9;
        if (cResult[7] === onPressIcon) {
          tmp9 = cResult[8];
        }
        if (cResult[9] === tmp4.titleSection) {
          if (cResult[10] === tmp6) {
            let tmp13;
            if (cResult[11] === tmp9) {
              tmp13 = cResult[12];
            }
            if (cResult[13] === children) {
              let tmp17;
              if (cResult[14] === tmp4.data) {
                tmp17 = cResult[15];
              }
              if (cResult[16] === tmp5) {
                if (cResult[17] === tmp13) {
                  let tmp19;
                  if (cResult[18] === tmp17) {
                    tmp19 = cResult[19];
                  }
                  return tmp19;
                }
              }
              const obj2 = { style: tmp5, children: items };
              items = [tmp13, tmp17];
              const tmp22 = React3(View, obj2);
              cResult[16] = tmp5;
              cResult[17] = tmp13;
              cResult[18] = tmp17;
              cResult[19] = tmp22;
              tmp19 = tmp22;
            }
            let tmp18 = children;
            if (typeof children === "string") {
              const obj3 = { style: tmp4.data, children };
              tmp18 = _false(native.LegacyText, obj3);
            }
            cResult[13] = children;
            cResult[14] = tmp4.data;
            cResult[15] = tmp18;
            tmp17 = tmp18;
          }
        }
        const obj4 = { style: tmp4.titleSection, children: items1 };
        items1 = [tmp6, tmp9];
        const tmp16 = React3(View, obj4);
        cResult[9] = tmp4.titleSection;
        cResult[10] = tmp6;
        cResult[11] = tmp9;
        cResult[12] = tmp16;
        tmp13 = tmp16;
      }
      let tmp11 = null != icon;
      if (tmp11) {
        const obj5 = { accessibilityRole: "button", onPress: onPressIcon, children: _false(Icon, obj6) };
        const PressableOpacity = Pressables.PressableOpacity;
        obj6 = { size: native.Icon.Sizes.SMALL, source: icon };
        Icon = native.Icon;
        tmp11 = _false(PressableOpacity, obj5);
      }
      cResult[6] = icon;
      cResult[7] = onPressIcon;
      cResult[8] = tmp11;
      tmp9 = tmp11;
    }
    const obj7 = { style: tmp4.title, accessibilityRole: "header", variant: "text-sm/medium", color: "interactive-text-default", children: title };
    const tmp8 = _false(Text_Text.Text, obj7);
    cResult[3] = tmp4.title;
    cResult[4] = title;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items2 = [tmp4.container, style];
  cResult[0] = style;
  cResult[1] = tmp4.container;
  cResult[2] = items2;
  tmp5 = items2;
}) : ((arg0) => {
  let Icon;
  let children;
  let icon;
  let items;
  let items1;
  let items2;
  let obj5;
  let onPressIcon;
  let style;
  let title;
  ({ children, icon } = arg0);
  ({ title, style, onPressIcon } = arg0);
  const tmp = closure_5();
  const obj = { style: items, children: items2 };
  items = [tmp.container, style];
  const obj2 = { style: tmp.titleSection, children: items1 };
  items1 = [, ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", color: "interactive-text-default", children: title };
  items1[0] = _false(Text_Text.Text, obj3);
  let tmp4Result = null != icon;
  if (tmp4Result) {
    const obj4 = { accessibilityRole: "button", onPress: onPressIcon, children: _false(Icon, obj5) };
    const PressableOpacity = Pressables.PressableOpacity;
    obj5 = { size: native.Icon.Sizes.SMALL, source: icon };
    Icon = native.Icon;
    tmp4Result = _false(PressableOpacity, obj4);
  }
  items1[1] = tmp4Result;
  items2 = [React3(View, obj2), ];
  let tmp4Result2 = children;
  if (typeof children === "string") {
    const obj6 = { style: tmp.data, children };
    tmp4Result2 = _false(native.LegacyText, obj6);
  }
  items2[1] = tmp4Result2;
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx");

export default tmp7;