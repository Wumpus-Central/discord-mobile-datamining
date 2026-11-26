// === Module 14608: UserProfileApplicationWidgetCard ===

// Module 14608 (UserProfileApplicationWidgetCard)
import nativeDefault from "native" /* 575 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 14611 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2189 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5043);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { editingHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, zIndex: 1 }, refresh: null, divider: null, ownerState: null, authorization: null, authorizationCopy: null, authorizationButton: null, stillSyncing: null, syncingCopy: null };
  const obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, zIndex: 1 };
  obj.refresh = { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 };
  const obj3 = { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 };
  obj.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
  const obj4 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
  obj.ownerState = { gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  const obj5 = { gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  obj.authorization = { marginTop: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, borderRadius: nativeDefault.radii.md };
  const obj6 = { marginTop: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, borderRadius: nativeDefault.radii.md };
  obj.authorizationCopy = { flexBasis: 2 * nativeDefault.space.PX_160 * arg0, flexGrow: 100, flexShrink: 1, gap: nativeDefault.space.PX_4 };
  const obj7 = { flexBasis: 2 * nativeDefault.space.PX_160 * arg0, flexGrow: 100, flexShrink: 1, gap: nativeDefault.space.PX_4 };
  obj.authorizationButton = { flexBasis: nativeDefault.space.PX_96 * arg0, flexGrow: 1, flexShrink: 1 };
  const obj8 = { flexBasis: nativeDefault.space.PX_96 * arg0, flexGrow: 1, flexShrink: 1 };
  obj.stillSyncing = { padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md };
  obj.syncingCopy = { flexShrink: 1, textAlign: "center" };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default function UserProfileApplicationWidgetCard(userId) {
  userId = userId.userId;
  const widget = userId.widget;
  ({ rendererProps, isEditing } = userId);
  if (isEditing === undefined) {
    isEditing = false;
  }
  let stateFromStores;
  hasAlreadyLinked = undefined;
  c4 = undefined;
  token = undefined;
  let analyticsLocations;
  let trackUserProfileAction;
  const tmp2 = stateFromStores;
  const tmp3 = closure_9(userId(stateFromStores[13]).useFontScale());
  let obj = userId(stateFromStores[13]);
  items = [token];
  stateFromStores = userId(stateFromStores[14]).useStateFromStores(items, () => token.locale);
  const items1 = [stateFromStores];
  const memo = hasAlreadyLinked.useMemo(() => resolvedValuesFromUserApplicationIdentityProfile.createCompactNumberFormat(stateFromStores), items1);
  let obj2 = userId(stateFromStores[14]);
  const items2 = [analyticsLocations];
  const stateFromStores1 = userId(stateFromStores[14]).useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj3 = userId(stateFromStores[14]);
  const getOrFetchApplication = userId(stateFromStores[16]).useGetOrFetchApplication(widget.applicationId);
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
  const tmp9 = widget(tmp2[18]);
  const obj5 = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(tmp2[19]).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  let tmp12 = rendererProps;
  if (rendererProps == null) {
    tmp12 = tmp8(tmp2[20])(userId, widget.applicationId);
  }
  ({ surfaceConfigs, isLoading, hasIdentity, resolutionContext } = tmp12);
  const tmp13 = widget(tmp2[21])(getOrFetchApplication);
  ({ fetched, canStartAuthorization, hasAlreadyLinked } = tmp13);
  ({ startAuthorization: c4, token } = tmp13);
  const tmp9Result = tmp9({ location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(tmp2[19]).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" });
  analyticsLocations = widget(tmp2[22])(tmp8(tmp2[23]).USER_PROFILE_APPLICATION_WIDGET).analyticsLocations;
  const tmp8Result = widget(tmp2[22]);
  trackUserProfileAction = userId(tmp2[24]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmpResult3 = userId(tmp2[24]);
  const tmp15 = widget(tmp2[25])(widget.applicationId, stateFromStores1);
  ({ pending, refresh } = widget(tmp2[26])(widget.applicationId));
  const tmp17 = surfaceConfigs[userId(undefined, tmp2[27]).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp18 = surfaceConfigs[userId(undefined, tmp2[27]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp21 = null != token;
  const tmp16 = widget(tmp2[26])(widget.applicationId);
  if (tmp21) {
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
    tmp21 = someResult;
    const arr = Array.from(tmp(tmp2[29]).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
  }
  if (null == rendererProps) {
    if (stateFromStores1) {
      if (!isEditing) {
        if (!isLoading) {
          if (!hasIdentity) {
            if (fetched) {
              if (canStartAuthorization) {
                if (!tmp21) {
                  return null;
                }
              }
            }
          }
        }
      }
    }
  }
  let tmp24 = fetched;
  if (fetched) {
    tmp24 = canStartAuthorization;
  }
  if (tmp24) {
    tmp24 = hasAlreadyLinked;
  }
  if (tmp24) {
    tmp24 = !tmp21;
  }
  const tmp20 = trackUserProfileAction(widget(tmp2[28]), { application: getOrFetchApplication });
  const result = userId(tmp2[15]).bindResolveFieldValue(resolutionContext);
  const tmp19Result = trackUserProfileAction(widget(tmp2[30]), { title: str, leadingIcon: tmp20, onPress: tmp9Result });
  let tmp27 = tmp19Result;
  if (isEditing) {
    const obj6 = { style: tmp3.editingHeader, children: null };
    const items3 = [tmp19Result, ];
    const obj7 = { widget };
    items3[1] = tmp19(tmp8(tmp2[31]), obj7);
    obj6.children = items3;
    tmp27 = closure_8(c4, obj6);
  }
  if (tmp17 != null) {
    const layout = tmp17.layout;
  }
  let tmp19Result3 = null;
  if (null != tmp17) {
    if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj8 = { header: tmp27, topConfig: tmp17, resolveFieldValue: result, numberFormat: memo };
      tmp19Result3 = tmp19(tmp8(tmp2[8]), obj8);
    } else {
      tmp19Result3 = null;
      if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj9 = { header: tmp27, topConfig: tmp17, resolveFieldValue: result, numberFormat: memo };
        tmp19Result3 = tmp19(tmp8(tmp2[9]), obj9);
      }
    }
  }
  if (tmp18 != null) {
    const layout2 = tmp18.layout;
  }
  let tmp19Result4 = null;
  if (null != tmp18) {
    if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj10 = { bottomConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
      tmp19Result4 = tmp19(tmp8(tmp2[10]), obj10);
    } else if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj11 = { bottomConfig: tmp18, resolveFieldValue: result };
      tmp19Result4 = tmp19(tmp8(tmp2[11]), obj11);
    } else {
      tmp19Result4 = null;
      if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj12 = { bottomConfig: tmp18, resolveFieldValue: result };
        tmp19Result4 = tmp19(tmp8(tmp2[12]), obj12);
      }
    }
  }
  let tmp33Result6 = null;
  if (null != tmp19Result3) {
    tmp33Result6 = null;
    if (null != tmp19Result4) {
      const obj13 = { style: userId.cardStyle, children: null };
      const items4 = [tmp19Result3, , , , , ];
      const obj14 = { style: tmp3.divider };
      items4[1] = tmp19(c4, obj14);
      items4[2] = tmp19Result4;
      let tmp36 = null;
      if (stateFromStores1) {
        tmp36 = null;
        if (null == rendererProps) {
          if (isEditing) {
            const obj15 = { style: tmp3.authorization, children: null };
            const obj16 = { style: tmp3.authorizationCopy, children: null };
            const intl2 = tmp(tmp2[34]).intl;
            const t = tmp(tmp2[34]).t;
            const obj17 = { variant: "heading-xs/medium", color: "text-default", children: intl2.string(tmp24 ? t["9WarGY"] : t.UDPRLO) };
            const items5 = [tmp19(tmp(tmp2[33]).Text, obj17), ];
            const intl3 = tmp(tmp2[34]).intl;
            const t2 = tmp(tmp2[34]).t;
            const obj18 = { variant: "body-xs/normal", color: "text-subtle", children: intl3.string(tmp24 ? t2.qgxnKe : t2["OW/2al"]) };
            items5[1] = tmp19(tmp(tmp2[33]).Text, obj18);
            obj16.children = items5;
            const items6 = [closure_8(tmp35, obj16), ];
            let obj19 = { style: tmp3.authorizationButton, children: null };
            const intl4 = tmp(tmp2[34]).intl;
            let t3 = tmp(tmp2[34]).t;
            const obj20 = {
              size: "sm",
              text: intl4.string(tmp24 ? t3.vD60Pv : t3.S0W8Z5),
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
            t3 = tmp19(tmp(tmp2[35]).Button, obj20);
            obj19.children = t3;
            obj19 = tmp19(tmp35, obj19);
            items6[1] = obj19;
            obj15.children = items6;
            closure_8(tmp35, obj15);
          }
          let tmp33Result4 = null;
          if (!isLoading) {
            tmp33Result4 = null;
            if (!hasIdentity) {
              const obj21 = { style: null, children: null };
              const items7 = [, ];
              ({ ownerState: arr6[0], stillSyncing: arr6[1] } = tmp3);
              obj21.style = items7;
              const obj22 = { size: "xs", color: tmp8(tmp2[6]).colors.TEXT_MUTED };
              const items8 = [tmp19(tmp(tmp2[36]).HourglassIcon, obj22), ];
              const obj23 = { variant: "body-sm/medium", color: "text-muted", style: tmp3.syncingCopy, children: null };
              const intl = tmp(tmp2[34]).intl;
              obj23.children = intl.string(tmp(tmp2[34]).t.z5K4Uv);
              items8[1] = tmp19(tmp(tmp2[33]).Text, obj23);
              obj21.children = items8;
              tmp33Result4 = closure_8(tmp35, obj21);
            }
          }
        }
      }
      items4[3] = tmp36;
      let tmp33Result5 = null;
      if (true === tmp15) {
        tmp33Result5 = null;
        if (null == rendererProps) {
          const obj24 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: 8, disabled: null, onPress: null, style: null, children: null };
          const intl5 = tmp(tmp2[34]).intl;
          obj24.accessibilityLabel = intl5.string(tmp(tmp2[34]).t.wzzjk9);
          obj24.disabled = pending;
          obj24.onPress = refresh;
          obj24.style = tmp3.refresh;
          const obj25 = { size: "xs", color: tmp8(tmp2[6]).colors.TEXT_MUTED };
          const items9 = [tmp19(tmp(tmp2[38]).RetryIcon, obj25), ];
          const obj26 = { variant: "body-xs/medium", color: "text-muted", children: null };
          const intl6 = tmp(tmp2[34]).intl;
          obj26.children = intl6.string(tmp(tmp2[34]).t.wzzjk9);
          items9[1] = tmp19(tmp(tmp2[33]).Text, obj26);
          obj24.children = items9;
          tmp33Result5 = closure_8(tmp(tmp2[37]).PressableOpacity, obj24);
        }
      }
      items4[4] = tmp33Result5;
      items4[5] = userId.footer;
      obj13.children = items4;
      tmp33Result6 = closure_8(tmp8(tmp2[32]), obj13);
      const tmp8Result2 = tmp8(tmp2[32]);
    }
  }
  return tmp33Result6;
};