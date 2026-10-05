// discord_app/modules/applications/native/AppInteractionInfoActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import ContextMenuSubmenuActionSheetHeaderDefault from "../../action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import UserRecord from "../../../records/UserRecord.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, dependencyMap, importDefault;

let c9;
let metroImportAll;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({
  itemContainer: { flexDirection: "row", paddingVertical: 12, paddingHorizontal: 16, alignItems: "center" },
  itemLabel: { flexDirection: "column", alignItems: "flex-start", paddingLeft: 12 },
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (message) {
      let closure_1;
      let closure_2;
      let guildId;
      let intl;
      let items3;
      let items4;
      let items5;
      let items6;
      let onBack;
      let tmp12;
      let tmp14;
      let tmp16;
      let tmp20;
      let tmp = message;
      let obj = message(576);
      const cResult = obj.c(66);
      message = message.message;
      ({ guildId, onBack } = message);
      const tmp4 = closure_10();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== onBack) {
        const obj2 = { onBack };
        cResult[0] = onBack;
        cResult[1] = closure_8(ContextMenuSubmenuActionSheetHeaderDefault, obj2);
        const tmp8 = closure_8(ContextMenuSubmenuActionSheetHeaderDefault, obj2);
      }
      const interactionMetadata = message.interactionMetadata;
      let tmp9;
      if (interactionMetadata != null) {
        tmp9 =
          interactionMetadata.authorizing_integration_owners[
            tmp(undefined, 8708).ApplicationIntegrationType.USER_INSTALL
          ];
      }
      importDefault = tmp9;
      const interactionMetadata2 = message.interactionMetadata;
      let tmp10;
      if (interactionMetadata2 != null) {
        tmp10 =
          interactionMetadata2.authorizing_integration_owners[
            tmp(undefined, 8708).ApplicationIntegrationType.GUILD_INSTALL
          ];
      }
      dependencyMap = tmp10;
      const interactionMetadata3 = message.interactionMetadata;
      let id;
      if (interactionMetadata3 != null) {
        id = interactionMetadata3.user.id;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[2] = items;
        tmp12 = items;
      } else {
        tmp12 = cResult[2];
      }
      if (cResult[3] !== tmp9) {
        const fn = function f() {
          return UserStore.getUser(closure_1);
        };
        cResult[3] = tmp9;
        cResult[4] = fn;
        tmp14 = fn;
      } else {
        tmp14 = cResult[4];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp14);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[5] = items1;
        tmp16 = items1;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] !== tmp10) {
        class U {
          constructor() {
            return GuildStore.getGuild(closure_2);
          }
        }
        cResult[6] = tmp10;
        cResult[7] = U;
      } else {
        class U {
          constructor() {
            return GuildStore.getGuild(closure_2);
          }
        }
      }
      const tmpResult3 = tmp(504);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp16, U);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return GuildStore.getGuild(closure_2);
          }
        }
        const items2 = [UserStore];
        cResult[8] = items2;
        tmp20 = items2;
      } else {
        class U {
          constructor() {
            return GuildStore.getGuild(closure_2);
          }
        }
      }
      if (cResult[9] !== id) {
        class F {
          constructor() {
            return UserStore.getUser(id);
          }
        }
        cResult[9] = id;
        cResult[10] = F;
      } else {
        class F {
          constructor() {
            return UserStore.getUser(id);
          }
        }
      }
      const tmpResult4 = tmp(504);
      let stateFromStores2 = tmpResult4.useStateFromStores(tmp20, F);
      if (cResult[11] === stateFromStores) {
        class F {
          constructor() {
            return UserStore.getUser(id);
          }
        }
        const effect = id.useEffect(P, items6);
        let tmp25 = stateFromStores2;
        if (null == stateFromStores2) {
          class F {
            constructor() {
              return UserStore.getUser(id);
            }
          }
          const tmp26 = stateFromStores2;
          if (tmp27 != null) {
            class F {
              constructor() {
                return UserStore.getUser(id);
              }
            }
          }
          const self = this;
          const self2 = this;
          const tmp262 = new tmp26(undefined);
          stateFromStores2 = tmp262;
          tmp25 = tmp262;
        }
        if (null != stateFromStores1) {
          class F {
            constructor() {
              return UserStore.getUser(id);
            }
          }
          if (cResult[15] !== stateFromStores1) {
            class F {
              constructor() {
                return UserStore.getUser(id);
              }
            }
            const obj3 = { guild: stateFromStores1, size: tmp(5971).GuildIconSizes.SMALL_32 };
            const tmp5Result = GuildIconDefault;
            cResult[15] = stateFromStores1;
            cResult[16] = closure_8(tmp5Result, obj3);
            const tmp35 = closure_8(tmp5Result, obj3);
          } else {
            class F {
              constructor() {
                return UserStore.getUser(id);
              }
            }
          }
          const itemLabel = tmp4.itemLabel;
          if (cResult[17] !== stateFromStores1.name) {
            class F {
              constructor() {
                return UserStore.getUser(id);
              }
            }
            const obj4 = {
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              children: stateFromStores1.name,
            };
            cResult[17] = stateFromStores1.name;
            cResult[18] = closure_8(tmp(4886).Text, obj4);
            const tmp37 = closure_8(tmp(4886).Text, obj4);
          } else {
            class F {
              constructor() {
                return UserStore.getUser(id);
              }
            }
          }
          if (cResult[19] !== message.author.username) {
            class F {
              constructor() {
                return UserStore.getUser(id);
              }
            }
            const obj5 = { application: message.author.username };
            cResult[19] = message.author.username;
            cResult[20] = obj8.format(tmp(1126).t.ShLXXB, obj5);
            const formatResult = obj8.format(tmp(1126).t.ShLXXB, obj5);
          } else {
            class F {
              constructor() {
                return UserStore.getUser(id);
              }
            }
          }
          if (cResult[21] !== tmp38) {
            class F {
              constructor() {
                return UserStore.getUser(id);
              }
            }
            const obj6 = { variant: "text-xs/medium", color: "text-subtle", children: tmp38 };
            cResult[21] = tmp38;
            cResult[22] = closure_8(tmp(4886).Text, obj6);
            const tmp41 = closure_8(tmp(4886).Text, obj6);
          } else {
            class F {
              constructor() {
                return UserStore.getUser(id);
              }
            }
          }
          if (cResult[23] === tmp4.itemLabel) {
            class F {
              constructor() {
                return UserStore.getUser(id);
              }
            }
          }
          const obj7 = { style: itemLabel, children: items3 };
          items3 = [tmp36, tmp40];
          cResult[23] = tmp4.itemLabel;
          cResult[24] = tmp36;
          cResult[25] = tmp40;
          cResult[26] = closure_9(stateFromStores, obj7);
          const tmp45 = closure_9(stateFromStores, obj7);
        } else {
          class F {
            constructor() {
              return UserStore.getUser(id);
            }
          }
          if (null != stateFromStores) {
            class F {
              constructor() {
                return UserStore.getUser(id);
              }
            }
            class W {
              constructor() {
                const obj = { userId: stateFromStores.id, channelId: message.channel_id };
                return showUserProfileActionSheetDefault(obj);
              }
            }
            cResult[31] = stateFromStores.id;
            cResult[32] = message.channel_id;
            cResult[33] = W;
          }
        }
        if (cResult[54] !== bottom) {
          class F {
            constructor() {
              return UserStore.getUser(id);
            }
          }
          class W {
            constructor() {
              const obj = { userId: stateFromStores.id, channelId: message.channel_id };
              return showUserProfileActionSheetDefault(obj);
            }
          }
          cResult[54] = bottom;
          cResult[55] = tmp47;
        } else {
          class F {
            constructor() {
              return UserStore.getUser(id);
            }
          }
        }
        if (cResult[56] === guildId) {
          class F {
            constructor() {
              return UserStore.getUser(id);
            }
          }
        }
        let tmp49 = null;
        if (null != tmp25) {
          class F {
            constructor() {
              return UserStore.getUser(id);
            }
          }
          class W {
            constructor() {
              const obj = { userId: stateFromStores.id, channelId: message.channel_id };
              return showUserProfileActionSheetDefault(obj);
            }
          }
          tmp50[0] = function onPress() {
            const obj = { userId: stateFromStores2.id, channelId: message.channel_id };
            return showUserProfileActionSheetDefault(obj);
          };
          const obj9 = { style: tmp4.itemContainer, children: items4 };
          const PressableOpacity = tmp(5909).PressableOpacity;
          const obj10 = { user: tmp25, size: tmp(1188).AvatarSizes.REFRESH_MEDIUM_32, guildId };
          const Avatar = tmp(1188).Avatar;
          items4 = [closure_8(Avatar, obj10)];
          const obj11 = { style: tmp4.itemLabel, children: items5 };
          const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp25.username };
          items5 = [closure_8(tmp(4886).Text, obj12)];
          const obj13 = {
            variant: "text-xs/medium",
            color: "text-subtle",
            children: intl.string(tmp(1126).t["04gxNg"]),
          };
          const Text = tmp(4886).Text;
          intl = tmp(1126).intl;
          items5[1] = closure_8(Text, obj13);
          items4[1] = closure_9(stateFromStores, obj11);
          tmp50[1] = closure_9(stateFromStores, obj9);
          tmp49 = closure_8(PressableOpacity, tmp50);
        }
        cResult[56] = guildId;
        cResult[57] = tmp25;
        cResult[58] = message.channel_id;
        cResult[59] = tmp4;
        cResult[60] = tmp49;
      }
      class P {
        constructor() {
          const tmp = null == stateFromStores && null != closure_1;
          if (tmp) {
            const obj = UserActionCreators;
            const user = obj.getUser(closure_1);
          }
        }
      }
      items6 = [stateFromStores, tmp9];
      cResult[11] = stateFromStores;
      cResult[12] = tmp9;
      cResult[13] = P;
      cResult[14] = items6;
    }
  : function (message) {
      let closure_2;
      let closure_3;
      let guildId;
      let intl;
      let intl2;
      let intl3;
      let items10;
      let items11;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let obj10;
      let obj12;
      let obj17;
      let obj20;
      let onBack;
      let tmp24;
      message = message.message;
      ({ guildId, onBack } = message);
      dependencyMap = undefined;
      react = undefined;
      let stateFromStores;
      let id;
      let tmp = closure_10();
      let obj = react;
      const items = [onBack];
      const bottom = onBack(1618)().bottom;
      const interactionMetadata = message.interactionMetadata;
      let tmp5;
      const memo = react.useMemo(() => {
        const obj = { onBack };
        return metroImportAll(ContextMenuSubmenuActionSheetHeaderDefault, obj);
      }, items);
      if (interactionMetadata != null) {
        tmp5 =
          interactionMetadata.authorizing_integration_owners[
            message(undefined, 8708).ApplicationIntegrationType.USER_INSTALL
          ];
      }
      dependencyMap = tmp5;
      const interactionMetadata2 = message.interactionMetadata;
      let tmp7;
      if (interactionMetadata2 != null) {
        tmp7 =
          interactionMetadata2.authorizing_integration_owners[
            message(undefined, 8708).ApplicationIntegrationType.GUILD_INSTALL
          ];
      }
      react = tmp7;
      const interactionMetadata3 = message.interactionMetadata;
      id = undefined;
      if (interactionMetadata3 != null) {
        id = interactionMetadata3.user.id;
      }
      const items1 = [UserStore];
      const obj2 = message(504);
      stateFromStores = obj2.useStateFromStores(items1, () => UserStore.getUser(closure_2));
      const items2 = [id];
      const obj3 = message(504);
      const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(closure_3));
      const items3 = [UserStore];
      const obj4 = message(504);
      const stateFromStores2 = obj4.useStateFromStores(items3, () => UserStore.getUser(id));
      id = stateFromStores2;
      const items4 = [stateFromStores, tmp5];
      const effect = obj.useEffect(() => {
        const tmp = null == stateFromStores && null != closure_2;
        if (tmp) {
          const obj = UserActionCreators;
          const user = obj.getUser(closure_2);
        }
      }, items4);
      let tmp15 = stateFromStores2;
      if (null == stateFromStores2) {
        const interactionMetadata4 = message.interactionMetadata;
        let user;
        const tmp16 = stateFromStores;
        if (interactionMetadata4 != null) {
          user = interactionMetadata4.user;
        }
        const self = this;
        const self2 = this;
        const tmp162 = new tmp16(user);
        id = tmp162;
        tmp15 = tmp162;
      }
      if (null != stateFromStores1) {
        const obj5 = { style: tmp.itemContainer, children: items5 };
        const obj6 = { guild: stateFromStores1, size: message(5971).GuildIconSizes.SMALL_32 };
        const tmp2Result = onBack(5971);
        items5 = [closure_8(tmp2Result, obj6)];
        const obj7 = { style: tmp.itemLabel, children: items6 };
        const obj8 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: stateFromStores1.name,
        };
        items6 = [closure_8(message(4886).Text, obj8)];
        const obj9 = {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: intl2.format(message(1126).t.ShLXXB, obj10),
        };
        const Text2 = tmp10(4886).Text;
        intl2 = tmp10(1126).intl;
        obj10 = { application: message.author.username };
        items6[1] = closure_8(Text2, obj9);
        items5[1] = closure_9(id, obj7);
        tmp24 = closure_9(id, obj5);
      } else {
        tmp24 = null;
        if (null != stateFromStores) {
          const obj11 = {
            onPress() {
              const obj = { userId: stateFromStores.id, channelId: message.channel_id };
              return showUserProfileActionSheetDefault(obj);
            },
            children: closure_9(id, obj12),
          };
          obj12 = { style: tmp.itemContainer, children: items7 };
          const PressableOpacity = tmp10(5909).PressableOpacity;
          const obj13 = { user: stateFromStores, size: message(1188).AvatarSizes.REFRESH_MEDIUM_32, guildId };
          const Avatar = tmp10(1188).Avatar;
          items7 = [closure_8(Avatar, obj13)];
          const obj14 = { style: tmp.itemLabel, children: items8 };
          const obj15 = {
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: stateFromStores.username,
          };
          items8 = [closure_8(message(4886).Text, obj15)];
          const obj16 = {
            variant: "text-xs/medium",
            color: "text-subtle",
            children: intl.format(message(1126).t.ShLXXB, obj17),
          };
          const Text = tmp10(4886).Text;
          intl = tmp10(1126).intl;
          obj17 = { application: message.author.username };
          items8[1] = closure_8(Text, obj16);
          items7[1] = closure_9(id, obj14);
          tmp24 = closure_8(PressableOpacity, obj11);
        }
      }
      const obj18 = { header: memo, bodyStyles: { paddingBottom: bottom }, children: items9 };
      items9 = [tmp24];
      let tmp30 = null;
      BottomSheet = tmp10(6645).BottomSheet;
      if (null != tmp15) {
        const obj19 = {
          onPress() {
            const obj = { userId: id.id, channelId: message.channel_id };
            return showUserProfileActionSheetDefault(obj);
          },
          children: closure_9(id, obj20),
        };
        obj20 = { style: tmp.itemContainer, children: items10 };
        const PressableOpacity2 = tmp10(5909).PressableOpacity;
        const obj21 = { user: tmp15, size: message(1188).AvatarSizes.REFRESH_MEDIUM_32, guildId };
        const Avatar2 = tmp10(1188).Avatar;
        items10 = [closure_8(Avatar2, obj21)];
        const obj22 = { style: tmp.itemLabel, children: items11 };
        const obj23 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp15.username };
        items11 = [closure_8(message(4886).Text, obj23)];
        const obj24 = {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: intl3.string(message(1126).t["04gxNg"]),
        };
        const Text3 = tmp10(4886).Text;
        intl3 = tmp10(1126).intl;
        items11[1] = closure_8(Text3, obj24);
        items10[1] = closure_9(id, obj22);
        tmp30 = closure_8(PressableOpacity2, obj19);
      }
      items9[1] = tmp30;
      return closure_9(BottomSheet, obj18);
    };
const result = size.fileFinishedImporting("modules/applications/native/AppInteractionInfoActionSheet.tsx");

export default tmp3;
