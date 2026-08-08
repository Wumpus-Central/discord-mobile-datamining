// discord_app/modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { MobileSetting } from "MobileSetting";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../../age_assurance/AgeAssurance.messages.js";
import { SettingLayout } from "../../../settings/native/renderer/SettingLayout.tsx";

let error;
let metroImportAll;
const require = arg1;
function SettingsAgeGroupHeader() {
  let obj = { style: createCacheKey().headerContainer, children: null };
  const callback = React.useCallback(() => {
    const obj = callback(7797);
    obj.openUrl(callback(1974).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, []);
  obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(messagesProxy.PY4MA0);
  const items = [callback(Text.Text, obj), ];
  obj = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.format(messagesProxy["1DN29p"], { handleOnHelpUrlHook: callback });
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { headerContainer: null };
createCacheKey = { gap: require("Themes").space.PX_4, paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx");

export default function SettingsAgeGroupScreen() {
  const node = React.useMemo(() => {
    let obj = callback(10446);
    obj = { sections: null, ListHeaderComponent: null };
    obj = { label: null, settings: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback2(2802)["5Mi5TE"]);
    const items = [, ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1] } = closure_5);
    obj[1] = items;
    const items1 = [obj];
    obj[0] = items1;
    obj[1] = closure_10;
    return obj.createList(obj);
  }, []);
  return callback(SettingLayout, { node });
};