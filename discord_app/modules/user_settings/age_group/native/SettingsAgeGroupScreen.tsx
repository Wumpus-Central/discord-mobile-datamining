// === Module 14127: SettingsAgeGroupHeader ===

// Module 14127 (SettingsAgeGroupHeader)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2853 */;
import Text from "Text" /* 4734 */;
import _modDef13991 from "module_13991" /* 13991 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MobileUserSettings } from "MobileUserSettings" /* 8198 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function SettingsAgeGroupHeader() {
  let obj = { style: callback3().headerContainer, children: null };
  const callback = React.useCallback(() => {
    const obj = callback(5428);
    obj.openUrl(callback(1993).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, []);
  obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(messagesProxyDefault.PY4MA0);
  const items = [callback(Text.Text, obj), ];
  obj = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.format(messagesProxyDefault["1DN29p"], { handleOnHelpUrlHook: callback });
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { headerContainer: null };
createCacheKey = { gap: ThemesDefault.space.PX_4, paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx");

export default function SettingsAgeGroupScreen() {
  const node = React.useMemo(() => {
    let obj = callback(10669);
    obj = { sections: null, ListHeaderComponent: null };
    obj = { label: null, settings: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback2(2853)["5Mi5TE"]);
    const items = [, ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1] } = closure_5);
    obj[1] = items;
    const items1 = [obj];
    obj[0] = items1;
    obj[1] = closure_10;
    return obj.createList(obj);
  }, []);
  return callback(_modDef13991, { node });
};