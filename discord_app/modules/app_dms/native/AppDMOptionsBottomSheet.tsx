// discord_app/modules/app_dms/native/AppDMOptionsBottomSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import AuthorizedAppsStore from "../../oauth2/AuthorizedAppsStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, userId;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { sheet: obj2, content: { paddingLeft: 16, paddingRight: 16, paddingBottom: 24 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_9 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let application;
      let content;
      let first;
      let items2;
      let sheet;
      let tmp9;
      let tmp = userId;
      let obj = userId(application[8]);
      const cResult = obj.c(27);
      userId = userId.userId;
      const channel = userId.channel;
      application = userId.application;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthorizedAppsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      let id;
      const tmp7 = cResult[1];
      if (application != null) {
        id = application.id;
      }
      if (tmp7 !== id) {
        let id1;
        if (application != null) {
          id1 = application.id;
        }
        class S {
          constructor() {
            let id;
            const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
            if (application != null) {
              id = application.id;
            }
            return getNewestTokenForApplication(id);
          }
        }
        cResult[1] = id1;
        cResult[2] = S;
        tmp9 = S;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = tmp(application[9]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
      if (cResult[3] === channel.id) {
        let tmp12;
        if (cResult[4] === userId) {
          tmp12 = cResult[5];
        }
        if (cResult[6] === application) {
          let tmp13;
          let tmp17;
          let tmp16;
          let tmp22;
          let tmp25;
          if (cResult[7] === stateFromStores) {
            tmp13 = cResult[8];
          }
          const _Symbol = Symbol;
          class S {
            constructor() {
              let id;
              const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
              if (application != null) {
                id = application.id;
              }
              return getNewestTokenForApplication(id);
            }
          }
          if (tmp15 === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function k() {
              const obj = channel(application[13]);
              const response = obj.fetch();
            };
            const items1 = [];
            class S {
              constructor() {
                let id;
                const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
                if (application != null) {
                  id = application.id;
                }
                return getNewestTokenForApplication(id);
              }
            }
            cResult[9] = fn;
            cResult[10] = items1;
            tmp17 = items1;
            tmp16 = fn;
          } else {
            tmp16 = cResult[9];
            tmp17 = cResult[10];
          }
          const effect = stateFromStores.useEffect(tmp16, tmp17);
          const _Symbol2 = Symbol;
          ({ sheet, content } = tmp4);
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const string = tmp(tmp2[14]).intl.string;
            class S {
              constructor() {
                let id;
                const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
                if (application != null) {
                  id = application.id;
                }
                return getNewestTokenForApplication(id);
              }
            }
            cResult[11] = tmp21;
          }
          if (cResult[12] !== tmp12) {
            let obj2 = { label: null, onPress: tmp12 };
            class S {
              constructor() {
                let id;
                const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
                if (application != null) {
                  id = application.id;
                }
                return getNewestTokenForApplication(id);
              }
            }
            const tmp24 = closure_7(tmp(application[15]).TableRow, obj2);
            cResult[12] = tmp12;
            cResult[13] = tmp24;
            tmp22 = tmp24;
          } else {
            tmp22 = cResult[13];
          }
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const string2 = tmp(tmp2[14]).intl.string;
            class S {
              constructor() {
                let id;
                const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
                if (application != null) {
                  id = application.id;
                }
                return getNewestTokenForApplication(id);
              }
            }
            cResult[14] = tmp26;
            tmp25 = tmp26;
          } else {
            tmp25 = cResult[14];
          }
          if (cResult[15] === tmp13) {
            if (cResult[18] === tmp22) {
              let tmp31;
              if (cResult[19] === tmp28) {
                tmp31 = cResult[20];
              }
              if (cResult[21] === tmp4.content) {
                let tmp33;
                if (cResult[22] === tmp31) {
                  tmp33 = cResult[23];
                }
                if (cResult[24] === tmp4.sheet) {
                  let tmp36;
                  if (cResult[25] === tmp33) {
                    tmp36 = cResult[26];
                  }
                  return tmp36;
                }
                class S {
                  constructor() {
                    let id;
                    const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
                    if (application != null) {
                      id = application.id;
                    }
                    return getNewestTokenForApplication(id);
                  }
                }
                let obj3 = { startExpanded: true, backgroundStyles: sheet, children: tmp33 };
                const tmp37 = closure_7(tmp(application[17]).BottomSheet, obj3);
                cResult[24] = tmp4.sheet;
                cResult[25] = tmp33;
                cResult[26] = tmp37;
                tmp36 = tmp37;
              }
              class S {
                constructor() {
                  let id;
                  const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
                  if (application != null) {
                    id = application.id;
                  }
                  return getNewestTokenForApplication(id);
                }
              }
              let obj4 = { style: content, children: tmp31 };
              const tmp35 = closure_7(View, obj4);
              cResult[21] = tmp4.content;
              cResult[22] = tmp31;
              cResult[23] = tmp35;
              tmp33 = tmp35;
            }
            class S {
              constructor() {
                let id;
                const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
                if (application != null) {
                  id = application.id;
                }
                return getNewestTokenForApplication(id);
              }
            }
            const obj5 = { hasIcons: false, children: items2 };
            items2 = [tmp22, tmp28];
            const tmp32 = closure_8(tmp(application[16]).TableRowGroup, obj5);
            cResult[18] = tmp22;
            cResult[19] = tmp28;
            cResult[20] = tmp32;
            tmp31 = tmp32;
          }
          const obj6 = { label: tmp25, onPress: tmp13, disabled: null == stateFromStores };
          cResult[15] = tmp13;
          cResult[16] = null == stateFromStores;
          cResult[17] = closure_7(tmp(application[15]).TableRow, obj6);
          closure_7(tmp(application[15]).TableRow, obj6);
          class T {
            constructor() {
              const obj = { userId, channelId: channel.id };
              showUserProfileActionSheetDefault(obj);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet();
            }
          }
        }
        class S {
          constructor() {
            let id;
            const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
            if (application != null) {
              id = application.id;
            }
            return getNewestTokenForApplication(id);
          }
        }
        cResult[6] = application;
        cResult[7] = stateFromStores;
        cResult[8] = tmp14;
        tmp13 = tmp14;
      }
      class T {
        constructor() {
          const obj = { userId, channelId: channel.id };
          showUserProfileActionSheetDefault(obj);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        }
      }
      cResult[3] = channel.id;
      cResult[4] = userId;
      cResult[5] = T;
      tmp12 = T;
    }
  : (userId) => {
      let TableRowGroup;
      let intl;
      let intl2;
      let items3;
      let obj3;
      let obj4;
      userId = userId.userId;
      const channel = userId.channel;
      const application = userId.application;
      let tmp = closure_9();
      let obj = userId(application[9]);
      const items = [AuthorizedAppsStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        let id;
        const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
        if (application != null) {
          id = application.id;
        }
        return getNewestTokenForApplication(id);
      });
      const items1 = [channel.id, userId];
      const items2 = [application, stateFromStores];
      const callback = stateFromStores.useCallback(() => {
        const obj = { userId, channelId: channel.id };
        showUserProfileActionSheetDefault(obj);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
      }, items1);
      const callback1 = stateFromStores.useCallback(() => {
        let obj3;
        const tmp = null != application && null != stateFromStores;
        if (tmp) {
          const obj2 = { screen: UserSettingsSections.AUTHORIZED_APP, params: obj3 };
          obj3 = { oauth2Token: stateFromStores };
          const obj = openUserSettings;
          obj.openUserSettings(obj2);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet();
        }
      }, items2);
      const effect = stateFromStores.useEffect(() => {
        const obj = channel(application[13]);
        const response = obj.fetch();
      }, []);
      let obj2 = { startExpanded: true, backgroundStyles: tmp.sheet, children: closure_7(View, obj3) };
      obj3 = { style: tmp.content, children: closure_8(TableRowGroup, obj4) };
      BottomSheet = userId(application[17]).BottomSheet;
      obj4 = { hasIcons: false, children: items3 };
      TableRowGroup = userId(application[16]).TableRowGroup;
      const obj5 = { label: intl.string(userId(application[14]).t.iXAna6), onPress: callback };
      const TableRow = userId(application[15]).TableRow;
      intl = userId(application[14]).intl;
      items3 = [closure_7(TableRow, obj5)];
      const obj6 = {
        label: intl2.string(userId(application[14]).t.KUsDNI),
        onPress: callback1,
        disabled: null == stateFromStores,
      };
      const TableRow2 = userId(application[15]).TableRow;
      intl2 = userId(application[14]).intl;
      items3[1] = closure_7(TableRow2, obj6);
      return closure_7(BottomSheet, obj2);
    };
const result = size.fileFinishedImporting("modules/app_dms/native/AppDMOptionsBottomSheet.tsx");

export default tmp3;
