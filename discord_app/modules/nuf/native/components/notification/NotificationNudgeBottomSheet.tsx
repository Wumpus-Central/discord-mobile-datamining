// discord_app/modules/nuf/native/components/notification/NotificationNudgeBottomSheet.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import EventActionType from "NotificationPermissionConstants.tsx";
import { AnalyticEvents } from "../../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ EventActionType: c5, NotificationNudgeAnalyticsAction: closure_6 } = EventActionType);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { marginHorizontal: ThemesDefault.space.PX_24, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginVertical: ThemesDefault.space.PX_24 };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { textAlign: "center", marginTop: ThemesDefault.space.PX_8 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_8, width: "100%" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/nuf/native/components/notification/NotificationNudgeBottomSheet.tsx");

export default function NotificationNudgeBottomSheet(actionLocation) {
  actionLocation = actionLocation.actionLocation;
  const surface = actionLocation.surface;
  const markAsDismissed = actionLocation.markAsDismissed;
  const onHide = actionLocation.onHide;
  ({ title, body } = actionLocation);
  const tmp = callback3();
  const items = [surface];
  const effect = onHide.useEffect(() => {
    surface(markAsDismissed[8]);
    const obj = { action: closure_1_6.IMPRESSION, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj);
  }, items);
  const items1 = [onHide];
  const callback = onHide.useCallback(() => {
    surface(markAsDismissed[9]).hideActionSheet();
    if (onHide != null) {
      onHide();
    }
  }, items1);
  const items2 = [surface, actionLocation, callback, markAsDismissed];
  const items3 = [surface, callback, markAsDismissed];
  const callback1 = onHide.useCallback(() => {
    surface(markAsDismissed[8]);
    const obj = { action: closure_1_6.ACCEPT, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
    const pushNotificationPermission = actionLocation(markAsDismissed[10]).requestPushNotificationPermission(closure_1_5.ALLOW_TO_REQUEST, actionLocation, callback);
  }, items2);
  const callback2 = onHide.useCallback(() => {
    surface(markAsDismissed[8]);
    const obj = { action: closure_1_6.DISMISS, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
    callback();
  }, items3);
  let obj = { style: tmp.illustration, children: callback(actionLocation(markAsDismissed[12]).BellSpotIllustration, { scale: 0.8 }) };
  const items4 = [callback(callback, obj), callback(actionLocation(markAsDismissed[13]).Text, { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: title }), callback(actionLocation(markAsDismissed[13]).Text, { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: body }), ];
  const obj3 = { style: tmp.buttonsContainer, children: null };
  const obj4 = { children: null };
  const obj5 = { text: null, onPress: null };
  const intl = actionLocation(markAsDismissed[16]).intl;
  obj5[0] = intl.string(actionLocation(markAsDismissed[16]).t["+7MDbQ"]);
  obj5[1] = callback1;
  const items5 = [callback(actionLocation(markAsDismissed[15]).Button, obj5), ];
  const obj6 = { text: null, onPress: null, variant: "secondary" };
  const intl2 = actionLocation(markAsDismissed[16]).intl;
  obj6[0] = intl2.string(actionLocation(markAsDismissed[16]).t.L5eIZ2);
  obj6[1] = callback2;
  items5[1] = callback(actionLocation(markAsDismissed[15]).Button, obj6);
  obj4[0] = items5;
  obj3[1] = callback2(actionLocation(markAsDismissed[14]).ButtonGroup, obj4);
  items4[3] = callback(callback, obj3);
  obj[1] = items4;
  obj[0] = callback2(callback, obj);
  return callback(actionLocation(markAsDismissed[11]).BottomSheet, obj);
};