// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import instant_invite_InstantInviteUtils from "../../../../instant_invite/native/InstantInviteUtils.tsx";
import UsersFastListConstants from "UsersFastListConstants.tsx";
import openGroupDMAddMembers from "../../../../group_dm/native/openGroupDMAddMembers.tsx";
import showChatGDMUpsellActionSheetDefault from "../../../../group_dm/native/showChatGDMUpsellActionSheet.tsx";
import channel_permissions_ChannelPermissionsUtils from "../../../../channel_permissions/native/ChannelPermissionsUtils.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import RelationshipStore_mod from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import Constants from "../../../../../Constants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const openGroupDMAddMembersDefault = openGroupDMAddMembers;
let channel, closure_1, constants, importDefault;

let c10;
let closure_12;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let RelationshipStore = RelationshipStore_mod;
const USERS_LIST_PADDING_BETWEEN_SECTIONS = UsersFastListConstants.USERS_LIST_PADDING_BETWEEN_SECTIONS;
({ Permissions: c10, AnalyticsSections: unpackModuleId, InstantInviteSources: closure_12 } = Constants);
const jsx = Fragment.jsx;
let closure_14 = { listActionRenderer: "Array", listActionHeight: "Set" };
let obj = { wrapper: { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS } };
let closure_15 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let obj3;
      let onClick;
      let tmp10;
      let tmp8;
      let tmp = channel;
      let obj = channel(576);
      const cResult = obj.c(40);
      channel = channel.channel;
      const disable = channel.disable;
      const tmp4 = undefined !== disable && disable;
      closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function p() {
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
        };
        cResult[1] = channel;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      if (cResult[3] !== channel) {
        const canResult = PermissionStore.can(constants.MANAGE_ROLES, channel);
        cResult[3] = channel;
        cResult[4] = canResult;
        tmp10 = canResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === tmp10) {
        let tmp14;
        if (cResult[6] === channel) {
          tmp14 = cResult[7];
        }
        let tmp17 = null != channel && !tmp4;
        if (tmp17) {
          let tmp18 = tmp14;
          if (!tmp18) {
            let isFriendResult;
            if (channel.isDM()) {
              isFriendResult = RelationshipStore.isFriend(channel.getRecipientId());
            } else {
              isFriendResult = channel.isMultiUserDM() || PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel);
            }
            tmp18 = isFriendResult;
          }
          tmp17 = tmp18;
        }
        if (cResult[8] !== channel) {
          let flag;
          if (channel != null) {
            flag = channel.isDM();
          }
          if (flag == null) {
            flag = false;
          }
          cResult[8] = channel;
          cResult[9] = flag;
        }
        if (cResult[10] !== channel) {
          let flag2;
          if (channel != null) {
            flag2 = channel.isMultiUserDM();
          }
          if (flag2 == null) {
            flag2 = false;
          }
          cResult[10] = channel;
          cResult[11] = flag2;
        }
        let id;
        if (channel != null) {
          id = channel.id;
        }
        id(6546)();
        [r10095, dependencyMap] = react.useState(undefined);
        const _Symbol = Symbol;
        _slicedToArray(react.useState(undefined), 2);
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(arg0) {
              height = channel.nativeEvent.layout.height;
              tmp = closure_2((arg0) => {
                let tmp = arg0;
                if (arg0 == null) {
                  tmp = height;
                }
                return tmp;
              });
              return;
            }
          }
          cResult[12] = F;
        } else {
          class F {
            constructor(arg0) {
              height = channel.nativeEvent.layout.height;
              tmp = closure_2((arg0) => {
                let tmp = arg0;
                if (arg0 == null) {
                  tmp = height;
                }
                return tmp;
              });
              return;
            }
          }
        }
        if (cResult[13] !== id) {
          class F {
            constructor(arg0) {
              height = channel.nativeEvent.layout.height;
              tmp = closure_2((arg0) => {
                let tmp = arg0;
                if (arg0 == null) {
                  tmp = height;
                }
                return tmp;
              });
              return;
            }
          }
          cResult[13] = id;
          cResult[14] = tmp33;
        } else {
          class F {
            constructor(arg0) {
              height = channel.nativeEvent.layout.height;
              tmp = closure_2((arg0) => {
                let tmp = arg0;
                if (arg0 == null) {
                  tmp = height;
                }
                return tmp;
              });
              return;
            }
          }
        }
        _slicedToArray = tmp33;
        if (null != id) {
          class F {
            constructor(arg0) {
              height = channel.nativeEvent.layout.height;
              tmp = closure_2((arg0) => {
                let tmp = arg0;
                if (arg0 == null) {
                  tmp = height;
                }
                return tmp;
              });
              return;
            }
          }
          return closure_14;
        }
      }
      let result = tmp10;
      if (result) {
        class F {
          constructor(arg0) {
            height = channel.nativeEvent.layout.height;
            tmp = closure_2((arg0) => {
              let tmp = arg0;
              if (arg0 == null) {
                tmp = height;
              }
              return tmp;
            });
            return;
          }
        }
        result = obj3.isPrivateGuildChannel(channel);
      }
      cResult[5] = tmp10;
      cResult[6] = channel;
      cResult[7] = result;
      tmp14 = result;
    }
  : (channel) => {
      let c3;
      let c4;
      let closure_10;
      let closure_8;
      let first;
      channel = channel.channel;
      let flag = channel.disable;
      if (flag === undefined) {
        flag = false;
      }
      let stateFromStores;
      _slicedToArray = undefined;
      react = undefined;
      let flag2;
      let flag3;
      let id;
      RelationshipStore = undefined;
      first = undefined;
      constants = undefined;
      let onLayout;
      let callback1;
      let tmp = closure_15();
      importDefault = tmp;
      let tmp2 = channel;
      let obj = channel(stateFromStores[13]);
      const items = [first];
      stateFromStores = obj.useStateFromStores(items, () => {
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
      let obj2 = id;
      let canResult = id.can(constants.MANAGE_ROLES, channel);
      const tmp5 = constants;
      if (canResult) {
        const tmp2Result = tmp2(stateFromStores[14]);
        canResult = tmp2Result.isPrivateGuildChannel(channel);
      }
      _slicedToArray = canResult;
      let tmp7 = null != channel && !flag;
      if (tmp7) {
        let tmp8 = canResult;
        if (!tmp8) {
          let isFriendResult;
          if (channel.isDM()) {
            isFriendResult = RelationshipStore.isFriend(channel.getRecipientId());
          } else {
            isFriendResult = channel.isMultiUserDM() || obj2.can(tmp5.CREATE_INSTANT_INVITE, channel);
          }
          tmp8 = isFriendResult;
        }
        tmp7 = tmp8;
      }
      react = tmp7;
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
      let tmp12 = require("useScaledRowHeight")();
      RelationshipStore = tmp12;
      [first, constants] = react.useState(undefined);
      onLayout = react.useCallback((nativeEvent) => {
        const height = nativeEvent.nativeEvent.layout.height;
        let tmp = closure_10((arg0) => {
          let tmp = arg0;
          if (arg0 == null) {
            tmp = height;
          }
          return tmp;
        });
      }, []);
      const items1 = [id];
      callback1 = react.useCallback(() => {
        if (null != id) {
          openGroupDMAddMembersDefault(tmp, unpackModuleId.MEMBER_LIST);
        }
      }, items1);
      const items2 = [canResult, id, callback1, flag2, flag3, first, onLayout, stateFromStores, tmp12, tmp7, tmp];
      return react.useMemo(() => {
        let IconComponent;
        let formatToPlainStringResult;
        let handlePress;
        let iconSource;
        let intl4;
        let label;
        let onClick;
        let sublabel;
        if (null != id) {
          if (c4) {
            let tmp12;
            if (flag2) {
              let obj2 = {
                iconSource: closure_1(stateFromStores[17]),
                IconComponent: channel(stateFromStores[18]).ChatPlusIcon,
                label: intl4.string(channel(stateFromStores[19]).t["3hF1W4"]),
                sublabel: formatToPlainStringResult,
                handlePress: callback1,
              };
              intl4 = channel(stateFromStores[19]).intl;
              formatToPlainStringResult = undefined;
              if (null != stateFromStores) {
                const intl5 = channel(stateFromStores[19]).intl;
                let obj3 = { recipient: tmp35 };
                formatToPlainStringResult = intl5.formatToPlainString(channel(stateFromStores[19]).t["Sh/xNN"], obj3);
              }
              tmp12 = obj2;
            } else {
              let obj = { iconSource: null, IconComponent: null, label: null, handlePress: null };
              if (flag3) {
                obj.iconSource = closure_1(stateFromStores[20]);
                obj.IconComponent = channel(stateFromStores[21]).GroupPlusIcon;
                const intl3 = channel(stateFromStores[19]).intl;
                obj.label = intl3.string(channel(stateFromStores[19]).t["LR+Ptf"]);
                obj.handlePress = function handlePress() {
                  if (null != flag3.getChannel(id)) {
                    const obj4 = channel(stateFromStores[16]);
                    const groupDMAddMembersAction = obj4.getGroupDMAddMembersAction(id, callback.MEMBER_LIST);
                    if ("open" === groupDMAddMembersAction) {
                      const tmp8Result = channel(stateFromStores[22]);
                      if (
                        tmp8Result.UNSAFE_isDismissibleContentDismissed(
                          channel(stateFromStores[23]).DismissibleContent.GDM_INVITE_REMINDER,
                        )
                      ) {
                        onClick();
                      } else {
                        const obj = { onClick };
                        closure_1(stateFromStores[24])(obj);
                      }
                    } else {
                      const tmp8Result2 = channel(stateFromStores[16]);
                      const result = tmp8Result2.showGroupDMAddMembersRoadblock(
                        groupDMAddMembersAction,
                        callback.MEMBER_LIST,
                      );
                    }
                  }
                };
                tmp12 = obj;
              } else if (c3) {
                obj.iconSource = closure_1(stateFromStores[25]);
                obj.IconComponent = channel(stateFromStores[26]).SettingsIcon;
                const intl2 = channel(stateFromStores[19]).intl;
                obj.label = intl2.string(channel(stateFromStores[19]).t.z9Mqln);
                obj.handlePress = function handlePress() {
                  channel = flag3.getChannel(id);
                  if (null != channel) {
                    const obj = channel(stateFromStores[27]);
                    const result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
                  }
                };
                tmp12 = obj;
              } else {
                obj.iconSource = closure_1(stateFromStores[20]);
                obj.IconComponent = channel(stateFromStores[21]).GroupPlusIcon;
                const intl = channel(stateFromStores[19]).intl;
                obj.label = intl.string(channel(stateFromStores[19]).t["Ab/6S0"]);
                obj.handlePress = function handlePress() {
                  channel = flag3.getChannel(id);
                  if (null != channel) {
                    const obj = channel(stateFromStores[28]);
                    const result = obj.dismissGlobalKeyboard();
                    const obj3 = { source: callback1.CHAT_SIDEBAR };
                    const obj2 = channel(stateFromStores[29]);
                    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                  }
                };
                tmp12 = obj;
              }
            }
            ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp12);
            const RowButton = channel(stateFromStores[30]).RowButton;
            let closure_0 = (
              <flag2 style={closure_1.wrapper} onLayout={onLayout}>
                {null}
              </flag2>
            );
            closure_1 = closure_8 + closure_1.wrapper.paddingTop;
            return {
              listActionRenderer() {
                return closure_0;
              },
              listActionHeight() {
                let tmp = first;
                if (first == null) {
                  tmp = closure_1;
                }
                return tmp;
              },
            };
          }
        }
        return closure_1_14;
      }, items2);
    };
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx",
);

export default tmp3;
