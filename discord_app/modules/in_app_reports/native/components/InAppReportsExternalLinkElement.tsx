// discord_app/modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx",
);

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
        items = [
          tmp5,
          elements.map((data, index) => closure_1_4(ExternalLinkItem, { data: data.data }, "external-link-" + index)),
        ];
        obj2.children = items;
        return hasOwnProperty(View, obj2);
      }
    }
  }
  return null;
}
