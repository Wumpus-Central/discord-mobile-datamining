// === Module 12713: GuildInvite ===

// Module 12713 (GuildInvite)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 4971 */;
import GroupIcon from "GroupIcon" /* 5089 */;
import TableRow from "TableRow" /* 5605 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9820 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9847 */;
import InstantInviteRowDefault from "InstantInviteRow" /* 9893 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12708 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9821 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9833 */;

require = fn;
function SeeMoreFooter(openInviteSheet) {
  let obj = { icon: null, onPress: null, label: null, end: true };
  obj = { style: closure_21().friendIcon, children: closure_1_19(GroupIcon.GroupIcon, { size: "sm" }) };
  obj.icon = closure_1_19(timestampProducer, obj);
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
  let tmp6Result = null;
  if (0 !== suggestions.length) {
    let obj = { style: tmp.suggestionsContainer, children: null };
    obj = {
      data: tmp2,
      renderItem(arg0) {
          ({ item, index } = arg0);
          return closure_2_19(InstantInviteRowDefault, { row: item, code: code.code, start: 0 === index });
        },
      contentContainerStyle: tmp.suggestionRowsContainer,
      ListFooterComponent: null,
      ItemSeparatorComponent: null,
      keyExtractor: null
    };
    tmp6Result = null;
    if (suggestions.length > 6) {
      obj = { openInviteSheet: openInviteSheet.openInviteSheet };
      tmp6Result = tmp6(SeeMoreFooter, obj);
    }
    obj.ListFooterComponent = tmp6Result;
    obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
      return closure_2_19(timestampProducer, { style: separator.separator });
    };
    obj.keyExtractor = function keyExtractor(item) {
      return item.item.id;
    };
    obj.children = closure_19(closure_7, obj);
    tmp6Result = tmp6(closure_6, obj);
  }
  return tmp6Result;
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, FlatList: closure_7, StyleSheet } = get_ActivityIndicator);
let closure_8 = fn(9894).useInstantInviteSendStates;
const CreateGuildModalStates = fn(6980).CreateGuildModalStates;
const Constants = fn(1074);
({ AnalyticEvents: closure_14, AnalyticsSections: closure_15, InstantInviteSources: closure_16, Permissions: closure_17, SearchTypes: closure_18 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, description: null, headerImage: null, linkContainer: null, linkButton: null, linkButtonIcon: null, inviteDetail: null, shareButton: null, suggestionsContainer: null, friendIcon: null, suggestionRowsContainer: null, separator: null };
createStyles = { marginTop: fn(5682).NAV_BAR_HEIGHT, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center" };
createStyles.container = createStyles;
createStyles.header = { marginBottom: 8 };
createStyles.description = { lineHeight: 18, marginBottom: 8, paddingHorizontal: 16, textAlign: "center" };
createStyles.headerImage = { marginVertical: 16 };
createStyles.linkContainer = { paddingHorizontal: 16, width: "100%" };
createStyles.linkButton = { marginTop: 16, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 12, justifyContent: "space-between" };
let obj1 = { marginTop: 16, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 12, justifyContent: "space-between" };
createStyles.linkButtonIcon = { flexShrink: 0, marginLeft: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.inviteDetail = { marginTop: 8 };
createStyles.shareButton = { marginVertical: 16 };
createStyles.suggestionsContainer = { width: "100%", flex: 1, alignContent: "flex-start" };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, height: 32, width: 32, padding: 8, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xxl };
createStyles.friendIcon = size;
createStyles.suggestionRowsContainer = { marginHorizontal: 12 };
let obj2 = { flexShrink: 0, marginLeft: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.separator = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginStart: nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING };
let closure_21 = createStyles.createStyles(createStyles);
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
  let obj = flag(navigation[19]);
  navigation = obj.useNavigation();
  let obj1 = flag(navigation[20]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  let obj2 = ref;
  ref = ref.useRef(null);
  const tmp7 = isScreenReaderEnabled(ref.useState(false), 2);
  const first = tmp7[0];
  closure_6 = tmp7[1];
  let obj3 = flag(navigation[21]);
  const items = [closure_10];
  const stateFromStores = obj3.useStateFromStores(items, () => closure_10.getInvite());
  let obj4 = flag(navigation[21]);
  const items1 = [closure_10, channel, GuildChannelStore];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    const inviteSettings = closure_10.getInviteSettings();
    let channelId;
    if (inviteSettings != null) {
      channelId = inviteSettings.channelId;
    }
    if (null != channelId) {
      return channel.getChannel(channelId);
    } else {
      const guildId = obj.getGuildId();
      defaultChannel = null;
      if (null != guildId) {
        defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants4.CREATE_INSTANT_INVITE);
      }
      return defaultChannel;
    }
    obj = closure_10;
  });
  const items2 = [isScreenReaderEnabled, stateFromStores];
  const effect = ref.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items2);
  const first1 = isScreenReaderEnabled(ref.useState(() => inviteSuggestionRows.getInviteSuggestionRows()), 1)[0];
  const tmp12 = stateFromStores1();
  channel = tmp12;
  onClose(navigation[23])(() => {
    const obj = { omitUserIds: new Set(), channel: stateFromStores1 };
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
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
    let obj = NavigatorHeader;
    let intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (first) {
      let stringResult = string(t.i4jeWR);
    } else {
      stringResult = string(t["5Wxrcd"]);
    }
    obj = {
      headerRight: obj.getHeaderTextButton(stringResult, () => {
        const AccessibilityAnnouncer = flag(navigation[26]).AccessibilityAnnouncer;
        const intl = flag(navigation[17]).intl;
        AccessibilityAnnouncer.announce(intl.string(flag(navigation[17]).t["FY/yLY"]));
        closure_1_1();
        onClose(navigation[14]);
        const obj = { flow_type: constants3.GUILD_CREATE_MODAL, from_step: constants.GUILD_INVITE, to_step: "modal_closed", skip: !first };
        obj.track(constants2.USER_FLOW_TRANSITION, obj);
      }),
      headerLeft() {
        return null;
      }
    };
    navigation.setOptions(obj);
  }, items4);
  let code;
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
  const items6 = [stateFromStores1, , ];
  let code1;
  const callback = obj2.useCallback(() => {
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
  const callback1 = obj2.useCallback(() => {
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
        obj = { invite: stateFromStores, suggestions: first1, openInviteSheet: tmp24 };
        tmp27 = closure_19(GuildInviteSuggestionRows, obj);
      }
      const rect = { top: true, left: true, right: true, style: tmp.container, children: null };
      obj = { ref, style: tmp.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      let intl = tmp2(tmp3[17]).intl;
      obj.children = intl.string(tmp2(tmp3[17]).t.OZ1qhO);
      const items8 = [closure_19(tmp2(tmp3[32]).Text, obj), , , , ];
      obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = tmp2(tmp3[17]).intl;
      obj1.children = intl2.string(tmp2(tmp3[17]).t.eU2ZaK);
      items8[1] = closure_19(tmp2(tmp3[32]).Text, obj1);
      let tmp29Result = !tmp20;
      if (!tmp20) {
        obj2 = { source: tmp13(tmp3[33]), resizeMode: "contain", style: tmp.headerImage };
        tmp29Result = tmp29(first, obj2);
      }
      items8[2] = tmp29Result;
      obj3 = { style: tmp.linkContainer, children: null };
      obj4 = { style: tmp.linkButton, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl3 = tmp2(tmp3[17]).intl;
      obj4.accessibilityLabel = intl3.string(tmp2(tmp3[17]).t["3XVNyt"]);
      obj4.onPress = function onPress() {
        instant_invite_InstantInviteUtils.handleCopy(stateFromStores.code, stateFromStores1, constants2.GUILD_CREATE);
        closure_6(true);
      };
      const obj5 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: { flexShrink: 1 }, children: tmp17Result };
      const items9 = [closure_19(tmp2(tmp3[32]).Text, obj5), ];
      const obj6 = { source: tmp13(tmp3[36]), style: tmp.linkButtonIcon };
      items9[1] = closure_19(tmp2(tmp3[35]).Icon, obj6);
      obj4.children = items9;
      const items10 = [closure_20(tmp2(tmp3[34]).PressableOpacity, obj4), , ];
      const obj7 = { style: tmp.inviteDetail, children: null };
      const obj8 = {
        channel: stateFromStores1,
        canEditInvite: true,
        callbackActionSheet: callback,
        onEdit() {
              if (flag) {
                onClose();
              }
            },
        source: constants2.GUILD_CREATE
      };
      obj7.children = closure_19(tmp13(tmp3[37]), obj8);
      items10[1] = closure_19(closure_6, obj7);
      const obj9 = { style: tmp.shareButton, children: null };
      const obj10 = { text: null, onPress: null };
      const intl4 = tmp2(tmp3[17]).intl;
      obj10.text = intl4.string(tmp2(tmp3[17]).t.Ej3B3Y);
      obj10.onPress = callback1;
      obj9.children = closure_19(tmp2(tmp3[38]).Button, obj10);
      items10[2] = closure_19(closure_6, obj9);
      obj3.children = items10;
      items8[3] = closure_20(closure_6, obj3);
      items8[4] = tmp27;
      rect.children = items8;
      return closure_20(tmp2(tmp3[31]).SafeAreaPaddingView, rect);
    }
  }
  return null;
};