import noop from "noop";
import { View } from "get ActivityIndicator";
import recomputeFromAppTokens from "recomputeFromAppTokens";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { sheet: null, content: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: 16, paddingRight: 16, paddingBottom: 24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("recomputeFromAppTokens").fileFinishedImporting("modules/app_dms/native/AppDMOptionsBottomSheet.tsx");

export default function AppDMOptionsBottomSheet(userId) {
  userId = userId.userId;
  const channel = userId.channel;
  const application = userId.application;
  let stateFromStores;
  let tmp = createCacheKey();
  let obj = userId(application[7]);
  const items = [recomputeFromAppTokens];
  stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (application != null) {
      id = application.id;
    }
    return outer1_5.getNewestTokenForApplication(id);
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
      let obj = userId(application[10]);
      obj = { screen: null, params: null };
      obj[0] = outer1_6.AUTHORIZED_APP;
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
  obj = { startExpanded: true, backgroundStyles: tmp.sheet, children: null };
  obj = { style: tmp.content, children: null };
  const obj1 = { hasIcons: false, children: null };
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