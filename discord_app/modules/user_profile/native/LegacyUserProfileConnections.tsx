// discord_app/modules/user_profile/native/LegacyUserProfileConnections.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import MaskedLinkUtils from "../../../utils/MaskedLinkUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import UserRecord from "../../../records/UserRecord.tsx";
import StreamerModeStore from "../../../stores/StreamerModeStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

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
        tmp18 = account;
        tmp19 = closure_2;
        obj8 = account(closure_2[13]);
        redditMetadataItems = obj8.generateRedditMetadataItems(metadata, tmp.metadataItem);
      } else if (tmp6.STEAM === type) {
        tmp16 = account;
        tmp17 = closure_2;
        obj7 = account(closure_2[13]);
        redditMetadataItems = obj7.generateSteamMetadataItems(metadata, tmp.metadataItem);
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
                tmp48 = account;
                tmp49 = closure_2;
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
          tmp15 = userId;
          obj6 = userId(tmp12[14]);
          color = obj6.get(tmp6.TWITTER).color;
          redditMetadataItems = twitterMetadataItems;
        }
      }
    }
    tmp20 = userId;
    tmp21 = closure_2;
    obj9 = userId(closure_2[14]);
    value = obj9.get(account.type);
    closure_2 = value;
    tmp23 = account;
    obj10 = account(closure_2[15]);
    obj11 = account(closure_2[16]);
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
        obj.style = tmp.connectedAccountOpenHide;
        obj.source = tmp20(tmp21[18]);
        tmp28 = jsx(tmp23(tmp21[17]).Icon, obj);
      }
      tmp23Result = tmp23(tmp21[20]);
      token = tmp23Result.useToken(tmp20(tmp21[11]).colors.BACKGROUND_MOD_MUTED, theme);
      tmp23Result1 = tmp23(tmp21[20]);
      if (null != color) {
        tmp32 = ThemeTypes;
        theme = ThemeTypes.DARK;
      }
      WHITE = tmp23Result1.useToken(tmp20(tmp21[11]).colors.INTERACTIVE_TEXT_ACTIVE, theme);
      tmp33 = token;
      if (null != color) {
        WHITE = tmp20(tmp21[11]).unsafe_rawColors.WHITE;
        tmp33 = color;
      }
      tmp34 = null;
      if (account.verified) {
        tmp35 = jsxs;
        tmp36 = View;
        obj1 = { style: null, children: null };
        obj1.style = tmp.verifiedCheckContainer;
        tmp37 = jsx;
        obj2 = { style: null, size: null, source: null, color: null };
        obj2.style = tmp.verifiedCheck;
        obj2.size = tmp23(tmp21[17]).Icon.Sizes.REFRESH_SMALL_16;
        obj2.source = tmp20(tmp21[21]);
        obj2.color = tmp33;
        items = [,];
        items[0] = jsx(tmp23(tmp21[17]).Icon, obj2);
        obj3 = { style: null, size: null, source: null, color: null };
        obj3.style = tmp.verifiedCheck;
        obj3.size = tmp23(tmp21[17]).Icon.Sizes.REFRESH_SMALL_16;
        obj3.source = tmp20(tmp21[22]);
        obj3.color = WHITE;
        items[1] = jsx(tmp23(tmp21[17]).Icon, obj3);
        obj1.children = items;
        tmp34 = jsxs(View, obj1);
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
      items2 = [,];
      items2[0] = name;
      items2[1] = platformUserUrl;
      items3 = [, ,];
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
          let obj = {
            href: tmp,
            trusted: account.type !== constants.DOMAIN,
            onConfirm() {
              account(4740);
              const obj = { platform_type: type.type, other_user_id };
              obj.trackWithMetadata(constants.CONNECTED_ACCOUNT_VIEWED, obj);
              userId(4255).openURL(platformUserUrl);
            },
          };
          obj.handleClick(obj);
        }
      }, items3);
      if (null != platformUserUrl) {
        PressableOpacity = tmp23(tmp21[30]).PressableOpacity;
      } else {
        PressableOpacity = Pressable;
      }
      tmp42 = jsx;
      obj4 = {
        accessibilityLabel: null,
        accessibilityRole: "button",
        onPress: null,
        onLongPress: null,
        children: null,
      };
      obj4.accessibilityLabel = memo;
      tmp43 = undefined;
      if (null != platformUserUrl) {
        tmp43 = callback1;
      }
      obj4.onPress = tmp43;
      obj4.onLongPress = callback;
      tmp44 = View;
      obj5 = { style: null, children: null };
      items4 = [,];
      items4[0] = tmp.connectedAccountContainer;
      items4[1] = style;
      obj5.style = items4;
      tmp45 = jsxs;
      obj6 = { style: null, children: null };
      obj6.style = tmp.connectedAccount;
      obj7 = { size: null, source: null, disableColor: true };
      obj7.size = tmp23(tmp21[17]).Icon.Sizes.MEDIUM;
      obj7.source = source;
      items5 = [, ,];
      items5[0] = tmp42(tmp23(tmp21[17]).Icon, obj7);
      obj8 = { style: null, children: null };
      obj8.style = tmp.connectedAccountNameContainer;
      obj9 = { style: null, children: null };
      obj9.style = tmp.connectedAccountName;
      obj10 = { variant: "text-md/semibold", style: null, children: null };
      obj10.style = tmp.connectedAccountNameText;
      obj10.children = account.name;
      items6 = [,];
      items6[0] = tmp42(tmp23(tmp21[31]).Text, obj10);
      items6[1] = tmp34;
      obj9.children = items6;
      items7 = [, ,];
      items7[0] = jsxs(View, obj9);
      tmp42Result = null;
      if (null != createdAtDate) {
        obj11 = { variant: "heading-deprecated-12/medium", style: null, children: null };
        obj11.style = tmp.connectedAccountNameCreatedAtText;
        intl = tmp23(tmp21[26]).intl;
        obj12 = { date: null };
        obj12.date = createdAtDate;
        obj11.children = intl.format(tmp23(tmp21[26]).t["9rfonh"], obj12);
        tmp42Result = tmp42(tmp23(tmp21[31]).Text, obj11);
      }
      items7[1] = tmp42Result;
      tmp42Result1 = null;
      if (null != redditMetadataItems) {
        num = 0;
        tmp42Result1 = null;
        if (redditMetadataItems.length > 0) {
          obj13 = { style: null, children: null };
          obj13.style = tmp.connectedAccountChildren;
          obj13.children = redditMetadataItems;
          tmp42Result1 = tmp42(tmp44, obj13);
        }
      }
      items7[2] = tmp42Result1;
      obj8.children = items7;
      items5[1] = tmp45(tmp44, obj8);
      items5[2] = tmp28;
      obj6.children = items5;
      obj5.children = tmp45(tmp44, obj6);
      obj4.children = tmp42(tmp44, obj5);
      return tmp42(PressableOpacity, obj4);
    }
    tmp28 = null;
    if (null != platformUserUrl) {
      tmp29 = jsx;
      obj14 = { style: null, source: null };
      obj14.style = tmp.connectedAccountOpenLink;
      obj14.source = tmp20(tmp21[19]);
      tmp28 = jsx(tmp23(tmp21[17]).Icon, obj14);
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
    obj = { style: null, children: null };
    items = [,];
    items[0] = tmp.connectedAccountContainer;
    items[1] = global.style;
    obj.style = items;
    tmp6 = null;
    if (null != applicationRoleConnection.platform_name) {
      tmp7 = jsx;
      obj1 = { variant: "eyebrow", color: "interactive-text-default", children: null };
      obj1.children = applicationRoleConnection.platform_name;
      tmp6 = jsx(tmp2(tmp3[31]).Text, obj1);
    }
    items1 = [, , ,];
    items1[0] = tmp6;
    tmp8 = jsx;
    obj2 = { style: tmp.appConnectionNameContainer, children: null };
    tmp8Result = null;
    if (null != applicationRoleConnection.platform_username) {
      obj3 = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
      obj3.children = applicationRoleConnection.platform_username;
      tmp8Result = tmp8(tmp2(tmp3[31]).Text, obj3);
    }
    obj2.children = tmp8Result;
    items1[1] = tmp8(tmp5, obj2);
    tmp8Result1 = null;
    if (null != roleConnectionMetadataItems) {
      num = 0;
      tmp8Result1 = null;
      if (roleConnectionMetadataItems.length > 0) {
        obj4 = { style: null, children: null };
        obj4.style = tmp.connectedAccountChildren;
        obj4.children = roleConnectionMetadataItems;
        tmp8Result1 = tmp8(tmp5, obj4);
      }
    }
    items1[2] = tmp8Result1;
    obj5 = { style: { flexDirection: "row" }, children: null };
    obj6 = { style: tmp.connectedAccountPoweredByContainer, children: null };
    obj7 = { variant: "text-xs/normal", color: "text-muted", children: null };
    intl = tmp2(tmp3[26]).intl;
    obj8 = {
      applicationHook() {
        let obj = { style: closure_1.connectedAccountPoweredByText, children: null };
        let tmp5 = null;
        if (null != applicationRoleConnection.application.bot) {
          obj = { style: tmp3.connectedAccountPoweredByAvatar, user: null, size: null, guildId: "Array" };
          const tmp12 = new UserRecord(applicationRoleConnection.application.bot);
          obj.user = tmp12;
          obj.size = native.AvatarSizes.SIZE_16;
          tmp5 = closure_2_14(native.Avatar, obj);
        }
        const items = [tmp5];
        obj = {
          variant: "text-xs/normal",
          color: "text-default",
          children: applicationRoleConnection.application.name,
        };
        items[1] = closure_2_14(Text_Text.Text, obj);
        obj.children = items;
        return __initData(hasOwnProperty, obj);
      },
    };
    obj7.children = intl.format(tmp2(tmp3[26]).t.zIT9YA, obj8);
    obj6.children = tmp8(tmp2(tmp3[31]).Text, obj7);
    items2 = [,];
    items2[0] = tmp8(tmp5, obj6);
    items2[1] = tmp8(tmp5, { style: { flexGrow: 1 } });
    obj5.children = items2;
    items1[3] = tmp4(tmp5, obj5);
    obj.children = items1;
    return tmp4(tmp5, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: c10, PlatformTypes: closure_11, ThemeTypes: closure_12 } = Constants);
