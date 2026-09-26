// === Module 15489: SettingsPrivacyAndSafetyGuildSelectActionSheet ===

// Module 15489 (SettingsPrivacyAndSafetyGuildSelectActionSheet)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;

const require = fn;
const UserSettingsSafetySelectedGuildStore = fn(15488);
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: closure_9 } = UserSettingsSafetySelectedGuildStore);
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { iconContainer: { marginRight: nativeDefault.space.PX_12 } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx");

export default function SettingsPrivacyAndSafetyGuildSelectActionSheet() {
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  const first = tmp2[0];
  const selectedGuildId = closure_9().selectedGuildId;
  closure_129_0 = selectedGuildId;
  const tmp = closure_11();
  let items = [GuildStore];
  const stateFromStores = first(callback[11]).useStateFromStores(items, () => GuildStore.getGuild(first));
  if (selectedGuildId !== value) {
    if (null != stateFromStores) {
      let obj4 = { type: tmp4(tmp5[8]).SelectOptionType.GUILD, guild: stateFromStores, label: null, value: null };
      ({ name: obj3.label, id: obj3.value } = stateFromStores);
    }
    let obj5 = { maxValues: 1, minValues: 1, placeholder: null };
    function submitSelection() {
      return obj4(callback[12]).hideActionSheet();
    }
    const intl3 = tmp4(tmp5[10]).intl;
    obj5.placeholder = intl3.string(tmp4(tmp5[10]).t["ZImm/x"]);
    callback = noop.useCallback((query) => {
      let obj = { type: first(callback[8]).SelectOptionType.GUILD, guild: null, label: null, value: null };
      const obj3 = { id: value, name: null };
      const intl = first(callback[10]).intl;
      obj3.name = intl.string(first(callback[10]).t["32u1Dx"]);
      obj.guild = first(callback[9]).dangerouslyConstructGuildRecordFromUntypedObject(obj3);
      const intl2 = first(callback[10]).intl;
      obj.label = intl2.string(first(callback[10]).t["32u1Dx"]);
      obj.value = value;
      const items = [obj];
      if (0 === query.length) {
        flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
        let reduced = flattenedGuildIds.reduce((arr, item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            const obj = { type: first(5067).SelectOptionType.GUILD, value: null, label: null, guild: null };
            ({ id: obj.value, name: obj.label } = guild);
            obj.guild = guild;
            arr = arr.push(obj);
          }
          return arr;
        }, items);
      } else {
        obj4 = obj4(callback[16]);
        const obj5 = { query };
        reduced = obj4.queryGuilds(obj5).map((record) => {
          record = record.record;
          return { type: first(5067).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
        });
        const queryGuildsResult = obj4.queryGuilds(obj5);
      }
      return reduced;
    }, []);
    const items1 = [first, callback];
    const memo = noop.useMemo(() => callback(first), items1);
    const obj6 = {
      onPressOptionItem(arg0, guild) {
          closure_1_8(guild.guild.id);
          obj4(callback[12]).hideActionSheet();
        },
      renderHeaderIcon(value) {
          if (value.value === closure_1_7) {
            let tmp6 = jsx(first(callback[14]).GuildSelectDefaultIcon, { size: "xs" });
          } else {
            const obj = { guild: value.guild, size: first(callback[15]).GuildIconSizes.XSMALL };
            tmp6 = jsx(obj4(callback[15]), { guild: value.guild, size: first(callback[15]).GuildIconSizes.XSMALL });
            const tmp4 = obj4(callback[15]);
          }
          return tmp6;
        },
      renderIcon(value) {
          if (value.value === closure_1_7) {
            let tmp6 = jsx(first(callback[14]).GuildSelectDefaultIcon, {});
          } else {
            const obj = { guild: value.guild, size: first(callback[15]).GuildIconSizes.SMALL_32 };
            tmp6 = jsx(obj4(callback[15]), { guild: value.guild, size: first(callback[15]).GuildIconSizes.SMALL_32 });
            const tmp4 = obj4(callback[15]);
          }
          return tmp6;
        },
      iconContainerStyle: tmp.iconContainer,
      selectionActionComponent: obj5,
      options: memo,
      selectedCount: 1,
      selectedOptions: null,
      isSelected: null,
      submitSelection: null,
      onQueryChange: null,
      itemAccessibilityLabel: null,
      allowEmpty: false,
      expanded: true
    };
    const items2 = [obj4];
    obj6.selectedOptions = items2;
    obj6.isSelected = function isSelected(value) {
      return value.value === obj4.value;
    };
    obj6.submitSelection = submitSelection;
    obj6.onQueryChange = tmp2[1];
    obj6.itemAccessibilityLabel = function itemAccessibilityLabel(label) {
      return label.label;
    };
    return jsx(obj4(tmp5[13]), {
      onPressOptionItem(arg0, guild) {
          closure_1_8(guild.guild.id);
          obj4(callback[12]).hideActionSheet();
        },
      renderHeaderIcon(value) {
          if (value.value === closure_1_7) {
            let tmp6 = jsx(first(callback[14]).GuildSelectDefaultIcon, { size: "xs" });
          } else {
            const obj = { guild: value.guild, size: first(callback[15]).GuildIconSizes.XSMALL };
            tmp6 = jsx(obj4(callback[15]), { guild: value.guild, size: first(callback[15]).GuildIconSizes.XSMALL });
            const tmp4 = obj4(callback[15]);
          }
          return tmp6;
        },
      renderIcon(value) {
          if (value.value === closure_1_7) {
            let tmp6 = jsx(first(callback[14]).GuildSelectDefaultIcon, {});
          } else {
            const obj = { guild: value.guild, size: first(callback[15]).GuildIconSizes.SMALL_32 };
            tmp6 = jsx(obj4(callback[15]), { guild: value.guild, size: first(callback[15]).GuildIconSizes.SMALL_32 });
            const tmp4 = obj4(callback[15]);
          }
          return tmp6;
        },
      iconContainerStyle: tmp.iconContainer,
      selectionActionComponent: obj5,
      options: memo,
      selectedCount: 1,
      selectedOptions: null,
      isSelected: null,
      submitSelection: null,
      onQueryChange: null,
      itemAccessibilityLabel: null,
      allowEmpty: false,
      expanded: true
    });
  }
  const obj7 = { type: first(callback[8]).SelectOptionType.GUILD, guild: null, label: null, value: null };
  const obj2 = first(callback[11]);
  const obj8 = { id: value, name: null };
  let intl = tmp4(tmp5[10]).intl;
  obj8.name = intl.string(first(callback[10]).t["32u1Dx"]);
  obj7.guild = first(callback[9]).dangerouslyConstructGuildRecordFromUntypedObject(obj8);
  let intl2 = tmp4(tmp5[10]).intl;
  obj7.label = intl2.string(first(callback[10]).t["32u1Dx"]);
  obj7.value = value;
  obj4 = obj7;
  const tmp4Result = first(callback[9]);
};