// discord_app/modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import createDefaultFieldsSection from "../../../user_profile/UserProfilePersonalWidget.tsx";
import useSharedStylesDefault from "../../../user_profile/native/UserProfileSharedStyles.tsx";
import PersonalWidgetTextDefault from "../../../user_profile/native/UserProfilePersonalWidgetCard.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = {
  container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 },
  title: { lineHeight: 16, marginBottom: 8 },
  card: null,
};
createCacheKey = { backgroundColor: ThemesDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND };
createCacheKey[2] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx",
);

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
        tmp6 = callback(tmp5(8674).WidgetSection, obj);
      }
    }
    tmp5Result = tmp5(7623);
  }
  let tmp9 = null;
  if (null !== tmp6) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.container;
    const obj2 = { style: null, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    obj2[0] = tmp.title;
    const intl = tmp5(1114).intl;
    obj2[3] = intl.string(tmp5(1114).t.SpsnDY).toUpperCase();
    const items2 = [callback(tmp5(4556).Text, obj2), tmp6];
    obj1[1] = items2;
    tmp9 = callback2(View, obj1);
    const str = intl.string(tmp5(1114).t.SpsnDY);
  }
  return tmp9;
}