const MetadataFields = fn(5408).MetadataFields;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
fn(4560);
let obj = {
  connectedAccountContainer: null,
  connectedAccount: { flexDirection: "row", alignItems: "center" },
  connectedAccountNameContainer: { flex: 1, marginLeft: 8 },
  connectedAccountName: { flexDirection: "row", alignItems: "center" },
  connectedAccountNameText: null,
  connectedAccountNameCreatedAtText: null,
  connectedAccountOpenLink: null,
  connectedAccountOpenHide: null,
  verifiedCheckContainer: null,
  verifiedCheck: null,
  connectedAccountChildren: null,
  metadataItem: null,
  appConnectionNameContainer: null,
  connectedAccountPoweredByContainer: null,
  connectedAccountPoweredByAvatar: null,
  connectedAccountPoweredByText: null,
};
obj = { paddingHorizontal: 10, paddingVertical: fn(1182).FORM_ROW_VERTICAL_PADDING / 2 };
obj.connectedAccountContainer = obj;
const createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.connectedAccountNameText = createStyles;
obj.connectedAccountNameCreatedAtText = { color: nativeDefault.colors.TEXT_SUBTLE };
let size = { height: 24, width: 24, transform: null, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let items = [{ rotate: "135deg" }];
size.transform = items;
obj.connectedAccountOpenLink = size;
const size1 = {
  alignSelf: "flex-start",
  margin: 4,
  height: 16,
  width: 16,
  tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
};
obj.connectedAccountOpenHide = size1;
obj.verifiedCheckContainer = { marginLeft: 4, height: 16, width: 16 };
obj.verifiedCheck = { position: "absolute", left: 0, top: 0 };
obj.connectedAccountChildren = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" };
let obj2 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.metadataItem = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.appConnectionNameContainer = { flex: 1, flexDirection: "row", alignItems: "center", marginTop: 4 };
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.connectedAccountPoweredByContainer = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingHorizontal: 8,
  paddingVertical: 4,
  marginTop: 12,
};
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
  let obj = user(504);
  const items = [UserProfileStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserProfileStore.getUserProfile(user.id));
  let obj1 = user(504);
  const items1 = [StreamerModeStore];
  let prop;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
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
  let tmpResult = tmp(4271);
  const theme = tmpResult.useThemeContext().theme;
  tmpResult = tmp(504);
  const items4 = [LocaleStore];
  closure_129_2 = tmpResult.useStateFromStores(items4, () => LocaleStore.locale);
  const mapped = memo.map((applicationRoleConnection, index) => {
    let obj = { children: null };
    obj = { applicationRoleConnection, theme: stateFromStores, locale, style: user };
    obj.children = closure_2_14(closure_19, obj);
    return closure_2_14(noop.Fragment, obj, index);
  });
  const id = user.id;
  closure_130_1 = undefined;
  const theme2 = user(4271).useThemeContext().theme;
  const tmpResult1 = user(4271);
  const items5 = [LocaleStore];
  closure_130_3 = user(504).useStateFromStores(items5, () => LocaleStore.locale);
  const tmpResult2 = user(504);
  closure_130_4 = user(7503).usePlatformAllowed({ forUserProfile: true });
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
        obj = { title: null, showContainer: true, children: null };
        const intl = tmp(1114).intl;
        obj.title = intl.string(tmp(1114).t.PHjkRE);
        obj.children = mapped;
        tmp10 = closure_14(stateFromStores(11582), obj);
        const tmp13 = stateFromStores(11582);
      }
      obj = { children: null };
      const items6 = [tmp10];
      obj1 = { title: null, showContainer: true, children: null };
      const intl2 = tmp(1114).intl;
      obj1.title = intl2.string(tmp(1114).t["3fe7U5"]);
      obj1.children = tmp8;
      items6[1] = closure_14(stateFromStores(11582), obj1);
      obj.children = items6;
      tmp17Result = closure_15(closure_16, obj);
      const tmp16 = stateFromStores(11582);
    }
  }
  return tmp17Result;
}
export { ConnectedUserAccount };
export { ConnectedApplicationUserRoleAccount };
export const useAppplicationRoleConnectionItems = function useAppplicationRoleConnectionItems(arr, arg1) {
  _require = arg1;
  const theme = require("native").useThemeContext().theme;
  const obj = require("native");
  const items = [LocaleStore];
  dependencyMap = require("initialize").useStateFromStores(items, () => LocaleStore.locale);
  return arr.map((applicationRoleConnection, index) => {
    let obj = { children: null };
    obj = { applicationRoleConnection, theme: stateFromStores, locale, style: user };
    obj.children = closure_2_14(closure_19, obj);
    return closure_2_14(noop.Fragment, obj, index);
  });
};
export const useConnectedAccountItems = function useConnectedAccountItems(arr, userId, style) {
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
    let obj = { children: null };
    obj = { account, theme, locale, userId, style };
    obj.children = closure_2_14(closure_18, obj);
    return closure_2_14(noop.Fragment, obj, index);
  });
};
