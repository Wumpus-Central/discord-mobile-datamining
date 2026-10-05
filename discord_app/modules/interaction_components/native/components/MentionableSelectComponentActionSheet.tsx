// discord_app/modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import InteractionComponentTypes from "../../InteractionComponentTypes.tsx";
import RoleIconUtils from "../../../guild_boosting/RoleIconUtils.tsx";
import RoleIconDefault from "../../../roles/native/RoleIcon.tsx";
import SearchableSelectActionComponentUtils from "../../SearchableSelectActionComponentUtils.tsx";
import ShieldUserIcon2 from "../../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import DiscordTagDefault from "../../../user_profile/native/DiscordTag.tsx";
import UserIcon from "../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import GuildRoleStore_mod from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PresenceStore from "../../../../stores/PresenceStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let selectionActionComponent, user;

let Fonts;
let c10;
let c9;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
let GuildRoleStore = GuildRoleStore_mod;
({ Fonts, DEFAULT_ROLE_COLOR_HEX: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  name: obj2,
  discriminator: obj3,
  roleCountContainer: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 12,
  },
  roleCountText: { paddingRight: 4 },
};
obj2 = {
  color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  fontFamily: Fonts.PRIMARY_MEDIUM,
  fontSize: 12,
  lineHeight: 16,
};
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
let closure_12 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectionActionComponent) => {
      let allowEmpty;
      let channelId;
      let closure_3;
      let closure_5;
      let containerId;
      let guildId;
      let isSelected;
      let labelComponent;
      let onPressOptionItem;
      let onSubmit;
      let options;
      let selectedOptions;
      let setQuery;
      let submitSelection;
      let tmp5;
      let obj = selectionActionComponent(guildId[11]);
      const cResult = obj.c(35);
      const tmp = selectionActionComponent;
      selectionActionComponent = selectionActionComponent.selectionActionComponent;
      ({ labelComponent, channelId } = selectionActionComponent);
      guildId = selectionActionComponent.guildId;
      ({ containerId, onSubmit, allowEmpty } = selectionActionComponent);
      const tmp4 = closure_12();
      react = tmp4;
      if (cResult[0] !== guildId) {
        const guild = GuildStore.getGuild(guildId);
        cResult[0] = guildId;
        cResult[1] = guild;
        tmp5 = guild;
      } else {
        tmp5 = cResult[1];
      }
      let id;
      let tmp9 = channelId(tmp2[12]);
      if (tmp5 != null) {
        id = tmp5.id;
      }
      const tmp9Result = tmp9(id, tmp(guildId[13]).MIN_REREQUEST_TIME);
      GuildRoleStore = tmp9Result;
      if (cResult[2] === channelId) {
        let tmp12;
        if (cResult[3] === selectionActionComponent) {
          tmp12 = cResult[4];
        }
        if (cResult[5] === containerId) {
          if (cResult[6] === guildId) {
            if (cResult[7] === onSubmit) {
              if (cResult[8] === tmp12) {
                let tmp13;
                if (cResult[9] === selectionActionComponent) {
                  tmp13 = cResult[10];
                }
                ({ options, selectedOptions, isSelected, onPressOptionItem, submitSelection, setQuery } = channelId(
                  tmp2[14],
                )(tmp13));
                const tmp14 = channelId(tmp2[14])(tmp13);
                if (cResult[11] === tmp5) {
                  if (cResult[14] !== tmp4) {
                    const fn = function w(type) {
                      if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
                        user = UserStore.getUser(type.value);
                        const obj = { user, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
                        ({
                          name: obj.usernameStyle,
                          discriminator: obj.discriminatorStyle,
                          name: obj.nicknameStyle,
                        } = closure_3);
                        return authStore(DiscordTagDefault, obj);
                      }
                    };
                    cResult[14] = tmp4;
                    cResult[15] = fn;
                  }
                  const _Symbol = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    class G {
                      constructor(type) {
                        let discriminator;
                        let discriminator1;
                        if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.USER) {
                          let formatToPlainStringResult;
                          user = user.getUser(type.value);
                          let bot;
                          if (user != null) {
                            bot = user.bot;
                          }
                          const intl2 = selectionActionComponent(guildId[21]).intl;
                          const formatToPlainString = intl2.formatToPlainString;
                          const t = selectionActionComponent(guildId[21]).t;
                          if (bot) {
                            const obj2 = { username: type.label, discriminator };
                            discriminator = undefined;
                            const prop = t["zogo/8"];
                            if (user != null) {
                              discriminator = user.discriminator;
                            }
                            formatToPlainStringResult = formatToPlainString(prop, obj2);
                          } else {
                            const obj3 = { username: type.label, discriminator: discriminator1 };
                            discriminator1 = undefined;
                            const AydQ7a = t.AydQ7a;
                            if (user != null) {
                              discriminator1 = user.discriminator;
                            }
                            formatToPlainStringResult = formatToPlainString(AydQ7a, obj3);
                          }
                          return formatToPlainStringResult;
                        } else if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.ROLE) {
                          const intl = selectionActionComponent(guildId[21]).intl;
                          const obj = { roleName: type.label };
                          return intl.formatToPlainString(selectionActionComponent(guildId[21]).t.F6ejkk, obj);
                        }
                      }
                    }
                    cResult[16] = G;
                  } else {
                    class G {
                      constructor(type) {
                        let discriminator;
                        let discriminator1;
                        if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.USER) {
                          let formatToPlainStringResult;
                          user = user.getUser(type.value);
                          let bot;
                          if (user != null) {
                            bot = user.bot;
                          }
                          const intl2 = selectionActionComponent(guildId[21]).intl;
                          const formatToPlainString = intl2.formatToPlainString;
                          const t = selectionActionComponent(guildId[21]).t;
                          if (bot) {
                            const obj2 = { username: type.label, discriminator };
                            discriminator = undefined;
                            const prop = t["zogo/8"];
                            if (user != null) {
                              discriminator = user.discriminator;
                            }
                            formatToPlainStringResult = formatToPlainString(prop, obj2);
                          } else {
                            const obj3 = { username: type.label, discriminator: discriminator1 };
                            discriminator1 = undefined;
                            const AydQ7a = t.AydQ7a;
                            if (user != null) {
                              discriminator1 = user.discriminator;
                            }
                            formatToPlainStringResult = formatToPlainString(AydQ7a, obj3);
                          }
                          return formatToPlainStringResult;
                        } else if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.ROLE) {
                          const intl = selectionActionComponent(guildId[21]).intl;
                          const obj = { roleName: type.label };
                          return intl.formatToPlainString(selectionActionComponent(guildId[21]).t.F6ejkk, obj);
                        }
                      }
                    }
                  }
                  if (cResult[17] === tmp5) {
                    class G {
                      constructor(type) {
                        let discriminator;
                        let discriminator1;
                        if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.USER) {
                          let formatToPlainStringResult;
                          user = user.getUser(type.value);
                          let bot;
                          if (user != null) {
                            bot = user.bot;
                          }
                          const intl2 = selectionActionComponent(guildId[21]).intl;
                          const formatToPlainString = intl2.formatToPlainString;
                          const t = selectionActionComponent(guildId[21]).t;
                          if (bot) {
                            const obj2 = { username: type.label, discriminator };
                            discriminator = undefined;
                            const prop = t["zogo/8"];
                            if (user != null) {
                              discriminator = user.discriminator;
                            }
                            formatToPlainStringResult = formatToPlainString(prop, obj2);
                          } else {
                            const obj3 = { username: type.label, discriminator: discriminator1 };
                            discriminator1 = undefined;
                            const AydQ7a = t.AydQ7a;
                            if (user != null) {
                              discriminator1 = user.discriminator;
                            }
                            formatToPlainStringResult = formatToPlainString(AydQ7a, obj3);
                          }
                          return formatToPlainStringResult;
                        } else if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.ROLE) {
                          const intl = selectionActionComponent(guildId[21]).intl;
                          const obj = { roleName: type.label };
                          return intl.formatToPlainString(selectionActionComponent(guildId[21]).t.F6ejkk, obj);
                        }
                      }
                    }
                  }
                  class X {
                    constructor(type) {
                      let items;
                      if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
                        let role;
                        if (null != id) {
                          role = GuildRoleStore.getRole(tmp3.id, type.value);
                        }
                        let tmp7 = null;
                        if (null != role) {
                          let tmp9;
                          if (closure_5 != null) {
                            tmp9 = tmp8[role.id];
                          }
                          tmp7 = tmp9;
                        }
                        if (null != tmp7) {
                          const obj = { style: closure_3.roleCountContainer, children: items };
                          const obj2 = {
                            style: closure_3.roleCountText,
                            variant: "text-sm/medium",
                            color: "interactive-text-default",
                            children: tmp7,
                          };
                          items = [authStore(Text_Text.Text, obj2), authStore(UserIcon.UserIcon, { size: "xs" })];
                          return unpackModuleId(View, obj);
                        }
                      }
                    }
                  }
                  class L {
                    constructor(type) {
                      if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
                        user = UserStore.getUser(type.value);
                        if (null == user) {
                          return null;
                        } else {
                          const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
                          const isVROnlineResult = PresenceStore.isVROnline(user.id);
                          const status = PresenceStore.getStatus(user.id);
                          const obj = {
                            user,
                            isMobileOnline: isMobileOnlineResult,
                            isVROnline: isVROnlineResult,
                            status,
                            guildId,
                            size: native.AvatarSizes.XSMALL,
                          };
                          const Avatar = native.Avatar;
                          return authStore(Avatar, obj);
                        }
                      } else if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
                        let role;
                        if (null != id) {
                          role = GuildRoleStore.getRole(id.id, type.value);
                        }
                        if (null != id) {
                          if (null != role) {
                            const tmpResult = RoleIconUtils;
                            if (tmpResult.canGuildUseRoleIcons(id, role)) {
                              const tmpResult2 = RoleIconUtils;
                              const roleIconData = tmpResult2.getRoleIconData(role);
                              if (null != roleIconData) {
                                const obj2 = { src: null, unicodeEmoji: null, size: 24, name: role.name };
                                ({ customIconSrc: obj3.src, unicodeEmoji: obj3.unicodeEmoji } = roleIconData);
                                return authStore(RoleIconDefault, obj2);
                              }
                            }
                            let colorString;
                            const ShieldUserIcon = ShieldUserIcon2.ShieldUserIcon;
                            if (role != null) {
                              colorString = role.colorString;
                            }
                            if (colorString == null) {
                              colorString = React4;
                            }
                            const obj4 = { color: colorString };
                            return authStore(ShieldUserIcon, obj4);
                          }
                        }
                        return null;
                      }
                    }
                  }
                  cResult[17] = tmp5;
                  cResult[18] = tmp9Result;
                  cResult[19] = tmp4;
                  cResult[20] = X;
                }
                class L {
                  constructor(type) {
                    if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
                      user = UserStore.getUser(type.value);
                      if (null == user) {
                        return null;
                      } else {
                        const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
                        const isVROnlineResult = PresenceStore.isVROnline(user.id);
                        const status = PresenceStore.getStatus(user.id);
                        const obj = {
                          user,
                          isMobileOnline: isMobileOnlineResult,
                          isVROnline: isVROnlineResult,
                          status,
                          guildId,
                          size: native.AvatarSizes.XSMALL,
                        };
                        const Avatar = native.Avatar;
                        return authStore(Avatar, obj);
                      }
                    } else if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
                      let role;
                      if (null != id) {
                        role = GuildRoleStore.getRole(id.id, type.value);
                      }
                      if (null != id) {
                        if (null != role) {
                          const tmpResult = RoleIconUtils;
                          if (tmpResult.canGuildUseRoleIcons(id, role)) {
                            const tmpResult2 = RoleIconUtils;
                            const roleIconData = tmpResult2.getRoleIconData(role);
                            if (null != roleIconData) {
                              const obj2 = { src: null, unicodeEmoji: null, size: 24, name: role.name };
                              ({ customIconSrc: obj3.src, unicodeEmoji: obj3.unicodeEmoji } = roleIconData);
                              return authStore(RoleIconDefault, obj2);
                            }
                          }
                          let colorString;
                          const ShieldUserIcon = ShieldUserIcon2.ShieldUserIcon;
                          if (role != null) {
                            colorString = role.colorString;
                          }
                          if (colorString == null) {
                            colorString = React4;
                          }
                          const obj4 = { color: colorString };
                          return authStore(ShieldUserIcon, obj4);
                        }
                      }
                      return null;
                    }
                  }
                }
                cResult[11] = tmp5;
                cResult[12] = guildId;
                cResult[13] = L;
              }
            }
          }
        }
        let obj2 = {
          selectActionComponent: selectionActionComponent,
          containerId,
          guildId,
          queryOptions: tmp12,
          onSubmit,
        };
        cResult[6] = guildId;
        cResult[7] = onSubmit;
        cResult[8] = tmp12;
        cResult[9] = selectionActionComponent;
        cResult[10] = obj2;
        tmp13 = obj2;
      }
      class A {
        constructor(query) {
          const obj = SearchableSelectActionComponentUtils;
          return obj.queryMentionables(selectionActionComponent.type, query, channelId);
        }
      }
      cResult[2] = channelId;
      cResult[3] = selectionActionComponent;
      cResult[4] = A;
      tmp12 = A;
    }
  : (selectionActionComponent) => {
      let allowEmpty;
      let closure_3;
      let containerId;
      let isSelected;
      let labelComponent;
      let onPressOptionItem;
      let onSubmit;
      let options;
      let setQuery;
      let submitSelection;
      selectionActionComponent = selectionActionComponent.selectionActionComponent;
      const channelId = selectionActionComponent.channelId;
      const guildId = selectionActionComponent.guildId;
      let closure_5;
      ({ labelComponent, containerId, onSubmit, allowEmpty } = selectionActionComponent);
      react = closure_12();
      const guild = GuildStore.getGuild(guildId);
      const tmp3 = guildId;
      let id;
      const tmp4 = channelId(guildId[12]);
      if (guild != null) {
        id = guild.id;
      }
      closure_5 = tmp4(id, selectionActionComponent(tmp3[13]).MIN_REREQUEST_TIME);
      let items = [selectionActionComponent, channelId];
      const callback = react.useCallback((query) => {
        const obj = SearchableSelectActionComponentUtils;
        return obj.queryMentionables(selectionActionComponent.type, query, channelId);
      }, items);
      let tmp7 = tmp2(tmp3[14])({
        selectActionComponent: selectionActionComponent,
        containerId,
        guildId,
        queryOptions: callback,
        onSubmit,
      });
      const selectedOptions = tmp7.selectedOptions;
      const items1 = [guild, guildId];
      ({ options, isSelected, onPressOptionItem, submitSelection, setQuery } = tmp7);
      const callback1 = react.useCallback((type) => {
        if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
          user = UserStore.getUser(type.value);
          if (null == user) {
            return null;
          } else {
            const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
            const isVROnlineResult = PresenceStore.isVROnline(user.id);
            const status = PresenceStore.getStatus(user.id);
            const obj = {
              user,
              isMobileOnline: isMobileOnlineResult,
              isVROnline: isVROnlineResult,
              status,
              guildId,
              size: native.AvatarSizes.XSMALL,
            };
            const Avatar = native.Avatar;
            return authStore(Avatar, obj);
          }
        } else if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
          let role;
          if (null != guild) {
            role = GuildRoleStore.getRole(guild.id, type.value);
          }
          if (null != guild) {
            if (null != role) {
              const tmpResult = RoleIconUtils;
              if (tmpResult.canGuildUseRoleIcons(guild, role)) {
                const tmpResult2 = RoleIconUtils;
                const roleIconData = tmpResult2.getRoleIconData(role);
                if (null != roleIconData) {
                  const obj2 = { src: null, unicodeEmoji: null, size: 24, name: role.name };
                  ({ customIconSrc: obj3.src, unicodeEmoji: obj3.unicodeEmoji } = roleIconData);
                  return authStore(RoleIconDefault, obj2);
                }
              }
              let colorString;
              const ShieldUserIcon = ShieldUserIcon2.ShieldUserIcon;
              if (role != null) {
                colorString = role.colorString;
              }
              if (colorString == null) {
                colorString = React4;
              }
              const obj4 = { color: colorString };
              return authStore(ShieldUserIcon, obj4);
            }
          }
          return null;
        }
      }, items1);
      let obj = {
        onPressOptionItem,
        renderIcon: callback1,
        renderDescription(type) {
          if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
            user = UserStore.getUser(type.value);
            const obj = { user, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
            ({ name: obj.usernameStyle, discriminator: obj.discriminatorStyle, name: obj.nicknameStyle } = closure_3);
            return authStore(DiscordTagDefault, obj);
          }
        },
        renderOptionSuffix(type) {
          let items;
          if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
            let role;
            if (null != guild) {
              role = GuildRoleStore.getRole(tmp3.id, type.value);
            }
            let tmp7 = null;
            if (null != role) {
              let tmp9;
              if (closure_5 != null) {
                tmp9 = tmp8[role.id];
              }
              tmp7 = tmp9;
            }
            if (null != tmp7) {
              const obj = { style: closure_3.roleCountContainer, children: items };
              const obj2 = {
                style: closure_3.roleCountText,
                variant: "text-sm/medium",
                color: "interactive-text-default",
                children: tmp7,
              };
              items = [authStore(Text_Text.Text, obj2), authStore(UserIcon.UserIcon, { size: "xs" })];
              return unpackModuleId(View, obj);
            }
          }
        },
        selectionActionComponent,
        labelComponent,
        options,
        selectedCount: selectedOptions.length,
        selectedOptions,
        isSelected,
        submitSelection,
        onQueryChange: setQuery,
        itemAccessibilityLabel(type) {
          let discriminator;
          let discriminator1;
          if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.USER) {
            let formatToPlainStringResult;
            user = user.getUser(type.value);
            let bot;
            if (user != null) {
              bot = user.bot;
            }
            const intl2 = selectionActionComponent(guildId[21]).intl;
            const formatToPlainString = intl2.formatToPlainString;
            const t = selectionActionComponent(guildId[21]).t;
            if (bot) {
              const obj2 = { username: type.label, discriminator };
              discriminator = undefined;
              const prop = t["zogo/8"];
              if (user != null) {
                discriminator = user.discriminator;
              }
              formatToPlainStringResult = formatToPlainString(prop, obj2);
            } else {
              const obj3 = { username: type.label, discriminator: discriminator1 };
              discriminator1 = undefined;
              const AydQ7a = t.AydQ7a;
              if (user != null) {
                discriminator1 = user.discriminator;
              }
              formatToPlainStringResult = formatToPlainString(AydQ7a, obj3);
            }
            return formatToPlainStringResult;
          } else if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.ROLE) {
            const intl = selectionActionComponent(guildId[21]).intl;
            const obj = { roleName: type.label };
            return intl.formatToPlainString(selectionActionComponent(guildId[21]).t.F6ejkk, obj);
          }
        },
        channelId,
        allowEmpty,
      };
      return closure_10(channelId(tmp3[24]), obj);
    };
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx",
);

export default tmp5;
