// discord_app/modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";

const require = fn;
const UserSettingsSafetySelectedGuildStore = fn(15869);
({
  GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7,
  setSelectedGuildId: closure_8,
  useUserSafetySettingsSelectedGuildStore: closure_9,
} = UserSettingsSafetySelectedGuildStore);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { iconContainer: null };
createStyles = { marginRight: nativeDefault.space.PX_12 };
createStyles.iconContainer = createStyles;
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx",
);

export default function SettingsPrivacyAndSafetyGuildSelectActionSheet() {
  let selectionActionComponent = noop;
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  const first = tmp2[0];
  const selectedGuildId = closure_9().selectedGuildId;
  closure_129_0 = selectedGuildId;
  let obj1 = first(callback[11]);
  let items = [GuildStore];
  const stateFromStores = obj1.useStateFromStores(items, () => GuildStore.getGuild(first));
  if (selectedGuildId !== value) {
    if (null != stateFromStores) {
      selectionActionComponent = {
        type: tmp4(tmp5[8]).SelectOptionType.GUILD,
        guild: stateFromStores,
        label: null,
        value: null,
      };
      ({ name: obj3.label, id: obj3.value } = stateFromStores);
    }
    selectionActionComponent = { maxValues: 1, minValues: 1, placeholder: null };
    function submitSelection() {
      obj = obj(callback[12]);
      return obj.hideActionSheet();
    }
    const intl3 = tmp4(tmp5[10]).intl;
    selectionActionComponent.placeholder = intl3.string(tmp4(tmp5[10]).t["ZImm/x"]);
    callback = selectionActionComponent.useCallback((query) => {
      let obj = { type: first(callback[8]).SelectOptionType.GUILD, guild: null, label: null, value: null };
      obj = { id: value, name: null };
      const intl = first(callback[10]).intl;
      obj.name = intl.string(first(callback[10]).t["32u1Dx"]);
      obj.guild = first(callback[9]).dangerouslyConstructGuildRecordFromUntypedObject(obj);
      const intl2 = first(callback[10]).intl;
      obj.label = intl2.string(first(callback[10]).t["32u1Dx"]);
      obj.value = value;
      const items = [obj];
      if (0 === query.length) {
        flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
        let reduced = flattenedGuildIds.reduce((arr, item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            const obj = { type: first(4792).SelectOptionType.GUILD, value: null, label: null, guild: null };
            ({ id: obj.value, name: obj.label } = guild);
            obj.guild = guild;
            arr = arr.push(obj);
          }
          return arr;
        }, items);
      } else {
        obj = { query };
        const obj4 = obj(callback[16]);
        reduced = obj(callback[16])
          .queryGuilds(obj)
          .map((record) => {
            record = record.record;
            return { type: first(4792).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
          });
        const queryGuildsResult = obj(callback[16]).queryGuilds(obj);
      }
      return reduced;
    }, []);
    const items1 = [first, callback];
    const memo = selectionActionComponent.useMemo(() => callback(first), items1);
    obj1 = {
      onPressOptionItem(arg0, guild) {
        closure_1_8(guild.guild.id);
        obj = obj(callback[12]);
        obj.hideActionSheet();
      },
      renderHeaderIcon(value) {
        if (value.value === closure_1_7) {
          let tmp6 = jsx(first(callback[14]).GuildSelectDefaultIcon, { size: "xs" });
        } else {
          const obj = { guild: value.guild, size: first(callback[15]).GuildIconSizes.XSMALL };
          tmp6 = jsx(obj(callback[15]), { guild: value.guild, size: first(callback[15]).GuildIconSizes.XSMALL });
          const tmp4 = obj(callback[15]);
        }
        return tmp6;
      },
      renderIcon(value) {
        if (value.value === closure_1_7) {
          let tmp6 = jsx(first(callback[14]).GuildSelectDefaultIcon, {});
        } else {
          const obj = { guild: value.guild, size: first(callback[15]).GuildIconSizes.SMALL_32 };
          tmp6 = jsx(obj(callback[15]), { guild: value.guild, size: first(callback[15]).GuildIconSizes.SMALL_32 });
          const tmp4 = obj(callback[15]);
        }
        return tmp6;
      },
      iconContainerStyle: tmp.iconContainer,
      selectionActionComponent,
      options: memo,
      selectedCount: 1,
      selectedOptions: null,
      isSelected: null,
      submitSelection: null,
      onQueryChange: null,
      itemAccessibilityLabel: null,
      allowEmpty: false,
      expanded: true,
    };
    const items2 = [selectionActionComponent];
    obj1.selectedOptions = items2;
    obj1.isSelected = function isSelected(value) {
      return value.value === obj.value;
    };
    obj1.submitSelection = submitSelection;
    obj1.onQueryChange = tmp2[1];
    obj1.itemAccessibilityLabel = function itemAccessibilityLabel(label) {
      return label.label;
    };
    return jsx(selectionActionComponent(tmp5[13]), {
      onPressOptionItem(arg0, guild) {
        closure_1_8(guild.guild.id);
        obj = obj(callback[12]);
        obj.hideActionSheet();
      },
      renderHeaderIcon(value) {
        if (value.value === closure_1_7) {
          let tmp6 = jsx(first(callback[14]).GuildSelectDefaultIcon, { size: "xs" });
        } else {
          const obj = { guild: value.guild, size: first(callback[15]).GuildIconSizes.XSMALL };
          tmp6 = jsx(obj(callback[15]), { guild: value.guild, size: first(callback[15]).GuildIconSizes.XSMALL });
          const tmp4 = obj(callback[15]);
        }
        return tmp6;
      },
      renderIcon(value) {
        if (value.value === closure_1_7) {
          let tmp6 = jsx(first(callback[14]).GuildSelectDefaultIcon, {});
        } else {
          const obj = { guild: value.guild, size: first(callback[15]).GuildIconSizes.SMALL_32 };
          tmp6 = jsx(obj(callback[15]), { guild: value.guild, size: first(callback[15]).GuildIconSizes.SMALL_32 });
          const tmp4 = obj(callback[15]);
        }
        return tmp6;
      },
      iconContainerStyle: tmp.iconContainer,
      selectionActionComponent,
      options: memo,
      selectedCount: 1,
      selectedOptions: null,
      isSelected: null,
      submitSelection: null,
      onQueryChange: null,
      itemAccessibilityLabel: null,
      allowEmpty: false,
      expanded: true,
    });
  }
  const obj2 = { type: first(callback[8]).SelectOptionType.GUILD, guild: null, label: null, value: null };
  tmp = closure_11();
  const obj3 = { id: value, name: null };
  let intl = tmp4(tmp5[10]).intl;
  obj3.name = intl.string(first(callback[10]).t["32u1Dx"]);
  obj2.guild = first(callback[9]).dangerouslyConstructGuildRecordFromUntypedObject(obj3);
  let intl2 = tmp4(tmp5[10]).intl;
  obj2.label = intl2.string(first(callback[10]).t["32u1Dx"]);
  obj2.value = value;
  selectionActionComponent = obj2;
  const tmp4Result = first(callback[9]);
}
