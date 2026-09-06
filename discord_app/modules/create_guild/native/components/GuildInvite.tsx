// === Module 12713: SeeMoreFooter ===

// Module 12713 (SeeMoreFooter)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import GroupIcon from "GroupIcon" /* 5089 */;
import TableRowInner from "TableRowInner" /* 5605 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { useInstantInviteSendStates as closure_8 } from "setSendState" /* 9894 */;
import closure_9 from "ensureGuildLoaded" /* 1957 */;
import closure_10 from "updateWithLatestInvite" /* 9821 */;
import closure_11 from "comparator" /* 2012 */;
import closure_12 from "compareRowsByMatchScore" /* 9833 */;
import { CreateGuildModalStates } from "NUXGuildTemplatesAnalytics" /* 6980 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function SeeMoreFooter(openInviteSheet) {
  let obj = { icon: null, onPress: null, label: null, end: true };
  obj = { style: callback2().friendIcon, children: callback(GroupIcon.GroupIcon, { size: "sm" }) };
  obj[0] = callback(closure_6, obj);
  obj[1] = openInviteSheet.openInviteSheet;
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.zrLIIz);
  return callback(TableRowInner.TableRow, obj);
}
function GuildInviteSuggestionRows(openInviteSheet) {
  ({ invite: require, suggestions } = openInviteSheet);
  closure_2 = undefined;
  const tmp = callback2();
  closure_2 = tmp;
  [][0] = suggestions;
  let tmp6Result = null;
  if (0 !== suggestions.length) {
    let obj = { style: null, children: null };
    obj[0] = tmp.suggestionsContainer;
    obj = { data: null, renderItem: null, contentContainerStyle: null, ListFooterComponent: null, ItemSeparatorComponent: null, keyExtractor: null };
    obj[0] = tmp2;
    obj[1] = function renderItem(arg0) {
      ({ item, index } = arg0);
      return closure_1_19(suggestions(separator[18]), { row: item, code: code.code, start: 0 === index });
    };
    obj[2] = tmp.suggestionRowsContainer;
    tmp6Result = null;
    if (suggestions.length > 6) {
      obj = { openInviteSheet: null };
      obj[0] = openInviteSheet.openInviteSheet;
      tmp6Result = tmp6(SeeMoreFooter, obj);
    }
    obj[3] = tmp6Result;
    obj[4] = function ItemSeparatorComponent() {
      return closure_1_19(closure_1_6, { style: separator.separator });
    };
    obj[5] = function keyExtractor(item) {
      return item.item.id;
    };
    obj[1] = closure_19(closure_7, obj);
    tmp6Result = tmp6(closure_6, obj);
    const tmp7 = closure_6;
    const tmp8 = closure_7;
  }
  return tmp6Result;
}
({ Image: c5, View: closure_6, FlatList: error, StyleSheet } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, AnalyticsSections: closure_15, InstantInviteSources: closure_16, Permissions: closure_17, SearchTypes: closure_18 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
createCacheKey = { container: null, header: null, description: null, headerImage: null, linkContainer: null, linkButton: null, linkButtonIcon: null, inviteDetail: null, shareButton: null, suggestionsContainer: null, friendIcon: null, suggestionRowsContainer: null, separator: null };
createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 8 };
createCacheKey[2] = { lineHeight: 18, marginBottom: 8, paddingHorizontal: 16, textAlign: "center" };
createCacheKey[3] = { marginVertical: 16 };
createCacheKey[4] = { paddingHorizontal: 16, width: "100%" };
createCacheKey[5] = { marginTop: 16, flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.xs, padding: 12, justifyContent: "space-between" };
let obj1 = { marginTop: 16, flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.xs, padding: 12, justifyContent: "space-between" };
createCacheKey[6] = { flexShrink: 0, marginLeft: 8, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[7] = { marginTop: 8 };
createCacheKey[8] = { marginVertical: 16 };
createCacheKey[9] = { width: "100%", flex: 1, alignContent: "flex-start" };
let obj2 = { flexShrink: 0, marginLeft: 8, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[10] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, height: 32, width: 32, padding: 8, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.xxl };
createCacheKey[11] = { marginHorizontal: 12 };
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, height: 32, width: 32, padding: 8, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.xxl };
createCacheKey[12] = { height: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginStart: ThemesDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING };
let closure_21 = createCacheKey.createStyles(createCacheKey);
let obj4 = { height: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginStart: ThemesDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING };
let result = require("set").fileFinishedImporting("modules/create_guild/native/components/GuildInvite.tsx");

export default function GuildInvite(closeOnEditInviteLink) {
  let flag = closeOnEditInviteLink.closeOnEditInviteLink;
  if (flag === undefined) {
    flag = true;
  }
  const onClose = closeOnEditInviteLink.onClose;
  let navigation;
  let isScreenReaderEnabled;
  let ref;
  let first;
  closure_6 = undefined;
  let stateFromStores;
  let stateFromStores1;
  closure_9 = undefined;
  closure_10 = undefined;
  let tmp = callback2();
  let obj = flag(navigation[19]);
  navigation = obj.useNavigation();
  obj1 = flag(navigation[20]);
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  let obj2 = ref;
  ref = ref.useRef(null);
  const tmp7 = isScreenReaderEnabled(ref.useState(false), 2);
  first = tmp7[0];
  closure_6 = tmp7[1];
  let obj3 = flag(navigation[21]);
  const items = [closure_10];
  stateFromStores = obj3.useStateFromStores(items, () => store.getInvite());
  let obj4 = flag(navigation[21]);
  const items1 = [closure_10, closure_9, closure_11];
  stateFromStores1 = obj4.useStateFromStores(items1, () => {
    const inviteSettings = store.getInviteSettings();
    let channelId;
    if (inviteSettings != null) {
      channelId = inviteSettings.channelId;
    }
    if (null != channelId) {
      return channel.getChannel(channelId);
    } else {
      const guildId = obj.getGuildId();
      let defaultChannel = null;
      if (null != guildId) {
        defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants.CREATE_INSTANT_INVITE);
      }
      return defaultChannel;
    }
    obj = store;
  });
  const items2 = [isScreenReaderEnabled, stateFromStores];
  const effect = ref.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = flag(navigation[22]);
      obj = { ref: null, delay: 100 };
      obj[0] = ref;
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items2);
  const first1 = isScreenReaderEnabled(ref.useState(() => inviteSuggestionRows.getInviteSuggestionRows()), 1)[0];
  const tmp12 = stateFromStores1();
  closure_9 = tmp12;
  onClose(navigation[23])(() => {
    let obj = flag(navigation[24]);
    obj = { omitUserIds: new Set(), channel: stateFromStores1 };
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
  });
  const items3 = [tmp12, stateFromStores];
  const effect1 = ref.useEffect(() => {
    if (null != stateFromStores) {
      if (null != channel[tmp.code]) {
        callback(true);
      }
    }
  }, items3);
  const items4 = [navigation, onClose, first];
  const layoutEffect = ref.useLayoutEffect(() => {
    let obj = flag(navigation[25]);
    let intl = flag(navigation[17]).intl;
    const string = intl.string;
    const t = flag(navigation[17]).t;
    if (first) {
      let stringResult = string(t.i4jeWR);
    } else {
      stringResult = string(t["5Wxrcd"]);
    }
    obj = {
      headerRight: obj.getHeaderTextButton(stringResult, () => {
        const AccessibilityAnnouncer = closure_1_0(closure_1_2[26]).AccessibilityAnnouncer;
        const intl = closure_1_0(closure_1_2[17]).intl;
        AccessibilityAnnouncer.announce(intl.string(closure_1_0(closure_1_2[17]).t["FY/yLY"]));
        callback();
        let obj = closure_1_1(closure_1_2[14]);
        obj = { flow_type: closure_1_15.GUILD_CREATE_MODAL, from_step: closure_1_13.GUILD_INVITE, to_step: "modal_closed", skip: !closure_5 };
        obj.track(closure_1_14.USER_FLOW_TRANSITION, obj);
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
      const result = onClose(navigation[28]).openGuildInviteScreen(tmp);
      const obj = onClose(navigation[28]);
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
      const obj = flag(navigation[29]);
      const tmp2 = flag;
      const tmp3 = navigation;
      obj.handleOpenShareSheet(code, tmp, flag(navigation[29]).getShareMessage(closure_10));
      callback(true);
      const tmp2Result = flag(navigation[29]);
    }
  }, items6);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      let tmp27 = tmp20;
      if (tmp20) {
        obj = { invite: null, suggestions: null, openInviteSheet: null };
        obj[0] = stateFromStores;
        obj[1] = first1;
        obj[2] = tmp24;
        tmp27 = callback(GuildInviteSuggestionRows, obj);
      }
      obj = { top: true, left: true, right: true, style: null, children: null };
      obj[3] = tmp.container;
      obj1 = { ref: null, style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      obj1[0] = ref;
      obj1[1] = tmp.header;
      let intl = tmp2(tmp3[17]).intl;
      obj1[5] = intl.string(tmp2(tmp3[17]).t.OZ1qhO);
      const items8 = [callback(tmp2(tmp3[32]).Text, obj1), , , , ];
      obj2 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj2[0] = tmp.description;
      const intl2 = tmp2(tmp3[17]).intl;
      obj2[3] = intl2.string(tmp2(tmp3[17]).t.eU2ZaK);
      items8[1] = callback(tmp2(tmp3[32]).Text, obj2);
      let tmp29Result = !tmp20;
      if (!tmp20) {
        obj3 = { source: null, resizeMode: "contain", style: null };
        obj3[0] = tmp13(tmp3[33]);
        obj3[2] = tmp.headerImage;
        tmp29Result = tmp29(first, obj3);
      }
      items8[2] = tmp29Result;
      obj4 = { style: null, children: null };
      obj4[0] = tmp.linkContainer;
      const obj5 = { style: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      obj5[0] = tmp.linkButton;
      const intl3 = tmp2(tmp3[17]).intl;
      obj5[2] = intl3.string(tmp2(tmp3[17]).t["3XVNyt"]);
      obj5[3] = function onPress() {
        flag(navigation[29]).handleCopy(stateFromStores.code, stateFromStores1, closure_1_16.GUILD_CREATE);
        callback(true);
      };
      const obj6 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: null, children: null };
      obj6[2] = { flexShrink: 1 };
      obj6[3] = tmp17Result;
      const items9 = [callback(tmp2(tmp3[32]).Text, obj6), ];
      const obj7 = { source: null, style: null };
      obj7[0] = tmp13(tmp3[36]);
      obj7[1] = tmp.linkButtonIcon;
      items9[1] = callback(tmp2(tmp3[35]).Icon, obj7);
      obj5[4] = items9;
      const items10 = [closure_20(tmp2(tmp3[34]).PressableOpacity, obj5), , ];
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.inviteDetail;
      const obj9 = { channel: null, canEditInvite: true, callbackActionSheet: null, onEdit: null, source: null };
      obj9[0] = stateFromStores1;
      obj9[2] = callback;
      obj9[3] = function onEdit() {
        if (flag) {
          onClose();
        }
      };
      obj9[4] = constants.GUILD_CREATE;
      obj8[1] = callback(tmp13(tmp3[37]), obj9);
      items10[1] = callback(closure_6, obj8);
      const obj10 = { style: null, children: null };
      obj10[0] = tmp.shareButton;
      const obj11 = { text: null, onPress: null };
      const intl4 = tmp2(tmp3[17]).intl;
      obj11[0] = intl4.string(tmp2(tmp3[17]).t.Ej3B3Y);
      obj11[1] = callback1;
      obj10[1] = callback(tmp2(tmp3[38]).Button, obj11);
      items10[2] = callback(closure_6, obj10);
      obj4[1] = items10;
      items8[3] = closure_20(closure_6, obj4);
      items8[4] = tmp27;
      obj[4] = items8;
      return closure_20(tmp2(tmp3[31]).SafeAreaPaddingView, obj);
    }
  }
  return null;
};