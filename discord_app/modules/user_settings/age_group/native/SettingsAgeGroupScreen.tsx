// discord_app/modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { MobileSetting } from "MobileSetting";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
function SettingsAgeGroupHeader() {
  let obj = { style: createCacheKey().headerContainer, children: null };
  const callback = React.useCallback(() => {
    const obj = callback(7720);
    obj.openUrl(callback(1945).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, []);
  obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.string(require("../../../age_assurance/AgeAssurance.messages.js").PY4MA0);
  const items = [callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), ];
  obj = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl2.format(require("../../../age_assurance/AgeAssurance.messages.js")["1DN29p"], { handleOnHelpUrlHook: callback });
  items[1] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
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
    let obj = callback(10361);
    obj = { sections: null, ListHeaderComponent: null };
    obj = { label: null, settings: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback2(2803)["5Mi5TE"]);
    const items = [, ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1] } = closure_5);
    obj[1] = items;
    const items1 = [obj];
    obj[0] = items1;
    obj[1] = closure_10;
    return obj.createList(obj);
  }, []);
  return callback(require("../../../settings/native/renderer/SettingLayout.tsx"), { node });
};