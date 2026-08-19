// === Module 10763: GuildRoleConnectionsScreen ===

// Module 10763 (GuildRoleConnectionsScreen)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import createdAt from "createdAt" /* 1930 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ View: c5, Pressable: closure_6, ScrollView: error } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, HelpdeskArticles: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "column", alignItems: "center", padding: 16 };
createCacheKey[2] = { marginTop: 24 };
createCacheKey[3] = { marginTop: 24, flexDirection: "column", width: "100%" };
createCacheKey[4] = { flexDirection: "row", borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: ThemesDefault.radii.md, paddingHorizontal: 16, paddingVertical: 20, marginBottom: 16, width: "100%", alignItems: "center", position: "relative" };
createCacheKey[5] = { borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[6] = { borderColor: ThemesDefault.colors.BORDER_MUTED };
createCacheKey[7] = { marginRight: 12 };
createCacheKey[8] = { width: 20, height: 20, borderRadius: 10, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, position: "absolute", right: -8, top: -8 };
createCacheKey[9] = { flex: 1, overflow: "hidden", marginRight: 32 };
createCacheKey[10] = { flexDirection: "row" };
createCacheKey[11] = { marginRight: -6 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
const obj5 = { direction: require("Button").CutoutDirection.RIGHT, radius: 8 };
let result = require("obj132").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsScreen.tsx");

export default function GuildRoleConnectionsScreen(guildId) {
  guildId = guildId.guildId;
  const onCloseModal = guildId.onCloseModal;
  let tmp = callback4();
  dependencyMap = tmp;
  const callback = onCloseModal(4310)();
  let obj = guildId(589);
  let items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_11.getSortedRoles(guildId));
  obj1 = guildId(589);
  let items1 = [closure_9];
  const React = obj1.useStateFromStores(items1, () => id.getId());
  let obj2 = guildId(589);
  const items2 = [closure_10];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => closure_1_10.getMember(guildId, closure_4));
  const tmp6 = callback(React.useState([]), 2);
  const first = tmp6[0];
  closure_7 = tmp6[1];
  const items3 = [guildId, first];
  const effect = React.useEffect(() => {
    if (0 !== first.length) {
      onCloseModal(698);
      const obj = { role_ids: null };
      obj[0] = first.map((item, index) => item.role_id);
      const merged = Object.assign(guildId(5042).collectGuildAnalyticsMetadata(guildId));
      obj.track(closure_1_12.PASSPORT_ENTRY_VIEWED, obj);
      const obj3 = guildId(5042);
    }
  }, items3);
  const items4 = [guildId];
  const effect1 = React.useEffect(() => {
    const guildRoleConnectionsConfigurations = onCloseModal(6778).getGuildRoleConnectionsConfigurations(guildId);
    guildRoleConnectionsConfigurations.then((result) => callback(result));
  }, items4);
  if (null == stateFromStores1) {
    return null;
  } else {
    let found = stateFromStores.filter((item, index) => null === item.tags.guild_connections);
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
    obj3[1] = found.map((item, index) => {
      const roles = stateFromStores1.roles;
      const hasItem = roles.includes(item.id);
      const id = item.id;
      let set;
      let items = [];
      const found = first.find((item, index) => item.role_id === id);
      if (null != found) {
        const _Set = Set;
        set = new Set();
        const rules = found.rules;
        item = rules.flat().forEach((item, index) => {
          if (undefined === item.application_id) {
            set.add(item.connection_type);
          } else {
            set.add(item.application_id);
          }
        });
        const _Array = Array;
        const flatResult = rules.flat();
        const item1 = Array.from(set).forEach((item, index) => {
          let tmp = null;
          if (index !== set.size - 1) {
            tmp = obj5;
          }
          if (isNaN(parseInt(item))) {
            let obj = onCloseModal(closure_2[22]);
            let source = obj.get(item);
            let CutoutableAvatarImage = onCloseModal(closure_2[23]);
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
            CutoutableAvatarImage = guildId(closure_2[11]).CutoutableAvatarImage;
            obj = { size: null, source: null, style: null, cutout: null };
            obj[0] = guildId(closure_2[11]).AvatarSizes.XSMALL;
            obj[1] = source;
            obj[2] = found.cutout;
            obj[3] = tmp;
            items.push(closure_2_14(CutoutableAvatarImage, obj, item));
            obj2 = guildId(closure_2[24]);
          } else {
            let bot;
            if (found.applications[item] != null) {
              bot = tmp3.bot;
            }
            if (undefined !== bot) {
              obj = { size: null, user: null, guildId: null, style: null, cutout: null };
              obj[0] = guildId(closure_2[11]).AvatarSizes.XSMALL;
              const tmp31 = new closure_2_8(bot);
              obj[1] = tmp31;
              obj[2] = id;
              obj[3] = found.cutout;
              obj[4] = tmp;
              items.push(closure_2_14(guildId(closure_2[11]).CutoutableAvatarImage, obj, item));
            }
          }
        });
        const arr = Array.from(set);
      }
      let obj = {
        accessibilityRole: "button",
        style(pressed) {
          items = [found.verifiedRole, , ];
          let verifiedRoleHasRole = null;
          if (items) {
            verifiedRoleHasRole = found.verifiedRoleHasRole;
          }
          items[1] = verifiedRoleHasRole;
          let verifiedRolePressed = null;
          if (pressed.pressed) {
            verifiedRolePressed = found.verifiedRolePressed;
          }
          items[2] = verifiedRolePressed;
          return items;
        },
        onPress() {
          if (closure_1) {
            closure_0 = tmp;
            closure_1 = id;
            const _HermesInternal = HermesInternal;
            const obj4 = onCloseModal(closure_2[17]);
            let obj = { onLeaveRolePressed: null };
            obj[0] = function onLeaveRolePressed() {
              callback(found[17]).hideActionSheet();
              const obj = callback(found[17]);
              const result = callback(found[16]).unassignGuildRoleConnection(callback, id.id);
            };
            obj4.openLazy(guildId(closure_2[19])(closure_2[18], closure_2.paths), "LeaveConnectionRoleActionSheet-" + tmp.id, obj);
            const tmp20 = guildId(closure_2[19])(closure_2[18], closure_2.paths);
          } else {
            onCloseModal(closure_2[17]);
            const tmp9 = guildId(closure_2[19])(closure_2[20], closure_2.paths);
            obj = { role: null, guildId: null, onCloseModal: null };
            obj[0] = tmp;
            obj[1] = id;
            obj[2] = items;
            obj.openLazy(tmp9, guildId(closure_2[21]).makeGuildRoleConnectionsConnectAccountsActionSheetKey(tmp.id), obj);
            const obj2 = guildId(closure_2[21]);
          }
        },
        children: null
      };
      let tmp12 = null;
      if (hasItem) {
        obj = { style: null, children: null };
        obj[0] = found.roleCheckmark;
        obj = { size: null, source: null, color: null };
        obj[0] = guildId(1297).Icon.Sizes.SMALL_20;
        obj[1] = onCloseModal(10760);
        obj[2] = onCloseModal(712).unsafe_rawColors.WHITE;
        obj[1] = closure_1_14(guildId(1297).Icon, obj);
        tmp12 = closure_1_14(stateFromStores1, obj);
      }
      const items1 = [tmp12, closure_1_14(onCloseModal(7182), { style: found.verifiedRoleIcon, guildId: id, role: item, size: 24 }), closure_1_14(guildId(4734).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", lineClamp: 1, style: found.verifiedRoleName, children: item.name }), ];
      const obj3 = { style: found.platformIconContainer, users: [], renderedUsers: items, max: 3, withNames: false, avatarSize: guildId(1297).AvatarSizes.XSMALL, withPlusCount: true };
      items1[3] = closure_1_14(onCloseModal(10765), obj3);
      obj[3] = items1;
      return closure_1_15(first, obj, item.id);
    });
    items5[1] = callback2(stateFromStores1, obj3);
    obj[1] = items5;
    obj[1] = callback3(closure_7, obj);
    return callback2(stateFromStores1, obj);
  }
  tmp2 = onCloseModal;
};