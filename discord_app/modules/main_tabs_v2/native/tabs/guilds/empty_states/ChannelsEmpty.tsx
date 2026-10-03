// discord_app/modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import CreateChannelModalActionCreatorsDefault from "../../../../../../actions/native/CreateChannelModalActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../../../../guild_settings/GuildSettingsActionCreators.tsx";
import _modDef16179 from "../../../../../../../_runtime/metro/16179__.js";
import _modDef16180 from "../../../../../../../_runtime/metro/16180__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../../../stores/PermissionStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let obj = {
  wrapper: { flex: 1, paddingTop: 12 },
  content: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 48 },
  headerText: null,
  text: null,
  buttonWrapper: null,
  buttonPill: null,
  personalizeButtonWrapper: null,
};
let obj3 = {};
const merged = Object.assign(fn(4886).TextStyleSheet["heading-md/bold"]);
obj3.fontSize = 18;
obj3.marginTop = 16;
obj3.marginBottom = 8;
obj.headerText = obj3;
obj.text = { textAlign: "center" };
obj.buttonWrapper = { marginTop: 24 };
obj.buttonPill = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
obj.personalizeButtonWrapper = { marginHorizontal: 12, marginBottom: 12 };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guild) => {
        const cResult = guild(576).c(41);
        guild = guild.guild;
        const tmp4 = closure_10();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [PermissionStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== guild) {
          const fn = function u() {
            return {
              canCustomizeGuild: PermissionStore.can(Permissions.MANAGE_GUILD, guild),
              canCreateChannel: PermissionStore.can(Permissions.MANAGE_CHANNELS, guild),
            };
          };
          const items1 = [guild];
          cResult[1] = guild;
          cResult[2] = fn;
          cResult[3] = items1;
          let tmp8 = items1;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[2];
          tmp8 = cResult[3];
        }
        const obj = guild(576);
        const stateFromStoresObject = guild(573).useStateFromStoresObject(first, tmp7, tmp8);
        ({ canCustomizeGuild, canCreateChannel } = stateFromStoresObject);
        if (cResult[4] !== guild.id) {
          const fn2 = function _() {
            GuildSettingsActionCreatorsDefault.open(guild.id);
          };
          cResult[4] = guild.id;
          cResult[5] = fn2;
          let tmp10 = fn2;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] !== guild.id) {
          class S {
            constructor() {
              obj = closure_1(closure_2[12]);
              openResult = obj.open(null, guild.id, null, null);
              return;
            }
          }
          cResult[6] = guild.id;
          cResult[7] = S;
        } else {
          class S {
            constructor() {
              obj = closure_1(closure_2[12]);
              openResult = obj.open(null, guild.id, null, null);
              return;
            }
          }
        }
        const tmpResult = guild(573);
        const youBarTotalHeight = guild(14897).useYouBarTotalHeight(16);
        if (cResult[8] !== youBarTotalHeight) {
          class S {
            constructor() {
              obj = closure_1(closure_2[12]);
              openResult = obj.open(null, guild.id, null, null);
              return;
            }
          }
          tmp14[0] = youBarTotalHeight;
          cResult[8] = youBarTotalHeight;
          cResult[9] = tmp14;
        } else {
          class S {
            constructor() {
              obj = closure_1(closure_2[12]);
              openResult = obj.open(null, guild.id, null, null);
              return;
            }
          }
        }
        if (cResult[10] === tmp4.wrapper) {
          class S {
            constructor() {
              obj = closure_1(closure_2[12]);
              openResult = obj.open(null, guild.id, null, null);
              return;
            }
          }
          if (cResult[13] === canCustomizeGuild) {
            class S {
              constructor() {
                obj = closure_1(closure_2[12]);
                openResult = obj.open(null, guild.id, null, null);
                return;
              }
            }
          }
          let tmp16 = canCustomizeGuild;
          if (canCustomizeGuild) {
            class S {
              constructor() {
                obj = closure_1(closure_2[12]);
                openResult = obj.open(null, guild.id, null, null);
                return;
              }
            }
            const obj2 = { style: tmp4.personalizeButtonWrapper, children: null };
            const obj3 = { icon: null, label: null, onPress: null };
            const obj4 = { source: _modDef16179, disableColor: true };
            obj3.icon = closure_8(tmp(1188).Icon, obj4);
            const intl = tmp(1126).intl;
            obj3.label = intl.string(tmp(1126).t["Yhi9/N"]);
            obj3.onPress = tmp10;
            obj2.children = closure_8(tmp(8897).RowButton, obj3);
            tmp16 = closure_8(closure_4, obj2);
          }
          cResult[13] = canCustomizeGuild;
          cResult[14] = tmp10;
          cResult[15] = tmp4.personalizeButtonWrapper;
          cResult[16] = tmp16;
        }
        const items2 = [tmp4.wrapper, tmp14];
        cResult[10] = tmp4.wrapper;
        cResult[11] = tmp14;
        cResult[12] = items2;
        const tmpResult2 = guild(14897);
      }
    : (guild) => {
        guild = guild.guild;
        const tmp = closure_10();
        const items = [PermissionStore];
        const items1 = [guild];
        const stateFromStoresObject = guild(573).useStateFromStoresObject(
          items,
          () => ({
            canCustomizeGuild: PermissionStore.can(Permissions.MANAGE_GUILD, guild),
            canCreateChannel: PermissionStore.can(Permissions.MANAGE_CHANNELS, guild),
          }),
          items1,
        );
        ({ canCustomizeGuild, canCreateChannel } = stateFromStoresObject);
        const items2 = [guild.id];
        const items3 = [guild.id];
        const callback = noop.useCallback(() => {
          GuildSettingsActionCreatorsDefault.open(guild.id);
        }, items2);
        const callback1 = noop.useCallback(() => {
          CreateChannelModalActionCreatorsDefault.open(null, guild.id, null, null);
        }, items3);
        const obj = guild(573);
        const obj3 = { style: null, children: null };
        const items4 = [tmp.wrapper];
        const obj2 = guild(14897);
        items4[1] = { paddingBottom: guild(14897).useYouBarTotalHeight(16) };
        obj3.style = items4;
        if (canCustomizeGuild) {
          const obj5 = { style: tmp.personalizeButtonWrapper, children: null };
          const obj6 = { icon: null, label: null, onPress: null };
          const obj7 = { source: _modDef16179, disableColor: true };
          obj6.icon = closure_8(tmp2(1188).Icon, obj7);
          const intl = tmp2(1126).intl;
          obj6.label = intl.string(tmp2(1126).t["Yhi9/N"]);
          obj6.onPress = callback;
          obj5.children = closure_8(tmp2(8897).RowButton, obj6);
          canCustomizeGuild = closure_8(closure_4, obj5);
        }
        const items5 = [canCustomizeGuild];
        const obj8 = { style: tmp.content, children: null };
        const obj4 = { paddingBottom: guild(14897).useYouBarTotalHeight(16) };
        const items6 = [closure_8(closure_5, { source: _modDef16180 }), , ,];
        const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: null, children: null };
        const items7 = [,];
        ({ text: arr8[0], headerText: arr8[1] } = tmp);
        obj10.style = items7;
        const intl2 = tmp2(1126).intl;
        obj10.children = intl2.string(guild(1126).t.o4s29v);
        items6[1] = closure_8(guild(4886).Text, obj10);
        const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
        const intl3 = tmp2(1126).intl;
        obj11.children = intl3.string(guild(1126).t.iypvFu);
        items6[2] = closure_8(guild(4886).Text, obj11);
        if (canCreateChannel) {
          const obj12 = { style: tmp.buttonWrapper, children: null };
          const obj13 = { shrink: true, size: "md", pillStyle: tmp.buttonPill, text: null, onPress: null };
          const intl4 = tmp2(1126).intl;
          obj13.text = intl4.string(tmp2(1126).t["63PyJQ"]);
          obj13.onPress = callback1;
          obj12.children = closure_8(tmp2(5595).BaseTextButton, obj13);
          canCreateChannel = closure_8(closure_4, obj12);
        }
        items6[3] = canCreateChannel;
        obj8.children = items6;
        items5[1] = closure_9(closure_4, obj8);
        obj3.children = items5;
        return closure_9(closure_4, obj3);
      },
);
