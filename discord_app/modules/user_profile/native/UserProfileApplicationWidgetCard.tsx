// === Module 12458: UserProfileApplicationWidgetCard ===

// Module 12458 (UserProfileApplicationWidgetCard)
import nativeDefault from "native" /* 575 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 12461 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2186 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5142);
let obj2 = { appIcon: null, header: null, editingHeader: null, refresh: null, divider: null, stillSyncing: null };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.appIcon = size;
obj2.header = { flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_4 };
let obj3 = { flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_4 };
obj2.editingHeader = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, zIndex: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, zIndex: 1 };
obj2.refresh = { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 };
let obj5 = { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 };
obj2.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
let obj6 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
obj2.stillSyncing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default function UserProfileApplicationWidgetCard(userId) {
  userId = userId.userId;
  ({ widget, cardStyle, rendererProps, isEditing } = userId);
  if (isEditing === undefined) {
    isEditing = false;
  }
  dependencyMap = undefined;
  let token;
  let tmp = closure_10();
  items = [LocaleStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores];
  const memo = token.useMemo(() => resolvedValuesFromUserApplicationIdentityProfile.createCompactNumberFormat(stateFromStores), items1);
  const obj = userId(504);
  const items2 = [AuthenticationStore];
  const stateFromStores1 = userId(504).useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj2 = userId(504);
  const getOrFetchApplication = userId(7394).useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  let str;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const obj3 = userId(7394);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = userId(7547).useGame(canonicalGameId).data;
  let id;
  const tmp2Result = userId(7547);
  if (data != null) {
    id = data.id;
  }
  const tmp10 = stateFromStores(9403);
  const tmp10Result = tmp10({ location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(9427).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" });
  dependencyMap = tmp10Result;
  let tmp13 = rendererProps;
  if (rendererProps == null) {
    tmp13 = tmp9(12555)(userId, widget.applicationId);
  }
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = tmp13);
  const tmp14 = stateFromStores(7391)(getOrFetchApplication);
  token = tmp14.token;
  ({ fetched, canStartAuthorization } = tmp14);
  const obj4 = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(9427).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp15 = stateFromStores(12558)(widget.applicationId, stateFromStores1);
  ({ pending, refresh } = stateFromStores(12387)(widget.applicationId));
  const tmp17 = surfaceConfigs[userId(undefined, 12257).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp18 = surfaceConfigs[userId(undefined, 12257).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp19 = null;
  if (null != iconURL) {
    const obj5 = { source: null, style: null };
    const obj6 = { uri: iconURL };
    obj5.source = obj6;
    obj5.style = tmp.appIcon;
    tmp19 = closure_8(tmp9(5844), obj5);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        let tmp21 = null != token;
        if (tmp21) {
          const _Array = Array;
          let someResult = Array.from(tmp2(8990).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES).some((item) => {
            const scopes = token.scopes;
            return scopes.includes(item);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(8990).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(8990).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
          }
          tmp21 = someResult;
          const arr = Array.from(tmp2(8990).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
        }
        if (fetched) {
          if (canStartAuthorization) {
            let tmp25Result2 = null;
          }
          return tmp25Result2;
        }
        const obj7 = { style: cardStyle, title: str, titleLeadingIcon: tmp19, trailingAction: null, children: null };
        let tmp25Result;
        if (isEditing) {
          const obj8 = { widget };
          tmp25Result = closure_8(tmp9(12559), obj8);
        }
        obj7.trailingAction = tmp25Result;
        const obj9 = { style: tmp.stillSyncing, children: null };
        const obj10 = { size: "xs", color: tmp9(575).colors.TEXT_MUTED };
        const items3 = [closure_8(tmp2(12575).HourglassIcon, obj10), ];
        const obj11 = { variant: "body-sm/medium", color: "text-muted", children: null };
        const intl = tmp2(1113).intl;
        obj11.children = intl.string(tmp2(1113).t.z5K4Uv);
        items3[1] = closure_8(tmp2(5753).Text, obj11);
        obj9.children = items3;
        obj7.children = closure_9(closure_5, obj9);
        tmp25Result2 = closure_8(tmp9(7439), obj7);
        const tmp9Result = tmp9(7439);
      }
    }
  }
  const tmp16 = stateFromStores(12387)(widget.applicationId);
  const result = userId(12461).bindResolveFieldValue(resolutionContext);
  const obj12 = {
    style: tmp.header,
    onPress() {
      let tmp;
      if (closure_2 != null) {
        tmp = closure_2();
      }
      return tmp;
    },
    disabled: null == tmp10Result,
    accessibilityRole: "button",
    accessibilityLabel: str,
    children: null
  };
  const items4 = [tmp19, closure_8(userId(5753).Text, { variant: "body-sm/medium", color: "text-strong", lineClamp: 1, children: str })];
  obj12.children = items4;
  const tmp33 = closure_9(closure_4, obj12);
  let tmp31Result = tmp33;
  if (isEditing) {
    const obj13 = { style: tmp.editingHeader, children: null };
    const items5 = [tmp33, ];
    const obj14 = { widget };
    items5[1] = closure_8(tmp9(12559), obj14);
    obj13.children = items5;
    tmp31Result = closure_9(closure_5, obj13);
  }
  if (tmp17 != null) {
    const layout = tmp17.layout;
  }
  let tmp32Result = null;
  if (null != tmp17) {
    if (tmp2(12459).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj15 = { header: tmp31Result, topConfig: tmp17, resolveFieldValue: result, numberFormat: memo };
      tmp32Result = closure_8(tmp9(12460), obj15);
    } else {
      tmp32Result = null;
      if (tmp2(12459).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj16 = { header: tmp31Result, topConfig: tmp17, resolveFieldValue: result, numberFormat: memo };
        tmp32Result = closure_8(tmp9(12551), obj16);
      }
    }
  }
  if (tmp18 != null) {
    const layout2 = tmp18.layout;
  }
  let tmp32Result2 = null;
  if (null != tmp18) {
    if (tmp2(12459).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj17 = { bottomConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
      tmp32Result2 = closure_8(tmp9(12552), obj17);
    } else if (tmp2(12459).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj18 = { bottomConfig: tmp18, resolveFieldValue: result };
      tmp32Result2 = closure_8(tmp9(12553), obj18);
    } else {
      tmp32Result2 = null;
      if (tmp2(12459).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj19 = { bottomConfig: tmp18, resolveFieldValue: result };
        tmp32Result2 = closure_8(tmp9(12554), obj19);
      }
    }
  }
  let tmp31Result4 = null;
  if (null != tmp32Result) {
    tmp31Result4 = null;
    if (null != tmp32Result2) {
      const obj20 = { style: cardStyle, children: null };
      const items6 = [tmp32Result, , , , ];
      const obj21 = { style: tmp.divider };
      items6[1] = closure_8(closure_5, obj21);
      items6[2] = tmp32Result2;
      let tmp31Result3 = null;
      if (true === tmp15) {
        tmp31Result3 = null;
        if (null == rendererProps) {
          const obj22 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: 8, disabled: null, onPress: null, style: null, children: null };
          const intl2 = tmp2(1113).intl;
          obj22.accessibilityLabel = intl2.string(tmp2(1113).t.wzzjk9);
          obj22.disabled = pending;
          obj22.onPress = refresh;
          obj22.style = tmp.refresh;
          const obj23 = { size: "xs", color: tmp9(575).colors.TEXT_MUTED };
          const items7 = [closure_8(tmp2(11224).RetryIcon, obj23), ];
          const obj24 = { variant: "body-xs/medium", color: "text-muted", children: null };
          const intl3 = tmp2(1113).intl;
          obj24.children = intl3.string(tmp2(1113).t.wzzjk9);
          items7[1] = closure_8(tmp2(5753).Text, obj24);
          obj22.children = items7;
          tmp31Result3 = closure_9(tmp2(7046).PressableOpacity, obj22);
        }
      }
      items6[3] = tmp31Result3;
      items6[4] = userId.footer;
      obj20.children = items6;
      tmp31Result4 = closure_9(tmp9(7439), obj20);
      const tmp9Result2 = tmp9(7439);
    }
  }
  return tmp31Result4;
};