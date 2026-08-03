// === Module 12432: ExternalLinkItem ===

// Module 12432 (ExternalLinkItem)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
function ExternalLinkItem(data) {
  data = data.data;
  const url = data.url;
  let tmp3 = null;
  if (data.is_localized) {
    let obj = { label: null, subLabel: null, trailing: null, onPress: null, arrow: false, accessibilityRole: "link" };
    obj[0] = tmp;
    obj[1] = tmp2;
    obj = { IconComponent: null };
    obj[0] = url(12433).LinkExternalMediumIcon;
    obj[2] = callback(url(5230).TableRowIcon, obj);
    obj[3] = function onPress() {
      outer1_1(outer1_2[8]).openURL(url);
    };
    tmp3 = callback(url(7642).RowButton, obj);
  }
  return tmp3;
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ linksContainer: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 }, headerText: { marginBottom: 8 } });
const result = require("createCacheKey").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx");

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
          const intl = require(1236) /* getSystemLocale */.intl;
          obj[4] = intl.string(require(1236) /* getSystemLocale */.t.hvVgAZ).toUpperCase();
          tmp5 = callback(require(4189) /* Text */.Text, obj);
          const str = intl.string(require(1236) /* getSystemLocale */.t.hvVgAZ);
        }
        const items = [tmp5, elements.map((data) => callback(closure_7, { data: data.data }, "external-link-" + arg1))];
        obj[1] = items;
        return closure_5(View, obj);
      }
    }
  }
  return null;
};