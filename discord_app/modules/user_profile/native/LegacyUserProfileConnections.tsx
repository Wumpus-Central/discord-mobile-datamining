// === Module 11567: LegacyUserProfileConnections ===

// Module 11567 (LegacyUserProfileConnections)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import native from "native" /* 1188 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import Text_Text from "Text/Text" /* 5619 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import PlatformsDefault from "Platforms" /* 6568 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8931 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2063 */;
import UserRecord from "UserRecord" /* 1398 */;
import StreamerModeStore from "StreamerModeStore" /* 5064 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;

const require = globalThis.__r;

require = fn;
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
      obj2 = account(closure_2[12]);
      tmp5 = MetadataFields;
      createdAtDate = obj2.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], locale);
    }
    if (showMetadata) {
      type = account.type;
      tmp6 = PlatformTypes;
      if (PlatformTypes.REDDIT === type) {
        tmp19 = account;
        tmp20 = closure_2;
        obj8 = account(closure_2[13]);
        redditMetadataItems = obj8.generateRedditMetadataItems(metadata, tmp.metadataItem);
      } else if (tmp6.STEAM === type) {
        tmp17 = account;
        tmp18 = closure_2;
        obj7 = account(closure_2[13]);
        redditMetadataItems = obj7.generateSteamMetadataItems(metadata, tmp.metadataItem);
      } else if (tmp6.LETTERBOXD === type) {
        tmp15 = account;
        tmp16 = closure_2;
        obj6 = account(closure_2[13]);
        redditMetadataItems = obj6.generateLetterboxdMetadataItems(metadata, tmp.metadataItem);
      } else {
        if (tmp6.BLUESKY !== type) {
          if (tmp6.MASTODON !== type) {
            if (tmp6.TWITTER !== type) {
              if (tmp6.PAYPAL === type) {
                tmp9 = account;
                tmp10 = closure_2;
                obj4 = account(closure_2[13]);
                redditMetadataItems = obj4.generatePaypalMetadataItems(metadata, tmp.metadataItem);
              } else if (tmp6.EBAY === type) {
                tmp7 = account;
                tmp8 = closure_2;
                obj3 = account(closure_2[13]);
                redditMetadataItems = obj3.generateEbayMetadataItems(metadata, tmp.metadataItem);
              } else if (tmp6.TIKTOK === type) {
                tmp49 = account;
                tmp50 = closure_2;
                obj30 = account(closure_2[13]);
                redditMetadataItems = obj30.generateTikTokMetadataItems(metadata, tmp.metadataItem);
              }
            }
          }
        }
        tmp11 = account;
        tmp12 = closure_2;
        obj5 = account(closure_2[13]);
        twitterMetadataItems = obj5.generateTwitterMetadataItems(metadata, tmp.metadataItem);
        tmp14 = MetadataFields;
        str = "1";
        redditMetadataItems = twitterMetadataItems;
        if ("1" === metadata[MetadataFields.TWITTER_VERIFIED]) {
          tmp51 = userId;
          obj31 = userId(tmp12[14]);
          color = obj31.get(tmp6.TWITTER).color;
          redditMetadataItems = twitterMetadataItems;
        }
      }
    }
    tmp21 = userId;
    tmp22 = closure_2;
    obj9 = userId(closure_2[14]);
    value = obj9.get(account.type);
    closure_2 = value;
    tmp24 = account;
    obj10 = account(closure_2[15]);
    obj11 = account(closure_2[16]);
    tmp25 = value == null;
    if (obj11.isThemeDark(theme)) {
      darkPNG = undefined;
      if (!tmp25) {
        darkPNG = value.icon.darkPNG;
      }
      lightPNG = darkPNG;
    } else if (!tmp25) {
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
        tmp31 = jsx;
        obj1 = { style: null, source: null };
        obj1.style = tmp.connectedAccountOpenHide;
        obj1.source = tmp21(tmp22[18]);
        tmp29 = jsx(tmp24(tmp22[17]).Icon, obj1);
      }
      tmp24Result = tmp24(tmp22[20]);
      token = tmp24Result.useToken(tmp21(tmp22[11]).colors.BACKGROUND_MOD_MUTED, theme);
      tmp24Result1 = tmp24(tmp22[20]);
      if (null != color) {
        tmp33 = ThemeTypes;
        theme = ThemeTypes.DARK;
      }
      WHITE = tmp24Result1.useToken(tmp21(tmp22[11]).colors.INTERACTIVE_TEXT_ACTIVE, theme);
      tmp34 = token;
      if (null != color) {
        WHITE = tmp21(tmp22[11]).unsafe_rawColors.WHITE;
        tmp34 = color;
      }
      tmp35 = null;
      if (account.verified) {
        tmp36 = jsxs;
        tmp37 = View;
        obj32 = { style: null, children: null };
        obj32.style = tmp.verifiedCheckContainer;
        tmp38 = jsx;
        obj33 = { style: null, size: null, source: null, color: null };
        obj33.style = tmp.verifiedCheck;
        obj33.size = tmp24(tmp22[17]).Icon.Sizes.REFRESH_SMALL_16;
        obj33.source = tmp21(tmp22[21]);
        obj33.color = tmp34;
        items = [, ];
        items[0] = jsx(tmp24(tmp22[17]).Icon, obj33);
        obj34 = { style: null, size: null, source: null, color: null };
        obj34.style = tmp.verifiedCheck;
        obj34.size = tmp24(tmp22[17]).Icon.Sizes.REFRESH_SMALL_16;
        obj34.source = tmp21(tmp22[22]);
        obj34.color = WHITE;
        items[1] = jsx(tmp24(tmp22[17]).Icon, obj34);
        obj32.children = items;
        tmp35 = jsxs(View, obj32);
      }
      obj19 = closure_3;
      items1 = [];
      items1[0] = account.name;
      name = undefined;
      callback = closure_3.useCallback(() => {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        ClipboardUtils.copy(account.name);
        const result1 = ToastUtils.presentCopiedToClipboard();
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
      }, items2);
      callback1 = obj19.useCallback(() => {
        if (null != platformUserUrl) {
          let obj2 = {
            href: tmp,
            trusted: account.type !== constants.DOMAIN,
            onConfirm() {
                account(5755).trackWithMetadata(constants.CONNECTED_ACCOUNT_VIEWED, { platform_type: type.type, other_user_id });
                const obj = account(5755);
                const obj2 = { platform_type: type.type, other_user_id };
                userId(5704).openURL(platformUserUrl);
              }
          };
          MaskedLinkUtils.handleClick(obj2);
        }
      }, items3);
      if (null != platformUserUrl) {
        PressableOpacity = tmp24(tmp22[30]).PressableOpacity;
      } else {
        PressableOpacity = Pressable;
      }
      tmp43 = jsx;
      obj35 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, onLongPress: null, children: null };
      obj35.accessibilityLabel = memo;
      tmp44 = undefined;
      if (null != platformUserUrl) {
        tmp44 = callback1;
      }
      obj35.onPress = tmp44;
      obj35.onLongPress = callback;
      tmp45 = View;
      obj36 = { style: null, children: null };
      items4 = [, ];
      items4[0] = tmp.connectedAccountContainer;
      items4[1] = style;
      obj36.style = items4;
      tmp46 = jsxs;
      obj37 = { style: null, children: null };
      obj37.style = tmp.connectedAccount;
      obj38 = { size: null, source: null, disableColor: true };
      obj38.size = tmp24(tmp22[17]).Icon.Sizes.MEDIUM;
      obj38.source = source;
      items5 = [, , ];
      items5[0] = tmp43(tmp24(tmp22[17]).Icon, obj38);
      obj39 = { style: null, children: null };
      obj39.style = tmp.connectedAccountNameContainer;
      obj40 = { style: null, children: null };
      obj40.style = tmp.connectedAccountName;
      obj41 = { variant: "text-md/semibold", style: null, children: null };
      obj41.style = tmp.connectedAccountNameText;
      obj41.children = account.name;
      items6 = [, ];
      items6[0] = tmp43(tmp24(tmp22[31]).Text, obj41);
      items6[1] = tmp35;
      obj40.children = items6;
      items7 = [, , ];
      items7[0] = jsxs(View, obj40);
      tmp43Result = null;
      if (null != createdAtDate) {
        obj42 = { variant: "heading-deprecated-12/medium", style: null, children: null };
        obj42.style = tmp.connectedAccountNameCreatedAtText;
        intl = tmp24(tmp22[26]).intl;
        obj43 = { date: null };
        obj43.date = createdAtDate;
        obj42.children = intl.format(tmp24(tmp22[26]).t["9rfonh"], obj43);
        tmp43Result = tmp43(tmp24(tmp22[31]).Text, obj42);
      }
      items7[1] = tmp43Result;
      tmp43Result1 = null;
      if (null != redditMetadataItems) {
        num = 0;
        tmp43Result1 = null;
        if (redditMetadataItems.length > 0) {
          obj44 = { style: null, children: null };
          obj44.style = tmp.connectedAccountChildren;
          obj44.children = redditMetadataItems;
          tmp43Result1 = tmp43(tmp45, obj44);
        }
      }
      items7[2] = tmp43Result1;
      obj39.children = items7;
      items5[1] = tmp46(tmp45, obj39);
      items5[2] = tmp29;
      obj37.children = items5;
      obj36.children = tmp46(tmp45, obj37);
      obj35.children = tmp43(tmp45, obj36);
      return tmp43(PressableOpacity, obj35);
    }
    tmp29 = null;
    if (null != platformUserUrl) {
      tmp30 = jsx;
      obj45 = { style: null, source: null };
      obj45.style = tmp.connectedAccountOpenLink;
      obj45.source = tmp21(tmp22[19]);
      tmp29 = jsx(tmp24(tmp22[17]).Icon, obj45);
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
    obj = applicationRoleConnection(closure_2[13]);
    roleConnectionMetadataItems = obj.generateRoleConnectionMetadataItems(applicationRoleConnection);
    tmp4 = jsxs;
    tmp5 = View;
    obj1 = { style: null, children: null };
    items = [, ];
    items[0] = tmp.connectedAccountContainer;
    items[1] = global.style;
    obj1.style = items;
    tmp6 = null;
    if (null != applicationRoleConnection.platform_name) {
      tmp7 = jsx;
      obj11 = { variant: "eyebrow", color: "interactive-text-default", children: null };
      obj11.children = applicationRoleConnection.platform_name;
      tmp6 = jsx(tmp2(tmp3[31]).Text, obj11);
    }
    items1 = [, , , ];
    items1[0] = tmp6;
    tmp8 = jsx;
    obj12 = { style: tmp.appConnectionNameContainer, children: null };
    tmp8Result = null;
    if (null != applicationRoleConnection.platform_username) {
      obj13 = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
      obj13.children = applicationRoleConnection.platform_username;
      tmp8Result = tmp8(tmp2(tmp3[31]).Text, obj13);
    }
    obj12.children = tmp8Result;
    items1[1] = tmp8(tmp5, obj12);
    tmp8Result1 = null;
    if (null != roleConnectionMetadataItems) {
      num = 0;
      tmp8Result1 = null;
      if (roleConnectionMetadataItems.length > 0) {
        obj14 = { style: null, children: null };
        obj14.style = tmp.connectedAccountChildren;
        obj14.children = roleConnectionMetadataItems;
        tmp8Result1 = tmp8(tmp5, obj14);
      }
    }
    items1[2] = tmp8Result1;
    obj15 = { style: { flexDirection: "row" }, children: null };
    obj16 = { style: tmp.connectedAccountPoweredByContainer, children: null };
    obj17 = { variant: "text-xs/normal", color: "text-muted", children: null };
    intl = tmp2(tmp3[26]).intl;
    obj18 = {
      applicationHook() {
            const obj = { style: closure_1.connectedAccountPoweredByText, children: null };
            let tmp5 = null;
            if (null != applicationRoleConnection.application.bot) {
              const obj2 = { style: tmp3.connectedAccountPoweredByAvatar, user: null, size: null, guildId: "a" };
              const tmp12 = new UserRecord(applicationRoleConnection.application.bot);
              obj2.user = tmp12;
              obj2.size = native.AvatarSizes.SIZE_16;
              tmp5 = closure_2_14(native.Avatar, obj2);
            }
            const items = [tmp5, closure_2_14(Text_Text.Text, { variant: "text-xs/normal", color: "text-default", children: applicationRoleConnection.application.name })];
            obj.children = items;
            return __initData(hasOwnProperty, obj);
          }
    };
    obj17.children = intl.format(tmp2(tmp3[26]).t.zIT9YA, obj18);
    obj16.children = tmp8(tmp2(tmp3[31]).Text, obj17);
    items2 = [, ];
    items2[0] = tmp8(tmp5, obj16);
    items2[1] = tmp8(tmp5, { style: { flexGrow: 1 } });
    obj15.children = items2;
    items1[3] = tmp4(tmp5, obj15);
    obj1.children = items1;
    return tmp4(tmp5, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticEvents: c10, PlatformTypes: closure_11, ThemeTypes: closure_12 } = Constants);
const MetadataFields = fn(7343).MetadataFields;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(5009);
let obj = { connectedAccountContainer: { paddingHorizontal: 10, paddingVertical: fn(1192).FORM_ROW_VERTICAL_PADDING / 2 }, connectedAccount: { flexDirection: "row", alignItems: "center" }, connectedAccountNameContainer: { flex: 1, marginLeft: 8 }, connectedAccountName: { flexDirection: "row", alignItems: "center" }, connectedAccountNameText: null, connectedAccountNameCreatedAtText: null, connectedAccountOpenLink: null, connectedAccountOpenHide: null, verifiedCheckContainer: null, verifiedCheck: null, connectedAccountChildren: null, metadataItem: null, appConnectionNameContainer: null, connectedAccountPoweredByContainer: null, connectedAccountPoweredByAvatar: null, connectedAccountPoweredByText: null };
let obj3 = { paddingHorizontal: 10, paddingVertical: fn(1192).FORM_ROW_VERTICAL_PADDING / 2 };
obj.connectedAccountNameText = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.connectedAccountNameCreatedAtText = { color: nativeDefault.colors.TEXT_SUBTLE };
let size = { height: 24, width: 24, transform: null, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let items = [{ rotate: "135deg" }];
size.transform = items;
obj.connectedAccountOpenLink = size;
const size1 = { alignSelf: "flex-start", margin: 4, height: 16, width: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.connectedAccountOpenHide = size1;
obj.verifiedCheckContainer = { marginLeft: 4, height: 16, width: 16 };
obj.verifiedCheck = { position: "absolute", left: 0, top: 0 };
obj.connectedAccountChildren = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" };
let obj5 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.metadataItem = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.appConnectionNameContainer = { flex: 1, flexDirection: "row", alignItems: "center", marginTop: 4 };
let obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.connectedAccountPoweredByContainer = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, marginTop: 12 };
obj.connectedAccountPoweredByAvatar = { marginRight: 4 };
obj.connectedAccountPoweredByText = { marginTop: -4, alignItems: "center", flexDirection: "row" };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = noop.memo(ConnectedUserAccount);
let closure_19 = noop.memo(ConnectedApplicationUserRoleAccount);
let closure_20 = [];
let closure_21 = [];
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/LegacyUserProfileConnections.tsx");

export default function LegacyUserProfileConnections(user) {
  user = user.user;
  const items = [UserProfileStore];
  const stateFromStores = user(504).useStateFromStores(items, () => UserProfileStore.getUserProfile(user.id));
  let obj = user(504);
  const items1 = [StreamerModeStore];
  let prop;
  const stateFromStores1 = user(504).useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  if (stateFromStores != null) {
    prop = stateFromStores.applicationRoleConnections;
  }
  const items2 = [prop];
  const memo = noop.useMemo(() => {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.applicationRoleConnections;
    }
    if (prop == null) {
      prop = closure_21;
    }
    return prop;
  }, items2);
  let connectedAccounts;
  if (stateFromStores != null) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  const items3 = [connectedAccounts];
  const memo1 = noop.useMemo(() => {
    let connectedAccounts;
    if (stateFromStores != null) {
      connectedAccounts = stateFromStores.connectedAccounts;
    }
    if (connectedAccounts == null) {
      connectedAccounts = closure_20;
    }
    return connectedAccounts;
  }, items3);
  closure_129_0 = undefined;
  const obj2 = user(504);
  const theme = user(5075).useThemeContext().theme;
  const tmpResult = user(5075);
  const items4 = [LocaleStore];
  closure_129_2 = user(504).useStateFromStores(items4, () => LocaleStore.locale);
  const mapped = memo.map((applicationRoleConnection, index) => {
    const obj = { children: closure_2_14(closure_19, { applicationRoleConnection, theme: stateFromStores, locale, style: user }) };
    return closure_2_14(noop.Fragment, obj, index);
  });
  const id = user.id;
  closure_130_1 = undefined;
  const tmpResult5 = user(504);
  const theme2 = user(5075).useThemeContext().theme;
  const tmpResult6 = user(5075);
  const items5 = [LocaleStore];
  closure_130_3 = user(504).useStateFromStores(items5, () => LocaleStore.locale);
  const tmpResult7 = user(504);
  closure_130_4 = user(7675).usePlatformAllowed({ forUserProfile: true });
  const found = memo1.filter((type) => {
    value = PlatformsDefault.get(type.type);
    let tmp2 = null != value;
    if (tmp2) {
      tmp2 = closure_1_4(value);
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
        const obj4 = { title: null, showContainer: true, children: null };
        const intl = tmp(1114).intl;
        obj4.title = intl.string(tmp(1114).t.PHjkRE);
        obj4.children = mapped;
        tmp10 = closure_14(stateFromStores(11575), obj4);
        const tmp13 = stateFromStores(11575);
      }
      const obj5 = { children: null };
      const items6 = [tmp10, ];
      const obj6 = { title: null, showContainer: true, children: null };
      const intl2 = tmp(1114).intl;
      obj6.title = intl2.string(tmp(1114).t["3fe7U5"]);
      obj6.children = tmp8;
      items6[1] = closure_14(stateFromStores(11575), obj6);
      obj5.children = items6;
      tmp17Result = closure_15(closure_16, obj5);
      const tmp16 = stateFromStores(11575);
    }
  }
  return tmp17Result;
};
export { ConnectedUserAccount };
export { ConnectedApplicationUserRoleAccount };
export function useAppplicationRoleConnectionItems(arr, arg1) {
  _require = arg1;
  const theme = require("native").useThemeContext().theme;
  const obj = require("native");
  const items = [LocaleStore];
  dependencyMap = require("initialize").useStateFromStores(items, () => LocaleStore.locale);
  return arr.map((applicationRoleConnection, index) => {
    const obj = { children: closure_2_14(closure_19, { applicationRoleConnection, theme: stateFromStores, locale, style: user }) };
    return closure_2_14(noop.Fragment, obj, index);
  });
}
export function useConnectedAccountItems(arr, userId, style) {
  _require = userId;
  theme = require("native").useThemeContext().theme;
  let obj = require("native");
  const items = [LocaleStore];
  locale = require("initialize").useStateFromStores(items, () => LocaleStore.locale);
  const obj2 = require("initialize");
  closure_4 = require("ConnectionsHooks").usePlatformAllowed({ forUserProfile: true });
  const found = arr.filter((type) => {
    value = PlatformsDefault.get(type.type);
    let tmp2 = null != value;
    if (tmp2) {
      tmp2 = closure_1_4(value);
    }
    return tmp2;
  });
  return found.map((account, index) => {
    const obj = { children: closure_2_14(closure_18, { account, theme, locale, userId, style }) };
    return closure_2_14(noop.Fragment, obj, index);
  });
}