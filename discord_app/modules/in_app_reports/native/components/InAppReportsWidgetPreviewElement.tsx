// discord_app/modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { PersonalWidgetText } from "../../../user_profile/native/UserProfilePersonalWidgetCard.tsx";
import { useSharedStyles } from "../../../user_profile/native/UserProfileSharedStyles.tsx";
import { isFieldEmpty } from "../../../user_profile/UserProfilePersonalWidget.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: null };
createCacheKey = { backgroundColor: require("Themes").colors.USER_PROFILE_CONTAINER_BACKGROUND };
createCacheKey[2] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(arg0) {
  let userId;
  let widget;
  ({ widget, userId } = arg0);
  const tmp = createCacheKey();
  const tmp4 = useSharedStyles();
  if (widget instanceof isFieldEmpty.UserProfilePersonalWidget) {
    let obj = { userId: null, widget: null, disableInteraction: true, cardStyle: null };
    obj[0] = userId;
    obj[1] = widget;
    const items = [tmp4.card, tmp.card];
    obj[3] = items;
    let tmp6 = callback(PersonalWidgetText, obj);
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
        tmp6 = callback(tmp5(12258).WidgetSection, obj);
      }
    }
    tmp5Result = tmp5(7003);
  }
  let tmp9 = null;
  if (null !== tmp6) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.container;
    const obj2 = { style: null, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    obj2[0] = tmp.title;
    const intl = tmp5(1236).intl;
    obj2[3] = intl.string(tmp5(1236).t.SpsnDY).toUpperCase();
    const items2 = [callback(tmp5(4281).Text, obj2), tmp6];
    obj1[1] = items2;
    tmp9 = callback2(View, obj1);
    const str = intl.string(tmp5(1236).t.SpsnDY);
  }
  return tmp9;
};