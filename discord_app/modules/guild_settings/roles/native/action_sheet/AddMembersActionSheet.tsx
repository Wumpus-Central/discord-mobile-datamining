// discord_app/modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import useA11yRolesNative from "../../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import RegexUtilsDefault from "../../../../../utils/RegexUtils.tsx";
import GuildUtilsDefault from "../../../../../utils/GuildUtils.tsx";
import FormCheckbox from "../../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import GuildSettingsActionCreatorsDefault from "../../../GuildSettingsActionCreators.tsx";
import DetailedGuildIdentityUserRowDefault from "../../../native/DetailedGuildIdentityUserRow.tsx";
import GuildSettingsRolesUtils from "../../GuildSettingsRolesUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function MemberRow(arg0) {
  ({ disabled, checked } = arg0);
  ({ start, end, guildId, userId, onPress } = arg0);
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj2 = {
    start,
    end,
    guildId,
    userId,
    onPress,
    disabled,
    trailing: null,
    accessibilityRole: null,
    accessibilityState: null,
  };
  obj2.trailing = React5(FormCheckbox.FormCheckbox, { checked });
  obj2.accessibilityRole = accessibilityRole;
  obj2.accessibilityState = accessibilityState;
  return React5(DetailedGuildIdentityUserRowDefault, obj2);
}
class AddMembersBody {
  constructor(arg0) {
    ({ guild, role, members } = global);
    pendingAdditions = global.pendingAdditions;
    ({ setPendingAdditions, inActionSheet, maxCount } = global);
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    length = undefined;
    tmp = length();
    closure_5 = tmp;
    obj = setPendingAdditions;
    tmp2 = pendingAdditions(setPendingAdditions.useState(""), 2);
    first = tmp2[0];
    closure_6 = first;
    closure_7 = tmp2[1];
    tmp4 = role;
    obj13 = members;
    obj1 = { isKeyboardAwareOnAndroid: !inActionSheet };
    items = [,];
    items[0] = members;
    items[1] = first;
    memo = setPendingAdditions.useMemo(() => {
      const regExp = new RegExp(RegexUtilsDefault.escape(first), "i");
      return members.filter((name) => regExp.test(name.name) || regExp.test(name.userTag));
    }, items);
    closure_8 = memo;
    tmp5 = null != maxCount;
    if (tmp5) {
      tmp6 = globalThis;
      _Object = Object;
      tmp5 = Object.keys(pendingAdditions).length >= maxCount;
    }
    closure_9 = tmp5;
    length = memo.length;
    items1 = [,];
    items1[0] = length;
    items1[1] = first;
    effect = obj.useEffect(() => {
      if ("" !== first) {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const intl = util.intl;
        const obj = { count: length };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.ZGVL3g, obj), "polite");
      }
    }, items1);
    tmp8 = guild;
    tmp9 = guild(obj13[15]);
    if (inActionSheet) {
      FlashList = tmp9.BottomSheetFlashList;
      ErpIY3 = tmp8;
    } else {
      FlashList = tmp9.FlashList;
      ErpIY3 = tmp8;
    }
    tmp12 = closure_7;
    obj10 = { style: tmp.inputContainer, children: null };
    tmp10 = closure_9;
    tmp11 = closure_8;
    obj11 = { placeholder: null, tags: null, onChangeText: null, onRemove: null, autoFocus: null, inActionSheet: null };
    tmp4Result = tmp4(obj13[16]);
    intl = ErpIY3(obj13[14]).intl;
    obj11.placeholder = intl.string(ErpIY3(obj13[14]).t.vMiCaQ);
    values = Object.values(pendingAdditions);
    obj11.tags = values.map((display) => {
      const obj = {};
      const merged = Object.assign(display.display);
      obj.id = display.row.id;
      return obj;
    });
    obj11.onChangeText = function onChangeText(str) {
      str = str.trim();
      const formatted = str.toLowerCase();
      members = GuildUtilsDefault.requestMembers(id.id, formatted, GuildSettingsRolesUtils.ADD_MEMBER_QUERY_LIMIT);
      closure_7(formatted);
    };
    obj11.onRemove = function onRemove(arg0) {
      const tmp2 = SnowflakeUtilsDefault.keys(pendingAdditions)[arg0];
      closure_0 = tmp2;
      if (null != pendingAdditions[tmp2]) {
        noop((arg0) => {
          const merged = Object.assign(arg0);
          delete tmp[tmp2];
          return {};
        });
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const intl = util.intl;
        const obj2 = { text: tmp3.display.text };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj2), "polite");
      }
    };
    obj11.autoFocus = global.autoFocusSearch;
    obj11.inActionSheet = inActionSheet;
    obj10.children = closure_7(tmp4Result, obj11);
    items2 = [,];
    items2[0] = closure_7(closure_5, obj10);
    if (0 === memo.length) {
      obj12 = { Illustration: null, bodyStyle: null, body: null };
      obj12.Illustration = ErpIY3(obj13[20]).NoResultsAlt;
      obj12.bodyStyle = tmp.emptyStateText;
      if ("" !== first) {
        intl3 = ErpIY3(obj13[14]).intl;
        ErpIY3 = ErpIY3(obj13[14]).t.ErpIY3;
        obj13 = { query: null };
        obj13.query = first;
        formatResult = intl3.format(ErpIY3, obj13);
      } else {
        intl2 = ErpIY3(obj13[14]).intl;
        formatResult = intl2.string(ErpIY3(obj13[14]).t.oB9grQ);
      }
      obj12.body = formatResult;
      tmp12Result = tmp12(ErpIY3(obj13[12]).EmptyState, obj12);
    } else {
      obj14 = { paddingHorizontal: null, paddingTop: null, paddingBottom: null };
      obj14.paddingHorizontal = tmp4(obj13[6]).space.PX_16;
      obj14.paddingTop = tmp4(obj13[6]).space.PX_12;
      num = 0;
      if (inActionSheet) {
        num = role(members[10])(obj1).insets.bottom;
      }
      obj15 = {
        contentContainerStyle: null,
        renderItem: null,
        data: null,
        extraData: null,
        keyboardShouldPersistTaps: "always",
      };
      obj14.paddingBottom = tmp4(obj13[6]).space.PX_12 + num;
      obj15.contentContainerStyle = obj14;
      obj15.renderItem = function renderItem(item) {
        item = item.item;
        const index = item.index;
        let roles = item.roles;
        let hasItem = roles.includes(user.id);
        let obj = {
          start: 0 === index,
          end: index === memo.length - 1,
          guildId: item.id,
          userId: item.id,
          onPress() {
            id = item;
            const roles = item.roles;
            if (!roles.includes(user.id)) {
              noop((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                if (id.id in obj) {
                  id = tmp4.id;
                  delete tmp[tmp2];
                } else {
                  const obj2 = { text: tmp4.name, icon: null };
                  const obj4 = { source: tmp4.avatarSource, avatarStyle: null, style: null };
                  ({ tagAvatar: obj3.avatarStyle, tagAvatar: obj3.style } = closure_2_5);
                  obj2.icon = closure_7(require("native").Avatar, obj4);
                  const obj7 = { display: obj2, row: tmp4 };
                  obj[tmp4.id] = obj7;
                }
                return obj;
              });
            }
          },
          disabled: null,
          checked: null,
        };
        let tmp5 = hasItem;
        if (!hasItem) {
          let tmp6 = closure_9;
          if (closure_9) {
            tmp6 = !tmp2;
          }
          tmp5 = tmp6;
        }
        obj.disabled = tmp5;
        if (!hasItem) {
          hasItem = tmp2;
        }
        obj.checked = hasItem;
        return closure_7(MemberRow, obj);
      };
      obj15.data = memo;
      obj15.extraData = pendingAdditions;
      obj16 = { children: null };
      items2[1] = tmp12(FlashList, obj15);
      obj16.children = items2;
      return tmp10(tmp11, obj16);
    }
    return;
  }
}
const View = fn(17).View;
const MAX_BULK_ROLE_MEMBERS_ADD = fn(18055).MAX_BULK_ROLE_MEMBERS_ADD;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 },
  inputContainer: null,
  tagAvatar: null,
  emptyStateText: null,
  addMembersDescription: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj2.inputContainer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm };
