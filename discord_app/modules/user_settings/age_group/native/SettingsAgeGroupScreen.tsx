// discord_app/modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../age_assurance/AgeAssurance.messages.js";
import Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef14689 from "../../../settings/native/renderer/SettingLayout.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { MobileUserSettings } from "../../core/native/SettingsConstants.tsx";
import { HelpdeskArticles } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function SettingsAgeGroupHeader() {
  let obj = { style: callback3().headerContainer, children: null };
  const callback = React.useCallback(() => {
    const obj = callback(8411);
    obj.openUrl(callback(2024).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, []);
  obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(messagesProxyDefault.PY4MA0);
  const items = [callback(Text.Text, obj)];
  obj = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.format(messagesProxyDefault["1DN29p"], { handleOnHelpUrlHook: callback });
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { headerContainer: null };
createCacheKey = {
  gap: ThemesDefault.space.PX_4,
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingTop: ThemesDefault.space.PX_16,
};
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx",
);

export default function SettingsAgeGroupScreen() {
  isTinyBroncoSettingsEnabled = isTinyBroncoSettingsEnabled(14682).useIsTinyBroncoSettingsEnabled();
  let items = [isTinyBroncoSettingsEnabled];
  const node = React.useMemo(() => {
    let obj = isTinyBroncoSettingsEnabled(closure_1_2[13]);
    obj = { sections: null, ListHeaderComponent: null };
    obj = { label: null, settings: null };
    const intl = isTinyBroncoSettingsEnabled(closure_1_2[10]).intl;
    obj[0] = intl.string(closure_1_1(closure_1_2[11])["5Mi5TE"]);
    const items = [, ,];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1], AGE_GROUP_CONFIRM_ACCOUNT_STATUS: arr[2] } = closure_1_5);
    obj[1] = items;
    const items1 = [obj];
    obj[0] = items1;
    if (isTinyBroncoSettingsEnabled) {
      let TinyBroncoAgeGroupHeader = isTinyBroncoSettingsEnabled(closure_1_2[14]).TinyBroncoAgeGroupHeader;
    } else {
      TinyBroncoAgeGroupHeader = closure_1_10;
    }
    obj[1] = TinyBroncoAgeGroupHeader;
    return obj.createList(obj);
  }, items);
  return callback(_modDef14689, { node });
}
