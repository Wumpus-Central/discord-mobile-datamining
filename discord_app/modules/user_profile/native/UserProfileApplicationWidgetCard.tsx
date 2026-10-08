// === Module 13099: UserProfileApplicationWidgetCard ===

// Module 13099 (UserProfileApplicationWidgetCard)
import nativeDefault from "native" /* 587 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 13102 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { appIcon: null, header: null, refresh: null, divider: null, stillSyncing: null };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.appIcon = size;
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.refresh = { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 };
let obj4 = { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 };
obj2.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
let obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
obj2.stillSyncing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileApplicationWidgetCard(userId) {
  const cResult = userId(token[14]).c(67);
  userId = userId.userId;
  ({ widget, cardStyle, rendererProps } = userId);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function u() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = userId(token[14]);
  const stateFromStores = userId(token[15]).useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    const compactNumberFormat = tmp(tmp2[16]).createCompactNumberFormat(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = compactNumberFormat;
    const tmpResult6 = tmp(tmp2[16]);
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AuthenticationStore];
    cResult[4] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== userId) {
    class E {
      constructor() {
        return closure_7.getId() === userId;
      }
    }
    cResult[5] = userId;
    cResult[6] = E;
  } else {
    class E {
      constructor() {
        return closure_7.getId() === userId;
      }
    }
  }
  const tmpResult = userId(token[15]);
  const stateFromStores1 = userId(token[15]).useStateFromStores(tmp11, E);
  const tmpResult7 = userId(token[15]);
  const getOrFetchApplication = userId(token[17]).useGetOrFetchApplication(widget.applicationId);
  if (cResult[7] !== getOrFetchApplication) {
    class E {
      constructor() {
        return closure_7.getId() === userId;
      }
    }
    let iconURL;
    if (getOrFetchApplication != null) {
      class E {
        constructor() {
          return closure_7.getId() === userId;
        }
      }
      iconURL = getOrFetchApplication.getIconURL(16);
    }
    cResult[7] = getOrFetchApplication;
    cResult[8] = iconURL;
  } else {
    class E {
      constructor() {
        return closure_7.getId() === userId;
      }
    }
  }
  if (cResult[9] !== getOrFetchApplication) {
    class E {
      constructor() {
        return closure_7.getId() === userId;
      }
    }
    if (getOrFetchApplication != null) {
      class E {
        constructor() {
          return closure_7.getId() === userId;
        }
      }
    }
    cResult[9] = getOrFetchApplication;
    cResult[10] = undefined;
  } else {
    class E {
      constructor() {
        return closure_7.getId() === userId;
      }
    }
  }
  const tmpResult8 = userId(token[17]);
  if (tmpResult9.useGame(tmp17).data != null) {
    class E {
      constructor() {
        return closure_7.getId() === userId;
      }
    }
  }
  if (cResult[11] === undefined) {
    class E {
      constructor() {
        return closure_7.getId() === userId;
      }
    }
    const tmp21 = require("useOpenGameProfileModal")(obj6);
    importDefault = tmp21;
    if (rendererProps == null) {
      class E {
        constructor() {
          return closure_7.getId() === userId;
        }
      }
    }
    ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = rendererProps);
    const tmp23 = require("useStartAuthorize")(getOrFetchApplication);
    token = tmp23.token;
    ({ fetched, canStartAuthorization } = tmp23);
    require("useIsOwnedConjureApplication")(widget.applicationId, stateFromStores1);
    ({ pending, refresh } = require("useApplicationWidgetRefresh")(widget.applicationId));
    surfaceConfigs[tmp(undefined, tmp2[25]).ApplicationWidgetConfigSurface.WIDGET_TOP];
    if (cResult[14] === tmp15) {
      class E {
        constructor() {
          return closure_7.getId() === userId;
        }
      }
      if (stateFromStores1) {
        class E {
          constructor() {
            return closure_7.getId() === userId;
          }
        }
      }
      if (cResult[28] === surfaceConfigs[tmp(undefined, tmp2[25]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM]) {
        class E {
          constructor() {
            return closure_7.getId() === userId;
          }
        }
      }
      const result = tmp(tmp2[16]).bindResolveFieldValue(resolutionContext);
      if (cResult[38] !== tmp21) {
        class E {
          constructor() {
            return closure_7.getId() === userId;
          }
        }
        cResult[38] = tmp21;
        cResult[39] = tmp31;
      } else {
        class E {
          constructor() {
            return closure_7.getId() === userId;
          }
        }
      }
      if (cResult[40] !== widget) {
        class E {
          constructor() {
            return closure_7.getId() === userId;
          }
        }
        const widgetTitle = obj12.getWidgetTitle(widget);
        cResult[40] = widget;
        cResult[41] = widgetTitle;
      } else {
        class E {
          constructor() {
            return closure_7.getId() === userId;
          }
        }
      }
      if (cResult[42] !== widget) {
        class E {
          constructor() {
            return closure_7.getId() === userId;
          }
        }
        const widgetTitle1 = obj13.getWidgetTitle(widget);
        cResult[42] = widget;
        cResult[43] = widgetTitle1;
      } else {
        class E {
          constructor() {
            return closure_7.getId() === userId;
          }
        }
      }
      if (cResult[44] !== tmp35) {
        class E {
          constructor() {
            return closure_7.getId() === userId;
          }
        }
        const obj2 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: tmp35 };
        const tmp38 = closure_8(tmp(tmp2[30]).Text, obj2);
        cResult[44] = tmp35;
        cResult[45] = tmp38;
      } else {
        class E {
          constructor() {
            return closure_7.getId() === userId;
          }
        }
      }
      if (cResult[46] === tmp4.header) {
        class E {
          constructor() {
            return closure_7.getId() === userId;
          }
        }
      }
      const obj3 = { style: tmp4.header, onPress: tmp31, disabled: null == tmp21, accessibilityRole: "button", accessibilityLabel: tmp33, children: null };
      const items2 = [tmp27, tmp37];
      obj3.children = items2;
      const tmp42 = closure_9(closure_4, obj3);
      cResult[46] = tmp4.header;
      cResult[47] = tmp31;
      cResult[48] = null == tmp21;
      cResult[49] = tmp33;
      cResult[50] = tmp37;
      cResult[51] = tmp27;
      cResult[52] = tmp42;
      const tmpResult10 = tmp(tmp2[16]);
    }
    let tmp28 = null;
    if (null != tmp15) {
      class E {
        constructor() {
          return closure_7.getId() === userId;
        }
      }
      const obj4 = { source: null, style: null };
      const obj5 = { uri: tmp15 };
      obj4.source = obj5;
      obj4.style = tmp4.appIcon;
      tmp28 = closure_8(tmp20(tmp2[26]), obj4);
    }
    cResult[14] = tmp15;
    cResult[15] = tmp4;
    cResult[16] = tmp28;
    const tmp25 = require("useApplicationWidgetRefresh")(widget.applicationId);
  }
  obj6 = { location: "UserProfileApplicationWidgetCard", applicationId: undefined, source: userId(token[19]).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  cResult[11] = undefined;
  cResult[12] = userId;
  cResult[13] = obj6;
  tmpResult9 = userId(token[18]);
}) : (function UserProfileApplicationWidgetCard(userId) {
  userId = userId.userId;
  ({ widget, cardStyle, rendererProps } = userId);
  dependencyMap = undefined;
  let token;
  let tmp = closure_10();
  const items = [LocaleStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores];
  const memo = token.useMemo(() => resolvedValuesFromUserApplicationIdentityProfile.createCompactNumberFormat(stateFromStores), items1);
  const obj = userId(504);
  const items2 = [AuthenticationStore];
  const stateFromStores1 = userId(504).useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj2 = userId(504);
  const getOrFetchApplication = userId(6847).useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  const obj3 = userId(6847);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = userId(6995).useGame(canonicalGameId).data;
  let id;
  const tmp2Result = userId(6995);
  if (data != null) {
    id = data.id;
  }
  const tmp10 = stateFromStores(8851);
  const tmp10Result = tmp10({ location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(8850).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" });
  dependencyMap = tmp10Result;
  let tmp13 = rendererProps;
  if (rendererProps == null) {
    tmp13 = tmp9(13197)(userId, widget.applicationId);
  }
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = tmp13);
  const tmp14 = stateFromStores(6844)(getOrFetchApplication);
  token = tmp14.token;
  ({ fetched, canStartAuthorization } = tmp14);
  const obj4 = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(8850).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp15 = stateFromStores(12363)(widget.applicationId, stateFromStores1);
  ({ pending, refresh } = stateFromStores(13203)(widget.applicationId));
  const tmp17 = surfaceConfigs[userId(undefined, 13185).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp18 = surfaceConfigs[userId(undefined, 13185).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp19 = null;
  if (null != iconURL) {
    const obj5 = { source: null, style: null };
    const obj6 = { uri: iconURL };
    obj5.source = obj6;
    obj5.style = tmp.appIcon;
    tmp19 = closure_8(tmp9(6164), obj5);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        let tmp21 = null != token;
        if (tmp21) {
          const _Array = Array;
          let someResult = Array.from(tmp2(8433).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES).some((item) => {
            const scopes = token.scopes;
            return scopes.includes(item);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(8433).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(8433).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
          }
          tmp21 = someResult;
          const arr = Array.from(tmp2(8433).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
        }
        if (fetched) {
          if (canStartAuthorization) {
            let tmp24 = null;
          }
          return tmp24;
        }
        const obj7 = { style: cardStyle, title: null, titleLeadingIcon: null, children: null };
        const tmp9Result = tmp9(6890);
        obj7.title = tmp2(13093).getWidgetTitle(widget);
        obj7.titleLeadingIcon = tmp19;
        const obj8 = { style: tmp.stillSyncing, children: null };
        const obj9 = { size: "xs", color: tmp9(587).colors.TEXT_MUTED };
        const items3 = [closure_8(tmp2(12995).HourglassIcon, obj9), ];
        const obj10 = { variant: "text-sm/medium", color: "text-muted", children: null };
        const intl = tmp2(1126).intl;
        obj10.children = intl.string(tmp2(1126).t.z5K4Uv);
        items3[1] = closure_8(tmp2(5086).Text, obj10);
        obj8.children = items3;
        obj7.children = closure_9(closure_5, obj8);
        tmp24 = closure_8(tmp9Result, obj7);
        const tmp2Result5 = tmp2(13093);
      }
    }
  }
  const tmp16 = stateFromStores(13203)(widget.applicationId);
  const result = userId(13102).bindResolveFieldValue(resolutionContext);
  const obj11 = {
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
    accessibilityLabel: null,
    children: null
  };
  const tmp2Result6 = userId(13102);
  obj11.accessibilityLabel = userId(13093).getWidgetTitle(widget);
  const items4 = [tmp19, ];
  const obj12 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: null };
  const tmp2Result7 = userId(13093);
  obj12.children = userId(13093).getWidgetTitle(widget);
  items4[1] = closure_8(userId(5086).Text, obj12);
  obj11.children = items4;
  const tmp32 = closure_9(closure_4, obj11);
  if (tmp17 != null) {
    const layout = tmp17.layout;
  }
  let tmp31Result = null;
  if (null != tmp17) {
    if (tmp2(13100).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj13 = { header: tmp32, topConfig: tmp17, resolveFieldValue: result, numberFormat: memo };
      tmp31Result = closure_8(tmp9(13101), obj13);
    } else {
      tmp31Result = null;
      if (tmp2(13100).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj14 = { header: tmp32, topConfig: tmp17, resolveFieldValue: result, numberFormat: memo };
        tmp31Result = closure_8(tmp9(13193), obj14);
      }
    }
  }
  if (tmp18 != null) {
    const layout2 = tmp18.layout;
  }
  let tmp31Result2 = null;
  if (null != tmp18) {
    if (tmp2(13100).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj15 = { bottomConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
      tmp31Result2 = closure_8(tmp9(13194), obj15);
    } else if (tmp2(13100).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj16 = { bottomConfig: tmp18, resolveFieldValue: result };
      tmp31Result2 = closure_8(tmp9(13195), obj16);
    } else {
      tmp31Result2 = null;
      if (tmp2(13100).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj17 = { bottomConfig: tmp18, resolveFieldValue: result };
        tmp31Result2 = closure_8(tmp9(13196), obj17);
      }
    }
  }
  let tmp30Result2 = null;
  if (null != tmp31Result) {
    tmp30Result2 = null;
    if (null != tmp31Result2) {
      const obj18 = { style: cardStyle, children: null };
      const items5 = [tmp31Result, , , ];
      const obj19 = { style: tmp.divider };
      items5[1] = closure_8(closure_5, obj19);
      items5[2] = tmp31Result2;
      let tmp30Result = null;
      if (true === tmp15) {
        tmp30Result = null;
        if (null == rendererProps) {
          const obj20 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: 8, disabled: null, onPress: null, style: null, children: null };
          const intl2 = tmp2(1126).intl;
          obj20.accessibilityLabel = intl2.string(tmp2(1126).t.wzzjk9);
          obj20.disabled = pending;
          obj20.onPress = refresh;
          obj20.style = tmp.refresh;
          const obj21 = { size: "xs", color: tmp9(587).colors.TEXT_MUTED };
          const items6 = [closure_8(tmp2(12633).RetryIcon, obj21), ];
          const obj22 = { variant: "text-xs/medium", color: "text-muted", children: null };
          const intl3 = tmp2(1126).intl;
          obj22.children = intl3.string(tmp2(1126).t.wzzjk9);
          items6[1] = closure_8(tmp2(5086).Text, obj22);
          obj20.children = items6;
          tmp30Result = closure_9(tmp2(6189).PressableOpacity, obj20);
        }
      }
      items5[3] = tmp30Result;
      obj18.children = items5;
      tmp30Result2 = closure_9(tmp9(6890), obj18);
      const tmp9Result2 = tmp9(6890);
    }
  }
  return tmp30Result2;
});