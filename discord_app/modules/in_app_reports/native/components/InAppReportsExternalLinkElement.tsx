// === Module 15171: InAppReportsExternalLinkElement ===

// Module 15171 (InAppReportsExternalLinkElement)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import LinkingDefault from "Linking" /* 5709 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7148 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

function ExternalLinkItem(data) {
  data = data.data;
  const url = data.url;
  let tmp3 = null;
  if (data.is_localized) {
    const obj = { label: tmp, subLabel: tmp2, trailing: null, onPress: null, arrow: false, accessibilityRole: "link" };
    const obj2 = { IconComponent: url(15172).LinkExternalMediumIcon };
    obj.trailing = closure_4(url(6983).TableRowIcon, obj2);
    obj.onPress = function onLinkPress() {
      LinkingDefault.openURL(url);
    };
    tmp3 = closure_4(url(8179).RowButton, obj);
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
  let hvVgAZ = dependencyMap;
  const tmp = closure_6();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("InAppReportsExternalLink", "heading-deprecated-12/extrabold");
  if (null != elements) {
    if (0 !== elements.length) {
      if (null != elements.find((data) => data.data.is_localized)) {
        const obj3 = { style: tmp.linksContainer, children: null };
        if (someResult) {
          const items = [tmp10, elements.map((data, index) => closure_1_4(ExternalLinkItem, { data: data.data }, "external-link-" + index))];
          obj3.children = items;
          return tmp8(tmp9, obj3);
        } else {
          const obj5 = { style: null, variant: null, color: "text-default", accessibilityRole: "header", children: null };
          ({ style: obj2.style, variant: obj2.variant } = typeConsolidationEyebrow);
          if (null != typeConsolidationEyebrow.style) {
            const intl2 = util.intl;
            hvVgAZ = util.t.hvVgAZ;
            let stringResult = intl2.string(hvVgAZ);
          } else {
            const intl = util.intl;
            stringResult = intl.string(util.t.hvVgAZ).toUpperCase();
            const str = intl.string(util.t.hvVgAZ);
          }
          obj5.children = stringResult;
          React4(Text_Text.Text, obj5);
        }
        someResult = elements.some((data) => data.data.is_header_hidden);
      }
    }
  }
  return null;
};