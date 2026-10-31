// === Module 19990: SelectEmojiRolesActionSheet ===

// Module 19990 (SelectEmojiRolesActionSheet)
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { list: { flex: 1 }, row: { paddingHorizontal: nativeDefault.space.PX_16 }, label: null, roleName: null, saveButtonDisabled: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.label = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.roleName = { flexShrink: 1 };
obj2.saveButtonDisabled = { opacity: 0.3 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx");

export default function SelectEmojiRolesActionSheet(guildId) {
  guildId = guildId.guildId;
  ({ onSave: importDefault, emoji } = guildId);
  first = undefined;
  closure_5 = undefined;
  const tmp = closure_9();
  _slicedToArray = tmp;
  [first, closure_5] = first.useState(() => {
    let roles;
    if (emoji != null) {
      roles = emoji.roles;
    }
    if (roles == null) {
      roles = [];
    }
    return new Set(roles);
  });
  const tmp4 = require("useScaledRowHeight")();
  const subscriptionListingsForGuild = guildId(emoji[9]).useSubscriptionListingsForGuild(guildId, { includeSoftDeleted: true, sortDeletedListingsLast: true });
  let obj = guildId(emoji[9]);
  let items = [subscriptionListingsForGuild];
  const items1 = [guildId, subscriptionListingsForGuild];
  dependencyMap = guildId(emoji[10]).useStateFromStoresArray(items, () => subscriptionListingsForGuild.map((role_id) => subscriptionListingsForGuild.getRole(guildId, role_id.role_id)), items1);
  let obj3 = {
    onPress: function handleSave() {
      importDefault(Array.from(first));
    },
    disabled: first.size <= 0,
    accessibilityRole: "button",
    accessibilityState: { disabled: first.size <= 0 },
    style: null,
    children: null
  };
  let saveButtonDisabled;
  if (first.size <= 0) {
    saveButtonDisabled = tmp.saveButtonDisabled;
  }
  obj3.style = saveButtonDisabled;
  if (null == emoji) {
    const intl2 = tmp8(emoji[13]).intl;
    let stringResult = intl2.string(tmp8(emoji[13]).t["3UB9ad"]);
  } else {
    let intl = tmp8(emoji[13]).intl;
    stringResult = intl.string(tmp8(emoji[13]).t["R3BPH+"]);
  }
  obj3.children = dependencyMap(guildId(emoji[12]).Text, { variant: "text-md/semibold", color: "text-brand", children: stringResult });
  let obj2 = guildId(emoji[10]);
  let obj4 = { title: null, subtitle: null, trailing: null };
  const intl3 = tmp8(emoji[13]).intl;
  obj4.title = intl3.string(guildId(emoji[13]).t.JPU0EF);
  const intl4 = tmp8(emoji[13]).intl;
  obj4.subtitle = intl4.string(guildId(emoji[13]).t.MZusPv);
  obj4.trailing = dependencyMap(guildId(emoji[11]).PressableOpacity, obj3);
  const tmp9Result = dependencyMap(guildId(emoji[11]).PressableOpacity, obj3);
  let obj5 = { scrollable: true, header: dependencyMap(guildId(emoji[14]).BottomSheetTitleHeader, obj4), startExpanded: true, onDismiss: guildId.onCancel, children: null };
  let obj6 = {
    inActionSheet: true,
    style: tmp.list,
    estimatedListSize: "windowSize",
    itemSize: tmp4,
    insetEnd: require("useSafeAreaInsets")().bottom,
    sections: null,
    renderItem: function renderRow(arg0, arg1) {
      let role_id = tmp;
      const diff = subscriptionListingsForGuild.length - 1;
      const intl = guildId(emoji[13]).intl;
      const stringResult = intl.string(guildId(emoji[13]).t.HRtfn9);
      const obj = { style: closure_3.row, children: null };
      const obj2 = { start: 0 === arg1, end: arg1 === diff, label: null, accessibilityHint: null, checked: null, onPress: null };
      const obj3 = { style: closure_3.label, children: null };
      if (null != dependencyMap[arg1]) {
        const obj4 = { style: closure_3.roleName, children: null };
        const obj5 = { role: tmp2, children: tmp.name };
        obj4.children = dependencyMap(require("RoleName"), obj5);
        let tmp7Result = dependencyMap(closure_5, obj4);
      } else {
        const obj6 = { style: closure_3.roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: tmp.name };
        tmp7Result = dependencyMap(guildId(emoji[12]).Text, obj6);
      }
      const items = [tmp7Result, ];
      let archived = tmp.archived;
      if (archived) {
        const obj7 = { type: null, variant: "critical" };
        const obj8 = { text: stringResult };
        obj7.type = obj8;
        archived = dependencyMap(guildId(emoji[19]).Badge, obj7);
      }
      items[1] = archived;
      obj3.children = items;
      obj2.label = closure_1_8(closure_5, obj3);
      let tmp13;
      if (subscriptionListingsForGuild[arg1].archived) {
        tmp13 = stringResult;
      }
      obj2.accessibilityHint = tmp13;
      obj2.checked = first.has(subscriptionListingsForGuild[arg1].role_id);
      obj2.onPress = function onPress() {
        role_id = role_id.role_id;
        return closure_5((has) => {
          const set = new Set(has);
          if (has.has(role_id)) {
            set.delete(role_id);
          } else {
            set.add(role_id);
          }
          return set;
        });
      };
      obj.children = dependencyMap(guildId(emoji[17]).TableCheckboxRow, obj2);
      return dependencyMap(closure_5, obj);
    }
  };
  const items2 = [subscriptionListingsForGuild.length];
  obj6.sections = items2;
  obj5.children = dependencyMap(require("FastestList"), obj6);
  return dependencyMap(guildId(emoji[15]).BottomSheet, obj5);
};