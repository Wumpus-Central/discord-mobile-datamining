// discord_app/modules/create_guild/native/components/GuildInvite.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import setAccessibilityFocus from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _mod7199 from "../../../../../discord_common/js/packages/flash-list/index.js";
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
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
let closure_6 = fn(9091).useInstantInviteSendStates;
const CreateGuildModalStates = fn(7052).CreateGuildModalStates;
const Constants = fn(1087);
({
  AnalyticEvents: closure_12,
  AnalyticsSections: map1,
  InstantInviteSources: closure_14,
  Permissions: closure_15,
  SearchTypes: closure_16,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4966);
let obj2 = {
  container: {
    marginTop: fn(5250).NAV_BAR_HEIGHT,
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    alignItems: "center",
  },
  header: { marginBottom: 8 },
  description: { lineHeight: 18, marginBottom: 8, paddingHorizontal: 16, textAlign: "center" },
  headerIllustration: { alignItems: "center", marginTop: 8, marginBottom: -32 },
  linkContainer: { paddingHorizontal: 16, width: "100%", zIndex: 1 },
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
  marginTop: fn(5250).NAV_BAR_HEIGHT,
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
let obj5 = { flexShrink: 0, marginLeft: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.suggestionRowsContainer = { paddingHorizontal: nativeDefault.space.PX_12 };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj2.separator = {
  height: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginStart: nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING,
};
let closure_19 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SeeMoreFooter(openInviteSheet) {
      const cResult = c.c(7);
      openInviteSheet = openInviteSheet.openInviteSheet;
      const tmp4 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = constants(GroupIcon.GroupIcon, { size: "sm" });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.friendIcon) {
        const obj2 = { style: tmp4.friendIcon, children: first };
        const tmp11 = constants(hasOwnProperty, obj2);
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
      const tmp15 = constants(TableRow.TableRow, { icon: tmp8, onPress: openInviteSheet, label: tmp12, end: true });
      cResult[4] = openInviteSheet;
      cResult[5] = tmp8;
      cResult[6] = tmp15;
      tmp14 = tmp15;
    }
  : function SeeMoreFooter(openInviteSheet) {
      const obj = { icon: null, onPress: null, label: null, end: true };
      const tmp = closure_19();
      obj.icon = constants(hasOwnProperty, {
        style: closure_19().friendIcon,
        children: constants(GroupIcon.GroupIcon, { size: "sm" }),
      });
      obj.onPress = openInviteSheet.openInviteSheet;
      const intl = util.intl;
      obj.label = intl.string(util.t.zrLIIz);
      return constants(TableRow.TableRow, obj);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildInviteSuggestionRows(invite) {
      const cResult = invite(576).c(20);
      invite = invite.invite;
      ({ suggestions, openInviteSheet } = invite);
      const tmp4 = closure_19();
      const separator = tmp4;
      if (cResult[0] !== suggestions) {
        const substr = suggestions.slice(0, 6);
        cResult[0] = suggestions;
        cResult[1] = substr;
        let tmp5 = substr;
      } else {
        tmp5 = cResult[1];
      }
      if (0 === suggestions.length) {
        return null;
      } else {
        if (cResult[2] !== invite.code) {
          function renderSuggestionRow(arg0) {
            ({ item, index } = arg0);
            return constants(InstantInviteRowDefault, { row: item, code: invite.code, start: 0 === index });
          }
          cResult[2] = invite.code;
          cResult[3] = renderSuggestionRow;
          let tmp7 = renderSuggestionRow;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === openInviteSheet) {
          if (cResult[5] === suggestions.length) {
            let tmp8 = cResult[6];
          }
          if (cResult[7] !== tmp4.separator) {
            const fn = function y() {
              return constants(hasOwnProperty, { style: separator.separator });
            };
            cResult[7] = tmp4.separator;
            cResult[8] = fn;
            let tmp12 = fn;
          } else {
            tmp12 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function p(type) {
              return "" + type.type + ":" + type.item.id;
            };
            const fn3 = function f(type) {
              return type.type;
            };
            cResult[9] = fn2;
            cResult[10] = fn3;
            let tmp15 = fn3;
            let tmp14 = fn2;
          } else {
            tmp14 = cResult[9];
            tmp15 = cResult[10];
          }
          if (cResult[11] === tmp5) {
            if (cResult[12] === tmp7) {
              if (cResult[13] === tmp4.suggestionRowsContainer) {
                if (cResult[14] === tmp8) {
                  if (cResult[15] === tmp12) {
                    let tmp16 = cResult[16];
                  }
                  if (cResult[17] === tmp4.suggestionsContainer) {
                    if (cResult[18] === tmp16) {
                      let tmp19 = cResult[19];
                    }
                    return tmp19;
                  }
                  const obj2 = { style: tmp4.suggestionsContainer, children: tmp16 };
                  const tmp22 = closure_17(closure_5, obj2);
                  cResult[17] = tmp4.suggestionsContainer;
                  cResult[18] = tmp16;
                  cResult[19] = tmp22;
                  tmp19 = tmp22;
                }
              }
            }
          }
          const obj3 = {
            data: tmp5,
            renderItem: tmp7,
            contentContainerStyle: tmp4.suggestionRowsContainer,
            ListFooterComponent: tmp8,
            ItemSeparatorComponent: tmp12,
            keyExtractor: tmp14,
            getItemType: tmp15,
          };
          const tmp18 = closure_17(tmp(7199).FlashList, obj3);
          cResult[11] = tmp5;
          cResult[12] = tmp7;
          cResult[13] = tmp4.suggestionRowsContainer;
          cResult[14] = tmp8;
          cResult[15] = tmp12;
          cResult[16] = tmp18;
          tmp16 = tmp18;
        }
        let tmp9 = null;
        if (suggestions.length > 6) {
          const obj4 = { openInviteSheet };
          tmp9 = closure_17(closure_20, obj4);
        }
        cResult[4] = openInviteSheet;
        cResult[5] = suggestions.length;
        cResult[6] = tmp9;
        tmp8 = tmp9;
      }
      const obj = invite(576);
      tmp = invite;
    }
  : function GuildInviteSuggestionRows(openInviteSheet) {
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
            return constants(InstantInviteRowDefault, { row: item, code: code.code, start: 0 === index });
          },
          contentContainerStyle: tmp.suggestionRowsContainer,
          ListFooterComponent: null,
          ItemSeparatorComponent: null,
          keyExtractor: null,
          getItemType: null,
        };
        let tmp6Result = null;
        if (suggestions.length > 6) {
          const obj = { openInviteSheet: openInviteSheet.openInviteSheet };
          tmp6Result = closure_17(closure_20, obj);
        }
        obj3.ListFooterComponent = tmp6Result;
        obj3.ItemSeparatorComponent = function ItemSeparatorComponent() {
          return constants(hasOwnProperty, { style: separator.separator });
        };
        obj3.keyExtractor = function keyExtractor(type) {
          return "" + type.type + ":" + type.item.id;
        };
        obj3.getItemType = function getItemType(type) {
          return type.type;
        };
        obj2.children = closure_17(_mod7199.FlashList, obj3);
        tmp6Result2 = closure_17(closure_5, obj2);
      }
      return tmp6Result2;
    };
ReactCompilerGating = fn(558);
let obj7 = {
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
      closure_19();
      let obj = onClose(navigation[16]);
      navigation = onClose(navigation[22]).useNavigation();
      const tmpResult = onClose(navigation[22]);
      const isScreenReaderEnabled = onClose(navigation[23]).useIsScreenReaderEnabled();
      ref = ref.useRef(null);
      const tmp9 = isScreenReaderEnabled(ref.useState(false), 2);
      const first = tmp9[0];
      closure_6 = tmp9[1];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores1];
        const fn = function v() {
          return stateFromStores1.getInvite();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp11 = items;
        tmp12 = fn;
      } else {
        [tmp11, tmp12] = cResult;
      }
      const tmp8 = isScreenReaderEnabled;
      const tmpResult4 = onClose(navigation[23]);
      const stateFromStores = onClose(navigation[24]).useStateFromStores(tmp11, tmp12);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [stateFromStores1, stateFromStores, GuildChannelStore];
        class P {
          constructor() {
            obj = closure_8;
            inviteSettings = closure_8.getInviteSettings();
            channelId = undefined;
            if (inviteSettings != null) {
              channelId = inviteSettings.channelId;
            }
            if (null != channelId) {
              tmp7 = closure_7;
              return closure_7.getChannel(channelId);
            } else {
              guildId = obj.getGuildId();
              defaultChannel = null;
              if (null != guildId) {
                tmp5 = closure_9;
                tmp6 = closure_1_15;
                flag = true;
                defaultChannel = closure_9.getDefaultChannel(guildId, true, closure_1_15.CREATE_INSTANT_INVITE);
              }
              return defaultChannel;
            }
          }
        }
        cResult[2] = items1;
        cResult[3] = P;
        let tmp16 = P;
        let tmp15 = items1;
      } else {
        tmp15 = cResult[2];
        tmp16 = cResult[3];
      }
      const tmpResult5 = onClose(navigation[24]);
      stateFromStores1 = onClose(navigation[24]).useStateFromStores(tmp15, tmp16);
      if (cResult[4] !== isScreenReaderEnabled) {
        class W {
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
              obj = closure_0(closure_2[25]);
              obj1 = { ref: null, delay: 100 };
              tmp6 = closure_4;
              obj1.ref = closure_4;
              result = obj.setAccessibilityFocus(obj1);
            }
            return;
          }
        }
        cResult[4] = isScreenReaderEnabled;
        cResult[5] = W;
      } else {
        class W {
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
              obj = closure_0(closure_2[25]);
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
        class W {
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
              obj = closure_0(closure_2[25]);
              obj1 = { ref: null, delay: 100 };
              tmp6 = closure_4;
              obj1.ref = closure_4;
              result = obj.setAccessibilityFocus(obj1);
            }
            return;
          }
        }
        const effect = obj4.useEffect(W, items4);
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class W {
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
                obj = closure_0(closure_2[25]);
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
          class W {
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
                obj = closure_0(closure_2[25]);
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
        class P {
          constructor() {
            obj = closure_8;
            inviteSettings = closure_8.getInviteSettings();
            channelId = undefined;
            if (inviteSettings != null) {
              channelId = inviteSettings.channelId;
            }
            if (null != channelId) {
              tmp7 = closure_7;
              return closure_7.getChannel(channelId);
            } else {
              guildId = obj.getGuildId();
              defaultChannel = null;
              if (null != guildId) {
                tmp5 = closure_9;
                tmp6 = closure_1_15;
                flag = true;
                defaultChannel = closure_9.getDefaultChannel(guildId, true, closure_1_15.CREATE_INSTANT_INVITE);
              }
              return defaultChannel;
            }
          }
        }
        const tmp26 = closure_6();
        GuildChannelStore = tmp26;
        if (cResult[10] !== stateFromStores1) {
          class W {
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
                obj = closure_0(closure_2[25]);
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
          class W {
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
                obj = closure_0(closure_2[25]);
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
          class W {
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
                obj = closure_0(closure_2[25]);
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
            class W {
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
                  obj = closure_0(closure_2[25]);
                  obj1 = { ref: null, delay: 100 };
                  tmp6 = closure_4;
                  obj1.ref = closure_4;
                  result = obj.setAccessibilityFocus(obj1);
                }
                return;
              }
            }
          }
          class X {
            constructor() {
              tmp = closure_2;
              obj = closure_0(closure_2[28]);
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
                  const AccessibilityAnnouncer = onClose(navigation[29]).AccessibilityAnnouncer;
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
          class P {
            constructor() {
              obj = closure_8;
              inviteSettings = closure_8.getInviteSettings();
              channelId = undefined;
              if (inviteSettings != null) {
                channelId = inviteSettings.channelId;
              }
              if (null != channelId) {
                tmp7 = closure_7;
                return closure_7.getChannel(channelId);
              } else {
                guildId = obj.getGuildId();
                defaultChannel = null;
                if (null != guildId) {
                  tmp5 = closure_9;
                  tmp6 = closure_1_15;
                  flag = true;
                  defaultChannel = closure_9.getDefaultChannel(guildId, true, closure_1_15.CREATE_INSTANT_INVITE);
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
          cResult[19] = X;
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
      const tmpResult6 = onClose(navigation[24]);
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
      let defaultChannel;
      let inviteSuggestionRows;
      let tmp = closure_19();
      navigation = flag(navigation[22]).useNavigation();
      let obj = flag(navigation[22]);
      const isScreenReaderEnabled = flag(navigation[23]).useIsScreenReaderEnabled();
      ref = ref.useRef(null);
      const tmp7 = isScreenReaderEnabled(ref.useState(false), 2);
      const first = tmp7[0];
      closure_6 = tmp7[1];
      let obj2 = flag(navigation[23]);
      const items = [stateFromStores1];
      const stateFromStores = flag(navigation[24]).useStateFromStores(items, () => stateFromStores1.getInvite());
      let obj4 = flag(navigation[24]);
      const items1 = [stateFromStores1, stateFromStores, defaultChannel];
      stateFromStores1 = flag(navigation[24]).useStateFromStores(items1, () => {
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
      const first1 = isScreenReaderEnabled(
        ref.useState(() => inviteSuggestionRows.getInviteSuggestionRows()),
        1,
      )[0];
      const tmp12 = closure_6();
      defaultChannel = tmp12;
      onClose(navigation[27])(() => {
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
            const AccessibilityAnnouncer = flag(navigation[29]).AccessibilityAnnouncer;
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
            const AccessibilityAnnouncer = flag(navigation[29]).AccessibilityAnnouncer;
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
      const obj5 = flag(navigation[24]);
      if (stateFromStores != null) {
        code = stateFromStores.code;
      }
      const tmp17Result = onClose(navigation[30])(code);
      inviteSuggestionRows = tmp17Result;
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
            tmp27 = closure_17(closure_21, obj6);
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
          const items8 = [closure_17(tmp2(tmp3[34]).Text, obj7), , , ,];
          const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
          const intl2 = tmp2(tmp3[18]).intl;
          obj8.children = intl2.string(tmp2(tmp3[18]).t.eU2ZaK);
          items8[1] = closure_17(tmp2(tmp3[34]).Text, obj8);
          let tmp29Result = !tmp20;
          if (!tmp20) {
            const obj9 = {
              style: tmp.headerIllustration,
              children: closure_17(tmp2(tmp3[35]).HelloWumpusSpotIllustration, { width: 252, accessible: false }),
            };
            tmp29Result = closure_17(first, obj9);
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
          const items9 = [closure_17(tmp2(tmp3[34]).Text, obj12)];
          const obj13 = { source: tmp13(tmp3[37]), style: tmp.linkButtonIcon };
          items9[1] = closure_17(tmp2(tmp3[36]).Icon, obj13);
          obj11.children = items9;
          const items10 = [closure_18(tmp2(tmp3[38]).PressableOpacity, obj11), ,];
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
          obj14.children = closure_17(tmp13(tmp3[39]), obj15);
          items10[1] = closure_17(first, obj14);
          const obj16 = { style: tmp.shareButton, children: null };
          const obj17 = { text: null, onPress: null };
          const intl4 = tmp2(tmp3[18]).intl;
          obj17.text = intl4.string(tmp2(tmp3[18]).t.Ej3B3Y);
          obj17.onPress = callback1;
          obj16.children = closure_17(tmp2(tmp3[40]).Button, obj17);
          items10[2] = closure_17(first, obj16);
          obj10.children = items10;
          items8[3] = closure_18(first, obj10);
          items8[4] = tmp27;
          rect.children = items8;
          return closure_18(tmp2(tmp3[41]).SafeAreaPaddingView, rect);
        }
      }
      return null;
    };
