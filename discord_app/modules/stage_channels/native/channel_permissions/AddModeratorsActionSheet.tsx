// discord_app/modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../../stores/GuildStore.tsx";
import { RowType } from "../../../channel_permissions/ChannelPermissionsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting(
  "modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx",
);

export default function AddModeratorsActionSheet(channel) {
  channel = channel.channel;
  let first;
  function _handleAddModeratorsPressed() {
    const self = this;
    const tmp = closure_1_3(function* () {
      c1 = tmp3;
      c0 = 0;
      c1 = 0;
      const _Object = Object;
      const values = Object.values(closure_1_1);
      const found = values.filter((row) => null != row.row.id);
      c3 = 1;
      const mapped = found.map((row) => {
        row = row.row;
        if (row.rowType === closure_2_8.ROLE) {
          closure_1 = closure_1 + 1;
          let moderatorOverwrite = closure_2_0(closure_2_2[11]).createModeratorOverwrite(
            row.id,
            closure_2_0(closure_2_2[12]).PermissionOverwriteType.ROLE,
            c0,
          );
          const obj2 = closure_2_0(closure_2_2[11]);
        } else {
          closure_0 = closure_0 + 1;
          moderatorOverwrite = closure_2_0(closure_2_2[11]).createModeratorOverwrite(
            row.id,
            closure_2_0(closure_2_2[12]).PermissionOverwriteType.MEMBER,
            c0,
          );
          const obj = closure_2_0(closure_2_2[11]);
        }
        return moderatorOverwrite;
      });
      yield closure_1_0(closure_1_2[13]).savePermissionUpdates(closure_1_0.id, mapped);
      if (1 === tmp7) {
        c3 = 0;
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        let obj = closure_1_0(closure_1_2[14]);
        const result = obj.memberOrRoleAddedToast(c1, c0);
        obj1 = closure_1_1(closure_1_2[15]);
        obj1.hideActionSheet();
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    });
    closure_2 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const tmp2 = callback(React.useState({}), 2);
  first = tmp2[0];
  let obj = channel(_handleAddModeratorsPressed[9]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return closure_1_7.getGuild(guildId);
  });
  let str = first(_handleAddModeratorsPressed[10])(channel, true);
  if (str == null) {
    str = "";
  }
  if (null == stateFromStores) {
    return null;
  } else {
    let _Object = Object;
    const tmp11 = 0 === Object.keys(first).length;
    obj = { title: null, subtitle: null, trailing: null };
    const intl3 = tmp4(tmp5[18]).intl;
    obj[0] = intl3.string(tmp4(tmp5[18]).t.n3bcy8);
    obj[1] = str;
    if (channel.canSkip) {
      if (tmp11) {
        obj = { size: "sm", text: null, onPress: null };
        const intl2 = tmp4(tmp5[18]).intl;
        obj[1] = intl2.string(tmp4(tmp5[18]).t["5Wxrcd"]);
        obj[2] = function handleSkip() {
          first(_handleAddModeratorsPressed[15]).hideActionSheet();
        };
        let obj4 = obj;
      }
      obj1 = { scrollable: true, header: null, startExpanded: true, children: null };
      obj[2] = tmp12(tmp13, obj4);
      obj1[1] = tmp12(tmp4(tmp5[17]).BottomSheetTitleHeader, obj);
      let obj2 = { style: null, children: null };
      obj2[0] = tmp.container;
      const obj3 = {
        inActionSheet: true,
        channel: null,
        guild: null,
        permission: null,
        pendingAdditions: null,
        setPendingAdditions: null,
      };
      obj3[1] = channel;
      obj3[2] = stateFromStores;
      obj3[3] = tmp4(tmp5[21]).MODERATE_STAGE_CHANNEL_PERMISSIONS;
      obj3[4] = first;
      obj3[5] = tmp2[1];
      obj2[1] = tmp12(first(tmp5[20]), obj3);
      obj1[3] = tmp12(View, obj2);
      return tmp12(tmp4(tmp5[16]).BottomSheet, obj1);
    }
    obj4 = { size: "sm", disabled: null, text: null, onPress: null };
    obj4[1] = tmp11;
    const intl = tmp4(tmp5[18]).intl;
    obj4[2] = intl.string(tmp4(tmp5[18]).t.OYkgVk);
    obj4[3] = function handleAddModeratorsPressed() {
      const self = this;
      const apply = _handleAddModeratorsPressed.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
  }
}
