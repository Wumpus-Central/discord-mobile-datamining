// discord_app/modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

function ExternalLinkItem(data) {
  data = data.data;
  const url = data.url;
  let tmp3 = null;
  if (data.is_localized) {
    let obj = { label: null, subLabel: null, trailing: null, onPress: null, arrow: false, accessibilityRole: "link" };
    obj[0] = tmp;
    obj[1] = tmp2;
    obj = { IconComponent: null };
    obj[0] = url(12700).LinkExternalMediumIcon;
    obj[2] = callback(url(5557).TableRowIcon, obj);
    obj[3] = function onPress() {
      closure_1_1(closure_1_2[8]).openURL(url);
    };
    tmp3 = callback(url(8297).RowButton, obj);
  }
  return tmp3;
}
const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ linksContainer: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 }, headerText: { marginBottom: 8 } });
const result = set.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx");

export default function ExternalLinksElement(elements) {
  elements = elements.elements;
  const tmp = callback2();
  if (null != elements) {
    if (0 !== elements.length) {
      if (null != elements.find((data) => data.data.is_localized)) {
        const someResult = elements.some((data) => data.data.is_header_hidden);
        let obj = { style: null, children: null };
        obj[0] = tmp.linksContainer;
        let tmp5 = !someResult;
        if (!someResult) {
          obj = { style: null, variant: "heading-deprecated-12/extrabold", color: "text-default", accessibilityRole: "header", children: null };
          obj[0] = tmp.headerText;
          const intl = getSystemLocale.intl;
          obj[4] = intl.string(getSystemLocale.t.hvVgAZ).toUpperCase();
          tmp5 = callback(Text.Text, obj);
          const str = intl.string(getSystemLocale.t.hvVgAZ);
        }
        const items = [tmp5, elements.map((data) => callback(closure_7, { data: data.data }, "external-link-" + arg1))];
        obj[1] = items;
        return closure_5(View, obj);
      }
    }
  }
  return null;
};