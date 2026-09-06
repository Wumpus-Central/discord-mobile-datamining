// discord_app/modules/profile_customization/native/HeaderAvatar.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";

const require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { avatarStatusStyle: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.avatarStatusStyle = obj;
let closure_9 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/HeaderAvatar.tsx");

export default noop.forwardRef((animate, ref) => {
  ({ user, guildId } = animate);
  ({ pendingAvatarSrc, style, onPress, size } = animate);
  ({ disableStatus, pendingAvatarDecoration, statusStyle } = animate);
  if (size === undefined) {
    size = guildId(1178).AvatarSizes.XXLARGE;
  }
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(
    animate,
    Object.assign({
      user: 0,
      guildId: 0,
      disableStatus: 0,
      pendingAvatarSrc: 0,
      pendingAvatarDecoration: 0,
      style: 0,
      statusStyle: 0,
      onPress: 0,
      size: 0,
      animate: 0,
    }),
  );
  const id = user.id;
  let avatarSource = dependencyMap;
  let obj1 = guildId(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = guildId(504);
  const items1 = [PresenceStore];
  const items2 = [id];
  const stateFromStoresObject = obj2.useStateFromStoresObject(
    items1,
    () => ({
      isMobileOnline: PresenceStore.isMobileOnline(id),
      isVROnline: PresenceStore.isVROnline(id),
      status: PresenceStore.getStatus(id),
      activities: PresenceStore.getActivities(id),
      customStatusActivity: PresenceStore.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS),
    }),
    items2,
  );
  ({ isMobileOnline, isVROnline, status, activities } = stateFromStoresObject);
  let obj3 = guildId(504);
  const items3 = [GuildMemberStore];
  const stateFromStores1 = obj3.useStateFromStores(items3, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, id);
    }
    return member;
  });
  const tmp4 = closure_9();
  const tmp9 = id;
  let obj4 = guildId(8166);
  let obj = { pendingValue: pendingAvatarDecoration, userValue: null, guildValue: null, guildId: null };
  let avatarDecoration;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  obj.userValue = avatarDecoration;
  let avatarDecoration1;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  obj.guildValue = avatarDecoration1;
  obj.guildId = guildId;
  obj = {
    isMobileOnline,
    isVROnline,
    size,
    status: null,
    statusStyle: null,
    streaming: null,
    animate: null,
    avatarDecoration: null,
  };
  let tmp14 = null;
  const tmp10 = id(8258);
  if (!disableStatus) {
    tmp14 = status;
  }
  obj.status = tmp14;
  const items4 = [tmp4.avatarStatusStyle, statusStyle];
  obj.statusStyle = items4;
  obj.streaming = tmp9(8259)(activities);
  if (flag) {
    flag = !stateFromStores;
  }
  obj.animate = flag;
  obj.avatarDecoration = id(8258)(obj4.getProfilePreviewValue(obj));
  if (null != onPress) {
    obj1 = { ref, onPress, onLongPress: onPress, style, activeOpacity: 0.8, accessibilityRole: "imagebutton" };
    const merged1 = Object.assign(merged);
    if (undefined !== pendingAvatarSrc) {
      obj2 = { source: null };
      obj = obj(8247);
      avatarSource = obj.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
      obj2.source = avatarSource;
      obj = Object.assign(obj);
      obj3 = obj2;
    } else {
      obj3 = { user, guildId };
      const merged2 = Object.assign(obj);
    }
    obj1.children = jsx(obj(1178).Avatar, obj3);
    jsx(obj(5123).PressableOpacity, {
      ref,
      onPress,
      onLongPress: onPress,
      style,
      activeOpacity: 0.8,
      accessibilityRole: "imagebutton",
    });
  } else {
    obj4 = { ref, style, accessibilityRole: "image", accessible: true };
    const merged3 = Object.assign(merged);
    if (undefined !== pendingAvatarSrc) {
      const obj5 = { source: null };
      const objResult = obj(8247);
      obj5.source = objResult.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
      const merged4 = Object.assign(obj);
      let obj6 = obj5;
    } else {
      obj6 = { user, guildId };
      const merged5 = Object.assign(obj);
    }
    obj4.children = jsx(obj(1178).Avatar, obj6);
    return <View ref={ref} style={style} accessibilityRole="image" accessible />;
  }
  const tmp10Result = id(8258)(obj4.getProfilePreviewValue(obj));
});
