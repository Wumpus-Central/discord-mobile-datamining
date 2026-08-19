// discord_app/modules/nuf/native/components/notification/NotificationReactivationActionSheet.tsx
import expandEventPropertiesDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import registerAssetDefault from "../../../../../../_runtime/16670_registerAsset.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { EventActionType } from "NotificationPermissionConstants.tsx";
import { AnalyticEvents } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { marginHorizontal: ThemesDefault.space.PX_24, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginVertical: ThemesDefault.space.PX_24, height: 120 };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { textAlign: "center", marginTop: ThemesDefault.space.PX_8 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_8 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/nuf/native/components/notification/NotificationReactivationActionSheet.tsx");

export default function NotificationReactivationActionSheet(location) {
  const _location = location.location;
  const tmp = callback3();
  const items = [_location];
  const items1 = [_location];
  const callback = React.useCallback(() => {
    const pushNotificationPermission = _location(dependencyMap[8]).requestPushNotificationPermission(EventActionType.ALLOW_TO_REQUEST, _location, () => {
      callback(table[9]).hideActionSheet();
    });
  }, items);
  const callback1 = React.useCallback(() => {
    const obj = { action_type: EventActionType.SKIP_STEP, action_location: _location, permission_granted: "Array" };
    obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  }, items1);
  let obj = { style: tmp.image, source: registerAssetDefault, resizeMode: "contain" };
  const items2 = [callback(closure_5, obj), , , ];
  obj1 = { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: null };
  const intl = _location(1236).intl;
  obj1[3] = intl.string(_location(1236).t.a4bgO0);
  items2[1] = callback(_location(4734).Text, obj1);
  const obj2 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = _location(1236).intl;
  obj2[3] = intl2.string(_location(1236).t["rW5gw/"]);
  items2[2] = callback(_location(4734).Text, obj2);
  const obj3 = { style: tmp.buttons, children: null };
  const obj4 = { text: null, onPress: null };
  const intl3 = _location(1236).intl;
  obj4[0] = intl3.string(_location(1236).t.a4bgO0);
  obj4[1] = callback;
  const items3 = [callback(_location(4745).Button, obj4), ];
  const obj5 = { text: null, onPress: null, variant: "secondary" };
  const intl4 = _location(1236).intl;
  obj5[0] = intl4.string(_location(1236).t["/L3kom"]);
  obj5[1] = callback1;
  items3[1] = callback(_location(4745).Button, obj5);
  obj3[1] = items3;
  items2[3] = callback2(_location(6687).ButtonGroup, obj3);
  obj[1] = items2;
  obj[0] = callback2(closure_4, obj);
  return callback(_location(6950).BottomSheet, obj);
};