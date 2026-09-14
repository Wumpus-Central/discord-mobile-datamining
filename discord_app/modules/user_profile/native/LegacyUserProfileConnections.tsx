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
        obj1 = { style: null, source: null };
        obj1.style = tmp.connectedAccountOpenHide;
        obj1.source = tmp20(tmp21[18]);
        tmp28 = jsx(tmp23(tmp21[17]).Icon, obj1);
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
        obj31 = { style: null, children: null };
        obj31.style = tmp.verifiedCheckContainer;
        tmp37 = jsx;
        obj32 = { style: null, size: null, source: null, color: null };
        obj32.style = tmp.verifiedCheck;
        obj32.size = tmp23(tmp21[17]).Icon.Sizes.REFRESH_SMALL_16;
        obj32.source = tmp20(tmp21[21]);
        obj32.color = tmp33;
        items = [,];
        items[0] = jsx(tmp23(tmp21[17]).Icon, obj32);
        obj33 = { style: null, size: null, source: null, color: null };
        obj33.style = tmp.verifiedCheck;
        obj33.size = tmp23(tmp21[17]).Icon.Sizes.REFRESH_SMALL_16;
        obj33.source = tmp20(tmp21[22]);
        obj33.color = WHITE;
        items[1] = jsx(tmp23(tmp21[17]).Icon, obj33);
        obj31.children = items;
        tmp34 = jsxs(View, obj31);
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
          let obj2 = {
            href: tmp,
            trusted: account.type !== constants.DOMAIN,
            onConfirm() {
              account(4816).trackWithMetadata(constants.CONNECTED_ACCOUNT_VIEWED, {
                platform_type: type.type,
                other_user_id,
              });
              const obj = account(4816);
              const obj2 = { platform_type: type.type, other_user_id };
              userId(4331).openURL(platformUserUrl);
            },
          };
          MaskedLinkUtils.handleClick(obj2);
        }
      }, items3);
      if (null != platformUserUrl) {
        PressableOpacity = tmp23(tmp21[30]).PressableOpacity;
      } else {
        PressableOpacity = Pressable;
      }
      tmp42 = jsx;
      obj34 = {
        accessibilityLabel: null,
        accessibilityRole: "button",
        onPress: null,
        onLongPress: null,
        children: null,
      };
      obj34.accessibilityLabel = memo;
      tmp43 = undefined;
      if (null != platformUserUrl) {
        tmp43 = callback1;
      }
      obj34.onPress = tmp43;
      obj34.onLongPress = callback;
      tmp44 = View;
      obj35 = { style: null, children: null };
      items4 = [,];
      items4[0] = tmp.connectedAccountContainer;
      items4[1] = style;
      obj35.style = items4;
      tmp45 = jsxs;
      obj36 = { style: null, children: null };
      obj36.style = tmp.connectedAccount;
      obj37 = { size: null, source: null, disableColor: true };
      obj37.size = tmp23(tmp21[17]).Icon.Sizes.MEDIUM;
      obj37.source = source;
      items5 = [, ,];
      items5[0] = tmp42(tmp23(tmp21[17]).Icon, obj37);
      obj38 = { style: null, children: null };
      obj38.style = tmp.connectedAccountNameContainer;
      obj39 = { style: null, children: null };
      obj39.style = tmp.connectedAccountName;
      obj40 = { variant: "text-md/semibold", style: null, children: null };
      obj40.style = tmp.connectedAccountNameText;
      obj40.children = account.name;
      items6 = [,];
      items6[0] = tmp42(tmp23(tmp21[31]).Text, obj40);
      items6[1] = tmp34;
      obj39.children = items6;
      items7 = [, ,];
      items7[0] = jsxs(View, obj39);
      tmp42Result = null;
      if (null != createdAtDate) {
        obj41 = { variant: "heading-deprecated-12/medium", style: null, children: null };
        obj41.style = tmp.connectedAccountNameCreatedAtText;
        intl = tmp23(tmp21[26]).intl;
        obj42 = { date: null };
        obj42.date = createdAtDate;
        obj41.children = intl.format(tmp23(tmp21[26]).t["9rfonh"], obj42);
        tmp42Result = tmp42(tmp23(tmp21[31]).Text, obj41);
      }
      items7[1] = tmp42Result;
      tmp42Result1 = null;
      if (null != redditMetadataItems) {
        num = 0;
        tmp42Result1 = null;
        if (redditMetadataItems.length > 0) {
          obj43 = { style: null, children: null };
          obj43.style = tmp.connectedAccountChildren;
          obj43.children = redditMetadataItems;
          tmp42Result1 = tmp42(tmp44, obj43);
        }
      }
      items7[2] = tmp42Result1;
      obj38.children = items7;
      items5[1] = tmp45(tmp44, obj38);
      items5[2] = tmp28;
      obj36.children = items5;
      obj35.children = tmp45(tmp44, obj36);
      obj34.children = tmp42(tmp44, obj35);
      return tmp42(PressableOpacity, obj34);
    }
    tmp28 = null;
    if (null != platformUserUrl) {
      tmp29 = jsx;
      obj44 = { style: null, source: null };
      obj44.style = tmp.connectedAccountOpenLink;
      obj44.source = tmp20(tmp21[19]);
      tmp28 = jsx(tmp23(tmp21[17]).Icon, obj44);
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
    items = [,];
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
    items1 = [, , ,];
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
          const obj2 = { style: tmp3.connectedAccountPoweredByAvatar, user: null, size: null, guildId: "Array" };
          const tmp12 = new UserRecord(applicationRoleConnection.application.bot);
          obj2.user = tmp12;
          obj2.size = native.AvatarSizes.SIZE_16;
          tmp5 = closure_2_14(native.Avatar, obj2);
        }
        const items = [
          tmp5,
          closure_2_14(Text_Text.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: applicationRoleConnection.application.name,
          }),
        ];
        obj.children = items;
        return __initData(hasOwnProperty, obj);
      },
    };
    obj17.children = intl.format(tmp2(tmp3[26]).t.zIT9YA, obj18);
    obj16.children = tmp8(tmp2(tmp3[31]).Text, obj17);
    items2 = [,];
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
const Constants = fn(1074);
({ AnalyticEvents: c10, PlatformTypes: closure_11, ThemeTypes: closure_12 } = Constants);
const MetadataFields = fn(5489).MetadataFields;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(4636);
let obj = {
  connectedAccountContainer: { paddingHorizontal: 10, paddingVertical: fn(1180).FORM_ROW_VERTICAL_PADDING / 2 },
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
let obj3 = { paddingHorizontal: 10, paddingVertical: fn(1180).FORM_ROW_VERTICAL_PADDING / 2 };
obj.connectedAccountNameText = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
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
let obj5 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.metadataItem = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.appConnectionNameContainer = { flex: 1, flexDirection: "row", alignItems: "center", marginTop: 4 };
let obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
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
  const theme = user(4347).useThemeContext().theme;
  const tmpResult = user(4347);
  const items4 = [LocaleStore];
  closure_129_2 = user(504).useStateFromStores(items4, () => LocaleStore.locale);
  const mapped = memo.map((applicationRoleConnection, index) => {
    const obj = {
      children: closure_2_14(closure_19, { applicationRoleConnection, theme: stateFromStores, locale, style: user }),
    };
    return closure_2_14(noop.Fragment, obj, index);
  });
  const id = user.id;
  closure_130_1 = undefined;
  const tmpResult5 = user(504);
  const theme2 = user(4347).useThemeContext().theme;
  const tmpResult6 = user(4347);
  const items5 = [LocaleStore];
  closure_130_3 = user(504).useStateFromStores(items5, () => LocaleStore.locale);
  const tmpResult7 = user(504);
  closure_130_4 = user(7606).usePlatformAllowed({ forUserProfile: true });
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
        tmp10 = closure_14(stateFromStores(11712), obj4);
        const tmp13 = stateFromStores(11712);
      }
      const obj5 = { children: null };
      const items6 = [tmp10];
      const obj6 = { title: null, showContainer: true, children: null };
      const intl2 = tmp(1114).intl;
      obj6.title = intl2.string(tmp(1114).t["3fe7U5"]);
      obj6.children = tmp8;
      items6[1] = closure_14(stateFromStores(11712), obj6);
      obj5.children = items6;
      tmp17Result = closure_15(closure_16, obj5);
      const tmp16 = stateFromStores(11712);
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
    const obj = {
      children: closure_2_14(closure_19, { applicationRoleConnection, theme: stateFromStores, locale, style: user }),
    };
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
    const obj = { children: closure_2_14(closure_18, { account, theme, locale, userId, style }) };
    return closure_2_14(noop.Fragment, obj, index);
  });
};
