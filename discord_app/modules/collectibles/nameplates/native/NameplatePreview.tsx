// === Module 11082: NameplatePreview ===

// Module 11082 (NameplatePreview)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import closure_6 from "trackCommunicationDisabled" /* 1991 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles((arg0) => {
  let num = 0;
  if (arg0) {
    num = ThemesDefault.radii.sm;
  }
  let obj = { container: null, nameplate: null, avatar: null, content: null };
  obj = { borderRadius: num, padding: ThemesDefault.space.PX_8, flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
  obj[0] = obj;
  let num2 = 0;
  if (arg0) {
    num2 = tmp3(709).radii.sm;
  }
  obj[1] = { borderRadius: num2 };
  obj = { borderRadius: tmp3(709).radii.round, marginRight: tmp3(709).space.PX_8 };
  obj[2] = obj;
  obj[3] = { flex: 1, paddingRight: ThemesDefault.space.PX_40 };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/collectibles/nameplates/native/NameplatePreview.tsx");

export const NameplatePreview = function NameplatePreview(aria_hidden) {
  ({ nameplate, nameplateData, user } = aria_hidden);
  let flag = aria_hidden.hasRoundedCorners;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = aria_hidden.animate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const guildId = aria_hidden.guildId;
  ({ pendingDisplayNameStyles, pendingGlobalName } = aria_hidden);
  dependencyMap = undefined;
  let stateFromStores;
  let pendingAvatarDecoration;
  const tmp = callback2(flag);
  dependencyMap = tmp;
  if (null != nameplate) {
    let obj = user(1946);
    nameplateData = obj.getNameplateData(nameplate);
  }
  obj1 = user(8923);
  const avatarDecoration = obj1.useAvatarDecoration(user, guildId);
  pendingAvatarDecoration = guildId(8080)({ guildId }).pendingAvatarDecoration;
  let obj2 = user(586);
  const items = [closure_5];
  stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj3 = user(586);
  const items1 = [closure_6];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = closure_1_6.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  let obj4 = guildId(4322);
  const name = obj4.useName(user);
  if (pendingGlobalName == null) {
    let tmp11 = name;
    if (null != guildId) {
      let nick;
      if (stateFromStores1 != null) {
        nick = stateFromStores1.nick;
      }
      tmp11 = name;
      if (null != nick) {
        let nick1;
        if (stateFromStores1 != null) {
          nick1 = stateFromStores1.nick;
        }
        tmp11 = nick1;
      }
    }
    pendingGlobalName = tmp11;
  }
  let tmp14 = avatarDecoration;
  if (undefined !== pendingAvatarDecoration) {
    tmp14 = pendingAvatarDecoration;
  }
  pendingAvatarDecoration = tmp14;
  obj = { userId: user.id, guildId, pendingDisplayNameStyles };
  const tmp15 = guildId(4748)(obj);
  const items2 = [tmp.avatar, user, guildId, tmp14, stateFromStores];
  obj = { style: tmp.container, "aria-hidden": aria_hidden["aria-hidden"], children: null };
  const memo = stateFromStores.useMemo(() => closure_1_7(user(user[13]).Avatar, { style: user.avatar, user, guildId, size: user(user[13]).AvatarSizes.NORMAL, avatarDecoration: pendingAvatarDecoration, animate: !stateFromStores, autoStatusCutout: true, "aria-hidden": true }), items2);
  obj1 = { nameplate: nameplateData, style: tmp.nameplate, fullOpacity: true, animate: flag2 };
  const items3 = [callback(guildId(8539), obj1), , ];
  obj2 = { style: tmp.avatar, children: memo };
  items3[1] = callback(pendingAvatarDecoration, obj2);
  obj3 = { style: tmp.content, children: null };
  let tmp19Result = null != tmp15;
  if (tmp19Result) {
    obj4 = { userId: null, guildId: null, userName: null, variant: "text-md/semibold", effectDisplayType: null, lineClamp: 1, pendingDisplayNameStyles: null };
    obj4[0] = user.id;
    obj4[1] = guildId;
    obj4[2] = pendingGlobalName;
    obj4[4] = tmp4(8942).EffectDisplayType.STATIC;
    obj4[6] = pendingDisplayNameStyles;
    tmp19Result = tmp19(tmp7(8941), obj4);
    const tmp7Result = tmp7(8941);
  }
  const items4 = [tmp19Result, ];
  tmp19Result = null == tmp15;
  if (tmp19Result) {
    const obj5 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj5[3] = pendingGlobalName;
    tmp19Result = tmp19(tmp4(4474).Text, obj5);
  }
  items4[1] = tmp19Result;
  obj3[1] = items4;
  items3[2] = closure_8(pendingAvatarDecoration, obj3);
  obj[2] = items3;
  return closure_8(pendingAvatarDecoration, obj);
};