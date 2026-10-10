// discord_app/modules/user_profile/native/usePrivateProfileCoachmarkProps.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import PrivateProfileAbstractUI from "../../../design/components/mana-assets/native/generated/PrivateProfileAbstractUI.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_7 = createStyles.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" } });
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PrivateProfileCoachmarkImage() {
      const cResult = c.c(3);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = jsx(PrivateProfileAbstractUI.PrivateProfileAbstractUI, {
          width: 100,
          height: 67,
          resizeMode: "contain",
        });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.imageContainer) {
        const obj2 = { style: tmp4.imageContainer, children: first };
        const tmp11 = <View style={tmp4.imageContainer}>{first}</View>;
        cResult[1] = tmp4.imageContainer;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : function PrivateProfileCoachmarkImage() {
      return (
        <View style={closure_7().imageContainer}>
          {jsx(PrivateProfileAbstractUI.PrivateProfileAbstractUI, { width: 100, height: 67, resizeMode: "contain" })}
        </View>
      );
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/usePrivateProfileCoachmarkProps.tsx");

export const usePrivateProfileCoachmarkProps = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePrivateProfileCoachmarkProps(markAsDismissed) {
      const cResult = markAsDismissed(576).c(15);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const obj = markAsDismissed(576);
      let userIsTeen = markAsDismissed(7737).useUserIsTeen();
      const ProfileVisibility = markAsDismissed(2041).ProfileVisibility;
      const setting = ProfileVisibility.useSetting();
      if (userIsTeen) {
        userIsTeen = setting !== tmp(1209).ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
      }
      if (cResult[0] === userIsTeen) {
        if (cResult[1] === setting) {
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.Ve4nS1);
            cResult[3] = stringResult;
            let tmp11 = stringResult;
          } else {
            tmp11 = cResult[3];
          }
          if (cResult[4] !== markAsDismissed) {
            class S {
              constructor() {
                return markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
            cResult[4] = markAsDismissed;
            cResult[5] = S;
          } else {
            class S {
              constructor() {
                return markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor() {
                return markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(tmp(1126).t.eOoTMX);
            cResult[6] = tmp16;
            cResult[7] = stringResult1;
            let tmp15 = stringResult1;
          } else {
            class S {
              constructor() {
                return markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
            tmp15 = cResult[7];
          }
          if (cResult[8] !== markAsDismissed) {
            class S {
              constructor() {
                return markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
            cResult[8] = markAsDismissed;
            cResult[9] = tmp19;
          } else {
            class S {
              constructor() {
                return markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          const tmp20 = markAsDismissed.visibleContent === tmp(2049).DismissibleContent.PRIVATE_PROFILE_COACHMARK;
          if (cResult[10] === cResult[2]) {
            class S {
              constructor() {
                return markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          const obj6 = {
            title: tmp11,
            description: cResult[2],
            position: "top",
            visible: tmp20,
            onDismiss: S,
            renderImgComponent: tmp16,
            buttonLabel: tmp15,
            buttonVariant: "primary",
            onButtonPress: tmp19,
          };
          cResult[10] = cResult[2];
          cResult[11] = tmp20;
          cResult[12] = S;
          cResult[13] = tmp19;
          cResult[14] = obj6;
        }
      }
      if (!userIsTeen) {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        const stringResult2 = obj3.string(tmp(1126).t.bnNxW1);
        cResult[0] = userIsTeen;
        cResult[1] = setting;
        cResult[2] = stringResult2;
      }
      if (setting === markAsDismissed(1209).ProfileVisibility.FRIENDS_ONLY) {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        obj5.string(tmp(1126).t["/hogEy"]);
      } else {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        obj4.string(tmp(1126).t["6hEfm1"]);
      }
      const obj2 = markAsDismissed(7737);
    }
  : function usePrivateProfileCoachmarkProps(visibleContent) {
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      let stringResult1;
      let prop = markAsDismissed;
      const userIsTeen = visibleContent(markAsDismissed[11]).useUserIsTeen();
      const ProfileVisibility = visibleContent(markAsDismissed[12]).ProfileVisibility;
      const setting = ProfileVisibility.useSetting();
      if (userIsTeen) {
        if (setting !== tmp(prop[9]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
          if (setting === tmp(prop[9]).ProfileVisibility.FRIENDS_ONLY) {
            const intl3 = tmp(prop[10]).intl;
            prop = tmp(prop[10]).t["/hogEy"];
            let stringResult = intl3.string(prop);
          } else {
            let intl2 = tmp(prop[10]).intl;
            stringResult = intl2.string(tmp(prop[10]).t["6hEfm1"]);
          }
        }
      }
      let intl = tmp(prop[10]).intl;
      stringResult1 = intl.string(tmp(prop[10]).t.bnNxW1);
      const items = [stringResult1, markAsDismissed, visibleContent];
      return stringResult1.useMemo(() => {
        const obj = {
          title: null,
          description: null,
          position: "top",
          visible: null,
          onDismiss: null,
          renderImgComponent: null,
          buttonLabel: null,
          buttonVariant: "primary",
          onButtonPress: null,
        };
        const intl = util.intl;
        obj.title = intl.string(util.t.Ve4nS1);
        obj.description = stringResult1;
        obj.visible = visibleContent === dismissible_content.DismissibleContent.PRIVATE_PROFILE_COACHMARK;
        obj.onDismiss = function onDismiss() {
          return markAsDismissed(constants2.USER_DISMISS);
        };
        obj.renderImgComponent = function renderImgComponent() {
          return closure_1_6(closure_1_8, {});
        };
        const intl2 = util.intl;
        obj.buttonLabel = intl2.string(util.t.eOoTMX);
        obj.onButtonPress = function onButtonPress() {
          closure_1_1(constants2.TAKE_ACTION);
          visibleContent(markAsDismissed[14]).openUserSettings({ screen: constants.DATA_AND_PRIVACY });
        };
        return obj;
      }, items);
    };
