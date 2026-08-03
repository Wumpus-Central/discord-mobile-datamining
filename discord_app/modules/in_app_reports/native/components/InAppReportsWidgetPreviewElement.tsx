// === Module 12416: WidgetPreview ===

// Module 12416 (WidgetPreview)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: null };
createCacheKey = { backgroundColor: require("Themes").colors.USER_PROFILE_CONTAINER_BACKGROUND };
createCacheKey[2] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(widget) {
  widget = widget.widget;
  const tmp = createCacheKey();
  let obj = require(5901) /* items */;
  let tmp5 = null;
  if (obj.isGameWidget(widget)) {
    tmp5 = null;
    if (0 !== widget.games.length) {
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { style: null, accessibilityRole: "header", variant: "text-xs/bold", children: null };
      obj[0] = tmp.title;
      const intl = tmp4(1236).intl;
      obj[3] = intl.string(tmp4(1236).t.SpsnDY).toUpperCase();
      const items = [callback(tmp4(4189).Text, obj), ];
      const obj1 = { userId: null, widget: null, disableInteraction: true, cardStyle: null };
      obj1[0] = widget.userId;
      obj1[1] = widget;
      const items1 = [tmp3.card, tmp.card];
      obj1[3] = items1;
      items[1] = callback(tmp4(12070).WidgetSection, obj1);
      obj[1] = items;
      tmp5 = callback2(View, obj);
      const str = intl.string(tmp4(1236).t.SpsnDY);
    }
  }
  return tmp5;
};