// === Module 13390: UserProfileConnections ===

// Module 13390 (UserProfileConnections)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native2 from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ToastUtils from "ToastUtils" /* 4453 */;
import useToken from "useToken" /* 4457 */;
import shared from "shared" /* 4607 */;
import HapticUtils from "HapticUtils" /* 4724 */;
import Text_Text from "Text/Text" /* 4752 */;
import TableRow from "TableRow" /* 5822 */;
import TableRowGroup from "TableRowGroup" /* 5904 */;
import ClipboardUtils from "ClipboardUtils" /* 7434 */;
import UserProfileCardDefault from "UserProfileCard" /* 7452 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8641 */;
import ConnectionMetadataVanityItems from "ConnectionMetadataVanityItems" /* 11826 */;
import _modDef11831 from "module_11831" /* 11831 */;
import _modDef11832 from "module_11832" /* 11832 */;
import useUserProfileApplicationRoleConnectionsDefault from "useUserProfileApplicationRoleConnections" /* 13394 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2109 */;
import StreamerModeStore from "StreamerModeStore" /* 4601 */;

require = fn;
function VerifiedIcon(arg0) {
  ({ theme, isTwitterVerifiedAccount } = arg0);
  if (isTwitterVerifiedAccount === undefined) {
    isTwitterVerifiedAccount = false;
  }
  const tmp = closure_16();
  const obj = { size: REFRESH_SMALL_16, style: tmp.verifiedIcon };
  let PLATFORM_TWITTER = useToken.useToken(nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, theme);
  if (isTwitterVerifiedAccount) {
    PLATFORM_TWITTER = nativeDefault.unsafe_rawColors.PLATFORM_TWITTER;
  }
  if (!tmp2Result.isThemeLight(theme)) {
    if (!isTwitterVerifiedAccount) {
      let WHITE = nativeDefault.unsafe_rawColors.BLACK;
    }
    const obj3 = { style: tmp.verifiedIconContainer, children: null };
    const obj4 = { source: _modDef11831, color: PLATFORM_TWITTER };
    const merged = Object.assign(obj);
    const items = [closure_1_12(native2.Icon, obj4), ];
    const obj5 = { source: _modDef11832, color: WHITE };
    const merged1 = Object.assign(obj);
    items[1] = closure_1_12(native2.Icon, obj5);
    obj3.children = items;
    return map1(View, obj3);
  }
  WHITE = nativeDefault.unsafe_rawColors.WHITE;
  tmp2Result = shared;
}
const View = fn(17).View;
let Constants = fn(7453);
({ CARD_ROWS_ICON_SIZE: closure_7, CARD_ROWS_ICON_SIZE_VARIANT: closure_8, CARD_PADDING } = Constants);
Constants = fn(1074);
({ AnalyticEvents: closure_9, PlatformTypes: c10 } = Constants);
const MetadataFields = fn(5625).MetadataFields;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const REFRESH_SMALL_16 = fn(1177).Icon.Sizes.REFRESH_SMALL_16;
let native = fn(1177);
const iconSize = native.getIconSize(REFRESH_SMALL_16);
const createStyles = fn(4756);
let obj = { cardContainer: { paddingBottom: CARD_PADDING - 12 }, refreshCardTitle: { marginBottom: nativeDefault.space.PX_8 }, connectedAccountName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, linkIcon: { marginEnd: 4 }, connectedAccountNameText: { flexShrink: 1 }, verifiedIconContainer: { height: iconSize, width: iconSize }, verifiedIcon: { position: "absolute", left: 0, top: 0 }, connectionMetadata: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" }, metadataItem: null, poweredByContainer: null, applicationIcon: null };
let obj4 = { paddingBottom: CARD_PADDING - 12 };
let obj5 = { marginBottom: nativeDefault.space.PX_8 };
obj.metadataItem = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.poweredByContainer = { flexDirection: "row", alignItems: "center", marginTop: 6 };
let obj7 = { borderRadius: null };
native = fn(1177);
obj7.borderRadius = native.getIconSize(fn(1177).Icon.Sizes.MEDIUM);
obj.applicationIcon = obj7;
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
  trackUserProfileAction = userId(trackUserProfileAction[16]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = userId(trackUserProfileAction[16]);
  const token = userId(trackUserProfileAction[12]).useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj2 = userId(trackUserProfileAction[12]);
  const tmp4 = account;
  let metadata = account.metadata;
  const token1 = userId(trackUserProfileAction[12]).useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_COLOR);
  if (metadata == null) {
    metadata = {};
  }
  createdAtDate = null;
  if (showMetadata) {
    createdAtDate = tmp2(tmp3[17]).getCreatedAtDate(metadata[MetadataFields.CREATED_AT], userId.locale);
    const tmp2Result = tmp2(tmp3[17]);
  }
  if (!showMetadata) {
    let tmp12 = null != null;
    if (tmp12) {
      tmp12 = null.length > 0;
    }
    value = tmp4(tmp3[18]).get(account.type);
    c4 = value;
    const tmp4Result = tmp4(tmp3[18]);
    const tmp2Result9 = tmp2(tmp3[19]);
    if (tmp2Result10.isThemeDark(theme)) {
      let darkPNG;
      if (!tmp14) {
        darkPNG = value.icon.darkPNG;
      }
      let lightPNG = darkPNG;
    } else if (!tmp14) {
      lightPNG = value.icon.lightPNG;
    }
    platformUserUrl = undefined;
    const source = tmp2Result9.makeSource(lightPNG);
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
        let obj2 = {
          href: tmp,
          trusted: account.type !== constants.DOMAIN,
          onConfirm() {
              userId(trackUserProfileAction[21]).trackWithMetadata(constants.CONNECTED_ACCOUNT_VIEWED, { platform_type: type.type, other_user_id });
              const obj = userId(trackUserProfileAction[21]);
              const obj2 = { platform_type: type.type, other_user_id };
              account(trackUserProfileAction[22]).openURL(platformUserUrl);
            }
        };
        MaskedLinkUtils.handleClick(obj2);
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
    const obj4 = { style: tmp.connectedAccountName, children: null };
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
    const obj5 = { variant: token, color: token1, style: tmp.connectedAccountNameText, lineClamp: 2, children: account.name };
    const items4 = [closure_12(tmp2(tmp3[27]).Text, obj5), ];
    let tmp29Result = null;
    if (account.verified) {
      const obj6 = { theme, isTwitterVerifiedAccount: tmp19 };
      tmp29Result = closure_12(VerifiedIcon, obj6);
    }
    items4[1] = tmp29Result;
    obj4.children = items4;
    tmp2Result10 = tmp2(tmp3[13]);
    if (null != createdAtDate) {
      let tmp29Result4 = null;
      if (null != createdAtDate) {
        const obj7 = { variant: "text-xs/medium", color: "text-subtle", children: null };
        let intl = tmp2(tmp3[26]).intl;
        const obj8 = { date: createdAtDate };
        obj7.children = intl.format(tmp2(tmp3[26]).t["9rfonh"], obj8);
        tmp29Result4 = closure_12(tmp2(tmp3[27]).Text, obj7);
      }
      const items5 = [tmp29Result4, ];
      let tmp29Result5 = null;
      if (tmp12) {
        const obj9 = { style: tmp.connectionMetadata, children: null };
        tmp29Result5 = closure_12(tmp28, obj9);
      }
      const obj10 = { children: null };
      items5[1] = tmp29Result5;
      obj10.children = items5;
      const tmp27Result2 = closure_13(closure_14, obj10);
    }
    const obj11 = { label: closure_13(c4, obj4), subLabel: tmp27Result2, icon: null, trailing: null, onPress: null, onLongPress: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: "button" };
    const obj12 = { size, source };
    obj11.icon = closure_12(tmp2(tmp3[29]).BaseIconImage, obj12);
    let tmp29Result6;
    if (null != platformUserUrl) {
      const obj13 = { size: "sm", style: tmp.linkIcon };
      tmp29Result6 = closure_12(tmp2(tmp3[30]).LinkExternalSmallIcon, obj13);
    }
    obj11.trailing = tmp29Result6;
    let tmp39 = callback1;
    if (null != platformUserUrl) {
      tmp39 = callback;
    }
    obj11.onPress = tmp39;
    obj11.onLongPress = callback1;
    obj11.accessibilityLabel = memo;
    obj11.accessibilityHint = memo1;
    return closure_12(tmp2(tmp3[28]).TableRow, obj11);
  } else {
    const type = account.type;
    const metadataItem = tmp.metadataItem;
    if (constants.REDDIT === type) {
      let redditMetadataItems = tmp2(tmp3[11]).generateRedditMetadataItems(metadata, metadataItem);
      const tmp2Result11 = tmp2(tmp3[11]);
    } else if (constants.STEAM === type) {
      redditMetadataItems = tmp2(tmp3[11]).generateSteamMetadataItems(metadata, metadataItem);
      const tmp2Result12 = tmp2(tmp3[11]);
    } else {
      if (constants.BLUESKY !== type) {
        if (constants.TWITTER !== type) {
          if (constants.MASTODON !== type) {
            if (constants.PAYPAL === type) {
              redditMetadataItems = tmp2(tmp3[11]).generatePaypalMetadataItems(metadata, metadataItem);
              const tmp2Result13 = tmp2(tmp3[11]);
            } else if (constants.EBAY !== type) {
              redditMetadataItems = null;
              if (constants.TIKTOK === type) {
                redditMetadataItems = tmp2(tmp3[11]).generateTikTokMetadataItems(metadata, metadataItem);
                const tmp2Result14 = tmp2(tmp3[11]);
              }
            }
            redditMetadataItems = tmp2(tmp3[11]).generateEbayMetadataItems(metadata, metadataItem);
            const tmp2Result15 = tmp2(tmp3[11]);
          }
        }
      }
      redditMetadataItems = tmp2(tmp3[11]).generateTwitterMetadataItems(metadata, metadataItem);
      const tmp2Result16 = tmp2(tmp3[11]);
    }
  }
  const obj3 = userId(trackUserProfileAction[12]);
});
let closure_19 = noop.memo((application) => {
  application = application.application;
  let str;
  const tmp = closure_16();
  const trackUserProfileAction = application(str[16]).useUserProfileAnalyticsContext().trackUserProfileAction;
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
  let obj2 = { label: str, icon: null, onPress: null, onLongPress: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: "button" };
  let tmp8Result;
  if (null != iconSource) {
    const obj3 = { size, source: iconSource, style: tmp.applicationIcon };
    tmp8Result = closure_12(tmp2(tmp3[29]).BaseIconImage, obj3);
  }
  obj2.icon = tmp8Result;
  obj2.onPress = callback;
  obj2.onLongPress = callback;
  obj2.accessibilityLabel = memo;
  obj2.accessibilityHint = memo1;
  return closure_12(application(str[28]).TableRow, obj2);
});
const memoResult = noop.memo((applicationRoleConnection) => {
  applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
  const tmp = closure_16();
  const roleConnectionMetadataItems = ConnectionMetadataVanityItems.generateRoleConnectionMetadataItems(applicationRoleConnection);
  let tmp7 = null;
  const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: applicationRoleConnection.application.id, icon: applicationRoleConnection.application.icon });
  if (null != applicationRoleConnection.platform_name) {
    tmp7 = null;
    if (null != applicationRoleConnection.platform_username) {
      const obj4 = { variant: "text-xs/medium", color: "text-subtle", children: applicationRoleConnection.platform_username };
      tmp7 = closure_1_12(Text_Text.Text, obj4);
    }
  }
  const items = [tmp7, , ];
  let tmp9 = null;
  if (null != roleConnectionMetadataItems) {
    tmp9 = null;
    if (roleConnectionMetadataItems.length > 0) {
      const obj5 = { style: tmp.connectionMetadata, children: roleConnectionMetadataItems };
      tmp9 = closure_1_12(View, obj5);
    }
  }
  const obj6 = { children: null };
  items[1] = tmp9;
  const obj7 = { style: tmp.poweredByContainer, children: null };
  const obj8 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj8.children = intl.format(util.t.zIT9YA, {
    applicationHook() {
      return applicationRoleConnection.application.name;
    }
  });
  obj7.children = closure_1_12(Text_Text.Text, obj8);
  items[2] = closure_1_12(View, obj7);
  obj6.children = items;
  const obj3 = { id: applicationRoleConnection.application.id, icon: applicationRoleConnection.application.icon };
  const obj9 = {
    applicationHook() {
      return applicationRoleConnection.application.name;
    }
  };
  let name = applicationRoleConnection.platform_name;
  if (name == null) {
    name = applicationRoleConnection.platform_username;
  }
  if (name == null) {
    name = applicationRoleConnection.application.name;
  }
  const obj10 = { label: name, subLabel: map1(closure_1_14, obj6), icon: null };
  const tmp5Result = map1(closure_1_14, obj6);
  obj10.icon = closure_1_12(native2.Icon, { size: native2.Icon.Sizes.MEDIUM, source: applicationIconSource, disableColor: true });
  return closure_1_12(TableRow.TableRow, obj10);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConnections.tsx");

