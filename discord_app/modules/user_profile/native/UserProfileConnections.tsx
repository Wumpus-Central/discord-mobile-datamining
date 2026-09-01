// discord_app/modules/user_profile/native/UserProfileConnections.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import UserProfileCardDefault from "UserProfileCard.tsx";
import useUserProfileApplicationRoleConnectionsDefault from "../hooks/useUserProfileApplicationRoleConnections.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../user_settings/LocaleStore.tsx";
import closure_6 from "../../../stores/StreamerModeStore.tsx";
import ARBITRARY_LARGE_OFFSET from "Constants.tsx";
import ME from "../../../Constants.tsx";
import { MetadataFields } from "../../connections/Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import Button from "../../../design/void/native.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function VerifiedIcon(arg0) {
  ({ theme, isTwitterVerifiedAccount } = arg0);
  if (isTwitterVerifiedAccount === undefined) {
    isTwitterVerifiedAccount = false;
  }
  const tmp = callback3();
  let obj = { size: REFRESH_SMALL_16, style: tmp.verifiedIcon };
  obj1 = map;
  let PLATFORM_TWITTER = obj1.useToken(ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, theme);
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
    obj[0] = tmp4(11179);
    obj[1] = PLATFORM_TWITTER;
    const merged = Object.assign(obj);
    const items = [callback(tmp2(1297).Icon, obj), ];
    obj1 = { source: null, color: null };
    obj1[0] = tmp4(11180);
    obj1[1] = WHITE;
    const merged1 = Object.assign(obj);
    items[1] = callback(tmp2(1297).Icon, obj1);
    obj[1] = items;
    return callback2(View, obj);
  }
  WHITE = tmp4(712).unsafe_rawColors.WHITE;
}
let c3 = importAllResult;
({ CARD_ROWS_ICON_SIZE: error, CARD_ROWS_ICON_SIZE_VARIANT: closure_8, CARD_PADDING } = ARBITRARY_LARGE_OFFSET);
({ AnalyticEvents: c9, PlatformTypes: c10 } = ME);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const REFRESH_SMALL_16 = require("Button").Icon.Sizes.REFRESH_SMALL_16;
const iconSize = Button.getIconSize(REFRESH_SMALL_16);
obj = { cardContainer: obj, refreshCardTitle: null, connectedAccountName: null, connectedAccountNameText: null, verifiedIconContainer: null, verifiedIcon: null, connectionMetadata: null, metadataItem: null, poweredByContainer: null, applicationIcon: null };
obj = { paddingBottom: CARD_PADDING - 12 };
Button = { marginBottom: ThemesDefault.space.PX_8 };
obj[1] = Button;
obj[2] = { flexDirection: "row", alignItems: "center", columnGap: 4 };
obj[3] = { flexShrink: 1 };
obj[4] = { height: iconSize, width: iconSize };
obj[5] = { position: "absolute", left: 0, top: 0 };
obj[6] = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" };
createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj[7] = createCacheKey;
obj[8] = { flexDirection: "row", alignItems: "center", marginTop: 6 };
let obj3 = { borderRadius: null };
obj3[0] = Button.getIconSize(require("Button").Icon.Sizes.MEDIUM);
obj[9] = obj3;
let closure_16 = createCacheKey.createStyles(obj);
let closure_18 = importAllResult.memo((userId) => {
  userId = userId.userId;
  const account = userId.account;
  ({ theme, showMetadata } = userId);
  if (showMetadata === undefined) {
    showMetadata = true;
  }
  let trackUserProfileAction;
  let createdAtDate;
  c4 = undefined;
  let platformUserUrl;
  const tmp = callback3();
  let obj = userId(trackUserProfileAction[16]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  obj1 = userId(trackUserProfileAction[12]);
  const token = obj1.useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj2 = userId(trackUserProfileAction[12]);
  let metadata = account.metadata;
  const token1 = obj2.useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_COLOR);
  if (metadata == null) {
    metadata = {};
  }
  createdAtDate = null;
  if (showMetadata) {
    let tmp2Result = tmp2(tmp3[17]);
    createdAtDate = tmp2Result.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], userId.locale);
  }
  if (!showMetadata) {
    let tmp12 = null != null;
    if (tmp12) {
      tmp12 = null.length > 0;
    }
    const value = account(tmp3[18]).get(account.type);
    c4 = value;
    tmp2Result = tmp2(tmp3[19]);
    const tmp4Result = account(tmp3[18]);
    if (tmp2Result1.isThemeDark(theme)) {
      let darkPNG;
      if (!tmp14) {
        darkPNG = value.icon.darkPNG;
      }
      let lightPNG = darkPNG;
    } else if (!tmp14) {
      lightPNG = value.icon.lightPNG;
    }
    platformUserUrl = undefined;
    const source = tmp2Result.makeSource(lightPNG);
    if (value != null) {
      const getPlatformUserUrl = value.getPlatformUserUrl;
      if (getPlatformUserUrl != null) {
        platformUserUrl = getPlatformUserUrl(account);
      }
    }
    let tmp19 = account.type === constants.TWITTER;
    if (tmp19) {
      tmp19 = "1" === metadata[MetadataFields.TWITTER_VERIFIED];
    }
    let items = [account.type, platformUserUrl, trackUserProfileAction, userId];
    const items1 = [account.name, trackUserProfileAction];
    const callback = createdAtDate.useCallback(() => {
      if (null != platformUserUrl) {
        trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
        let obj = userId(trackUserProfileAction[20]);
        obj = { href: null, trusted: null, onConfirm: null };
        obj[0] = tmp;
        obj[1] = account.type !== closure_1_10.DOMAIN;
        obj[2] = function onConfirm() {
          let obj = closure_1_0(closure_1_2[21]);
          obj = { platform_type: type.type, other_user_id: closure_0 };
          obj.trackWithMetadata(closure_1_9.CONNECTED_ACCOUNT_VIEWED, obj);
          closure_1_1(closure_1_2[22]).openURL(closure_5);
        };
        obj.handleClick(obj);
      }
    }, items);
    const callback1 = createdAtDate.useCallback(() => {
      trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
      const result = userId(trackUserProfileAction[23]).triggerHapticFeedback(userId(trackUserProfileAction[23]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = userId(trackUserProfileAction[23]);
      userId(trackUserProfileAction[24]).copy(account.name);
      const obj2 = userId(trackUserProfileAction[24]);
      const result1 = userId(trackUserProfileAction[25]).presentCopiedToClipboard();
    }, items1);
    const items2 = [account.name, createdAtDate, ];
    let name;
    if (value != null) {
      name = value.name;
    }
    items2[2] = name;
    let name1;
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
        const intl = userId(trackUserProfileAction[26]).intl;
        const obj = { date: null };
        obj[0] = tmp3;
        items.push(intl.formatToPlainString(userId(trackUserProfileAction[26]).t["9rfonh"], obj));
      }
      return items.join(", ");
    }, items2);
    if (value != null) {
      name1 = value.name;
    }
    const items3 = [name1, platformUserUrl];
    obj = { style: null, children: null };
    obj[0] = tmp.connectedAccountName;
    const memo1 = createdAtDate.useMemo(() => {
      if (null != platformUserUrl) {
        const intl2 = userId(trackUserProfileAction[26]).intl;
        let stringResult = intl2.string(userId(trackUserProfileAction[26]).t.wuRE8M);
      } else {
        const intl = userId(trackUserProfileAction[26]).intl;
        let str;
        if (_undefined != null) {
          str = _undefined.name;
        }
        if (str == null) {
          str = "";
        }
        const obj = { name: null };
        obj[0] = str;
        stringResult = intl.formatToPlainString(userId(trackUserProfileAction[26]).t.OKzaN3, obj);
      }
      return stringResult;
    }, items3);
    obj = { variant: null, color: null, style: null, lineClamp: 2, children: null };
    obj[0] = token;
    obj[1] = token1;
    obj[2] = tmp.connectedAccountNameText;
    obj[4] = account.name;
    const items4 = [callback(tmp2(tmp3[27]).Text, obj), ];
    let tmp29Result = null;
    if (account.verified) {
      obj1 = { theme: null, isTwitterVerifiedAccount: null };
      obj1[0] = theme;
      obj1[1] = tmp19;
      tmp29Result = tmp29(VerifiedIcon, obj1);
    }
    items4[1] = tmp29Result;
    obj[1] = items4;
    let tmp27Result = tmp27(tmp28, obj);
    if (null != createdAtDate) {
      tmp29Result = null;
      if (null != createdAtDate) {
        obj2 = { variant: "text-xs/medium", color: "text-subtle", children: null };
        let intl = tmp2(tmp3[26]).intl;
        const obj3 = { date: null };
        obj3[0] = createdAtDate;
        obj2[2] = intl.format(tmp2(tmp3[26]).t["9rfonh"], obj3);
        tmp29Result = tmp29(tmp2(tmp3[27]).Text, obj2);
      }
      const items5 = [tmp29Result, ];
      let tmp29Result1 = null;
      if (tmp12) {
        const obj4 = { style: null, children: null };
        obj4[0] = tmp.connectionMetadata;
        obj4[1] = null;
        tmp29Result1 = tmp29(tmp28, obj4);
      }
      const obj5 = { children: null };
      items5[1] = tmp29Result1;
      obj5[0] = items5;
      tmp27Result = tmp27(closure_14, obj5);
      const tmp34 = closure_14;
    }
    const obj6 = { label: null, subLabel: null, icon: null, trailing: null, onPress: null, onLongPress: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: "button" };
    obj6[0] = tmp27Result;
    obj6[1] = tmp27Result;
    const obj7 = { size: null, source: null };
    obj7[0] = closure_8;
    obj7[1] = source;
    obj6[2] = callback(tmp2(tmp3[29]).BaseIconImage, obj7);
    let tmp29Result2;
    if (null != platformUserUrl) {
      tmp29Result2 = tmp29(tmp2(tmp3[30]).LinkExternalSmallIcon, { size: "sm" });
    }
    obj6[3] = tmp29Result2;
    let tmp39 = callback1;
    if (null != platformUserUrl) {
      tmp39 = callback;
    }
    obj6[4] = tmp39;
    obj6[5] = callback1;
    obj6[6] = memo;
    obj6[7] = memo1;
    return callback(tmp2(tmp3[28]).TableRow, obj6);
  } else {
    const type = account.type;
    const metadataItem = tmp.metadataItem;
    if (constants.REDDIT === type) {
      let redditMetadataItems = tmp2(tmp3[11]).generateRedditMetadataItems(metadata, metadataItem);
      const tmp2Result2 = tmp2(tmp3[11]);
    } else if (tmp9.STEAM === type) {
      redditMetadataItems = tmp2(tmp3[11]).generateSteamMetadataItems(metadata, metadataItem);
      const tmp2Result3 = tmp2(tmp3[11]);
    } else {
      if (tmp9.BLUESKY !== type) {
        if (tmp9.TWITTER !== type) {
          if (tmp9.MASTODON !== type) {
            if (tmp9.PAYPAL === type) {
              redditMetadataItems = tmp2(tmp3[11]).generatePaypalMetadataItems(metadata, metadataItem);
              const tmp2Result4 = tmp2(tmp3[11]);
            } else if (tmp9.EBAY !== type) {
              redditMetadataItems = null;
              if (tmp9.TIKTOK === type) {
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
let closure_19 = importAllResult.memo((application) => {
  application = application.application;
  let trackUserProfileAction;
  let str;
  let obj = application(str[16]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const iconSource = application.getIconSource(closure_7);
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
    const result = application(str[23]).triggerHapticFeedback(application(str[23]).HapticFeedbackTypes.IMPACT_LIGHT);
    const obj = application(str[23]);
    application(str[24]).copy(str);
    const obj2 = application(str[24]);
    const result1 = application(str[25]).presentCopiedToClipboard();
  }, items);
  const items1 = [application.name, str];
  const items2 = [application.name];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    items.push(application.name);
    items.push(str);
    return items.join(", ");
  }, items1);
  const memo1 = importAllResult.useMemo(() => {
    const intl = application(str[26]).intl;
    return intl.formatToPlainString(application(str[26]).t.OKzaN3, { name: application.name });
  }, items2);
  obj = { label: str, icon: null, onPress: null, onLongPress: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: "button" };
  let tmp8Result;
  if (null != iconSource) {
    obj = { size: null, source: null, style: null };
    obj[0] = closure_8;
    obj[1] = iconSource;
    obj[2] = tmp.applicationIcon;
    tmp8Result = tmp8(tmp2(tmp3[29]).BaseIconImage, obj);
  }
  obj[1] = tmp8Result;
  obj[2] = callback;
  obj[3] = callback;
  obj[4] = memo;
  obj[5] = memo1;
  return closure_12(application(str[28]).TableRow, obj);
});
const memoResult = importAllResult.memo((applicationRoleConnection) => {
  applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
  const tmp = callback3();
  let obj = applicationRoleConnection(11174);
  const roleConnectionMetadataItems = obj.generateRoleConnectionMetadataItems(applicationRoleConnection);
  obj1 = getAvatarURLDefault;
  obj = { id: applicationRoleConnection.application.id, icon: applicationRoleConnection.application.icon };
  let tmp7 = null;
  const applicationIconSource = obj1.getApplicationIconSource(obj);
  if (null != applicationRoleConnection.platform_name) {
    tmp7 = null;
    if (null != applicationRoleConnection.platform_username) {
      obj = { variant: "text-xs/medium", color: "text-subtle", children: null };
      obj[2] = applicationRoleConnection.platform_username;
      tmp7 = callback(tmp2(4474).Text, obj);
    }
  }
  const items = [tmp7, , ];
  let tmp9 = null;
  if (null != roleConnectionMetadataItems) {
    tmp9 = null;
    if (roleConnectionMetadataItems.length > 0) {
      obj1 = { style: null, children: null };
      obj1[0] = tmp.connectionMetadata;
      obj1[1] = roleConnectionMetadataItems;
      tmp9 = callback(View, obj1);
    }
  }
  const obj2 = { children: null };
  items[1] = tmp9;
  const obj3 = { style: tmp.poweredByContainer, children: null };
  const obj4 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = tmp2(1236).intl;
  obj4[2] = intl.format(applicationRoleConnection(1236).t.zIT9YA, {
    applicationHook() {
      return applicationRoleConnection.application.name;
    }
  });
  obj3[1] = callback(applicationRoleConnection(4474).Text, obj4);
  items[2] = callback(View, obj3);
  obj2[0] = items;
  let name = applicationRoleConnection.platform_name;
  if (name == null) {
    name = applicationRoleConnection.platform_username;
  }
  if (name == null) {
    name = applicationRoleConnection.application.name;
  }
  const obj6 = { label: name, subLabel: closure_13(closure_14, obj2), icon: null };
  const obj5 = {
    applicationHook() {
      return applicationRoleConnection.application.name;
    }
  };
  const tmp5 = closure_13;
  const tmp5Result = closure_13(closure_14, obj2);
  const tmp6 = closure_14;
  obj6[2] = callback(applicationRoleConnection(1297).Icon, { size: applicationRoleConnection(1297).Icon.Sizes.MEDIUM, source: applicationIconSource, disableColor: true });
  return callback(applicationRoleConnection(5599).TableRow, obj6);
});
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileConnections.tsx");

export const ApplicationRoleConnection = memoResult;
export const UserProfileAccountConnectionsCard = function UserProfileAccountConnectionsCard(userId) {
  userId = userId.userId;
  let theme;
  dependencyMap = undefined;
  const tmp = callback3();
  let obj = userId(4204);
  theme = obj.useThemeContext().theme;
  const items = [closure_5];
  dependencyMap = userId(589).useStateFromStores(items, () => locale.locale);
  const obj2 = userId(589);
  const items1 = [closure_6];
  const stateFromStores = userId(589).useStateFromStores(items1, () => obj.hidePersonalInformation);
  const obj3 = userId(589);
  const tmp5 = theme;
  ({ connections, appIdentities } = theme(12514)(userId));
  if (!stateFromStores) {
    const items2 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(connections.map((account) => closure_1_12(closure_1_18, { account, theme, locale: closure_2, userId }, account.id)), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(appIdentities.map((application) => {
      const identity = application.identity;
      return callback(closure_19, { identity, application: application.application }, "" + identity.application_id + "-" + identity.provider_issued_user_id);
    }), arraySpreadResult);
    obj = { style: null, title: null, titleStyle: null, children: null };
    const items3 = [tmp.cardContainer, userId.style];
    obj[0] = items3;
    const intl = tmp2(1236).intl;
    obj[1] = intl.string(tmp2(1236).t["3fe7U5"]);
    obj[2] = tmp.refreshCardTitle;
    obj = { hasIcons: true, children: null };
    obj[1] = items2;
    obj[3] = callback(tmp2(5992).TableRowGroup, obj);
    return callback(tmp5(6000), obj);
  }
  return null;
};
export const UserProfileApplicationRoleConnectionsCard = function UserProfileApplicationRoleConnectionsCard(arg0) {
  ({ userId, style } = arg0);
  const tmp = callback3();
  const arr = useUserProfileApplicationRoleConnectionsDefault(userId);
  let obj = initialize;
  const items = [closure_6];
  if (!obj.useStateFromStores(items, () => obj.hidePersonalInformation)) {
    if (0 !== arr.length) {
      const mapped = arr.map((application) => callback(closure_20, { applicationRoleConnection: application }, application.application.id));
      obj = { style: null, title: null, titleStyle: null, children: null };
      const items1 = [tmp.cardContainer, style];
      obj[0] = items1;
      const intl = tmp4(1236).intl;
      obj[1] = intl.string(tmp4(1236).t.PHjkRE);
      obj[2] = tmp.refreshCardTitle;
      obj = { hasIcons: true, children: null };
      obj[1] = mapped;
      obj[3] = callback(tmp4(5992).TableRowGroup, obj);
      return callback(UserProfileCardDefault, obj);
    }
  }
  return null;
};