// === Module 12210: InAppReportsExternalLinkElement ===

// Module 12210 (InAppReportsExternalLinkElement)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5866 */;
import LinkingDefault from "Linking" /* 5949 */;
import InAppReportsOptionRowDefault from "InAppReportsOptionRow" /* 12011 */;
import LinkExternalMediumIcon from "LinkExternalMediumIcon" /* 12211 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

function ExternalLinkItem(data) {
  data = data.data;
  ({ url: require, link_description } = data);
  ({ link_text, is_localized } = data);
  const tmp = closure_6();
  let tmp3Result2 = null;
  if (is_localized) {
    const obj = { label: link_text, trailing: null, onPress: null, accessibilityRole: "link", children: null };
    const obj2 = { style: tmp.linkIcon, children: null };
    const obj3 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    obj2.children = closure_4(LinkExternalMediumIcon.LinkExternalMediumIcon, obj3);
    obj.trailing = closure_4(View, obj2);
    obj.onPress = function onLinkPress() {
      LinkingDefault.openURL(require);
    };
    let tmp3Result = null != link_description;
    if (tmp3Result) {
      const obj4 = { style: tmp.linkDescription, variant: "body-xs/medium", color: "text-subtle", children: link_description };
      tmp3Result = closure_4(Text_Text.Text, obj4);
    }
    obj.children = tmp3Result;
    tmp3Result2 = closure_4(InAppReportsOptionRowDefault, obj);
  }
  return tmp3Result2;
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { linksContainer: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16, gap: nativeDefault.space.PX_8 }, linkIcon: null, linkDescription: null };
let size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, alignItems: "center", justifyContent: "center" };
obj.linkIcon = size;
let obj2 = { flex: 1, alignSelf: "stretch", paddingHorizontal: 16, gap: nativeDefault.space.PX_8 };
obj.linkDescription = { marginTop: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx");

export default function ExternalLinksElement(elements) {
  elements = elements.elements;
  if (null != elements) {
    if (0 !== elements.length) {
      if (null != elements.find((data) => data.data.is_localized)) {
        const someResult = elements.some((data) => data.data.is_header_hidden);
        const obj2 = { style: tmp.linksContainer, children: null };
        let tmp5 = !someResult;
        if (!someResult) {
          const obj = { variant: "body-sm/medium", color: "text-default", accessibilityRole: "header", children: null };
          const intl = util.intl;
          obj.children = intl.string(util.t.hvVgAZ);
          tmp5 = React4(Text_Text.Text, obj);
        }
        items = [tmp5, elements.map((data, index) => closure_1_4(ExternalLinkItem, { data: data.data }, "external-link-" + index))];
        obj2.children = items;
        return hasOwnProperty(View, obj2);
      }
    }
  }
  return null;
};