// discord_app/modules/create_guild/native/components/GuildInvite.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import setAccessibilityFocus from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import GroupIcon from "../../../../design/components/Icon/native/redesign/generated/GroupIcon.tsx";
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

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, FlatList: metroRequire, StyleSheet } = get_ActivityIndicator);
let closure_7 = fn(8747).useInstantInviteSendStates;
const CreateGuildModalStates = fn(6660).CreateGuildModalStates;
const Constants = fn(1085);
({
  AnalyticEvents: map1,
  AnalyticsSections: closure_14,
  InstantInviteSources: closure_15,
  Permissions: closure_16,
  SearchTypes: closure_17,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: {
    marginTop: fn(6263).NAV_BAR_HEIGHT,
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
  marginTop: fn(6263).NAV_BAR_HEIGHT,
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
let closure_20 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SeeMoreFooter(openInviteSheet) {
      const cResult = c.c(7);
      openInviteSheet = openInviteSheet.openInviteSheet;
      const tmp4 = closure_20();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = collapsedCategories(GroupIcon.GroupIcon, { size: "sm" });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.friendIcon) {
        const obj2 = { style: tmp4.friendIcon, children: first };
        const tmp11 = collapsedCategories(hasOwnProperty, obj2);
        cResult[1] = tmp4.friendIcon;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.zrLIIz);
        cResult[3] = stringResult;
        let tmp12 = stringResult;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === openInviteSheet) {
        if (cResult[5] === tmp8) {
          let tmp14 = cResult[6];
        }
        return tmp14;
      }
      const tmp15 = collapsedCategories(TableRow.TableRow, {
        icon: tmp8,
        onPress: openInviteSheet,
        label: tmp12,
        end: true,
      });
      cResult[4] = openInviteSheet;
      cResult[5] = tmp8;
      cResult[6] = tmp15;
      tmp14 = tmp15;
    }
  : function SeeMoreFooter(openInviteSheet) {
      const obj = { icon: null, onPress: null, label: null, end: true };
      const tmp = closure_20();
      obj.icon = collapsedCategories(hasOwnProperty, {
        style: closure_20().friendIcon,
        children: collapsedCategories(GroupIcon.GroupIcon, { size: "sm" }),
      });
      obj.onPress = openInviteSheet.openInviteSheet;
      const intl = util.intl;
      obj.label = intl.string(util.t.zrLIIz);
      return collapsedCategories(TableRow.TableRow, obj);
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildInviteSuggestionRows(invite) {
      const cResult = invite(576).c(19);
      invite = invite.invite;
      ({ suggestions, openInviteSheet } = invite);
      const tmp2 = closure_20();
      const separator = tmp2;
      if (cResult[0] !== suggestions) {
        const substr = suggestions.slice(0, 6);
        cResult[0] = suggestions;
        cResult[1] = substr;
        let tmp3 = substr;
      } else {
        tmp3 = cResult[1];
      }
      if (0 === suggestions.length) {
        return null;
      } else {
        if (cResult[2] !== invite.code) {
          function renderSuggestionRow(arg0) {
            ({ item, index } = arg0);
            return collapsedCategories(InstantInviteRowDefault, { row: item, code: invite.code, start: 0 === index });
          }
          cResult[2] = invite.code;
          cResult[3] = renderSuggestionRow;
          let tmp5 = renderSuggestionRow;
        } else {
          tmp5 = cResult[3];
        }
        if (cResult[4] === openInviteSheet) {
          if (cResult[5] === suggestions.length) {
            let tmp6 = cResult[6];
          }
          if (cResult[7] !== tmp2.separator) {
            const fn = function f() {
              return collapsedCategories(hasOwnProperty, { style: separator.separator });
            };
            cResult[7] = tmp2.separator;
            cResult[8] = fn;
            let tmp9 = fn;
          } else {
            tmp9 = cResult[8];
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
          const obj2 = {
            data: tmp3,
            renderItem: tmp5,
            contentContainerStyle: tmp2.suggestionRowsContainer,
            ListFooterComponent: tmp6,
            ItemSeparatorComponent: tmp9,
            keyExtractor: E,
          };
          const tmp15 = closure_18(closure_6, obj2);
          cResult[10] = tmp3;
          cResult[11] = tmp5;
          cResult[12] = tmp2.suggestionRowsContainer;
          cResult[13] = tmp6;
          cResult[14] = tmp9;
          cResult[15] = tmp15;
        }
        let tmp7 = null;
        if (suggestions.length > 6) {
          class E {
            constructor(arg0) {
              return invite.item.id;
            }
          }
          const obj3 = { openInviteSheet };
          tmp7 = closure_18(closure_21, obj3);
        }
        cResult[4] = openInviteSheet;
        cResult[5] = suggestions.length;
        cResult[6] = tmp7;
        tmp6 = tmp7;
      }
      const obj = invite(576);
    }
  : function GuildInviteSuggestionRows(openInviteSheet) {
      ({ invite: require, suggestions } = openInviteSheet);
      const tmp = closure_20();
      const separator = tmp;
      [][0] = suggestions;
      let tmp6Result2 = null;
      if (0 !== suggestions.length) {
        const obj2 = { style: tmp.suggestionsContainer, children: null };
        const obj3 = {
          data: tmp2,
          renderItem: function renderSuggestionRow(arg0) {
            ({ item, index } = arg0);
            return collapsedCategories(InstantInviteRowDefault, { row: item, code: code.code, start: 0 === index });
          },
          contentContainerStyle: tmp.suggestionRowsContainer,
          ListFooterComponent: null,
          ItemSeparatorComponent: null,
          keyExtractor: null,
        };
        let tmp6Result = null;
        if (suggestions.length > 6) {
          const obj = { openInviteSheet: openInviteSheet.openInviteSheet };
          tmp6Result = closure_18(closure_21, obj);
        }
        obj3.ListFooterComponent = tmp6Result;
        obj3.ItemSeparatorComponent = function ItemSeparatorComponent() {
          return collapsedCategories(hasOwnProperty, { style: separator.separator });
        };
        obj3.keyExtractor = function keyExtractor(item) {
          return item.item.id;
        };
        obj2.children = closure_18(closure_6, obj3);
        tmp6Result2 = closure_18(closure_5, obj2);
      }
      return tmp6Result2;
    };
ReactCompilerGating = fn(558);
let obj6 = {
  height: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginStart: nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/components/GuildInvite.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildInvite(arg0) {
      const cResult = onClose(navigation[16]).c(88);
      ({ closeOnEditInviteLink, onClose } = arg0);
      importDefault = undefined === closeOnEditInviteLink || closeOnEditInviteLink;
      closure_20();
      let obj = onClose(navigation[16]);
      navigation = onClose(navigation[21]).useNavigation();
      const tmpResult = onClose(navigation[21]);
      const isScreenReaderEnabled = onClose(navigation[22]).useIsScreenReaderEnabled();
      ref = ref.useRef(null);
      const tmp9 = isScreenReaderEnabled(ref.useState(false), 2);
      const first = tmp9[0];
      closure_6 = tmp9[1];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CreateInviteModalStore];
        const fn = function c() {
          return closure_9.getInvite();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp11 = items;
        tmp12 = fn;
      } else {
        [tmp11, tmp12] = cResult;
      }
      const tmp8 = isScreenReaderEnabled;
      const tmpResult4 = onClose(navigation[22]);
      const stateFromStores = onClose(navigation[23]).useStateFromStores(tmp11, tmp12);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [CreateInviteModalStore, stateFromStores1, GuildChannelStore];
        class V {
          constructor() {
            obj = closure_9;
            inviteSettings = closure_9.getInviteSettings();
            channelId = undefined;
            if (inviteSettings != null) {
              channelId = inviteSettings.channelId;
            }
            if (null != channelId) {
              tmp7 = closure_8;
              return closure_8.getChannel(channelId);
            } else {
              guildId = obj.getGuildId();
              defaultChannel = null;
              if (null != guildId) {
                tmp5 = closure_10;
                tmp6 = closure_1_16;
                flag = true;
                defaultChannel = closure_10.getDefaultChannel(guildId, true, closure_1_16.CREATE_INSTANT_INVITE);
              }
              return defaultChannel;
            }
          }
        }
        cResult[2] = items1;
        cResult[3] = V;
        let tmp16 = V;
        let tmp15 = items1;
      } else {
        tmp15 = cResult[2];
        tmp16 = cResult[3];
      }
      const tmpResult5 = onClose(navigation[23]);
      stateFromStores1 = onClose(navigation[23]).useStateFromStores(tmp15, tmp16);
      if (cResult[4] !== isScreenReaderEnabled) {
        class M {
          constructor() {
            tmp = closure_3;
            if (closure_3) {
              tmp2 = closure_4;
              tmp3 = null;
              tmp = null != closure_4.current;
            }
            if (tmp) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[24]);
              obj1 = { ref: null, delay: 100 };
              tmp6 = closure_4;
              obj1.ref = closure_4;
              result = obj.setAccessibilityFocus(obj1);
            }
            return;
          }
        }
        cResult[4] = isScreenReaderEnabled;
        cResult[5] = M;
      } else {
        class M {
          constructor() {
            tmp = closure_3;
            if (closure_3) {
              tmp2 = closure_4;
              tmp3 = null;
              tmp = null != closure_4.current;
            }
            if (tmp) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[24]);
              obj1 = { ref: null, delay: 100 };
              tmp6 = closure_4;
              obj1.ref = closure_4;
              result = obj.setAccessibilityFocus(obj1);
            }
            return;
          }
        }
      }
      if (cResult[6] === stateFromStores) {
        class M {
          constructor() {
            tmp = closure_3;
            if (closure_3) {
              tmp2 = closure_4;
              tmp3 = null;
              tmp = null != closure_4.current;
            }
            if (tmp) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[24]);
              obj1 = { ref: null, delay: 100 };
              tmp6 = closure_4;
              obj1.ref = closure_4;
              result = obj.setAccessibilityFocus(obj1);
            }
            return;
          }
        }
        const effect = obj4.useEffect(M, items4);
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor() {
              tmp = closure_3;
              if (closure_3) {
                tmp2 = closure_4;
                tmp3 = null;
                tmp = null != closure_4.current;
              }
              if (tmp) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[24]);
                obj1 = { ref: null, delay: 100 };
                tmp6 = closure_4;
                obj1.ref = closure_4;
                result = obj.setAccessibilityFocus(obj1);
              }
              return;
            }
          }
          cResult[9] = tmp24;
        } else {
          class M {
            constructor() {
              tmp = closure_3;
              if (closure_3) {
                tmp2 = closure_4;
                tmp3 = null;
                tmp = null != closure_4.current;
              }
              if (tmp) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[24]);
                obj1 = { ref: null, delay: 100 };
                tmp6 = closure_4;
                obj1.ref = closure_4;
                result = obj.setAccessibilityFocus(obj1);
              }
              return;
            }
          }
        }
        const first1 = tmp8(obj4.useState(tmp24), 1)[0];
        class V {
          constructor() {
            obj = closure_9;
            inviteSettings = closure_9.getInviteSettings();
            channelId = undefined;
            if (inviteSettings != null) {
              channelId = inviteSettings.channelId;
            }
            if (null != channelId) {
              tmp7 = closure_8;
              return closure_8.getChannel(channelId);
            } else {
              guildId = obj.getGuildId();
              defaultChannel = null;
              if (null != guildId) {
                tmp5 = closure_10;
                tmp6 = closure_1_16;
                flag = true;
                defaultChannel = closure_10.getDefaultChannel(guildId, true, closure_1_16.CREATE_INSTANT_INVITE);
              }
              return defaultChannel;
            }
          }
        }
        const tmp26 = stateFromStores();
        CreateInviteModalStore = tmp26;
        if (cResult[10] !== stateFromStores1) {
          class M {
            constructor() {
              tmp = closure_3;
              if (closure_3) {
                tmp2 = closure_4;
                tmp3 = null;
                tmp = null != closure_4.current;
              }
              if (tmp) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[24]);
                obj1 = { ref: null, delay: 100 };
                tmp6 = closure_4;
                obj1.ref = closure_4;
                result = obj.setAccessibilityFocus(obj1);
              }
              return;
            }
          }
          cResult[10] = stateFromStores1;
          cResult[11] = tmp28;
        } else {
          class M {
            constructor() {
              tmp = closure_3;
              if (closure_3) {
                tmp2 = closure_4;
                tmp3 = null;
                tmp = null != closure_4.current;
              }
              if (tmp) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[24]);
                obj1 = { ref: null, delay: 100 };
                tmp6 = closure_4;
                obj1.ref = closure_4;
                result = obj.setAccessibilityFocus(obj1);
              }
              return;
            }
          }
        }
        require("useMountEffect")(tmp28);
        if (cResult[12] === tmp26) {
          class M {
            constructor() {
              tmp = closure_3;
              if (closure_3) {
                tmp2 = closure_4;
                tmp3 = null;
                tmp = null != closure_4.current;
              }
              if (tmp) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[24]);
                obj1 = { ref: null, delay: 100 };
                tmp6 = closure_4;
                obj1.ref = closure_4;
                result = obj.setAccessibilityFocus(obj1);
              }
              return;
            }
          }
          const effect1 = obj4.useEffect(Y, tmp32);
          if (cResult[16] === first) {
            class M {
              constructor() {
                tmp = closure_3;
                if (closure_3) {
                  tmp2 = closure_4;
                  tmp3 = null;
                  tmp = null != closure_4.current;
                }
                if (tmp) {
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[24]);
                  obj1 = { ref: null, delay: 100 };
                  tmp6 = closure_4;
                  obj1.ref = closure_4;
                  result = obj.setAccessibilityFocus(obj1);
                }
                return;
              }
            }
          }
          class Z {
            constructor() {
              tmp = closure_2;
              obj = closure_0(closure_2[27]);
              intl = closure_0(closure_2[18]).intl;
              string = intl.string;
              t = closure_0(closure_2[18]).t;
              if (closure_5) {
                stringResult = string(t.i4jeWR);
              } else {
                stringResult = string(t["5Wxrcd"]);
              }
              obj1 = {
                headerRight: obj.getHeaderTextButton(stringResult, () => {
                  const AccessibilityAnnouncer = onClose(navigation[28]).AccessibilityAnnouncer;
                  const intl = onClose(navigation[18]).intl;
                  AccessibilityAnnouncer.announce(intl.string(onClose(navigation[18]).t["FY/yLY"]));
                  closure_1_0();
                  closure_1(navigation[14]).track(constants2.USER_FLOW_TRANSITION, {
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
              setOptionsResult = closure_2.setOptions(obj1);
              return;
            }
          }
          const items2 = [navigation, onClose];
          class V {
            constructor() {
              obj = closure_9;
              inviteSettings = closure_9.getInviteSettings();
              channelId = undefined;
              if (inviteSettings != null) {
                channelId = inviteSettings.channelId;
              }
              if (null != channelId) {
                tmp7 = closure_8;
                return closure_8.getChannel(channelId);
              } else {
                guildId = obj.getGuildId();
                defaultChannel = null;
                if (null != guildId) {
                  tmp5 = closure_10;
                  tmp6 = closure_1_16;
                  flag = true;
                  defaultChannel = closure_10.getDefaultChannel(guildId, true, closure_1_16.CREATE_INSTANT_INVITE);
                }
                return defaultChannel;
              }
            }
          }
          cResult[16] = first;
          cResult[17] = navigation;
          cResult[18] = onClose;
          class Y {
            constructor() {
              if (null != closure_7) {
                tmp2 = closure_9;
                if (null != closure_9[tmp.code]) {
                  tmp3 = closure_6;
                  flag = true;
                  tmp4 = closure_6(true);
                }
              }
              return;
            }
          }
          cResult[19] = Z;
          cResult[20] = items2;
        }
        class Y {
          constructor() {
            if (null != closure_7) {
              tmp2 = closure_9;
              if (null != closure_9[tmp.code]) {
                tmp3 = closure_6;
                flag = true;
                tmp4 = closure_6(true);
              }
            }
            return;
          }
        }
        const items3 = [tmp26, stateFromStores];
        cResult[12] = tmp26;
        cResult[13] = stateFromStores;
        cResult[14] = Y;
        cResult[15] = items3;
        tmp32 = items3;
      }
      items4 = [isScreenReaderEnabled, stateFromStores];
      cResult[6] = stateFromStores;
      cResult[7] = isScreenReaderEnabled;
      cResult[8] = items4;
      const tmpResult6 = onClose(navigation[23]);
    }
  : function GuildInvite(closeOnEditInviteLink) {
      let flag = closeOnEditInviteLink.closeOnEditInviteLink;
      if (flag === undefined) {
        flag = true;
      }
      const onClose = closeOnEditInviteLink.onClose;
      let navigation;
      ref = undefined;
      let stateFromStores1;
      closure_9 = undefined;
      let defaultChannel;
      let tmp = closure_20();
      navigation = flag(navigation[21]).useNavigation();
      let obj = flag(navigation[21]);
      const isScreenReaderEnabled = flag(navigation[22]).useIsScreenReaderEnabled();
      ref = ref.useRef(null);
      const tmp7 = isScreenReaderEnabled(ref.useState(false), 2);
      const first = tmp7[0];
      closure_6 = tmp7[1];
      let obj2 = flag(navigation[22]);
      const items = [closure_9];
      const stateFromStores = flag(navigation[23]).useStateFromStores(items, () => closure_9.getInvite());
      let obj4 = flag(navigation[23]);
      const items1 = [closure_9, stateFromStores1, defaultChannel];
      stateFromStores1 = flag(navigation[23]).useStateFromStores(items1, () => {
        const inviteSettings = closure_9.getInviteSettings();
        let channelId;
        if (inviteSettings != null) {
          channelId = inviteSettings.channelId;
        }
        if (null != channelId) {
          return stateFromStores1.getChannel(channelId);
        } else {
          const guildId = closure_9.getGuildId();
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
      const tmp12 = stateFromStores();
      closure_9 = tmp12;
      onClose(navigation[26])(() => {
        const obj2 = { omitUserIds: null, channel: null };
        const obj = InviteSuggestionsActionCreators;
        obj2.omitUserIds = new Set();
        obj2.channel = stateFromStores1;
        const inviteSuggestions = obj.loadInviteSuggestions(obj2);
      });
      const items3 = [tmp12, stateFromStores];
      const effect1 = ref.useEffect(() => {
        if (null != stateFromStores) {
          if (null != closure_9[tmp.code]) {
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
            const AccessibilityAnnouncer = flag(navigation[28]).AccessibilityAnnouncer;
            const intl = flag(navigation[18]).intl;
            AccessibilityAnnouncer.announce(intl.string(flag(navigation[18]).t["FY/yLY"]));
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
            const AccessibilityAnnouncer = flag(navigation[28]).AccessibilityAnnouncer;
            const intl = flag(navigation[18]).intl;
            AccessibilityAnnouncer.announce(intl.string(flag(navigation[18]).t["FY/yLY"]));
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
      const obj5 = flag(navigation[23]);
      if (stateFromStores != null) {
        code = stateFromStores.code;
      }
      const tmp17Result = onClose(navigation[29])(code);
      defaultChannel = tmp17Result;
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
            tmp27 = closure_18(closure_22, obj6);
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
          let intl = tmp2(tmp3[18]).intl;
          obj7.children = intl.string(tmp2(tmp3[18]).t.OZ1qhO);
          const items8 = [closure_18(tmp2(tmp3[33]).Text, obj7), , , ,];
          const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
          const intl2 = tmp2(tmp3[18]).intl;
          obj8.children = intl2.string(tmp2(tmp3[18]).t.eU2ZaK);
          items8[1] = closure_18(tmp2(tmp3[33]).Text, obj8);
          let tmp29Result = !tmp20;
          if (!tmp20) {
            const obj9 = { source: tmp13(tmp3[35]), resizeMode: "contain", style: tmp.headerImage };
            tmp29Result = closure_18(tmp13(tmp3[34]), obj9);
            const tmp13Result = tmp13(tmp3[34]);
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
          const intl3 = tmp2(tmp3[18]).intl;
          obj11.accessibilityLabel = intl3.string(tmp2(tmp3[18]).t["3XVNyt"]);
          obj11.onPress = function onPress() {
            instant_invite_InstantInviteUtils.handleCopy(
              stateFromStores.code,
              stateFromStores1,
              constants2.GUILD_CREATE,
            );
            closure_6(true);
          };
          const obj12 = {
            variant: "text-sm/medium",
            color: "mobile-text-heading-primary",
            style: { flexShrink: 1 },
            children: tmp17Result,
          };
          const items9 = [closure_18(tmp2(tmp3[33]).Text, obj12)];
          const obj13 = { source: tmp13(tmp3[37]), style: tmp.linkButtonIcon };
          items9[1] = closure_18(tmp2(tmp3[36]).Icon, obj13);
          obj11.children = items9;
          const items10 = [closure_19(tmp2(tmp3[38]).PressableOpacity, obj11), ,];
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
          obj14.children = closure_18(tmp13(tmp3[39]), obj15);
          items10[1] = closure_18(first, obj14);
          const obj16 = { style: tmp.shareButton, children: null };
          const obj17 = { text: null, onPress: null };
          const intl4 = tmp2(tmp3[18]).intl;
          obj17.text = intl4.string(tmp2(tmp3[18]).t.Ej3B3Y);
          obj17.onPress = callback1;
          obj16.children = closure_18(tmp2(tmp3[40]).Button, obj17);
          items10[2] = closure_18(first, obj16);
          obj10.children = items10;
          items8[3] = closure_19(first, obj10);
          items8[4] = tmp27;
          rect.children = items8;
          return closure_19(tmp2(tmp3[41]).SafeAreaPaddingView, rect);
        }
      }
      return null;
    };
