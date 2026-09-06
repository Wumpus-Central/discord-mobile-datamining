// discord_app/modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = fn;
const View = fn(17).View;
const RowType = fn(8401).RowType;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.container = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
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
          let moderatorOverwrite = channel(5415).createModeratorOverwrite(
            row.id,
            channel(1894).PermissionOverwriteType.ROLE,
            closure_0,
          );
          const obj2 = channel(5415);
        } else {
          closure_0 = closure_0 + 1;
          moderatorOverwrite = channel(5415).createModeratorOverwrite(
            row.id,
            channel(1894).PermissionOverwriteType.MEMBER,
            closure_0,
          );
          const obj = channel(5415);
        }
        return moderatorOverwrite;
      });
      await closure_0(tmp19[13]).savePermissionUpdates(channel.id, mapped);
      if (1 === tmp7) {
        c3 = 0;
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const result = closure_0(tmp19[14]).memberOrRoleAddedToast(closure_128_1, closure_128_0);
        closure_0(tmp19[14]);
        tmp3(tmp19[15]).hideActionSheet();
        c3 = 0;
        tmp3(tmp19[15]);
      }
      return arg1;
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
  let obj = channel(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return GuildStore.getGuild(guildId);
  });
  let str = pendingAdditions(4713)(channel, true);
  if (str == null) {
    str = "";
  }
  if (null == stateFromStores) {
    return null;
  } else {
    let _Object = Object;
    const tmp11 = 0 === Object.keys(pendingAdditions).length;
    obj = { title: null, subtitle: null, trailing: null };
    const intl3 = tmp4(1114).intl;
    obj.title = intl3.string(tmp4(1114).t.n3bcy8);
    obj.subtitle = str;
    if (channel.canSkip) {
      if (tmp11) {
        obj = { size: "sm", text: null, onPress: null };
        const intl2 = tmp4(1114).intl;
        obj.text = intl2.string(tmp4(1114).t["5Wxrcd"]);
        obj.onPress = function handleSkip() {
          first(closure_2[15]).hideActionSheet();
        };
        let obj4 = obj;
      }
      const obj1 = { scrollable: true, header: null, startExpanded: true, children: null };
      obj.trailing = tmp12(tmp13, obj4);
      obj1.header = tmp12(tmp4(7149).BottomSheetTitleHeader, obj);
      let obj2 = { style: tmp.container, children: null };
      const obj3 = {
        inActionSheet: true,
        channel,
        guild: stateFromStores,
        permission: tmp4(1965).MODERATE_STAGE_CHANNEL_PERMISSIONS,
        pendingAdditions,
        setPendingAdditions: tmp2[1],
      };
      obj2.children = tmp12(pendingAdditions(9764), obj3);
      obj1.children = tmp12(View, obj2);
      return tmp12(tmp4(7150).BottomSheet, obj1);
    }
    obj4 = { size: "sm", disabled: tmp11, text: null, onPress: null };
    const intl = tmp4(1114).intl;
    obj4.text = intl.string(tmp4(1114).t.OYkgVk);
    obj4.onPress = function handleAddModeratorsPressed() {
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
}
