// discord_app/modules/user_profile/native/UserProfileApplicationWidgetCard.tsx
import GameProfileEmbedAction from "GameProfileEmbedAction";
import get_ActivityIndicator from "importDefaultResult1";
import _getSystemLocale from "_getSystemLocale";
import fetchFingerprint from "fetchFingerprint";
import jsxProd from "useStartAuthorize";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let c9;
let closure_6;
const require = arg1;
({ Image: c4, Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { appIcon: null, header: null, divider: null, stillSyncing: null };
createCacheKey = { width: 16, height: 16, borderRadius: require("Themes").radii.xs, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[2] = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE, marginBottom: require("Themes").space.PX_24 };
let obj2 = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE, marginBottom: require("Themes").space.PX_24 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
let result = require("_getSystemLocale").fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default function UserProfileApplicationWidgetCard(userId) {
  let canStartAuthorization;
  let cardStyle;
  let fetched;
  let hasIdentity;
  let isFirstWidget;
  let isLoading;
  let resolutionContext;
  let surfaceConfigs;
  let widget;
  userId = userId.userId;
  ({ widget, cardStyle, isFirstWidget } = userId);
  if (isFirstWidget === undefined) {
    isFirstWidget = false;
  }
  let stateFromStores;
  let dependencyMap;
  let token;
  let tmp = createCacheKey();
  let obj = userId(589);
  const items = [_getSystemLocale];
  stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores];
  const memo = token.useMemo(() => userId(_undefined[14]).createCompactNumberFormat(stateFromStores), items1);
  let obj1 = userId(589);
  const items2 = [fetchFingerprint];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_8.getId() === userId);
  const tmp8 = stateFromStores(1367)("UserProfileCard");
  let obj2 = userId(5795);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  let tmp2Result = tmp2(5988);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = tmp2Result.useGame(canonicalGameId).data;
  let id;
  let tmp7Result = tmp7(9336);
  if (data != null) {
    id = data.id;
  }
  obj = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: tmp2(9347).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp7ResultResult = tmp7Result(obj);
  dependencyMap = tmp7ResultResult;
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = stateFromStores(12532)(userId, widget.applicationId));
  const tmp15 = stateFromStores(5792)(getOrFetchApplication);
  token = tmp15.token;
  ({ fetched, canStartAuthorization } = tmp15);
  const tmp16 = surfaceConfigs[userId(undefined, 12522).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp17 = surfaceConfigs[userId(undefined, 12522).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
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
          let someResult = Array.from(tmp2(8965).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES).some((arg0) => {
            const scopes = token.scopes;
            return scopes.includes(arg0);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(8965).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(8965).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
          }
          tmp21 = someResult;
          const arr = Array.from(tmp2(8965).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
        }
        if (fetched) {
          if (canStartAuthorization) {
            let tmp24 = null;
          }
          return tmp24;
        }
        obj2 = { style: null, title: null, titleLeadingIcon: null, children: null };
        obj2[0] = cardStyle;
        tmp7Result = tmp7(5836);
        tmp2Result = tmp2(7153);
        obj2[1] = tmp2Result.getWidgetTitle(widget);
        obj2[2] = tmp18;
        const obj3 = { style: null, children: null };
        obj3[0] = tmp.stillSyncing;
        const obj4 = { size: "xs", color: null };
        obj4[1] = tmp7(712).colors.TEXT_MUTED;
        const items3 = [callback(tmp2(11683).HourglassIcon, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-muted", children: null };
        const intl = tmp2(1236).intl;
        obj5[2] = intl.string(tmp2(1236).t.z5K4Uv);
        items3[1] = callback(tmp2(4338).Text, obj5);
        obj3[1] = items3;
        obj2[3] = callback2(closure_6, obj3);
        tmp24 = callback(tmp7Result, obj2);
      }
    }
  }
  const tmp14 = stateFromStores(12532)(userId, widget.applicationId);
  const result = userId(12439).bindResolveFieldValue(resolutionContext);
  const obj6 = {
    style: tmp.header,
    onPress() {
      let tmp;
      if (_undefined != null) {
        tmp = _undefined();
      }
      return tmp;
    },
    disabled: null == tmp7ResultResult,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const tmp2Result1 = userId(12439);
  const tmp31 = closure_5;
  obj6[4] = userId(7153).getWidgetTitle(widget);
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
  const tmp2Result2 = userId(7153);
  obj7[3] = userId(7153).getWidgetTitle(widget);
  items4[1] = callback(userId(4338).Text, obj7);
  obj6[5] = items4;
  let tmp30Result = tmp30(tmp31, obj6);
  if (tmp16 != null) {
    let layout = tmp16.layout;
  }
  let tmp32Result = null;
  if (null != tmp16) {
    if (tmp2(12437).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj8 = { header: null, topConfig: null, resolveFieldValue: null, numberFormat: null };
      obj8[0] = tmp30Result;
      obj8[1] = tmp16;
      obj8[2] = result;
      obj8[3] = memo;
      tmp32Result = tmp32(tmp7(12438), obj8);
    } else {
      tmp32Result = null;
      if (tmp2(12437).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj9 = { header: null, topConfig: null, resolveFieldValue: null, numberFormat: null };
        obj9[0] = tmp30Result;
        obj9[1] = tmp16;
        obj9[2] = result;
        obj9[3] = memo;
        tmp32Result = tmp32(tmp7(12528), obj9);
      }
    }
  }
  if (tmp17 != null) {
    const layout2 = tmp17.layout;
  }
  tmp32Result = null;
  if (null != tmp17) {
    if (tmp2(12437).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj10 = { bottomConfig: null, resolveFieldValue: null, numberFormat: null };
      obj10[0] = tmp17;
      obj10[1] = result;
      obj10[2] = memo;
      tmp32Result = tmp32(tmp7(12529), obj10);
    } else if (tmp2(12437).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj11 = { bottomConfig: null, resolveFieldValue: null };
      obj11[0] = tmp17;
      obj11[1] = result;
      tmp32Result = tmp32(tmp7(12530), obj11);
    } else {
      tmp32Result = null;
      if (tmp2(12437).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj12 = { bottomConfig: null, resolveFieldValue: null };
        obj12[0] = tmp17;
        obj12[1] = result;
        tmp32Result = tmp32(tmp7(12531), obj12);
      }
    }
  }
  tmp30Result = null;
  if (null != tmp32Result) {
    tmp30Result = null;
    if (null != tmp32Result) {
      const items5 = [cardStyle, ];
      if (isFirstWidget) {
        layout = undefined;
        if (tmp16 != null) {
          layout = tmp16.layout;
        }
        isFirstWidget = layout === tmp2(12437).ApplicationWidgetLayoutName.WIDGET_TOP_HERO;
      }
      if (isFirstWidget) {
        const obj13 = { marginTop: null };
        obj13[0] = tmp2(12438).HERO_IMAGE_UNCLIPPED_TOP_BLEED;
        isFirstWidget = obj13;
      }
      const obj14 = { style: null, children: null };
      items5[1] = isFirstWidget;
      obj14[0] = items5;
      const items6 = [tmp32Result, , ];
      const obj15 = { style: null };
      obj15[0] = tmp.divider;
      items6[1] = tmp32(closure_6, obj15);
      items6[2] = tmp32Result;
      obj14[1] = items6;
      tmp30Result = tmp30(tmp7(5836), obj14);
      const tmp7Result1 = tmp7(5836);
    }
  }
  return tmp30Result;
};