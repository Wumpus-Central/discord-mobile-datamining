// discord_app/modules/application_account_linking/native/ConnectionDeprecationBottomSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import themes from "../../../design/utils/shared/themes.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Icon from "../../../design/void/Icon/native/Icon.tsx";
import useStartAuthorizeDefault from "useStartAuthorize.tsx";
import GameIcon from "../../game_detection/native/GameIcon.tsx";
import AccountLinkManager from "../AccountLinkManager.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";

const require = globalThis.__r;
const IconDefault = Icon;
const GameIconDefault = GameIcon;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  iconContainer: { width: 56, height: 56, alignItems: "center", justifyContent: "center" },
  content: { paddingHorizontal: nativeDefault.space.PX_16 },
  text: { textAlign: "center" },
  connectionIcon: { height: 48, width: 48 },
};
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectionIcon(arg0) {
      const cResult = c.c(8);
      ({ platform, theme } = arg0);
      const tmp4 = closure_10();
      const icon = platform.icon;
      const tmp5 = themes.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG;
      if (cResult[0] !== tmp5) {
        const source = AvatarUtils.makeSource(tmp5);
        cResult[0] = tmp5;
        cResult[1] = source;
        let tmp6 = source;
        const tmpResult = AvatarUtils;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp6) {
        if (cResult[3] === tmp4.connectionIcon) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] === tmp4.iconContainer) {
          if (cResult[6] === tmp8) {
            let tmp11 = cResult[7];
          }
          return tmp11;
        }
        const obj3 = { style: tmp4.iconContainer, children: tmp8 };
        const tmp14 = closure_1_8(View, obj3);
        cResult[5] = tmp4.iconContainer;
        cResult[6] = tmp8;
        cResult[7] = tmp14;
        tmp11 = tmp14;
      }
      const obj4 = { size: null, source: null, disableColor: true, style: null };
      obj4.size = Icon.IconSizes.CUSTOM;
      obj4.source = tmp6;
      obj4.style = tmp4.connectionIcon;
      const tmp10 = closure_1_8(IconDefault, obj4);
      cResult[2] = tmp6;
      cResult[3] = tmp4.connectionIcon;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    }
  : function ConnectionIcon(arg0) {
      ({ platform, theme } = arg0);
      const tmp = closure_10();
      const isThemeDarkResult = themes.isThemeDark(theme);
      const icon = platform.icon;
      const obj3 = { style: tmp.iconContainer, children: null };
      const source = AvatarUtils.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
      const obj4 = { size: null, source: null, disableColor: true, style: null };
      obj4.size = Icon.IconSizes.CUSTOM;
      obj4.source = source;
      obj4.style = tmp.connectionIcon;
      obj3.children = closure_1_8(IconDefault, obj4);
      return closure_1_8(View, obj3);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ApplicationIcon(application) {
      const cResult = c.c(5);
      application = application.application;
      const tmp4 = closure_10();
      if (cResult[0] !== application) {
        let tmp6 = null;
        if (null != application) {
          const obj2 = { game: application, size: GameIcon.GameIconSizes.NORMAL };
          tmp6 = closure_1_8(GameIconDefault, obj2);
        }
        cResult[0] = application;
        cResult[1] = tmp6;
        let tmp5 = tmp6;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.iconContainer) {
        if (cResult[3] === tmp5) {
          let tmp10 = cResult[4];
        }
        return tmp10;
      }
      const tmp11 = closure_1_8(View, { style: tmp4.iconContainer, children: tmp5 });
      cResult[2] = tmp4.iconContainer;
      cResult[3] = tmp5;
      cResult[4] = tmp11;
      tmp10 = tmp11;
      const obj3 = { style: tmp4.iconContainer, children: tmp5 };
    }
  : function ApplicationIcon(application) {
      application = application.application;
      const obj = { style: closure_10().iconContainer, children: null };
      let tmpResult = null;
      if (null != application) {
        const obj2 = { game: application, size: GameIcon.GameIconSizes.NORMAL };
        tmpResult = closure_1_8(GameIconDefault, obj2);
      }
      obj.children = tmpResult;
      return closure_1_8(View, obj);
    };
ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/application_account_linking/native/ConnectionDeprecationBottomSheet.tsx",
);

