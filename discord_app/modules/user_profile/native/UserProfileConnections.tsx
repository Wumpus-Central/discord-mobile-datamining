// === Module 13079: UserProfileConnections ===

// Module 13079 (UserProfileConnections)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native2 from "native" /* 1178 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import useToken from "useToken" /* 4262 */;
import shared from "shared" /* 4411 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import Text_Text from "Text/Text" /* 4556 */;
import TableRow from "TableRow" /* 5605 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import UserProfileCardDefault from "UserProfileCard" /* 7207 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8370 */;
import ConnectionMetadataVanityItems from "ConnectionMetadataVanityItems" /* 11575 */;
import _modDef11580 from "module_11580" /* 11580 */;
import _modDef11581 from "module_11581" /* 11581 */;
import useUserProfileApplicationRoleConnectionsDefault from "useUserProfileApplicationRoleConnections" /* 13083 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import StreamerModeStore from "StreamerModeStore" /* 4405 */;

require = fn;
function VerifiedIcon(arg0) {
  ({ theme, isTwitterVerifiedAccount } = arg0);
  if (isTwitterVerifiedAccount === undefined) {
    isTwitterVerifiedAccount = false;
  }
  const tmp = closure_16();
  let obj = { size: REFRESH_SMALL_16, style: tmp.verifiedIcon };
  let obj1 = useToken;
  let PLATFORM_TWITTER = obj1.useToken(nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, theme);
  if (isTwitterVerifiedAccount) {
    PLATFORM_TWITTER = nativeDefault.unsafe_rawColors.PLATFORM_TWITTER;
  }
  if (!tmp2Result.isThemeLight(theme)) {
    if (!isTwitterVerifiedAccount) {
      let WHITE = nativeDefault.unsafe_rawColors.BLACK;
    }
    obj = { style: tmp.verifiedIconContainer, children: null };
    obj = { source: _modDef11580, color: PLATFORM_TWITTER };
    const merged = Object.assign(obj);
    const items = [closure_1_12(native2.Icon, obj), ];
    obj1 = { source: _modDef11581, color: WHITE };
    const merged1 = Object.assign(obj);
    items[1] = closure_1_12(native2.Icon, obj1);
    obj.children = items;
    return map1(View, obj);
  }
  WHITE = nativeDefault.unsafe_rawColors.WHITE;
  tmp2Result = shared;
}
const View = fn(17).View;
let Constants = fn(7208);
({ CARD_ROWS_ICON_SIZE: closure_7, CARD_ROWS_ICON_SIZE_VARIANT: closure_8, CARD_PADDING } = Constants);
Constants = fn(1074);
({ AnalyticEvents: closure_9, PlatformTypes: c10 } = Constants);
const MetadataFields = fn(5408).MetadataFields;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const REFRESH_SMALL_16 = fn(1178).Icon.Sizes.REFRESH_SMALL_16;
let native = fn(1178);
const iconSize = native.getIconSize(REFRESH_SMALL_16);
fn(4560);
let obj = { cardContainer: null, refreshCardTitle: null, connectedAccountName: null, connectedAccountNameText: null, verifiedIconContainer: null, verifiedIcon: null, connectionMetadata: null, metadataItem: null, poweredByContainer: null, applicationIcon: null };
obj = { paddingBottom: CARD_PADDING - 12 };
obj.cardContainer = obj;
native = { marginBottom: nativeDefault.space.PX_8 };
obj.refreshCardTitle = native;
obj.connectedAccountName = { flexDirection: "row", alignItems: "center", columnGap: 4 };
obj.connectedAccountNameText = { flexShrink: 1 };
obj.verifiedIconContainer = { height: iconSize, width: iconSize };
obj.verifiedIcon = { position: "absolute", left: 0, top: 0 };
obj.connectionMetadata = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" };
const createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.metadataItem = createStyles;
obj.poweredByContainer = { flexDirection: "row", alignItems: "center", marginTop: 6 };
let obj3 = { borderRadius: null };
native = fn(1178);
obj3.borderRadius = native.getIconSize(fn(1178).Icon.Sizes.MEDIUM);
obj.applicationIcon = obj3;
let closure_16 = createStyles.createStyles(obj);
let closure_18 = noop.memo((userId) => {
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
  const tmp = closure_16();
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
    let tmp2Result = tmp2(tmp3[17]);
    createdAtDate = tmp2Result.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], userId.locale);
  }
  if (!showMetadata) {
    let tmp12 = null != null;
    if (tmp12) {
      tmp12 = null.length > 0;
    }
    value = tmp4(tmp3[18]).get(account.type);
    c4 = value;
    tmp2Result = tmp2(tmp3[19]);
    const tmp4Result = tmp4(tmp3[18]);
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
        let obj = {
          href: tmp,
          trusted: account.type !== constants.DOMAIN,
          onConfirm() {
              userId(trackUserProfileAction[21]);
              const obj = { platform_type: type.type, other_user_id };
              obj.trackWithMetadata(constants.CONNECTED_ACCOUNT_VIEWED, obj);
              account(trackUserProfileAction[22]).openURL(platformUserUrl);
            }
        };
        obj.handleClick(obj);
      }
    }, items);
    const callback1 = createdAtDate.useCallback(() => {
      trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      ClipboardUtils.copy(account.name);
      const result1 = ToastUtils.presentCopiedToClipboard();
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
        const intl = util.intl;
        const obj = { date: tmp3 };
        items.push(intl.formatToPlainString(util.t["9rfonh"], obj));
      }
      return items.join(", ");
    }, items2);
    if (value != null) {
      name1 = value.name;
    }
    const items3 = [name1, platformUserUrl];
    obj = { style: tmp.connectedAccountName, children: null };
    const memo1 = createdAtDate.useMemo(() => {
      if (null != platformUserUrl) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.wuRE8M);
      } else {
        const intl = util.intl;
        let str;
        if (_undefined != null) {
          str = _undefined.name;
        }
        if (str == null) {
          str = "";
        }
        const obj = { name: str };
        stringResult = intl.formatToPlainString(util.t.OKzaN3, obj);
      }
      return stringResult;
    }, items3);
    obj = { variant: token, color: token1, style: tmp.connectedAccountNameText, lineClamp: 2, children: account.name };
    const items4 = [closure_12(tmp2(tmp3[27]).Text, obj), ];
    let tmp29Result = null;
    if (account.verified) {
      obj1 = { theme, isTwitterVerifiedAccount: tmp19 };
      tmp29Result = closure_12(VerifiedIcon, obj1);
    }
    items4[1] = tmp29Result;
    obj.children = items4;
    let tmp27Result = closure_13(tmp28, obj);
    if (null != createdAtDate) {
      tmp29Result = null;
      if (null != createdAtDate) {
        obj2 = { variant: "text-xs/medium", color: "text-subtle", children: null };
        let intl = tmp2(tmp3[26]).intl;
        const obj3 = { date: createdAtDate };
        obj2.children = intl.format(tmp2(tmp3[26]).t["9rfonh"], obj3);
        tmp29Result = closure_12(tmp2(tmp3[27]).Text, obj2);
      }
      const items5 = [tmp29Result, ];
      let tmp29Result1 = null;
      if (tmp12) {
        const obj4 = { style: tmp.connectionMetadata, children: null };
        tmp29Result1 = closure_12(tmp28, obj4);
      }
      const obj5 = { children: null };
      items5[1] = tmp29Result1;
      obj5.children = items5;
      tmp27Result = closure_13(closure_14, obj5);
    }
    const obj6 = { label: tmp27Result, subLabel: tmp27Result, icon: null, trailing: null, onPress: null, onLongPress: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: "button" };
    const obj7 = { size, source };
    obj6.icon = closure_12(tmp2(tmp3[29]).BaseIconImage, obj7);
    let tmp29Result2;
    if (null != platformUserUrl) {
      tmp29Result2 = closure_12(tmp2(tmp3[30]).LinkExternalSmallIcon, { size: "sm" });
    }
    obj6.trailing = tmp29Result2;
    let tmp39 = callback1;
    if (null != platformUserUrl) {
      tmp39 = callback;
    }
    obj6.onPress = tmp39;
    obj6.onLongPress = callback1;
    obj6.accessibilityLabel = memo;
    obj6.accessibilityHint = memo1;
    return closure_12(tmp2(tmp3[28]).TableRow, obj6);
  } else {
    const type = account.type;
    const metadataItem = tmp.metadataItem;
    if (constants.REDDIT === type) {
      let redditMetadataItems = tmp2(tmp3[11]).generateRedditMetadataItems(metadata, metadataItem);
      const tmp2Result2 = tmp2(tmp3[11]);
    } else if (constants.STEAM === type) {
      redditMetadataItems = tmp2(tmp3[11]).generateSteamMetadataItems(metadata, metadataItem);
      const tmp2Result3 = tmp2(tmp3[11]);
    } else {
      if (constants.BLUESKY !== type) {
        if (constants.TWITTER !== type) {
          if (constants.MASTODON !== type) {
            if (constants.PAYPAL === type) {
              redditMetadataItems = tmp2(tmp3[11]).generatePaypalMetadataItems(metadata, metadataItem);
              const tmp2Result4 = tmp2(tmp3[11]);
            } else if (constants.EBAY !== type) {
              redditMetadataItems = null;
              if (constants.TIKTOK === type) {
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
  tmp4 = account;
});
let closure_19 = noop.memo((application) => {
  application = application.application;
  let str;
  let obj = application(str[16]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
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
  const callback = noop.useCallback(() => {
    trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    ClipboardUtils.copy(str);
    const result1 = ToastUtils.presentCopiedToClipboard();
  }, items);
  const items1 = [application.name, str];
  const items2 = [application.name];
  const memo = noop.useMemo(() => {
    const items = [];
    items.push(application.name);
    items.push(str);
    return items.join(", ");
  }, items1);
  const memo1 = noop.useMemo(() => {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.OKzaN3, { name: application.name });
  }, items2);
  obj = { label: str, icon: null, onPress: null, onLongPress: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: "button" };
  let tmp8Result;
  if (null != iconSource) {
    obj = { size, source: iconSource, style: tmp.applicationIcon };
    tmp8Result = closure_12(tmp2(tmp3[29]).BaseIconImage, obj);
  }
  obj.icon = tmp8Result;
  obj.onPress = callback;
  obj.onLongPress = callback;
  obj.accessibilityLabel = memo;
  obj.accessibilityHint = memo1;
  return closure_12(application(str[28]).TableRow, obj);
});
const memoResult = noop.memo((applicationRoleConnection) => {
  applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
  const tmp = closure_16();
  let obj = ConnectionMetadataVanityItems;
  const roleConnectionMetadataItems = obj.generateRoleConnectionMetadataItems(applicationRoleConnection);
  let obj1 = AvatarUtilsDefault;
  obj = { id: applicationRoleConnection.application.id, icon: applicationRoleConnection.application.icon };
  let tmp7 = null;
  const applicationIconSource = obj1.getApplicationIconSource(obj);
  if (null != applicationRoleConnection.platform_name) {
    tmp7 = null;
    if (null != applicationRoleConnection.platform_username) {
      obj = { variant: "text-xs/medium", color: "text-subtle", children: applicationRoleConnection.platform_username };
      tmp7 = closure_1_12(Text_Text.Text, obj);
    }
  }
  const items = [tmp7, , ];
  let tmp9 = null;
  if (null != roleConnectionMetadataItems) {
    tmp9 = null;
    if (roleConnectionMetadataItems.length > 0) {
      obj1 = { style: tmp.connectionMetadata, children: roleConnectionMetadataItems };
      tmp9 = closure_1_12(View, obj1);
    }
  }
  const obj2 = { children: null };
  items[1] = tmp9;
  const obj3 = { style: tmp.poweredByContainer, children: null };
  const obj4 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj4.children = intl.format(util.t.zIT9YA, {
    applicationHook() {
      return applicationRoleConnection.application.name;
    }
  });
  obj3.children = closure_1_12(Text_Text.Text, obj4);
  items[2] = closure_1_12(View, obj3);
  obj2.children = items;
  let name = applicationRoleConnection.platform_name;
  if (name == null) {
    name = applicationRoleConnection.platform_username;
  }
  if (name == null) {
    name = applicationRoleConnection.application.name;
  }
  const obj6 = { label: name, subLabel: map1(closure_1_14, obj2), icon: null };
  const obj5 = {
    applicationHook() {
      return applicationRoleConnection.application.name;
    }
  };
  const tmp5Result = map1(closure_1_14, obj2);
  obj6.icon = closure_1_12(native2.Icon, { size: native2.Icon.Sizes.MEDIUM, source: applicationIconSource, disableColor: true });
  return closure_1_12(TableRow.TableRow, obj6);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConnections.tsx");

export const ApplicationRoleConnection = memoResult;
export const UserProfileAccountConnectionsCard = function UserProfileAccountConnectionsCard(userId) {
  userId = userId.userId;
  const tmp = closure_16();
  let obj = userId(4271);
  const theme = obj.useThemeContext().theme;
  const items = [LocaleStore];
  dependencyMap = userId(504).useStateFromStores(items, () => locale2.locale);
  const obj2 = userId(504);
  const items1 = [StreamerModeStore];
  const stateFromStores = userId(504).useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  const obj3 = userId(504);
  const tmp5 = theme;
  ({ connections, appIdentities } = theme(13080)(userId));
  if (!stateFromStores) {
    const items2 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(connections.map((account) => closure_2_12(closure_18, { account, theme, locale, userId }, account.id)), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(appIdentities.map((application) => {
      const identity = application.identity;
      return closure_1_12(closure_1_19, { identity, application: application.application }, "" + identity.application_id + "-" + identity.provider_issued_user_id);
    }), arraySpreadResult);
    obj = { style: null, title: null, titleStyle: null, children: null };
    const items3 = [tmp.cardContainer, userId.style];
    obj.style = items3;
    const intl = tmp2(1114).intl;
    obj.title = intl.string(tmp2(1114).t["3fe7U5"]);
    obj.titleStyle = tmp.refreshCardTitle;
    obj = { hasIcons: true, children: items2 };
    obj.children = closure_12(tmp2(5687).TableRowGroup, obj);
    return closure_12(tmp5(7207), obj);
  }
  return null;
};
export const UserProfileApplicationRoleConnectionsCard = function UserProfileApplicationRoleConnectionsCard(arg0) {
  ({ userId, style } = arg0);
  const tmp = closure_16();
  const arr = useUserProfileApplicationRoleConnectionsDefault(userId);
  let obj = initialize;
  const items = [StreamerModeStore];
  if (!obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation)) {
    if (0 !== arr.length) {
      const mapped = arr.map((applicationRoleConnection) => closure_1_12(closure_1_20, { applicationRoleConnection }, applicationRoleConnection.application.id));
      obj = { style: null, title: null, titleStyle: null, children: null };
      const items1 = [tmp.cardContainer, style];
      obj.style = items1;
      const intl = util.intl;
      obj.title = intl.string(util.t.PHjkRE);
      obj.titleStyle = tmp.refreshCardTitle;
      obj = { hasIcons: true, children: mapped };
      obj.children = closure_1_12(TableRowGroup.TableRowGroup, obj);
      return closure_1_12(UserProfileCardDefault, obj);
    }
  }
  return null;
};