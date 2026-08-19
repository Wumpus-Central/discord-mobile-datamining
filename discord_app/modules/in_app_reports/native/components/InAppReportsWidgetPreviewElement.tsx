// === Module 12803: WidgetPreview ===

// Module 12803 (WidgetPreview)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import items3 from "items" /* 5367 */;
import isFieldEmpty from "isFieldEmpty" /* 5375 */;
import useSharedStylesDefault from "useSharedStyles" /* 8982 */;
import WidgetRenderer from "WidgetRenderer" /* 12174 */;
import PersonalWidgetTextDefault from "PersonalWidgetText" /* 12291 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND };
createCacheKey[2] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(arg0) {
  ({ widget, userId } = arg0);
  const tmp = callback3();
  const tmp4 = useSharedStylesDefault();
  if (widget instanceof isFieldEmpty.UserProfilePersonalWidget) {
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
        tmp6 = callback(WidgetRenderer.WidgetSection, obj);
      }
    }
    tmp5Result = items3;
  }
  let tmp9 = null;
  if (null !== tmp6) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.container;
    const obj2 = { style: null, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    obj2[0] = tmp.title;
    const intl = getSystemLocale.intl;
    obj2[3] = intl.string(getSystemLocale.t.SpsnDY).toUpperCase();
    const items2 = [callback(Text.Text, obj2), tmp6];
    obj1[1] = items2;
    tmp9 = callback2(View, obj1);
    const str = intl.string(getSystemLocale.t.SpsnDY);
  }
  return tmp9;
};