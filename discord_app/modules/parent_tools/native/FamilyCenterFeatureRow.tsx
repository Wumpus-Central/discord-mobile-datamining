// === Module 14310: FamilyCenterFeatureRows ===

// Module 14310 (FamilyCenterFeatureRows)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2336 */;
import Stack from "Stack" /* 4738 */;
import Text from "Text" /* 4739 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6317 */;
import EyeIcon from "EyeIcon" /* 8644 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11146 */;
import registerAssetDefault from "registerAsset" /* 11599 */;
import registerAssetDefault2 from "registerAsset" /* 12422 */;
import QrCodeIcon from "QrCodeIcon" /* 14307 */;
import registerAssetDefault3 from "registerAsset" /* 14311 */;
import ChatCheckIcon from "ChatCheckIcon" /* 14312 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { tableGroup: null };
createCacheKey = { marginTop: 20, marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterFeatureRow.tsx");

export default function FamilyCenterFeatureRows() {
  let obj = useAgeSpecificText;
  const intl = getSystemLocale.intl;
  const tmp = callback3();
  const intl2 = getSystemLocale.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(messagesProxyDefault.qITXhY), intl2.string(messagesProxyDefault.bmhCnL));
  obj1 = useAgeSpecificText;
  const intl3 = getSystemLocale.intl;
  const stringResult = intl.string(messagesProxyDefault.qITXhY);
  const intl4 = getSystemLocale.intl;
  const ageSpecificText1 = obj1.useAgeSpecificText(intl3.string(messagesProxyDefault.t7SkFy), intl4.string(messagesProxyDefault["68zfxD"]));
  let obj2 = useAgeSpecificText;
  const intl5 = getSystemLocale.intl;
  const stringResult1 = intl3.string(messagesProxyDefault.t7SkFy);
  const intl6 = getSystemLocale.intl;
  obj = { icon: null, IconComponent: null, header: null, description: null };
  const ageSpecificText2 = obj2.useAgeSpecificText(intl5.string(messagesProxyDefault["+pi4Yt"]), intl6.string(messagesProxyDefault["1xPTwE"]));
  obj[0] = registerAssetDefault3;
  obj[1] = ChatCheckIcon.ChatCheckIcon;
  const intl7 = getSystemLocale.intl;
  obj[2] = intl7.string(messagesProxyDefault["001l3m"]);
  obj[3] = ageSpecificText;
  const items = [obj, , ];
  obj = { icon: registerAssetDefault, IconComponent: EyeIcon.EyeIcon, header: null, description: null };
  const intl8 = getSystemLocale.intl;
  obj[2] = intl8.string(messagesProxyDefault.yipAeP);
  obj[3] = ageSpecificText1;
  items[1] = obj;
  obj1 = { icon: registerAssetDefault2, IconComponent: QrCodeIcon.QrCodeIcon, header: null, description: null };
  const intl9 = getSystemLocale.intl;
  obj1[2] = intl9.string(messagesProxyDefault.hhOuMe);
  obj1[3] = ageSpecificText2;
  items[2] = obj1;
  obj2 = { style: tmp.tableGroup, children: null };
  const obj3 = { spacing: 8, children: null };
  const obj4 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl10 = getSystemLocale.intl;
  obj4[3] = intl10.string(messagesProxyDefault["6JkHSg"]);
  const items1 = [callback(Text.Text, obj4), ];
  const stringResult2 = intl5.string(messagesProxyDefault["+pi4Yt"]);
  items1[1] = callback(TableRowGroupTitle.TableRowGroup, {
    hasIcons: true,
    children: items.map((header) => {
      header = header.header;
      ({ description, icon, IconComponent } = header);
      return callback2(callback(6322).TableRow, { label: header, subLabel: description, icon: callback2(callback(6322).TableRow.Icon, { source: icon, IconComponent }) }, header);
    })
  });
  obj3[1] = items1;
  obj2[1] = callback2(Stack.Stack, obj3);
  return callback(View, obj2);
};