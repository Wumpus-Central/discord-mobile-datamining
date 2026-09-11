// discord_app/modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import util from "../../../../intl/index.native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useTypeConsolidationTextTransform from "../../../design/useTypeConsolidationTextTransform.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function ExternalLinkItem(data) {
  data = data.data;
  const url = data.url;
  let tmp3 = null;
  if (data.is_localized) {
    let obj = { label: tmp, subLabel: tmp2, trailing: null, onPress: null, arrow: false, accessibilityRole: "link" };
    obj = { IconComponent: url(9168).LinkExternalMediumIcon };
    obj.trailing = closure_4(url(5662).TableRowIcon, obj);
    obj.onPress = function onPress() {
      LinkingDefault.openURL(url);
    };
    tmp3 = closure_4(url(8686).RowButton, obj);
  }
  return tmp3;
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = createStyles.createStyles({
  linksContainer: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 },
  headerText: { marginBottom: 8 },
});
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx",
);

export default function ExternalLinksElement(elements) {
  elements = elements.elements;
  const tmp = closure_6();
  let hvVgAZ = dependencyMap;
  let obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow(
    "InAppReportsExternalLink",
    "heading-deprecated-12/extrabold",
  );
  if (null != elements) {
    if (0 !== elements.length) {
      if (null != elements.find((data) => data.data.is_localized)) {
        obj = { style: tmp.linksContainer, children: null };
        if (someResult) {
          const items = [
            tmp10,
            elements.map((data, index) => closure_1_4(ExternalLinkItem, { data: data.data }, "external-link-" + index)),
          ];
          obj.children = items;
          return tmp8(tmp9, obj);
        } else {
          if (null != typeConsolidationEyebrow.style) {
            const items1 = [tmp.headerText, typeConsolidationEyebrow.style];
            let headerText = items1;
          } else {
            headerText = tmp.headerText;
          }
          obj = {
            style: headerText,
            variant: typeConsolidationEyebrow.variant,
            color: "text-default",
            accessibilityRole: "header",
            children: null,
          };
          if (null != typeConsolidationEyebrow.style) {
            const intl2 = util.intl;
            hvVgAZ = util.t.hvVgAZ;
            let stringResult = intl2.string(hvVgAZ);
          } else {
            const intl = util.intl;
            stringResult = intl.string(util.t.hvVgAZ).toUpperCase();
            const str = intl.string(util.t.hvVgAZ);
          }
          obj.children = stringResult;
          React4(Text_Text.Text, obj);
        }
        someResult = elements.some((data) => data.data.is_header_hidden);
      }
    }
  }
  return null;
}
