// === Module 7730: FormSection ===

// Module 7730 (FormSection)
import ThemesDefault from "Themes" /* 712 */;
import context from "context" /* 6977 */;
import DividerDefault from "Divider" /* 7731 */;
import FormTitleDefault from "FormTitle" /* 7732 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { TitleStyleType } from "semanticColor" /* 1301 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
({ View: c4, StyleSheet, Platform } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { titledSectionHeader: null, titledSectionNoBorder: null, titledSectionNoBorderOrMargin: null, emptySectionHeader: null, sectionBody: null, sectionBodyIOSBorder: null };
createCacheKey = { borderTopWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, marginTop: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: 24 };
createCacheKey[2] = {};
createCacheKey[3] = { marginTop: 24 };
createCacheKey[4] = {};
createCacheKey[5] = {};
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("design/void/Form/native/FormSection.tsx");

export default function FormSection(arg0) {
  ({ children, inset } = arg0);
  ({ icon, thinTitle } = arg0);
  if (inset === undefined) {
    inset = false;
  }
  ({ title, accessibilityRole, accessibilityLabel, titleStyleType, description, uppercaseTitle } = arg0);
  if (titleStyleType === undefined) {
    titleStyleType = TitleStyleType.DEFAULT;
  }
  ({ error, hint, hasIcons } = arg0);
  ({ titleViewStyle, titleTextStyle, sectionBodyStyle, wrapperStyle } = arg0);
  const tmp2 = callback2();
  let obj = React;
  if (React.useContext(context.RedesignCompatContext)) {
    const Children = obj.Children;
    const toArrayResult = Children.toArray(children);
    const found = toArrayResult.filter((type) => {
      let isValidElementResult = closure_3.isValidElement(type);
      if (isValidElementResult) {
        isValidElementResult = type.type !== callback(7731);
      }
      return isValidElementResult;
    });
    obj = { style: null, children: null };
    obj[0] = { marginBottom: 24 };
    obj = { style: null, children: null };
    obj[0] = { paddingHorizontal: 12 };
    obj1 = { title: null, hasIcons: null, hasTrailingText: null, children: null };
    obj1[0] = title;
    if (hasIcons == null) {
      hasIcons = tmp17;
    }
    obj1[1] = hasIcons;
    const element = found[found.length - 1];
    let flag = false;
    if (obj.isValidElement(element)) {
      flag = false;
      if (element.type !== DividerDefault) {
        flag = false;
        if (null != element.props) {
          const props = element.props;
          flag = "error" in props && null != props.error;
          const tmp22 = "error" in props && null != props.error;
        }
      }
    }
    obj1[2] = flag;
    obj1[3] = found;
    obj[1] = callback(tmp3(6317).TableRowGroup, obj1);
    const items = [callback(closure_4, obj), ];
    let tmp20Result = null;
    if (null != hint) {
      const obj2 = { style: null, children: null };
      obj2[0] = { marginTop: 8 };
      obj2[1] = hint;
      tmp20Result = tmp20(tmp19, obj2);
    }
    items[1] = tmp20Result;
    obj[1] = items;
    return closure_7(closure_4, obj);
  } else {
    let tmp6;
    if (null != title) {
      let str2 = "";
      if (null != error) {
        const _HermesInternal = HermesInternal;
        str2 = "(" + error + ")";
      }
      const obj3 = { textStyle: null, viewStyle: null, title: null, icon: null, error: null, thinTitle: null, uppercaseTitle: null, inset: null };
      obj3[0] = titleTextStyle;
      obj3[1] = titleViewStyle;
      const _HermesInternal2 = HermesInternal;
      obj3[2] = "" + title + " " + str2;
      obj3[3] = icon;
      obj3[4] = null != error;
      obj3[5] = thinTitle;
      obj3[6] = uppercaseTitle;
      obj3[7] = inset;
      tmp6 = callback(FormTitleDefault, obj3);
      const tmp10 = FormTitleDefault;
    }
    const emptySectionHeader = tmp2.emptySectionHeader;
    let titledSectionNoBorderOrMargin = emptySectionHeader;
    if (null != tmp6) {
      if (TitleStyleType.DEFAULT === titleStyleType) {
        titledSectionNoBorderOrMargin = tmp2.titledSectionHeader;
      } else if (tmp12.ANDROID_NO_BORDER === titleStyleType) {
        titledSectionNoBorderOrMargin = tmp3(500).isAndroid() ? tmp2.titledSectionNoBorder : tmp2.titledSectionHeader;
        const tmp3Result = tmp3(500);
      } else {
        titledSectionNoBorderOrMargin = emptySectionHeader;
        if (tmp12.NO_BORDER_OR_MARGIN === titleStyleType) {
          titledSectionNoBorderOrMargin = tmp2.titledSectionNoBorderOrMargin;
        }
      }
    }
    const obj4 = { style: null, accessibilityRole: null, accessibilityLabel: null, children: null };
    const items1 = [titledSectionNoBorderOrMargin, wrapperStyle];
    obj4[0] = items1;
    if (accessibilityRole == null) {
      accessibilityRole = "list";
    }
    obj4[1] = accessibilityRole;
    if (accessibilityLabel == null) {
      accessibilityLabel = title;
    }
    obj4[2] = accessibilityLabel;
    const items2 = [tmp6, description, , ];
    const items3 = [tmp2.sectionBody, , ];
    let sectionBodyIOSBorder = !inset;
    if (!inset) {
      sectionBodyIOSBorder = tmp2.sectionBodyIOSBorder;
    }
    const obj5 = { style: null, children: null };
    items3[1] = sectionBodyIOSBorder;
    items3[2] = sectionBodyStyle;
    obj5[0] = items3;
    obj5[1] = children;
    items2[2] = callback(closure_4, obj5);
    items2[3] = hint;
    obj4[3] = items2;
    return closure_7(closure_4, obj4);
  }
};