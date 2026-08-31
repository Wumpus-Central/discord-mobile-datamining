// discord_app/modules/user_profile/native/UserProfileApplicationWidgetCard.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../user_settings/LocaleStore.tsx";
import closure_8 from "../../../stores/AuthenticationStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
  const memo = token.useMemo(() => userId(12636).createCompactNumberFormat(stateFromStores), items1);
  obj1 = userId(589);
  const items2 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => closure_1_8.getId() === userId);
  let obj2 = userId(5927);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  let tmp2Result = tmp2(6122);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = tmp2Result.useGame(canonicalGameId).data;
  let id;
  if (data != null) {
    id = data.id;
  }
  obj = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: tmp2(8775).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp10Result = stateFromStores(8764)(obj);
  dependencyMap = tmp10Result;
  const tmp10 = stateFromStores(8764);
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = stateFromStores(12731)(userId, widget.applicationId));
  const tmp14 = stateFromStores(5924)(getOrFetchApplication);
  token = tmp14.token;
  ({ fetched, canStartAuthorization } = tmp14);
  const tmp15 = surfaceConfigs[userId(undefined, 12719).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp16 = surfaceConfigs[userId(undefined, 12719).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp17 = null;
  if (null != iconURL) {
    obj = { source: null, style: null };
    obj1 = { uri: null };
    obj1[0] = iconURL;
    obj[0] = obj1;
    obj[1] = tmp.appIcon;
    tmp17 = callback(closure_4, obj);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        let tmp20 = null != token;
        if (tmp20) {
          const _Array = Array;
          let someResult = Array.from(tmp2(8578).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES).some((arg0) => {
            const scopes = token.scopes;
            return scopes.includes(arg0);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(8578).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(8578).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
          }
          tmp20 = someResult;
          const arr = Array.from(tmp2(8578).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
        }
        if (fetched) {
          if (canStartAuthorization) {
            let tmp23 = null;
          }
          return tmp23;
        }
        obj2 = { style: null, title: null, titleLeadingIcon: null, children: null };
        obj2[0] = cardStyle;
        let tmp9Result = tmp9(5968);
        tmp2Result = tmp2(7337);
        obj2[1] = tmp2Result.getWidgetTitle(widget);
        obj2[2] = tmp17;
        const obj3 = { style: null, children: null };
        obj3[0] = tmp.stillSyncing;
        const obj4 = { size: "xs", color: null };
        obj4[1] = tmp9(712).colors.TEXT_MUTED;
        const items3 = [callback(tmp2(9357).HourglassIcon, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-muted", children: null };
        const intl = tmp2(1236).intl;
        obj5[2] = intl.string(tmp2(1236).t.z5K4Uv);
        items3[1] = callback(tmp2(4444).Text, obj5);
        obj3[1] = items3;
        obj2[3] = callback2(closure_6, obj3);
        tmp23 = callback(tmp9Result, obj2);
      }
    }
  }
  const tmp13 = stateFromStores(12731)(userId, widget.applicationId);
  const result = userId(12636).bindResolveFieldValue(resolutionContext);
  const obj6 = {
    style: tmp.header,
    onPress() {
      let tmp;
      if (dependencyMap != null) {
        tmp = dependencyMap();
      }
      return tmp;
    },
    disabled: null == tmp10Result,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const tmp29 = callback2;
  const tmp2Result1 = userId(12636);
  obj6[4] = userId(7337).getWidgetTitle(widget);
  const items4 = [tmp17, ];
  const obj7 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: null };
  const tmp2Result2 = userId(7337);
  obj7[3] = userId(7337).getWidgetTitle(widget);
  items4[1] = callback(userId(4444).Text, obj7);
  obj6[5] = items4;
  const tmp31 = callback2(closure_5, obj6);
  if (tmp15 != null) {
    const layout = tmp15.layout;
  }
  let tmp30Result = null;
  if (null != tmp15) {
    if (tmp2(12634).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj8 = { header: null, topConfig: null, resolveFieldValue: null, numberFormat: null };
      obj8[0] = tmp31;
      obj8[1] = tmp15;
      obj8[2] = result;
      obj8[3] = memo;
      tmp30Result = tmp30(tmp9(12635), obj8);
    } else {
      tmp30Result = null;
      if (tmp2(12634).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj9 = { header: null, topConfig: null, resolveFieldValue: null, numberFormat: null };
        obj9[0] = tmp31;
        obj9[1] = tmp15;
        obj9[2] = result;
        obj9[3] = memo;
        tmp30Result = tmp30(tmp9(12727), obj9);
      }
    }
  }
  if (tmp16 != null) {
    const layout2 = tmp16.layout;
  }
  tmp30Result = null;
  if (null != tmp16) {
    if (tmp2(12634).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj10 = { bottomConfig: null, resolveFieldValue: null, numberFormat: null };
      obj10[0] = tmp16;
      obj10[1] = result;
      obj10[2] = memo;
      tmp30Result = tmp30(tmp9(12728), obj10);
    } else if (tmp2(12634).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj11 = { bottomConfig: null, resolveFieldValue: null };
      obj11[0] = tmp16;
      obj11[1] = result;
      tmp30Result = tmp30(tmp9(12729), obj11);
    } else {
      tmp30Result = null;
      if (tmp2(12634).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj12 = { bottomConfig: null, resolveFieldValue: null };
        obj12[0] = tmp16;
        obj12[1] = result;
        tmp30Result = tmp30(tmp9(12730), obj12);
      }
    }
  }
  let tmp29Result = null;
  if (null != tmp30Result) {
    tmp29Result = null;
    if (null != tmp30Result) {
      const obj13 = { style: null, children: null };
      obj13[0] = cardStyle;
      const items5 = [tmp30Result, , ];
      const obj14 = { style: null };
      obj14[0] = tmp.divider;
      tmp9Result = tmp9(5968);
      items5[1] = tmp30(closure_6, obj14);
      items5[2] = tmp30Result;
      obj13[1] = items5;
      tmp29Result = tmp29(tmp9Result, obj13);
    }
  }
  return tmp29Result;
};