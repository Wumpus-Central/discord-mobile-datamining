// discord_app/modules/applications/native/AppInteractionInfoActionSheet.tsx
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import ContextMenuSubmenuActionSheetHeaderDefault from "../../action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserRecord from "../../../records/UserRecord.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let closure_10 = createStyles.createStyles({
  itemContainer: { flexDirection: "row", paddingVertical: 12, paddingHorizontal: 16, alignItems: "center" },
  itemLabel: { flexDirection: "column", alignItems: "flex-start", paddingLeft: 12 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/native/AppInteractionInfoActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppInteractionInfoActionSheet(message) {
      const cResult = message(576).c(66);
      message = message.message;
      ({ guildId, onBack } = message);
      const tmp4 = closure_10();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== onBack) {
        const obj2 = { onBack };
        const tmp8 = closure_8(tmp5(12778), obj2);
        cResult[0] = onBack;
        cResult[1] = tmp8;
      }
      const interactionMetadata = message.interactionMetadata;
      let tmp9;
      if (interactionMetadata != null) {
        tmp9 =
          interactionMetadata.authorizing_integration_owners[
            tmp(undefined, 9207).ApplicationIntegrationType.USER_INSTALL
          ];
      }
      importDefault = tmp9;
      const interactionMetadata2 = message.interactionMetadata;
      let tmp10;
      if (interactionMetadata2 != null) {
        tmp10 =
          interactionMetadata2.authorizing_integration_owners[
            tmp(undefined, 9207).ApplicationIntegrationType.GUILD_INSTALL
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
        let tmp12 = items;
      } else {
        tmp12 = cResult[2];
      }
      if (cResult[3] !== tmp9) {
        const fn = function f() {
          return UserStore.getUser(closure_1);
        };
        cResult[3] = tmp9;
        cResult[4] = fn;
        let tmp14 = fn;
      } else {
        tmp14 = cResult[4];
      }
      let obj = message(576);
      const stateFromStores = message(504).useStateFromStores(tmp12, tmp14);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[5] = items1;
        let tmp16 = items1;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] !== tmp10) {
        class U {
          constructor() {
            return closure_6.getGuild(closure_2);
          }
        }
        cResult[6] = tmp10;
        cResult[7] = U;
      } else {
        class U {
          constructor() {
            return closure_6.getGuild(closure_2);
          }
        }
      }
      const tmpResult = message(504);
      const stateFromStores1 = message(504).useStateFromStores(tmp16, U);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return closure_6.getGuild(closure_2);
          }
        }
        const items2 = [UserStore];
        cResult[8] = items2;
        const tmp20 = items2;
      } else {
        class U {
          constructor() {
            return closure_6.getGuild(closure_2);
          }
        }
      }
      if (cResult[9] !== id) {
        class F {
          constructor() {
            return closure_7.getUser(id);
          }
        }
        cResult[9] = id;
        cResult[10] = F;
      } else {
        class F {
          constructor() {
            return closure_7.getUser(id);
          }
        }
      }
      const tmpResult3 = message(504);
      const stateFromStores2 = message(504).useStateFromStores(tmp20, F);
      id = stateFromStores2;
      if (cResult[11] === stateFromStores) {
        class F {
          constructor() {
            return closure_7.getUser(id);
          }
        }
        const effect = id.useEffect(P, items6);
        let tmp25 = stateFromStores2;
        if (null == stateFromStores2) {
          class F {
            constructor() {
              return closure_7.getUser(id);
            }
          }
          if (tmp27 != null) {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
          }
          const tmp262 = new id(undefined);
          id = tmp262;
          tmp25 = tmp262;
        }
        if (null != stateFromStores1) {
          class F {
            constructor() {
              return closure_7.getUser(id);
            }
          }
          if (cResult[15] !== stateFromStores1) {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
            const obj3 = { guild: stateFromStores1, size: tmp(6165).GuildIconSizes.SMALL_32 };
            const tmp37 = closure_8(tmp5(6165), obj3);
            cResult[15] = stateFromStores1;
            cResult[16] = tmp37;
            const tmp5Result = tmp5(6165);
          } else {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
          }
          if (cResult[17] !== stateFromStores1.name) {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
            const obj4 = {
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              children: stateFromStores1.name,
            };
            const tmp39 = closure_8(tmp(5087).Text, obj4);
            cResult[17] = stateFromStores1.name;
            cResult[18] = tmp39;
          } else {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
          }
          if (cResult[19] !== message.author.username) {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
            const obj5 = { application: message.author.username };
            const formatResult = obj8.format(tmp(1126).t.ShLXXB, obj5);
            cResult[19] = message.author.username;
            cResult[20] = formatResult;
          } else {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
          }
          if (cResult[21] !== tmp40) {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
            const obj6 = { variant: "text-xs/medium", color: "text-subtle", children: tmp40 };
            const tmp43 = closure_8(tmp(5087).Text, obj6);
            cResult[21] = tmp40;
            cResult[22] = tmp43;
          } else {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
          }
          if (cResult[23] === tmp4.itemLabel) {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
          }
          const obj7 = { style: tmp4.itemLabel, children: null };
          const items3 = [tmp38, tmp42];
          obj7.children = items3;
          const tmp47 = closure_9(stateFromStores, obj7);
          cResult[23] = tmp4.itemLabel;
          cResult[24] = tmp38;
          cResult[25] = tmp42;
          cResult[26] = tmp47;
        } else {
          class F {
            constructor() {
              return closure_7.getUser(id);
            }
          }
          if (null != stateFromStores) {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
            class W {
              constructor() {
                obj = { userId: closure_4.id, channelId: message.channel_id };
                return closure_1(closure_2[17])(obj);
              }
            }
            cResult[31] = stateFromStores.id;
            cResult[32] = message.channel_id;
            cResult[33] = W;
          }
          if (cResult[54] !== bottom) {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
            class W {
              constructor() {
                obj = { userId: closure_4.id, channelId: message.channel_id };
                return closure_1(closure_2[17])(obj);
              }
            }
            cResult[54] = bottom;
            cResult[55] = tmp49;
          } else {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
          }
          if (cResult[56] === guildId) {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
          }
          let tmp51 = null;
          if (null != tmp25) {
            class F {
              constructor() {
                return closure_7.getUser(id);
              }
            }
            class W {
              constructor() {
                obj = { userId: closure_4.id, channelId: message.channel_id };
                return closure_1(closure_2[17])(obj);
              }
            }
            tmp52[0] = function onPress() {
              return showUserProfileActionSheetDefault({ userId: id.id, channelId: message.channel_id });
            };
            const obj9 = { style: tmp4.itemContainer, children: null };
            const obj10 = { user: tmp25, size: tmp(1200).AvatarSizes.REFRESH_MEDIUM_32, guildId };
            const items4 = [closure_8(tmp(1200).Avatar, obj10)];
            const obj11 = { style: tmp4.itemLabel, children: null };
            const obj12 = {
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              children: tmp25.username,
            };
            const items5 = [closure_8(tmp(5087).Text, obj12)];
            const obj13 = { variant: "text-xs/medium", color: "text-subtle", children: null };
            const intl = tmp(1126).intl;
            obj13.children = intl.string(tmp(1126).t["04gxNg"]);
            items5[1] = closure_8(tmp(5087).Text, obj13);
            obj11.children = items5;
            items4[1] = closure_9(stateFromStores, obj11);
            obj9.children = items4;
            tmp52[1] = closure_9(stateFromStores, obj9);
            tmp51 = closure_8(tmp(6191).PressableOpacity, tmp52);
          }
          cResult[56] = guildId;
          cResult[57] = tmp25;
          cResult[58] = message.channel_id;
          cResult[59] = tmp4;
          cResult[60] = tmp51;
        }
      }
      class P {
        constructor() {
          tmp = null == closure_4;
          if (tmp) {
            tmp2 = closure_1;
            tmp = null != closure_1;
          }
          if (tmp) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[13]);
            tmp5 = closure_1;
            user = obj.getUser(closure_1);
          }
          return;
        }
      }
      items6 = [stateFromStores, tmp9];
      cResult[11] = stateFromStores;
      cResult[12] = tmp9;
      cResult[13] = P;
      cResult[14] = items6;
      const tmpResult4 = message(504);
    }
  : function AppInteractionInfoActionSheet(message) {
      message = message.message;
      ({ guildId, onBack } = message);
      dependencyMap = undefined;
      noop = undefined;
      let stateFromStores;
      let id;
      let tmp = closure_10();
      const items = [onBack];
      const interactionMetadata = message.interactionMetadata;
      let tmp5;
      const memo = noop.useMemo(() => closure_2_8(ContextMenuSubmenuActionSheetHeaderDefault, { onBack }), items);
      if (interactionMetadata != null) {
        tmp5 =
          interactionMetadata.authorizing_integration_owners[
            message(undefined, 9207).ApplicationIntegrationType.USER_INSTALL
          ];
      }
      dependencyMap = tmp5;
      const interactionMetadata2 = message.interactionMetadata;
      let tmp7;
      if (interactionMetadata2 != null) {
        tmp7 =
          interactionMetadata2.authorizing_integration_owners[
            message(undefined, 9207).ApplicationIntegrationType.GUILD_INSTALL
          ];
      }
      noop = tmp7;
      const interactionMetadata3 = message.interactionMetadata;
      id = undefined;
      if (interactionMetadata3 != null) {
        id = interactionMetadata3.user.id;
      }
      const items1 = [UserStore];
      stateFromStores = message(504).useStateFromStores(items1, () => UserStore.getUser(closure_2));
      let obj = noop;
      const obj2 = message(504);
      const items2 = [id];
      const stateFromStores1 = message(504).useStateFromStores(items2, () => GuildStore.getGuild(closure_3));
      const obj3 = message(504);
      const items3 = [UserStore];
      const stateFromStores2 = message(504).useStateFromStores(items3, () => UserStore.getUser(id));
      id = stateFromStores2;
      const items4 = [stateFromStores, tmp5];
      const effect = obj.useEffect(() => {
        let tmp = null == stateFromStores;
        if (tmp) {
          tmp = null != closure_2;
        }
        if (tmp) {
          const user = UserActionCreators.getUser(closure_2);
        }
      }, items4);
      let tmp15 = stateFromStores2;
      if (null == stateFromStores2) {
        const interactionMetadata4 = message.interactionMetadata;
        let user;
        if (interactionMetadata4 != null) {
          user = interactionMetadata4.user;
        }
        const tmp162 = new stateFromStores(user);
        id = tmp162;
        tmp15 = tmp162;
      }
      if (null != stateFromStores1) {
        const obj5 = { style: tmp.itemContainer, children: null };
        const obj6 = { guild: stateFromStores1, size: tmp10(6165).GuildIconSizes.SMALL_32 };
        const items5 = [closure_8(onBack(6165), obj6)];
        const obj7 = { style: tmp.itemLabel, children: null };
        const obj8 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: stateFromStores1.name,
        };
        const items6 = [closure_8(tmp10(5087).Text, obj8)];
        const obj9 = { variant: "text-xs/medium", color: "text-subtle", children: null };
        const intl2 = tmp10(1126).intl;
        const obj10 = { application: message.author.username };
        obj9.children = intl2.format(tmp10(1126).t.ShLXXB, obj10);
        items6[1] = closure_8(tmp10(5087).Text, obj9);
        obj7.children = items6;
        items5[1] = closure_9(id, obj7);
        obj5.children = items5;
        let tmp26 = closure_9(id, obj5);
        const tmp2Result = onBack(6165);
      } else {
        tmp26 = null;
        if (null != stateFromStores) {
          const obj11 = {
            onPress() {
              return showUserProfileActionSheetDefault({ userId: stateFromStores.id, channelId: message.channel_id });
            },
            children: null,
          };
          const obj12 = { style: tmp.itemContainer, children: null };
          const obj13 = { user: stateFromStores, size: tmp10(1200).AvatarSizes.REFRESH_MEDIUM_32, guildId };
          const items7 = [closure_8(tmp10(1200).Avatar, obj13)];
          const obj14 = { style: tmp.itemLabel, children: null };
          const obj15 = {
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: stateFromStores.username,
          };
          const items8 = [closure_8(tmp10(5087).Text, obj15)];
          const obj16 = { variant: "text-xs/medium", color: "text-subtle", children: null };
          const intl = tmp10(1126).intl;
          const obj17 = { application: message.author.username };
          obj16.children = intl.format(tmp10(1126).t.ShLXXB, obj17);
          items8[1] = closure_8(tmp10(5087).Text, obj16);
          obj14.children = items8;
          items7[1] = closure_9(id, obj14);
          obj12.children = items7;
          obj11.children = closure_9(id, obj12);
          tmp26 = closure_8(tmp10(6191).PressableOpacity, obj11);
        }
      }
      const obj18 = { header: memo, bodyStyles: { paddingBottom: onBack(1631)().bottom }, children: null };
      const items9 = [tmp26];
      let tmp32 = null;
      if (null != tmp15) {
        const obj19 = {
          onPress() {
            return showUserProfileActionSheetDefault({ userId: id.id, channelId: message.channel_id });
          },
          children: null,
        };
        const obj20 = { style: tmp.itemContainer, children: null };
        const obj21 = { user: tmp15, size: tmp10(1200).AvatarSizes.REFRESH_MEDIUM_32, guildId };
        const items10 = [closure_8(tmp10(1200).Avatar, obj21)];
        const obj22 = { style: tmp.itemLabel, children: null };
        const obj23 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp15.username };
        const items11 = [closure_8(tmp10(5087).Text, obj23)];
        const obj24 = { variant: "text-xs/medium", color: "text-subtle", children: null };
        const intl3 = tmp10(1126).intl;
        obj24.children = intl3.string(tmp10(1126).t["04gxNg"]);
        items11[1] = closure_8(tmp10(5087).Text, obj24);
        obj22.children = items11;
        items10[1] = closure_9(id, obj22);
        obj20.children = items10;
        obj19.children = closure_9(id, obj20);
        tmp32 = closure_8(tmp10(6191).PressableOpacity, obj19);
      }
      items9[1] = tmp32;
      obj18.children = items9;
      return closure_9(message(6836).BottomSheet, obj18);
    };
