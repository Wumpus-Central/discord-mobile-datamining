// === Module 8182: UserProfileSpeedBumpActionSheet ===

// Module 8182 (UserProfileSpeedBumpActionSheet)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UserSettings from "UserSettings" /* 1935 */;
import TableRow from "TableRow" /* 5605 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import UserActionCreators from "UserActionCreators" /* 8181 */;
import _modDef8185 from "module_8185" /* 8185 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function InformationTable(speedBumpType) {
  let items;
  let obj = { icon: _modDef8185, text: null };
  const intl = items(1114).intl;
  obj.text = intl.string(items(1114).t.kcuWva);
  items = [obj, ];
  obj = { icon: _modDef8185, text: null };
  if ("block" === speedBumpType.speedBumpType) {
    const intl3 = tmp2(1114).intl;
    let stringResult = intl3.string(tmp2(1114).t.QxrDY1);
  } else {
    const intl2 = tmp2(1114).intl;
    stringResult = intl2.string(tmp2(1114).t.W6fjkS);
  }
  obj.text = stringResult;
  items[1] = obj;
  obj = {
    hasIcons: true,
    children: items.map((icon, index) => {
      let obj = { start: 0 === index, end: items.length === index, icon: null, label: null };
      obj = { size: native.Icon.Sizes.MEDIUM, source: icon.icon };
      obj.icon = closure_2_12(native.Icon, obj);
      obj.label = icon.text;
      return closure_2_12(TableRow.TableRow, obj, index);
    })
  };
  return closure_12(items(5687).TableRowGroup, obj);
}
const View = fn(17).View;
let UserProfileAnalyticsTypes = fn(8183).UserProfileAnalyticsTypes;
const Constants = fn(1074);
({ AnalyticEvents: c10, EMPTY_STRING_SNOWFLAKE_ID: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let obj = { button: null, tableContainer: null, header: null, bodyText: null, headerText: null, avatar: null, avatarContainer: null, avatarIconContainer: null, suppress: null };
obj = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: 56 };
obj.button = obj;
const createStyles = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj.tableContainer = createStyles;
obj.header = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj.bodyText = { textAlign: "center" };
obj.headerText = { textAlign: "center" };
obj.avatar = { alignSelf: "center" };
let obj2 = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj.avatarContainer = { position: "relative", alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
const rect = { position: "absolute", bottom: -8, right: -8, padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj.avatarIconContainer = rect;
let obj3 = { position: "relative", alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
obj.suppress = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj);
let obj4 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileSpeedBumpActionSheet.tsx");

export default noop.memo(function UserProfileSpeedBumpActionSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  const onClose = userId.onClose;
  ({ location: _slicedToArray, sourceAnalyticsLocations } = userId);
  ({ messageId, roleId, sessionId, openedAt } = userId);
  if (sourceAnalyticsLocations === undefined) {
    sourceAnalyticsLocations = [];
  }
  const speedBumpType = userId.speedBumpType;
  let stateFromStores2;
  closure_7 = undefined;
  let first;
  UserProfileAnalyticsTypes = undefined;
  let analyticsLocations;
  let createUserProfileAnalyticsContext;
  closure_12 = undefined;
  let tmp = closure_14();
  let obj = userId(onClose[16]);
  let obj1 = userId(onClose[18]);
  const items = [first];
  const stateFromStores = obj1.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj2 = userId(onClose[18]);
  const items1 = [stateFromStores2];
  const items2 = [channelId];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  let guild_id;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  let tmp2Result = tmp2(tmp3[18]);
  const items3 = [closure_7];
  stateFromStores2 = tmp2Result.useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = GuildMemberStore.getMember(tmp, userId);
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
  const tmp13 = _slicedToArray(stateFromStores.useState(false), 2);
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
        AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, closure_12);
        closure_9(true);
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
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { value: analyticsLocations, children: null };
    obj = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
    let fetchStartedAt;
    if (tmp4ResultResult != null) {
      fetchStartedAt = tmp4ResultResult.fetchStartedAt;
    }
    obj.fetchStartedAt = fetchStartedAt;
    let fetchEndedAt;
    if (tmp4ResultResult != null) {
      fetchEndedAt = tmp4ResultResult.fetchEndedAt;
    }
    obj.fetchEndedAt = fetchEndedAt;
    let isLoaded;
    if (tmp4ResultResult != null) {
      isLoaded = tmp4ResultResult.isLoaded;
    }
    obj.isLoaded = isLoaded;
    obj1 = { style: tmp.header, children: null };
    obj2 = { style: tmp.avatarContainer, children: null };
    const obj3 = { user: stateFromStores, guildId: guild_id, animate: false, size: tmp2(tmp3[15]).AvatarSizes.XLARGE, style: tmp.avatar };
    const items8 = [closure_12(tmp2(tmp3[15]).Avatar, obj3), ];
    const obj4 = { style: tmp.avatarIconContainer, children: null };
    const obj5 = { size: tmp2(tmp3[15]).Icon.Sizes.MEDIUM, source: null };
    if ("block" === speedBumpType) {
      obj5.source = tmp4(tmp3[29]);
      let tmp28 = obj5;
    } else {
      obj5.source = tmp4(tmp3[30]);
      tmp28 = obj5;
    }
    obj4.children = closure_12(tmp2(tmp3[15]).Icon, tmp28);
    items8[1] = closure_12(guild_id, obj4);
    obj2.children = items8;
    const items9 = [closure_13(guild_id, obj2), , ];
    const obj6 = { style: tmp.headerText, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    const intl = tmp2(tmp3[12]).intl;
    obj6.children = intl.string(tmp2(tmp3[12]).t.b33pLD);
    items9[1] = closure_12(tmp2(tmp3[31]).Text, obj6);
    const obj7 = { style: tmp.bodyText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp2(tmp3[12]).intl;
    const t = tmp2(tmp3[12]).t;
    const obj8 = { username: tmp4(tmp3[32]).getName(guild_id, channelId, stateFromStores) };
    obj7.children = intl2.format("block" === speedBumpType ? t["8F+WNz"] : t["/cZp5s"], obj8);
    items9[2] = closure_12(tmp2(tmp3[31]).Text, obj7);
    obj1.children = items9;
    const items10 = [closure_13(guild_id, obj1), , ];
    const obj9 = { style: tmp.tableContainer, children: null };
    const obj10 = { speedBumpType };
    obj9.children = closure_12(InformationTable, obj10);
    items10[1] = closure_12(guild_id, obj9);
    const obj11 = { style: tmp.button, children: null };
    let str2 = "secondary";
    if (isThemeLightResult) {
      str2 = "tertiary";
    }
    const obj12 = { variant: str2, size: "lg", text: null, onPress: null };
    function handleShowProfileActionSheet() {
      const merged = Object.assign(createUserProfileAnalyticsContext);
      showUserProfileActionSheetDefault({ sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true, location: _location });
    }
    const intl3 = tmp2(tmp3[12]).intl;
    obj12.text = intl3.string(tmp2(tmp3[12]).t["UJKH/l"]);
    obj12.onPress = handleShowProfileActionSheet;
    const items11 = [closure_12(tmp2(tmp3[33]).Button, obj12), ];
    let tmp32Result = null;
    if ("ignore" === speedBumpType) {
      const obj13 = {
        style: tmp.suppress,
        accessibilityRole: "button",
        onPress() {
              const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
              IgnoreProfileSpeedbumpDisabled.updateSetting(true);
              const merged = Object.assign(createUserProfileAnalyticsContext);
              showUserProfileActionSheetDefault({ sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true, location: _location });
            },
        children: null
      };
      const obj14 = { variant: "text-sm/normal", color: "text-link", children: null };
      const intl4 = tmp2(tmp3[12]).intl;
      obj14.children = intl4.string(tmp2(tmp3[12]).t.QbcRCJ);
      obj13.children = tmp32(tmp2(tmp3[31]).Text, obj14);
      tmp32Result = tmp32(tmp2(tmp3[34]).PressableOpacity, obj13);
    }
    const obj15 = { startExpanded: true, children: null };
    const obj16 = { children: null };
    items11[1] = tmp32Result;
    obj11.children = items11;
    items10[2] = closure_13(guild_id, obj11);
    obj16.children = items10;
    obj15.children = closure_13(tmp2(tmp3[28]).BottomSheetView, obj16);
    obj.children = closure_12(tmp2(tmp3[27]).BottomSheet, obj15);
    obj.children = closure_12(tmp2(tmp3[22]).UserProfileAnalyticsProvider, obj);
    return closure_12(tmp2(tmp3[20]).AnalyticsLocationProvider, obj);
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(sourceAnalyticsLocations, 0);
});