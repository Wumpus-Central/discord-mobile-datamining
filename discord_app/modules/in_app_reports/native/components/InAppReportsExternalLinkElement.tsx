// discord_app/modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import util from "../../../../intl/index.native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function ExternalLinkItem(data) {
  data = data.data;
  const url = data.url;
  let tmp3 = null;
  if (data.is_localized) {
    let obj = { label: tmp, subLabel: tmp2, trailing: null, onPress: null, arrow: false, accessibilityRole: "link" };
    obj = { IconComponent: url(9078).LinkExternalMediumIcon };
    obj.trailing = closure_4(url(5611).TableRowIcon, obj);
    obj.onPress = function onPress() {
      LinkingDefault.openURL(url);
    };
    tmp3 = closure_4(url(8595).RowButton, obj);
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
  if (null != elements) {
    if (0 !== elements.length) {
      if (null != elements.find((data) => data.data.is_localized)) {
        const someResult = elements.some((data) => data.data.is_header_hidden);
        let obj = { style: tmp.linksContainer, children: null };
        let tmp5 = !someResult;
        if (!someResult) {
          obj = {
            style: tmp.headerText,
            variant: "heading-deprecated-12/extrabold",
            color: "text-default",
            accessibilityRole: "header",
            children: null,
          };
          const intl = util.intl;
          obj.children = intl.string(util.t.hvVgAZ).toUpperCase();
          tmp5 = React4(Text_Text.Text, obj);
          const str = intl.string(util.t.hvVgAZ);
        }
        const items = [
          tmp5,
          elements.map((data, index) => closure_1_4(ExternalLinkItem, { data: data.data }, "external-link-" + index)),
        ];
        obj.children = items;
        return hasOwnProperty(View, obj);
      }
    }
  }
  return null;
}
