// === Module 8366: HeaderAvatar ===

// Module 8366 (HeaderAvatar)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import profile_customization_ProfileCustomizationUtils from "profile_customization/ProfileCustomizationUtils" /* 8357 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import PresenceStore from "PresenceStore" /* 5107 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["user", "guildId", "disableStatus", "pendingAvatarSrc", "pendingAvatarDecoration", "style", "statusStyle", "onPress", "size", "animate", "ref"];
const View = fn(17).View;
const ActivityTypes = fn(1085).ActivityTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { avatarStatusStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/HeaderAvatar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderAvatar(user) {
  const cResult = require("c").c(54);
  if (cResult[0] !== user) {
    user = user.user;
    dependencyMap = user;
    const guildId = user.guildId;
    _require = guildId;
    ({ disableStatus, pendingAvatarSrc } = user);
    closure_1 = pendingAvatarSrc;
    ({ pendingAvatarDecoration, style, statusStyle, onPress, size, animate, ref } = user);
    const tmp17 = stateFromStores(user, id);
    cResult[0] = user;
    cResult[1] = tmp17;
    cResult[2] = disableStatus;
    cResult[3] = guildId;
    cResult[4] = onPress;
    cResult[5] = pendingAvatarDecoration;
    cResult[6] = pendingAvatarSrc;
    cResult[7] = ref;
    cResult[8] = statusStyle;
    cResult[9] = style;
    cResult[10] = size;
    cResult[11] = animate;
    cResult[12] = user;
    let XXLARGE = size;
    let tmp8 = pendingAvatarDecoration;
  } else {
    _require = cResult[3];
    tmp8 = cResult[5];
    closure_1 = cResult[6];
    XXLARGE = cResult[10];
    dependencyMap = cResult[12];
  }
  if (undefined === XXLARGE) {
    XXLARGE = tmp(1200).AvatarSizes.XXLARGE;
  }
  closure_11();
  id = tmp14.id;
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class F {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[13] = items;
    cResult[14] = F;
    let tmp20 = F;
    let tmp19 = items;
  } else {
    tmp19 = cResult[13];
    tmp20 = cResult[14];
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp19, tmp20);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore];
    class F {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[15] = items1;
    let tmp23 = items1;
  } else {
    tmp23 = cResult[15];
  }
  if (cResult[16] !== id) {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
        return obj;
      }
    }
    const items2 = [id];
    class F {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[16] = id;
    cResult[17] = E;
    cResult[18] = items2;
    let tmp26 = items2;
  } else {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
        return obj;
      }
    }
    tmp26 = cResult[18];
  }
  const tmpResult = require("initialize");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp23, E, tmp26);
  ({ isMobileOnline, isVROnline, activities } = stateFromStoresObject);
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
        return obj;
      }
    }
    const items3 = [GuildMemberStore];
    class F {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[19] = items3;
    const tmp28 = items3;
  } else {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
        return obj;
      }
    }
  }
  if (cResult[20] === tmp6) {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
        return obj;
      }
    }
    const stateFromStores1 = tmp(504).useStateFromStores(tmp28, fn);
    class F {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    if (tmp14 != null) {
      class E {
        constructor() {
          obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
          return obj;
        }
      }
    }
    if (stateFromStores1 != null) {
      class E {
        constructor() {
          obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
          return obj;
        }
      }
    }
    if (cResult[23] === tmp6) {
      class E {
        constructor() {
          obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
          return obj;
        }
      }
    }
    const tmpResult5 = tmp(504);
    let obj2 = { pendingValue: tmp8, userValue: undefined, guildValue: undefined, guildId: tmp6 };
    const profilePreviewValue = tmp(8274).getProfilePreviewValue(obj2);
    cResult[23] = tmp6;
    cResult[24] = tmp8;
    cResult[25] = undefined;
    cResult[26] = undefined;
    cResult[27] = profilePreviewValue;
    const tmpResult6 = tmp(8274);
  }
  fn = function w() {
    let member = null;
    if (null != closure_0) {
      member = GuildMemberStore.getMember(tmp, id);
    }
    return member;
  };
  cResult[20] = tmp6;
  cResult[21] = id;
  cResult[22] = fn;
  const tmpResult4 = require("initialize");
}) : (function HeaderAvatar(animate) {
  ({ user, guildId } = animate);
  ({ pendingAvatarSrc, style, onPress, size } = animate);
  ({ disableStatus, pendingAvatarDecoration, statusStyle } = animate);
  if (size === undefined) {
    size = guildId(1200).AvatarSizes.XXLARGE;
  }
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(animate, Object.assign({ user: 0, guildId: 0, disableStatus: 0, pendingAvatarSrc: 0, pendingAvatarDecoration: 0, style: 0, statusStyle: 0, onPress: 0, size: 0, animate: 0, ref: 0 }));
  const id = user.id;
  let obj = guildId;
  let avatarSource = dependencyMap;
  const tmp4 = closure_11();
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
  const tmp10 = id(8367);
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
  const obj5 = guildId(8274);
  if (!disableStatus) {
    tmp14 = status;
  }
  obj7.status = tmp14;
  const items4 = [tmp4.avatarStatusStyle, statusStyle];
  obj7.statusStyle = items4;
  obj7.streaming = tmp9(8368)(activities);
  if (flag) {
    flag = !stateFromStores;
  }
  obj7.animate = flag;
  obj7.avatarDecoration = tmp10(guildId(8274).getProfilePreviewValue(obj6));
  if (null != onPress) {
    const obj8 = { ref, onPress, onLongPress: onPress, style, activeOpacity: 0.8, accessibilityRole: "imagebutton" };
    const merged1 = Object.assign(merged);
    if (undefined !== pendingAvatarSrc) {
      const obj9 = { source: null };
      obj = obj(8357);
      avatarSource = obj.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
      obj9.source = avatarSource;
      obj7 = Object.assign(obj7);
      let obj10 = obj9;
    } else {
      obj10 = { user, guildId };
      const merged2 = Object.assign(obj7);
    }
    obj8.children = jsx(obj(1200).Avatar, obj10);
    jsx(obj(6191).PressableOpacity, { ref, onPress, onLongPress: onPress, style, activeOpacity: 0.8, accessibilityRole: "imagebutton" });
  } else {
    const obj11 = { ref, style, accessibilityRole: "image", accessible: true };
    const merged3 = Object.assign(merged);
    if (undefined !== pendingAvatarSrc) {
      const obj12 = { source: null };
      const objResult = obj(8357);
      obj12.source = objResult.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
      const merged4 = Object.assign(obj7);
      let obj13 = obj12;
    } else {
      obj13 = { user, guildId };
      const merged5 = Object.assign(obj7);
    }
    obj11.children = jsx(obj(1200).Avatar, obj13);
    return <View ref={ref} style={style} accessibilityRole="image" accessible />;
  }
  const tmp10Result = tmp10(guildId(8274).getProfilePreviewValue(obj6));
});