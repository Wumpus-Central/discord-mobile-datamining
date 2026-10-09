// discord_app/modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import CreateChannelModalActionCreatorsDefault from "../../../../../../actions/native/CreateChannelModalActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../../../../guild_settings/GuildSettingsActionCreators.tsx";
import _modDef16602 from "../../../../../../../_runtime/metro/16602__.js";
import _modDef16603 from "../../../../../../../_runtime/metro/16603__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../../../stores/PermissionStore.tsx";

const require = fn;
const View = fn(17).View;
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
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
const merged = Object.assign(fn(5087).TextStyleSheet["heading-md/bold"]);
obj3.fontSize = 18;
obj3.marginTop = 16;
obj3.marginBottom = 8;
obj.headerText = obj3;
obj.text = { textAlign: "center" };
obj.buttonWrapper = { marginTop: 24 };
obj.buttonPill = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
obj.personalizeButtonWrapper = { marginHorizontal: 12, marginBottom: 12 };
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChannelsEmpty(guild) {
        const cResult = guild(576).c(41);
        guild = guild.guild;
        const tmp4 = closure_9();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [PermissionStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== guild) {
          const fn = function h() {
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
          const fn2 = function v() {
            GuildSettingsActionCreatorsDefault.open(guild.id);
          };
          cResult[4] = guild.id;
          cResult[5] = fn2;
          let tmp10 = fn2;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] !== guild.id) {
          const fn3 = function f() {
            CreateChannelModalActionCreatorsDefault.open(null, guild.id, null, null);
          };
          cResult[6] = guild.id;
          cResult[7] = fn3;
          let tmp11 = fn3;
        } else {
          tmp11 = cResult[7];
        }
        const tmpResult = guild(573);
        const youBarTotalHeight = guild(15290).useYouBarTotalHeight(16);
        if (cResult[8] !== youBarTotalHeight) {
          const obj2 = { paddingBottom: youBarTotalHeight };
          cResult[8] = youBarTotalHeight;
          cResult[9] = obj2;
          let tmp13 = obj2;
        } else {
          tmp13 = cResult[9];
        }
        if (cResult[10] === tmp4.wrapper) {
          if (cResult[11] === tmp13) {
            let tmp14 = cResult[12];
          }
          if (cResult[13] === canCustomizeGuild) {
            if (cResult[14] === tmp10) {
              if (cResult[15] === tmp4.personalizeButtonWrapper) {
                let tmp15 = cResult[16];
              }
              const _Symbol = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const obj3 = { source: _modDef16603 };
                const tmp24 = closure_7(FastImageDefault, obj3);
                cResult[17] = tmp24;
                let tmp20 = tmp24;
              } else {
                tmp20 = cResult[17];
              }
              if (cResult[18] === tmp4.headerText) {
                if (cResult[19] === tmp4.text) {
                  let tmp25 = cResult[20];
                }
                const _Symbol2 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = tmp(1126).intl;
                  const stringResult = intl2.string(tmp(1126).t.o4s29v);
                  cResult[21] = stringResult;
                  let tmp26 = stringResult;
                } else {
                  tmp26 = cResult[21];
                }
                if (cResult[22] !== tmp25) {
                  const obj4 = {
                    color: "mobile-text-heading-primary",
                    variant: "heading-md/bold",
                    style: tmp25,
                    children: tmp26,
                  };
                  const tmp30 = closure_7(tmp(5087).Text, obj4);
                  cResult[22] = tmp25;
                  cResult[23] = tmp30;
                  let tmp28 = tmp30;
                } else {
                  tmp28 = cResult[23];
                }
                const _Symbol3 = Symbol;
                if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(1126).intl;
                  const stringResult1 = intl3.string(tmp(1126).t.iypvFu);
                  cResult[24] = stringResult1;
                  let tmp31 = stringResult1;
                } else {
                  tmp31 = cResult[24];
                }
                if (cResult[25] !== tmp4.text) {
                  const obj5 = { color: "text-default", variant: "text-md/medium", style: tmp4.text, children: tmp31 };
                  const tmp35 = closure_7(tmp(5087).Text, obj5);
                  cResult[25] = tmp4.text;
                  cResult[26] = tmp35;
                  let tmp33 = tmp35;
                } else {
                  tmp33 = cResult[26];
                }
                if (cResult[27] === canCreateChannel) {
                  if (cResult[28] === tmp11) {
                    if (cResult[29] === tmp4.buttonPill) {
                      if (cResult[30] === tmp4.buttonWrapper) {
                        let tmp36 = cResult[31];
                      }
                      if (cResult[32] === tmp4.content) {
                        if (cResult[33] === tmp28) {
                          if (cResult[34] === tmp33) {
                            if (cResult[35] === tmp36) {
                              let tmp40 = cResult[36];
                            }
                            if (cResult[37] === tmp40) {
                              if (cResult[38] === tmp14) {
                                if (cResult[39] === tmp15) {
                                  let tmp44 = cResult[40];
                                }
                                return tmp44;
                              }
                            }
                            const obj6 = { style: tmp14, children: null };
                            const items2 = [tmp15, tmp40];
                            obj6.children = items2;
                            const tmp47 = closure_8(View, obj6);
                            cResult[37] = tmp40;
                            cResult[38] = tmp14;
                            cResult[39] = tmp15;
                            cResult[40] = tmp47;
                            tmp44 = tmp47;
                          }
                        }
                      }
                      const obj7 = { style: tmp4.content, children: null };
                      const items3 = [tmp20, tmp28, tmp33, tmp36];
                      obj7.children = items3;
                      const tmp43 = closure_8(View, obj7);
                      cResult[32] = tmp4.content;
                      cResult[33] = tmp28;
                      cResult[34] = tmp33;
                      cResult[35] = tmp36;
                      cResult[36] = tmp43;
                      tmp40 = tmp43;
                    }
                  }
                }
                let tmp37 = canCreateChannel;
                if (canCreateChannel) {
                  const obj8 = { style: tmp4.buttonWrapper, children: null };
                  const obj9 = { shrink: true, size: "md", pillStyle: tmp4.buttonPill, text: null, onPress: null };
                  const intl4 = tmp(1126).intl;
                  obj9.text = intl4.string(tmp(1126).t["63PyJQ"]);
                  obj9.onPress = tmp11;
                  obj8.children = closure_7(tmp(5377).BaseTextButton, obj9);
                  tmp37 = closure_7(View, obj8);
                }
                cResult[27] = canCreateChannel;
                cResult[28] = tmp11;
                cResult[29] = tmp4.buttonPill;
                cResult[30] = tmp4.buttonWrapper;
                cResult[31] = tmp37;
                tmp36 = tmp37;
              }
              const items4 = [,];
              ({ text: arr4[0], headerText: arr4[1] } = tmp4);
              cResult[18] = tmp4.headerText;
              cResult[19] = tmp4.text;
              cResult[20] = items4;
              tmp25 = items4;
            }
          }
          let tmp16 = canCustomizeGuild;
          if (canCustomizeGuild) {
            const obj10 = { style: tmp4.personalizeButtonWrapper, children: null };
            const obj11 = { icon: null, label: null, onPress: null };
            const obj12 = { source: _modDef16602, disableColor: true };
            obj11.icon = closure_7(tmp(1200).Icon, obj12);
            const intl = tmp(1126).intl;
            obj11.label = intl.string(tmp(1126).t["Yhi9/N"]);
            obj11.onPress = tmp10;
            obj10.children = closure_7(tmp(8565).RowButton, obj11);
            tmp16 = closure_7(View, obj10);
          }
          cResult[13] = canCustomizeGuild;
          cResult[14] = tmp10;
          cResult[15] = tmp4.personalizeButtonWrapper;
          cResult[16] = tmp16;
          tmp15 = tmp16;
        }
        const items5 = [tmp4.wrapper, tmp13];
        cResult[10] = tmp4.wrapper;
        cResult[11] = tmp13;
        cResult[12] = items5;
        tmp14 = items5;
        const tmpResult2 = guild(15290);
      }
    : function ChannelsEmpty(guild) {
        guild = guild.guild;
        const tmp = closure_9();
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
        const obj2 = guild(15290);
        items4[1] = { paddingBottom: guild(15290).useYouBarTotalHeight(16) };
        obj3.style = items4;
        if (canCustomizeGuild) {
          const obj5 = { style: tmp.personalizeButtonWrapper, children: null };
          const obj6 = { icon: null, label: null, onPress: null };
          const obj7 = { source: _modDef16602, disableColor: true };
          obj6.icon = closure_7(tmp2(1200).Icon, obj7);
          const intl = tmp2(1126).intl;
          obj6.label = intl.string(tmp2(1126).t["Yhi9/N"]);
          obj6.onPress = callback;
          obj5.children = closure_7(tmp2(8565).RowButton, obj6);
          canCustomizeGuild = closure_7(View, obj5);
        }
        const items5 = [canCustomizeGuild];
        const obj8 = { style: tmp.content, children: null };
        const obj9 = { source: null };
        const obj4 = { paddingBottom: guild(15290).useYouBarTotalHeight(16) };
        obj9.source = _modDef16603;
        const items6 = [closure_7(FastImageDefault, obj9), , ,];
        const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: null, children: null };
        const items7 = [,];
        ({ text: arr8[0], headerText: arr8[1] } = tmp);
        obj10.style = items7;
        const intl2 = tmp2(1126).intl;
        obj10.children = intl2.string(guild(1126).t.o4s29v);
        items6[1] = closure_7(guild(5087).Text, obj10);
        const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
        const intl3 = tmp2(1126).intl;
        obj11.children = intl3.string(guild(1126).t.iypvFu);
        items6[2] = closure_7(guild(5087).Text, obj11);
        if (canCreateChannel) {
          const obj12 = { style: tmp.buttonWrapper, children: null };
          const obj13 = { shrink: true, size: "md", pillStyle: tmp.buttonPill, text: null, onPress: null };
          const intl4 = tmp2(1126).intl;
          obj13.text = intl4.string(tmp2(1126).t["63PyJQ"]);
          obj13.onPress = callback1;
          obj12.children = closure_7(tmp2(5377).BaseTextButton, obj13);
          canCreateChannel = closure_7(View, obj12);
        }
        items6[3] = canCreateChannel;
        obj8.children = items6;
        items5[1] = closure_8(View, obj8);
        obj3.children = items5;
        return closure_8(View, obj3);
      },
);
