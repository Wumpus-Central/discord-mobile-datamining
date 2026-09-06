// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import BigFlagUtilsAll from "../../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import PermissionUtilsAll from "../../../../utils/PermissionUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Keyboard: closure_7, SectionList: closure_8 } = get_ActivityIndicator);
let isGuildOwner = fn(1975).isGuildOwner;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, Permissions: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
fn(4560);
let createStyles = {
  emptyState: { backgroundColor: "transparent", paddingTop: 40 },
  sectionSeparator: null,
  emptyStateText: null,
  subLabel: null,
};
createStyles = { height: nativeDefault.space.PX_24 };
createStyles.sectionSeparator = createStyles;
createStyles.emptyStateText = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.subLabel = { includeFontPadding: true };
let closure_17 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx");

export default function GuildSettingsRoleEditPermission(guild) {
  guild = guild.guild;
  const role = guild.role;
  ({ permissions: importAll, onPermissionsChanged: dependencyMap } = guild);
  closure_6 = undefined;
  let query;
  closure_8 = undefined;
  isGuildOwner = undefined;
  c10 = undefined;
  UserStore = undefined;
  let tmp = closure_17();
  _slicedToArray = tmp;
  const currentUser = UserStore.getCurrentUser();
  let highestRole;
  if (null != currentUser) {
    let obj = PermissionUtilsAll;
    highestRole = obj.getHighestRole(guild, currentUser.id);
  }
  let obj1 = PermissionUtilsAll;
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const isRoleHigherResult = obj1.isRoleHigher(guild, id, highestRole, role);
  closure_6 = tmp10;
  const tmp11 = _slicedToArray(highestRole.useState(""), 2);
  query = tmp11[0];
  closure_8 = tmp11[1];
  [c9, c10] = _slicedToArray(highestRole.useState(false), 2);
  role(38)(null != guild, "Guild cannot be null");
  const tmp16 = isGuildOwner(guild, currentUser);
  const tmp13 = _slicedToArray(highestRole.useState(false), 2);
  obj = { permission: constants2.ADMINISTRATOR, user: currentUser, context: guild };
  const tmp6Result = PermissionUtilsAll;
  UserStore = highestRole.useRef(false);
  let tmp18Result = tmp16;
  if (!tmp16) {
    let tmp21 = !tmp10;
    if (isRoleHigherResult) {
      tmp21 = canResult;
    }
    tmp18Result = tmp21;
  }
  if (tmp18Result) {
    obj = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl = guild(1114).intl;
    obj1 = {
      onTemplateOpen() {
        React5.dismiss();
        const obj = { permissionsEdited, onPermissionsChanged, guildId: guild.id };
        obj.openLazy(
          asyncRequireImpl(17633, dependencyMap.paths),
          "role-permission-templates-" + guild.id + "-" + role.id,
          obj,
        );
      },
    };
    obj.children = intl.format(guild(1114).t.ZhSOBy, obj1);
    tmp18Result = tmp18(guild(4556).Text, obj);
  }
  tmp18Result = tmp18(tmp19, { children: tmp18Result });
  canResult = PermissionUtilsAll.can(obj);
  const guildPermissionSpec = role(16830).generateGuildPermissionSpec(guild);
  const mapped = guildPermissionSpec.map((permissions) => {
    const obj = {};
    const merged = Object.assign(permissions);
    permissions = permissions.permissions;
    obj.permissions = permissions.filter((title) => {
      const formatted = title.title.toLowerCase();
      return formatted.includes(query.trimStart().toLowerCase());
    });
    return obj;
  });
  const found = mapped.filter((permissions) => permissions.permissions.length > 0);
  const mapped1 = found.map((title) => ({ title: title.title, data: title.permissions }));
  const children = [closure_14(role(17630), { role }), , ,];
  const obj2 = {
    children: closure_14(guild(7050).SearchField, {
      size: "md",
      onChange(str) {
        closure_8(str);
        let current = "" === str.trimStart();
        if (!current) {
          current = ref.current;
        }
        if (!current) {
          AnalyticsUtilsDefault.track(constants.SEARCH_STARTED, { search_type: "Permissions" });
          ref.current = true;
        }
      },
    }),
  };
  children[1] = closure_14(closure_6, obj2);
  children[2] = tmp18Result;
  if (tmp24) {
    const obj4 = {
      sections: mapped1,
      stickySectionHeadersEnabled: false,
      renderItem(section) {
        ({ item, index } = section);
        const flag = item.flag;
        let tmp2 = closure_6;
        ({ description, title } = item);
        if (closure_6) {
          tmp2 = role === highestRole;
        }
        if (!tmp2) {
          tmp2 = tmp;
        }
        if (!tmp2) {
          tmp2 = !_undefined.can(flag, flag);
        }
        if (!tmp2) {
          let obj = {};
          obj = {};
          const merged = Object.assign(role);
          obj.permissions = require("BigFlagUtils").remove(closure_2, flag);
          obj[role.id] = obj;
          tmp2 = !_undefined.can(flag, flag, null, obj);
          const obj3 = require("BigFlagUtils");
        }
        obj = {
          variant: "text-xs/medium",
          color: "text-subtle",
          style: closure_4.subLabel,
          children: guild(onPermissionsChanged[22]).renderDescription(description),
        };
        const obj5 = guild(onPermissionsChanged[22]);
        tmp = closure_6;
        const obj1 = {
          start: 0 === index,
          end: index === section.section.data.length - 1,
          value: null,
          disabled: null,
          onValueChange: null,
          label: null,
          subLabel: null,
        };
        const tmp21 = closure_1_14(guild(onPermissionsChanged[12]).Text, obj);
        obj1.value = require("BigFlagUtils").has(closure_2, flag);
        obj1.disabled = tmp2;
        obj1.onValueChange = function onValueChange(arg0) {
          const obj = BigFlagUtilsAll;
          if (arg0) {
            let addResult = obj.add(closure_2_2, flag);
          } else {
            addResult = obj.remove(closure_2_2, flag);
          }
          onPermissionsChanged(addResult);
          c10(true);
        };
        obj1.label = title;
        obj1.subLabel = tmp21;
        return closure_1_14(guild(onPermissionsChanged[23]).TableSwitchRow, obj1);
      },
      renderSectionHeader(section) {
        const title = section.section.title;
        return closure_1_14(closure_6, {
          accessible: true,
          accessibilityRole: "header",
          accessibilityLabel: title,
          children: closure_1_14(guild(onPermissionsChanged[24]).TableRowGroupTitle, { title }),
        });
      },
      SectionSeparatorComponent(leadingItem) {
        let tmp = null;
        if (null != leadingItem.leadingItem) {
          const obj = { style: closure_4.sectionSeparator };
          tmp = closure_2_14(timestampProducer, obj);
        }
        return tmp;
      },
      ItemSeparatorComponent() {
        return null;
      },
      keyExtractor(flag) {
        return flag.flag.toString();
      },
      keyboardDismissMode: "on-drag",
      contentContainerStyle: guild.contentContainerStyle,
    };
    let tmp18Result1 = tmp18(closure_8, obj4);
  } else {
    let obj5 = { Illustration: tmp27(9760).NoResultsAlt, style: null, bodyStyle: null, body: null };
    ({ emptyState: obj10.style, emptyStateText: obj10.bodyStyle } = tmp);
    const intl2 = tmp27(1114).intl;
    const obj6 = { query };
    obj5.body = intl2.format(tmp27(1114).t.Psh5OO, obj6);
    tmp18Result1 = tmp18(tmp27(1178).EmptyState, obj5);
  }
  children[3] = tmp18Result1;
  return closure_16(closure_15, { children });
}
