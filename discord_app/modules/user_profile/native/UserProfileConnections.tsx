import importAllResult from "getPlatformUserUrl";
import get_ActivityIndicator from "useIsMobileVisualRefreshExperimentEnabled";
import _getSystemLocale from "_getSystemLocale";
import initialize from "initialize";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import ME from "ME";
import { MetadataFields } from "OperatorTypes";
import jsxProd from "isLinkTrusted";
import Button from "Button";
import createCacheKey from "createCacheKey";
import Button from "Button";

let CARD_PADDING;
let CARD_ROWS_COLUMN_GAP;
let c10;
let c4;
let c5;
let c9;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function VerifiedIcon(arg0) {
  let isTwitterVerifiedAccount;
  let theme;
  ({ theme, isTwitterVerifiedAccount } = arg0);
  if (isTwitterVerifiedAccount === undefined) {
    isTwitterVerifiedAccount = false;
  }
  const tmp = callback3();
  let obj = { size: REFRESH_SMALL_16, style: tmp.verifiedIcon };
  let obj1 = require(3897) /* map */;
  let PLATFORM_TWITTER = obj1.useToken(importDefault(712).colors.MOBILE_TEXT_HEADING_PRIMARY, theme);
  if (isTwitterVerifiedAccount) {
    PLATFORM_TWITTER = tmp4(712).unsafe_rawColors.PLATFORM_TWITTER;
  }
  if (!tmp2Result.isThemeLight(theme)) {
    if (!isTwitterVerifiedAccount) {
      let WHITE = tmp4(712).unsafe_rawColors.BLACK;
    }
    obj = { style: null, children: null };
    obj[0] = tmp.verifiedIconContainer;
    obj = { source: null, color: null };
    obj[0] = tmp4(10042);
    obj[1] = PLATFORM_TWITTER;
    const merged = Object.assign(obj);
    const items = [callback(tmp2(1297).Icon, obj), ];
    obj1 = { source: null, color: null };
    obj1[0] = tmp4(10043);
    obj1[1] = WHITE;
    const merged1 = Object.assign(obj);
    items[1] = callback(tmp2(1297).Icon, obj1);
    obj[1] = items;
    return callback2(closure_5, obj);
  }
  WHITE = tmp4(712).unsafe_rawColors.WHITE;
}
let c3 = importAllResult;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ CARD_ROWS_ICON_SIZE: metroImportAll, CARD_ROWS_ICON_SIZE_VARIANT: c9, CARD_PADDING, CARD_ROWS_COLUMN_GAP } = ARBITRARY_LARGE_OFFSET);
({ AnalyticEvents: c10, PlatformTypes: unpackModuleId } = ME);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const REFRESH_SMALL_16 = require("Button").Icon.Sizes.REFRESH_SMALL_16;
const iconSize = Button.getIconSize(REFRESH_SMALL_16);
obj = { cardContainer: obj, cardTitle: { marginBottom: 0 }, connectionRow: { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP, paddingVertical: 12, minHeight: 60 }, connectionInfoContainer: { flexGrow: 1 }, connectedAccountName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, connectedAccountNameText: { flex: 1, marginRight: 4 }, verifiedIconContainer: { height: iconSize, width: iconSize }, verifiedIcon: { position: "absolute", left: 0, top: 0 }, connectionMetadata: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" }, metadataItem: null, poweredByContainer: null, applicationIcon: null };
obj = { paddingBottom: CARD_PADDING - 12 };
Button = { color: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
obj[9] = Button;
obj[10] = { flexDirection: "row", alignItems: "center", marginTop: 6 };
createCacheKey = { borderRadius: null };
createCacheKey[0] = Button.getIconSize(require("Button").Icon.Sizes.MEDIUM);
obj[11] = createCacheKey;
let closure_17 = createCacheKey.createStyles(obj);
let closure_19 = importAllResult.memo((userId) => {
  let showMetadata;
  let theme;
  userId = userId.userId;
  const account = userId.account;
  ({ theme, showMetadata } = userId);
  if (showMetadata === undefined) {
    showMetadata = true;
  }
  let trackUserProfileAction;
  let createdAtDate;
  let c4;
  let platformUserUrl;
  const tmp = callback3();
  let obj = userId(trackUserProfileAction[16]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = userId(trackUserProfileAction[12]);
  const token = obj1.useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj2 = userId(trackUserProfileAction[12]);
  let metadata = account.metadata;
  const token1 = obj2.useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_COLOR);
  if (metadata == null) {
    metadata = {};
  }
  createdAtDate = null;
  if (showMetadata) {
    let tmp2Result = tmp2(tmp3[18]);
    createdAtDate = tmp2Result.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], userId.locale);
  }
  if (!showMetadata) {
    let tmp13 = null != null;
    if (tmp13) {
      tmp13 = null.length > 0;
    }
    const value = account(tmp3[19]).get(account.type);
    c4 = value;
    tmp2Result = tmp2(tmp3[20]);
    const tmp4Result = account(tmp3[19]);
    if (tmp2Result1.isThemeDark(theme)) {
      let darkPNG;
      if (!tmp15) {
        darkPNG = value.icon.darkPNG;
      }
      let lightPNG = darkPNG;
    } else if (!tmp15) {
      lightPNG = value.icon.lightPNG;
    }
    const source = tmp2Result.makeSource(lightPNG);
    platformUserUrl = undefined;
    if (value != null) {
      const getPlatformUserUrl = value.getPlatformUserUrl;
      if (getPlatformUserUrl != null) {
        platformUserUrl = getPlatformUserUrl(account);
      }
    }
    let tmp20 = account.type === constants.TWITTER;
    if (tmp20) {
      tmp20 = "1" === metadata[MetadataFields.TWITTER_VERIFIED];
    }
    let obj13 = createdAtDate;
    let items = [account.type, platformUserUrl, trackUserProfileAction, userId];
    const callback = createdAtDate.useCallback(() => {
      if (null != platformUserUrl) {
        trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
        let obj = userId(trackUserProfileAction[21]);
        obj = { href: null, trusted: null, onConfirm: null };
        obj[0] = tmp;
        obj[1] = account.type !== outer1_11.DOMAIN;
        obj[2] = function onConfirm() {
          let obj = outer1_0(outer1_2[22]);
          obj = { platform_type: type.type, other_user_id: closure_0 };
          obj.trackWithMetadata(outer1_10.CONNECTED_ACCOUNT_VIEWED, obj);
          outer1_1(outer1_2[23]).openURL(closure_5);
        };
        obj.handleClick(obj);
      }
    }, items);
    const items1 = [account.name, trackUserProfileAction];
    const callback1 = createdAtDate.useCallback(() => {
      trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
      const result = userId(trackUserProfileAction[24]).triggerHapticFeedback(userId(trackUserProfileAction[24]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = userId(trackUserProfileAction[24]);
      userId(trackUserProfileAction[25]).copy(account.name);
      const obj2 = userId(trackUserProfileAction[25]);
      const result1 = userId(trackUserProfileAction[26]).presentCopiedToClipboard();
    }, items1);
    const items2 = [account.name, createdAtDate, ];
    let name;
    if (value != null) {
      name = value.name;
    }
    items2[2] = name;
    const memo = createdAtDate.useMemo(() => {
      const items = [];
      let str;
      if (_undefined != null) {
        str = _undefined.name;
      }
      if (str == null) {
        str = "";
      }
      items.push(str);
      items.push(account.name);
      if (null != createdAtDate) {
        const intl = userId(trackUserProfileAction[27]).intl;
        const obj = { date: null };
        obj[0] = tmp3;
        items.push(intl.formatToPlainString(userId(trackUserProfileAction[27]).t["9rfonh"], obj));
      }
      return items.join(", ");
    }, items2);
    let name1;
    if (value != null) {
      name1 = value.name;
    }
    const items3 = [name1, platformUserUrl];
    const memo1 = obj13.useMemo(() => {
      if (null != platformUserUrl) {
        const intl2 = userId(trackUserProfileAction[27]).intl;
        let stringResult = intl2.string(userId(trackUserProfileAction[27]).t.wuRE8M);
      } else {
        const intl = userId(trackUserProfileAction[27]).intl;
        let str;
        if (_undefined != null) {
          str = _undefined.name;
        }
        if (str == null) {
          str = "";
        }
        const obj = { name: null };
        obj[0] = str;
        stringResult = intl.formatToPlainString(userId(trackUserProfileAction[27]).t.OKzaN3, obj);
      }
      return stringResult;
    }, items3);
    if (tmp5) {
      obj = { style: null, children: null };
      obj[0] = tmp.connectedAccountName;
      obj = { variant: null, color: null, children: null };
      obj[0] = token;
      obj[1] = token1;
      obj[2] = account.name;
      const items4 = [callback(tmp2(tmp3[28]).Text, obj), ];
      let tmp40Result = null;
      if (account.verified) {
        obj1 = { theme: null, isTwitterVerifiedAccount: null };
        obj1[0] = theme;
        obj1[1] = tmp20;
        tmp40Result = tmp40(VerifiedIcon, obj1);
      }
      items4[1] = tmp40Result;
      obj[1] = items4;
      let tmp38Result = tmp38(tmp39, obj);
      if (null != createdAtDate) {
        tmp40Result = null;
        if (null != createdAtDate) {
          obj2 = { variant: "text-xs/medium", color: "text-subtle", children: null };
          let intl2 = tmp2(tmp3[27]).intl;
          const obj3 = { date: null };
          obj3[0] = createdAtDate;
          obj2[2] = intl2.format(tmp2(tmp3[27]).t["9rfonh"], obj3);
          tmp40Result = tmp40(tmp2(tmp3[28]).Text, obj2);
        }
        const items5 = [tmp40Result, ];
        let tmp40Result1 = null;
        if (tmp13) {
          const obj4 = { style: null, children: null };
          obj4[0] = tmp.connectionMetadata;
          obj4[1] = null;
          tmp40Result1 = tmp40(tmp39, obj4);
        }
        const obj5 = { children: null };
        items5[1] = tmp40Result1;
        obj5[0] = items5;
        tmp38Result = tmp38(closure_15, obj5);
        const tmp45 = closure_15;
      }
      const obj6 = { label: null, subLabel: null, icon: null, trailing: null, onPress: null, onLongPress: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: "button" };
      obj6[0] = tmp38Result;
      obj6[1] = tmp38Result;
      const obj7 = { size: null, source: null };
      obj7[0] = closure_9;
      obj7[1] = source;
      obj6[2] = callback(tmp2(tmp3[30]).BaseIconImage, obj7);
      let tmp40Result2;
      if (null != platformUserUrl) {
        tmp40Result2 = tmp40(tmp2(tmp3[31]).LinkExternalSmallIcon, { size: "sm" });
      }
      obj6[3] = tmp40Result2;
      let tmp50 = callback1;
      if (null != platformUserUrl) {
        tmp50 = callback;
      }
      obj6[4] = tmp50;
      obj6[5] = callback1;
      obj6[6] = memo;
      obj6[7] = memo1;
      return callback(tmp2(tmp3[29]).TableRow, obj6);
    } else {
      if (null != platformUserUrl) {
        let PressableOpacity = tmp2(tmp3[32]).PressableOpacity;
      } else {
        PressableOpacity = c4;
      }
      const obj8 = { accessibilityLabel: null, accessibilityHint: null, accessibilityRole: "button", onPress: null, onLongPress: null, style: null, children: null };
      obj8[0] = memo;
      obj8[1] = memo1;
      let tmp29;
      if (null != platformUserUrl) {
        tmp29 = callback;
      }
      obj8[3] = tmp29;
      obj8[4] = callback1;
      obj8[5] = tmp.connectionRow;
      const obj9 = { size: null, source: null };
      obj9[0] = closure_9;
      obj9[1] = source;
      const items6 = [callback(tmp2(tmp3[30]).BaseIconImage, obj9), , ];
      const obj10 = { style: null, children: null };
      obj10[0] = tmp.connectionInfoContainer;
      const obj11 = { style: null, children: null };
      obj11[0] = tmp.connectedAccountName;
      const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: null, lineClamp: 2, children: null };
      obj12[2] = tmp.connectedAccountNameText;
      obj12[4] = account.name;
      const items7 = [callback(tmp2(tmp3[28]).Text, obj12), ];
      let tmp30Result = null;
      if (account.verified) {
        obj13 = { theme: null, isTwitterVerifiedAccount: null };
        obj13[0] = theme;
        obj13[1] = tmp20;
        tmp30Result = tmp30(VerifiedIcon, obj13);
      }
      items7[1] = tmp30Result;
      obj11[1] = items7;
      const items8 = [closure_14(platformUserUrl, obj11), , ];
      tmp30Result = null;
      if (null != createdAtDate) {
        const obj14 = { variant: "text-xs/medium", color: "text-muted", children: null };
        let intl = tmp2(tmp3[27]).intl;
        const obj15 = { date: null };
        obj15[0] = createdAtDate;
        obj14[2] = intl.format(tmp2(tmp3[27]).t["9rfonh"], obj15);
        tmp30Result = tmp30(tmp2(tmp3[28]).Text, obj14);
      }
      items8[1] = tmp30Result;
      let tmp30Result1 = null;
      if (tmp13) {
        const obj16 = { style: null, children: null };
        obj16[0] = tmp.connectionMetadata;
        obj16[1] = null;
        tmp30Result1 = tmp30(tmp32, obj16);
      }
      items8[2] = tmp30Result1;
      obj10[1] = items8;
      items6[1] = closure_14(platformUserUrl, obj10);
      items6[2] = null != platformUserUrl && callback(tmp2(tmp3[31]).LinkExternalSmallIcon, { size: "sm" });
      obj8[6] = items6;
      return closure_14(PressableOpacity, obj8);
    }
    tmp2Result1 = tmp2(tmp3[13]);
  } else {
    const type = account.type;
    const metadataItem = tmp.metadataItem;
    if (constants.REDDIT === type) {
      let redditMetadataItems = tmp2(tmp3[11]).generateRedditMetadataItems(metadata, metadataItem);
      const tmp2Result2 = tmp2(tmp3[11]);
    } else if (tmp10.STEAM === type) {
      redditMetadataItems = tmp2(tmp3[11]).generateSteamMetadataItems(metadata, metadataItem);
      const tmp2Result3 = tmp2(tmp3[11]);
    } else {
      if (tmp10.BLUESKY !== type) {
        if (tmp10.TWITTER !== type) {
          if (tmp10.MASTODON !== type) {
            if (tmp10.PAYPAL === type) {
              redditMetadataItems = tmp2(tmp3[11]).generatePaypalMetadataItems(metadata, metadataItem);
              const tmp2Result4 = tmp2(tmp3[11]);
            } else if (tmp10.EBAY !== type) {
              redditMetadataItems = null;
              if (tmp10.TIKTOK === type) {
                redditMetadataItems = tmp2(tmp3[11]).generateTikTokMetadataItems(metadata, metadataItem);
                const tmp2Result5 = tmp2(tmp3[11]);
              }
            }
            redditMetadataItems = tmp2(tmp3[11]).generateEbayMetadataItems(metadata, metadataItem);
            const tmp2Result6 = tmp2(tmp3[11]);
          }
        }
      }
      redditMetadataItems = tmp2(tmp3[11]).generateTwitterMetadataItems(metadata, metadataItem);
      const tmp2Result7 = tmp2(tmp3[11]);
    }
  }
});
let closure_20 = importAllResult.memo((application) => {
  application = application.application;
  let trackUserProfileAction;
  let str;
  const tmp = callback3();
  let obj = application(str[16]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const iconSource = application.getIconSource(closure_8);
  const profile = application.identity.profile;
  str = undefined;
  if (profile != null) {
    str = profile.username;
  }
  if (str == null) {
    str = "";
  }
  let items = [str, trackUserProfileAction];
  const callback = importAllResult.useCallback(() => {
    trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
    const result = application(str[24]).triggerHapticFeedback(application(str[24]).HapticFeedbackTypes.IMPACT_LIGHT);
    const obj = application(str[24]);
    application(str[25]).copy(str);
    const obj2 = application(str[25]);
    const result1 = application(str[26]).presentCopiedToClipboard();
  }, items);
  const items1 = [application.name, str];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    items.push(application.name);
    items.push(str);
    return items.join(", ");
  }, items1);
  const items2 = [application.name];
  const memo1 = importAllResult.useMemo(() => {
    const intl = application(str[27]).intl;
    return intl.formatToPlainString(application(str[27]).t.OKzaN3, { name: application.name });
  }, items2);
  if (tmp4) {
    obj = { label: null, icon: null, onPress: null, onLongPress: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: "button" };
    obj[0] = str;
    let tmp17Result;
    if (null != iconSource) {
      obj = { size: null, source: null, style: null };
      obj[0] = closure_9;
      obj[1] = iconSource;
      obj[2] = tmp.applicationIcon;
      tmp17Result = tmp17(tmp2(tmp3[30]).BaseIconImage, obj);
    }
    obj[1] = tmp17Result;
    obj[2] = callback;
    obj[3] = callback;
    obj[4] = memo;
    obj[5] = memo1;
    tmp17Result = tmp17(tmp2(tmp3[29]).TableRow, obj);
  } else {
    const obj1 = { accessibilityLabel: null, accessibilityHint: null, accessibilityRole: "button", onLongPress: null, style: null, children: null };
    obj1[0] = memo;
    obj1[1] = memo1;
    obj1[3] = callback;
    obj1[4] = tmp.connectionRow;
    let tmp11 = null;
    if (null != iconSource) {
      let obj2 = { size: null, source: null, style: null };
      obj2[0] = closure_9;
      obj2[1] = iconSource;
      obj2[2] = tmp.applicationIcon;
      tmp11 = callback(tmp2(tmp3[30]).BaseIconImage, obj2);
    }
    const items3 = [tmp11, ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.connectionInfoContainer;
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.connectedAccountName;
    const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: null, lineClamp: 2, children: null };
    obj5[2] = tmp.connectedAccountNameText;
    obj5[4] = str;
    obj4[1] = callback(tmp2(tmp3[28]).Text, obj5);
    obj3[1] = callback(closure_5, obj4);
    items3[1] = callback(closure_5, obj3);
    obj1[5] = items3;
    tmp17Result = closure_14(closure_4, obj1);
    const tmp10 = closure_4;
    const tmp9 = closure_14;
  }
  return tmp17Result;
});
const memoResult = importAllResult.memo((applicationRoleConnection) => {
  applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
  const tmp = callback3();
  let obj = applicationRoleConnection(10037);
  const roleConnectionMetadataItems = obj.generateRoleConnectionMetadataItems(applicationRoleConnection);
  let obj1 = importDefault(1416);
  obj = { id: applicationRoleConnection.application.id, icon: applicationRoleConnection.application.icon };
  const applicationIconSource = obj1.getApplicationIconSource(obj);
  if (tmp3) {
    let tmp15 = null;
    if (null != applicationRoleConnection.platform_name) {
      tmp15 = null;
      if (null != applicationRoleConnection.platform_username) {
        obj = { variant: "text-xs/medium", color: "text-subtle", children: null };
        obj[2] = applicationRoleConnection.platform_username;
        tmp15 = callback(tmp4(4189).Text, obj);
      }
    }
    const items = [tmp15, , ];
    let tmp17 = null;
    if (null != roleConnectionMetadataItems) {
      tmp17 = null;
      if (roleConnectionMetadataItems.length > 0) {
        obj1 = { style: null, children: null };
        obj1[0] = tmp.connectionMetadata;
        obj1[1] = roleConnectionMetadataItems;
        tmp17 = callback(closure_5, obj1);
      }
    }
    const obj2 = { children: null };
    items[1] = tmp17;
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.poweredByContainer;
    const obj4 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = tmp4(1236).intl;
    const obj5 = { applicationHook: null };
    obj5[0] = function applicationHook() {
      return applicationRoleConnection.application.name;
    };
    obj4[2] = intl2.format(tmp4(1236).t.zIT9YA, obj5);
    obj3[1] = callback(tmp4(4189).Text, obj4);
    items[2] = callback(closure_5, obj3);
    obj2[0] = items;
    let name = applicationRoleConnection.platform_name;
    if (name == null) {
      name = applicationRoleConnection.platform_username;
    }
    if (name == null) {
      name = applicationRoleConnection.application.name;
    }
    const obj6 = { label: null, subLabel: null, icon: null };
    obj6[0] = name;
    obj6[1] = tmp6(closure_15, obj2);
    const obj7 = { size: null, source: null, disableColor: true };
    obj7[0] = tmp4(1297).Icon.Sizes.MEDIUM;
    obj7[1] = applicationIconSource;
    obj6[2] = callback(tmp4(1297).Icon, obj7);
    return callback(tmp4(5224).TableRow, obj6);
  } else {
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.connectionRow;
    const obj9 = { size: null, source: null, disableColor: true };
    obj9[0] = tmp4(1297).Icon.Sizes.MEDIUM;
    obj9[1] = applicationIconSource;
    const items1 = [callback(tmp4(1297).Icon, obj9), ];
    const obj10 = { style: null, children: null };
    obj10[0] = tmp.connectionInfoContainer;
    let tmp8Result = null;
    if (null != applicationRoleConnection.platform_name) {
      const obj11 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      obj11[2] = applicationRoleConnection.platform_name;
      tmp8Result = tmp8(tmp4(4189).Text, obj11);
    }
    const items2 = [tmp8Result, , , ];
    tmp8Result = null;
    if (null != applicationRoleConnection.platform_username) {
      const obj12 = { variant: "text-md/normal", color: "text-default", children: null };
      obj12[2] = applicationRoleConnection.platform_username;
      tmp8Result = tmp8(tmp4(4189).Text, obj12);
    }
    items2[1] = tmp8Result;
    let tmp8Result1 = null;
    if (null != roleConnectionMetadataItems) {
      tmp8Result1 = null;
      if (roleConnectionMetadataItems.length > 0) {
        const obj13 = { style: null, children: null };
        obj13[0] = tmp.connectionMetadata;
        obj13[1] = roleConnectionMetadataItems;
        tmp8Result1 = tmp8(tmp7, obj13);
      }
    }
    items2[2] = tmp8Result1;
    const obj14 = { style: null, children: null };
    obj14[0] = tmp.poweredByContainer;
    const obj15 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = tmp4(1236).intl;
    const obj16 = { applicationHook: null };
    obj16[0] = function applicationHook() {
      return applicationRoleConnection.application.name;
    };
    obj15[2] = intl.format(tmp4(1236).t.zIT9YA, obj16);
    obj14[1] = callback(tmp4(4189).Text, obj15);
    items2[3] = callback(closure_5, obj14);
    obj10[1] = items2;
    items1[1] = tmp6(closure_5, obj10);
    obj8[1] = items1;
    return tmp6(closure_5, obj8);
  }
  tmp3 = importDefault(1348)("UserProfileConnections");
});
let result = require("_getSystemLocale").fileFinishedImporting("modules/user_profile/native/UserProfileConnections.tsx");

