// discord_app/modules/app_dms/native/AppDMOptionsBottomSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import recomputeFromAppTokens from "../../oauth2/AuthorizedAppsStore.tsx";
import { UserSettingsSections } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: 16, paddingRight: 16, paddingBottom: 24 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/app_dms/native/AppDMOptionsBottomSheet.tsx");

export default function AppDMOptionsBottomSheet(userId) {
  userId = userId.userId;
  const channel = userId.channel;
  const application = userId.application;
  let tmp = callback3();
  let obj = userId(application[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (application != null) {
      id = application.id;
    }
    return closure_1_5.getNewestTokenForApplication(id);
  });
  const items1 = [channel.id, userId];
  const items2 = [application, stateFromStores];
  const callback = stateFromStores.useCallback(() => {
    channel(application[8])({ userId, channelId: channel.id });
    channel(application[9]).hideActionSheet();
  }, items1);
  const callback1 = stateFromStores.useCallback(() => {
    let tmp = null != application;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      userId(application[10]);
      let obj = { screen: null, params: null };
      obj[0] = UserSettingsSections.AUTHORIZED_APP;
      obj = { oauth2Token: null };
      obj[0] = stateFromStores;
      obj[1] = obj;
      obj.openUserSettings(obj);
      channel(application[9]).hideActionSheet();
      const obj4 = channel(application[9]);
    }
  }, items2);
  const effect = stateFromStores.useEffect(() => {
    const response = channel(application[11]).fetch();
  }, []);
  obj = { style: tmp.content, children: null };
  obj1 = { hasIcons: false, children: null };
  const obj2 = { label: null, onPress: null };
  const intl = userId(application[15]).intl;
  obj2[0] = intl.string(userId(application[15]).t.iXAna6);
  obj2[1] = callback;
  const items3 = [callback(userId(application[14]).TableRow, obj2), ];
  const obj3 = { label: null, onPress: null, disabled: null };
  const intl2 = userId(application[15]).intl;
  obj3[0] = intl2.string(userId(application[15]).t.KUsDNI);
  obj3[1] = callback1;
  obj3[2] = null == stateFromStores;
  items3[1] = callback(userId(application[14]).TableRow, obj3);
  obj1[1] = items3;
  obj[1] = callback2(userId(application[13]).TableRowGroup, obj1);
  obj[2] = callback(View, obj);
  return callback(userId(application[12]).BottomSheet, obj);
};