// discord_app/design/void/Form/native/FormSection.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import TableRowGroup from "../../../components/TableRow/native/TableRowGroup.native.tsx";
import FormRowDefault from "FormRow.tsx";
import FormDividerDefault from "FormDivider.tsx";
import FormTitleDefault from "FormTitle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet, Platform } = get_ActivityIndicator);
const TitleStyleType = fn(1182).TitleStyleType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  titledSectionHeader: null,
  titledSectionNoBorder: null,
  titledSectionNoBorderOrMargin: null,
  emptySectionHeader: null,
  sectionBody: null,
  sectionBodyIOSBorder: null,
};
createStyles = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 16 };
createStyles.titledSectionHeader = createStyles;
createStyles.titledSectionNoBorder = { marginTop: 24 };
createStyles.titledSectionNoBorderOrMargin = {};
createStyles.emptySectionHeader = { marginTop: 24 };
createStyles.sectionBody = {};
createStyles.sectionBodyIOSBorder = {};
let closure_8 = createStyles.createStyles(createStyles);
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
  let obj = noop;
  if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
    const Children = obj.Children;
    const toArrayResult = Children.toArray(children);
    const found = toArrayResult.filter((type) => {
      let isValidElementResult = noop.isValidElement(type);
      if (isValidElementResult) {
        isValidElementResult = type.type !== FormDividerDefault;
      }
      return isValidElementResult;
    });
    obj = { style: { marginBottom: 24 }, children: null };
    obj = { style: { paddingHorizontal: 12 }, children: null };
    const obj1 = { title, hasIcons: null, hasTrailingText: null, children: null };
    if (hasIcons == null) {
      hasIcons = tmp17;
    }
    obj1.hasIcons = hasIcons;
    const element = found[found.length - 1];
    let flag = false;
    if (obj.isValidElement(element)) {
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
    obj1.hasTrailingText = flag;
    obj1.children = found;
    obj.children = timestampProducer(TableRowGroup.TableRowGroup, obj1);
    const items = [timestampProducer(React4, obj)];
    let tmp20Result = null;
    if (null != hint) {
      const obj2 = { style: { marginTop: 8 }, children: hint };
      tmp20Result = timestampProducer(React4, obj2);
    }
    items[1] = tmp20Result;
    obj.children = items;
    return React5(React4, obj);
  } else {
    let tmp6;
    if (null != title) {
      let str2 = "";
      if (null != error) {
        const _HermesInternal = HermesInternal;
        str2 = "(" + error + ")";
      }
      const obj3 = {
        textStyle: titleTextStyle,
        viewStyle: titleViewStyle,
        title: null,
        icon: null,
        error: null,
        thinTitle: null,
        uppercaseTitle: null,
        inset: null,
      };
      const _HermesInternal2 = HermesInternal;
      obj3.title = "" + title + " " + str2;
      obj3.icon = icon;
      obj3.error = null != error;
      obj3.thinTitle = thinTitle;
      obj3.uppercaseTitle = uppercaseTitle;
      obj3.inset = inset;
      tmp6 = timestampProducer(FormTitleDefault, obj3);
    }
    const emptySectionHeader = tmp2.emptySectionHeader;
    let titledSectionNoBorderOrMargin = emptySectionHeader;
    if (null != tmp6) {
      if (TitleStyleType.DEFAULT === titleStyleType) {
        titledSectionNoBorderOrMargin = tmp2.titledSectionHeader;
      } else if (TitleStyleType.ANDROID_NO_BORDER === titleStyleType) {
        titledSectionNoBorderOrMargin = PlatformUtils.isAndroid()
          ? tmp2.titledSectionNoBorder
          : tmp2.titledSectionHeader;
        const tmp3Result = PlatformUtils;
      } else {
        titledSectionNoBorderOrMargin = emptySectionHeader;
        if (TitleStyleType.NO_BORDER_OR_MARGIN === titleStyleType) {
          titledSectionNoBorderOrMargin = tmp2.titledSectionNoBorderOrMargin;
        }
      }
    }
    const obj4 = { style: null, accessibilityRole: null, accessibilityLabel: null, children: null };
    const items1 = [titledSectionNoBorderOrMargin, wrapperStyle];
    obj4.style = items1;
    if (accessibilityRole == null) {
      accessibilityRole = "list";
    }
    obj4.accessibilityRole = accessibilityRole;
    if (accessibilityLabel == null) {
      accessibilityLabel = title;
    }
    obj4.accessibilityLabel = accessibilityLabel;
    const items2 = [tmp6, description, ,];
    const items3 = [tmp2.sectionBody, ,];
    let sectionBodyIOSBorder = !inset;
    if (!inset) {
      sectionBodyIOSBorder = tmp2.sectionBodyIOSBorder;
    }
    const obj5 = { style: null, children: null };
    items3[1] = sectionBodyIOSBorder;
    items3[2] = sectionBodyStyle;
    obj5.style = items3;
    obj5.children = children;
    items2[2] = timestampProducer(React4, obj5);
    items2[3] = hint;
    obj4.children = items2;
    return React5(React4, obj4);
  }
}
