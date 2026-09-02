// === Module 11394: LegacyUserProfileConnections ===

// Module 11394 (LegacyUserProfileConnections)
import ThemesDefault from "Themes" /* 709 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "_getSystemLocale" /* 1995 */;
import closure_7 from "createdAt" /* 1934 */;
import closure_8 from "initialize" /* 4323 */;
import closure_9 from "createUserWidgetFromServer" /* 7375 */;
import ME from "ME" /* 673 */;
import { MetadataFields } from "OperatorTypes" /* 5360 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
class ConnectedUserAccount {
  constructor(arg0) {
    account = global.account;
    ({ theme, userId } = global);
    ({ showMetadata, showInvisibleIcon } = global);
    closure_2 = undefined;
    closure_3 = undefined;
    ({ locale, style } = global);
    if (null == showMetadata) {
      showMetadata = true;
    }
    tmp = closure_17();
    metadata = account.metadata;
    if (metadata == null) {
      metadata = {};
    }
    createdAtDate = null;
    if (showMetadata) {
      tmp3 = account;
      tmp4 = closure_2;
      obj2 = require("officialApplicationIds");
      tmp5 = MetadataFields;
      createdAtDate = obj2.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], locale);
    }
    if (showMetadata) {
      type = account.type;
      tmp6 = PlatformTypes;
      if (PlatformTypes.REDDIT === type) {
        tmp18 = account;
        tmp19 = closure_2;
        obj8 = require("PaypalVanityTag");
        redditMetadataItems = obj8.generateRedditMetadataItems(metadata, tmp.metadataItem);
      } else if (tmp6.STEAM === type) {
        tmp16 = account;
        tmp17 = closure_2;
        obj7 = require("PaypalVanityTag");
        redditMetadataItems = obj7.generateSteamMetadataItems(metadata, tmp.metadataItem);
      } else {
        if (tmp6.BLUESKY !== type) {
          if (tmp6.MASTODON !== type) {
            if (tmp6.TWITTER !== type) {
              if (tmp6.PAYPAL === type) {
                tmp9 = account;
                tmp10 = closure_2;
                obj4 = require("PaypalVanityTag");
                redditMetadataItems = obj4.generatePaypalMetadataItems(metadata, tmp.metadataItem);
              } else if (tmp6.EBAY === type) {
                tmp7 = account;
                tmp8 = closure_2;
                obj3 = require("PaypalVanityTag");
                redditMetadataItems = obj3.generateEbayMetadataItems(metadata, tmp.metadataItem);
              } else if (tmp6.TIKTOK === type) {
                tmp48 = account;
                tmp49 = closure_2;
                obj30 = require("PaypalVanityTag");
                redditMetadataItems = obj30.generateTikTokMetadataItems(metadata, tmp.metadataItem);
              }
            }
          }
        }
        tmp11 = account;
        tmp12 = closure_2;
        obj5 = require("PaypalVanityTag");
        twitterMetadataItems = obj5.generateTwitterMetadataItems(metadata, tmp.metadataItem);
        tmp14 = MetadataFields;
        str = "1";
        redditMetadataItems = twitterMetadataItems;
        if ("1" === metadata[MetadataFields.TWITTER_VERIFIED]) {
          tmp15 = userId;
          obj6 = require("getPlatformUserUrl");
          color = obj6.get(tmp6.TWITTER).color;
          redditMetadataItems = twitterMetadataItems;
        }
      }
    }
    tmp20 = userId;
    tmp21 = closure_2;
    obj9 = require("getPlatformUserUrl");
    value = obj9.get(account.type);
    closure_2 = value;
    tmp23 = account;
    obj10 = require("getAvatarURL");
    obj11 = require("AccessibilityAnnouncer");
    tmp24 = value == null;
    if (obj11.isThemeDark(theme)) {
      darkPNG = undefined;
      if (!tmp24) {
        darkPNG = value.icon.darkPNG;
      }
      lightPNG = darkPNG;
    } else if (!tmp24) {
      lightPNG = value.icon.lightPNG;
    }
    platformUserUrl = undefined;
    source = obj10.makeSource(lightPNG);
    if (value != null) {
      getPlatformUserUrl = value.getPlatformUserUrl;
      if (getPlatformUserUrl != null) {
        platformUserUrl = getPlatformUserUrl(account);
      }
    }
    closure_3 = platformUserUrl;
    if (null != showInvisibleIcon) {
      if (showInvisibleIcon) {
        tmp30 = jsx;
        obj = { style: null, source: null };
        obj[0] = tmp.connectedAccountOpenHide;
        obj[1] = require("registerAsset");
        tmp28 = jsx(require("Button").Icon, obj);
      }
      tmp23Result = require("map");
      token = tmp23Result.useToken(require("Themes").colors.BACKGROUND_MOD_MUTED, theme);
      tmp23Result1 = require("map");
      if (null != color) {
        tmp32 = ThemeTypes;
        theme = ThemeTypes.DARK;
      }
      WHITE = tmp23Result1.useToken(require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, theme);
      tmp33 = token;
      if (null != color) {
        WHITE = require("Themes").unsafe_rawColors.WHITE;
        tmp33 = color;
      }
      tmp34 = null;
      if (account.verified) {
        tmp35 = jsxs;
        tmp36 = View;
        obj1 = { style: null, children: null };
        obj1[0] = tmp.verifiedCheckContainer;
        tmp37 = jsx;
        obj2 = { style: null, size: null, source: null, color: null };
        obj2[0] = tmp.verifiedCheck;
        obj2[1] = require("Button").Icon.Sizes.REFRESH_SMALL_16;
        obj2[2] = require("registerAsset");
        obj2[3] = tmp33;
        items = [, ];
        items[0] = jsx(require("Button").Icon, obj2);
        obj3 = { style: null, size: null, source: null, color: null };
        obj3[0] = tmp.verifiedCheck;
        obj3[1] = require("Button").Icon.Sizes.REFRESH_SMALL_16;
        obj3[2] = require("registerAsset");
        obj3[3] = WHITE;
        items[1] = jsx(require("Button").Icon, obj3);
        obj1[1] = items;
        tmp34 = jsxs(View, obj1);
      }
      obj19 = closure_3;
      items1 = [];
      items1[0] = account.name;
      name = undefined;
      callback = closure_3.useCallback(() => {
        const result = account(_undefined[23]).triggerHapticFeedback(account(_undefined[23]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj = account(_undefined[23]);
        account(_undefined[24]).copy(account.name);
        const obj2 = account(_undefined[24]);
        const result1 = account(_undefined[25]).presentCopiedToClipboard();
      }, items1);
      if (value != null) {
        name = value.name;
      }
      items2 = [, ];
      items2[0] = name;
      items2[1] = platformUserUrl;
      items3 = [, , ];
      items3[0] = account.type;
      items3[1] = platformUserUrl;
      items3[2] = userId;
      memo = closure_3.useMemo(() => {
        if (null != platformUserUrl) {
          const intl2 = account(_undefined[26]).intl;
          let stringResult = intl2.string(account(_undefined[26]).t.wuRE8M);
        } else {
          const intl = account(_undefined[26]).intl;
          let str;
          if (_undefined != null) {
            str = _undefined.name;
          }
          if (str == null) {
            str = "";
          }
          const obj = { name: null };
          obj[0] = str;
          stringResult = intl.formatToPlainString(account(_undefined[26]).t.OKzaN3, obj);
        }
        return stringResult;
      }, items2);
      callback1 = obj19.useCallback(() => {
        if (null != platformUserUrl) {
          let obj = account(_undefined[27]);
          obj = { href: null, trusted: null, onConfirm: null };
          obj[0] = tmp;
          obj[1] = account.type !== closure_1_11.DOMAIN;
          obj[2] = function onConfirm() {
            let obj = closure_1_0(closure_1_2[28]);
            obj = { platform_type: type.type, other_user_id: closure_1 };
            obj.trackWithMetadata(closure_1_10.CONNECTED_ACCOUNT_VIEWED, obj);
            closure_1_1(closure_1_2[29]).openURL(closure_3);
          };
          obj.handleClick(obj);
        }
      }, items3);
      if (null != platformUserUrl) {
        PressableOpacity = require("PressableBase").PressableOpacity;
      } else {
        PressableOpacity = Pressable;
      }
      tmp42 = jsx;
      obj4 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, onLongPress: null, children: null };
      obj4[0] = memo;
      tmp43 = undefined;
      if (null != platformUserUrl) {
        tmp43 = callback1;
      }
      obj4[2] = tmp43;
      obj4[3] = callback;
      tmp44 = View;
      obj5 = { style: null, children: null };
      items4 = [, ];
      items4[0] = tmp.connectedAccountContainer;
      items4[1] = style;
      obj5[0] = items4;
      tmp45 = jsxs;
      obj6 = { style: null, children: null };
      obj6[0] = tmp.connectedAccount;
      obj7 = { size: null, source: null, disableColor: true };
      obj7[0] = require("Button").Icon.Sizes.MEDIUM;
      obj7[1] = source;
      items5 = [, , ];
      items5[0] = tmp42(require("Button").Icon, obj7);
      obj8 = { style: null, children: null };
      obj8[0] = tmp.connectedAccountNameContainer;
      obj9 = { style: null, children: null };
      obj9[0] = tmp.connectedAccountName;
      obj10 = { variant: "text-md/semibold", style: null, children: null };
      obj10[1] = tmp.connectedAccountNameText;
      obj10[2] = account.name;
      items6 = [, ];
      items6[0] = tmp42(require("Text").Text, obj10);
      items6[1] = tmp34;
      obj9[1] = items6;
      items7 = [, , ];
      items7[0] = jsxs(View, obj9);
      tmp42Result = null;
      if (null != createdAtDate) {
        obj11 = { variant: "heading-deprecated-12/medium", style: null, children: null };
        obj11[1] = tmp.connectedAccountNameCreatedAtText;
        intl = require("getSystemLocale").intl;
        obj12 = { date: null };
        obj12[0] = createdAtDate;
        obj11[2] = intl.format(require("getSystemLocale").t["9rfonh"], obj12);
        tmp42Result = tmp42(require("Text").Text, obj11);
      }
      items7[1] = tmp42Result;
      tmp42Result1 = null;
      if (null != redditMetadataItems) {
        num = 0;
        tmp42Result1 = null;
        if (redditMetadataItems.length > 0) {
          obj13 = { style: null, children: null };
          obj13[0] = tmp.connectedAccountChildren;
          obj13[1] = redditMetadataItems;
          tmp42Result1 = tmp42(tmp44, obj13);
        }
      }
      items7[2] = tmp42Result1;
      obj8[1] = items7;
      items5[1] = tmp45(tmp44, obj8);
      items5[2] = tmp28;
      obj6[1] = items5;
      obj5[1] = tmp45(tmp44, obj6);
      obj4[4] = tmp42(tmp44, obj5);
      return tmp42(PressableOpacity, obj4);
    }
    tmp28 = null;
    if (null != platformUserUrl) {
      tmp29 = jsx;
      obj14 = { style: null, source: null };
      obj14[0] = tmp.connectedAccountOpenLink;
      obj14[1] = require("registerAsset");
      tmp28 = jsx(require("Button").Icon, obj14);
    }
    return;
  }
}
class ConnectedApplicationUserRoleAccount {
  constructor(arg0) {
    applicationRoleConnection = global.applicationRoleConnection;
    closure_1 = undefined;
    tmp = closure_17();
    closure_1 = tmp;
    tmp2 = applicationRoleConnection;
    tmp3 = closure_2;
    obj = require("PaypalVanityTag");
    roleConnectionMetadataItems = obj.generateRoleConnectionMetadataItems(applicationRoleConnection);
    tmp4 = jsxs;
    tmp5 = View;
    obj = { style: items, children: null };
    items = [, ];
    items[0] = tmp.connectedAccountContainer;
    items[1] = global.style;
    tmp6 = null;
    if (null != applicationRoleConnection.platform_name) {
      tmp7 = jsx;
      obj1 = { variant: "eyebrow", color: "interactive-text-default", children: null };
      obj1[2] = applicationRoleConnection.platform_name;
      tmp6 = jsx(require("Text").Text, obj1);
    }
    items1 = [, , , ];
    items1[0] = tmp6;
    tmp8 = jsx;
    obj2 = { style: tmp.appConnectionNameContainer, children: null };
    tmp8Result = null;
    if (null != applicationRoleConnection.platform_username) {
      obj3 = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
      obj3[2] = applicationRoleConnection.platform_username;
      tmp8Result = tmp8(require("Text").Text, obj3);
    }
    obj2[1] = tmp8Result;
    items1[1] = tmp8(tmp5, obj2);
    tmp8Result1 = null;
    if (null != roleConnectionMetadataItems) {
      num = 0;
      tmp8Result1 = null;
      if (roleConnectionMetadataItems.length > 0) {
        obj4 = { style: null, children: null };
        obj4[0] = tmp.connectedAccountChildren;
        obj4[1] = roleConnectionMetadataItems;
        tmp8Result1 = tmp8(tmp5, obj4);
      }
    }
    items1[2] = tmp8Result1;
    obj5 = { style: { flexDirection: "row" }, children: null };
    obj6 = { style: tmp.connectedAccountPoweredByContainer, children: null };
    obj7 = { variant: "text-xs/normal", color: "text-muted", children: null };
    intl = require("getSystemLocale").intl;
    obj8 = {
      applicationHook() {
            obj = { style: obj.connectedAccountPoweredByText, children: null };
            let tmp5 = null;
            if (null != applicationRoleConnection.application.bot) {
              obj = { style: null, user: null, size: null, guildId: "Array" };
              obj[0] = tmp3.connectedAccountPoweredByAvatar;
              const tmp12 = new closure_1_7(tmp4.application.bot);
              obj[1] = tmp12;
              obj[2] = applicationRoleConnection(closure_1_2[17]).AvatarSizes.SIZE_16;
              tmp5 = closure_1_14(applicationRoleConnection(closure_1_2[17]).Avatar, obj);
            }
            const items = [tmp5, ];
            obj = { variant: "text-xs/normal", color: "text-default", children: tmp4.application.name };
            items[1] = closure_1_14(applicationRoleConnection(closure_1_2[31]).Text, obj);
            obj[1] = items;
            return closure_1_15(closure_1_5, obj);
          }
    };
    obj7[2] = intl.format(require("getSystemLocale").t.zIT9YA, obj8);
    obj6[1] = tmp8(require("Text").Text, obj7);
    items2 = [, ];
    items2[0] = tmp8(tmp5, obj6);
    items2[1] = tmp8(tmp5, { style: { flexGrow: 1 } });
    obj5[1] = items2;
    items1[3] = tmp4(tmp5, obj5);
    obj[1] = items1;
    return tmp4(tmp5, obj);
  }
}
let c3 = importAllResult;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ AnalyticEvents: c10, PlatformTypes: unpackModuleId, ThemeTypes: closure_12 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
obj = { connectedAccountContainer: obj, connectedAccount: { flexDirection: "row", alignItems: "center" }, connectedAccountNameContainer: { flex: 1, marginLeft: 8 }, connectedAccountName: { flexDirection: "row", alignItems: "center" }, connectedAccountNameText: null, connectedAccountNameCreatedAtText: null, connectedAccountOpenLink: null, connectedAccountOpenHide: null, verifiedCheckContainer: null, verifiedCheck: null, connectedAccountChildren: null, metadataItem: null, appConnectionNameContainer: null, connectedAccountPoweredByContainer: null, connectedAccountPoweredByAvatar: null, connectedAccountPoweredByText: null };
obj = { paddingHorizontal: 10, paddingVertical: require("semanticColor").FORM_ROW_VERTICAL_PADDING / 2 };
createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj[4] = createCacheKey;
obj[5] = { color: ThemesDefault.colors.TEXT_SUBTLE };
let obj2 = { color: ThemesDefault.colors.TEXT_SUBTLE };
let items = [{ rotate: "135deg" }];
obj[6] = { height: 24, width: 24, transform: items, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj3 = { height: 24, width: 24, transform: items, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj[7] = { alignSelf: "flex-start", margin: 4, height: 16, width: 16, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj[8] = { marginLeft: 4, height: 16, width: 16 };
obj[9] = { position: "absolute", left: 0, top: 0 };
obj[10] = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" };
let obj4 = { alignSelf: "flex-start", margin: 4, height: 16, width: 16, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj[11] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj[12] = { flex: 1, flexDirection: "row", alignItems: "center", marginTop: 4 };
let obj5 = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj[13] = { flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, marginTop: 12 };
obj[14] = { marginRight: 4 };
obj[15] = { marginTop: -4, alignItems: "center", flexDirection: "row" };
let closure_17 = createCacheKey.createStyles(obj);
let closure_18 = importAllResult.memo(ConnectedUserAccount);
let closure_19 = importAllResult.memo(ConnectedApplicationUserRoleAccount);
let closure_20 = [];
let closure_21 = [];
let obj6 = { flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, marginTop: 12 };
let result = require("set").fileFinishedImporting("modules/user_profile/native/LegacyUserProfileConnections.tsx");

export default function LegacyUserProfileConnections(user) {
  user = user.user;
  let id = user;
  importDefault = undefined;
  let obj = id(theme[33]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_9.getUserProfile(id.id));
  importDefault = stateFromStores;
  obj1 = id(theme[33]);
  const items1 = [closure_8];
  let prop;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => obj.hidePersonalInformation);
  if (stateFromStores != null) {
    prop = stateFromStores.applicationRoleConnections;
  }
  const items2 = [prop];
  const memo = importAllResult.useMemo(() => {
    let prop;
    if (_undefined != null) {
      prop = _undefined.applicationRoleConnections;
    }
    if (prop == null) {
      prop = closure_1_21;
    }
    return prop;
  }, items2);
  let connectedAccounts;
  if (stateFromStores != null) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  const items3 = [connectedAccounts];
  const memo1 = importAllResult.useMemo(() => {
    let connectedAccounts;
    if (_undefined != null) {
      connectedAccounts = _undefined.connectedAccounts;
    }
    if (connectedAccounts == null) {
      connectedAccounts = closure_1_20;
    }
    return connectedAccounts;
  }, items3);
  id = undefined;
  importDefault = undefined;
  theme = undefined;
  let tmpResult = tmp(tmp2[32]);
  importDefault = tmpResult.useThemeContext().theme;
  tmpResult = tmp(tmp2[33]);
  const items4 = [closure_6];
  theme = tmpResult.useStateFromStores(items4, () => closure_6.locale);
  const mapped = memo.map((applicationRoleConnection) => {
    obj = { children: closure_1_14(closure_1_19, obj) };
    obj = { applicationRoleConnection, theme: c1, locale: theme, style: id };
    return closure_1_14(React.Fragment, obj, arg1);
  });
  id = user.id;
  importDefault = undefined;
  theme = undefined;
  importAllResult = undefined;
  closure_4 = undefined;
  theme = id(theme[32]).useThemeContext().theme;
  const obj3 = importAllResult;
  const tmpResult1 = id(theme[32]);
  const items5 = [closure_6];
  importAllResult = id(theme[33]).useStateFromStores(items5, () => closure_6.locale);
  const tmpResult2 = id(theme[33]);
  closure_4 = id(theme[34]).usePlatformAllowed({ forUserProfile: true });
  const found = memo1.filter((type) => {
    const value = _undefined(theme[14]).get(type.type);
    let tmp2 = null != value;
    if (tmp2) {
      tmp2 = callback(value);
    }
    return tmp2;
  });
  let tmp17Result = null;
  if (!stateFromStores1) {
    tmp17Result = null;
    if (0 !== memo1.length) {
      let tmp10 = null != mapped;
      if (tmp10) {
        tmp10 = mapped.length > 0;
      }
      if (tmp10) {
        obj = { title: null, showContainer: true, children: null };
        const intl = tmp(tmp2[26]).intl;
        obj[0] = intl.string(tmp(tmp2[26]).t.PHjkRE);
        obj[2] = mapped;
        tmp10 = callback(importDefault(tmp2[35]), obj);
        const tmp13 = importDefault(tmp2[35]);
      }
      obj = { children: null };
      const items6 = [tmp10, ];
      obj1 = { title: null, showContainer: true, children: null };
      const intl2 = tmp(tmp2[26]).intl;
      obj1[0] = intl2.string(tmp(tmp2[26]).t["3fe7U5"]);
      obj1[2] = tmp8;
      items6[1] = callback(importDefault(tmp2[35]), obj1);
      obj[0] = items6;
      tmp17Result = closure_15(closure_16, obj);
      const tmp16 = importDefault(tmp2[35]);
      const tmp17 = closure_15;
      const tmp18 = closure_16;
    }
  }
  return tmp17Result;
};
export { ConnectedUserAccount };
export { ConnectedApplicationUserRoleAccount };
export const useAppplicationRoleConnectionItems = function useAppplicationRoleConnectionItems(arr) {
  const _require = arg1;
  const theme = _require(4204).useThemeContext().theme;
  const obj = _require(4204);
  const items = [closure_6];
  dependencyMap = _require(586).useStateFromStores(items, () => closure_6.locale);
  return arr.map((applicationRoleConnection) => {
    obj = { children: closure_1_14(closure_1_19, obj) };
    obj = { applicationRoleConnection, theme: c1, locale: theme, style: id };
    return closure_1_14(React.Fragment, obj, arg1);
  });
};
export const useConnectedAccountItems = function useConnectedAccountItems(arr) {
  const _require = arg1;
  closure_1 = arg2;
  theme = _require(theme[32]).useThemeContext().theme;
  let obj = _require(theme[32]);
  const items = [closure_6];
  closure_3 = _require(theme[33]).useStateFromStores(items, () => closure_6.locale);
  const obj2 = _require(theme[33]);
  closure_4 = _require(theme[34]).usePlatformAllowed({ forUserProfile: true });
  const found = arr.filter((type) => {
    const value = _undefined(theme[14]).get(type.type);
    let tmp2 = null != value;
    if (tmp2) {
      tmp2 = callback(value);
    }
    return tmp2;
  });
  return found.map((account) => {
    obj = { children: closure_1_14(closure_1_18, obj) };
    obj = { account, theme, locale: React, userId: closure_0, style: closure_1 };
    return closure_1_14(React.Fragment, obj, arg1);
  });
};