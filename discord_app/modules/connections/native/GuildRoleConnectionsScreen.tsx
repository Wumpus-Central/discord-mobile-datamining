// discord_app/modules/connections/native/GuildRoleConnectionsScreen.tsx
import _slicedToArray from "_slicedToArray";
import asyncRequireImpl from "asyncRequireImpl";
import get_ActivityIndicator from "ACTION_SHEET_HEIGHT_HALF";
import createdAt from "createdAt";
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import ME from "ME";
import jsxProd from "openGuildRoleConnectionsModal";
import createCacheKey from "createCacheKey";

let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_6;
let error;
let map1;
const require = arg1;
({ View: c5, Pressable: closure_6, ScrollView: error } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, HelpdeskArticles: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { container: null, content: null, infoText: null, verifiedRoles: null, verifiedRole: null, verifiedRoleHasRole: null, verifiedRolePressed: null, verifiedRoleIcon: null, roleCheckmark: null, verifiedRoleName: null, platformIconContainer: null, cutout: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "column", alignItems: "center", padding: 16 };
createCacheKey[2] = { marginTop: 24 };
createCacheKey[3] = { marginTop: 24, flexDirection: "column", width: "100%" };
createCacheKey[4] = { flexDirection: "row", borderColor: require("Themes").colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: require("Themes").radii.md, paddingHorizontal: 16, paddingVertical: 20, marginBottom: 16, width: "100%", alignItems: "center", position: "relative" };
let obj1 = { flexDirection: "row", borderColor: require("Themes").colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: require("Themes").radii.md, paddingHorizontal: 16, paddingVertical: 20, marginBottom: 16, width: "100%", alignItems: "center", position: "relative" };
createCacheKey[5] = { borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
let obj2 = { borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[6] = { borderColor: require("Themes").colors.BORDER_MUTED };
createCacheKey[7] = { marginRight: 12 };
let obj3 = { borderColor: require("Themes").colors.BORDER_MUTED };
createCacheKey[8] = { width: 20, height: 20, borderRadius: 10, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, position: "absolute", right: -8, top: -8 };
createCacheKey[9] = { flex: 1, overflow: "hidden", marginRight: 32 };
createCacheKey[10] = { flexDirection: "row" };
createCacheKey[11] = { marginRight: -6 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj5 = { direction: require("Button").CutoutDirection.RIGHT, radius: 8 };
let obj4 = { width: 20, height: 20, borderRadius: 10, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, position: "absolute", right: -8, top: -8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsScreen.tsx");

export default function GuildRoleConnectionsScreen(guildId) {
  guildId = guildId.guildId;
  const onCloseModal = guildId.onCloseModal;
  let dependencyMap;
  let callback;
  let React;
  let stateFromStores1;
  let first;
  let closure_7;
  let tmp = createCacheKey();
  dependencyMap = tmp;
  callback = onCloseModal(4310)();
  let obj = guildId(589);
  let items = [createGuildRoleRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getSortedRoles(guildId));
  let obj1 = guildId(589);
  let items1 = [fetchFingerprint];
  React = obj1.useStateFromStores(items1, () => id.getId());
  let obj2 = guildId(589);
  const items2 = [trackCommunicationDisabled];
  stateFromStores1 = obj2.useStateFromStores(items2, () => outer1_10.getMember(guildId, asyncRequireImpl));
  const tmp6 = callback(React.useState([]), 2);
  first = tmp6[0];
  closure_7 = tmp6[1];
  const items3 = [guildId, first];
  const effect = React.useEffect(() => {
    if (0 !== first.length) {
      let obj = onCloseModal(_undefined[14]);
      obj = { role_ids: null };
      obj[0] = first.map((role_id) => role_id.role_id);
      const merged = Object.assign(guildId(_undefined[15]).collectGuildAnalyticsMetadata(guildId));
      obj.track(outer1_12.PASSPORT_ENTRY_VIEWED, obj);
      const obj3 = guildId(_undefined[15]);
    }
  }, items3);
  const items4 = [guildId];
  const effect1 = React.useEffect(() => {
    const guildRoleConnectionsConfigurations = onCloseModal(_undefined[16]).getGuildRoleConnectionsConfigurations(guildId);
    guildRoleConnectionsConfigurations.then((arg0) => callback(arg0));
  }, items4);
  if (null == stateFromStores1) {
    return null;
  } else {
    let found = stateFromStores.filter((tags) => null === tags.tags.guild_connections);
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { contentContainerStyle: null, children: null };
    obj[0] = tmp.content;
    obj1 = { style: null, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj1[0] = tmp.infoText;
    const intl = tmp4(1236).intl;
    obj2 = { helpdeskArticleUrl: null };
    obj2[0] = tmp2(1993).getArticleURL(constants.CONNECTION_DETAILS);
    obj1[3] = intl.format(tmp4(1236).t["Y+TsEV"], obj2);
    const items5 = [callback2(tmp4(4734).Text, obj1), ];
    let obj3 = { style: null, children: null };
    obj3[0] = tmp.verifiedRoles;
    obj3[1] = found.map((children) => {
      let id = children;
      const roles = stateFromStores1.roles;
      const hasItem = roles.includes(children.id);
      let items = hasItem;
      id = children.id;
      let found;
      let set;
      items = [];
      found = first.find((role_id) => role_id.role_id === id);
      if (null != found) {
        const _Set = Set;
        set = new Set();
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
        const item1 = Array.from(set).forEach((joined) => {
          let tmp = null;
          if (arg1 !== set.size - 1) {
            tmp = outer2_17;
          }
          if (isNaN(parseInt(joined))) {
            let obj = onCloseModal(c2[22]);
            let source = obj.get(joined);
            let CutoutableAvatarImage = onCloseModal(c2[23]);
            let makeSource = CutoutableAvatarImage.makeSource;
            if (obj2.isThemeDark(set)) {
              let darkPNG;
              if (!tmp12) {
                darkPNG = source.icon.darkPNG;
              }
              let lightPNG = darkPNG;
            } else if (!tmp12) {
              lightPNG = source.icon.lightPNG;
            }
            source = makeSource(lightPNG);
            makeSource = items;
            CutoutableAvatarImage = guildId(c2[11]).CutoutableAvatarImage;
            obj = { size: null, source: null, style: null, cutout: null };
            obj[0] = guildId(c2[11]).AvatarSizes.XSMALL;
            obj[1] = source;
            obj[2] = found.cutout;
            obj[3] = tmp;
            items.push(outer2_14(CutoutableAvatarImage, obj, joined));
            obj2 = guildId(c2[24]);
          } else {
            let bot;
            if (found.applications[joined] != null) {
              bot = tmp3.bot;
            }
            if (undefined !== bot) {
              obj = { size: null, user: null, guildId: null, style: null, cutout: null };
              obj[0] = guildId(c2[11]).AvatarSizes.XSMALL;
              const tmp31 = new outer2_8(bot);
              obj[1] = tmp31;
              obj[2] = id;
              obj[3] = found.cutout;
              obj[4] = tmp;
              items.push(outer2_14(guildId(c2[11]).CutoutableAvatarImage, obj, joined));
            }
          }
        });
        const arr = Array.from(set);
      }
      let obj = {
        accessibilityRole: "button",
        style(pressed) {
          const items = [found.verifiedRole, , ];
          let verifiedRoleHasRole = null;
          if (items) {
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
          if (items) {
            const id = tmp;
            items = tmp2;
            const _HermesInternal = HermesInternal;
            const obj4 = onCloseModal(c2[17]);
            let obj = { onLeaveRolePressed: null };
            obj[0] = function onLeaveRolePressed() {
              tmp2(outer1_2[17]).hideActionSheet();
              const obj = tmp2(outer1_2[17]);
              const result = tmp2(outer1_2[16]).unassignGuildRoleConnection(tmp2, tmp.id);
            };
            obj4.openLazy(guildId(c2[19])(c2[18], c2.paths), "LeaveConnectionRoleActionSheet-" + tmp.id, obj);
            const tmp20 = guildId(c2[19])(c2[18], c2.paths);
          } else {
            obj = onCloseModal(c2[17]);
            const tmp9 = guildId(c2[19])(c2[20], c2.paths);
            obj = { role: null, guildId: null, onCloseModal: null };
            obj[0] = tmp;
            obj[1] = tmp2;
            obj[2] = items;
            obj.openLazy(tmp9, guildId(c2[21]).makeGuildRoleConnectionsConnectAccountsActionSheetKey(tmp.id), obj);
            const obj2 = guildId(c2[21]);
          }
        },
        children: null
      };
      let tmp12 = null;
      if (hasItem) {
        obj = { style: null, children: null };
        obj[0] = found.roleCheckmark;
        obj = { size: null, source: null, color: null };
        obj[0] = guildId(_undefined[11]).Icon.Sizes.SMALL_20;
        obj[1] = onCloseModal(_undefined[28]);
        obj[2] = onCloseModal(_undefined[10]).unsafe_rawColors.WHITE;
        obj[1] = outer1_14(guildId(_undefined[11]).Icon, obj);
        tmp12 = outer1_14(stateFromStores1, obj);
      }
      const items1 = [tmp12, outer1_14(onCloseModal(_undefined[29]), { style: found.verifiedRoleIcon, guildId: id, role: children, size: 24 }), outer1_14(guildId(_undefined[25]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", lineClamp: 1, style: found.verifiedRoleName, children: children.name }), ];
      const obj3 = { style: found.platformIconContainer, users: [], renderedUsers: items, max: 3, withNames: false, avatarSize: null, withPlusCount: true };
      obj3[5] = guildId(_undefined[11]).AvatarSizes.XSMALL;
      items1[3] = outer1_14(onCloseModal(_undefined[30]), obj3);
      obj[3] = items1;
      return outer1_15(first, obj, children.id);
    });
    items5[1] = callback2(stateFromStores1, obj3);
    obj[1] = items5;
    obj[1] = callback3(closure_7, obj);
    return callback2(stateFromStores1, obj);
  }
  tmp2 = onCloseModal;
};