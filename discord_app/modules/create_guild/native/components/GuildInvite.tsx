// discord_app/modules/create_guild/native/components/GuildInvite.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import setAccessibilityFocus from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import GroupIcon from "../../../../design/components/Icon/native/redesign/generated/GroupIcon.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import InviteSuggestionsActionCreators from "../../../../actions/InviteSuggestionsActionCreators.tsx";
import InstantInviteRowDefault from "../../../instant_invite/native/components/InstantInviteRow.tsx";
import CreateGuildModalActionCreatorsDefault from "../CreateGuildModalActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import InviteSuggestionsStore from "../../../../stores/InviteSuggestionsStore.tsx";

require = fn;
function SeeMoreFooter(openInviteSheet) {
  const obj = { icon: null, onPress: null, label: null, end: true };
  const tmp = closure_21();
  obj.icon = closure_1_19(timestampProducer, {
    style: closure_21().friendIcon,
    children: closure_1_19(GroupIcon.GroupIcon, { size: "sm" }),
  });
  obj.onPress = openInviteSheet.openInviteSheet;
  const intl = util.intl;
  obj.label = intl.string(util.t.zrLIIz);
  return closure_1_19(TableRow.TableRow, obj);
}
function GuildInviteSuggestionRows(openInviteSheet) {
  ({ invite: require, suggestions } = openInviteSheet);
  const tmp = closure_21();
  const separator = tmp;
  [][0] = suggestions;
  let tmp6Result2 = null;
  if (0 !== suggestions.length) {
    const obj2 = { style: tmp.suggestionsContainer, children: null };
    const obj3 = {
      data: tmp2,
      renderItem(arg0) {
        ({ item, index } = arg0);
        return closure_2_19(InstantInviteRowDefault, { row: item, code: code.code, start: 0 === index });
      },
      contentContainerStyle: tmp.suggestionRowsContainer,
      ListFooterComponent: null,
      ItemSeparatorComponent: null,
      keyExtractor: null,
    };
    let tmp6Result = null;
    if (suggestions.length > 6) {
      const obj = { openInviteSheet: openInviteSheet.openInviteSheet };
      tmp6Result = closure_19(SeeMoreFooter, obj);
    }
    obj3.ListFooterComponent = tmp6Result;
    obj3.ItemSeparatorComponent = function ItemSeparatorComponent() {
      return closure_2_19(timestampProducer, { style: separator.separator });
    };
    obj3.keyExtractor = function keyExtractor(item) {
      return item.item.id;
    };
    obj2.children = closure_19(closure_7, obj3);
    tmp6Result2 = closure_19(closure_6, obj2);
  }
  return tmp6Result2;
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, FlatList: closure_7, StyleSheet } = get_ActivityIndicator);
let closure_8 = fn(10024).useInstantInviteSendStates;
const CreateGuildModalStates = fn(7081).CreateGuildModalStates;
const Constants = fn(1074);
({
  AnalyticEvents: closure_14,
  AnalyticsSections: closure_15,
  InstantInviteSources: closure_16,
  Permissions: closure_17,
  SearchTypes: closure_18,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  container: {
    marginTop: fn(5763).NAV_BAR_HEIGHT,
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    alignItems: "center",
  },
  header: { marginBottom: 8 },
  description: { lineHeight: 18, marginBottom: 8, paddingHorizontal: 16, textAlign: "center" },
  headerImage: { marginVertical: 16 },
  linkContainer: { paddingHorizontal: 16, width: "100%" },
  linkButton: null,
  linkButtonIcon: null,
  inviteDetail: null,
  shareButton: null,
  suggestionsContainer: null,
  friendIcon: null,
  suggestionRowsContainer: null,
  separator: null,
};
let obj3 = {
  marginTop: fn(5763).NAV_BAR_HEIGHT,
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  alignItems: "center",
};
obj2.linkButton = {
  marginTop: 16,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  padding: 12,
  justifyContent: "space-between",
};
let obj4 = {
  marginTop: 16,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  padding: 12,
  justifyContent: "space-between",
};
obj2.linkButtonIcon = { flexShrink: 0, marginLeft: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.inviteDetail = { marginTop: 8 };
obj2.shareButton = { marginVertical: 16 };
obj2.suggestionsContainer = { width: "100%", flex: 1, alignContent: "flex-start" };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  height: 32,
  width: 32,
  padding: 8,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.xxl,
};
obj2.friendIcon = size;
obj2.suggestionRowsContainer = { marginHorizontal: 12 };
let obj5 = { flexShrink: 0, marginLeft: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.separator = {
  height: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginStart: nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING,
};
let closure_21 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/components/GuildInvite.tsx");

export default function GuildInvite(closeOnEditInviteLink) {
  let flag = closeOnEditInviteLink.closeOnEditInviteLink;
  if (flag === undefined) {
    flag = true;
  }
  const onClose = closeOnEditInviteLink.onClose;
  let navigation;
  let ref;
  let channel;
  closure_10 = undefined;
  let tmp = closure_21();
  navigation = flag(navigation[19]).useNavigation();
  let obj = flag(navigation[19]);
  const isScreenReaderEnabled = flag(navigation[20]).useIsScreenReaderEnabled();
  ref = ref.useRef(null);
  const tmp7 = isScreenReaderEnabled(ref.useState(false), 2);
  const first = tmp7[0];
  closure_6 = tmp7[1];
  let obj2 = flag(navigation[20]);
  const items = [closure_10];
  const stateFromStores = flag(navigation[21]).useStateFromStores(items, () => closure_10.getInvite());
  let obj4 = flag(navigation[21]);
  const items1 = [closure_10, channel, GuildChannelStore];
  const stateFromStores1 = flag(navigation[21]).useStateFromStores(items1, () => {
    const inviteSettings = closure_10.getInviteSettings();
    let channelId;
    if (inviteSettings != null) {
      channelId = inviteSettings.channelId;
    }
    if (null != channelId) {
      return channel.getChannel(channelId);
    } else {
      const guildId = closure_10.getGuildId();
      defaultChannel = null;
      if (null != guildId) {
        defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants4.CREATE_INSTANT_INVITE);
      }
      return defaultChannel;
    }
  });
  const items2 = [isScreenReaderEnabled, stateFromStores];
  const effect = ref.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
    }
  }, items2);
  const first1 = isScreenReaderEnabled(
    ref.useState(() => inviteSuggestionRows.getInviteSuggestionRows()),
    1,
  )[0];
  const tmp12 = stateFromStores1();
  channel = tmp12;
  onClose(navigation[23])(() => {
    const obj2 = { omitUserIds: null, channel: null };
    const obj = InviteSuggestionsActionCreators;
    obj2.omitUserIds = new Set();
    obj2.channel = stateFromStores1;
    const inviteSuggestions = obj.loadInviteSuggestions(obj2);
  });
  const items3 = [tmp12, stateFromStores];
  const effect1 = ref.useEffect(() => {
    if (null != stateFromStores) {
      if (null != channel[tmp.code]) {
        closure_6(true);
      }
    }
  }, items3);
  const items4 = [navigation, onClose, first];
  const layoutEffect = ref.useLayoutEffect(() => {
    let intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (first) {
      let stringResult = string(t.i4jeWR);
    } else {
      stringResult = string(t["5Wxrcd"]);
    }
    navigation.setOptions({
      headerRight: NavigatorHeader.getHeaderTextButton(stringResult, () => {
        const AccessibilityAnnouncer = flag(navigation[26]).AccessibilityAnnouncer;
        const intl = flag(navigation[17]).intl;
        AccessibilityAnnouncer.announce(intl.string(flag(navigation[17]).t["FY/yLY"]));
        closure_1_1();
        onClose(navigation[14]).track(constants2.USER_FLOW_TRANSITION, {
          flow_type: constants3.GUILD_CREATE_MODAL,
          from_step: constants.GUILD_INVITE,
          to_step: "modal_closed",
          skip: !first,
        });
      }),
      headerLeft() {
        return null;
      },
    });
    const obj2 = {
      headerRight: NavigatorHeader.getHeaderTextButton(stringResult, () => {
        const AccessibilityAnnouncer = flag(navigation[26]).AccessibilityAnnouncer;
        const intl = flag(navigation[17]).intl;
        AccessibilityAnnouncer.announce(intl.string(flag(navigation[17]).t["FY/yLY"]));
        closure_1_1();
        onClose(navigation[14]).track(constants2.USER_FLOW_TRANSITION, {
          flow_type: constants3.GUILD_CREATE_MODAL,
          from_step: constants.GUILD_INVITE,
          to_step: "modal_closed",
          skip: !first,
        });
      }),
      headerLeft() {
        return null;
      },
    };
  }, items4);
  let code;
  const obj5 = flag(navigation[21]);
  if (stateFromStores != null) {
    code = stateFromStores.code;
  }
  const tmp17Result = onClose(navigation[27])(code);
  closure_10 = tmp17Result;
  let tmp20 = null != first1;
  if (tmp20) {
    tmp20 = first1.length > 0;
  }
  const items5 = [stateFromStores1];
  const items6 = [stateFromStores1, ,];
  let code1;
  const callback = obj3.useCallback(() => {
    if (null != stateFromStores1) {
      const result = CreateGuildModalActionCreatorsDefault.openGuildInviteScreen(tmp);
    }
  }, items5);
  if (stateFromStores != null) {
    code1 = stateFromStores.code;
  }
  items6[1] = code1;
  items6[2] = tmp17Result;
  const items7 = [stateFromStores, stateFromStores1];
  const callback1 = obj3.useCallback(() => {
    if (null != stateFromStores1) {
      let code;
      if (stateFromStores != null) {
        code = stateFromStores.code;
      }
      const obj = instant_invite_InstantInviteUtils;
      obj.handleOpenShareSheet(code, tmp, instant_invite_InstantInviteUtils.getShareMessage(closure_10));
      closure_6(true);
      const tmp2Result = instant_invite_InstantInviteUtils;
    }
  }, items6);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      let tmp27 = tmp20;
      if (tmp20) {
        const obj6 = { invite: stateFromStores, suggestions: first1, openInviteSheet: tmp24 };
        tmp27 = closure_19(GuildInviteSuggestionRows, obj6);
      }
      const rect = { top: true, left: true, right: true, style: tmp.container, children: null };
      const obj7 = {
        ref,
        style: tmp.header,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      let intl = tmp2(tmp3[17]).intl;
      obj7.children = intl.string(tmp2(tmp3[17]).t.OZ1qhO);
      const items8 = [closure_19(tmp2(tmp3[32]).Text, obj7), , , ,];
      const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = tmp2(tmp3[17]).intl;
      obj8.children = intl2.string(tmp2(tmp3[17]).t.eU2ZaK);
      items8[1] = closure_19(tmp2(tmp3[32]).Text, obj8);
      let tmp29Result = !tmp20;
      if (!tmp20) {
        const obj9 = { source: tmp13(tmp3[33]), resizeMode: "contain", style: tmp.headerImage };
        tmp29Result = closure_19(first, obj9);
      }
      items8[2] = tmp29Result;
      const obj10 = { style: tmp.linkContainer, children: null };
      const obj11 = {
        style: tmp.linkButton,
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        children: null,
      };
      const intl3 = tmp2(tmp3[17]).intl;
      obj11.accessibilityLabel = intl3.string(tmp2(tmp3[17]).t["3XVNyt"]);
      obj11.onPress = function onPress() {
        instant_invite_InstantInviteUtils.handleCopy(stateFromStores.code, stateFromStores1, constants2.GUILD_CREATE);
        closure_6(true);
      };
      const obj12 = {
        variant: "text-sm/medium",
        color: "mobile-text-heading-primary",
        style: { flexShrink: 1 },
        children: tmp17Result,
      };
      const items9 = [closure_19(tmp2(tmp3[32]).Text, obj12)];
      const obj13 = { source: tmp13(tmp3[36]), style: tmp.linkButtonIcon };
      items9[1] = closure_19(tmp2(tmp3[35]).Icon, obj13);
      obj11.children = items9;
      const items10 = [closure_20(tmp2(tmp3[34]).PressableOpacity, obj11), ,];
      const obj14 = { style: tmp.inviteDetail, children: null };
      const obj15 = {
        channel: stateFromStores1,
        canEditInvite: true,
        callbackActionSheet: callback,
        onEdit() {
          if (flag) {
            onClose();
          }
        },
        source: constants2.GUILD_CREATE,
      };
      obj14.children = closure_19(tmp13(tmp3[37]), obj15);
      items10[1] = closure_19(closure_6, obj14);
      const obj16 = { style: tmp.shareButton, children: null };
      const obj17 = { text: null, onPress: null };
      const intl4 = tmp2(tmp3[17]).intl;
      obj17.text = intl4.string(tmp2(tmp3[17]).t.Ej3B3Y);
      obj17.onPress = callback1;
      obj16.children = closure_19(tmp2(tmp3[38]).Button, obj17);
      items10[2] = closure_19(closure_6, obj16);
      obj10.children = items10;
      items8[3] = closure_20(closure_6, obj10);
      items8[4] = tmp27;
      rect.children = items8;
      return closure_20(tmp2(tmp3[31]).SafeAreaPaddingView, rect);
    }
  }
  return null;
}
