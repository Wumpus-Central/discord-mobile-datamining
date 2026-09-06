// === Module 11571: GuildRoleConnectionsScreen ===

// Module 11571 (GuildRoleConnectionsScreen)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import shared from "shared" /* 4411 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import PlatformsDefault from "Platforms" /* 5283 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators" /* 11569 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserRecord from "UserRecord" /* 1385 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_12, HelpdeskArticles: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { container: null, content: null, infoText: null, verifiedRoles: null, verifiedRole: null, verifiedRoleHasRole: null, verifiedRolePressed: null, verifiedRoleIcon: null, roleCheckmark: null, verifiedRoleName: null, platformIconContainer: null, cutout: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles.container = createStyles;
createStyles.content = { flexDirection: "column", alignItems: "center", padding: 16 };
createStyles.infoText = { marginTop: 24 };
createStyles.verifiedRoles = { marginTop: 24, flexDirection: "column", width: "100%" };
createStyles.verifiedRole = { flexDirection: "row", borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: nativeDefault.radii.md, paddingHorizontal: 16, paddingVertical: 20, marginBottom: 16, width: "100%", alignItems: "center", position: "relative" };
let obj1 = { flexDirection: "row", borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: nativeDefault.radii.md, paddingHorizontal: 16, paddingVertical: 20, marginBottom: 16, width: "100%", alignItems: "center", position: "relative" };
createStyles.verifiedRoleHasRole = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj2 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.verifiedRolePressed = { borderColor: nativeDefault.colors.BORDER_MUTED };
createStyles.verifiedRoleIcon = { marginRight: 12 };
let size = { width: 20, height: 20, borderRadius: 10, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, position: "absolute", right: -8, top: -8 };
createStyles.roleCheckmark = size;
createStyles.verifiedRoleName = { flex: 1, overflow: "hidden", marginRight: 32 };
createStyles.platformIconContainer = { flexDirection: "row" };
createStyles.cutout = { marginRight: -6 };
let closure_16 = createStyles.createStyles(createStyles);
let obj4 = { direction: fn(1178).CutoutDirection.RIGHT, radius: 8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsScreen.tsx");

export default function GuildRoleConnectionsScreen(guildId) {
  guildId = guildId.guildId;
  const onCloseModal = guildId.onCloseModal;
  let tmp = closure_16();
  dependencyMap = tmp;
  _slicedToArray = onCloseModal(4495)();
  let obj = guildId(504);
  let items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guildId));
  let obj1 = guildId(504);
  let items1 = [AuthenticationStore];
  noop = obj1.useStateFromStores(items1, () => id.getId());
  let obj2 = guildId(504);
  const items2 = [GuildMemberStore];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildMemberStore.getMember(guildId, closure_4));
  const tmp6 = _slicedToArray(noop.useState([]), 2);
  const first = tmp6[0];
  closure_7 = tmp6[1];
  const items3 = [guildId, first];
  const effect = noop.useEffect(() => {
    if (0 !== first.length) {
      const obj = { role_ids: first.map((role_id) => role_id.role_id) };
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      obj.track(constants.PASSPORT_ENTRY_VIEWED, obj);
    }
  }, items3);
  const items4 = [guildId];
  const effect1 = noop.useEffect(() => {
    const guildRoleConnectionsConfigurations = GuildActionCreatorsDefault.getGuildRoleConnectionsConfigurations(guildId);
    guildRoleConnectionsConfigurations.then((result) => closure_1_7(result));
  }, items4);
  if (null == stateFromStores1) {
    return null;
  } else {
    let found = stateFromStores.filter((tags) => null === tags.tags.guild_connections);
    obj = { style: tmp.container, children: null };
    obj = { contentContainerStyle: tmp.content, children: null };
    obj1 = { style: tmp.infoText, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp4(1114).intl;
    obj2 = { helpdeskArticleUrl: tmp2(2024).getArticleURL(constants2.CONNECTION_DETAILS) };
    obj1.children = intl.format(tmp4(1114).t["Y+TsEV"], obj2);
    const items5 = [closure_14(tmp4(4556).Text, obj1), ];
    let obj3 = {
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
                tmp = obj4;
              }
              if (isNaN(parseInt(item))) {
                let obj = PlatformsDefault;
                let source = obj.get(item);
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
                obj = { size: native.AvatarSizes.XSMALL, source, style: closure_2.cutout, cutout: tmp };
                hasItem.push(closure_3_14(CutoutableAvatarImage, obj, item));
                obj2 = shared;
              } else {
                let bot;
                if (closure_1_2.applications[item] != null) {
                  bot = tmp3.bot;
                }
                if (undefined !== bot) {
                  obj = { size: native.AvatarSizes.XSMALL, user: null, guildId: null, style: null, cutout: null };
                  const tmp31 = new UserRecord(bot);
                  obj.user = tmp31;
                  obj.guildId = guildId;
                  obj.style = closure_2.cutout;
                  obj.cutout = tmp;
                  hasItem.push(closure_3_14(native.CutoutableAvatarImage, obj, item));
                }
              }
            });
            const arr = Array.from(set);
          }
          let obj = {
            accessibilityRole: "button",
            style(pressed) {
              const items = [closure_2.verifiedRole, , ];
              let verifiedRoleHasRole = null;
              if (hasItem) {
                verifiedRoleHasRole = tmp.verifiedRoleHasRole;
              }
              items[1] = verifiedRoleHasRole;
              let verifiedRolePressed = null;
              if (pressed.pressed) {
                verifiedRolePressed = tmp.verifiedRolePressed;
              }
              items[2] = verifiedRolePressed;
              return items;
            },
            onPress() {
              if (hasItem) {
                id = tmp;
                closure_1 = tmp2;
                const _HermesInternal = HermesInternal;
                obj4 = ActionSheetActionCreatorsDefault;
                let obj = {
                  onLeaveRolePressed() {
                      hasItem(closure_2_2[17]).hideActionSheet();
                      const obj = hasItem(closure_2_2[17]);
                      const result = hasItem(closure_2_2[16]).unassignGuildRoleConnection(closure_1, id.id);
                    }
                };
                obj4.openLazy(asyncRequireImpl(11572, dependencyMap.paths), "LeaveConnectionRoleActionSheet-" + tmp.id, obj);
                const tmp20 = asyncRequireImpl(11572, dependencyMap.paths);
              } else {
                const tmp9 = asyncRequireImpl(11562, dependencyMap.paths);
                obj = { role: tmp, guildId: tmp2, onCloseModal };
                obj.openLazy(tmp9, GuildRoleConnectionsModalActionCreators.makeGuildRoleConnectionsConnectAccountsActionSheetKey(tmp.id), obj);
              }
            },
            children: null
          };
          let tmp12 = null;
          if (hasItem) {
            obj = { style: closure_2.roleCheckmark, children: null };
            obj = { size: guildId(closure_2[11]).Icon.Sizes.SMALL_20, source: onCloseModal(closure_2[28]), color: onCloseModal(closure_2[10]).unsafe_rawColors.WHITE };
            obj.children = closure_1_14(guildId(closure_2[11]).Icon, obj);
            tmp12 = closure_1_14(stateFromStores1, obj);
          }
          const items1 = [tmp12, closure_1_14(onCloseModal(closure_2[29]), { style: closure_2.verifiedRoleIcon, guildId, role: children, size: 24 }), closure_1_14(guildId(closure_2[25]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", lineClamp: 1, style: closure_2.verifiedRoleName, children: children.name }), ];
          const obj3 = { style: closure_2.platformIconContainer, users: [], renderedUsers: items, max: 3, withNames: false, avatarSize: guildId(closure_2[11]).AvatarSizes.XSMALL, withPlusCount: true };
          items1[3] = closure_1_14(onCloseModal(closure_2[30]), obj3);
          obj.children = items1;
          return closure_1_15(first, obj, children.id);
        })
    };
    items5[1] = closure_14(stateFromStores1, obj3);
    obj.children = items5;
    obj.children = closure_15(closure_7, obj);
    return closure_14(stateFromStores1, obj);
  }
  tmp2 = onCloseModal;
};