import { isThemeLight } from "../../../design/utils/shared/themes.tsx";
import { IconSizes } from "../../../design/void/Icon/native/Icon.tsx";
import { getAvatarURL } from "../../../utils/AvatarUtils.tsx";
import { GameIcon } from "../../game_detection/native/GameIcon.tsx";
import { useStartAuthorize } from "useStartAuthorize.tsx";
// discord_app/modules/application_account_linking/native/ConnectionDeprecationBottomSheet.tsx
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase";
import { View } from "IncentivizedAccountLinkConfirmationBottomSheet";
import addApplication from "addApplication";
import set from "set";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "Stack";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
function ConnectionIcon(arg0) {
  let platform;
  let theme;
  ({ platform, theme } = arg0);
  const tmp = createCacheKey();
  let obj = isThemeLight /* isThemeLight */;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const tmp2 = require;
  const icon = platform.icon;
  obj = { style: tmp.iconContainer, children: null };
  const source = getAvatarURL /* getAvatarURL */.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj = { size: null, source: null, disableColor: true, style: null };
  const obj2 = getAvatarURL /* getAvatarURL */;
  obj[0] = tmp2(4697).IconSizes.CUSTOM;
  obj[1] = source;
  obj[3] = tmp.connectionIcon;
  obj[1] = callback(IconSizes, obj);
  return callback(View, obj);
}
function ApplicationIcon(application) {
  application = application.application;
  let obj = { style: createCacheKey().iconContainer, children: null };
  let tmpResult = null;
  if (null != application) {
    obj = { game: null, size: null };
    obj[0] = application;
    obj[1] = GameIcon /* GameIcon */.GameIconSizes.NORMAL;
    tmpResult = tmp(GameIcon, obj);
    const tmp6 = GameIcon;
  }
  obj[1] = tmpResult;
  return closure_8(View, obj);
}
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { iconContainer: { width: 56, height: 56, alignItems: "center", justifyContent: "center" }, content: null, text: null, connectionIcon: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { height: 48, width: 48 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("addApplication").fileFinishedImporting("modules/application_account_linking/native/ConnectionDeprecationBottomSheet.tsx");

export default function ConnectionDeprecationBottomSheet(arg0) {
  let markAsDismissed;
  let require;
  ({ platformTypes: require, markAsDismissed } = arg0);
  let replacedBy;
  let startAuthorization;
  let analyticsLocations;
  let callback;
  const tmp = createCacheKey();
  let obj = require(replacedBy[8]);
  const theme = obj.useThemeContext().theme;
  let obj1 = require(replacedBy[10]);
  const items = [set];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const accounts = outer1_6.getAccounts();
    const found = accounts.find((type) => closure_0.includes(type.type));
    let type;
    if (found != null) {
      type = found.type;
    }
    return type;
  });
  let value = null;
  if (null != stateFromStores) {
    let tmp4Result = tmp4(tmp3[11]);
    value = tmp4Result.get(stateFromStores);
  }
  replacedBy = undefined;
  if (value != null) {
    const migrationData = value.migrationData;
    if (migrationData != null) {
      replacedBy = migrationData.replacedBy;
    }
  }
  const items1 = [callback];
  const stateFromStores1 = require(replacedBy[10]).useStateFromStores(items1, () => callback.getApplication(replacedBy));
  startAuthorization = tmp4(tmp3[12])(stateFromStores1).startAuthorization;
  tmp4Result = tmp4(tmp3[13]);
  analyticsLocations = tmp4Result(tmp4(tmp3[14]).ACTION_SHEET).analyticsLocations;
  const items2 = [replacedBy];
  callback = startAuthorization.useCallback(() => {
    let obj = outer1_0(replacedBy[15]);
    obj = {
      applicationId: replacedBy,
      onSuccess() {
        callback2(paths[16]).openLazy(callback(paths[18])(paths[17], paths.paths), "IncentivizedAccountLinkConfirmationBottomSheet");
      }
    };
    const result = obj.claimIncentivizedAccountLinkingReward(obj);
  }, items2);
  const items3 = [analyticsLocations, startAuthorization, markAsDismissed, callback];
  if (null != value) {
    if (null != stateFromStores1) {
      obj = { startExpanded: true, contentStyles: null, header: null, onDismiss: null, children: null };
      obj[1] = tmp.content;
      obj[2] = callback(tmp2(tmp3[19]).BottomSheetTitleHeader, { title: null });
      obj[3] = function onDismiss() {
        return markAsDismissed(outer1_7.DISMISS);
      };
      obj = { spacing: 24, style: null, children: null };
      obj1 = { paddingBottom: null };
      obj1[0] = markAsDismissed(replacedBy[9])().bottom;
      obj[1] = obj1;
      const obj2 = { justify: "center", align: "center", direction: "horizontal", children: null };
      const obj3 = { theme: null, platform: null };
      obj3[0] = theme;
      obj3[1] = value;
      const items4 = [callback(ConnectionIcon, obj3), , ];
      const obj4 = { theme: null };
      obj4[0] = theme;
      items4[1] = callback(tmp2(tmp3[22]).UnionIcon, obj4);
      const obj5 = { application: null };
      obj5[0] = stateFromStores1;
      items4[2] = callback(ApplicationIcon, obj5);
      obj2[3] = items4;
      const items5 = [callback2(tmp2(tmp3[21]).Stack, obj2), , ];
      const obj6 = { justify: "center", children: null };
      const obj7 = { variant: "heading-xl/bold", style: null, children: null };
      obj7[1] = tmp.text;
      const intl = tmp2(tmp3[24]).intl;
      obj7[2] = intl.string(tmp4(tmp3[25]).vycLU2);
      const items6 = [callback(tmp2(tmp3[23]).Text, obj7), ];
      const obj8 = { variant: "text-md/medium", style: null, children: null };
      obj8[1] = tmp.text;
      const intl2 = tmp2(tmp3[24]).intl;
      const obj9 = { connectionName: null, orbCount: 200, orbsIconHook: null };
      obj9[0] = value.name;
      obj9[2] = function orbsIconHook() {
        const obj = { size: "xs", color: null };
        obj[1] = markAsDismissed(replacedBy[7]).colors.TEXT_STRONG;
        return callback2(callback(replacedBy[26]).OrbsIcon, obj);
      };
      obj8[2] = intl2.format(tmp4(tmp3[25]).qV9zT6, obj9);
      items6[1] = callback(tmp2(tmp3[23]).Text, obj8);
      obj6[1] = items6;
      items5[1] = callback2(tmp2(tmp3[21]).Stack, obj6);
      const obj10 = { children: null };
      const obj11 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
      const intl3 = tmp2(tmp3[24]).intl;
      obj11[0] = intl3.string(tmp4(tmp3[25]).ZeOhh9);
      const obj12 = { size: "sm", color: null };
      obj12[1] = tmp4(tmp3[7]).colors.WHITE;
      obj11[1] = callback(tmp2(tmp3[28]).WindowLaunchIcon, obj12);
      obj11[4] = tmp11;
      const items7 = [callback(tmp2(tmp3[27]).Button, obj11), ];
      const obj13 = { text: null, variant: "secondary", size: "lg", onPress: null };
      const intl4 = tmp2(tmp3[24]).intl;
      obj13[0] = intl4.string(tmp2(tmp3[24]).t.TulDPl);
      obj13[3] = function onPress() {
        markAsDismissed(replacedBy[16]).hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(outer1_7.DISMISS);
        }
      };
      items7[1] = callback(tmp2(tmp3[27]).Button, obj13);
      obj10[0] = items7;
      items5[2] = callback2(tmp2(tmp3[21]).Stack, obj10);
      obj[2] = items5;
      obj[4] = callback2(tmp2(tmp3[21]).Stack, obj);
      return callback(tmp2(tmp3[20]).BottomSheet, obj);
    }
  }
  return false;
};
export const useShouldShowConnectionDeprecationBottomSheet = function useShouldShowConnectionDeprecationBottomSheet(deprecatedPlatformTypes) {
  let canStartAuthorization;
  let fetchingConnections;
  let hasAlreadyLinked;
  let matchingPlatform;
  deprecatedPlatformTypes = deprecatedPlatformTypes.deprecatedPlatformTypes;
  const items = [set];
  const stateFromStoresObject = deprecatedPlatformTypes(589).useStateFromStoresObject(items, () => {
    const obj = { fetchingConnections: outer1_6.isFetching(), matchingPlatform: null };
    const accounts = outer1_6.getAccounts();
    const mapped = accounts.map((type) => callback(table[11]).get(type.type));
    obj[1] = mapped.find((migrationData) => {
      migrationData = migrationData.migrationData;
      let migrationExperimentEnabled;
      if (migrationData != null) {
        migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionDeprecationBottomSheet");
      }
      if (migrationExperimentEnabled) {
        migrationExperimentEnabled = closure_0.includes(migrationData.type);
      }
      return migrationExperimentEnabled;
    });
    return obj;
  });
  ({ fetchingConnections, matchingPlatform } = stateFromStoresObject);
  let obj = deprecatedPlatformTypes(589);
  let replacedBy;
  if (matchingPlatform != null) {
    let migrationData = matchingPlatform.migrationData;
    if (migrationData != null) {
      replacedBy = migrationData.replacedBy;
    }
  }
  const getOrFetchApplication = deprecatedPlatformTypes(5616).useGetOrFetchApplication(replacedBy);
  const tmp5 = useStartAuthorize(getOrFetchApplication);
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