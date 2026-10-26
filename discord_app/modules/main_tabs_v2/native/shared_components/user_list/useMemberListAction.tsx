// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import instant_invite_InstantInviteUtils from "../../../../instant_invite/native/InstantInviteUtils.tsx";
import useCanInviteToAnyLinkedGameOrganizationDefault from "../../../../game_organization_invites/useCanInviteToAnyLinkedGameOrganization.tsx";
import openGroupDMAddMembers from "../../../../group_dm/native/openGroupDMAddMembers.tsx";
import showChatGDMUpsellActionSheetDefault from "../../../../group_dm/native/showChatGDMUpsellActionSheet.tsx";
import channel_permissions_ChannelPermissionsUtils from "../../../../channel_permissions/native/ChannelPermissionsUtils.tsx";
import openGameOrganizationInvitePickerDefault from "../../../../game_organization_invites/native/openGameOrganizationInvitePicker.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

const openGroupDMAddMembersDefault = openGroupDMAddMembers;

require = fn;
const View = fn(17).View;
const USERS_LIST_PADDING_BETWEEN_SECTIONS = fn(10623).USERS_LIST_PADDING_BETWEEN_SECTIONS;
const Constants = fn(1087);
({ Permissions: closure_11, AnalyticsSections: closure_12, InstantInviteSources: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = { listActionRenderer: "Array", listActionHeight: "Reflect" };
const createStyles = fn(4971);
let closure_17 = createStyles.createStyles({ wrapper: { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useMemberListAction(channel) {
      const cResult = channel(576).c(56);
      channel = channel.channel;
      const disable = channel.disable;
      closure_17();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        class R {
          constructor() {
            obj = channel;
            isDMResult = undefined;
            if (channel != null) {
              isDMResult = obj.isDM();
            }
            tmp2 = null;
            if (isDMResult) {
              tmp3 = closure_9;
              user = closure_9.getUser(obj.getRecipientId());
              username = undefined;
              if (user != null) {
                username = user.username;
              }
              tmp2 = username;
            }
            return tmp2;
          }
        }
        cResult[1] = channel;
        cResult[2] = R;
      } else {
        class R {
          constructor() {
            obj = channel;
            isDMResult = undefined;
            if (channel != null) {
              isDMResult = obj.isDM();
            }
            tmp2 = null;
            if (isDMResult) {
              tmp3 = closure_9;
              user = closure_9.getUser(obj.getRecipientId());
              username = undefined;
              if (user != null) {
                username = user.username;
              }
              tmp2 = username;
            }
            return tmp2;
          }
        }
      }
      let obj = channel(576);
      const stateFromStores = channel(573).useStateFromStores(first, R);
      if (cResult[3] !== channel) {
        class R {
          constructor() {
            obj = channel;
            isDMResult = undefined;
            if (channel != null) {
              isDMResult = obj.isDM();
            }
            tmp2 = null;
            if (isDMResult) {
              tmp3 = closure_9;
              user = closure_9.getUser(obj.getRecipientId());
              username = undefined;
              if (user != null) {
                username = user.username;
              }
              tmp2 = username;
            }
            return tmp2;
          }
        }
        if (channel != null) {
          class R {
            constructor() {
              obj = channel;
              isDMResult = undefined;
              if (channel != null) {
                isDMResult = obj.isDM();
              }
              tmp2 = null;
              if (isDMResult) {
                tmp3 = closure_9;
                user = closure_9.getUser(obj.getRecipientId());
                username = undefined;
                if (user != null) {
                  username = user.username;
                }
                tmp2 = username;
              }
              return tmp2;
            }
          }
        }
        if (true === undefined) {
          class R {
            constructor() {
              obj = channel;
              isDMResult = undefined;
              if (channel != null) {
                isDMResult = obj.isDM();
              }
              tmp2 = null;
              if (isDMResult) {
                tmp3 = closure_9;
                user = closure_9.getUser(obj.getRecipientId());
                username = undefined;
                if (user != null) {
                  username = user.username;
                }
                tmp2 = username;
              }
              return tmp2;
            }
          }
        }
        cResult[3] = channel;
        cResult[4] = null;
      } else {
        class R {
          constructor() {
            obj = channel;
            isDMResult = undefined;
            if (channel != null) {
              isDMResult = obj.isDM();
            }
            tmp2 = null;
            if (isDMResult) {
              tmp3 = closure_9;
              user = closure_9.getUser(obj.getRecipientId());
              username = undefined;
              if (user != null) {
                username = user.username;
              }
              tmp2 = username;
            }
            return tmp2;
          }
        }
      }
      importDefault = tmp10;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            obj = channel;
            isDMResult = undefined;
            if (channel != null) {
              isDMResult = obj.isDM();
            }
            tmp2 = null;
            if (isDMResult) {
              tmp3 = closure_9;
              user = closure_9.getUser(obj.getRecipientId());
              username = undefined;
              if (user != null) {
                username = user.username;
              }
              tmp2 = username;
            }
            return tmp2;
          }
        }
        const items1 = [UserStore, RelationshipStore];
        cResult[5] = items1;
        const tmp13 = items1;
      } else {
        class R {
          constructor() {
            obj = channel;
            isDMResult = undefined;
            if (channel != null) {
              isDMResult = obj.isDM();
            }
            tmp2 = null;
            if (isDMResult) {
              tmp3 = closure_9;
              user = closure_9.getUser(obj.getRecipientId());
              username = undefined;
              if (user != null) {
                username = user.username;
              }
              tmp2 = username;
            }
            return tmp2;
          }
        }
      }
      if (cResult[6] !== tmp10) {
        class L {
          constructor() {
            tmp = closure_1;
            if (null == closure_1) {
              flag = false;
              return false;
            } else {
              tmp2 = closure_9;
              user = closure_9.getUser(tmp);
              tmp3 = null != user && !user.bot && !user.isSystemUser();
              if (tmp3) {
                tmp4 = closure_8;
                tmp3 = !closure_8.isBlocked(tmp);
              }
              return tmp3;
            }
          }
        }
        cResult[6] = tmp10;
        cResult[7] = L;
      } else {
        class L {
          constructor() {
            tmp = closure_1;
            if (null == closure_1) {
              flag = false;
              return false;
            } else {
              tmp2 = closure_9;
              user = closure_9.getUser(tmp);
              tmp3 = null != user && !user.bot && !user.isSystemUser();
              if (tmp3) {
                tmp4 = closure_8;
                tmp3 = !closure_8.isBlocked(tmp);
              }
              return tmp3;
            }
          }
        }
      }
      const tmpResult = channel(573);
      const stateFromStores1 = channel(573).useStateFromStores(tmp13, L);
      useCanInviteToAnyLinkedGameOrganizationDefault("dm_member_list");
      if (cResult[8] !== channel) {
        class L {
          constructor() {
            tmp = closure_1;
            if (null == closure_1) {
              flag = false;
              return false;
            } else {
              tmp2 = closure_9;
              user = closure_9.getUser(tmp);
              tmp3 = null != user && !user.bot && !user.isSystemUser();
              if (tmp3) {
                tmp4 = closure_8;
                tmp3 = !closure_8.isBlocked(tmp);
              }
              return tmp3;
            }
          }
        }
        const canResult = PermissionStore.can(constants.MANAGE_ROLES, channel);
        cResult[8] = channel;
        cResult[9] = canResult;
      } else {
        class L {
          constructor() {
            tmp = closure_1;
            if (null == closure_1) {
              flag = false;
              return false;
            } else {
              tmp2 = closure_9;
              user = closure_9.getUser(tmp);
              tmp3 = null != user && !user.bot && !user.isSystemUser();
              if (tmp3) {
                tmp4 = closure_8;
                tmp3 = !closure_8.isBlocked(tmp);
              }
              return tmp3;
            }
          }
        }
      }
      if (cResult[10] === tmp18) {
        class L {
          constructor() {
            tmp = closure_1;
            if (null == closure_1) {
              flag = false;
              return false;
            } else {
              tmp2 = closure_9;
              user = closure_9.getUser(tmp);
              tmp3 = null != user && !user.bot && !user.isSystemUser();
              if (tmp3) {
                tmp4 = closure_8;
                tmp3 = !closure_8.isBlocked(tmp);
              }
              return tmp3;
            }
          }
        }
        if (cResult[13] === tmp21) {
          class L {
            constructor() {
              tmp = closure_1;
              if (null == closure_1) {
                flag = false;
                return false;
              } else {
                tmp2 = closure_9;
                user = closure_9.getUser(tmp);
                tmp3 = null != user && !user.bot && !user.isSystemUser();
                if (tmp3) {
                  tmp4 = closure_8;
                  tmp3 = !closure_8.isBlocked(tmp);
                }
                return tmp3;
              }
            }
          }
        }
        if (null != channel && !tmp4) {
          class L {
            constructor() {
              tmp = closure_1;
              if (null == closure_1) {
                flag = false;
                return false;
              } else {
                tmp2 = closure_9;
                user = closure_9.getUser(tmp);
                tmp3 = null != user && !user.bot && !user.isSystemUser();
                if (tmp3) {
                  tmp4 = closure_8;
                  tmp3 = !closure_8.isBlocked(tmp);
                }
                return tmp3;
              }
            }
          }
          if (tmp21) {
            class L {
              constructor() {
                tmp = closure_1;
                if (null == closure_1) {
                  flag = false;
                  return false;
                } else {
                  tmp2 = closure_9;
                  user = closure_9.getUser(tmp);
                  tmp3 = null != user && !user.bot && !user.isSystemUser();
                  if (tmp3) {
                    tmp4 = closure_8;
                    tmp3 = !closure_8.isBlocked(tmp);
                  }
                  return tmp3;
                }
              }
            }
          } else {
            class L {
              constructor() {
                tmp = closure_1;
                if (null == closure_1) {
                  flag = false;
                  return false;
                } else {
                  tmp2 = closure_9;
                  user = closure_9.getUser(tmp);
                  tmp3 = null != user && !user.bot && !user.isSystemUser();
                  if (tmp3) {
                    tmp4 = closure_8;
                    tmp3 = !closure_8.isBlocked(tmp);
                  }
                  return tmp3;
                }
              }
            }
          }
        }
        cResult[13] = tmp21;
        cResult[14] = channel;
        cResult[15] = tmp4;
        cResult[16] = null != channel && !tmp4;
      }
      let result = tmp18;
      if (tmp18) {
        class L {
          constructor() {
            tmp = closure_1;
            if (null == closure_1) {
              flag = false;
              return false;
            } else {
              tmp2 = closure_9;
              user = closure_9.getUser(tmp);
              tmp3 = null != user && !user.bot && !user.isSystemUser();
              if (tmp3) {
                tmp4 = closure_8;
                tmp3 = !closure_8.isBlocked(tmp);
              }
              return tmp3;
            }
          }
        }
        result = obj4.isPrivateGuildChannel(channel);
      }
      cResult[10] = tmp18;
      cResult[11] = channel;
      cResult[12] = result;
      const tmpResult2 = channel(573);
    }
  : function useMemberListAction(channel) {
      channel = channel.channel;
      let flag = channel.disable;
      if (flag === undefined) {
        flag = false;
      }
      let stateFromStores;
      let recipientId;
      noop = undefined;
      c5 = undefined;
      closure_6 = undefined;
      PermissionStore = undefined;
      c8 = undefined;
      let flag2;
      let flag3;
      let id;
      closure_12 = undefined;
      let first;
      closure_14 = undefined;
      let onLayout;
      let callback1;
      let tmp = closure_17();
      importDefault = tmp;
      let items = [flag2];
      stateFromStores = channel(stateFromStores[13]).useStateFromStores(items, () => {
        let isDMResult;
        if (channel != null) {
          isDMResult = channel.isDM();
        }
        let tmp2 = null;
        if (isDMResult) {
          const user = UserStore.getUser(channel.getRecipientId());
          let username;
          if (user != null) {
            username = user.username;
          }
          tmp2 = username;
        }
        return tmp2;
      });
      let isDMResult;
      if (channel != null) {
        isDMResult = channel.isDM();
      }
      recipientId = null;
      if (true === isDMResult) {
        recipientId = channel.getRecipientId();
      }
      let obj = channel(stateFromStores[13]);
      const tmp4 = flag2;
      const items1 = [tmp4, c8];
      const stateFromStores1 = channel(stateFromStores[13]).useStateFromStores(items1, () => {
        if (null == recipientId) {
          return false;
        } else {
          const user = UserStore.getUser(recipientId);
          let tmp3 = null != user && !user.bot && !user.isSystemUser();
          if (tmp3) {
            tmp3 = !RelationshipStore.isBlocked(recipientId);
          }
          return tmp3;
        }
      });
      let obj3 = c8;
      let obj4 = PermissionStore;
      const tmp2Result = channel(stateFromStores[13]);
      const tmp9 = importDefault;
      let canResult = PermissionStore.can(id.MANAGE_ROLES, channel);
      if (canResult) {
        canResult = tmp2(tmp3[15]).isPrivateGuildChannel(channel);
        const tmp2Result2 = tmp2(tmp3[15]);
      }
      noop = canResult;
      let tmp13 = null != channel && !flag;
      if (tmp13) {
        if (canResult) {
          tmp13 = canResult;
        } else if (channel.isDM()) {
          let isFriendResult = obj3.isFriend(channel.getRecipientId());
        } else {
          isFriendResult = channel.isMultiUserDM() || obj4.can(id.CREATE_INSTANT_INVITE, channel);
        }
      }
      c5 = tmp13;
      let tmp17 = !flag;
      if (!flag) {
        tmp17 = stateFromStores1;
      }
      if (tmp17) {
        tmp17 = tmp10;
      }
      closure_6 = tmp17;
      let tmp18 = tmp13;
      if (!tmp13) {
        tmp18 = tmp17;
      }
      PermissionStore = tmp18;
      let num = 0;
      if (tmp13) {
        num = 1;
      }
      let num2 = 0;
      if (tmp17) {
        num2 = 1;
      }
      const sum = num + num2;
      c8 = sum;
      flag2 = undefined;
      if (channel != null) {
        flag2 = channel.isDM();
      }
      if (flag2 == null) {
        flag2 = false;
      }
      flag3 = undefined;
      if (channel != null) {
        flag3 = channel.isMultiUserDM();
      }
      if (flag3 == null) {
        flag3 = false;
      }
      id = undefined;
      if (channel != null) {
        id = channel.id;
      }
      const tmp21 = tmp9(stateFromStores[16])();
      closure_12 = tmp21;
      const tmp22 = recipientId(noop.useState(undefined), 2);
      first = tmp22[0];
      closure_14 = tmp22[1];
      const items2 = [sum];
      onLayout = noop.useCallback((nativeEvent) => {
        const height = nativeEvent.nativeEvent.layout.height;
        closure_14((arg0) => {
          let tmp = arg0;
          let actionCount;
          if (arg0 != null) {
            actionCount = tmp.actionCount;
          }
          if (actionCount !== c8) {
            const obj = { actionCount: tmp3, height };
            tmp = obj;
          }
          return tmp;
        });
      }, items2);
      const items3 = [id];
      callback1 = noop.useCallback(() => {
        if (null != id) {
          openGroupDMAddMembersDefault(tmp, constants2.MEMBER_LIST);
        }
      }, items3);
      const items4 = [
        sum,
        canResult,
        id,
        callback1,
        flag2,
        flag3,
        first,
        onLayout,
        recipientId,
        stateFromStores,
        tmp21,
        tmp18,
        tmp17,
        tmp13,
        tmp,
      ];
      return noop.useMemo(() => {
        if (null != id) {
          if (closure_7) {
            if (flag2) {
              let obj2 = {
                iconSource: height(stateFromStores[18]),
                IconComponent: channel(stateFromStores[19]).ChatPlusIcon,
                label: null,
                sublabel: null,
                handlePress: null,
              };
              const intl4 = channel(stateFromStores[20]).intl;
              obj2.label = intl4.string(channel(stateFromStores[20]).t["3hF1W4"]);
              let formatToPlainStringResult;
              if (null != stateFromStores) {
                const intl5 = channel(stateFromStores[20]).intl;
                let obj3 = { recipient: tmp35 };
                formatToPlainStringResult = intl5.formatToPlainString(channel(stateFromStores[20]).t["Sh/xNN"], obj3);
              }
              obj2.sublabel = formatToPlainStringResult;
              obj2.handlePress = callback1;
              let tmp12 = obj2;
            } else {
              let obj = { iconSource: null, IconComponent: null, label: null, handlePress: null };
              if (flag3) {
                obj.iconSource = height(stateFromStores[21]);
                obj.IconComponent = channel(stateFromStores[22]).GroupPlusIcon;
                const intl3 = channel(stateFromStores[20]).intl;
                obj.label = intl3.string(channel(stateFromStores[20]).t["LR+Ptf"]);
                obj.handlePress = function handlePress() {
                  if (null != closure_6.getChannel(id)) {
                    const groupDMAddMembersAction = channel(stateFromStores[17]).getGroupDMAddMembersAction(
                      id,
                      constants.MEMBER_LIST,
                    );
                    if ("open" === groupDMAddMembersAction) {
                      if (
                        tmp8Result.UNSAFE_isDismissibleContentDismissed(
                          channel(stateFromStores[24]).DismissibleContent.GDM_INVITE_REMINDER,
                        )
                      ) {
                        onClick();
                      } else {
                        const obj = { onClick };
                        height(stateFromStores[25])(obj);
                      }
                      tmp8Result = channel(stateFromStores[23]);
                    } else {
                      const result = channel(stateFromStores[17]).showGroupDMAddMembersRoadblock(
                        groupDMAddMembersAction,
                        constants.MEMBER_LIST,
                      );
                      const tmp8Result2 = channel(stateFromStores[17]);
                    }
                    const obj4 = channel(stateFromStores[17]);
                  }
                };
                tmp12 = obj;
              } else if (c4) {
                obj.iconSource = tmp4(stateFromStores[26]);
                obj.IconComponent = channel(stateFromStores[27]).SettingsIcon;
                const intl2 = channel(stateFromStores[20]).intl;
                obj.label = intl2.string(channel(stateFromStores[20]).t.z9Mqln);
                obj.handlePress = function handlePress() {
                  channel = closure_6.getChannel(id);
                  if (null != channel) {
                    const result = channel(stateFromStores[28]).openChannelMembersActionSheet(
                      channel.id,
                      channel.guild_id,
                    );
                    const obj = channel(stateFromStores[28]);
                  }
                };
                tmp12 = obj;
              } else {
                obj.iconSource = tmp4(stateFromStores[21]);
                obj.IconComponent = channel(stateFromStores[22]).GroupPlusIcon;
                const intl = channel(stateFromStores[20]).intl;
                obj.label = intl.string(channel(stateFromStores[20]).t["Ab/6S0"]);
                obj.handlePress = function handlePress() {
                  channel = closure_6.getChannel(id);
                  if (null != channel) {
                    const result = channel(stateFromStores[29]).dismissGlobalKeyboard();
                    const obj = channel(stateFromStores[29]);
                    const obj3 = { source: first.CHAT_SIDEBAR };
                    const result1 = channel(stateFromStores[30]).showInstantInviteActionSheet(channel, obj3);
                    const obj2 = channel(stateFromStores[30]);
                  }
                };
                tmp12 = obj;
              }
            }
            let obj4 = { style: height.wrapper, onLayout, children: null };
            ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp12);
            const obj5 = { spacing: flag3, children: null };
            let tmp42Result = null;
            if (c5) {
              const obj6 = { icon: null, onPress: null, label: null, subLabel: null, arrow: true };
              const obj7 = { source: iconSource, IconComponent };
              obj6.icon = closure_14(channel(stateFromStores[31]).RowButton.Icon, obj7);
              obj6.onPress = handlePress;
              obj6.label = label;
              obj6.subLabel = sublabel;
              tmp42Result = closure_14(channel(stateFromStores[31]).RowButton, obj6);
            }
            const items = [tmp42Result];
            let tmp42Result2 = null;
            if (closure_6) {
              tmp42Result2 = null;
              if (null != recipientId) {
                const obj8 = { icon: null, onPress: null, label: null, arrow: true };
                const obj9 = { IconComponent: channel(stateFromStores[32]).GameControllerIcon };
                obj8.icon = closure_14(channel(stateFromStores[31]).RowButton.Icon, obj9);
                obj8.onPress = function onPress() {
                  return height(stateFromStores[33])(recipientId);
                };
                const intl6 = channel(stateFromStores[20]).intl;
                obj8.label = intl6.string(height(stateFromStores[34])["wkSug+"]);
                tmp42Result2 = closure_14(channel(stateFromStores[31]).RowButton, obj8);
              }
            }
            items[1] = tmp42Result2;
            obj5.children = items;
            obj4.children = onLayout(channel(stateFromStores[35]).Stack, obj5);
            closure_0 = closure_14(c5, obj4);
            height = c8 * constants + (c8 - 1) * flag3 + height.wrapper.paddingTop;
            let actionCount;
            if (first != null) {
              actionCount = first.actionCount;
            }
            if (actionCount === c8) {
              height = first.height;
            }
            const obj10 = {
              listActionRenderer() {
                return closure_0;
              },
              listActionHeight() {
                return height;
              },
            };
            return obj10;
          }
        }
        return callback1;
      }, items4);
    };
