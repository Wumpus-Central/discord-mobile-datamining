// === Module 17121: ConnectionDeprecationBottomSheet ===

// Module 17121 (ConnectionDeprecationBottomSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import themes from "themes" /* 4587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Icon from "Icon" /* 5596 */;
import useStartAuthorizeDefault from "useStartAuthorize" /* 6660 */;
import GameIcon from "GameIcon" /* 6667 */;
import AccountLinkManager from "AccountLinkManager" /* 17122 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const IconDefault = Icon;
const GameIconDefault = GameIcon;
let BottomSheet, application, deprecatedPlatformTypes;

let c9;
let metroImportAll;
let obj2;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { iconContainer: { width: 56, height: 56, alignItems: "center", justifyContent: "center" }, content: obj2, text: { textAlign: "center" }, connectionIcon: { height: 48, width: 48 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let platform;
  let theme;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(8);
  ({ platform, theme } = arg0);
  const tmp4 = closure_10();
  const icon = platform.icon;
  const obj2 = themes;
  const tmp5 = obj2.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG;
  if (cResult[0] !== tmp5) {
    const tmpResult = AvatarUtils;
    const source = tmpResult.makeSource(tmp5);
    cResult[0] = tmp5;
    cResult[1] = source;
    tmp6 = source;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp6) {
    let tmp8;
    if (cResult[3] === tmp4.connectionIcon) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.iconContainer) {
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp11 = cResult[7];
      }
      return tmp11;
    }
    const obj3 = { style: tmp4.iconContainer, children: tmp8 };
    const tmp14 = metroImportAll(View, obj3);
    cResult[5] = tmp4.iconContainer;
    cResult[6] = tmp8;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  }
  const obj4 = { size: Icon.IconSizes.CUSTOM, source: tmp6, disableColor: true, style: tmp4.connectionIcon };
  const tmp9 = IconDefault;
  const tmp10 = metroImportAll(tmp9, obj4);
  cResult[2] = tmp6;
  cResult[3] = tmp4.connectionIcon;
  cResult[4] = tmp10;
  tmp8 = tmp10;
}) : ((arg0) => {
  let obj4;
  let platform;
  let theme;
  let tmp6;
  ({ platform, theme } = arg0);
  const tmp = closure_10();
  const obj = themes;
  const icon = platform.icon;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const obj3 = { style: tmp.iconContainer, children: metroImportAll(tmp6, obj4) };
  const obj2 = AvatarUtils;
  const source = obj2.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj4 = { size: Icon.IconSizes.CUSTOM, source, disableColor: true, style: tmp.connectionIcon };
  tmp6 = IconDefault;
  return metroImportAll(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((application) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  application = application.application;
  const tmp4 = closure_10();
  if (cResult[0] !== application) {
    let tmp6 = null;
    if (null != application) {
      const obj2 = { game: application, size: GameIcon.GameIconSizes.NORMAL };
      const tmp9 = GameIconDefault;
      tmp6 = metroImportAll(tmp9, obj2);
    }
    cResult[0] = application;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.iconContainer) {
    let tmp10;
    if (cResult[3] === tmp5) {
      tmp10 = cResult[4];
    }
    return tmp10;
  }
  const obj3 = { style: tmp4.iconContainer, children: tmp5 };
  const tmp11 = metroImportAll(View, obj3);
  cResult[2] = tmp4.iconContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((application) => {
  let tmpResult;
  application = application.application;
  const obj = { style: closure_10().iconContainer, children: tmpResult };
  tmpResult = null;
  if (null != application) {
    const obj2 = { game: application, size: GameIcon.GameIconSizes.NORMAL };
    const tmp6 = GameIconDefault;
    tmpResult = metroImportAll(tmp6, obj2);
  }
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((deprecatedPlatformTypes) => {
  let canStartAuthorization;
  let fetchingConnections;
  let first;
  let hasAlreadyLinked;
  let matchingPlatform;
  let tmp6;
  let obj = deprecatedPlatformTypes(576);
  const cResult = obj.c(3);
  deprecatedPlatformTypes = deprecatedPlatformTypes.deprecatedPlatformTypes;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== deprecatedPlatformTypes) {
    const fn = function o() {
      let mapped;
      let obj = {
        fetchingConnections: ConnectedAccountsStore.isFetching(),
        matchingPlatform: mapped.find((migrationData) => {
          migrationData = migrationData.migrationData;
          let migrationExperimentEnabled;
          if (migrationData != null) {
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionDeprecationBottomSheet");
          }
          if (migrationExperimentEnabled) {
            migrationExperimentEnabled = deprecatedPlatformTypes.includes(migrationData.type);
          }
          return migrationExperimentEnabled;
        })
      };
      const accounts = ConnectedAccountsStore.getAccounts();
      mapped = accounts.map((type) => {
        const obj = closure_1_1(closure_1_2[11]);
        return obj.get(type.type);
      });
      return obj;
    };
    cResult[1] = deprecatedPlatformTypes;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = deprecatedPlatformTypes(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6);
  ({ fetchingConnections, matchingPlatform } = stateFromStoresObject);
  let replacedBy;
  const useGetOrFetchApplication = deprecatedPlatformTypes(6663).useGetOrFetchApplication;
  deprecatedPlatformTypes(6663);
  if (matchingPlatform != null) {
    let migrationData = matchingPlatform.migrationData;
    if (migrationData != null) {
      replacedBy = migrationData.replacedBy;
    }
  }
  const getOrFetchApplication = useGetOrFetchApplication(replacedBy);
  const tmp11 = useStartAuthorizeDefault(getOrFetchApplication);
  ({ hasAlreadyLinked, canStartAuthorization } = tmp11);
  if (!fetchingConnections) {
    fetchingConnections = !tmp11.fetched;
  }
  if (!fetchingConnections) {
    fetchingConnections = !canStartAuthorization;
  }
  if (!fetchingConnections) {
    fetchingConnections = null == getOrFetchApplication;
  }
  return !fetchingConnections && !hasAlreadyLinked;
}) : ((deprecatedPlatformTypes) => {
  let canStartAuthorization;
  let fetchingConnections;
  let hasAlreadyLinked;
  let matchingPlatform;
  deprecatedPlatformTypes = deprecatedPlatformTypes.deprecatedPlatformTypes;
  let obj = deprecatedPlatformTypes(504);
  const items = [ConnectedAccountsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let mapped;
    let obj = {
      fetchingConnections: ConnectedAccountsStore.isFetching(),
      matchingPlatform: mapped.find((migrationData) => {
        migrationData = migrationData.migrationData;
        let migrationExperimentEnabled;
        if (migrationData != null) {
          migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionDeprecationBottomSheet");
        }
        if (migrationExperimentEnabled) {
          migrationExperimentEnabled = deprecatedPlatformTypes.includes(migrationData.type);
        }
        return migrationExperimentEnabled;
      })
    };
    const accounts = ConnectedAccountsStore.getAccounts();
    mapped = accounts.map((type) => {
      const obj = closure_1_1(closure_1_2[11]);
      return obj.get(type.type);
    });
    return obj;
  });
  ({ fetchingConnections, matchingPlatform } = stateFromStoresObject);
  let replacedBy;
  const useGetOrFetchApplication = deprecatedPlatformTypes(6663).useGetOrFetchApplication;
  deprecatedPlatformTypes(6663);
  if (matchingPlatform != null) {
    let migrationData = matchingPlatform.migrationData;
    if (migrationData != null) {
      replacedBy = migrationData.replacedBy;
    }
  }
  const getOrFetchApplication = useGetOrFetchApplication(replacedBy);
  const tmp6 = useStartAuthorizeDefault(getOrFetchApplication);
  ({ hasAlreadyLinked, canStartAuthorization } = tmp6);
  if (!fetchingConnections) {
    fetchingConnections = !tmp6.fetched;
  }
  if (!fetchingConnections) {
    fetchingConnections = !canStartAuthorization;
  }
  if (!fetchingConnections) {
    fetchingConnections = null == getOrFetchApplication;
  }
  return !fetchingConnections && !hasAlreadyLinked;
});
let result = size.fileFinishedImporting("modules/application_account_linking/native/ConnectionDeprecationBottomSheet.tsx");

export default function ConnectionDeprecationBottomSheet(arg0) {
  let Stack;
  let WindowLaunchIcon;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let items7;
  let markAsDismissed;
  let obj13;
  let obj16;
  let obj4;
  let obj5;
  ({ platformTypes: require, markAsDismissed } = arg0);
  let replacedBy;
  let startAuthorization;
  let analyticsLocations;
  let onSuccess;
  const tmp = closure_10();
  let obj = require("native");
  const theme = obj.useThemeContext().theme;
  const bottom = markAsDismissed(replacedBy[9])().bottom;
  let obj2 = require("get initialized");
  const items = [ConnectedAccountsStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const accounts = ConnectedAccountsStore.getAccounts();
    const found = accounts.find((type) => closure_1_0.includes(type.type));
    let type;
    if (found != null) {
      type = found.type;
    }
    return type;
  });
  let value = null;
  if (null != stateFromStores) {
    const tmp4Result = markAsDismissed(replacedBy[11]);
    value = tmp4Result.get(stateFromStores);
  }
  replacedBy = undefined;
  if (value != null) {
    const migrationData = value.migrationData;
    if (migrationData != null) {
      replacedBy = migrationData.replacedBy;
    }
  }
  const items1 = [onSuccess];
  const tmp2Result = require("get initialized");
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => ApplicationStore.getApplication(replacedBy));
  startAuthorization = markAsDismissed(tmp3[12])(stateFromStores1).startAuthorization;
  const tmp4Result2 = markAsDismissed(replacedBy[13]);
  analyticsLocations = tmp4Result2(markAsDismissed(tmp3[14]).ACTION_SHEET).analyticsLocations;
  const items2 = [replacedBy];
  onSuccess = startAuthorization.useCallback(() => {
    let paths;
    let obj = AccountLinkManager;
    const obj2 = {
      applicationId: replacedBy,
      onSuccess() {
        const obj = markAsDismissed(paths[16]);
        obj.openLazy(closure_1_0(paths[18])(paths[17], paths.paths), "IncentivizedAccountLinkConfirmationBottomSheet");
      }
    };
    const result = obj.claimIncentivizedAccountLinkingReward(obj2);
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
        children: closure_9(Stack, obj4)
      };
      closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: null });
      BottomSheet = require("Sheet/BottomSheet").BottomSheet;
      obj4 = { spacing: 24, style: obj5, children: items5 };
      obj5 = { paddingBottom: bottom };
      Stack = require("Stack/Stack").Stack;
      const obj6 = { justify: "center", align: "center", direction: "horizontal", children: items4 };
      const obj7 = { theme, platform: value };
      const Stack2 = require("Stack/Stack").Stack;
      items4 = [closure_8(closure_11, obj7), , ];
      const obj8 = { theme };
      items4[1] = closure_8(require("RobloxConnectionCoachmark").UnionIcon, obj8);
      const obj9 = { application: stateFromStores1 };
      items4[2] = closure_8(closure_12, obj9);
      items5 = [closure_9(Stack2, obj6), , ];
      const obj10 = { justify: "center", children: items6 };
      const Stack3 = require("Stack/Stack").Stack;
      const obj11 = { variant: "heading-xl/bold", style: tmp.text, children: intl.string(markAsDismissed(replacedBy[25]).vycLU2) };
      const Text = require("Text/Text").Text;
      intl = require("intl").intl;
      items6 = [closure_8(Text, obj11), ];
      const obj12 = { variant: "text-md/medium", style: tmp.text, children: intl2.format(markAsDismissed(replacedBy[25]).qV9zT6, obj13) };
      const Text2 = require("Text/Text").Text;
      intl2 = require("intl").intl;
      obj13 = {
        connectionName: value.name,
        orbCount: 200,
        orbsIconHook() {
              const obj = { size: "xs", color: markAsDismissed(replacedBy[7]).colors.TEXT_STRONG };
              const OrbsIcon = require("OrbsIcon").OrbsIcon;
              return closure_1_8(OrbsIcon, obj);
            }
      };
      items6[1] = closure_8(Text2, obj12);
      items5[1] = closure_9(Stack3, obj10);
      const obj14 = { children: items7 };
      const Stack4 = require("Stack/Stack").Stack;
      const obj15 = { text: intl3.string(markAsDismissed(replacedBy[25]).ZeOhh9), icon: closure_8(WindowLaunchIcon, obj16), iconPosition: "end", size: "lg", onPress: tmp11 };
      const Button = require("components/Button/Button").Button;
      intl3 = require("intl").intl;
      obj16 = { size: "sm", color: markAsDismissed(replacedBy[7]).colors.WHITE };
      WindowLaunchIcon = require("WindowLaunchIcon").WindowLaunchIcon;
      items7 = [closure_8(Button, obj15), ];
      const obj17 = {
        text: intl4.string(require("intl").t.TulDPl),
        variant: "secondary",
        size: "lg",
        onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              if (markAsDismissed != null) {
                tmp2(ContentDismissActionType.DISMISS);
              }
            }
      };
      const Button2 = require("components/Button/Button").Button;
      intl4 = require("intl").intl;
      items7[1] = closure_8(Button2, obj17);
      items5[2] = closure_9(Stack4, obj14);
      return closure_8(BottomSheet, obj3);
    }
  }
  return false;
};
export const useShouldShowConnectionDeprecationBottomSheet = tmp3;