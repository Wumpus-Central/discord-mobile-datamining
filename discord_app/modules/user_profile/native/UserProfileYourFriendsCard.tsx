// === Module 16025: UserProfileYourFriendsCard ===

// Module 16025 (UserProfileYourFriendsCard)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import recomputeAffinities from "recomputeAffinities" /* 5407 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { RelationshipTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { direction: require("Button").CutoutDirection.RIGHT, inset: -4 };
let closure_12 = Object.freeze(obj);
obj = { flex: 1, flexDirection: "row", alignItems: "center", padding: 16, borderRadius: ThemesDefault.radii.lg };
obj[0] = obj;
obj[1] = { flex: 1 };
obj[2] = { flexDirection: "row", alignItems: "center", marginLeft: "auto", marginRight: 8 };
obj[3] = { flexDirection: "row" };
let closure_13 = createCacheKey.createStyles(obj);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileYourFriendsCard.tsx");

export default function UserProfileYourFriendsCard(arg0) {
  let stateFromStoresArray;
  let stateFromStoresArray1;
  ({ navigateToFriends, style } = arg0);
  const tmp = callback3();
  const _require = tmp;
  const tmp2 = stateFromStoresArray(stateFromStoresArray1.useState([]), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = _require(589);
  let items = [closure_6];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    userAffinities = userAffinities.getUserAffinities();
    return userAffinities.map((item, index) => item.otherUserId);
  });
  const items1 = [closure_7];
  stateFromStoresArray1 = _require(589).useStateFromStoresArray(items1, () => friendIDs.getFriendIDs());
  const obj2 = _require(589);
  const gameRelationshipsByType = _require(12172).useGameRelationshipsByType(RelationshipTypes.FRIEND);
  const effect = stateFromStoresArray1.useEffect(() => {
    const userAffinitiesV2 = lib(9637).fetchUserAffinitiesV2();
  }, []);
  const items2 = [stateFromStoresArray, stateFromStoresArray1, gameRelationshipsByType];
  const effect1 = stateFromStoresArray1.useEffect(() => {
    const obj = first(12);
    const found = first(12).chain(stateFromStoresArray).filter((item, index) => closure_4.includes(item));
    const chainResult = first(12).chain(stateFromStoresArray);
    const mapped = found.take(5).map(closure_1_8.getUser);
    const takeResult = found.take(5);
    let valueResult = mapped.filter(lib(1370).isNotNullish).value();
    if (valueResult.length >= 5) {
      dependencyMap(valueResult);
    } else {
      const tmpResult = first(12);
      const mapped1 = first(12).chain(gameRelationshipsByType).map((item, index) => item.id);
      const chainResult1 = first(12).chain(gameRelationshipsByType);
      const uniqResult = mapped1.uniq();
      const mapped2 = mapped1.uniq().take(5 - valueResult.length).map(closure_1_8.getUser);
      const takeResult1 = mapped1.uniq().take(5 - valueResult.length);
      valueResult = mapped2.filter(lib(1370).isNotNullish).value();
      const items = [];
      HermesBuiltin.arraySpread(valueResult, HermesBuiltin.arraySpread(valueResult, 0));
      dependencyMap(items);
      const iter2 = mapped2.filter(lib(1370).isNotNullish);
    }
    const iter = mapped.filter(lib(1370).isNotNullish);
  }, items2);
  const items3 = [first, , ];
  ({ avatars: arr4[1], facepile: arr4[2] } = tmp);
  const memo = stateFromStoresArray1.useMemo(() => {
    let obj = {
      style: lib.avatars,
      children: first.map((item, index) => {
        let obj = { translateX: 4 * (closure_1.length - 1 - index) };
        const items = [obj];
        obj = { user: item, guildId: "r", size: "ct", cutout: null };
        obj[2] = closure_1_0(closure_1_2[8]).AvatarSizes.XSMALL;
        let tmp3;
        if (index < closure_1.length - 1) {
          tmp3 = closure_1_12;
        }
        obj[3] = tmp3;
        obj[1] = closure_1_10(closure_1_0(closure_1_2[8]).CutoutableAvatarImage, obj);
        return closure_1_10(gameRelationshipsByType, obj, item.id);
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
  const items5 = [callback(_require(4734).Text, obj), memo, callback(_require(6685).ChevronSmallRightIcon, { size: "sm" })];
  obj[5] = items5;
  return callback2(_require(5433).PressableOpacity, obj);
};