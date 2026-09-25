// === Module 7620: UserProfileSpeedBumpActionSheet ===

// Module 7620 (UserProfileSpeedBumpActionSheet)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import UserSettings from "UserSettings" /* 2020 */;
import TableRow from "TableRow" /* 5912 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7617 */;
import UserActionCreators from "UserActionCreators" /* 7619 */;
import _modDef7623 from "module_7623" /* 7623 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildMemberStore from "GuildMemberStore" /* 2107 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function InformationTable(speedBumpType) {
  let items;
  let obj = { icon: _modDef7623, text: null };
  const intl = items(1115).intl;
  obj.text = intl.string(items(1115).t.kcuWva);
  items = [obj, ];
  const obj2 = { icon: _modDef7623, text: null };
  if ("block" === speedBumpType.speedBumpType) {
    const intl3 = tmp2(1115).intl;
    let stringResult = intl3.string(tmp2(1115).t.QxrDY1);
  } else {
    const intl2 = tmp2(1115).intl;
    stringResult = intl2.string(tmp2(1115).t.W6fjkS);
  }
  obj2.text = stringResult;
  items[1] = obj2;
  return closure_12(items(5994).TableRowGroup, {
    hasIcons: true,
    children: items.map((icon, index) => {
      const obj = { start: 0 === index, end: items.length === index, icon: closure_2_12(native.Icon, { size: native.Icon.Sizes.MEDIUM, source: icon.icon }), label: icon.text };
      return closure_2_12(TableRow.TableRow, obj, index);
    })
  });
}
const View = fn(17).View;
const UserProfileAnalyticsTypes = fn(7621).UserProfileAnalyticsTypes;
const Constants = fn(1074);
({ AnalyticEvents: c10, EMPTY_STRING_SNOWFLAKE_ID: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4829);
let obj = { button: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: 56 }, tableContainer: null, header: null, bodyText: null, headerText: null, avatar: null, avatarContainer: null, avatarIconContainer: null, suppress: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: 56 };
obj.tableContainer = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj.header = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj.bodyText = { textAlign: "center" };
obj.headerText = { textAlign: "center" };
obj.avatar = { alignSelf: "center" };
let obj5 = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj.avatarContainer = { position: "relative", alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
const rect = { position: "absolute", bottom: -8, right: -8, padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj.avatarIconContainer = rect;
let obj6 = { position: "relative", alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
obj.suppress = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj);
let obj7 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileSpeedBumpActionSheet.tsx");

export default noop.memo(function UserProfileSpeedBumpActionSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ localUser, onClose } = userId);
  ({ location: _slicedToArray, sourceAnalyticsLocations } = userId);
  ({ messageId, roleId, sessionId, openedAt } = userId);
  if (sourceAnalyticsLocations === undefined) {
    sourceAnalyticsLocations = [];
  }
  const speedBumpType = userId.speedBumpType;
  localUser = undefined;
  let guild_id;
  let stateFromStores2;
  closure_8 = undefined;
  first = undefined;
  closure_10 = undefined;
  let analyticsLocations;
  let createUserProfileAnalyticsContext;
  closure_13 = undefined;
  let tmp = closure_14();
  let obj = userId(onClose[16]);
  const isThemeLightResult = userId(onClose[16]).isThemeLight(channelId(onClose[17])());
  const items = [closure_8];
  const stateFromStores = userId(onClose[18]).useStateFromStores(items, () => UserStore.getUser(userId));
  let tmp7 = stateFromStores;
  if (stateFromStores == null) {
    let id;
    if (localUser != null) {
      id = localUser.id;
    }
    let tmp9;
    if (id === userId) {
      tmp9 = localUser;
    }
    tmp7 = tmp9;
  }
  localUser = tmp7;
  const obj2 = userId(onClose[18]);
  const items1 = [guild_id];
  const items2 = [channelId];
  const stateFromStores1 = userId(onClose[18]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  guild_id = undefined;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  const tmp2Result = userId(onClose[18]);
  const items3 = [stateFromStores2];
  stateFromStores2 = userId(onClose[18]).useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = GuildMemberStore.getMember(tmp, userId);
    }
    return member;
  });
  let id1;
  const tmp2Result3 = userId(onClose[18]);
  if (tmp7 != null) {
    id1 = tmp7.id;
  }
  if (id1 == null) {
    id1 = analyticsLocations;
  }
  const tmp4ResultResult = channelId(onClose[19])(id1, guild_id);
  closure_8 = tmp4ResultResult;
  [first, closure_10] = stateFromStores.useState(false);
  const items4 = [];
  const tmp4Result = channelId(onClose[19]);
  const tmp4Result3 = channelId(onClose[20]);
  items4[HermesBuiltin.arraySpread(sourceAnalyticsLocations, 0)] = channelId(onClose[21]).IGNORED_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp4Result3(items4).analyticsLocations;
  const arraySpreadResult = HermesBuiltin.arraySpread(sourceAnalyticsLocations, 0);
  createUserProfileAnalyticsContext = userId(onClose[22]).useCreateUserProfileAnalyticsContext({ layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, channelId, messageId, roleId });
  const tmp21 = channelId(onClose[23])({ userId, user: tmp7, channelId, guildId: guild_id, displayProfile: tmp4ResultResult, guildMember: stateFromStores2, type: first.IGNORED_USER_SHEET });
  closure_13 = tmp21;
  const items5 = [tmp21, tmp4ResultResult, guild_id, first, stateFromStores2];
  const effect = stateFromStores.useEffect(() => {
    let tmp = first;
    if (!first) {
      tmp = null == closure_8;
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
        AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, closure_13);
        closure_10(true);
      }
    }
  }, items5);
  const items6 = [onClose];
  const effect1 = stateFromStores.useEffect(() => () => {
    if (onClose != null) {
      tmp();
    }
  }, items6);
  const items7 = [stateFromStores, userId];
  const effect2 = stateFromStores.useEffect(() => {
    if (null == stateFromStores) {
      const user = UserActionCreators.getUser(userId);
    }
  }, items7);
  if (null == tmp7) {
    return null;
  } else {
    const obj3 = { value: analyticsLocations, children: null };
    const obj4 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
    let fetchStartedAt;
    if (tmp4ResultResult != null) {
      fetchStartedAt = tmp4ResultResult.fetchStartedAt;
    }
    obj4.fetchStartedAt = fetchStartedAt;
    let fetchEndedAt;
    if (tmp4ResultResult != null) {
      fetchEndedAt = tmp4ResultResult.fetchEndedAt;
    }
    obj4.fetchEndedAt = fetchEndedAt;
    let isLoaded;
    if (tmp4ResultResult != null) {
      isLoaded = tmp4ResultResult.isLoaded;
    }
    obj4.isLoaded = isLoaded;
    const obj5 = { style: tmp.header, children: null };
    const obj6 = { style: tmp.avatarContainer, children: null };
    const obj7 = { user: tmp7, guildId: guild_id, animate: false, size: tmp2(onClose[15]).AvatarSizes.XLARGE, style: tmp.avatar };
    const items8 = [createUserProfileAnalyticsContext(tmp2(onClose[15]).Avatar, obj7), ];
    const obj8 = { style: tmp.avatarIconContainer, children: null };
    const obj9 = { size: tmp2(onClose[15]).Icon.Sizes.MEDIUM, source: null };
    if ("block" === speedBumpType) {
      obj9.source = tmp4(onClose[29]);
      let tmp31 = obj9;
    } else {
      obj9.source = tmp4(onClose[30]);
      tmp31 = obj9;
    }
    obj8.children = createUserProfileAnalyticsContext(tmp2(onClose[15]).Icon, tmp31);
    items8[1] = createUserProfileAnalyticsContext(localUser, obj8);
    obj6.children = items8;
    const items9 = [closure_13(localUser, obj6), , ];
    const obj10 = { style: tmp.headerText, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    const intl = tmp2(onClose[12]).intl;
    obj10.children = intl.string(tmp2(onClose[12]).t.b33pLD);
    items9[1] = createUserProfileAnalyticsContext(tmp2(onClose[31]).Text, obj10);
    const obj11 = { style: tmp.bodyText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp2(onClose[12]).intl;
    const t = tmp2(onClose[12]).t;
    const obj12 = { username: tmp4(onClose[32]).getName(guild_id, channelId, tmp7) };
    obj11.children = intl2.format("block" === speedBumpType ? t["8F+WNz"] : t["/cZp5s"], obj12);
    items9[2] = createUserProfileAnalyticsContext(tmp2(onClose[31]).Text, obj11);
    obj5.children = items9;
    const items10 = [closure_13(localUser, obj5), , ];
    const obj13 = { style: tmp.tableContainer, children: null };
    const obj14 = { speedBumpType };
    obj13.children = createUserProfileAnalyticsContext(InformationTable, obj14);
    items10[1] = createUserProfileAnalyticsContext(localUser, obj13);
    const obj15 = { style: tmp.button, children: null };
    let str2 = "secondary";
    if (isThemeLightResult) {
      str2 = "tertiary";
    }
    const obj16 = { variant: str2, size: "lg", text: null, onPress: null };
    function handleShowProfileActionSheet() {
      const merged = Object.assign(createUserProfileAnalyticsContext);
      showUserProfileActionSheetDefault({ sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true, location: _location, localUser });
    }
    const intl3 = tmp2(onClose[12]).intl;
    obj16.text = intl3.string(tmp2(onClose[12]).t["UJKH/l"]);
    obj16.onPress = handleShowProfileActionSheet;
    const items11 = [createUserProfileAnalyticsContext(tmp2(onClose[33]).Button, obj16), ];
    let tmp35Result = null;
    if ("ignore" === speedBumpType) {
      const obj17 = {
        style: tmp.suppress,
        accessibilityRole: "button",
        onPress() {
              const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
              IgnoreProfileSpeedbumpDisabled.updateSetting(true);
              const merged = Object.assign(createUserProfileAnalyticsContext);
              showUserProfileActionSheetDefault({ sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true, location: _location, localUser });
            },
        children: null
      };
      const obj18 = { variant: "text-sm/normal", color: "text-link", children: null };
      const intl4 = tmp2(onClose[12]).intl;
      obj18.children = intl4.string(tmp2(onClose[12]).t.QbcRCJ);
      obj17.children = tmp35(tmp2(onClose[31]).Text, obj18);
      tmp35Result = tmp35(tmp2(onClose[34]).PressableOpacity, obj17);
    }
    const obj19 = { startExpanded: true, children: null };
    const obj20 = { children: null };
    items11[1] = tmp35Result;
    obj15.children = items11;
    items10[2] = closure_13(localUser, obj15);
    obj20.children = items10;
    obj19.children = closure_13(tmp2(onClose[28]).BottomSheetView, obj20);
    obj4.children = createUserProfileAnalyticsContext(tmp2(onClose[27]).BottomSheet, obj19);
    obj3.children = createUserProfileAnalyticsContext(tmp2(onClose[22]).UserProfileAnalyticsProvider, obj4);
    return createUserProfileAnalyticsContext(tmp2(onClose[20]).AnalyticsLocationProvider, obj3);
  }
  const tmp2Result4 = userId(onClose[22]);
});