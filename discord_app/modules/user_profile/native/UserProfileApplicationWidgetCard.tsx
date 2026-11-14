// === Module 12146: UserProfileApplicationWidgetCard ===

// Module 12146 (UserProfileApplicationWidgetCard)
import nativeDefault from "native" /* 575 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 12149 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2189 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5306);
let closure_11 = createStyles.createStyles((arg0) => {
  const obj = { appIcon: null, header: null, editingHeader: null, refresh: null, divider: null, ownerState: null, authorization: null, authorizationCopy: null, authorizationButton: null, stillSyncing: null, syncingCopy: null };
  const size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
  obj.appIcon = size;
  obj.header = { flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_4 };
  const obj2 = { flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_4 };
  obj.editingHeader = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, zIndex: 1 };
  const obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, zIndex: 1 };
  obj.refresh = { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 };
  const obj4 = { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 };
  obj.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
  const obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
  obj.ownerState = { gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  const obj6 = { gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  obj.authorization = { marginTop: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, borderRadius: nativeDefault.radii.md };
  const obj7 = { marginTop: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, borderRadius: nativeDefault.radii.md };
  obj.authorizationCopy = { flexBasis: 2 * nativeDefault.space.PX_160 * arg0, flexGrow: 100, flexShrink: 1, gap: nativeDefault.space.PX_4 };
  const obj8 = { flexBasis: 2 * nativeDefault.space.PX_160 * arg0, flexGrow: 100, flexShrink: 1, gap: nativeDefault.space.PX_4 };
  obj.authorizationButton = { flexBasis: nativeDefault.space.PX_96 * arg0, flexGrow: 1, flexShrink: 1 };
  const obj9 = { flexBasis: nativeDefault.space.PX_96 * arg0, flexGrow: 1, flexShrink: 1 };
  obj.stillSyncing = { padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md };
  obj.syncingCopy = { flexShrink: 1, textAlign: "center" };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default function UserProfileApplicationWidgetCard(userId) {
  userId = userId.userId;
  const widget = userId.widget;
  ({ rendererProps, isEditing } = userId);
  if (isEditing === undefined) {
    isEditing = false;
  }
  let stateFromStores;
  noop = undefined;
  hasAlreadyLinked = undefined;
  c5 = undefined;
  token = undefined;
  let analyticsLocations;
  let trackUserProfileAction;
  const tmp2 = stateFromStores;
  const tmp3 = closure_11(userId(stateFromStores[13]).useFontScale());
  let obj = userId(stateFromStores[13]);
  items = [token];
  stateFromStores = userId(stateFromStores[14]).useStateFromStores(items, () => token.locale);
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => resolvedValuesFromUserApplicationIdentityProfile.createCompactNumberFormat(stateFromStores), items1);
  let obj2 = userId(stateFromStores[14]);
  const items2 = [analyticsLocations];
  const stateFromStores1 = userId(stateFromStores[14]).useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj3 = userId(stateFromStores[14]);
  const getOrFetchApplication = userId(stateFromStores[16]).useGetOrFetchApplication(widget.applicationId);
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
  const obj4 = userId(stateFromStores[16]);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = userId(tmp2[17]).useGame(canonicalGameId).data;
  let id;
  const tmpResult = userId(tmp2[17]);
  if (data != null) {
    id = data.id;
  }
  const tmp10 = widget(tmp2[18]);
  const tmp10Result = tmp10({ location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(tmp2[19]).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" });
  noop = tmp10Result;
  let tmp13 = rendererProps;
  if (rendererProps == null) {
    tmp13 = tmp9(tmp2[20])(userId, widget.applicationId);
  }
  ({ surfaceConfigs, isLoading, hasIdentity, resolutionContext } = tmp13);
  const tmp14 = widget(tmp2[21])(getOrFetchApplication);
  ({ fetched, canStartAuthorization, hasAlreadyLinked } = tmp14);
  ({ startAuthorization: c5, token } = tmp14);
  const obj5 = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(tmp2[19]).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  analyticsLocations = widget(tmp2[22])(tmp9(tmp2[23]).USER_PROFILE_APPLICATION_WIDGET).analyticsLocations;
  const tmp9Result = widget(tmp2[22]);
  trackUserProfileAction = userId(tmp2[24]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmpResult3 = userId(tmp2[24]);
  const tmp16 = widget(tmp2[25])(widget.applicationId, stateFromStores1);
  ({ pending, refresh } = widget(tmp2[26])(widget.applicationId));
  const tmp18 = surfaceConfigs[userId(undefined, tmp2[27]).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp19 = surfaceConfigs[userId(undefined, tmp2[27]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp20 = null;
  if (null != iconURL) {
    const obj6 = { source: null, style: null };
    const obj7 = { uri: iconURL };
    obj6.source = obj7;
    obj6.style = tmp3.appIcon;
    tmp20 = trackUserProfileAction(tmp9(tmp2[28]), obj6);
  }
  let tmp22 = null != token;
  if (tmp22) {
    const _Array = Array;
    let someResult = Array.from(tmp(tmp2[29]).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES).some((item) => {
      const scopes = token.scopes;
      return scopes.includes(item);
    });
    if (!someResult) {
      let scopes = token.scopes;
      someResult = scopes.includes(tmp(tmp2[29]).OAuth2Scopes.SDK_SOCIAL_LAYER);
    }
    if (!someResult) {
      const scopes2 = token.scopes;
      someResult = scopes2.includes(tmp(tmp2[29]).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
    }
    tmp22 = someResult;
    const arr = Array.from(tmp(tmp2[29]).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
  }
  if (null == rendererProps) {
    if (stateFromStores1) {
      if (!isEditing) {
        if (!isLoading) {
          if (!hasIdentity) {
            if (fetched) {
              if (canStartAuthorization) {
                if (!tmp22) {
                  return null;
                }
              }
            }
          }
        }
      }
    }
  }
  let tmp25 = fetched;
  if (fetched) {
    tmp25 = canStartAuthorization;
  }
  if (tmp25) {
    tmp25 = hasAlreadyLinked;
  }
  if (tmp25) {
    tmp25 = !tmp22;
  }
  const tmp17 = widget(tmp2[26])(widget.applicationId);
  const result = userId(tmp2[15]).bindResolveFieldValue(resolutionContext);
  const obj8 = { children: null };
  const items3 = [tmp20, trackUserProfileAction(userId(tmp2[30]).Text, { variant: "body-sm/medium", color: "text-strong", lineClamp: 1, children: str })];
  obj8.children = items3;
  const tmp29 = closure_10(closure_9, obj8);
  if (null != tmp10Result) {
    const obj9 = {
      style: tmp3.header,
      onPress() {
          return closure_3();
        },
      accessibilityRole: "button",
      accessibilityLabel: str,
      children: tmp29
    };
    let tmp28Result = tmp28(hasAlreadyLinked, obj9);
  } else {
    const obj10 = { style: tmp3.header, children: tmp29 };
    tmp28Result = tmp28(c5, obj10);
  }
  let tmp27Result = tmp28Result;
  if (isEditing) {
    const obj11 = { style: tmp3.editingHeader, children: null };
    const items4 = [tmp28Result, ];
    const obj12 = { widget };
    items4[1] = tmp28(tmp9(tmp2[31]), obj12);
    obj11.children = items4;
    tmp27Result = closure_10(c5, obj11);
  }
  if (tmp18 != null) {
    const layout = tmp18.layout;
  }
  let tmp28Result3 = null;
  if (null != tmp18) {
    if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj13 = { header: tmp27Result, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
      tmp28Result3 = tmp28(tmp9(tmp2[8]), obj13);
    } else {
      tmp28Result3 = null;
      if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj14 = { header: tmp27Result, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
        tmp28Result3 = tmp28(tmp9(tmp2[9]), obj14);
      }
    }
  }
  if (tmp19 != null) {
    const layout2 = tmp19.layout;
  }
  let tmp28Result4 = null;
  if (null != tmp19) {
    if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj15 = { bottomConfig: tmp19, resolveFieldValue: result, numberFormat: memo };
      tmp28Result4 = tmp28(tmp9(tmp2[10]), obj15);
    } else if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj16 = { bottomConfig: tmp19, resolveFieldValue: result };
      tmp28Result4 = tmp28(tmp9(tmp2[11]), obj16);
    } else {
      tmp28Result4 = null;
      if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj17 = { bottomConfig: tmp19, resolveFieldValue: result };
        tmp28Result4 = tmp28(tmp9(tmp2[12]), obj17);
      }
    }
  }
  let tmp27Result8 = null;
  if (null != tmp28Result3) {
    tmp27Result8 = null;
    if (null != tmp28Result4) {
      const obj18 = { style: userId.cardStyle, children: null };
      const items5 = [tmp28Result3, , , , , ];
      const obj19 = { style: tmp3.divider };
      items5[1] = tmp28(c5, obj19);
      items5[2] = tmp28Result4;
      let tmp40 = null;
      if (stateFromStores1) {
        tmp40 = null;
        if (null == rendererProps) {
          if (isEditing) {
            const obj20 = { style: tmp3.authorization, children: null };
            const obj21 = { style: tmp3.authorizationCopy, children: null };
            const intl2 = tmp(tmp2[33]).intl;
            const t = tmp(tmp2[33]).t;
            const obj22 = { variant: "heading-xs/medium", color: "text-default", children: intl2.string(tmp25 ? t["9WarGY"] : t.UDPRLO) };
            const items6 = [tmp28(tmp(tmp2[30]).Text, obj22), ];
            const intl3 = tmp(tmp2[33]).intl;
            const t2 = tmp(tmp2[33]).t;
            const obj23 = { variant: "body-xs/normal", color: "text-subtle", children: intl3.string(tmp25 ? t2.qgxnKe : t2["OW/2al"]) };
            items6[1] = tmp28(tmp(tmp2[30]).Text, obj23);
            obj21.children = items6;
            const items7 = [closure_10(tmp39, obj21), ];
            let obj24 = { style: tmp3.authorizationButton, children: null };
            const intl4 = tmp(tmp2[33]).intl;
            let t3 = tmp(tmp2[33]).t;
            const obj25 = {
              size: "sm",
              text: intl4.string(tmp25 ? t3.vD60Pv : t3.S0W8Z5),
              onPress: function handleConnect() {
                          let str = "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT";
                          if (hasAlreadyLinked) {
                            str = "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT";
                          }
                          trackUserProfileAction({ action: str, applicationId: widget.applicationId });
                          _undefined({ analyticsLocations });
                          const obj = { action: str, applicationId: widget.applicationId };
                          const obj2 = { analyticsLocations };
                        }
            };
            t3 = tmp28(tmp(tmp2[34]).Button, obj25);
            obj24.children = t3;
            obj24 = tmp28(tmp39, obj24);
            items7[1] = obj24;
            obj20.children = items7;
            closure_10(tmp39, obj20);
          }
          let tmp27Result6 = null;
          if (!isLoading) {
            tmp27Result6 = null;
            if (!hasIdentity) {
              const obj26 = { style: null, children: null };
              const items8 = [, ];
              ({ ownerState: arr7[0], stillSyncing: arr7[1] } = tmp3);
              obj26.style = items8;
              const obj27 = { size: "xs", color: tmp9(tmp2[6]).colors.TEXT_MUTED };
              const items9 = [tmp28(tmp(tmp2[35]).HourglassIcon, obj27), ];
              const obj28 = { variant: "body-sm/medium", color: "text-muted", style: tmp3.syncingCopy, children: null };
              const intl = tmp(tmp2[33]).intl;
              obj28.children = intl.string(tmp(tmp2[33]).t.z5K4Uv);
              items9[1] = tmp28(tmp(tmp2[30]).Text, obj28);
              obj26.children = items9;
              tmp27Result6 = closure_10(tmp39, obj26);
            }
          }
        }
      }
      items5[3] = tmp40;
      let tmp27Result7 = null;
      if (true === tmp16) {
        tmp27Result7 = null;
        if (null == rendererProps) {
          const obj29 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: 8, disabled: null, onPress: null, style: null, children: null };
          const intl5 = tmp(tmp2[33]).intl;
          obj29.accessibilityLabel = intl5.string(tmp(tmp2[33]).t.wzzjk9);
          obj29.disabled = pending;
          obj29.onPress = refresh;
          obj29.style = tmp3.refresh;
          const obj30 = { size: "xs", color: tmp9(tmp2[6]).colors.TEXT_MUTED };
          const items10 = [tmp28(tmp(tmp2[37]).RetryIcon, obj30), ];
          const obj31 = { variant: "body-xs/medium", color: "text-muted", children: null };
          const intl6 = tmp(tmp2[33]).intl;
          obj31.children = intl6.string(tmp(tmp2[33]).t.wzzjk9);
          items10[1] = tmp28(tmp(tmp2[30]).Text, obj31);
          obj29.children = items10;
          tmp27Result7 = closure_10(tmp(tmp2[36]).PressableOpacity, obj29);
        }
      }
      items5[4] = tmp27Result7;
      items5[5] = userId.footer;
      obj18.children = items5;
      tmp27Result8 = closure_10(tmp9(tmp2[32]), obj18);
      const tmp9Result2 = tmp9(tmp2[32]);
    }
  }
  return tmp27Result8;
};