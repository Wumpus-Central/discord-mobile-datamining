// === Module 8930: InformationTable ===

// Module 8930 (InformationTable)
import ThemesDefault from "Themes" /* 712 */;
import registerAssetDefault from "registerAsset" /* 8933 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "trackCommunicationDisabled" /* 1990 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import { UserProfileAnalyticsTypes } from "USER_PROFILE_TOOLTIP_DELAY" /* 8931 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
function InformationTable(speedBumpType) {
  let items;
  let obj = { icon: registerAssetDefault, text: null };
  const intl = items(1236).intl;
  obj[1] = intl.string(items(1236).t.kcuWva);
  items = [obj, ];
  obj = { icon: registerAssetDefault, text: null };
  if ("block" === speedBumpType.speedBumpType) {
    const intl3 = tmp2(1236).intl;
    let stringResult = intl3.string(tmp2(1236).t.QxrDY1);
  } else {
    const intl2 = tmp2(1236).intl;
    stringResult = intl2.string(tmp2(1236).t.W6fjkS);
  }
  obj[1] = stringResult;
  items[1] = obj;
  obj = {
    hasIcons: true,
    children: items.map((icon) => {
      let obj = { start: 0 === arg1, end: items.length === arg1, icon: null, label: null };
      obj = { size: items(closure_1_2[15]).Icon.Sizes.MEDIUM, source: icon.icon };
      obj[2] = closure_1_12(items(closure_1_2[15]).Icon, obj);
      obj[3] = icon.text;
      return closure_1_12(items(closure_1_2[14]).TableRow, obj, arg1);
    })
  };
  return callback2(items(6286).TableRowGroup, obj);
}
let c4 = importAllResult;
({ AnalyticEvents: c10, EMPTY_STRING_SNOWFLAKE_ID: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { button: null, tableContainer: null, header: null, bodyText: null, headerText: null, avatar: null, avatarContainer: null, avatarIconContainer: null, suppress: null };
obj = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: 56 };
obj[0] = obj;
createCacheKey = { marginBottom: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
obj[2] = { marginBottom: ThemesDefault.space.PX_24, marginHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
obj[3] = { textAlign: "center" };
obj[4] = { textAlign: "center" };
obj[5] = { alignSelf: "center" };
let obj2 = { marginBottom: ThemesDefault.space.PX_24, marginHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
obj[6] = { position: "relative", alignSelf: "center", marginTop: ThemesDefault.space.PX_16 };
let obj3 = { position: "relative", alignSelf: "center", marginTop: ThemesDefault.space.PX_16 };
obj[7] = { position: "absolute", bottom: -8, right: -8, padding: ThemesDefault.space.PX_4, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round };
let obj4 = { position: "absolute", bottom: -8, right: -8, padding: ThemesDefault.space.PX_4, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round };
obj[8] = { alignSelf: "center", marginTop: ThemesDefault.space.PX_16 };
let closure_14 = createCacheKey.createStyles(obj);
let obj5 = { alignSelf: "center", marginTop: ThemesDefault.space.PX_16 };
const memoResult = importAllResult.memo(function UserProfileSpeedBumpActionSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  const onClose = userId.onClose;
  ({ location: closure_3, sourceAnalyticsLocations } = userId);
  ({ messageId, roleId, sessionId, openedAt } = userId);
  if (sourceAnalyticsLocations === undefined) {
    sourceAnalyticsLocations = [];
  }
  const speedBumpType = userId.speedBumpType;
  let stateFromStores;
  let guild_id;
  let stateFromStores2;
  closure_7 = undefined;
  let first;
  UserProfileAnalyticsTypes = undefined;
  let analyticsLocations;
  let createUserProfileAnalyticsContext;
  closure_12 = undefined;
  let tmp = callback3();
  let obj = userId(onClose[16]);
  obj1 = userId(onClose[18]);
  const items = [first];
  stateFromStores = obj1.useStateFromStores(items, () => first.getUser(userId));
  let obj2 = userId(onClose[18]);
  const items1 = [stateFromStores2];
  const items2 = [channelId];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores2.getChannel(channelId), items2);
  guild_id = undefined;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  let tmp2Result = tmp2(tmp3[18]);
  const items3 = [closure_7];
  stateFromStores2 = tmp2Result.useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = member.getMember(tmp, userId);
    }
    return member;
  });
  let id;
  let tmp4Result = tmp4(tmp3[19]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (id == null) {
    id = createUserProfileAnalyticsContext;
  }
  const tmp4ResultResult = tmp4Result(id, guild_id);
  closure_7 = tmp4ResultResult;
  const tmp13 = callback(stateFromStores.useState(false), 2);
  first = tmp13[0];
  UserProfileAnalyticsTypes = tmp13[1];
  const items4 = [];
  tmp4Result = tmp4(tmp3[20]);
  const isThemeLightResult = obj.isThemeLight(channelId(onClose[17])());
  items4[HermesBuiltin.arraySpread(sourceAnalyticsLocations, 0)] = channelId(onClose[21]).IGNORED_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp4Result(items4).analyticsLocations;
  tmp2Result = tmp2(tmp3[22]);
  createUserProfileAnalyticsContext = tmp2Result.useCreateUserProfileAnalyticsContext({ layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, channelId, messageId, roleId });
  const tmp18 = channelId(onClose[23])({ userId, user: stateFromStores, channelId, guildId: guild_id, displayProfile: tmp4ResultResult, guildMember: stateFromStores2, type: UserProfileAnalyticsTypes.IGNORED_USER_SHEET });
  closure_12 = tmp18;
  const items5 = [tmp18, tmp4ResultResult, guild_id, first, stateFromStores2];
  const effect = stateFromStores.useEffect(() => {
    let tmp = first;
    if (!first) {
      tmp = null == closure_7;
    }
    if (!tmp) {
      let tmp6 = null == guild_id;
      if (!tmp6) {
        let prop;
        if (stateFromStores2 != null) {
          prop = stateFromStores2.fullProfileLoadedTimestamp;
        }
        tmp6 = null != prop;
      }
      if (tmp6) {
        channelId(onClose[24]).track(analyticsLocations.OPEN_POPOUT, closure_12);
        callback(true);
        const obj = channelId(onClose[24]);
      }
    }
  }, items5);
  const items6 = [onClose];
  const effect1 = stateFromStores.useEffect(() => () => {
    if (closure_2 != null) {
      tmp();
    }
  }, items6);
  const items7 = [stateFromStores, userId];
  const effect2 = stateFromStores.useEffect(() => {
    if (null == stateFromStores) {
      const user = userId(onClose[25]).getUser(userId);
      const obj = userId(onClose[25]);
    }
  }, items7);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { value: null, children: null };
    obj[0] = analyticsLocations;
    obj = { value: null, openedAt: null, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
    obj[0] = createUserProfileAnalyticsContext;
    obj[1] = openedAt;
    let fetchStartedAt;
    if (tmp4ResultResult != null) {
      fetchStartedAt = tmp4ResultResult.fetchStartedAt;
    }
    obj[2] = fetchStartedAt;
    let fetchEndedAt;
    if (tmp4ResultResult != null) {
      fetchEndedAt = tmp4ResultResult.fetchEndedAt;
    }
    obj[3] = fetchEndedAt;
    let isLoaded;
    if (tmp4ResultResult != null) {
      isLoaded = tmp4ResultResult.isLoaded;
    }
    obj[4] = isLoaded;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.header;
    obj2 = { style: null, children: null };
    obj2[0] = tmp.avatarContainer;
    const obj3 = { user: null, guildId: null, animate: false, size: null, style: null };
    obj3[0] = stateFromStores;
    obj3[1] = guild_id;
    obj3[3] = tmp2(tmp3[15]).AvatarSizes.XLARGE;
    obj3[4] = tmp.avatar;
    const items8 = [closure_12(tmp2(tmp3[15]).Avatar, obj3), ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.avatarIconContainer;
    const obj5 = { size: null, source: null };
    obj5[0] = tmp2(tmp3[15]).Icon.Sizes.MEDIUM;
    if ("block" === speedBumpType) {
      obj5[1] = tmp4(tmp3[29]);
      let tmp28 = obj5;
    } else {
      obj5[1] = tmp4(tmp3[30]);
      tmp28 = obj5;
    }
    obj4[1] = closure_12(tmp2(tmp3[15]).Icon, tmp28);
    items8[1] = closure_12(guild_id, obj4);
    obj2[1] = items8;
    const items9 = [closure_13(guild_id, obj2), , ];
    const obj6 = { style: null, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    obj6[0] = tmp.headerText;
    const intl = tmp2(tmp3[12]).intl;
    obj6[4] = intl.string(tmp2(tmp3[12]).t.b33pLD);
    items9[1] = closure_12(tmp2(tmp3[31]).Text, obj6);
    const obj7 = { style: null, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    obj7[0] = tmp.bodyText;
    const intl2 = tmp2(tmp3[12]).intl;
    const t = tmp2(tmp3[12]).t;
    const obj8 = { username: null };
    obj8[0] = tmp4(tmp3[32]).getName(guild_id, channelId, stateFromStores);
    obj7[3] = intl2.format("block" === speedBumpType ? t["8F+WNz"] : t["/cZp5s"], obj8);
    items9[2] = closure_12(tmp2(tmp3[31]).Text, obj7);
    obj1[1] = items9;
    const items10 = [closure_13(guild_id, obj1), , ];
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.tableContainer;
    const obj10 = { speedBumpType: null };
    obj10[0] = speedBumpType;
    obj9[1] = closure_12(InformationTable, obj10);
    items10[1] = closure_12(guild_id, obj9);
    const obj11 = { style: null, children: null };
    obj11[0] = tmp.button;
    let str2 = "secondary";
    if (isThemeLightResult) {
      str2 = "tertiary";
    }
    const obj12 = { variant: null, size: "lg", text: null, onPress: null };
    obj12[0] = str2;
    function handleShowProfileActionSheet() {
      const merged = Object.assign(createUserProfileAnalyticsContext);
      channelId(onClose[26])({ sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true, location: closure_3 });
    }
    const intl3 = tmp2(tmp3[12]).intl;
    obj12[2] = intl3.string(tmp2(tmp3[12]).t["UJKH/l"]);
    obj12[3] = handleShowProfileActionSheet;
    const items11 = [closure_12(tmp2(tmp3[33]).Button, obj12), ];
    let tmp32Result = null;
    if ("ignore" === speedBumpType) {
      const obj13 = { style: null, accessibilityRole: "button", onPress: null, children: null };
      obj13[0] = tmp.suppress;
      obj13[2] = function onPress() {
        const IgnoreProfileSpeedbumpDisabled = userId(onClose[35]).IgnoreProfileSpeedbumpDisabled;
        IgnoreProfileSpeedbumpDisabled.updateSetting(true);
        const merged = Object.assign(createUserProfileAnalyticsContext);
        channelId(onClose[26])({ sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true, location: closure_3 });
      };
      const obj14 = { variant: "text-sm/normal", color: "text-link", children: null };
      const intl4 = tmp2(tmp3[12]).intl;
      obj14[2] = intl4.string(tmp2(tmp3[12]).t.QbcRCJ);
      obj13[3] = tmp32(tmp2(tmp3[31]).Text, obj14);
      tmp32Result = tmp32(tmp2(tmp3[34]).PressableOpacity, obj13);
    }
    const obj15 = { startExpanded: true, children: null };
    const obj16 = { children: null };
    items11[1] = tmp32Result;
    obj11[1] = items11;
    items10[2] = closure_13(guild_id, obj11);
    obj16[0] = items10;
    obj15[1] = closure_13(tmp2(tmp3[28]).BottomSheetView, obj16);
    obj[5] = closure_12(tmp2(tmp3[27]).BottomSheet, obj15);
    obj[1] = closure_12(tmp2(tmp3[22]).UserProfileAnalyticsProvider, obj);
    return closure_12(tmp2(tmp3[20]).AnalyticsLocationProvider, obj);
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(sourceAnalyticsLocations, 0);
});
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileSpeedBumpActionSheet.tsx");

export default memoResult;