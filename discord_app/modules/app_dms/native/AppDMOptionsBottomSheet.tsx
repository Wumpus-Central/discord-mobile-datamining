// === Module 13277: AppDMOptionsBottomSheet ===

// Module 13277 (AppDMOptionsBottomSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import noop from "module_19" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7107 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { sheet: null, content: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.sheet = createStyles;
createStyles.content = { paddingLeft: 16, paddingRight: 16, paddingBottom: 24 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_dms/native/AppDMOptionsBottomSheet.tsx");

export default function AppDMOptionsBottomSheet(userId) {
  userId = userId.userId;
  const channel = userId.channel;
  const application = userId.application;
  let tmp = closure_9();
  let obj = userId(application[7]);
  const items = [AuthorizedAppsStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (application != null) {
      id = application.id;
    }
    return AuthorizedAppsStore.getNewestTokenForApplication(id);
  });
  const items1 = [channel.id, userId];
  const items2 = [application, stateFromStores];
  const callback = stateFromStores.useCallback(() => {
    showUserProfileActionSheetDefault({ userId, channelId: channel.id });
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  const callback1 = stateFromStores.useCallback(() => {
    let tmp = null != application;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      let obj = { screen: UserSettingsSections.AUTHORIZED_APP, params: null };
      obj = { oauth2Token: stateFromStores };
      obj.params = obj;
      obj.openUserSettings(obj);
      ActionSheetActionCreatorsDefault.hideActionSheet();
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
  obj2.label = intl.string(userId(application[15]).t.iXAna6);
  obj2.onPress = callback;
  const items3 = [closure_7(userId(application[14]).TableRow, obj2), ];
  const obj3 = { label: null, onPress: null, disabled: null };
  const intl2 = userId(application[15]).intl;
  obj3.label = intl2.string(userId(application[15]).t.KUsDNI);
  obj3.onPress = callback1;
  obj3.disabled = null == stateFromStores;
  items3[1] = closure_7(userId(application[14]).TableRow, obj3);
  obj1.children = items3;
  obj.children = closure_8(userId(application[13]).TableRowGroup, obj1);
  obj.children = closure_7(View, obj);
  return closure_7(userId(application[12]).BottomSheet, obj);
};