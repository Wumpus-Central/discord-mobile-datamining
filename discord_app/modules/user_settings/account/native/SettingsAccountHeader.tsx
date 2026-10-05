// discord_app/modules/user_settings/account/native/SettingsAccountHeader.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl from "../../../../intl/index.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import UserSettingsAccountUnverifiedHeader from "UserSettingsAccountUnverifiedHeader.tsx";
import openUserSettings from "../../core/native/openUserSettings.tsx";
import Constants2 from "../../../safety_common/Constants.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import react from "../../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let obj2;
const View = react_native.View;
const AnalyticsSections = Constants.AnalyticsSections;
const SafetySettingsNoticeType = Constants2.SafetySettingsNoticeType;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { header: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {
          label: intl.t.zqv4nV,
          labelHook() {
            const obj = openUserSettings;
            const obj2 = { screen: constants.SETTINGS_CONTENT_AND_SOCIAL };
            obj.openUserSettings(obj2);
          },
          noticeType: SafetySettingsNoticeType.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
        };
        const tmp7 = SafetySettingsNoticeDefault;
        const tmp9 = React4(tmp7, obj2);
        cResult[0] = tmp9;
        first = tmp9;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let obj = {
        label: intl.t.zqv4nV,
        labelHook() {
          const obj = openUserSettings;
          const obj2 = { screen: constants.SETTINGS_CONTENT_AND_SOCIAL };
          obj.openUserSettings(obj2);
        },
        noticeType: SafetySettingsNoticeType.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
      };
      const tmp = SafetySettingsNoticeDefault;
      return React4(tmp, obj);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let blockedOrIgnoredIDs;
        let currentUser;
        let items2;
        let obj3;
        let tmp11;
        let tmp12;
        let tmp5;
        let tmp6;
        let tmp9;
        let obj = react2;
        const cResult = obj.c(15);
        const tmp4 = closure_11();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          const fn = function o() {
            return currentUser.getCurrentUser();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const tmpResult = get_initialized;
        const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
        if (cResult[2] !== stateFromStores) {
          const tmpResult3 = UserSettingsAccountUnverifiedHeader;
          const bannerText = tmpResult3.getBannerText(stateFromStores);
          cResult[2] = stateFromStores;
          cResult[3] = bannerText;
          tmp9 = bannerText;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [RelationshipStore];
          const fn2 = function p() {
            return blockedOrIgnoredIDs.getBlockedOrIgnoredIDs().size > 0;
          };
          cResult[4] = items1;
          cResult[5] = fn2;
          tmp12 = fn2;
          tmp11 = items1;
        } else {
          tmp11 = cResult[4];
          tmp12 = cResult[5];
        }
        const tmpResult4 = get_initialized;
        const stateFromStores1 = tmpResult4.useStateFromStores(tmp11, tmp12);
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor() {
              const obj = EmailVerificationModalActionCreatorsDefault;
              obj.open();
            }
          }
          cResult[6] = N;
        } else {
          class N {
            constructor() {
              const obj = EmailVerificationModalActionCreatorsDefault;
              obj.open();
            }
          }
        }
        if (null != tmp9) {
          class N {
            constructor() {
              const obj = EmailVerificationModalActionCreatorsDefault;
              obj.open();
            }
          }
          if (cResult[9] !== tmp9) {
            let tmp19;
            class N {
              constructor() {
                const obj = EmailVerificationModalActionCreatorsDefault;
                obj.open();
              }
            }
            if (null != tmp9) {
              class N {
                constructor() {
                  const obj = EmailVerificationModalActionCreatorsDefault;
                  obj.open();
                }
              }
              ({ title: obj5.label, title: obj5.accessibilityLabel } = tmp9);
              const obj2 = {
                onPress: N,
                variant: "danger",
                label: null,
                accessibilityLabel: null,
                trailing: React4(components_Button_Button.Button, obj3),
                start: true,
                end: true,
              };
              const TableRow = TableRow2.TableRow;
              obj3 = { text: null, accessibilityLabel: null, onPress: N };
              ({ button: obj6.text, button: obj6.accessibilityLabel } = tmp9);
              tmp19 = React4(TableRow, obj2);
            }
            cResult[9] = tmp9;
            cResult[10] = tmp19;
          } else {
            class N {
              constructor() {
                const obj = EmailVerificationModalActionCreatorsDefault;
                obj.open();
              }
            }
          }
          if (cResult[11] === tmp4.header) {
            class N {
              constructor() {
                const obj = EmailVerificationModalActionCreatorsDefault;
                obj.open();
              }
            }
          }
          const obj4 = { style: tmp4.header, children: items2 };
          items2 = [tmp17, tmp18];
          cResult[11] = tmp4.header;
          cResult[12] = tmp17;
          cResult[13] = tmp18;
          cResult[14] = authStore(View, obj4);
          const tmp23 = authStore(View, obj4);
        } else {
          class N {
            constructor() {
              const obj = EmailVerificationModalActionCreatorsDefault;
              obj.open();
            }
          }
        }
        return tmp16;
      }
    : () => {
        let blockedOrIgnoredIDs;
        let currentUser;
        let items2;
        let obj10;
        let tmp9Result;
        const tmp = closure_11();
        let obj = get_initialized;
        const items = [UserStore];
        const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
        const obj2 = UserSettingsAccountUnverifiedHeader;
        const bannerText = obj2.getBannerText(stateFromStores);
        const items1 = [RelationshipStore];
        const obj3 = get_initialized;
        const stateFromStores1 = obj3.useStateFromStores(
          items1,
          () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs().size > 0,
        );
        const callback = react.useCallback(() => {
          const obj = EmailVerificationModalActionCreatorsDefault;
          obj.open();
        }, []);
        if (null != bannerText) {
          let tmp11 = null;
          const obj4 = { style: tmp.header, children: items2 };
          if (stateFromStores1) {
            tmp11 = React4(closure_12, {});
          }
          items2 = [tmp11];
          let tmp14 = null;
          if (null != bannerText) {
            ({ title: obj5.label, title: obj5.accessibilityLabel } = bannerText);
            const obj9 = {
              onPress: callback,
              variant: "danger",
              label: null,
              accessibilityLabel: null,
              trailing: React4(components_Button_Button.Button, obj10),
              start: true,
              end: true,
            };
            const TableRow = TableRow2.TableRow;
            obj10 = { text: null, accessibilityLabel: null, onPress: callback };
            ({ button: obj6.text, button: obj6.accessibilityLabel } = bannerText);
            tmp14 = React4(TableRow, obj9);
          }
          items2[1] = tmp14;
          tmp9Result = authStore(View, obj4);
        } else {
          tmp9Result = null;
        }
        return tmp9Result;
      },
);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountHeader.tsx");

export default memoResult;