export const ApplicationRoleConnection = memoResult;
export const UserProfileAccountConnectionsCard = function UserProfileAccountConnectionsCard(userId) {
  userId = userId.userId;
  const tmp = closure_16();
  const theme = userId(4466).useThemeContext().theme;
  const obj = userId(4466);
  const items = [LocaleStore];
  dependencyMap = userId(504).useStateFromStores(items, () => locale2.locale);
  const obj2 = userId(504);
  const items1 = [StreamerModeStore];
  const stateFromStores = userId(504).useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  const obj3 = userId(504);
  const tmp5 = theme;
  ({ connections, appIdentities } = theme(13391)(userId));
  if (!stateFromStores) {
    const items2 = [];
    HermesBuiltin.arraySpread(appIdentities.map((application) => {
      const identity = application.identity;
      return closure_1_12(closure_1_19, { identity, application: application.application }, "" + identity.application_id + "-" + identity.provider_issued_user_id);
    }), HermesBuiltin.arraySpread(connections.map((account) => closure_2_12(closure_18, { account, theme, locale, userId }, account.id)), 0));
    const obj4 = { style: null, title: null, titleStyle: null, children: null };
    const items3 = [tmp.cardContainer, userId.style];
    obj4.style = items3;
    const arraySpreadResult = HermesBuiltin.arraySpread(connections.map((account) => closure_2_12(closure_18, { account, theme, locale, userId }, account.id)), 0);
    const intl = tmp2(1115).intl;
    obj4.title = intl.string(tmp2(1115).t["3fe7U5"]);
    obj4.titleStyle = tmp.refreshCardTitle;
    const obj5 = { hasIcons: true, children: items2 };
    obj4.children = closure_12(tmp2(5904).TableRowGroup, obj5);
    return closure_12(tmp5(7452), obj4);
  }
  return null;
};
export const UserProfileApplicationRoleConnectionsCard = function UserProfileApplicationRoleConnectionsCard(arg0) {
  ({ userId, style } = arg0);
  const tmp = closure_16();
  const arr = useUserProfileApplicationRoleConnectionsDefault(userId);
  const items = [StreamerModeStore];
  if (!obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation)) {
    if (0 !== arr.length) {
      const mapped = arr.map((applicationRoleConnection) => closure_1_12(closure_1_20, { applicationRoleConnection }, applicationRoleConnection.application.id));
      const obj2 = { style: null, title: null, titleStyle: null, children: null };
      const items1 = [tmp.cardContainer, style];
      obj2.style = items1;
      const intl = util.intl;
      obj2.title = intl.string(util.t.PHjkRE);
      obj2.titleStyle = tmp.refreshCardTitle;
      const obj3 = { hasIcons: true, children: mapped };
      obj2.children = closure_1_12(TableRowGroup.TableRowGroup, obj3);
      return closure_1_12(UserProfileCardDefault, obj2);
    }
  }
  return null;
};