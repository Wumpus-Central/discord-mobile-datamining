// === Module 12598: UserProfileApplicationWidgetCard ===

// Module 12598 (UserProfileApplicationWidgetCard)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "_getSystemLocale" /* 1997 */;
import closure_8 from "fetchFingerprint" /* 1218 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ Image: c4, Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { appIcon: null, header: null, divider: null, stillSyncing: null };
createCacheKey = { width: 16, height: 16, borderRadius: ThemesDefault.radii.xs, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[2] = { borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, marginBottom: ThemesDefault.space.PX_24 };
let obj2 = { borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj3 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default function UserProfileApplicationWidgetCard(userId) {
  userId = userId.userId;
  ({ widget, cardStyle } = userId);
  let stateFromStores;
  dependencyMap = undefined;
  let token;
  let tmp = callback3();
  let obj = userId(589);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores];
  const memo = token.useMemo(() => userId(12601).createCompactNumberFormat(stateFromStores), items1);
  obj1 = userId(589);
  const items2 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => closure_1_8.getId() === userId);
  const tmp8 = stateFromStores(1367)("UserProfileCard");
  let obj2 = userId(5924);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  let tmp2Result = tmp2(6119);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = tmp2Result.useGame(canonicalGameId).data;
  let id;
  let tmp7Result = tmp7(8742);
  if (data != null) {
    id = data.id;
  }
  obj = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: tmp2(8753).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp7ResultResult = tmp7Result(obj);
  dependencyMap = tmp7ResultResult;
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = stateFromStores(12696)(userId, widget.applicationId));
  const tmp15 = stateFromStores(5921)(getOrFetchApplication);
  token = tmp15.token;
  ({ fetched, canStartAuthorization } = tmp15);
  const tmp16 = surfaceConfigs[userId(undefined, 12684).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp17 = surfaceConfigs[userId(undefined, 12684).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp18 = null;
  if (null != iconURL) {
    obj = { source: null, style: null };
    obj1 = { uri: null };
    obj1[0] = iconURL;
    obj[0] = obj1;
    obj[1] = tmp.appIcon;
    tmp18 = callback(closure_4, obj);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        let tmp21 = null != token;
        if (tmp21) {
          const _Array = Array;
          let someResult = Array.from(tmp2(8556).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES).some((arg0) => {
            const scopes = token.scopes;
            return scopes.includes(arg0);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(8556).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(8556).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
          }
          tmp21 = someResult;
          const arr = Array.from(tmp2(8556).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
        }
        if (fetched) {
          if (canStartAuthorization) {
            let tmp24 = null;
          }
          return tmp24;
        }
        obj2 = { style: null, title: null, titleLeadingIcon: null, children: null };
        obj2[0] = cardStyle;
        tmp7Result = tmp7(5965);
        tmp2Result = tmp2(7316);
        obj2[1] = tmp2Result.getWidgetTitle(widget);
        obj2[2] = tmp18;
        const obj3 = { style: null, children: null };
        obj3[0] = tmp.stillSyncing;
        const obj4 = { size: "xs", color: null };
        obj4[1] = tmp7(712).colors.TEXT_MUTED;
        const items3 = [callback(tmp2(9335).HourglassIcon, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-muted", children: null };
        const intl = tmp2(1236).intl;
        obj5[2] = intl.string(tmp2(1236).t.z5K4Uv);
        items3[1] = callback(tmp2(4442).Text, obj5);
        obj3[1] = items3;
        obj2[3] = callback2(closure_6, obj3);
        tmp24 = callback(tmp7Result, obj2);
      }
    }
  }
  const tmp14 = stateFromStores(12696)(userId, widget.applicationId);
  const result = userId(12601).bindResolveFieldValue(resolutionContext);
  const obj6 = {
    style: tmp.header,
    onPress() {
      let tmp;
      if (dependencyMap != null) {
        tmp = dependencyMap();
      }
      return tmp;
    },
    disabled: null == tmp7ResultResult,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const tmp2Result1 = userId(12601);
  const tmp31 = closure_5;
  obj6[4] = userId(7316).getWidgetTitle(widget);
  const items4 = [tmp18, ];
  let str = "text-sm/semibold";
  if (tmp8) {
    str = "text-sm/medium";
  }
  const obj7 = { variant: str, color: null, lineClamp: 1, children: null };
  let str2 = "text-default";
  if (tmp8) {
    str2 = "text-strong";
  }
  obj7[1] = str2;
  const tmp2Result2 = userId(7316);
  obj7[3] = userId(7316).getWidgetTitle(widget);
  items4[1] = callback(userId(4442).Text, obj7);
  obj6[5] = items4;
  let tmp30Result = tmp30(tmp31, obj6);
  if (tmp16 != null) {
    const layout = tmp16.layout;
  }
  let tmp32Result = null;
  if (null != tmp16) {
    if (tmp2(12599).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj8 = { header: null, topConfig: null, resolveFieldValue: null, numberFormat: null };
      obj8[0] = tmp30Result;
      obj8[1] = tmp16;
      obj8[2] = result;
      obj8[3] = memo;
      tmp32Result = tmp32(tmp7(12600), obj8);
    } else {
      tmp32Result = null;
      if (tmp2(12599).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj9 = { header: null, topConfig: null, resolveFieldValue: null, numberFormat: null };
        obj9[0] = tmp30Result;
        obj9[1] = tmp16;
        obj9[2] = result;
        obj9[3] = memo;
        tmp32Result = tmp32(tmp7(12692), obj9);
      }
    }
  }
  if (tmp17 != null) {
    const layout2 = tmp17.layout;
  }
  tmp32Result = null;
  if (null != tmp17) {
    if (tmp2(12599).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj10 = { bottomConfig: null, resolveFieldValue: null, numberFormat: null };
      obj10[0] = tmp17;
      obj10[1] = result;
      obj10[2] = memo;
      tmp32Result = tmp32(tmp7(12693), obj10);
    } else if (tmp2(12599).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj11 = { bottomConfig: null, resolveFieldValue: null };
      obj11[0] = tmp17;
      obj11[1] = result;
      tmp32Result = tmp32(tmp7(12694), obj11);
    } else {
      tmp32Result = null;
      if (tmp2(12599).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj12 = { bottomConfig: null, resolveFieldValue: null };
        obj12[0] = tmp17;
        obj12[1] = result;
        tmp32Result = tmp32(tmp7(12695), obj12);
      }
    }
  }
  tmp30Result = null;
  if (null != tmp32Result) {
    tmp30Result = null;
    if (null != tmp32Result) {
      const obj13 = { style: null, children: null };
      obj13[0] = cardStyle;
      const items5 = [tmp32Result, , ];
      const obj14 = { style: null };
      obj14[0] = tmp.divider;
      items5[1] = tmp32(closure_6, obj14);
      items5[2] = tmp32Result;
      obj13[1] = items5;
      tmp30Result = tmp30(tmp7(5965), obj13);
      const tmp7Result1 = tmp7(5965);
    }
  }
  return tmp30Result;
};