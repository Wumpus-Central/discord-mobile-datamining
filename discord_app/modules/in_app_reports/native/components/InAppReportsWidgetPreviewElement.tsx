// discord_app/modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import items3 from "../../../user_profile/UserProfileGameWidgetTypes.tsx";
import isFieldEmpty from "../../../user_profile/UserProfilePersonalWidget.tsx";
import useSharedStylesDefault from "../../../user_profile/native/UserProfileSharedStyles.tsx";
import WidgetRenderer from "../../../user_profile/native/UserProfileWidgetsBoard.tsx";
import PersonalWidgetTextDefault from "../../../user_profile/native/UserProfilePersonalWidgetCard.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
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