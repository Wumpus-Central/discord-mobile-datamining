// discord_app/modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import InteractionComponentTypes from "../../InteractionComponentTypes.tsx";
import RoleIconUtils from "../../../guild_boosting/RoleIconUtils.tsx";
import RoleIconDefault from "../../../roles/native/RoleIcon.tsx";
import SearchableSelectActionComponentUtils from "../../SearchableSelectActionComponentUtils.tsx";
import ShieldUserIcon from "../../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import DiscordTagDefault from "../../../user_profile/native/DiscordTag.tsx";
import UserIcon from "../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PresenceStore from "../../../../stores/PresenceStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ Fonts, DEFAULT_ROLE_COLOR_HEX: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  name: {
    color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
    fontFamily: Fonts.PRIMARY_MEDIUM,
    fontSize: 12,
    lineHeight: 16,
  },
  discriminator: null,
  roleCountContainer: null,
  roleCountText: null,
};
let obj3 = {
  color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  fontFamily: Fonts.PRIMARY_MEDIUM,
  fontSize: 12,
  lineHeight: 16,
};
obj2.discriminator = { color: nativeDefault.colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
obj2.roleCountContainer = {
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "flex-end",
  marginRight: 12,
};
obj2.roleCountText = { paddingRight: 4 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MentionableSelectComponentActionSheet(selectionActionComponent) {
      const cResult = selectionActionComponent(guildId[11]).c(35);
      selectionActionComponent = selectionActionComponent.selectionActionComponent;
      ({ labelComponent, channelId } = selectionActionComponent);
      guildId = selectionActionComponent.guildId;
      ({ containerId, onSubmit, allowEmpty } = selectionActionComponent);
      const tmp4 = closure_12();
      closure_3 = tmp4;
      if (cResult[0] !== guildId) {
        guild = GuildStore.getGuild(guildId);
        cResult[0] = guildId;
        cResult[1] = guild;
        let tmp5 = guild;
      } else {
        tmp5 = cResult[1];
      }
      let id;
      let obj = selectionActionComponent(guildId[11]);
      const tmp = selectionActionComponent;
      if (tmp5 != null) {
        id = tmp5.id;
      }
      const tmp9Result = channelId(guildId[12])(id, tmp(guildId[13]).MIN_REREQUEST_TIME);
      GuildRoleStore = tmp9Result;
      if (cResult[2] === channelId) {
        if (cResult[3] === selectionActionComponent) {
          let tmp12 = cResult[4];
        }
        if (cResult[5] === containerId) {
          if (cResult[6] === guildId) {
            if (cResult[7] === onSubmit) {
              if (cResult[8] === tmp12) {
                if (cResult[9] === selectionActionComponent) {
                  let tmp13 = cResult[10];
                }
                ({ options, selectedOptions, isSelected, onPressOptionItem, submitSelection, setQuery } = channelId(
                  tmp2[14],
                )(tmp13));
                if (cResult[11] === tmp5) {
                  if (cResult[12] === guildId) {
                    let tmp15 = cResult[13];
                  }
                  if (cResult[14] !== tmp4) {
                    function renderDescription(type) {
                      if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
                        user = UserStore.getUser(type.value);
                        const obj = { user, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
                        ({
                          name: obj.usernameStyle,
                          discriminator: obj.discriminatorStyle,
                          name: obj.nicknameStyle,
                        } = closure_3);
                        return collapsed(DiscordTagDefault, obj);
                      }
                    }
                    cResult[14] = tmp4;
                    cResult[15] = renderDescription;
                    let tmp16 = renderDescription;
                  } else {
                    tmp16 = cResult[15];
                  }
                  const _Symbol = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    function accessibilityLabel(type) {
                      if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.USER) {
                        user = user.getUser(type.value);
                        let bot;
                        if (user != null) {
                          bot = user.bot;
                        }
                        const intl2 = selectionActionComponent(guildId[21]).intl;
                        const formatToPlainString = intl2.formatToPlainString;
                        const t = selectionActionComponent(guildId[21]).t;
                        if (bot) {
                          const obj2 = { username: type.label, discriminator: null };
                          let discriminator;
                          if (user != null) {
                            discriminator = user.discriminator;
                          }
                          obj2.discriminator = discriminator;
                          let formatToPlainStringResult = formatToPlainString(t["zogo/8"], obj2);
                        } else {
                          const obj3 = { username: type.label, discriminator: null };
                          let discriminator1;
                          if (user != null) {
                            discriminator1 = user.discriminator;
                          }
                          obj3.discriminator = discriminator1;
                          formatToPlainStringResult = formatToPlainString(t.AydQ7a, obj3);
                        }
                        return formatToPlainStringResult;
                      } else if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.ROLE) {
                        const intl = selectionActionComponent(guildId[21]).intl;
                        const obj = { roleName: type.label };
                        return intl.formatToPlainString(selectionActionComponent(guildId[21]).t.F6ejkk, obj);
                      }
                    }
                    cResult[16] = accessibilityLabel;
                    let tmp18 = accessibilityLabel;
                  } else {
                    tmp18 = cResult[16];
                  }
                  if (cResult[17] === tmp5) {
                    if (cResult[18] === tmp9Result) {
                      if (cResult[19] === tmp4) {
                        let tmp19 = cResult[20];
                      }
                      if (cResult[21] === allowEmpty) {
                        if (cResult[22] === channelId) {
                          if (cResult[23] === isSelected) {
                            if (cResult[24] === labelComponent) {
                              if (cResult[25] === onPressOptionItem) {
                                if (cResult[26] === options) {
                                  if (cResult[27] === tmp16) {
                                    if (cResult[28] === tmp15) {
                                      if (cResult[29] === tmp19) {
                                        if (cResult[30] === selectedOptions) {
                                          if (cResult[31] === selectionActionComponent) {
                                            if (cResult[32] === setQuery) {
                                              if (cResult[33] === submitSelection) {
                                                let tmp20 = cResult[34];
                                              }
                                              return tmp20;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      let obj2 = {
                        onPressOptionItem,
                        renderIcon: tmp15,
                        renderDescription: tmp16,
                        renderOptionSuffix: tmp19,
                        selectionActionComponent,
                        labelComponent: null,
                        options: null,
                        selectedCount: null,
                        selectedOptions: null,
                        isSelected: null,
                        submitSelection: null,
                        onQueryChange: null,
                        itemAccessibilityLabel: null,
                        channelId: null,
                        allowEmpty: null,
                      };
                      class L {
                        constructor(arg0) {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          if (selectionActionComponent.type === closure_0(closure_2[15]).SelectOptionType.USER) {
                            tmp12 = closure_8;
                            user = closure_8.getUser(selectionActionComponent.value);
                            tmp14 = null;
                            if (null == user) {
                              return null;
                            } else {
                              tmp16 = closure_7;
                              isMobileOnlineResult = closure_7.isMobileOnline(user.id);
                              isVROnlineResult = closure_7.isVROnline(user.id);
                              status = closure_7.getStatus(user.id);
                              tmp20 = jsx;
                              obj1 = {
                                user: null,
                                isMobileOnline: null,
                                isVROnline: null,
                                status: null,
                                guildId: null,
                                size: null,
                              };
                              obj1.user = user;
                              obj1.isMobileOnline = isMobileOnlineResult;
                              obj1.isVROnline = isVROnlineResult;
                              obj1.status = status;
                              tmp15 = guildId;
                              obj1.guildId = tmp15;
                              obj1.size = tmp(tmp2[16]).AvatarSizes.XSMALL;
                              return tmp20(tmp(tmp2[16]).Avatar, obj1);
                            }
                          } else if (selectionActionComponent.type === tmp(tmp2[15]).SelectOptionType.ROLE) {
                            tmp3 = closure_4;
                            tmp4 = null;
                            if (null != closure_4) {
                              tmp6 = closure_5;
                              role = closure_5.getRole(tmp3.id, selectionActionComponent.value);
                            }
                            if (null != tmp3) {
                              if (null != role) {
                                tmpResult = tmp(tmp2[17]);
                                if (tmpResult.canGuildUseRoleIcons(tmp3, role)) {
                                  tmpResult1 = tmp(tmp2[17]);
                                  roleIconData = tmpResult1.getRoleIconData(role);
                                  if (null != roleIconData) {
                                    tmp10 = jsx;
                                    tmp11 = closure_1;
                                    obj6 = { src: null, unicodeEmoji: null, size: 24, name: null };
                                    ({ customIconSrc: obj3.src, unicodeEmoji: obj3.unicodeEmoji } = roleIconData);
                                    obj6.name = role.name;
                                    return jsx(closure_1(tmp2[18]), obj6);
                                  }
                                }
                                tmp8 = jsx;
                                colorString = undefined;
                                if (role != null) {
                                  colorString = role.colorString;
                                }
                                if (colorString == null) {
                                  colorString = DEFAULT_ROLE_COLOR_HEX;
                                }
                                obj7 = { color: null };
                                obj7.color = colorString;
                                return tmp8(tmp(tmp2[19]).ShieldUserIcon, obj7);
                              }
                            }
                            return null;
                          } else {
                            return;
                          }
                        }
                      }
                      obj2.options = options;
                      obj2.selectedCount = selectedOptions.length;
                      obj2.selectedOptions = selectedOptions;
                      obj2.isSelected = isSelected;
                      obj2.submitSelection = submitSelection;
                      obj2.onQueryChange = setQuery;
                      obj2.itemAccessibilityLabel = tmp18;
                      obj2.channelId = channelId;
                      obj2.allowEmpty = allowEmpty;
                      const tmp22 = closure_10(channelId(tmp2[24]), obj2);
                      cResult[21] = allowEmpty;
                      cResult[22] = channelId;
                      cResult[23] = isSelected;
                      cResult[24] = labelComponent;
                      cResult[25] = onPressOptionItem;
                      class A {
                        constructor(arg0) {
                          obj = closure_0(closure_2[13]);
                          return obj.queryMentionables(
                            selectionActionComponent.type,
                            selectionActionComponent,
                            channelId,
                          );
                        }
                      }
                      cResult[26] = options;
                      cResult[27] = tmp16;
                      cResult[28] = tmp15;
                      cResult[29] = tmp19;
                      cResult[30] = selectedOptions;
                      cResult[31] = selectionActionComponent;
                      cResult[32] = setQuery;
                      cResult[33] = submitSelection;
                      cResult[34] = tmp22;
                      tmp20 = tmp22;
                    }
                  }
                  function renderOptionSuffix(type) {
                    if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
                      let role;
                      if (null != closure_4) {
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
                        const obj = { style: closure_3.roleCountContainer, children: null };
                        const obj2 = {
                          style: closure_3.roleCountText,
                          variant: "text-sm/medium",
                          color: "interactive-text-default",
                          children: tmp7,
                        };
                        const items = [collapsed(Text_Text.Text, obj2), collapsed(UserIcon.UserIcon, { size: "xs" })];
                        obj.children = items;
                        return closure_2_11(View, obj);
                      }
                    }
                  }
                  class L {
                    constructor(arg0) {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      if (selectionActionComponent.type === closure_0(closure_2[15]).SelectOptionType.USER) {
                        tmp12 = closure_8;
                        user = closure_8.getUser(selectionActionComponent.value);
                        tmp14 = null;
                        if (null == user) {
                          return null;
                        } else {
                          tmp16 = closure_7;
                          isMobileOnlineResult = closure_7.isMobileOnline(user.id);
                          isVROnlineResult = closure_7.isVROnline(user.id);
                          status = closure_7.getStatus(user.id);
                          tmp20 = jsx;
                          obj1 = {
                            user: null,
                            isMobileOnline: null,
                            isVROnline: null,
                            status: null,
                            guildId: null,
                            size: null,
                          };
                          obj1.user = user;
                          obj1.isMobileOnline = isMobileOnlineResult;
                          obj1.isVROnline = isVROnlineResult;
                          obj1.status = status;
                          tmp15 = guildId;
                          obj1.guildId = tmp15;
                          obj1.size = tmp(tmp2[16]).AvatarSizes.XSMALL;
                          return tmp20(tmp(tmp2[16]).Avatar, obj1);
                        }
                      } else if (selectionActionComponent.type === tmp(tmp2[15]).SelectOptionType.ROLE) {
                        tmp3 = closure_4;
                        tmp4 = null;
                        if (null != closure_4) {
                          tmp6 = closure_5;
                          role = closure_5.getRole(tmp3.id, selectionActionComponent.value);
                        }
                        if (null != tmp3) {
                          if (null != role) {
                            tmpResult = tmp(tmp2[17]);
                            if (tmpResult.canGuildUseRoleIcons(tmp3, role)) {
                              tmpResult1 = tmp(tmp2[17]);
                              roleIconData = tmpResult1.getRoleIconData(role);
                              if (null != roleIconData) {
                                tmp10 = jsx;
                                tmp11 = closure_1;
                                obj6 = { src: null, unicodeEmoji: null, size: 24, name: null };
                                ({ customIconSrc: obj3.src, unicodeEmoji: obj3.unicodeEmoji } = roleIconData);
                                obj6.name = role.name;
                                return jsx(closure_1(tmp2[18]), obj6);
                              }
                            }
                            tmp8 = jsx;
                            colorString = undefined;
                            if (role != null) {
                              colorString = role.colorString;
                            }
                            if (colorString == null) {
                              colorString = DEFAULT_ROLE_COLOR_HEX;
                            }
                            obj7 = { color: null };
                            obj7.color = colorString;
                            return tmp8(tmp(tmp2[19]).ShieldUserIcon, obj7);
                          }
                        }
                        return null;
                      } else {
                        return;
                      }
                    }
                  }
                  cResult[17] = tmp5;
                  cResult[18] = tmp9Result;
                  cResult[19] = tmp4;
                  cResult[20] = renderOptionSuffix;
                  tmp19 = renderOptionSuffix;
                }
                class L {
                  constructor(arg0) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    if (selectionActionComponent.type === closure_0(closure_2[15]).SelectOptionType.USER) {
                      tmp12 = closure_8;
                      user = closure_8.getUser(selectionActionComponent.value);
                      tmp14 = null;
                      if (null == user) {
                        return null;
                      } else {
                        tmp16 = closure_7;
                        isMobileOnlineResult = closure_7.isMobileOnline(user.id);
                        isVROnlineResult = closure_7.isVROnline(user.id);
                        status = closure_7.getStatus(user.id);
                        tmp20 = jsx;
                        obj1 = {
                          user: null,
                          isMobileOnline: null,
                          isVROnline: null,
                          status: null,
                          guildId: null,
                          size: null,
                        };
                        obj1.user = user;
                        obj1.isMobileOnline = isMobileOnlineResult;
                        obj1.isVROnline = isVROnlineResult;
                        obj1.status = status;
                        tmp15 = guildId;
                        obj1.guildId = tmp15;
                        obj1.size = tmp(tmp2[16]).AvatarSizes.XSMALL;
                        return tmp20(tmp(tmp2[16]).Avatar, obj1);
                      }
                    } else if (selectionActionComponent.type === tmp(tmp2[15]).SelectOptionType.ROLE) {
                      tmp3 = closure_4;
                      tmp4 = null;
                      if (null != closure_4) {
                        tmp6 = closure_5;
                        role = closure_5.getRole(tmp3.id, selectionActionComponent.value);
                      }
                      if (null != tmp3) {
                        if (null != role) {
                          tmpResult = tmp(tmp2[17]);
                          if (tmpResult.canGuildUseRoleIcons(tmp3, role)) {
                            tmpResult1 = tmp(tmp2[17]);
                            roleIconData = tmpResult1.getRoleIconData(role);
                            if (null != roleIconData) {
                              tmp10 = jsx;
                              tmp11 = closure_1;
                              obj6 = { src: null, unicodeEmoji: null, size: 24, name: null };
                              ({ customIconSrc: obj3.src, unicodeEmoji: obj3.unicodeEmoji } = roleIconData);
                              obj6.name = role.name;
                              return jsx(closure_1(tmp2[18]), obj6);
                            }
                          }
                          tmp8 = jsx;
                          colorString = undefined;
                          if (role != null) {
                            colorString = role.colorString;
                          }
                          if (colorString == null) {
                            colorString = DEFAULT_ROLE_COLOR_HEX;
                          }
                          obj7 = { color: null };
                          obj7.color = colorString;
                          return tmp8(tmp(tmp2[19]).ShieldUserIcon, obj7);
                        }
                      }
                      return null;
                    } else {
                      return;
                    }
                  }
                }
                cResult[11] = tmp5;
                cResult[12] = guildId;
                cResult[13] = L;
                tmp15 = L;
                const tmp14 = channelId(tmp2[14])(tmp13);
              }
            }
          }
        }
        let obj3 = {
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
        cResult[10] = obj3;
        tmp13 = obj3;
      }
      class A {
        constructor(arg0) {
          obj = closure_0(closure_2[13]);
          return obj.queryMentionables(selectionActionComponent.type, selectionActionComponent, channelId);
        }
      }
      cResult[2] = channelId;
      cResult[3] = selectionActionComponent;
      cResult[4] = A;
      tmp12 = A;
      let tmp9 = channelId(guildId[12]);
    }
  : function MentionableSelectComponentActionSheet(selectionActionComponent) {
      selectionActionComponent = selectionActionComponent.selectionActionComponent;
      const channelId = selectionActionComponent.channelId;
      const guildId = selectionActionComponent.guildId;
      closure_5 = undefined;
      ({ labelComponent, containerId, onSubmit, allowEmpty } = selectionActionComponent);
      noop = closure_12();
      guild = GuildStore.getGuild(guildId);
      let id;
      if (guild != null) {
        id = guild.id;
      }
      closure_5 = channelId(guildId[12])(id, selectionActionComponent(tmp3[13]).MIN_REREQUEST_TIME);
      let items = [selectionActionComponent, channelId];
      const callback = noop.useCallback(
        (query) =>
          SearchableSelectActionComponentUtils.queryMentionables(selectionActionComponent.type, query, channelId),
        items,
      );
      let tmp7 = channelId(guildId[14])({
        selectActionComponent: selectionActionComponent,
        containerId,
        guildId,
        queryOptions: callback,
        onSubmit,
      });
      const selectedOptions = tmp7.selectedOptions;
      const items1 = [guild, guildId];
      ({ options, isSelected, onPressOptionItem, submitSelection, setQuery } = tmp7);
      const callback1 = noop.useCallback((type) => {
        if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
          user = UserStore.getUser(type.value);
          if (null == user) {
            return null;
          } else {
            const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
            const status = PresenceStore.getStatus(user.id);
            const obj = {
              user,
              isMobileOnline: isMobileOnlineResult,
              isVROnline: PresenceStore.isVROnline(user.id),
              status,
              guildId,
              size: native.AvatarSizes.XSMALL,
            };
            return collapsed(native.Avatar, obj);
          }
        } else if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
          if (null != guild) {
            const role = GuildRoleStore.getRole(guild.id, type.value);
          }
          if (null != guild) {
            if (null != role) {
              if (tmpResult.canGuildUseRoleIcons(guild, role)) {
                const roleIconData = RoleIconUtils.getRoleIconData(role);
                if (null != roleIconData) {
                  const obj2 = { src: null, unicodeEmoji: null, size: 24, name: null };
                  ({ customIconSrc: obj3.src, unicodeEmoji: obj3.unicodeEmoji } = roleIconData);
                  obj2.name = role.name;
                  return collapsed(RoleIconDefault, obj2);
                }
                const tmpResult2 = RoleIconUtils;
              }
              let colorString;
              if (role != null) {
                colorString = role.colorString;
              }
              if (colorString == null) {
                colorString = options;
              }
              const obj4 = { color: colorString };
              return collapsed(ShieldUserIcon.ShieldUserIcon, obj4);
            }
          }
          return null;
        }
      }, items1);
      return closure_10(channelId(guildId[24]), {
        onPressOptionItem,
        renderIcon: callback1,
        renderDescription(type) {
          if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
            user = UserStore.getUser(type.value);
            const obj = { user, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
            ({ name: obj.usernameStyle, discriminator: obj.discriminatorStyle, name: obj.nicknameStyle } = closure_3);
            return collapsed(DiscordTagDefault, obj);
          }
        },
        renderOptionSuffix(type) {
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
              const obj = { style: closure_3.roleCountContainer, children: null };
              const obj2 = {
                style: closure_3.roleCountText,
                variant: "text-sm/medium",
                color: "interactive-text-default",
                children: tmp7,
              };
              const items = [collapsed(Text_Text.Text, obj2), collapsed(UserIcon.UserIcon, { size: "xs" })];
              obj.children = items;
              return closure_2_11(View, obj);
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
        itemAccessibilityLabel: function accessibilityLabel(type) {
          if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.USER) {
            user = user.getUser(type.value);
            let bot;
            if (user != null) {
              bot = user.bot;
            }
            const intl2 = selectionActionComponent(guildId[21]).intl;
            const formatToPlainString = intl2.formatToPlainString;
            const t = selectionActionComponent(guildId[21]).t;
            if (bot) {
              const obj2 = { username: type.label, discriminator: null };
              let discriminator;
              if (user != null) {
                discriminator = user.discriminator;
              }
              obj2.discriminator = discriminator;
              let formatToPlainStringResult = formatToPlainString(t["zogo/8"], obj2);
            } else {
              const obj3 = { username: type.label, discriminator: null };
              let discriminator1;
              if (user != null) {
                discriminator1 = user.discriminator;
              }
              obj3.discriminator = discriminator1;
              formatToPlainStringResult = formatToPlainString(t.AydQ7a, obj3);
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
      });
    };
