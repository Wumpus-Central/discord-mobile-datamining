// === Module 8601: HeaderAvatar ===

// Module 8601 (HeaderAvatar)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import PresenceStore from "PresenceStore" /* 4867 */;

const require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj = { avatarStatusStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/HeaderAvatar.tsx");

export default noop.forwardRef((animate, ref) => {
  ({ user, guildId } = animate);
  ({ pendingAvatarSrc, style, onPress, size } = animate);
  ({ disableStatus, pendingAvatarDecoration, statusStyle } = animate);
  if (size === undefined) {
    size = guildId(1177).AvatarSizes.XXLARGE;
  }
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(animate, Object.assign({ user: 0, guildId: 0, disableStatus: 0, pendingAvatarSrc: 0, pendingAvatarDecoration: 0, style: 0, statusStyle: 0, onPress: 0, size: 0, animate: 0 }));
  const id = user.id;
  let obj = guildId;
  let avatarSource = dependencyMap;
  const tmp4 = closure_9();
  const items = [AccessibilityStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = guildId(504);
  const items1 = [PresenceStore];
  const items2 = [id];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(items1, () => ({ isMobileOnline: PresenceStore.isMobileOnline(id), isVROnline: PresenceStore.isVROnline(id), status: PresenceStore.getStatus(id), activities: PresenceStore.getActivities(id), customStatusActivity: PresenceStore.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) }), items2);
  ({ isMobileOnline, isVROnline, status, activities } = stateFromStoresObject);
  const obj3 = guildId(504);
  const items3 = [GuildMemberStore];
  const stateFromStores1 = guildId(504).useStateFromStores(items3, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, id);
    }
    return member;
  });
  const obj4 = guildId(504);
  const tmp9 = id;
  const tmp10 = id(8602);
  const obj6 = { pendingValue: pendingAvatarDecoration, userValue: null, guildValue: null, guildId: null };
  let avatarDecoration;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  obj6.userValue = avatarDecoration;
  let avatarDecoration1;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  obj6.guildValue = avatarDecoration1;
  obj6.guildId = guildId;
  let obj7 = { isMobileOnline, isVROnline, size, status: null, statusStyle: null, streaming: null, animate: null, avatarDecoration: null };
  let tmp14 = null;
  const obj5 = guildId(8510);
  if (!disableStatus) {
    tmp14 = status;
  }
  obj7.status = tmp14;
  const items4 = [tmp4.avatarStatusStyle, statusStyle];
  obj7.statusStyle = items4;
  obj7.streaming = tmp9(8603)(activities);
  if (flag) {
    flag = !stateFromStores;
  }
  obj7.animate = flag;
  obj7.avatarDecoration = tmp10(guildId(8510).getProfilePreviewValue(obj6));
  if (null != onPress) {
    const obj8 = { ref, onPress, onLongPress: onPress, style, activeOpacity: 0.8, accessibilityRole: "imagebutton" };
    const merged1 = Object.assign(merged);
    if (undefined !== pendingAvatarSrc) {
      const obj9 = { source: null };
      obj = obj(8591);
      avatarSource = obj.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
      obj9.source = avatarSource;
      obj7 = Object.assign(obj7);
      let obj10 = obj9;
    } else {
      obj10 = { user, guildId };
      const merged2 = Object.assign(obj7);
    }
    obj8.children = jsx(obj(1177).Avatar, obj10);
    jsx(obj(5425).PressableOpacity, { ref, onPress, onLongPress: onPress, style, activeOpacity: 0.8, accessibilityRole: "imagebutton" });
  } else {
    const obj11 = { ref, style, accessibilityRole: "image", accessible: true };
    const merged3 = Object.assign(merged);
    if (undefined !== pendingAvatarSrc) {
      const obj12 = { source: null };
      const objResult = obj(8591);
      obj12.source = objResult.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
      const merged4 = Object.assign(obj7);
      let obj13 = obj12;
    } else {
      obj13 = { user, guildId };
      const merged5 = Object.assign(obj7);
    }
    obj11.children = jsx(obj(1177).Avatar, obj13);
    return <View ref={ref} style={style} accessibilityRole="image" accessible />;
  }
  const tmp10Result = tmp10(guildId(8510).getProfilePreviewValue(obj6));
});