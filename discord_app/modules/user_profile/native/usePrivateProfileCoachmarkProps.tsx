// discord_app/modules/user_profile/native/usePrivateProfileCoachmarkProps.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import PrivateProfileAbstractUI from "../../../design/components/mana-assets/native/generated/PrivateProfileAbstractUI.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = jsx(PrivateProfileAbstractUI.PrivateProfileAbstractUI, {
          width: 100,
          height: 67,
          resizeMode: "contain",
        });
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.imageContainer) {
        const tmp11 = <View style={tmp4.imageContainer}>{first}</View>;
        cResult[1] = tmp4.imageContainer;
        cResult[2] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : () => (
      <View style={closure_7().imageContainer}>
        {jsx(PrivateProfileAbstractUI.PrivateProfileAbstractUI, { width: 100, height: 67, resizeMode: "contain" })}
      </View>
    );
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let stringResult2;
      let obj = markAsDismissed(576);
      const cResult = obj.c(15);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const visibleContent = markAsDismissed.visibleContent;
      let obj2 = markAsDismissed(8327);
      let userIsTeen = obj2.useUserIsTeen();
      const ProfileVisibility = markAsDismissed(2028).ProfileVisibility;
      const setting = ProfileVisibility.useSetting();
      if (userIsTeen) {
        userIsTeen = setting !== tmp(1197).ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
      }
      if (cResult[0] === userIsTeen) {
        let tmp6;
        let tmp10;
        let tmp12;
        let tmp14;
        let tmp13;
        if (cResult[1] === setting) {
          tmp6 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(markAsDismissed(1126).t.Ve4nS1);
          cResult[3] = stringResult;
          tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
        }
        const PRIVATE_PROFILE_COACHMARK = tmp(2036).DismissibleContent.PRIVATE_PROFILE_COACHMARK;
        if (cResult[4] !== markAsDismissed) {
          const fn = function f() {
            return markAsDismissed(ContentDismissActionType.USER_DISMISS);
          };
          cResult[4] = markAsDismissed;
          cResult[5] = fn;
          tmp12 = fn;
        } else {
          tmp12 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function p() {
            return <closure_1_8 />;
          };
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(markAsDismissed(1126).t.eOoTMX);
          cResult[6] = fn2;
          cResult[7] = stringResult1;
          tmp14 = stringResult1;
          tmp13 = fn2;
        } else {
          tmp13 = cResult[6];
          tmp14 = cResult[7];
        }
        if (cResult[8] !== markAsDismissed) {
          class D {
            constructor() {
              markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              const obj = openUserSettings;
              const obj2 = { screen: UserSettingsSections.DATA_AND_PRIVACY };
              obj.openUserSettings(obj2);
            }
          }
          cResult[8] = markAsDismissed;
          cResult[9] = D;
        } else {
          class D {
            constructor() {
              markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              const obj = openUserSettings;
              const obj2 = { screen: UserSettingsSections.DATA_AND_PRIVACY };
              obj.openUserSettings(obj2);
            }
          }
        }
        if (cResult[10] === tmp6) {
          class D {
            constructor() {
              markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              const obj = openUserSettings;
              const obj2 = { screen: UserSettingsSections.DATA_AND_PRIVACY };
              obj.openUserSettings(obj2);
            }
          }
        }
        const obj4 = {
          title: tmp10,
          description: tmp6,
          position: "top",
          visible: visibleContent === PRIVATE_PROFILE_COACHMARK,
          onDismiss: tmp12,
          renderImgComponent: tmp13,
          buttonLabel: tmp14,
          buttonVariant: "primary",
          onButtonPress: D,
        };
        cResult[10] = tmp6;
        cResult[11] = visibleContent === PRIVATE_PROFILE_COACHMARK;
        cResult[12] = tmp12;
        cResult[13] = D;
        cResult[14] = obj4;
      }
      if (userIsTeen) {
        class D {
          constructor() {
            markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            const obj = openUserSettings;
            const obj2 = { screen: UserSettingsSections.DATA_AND_PRIVACY };
            obj.openUserSettings(obj2);
          }
        }
        stringResult2 = tmp8;
      } else {
        class D {
          constructor() {
            markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            const obj = openUserSettings;
            const obj2 = { screen: UserSettingsSections.DATA_AND_PRIVACY };
            obj.openUserSettings(obj2);
          }
        }
        stringResult2 = obj3.string(tmp(1126).t.bnNxW1);
      }
      cResult[0] = userIsTeen;
      cResult[1] = setting;
      cResult[2] = stringResult2;
      tmp6 = stringResult2;
    }
  : (visibleContent) => {
      let constants2;
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      let stringResult1;
      let obj = visibleContent(markAsDismissed[11]);
      const userIsTeen = obj.useUserIsTeen();
      const ProfileVisibility = visibleContent(markAsDismissed[12]).ProfileVisibility;
      const setting = ProfileVisibility.useSetting();
      if (userIsTeen) {
        if (setting !== visibleContent(markAsDismissed[9]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
          let stringResult;
          if (setting === visibleContent(markAsDismissed[9]).ProfileVisibility.FRIENDS_ONLY) {
            const intl3 = tmp(tmp2[10]).intl;
            stringResult = intl3.string(tmp(tmp2[10]).t["/hogEy"]);
          } else {
            let intl2 = tmp(tmp2[10]).intl;
            stringResult = intl2.string(tmp(tmp2[10]).t["6hEfm1"]);
          }
          stringResult1 = stringResult;
        }
        const items = [stringResult1, markAsDismissed, visibleContent];
        return stringResult1.useMemo(() => {
          let intl;
          let intl2;
          let obj = {
            title: intl.string(intl4.t.Ve4nS1),
            description: stringResult1,
            position: "top",
            visible: visibleContent === dismissible_content.DismissibleContent.PRIVATE_PROFILE_COACHMARK,
            onDismiss() {
              return markAsDismissed(constants2.USER_DISMISS);
            },
            renderImgComponent() {
              return closure_1_6(closure_1_8, {});
            },
            buttonLabel: intl2.string(intl4.t.eOoTMX),
            buttonVariant: "primary",
            onButtonPress() {
              closure_1_1(constants2.TAKE_ACTION);
              const obj = visibleContent(markAsDismissed[14]);
              const obj2 = { screen: constants.DATA_AND_PRIVACY };
              obj.openUserSettings(obj2);
            },
          };
          intl = intl4.intl;
          intl2 = intl4.intl;
          return obj;
        }, items);
      }
      let intl = tmp(tmp2[10]).intl;
      stringResult1 = intl.string(tmp(tmp2[10]).t.bnNxW1);
    };
const result = size.fileFinishedImporting("modules/user_profile/native/usePrivateProfileCoachmarkProps.tsx");

export const usePrivateProfileCoachmarkProps = tmp2;
