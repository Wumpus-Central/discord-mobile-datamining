// === Module 17029: AddModeratorsActionSheet ===

// Module 17029 (AddModeratorsActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 8110 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let BottomSheet, c4, c5, closure_0, closure_1, closure_2, id, row;

let obj2;
const View = react_native.View;
const RowType = ChannelPermissionsConstants.RowType;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
let closure_10 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx");

export default function AddModeratorsActionSheet(channel) {
  let intl;
  let intl2;
  let intl3;
  let pendingAdditions;
  let tmp4;
  channel = channel.channel;
  pendingAdditions = undefined;
  let obj = function _handleAddModeratorsPressed() {
    obj = _asyncToGenerator(async () => {
      let obj7;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let c0;
          let c1;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              id = tmp4;
              c0 = 0;
              c1 = 0;
              const _Object = Object;
              const values = Object.values(pendingAdditions);
              const found = values.filter((row) => null != row.row.id);
              c3 = 1;
              const mapped = found.map((row) => {
                let moderatorOverwrite;
                row = row.row;
                if (row.rowType === constants.ROLE) {
                  closure_1 = closure_1 + 1;
                  const obj2 = closure_0(closure_2[11]);
                  moderatorOverwrite = obj2.createModeratorOverwrite(row.id, closure_0(closure_2[12]).PermissionOverwriteType.ROLE, closure_2_0);
                } else {
                  closure_0 = closure_0 + 1;
                  obj = closure_0(closure_2[11]);
                  moderatorOverwrite = obj.createModeratorOverwrite(row.id, closure_0(closure_2[12]).PermissionOverwriteType.MEMBER, closure_2_0);
                }
                return moderatorOverwrite;
              });
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj7.savePermissionUpdates(id.id, mapped), done: false };
              obj7 = id(closure_2[13]);
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              obj = id(closure_2[14]);
              const result = obj.memberOrRoleAddedToast(c1, c0);
              let obj2 = tmp(closure_2[15]);
              obj2.hideActionSheet();
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          closure_2 = tmp16;
          if (0 === c3) {
            c5 = 3;
            throw tmp16;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const canSkip = channel.canSkip;
  const tmp = closure_10();
  [pendingAdditions, tmp4] = react.useState({});
  obj = channel(obj[9]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildId;
    const getGuild = GuildStore.getGuild;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return getGuild(guildId);
  });
  let str = pendingAdditions(obj[10])(channel, true);
  const tmp8 = pendingAdditions;
  if (str == null) {
    str = "";
  }
  if (null == stateFromStores) {
    return null;
  } else {
    let _Object = Object;
    let num = 0;
    const tmp12 = 0 === Object.keys(pendingAdditions).length;
    BottomSheet = tmp5(tmp6[16]).BottomSheet;
    let obj2 = { title: intl3.string(tmp5(tmp6[18]).t.n3bcy8), subtitle: str, trailing: null };
    const BottomSheetTitleHeader = tmp5(tmp6[17]).BottomSheetTitleHeader;
    intl3 = tmp5(tmp6[18]).intl;
    if (canSkip) {
      let obj7;
      if (tmp12) {
        let obj3 = {
          size: "sm",
          text: intl2.string(tmp5(tmp6[18]).t["5Wxrcd"]),
          onPress: function handleSkip() {
                  obj = first(obj[15]);
                  obj.hideActionSheet();
                }
        };
        intl2 = tmp5(tmp6[18]).intl;
        obj7 = obj3;
      }
      obj2.trailing = <tmp14 {...obj7} />;
      let obj5 = { style: tmp.container, children: null };
      let obj6 = { inActionSheet: true, channel, guild: stateFromStores, permission: tmp5(tmp6[21]).MODERATE_STAGE_CHANNEL_PERMISSIONS, pendingAdditions, setPendingAdditions: tmp4 };
      tmp8(obj[20]);
      return <BottomSheet scrollable header={null} startExpanded>{null}</BottomSheet>;
    }
    obj7 = {
      size: "sm",
      disabled: tmp12,
      text: intl.string(tmp5(tmp6[18]).t.OYkgVk),
      onPress: function handleAddModeratorsPressed() {
          return obj(...arguments);
        }
    };
    intl = tmp5(tmp6[18]).intl;
  }
};