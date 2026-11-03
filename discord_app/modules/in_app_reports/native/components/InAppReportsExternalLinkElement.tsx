// === Module 15316: InAppReportsExternalLinkElement ===

// Module 15316 (InAppReportsExternalLinkElement)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5747 */;
import LinkingDefault from "Linking" /* 5829 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

function ExternalLinkItem(data) {
  data = data.data;
  const url = data.url;
  let tmp3 = null;
  if (data.is_localized) {
    const obj = { label: tmp, subLabel: tmp2, trailing: null, onPress: null, arrow: false, accessibilityRole: "link" };
    const obj2 = { IconComponent: url(15317).LinkExternalMediumIcon };
    obj.trailing = closure_4(url(7109).TableRowIcon, obj2);
    obj.onPress = function onLinkPress() {
      LinkingDefault.openURL(url);
    };
    tmp3 = closure_4(url(8303).RowButton, obj);
  }
  return tmp3;
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { linksContainer: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16, gap: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj);
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