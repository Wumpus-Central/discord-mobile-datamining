// discord_app/modules/app_dms/native/AppDMOptionsBottomSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthorizedAppsStore from "../../oauth2/AuthorizedAppsStore.tsx";

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  sheet: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
  content: { paddingLeft: 16, paddingRight: 16, paddingBottom: 24 },
};
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_dms/native/AppDMOptionsBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      const cResult = userId(application[8]).c(27);
      userId = userId.userId;
      const channel = userId.channel;
      application = userId.application;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthorizedAppsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      let id;
      if (application != null) {
        id = application.id;
      }
      if (cResult[1] !== id) {
        let id1;
        if (application != null) {
          id1 = application.id;
        }
        class S {
          constructor() {
            id = undefined;
            tmp = closure_5;
            if (application != null) {
              id = application.id;
            }
            return closure_5.getNewestTokenForApplication(id);
          }
        }
        cResult[1] = id1;
        cResult[2] = S;
        let tmp8 = S;
      } else {
        tmp8 = cResult[2];
      }
      let obj = userId(application[8]);
      const stateFromStores = userId(application[9]).useStateFromStores(first, tmp8);
      if (cResult[3] === channel.id) {
        if (cResult[4] === userId) {
          let tmp11 = cResult[5];
        }
        if (cResult[6] === application) {
          if (cResult[7] === stateFromStores) {
            let tmp12 = cResult[8];
          }
          const _Symbol = Symbol;
          class S {
            constructor() {
              id = undefined;
              tmp = closure_5;
              if (application != null) {
                id = application.id;
              }
              return closure_5.getNewestTokenForApplication(id);
            }
          }
          if (tmp14 === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function k() {
              const response = channel(application[13]).fetch();
            };
            const items1 = [];
            class S {
              constructor() {
                id = undefined;
                tmp = closure_5;
                if (application != null) {
                  id = application.id;
                }
                return closure_5.getNewestTokenForApplication(id);
              }
            }
            cResult[9] = fn;
            cResult[10] = items1;
            let tmp16 = items1;
            let tmp15 = fn;
          } else {
            tmp15 = cResult[9];
            tmp16 = cResult[10];
          }
          const effect = stateFromStores.useEffect(tmp15, tmp16);
          const _Symbol2 = Symbol;
          ({ sheet, content } = tmp4);
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const string = tmp(tmp2[14]).intl.string;
            class S {
              constructor() {
                id = undefined;
                tmp = closure_5;
                if (application != null) {
                  id = application.id;
                }
                return closure_5.getNewestTokenForApplication(id);
              }
            }
            cResult[11] = tmp20;
          }
          if (cResult[12] !== tmp11) {
            let obj2 = { label: null, onPress: null };
            class S {
              constructor() {
                id = undefined;
                tmp = closure_5;
                if (application != null) {
                  id = application.id;
                }
                return closure_5.getNewestTokenForApplication(id);
              }
            }
            obj2.onPress = tmp11;
            const tmp23 = closure_7(tmp(tmp2[15]).TableRow, obj2);
            cResult[12] = tmp11;
            cResult[13] = tmp23;
            let tmp21 = tmp23;
          } else {
            tmp21 = cResult[13];
          }
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const string2 = tmp(tmp2[14]).intl.string;
            class S {
              constructor() {
                id = undefined;
                tmp = closure_5;
                if (application != null) {
                  id = application.id;
                }
                return closure_5.getNewestTokenForApplication(id);
              }
            }
            cResult[14] = tmp25;
            let tmp24 = tmp25;
          } else {
            tmp24 = cResult[14];
          }
          if (cResult[15] === tmp12) {
            if (cResult[18] === tmp21) {
              if (cResult[19] === tmp27) {
                let tmp30 = cResult[20];
              }
              if (cResult[21] === tmp4.content) {
                if (cResult[22] === tmp30) {
                  let tmp32 = cResult[23];
                }
                if (cResult[24] === tmp4.sheet) {
                  if (cResult[25] === tmp32) {
                    let tmp35 = cResult[26];
                  }
                  return tmp35;
                }
                class S {
                  constructor() {
                    id = undefined;
                    tmp = closure_5;
                    if (application != null) {
                      id = application.id;
                    }
                    return closure_5.getNewestTokenForApplication(id);
                  }
                }
                let obj3 = { startExpanded: true, backgroundStyles: sheet, children: tmp32 };
                const tmp36 = closure_7(tmp(tmp2[17]).BottomSheet, obj3);
                cResult[24] = tmp4.sheet;
                cResult[25] = tmp32;
                cResult[26] = tmp36;
                tmp35 = tmp36;
              }
              class S {
                constructor() {
                  id = undefined;
                  tmp = closure_5;
                  if (application != null) {
                    id = application.id;
                  }
                  return closure_5.getNewestTokenForApplication(id);
                }
              }
              let obj4 = { style: content, children: tmp30 };
              const tmp34 = closure_7(View, obj4);
              cResult[21] = tmp4.content;
              cResult[22] = tmp30;
              cResult[23] = tmp34;
              tmp32 = tmp34;
            }
            class S {
              constructor() {
                id = undefined;
                tmp = closure_5;
                if (application != null) {
                  id = application.id;
                }
                return closure_5.getNewestTokenForApplication(id);
              }
            }
            const obj5 = { hasIcons: false, children: null };
            const items2 = [tmp21, tmp27];
            obj5.children = items2;
            const tmp31 = closure_8(tmp(tmp2[16]).TableRowGroup, obj5);
            cResult[18] = tmp21;
            cResult[19] = tmp27;
            cResult[20] = tmp31;
            tmp30 = tmp31;
          }
          const obj6 = { label: tmp24, onPress: tmp12, disabled: null == stateFromStores };
          cResult[15] = tmp12;
          cResult[16] = null == stateFromStores;
          cResult[17] = closure_7(tmp(tmp2[15]).TableRow, obj6);
          class T {
            constructor() {
              obj = { userId, channelId: channel.id };
              tmp = closure_1(closure_2[10])(obj);
              obj2 = closure_1(closure_2[11]);
              hideActionSheetResult = obj2.hideActionSheet();
              return;
            }
          }
          const tmp29 = closure_7(tmp(tmp2[15]).TableRow, obj6);
        }
        class S {
          constructor() {
            id = undefined;
            tmp = closure_5;
            if (application != null) {
              id = application.id;
            }
            return closure_5.getNewestTokenForApplication(id);
          }
        }
        cResult[6] = application;
        cResult[7] = stateFromStores;
        cResult[8] = tmp13;
        tmp12 = tmp13;
      }
      class T {
        constructor() {
          obj = { userId, channelId: channel.id };
          tmp = closure_1(closure_2[10])(obj);
          obj2 = closure_1(closure_2[11]);
          hideActionSheetResult = obj2.hideActionSheet();
          return;
        }
      }
      cResult[3] = channel.id;
      cResult[4] = userId;
      cResult[5] = T;
      tmp11 = T;
      const tmpResult = userId(application[9]);
    }
  : (userId) => {
      userId = userId.userId;
      const channel = userId.channel;
      const application = userId.application;
      let tmp = closure_9();
      const items = [AuthorizedAppsStore];
      const stateFromStores = userId(application[9]).useStateFromStores(items, () => {
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
          const obj2 = { screen: UserSettingsSections.AUTHORIZED_APP, params: null };
          const obj3 = { oauth2Token: stateFromStores };
          obj2.params = obj3;
          openUserSettings.openUserSettings(obj2);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
      }, items2);
      const effect = stateFromStores.useEffect(() => {
        const response = channel(application[13]).fetch();
      }, []);
      let obj2 = { startExpanded: true, backgroundStyles: tmp.sheet, children: null };
      let obj3 = { style: tmp.content, children: null };
      let obj4 = { hasIcons: false, children: null };
      const obj5 = { label: null, onPress: null };
      const intl = userId(application[14]).intl;
      obj5.label = intl.string(userId(application[14]).t.iXAna6);
      obj5.onPress = callback;
      const items3 = [closure_7(userId(application[15]).TableRow, obj5)];
      const obj6 = { label: null, onPress: null, disabled: null };
      const intl2 = userId(application[14]).intl;
      obj6.label = intl2.string(userId(application[14]).t.KUsDNI);
      obj6.onPress = callback1;
      obj6.disabled = null == stateFromStores;
      items3[1] = closure_7(userId(application[15]).TableRow, obj6);
      obj4.children = items3;
      obj3.children = closure_8(userId(application[16]).TableRowGroup, obj4);
      obj2.children = closure_7(View, obj3);
      return closure_7(userId(application[17]).BottomSheet, obj2);
    };
