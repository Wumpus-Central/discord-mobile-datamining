// === Module 12845: WidgetPreview ===

// Module 12845 (WidgetPreview)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import createDefaultFieldsSection from "createDefaultFieldsSection" /* 7236 */;
import useSharedStylesDefault from "useSharedStyles" /* 8982 */;
import PersonalWidgetTextDefault from "PersonalWidgetText" /* 12660 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND };
createCacheKey[2] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(arg0) {
  ({ widget, userId } = arg0);
  const tmp = callback3();
  const tmp4 = useSharedStylesDefault();
  if (widget instanceof createDefaultFieldsSection.UserProfilePersonalWidget) {
    let obj = { userId: null, widget: null, disableInteraction: true, cardStyle: null };
    obj[0] = userId;
    obj[1] = widget;
    const items = [tmp4.card, tmp.card];
    obj[3] = items;
    let tmp6 = callback(PersonalWidgetTextDefault, obj);
  } else {
    tmp6 = null;
    if (tmp5Result.isGameWidget(widget)) {
      tmp6 = null;
      if (widget.games.length > 0) {
        obj = { userId: null, widget: null, disableInteraction: true, cardStyle: null };
        obj[0] = userId;
        obj[1] = widget;
        const items1 = [tmp4.card, tmp.card];
        obj[3] = items1;
        tmp6 = callback(tmp5(12547).WidgetSection, obj);
      }
    }
    tmp5Result = tmp5(7229);
  }
  let tmp9 = null;
  if (null !== tmp6) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.container;
    const obj2 = { style: null, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    obj2[0] = tmp.title;
    const intl = tmp5(1236).intl;
    obj2[3] = intl.string(tmp5(1236).t.SpsnDY).toUpperCase();
    const items2 = [callback(tmp5(4376).Text, obj2), tmp6];
    obj1[1] = items2;
    tmp9 = callback2(View, obj1);
    const str = intl.string(tmp5(1236).t.SpsnDY);
  }
  return tmp9;
};