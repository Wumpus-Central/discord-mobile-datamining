// discord_app/modules/user_settings/account/native/SettingsAccountHeader.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import UserSettingsAccountUnverifiedHeader from "UserSettingsAccountUnverifiedHeader.tsx";
import openUserSettings from "../../core/native/openUserSettings.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const AnalyticsSections = fn(1085).AnalyticsSections;
const SafetySettingsNoticeType = fn(7018).SafetySettingsNoticeType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5091);
let obj = { header: { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 } };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RestrictedAccountRedirect() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          label: util.t.zqv4nV,
          labelHook: function handleRestrictedAccountRedirect() {
            openUserSettings.openUserSettings({ screen: constants.SETTINGS_CONTENT_AND_SOCIAL });
          },
          noticeType: SafetySettingsNoticeType.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
        };
        const tmp9 = options(SafetySettingsNoticeDefault, obj2);
        cResult[0] = tmp9;
        let first = tmp9;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function RestrictedAccountRedirect() {
      const obj = {
        label: util.t.zqv4nV,
        labelHook: function handleRestrictedAccountRedirect() {
          openUserSettings.openUserSettings({ screen: constants.SETTINGS_CONTENT_AND_SOCIAL });
        },
        noticeType: SafetySettingsNoticeType.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
      };
      return options(SafetySettingsNoticeDefault, obj);
    };
ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountHeader.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SettingsAccountHeader() {
        const cResult = c.c(15);
        let header = closure_11();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          const fn = function c() {
            return currentUser.getCurrentUser();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
        if (cResult[2] !== stateFromStores) {
          const bannerText = UserSettingsAccountUnverifiedHeader.getBannerText(stateFromStores);
          cResult[2] = stateFromStores;
          cResult[3] = bannerText;
          let tmp8 = bannerText;
          const tmpResult3 = UserSettingsAccountUnverifiedHeader;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [RelationshipStore];
          const fn2 = function p() {
            return blockedOrIgnoredIDs.getBlockedOrIgnoredIDs().size > 0;
          };
          cResult[4] = items1;
          cResult[5] = fn2;
          let tmp11 = fn2;
          let tmp10 = items1;
        } else {
          tmp10 = cResult[4];
          tmp11 = cResult[5];
        }
        const tmpResult = initialize;
        const stateFromStores1 = initialize.useStateFromStores(tmp10, tmp11);
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              obj = closure_1_1(closure_1_2[16]);
              openResult = obj.open();
              return;
            }
          }
          cResult[6] = I;
        } else {
          class I {
            constructor() {
              obj = closure_1_1(closure_1_2[16]);
              openResult = obj.open();
              return;
            }
          }
        }
        if (null == tmp8) {
          class I {
            constructor() {
              obj = closure_1_1(closure_1_2[16]);
              openResult = obj.open();
              return;
            }
          }
          if (!stateFromStores1) {
            class I {
              constructor() {
                obj = closure_1_1(closure_1_2[16]);
                openResult = obj.open();
                return;
              }
            }
          }
        }
        if (cResult[7] !== stateFromStores1) {
          class I {
            constructor() {
              obj = closure_1_1(closure_1_2[16]);
              openResult = obj.open();
              return;
            }
          }
          if (stateFromStores1) {
            class I {
              constructor() {
                obj = closure_1_1(closure_1_2[16]);
                openResult = obj.open();
                return;
              }
            }
            const tmp16 = options(closure_12, {});
          }
          cResult[7] = stateFromStores1;
          cResult[8] = tmp16;
        } else {
          class I {
            constructor() {
              obj = closure_1_1(closure_1_2[16]);
              openResult = obj.open();
              return;
            }
          }
        }
        if (cResult[9] !== tmp8) {
          class I {
            constructor() {
              obj = closure_1_1(closure_1_2[16]);
              openResult = obj.open();
              return;
            }
          }
          if (null != tmp8) {
            class I {
              constructor() {
                obj = closure_1_1(closure_1_2[16]);
                openResult = obj.open();
                return;
              }
            }
            const obj2 = {
              onPress: I,
              variant: "danger",
              label: null,
              accessibilityLabel: null,
              trailing: null,
              start: true,
              end: true,
            };
            ({ title: obj5.label, title: obj5.accessibilityLabel } = tmp8);
            const obj3 = { text: null, accessibilityLabel: null, onPress: null };
            ({ button: obj6.text, button: obj6.accessibilityLabel } = tmp8);
            obj3.onPress = I;
            obj2.trailing = options(components_Button_Button.Button, obj3);
            const tmp19 = options(TableRow.TableRow, obj2);
          }
          cResult[9] = tmp8;
          cResult[10] = tmp19;
        } else {
          class I {
            constructor() {
              obj = closure_1_1(closure_1_2[16]);
              openResult = obj.open();
              return;
            }
          }
        }
        if (cResult[11] === header.header) {
          class I {
            constructor() {
              obj = closure_1_1(closure_1_2[16]);
              openResult = obj.open();
              return;
            }
          }
        }
        const obj4 = { style: header.header, children: null };
        const items2 = [tmp15, tmp18];
        obj4.children = items2;
        const tmpResult4 = initialize;
        header = header.header;
        cResult[11] = header;
        cResult[12] = tmp15;
        cResult[13] = tmp18;
        cResult[14] = collapsed(View, obj4);
        const tmp20 = collapsed(View, obj4);
      }
    : function SettingsAccountHeader() {
        const tmp = closure_11();
        const items = [UserStore];
        const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
        const bannerText = UserSettingsAccountUnverifiedHeader.getBannerText(stateFromStores);
        const items1 = [RelationshipStore];
        const stateFromStores1 = initialize.useStateFromStores(
          items1,
          () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs().size > 0,
        );
        const callback = noop.useCallback(() => {
          EmailVerificationModalActionCreatorsDefault.open();
        }, []);
        if (null != bannerText) {
          const obj4 = { style: tmp.header, children: null };
          let tmp11 = null;
          if (stateFromStores1) {
            tmp11 = options(closure_12, {});
          }
          const items2 = [tmp11];
          let tmp14 = null;
          if (null != bannerText) {
            const obj9 = {
              onPress: callback,
              variant: "danger",
              label: null,
              accessibilityLabel: null,
              trailing: null,
              start: true,
              end: true,
            };
            ({ title: obj5.label, title: obj5.accessibilityLabel } = bannerText);
            const obj10 = { text: null, accessibilityLabel: null, onPress: null };
            ({ button: obj6.text, button: obj6.accessibilityLabel } = bannerText);
            obj10.onPress = callback;
            obj9.trailing = options(components_Button_Button.Button, obj10);
            tmp14 = options(TableRow.TableRow, obj9);
          }
          items2[1] = tmp14;
          obj4.children = items2;
          let tmp9Result = collapsed(View, obj4);
        } else {
          tmp9Result = null;
        }
        return tmp9Result;
      },
);
