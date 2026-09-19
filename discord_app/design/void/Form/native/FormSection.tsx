// === Module 8879: FormSection ===

// Module 8879 (FormSection)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import RedesignCompat from "RedesignCompat" /* 5898 */;
import TableRowGroup from "TableRowGroup" /* 5899 */;
import FormRowDefault from "FormRow" /* 7377 */;
import FormDividerDefault from "FormDivider" /* 8876 */;
import FormTitleDefault from "FormTitle" /* 8880 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet, Platform } = get_ActivityIndicator);
const TitleStyleType = fn(1181).TitleStyleType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { titledSectionHeader: { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 16 }, titledSectionNoBorder: { marginTop: 24 }, titledSectionNoBorderOrMargin: {}, emptySectionHeader: { marginTop: 24 }, sectionBody: {}, sectionBodyIOSBorder: {} };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSection.tsx");

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
  const tmp2 = closure_8();
  if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
    const Children = noop.Children;
    const toArrayResult = Children.toArray(children);
    const found = toArrayResult.filter((type) => {
      let isValidElementResult = noop.isValidElement(type);
      if (isValidElementResult) {
        isValidElementResult = type.type !== FormDividerDefault;
      }
      return isValidElementResult;
    });
    const obj2 = { style: { marginBottom: 24 }, children: null };
    const obj3 = { style: { paddingHorizontal: 12 }, children: null };
    const obj4 = { title, hasIcons: null, hasTrailingText: null, children: null };
    if (hasIcons == null) {
      hasIcons = tmp17;
    }
    obj4.hasIcons = hasIcons;
    const element = found[found.length - 1];
    let flag = false;
    if (noop.isValidElement(element)) {
      flag = false;
      if (element.type !== FormDividerDefault) {
        flag = false;
        if (null != element.props) {
          const props = element.props;
          flag = "error" in props && null != props.error;
          const tmp22 = "error" in props && null != props.error;
        }
      }
    }
    obj4.hasTrailingText = flag;
    obj4.children = found;
    obj3.children = timestampProducer(TableRowGroup.TableRowGroup, obj4);
    const items = [timestampProducer(React4, obj3), ];
    let tmp20Result = null;
    if (null != hint) {
      const obj5 = { style: { marginTop: 8 }, children: hint };
      tmp20Result = timestampProducer(React4, obj5);
    }
    items[1] = tmp20Result;
    obj2.children = items;
    return React5(React4, obj2);
  } else {
    let tmp6;
    if (null != title) {
      let str2 = "";
      if (null != error) {
        const _HermesInternal = HermesInternal;
        str2 = "(" + error + ")";
      }
      const obj6 = { textStyle: titleTextStyle, viewStyle: titleViewStyle, title: null, icon: null, error: null, thinTitle: null, uppercaseTitle: null, inset: null };
      const _HermesInternal2 = HermesInternal;
      obj6.title = "" + title + " " + str2;
      obj6.icon = icon;
      obj6.error = null != error;
      obj6.thinTitle = thinTitle;
      obj6.uppercaseTitle = uppercaseTitle;
      obj6.inset = inset;
      tmp6 = timestampProducer(FormTitleDefault, obj6);
    }
    const emptySectionHeader = tmp2.emptySectionHeader;
    let titledSectionNoBorderOrMargin = emptySectionHeader;
    if (null != tmp6) {
      if (TitleStyleType.DEFAULT === titleStyleType) {
        titledSectionNoBorderOrMargin = tmp2.titledSectionHeader;
      } else if (TitleStyleType.ANDROID_NO_BORDER === titleStyleType) {
        titledSectionNoBorderOrMargin = PlatformUtils.isAndroid() ? tmp2.titledSectionNoBorder : tmp2.titledSectionHeader;
        const tmp3Result = PlatformUtils;
      } else {
        titledSectionNoBorderOrMargin = emptySectionHeader;
        if (TitleStyleType.NO_BORDER_OR_MARGIN === titleStyleType) {
          titledSectionNoBorderOrMargin = tmp2.titledSectionNoBorderOrMargin;
        }
      }
    }
    const obj7 = { style: null, accessibilityRole: null, accessibilityLabel: null, children: null };
    const items1 = [titledSectionNoBorderOrMargin, wrapperStyle];
    obj7.style = items1;
    if (accessibilityRole == null) {
      accessibilityRole = "list";
    }
    obj7.accessibilityRole = accessibilityRole;
    if (accessibilityLabel == null) {
      accessibilityLabel = title;
    }
    obj7.accessibilityLabel = accessibilityLabel;
    const items2 = [tmp6, description, , ];
    const items3 = [tmp2.sectionBody, , ];
    let sectionBodyIOSBorder = !inset;
    if (!inset) {
      sectionBodyIOSBorder = tmp2.sectionBodyIOSBorder;
    }
    const obj8 = { style: null, children: null };
    items3[1] = sectionBodyIOSBorder;
    items3[2] = sectionBodyStyle;
    obj8.style = items3;
    obj8.children = children;
    items2[2] = timestampProducer(React4, obj8);
    items2[3] = hint;
    obj7.children = items2;
    return React5(React4, obj7);
  }
};