export default function ConnectionDeprecationBottomSheet(arg0) {
  ({ platformTypes: require, markAsDismissed } = arg0);
  let replacedBy;
  let startAuthorization;
  let analyticsLocations;
  let onSuccess;
  const tmp = closure_10();
  const theme = require("native").useThemeContext().theme;
  let obj = require("native");
  const items = [ConnectedAccountsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const accounts = ConnectedAccountsStore.getAccounts();
    const found = accounts.find((type) => closure_1_0.includes(type.type));
    let type;
    if (found != null) {
      type = found.type;
    }
    return type;
  });
  value = null;
  if (null != stateFromStores) {
    value = markAsDismissed(tmp3[11]).get(stateFromStores);
    const tmp4Result = markAsDismissed(tmp3[11]);
  }
  replacedBy = undefined;
  if (value != null) {
    const migrationData = value.migrationData;
    if (migrationData != null) {
      replacedBy = migrationData.replacedBy;
    }
  }
  let obj2 = require("initialize");
  const items1 = [onSuccess];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
    ApplicationStore.getApplication(replacedBy),
  );
  startAuthorization = markAsDismissed(tmp3[12])(stateFromStores1).startAuthorization;
  const tmp2Result = require("initialize");
  analyticsLocations = markAsDismissed(replacedBy[13])(markAsDismissed(tmp3[14]).ACTION_SHEET).analyticsLocations;
  const items2 = [replacedBy];
  onSuccess = startAuthorization.useCallback(() => {
    const result = AccountLinkManager.claimIncentivizedAccountLinkingReward({
      applicationId: replacedBy,
      onSuccess() {
        markAsDismissed(paths[16]).openLazy(
          closure_1_0(paths[18])(paths[17], paths.paths),
          "IncentivizedAccountLinkConfirmationBottomSheet",
        );
      },
    });
  }, items2);
  const items3 = [analyticsLocations, startAuthorization, markAsDismissed, onSuccess];
  if (null != value) {
    if (null != stateFromStores1) {
      const obj3 = {
        startExpanded: true,
        contentStyles: tmp.content,
        header: closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: null }),
        onDismiss() {
          return markAsDismissed(ContentDismissActionType.DISMISS);
        },
        children: null,
      };
      const obj4 = { spacing: 24, style: null, children: null };
      const obj5 = { paddingBottom: markAsDismissed(replacedBy[9])().bottom };
      obj4.style = obj5;
      const obj6 = { justify: "center", align: "center", direction: "horizontal", children: null };
      const obj7 = { theme, platform: value };
      const items4 = [closure_8(closure_11, obj7), ,];
      const obj8 = { theme };
      items4[1] = closure_8(require("RobloxConnectionCoachmark").UnionIcon, obj8);
      const obj9 = { application: stateFromStores1 };
      items4[2] = closure_8(closure_12, obj9);
      obj6.children = items4;
      const items5 = [closure_9(require("Stack/Stack").Stack, obj6), ,];
      const obj10 = { justify: "center", children: null };
      const obj11 = { variant: "heading-xl/bold", style: tmp.text, children: null };
      const intl = require("util").intl;
      obj11.children = intl.string(markAsDismissed(tmp3[25]).vycLU2);
      const items6 = [closure_8(require("Text/Text").Text, obj11)];
      const obj12 = { variant: "text-md/medium", style: tmp.text, children: null };
      const intl2 = require("util").intl;
      const obj13 = {
        connectionName: value.name,
        orbCount: 200,
        orbsIconHook() {
          return closure_1_8(require("OrbsIcon").OrbsIcon, {
            size: "xs",
            color: markAsDismissed(replacedBy[7]).colors.TEXT_STRONG,
          });
        },
      };
      obj12.children = intl2.format(markAsDismissed(tmp3[25]).qV9zT6, obj13);
      items6[1] = closure_8(require("Text/Text").Text, obj12);
      obj10.children = items6;
      items5[1] = closure_9(require("Stack/Stack").Stack, obj10);
      const obj14 = { children: null };
      const obj15 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
      const intl3 = require("util").intl;
      obj15.text = intl3.string(markAsDismissed(tmp3[25]).ZeOhh9);
      const obj16 = { size: "sm", color: markAsDismissed(tmp3[7]).colors.WHITE };
      obj15.icon = closure_8(require("WindowLaunchIcon").WindowLaunchIcon, obj16);
      obj15.onPress = tmp11;
      const items7 = [closure_8(require("components/Button/Button").Button, obj15)];
      const obj17 = { text: null, variant: "secondary", size: "lg", onPress: null };
      const intl4 = require("util").intl;
      obj17.text = intl4.string(require("util").t.TulDPl);
      obj17.onPress = function handleDismiss() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      };
      items7[1] = closure_8(require("components/Button/Button").Button, obj17);
      obj14.children = items7;
      items5[2] = closure_9(require("Stack/Stack").Stack, obj14);
      obj4.children = items5;
      obj3.children = closure_9(require("Stack/Stack").Stack, obj4);
      return closure_8(require("Sheet/BottomSheet").BottomSheet, obj3);
    }
  }
  return false;
}
export const useShouldShowConnectionDeprecationBottomSheet = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldShowConnectionDeprecationBottomSheet(deprecatedPlatformTypes) {
      const cResult = deprecatedPlatformTypes(576).c(3);
      deprecatedPlatformTypes = deprecatedPlatformTypes.deprecatedPlatformTypes;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConnectedAccountsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== deprecatedPlatformTypes) {
        const fn = function o() {
          const obj = { fetchingConnections: ConnectedAccountsStore.isFetching(), matchingPlatform: null };
          const accounts = ConnectedAccountsStore.getAccounts();
          const mapped = accounts.map((type) => closure_1_1(closure_1_2[11]).get(type.type));
          obj.matchingPlatform = mapped.find((migrationData) => {
            migrationData = migrationData.migrationData;
            let migrationExperimentEnabled;
            if (migrationData != null) {
              migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled(
                "ConnectionDeprecationBottomSheet",
              );
            }
            if (migrationExperimentEnabled) {
              migrationExperimentEnabled = deprecatedPlatformTypes.includes(migrationData.type);
            }
            return migrationExperimentEnabled;
          });
          return obj;
        };
        cResult[1] = deprecatedPlatformTypes;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = deprecatedPlatformTypes(576);
      const stateFromStoresObject = deprecatedPlatformTypes(504).useStateFromStoresObject(first, tmp6);
      ({ fetchingConnections, matchingPlatform } = stateFromStoresObject);
      const tmpResult = deprecatedPlatformTypes(504);
      let replacedBy;
      if (matchingPlatform != null) {
        let migrationData = matchingPlatform.migrationData;
        if (migrationData != null) {
          replacedBy = migrationData.replacedBy;
        }
      }
      const getOrFetchApplication = deprecatedPlatformTypes(6847).useGetOrFetchApplication(replacedBy);
      const tmp10 = useStartAuthorizeDefault(getOrFetchApplication);
      ({ hasAlreadyLinked, canStartAuthorization } = tmp10);
      if (!fetchingConnections) {
        fetchingConnections = !tmp10.fetched;
      }
      if (!fetchingConnections) {
        fetchingConnections = !canStartAuthorization;
      }
      if (!fetchingConnections) {
        fetchingConnections = null == getOrFetchApplication;
      }
      let tmp11 = !fetchingConnections;
      if (!fetchingConnections) {
        tmp11 = !hasAlreadyLinked;
      }
      return tmp11;
    }
  : function useShouldShowConnectionDeprecationBottomSheet(deprecatedPlatformTypes) {
      deprecatedPlatformTypes = deprecatedPlatformTypes.deprecatedPlatformTypes;
      const items = [ConnectedAccountsStore];
      const stateFromStoresObject = deprecatedPlatformTypes(504).useStateFromStoresObject(items, () => {
        const obj = { fetchingConnections: ConnectedAccountsStore.isFetching(), matchingPlatform: null };
        const accounts = ConnectedAccountsStore.getAccounts();
        const mapped = accounts.map((type) => closure_1_1(closure_1_2[11]).get(type.type));
        obj.matchingPlatform = mapped.find((migrationData) => {
          migrationData = migrationData.migrationData;
          let migrationExperimentEnabled;
          if (migrationData != null) {
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled(
              "ConnectionDeprecationBottomSheet",
            );
          }
          if (migrationExperimentEnabled) {
            migrationExperimentEnabled = deprecatedPlatformTypes.includes(migrationData.type);
          }
          return migrationExperimentEnabled;
        });
        return obj;
      });
      ({ fetchingConnections, matchingPlatform } = stateFromStoresObject);
      let obj = deprecatedPlatformTypes(504);
      let replacedBy;
      if (matchingPlatform != null) {
        let migrationData = matchingPlatform.migrationData;
        if (migrationData != null) {
          replacedBy = migrationData.replacedBy;
        }
      }
      const getOrFetchApplication = deprecatedPlatformTypes(6847).useGetOrFetchApplication(replacedBy);
      const tmp5 = useStartAuthorizeDefault(getOrFetchApplication);
      ({ hasAlreadyLinked, canStartAuthorization } = tmp5);
      if (!fetchingConnections) {
        fetchingConnections = !tmp5.fetched;
      }
      if (!fetchingConnections) {
        fetchingConnections = !canStartAuthorization;
      }
      if (!fetchingConnections) {
        fetchingConnections = null == getOrFetchApplication;
      }
      let tmp6 = !fetchingConnections;
      if (!fetchingConnections) {
        tmp6 = !hasAlreadyLinked;
      }
      return tmp6;
    };
