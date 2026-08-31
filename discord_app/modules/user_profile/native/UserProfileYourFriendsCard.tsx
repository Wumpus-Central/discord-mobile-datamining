// === Module 16353: UserProfileYourFriendsCard ===

// Module 16353 (UserProfileYourFriendsCard)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "recomputeAffinities" /* 7372 */;
import closure_7 from "markAllUserIdListsStale" /* 4100 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import { RelationshipTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { direction: require("Button").CutoutDirection.RIGHT, inset: -4 };
let closure_12 = Object.freeze(obj);
obj = { pressable: null, label: null, facepile: null, avatars: null };
obj = { flex: 1, flexDirection: "row", alignItems: "center", padding: 16, borderRadius: ThemesDefault.radii.lg };
obj[0] = obj;
obj[1] = { flex: 1 };
obj[2] = { flexDirection: "row", alignItems: "center", marginLeft: "auto", marginRight: 8 };
obj[3] = { flexDirection: "row" };
let closure_13 = createCacheKey.createStyles(obj);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileYourFriendsCard.tsx");

export default function UserProfileYourFriendsCard(arg0) {
  let _require;
  let first;
  dependencyMap = undefined;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let gameRelationshipsByType;
  ({ navigateToFriends, style } = arg0);
  let tmp = callback3();
  _require = tmp;
  const tmp2 = stateFromStoresArray(stateFromStoresArray1.useState([]), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = _require(589);
  let items = [closure_6];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    userAffinities = userAffinities.getUserAffinities();
    return userAffinities.map((otherUserId) => otherUserId.otherUserId);
  });
  const items1 = [closure_7];
  stateFromStoresArray1 = _require(589).useStateFromStoresArray(items1, () => friendIDs.getFriendIDs());
  const obj2 = _require(589);
  gameRelationshipsByType = _require(12461).useGameRelationshipsByType(RelationshipTypes.FRIEND);
  const effect = stateFromStoresArray1.useEffect(() => {
    const userAffinitiesV2 = lib(9900).fetchUserAffinitiesV2();
  }, []);
  const items2 = [stateFromStoresArray, stateFromStoresArray1, gameRelationshipsByType];
  const effect1 = stateFromStoresArray1.useEffect(() => {
    const obj = first(12);
    const tmp = first;
    const found = first(12).chain(stateFromStoresArray).filter((arg0) => closure_4.includes(arg0));
    const chainResult = first(12).chain(stateFromStoresArray);
    const mapped = found.take(5).map(closure_1_8.getUser);
    const takeResult = found.take(5);
    const tmp3 = closure_1_8;
    const tmp4 = lib;
    let valueResult = mapped.filter(lib(1471).isNotNullish).value();
    if (valueResult.length >= 5) {
      dependencyMap(valueResult);
    } else {
      const tmpResult = tmp(12);
      const mapped1 = tmp(12).chain(gameRelationshipsByType).map((id) => id.id);
      const chainResult1 = tmp(12).chain(gameRelationshipsByType);
      const uniqResult = mapped1.uniq();
      const mapped2 = mapped1.uniq().take(5 - valueResult.length).map(tmp3.getUser);
      const takeResult1 = mapped1.uniq().take(5 - valueResult.length);
      valueResult = mapped2.filter(tmp4(1471).isNotNullish).value();
      const items = [];
      HermesBuiltin.arraySpread(valueResult, HermesBuiltin.arraySpread(valueResult, 0));
      dependencyMap(items);
      const iter2 = mapped2.filter(tmp4(1471).isNotNullish);
    }
  }, items2);
  const items3 = [first, , ];
  ({ avatars: arr4[1], facepile: arr4[2] } = tmp);
  const memo = stateFromStoresArray1.useMemo(() => {
    let obj = { style: lib.facepile, children: null };
    obj = {
      style: lib.avatars,
      children: first.map((id) => {
        let obj = { style: { transform: items }, children: null };
        obj = { translateX: 4 * (closure_1.length - 1 - arg1) };
        items = [obj];
        obj = { user: id, guildId: "r", size: "Object", cutout: null };
        obj[2] = closure_1_0(closure_1_2[8]).AvatarSizes.XSMALL;
        let tmp3;
        if (arg1 < closure_1.length - 1) {
          tmp3 = closure_1_12;
        }
        obj[3] = tmp3;
        obj[1] = closure_1_10(closure_1_0(closure_1_2[8]).CutoutableAvatarImage, obj);
        return closure_1_10(closure_1_5, obj, id.id);
      })
    };
    obj[1] = closure_1_10(gameRelationshipsByType, obj);
    return closure_1_10(gameRelationshipsByType, obj);
  }, items3);
  obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, activeOpacity: 0.8, children: null };
  const intl = _require(1236).intl;
  obj[1] = intl.string(_require(1236).t.TdEu5X);
  obj[2] = navigateToFriends;
  const items4 = [style, tmp.pressable];
  obj[3] = items4;
  obj = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", style: tmp.label, children: null };
  const intl2 = _require(1236).intl;
  obj[4] = intl2.string(_require(1236).t.TdEu5X);
  const items5 = [callback(_require(4444).Text, obj), memo, callback(_require(5971).ChevronSmallRightIcon, { size: "sm" })];
  obj[5] = items5;
  return callback2(_require(5036).PressableOpacity, obj);
};