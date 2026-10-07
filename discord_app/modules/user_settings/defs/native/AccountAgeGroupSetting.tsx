// discord_app/modules/user_settings/defs/native/AccountAgeGroupSetting.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useAgeGroupPresentation from "../../../age_assurance/useAgeGroupPresentation.tsx";
import TinyBroncoSettingsPredicate from "../../../tiny_bronco/native/TinyBroncoSettingsPredicate.tsx";
import TinyBroncoLazy from "../../../tiny_bronco/native/TinyBroncoLazy.tsx";
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import DismissibleBadgeUtils from "DismissibleBadgeUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = {
  trailing: { flexDirection: "row", alignItems: "center", flexShrink: 1 },
  badge: {
    marginLeft: 0,
    backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND,
    marginRight: nativeDefault.space.PX_4,
    marginBottom: 0,
  },
};
let closure_6 = createStyles.createStyles(obj);
let obj2 = {
  marginLeft: 0,
  backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND,
  marginRight: nativeDefault.space.PX_4,
  marginBottom: 0,
};
let obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.piqs0o);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(9);
        const tmp4 = closure_6();
        const ageGroupValueLabel = useAgeGroupPresentation.useAgeGroupValueLabel();
        const shouldShowAgeNotice = TinyBroncoLazy.useShouldShowAgeNotice();
        if (cResult[0] === shouldShowAgeNotice) {
          if (cResult[1] === tmp4.badge) {
            let tmp7 = cResult[2];
          }
          if (cResult[3] !== ageGroupValueLabel) {
            const obj4 = { text: ageGroupValueLabel };
            const tmp14 = React4(TableRow.TableRow.TrailingText, obj4);
            cResult[3] = ageGroupValueLabel;
            cResult[4] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[4];
          }
          if (cResult[5] === tmp4.trailing) {
            if (cResult[6] === tmp7) {
              if (cResult[7] === tmp12) {
                let tmp15 = cResult[8];
              }
              return tmp15;
            }
          }
          const obj5 = { style: tmp4.trailing, children: null };
          const items = [tmp7, tmp12];
          obj5.children = items;
          const tmp18 = hasOwnProperty(View, obj5);
          cResult[5] = tmp4.trailing;
          cResult[6] = tmp7;
          cResult[7] = tmp12;
          cResult[8] = tmp18;
          tmp15 = tmp18;
        }
        let tmp8 = shouldShowAgeNotice;
        if (shouldShowAgeNotice) {
          const obj6 = {
            dismissibleContent: dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS,
            containerStyle: tmp4.badge,
            noGradient: true,
          };
          tmp8 = React4(DismissiblePremiumNewBadgeDefault, obj6);
        }
        cResult[0] = shouldShowAgeNotice;
        cResult[1] = tmp4.badge;
        cResult[2] = tmp8;
        tmp7 = tmp8;
      }
    : () => {
        const tmp = closure_6();
        const ageGroupValueLabel = useAgeGroupPresentation.useAgeGroupValueLabel();
        const shouldShowAgeNotice = TinyBroncoLazy.useShouldShowAgeNotice();
        const obj3 = { style: tmp.trailing, children: null };
        let tmp8 = shouldShowAgeNotice;
        if (shouldShowAgeNotice) {
          const obj4 = {
            dismissibleContent: dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS,
            containerStyle: tmp.badge,
            noGradient: true,
          };
          tmp8 = React4(DismissiblePremiumNewBadgeDefault, obj4);
        }
        const items = [tmp8, React4(TableRow.TableRow.TrailingText, { text: ageGroupValueLabel })];
        obj3.children = items;
        return hasOwnProperty(View, obj3);
      },
  usePreNavigationAction: null,
  usePredicate: null,
  screen: null,
};
obj3.usePreNavigationAction = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(
  dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS,
  TinyBroncoLazy.useShouldShowAgeNotice,
);
obj3.usePredicate = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled;
obj3.screen = {
  route: Constants.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require("SettingsAgeGroupScreen").default;
  },
};
const route = SettingBuilders.createRoute(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupSetting.tsx");

export default route;