obj2.tagAvatar = size;
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
obj2.emptyStateText = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj5 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.addMembersDescription = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx");

export default function AddMembersActionSheet(guild) {
  guild = guild.guild;
  const role = guild.role;
  const tmp = closure_10();
  const tmp2 = _slicedToArray(noop.useState({}), 2);
  const pendingAdditions = tmp2[0];
  const items = [role.id];
  const callback = noop.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(role.id);
  }, items);
  const guildMembers = guild(pendingAdditions[18]).useGuildMembers(guild.id, callback);
  let obj = guild(pendingAdditions[18]);
  let obj2 = guild(pendingAdditions[21]);
  const subscribeGuildMembers = obj2.useSubscribeGuildMembers(
    { [guild.id]: Object.keys(pendingAdditions) },
    "AddMembersActionSheet",
  );
  let tmp9 = 0 === Object.keys(pendingAdditions).length;
  if (!tmp9) {
    const _Object = Object;
    tmp9 = Object.keys(pendingAdditions).length > MAX_BULK_ROLE_MEMBERS_ADD;
  }
  const obj4 = { title: null, subtitle: null, trailing: null };
  const intl = tmp5(tmp6[14]).intl;
  obj4.title = intl.string(guild(pendingAdditions[14]).t.ZYOK46);
  obj4.subtitle = role.name;
  const obj5 = { size: "sm", text: null, onPress: null, variant: null, disabled: null };
  const intl2 = tmp5(tmp6[14]).intl;
  obj5.text = intl2.string(guild(pendingAdditions[14]).t.OYkgVk);
  obj5.onPress = function onPress() {
    const obj = GuildSettingsActionCreatorsDefault;
    obj.bulkAddMemberRoles(guild.id, role.id, SnowflakeUtilsDefault.keys(first));
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  let str = "primary";
  if (tmp9) {
    str = "secondary";
  }
  const obj6 = { scrollable: true, header: null, startExpanded: true, children: null };
  obj5.variant = str;
  obj5.disabled = tmp9;
  obj4.trailing = closure_7(guild(pendingAdditions[24]).Button, obj5);
  obj6.header = closure_7(guild(pendingAdditions[23]).BottomSheetTitleHeader, obj4);
  const obj7 = { style: tmp.container, children: null };
  const obj8 = { variant: "text-sm/normal", style: tmp.addMembersDescription, children: null };
  const intl3 = tmp5(tmp6[14]).intl;
  obj8.children = intl3.format(guild(pendingAdditions[14]).t["3OxP4q"], { numMembers: MAX_BULK_ROLE_MEMBERS_ADD });
  const items1 = [
    closure_7(guild(pendingAdditions[27]).Text, obj8),
    closure_7(AddMembersBody, {
      guild,
      role,
      members: guildMembers,
      pendingAdditions,
      setPendingAdditions: tmp2[1],
      autoFocusSearch: true,
      maxCount: MAX_BULK_ROLE_MEMBERS_ADD,
      inActionSheet: true,
    }),
  ];
  obj7.children = items1;
  obj6.children = closure_9(View, obj7);
  return closure_7(guild(pendingAdditions[22]).BottomSheet, obj6);
}
export { AddMembersBody };
