// discord_app/modules/guild_onboarding_home/native/GuildHomeResources.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../routing/router_utils.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import GuildOnboardingHomeActionCreators from "../GuildOnboardingHomeActionCreators.tsx";
import useResourceChannelsDefault from "../useResourceChannels.tsx";
import _modDef16817 from "../../../../_runtime/metro/16817__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1085);
({ Permissions: c10, Routes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { paddingHorizontal: 12, display: "flex", flexDirection: "column", alignItems: "center" },
  emptyStateContainer: { padding: 20, display: "flex", flexDirection: "column", alignItems: "center" },
  channelContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    marginBottom: 8,
    padding: 12,
    borderRadius: nativeDefault.radii.sm,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  messageContent: { marginTop: 8 },
  textContent: { flex: 1 },
  thumbnail: { marginLeft: 8 },
  emptyStateImage: { marginTop: 12, marginBottom: 20 },
  icon: { width: 72, height: 72 },
};
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ResourceChannelRow(channelId) {
      const cResult = channelId(576).c(63);
      channelId = channelId.channelId;
      ({ title, icon, description } = channelId);
      closure_14();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function c() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = channelId(576);
      const stateFromStores = channelId(504).useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [PermissionStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        class P {
          constructor() {
            return closure_9.can(Permissions.VIEW_CHANNEL, closure_1);
          }
        }
        cResult[4] = stateFromStores;
        cResult[5] = P;
      } else {
        class P {
          constructor() {
            return closure_9.can(Permissions.VIEW_CHANNEL, closure_1);
          }
        }
      }
      const tmpResult = channelId(504);
      const stateFromStores1 = channelId(504).useStateFromStores(tmp9, P);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            return closure_9.can(Permissions.VIEW_CHANNEL, closure_1);
          }
        }
        const items2 = [MessageStore];
        cResult[6] = items2;
        const tmp13 = items2;
      } else {
        class P {
          constructor() {
            return closure_9.can(Permissions.VIEW_CHANNEL, closure_1);
          }
        }
      }
      if (cResult[7] !== channelId) {
        class F {
          constructor() {
            return closure_8.getMessages(channelId);
          }
        }
        cResult[7] = channelId;
        cResult[8] = F;
      } else {
        class F {
          constructor() {
            return closure_8.getMessages(channelId);
          }
        }
      }
      const tmpResult6 = channelId(504);
      const stateFromStores2 = channelId(504).useStateFromStores(tmp13, F);
      if (cResult[9] !== stateFromStores2) {
        class F {
          constructor() {
            return closure_8.getMessages(channelId);
          }
        }
        cResult[9] = stateFromStores2;
        cResult[10] = tmp16;
      } else {
        class F {
          constructor() {
            return closure_8.getMessages(channelId);
          }
        }
      }
      const tmpResult7 = channelId(504);
      const forumPostMediaProperties = channelId(8454).useForumPostMediaProperties(tmp16, false);
      const tmpResult8 = channelId(8454);
      const firstMediaIsEmbed = channelId(8454).useFirstMediaIsEmbed(tmp16, false);
      if (forumPostMediaProperties != null) {
        class F {
          constructor() {
            return closure_8.getMessages(channelId);
          }
        }
      }
      if (undefined > 0) {
        class F {
          constructor() {
            return closure_8.getMessages(channelId);
          }
        }
      }
      if (cResult[11] === stateFromStores) {
        class F {
          constructor() {
            return closure_8.getMessages(channelId);
          }
        }
        const shouldObscure = tmp(11702).useSharedMediaProps(obj2).shouldObscure;
        stateFromStores(16816)(tmp16);
        if (cResult[14] === stateFromStores) {
          class F {
            constructor() {
              return closure_8.getMessages(channelId);
            }
          }
          dependencyMap = tmp22;
          if (cResult[17] === channelId) {
            class F {
              constructor() {
                return closure_8.getMessages(channelId);
              }
            }
            const effect = noop.useEffect(tmp24, tmp25);
            if (cResult[21] !== stateFromStores) {
              class F {
                constructor() {
                  return closure_8.getMessages(channelId);
                }
              }
              cResult[21] = stateFromStores;
              cResult[22] = tmp29;
            } else {
              class F {
                constructor() {
                  return closure_8.getMessages(channelId);
                }
              }
            }
            if (null != stateFromStores) {
              class F {
                constructor() {
                  return closure_8.getMessages(channelId);
                }
              }
            }
            return null;
          }
          const fn2 = function k() {
            if (closure_2) {
              const obj2 = { channelId, after: channelId, limit: 5 };
              const messages = MessageActionCreatorsDefault.fetchMessages(obj2);
            }
          };
          const items3 = [channelId, tmp22];
          cResult[17] = channelId;
          cResult[18] = tmp22;
          cResult[19] = fn2;
          cResult[20] = items3;
          tmp24 = fn2;
          tmp25 = items3;
        }
        const tmp23 =
          null != stateFromStores &&
          null == stateFromStores2.first() &&
          !stateFromStores2.loadingMore &&
          !stateFromStores2.ready &&
          !stateFromStores2.hasFetched;
        cResult[14] = stateFromStores;
        cResult[15] = stateFromStores2;
        cResult[16] = tmp23;
        const tmpResult10 = tmp(11702);
      }
      obj2 = { channel: stateFromStores, media: null };
      cResult[11] = stateFromStores;
      cResult[12] = null;
      cResult[13] = obj2;
      const tmpResult9 = channelId(8454);
    }
  : function ResourceChannelRow(channelId) {
      channelId = channelId.channelId;
      ({ icon, description } = channelId);
      dependencyMap = undefined;
      const tmp = closure_14();
      const items = [ChannelStore];
      const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      let obj = channelId(504);
      const items1 = [PermissionStore];
      const stateFromStores1 = channelId(504).useStateFromStores(items1, () =>
        PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores),
      );
      let obj2 = channelId(504);
      const items2 = [MessageStore];
      const stateFromStores2 = channelId(504).useStateFromStores(items2, () => MessageStore.getMessages(channelId));
      const firstResult = stateFromStores2.first();
      const obj3 = channelId(504);
      const forumPostMediaProperties = channelId(8454).useForumPostMediaProperties(firstResult, false);
      const obj5 = channelId(8454);
      let length;
      const firstMediaIsEmbed = channelId(8454).useFirstMediaIsEmbed(firstResult, false);
      if (forumPostMediaProperties != null) {
        length = forumPostMediaProperties.length;
      }
      let first = null;
      if (length > 0) {
        first = forumPostMediaProperties[0];
      }
      const obj6 = channelId(8454);
      let flag = channelId(11702).useSharedMediaProps({ channel: stateFromStores, media: first }).shouldObscure;
      const tmp11 = stateFromStores(16816)(firstResult);
      const tmp12 =
        null != stateFromStores &&
        null == stateFromStores2.first() &&
        !stateFromStores2.loadingMore &&
        !stateFromStores2.ready &&
        !stateFromStores2.hasFetched;
      dependencyMap = tmp12;
      const items3 = [channelId, tmp12];
      const effect = noop.useEffect(() => {
        if (closure_2) {
          const obj2 = { channelId, after: channelId, limit: 5 };
          const messages = MessageActionCreatorsDefault.fetchMessages(obj2);
        }
      }, items3);
      [][0] = stateFromStores;
      if (null != stateFromStores) {
        if (stateFromStores1) {
          const obj4 = { channelId: stateFromStores.id, icon };
          const resourceChannelIconURL = tmp10(1414).getResourceChannelIconURL(obj4);
          const obj7 = { onPress: tmp14, style: tmp.channelContainer, children: null };
          const obj8 = { style: tmp.textContent, children: null };
          const obj9 = {
            variant: "heading-md/extrabold",
            color: "mobile-text-heading-primary",
            children: channelId.title,
          };
          const items4 = [closure_12(tmp2(5086).Text, obj9), ,];
          let tmp19Result = tmp16;
          if (null == description || 0 === description.length) {
            tmp19Result = null != tmp11;
          }
          if (tmp19Result) {
            const obj10 = {
              variant: "text-sm/normal",
              color: "text-default",
              style: tmp.messageContent,
              lineClamp: 3,
              ellipsizeMode: "tail",
              children: null,
            };
            ({ guild_id: obj15.guildId, id: obj15.channelId } = stateFromStores);
            obj10.children = tmp10(5077).parse(tmp11, true, { guildId: null, channelId: null });
            tmp19Result = closure_12(tmp2(5086).Text, obj10);
            const obj11 = { guildId: null, channelId: null };
            const tmp10Result3 = tmp10(5077);
          }
          items4[1] = tmp19Result;
          let tmp19Result4 = !tmp16;
          if (!(null == description || 0 === description.length)) {
            const obj12 = {
              variant: "text-sm/normal",
              color: "text-default",
              style: tmp.messageContent,
              lineClamp: 3,
              ellipsizeMode: "tail",
              children: null,
            };
            ({ guild_id: obj18.guildId, id: obj18.channelId } = stateFromStores);
            obj12.children = tmp10(5077).parse(description, true, { guildId: null, channelId: null });
            tmp19Result4 = closure_12(tmp2(5086).Text, obj12);
            const obj13 = { guildId: null, channelId: null };
            const tmp10Result4 = tmp10(5077);
          }
          items4[2] = tmp19Result4;
          obj8.children = items4;
          const items5 = [closure_13(closure_4, obj8), ,];
          let tmp19Result5 = null;
          if (null != icon) {
            tmp19Result5 = null;
            if (null != resourceChannelIconURL) {
              const obj14 = { source: null, style: null };
              const obj16 = { uri: resourceChannelIconURL };
              obj14.source = obj16;
              obj14.style = tmp.icon;
              tmp19Result5 = closure_12(tmp10(6164), obj14);
            }
          }
          items5[1] = tmp19Result5;
          let tmp19Result6 = null;
          if (null == resourceChannelIconURL) {
            tmp19Result6 = null;
            if (null != firstResult) {
              let blocked;
              if (firstResult != null) {
                blocked = firstResult.blocked;
              }
              tmp19Result6 = null;
              if (!blocked) {
                tmp19Result6 = null;
                if (null != first) {
                  const obj17 = {
                    channel: stateFromStores,
                    media: first,
                    isEmbed: firstMediaIsEmbed,
                    embedLeftBorderColor: null,
                    firstMessageId: null,
                    containerStyle: null,
                  };
                  if (flag == null) {
                    flag = false;
                  }
                  obj17.embedLeftBorderColor = tmp2(8454).getEmbedColor(firstResult, flag);
                  let id;
                  if (firstResult != null) {
                    id = firstResult.id;
                  }
                  obj17.firstMessageId = id;
                  obj17.containerStyle = tmp.thumbnail;
                  tmp19Result6 = closure_12(tmp2(11702).ForumPostMediaThumbnail, obj17);
                  const tmp2Result2 = tmp2(8454);
                }
              }
            }
          }
          items5[2] = tmp19Result6;
          obj7.children = items5;
          return closure_13(tmp2(6189).PressableOpacity, obj7);
        }
      }
      return null;
    };
ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  marginBottom: 8,
  padding: 12,
  borderRadius: nativeDefault.radii.sm,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildHomeResources.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildHomeResources(guildId) {
      const cResult = guildId(576).c(18);
      guildId = guildId.guildId;
      const tmp4 = closure_14();
      const arr = useResourceChannelsDefault(guildId);
      if (cResult[0] !== guildId) {
        function onPress() {
          const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
          if (null != defaultChannel) {
            router_utils.transitionTo(closure_2_11.CHANNEL(guildId, defaultChannel.id));
          }
        }
        cResult[0] = guildId;
        cResult[1] = onPress;
        let tmp6 = onPress;
      } else {
        tmp6 = cResult[1];
      }
      if (0 === arr.length) {
        const _Symbol2 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
          const intl = tmp(1126).intl;
          obj2.children = intl.string(tmp(1126).t.owvC9U);
          const tmp19 = closure_12(tmp(5086).Text, obj2);
          cResult[2] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[2];
        }
        if (cResult[3] !== tmp4.emptyStateImage) {
          const obj3 = { style: tmp4.emptyStateImage, source: _modDef16817 };
          const tmp23 = closure_12(closure_5, obj3);
          cResult[3] = tmp4.emptyStateImage;
          cResult[4] = tmp23;
          let tmp20 = tmp23;
        } else {
          tmp20 = cResult[4];
        }
        const _Symbol3 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(tmp(1126).t["3iCBUn"]);
          cResult[5] = stringResult;
          let tmp24 = stringResult;
        } else {
          tmp24 = cResult[5];
        }
        if (cResult[6] !== tmp6) {
          const obj4 = { onPress: tmp6, text: tmp24 };
          const tmp28 = closure_12(tmp(5375).Button, obj4);
          cResult[6] = tmp6;
          cResult[7] = tmp28;
          let tmp26 = tmp28;
        } else {
          tmp26 = cResult[7];
        }
        if (cResult[8] === tmp4.emptyStateContainer) {
          if (cResult[9] === tmp20) {
            if (cResult[10] === tmp26) {
              let tmp29 = cResult[11];
            }
            return tmp29;
          }
        }
        const obj5 = { style: tmp4.emptyStateContainer, children: null };
        const items = [tmp17, tmp20, tmp26];
        obj5.children = items;
        const tmp32 = closure_13(closure_4, obj5);
        cResult[8] = tmp4.emptyStateContainer;
        cResult[9] = tmp20;
        cResult[10] = tmp26;
        cResult[11] = tmp32;
        tmp29 = tmp32;
      } else if (cResult[12] !== arr) {
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(arg0) {
              obj = {
                channelId: guildId.channelId,
                title: guildId.title,
                icon: guildId.icon,
                description: guildId.description,
              };
              return closure_1_12(closure_1_15, obj, "resource-" + guildId.channelId);
            }
          }
          cResult[14] = F;
        } else {
          class F {
            constructor(arg0) {
              obj = {
                channelId: guildId.channelId,
                title: guildId.title,
                icon: guildId.icon,
                description: guildId.description,
              };
              return closure_1_12(closure_1_15, obj, "resource-" + guildId.channelId);
            }
          }
        }
        const mapped = arr.map(F);
        cResult[12] = arr;
        cResult[13] = mapped;
      } else {
        class F {
          constructor(arg0) {
            obj = {
              channelId: guildId.channelId,
              title: guildId.title,
              icon: guildId.icon,
              description: guildId.description,
            };
            return closure_1_12(closure_1_15, obj, "resource-" + guildId.channelId);
          }
        }
        if (cResult[15] === tmp4.container) {
          class F {
            constructor(arg0) {
              obj = {
                channelId: guildId.channelId,
                title: guildId.title,
                icon: guildId.icon,
                description: guildId.description,
              };
              return closure_1_12(closure_1_15, obj, "resource-" + guildId.channelId);
            }
          }
          return tmp12;
        }
        const obj6 = { style: tmp33, children: tmp7 };
        const tmp15 = closure_12(closure_4, obj6);
        cResult[15] = tmp4.container;
        cResult[16] = tmp7;
        cResult[17] = tmp15;
        tmp12 = tmp15;
      }
      let obj = guildId(576);
    }
  : function GuildHomeResources(guildId) {
      guildId = guildId.guildId;
      const tmp = closure_14();
      const arr = useResourceChannelsDefault(guildId);
      if (0 === arr.length) {
        const obj2 = { style: tmp.emptyStateContainer, children: null };
        const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
        const intl = guildId(1126).intl;
        obj3.children = intl.string(guildId(1126).t.owvC9U);
        const items = [closure_12(guildId(5086).Text, obj3), ,];
        const obj4 = { style: tmp.emptyStateImage, source: _modDef16817 };
        items[1] = closure_12(closure_5, obj4);
        const obj5 = {
          onPress() {
            const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
            if (null != defaultChannel) {
              router_utils.transitionTo(closure_2_11.CHANNEL(guildId, defaultChannel.id));
            }
          },
          text: null,
        };
        const intl2 = guildId(1126).intl;
        obj5.text = intl2.string(guildId(1126).t["3iCBUn"]);
        items[2] = closure_12(guildId(5375).Button, obj5);
        obj2.children = items;
        let tmp6 = closure_13(closure_4, obj2);
      } else {
        let obj = {
          style: tmp.container,
          children: arr.map((channelId) =>
            closure_1_12(
              closure_1_15,
              {
                channelId: channelId.channelId,
                title: channelId.title,
                icon: channelId.icon,
                description: channelId.description,
              },
              "resource-" + channelId.channelId,
            ),
          ),
        };
        tmp6 = closure_12(closure_4, obj);
      }
      return tmp6;
    };
