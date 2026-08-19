// discord_app/modules/profile_customization/native/HeaderAvatar.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import trackCommunicationDisabled from "../../../stores/GuildMemberStore.tsx";
import sortActivity from "../../../stores/PresenceStore.tsx";
import { ActivityTypes } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

const require = fn;
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[0] = obj;
let closure_9 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((animate) => {
  ({ user, guildId } = animate);
  ({ pendingAvatarSrc, style, onPress, size } = animate);
  ({ disableStatus, pendingAvatarDecoration, statusStyle } = animate);
  if (size === undefined) {
    size = guildId(1297).AvatarSizes.XXLARGE;
  }
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(animate, Object.create(null));
  const id = user.id;
  let avatarSource = dependencyMap;
  obj1 = guildId(589);
  const items = [closure_4];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = guildId(589);
  const items1 = [closure_6];
  const items2 = [id];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ isMobileOnline: closure_1_6.isMobileOnline(id), isVROnline: closure_1_6.isVROnline(id), status: closure_1_6.getStatus(id), activities: closure_1_6.getActivities(id), customStatusActivity: closure_1_6.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) }), items2);
  ({ isMobileOnline, isVROnline, status, activities } = stateFromStoresObject);
  let obj3 = guildId(589);
  const items3 = [closure_5];
  const stateFromStores1 = obj3.useStateFromStores(items3, () => {
    let member = null;
    if (null != guildId) {
      member = closure_1_5.getMember(tmp, id);
    }
    return member;
  });
  const tmp4 = callback();
  const tmp9 = id;
  let obj4 = guildId(8376);
  let obj = { pendingValue: pendingAvatarDecoration, userValue: null, guildValue: null, guildId: null };
  let avatarDecoration;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  obj[1] = avatarDecoration;
  let avatarDecoration1;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  obj[2] = avatarDecoration1;
  obj[3] = guildId;
  obj = { isMobileOnline, isVROnline, size, status: null, statusStyle: null, streaming: null, animate: null, avatarDecoration: null };
  let tmp14 = null;
  const tmp10 = id(8410);
  if (!disableStatus) {
    tmp14 = status;
  }
  obj[3] = tmp14;
  const items4 = [tmp4.avatarStatusStyle, statusStyle];
  obj[4] = items4;
  obj[5] = tmp9(8411)(activities);
  if (flag) {
    flag = !stateFromStores;
  }
  obj[6] = flag;
  obj[7] = id(8410)(obj4.getProfilePreviewValue(obj));
  if (null != onPress) {
    obj1 = { ref: null, onPress: null, onLongPress: null, style: null, activeOpacity: 0.8, accessibilityRole: "imagebutton" };
    obj1[0] = arg1;
    obj1[1] = onPress;
    obj1[2] = onPress;
    obj1[3] = style;
    const merged1 = Object.assign(merged);
    if (undefined !== pendingAvatarSrc) {
      obj2 = { source: null };
      obj = obj(8412);
      avatarSource = obj.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
      obj2[0] = avatarSource;
      obj = Object.assign(obj);
      obj3 = obj2;
    } else {
      obj3 = { user: null, guildId: null };
      obj3[0] = user;
      obj3[1] = guildId;
      const merged2 = Object.assign(obj);
    }
    obj1.children = jsx(obj(1297).Avatar, obj3);
    jsx(obj(5433).PressableOpacity, { ref: null, onPress: null, onLongPress: null, style: null, activeOpacity: 0.8, accessibilityRole: "imagebutton" });
  } else {
    obj4 = { ref: null, style: null, accessibilityRole: "image", accessible: true };
    obj4[0] = arg1;
    obj4[1] = style;
    const merged3 = Object.assign(merged);
    if (undefined !== pendingAvatarSrc) {
      const obj5 = { source: null };
      const objResult = obj(8412);
      obj5[0] = objResult.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
      const merged4 = Object.assign(obj);
      let obj6 = obj5;
    } else {
      obj6 = { user: null, guildId: null };
      obj6[0] = user;
      obj6[1] = guildId;
      const merged5 = Object.assign(obj);
    }
    obj4.children = jsx(obj(1297).Avatar, obj6);
    return <View ref={null} style={null} accessibilityRole="image" accessible />;
  }
  const tmp10Result = id(8410)(obj4.getProfilePreviewValue(obj));
});
const result = require("obj132").fileFinishedImporting("modules/profile_customization/native/HeaderAvatar.tsx");

export default forwardRefResult;