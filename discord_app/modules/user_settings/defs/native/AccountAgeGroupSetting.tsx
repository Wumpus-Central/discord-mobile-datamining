// discord_app/modules/user_settings/defs/native/AccountAgeGroupSetting.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useAgeGroupPresentation from "../../../age_assurance/useAgeGroupPresentation.tsx";
import TinyBroncoSettingsPredicate from "../../../tiny_bronco/native/TinyBroncoSettingsPredicate.tsx";
import TinyBroncoLazy from "../../../tiny_bronco/native/TinyBroncoLazy.tsx";
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import DismissibleBadgeUtils from "DismissibleBadgeUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_4;
let createDismissibleBadgePreNavigationAction;
let hasOwnProperty;
let obj2;
const View = react_native.View;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { trailing: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, badge: obj2 };
obj2 = {
  marginLeft: 0,
  backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND,
  marginRight: nativeDefault.space.PX_4,
  marginBottom: 0,
};
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      const obj = react;
      const cResult = obj.c(9);
      const tmp4 = closure_6();
      const obj2 = useAgeGroupPresentation;
      const ageGroupValueLabel = obj2.useAgeGroupValueLabel();
      const obj3 = TinyBroncoLazy;
      const shouldShowAgeNotice = obj3.useShouldShowAgeNotice();
      if (cResult[0] === shouldShowAgeNotice) {
        let tmp7;
        let tmp12;
        if (cResult[1] === tmp4.badge) {
          tmp7 = cResult[2];
        }
        if (cResult[3] !== ageGroupValueLabel) {
          const obj4 = { text: ageGroupValueLabel };
          const tmp14 = React3(TableRow.TableRow.TrailingText, obj4);
          cResult[3] = ageGroupValueLabel;
          cResult[4] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[4];
        }
        if (cResult[5] === tmp4.trailing) {
          if (cResult[6] === tmp7) {
            let tmp15;
            if (cResult[7] === tmp12) {
              tmp15 = cResult[8];
            }
            return tmp15;
          }
        }
        const obj5 = { style: tmp4.trailing, children: items };
        items = [tmp7, tmp12];
        const tmp18 = hasOwnProperty(View, obj5);
        cResult[5] = tmp4.trailing;
        cResult[6] = tmp7;
        cResult[7] = tmp12;
        cResult[8] = tmp18;
        tmp15 = tmp18;
      }
      let tmp8 = shouldShowAgeNotice;
      if (tmp8) {
        const obj6 = {
          dismissibleContent: dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS,
          containerStyle: tmp4.badge,
          noGradient: true,
        };
        const tmp11 = DismissiblePremiumNewBadgeDefault;
        tmp8 = React3(tmp11, obj6);
      }
      cResult[0] = shouldShowAgeNotice;
      cResult[1] = tmp4.badge;
      cResult[2] = tmp8;
      tmp7 = tmp8;
    }
  : () => {
      let items;
      const tmp = closure_6();
      const obj = useAgeGroupPresentation;
      const ageGroupValueLabel = obj.useAgeGroupValueLabel();
      const obj2 = TinyBroncoLazy;
      const shouldShowAgeNotice = obj2.useShouldShowAgeNotice();
      let tmp8 = shouldShowAgeNotice;
      const obj3 = { style: tmp.trailing, children: items };
      if (tmp8) {
        const obj4 = {
          dismissibleContent: dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS,
          containerStyle: tmp.badge,
          noGradient: true,
        };
        const tmp11 = DismissiblePremiumNewBadgeDefault;
        tmp8 = React3(tmp11, obj4);
      }
      items = [tmp8, React3(TableRow.TableRow.TrailingText, { text: ageGroupValueLabel })];
      return hasOwnProperty(View, obj3);
    };
let obj3 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.piqs0o);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: tmp3,
  usePreNavigationAction: createDismissibleBadgePreNavigationAction(
    dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS,
    TinyBroncoLazy.useShouldShowAgeNotice,
  ),
  usePredicate: TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled,
  screen: {
    route: UserSettingsSections.AGE_GROUP,
    getComponent() {
      return require("SettingsAgeGroupScreen").default;
    },
  },
};
const createRoute = SettingBuilders.createRoute;
createDismissibleBadgePreNavigationAction = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction;
const route = createRoute(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupSetting.tsx");

export default route;
