// discord_app/modules/parent_tools/native/FamilyCenterFeatureRow.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../FamilyCenter.messages.js";
import Text from "../../../design/components/Text/native/Text.tsx";
import Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import TableRowGroupTitle from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import EyeIcon from "../../../design/components/Icon/native/redesign/generated/EyeIcon.tsx";
import registerAssetDefault from "../../../../_runtime/09913_registerAsset.js";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import registerAssetDefault2 from "../../../../_runtime/11912_registerAsset.js";
import QrCodeIcon from "../../../design/components/Icon/native/redesign/generated/QrCodeIcon.tsx";
import registerAssetDefault3 from "../../../../_runtime/14459_registerAsset.js";
import ChatCheckIcon from "../../../design/components/Icon/native/redesign/generated/ChatCheckIcon.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
  obj = { icon: registerAssetDefault2, IconComponent: EyeIcon.EyeIcon, header: null, description: null };
  const intl8 = getSystemLocale.intl;
  obj[2] = intl8.string(messagesProxyDefault.yipAeP);
  obj[3] = ageSpecificText1;
  items[1] = obj;
  obj1 = { icon: registerAssetDefault, IconComponent: QrCodeIcon.QrCodeIcon, header: null, description: null };
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
      return callback2(callback(5567).TableRow, { label: header, subLabel: description, icon: callback2(callback(5567).TableRow.Icon, { source: icon, IconComponent }) }, header);
    })
  });
  obj3[1] = items1;
  obj2[1] = callback2(Stack.Stack, obj3);
  return callback(View, obj2);
};