// discord_app/modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import StageChannelRoleStore from "../../StageChannelRoleStore.tsx";

require = fn;
const View = fn(17).View;
let closure_8 = fn(5578).STAGE_BLOCKED_USERS_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { paddingHorizontal: 16 },
  header: { padding: 16 },
  title: { marginTop: 16, marginBottom: 8, textAlign: "center" },
  description: { textAlign: "center", marginBottom: 16 },
  buttons: {
    width: "100%",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 8,
    width: "100%",
  },
  avatarContainer: { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4, marginEnd: 12 },
  avatar: { opacity: 0.5 },
  iconContainer: null,
  icon: null,
  flex: null,
  blocked: null,
  ignored: null,
};
let size = {
  position: "absolute",
  top: -4,
  right: 4,
  height: 16,
  width: 16,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj2.iconContainer = size;
obj2.icon = { height: 12, width: 12 };
obj2.flex = { display: "flex", flexDirection: "row" };
let obj3 = {
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingHorizontal: 16,
  paddingVertical: 8,
};
obj2.blocked = { color: nativeDefault.unsafe_rawColors.RED_400 };
let obj4 = { color: nativeDefault.unsafe_rawColors.RED_400 };
obj2.ignored = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = channelId(576).c(52);
      ({ participant, guildId, channelId } = arg0);
      const tmp4 = closure_11();
      const user = participant.user;
      const speaker = participant.speaker;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageChannelRoleStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === user.id) {
          let tmp7 = cResult[3];
        }
        const _Symbol = Symbol;
        const stateFromStores = channelId(504).useStateFromStores(first, tmp7);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [RelationshipStore];
          cResult[4] = items1;
          let tmp9 = items1;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] !== user.id) {
          class T {
            constructor() {
              return closure_6.isBlocked(user.id);
            }
          }
          cResult[5] = user.id;
          cResult[6] = T;
        } else {
          class T {
            constructor() {
              return closure_6.isBlocked(user.id);
            }
          }
        }
        const tmpResult = channelId(504);
        const stateFromStores1 = channelId(504).useStateFromStores(tmp9, T);
        if (cResult[7] === guildId) {
          class T {
            constructor() {
              return closure_6.isBlocked(user.id);
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor() {
                return closure_6.isBlocked(user.id);
              }
            }
            const stringResult = obj4.string(channelId(1126).t.suRApw);
            cResult[10] = stringResult;
          } else {
            class T {
              constructor() {
                return closure_6.isBlocked(user.id);
              }
            }
          }
          if (speaker) {
            class T {
              constructor() {
                return closure_6.isBlocked(user.id);
              }
            }
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              class T {
                constructor() {
                  return closure_6.isBlocked(user.id);
                }
              }
              const stringResult1 = obj5.string(channelId(1126).t.LqMmG2);
              cResult[11] = stringResult1;
            } else {
              class T {
                constructor() {
                  return closure_6.isBlocked(user.id);
                }
              }
            }
          } else {
            class T {
              constructor() {
                return closure_6.isBlocked(user.id);
              }
            }
            if (cResult[13] === tmp13) {
              class T {
                constructor() {
                  return closure_6.isBlocked(user.id);
                }
              }
              if (cResult[16] === speaker) {
                class T {
                  constructor() {
                    return closure_6.isBlocked(user.id);
                  }
                }
              }
              let tmp24 = speaker;
              if (speaker) {
                class T {
                  constructor() {
                    return closure_6.isBlocked(user.id);
                  }
                }
                const obj2 = { style: null, children: null };
                const items2 = [tmp4.iconContainer];
                obj2.style = items2;
                const obj3 = { style: tmp4.icon, source: user(8309), color: user(587).unsafe_rawColors.WHITE };
                obj2.children = closure_9(channelId(1188).Icon, obj3);
                tmp24 = closure_9(View, obj2);
              }
              cResult[16] = speaker;
              cResult[17] = tmp4.icon;
              cResult[18] = tmp4.iconContainer;
              cResult[19] = tmp24;
            }
            const obj6 = { source: tmp13, size: channelId(1188).AvatarSizes.REFRESH_MEDIUM_32, style: tmp4.avatar };
            const tmp22 = closure_9(channelId(1188).CutoutableAvatarImage, obj6);
            cResult[13] = tmp13;
            cResult[14] = tmp4.avatar;
            cResult[15] = tmp22;
          }
        }
        const avatarSource = user.getAvatarSource(guildId);
        cResult[7] = guildId;
        cResult[8] = user;
        cResult[9] = avatarSource;
        const tmpResult2 = channelId(504);
      }
      const fn = function c() {
        return StageChannelRoleStore.isModerator(user.id, channelId);
      };
      cResult[1] = channelId;
      cResult[2] = user.id;
      cResult[3] = fn;
      tmp7 = fn;
      const obj = channelId(576);
    }
  : (guildId) => {
      ({ participant, channelId: require } = guildId);
      const tmp = closure_11();
      const user = participant.user;
      let speaker = participant.speaker;
      const items = [StageChannelRoleStore];
      const stateFromStores = initialize.useStateFromStores(items, () =>
        StageChannelRoleStore.isModerator(user.id, require),
      );
      const items1 = [RelationshipStore];
      const stateFromStores1 = initialize.useStateFromStores(items1, () => RelationshipStore.isBlocked(user.id));
      const avatarSource = user.getAvatarSource(guildId.guildId);
      const intl = util.intl;
      if (speaker) {
        const intl3 = util.intl;
        let stringResult = intl3.string(util.t.LqMmG2);
      } else {
        stringResult = tmp7;
        if (stateFromStores) {
          const intl2 = util.intl;
          stringResult = intl2.string(util.t.GMZqSi);
        }
      }
      const obj3 = { style: tmp.userContainer, children: null };
      const obj4 = { style: tmp.avatarContainer, children: null };
      const items2 = [
        closure_9(native.CutoutableAvatarImage, {
          source: avatarSource,
          size: native.AvatarSizes.REFRESH_MEDIUM_32,
          style: tmp.avatar,
        }),
      ];
      if (speaker) {
        const obj6 = { style: null, children: null };
        const items3 = [tmp.iconContainer];
        obj6.style = items3;
        const obj7 = { style: tmp.icon, source: user(8309), color: user(587).unsafe_rawColors.WHITE };
        obj6.children = closure_9(native.Icon, obj7);
        speaker = closure_9(View, obj6);
      }
      items2[1] = speaker;
      obj4.children = items2;
      const items4 = [closure_10(View, obj4)];
      const obj8 = { style: tmp.flex, children: null };
      const obj9 = {
        variant: "text-sm/medium",
        color: "mobile-text-heading-primary",
        children: participant.user.toString(),
      };
      const items5 = [closure_9(Text_Text.Text, obj9)];
      const user2 = participant.user;
      const hasUniqueUsernameResult = user2.hasUniqueUsername();
      let tmp9Result = !hasUniqueUsernameResult;
      if (!hasUniqueUsernameResult) {
        const obj10 = { variant: "text-sm/medium", color: "text-default", children: null };
        const items6 = ["#", participant.user.discriminator];
        obj10.children = items6;
        tmp9Result = closure_10(Text_Text.Text, obj10);
      }
      items5[1] = tmp9Result;
      obj8.children = items5;
      const items7 = [closure_10(View, obj8)];
      const obj11 = { style: tmp.flex, children: null };
      const obj12 = { style: stateFromStores1 ? tmp.blocked : tmp.ignored, children: null };
      const intl4 = util.intl;
      const string = intl4.string;
      const t = util.t;
      if (stateFromStores1) {
        let stringResult1 = string(t["4bDptI"]);
      } else {
        stringResult1 = string(t.tFY5Zb);
      }
      const obj13 = { children: null };
      obj12.children = stringResult1;
      const items8 = [closure_9(native.LegacyText, obj12)];
      const obj14 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const items9 = [" ", "| ", stringResult];
      obj14.children = items9;
      items8[1] = closure_10(Text_Text.Text, obj14);
      obj11.children = items8;
      items7[1] = closure_10(View, obj11);
      obj13.children = items7;
      items4[1] = closure_10(View, obj13);
      obj3.children = items4;
      return closure_10(View, obj3);
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(38);
      ({ blockedUserCount, ignoredUserCount } = arg0);
      const tmp4 = closure_11();
      if (blockedUserCount > 0) {
        if (ignoredUserCount > 0) {
          const _Symbol = Symbol;
          ({ header: header2, title: title2 } = tmp4);
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const intl5 = util.intl;
            const stringResult = intl5.string(util.t.Uzdyho);
            cResult[0] = stringResult;
            let first = stringResult;
          } else {
            first = cResult[0];
          }
          if (cResult[1] !== tmp4.title) {
            const obj2 = {
              style: title2,
              accessibilityRole: "header",
              variant: "heading-lg/extrabold",
              color: "mobile-text-heading-primary",
              children: first,
            };
            const tmp38 = options(Text_Text.Text, obj2);
            cResult[1] = tmp4.title;
            cResult[2] = tmp38;
            let tmp36 = tmp38;
          } else {
            tmp36 = cResult[2];
          }
          const _Symbol2 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl6 = util.intl;
            const stringResult1 = intl6.string(util.t["P/KFXz"]);
            cResult[3] = stringResult1;
            let tmp39 = stringResult1;
          } else {
            tmp39 = cResult[3];
          }
          if (cResult[4] !== tmp4.description) {
            const obj3 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp39 };
            const tmp43 = options(Text_Text.Text, obj3);
            cResult[4] = tmp4.description;
            cResult[5] = tmp43;
            let tmp41 = tmp43;
          } else {
            tmp41 = cResult[5];
          }
          if (cResult[6] === tmp4.header) {
            if (cResult[7] === tmp36) {
              if (cResult[8] === tmp41) {
                let tmp44 = cResult[9];
              }
              return tmp44;
            }
          }
          const obj4 = { style: header2, children: null };
          const items = [tmp36, tmp41];
          obj4.children = items;
          const tmp47 = v65535(View, obj4);
          cResult[6] = tmp4.header;
          cResult[7] = tmp36;
          cResult[8] = tmp41;
          cResult[9] = tmp47;
          tmp44 = tmp47;
        }
      }
      if (ignoredUserCount > 0) {
        ({ header, title } = tmp4);
        if (cResult[10] !== ignoredUserCount) {
          const intl3 = util.intl;
          const obj5 = { number: ignoredUserCount };
          const formatResult = intl3.format(util.t.wvygk8, obj5);
          cResult[10] = ignoredUserCount;
          cResult[11] = formatResult;
          let tmp19 = formatResult;
        } else {
          tmp19 = cResult[11];
        }
        if (cResult[12] === tmp4.title) {
          if (cResult[13] === tmp19) {
            let tmp21 = cResult[14];
          }
          if (cResult[15] !== ignoredUserCount) {
            const intl4 = util.intl;
            const obj6 = { number: ignoredUserCount };
            const formatResult1 = intl4.format(util.t.Ri3o33, obj6);
            cResult[15] = ignoredUserCount;
            cResult[16] = formatResult1;
            let tmp24 = formatResult1;
          } else {
            tmp24 = cResult[16];
          }
          if (cResult[17] === tmp4.description) {
            if (cResult[18] === tmp24) {
              let tmp26 = cResult[19];
            }
            if (cResult[20] === tmp4.header) {
              if (cResult[21] === tmp21) {
                if (cResult[22] === tmp26) {
                  let tmp29 = cResult[23];
                }
                return tmp29;
              }
            }
            const obj7 = { style: header, children: null };
            const items1 = [tmp21, tmp26];
            obj7.children = items1;
            const tmp32 = v65535(View, obj7);
            cResult[20] = tmp4.header;
            cResult[21] = tmp21;
            cResult[22] = tmp26;
            cResult[23] = tmp32;
            tmp29 = tmp32;
          }
          const obj8 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp24 };
          const tmp28 = options(Text_Text.Text, obj8);
          cResult[17] = tmp4.description;
          cResult[18] = tmp24;
          cResult[19] = tmp28;
          tmp26 = tmp28;
        }
        const obj9 = {
          style: title,
          accessibilityRole: "header",
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp19,
        };
        const tmp23 = options(Text_Text.Text, obj9);
        cResult[12] = tmp4.title;
        cResult[13] = tmp19;
        cResult[14] = tmp23;
        tmp21 = tmp23;
      } else {
        ({ header: header3, title: title3 } = tmp4);
        if (cResult[24] !== blockedUserCount) {
          const intl = util.intl;
          const obj10 = { number: blockedUserCount };
          const formatResult2 = intl.format(util.t.HviVA9, obj10);
          cResult[24] = blockedUserCount;
          cResult[25] = formatResult2;
          let tmp5 = formatResult2;
        } else {
          tmp5 = cResult[25];
        }
        if (cResult[26] === tmp4.title) {
          if (cResult[27] === tmp5) {
            let tmp7 = cResult[28];
          }
          if (cResult[29] !== blockedUserCount) {
            const intl2 = util.intl;
            const obj11 = { number: blockedUserCount };
            const formatResult3 = intl2.format(util.t["28qZMU"], obj11);
            cResult[29] = blockedUserCount;
            cResult[30] = formatResult3;
            let tmp10 = formatResult3;
          } else {
            tmp10 = cResult[30];
          }
          if (cResult[31] === tmp4.description) {
            if (cResult[32] === tmp10) {
              let tmp12 = cResult[33];
            }
            if (cResult[34] === tmp4.header) {
              if (cResult[35] === tmp7) {
                if (cResult[36] === tmp12) {
                  let tmp15 = cResult[37];
                }
                return tmp15;
              }
            }
            const obj12 = { style: header3, children: null };
            const items2 = [tmp7, tmp12];
            obj12.children = items2;
            const tmp18 = v65535(View, obj12);
            cResult[34] = tmp4.header;
            cResult[35] = tmp7;
            cResult[36] = tmp12;
            cResult[37] = tmp18;
            tmp15 = tmp18;
          }
          const obj13 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp10 };
          const tmp14 = options(Text_Text.Text, obj13);
          cResult[31] = tmp4.description;
          cResult[32] = tmp10;
          cResult[33] = tmp14;
          tmp12 = tmp14;
        }
        const obj14 = {
          style: title3,
          accessibilityRole: "header",
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp5,
        };
        const tmp9 = options(Text_Text.Text, obj14);
        cResult[26] = tmp4.title;
        cResult[27] = tmp5;
        cResult[28] = tmp9;
        tmp7 = tmp9;
      }
    }
  : (arg0) => {
      ({ blockedUserCount, ignoredUserCount } = arg0);
      const tmp = closure_11();
      if (blockedUserCount > 0) {
        if (ignoredUserCount > 0) {
          const obj2 = { style: tmp.header, children: null };
          const obj3 = {
            style: tmp.title,
            accessibilityRole: "header",
            variant: "heading-lg/extrabold",
            color: "mobile-text-heading-primary",
            children: null,
          };
          const intl3 = util.intl;
          obj3.children = intl3.string(util.t.Uzdyho);
          const items = [options(Text_Text.Text, obj3)];
          const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
          const intl4 = util.intl;
          obj4.children = intl4.string(util.t["P/KFXz"]);
          items[1] = options(Text_Text.Text, obj4);
          obj2.children = items;
          let obj9 = obj2;
        }
        return tmp2(tmp3, obj9);
      }
      if (ignoredUserCount > 0) {
        const obj = { style: tmp.header, children: null };
        const obj5 = {
          style: tmp.title,
          accessibilityRole: "header",
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl = util.intl;
        const obj6 = { number: ignoredUserCount };
        obj5.children = intl.format(util.t.wvygk8, obj6);
        const items1 = [options(Text_Text.Text, obj5)];
        const obj7 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
        const intl2 = util.intl;
        const obj8 = { number: ignoredUserCount };
        obj7.children = intl2.format(util.t.Ri3o33, obj8);
        items1[1] = options(Text_Text.Text, obj7);
        obj.children = items1;
        obj9 = obj;
      } else {
        obj9 = { style: tmp.header, children: null };
        const obj10 = {
          style: tmp.title,
          accessibilityRole: "header",
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl5 = util.intl;
        const obj11 = { number: blockedUserCount };
        obj10.children = intl5.format(util.t.HviVA9, obj11);
        const items2 = [options(Text_Text.Text, obj10)];
        const obj12 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
        const intl6 = util.intl;
        const obj13 = { number: blockedUserCount };
        obj12.children = intl6.format(util.t["28qZMU"], obj13);
        items2[1] = options(Text_Text.Text, obj12);
        obj9.children = items2;
      }
    };
ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.TEXT_DEFAULT };
size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(36);
      channel = channel.channel;
      const onAccept = channel.onAccept;
      const tmp4 = closure_11();
      const obj = channel(576);
      [r10020, dependencyMap] = onPress(arr4.useState(0), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          onAccept(4860).hideActionSheet(closure_1_8);
        };
        cResult[0] = fn;
        onPress = fn;
      } else {
        onPress = cResult[0];
      }
      if (cResult[1] === channel) {
        if (cResult[2] === onAccept) {
          let tmp7 = cResult[3];
        }
        const stageBlockedUsers = tmp(8310).useStageBlockedUsers(channel.id);
        const tmpResult = tmp(8310);
        const stageIgnoredUsers = tmp(8310).useStageIgnoredUsers(channel.id);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor(arg0) {
              tmp = closure_2(channel.nativeEvent.layout.height);
              return;
            }
          }
          cResult[4] = E;
        } else {
          class E {
            constructor(arg0) {
              tmp = closure_2(channel.nativeEvent.layout.height);
              return;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor(arg0) {
              tmp = closure_2(channel.nativeEvent.layout.height);
              return;
            }
          }
          const stringResult = obj4.string(tmp(1126).t.mbD50D);
          cResult[5] = stringResult;
          const tmp9 = stringResult;
        } else {
          class E {
            constructor(arg0) {
              tmp = closure_2(channel.nativeEvent.layout.height);
              return;
            }
          }
        }
        if (cResult[6] !== tmp7) {
          class E {
            constructor(arg0) {
              tmp = closure_2(channel.nativeEvent.layout.height);
              return;
            }
          }
          const obj2 = { text: tmp9, onPress: tmp7 };
          const tmp12 = closure_9(tmp(5601).Button, obj2);
          cResult[6] = tmp7;
          cResult[7] = tmp12;
        } else {
          class E {
            constructor(arg0) {
              tmp = closure_2(channel.nativeEvent.layout.height);
              return;
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor(arg0) {
              tmp = closure_2(channel.nativeEvent.layout.height);
              return;
            }
          }
          const obj3 = { variant: "secondary", text: null, onPress: null };
          const intl = tmp(1126).intl;
          obj3.text = intl.string(tmp(1126).t.CZGqeT);
          obj3.onPress = onPress;
          const tmp14 = closure_9(tmp(5601).Button, obj3);
          cResult[8] = tmp14;
          const tmp13 = tmp14;
        } else {
          class E {
            constructor(arg0) {
              tmp = closure_2(channel.nativeEvent.layout.height);
              return;
            }
          }
        }
        if (cResult[9] === tmp4.buttons) {
          class E {
            constructor(arg0) {
              tmp = closure_2(channel.nativeEvent.layout.height);
              return;
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor(arg0) {
                tmp = closure_2(channel.nativeEvent.layout.height);
                return;
              }
            }
            cResult[12] = tmp19;
          } else {
            class E {
              constructor(arg0) {
                tmp = closure_2(channel.nativeEvent.layout.height);
                return;
              }
            }
          }
          if (cResult[13] === stageBlockedUsers) {
            class E {
              constructor(arg0) {
                tmp = closure_2(channel.nativeEvent.layout.height);
                return;
              }
            }
            if (cResult[16] === channel) {
              class E {
                constructor(arg0) {
                  tmp = closure_2(channel.nativeEvent.layout.height);
                  return;
                }
              }
              if (cResult[19] === length) {
                class E {
                  constructor(arg0) {
                    tmp = closure_2(channel.nativeEvent.layout.height);
                    return;
                  }
                }
                const _Symbol5 = Symbol;
                class Z {
                  constructor(arg0, arg1) {
                    obj = { participant: closure_4[arg1], guildId: channel.getGuildId(), channelId: channel.id };
                    return jsx(f46852, obj);
                  }
                }
                if (tmp29 === Symbol.for("react.memo_cache_sentinel")) {
                  class E {
                    constructor(arg0) {
                      tmp = closure_2(channel.nativeEvent.layout.height);
                      return;
                    }
                  }
                  const stringResult1 = obj9.string(tmp(1126).t["3VoRLH"]);
                  class Z {
                    constructor(arg0, arg1) {
                      obj = { participant: closure_4[arg1], guildId: channel.getGuildId(), channelId: channel.id };
                      return jsx(f46852, obj);
                    }
                  }
                  cResult[22] = stringResult1;
                  const tmp30 = stringResult1;
                } else {
                  class E {
                    constructor(arg0) {
                      tmp = closure_2(channel.nativeEvent.layout.height);
                      return;
                    }
                  }
                }
                if (cResult[23] !== arr4.length) {
                  class E {
                    constructor(arg0) {
                      tmp = closure_2(channel.nativeEvent.layout.height);
                      return;
                    }
                  }
                  tmp33[0] = arr4.length;
                  class Z {
                    constructor(arg0, arg1) {
                      obj = { participant: closure_4[arg1], guildId: channel.getGuildId(), channelId: channel.id };
                      return jsx(f46852, obj);
                    }
                  }
                  cResult[24] = tmp33;
                } else {
                  class E {
                    constructor(arg0) {
                      tmp = closure_2(channel.nativeEvent.layout.height);
                      return;
                    }
                  }
                }
                if (cResult[25] === Z) {
                  class E {
                    constructor(arg0) {
                      tmp = closure_2(channel.nativeEvent.layout.height);
                      return;
                    }
                  }
                }
                const obj5 = {
                  inActionSheet: true,
                  contentContainerStyle: tmp4.container,
                  accessibilityLabel: tmp30,
                  sections: tmp33,
                  renderItem: Z,
                  itemSize: tmp19,
                };
                const tmp37 = closure_9(onAccept(6576), obj5);
                cResult[25] = Z;
                cResult[26] = tmp4.container;
                cResult[27] = tmp33;
                cResult[28] = tmp37;
              }
              class Z {
                constructor(arg0, arg1) {
                  obj = { participant: closure_4[arg1], guildId: channel.getGuildId(), channelId: channel.id };
                  return jsx(f46852, obj);
                }
              }
              const obj6 = { blockedUserCount: length, ignoredUserCount: length2 };
              const tmp28 = closure_9(closure_13, obj6);
              cResult[19] = length;
              cResult[20] = length2;
              cResult[21] = tmp28;
            }
            class Z {
              constructor(arg0, arg1) {
                obj = { participant: closure_4[arg1], guildId: channel.getGuildId(), channelId: channel.id };
                return jsx(f46852, obj);
              }
            }
            cResult[16] = channel;
            cResult[17] = arr4;
            cResult[18] = Z;
          }
          const items = [];
          HermesBuiltin.arraySpread(stageIgnoredUsers, HermesBuiltin.arraySpread(stageBlockedUsers, 0));
          cResult[13] = stageBlockedUsers;
          cResult[14] = stageIgnoredUsers;
          cResult[15] = items;
        }
        const obj7 = { bottom: true, style: tmp4.buttons, onLayout: E, children: null };
        const items1 = [tmp11, tmp13];
        obj7.children = items1;
        class R {
          constructor() {
            tmp = onAccept(channel);
            tmp2 = closure_3();
            return;
          }
        }
        cResult[9] = tmp4.buttons;
        cResult[10] = tmp11;
        cResult[11] = tmp17;
        const tmpResult2 = tmp(8310);
      }
      class R {
        constructor() {
          tmp = onAccept(channel);
          tmp2 = closure_3();
          return;
        }
      }
      cResult[1] = channel;
      cResult[2] = onAccept;
      cResult[3] = R;
      tmp7 = R;
      const tmp5 = onPress(arr4.useState(0), 2);
    }
  : (channel) => {
      channel = channel.channel;
      const onAccept = channel.onAccept;
      let items1;
      const tmp = closure_11();
      const tmp2 = items1(noop.useState(0), 2);
      dependencyMap = tmp2[1];
      const stageBlockedUsers = channel(8310).useStageBlockedUsers(channel.id);
      const obj = channel(8310);
      const stageIgnoredUsers = channel(8310).useStageIgnoredUsers(channel.id);
      const callback = noop.useCallback((nativeEvent) => {
        dependencyMap(nativeEvent.nativeEvent.layout.height);
      }, []);
      const obj3 = { bottom: true, style: tmp.buttons, onLayout: callback, children: null };
      const obj4 = { text: null, onPress: null };
      const intl = channel(1126).intl;
      obj4.text = intl.string(channel(1126).t.mbD50D);
      obj4.onPress = function onPress() {
        onAccept(channel);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
      };
      const items = [closure_9(channel(5601).Button, obj4)];
      const obj5 = { variant: "secondary", text: null, onPress: null };
      const intl2 = channel(1126).intl;
      obj5.text = intl2.string(channel(1126).t.CZGqeT);
      obj5.onPress = function handleDismiss() {
        onAccept(4860).hideActionSheet(closure_1_8);
      };
      items[1] = closure_9(channel(5601).Button, obj5);
      obj3.children = items;
      items1 = [];
      const obj2 = channel(8310);
      HermesBuiltin.arraySpread(stageIgnoredUsers, HermesBuiltin.arraySpread(stageBlockedUsers, 0));
      const obj6 = {
        scrollable: true,
        header: closure_9(closure_13, {
          blockedUserCount: stageBlockedUsers.length,
          ignoredUserCount: stageIgnoredUsers.length,
        }),
        footer: closure_10(channel(6626).SafeAreaPaddingView, obj3),
        children: null,
      };
      const obj7 = {
        inActionSheet: true,
        contentContainerStyle: tmp.container,
        accessibilityLabel: null,
        sections: null,
        renderItem: null,
        itemSize: null,
      };
      const tmp4 = closure_10(channel(6626).SafeAreaPaddingView, obj3);
      const intl3 = channel(1126).intl;
      obj7.accessibilityLabel = intl3.string(channel(1126).t["3VoRLH"]);
      const items2 = [items1.length];
      obj7.sections = items2;
      obj7.renderItem = function renderItem(arg0, arg1) {
        return options(closure_12, { participant: items1[arg1], guildId: channel.getGuildId(), channelId: channel.id });
      };
      obj7.itemSize = function itemSize() {
        return 48;
      };
      const items3 = [closure_9(onAccept(6576), obj7), closure_9(View, { style: { height: tmp2[0] } })];
      obj6.children = items3;
      return closure_10(channel(6652).BottomSheet, obj6);
    };
