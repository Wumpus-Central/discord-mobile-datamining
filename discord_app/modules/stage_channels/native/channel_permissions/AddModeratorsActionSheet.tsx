// discord_app/modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = fn;
const View = fn(17).View;
const RowType = fn(8531).RowType;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx",
);

export default function AddModeratorsActionSheet(channel) {
  channel = channel.channel;
  dependencyMap = function _handleAddModeratorsPressed() {
    const self = this;
    const tmp = asyncGeneratorStep(async () => {
      closure_128_0 = 0;
      closure_128_1 = 0;
      const _Object = Object;
      const values = Object.values(pendingAdditions);
      const found = values.filter((row) => null != row.row.id);
      const mapped = found.map((row) => {
        row = row.row;
        if (row.rowType === constants.ROLE) {
          closure_1 = closure_1 + 1;
          let moderatorOverwrite = channel(5501).createModeratorOverwrite(
            row.id,
            channel(1895).PermissionOverwriteType.ROLE,
            closure_0,
          );
          const obj2 = channel(5501);
        } else {
          closure_0 = closure_0 + 1;
          moderatorOverwrite = channel(5501).createModeratorOverwrite(
            row.id,
            channel(1895).PermissionOverwriteType.MEMBER,
            closure_0,
          );
          const obj = channel(5501);
        }
        return moderatorOverwrite;
      });
      await closure_0(tmp19[13]).savePermissionUpdates(channel.id, mapped);
      if (1 === tmp7) {
        c3 = 0;
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const result = closure_0(tmp19[14]).memberOrRoleAddedToast(closure_128_1, closure_128_0);
        closure_0(tmp19[14]);
        tmp3(tmp19[15]).hideActionSheet();
        c3 = 0;
        tmp3(tmp19[15]);
      }
      return value;
    });
    dependencyMap = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const tmp2 = _slicedToArray(noop.useState({}), 2);
  const pendingAdditions = tmp2[0];
  let tmp = closure_10();
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return GuildStore.getGuild(guildId);
  });
  let str = pendingAdditions(4791)(channel, true);
  if (str == null) {
    str = "";
  }
  if (null == stateFromStores) {
    return null;
  } else {
    let _Object = Object;
    const tmp11 = 0 === Object.keys(pendingAdditions).length;
    let obj2 = { title: null, subtitle: null, trailing: null };
    const intl3 = tmp4(1115).intl;
    obj2.title = intl3.string(tmp4(1115).t.n3bcy8);
    obj2.subtitle = str;
    if (channel.canSkip) {
      if (tmp11) {
        const obj3 = { size: "sm", text: null, onPress: null };
        const intl2 = tmp4(1115).intl;
        obj3.text = intl2.string(tmp4(1115).t["5Wxrcd"]);
        obj3.onPress = function handleSkip() {
          first(closure_2[15]).hideActionSheet();
        };
        let obj7 = obj3;
      }
      const obj4 = { scrollable: true, header: null, startExpanded: true, children: null };
      obj2.trailing = <tmp13 {...obj7} />;
      obj4.header = jsx(tmp4(7259).BottomSheetTitleHeader, obj2);
      const obj5 = { style: tmp.container, children: null };
      const obj6 = {
        inActionSheet: true,
        channel,
        guild: stateFromStores,
        permission: tmp4(1966).MODERATE_STAGE_CHANNEL_PERMISSIONS,
        pendingAdditions,
        setPendingAdditions: tmp2[1],
      };
      obj5.children = jsx(tmp7(9904), {
        inActionSheet: true,
        channel,
        guild: stateFromStores,
        permission: tmp4(1966).MODERATE_STAGE_CHANNEL_PERMISSIONS,
        pendingAdditions,
        setPendingAdditions: tmp2[1],
      });
      obj4.children = <View style={tmp.container}>{null}</View>;
      return jsx(tmp4(7260).BottomSheet, { scrollable: true, header: null, startExpanded: true, children: null });
    }
    obj7 = { size: "sm", disabled: tmp11, text: null, onPress: null };
    const intl = tmp4(1115).intl;
    obj7.text = intl.string(tmp4(1115).t.OYkgVk);
    obj7.onPress = function handleAddModeratorsPressed() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
  }
  let obj = channel(504);
  tmp7 = pendingAdditions;
}
