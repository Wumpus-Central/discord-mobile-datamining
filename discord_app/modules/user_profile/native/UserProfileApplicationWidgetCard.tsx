import GameProfileEmbedAction from "GameProfileEmbedAction";
import get_ActivityIndicator from "importDefaultResult1";
import _getSystemLocale from "_getSystemLocale";
import fetchFingerprint from "fetchFingerprint";
import jsxProd from "ApplicationWidgetConfigSurface";
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
  let cardStyle;
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
  let tmp = createCacheKey();
  let obj = userId(589);
  const items = [_getSystemLocale];
  stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => userId(_undefined[14]).createCompactNumberFormat(stateFromStores), items1);
  let obj1 = userId(589);
  const items2 = [fetchFingerprint];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_8.getId() === userId);
  const tmp8 = stateFromStores(1348)("UserProfileCard");
  let obj2 = userId(5616);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  let tmp2Result = tmp2(7002);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = tmp2Result.useGame(canonicalGameId).data;
  let id;
  let tmp7Result = tmp7(9189);
  if (data != null) {
    id = data.id;
  }
  obj = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: tmp2(9200).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp7ResultResult = tmp7Result(obj);
  dependencyMap = tmp7ResultResult;
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = stateFromStores(12358)(userId, widget.applicationId));
  const tmp15 = surfaceConfigs[userId(undefined, 12348).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp16 = surfaceConfigs[userId(undefined, 12348).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
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
        obj2 = { style: null, title: null, titleLeadingIcon: null, children: null };
        obj2[0] = cardStyle;
        tmp7Result = tmp7(5657);
        tmp2Result = tmp2(6993);
        obj2[1] = tmp2Result.getWidgetTitle(widget);
        obj2[2] = tmp17;
        const obj3 = { style: null, children: null };
        obj3[0] = tmp.stillSyncing;
        const obj4 = { size: "xs", color: null };
        obj4[1] = tmp7(712).colors.TEXT_MUTED;
        const items3 = [callback(tmp2(12192).HourglassIcon, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-muted", children: null };
        const intl = tmp2(1236).intl;
        obj5[2] = intl.string(tmp2(1236).t.z5K4Uv);
        items3[1] = callback(tmp2(4281).Text, obj5);
        obj3[1] = items3;
        obj2[3] = callback2(closure_6, obj3);
        return callback(tmp7Result, obj2);
      }
    }
  }
  const tmp14 = stateFromStores(12358)(userId, widget.applicationId);
  const result = userId(12265).bindResolveFieldValue(resolutionContext);
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
  const tmp26 = closure_5;
  const tmp2Result1 = userId(12265);
  obj6[4] = userId(6993).getWidgetTitle(widget);
  const items4 = [tmp17, ];
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
  const tmp2Result2 = userId(6993);
  obj7[3] = userId(6993).getWidgetTitle(widget);
  items4[1] = callback(userId(4281).Text, obj7);
  obj6[5] = items4;
  let tmp25Result = tmp25(tmp26, obj6);
  if (tmp15 != null) {
    let layout = tmp15.layout;
  }
  let tmp27Result = null;
  if (null != tmp15) {
    if (tmp2(12263).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj8 = { header: null, topConfig: null, resolveFieldValue: null, numberFormat: null };
      obj8[0] = tmp25Result;
      obj8[1] = tmp15;
      obj8[2] = result;
      obj8[3] = memo;
      tmp27Result = tmp27(tmp7(12264), obj8);
    } else {
      tmp27Result = null;
      if (tmp2(12263).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj9 = { header: null, topConfig: null, resolveFieldValue: null, numberFormat: null };
        obj9[0] = tmp25Result;
        obj9[1] = tmp15;
        obj9[2] = result;
        obj9[3] = memo;
        tmp27Result = tmp27(tmp7(12354), obj9);
      }
    }
  }
  if (tmp16 != null) {
    const layout2 = tmp16.layout;
  }
  tmp27Result = null;
  if (null != tmp16) {
    if (tmp2(12263).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj10 = { bottomConfig: null, resolveFieldValue: null, numberFormat: null };
      obj10[0] = tmp16;
      obj10[1] = result;
      obj10[2] = memo;
      tmp27Result = tmp27(tmp7(12355), obj10);
    } else if (tmp2(12263).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj11 = { bottomConfig: null, resolveFieldValue: null };
      obj11[0] = tmp16;
      obj11[1] = result;
      tmp27Result = tmp27(tmp7(12356), obj11);
    } else {
      tmp27Result = null;
      if (tmp2(12263).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj12 = { bottomConfig: null, resolveFieldValue: null };
        obj12[0] = tmp16;
        obj12[1] = result;
        tmp27Result = tmp27(tmp7(12357), obj12);
      }
    }
  }
  tmp25Result = null;
  if (null != tmp27Result) {
    tmp25Result = null;
    if (null != tmp27Result) {
      const items5 = [cardStyle, ];
      if (isFirstWidget) {
        layout = undefined;
        if (tmp15 != null) {
          layout = tmp15.layout;
        }
        isFirstWidget = layout === tmp2(12263).ApplicationWidgetLayoutName.WIDGET_TOP_HERO;
      }
      if (isFirstWidget) {
        const obj13 = { marginTop: null };
        obj13[0] = tmp2(12264).HERO_IMAGE_UNCLIPPED_TOP_BLEED;
        isFirstWidget = obj13;
      }
      const obj14 = { style: null, children: null };
      items5[1] = isFirstWidget;
      obj14[0] = items5;
      const items6 = [tmp27Result, , ];
      const obj15 = { style: null };
      obj15[0] = tmp.divider;
      items6[1] = tmp27(closure_6, obj15);
      items6[2] = tmp27Result;
      obj14[1] = items6;
      tmp25Result = tmp25(tmp7(5657), obj14);
      const tmp7Result1 = tmp7(5657);
    }
  }
  return tmp25Result;
};