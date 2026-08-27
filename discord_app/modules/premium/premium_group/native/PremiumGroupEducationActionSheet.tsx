// === Module 13087: PremiumGroupEducationActionSheet ===

// Module 13087 (PremiumGroupEducationActionSheet)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2985 */;
import SubscriptionStatusTypes from "SubscriptionStatusTypes" /* 4121 */;
import Text from "Text" /* 4441 */;
import Background from "Background" /* 5574 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7641 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const View = get_ActivityIndicator.View;
const HELP_CENTER_LINK = SubscriptionStatusTypes.HELP_CENTER_LINK;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: { marginTop: 32, marginHorizontal: 30 }, aboutContainer: null, warningIcon: null, aboutTextContainer: null, helpdeskText: null };
obj = { flexDirection: "row", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: ThemesDefault.radii.lg, marginBottom: 12 };
obj[1] = obj;
obj[2] = { margin: 16 };
obj[3] = { justifyContent: "center", flex: 1, marginRight: 30 };
obj[4] = { textAlign: "center", marginBottom: 24 };
let closure_7 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx");

export default function PremiumGroupEducationActionSheet(children) {
  const tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.aboutContainer, children: null };
  const items = [callback(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: tmp.warningIcon }), callback(View, { style: tmp.aboutTextContainer, children: callback(Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: children.aboutText }) })];
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: null };
  const intl = getSystemLocale.intl;
  obj3[3] = intl.format(messagesProxyDefault.ah1Ecm, { helpCenterLink: HELP_CENTER_LINK });
  items1[1] = callback(Text.Text, obj3);
  obj[1] = items1;
  obj[0] = callback2(View, obj);
  return callback(Background.BottomSheet, obj);
};