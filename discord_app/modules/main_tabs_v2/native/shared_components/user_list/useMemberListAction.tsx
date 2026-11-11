// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx
import isGameOrganizationInviteRecipientDefault from "../../../../game_organization_invites/isGameOrganizationInviteRecipient.tsx";
import openGroupDMAddMembersDefault from "../../../../group_dm/native/openGroupDMAddMembers.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const USERS_LIST_PADDING_BETWEEN_SECTIONS = fn(10511).USERS_LIST_PADDING_BETWEEN_SECTIONS;
const Constants = fn(1072);
({ Permissions: closure_11, AnalyticsSections: closure_12, InstantInviteSources: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = { listActionRenderer: "Array", listActionHeight: "flexDirection" };
let closure_17 = [];
const createStyles = fn(5243);
let closure_18 = createStyles.createStyles({ wrapper: { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS } });
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx",
);

export default function useMemberListAction(channel) {
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
  let invitableGameOrganizationsFullSubLabel;
  closure_8 = undefined;
  c9 = undefined;
  let combined;
  let flag2;
  let flag3;
  let id;
  closure_14 = undefined;
  let first;
  closure_16 = undefined;
  let onLayout;
  let callback1;
  let tmp = callback1();
  importDefault = tmp;
  items = [c9];
  stateFromStores = channel(stateFromStores[11]).useStateFromStores(items, () => {
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
  let obj = channel(stateFromStores[11]);
  const tmp4 = c9;
  const items1 = [tmp4, closure_8];
  const stateFromStores1 = channel(stateFromStores[11]).useStateFromStores(items1, () => {
    let tmp5Result = null != recipientId;
    if (tmp5Result) {
      const user = UserStore.getUser(tmp);
      const currentUser = UserStore.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp5Result = isGameOrganizationInviteRecipientDefault(user, id, RelationshipStore);
    }
    return tmp5Result;
  });
  let arr3 = require("useCanInviteGuildIds")("dm_member_list");
  let canResult = invitableGameOrganizationsFullSubLabel.can(flag2.MANAGE_ROLES, channel);
  if (canResult) {
    canResult = tmp2(tmp3[14]).isPrivateGuildChannel(channel);
    const tmp2Result4 = tmp2(tmp3[14]);
  }
  noop = canResult;
  let tmp12 = null != channel && !flag;
  if (tmp12) {
    if (canResult) {
      tmp12 = canResult;
    } else if (channel.isDM()) {
      let isFriendResult = obj3.isFriend(channel.getRecipientId());
    } else {
      isFriendResult = channel.isMultiUserDM() || obj4.can(tmp10.CREATE_INSTANT_INVITE, channel);
    }
  }
  c5 = tmp12;
  let tmp16 = !flag;
  if (!flag) {
    tmp16 = stateFromStores1;
  }
  if (tmp16) {
    tmp16 = arr3.length > 0;
  }
  closure_6 = tmp16;
  obj3 = closure_8;
  obj4 = invitableGameOrganizationsFullSubLabel;
  tmp10 = flag2;
  const tmp2Result = channel(stateFromStores[11]);
  if (!tmp16) {
    arr3 = onLayout;
  }
  const tmp2Result5 = channel(stateFromStores[15]);
  invitableGameOrganizationsFullSubLabel = channel(stateFromStores[16]).getInvitableGameOrganizationsFullSubLabel(
    tmp9(tmp3[16])(tmp2Result5.useInvitableGameOrganizationsFetch(arr3).data),
  );
  let tmp18 = tmp12;
  if (!tmp12) {
    tmp18 = tmp16;
  }
  closure_8 = tmp18;
  let num2 = 0;
  if (tmp12) {
    num2 = 1;
  }
  let num3 = 0;
  if (tmp16) {
    num3 = 1;
  }
  const sum = num2 + num3;
  c9 = sum;
  combined = "" + sum + ":" + null != invitableGameOrganizationsFullSubLabel;
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
  const tmp22 = require("useScaledRowHeight")();
  closure_14 = tmp22;
  const tmp23 = recipientId(noop.useState(undefined), 2);
  first = tmp23[0];
  closure_16 = tmp23[1];
  const items2 = [combined];
  onLayout = noop.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    closure_16((arg0) => {
      let tmp = arg0;
      let layoutKey;
      if (arg0 != null) {
        layoutKey = tmp.layoutKey;
      }
      if (layoutKey !== combined) {
        const obj = { layoutKey: tmp3, height };
        tmp = obj;
      }
      return tmp;
    });
  }, items2);
  const items3 = [id];
  callback1 = noop.useCallback(() => {
    if (null != id) {
      openGroupDMAddMembersDefault(tmp, constants.MEMBER_LIST);
    }
  }, items3);
  const items4 = [
    sum,
    canResult,
    id,
    combined,
    callback1,
    flag2,
    flag3,
    invitableGameOrganizationsFullSubLabel,
    first,
    onLayout,
    recipientId,
    stateFromStores,
    tmp22,
    tmp18,
    tmp16,
    tmp12,
    tmp,
  ];
  return noop.useMemo(() => {
    if (null != id) {
      if (closure_8) {
        if (flag2) {
          let obj2 = {
            iconSource: height(stateFromStores[19]),
            IconComponent: channel(stateFromStores[20]).ChatPlusIcon,
            label: null,
            sublabel: null,
            handlePress: null,
          };
          const intl4 = channel(stateFromStores[21]).intl;
          obj2.label = intl4.string(channel(stateFromStores[21]).t["3hF1W4"]);
          let formatToPlainStringResult;
          if (null != stateFromStores) {
            const intl5 = channel(stateFromStores[21]).intl;
            let obj3 = { recipient: tmp35 };
            formatToPlainStringResult = intl5.formatToPlainString(channel(stateFromStores[21]).t["Sh/xNN"], obj3);
          }
          obj2.sublabel = formatToPlainStringResult;
          obj2.handlePress = callback1;
          let tmp12 = obj2;
        } else {
          let obj = { iconSource: null, IconComponent: null, label: null, handlePress: null };
          if (flag3) {
            obj.iconSource = height(stateFromStores[22]);
            obj.IconComponent = channel(stateFromStores[23]).GroupPlusIcon;
            const intl3 = channel(stateFromStores[21]).intl;
            obj.label = intl3.string(channel(stateFromStores[21]).t["LR+Ptf"]);
            obj.handlePress = function handlePress() {
              if (null != closure_6.getChannel(id)) {
                const groupDMAddMembersAction = channel(stateFromStores[18]).getGroupDMAddMembersAction(
                  id,
                  flag3.MEMBER_LIST,
                );
                if ("open" === groupDMAddMembersAction) {
                  if (
                    tmp8Result.UNSAFE_isDismissibleContentDismissed(
                      channel(stateFromStores[25]).DismissibleContent.GDM_INVITE_REMINDER,
                    )
                  ) {
                    onClick();
                  } else {
                    const obj = { onClick };
                    height(stateFromStores[26])(obj);
                  }
                  tmp8Result = channel(stateFromStores[24]);
                } else {
                  const result = channel(stateFromStores[18]).showGroupDMAddMembersRoadblock(
                    groupDMAddMembersAction,
                    flag3.MEMBER_LIST,
                  );
                  const tmp8Result2 = channel(stateFromStores[18]);
                }
                const obj4 = channel(stateFromStores[18]);
              }
            };
            tmp12 = obj;
          } else if (c4) {
            obj.iconSource = tmp4(stateFromStores[27]);
            obj.IconComponent = channel(stateFromStores[28]).SettingsIcon;
            const intl2 = channel(stateFromStores[21]).intl;
            obj.label = intl2.string(channel(stateFromStores[21]).t.z9Mqln);
            obj.handlePress = function handlePress() {
              channel = closure_6.getChannel(id);
              if (null != channel) {
                const result = channel(stateFromStores[29]).openChannelMembersActionSheet(channel.id, channel.guild_id);
                const obj = channel(stateFromStores[29]);
              }
            };
            tmp12 = obj;
          } else {
            obj.iconSource = tmp4(stateFromStores[22]);
            obj.IconComponent = channel(stateFromStores[23]).GroupPlusIcon;
            const intl = channel(stateFromStores[21]).intl;
            obj.label = intl.string(channel(stateFromStores[21]).t["Ab/6S0"]);
            obj.handlePress = function handlePress() {
              channel = closure_6.getChannel(closure_1_13);
              if (null != channel) {
                const result = channel(stateFromStores[30]).dismissGlobalKeyboard();
                const obj = channel(stateFromStores[30]);
                const obj3 = { source: id.CHAT_SIDEBAR };
                const result1 = channel(stateFromStores[31]).showInstantInviteActionSheet(channel, obj3);
                const obj2 = channel(stateFromStores[31]);
              }
            };
            tmp12 = obj;
          }
        }
        let obj4 = { style: height.wrapper, onLayout, children: null };
        ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp12);
        const obj5 = { spacing: combined, children: null };
        let tmp42Result = null;
        if (c5) {
          const obj6 = { icon: null, onPress: null, label: null, subLabel: null, arrow: true };
          const obj7 = { source: iconSource, IconComponent };
          obj6.icon = closure_14(channel(stateFromStores[33]).RowButton.Icon, obj7);
          obj6.onPress = handlePress;
          obj6.label = label;
          obj6.subLabel = sublabel;
          tmp42Result = closure_14(channel(stateFromStores[33]).RowButton, obj6);
        }
        items = [tmp42Result];
        let tmp42Result2 = null;
        if (closure_6) {
          tmp42Result2 = null;
          if (null != recipientId) {
            const obj8 = { icon: null, onPress: null, label: null, subLabel: null, disabled: null, arrow: true };
            const obj9 = { IconComponent: channel(stateFromStores[34]).GameControllerIcon };
            obj8.icon = closure_14(channel(stateFromStores[33]).RowButton.Icon, obj9);
            obj8.onPress = function onPress() {
              return height(stateFromStores[35])(recipientId);
            };
            const intl6 = channel(stateFromStores[21]).intl;
            obj8.label = intl6.string(height(stateFromStores[36])["wkSug+"]);
            obj8.subLabel = invitableGameOrganizationsFullSubLabel;
            obj8.disabled = null != invitableGameOrganizationsFullSubLabel;
            tmp42Result2 = closure_14(channel(stateFromStores[33]).RowButton, obj8);
          }
        }
        items[1] = tmp42Result2;
        obj5.children = items;
        obj4.children = first(channel(stateFromStores[32]).Stack, obj5);
        closure_0 = closure_14(c5, obj4);
        height = c9 * closure_14 + (c9 - 1) * combined + height.wrapper.paddingTop;
        let layoutKey;
        if (first != null) {
          layoutKey = first.layoutKey;
        }
        if (layoutKey === combined) {
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
    return closure_16;
  }, items4);
}
