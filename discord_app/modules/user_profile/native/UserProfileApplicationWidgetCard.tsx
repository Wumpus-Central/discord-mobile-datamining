// discord_app/modules/user_profile/native/UserProfileApplicationWidgetCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { appIcon: null, header: null, divider: null, stillSyncing: null };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles.appIcon = size;
createStyles = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.header = createStyles;
createStyles.divider = {
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: nativeDefault.space.PX_24,
};
let obj1 = {
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: nativeDefault.space.PX_24,
};
createStyles.stillSyncing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default function UserProfileApplicationWidgetCard(userId) {
  userId = userId.userId;
  ({ widget, cardStyle } = userId);
  dependencyMap = undefined;
  let token;
  let tmp = closure_11();
  let obj = userId(504);
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores];
  const memo = token.useMemo(
    () => resolvedValuesFromUserApplicationIdentityProfile.createCompactNumberFormat(stateFromStores),
    items1,
  );
  let obj1 = userId(504);
  const items2 = [AuthenticationStore];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  let obj2 = userId(7168);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  let tmp2Result = tmp2(7309);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = tmp2Result.useGame(canonicalGameId).data;
  let id;
  if (data != null) {
    id = data.id;
  }
  obj = {
    location: "UserProfileApplicationWidgetCard",
    applicationId: id,
    source: tmp2(8686).GameProfileSources.UserProfileApplicationWidget,
    sourceUserId: userId,
    trackEntryPointImpression: true,
    stackingBehavior: "stack",
  };
  const tmp10Result = stateFromStores(8675)(obj);
  dependencyMap = tmp10Result;
  const tmp10 = stateFromStores(8675);
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = stateFromStores(9021)(userId, widget.applicationId));
  const tmp14 = stateFromStores(7165)(getOrFetchApplication);
  token = tmp14.token;
  ({ fetched, canStartAuthorization } = tmp14);
  const tmp15 = surfaceConfigs[userId(undefined, 9009).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp16 = surfaceConfigs[userId(undefined, 9009).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp17 = null;
  if (null != iconURL) {
    obj = { source: null, style: null };
    obj1 = { uri: iconURL };
    obj.source = obj1;
    obj.style = tmp.appIcon;
    tmp17 = closure_9(closure_4, obj);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        let tmp20 = null != token;
        if (tmp20) {
          const _Array = Array;
          let someResult = Array.from(tmp2(8339).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES).some((item) => {
            const scopes = token.scopes;
            return scopes.includes(item);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(8339).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(8339).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
          }
          tmp20 = someResult;
          const arr = Array.from(tmp2(8339).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
        }
        if (fetched) {
          if (canStartAuthorization) {
            let tmp23 = null;
          }
          return tmp23;
        }
        obj2 = { style: cardStyle, title: null, titleLeadingIcon: null, children: null };
        let tmp9Result = tmp9(7207);
        tmp2Result = tmp2(7624);
        obj2.title = tmp2Result.getWidgetTitle(widget);
        obj2.titleLeadingIcon = tmp17;
        const obj3 = { style: tmp.stillSyncing, children: null };
        const obj4 = { size: "xs", color: tmp9(576).colors.TEXT_MUTED };
        const items3 = [closure_9(tmp2(9030).HourglassIcon, obj4)];
        const obj5 = { variant: "text-sm/medium", color: "text-muted", children: null };
        const intl = tmp2(1114).intl;
        obj5.children = intl.string(tmp2(1114).t.z5K4Uv);
        items3[1] = closure_9(tmp2(4556).Text, obj5);
        obj3.children = items3;
        obj2.children = closure_10(closure_6, obj3);
        tmp23 = closure_9(tmp9Result, obj2);
      }
    }
  }
  const tmp13 = stateFromStores(9021)(userId, widget.applicationId);
  const result = userId(8926).bindResolveFieldValue(resolutionContext);
  const obj6 = {
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
    children: null,
  };
  const tmp2Result1 = userId(8926);
  obj6.accessibilityLabel = userId(7624).getWidgetTitle(widget);
  const items4 = [tmp17];
  const obj7 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: null };
  const tmp2Result2 = userId(7624);
  obj7.children = userId(7624).getWidgetTitle(widget);
  items4[1] = closure_9(userId(4556).Text, obj7);
  obj6.children = items4;
  const tmp31 = closure_10(closure_5, obj6);
  if (tmp15 != null) {
    const layout = tmp15.layout;
  }
  let tmp30Result = null;
  if (null != tmp15) {
    if (tmp2(8924).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj8 = { header: tmp31, topConfig: tmp15, resolveFieldValue: result, numberFormat: memo };
      tmp30Result = closure_9(tmp9(8925), obj8);
    } else {
      tmp30Result = null;
      if (tmp2(8924).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj9 = { header: tmp31, topConfig: tmp15, resolveFieldValue: result, numberFormat: memo };
        tmp30Result = closure_9(tmp9(9017), obj9);
      }
    }
  }
  if (tmp16 != null) {
    const layout2 = tmp16.layout;
  }
  tmp30Result = null;
  if (null != tmp16) {
    if (tmp2(8924).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj10 = { bottomConfig: tmp16, resolveFieldValue: result, numberFormat: memo };
      tmp30Result = closure_9(tmp9(9018), obj10);
    } else if (tmp2(8924).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj11 = { bottomConfig: tmp16, resolveFieldValue: result };
      tmp30Result = closure_9(tmp9(9019), obj11);
    } else {
      tmp30Result = null;
      if (tmp2(8924).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj12 = { bottomConfig: tmp16, resolveFieldValue: result };
        tmp30Result = closure_9(tmp9(9020), obj12);
      }
    }
  }
  let tmp29Result = null;
  if (null != tmp30Result) {
    tmp29Result = null;
    if (null != tmp30Result) {
      const obj13 = { style: cardStyle, children: null };
      const items5 = [tmp30Result, ,];
      const obj14 = { style: tmp.divider };
      tmp9Result = tmp9(7207);
      items5[1] = closure_9(closure_6, obj14);
      items5[2] = tmp30Result;
      obj13.children = items5;
      tmp29Result = closure_10(tmp9Result, obj13);
    }
  }
  return tmp29Result;
}
