// discord_app/modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import closure_5 from "../../../../stores/GuildStore.tsx";
import closure_6 from "../../../../stores/SortedGuildStore.tsx";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "../UserSettingsSafetySelectedGuildStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: error, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: c9 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
createCacheKey = { iconContainer: null };
createCacheKey = { marginRight: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx");

export default function SettingsPrivacyAndSafetyGuildSelectActionSheet() {
  let obj = React;
  const tmp2 = callback(React.useState(""), 2);
  let selectedGuildId;
  selectedGuildId = callback2().selectedGuildId;
  obj1 = selectedGuildId(callback[11]);
  let items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_5.getGuild(selectedGuildId));
  if (selectedGuildId !== closure_7) {
    if (null != stateFromStores) {
      obj = { type: null, guild: null, label: null, value: null };
      obj[0] = tmp3(tmp4[8]).SelectOptionType.GUILD;
      obj[1] = stateFromStores;
      ({ name: obj3[2], id: obj3[3] } = stateFromStores);
    }
    obj = { maxValues: 1, minValues: 1, placeholder: null };
    function submitSelection() {
      obj = obj(callback[12]);
      return obj.hideActionSheet();
    }
    const intl3 = tmp3(tmp4[10]).intl;
    obj[2] = intl3.string(tmp3(tmp4[10]).t["ZImm/x"]);
    callback = obj.useCallback((arg0) => {
      obj = { type: selectedGuildId(callback[8]).SelectOptionType.GUILD, guild: null, label: null, value: null };
      obj = { id: closure_7, name: null };
      const intl = selectedGuildId(callback[10]).intl;
      obj[1] = intl.string(selectedGuildId(callback[10]).t["32u1Dx"]);
      obj[1] = selectedGuildId(callback[9]).dangerouslyConstructGuildRecordFromUntypedObject(obj);
      const intl2 = selectedGuildId(callback[10]).intl;
      obj[2] = intl2.string(selectedGuildId(callback[10]).t["32u1Dx"]);
      obj[3] = closure_7;
      const items = [obj];
      if (0 === arg0.length) {
        flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
        let reduced = flattenedGuildIds.reduce((arr) => {
          guild = guild.getGuild(arg1);
          if (null != guild) {
            obj = { type: null, value: null, label: null, guild: null };
            obj[0] = callback(4813).SelectOptionType.GUILD;
            ({ id: obj[1], name: obj[2] } = guild);
            obj[3] = guild;
            arr.push(obj);
          }
          return arr;
        }, items);
      } else {
        obj = { query: null };
        obj[0] = arg0;
        const obj4 = obj(callback[16]);
        reduced = obj(callback[16]).queryGuilds(obj).map((record) => {
          record = record.record;
          return { type: callback(4813).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
        });
        const queryGuildsResult = obj(callback[16]).queryGuilds(obj);
      }
      return reduced;
    }, []);
    const items1 = [tmp2[0], callback];
    const memo = obj.useMemo(() => callback(selectedGuildId), items1);
    obj1 = { onPressOptionItem: null, renderHeaderIcon: null, renderIcon: null, iconContainerStyle: null, selectionActionComponent: null, options: null, selectedCount: 1, selectedOptions: null, isSelected: null, submitSelection: null, onQueryChange: null, itemAccessibilityLabel: null, allowEmpty: false, expanded: true };
    obj1[0] = function onPressOptionItem(arg0, guild) {
      callback(guild.guild.id);
      obj = obj(callback[12]);
      obj.hideActionSheet();
    };
    obj1[1] = function renderHeaderIcon(value) {
      if (value.value === closure_7) {
        let tmp6 = callback2(selectedGuildId(callback[14]).GuildSelectDefaultIcon, { size: "xs" });
      } else {
        obj = { guild: null, size: null };
        obj[0] = value.guild;
        obj[1] = selectedGuildId(callback[15]).GuildIconSizes.XSMALL;
        tmp6 = callback2(obj(callback[15]), obj);
        const tmp4 = obj(callback[15]);
      }
      return tmp6;
    };
    obj1[2] = function renderIcon(value) {
      if (value.value === closure_7) {
        let tmp6 = callback2(selectedGuildId(callback[14]).GuildSelectDefaultIcon, {});
      } else {
        obj = { guild: null, size: null };
        obj[0] = value.guild;
        obj[1] = selectedGuildId(callback[15]).GuildIconSizes.SMALL_32;
        tmp6 = callback2(obj(callback[15]), obj);
        const tmp4 = obj(callback[15]);
      }
      return tmp6;
    };
    obj1[3] = tmp.iconContainer;
    obj1[4] = obj;
    obj1[5] = memo;
    const items2 = [obj];
    obj1[7] = items2;
    obj1[8] = function isSelected(value) {
      return value.value === obj.value;
    };
    obj1[9] = submitSelection;
    obj1[10] = tmp2[1];
    obj1[11] = function itemAccessibilityLabel(label) {
      return label.label;
    };
    return jsx(obj(tmp4[13]), { onPressOptionItem: null, renderHeaderIcon: null, renderIcon: null, iconContainerStyle: null, selectionActionComponent: null, options: null, selectedCount: 1, selectedOptions: null, isSelected: null, submitSelection: null, onQueryChange: null, itemAccessibilityLabel: null, allowEmpty: false, expanded: true });
  }
  const obj2 = { type: selectedGuildId(callback[8]).SelectOptionType.GUILD, guild: null, label: null, value: null };
  tmp = callback3();
  const obj3 = { id: closure_7, name: null };
  let intl = tmp3(tmp4[10]).intl;
  obj3[1] = intl.string(selectedGuildId(callback[10]).t["32u1Dx"]);
  obj2[1] = selectedGuildId(callback[9]).dangerouslyConstructGuildRecordFromUntypedObject(obj3);
  let intl2 = tmp3(tmp4[10]).intl;
  obj2[2] = intl2.string(selectedGuildId(callback[10]).t["32u1Dx"]);
  obj2[3] = closure_7;
  obj = obj2;
};