// === Module 7929: HeaderAvatar ===

// Module 7929 (HeaderAvatar)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import profile_customization_ProfileCustomizationUtils from "profile_customization/ProfileCustomizationUtils" /* 7919 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, tmp3;

let obj2;
let closure_3 = ["user", "guildId", "disableStatus", "pendingAvatarSrc", "pendingAvatarDecoration", "style", "statusStyle", "onPress", "size", "animate"];
const View = react_native.View;
const ActivityTypes = Constants.ActivityTypes;
const jsx = Fragment.jsx;
let obj = { avatarStatusStyle: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_11 = createStyles.createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((user, arg1) => {
  let XXLARGE;
  let activities;
  let animate;
  let disableStatus;
  let id;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let pendingAvatarDecoration;
  let pendingAvatarSrc;
  let stateFromStores;
  let statusStyle;
  let style;
  let tmp18;
  let tmp19;
  let tmp22;
  let tmp25;
  let tmp27;
  let tmp8;
  let useReducedMotion;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(53);
  if (cResult[0] !== user) {
    user = user.user;
    dependencyMap = user;
    const guildId = user.guildId;
    _require = guildId;
    ({ disableStatus, pendingAvatarSrc } = user);
    let closure_1 = pendingAvatarSrc;
    ({ pendingAvatarDecoration, style, statusStyle, onPress, size, animate } = user);
    cResult[0] = user;
    cResult[1] = stateFromStores(user, id);
    cResult[2] = disableStatus;
    cResult[3] = guildId;
    cResult[4] = onPress;
    cResult[5] = pendingAvatarDecoration;
    cResult[6] = pendingAvatarSrc;
    cResult[7] = statusStyle;
    cResult[8] = style;
    cResult[9] = size;
    const tmp16 = stateFromStores(user, id);
    class H {
      constructor() {
        member = null;
        if (null != closure_0) {
          tmp3 = closure_7;
          tmp4 = id;
          member = closure_7.getMember(tmp, id);
        }
        return member;
      }
    }
    cResult[10] = animate;
    cResult[11] = user;
    XXLARGE = size;
    tmp8 = pendingAvatarDecoration;
  } else {
    _require = cResult[3];
    tmp8 = cResult[5];
    closure_1 = cResult[6];
    XXLARGE = cResult[9];
    dependencyMap = cResult[11];
  }
  if (undefined === XXLARGE) {
    XXLARGE = tmp(1188).AvatarSizes.XXLARGE;
  }
  closure_11();
  id = tmp13.id;
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class F {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[12] = items;
    cResult[13] = F;
    tmp19 = F;
    tmp18 = items;
  } else {
    tmp18 = cResult[12];
    tmp19 = cResult[13];
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp18, tmp19);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore];
    class F {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[14] = items1;
    tmp22 = items1;
  } else {
    tmp22 = cResult[14];
  }
  if (cResult[15] !== id) {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { /* body not rendered: F138412 */ }) };
        return obj;
      }
    }
    const items2 = [id];
    class F {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[15] = id;
    cResult[16] = E;
    cResult[17] = items2;
    tmp25 = items2;
  } else {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { /* body not rendered: F138412 */ }) };
        return obj;
      }
    }
    tmp25 = cResult[17];
  }
  const tmpResult4 = tmp(504);
  const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp22, E, tmp25);
  ({ isMobileOnline, isVROnline, activities } = stateFromStoresObject);
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { /* body not rendered: F138412 */ }) };
        return obj;
      }
    }
    const items3 = [GuildMemberStore];
    class F {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[18] = items3;
    tmp27 = items3;
  } else {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { /* body not rendered: F138412 */ }) };
        return obj;
      }
    }
  }
  if (cResult[19] === tmp6) {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { /* body not rendered: F138412 */ }) };
        return obj;
      }
    }
    const tmpResult5 = tmp(504);
    const stateFromStores1 = tmpResult5.useStateFromStores(tmp27, H);
    class F {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    if (tmp13 != null) {
      class E {
        constructor() {
          obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { /* body not rendered: F138412 */ }) };
          return obj;
        }
      }
    }
    if (stateFromStores1 != null) {
      class E {
        constructor() {
          obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { /* body not rendered: F138412 */ }) };
          return obj;
        }
      }
    }
    if (cResult[22] === tmp6) {
      class E {
        constructor() {
          obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { /* body not rendered: F138412 */ }) };
          return obj;
        }
      }
    }
    let obj2 = { pendingValue: tmp8, userValue: undefined, guildValue: undefined, guildId: tmp6 };
    const tmpResult6 = tmp(7837);
    const profilePreviewValue = tmpResult6.getProfilePreviewValue(obj2);
    cResult[22] = tmp6;
    cResult[23] = tmp8;
    cResult[24] = undefined;
    cResult[25] = undefined;
    cResult[26] = profilePreviewValue;
  }
  class H {
    constructor() {
      member = null;
      if (null != closure_0) {
        tmp3 = closure_7;
        tmp4 = id;
        member = closure_7.getMember(tmp, id);
      }
      return member;
    }
  }
  cResult[19] = tmp6;
  cResult[20] = id;
  cResult[21] = H;
}) : ((animate, ref) => {
  let activities;
  let avatarDecoration;
  let avatarDecoration1;
  let disableStatus;
  let guildId;
  let isMobileOnline;
  let isVROnline;
  let items4;
  let onPress;
  let pendingAvatarDecoration;
  let pendingAvatarSrc;
  let status;
  let statusStyle;
  let style;
  let tmp11Result;
  let tmp16;
  let tmp44Result;
  let tmp5Result;
  let tmp5Result2;
  let useReducedMotion;
  let user;
  ({ user, guildId } = animate);
  ({ pendingAvatarSrc, style, onPress, size } = animate);
  ({ disableStatus, pendingAvatarDecoration, statusStyle } = animate);
  if (size === undefined) {
    size = guildId(1188).AvatarSizes.XXLARGE;
  }
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(animate, Object.assign({ user: 0, guildId: 0, disableStatus: 0, pendingAvatarSrc: 0, pendingAvatarDecoration: 0, style: 0, statusStyle: 0, onPress: 0, size: 0, animate: 0 }));
  const id = user.id;
  const tmp4 = closure_11();
  let obj = guildId(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [PresenceStore];
  const items2 = [id];
  const obj2 = guildId(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { isMobileOnline: PresenceStore.isMobileOnline(id), isVROnline: PresenceStore.isVROnline(id), status: PresenceStore.getStatus(id), activities: PresenceStore.getActivities(id), customStatusActivity: PresenceStore.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
    return obj;
  }, items2);
  ({ isMobileOnline, isVROnline, status, activities } = stateFromStoresObject);
  const items3 = [GuildMemberStore];
  const obj3 = guildId(504);
  const stateFromStores1 = obj3.useStateFromStores(items3, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, id);
    }
    return member;
  });
  const obj4 = { pendingValue: pendingAvatarDecoration, userValue: avatarDecoration, guildValue: avatarDecoration1, guildId };
  avatarDecoration = undefined;
  const tmp11 = id(7930);
  const getProfilePreviewValue = guildId(7837).getProfilePreviewValue;
  guildId(7837);
  const tmp10 = id;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  avatarDecoration1 = undefined;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  const obj5 = { isMobileOnline, isVROnline, size, status: tmp16, statusStyle: items4, streaming: tmp10(7931)(activities), animate: flag, avatarDecoration: tmp11Result };
  tmp16 = null;
  tmp11Result = tmp11(getProfilePreviewValue(obj4));
  if (!disableStatus) {
    tmp16 = status;
  }
  items4 = [tmp4.avatarStatusStyle, statusStyle];
  if (flag) {
    flag = !stateFromStores;
  }
  if (null != onPress) {
    let obj8;
    const PressableOpacity = guildId(5909).PressableOpacity;
    const merged1 = Object.assign(merged);
    const Avatar = guildId(1188).Avatar;
    if (undefined !== pendingAvatarSrc) {
      const obj7 = { source: tmp5Result.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores) };
      tmp5Result = guildId(7919);
      const merged2 = Object.assign(obj5);
      obj8 = obj7;
    } else {
      obj8 = { user, guildId };
      const merged3 = Object.assign(obj5);
    }
    tmp44Result = <PressableOpacity ref={ref} onPress={onPress} onLongPress={onPress} style={style} activeOpacity={0.8} accessibilityRole="imagebutton"><Avatar {...obj8} /></PressableOpacity>;
  } else {
    let obj11;
    const merged4 = Object.assign(merged);
    const Avatar2 = guildId(1188).Avatar;
    if (undefined !== pendingAvatarSrc) {
      const obj10 = { source: tmp5Result2.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores) };
      tmp5Result2 = guildId(7919);
      const merged5 = Object.assign(obj5);
      obj11 = obj10;
    } else {
      obj11 = { user, guildId };
      const merged6 = Object.assign(obj5);
    }
    tmp44Result = <View ref={ref} style={style} accessibilityRole="image" accessible><Avatar2 {...obj11} /></View>;
  }
  return tmp44Result;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/profile_customization/native/HeaderAvatar.tsx");

export default forwardRefResult;