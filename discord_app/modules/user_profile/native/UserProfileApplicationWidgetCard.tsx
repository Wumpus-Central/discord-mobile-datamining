// discord_app/modules/user_profile/native/UserProfileApplicationWidgetCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { appIcon: null, header: null, refresh: null, divider: null, stillSyncing: null };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.appIcon = size;
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.refresh = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-end",
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_12,
};
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-end",
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_12,
};
obj2.divider = {
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: nativeDefault.space.PX_24,
};
let obj5 = {
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: nativeDefault.space.PX_24,
};
obj2.stillSyncing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default function UserProfileApplicationWidgetCard(userId) {
  userId = userId.userId;
  ({ widget, cardStyle, rendererProps } = userId);
  dependencyMap = undefined;
  let token;
  let tmp = closure_10();
  const items = [LocaleStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores];
  const memo = token.useMemo(
    () => resolvedValuesFromUserApplicationIdentityProfile.createCompactNumberFormat(stateFromStores),
    items1,
  );
  const obj = userId(504);
  const items2 = [AuthenticationStore];
  const stateFromStores1 = userId(504).useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj2 = userId(504);
  const getOrFetchApplication = userId(7324).useGetOrFetchApplication(widget.applicationId);
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
  const obj3 = userId(7324);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = userId(7474).useGame(canonicalGameId).data;
  let id;
  const tmp2Result = userId(7474);
  if (data != null) {
    id = data.id;
  }
  const tmp10 = stateFromStores(9296);
  const tmp10Result = tmp10({
    location: "UserProfileApplicationWidgetCard",
    applicationId: id,
    source: userId(9320).GameProfileSources.UserProfileApplicationWidget,
    sourceUserId: userId,
    trackEntryPointImpression: true,
    stackingBehavior: "stack",
  });
  dependencyMap = tmp10Result;
  let tmp13 = rendererProps;
  if (rendererProps == null) {
    tmp13 = tmp9(12173)(userId, widget.applicationId);
  }
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = tmp13);
  const tmp14 = stateFromStores(7321)(getOrFetchApplication);
  token = tmp14.token;
  ({ fetched, canStartAuthorization } = tmp14);
  const obj4 = {
    location: "UserProfileApplicationWidgetCard",
    applicationId: id,
    source: userId(9320).GameProfileSources.UserProfileApplicationWidget,
    sourceUserId: userId,
    trackEntryPointImpression: true,
    stackingBehavior: "stack",
  };
  const tmp15 = stateFromStores(12176)(widget.applicationId, stateFromStores1);
  ({ pending, refresh } = stateFromStores(12177)(widget.applicationId));
  const tmp17 = surfaceConfigs[userId(undefined, 12045).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp18 = surfaceConfigs[userId(undefined, 12045).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp19 = null;
  if (null != iconURL) {
    const obj5 = { source: null, style: null };
    const obj6 = { uri: iconURL };
    obj5.source = obj6;
    obj5.style = tmp.appIcon;
    tmp19 = closure_8(tmp9(5712), obj5);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        let tmp21 = null != token;
        if (tmp21) {
          const _Array = Array;
          let someResult = Array.from(tmp2(8901).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES).some((item) => {
            const scopes = token.scopes;
            return scopes.includes(item);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(8901).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(8901).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
          }
          tmp21 = someResult;
          const arr = Array.from(tmp2(8901).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
        }
        if (fetched) {
          if (canStartAuthorization) {
            let tmp24 = null;
          }
          return tmp24;
        }
        const obj7 = { style: cardStyle, title: str, titleLeadingIcon: tmp19, children: null };
        const obj8 = { style: tmp.stillSyncing, children: null };
        const obj9 = { size: "xs", color: tmp9(575).colors.TEXT_MUTED };
        const items3 = [closure_8(tmp2(12181).HourglassIcon, obj9)];
        const obj10 = { variant: "text-sm/medium", color: "text-muted", children: null };
        const intl = tmp2(1114).intl;
        obj10.children = intl.string(tmp2(1114).t.z5K4Uv);
        items3[1] = closure_8(tmp2(5619).Text, obj10);
        obj8.children = items3;
        obj7.children = closure_9(closure_5, obj8);
        tmp24 = closure_8(tmp9(7370), obj7);
        const tmp9Result = tmp9(7370);
      }
    }
  }
  const tmp16 = stateFromStores(12177)(widget.applicationId);
  const result = userId(12079).bindResolveFieldValue(resolutionContext);
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
    accessibilityLabel: str,
    children: null,
  };
  const items4 = [
    tmp19,
    closure_8(userId(5619).Text, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: str }),
  ];
  obj11.children = items4;
  const tmp32 = closure_9(closure_4, obj11);
  if (tmp17 != null) {
    const layout = tmp17.layout;
  }
  let tmp31Result = null;
  if (null != tmp17) {
    if (tmp2(12077).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj12 = { header: tmp32, topConfig: tmp17, resolveFieldValue: result, numberFormat: memo };
      tmp31Result = closure_8(tmp9(12078), obj12);
    } else {
      tmp31Result = null;
      if (tmp2(12077).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj13 = { header: tmp32, topConfig: tmp17, resolveFieldValue: result, numberFormat: memo };
        tmp31Result = closure_8(tmp9(12169), obj13);
      }
    }
  }
  if (tmp18 != null) {
    const layout2 = tmp18.layout;
  }
  let tmp31Result2 = null;
  if (null != tmp18) {
    if (tmp2(12077).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj14 = { bottomConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
      tmp31Result2 = closure_8(tmp9(12170), obj14);
    } else if (tmp2(12077).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj15 = { bottomConfig: tmp18, resolveFieldValue: result };
      tmp31Result2 = closure_8(tmp9(12171), obj15);
    } else {
      tmp31Result2 = null;
      if (tmp2(12077).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj16 = { bottomConfig: tmp18, resolveFieldValue: result };
        tmp31Result2 = closure_8(tmp9(12172), obj16);
      }
    }
  }
  let tmp30Result2 = null;
  if (null != tmp31Result) {
    tmp30Result2 = null;
    if (null != tmp31Result2) {
      const obj17 = { style: cardStyle, children: null };
      const items5 = [tmp31Result, , ,];
      const obj18 = { style: tmp.divider };
      items5[1] = closure_8(closure_5, obj18);
      items5[2] = tmp31Result2;
      let tmp30Result = null;
      if (true === tmp15) {
        tmp30Result = null;
        if (null == rendererProps) {
          const obj19 = {
            accessibilityRole: "button",
            accessibilityLabel: null,
            hitSlop: 8,
            disabled: null,
            onPress: null,
            style: null,
            children: null,
          };
          const intl2 = tmp2(1114).intl;
          obj19.accessibilityLabel = intl2.string(tmp2(1114).t.wzzjk9);
          obj19.disabled = pending;
          obj19.onPress = refresh;
          obj19.style = tmp.refresh;
          const obj20 = { size: "xs", color: tmp9(575).colors.TEXT_MUTED };
          const items6 = [closure_8(tmp2(11064).RetryIcon, obj20)];
          const obj21 = { variant: "text-xs/medium", color: "text-muted", children: null };
          const intl3 = tmp2(1114).intl;
          obj21.children = intl3.string(tmp2(1114).t.wzzjk9);
          items6[1] = closure_8(tmp2(5619).Text, obj21);
          obj19.children = items6;
          tmp30Result = closure_9(tmp2(6974).PressableOpacity, obj19);
        }
      }
      items5[3] = tmp30Result;
      obj17.children = items5;
      tmp30Result2 = closure_9(tmp9(7370), obj17);
      const tmp9Result2 = tmp9(7370);
    }
  }
  return tmp30Result2;
}
