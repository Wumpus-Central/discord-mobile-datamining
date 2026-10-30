// === Module 14267: GuildInvite ===

// Module 14267 (GuildInvite)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 6016 */;
import TableRow from "TableRow" /* 6969 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import _mod7288 from "module_7288" /* 7288 */;
import GroupIcon from "GroupIcon" /* 8653 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9099 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9131 */;
import InstantInviteRowDefault from "InstantInviteRow" /* 9179 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 14227 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9100 */;
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9114 */;

require = fn;
function SeeMoreFooter(openInviteSheet) {
  const obj = { icon: null, onPress: null, label: null, end: true };
  const tmp = closure_19();
  obj.icon = closure_1_17(hasOwnProperty, { style: closure_19().friendIcon, children: closure_1_17(GroupIcon.GroupIcon, { size: "sm" }) });
  obj.onPress = openInviteSheet.openInviteSheet;
  const intl = util.intl;
  obj.label = intl.string(util.t.zrLIIz);
  return closure_1_17(TableRow.TableRow, obj);
}
function GuildInviteSuggestionRows(openInviteSheet) {
  ({ invite: require, suggestions } = openInviteSheet);
  const tmp = closure_19();
  dependencyMap = tmp;
  [][0] = suggestions;
  let tmp6Result2 = null;
  if (0 !== suggestions.length) {
    const obj2 = { style: tmp.suggestionsContainer, children: null };
    const obj3 = {
      data: tmp2,
      renderItem: function renderSuggestionRow(arg0) {
          ({ item, index } = arg0);
          return closure_2_17(InstantInviteRowDefault, { row: item, code: code.code, start: 0 === index });
        },
      contentContainerStyle: tmp.suggestionRowsContainer,
      ListFooterComponent: null,
      ItemSeparatorComponent: null,
      keyExtractor: null,
      getItemType: null
    };
    let tmp6Result = null;
    if (suggestions.length > 6) {
      const obj = { openInviteSheet: openInviteSheet.openInviteSheet };
      tmp6Result = closure_17(SeeMoreFooter, obj);
    }
    obj3.ListFooterComponent = tmp6Result;
    obj3.ItemSeparatorComponent = function ItemSeparatorComponent() {
      return closure_2_17(hasOwnProperty, { style: separator.separator });
    };
    obj3.keyExtractor = function keyExtractor(type) {
      return "" + type.type + ":" + type.item.id;
    };
    obj3.getItemType = function getItemType(type) {
      return type.type;
    };
    obj2.children = closure_17(_mod7288.FlashList, obj3);
    tmp6Result2 = closure_17(closure_5, obj2);
  }
  return tmp6Result2;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
let closure_6 = fn(9180).useInstantInviteSendStates;
const CreateGuildModalStates = fn(7141).CreateGuildModalStates;
const Constants = fn(1072);
({ AnalyticEvents: closure_12, AnalyticsSections: map1, InstantInviteSources: closure_14, Permissions: closure_15, SearchTypes: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { marginTop: fn(5581).NAV_BAR_HEIGHT, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center" }, header: { marginBottom: 8 }, description: { lineHeight: 18, marginBottom: 8, paddingHorizontal: 16, textAlign: "center" }, headerIllustration: { alignItems: "center", marginTop: 8, marginBottom: -32 }, linkContainer: { paddingHorizontal: 16, width: "100%", zIndex: 1 }, linkButton: null, linkButtonIcon: null, inviteDetail: null, shareButton: null, suggestionsContainer: null, friendIcon: null, suggestionRowsContainer: null, separator: null };
let obj3 = { marginTop: fn(5581).NAV_BAR_HEIGHT, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center" };
obj2.linkButton = { marginTop: 16, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 12, justifyContent: "space-between" };
let obj4 = { marginTop: 16, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 12, justifyContent: "space-between" };
obj2.linkButtonIcon = { flexShrink: 0, marginLeft: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.inviteDetail = { marginTop: 8 };
obj2.shareButton = { marginVertical: 16 };
obj2.suggestionsContainer = { width: "100%", flex: 1, alignContent: "flex-start" };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, height: 32, width: 32, padding: 8, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xxl };
obj2.friendIcon = size;
let obj5 = { flexShrink: 0, marginLeft: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.suggestionRowsContainer = { paddingHorizontal: nativeDefault.space.PX_12 };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj2.separator = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginStart: nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING };
let closure_19 = createStyles.createStyles(obj2);
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
  let stateFromStores1;
  let defaultChannel;
  let inviteSuggestionRows;
  let tmp = closure_19();
  navigation = flag(navigation[20]).useNavigation();
  let obj = flag(navigation[20]);
  const isScreenReaderEnabled = flag(navigation[21]).useIsScreenReaderEnabled();
  ref = ref.useRef(null);
  const tmp7 = isScreenReaderEnabled(ref.useState(false), 2);
  const first = tmp7[0];
  closure_6 = tmp7[1];
  let obj2 = flag(navigation[21]);
  const items = [stateFromStores1];
  const stateFromStores = flag(navigation[22]).useStateFromStores(items, () => stateFromStores1.getInvite());
  let obj4 = flag(navigation[22]);
  const items1 = [stateFromStores1, stateFromStores, defaultChannel];
  stateFromStores1 = flag(navigation[22]).useStateFromStores(items1, () => {
    const inviteSettings = stateFromStores1.getInviteSettings();
    let channelId;
    if (inviteSettings != null) {
      channelId = inviteSettings.channelId;
    }
    if (null != channelId) {
      return stateFromStores.getChannel(channelId);
    } else {
      const guildId = stateFromStores1.getGuildId();
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
  const first1 = isScreenReaderEnabled(ref.useState(() => inviteSuggestionRows.getInviteSuggestionRows()), 1)[0];
  const tmp12 = closure_6();
  defaultChannel = tmp12;
  onClose(navigation[24])(() => {
    const obj2 = { omitUserIds: null, channel: null };
    const obj = InviteSuggestionsActionCreators;
    obj2.omitUserIds = new Set();
    obj2.channel = stateFromStores1;
    const inviteSuggestions = obj.loadInviteSuggestions(obj2);
  });
  const items3 = [tmp12, stateFromStores];
  const effect1 = ref.useEffect(() => {
    if (null != stateFromStores) {
      if (null != defaultChannel[tmp.code]) {
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
        const AccessibilityAnnouncer = flag(navigation[27]).AccessibilityAnnouncer;
        const intl = flag(navigation[17]).intl;
        AccessibilityAnnouncer.announce(intl.string(flag(navigation[17]).t["FY/yLY"]));
        closure_1_1();
        onClose(navigation[14]).track(constants2.USER_FLOW_TRANSITION, { flow_type: constants3.GUILD_CREATE_MODAL, from_step: constants.GUILD_INVITE, to_step: "modal_closed", skip: !first });
      }),
      headerLeft() {
        return null;
      }
    });
    const obj2 = {
      headerRight: NavigatorHeader.getHeaderTextButton(stringResult, () => {
        const AccessibilityAnnouncer = flag(navigation[27]).AccessibilityAnnouncer;
        const intl = flag(navigation[17]).intl;
        AccessibilityAnnouncer.announce(intl.string(flag(navigation[17]).t["FY/yLY"]));
        closure_1_1();
        onClose(navigation[14]).track(constants2.USER_FLOW_TRANSITION, { flow_type: constants3.GUILD_CREATE_MODAL, from_step: constants.GUILD_INVITE, to_step: "modal_closed", skip: !first });
      }),
      headerLeft() {
        return null;
      }
    };
  }, items4);
  let code;
  const obj5 = flag(navigation[22]);
  if (stateFromStores != null) {
    code = stateFromStores.code;
  }
  const tmp17Result = onClose(navigation[28])(code);
  inviteSuggestionRows = tmp17Result;
  let tmp20 = null != first1;
  if (tmp20) {
    tmp20 = first1.length > 0;
  }
  const items5 = [stateFromStores1];
  const items6 = [stateFromStores1, , ];
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
        tmp27 = closure_17(GuildInviteSuggestionRows, obj6);
      }
      const rect = { top: true, left: true, right: true, style: tmp.container, children: null };
      const obj7 = { ref, style: tmp.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      let intl = tmp2(tmp3[17]).intl;
      obj7.children = intl.string(tmp2(tmp3[17]).t.OZ1qhO);
      const items8 = [closure_17(tmp2(tmp3[33]).Text, obj7), , , , ];
      const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = tmp2(tmp3[17]).intl;
      obj8.children = intl2.string(tmp2(tmp3[17]).t.eU2ZaK);
      items8[1] = closure_17(tmp2(tmp3[33]).Text, obj8);
      let tmp29Result = !tmp20;
      if (!tmp20) {
        const obj9 = { style: tmp.headerIllustration, children: closure_17(tmp2(tmp3[34]).HelloWumpusSpotIllustration, { width: 252, accessible: false }) };
        tmp29Result = closure_17(first, obj9);
      }
      items8[2] = tmp29Result;
      const obj10 = { style: tmp.linkContainer, children: null };
      const obj11 = { style: tmp.linkButton, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl3 = tmp2(tmp3[17]).intl;
      obj11.accessibilityLabel = intl3.string(tmp2(tmp3[17]).t["3XVNyt"]);
      obj11.onPress = function onPress() {
        instant_invite_InstantInviteUtils.handleCopy(stateFromStores.code, stateFromStores1, constants2.GUILD_CREATE);
        closure_6(true);
      };
      const obj12 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: { flexShrink: 1 }, children: tmp17Result };
      const items9 = [closure_17(tmp2(tmp3[33]).Text, obj12), ];
      const obj13 = { source: tmp13(tmp3[37]), style: tmp.linkButtonIcon };
      items9[1] = closure_17(tmp2(tmp3[36]).Icon, obj13);
      obj11.children = items9;
      const items10 = [closure_18(tmp2(tmp3[35]).PressableOpacity, obj11), , ];
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
        source: constants2.GUILD_CREATE
      };
      obj14.children = closure_17(tmp13(tmp3[38]), obj15);
      items10[1] = closure_17(first, obj14);
      const obj16 = { style: tmp.shareButton, children: null };
      const obj17 = { text: null, onPress: null };
      const intl4 = tmp2(tmp3[17]).intl;
      obj17.text = intl4.string(tmp2(tmp3[17]).t.Ej3B3Y);
      obj17.onPress = callback1;
      obj16.children = closure_17(tmp2(tmp3[39]).Button, obj17);
      items10[2] = closure_17(first, obj16);
      obj10.children = items10;
      items8[3] = closure_18(first, obj10);
      items8[4] = tmp27;
      rect.children = items8;
      return closure_18(tmp2(tmp3[32]).SafeAreaPaddingView, rect);
    }
  }
  return null;
};