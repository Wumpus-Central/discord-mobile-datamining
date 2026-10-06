// === Module 12394: GuildInvite ===

// Module 12394 (GuildInvite)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import react_native from "react-native" /* 5786 */;
import GroupIcon from "GroupIcon" /* 5880 */;
import TableRow2 from "TableRow" /* 6000 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6475 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9494 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9521 */;
import InstantInviteRowDefault from "InstantInviteRow" /* 9566 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9567 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12372 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import ChannelStore_mod from "ChannelStore" /* 2051 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9495 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9507 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let defaultChannel, importDefault, invite, navigation, setOptionsResult;

let StyleSheet;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
({ Image: hasOwnProperty, View: metroRequire, FlatList: metroImportDefault, StyleSheet } = react_native2);
let channel = InstantInviteSendStateStore.useInstantInviteSendStates;
let ChannelStore = ChannelStore_mod;
const CreateGuildModalStates = CreateGuildConstants.CreateGuildModalStates;
({ AnalyticEvents: closure_14, AnalyticsSections: closure_15, InstantInviteSources: closure_16, Permissions: closure_17, SearchTypes: closure_18 } = Constants);
({ jsx: closure_19, jsxs: closure_20 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { marginBottom: 8 }, description: { lineHeight: 18, marginBottom: 8, paddingHorizontal: 16, textAlign: "center" }, headerImage: { marginVertical: 16 }, linkContainer: { paddingHorizontal: 16, width: "100%" }, linkButton: obj3, linkButtonIcon: obj4, inviteDetail: { marginTop: 8 }, shareButton: { marginVertical: 16 }, suggestionsContainer: { width: "100%", flex: 1, alignContent: "flex-start" }, friendIcon: size, suggestionRowsContainer: { marginHorizontal: 12 }, separator: obj5 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 16, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 12, justifyContent: "space-between" };
obj4 = { flexShrink: 0, marginLeft: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, height: 32, width: 32, padding: 8, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xxl };
obj5 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginStart: nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING };
let closure_21 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((openInviteSheet) => {
  let first;
  let tmp12;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  openInviteSheet = openInviteSheet.openInviteSheet;
  const tmp4 = closure_21();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_19(GroupIcon.GroupIcon, { size: "sm" });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.friendIcon) {
    const obj2 = { style: tmp4.friendIcon, children: first };
    const tmp11 = closure_19(metroRequire, obj2);
    cResult[1] = tmp4.friendIcon;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl5.intl;
    const stringResult = intl.string(intl5.t.zrLIIz);
    cResult[3] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === openInviteSheet) {
    let tmp14;
    if (cResult[5] === tmp8) {
      tmp14 = cResult[6];
    }
    return tmp14;
  }
  const tmp15 = closure_19(TableRow2.TableRow, { icon: tmp8, onPress: openInviteSheet, label: tmp12, end: true });
  cResult[4] = openInviteSheet;
  cResult[5] = tmp8;
  cResult[6] = tmp15;
  tmp14 = tmp15;
}) : ((openInviteSheet) => {
  let intl;
  let obj2;
  openInviteSheet = openInviteSheet.openInviteSheet;
  const obj = { icon: closure_19(metroRequire, obj2), onPress: openInviteSheet, label: intl.string(intl5.t.zrLIIz), end: true };
  obj2 = { style: closure_21().friendIcon, children: closure_19(GroupIcon.GroupIcon, { size: "sm" }) };
  const TableRow = TableRow2.TableRow;
  intl = intl5.intl;
  return closure_19(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((invite) => {
  let openInviteSheet;
  let separator;
  let suggestions;
  let tmp3;
  let obj = invite(576);
  const cResult = obj.c(19);
  invite = invite.invite;
  ({ suggestions, openInviteSheet } = invite);
  const tmp2 = closure_21();
  importDefault = tmp2;
  if (cResult[0] !== suggestions) {
    const substr = suggestions.slice(0, 6);
    cResult[0] = suggestions;
    cResult[1] = substr;
    tmp3 = substr;
  } else {
    tmp3 = cResult[1];
  }
  if (0 === suggestions.length) {
    return null;
  } else {
    if (cResult[2] !== invite.code) {
      class S {
        constructor(arg0) {
          ({ item, index } = invite);
          obj = { row: item, code: invite.code, start: 0 === index };
          return jsx(closure_1(closure_2[20]), obj);
        }
      }
      cResult[2] = invite.code;
      cResult[3] = S;
    } else {
      class S {
        constructor(arg0) {
          ({ item, index } = invite);
          obj = { row: item, code: invite.code, start: 0 === index };
          return jsx(closure_1(closure_2[20]), obj);
        }
      }
    }
    if (cResult[4] === openInviteSheet) {
      class S {
        constructor(arg0) {
          ({ item, index } = invite);
          obj = { row: item, code: invite.code, start: 0 === index };
          return jsx(closure_1(closure_2[20]), obj);
        }
      }
      if (cResult[7] !== tmp2.separator) {
        class S {
          constructor(arg0) {
            ({ item, index } = invite);
            obj = { row: item, code: invite.code, start: 0 === index };
            return jsx(closure_1(closure_2[20]), obj);
          }
        }
        cResult[7] = tmp2.separator;
        cResult[8] = tmp10;
      } else {
        class S {
          constructor(arg0) {
            ({ item, index } = invite);
            obj = { row: item, code: invite.code, start: 0 === index };
            return jsx(closure_1(closure_2[20]), obj);
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(arg0) {
            return invite.item.id;
          }
        }
        cResult[9] = E;
      } else {
        class E {
          constructor(arg0) {
            return invite.item.id;
          }
        }
      }
      if (cResult[10] === tmp3) {
        class E {
          constructor(arg0) {
            return invite.item.id;
          }
        }
      }
      const obj2 = { data: tmp3, renderItem: S, contentContainerStyle: tmp2.suggestionRowsContainer, ListFooterComponent: tmp6, ItemSeparatorComponent: tmp10, keyExtractor: E };
      cResult[10] = tmp3;
      cResult[11] = S;
      cResult[12] = tmp2.suggestionRowsContainer;
      cResult[13] = tmp6;
      cResult[14] = tmp10;
      cResult[15] = closure_19(closure_7, obj2);
      const tmp16 = closure_19(closure_7, obj2);
    }
    let tmp7 = null;
    if (suggestions.length > 6) {
      class E {
        constructor(arg0) {
          return invite.item.id;
        }
      }
      const obj3 = { openInviteSheet };
      tmp7 = closure_19(closure_22, obj3);
    }
    cResult[4] = openInviteSheet;
    cResult[5] = suggestions.length;
    cResult[6] = tmp7;
  }
}) : ((openInviteSheet) => {
  let code;
  let obj3;
  let require;
  let suggestions;
  let tmp6Result;
  ({ invite: require, suggestions } = openInviteSheet);
  openInviteSheet = openInviteSheet.openInviteSheet;
  const tmp = closure_21();
  const separator = tmp;
  [][0] = suggestions;
  let tmp6Result2 = null;
  if (0 !== suggestions.length) {
    const obj2 = { style: tmp.suggestionsContainer, children: closure_19(closure_7, obj3) };
    obj3 = {
      data: tmp2,
      renderItem(arg0) {
          let index;
          let item;
          ({ item, index } = arg0);
          const obj = { row: item, code: require.code, start: 0 === index };
          return closure_19(InstantInviteRowDefault, obj);
        },
      contentContainerStyle: tmp.suggestionRowsContainer,
      ListFooterComponent: tmp6Result,
      ItemSeparatorComponent() {
          const obj = { style: separator.separator };
          return closure_19(metroRequire, obj);
        },
      keyExtractor(item) {
          return item.item.id;
        }
    };
    tmp6Result = null;
    if (suggestions.length > 6) {
      let obj = { openInviteSheet };
      tmp6Result = closure_19(closure_22, obj);
    }
    tmp6Result2 = closure_19(closure_6, obj2);
  }
  return tmp6Result2;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closeOnEditInviteLink;
  let closure_1;
  let inviteSuggestionRows;
  let onClose;
  let ref;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp21;
  let tmp31;
  let tmp2 = navigation;
  let obj = onClose(navigation[16]);
  const cResult = obj.c(88);
  ({ closeOnEditInviteLink, onClose } = arg0);
  importDefault = undefined === closeOnEditInviteLink || closeOnEditInviteLink;
  const tmp4 = closure_21();
  const tmpResult = onClose(tmp2[21]);
  navigation = tmpResult.useNavigation();
  const tmpResult4 = onClose(tmp2[22]);
  const isScreenReaderEnabled = tmpResult4.useIsScreenReaderEnabled();
  let obj4 = ref;
  ref = ref.useRef(null);
  const tmp9 = isScreenReaderEnabled(ref.useState(false), 2);
  const first = tmp9[0];
  let closure_6 = tmp9[1];
  const tmp8 = isScreenReaderEnabled;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CreateInviteModalStore];
    const fn = function u() {
      return CreateInviteModalStore.getInvite();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp11 = items;
    tmp12 = fn;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmpResult5 = onClose(tmp2[23]);
  const stateFromStores = tmpResult5.useStateFromStores(tmp11, tmp12);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CreateInviteModalStore, ChannelStore, GuildChannelStore];
    class P {
      constructor() {
        const inviteSettings = CreateInviteModalStore.getInviteSettings();
        let channelId;
        if (inviteSettings != null) {
          channelId = inviteSettings.channelId;
        }
        if (null != channelId) {
          return channel.getChannel(channelId);
        } else {
          const guildId = CreateInviteModalStore.getGuildId();
          defaultChannel = null;
          if (null != guildId) {
            defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants4.CREATE_INSTANT_INVITE);
          }
          return defaultChannel;
        }
      }
    }
    cResult[2] = items1;
    cResult[3] = P;
    tmp16 = P;
    tmp15 = items1;
  } else {
    tmp15 = cResult[2];
    tmp16 = cResult[3];
  }
  const tmpResult6 = onClose(tmp2[23]);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp15, tmp16);
  if (cResult[4] !== isScreenReaderEnabled) {
    const fn2 = function z() {
      const tmp = isScreenReaderEnabled && null != ref.current;
      if (tmp) {
        const obj2 = { ref, delay: 100 };
        const obj = react_native;
        const result = obj.setAccessibilityFocus(obj2);
      }
    };
    cResult[4] = isScreenReaderEnabled;
    cResult[5] = fn2;
    tmp21 = fn2;
  } else {
    tmp21 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    let tmp22;
    if (cResult[7] === isScreenReaderEnabled) {
      tmp22 = cResult[8];
    }
    const effect = obj4.useEffect(tmp21, tmp22);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          return inviteSuggestionRows.getInviteSuggestionRows();
        }
      }
      cResult[9] = M;
    } else {
      class M {
        constructor() {
          return inviteSuggestionRows.getInviteSuggestionRows();
        }
      }
    }
    const first1 = tmp8(obj4.useState(M), 1)[0];
    class P {
      constructor() {
        const inviteSettings = CreateInviteModalStore.getInviteSettings();
        let channelId;
        if (inviteSettings != null) {
          channelId = inviteSettings.channelId;
        }
        if (null != channelId) {
          return channel.getChannel(channelId);
        } else {
          const guildId = CreateInviteModalStore.getGuildId();
          defaultChannel = null;
          if (null != guildId) {
            defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants4.CREATE_INSTANT_INVITE);
          }
          return defaultChannel;
        }
      }
    }
    const tmp26 = stateFromStores1();
    ChannelStore = tmp26;
    if (cResult[10] !== stateFromStores1) {
      class Y {
        constructor() {
          const obj = { omitUserIds: new Set(), channel: stateFromStores1 };
          const loadInviteSuggestions = InviteSuggestionsActionCreators.loadInviteSuggestions;
          InviteSuggestionsActionCreators;
          new Set();
          const inviteSuggestions = loadInviteSuggestions(obj);
        }
      }
      cResult[10] = stateFromStores1;
      cResult[11] = Y;
    } else {
      class Y {
        constructor() {
          const obj = { omitUserIds: new Set(), channel: stateFromStores1 };
          const loadInviteSuggestions = InviteSuggestionsActionCreators.loadInviteSuggestions;
          InviteSuggestionsActionCreators;
          new Set();
          const inviteSuggestions = loadInviteSuggestions(obj);
        }
      }
    }
    require("useMountEffect")(Y);
    if (cResult[12] === tmp26) {
      class Y {
        constructor() {
          const obj = { omitUserIds: new Set(), channel: stateFromStores1 };
          const loadInviteSuggestions = InviteSuggestionsActionCreators.loadInviteSuggestions;
          InviteSuggestionsActionCreators;
          new Set();
          const inviteSuggestions = loadInviteSuggestions(obj);
        }
      }
      const effect1 = obj4.useEffect(K, tmp31);
      if (cResult[16] === first) {
        class Y {
          constructor() {
            const obj = { omitUserIds: new Set(), channel: stateFromStores1 };
            const loadInviteSuggestions = InviteSuggestionsActionCreators.loadInviteSuggestions;
            InviteSuggestionsActionCreators;
            new Set();
            const inviteSuggestions = loadInviteSuggestions(obj);
          }
        }
      }
      class X {
        constructor() {
          tmp = closure_2;
          setOptions = closure_2.setOptions;
          tmp2 = closure_0(closure_2[27]);
          getHeaderTextButton = tmp2.getHeaderTextButton;
          intl = closure_0(closure_2[18]).intl;
          string = intl.string;
          t = closure_0(closure_2[18]).t;
          if (closure_5) {
            stringResult = string(t.i4jeWR);
          } else {
            stringResult = string(t["5Wxrcd"]);
          }
          obj = {
            headerRight: getHeaderTextButton(stringResult, () => {
                      const AccessibilityAnnouncer = onClose(navigation[28]).AccessibilityAnnouncer;
                      const announce = AccessibilityAnnouncer.announce;
                      const intl = onClose(navigation[18]).intl;
                      announce(intl.string(onClose(navigation[18]).t["FY/yLY"]));
                      closure_1_0();
                      const tmp3 = !first;
                      const obj = closure_1(navigation[14]);
                      const obj2 = { flow_type: constants3.GUILD_CREATE_MODAL, from_step: constants.GUILD_INVITE, to_step: "modal_closed", skip: tmp3 };
                      obj.track(constants2.USER_FLOW_TRANSITION, obj2);
                    }),
            headerLeft() {
                      return null;
                    }
          };
          setOptionsResult = setOptions(obj);
          return;
        }
      }
      const items2 = [navigation, onClose, ];
      class P {
        constructor() {
          const inviteSettings = CreateInviteModalStore.getInviteSettings();
          let channelId;
          if (inviteSettings != null) {
            channelId = inviteSettings.channelId;
          }
          if (null != channelId) {
            return channel.getChannel(channelId);
          } else {
            const guildId = CreateInviteModalStore.getGuildId();
            defaultChannel = null;
            if (null != guildId) {
              defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants4.CREATE_INSTANT_INVITE);
            }
            return defaultChannel;
          }
        }
      }
      cResult[16] = first;
      cResult[17] = navigation;
      cResult[18] = onClose;
      class K {
        constructor() {
          if (null != stateFromStores) {
            if (null != channel[tmp.code]) {
              closure_6(true);
            }
          }
        }
      }
      cResult[19] = X;
      cResult[20] = items2;
    }
    class K {
      constructor() {
        if (null != stateFromStores) {
          if (null != channel[tmp.code]) {
            closure_6(true);
          }
        }
      }
    }
    const items3 = [tmp26, stateFromStores];
    cResult[12] = tmp26;
    cResult[13] = stateFromStores;
    cResult[14] = K;
    cResult[15] = items3;
    tmp31 = items3;
  }
  const items4 = [isScreenReaderEnabled, stateFromStores];
  cResult[6] = stateFromStores;
  cResult[7] = isScreenReaderEnabled;
  cResult[8] = items4;
  tmp22 = items4;
}) : ((closeOnEditInviteLink) => {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let inviteSuggestionRows;
  let items10;
  let items8;
  let items9;
  let obj15;
  let obj17;
  let flag = closeOnEditInviteLink.closeOnEditInviteLink;
  if (flag === undefined) {
    flag = true;
  }
  const onClose = closeOnEditInviteLink.onClose;
  navigation = undefined;
  let ref;
  channel = undefined;
  let closure_10;
  let tmp = closure_21();
  let tmp2 = flag;
  let tmp3 = navigation;
  let obj = flag(navigation[21]);
  navigation = obj.useNavigation();
  let obj2 = flag(navigation[22]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = ref;
  ref = ref.useRef(null);
  const tmp7 = isScreenReaderEnabled(ref.useState(false), 2);
  const first = tmp7[0];
  let closure_6 = tmp7[1];
  let obj4 = flag(navigation[23]);
  const items = [closure_10];
  const stateFromStores = obj4.useStateFromStores(items, () => closure_10.getInvite());
  const items1 = [closure_10, channel, GuildChannelStore];
  const obj5 = flag(navigation[23]);
  const stateFromStores1 = obj5.useStateFromStores(items1, () => {
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
    const tmp = isScreenReaderEnabled && null != ref.current;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const obj = react_native;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items2);
  const first1 = isScreenReaderEnabled(ref.useState(() => inviteSuggestionRows.getInviteSuggestionRows()), 1)[0];
  const tmp12 = stateFromStores1();
  channel = tmp12;
  onClose(navigation[26])(() => {
    const obj = { omitUserIds: new Set(), channel: stateFromStores1 };
    const loadInviteSuggestions = InviteSuggestionsActionCreators.loadInviteSuggestions;
    InviteSuggestionsActionCreators;
    new Set();
    const inviteSuggestions = loadInviteSuggestions(obj);
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
    let stringResult;
    const setOptions = navigation.setOptions;
    const getHeaderTextButton = NavigatorHeader.getHeaderTextButton;
    let intl = intl5.intl;
    const string = intl.string;
    const t = intl5.t;
    if (first) {
      stringResult = string(t.i4jeWR);
    } else {
      stringResult = string(t["5Wxrcd"]);
    }
    let obj = {
      headerRight: getHeaderTextButton(stringResult, () => {
        const AccessibilityAnnouncer = flag(navigation[28]).AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = flag(navigation[18]).intl;
        announce(intl.string(flag(navigation[18]).t["FY/yLY"]));
        closure_1_1();
        const tmp3 = !first;
        const obj = onClose(navigation[14]);
        const obj2 = { flow_type: constants3.GUILD_CREATE_MODAL, from_step: constants.GUILD_INVITE, to_step: "modal_closed", skip: tmp3 };
        obj.track(constants2.USER_FLOW_TRANSITION, obj2);
      }),
      headerLeft() {
        return null;
      }
    };
    setOptions(obj);
  }, items4);
  let code;
  const tmp17 = onClose(navigation[29]);
  if (stateFromStores != null) {
    code = stateFromStores.code;
  }
  const tmp17Result = tmp17(code);
  closure_10 = tmp17Result;
  const items5 = [stateFromStores1];
  const items6 = [stateFromStores1, , ];
  let code1;
  const callback = obj3.useCallback(() => {
    if (null != stateFromStores1) {
      const obj = CreateGuildModalActionCreatorsDefault;
      const result = obj.openGuildInviteScreen(tmp);
    }
  }, items5);
  const useCallback = obj3.useCallback;
  if (stateFromStores != null) {
    code1 = stateFromStores.code;
  }
  items6[1] = code1;
  items6[2] = tmp17Result;
  const items7 = [stateFromStores, stateFromStores1];
  const callback1 = useCallback(() => {
    if (null != stateFromStores1) {
      let code;
      const handleOpenShareSheet = instant_invite_InstantInviteUtils.handleOpenShareSheet;
      instant_invite_InstantInviteUtils;
      if (stateFromStores != null) {
        code = stateFromStores.code;
      }
      const tmp2Result = instant_invite_InstantInviteUtils;
      handleOpenShareSheet(code, tmp, tmp2Result.getShareMessage(closure_10));
      closure_6(true);
    }
  }, items6);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      let tmp27 = tmp20;
      if (tmp27) {
        const obj6 = { invite: stateFromStores, suggestions: first1, openInviteSheet: tmp24 };
        tmp27 = closure_19(closure_23, obj6);
      }
      const rect = { top: true, left: true, right: true, style: tmp.container, children: items8 };
      const SafeAreaPaddingView = tmp2(tmp3[40]).SafeAreaPaddingView;
      const obj7 = { ref, style: tmp.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(tmp2(tmp3[18]).t.OZ1qhO) };
      const Text = tmp2(tmp3[33]).Text;
      intl = tmp2(tmp3[18]).intl;
      items8 = [closure_19(Text, obj7), , , , ];
      const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(tmp2(tmp3[18]).t.eU2ZaK) };
      const Text2 = tmp2(tmp3[33]).Text;
      intl2 = tmp2(tmp3[18]).intl;
      items8[1] = closure_19(Text2, obj8);
      let tmp29Result = !tmp20;
      if (tmp29Result) {
        const obj9 = { source: onClose(tmp3[34]), resizeMode: "contain", style: tmp.headerImage };
        tmp29Result = closure_19(first, obj9);
      }
      items8[2] = tmp29Result;
      const obj10 = { style: tmp.linkContainer, children: items10 };
      const obj11 = {
        style: tmp.linkButton,
        accessibilityRole: "button",
        accessibilityLabel: intl3.string(tmp2(tmp3[18]).t["3XVNyt"]),
        onPress() {
              const obj = instant_invite_InstantInviteUtils;
              obj.handleCopy(stateFromStores.code, stateFromStores1, constants.GUILD_CREATE);
              closure_6(true);
            },
        children: items9
      };
      const PressableOpacity = tmp2(tmp3[37]).PressableOpacity;
      intl3 = tmp2(tmp3[18]).intl;
      const obj12 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: { flexShrink: 1 }, children: tmp17Result };
      items9 = [closure_19(tmp2(tmp3[33]).Text, obj12), ];
      const obj13 = { source: onClose(tmp3[36]), style: tmp.linkButtonIcon };
      const Icon = tmp2(tmp3[35]).Icon;
      items9[1] = closure_19(Icon, obj13);
      items10 = [closure_20(PressableOpacity, obj11), , ];
      const obj14 = { style: tmp.inviteDetail, children: closure_19(onClose(tmp3[38]), obj15) };
      obj15 = {
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
      items10[1] = closure_19(closure_6, obj14);
      const obj16 = { style: tmp.shareButton, children: closure_19(Button, obj17) };
      obj17 = { text: intl4.string(tmp2(tmp3[18]).t.Ej3B3Y), onPress: callback1 };
      Button = tmp2(tmp3[39]).Button;
      intl4 = tmp2(tmp3[18]).intl;
      items10[2] = closure_19(closure_6, obj16);
      items8[3] = closure_20(closure_6, obj10);
      items8[4] = tmp27;
      return closure_20(SafeAreaPaddingView, rect);
    }
  }
  return null;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/create_guild/native/components/GuildInvite.tsx");

export default tmp6;