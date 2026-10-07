// === Module 15053: LabeledDataBlock ===

// Module 15053 (LabeledDataBlock)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5922 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, flexBasis: "auto", flexGrow: 1, padding: 16 }, title: { marginRight: 4 }, data: null, titleSection: null };
const merged = Object.assign(TextStyles(fn(1085).Fonts.PRIMARY_MEDIUM, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj2.data = {};
obj2.titleSection = { flexDirection: "row", alignItems: "center", marginBottom: 16 };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, flexBasis: "auto", flexGrow: 1, padding: 16 };
let obj4 = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  ({ children, title, style, icon, onPressIcon } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.container) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.title) {
      if (cResult[4] === title) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === icon) {
        if (cResult[7] === onPressIcon) {
          let tmp9 = cResult[8];
        }
        if (cResult[9] === tmp4.titleSection) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp9) {
              let tmp13 = cResult[12];
            }
            if (cResult[13] === children) {
              if (cResult[14] === tmp4.data) {
                let tmp17 = cResult[15];
              }
              if (cResult[16] === tmp5) {
                if (cResult[17] === tmp13) {
                  if (cResult[18] === tmp17) {
                    let tmp19 = cResult[19];
                  }
                  return tmp19;
                }
              }
              const obj2 = { style: tmp5, children: null };
              const items = [tmp13, tmp17];
              obj2.children = items;
              const tmp22 = React4(View, obj2);
              cResult[16] = tmp5;
              cResult[17] = tmp13;
              cResult[18] = tmp17;
              cResult[19] = tmp22;
              tmp19 = tmp22;
            }
            let tmp18 = children;
            if (typeof children === "string") {
              const obj3 = { style: tmp4.data, children };
              tmp18 = React3(native.LegacyText, obj3);
            }
            cResult[13] = children;
            cResult[14] = tmp4.data;
            cResult[15] = tmp18;
            tmp17 = tmp18;
          }
        }
        const obj4 = { style: tmp4.titleSection, children: null };
        const items1 = [tmp6, tmp9];
        obj4.children = items1;
        const tmp16 = React4(View, obj4);
        cResult[9] = tmp4.titleSection;
        cResult[10] = tmp6;
        cResult[11] = tmp9;
        cResult[12] = tmp16;
        tmp13 = tmp16;
      }
      let tmp11 = null != icon;
      if (tmp11) {
        const obj5 = { accessibilityRole: "button", onPress: onPressIcon, children: null };
        const obj6 = { size: native.Icon.Sizes.SMALL, source: icon };
        obj5.children = React3(native.Icon, obj6);
        tmp11 = React3(Pressables.PressableOpacity, obj5);
      }
      cResult[6] = icon;
      cResult[7] = onPressIcon;
      cResult[8] = tmp11;
      tmp9 = tmp11;
    }
    const obj7 = { style: tmp4.title, accessibilityRole: "header", variant: "text-sm/medium", color: "interactive-text-default", children: title };
    const tmp8 = React3(Text_Text.Text, obj7);
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
  ({ children, icon } = arg0);
  ({ title, style, onPressIcon } = arg0);
  const tmp = closure_5();
  const obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  const obj2 = { style: tmp.titleSection, children: null };
  const items1 = [React3(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", color: "interactive-text-default", children: title }), ];
  let tmp4Result = null != icon;
  if (tmp4Result) {
    const obj4 = { accessibilityRole: "button", onPress: onPressIcon, children: null };
    const obj5 = { size: native.Icon.Sizes.SMALL, source: icon };
    obj4.children = React3(native.Icon, obj5);
    tmp4Result = React3(Pressables.PressableOpacity, obj4);
  }
  items1[1] = tmp4Result;
  obj2.children = items1;
  const items2 = [React4(View, obj2), ];
  let tmp4Result2 = children;
  if (typeof children === "string") {
    const obj6 = { style: tmp.data, children };
    tmp4Result2 = React3(native.LegacyText, obj6);
  }
  items2[1] = tmp4Result2;
  obj.children = items2;
  return React4(View, obj);
});