export const ApplicationRoleConnection = memoResult;
export const UserProfileAccountConnectionsCard = function UserProfileAccountConnectionsCard(userId) {
  let appIdentities;
  let connections;
  userId = userId.userId;
  let theme;
  let dependencyMap;
  const tmp = callback3();
  const tmp4 = theme(1348)("UserProfileConnections");
  let obj = userId(3905);
  theme = obj.useThemeContext().theme;
  let obj1 = userId(589);
  const items = [_getSystemLocale];
  dependencyMap = obj1.useStateFromStores(items, () => locale.locale);
  const items1 = [initialize];
  const stateFromStores = userId(589).useStateFromStores(items1, () => obj.hidePersonalInformation);
  const obj3 = userId(589);
  const tmp2 = theme;
  ({ connections, appIdentities } = theme(12200)(userId));
  if (!stateFromStores) {
    const items2 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(connections.map((account) => outer1_13(outer1_19, { account, theme, locale: closure_2, userId }, account.id)), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(appIdentities.map((application) => {
      const identity = application.identity;
      return callback(closure_20, { identity, application: application.application }, "" + identity.application_id + "-" + identity.provider_issued_user_id);
    }), arraySpreadResult);
    obj = { style: null, title: null, titleStyle: null, children: null };
    const items3 = [tmp.cardContainer, userId.style];
    obj[0] = items3;
    let stringResult;
    if (!tmp4) {
      const intl = tmp5(1236).intl;
      stringResult = intl.string(tmp5(1236).t["3fe7U5"]);
    }
    obj[1] = stringResult;
    obj[2] = tmp.cardTitle;
    if (tmp4) {
      obj = { hasIcons: true, title: null, children: null };
      const intl2 = tmp5(1236).intl;
      obj[1] = intl2.string(tmp5(1236).t["3fe7U5"]);
      obj[2] = items2;
      let tmp12Result = tmp12(tmp5(5558).TableRowGroup, obj);
    } else {
      obj1 = { children: null };
      obj1[0] = items2;
      tmp12Result = tmp12(tmp5(5566).UserProfileCardRows, obj1);
    }
    obj[3] = tmp12Result;
    return closure_13(tmp2(5566), obj);
  }
  return null;
};
export const UserProfileApplicationRoleConnectionsCard = function UserProfileApplicationRoleConnectionsCard(arg0) {
  let style;
  let userId;
  ({ userId, style } = arg0);
  const tmp = callback3();
  const tmp4 = importDefault(1348)("UserProfileConnections");
  const arr = importDefault(12203)(userId);
  let obj = require(589) /* initialize */;
  const items = [initialize];
  if (!obj.useStateFromStores(items, () => obj.hidePersonalInformation)) {
    if (0 !== arr.length) {
      const mapped = arr.map((application) => callback(closure_21, { applicationRoleConnection: application }, application.application.id));
      obj = { style: null, title: null, titleStyle: null, children: null };
      const items1 = [tmp.cardContainer, style];
      obj[0] = items1;
      let stringResult;
      if (!tmp4) {
        const intl = tmp5(1236).intl;
        stringResult = intl.string(tmp5(1236).t.PHjkRE);
      }
      obj[1] = stringResult;
      obj[2] = tmp.cardTitle;
      if (tmp4) {
        obj = { hasIcons: true, title: null, children: null };
        const intl2 = tmp5(1236).intl;
        obj[1] = intl2.string(tmp5(1236).t.PHjkRE);
        obj[2] = mapped;
        let tmp9Result = tmp9(tmp5(5558).TableRowGroup, obj);
      } else {
        const obj1 = { children: null };
        obj1[0] = mapped;
        tmp9Result = tmp9(tmp5(5566).UserProfileCardRows, obj1);
      }
      obj[3] = tmp9Result;
      return closure_13(importDefault(5566), obj);
    }
  }
  return null;
};