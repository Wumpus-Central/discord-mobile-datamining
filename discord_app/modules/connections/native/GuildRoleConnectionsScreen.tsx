// discord_app/modules/connections/native/GuildRoleConnectionsScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import shared from "../../../design/shared.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserRecord from "../../../records/UserRecord.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_12, HelpdeskArticles: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 },
  content: { flexDirection: "column", alignItems: "center", padding: 16 },
  infoText: { marginTop: 24 },
  verifiedRoles: { marginTop: 24, flexDirection: "column", width: "100%" },
  verifiedRole: null,
  verifiedRoleHasRole: null,
  verifiedRolePressed: null,
  verifiedRoleIcon: null,
  roleCheckmark: null,
  verifiedRoleName: null,
  platformIconContainer: null,
  cutout: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj2.verifiedRole = {
  flexDirection: "row",
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 2,
  borderRadius: nativeDefault.radii.md,
  paddingHorizontal: 16,
  paddingVertical: 20,
  marginBottom: 16,
  width: "100%",
  alignItems: "center",
  position: "relative",
};
let obj4 = {
  flexDirection: "row",
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 2,
  borderRadius: nativeDefault.radii.md,
  paddingHorizontal: 16,
  paddingVertical: 20,
  marginBottom: 16,
  width: "100%",
  alignItems: "center",
  position: "relative",
};
obj2.verifiedRoleHasRole = {
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let obj5 = {
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.verifiedRolePressed = { borderColor: nativeDefault.colors.BORDER_MUTED };
obj2.verifiedRoleIcon = { marginRight: 12 };
let size = {
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  position: "absolute",
  right: -8,
  top: -8,
};
obj2.roleCheckmark = size;
obj2.verifiedRoleName = { flex: 1, overflow: "hidden", marginRight: 32 };
obj2.platformIconContainer = { flexDirection: "row" };
obj2.cutout = { marginRight: -6 };
let closure_16 = createStyles.createStyles(obj2);
let obj7 = { direction: fn(1177).CutoutDirection.RIGHT, radius: 8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsScreen.tsx");

export default function GuildRoleConnectionsScreen(guildId) {
  guildId = guildId.guildId;
  const onCloseModal = guildId.onCloseModal;
  first = undefined;
  closure_7 = undefined;
  let tmp = closure_16();
  dependencyMap = tmp;
  _slicedToArray = onCloseModal(4574)();
  let items = [GuildRoleStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guildId));
  let obj = guildId(504);
  const tmp2 = onCloseModal;
  let items1 = [AuthenticationStore];
  noop = guildId(504).useStateFromStores(items1, () => id.getId());
  let obj2 = guildId(504);
  const items2 = [GuildMemberStore];
  const stateFromStores1 = guildId(504).useStateFromStores(items2, () =>
    GuildMemberStore.getMember(guildId, closure_4),
  );
  [first, closure_7] = noop.useState([]);
  const items3 = [guildId, first];
  const effect = noop.useEffect(() => {
    if (0 !== first.length) {
      const obj2 = { role_ids: first.map((role_id) => role_id.role_id) };
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      obj.track(constants.PASSPORT_ENTRY_VIEWED, obj2);
    }
  }, items3);
  const items4 = [guildId];
  const effect1 = noop.useEffect(() => {
    const guildRoleConnectionsConfigurations =
      GuildActionCreatorsDefault.getGuildRoleConnectionsConfigurations(guildId);
    guildRoleConnectionsConfigurations.then((result) => closure_1_7(result));
  }, items4);
  if (null == stateFromStores1) {
    return null;
  } else {
    let found = stateFromStores.filter((tags) => null === tags.tags.guild_connections);
    let obj4 = { style: tmp.container, children: null };
    let obj5 = { contentContainerStyle: tmp.content, children: null };
    let obj6 = {
      style: tmp.infoText,
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl = tmp4(1115).intl;
    obj7 = { helpdeskArticleUrl: tmp2(2025).getArticleURL(constants2.CONNECTION_DETAILS) };
    obj6.children = intl.format(tmp4(1115).t["Y+TsEV"], obj7);
    const items5 = [closure_14(tmp4(4635).Text, obj6)];
    const obj8 = {
      style: tmp.verifiedRoles,
      children: found.map((children) => {
        guildId = children;
        const roles = stateFromStores1.roles;
        const hasItem = roles.includes(children.id);
        id = children.id;
        closure_129_3 = undefined;
        let items = [];
        closure_129_1 = items;
        const found = first.find((role_id) => role_id.role_id === closure_0);
        closure_129_2 = found;
        if (null != found) {
          const _Set = Set;
          const set = new Set();
          closure_129_3 = set;
          const rules = found.rules;
          const item = rules.flat().forEach((application_id) => {
            if (undefined === application_id.application_id) {
              set.add(application_id.connection_type);
            } else {
              set.add(application_id.application_id);
            }
          });
          const _Array = Array;
          const flatResult = rules.flat();
          const item1 = Array.from(set).forEach((item, index) => {
            let tmp = null;
            if (index !== set.size - 1) {
              tmp = obj7;
            }
            if (isNaN(parseInt(item))) {
              let source = PlatformsDefault.get(item);
              let CutoutableAvatarImage = AvatarUtilsDefault;
              let makeSource = CutoutableAvatarImage.makeSource;
              if (obj2.isThemeDark(closure_3)) {
                let darkPNG;
                if (!tmp12) {
                  darkPNG = source.icon.darkPNG;
                }
                let lightPNG = darkPNG;
              } else if (!tmp12) {
                lightPNG = source.icon.lightPNG;
              }
              source = makeSource(lightPNG);
              makeSource = hasItem;
              CutoutableAvatarImage = native.CutoutableAvatarImage;
              const obj3 = { size: native.AvatarSizes.XSMALL, source, style: closure_2.cutout, cutout: tmp };
              hasItem.push(closure_3_14(CutoutableAvatarImage, obj3, item));
              obj2 = shared;
            } else {
              let bot;
              if (closure_1_2.applications[item] != null) {
                bot = tmp3.bot;
              }
              if (undefined !== bot) {
                const obj4 = { size: native.AvatarSizes.XSMALL, user: null, guildId: null, style: null, cutout: null };
                const tmp31 = new UserRecord(bot);
                obj4.user = tmp31;
                obj4.guildId = guildId;
                obj4.style = closure_2.cutout;
                obj4.cutout = tmp;
                hasItem.push(closure_3_14(native.CutoutableAvatarImage, obj4, item));
              }
            }
          });
          const arr = Array.from(set);
        }
        let obj = {
          accessibilityRole: "button",
          style(pressed) {
            const items = [closure_2.verifiedRole, ,];
            let verifiedRoleHasRole = null;
            if (hasItem) {
              verifiedRoleHasRole = closure_2.verifiedRoleHasRole;
            }
            items[1] = verifiedRoleHasRole;
            let verifiedRolePressed = null;
            if (pressed.pressed) {
              verifiedRolePressed = closure_2.verifiedRolePressed;
            }
            items[2] = verifiedRolePressed;
            return items;
          },
          onPress() {
            if (hasItem) {
              id = tmp;
              closure_1 = guildId;
              const _HermesInternal = HermesInternal;
              const obj4 = ActionSheetActionCreatorsDefault;
              const obj3 = {
                onLeaveRolePressed() {
                  hasItem(closure_2_2[17]).hideActionSheet();
                  const obj = hasItem(closure_2_2[17]);
                  const result = hasItem(closure_2_2[16]).unassignGuildRoleConnection(closure_1, id.id);
                },
              };
              obj4.openLazy(
                asyncRequireImpl(11706, dependencyMap.paths),
                "LeaveConnectionRoleActionSheet-" + tmp.id,
                obj3,
              );
              const tmp20 = asyncRequireImpl(11706, dependencyMap.paths);
            } else {
              let obj = ActionSheetActionCreatorsDefault;
              const tmp9 = asyncRequireImpl(11696, dependencyMap.paths);
              const obj5 = { role: tmp, guildId, onCloseModal };
              obj.openLazy(
                tmp9,
                GuildRoleConnectionsModalActionCreators.makeGuildRoleConnectionsConnectAccountsActionSheetKey(tmp.id),
                obj5,
              );
            }
          },
          children: null,
        };
        let tmp12 = null;
        if (hasItem) {
          let obj2 = { style: closure_2.roleCheckmark, children: null };
          let obj3 = {
            size: guildId(closure_2[11]).Icon.Sizes.SMALL_20,
            source: onCloseModal(closure_2[28]),
            color: onCloseModal(closure_2[10]).unsafe_rawColors.WHITE,
          };
          obj2.children = closure_1_14(guildId(closure_2[11]).Icon, obj3);
          tmp12 = closure_1_14(stateFromStores1, obj2);
        }
        const items1 = [
          tmp12,
          closure_1_14(onCloseModal(closure_2[29]), {
            style: closure_2.verifiedRoleIcon,
            guildId,
            role: children,
            size: 24,
          }),
          closure_1_14(guildId(closure_2[25]).Text, {
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            style: closure_2.verifiedRoleName,
            children: children.name,
          }),
        ];
        const obj6 = {
          style: closure_2.platformIconContainer,
          users: [],
          renderedUsers: items,
          max: 3,
          withNames: false,
          avatarSize: guildId(closure_2[11]).AvatarSizes.XSMALL,
          withPlusCount: true,
        };
        items1[3] = closure_1_14(onCloseModal(closure_2[30]), obj6);
        obj.children = items1;
        return closure_1_15(first, obj, children.id);
      }),
    };
    items5[1] = closure_14(stateFromStores1, obj8);
    obj5.children = items5;
    obj4.children = closure_15(closure_7, obj5);
    return closure_14(stateFromStores1, obj4);
  }
  let obj3 = guildId(504);
}
