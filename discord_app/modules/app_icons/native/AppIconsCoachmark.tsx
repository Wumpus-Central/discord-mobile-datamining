// discord_app/modules/app_icons/native/AppIconsCoachmark.tsx
import noop from "noop";
import get_ActivityIndicator from "fetchCurrentAppIcon";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/08624_registerAsset.js";
import { registerAsset } from "../../../../_runtime/15852_registerAsset.js";
import { getPremiumPlanItem } from "../../../utils/PremiumUtils.tsx";

let c4;
let c5;
let c9;
let metroImportAll;
const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, info: null, image: null, nitroWheel: null, titleContainer: null, subtitle: null, footer: null };
createCacheKey = { padding: require("Themes").space.PX_16, paddingBottom: 0 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center" };
createCacheKey[2] = { alignSelf: "center", marginBottom: 20 };
createCacheKey[3] = { marginRight: 8 };
createCacheKey[4] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[5] = { marginTop: 8, textAlign: "center" };
createCacheKey[6] = { marginTop: 20, gap: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: 20, gap: require("Themes").space.PX_8 };
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/app_icons/native/AppIconsCoachmark.tsx");

export default function AppIconsCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let tmp = createCacheKey();
  let obj = markAsDismissed(589);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = getPremiumPlanItem;
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[9]).hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(outer1_7.DISMISS);
    }
  }, items1);
  obj = {
    onDismiss() {
      return markAsDismissed(outer1_7.DISMISS);
    },
    contentStyles: tmp.container,
    children: null
  };
  obj = { style: tmp.info, children: null };
  obj1 = { source: null, style: null };
  obj1[0] = registerAsset;
  obj1[1] = tmp.image;
  const items2 = [callback(closure_4, obj1), , ];
  const obj2 = { style: tmp.titleContainer, children: null };
  const obj3 = { source: null, size: null, style: null, disableColor: true };
  obj3[0] = registerAsset;
  obj3[1] = markAsDismissed(1297).IconSizes.MEDIUM;
  obj3[2] = tmp.nitroWheel;
  const items3 = [callback(markAsDismissed(1297).Icon, obj3), ];
  const obj4 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1236).intl;
  obj4[2] = intl.string(markAsDismissed(1236).t.EfA4Cq);
  items3[1] = callback(markAsDismissed(4251).Text, obj4);
  obj2[1] = items3;
  items2[1] = callback2(closure_5, obj2);
  const obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = markAsDismissed(1236).intl;
  const string = intl2.string;
  const t = markAsDismissed(1236).t;
  if (isPremiumResult) {
    let stringResult = string(t.IgchKK);
  } else {
    stringResult = string(t.D0XzaS);
  }
  obj5[3] = stringResult;
  items2[2] = callback(markAsDismissed(4251).Text, obj5);
  obj[1] = items2;
  const items4 = [callback2(closure_5, obj), ];
  const obj6 = { style: tmp.footer, children: null };
  const obj7 = { text: null, onPress: null };
  const intl3 = tmp2(1236).intl;
  obj7[0] = intl3.string(markAsDismissed(1236).t.Pt547C);
  obj7[1] = function onPress() {
    outer1_1(outer1_2[9]).hideActionSheet();
    if (markAsDismissed != null) {
      tmp3(outer1_7.PRIMARY);
    }
    const obj = outer1_1(outer1_2[9]);
    const tmp = outer1_2;
    const result = markAsDismissed(outer1_2[17]).navigateToAppIconSettings();
  };
  const items5 = [callback(markAsDismissed(4665).Button, obj7), ];
  const obj8 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(1236).intl;
  obj8[1] = intl4.string(markAsDismissed(1236).t.iSrIIZ);
  obj8[2] = callback;
  items5[1] = callback(markAsDismissed(4665).Button, obj8);
  obj6[1] = items5;
  items4[1] = callback2(closure_5, obj6);
  obj[2] = items4;
  return callback2(markAsDismissed(5323).BottomSheet, obj);
};