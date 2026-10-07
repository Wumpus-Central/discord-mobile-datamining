// discord_app/modules/profile_customization/native/HeaderAvatar.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import profile_customization_ProfileCustomizationUtils from "ProfileCustomizationUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_3 = ["user", "guildId", "disableStatus", "pendingAvatarSrc", "pendingAvatarDecoration", "style", "statusStyle", "onPress", "size", "animate"];
const View = fn(17).View;
const ActivityTypes = fn(1085).ActivityTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { avatarStatusStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_11 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/HeaderAvatar.tsx");

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((user, arg1) => {
  const cResult = require("c").c(53);
  if (cResult[0] !== user) {
    user = user.user;
    dependencyMap = user;
    const guildId = user.guildId;
    _require = guildId;
    ({ disableStatus, pendingAvatarSrc } = user);
    closure_1 = pendingAvatarSrc;
    ({ pendingAvatarDecoration, style, statusStyle, onPress, size, animate } = user);
    const tmp16 = stateFromStores(user, id);
    cResult[0] = user;
    cResult[1] = tmp16;
    cResult[2] = disableStatus;
    cResult[3] = guildId;
    cResult[4] = onPress;
    cResult[5] = pendingAvatarDecoration;
    cResult[6] = pendingAvatarSrc;
    cResult[7] = statusStyle;
    cResult[8] = style;
    cResult[9] = size;
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
    let XXLARGE = size;
    let tmp8 = pendingAvatarDecoration;
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
    let tmp19 = F;
    let tmp18 = items;
  } else {
    tmp18 = cResult[12];
    tmp19 = cResult[13];
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp18, tmp19);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore];
    class F {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[14] = items1;
    let tmp22 = items1;
  } else {
    tmp22 = cResult[14];
  }
  if (cResult[15] !== id) {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { ... }) };
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
    let tmp25 = items2;
  } else {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { ... }) };
        return obj;
      }
    }
    tmp25 = cResult[17];
  }
  const tmpResult = require("initialize");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp22, E, tmp25);
  ({ isMobileOnline, isVROnline, activities } = stateFromStoresObject);
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { ... }) };
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
    const tmp27 = items3;
  } else {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { ... }) };
        return obj;
      }
    }
  }
  if (cResult[19] === tmp6) {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { ... }) };
        return obj;
      }
    }
    const stateFromStores1 = tmp(504).useStateFromStores(tmp27, H);
    class F {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    if (tmp13 != null) {
      class E {
        constructor() {
          obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { ... }) };
          return obj;
        }
      }
    }
    if (stateFromStores1 != null) {
      class E {
        constructor() {
          obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { ... }) };
          return obj;
        }
      }
    }
    if (cResult[22] === tmp6) {
      class E {
        constructor() {
          obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, () => { ... }) };
          return obj;
        }
      }
    }
    const tmpResult5 = tmp(504);
    let obj2 = { pendingValue: tmp8, userValue: undefined, guildValue: undefined, guildId: tmp6 };
    const profilePreviewValue = tmp(7848).getProfilePreviewValue(obj2);
    cResult[22] = tmp6;
    cResult[23] = tmp8;
    cResult[24] = undefined;
    cResult[25] = undefined;
    cResult[26] = profilePreviewValue;
    const tmpResult6 = tmp(7848);
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
  const tmpResult4 = require("initialize");
}) : ((animate, ref) => {
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
  const tmp10 = id(7941);
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
  const obj5 = guildId(7848);
  if (!disableStatus) {
    tmp14 = status;
  }
  obj7.status = tmp14;
  const items4 = [tmp4.avatarStatusStyle, statusStyle];
  obj7.statusStyle = items4;
  obj7.streaming = tmp9(7942)(activities);
  if (flag) {
    flag = !stateFromStores;
  }
  obj7.animate = flag;
  obj7.avatarDecoration = tmp10(guildId(7848).getProfilePreviewValue(obj6));
  if (null != onPress) {
    const obj8 = { ref, onPress, onLongPress: onPress, style, activeOpacity: 0.8, accessibilityRole: "imagebutton" };
    const merged1 = Object.assign(merged);
    if (undefined !== pendingAvatarSrc) {
      const obj9 = { source: null };
      obj = obj(7930);
      avatarSource = obj.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
      obj9.source = avatarSource;
      obj7 = Object.assign(obj7);
      let obj10 = obj9;
    } else {
      obj10 = { user, guildId };
      const merged2 = Object.assign(obj7);
    }
    obj8.children = jsx(obj(1188).Avatar, obj10);
    jsx(obj(5916).PressableOpacity, { ref, onPress, onLongPress: onPress, style, activeOpacity: 0.8, accessibilityRole: "imagebutton" });
  } else {
    const obj11 = { ref, style, accessibilityRole: "image", accessible: true };
    const merged3 = Object.assign(merged);
    if (undefined !== pendingAvatarSrc) {
      const obj12 = { source: null };
      const objResult = obj(7930);
      obj12.source = objResult.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
      const merged4 = Object.assign(obj7);
      let obj13 = obj12;
    } else {
      obj13 = { user, guildId };
      const merged5 = Object.assign(obj7);
    }
    obj11.children = jsx(obj(1188).Avatar, obj13);
    return <View ref={ref} style={style} accessibilityRole="image" accessible />;
  }
  const tmp10Result = tmp10(guildId(7848).getProfilePreviewValue(obj6));
}));