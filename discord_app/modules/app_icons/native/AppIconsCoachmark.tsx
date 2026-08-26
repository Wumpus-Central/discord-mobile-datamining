// discord_app/modules/app_icons/native/AppIconsCoachmark.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import registerAssetDefault from "../../../../_runtime/08945_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/16353_registerAsset.js";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../stores/UserStore.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, info: null, image: null, nitroWheel: null, titleContainer: null, subtitle: null, footer: null };
createCacheKey = { padding: ThemesDefault.space.PX_16, paddingBottom: 0 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center" };
createCacheKey[2] = { alignSelf: "center", marginBottom: 20 };
createCacheKey[3] = { marginRight: 8 };
createCacheKey[4] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[5] = { marginTop: 8, textAlign: "center" };
createCacheKey[6] = { marginTop: 20, gap: ThemesDefault.space.PX_8 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: 20, gap: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/app_icons/native/AppIconsCoachmark.tsx");

export default function AppIconsCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let tmp = callback3();
  let obj = markAsDismissed(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = getPremiumPlanItemDefault;
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    closure_1_1(closure_1_2[9]).hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(closure_1_7.DISMISS);
    }
  }, items1);
  obj = {
    onDismiss() {
      return markAsDismissed(closure_1_7.DISMISS);
    },
    contentStyles: tmp.container,
    children: null
  };
  obj = { style: tmp.info, children: null };
  obj1 = { source: registerAssetDefault2, style: tmp.image };
  const items2 = [callback(closure_4, obj1), , ];
  const obj2 = { style: tmp.titleContainer, children: null };
  const isPremiumResult = obj1.isPremium(stateFromStores);
  const items3 = [callback(markAsDismissed(1297).Icon, { source: registerAssetDefault, size: markAsDismissed(1297).IconSizes.MEDIUM, style: tmp.nitroWheel, disableColor: true }), ];
  const obj4 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1236).intl;
  obj4[2] = intl.string(markAsDismissed(1236).t.EfA4Cq);
  items3[1] = callback(markAsDismissed(4440).Text, obj4);
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
  items2[2] = callback(markAsDismissed(4440).Text, obj5);
  obj[1] = items2;
  const items4 = [callback2(closure_5, obj), ];
  const obj6 = { style: tmp.footer, children: null };
  const obj7 = { text: null, onPress: null };
  const intl3 = tmp2(1236).intl;
  obj7[0] = intl3.string(markAsDismissed(1236).t.Pt547C);
  obj7[1] = function onPress() {
    closure_1_1(closure_1_2[9]).hideActionSheet();
    if (markAsDismissed != null) {
      tmp3(closure_1_7.PRIMARY);
    }
    const obj = closure_1_1(closure_1_2[9]);
    const tmp = closure_1_2;
    const result = markAsDismissed(closure_1_2[17]).navigateToAppIconSettings();
  };
  const items5 = [callback(markAsDismissed(4879).Button, obj7), ];
  const obj8 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(1236).intl;
  obj8[1] = intl4.string(markAsDismissed(1236).t.iSrIIZ);
  obj8[2] = callback;
  items5[1] = callback(markAsDismissed(4879).Button, obj8);
  obj6[1] = items5;
  items4[1] = callback2(closure_5, obj6);
  obj[2] = items4;
  return callback2(markAsDismissed(5569).BottomSheet, obj);
};