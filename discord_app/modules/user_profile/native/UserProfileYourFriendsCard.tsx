// discord_app/modules/user_profile/native/UserProfileYourFriendsCard.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserAffinitiesV2Store from "../../user_affinities/UserAffinitiesV2Store.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let closure_12 = Object.freeze({ direction: fn(1176).CutoutDirection.RIGHT, inset: -4 });
const createStyles = fn(4636);
const obj3 = { pressable: null, label: null, facepile: null, avatars: null };
let obj = { direction: fn(1176).CutoutDirection.RIGHT, inset: -4 };
obj3.pressable = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  padding: 16,
  borderRadius: nativeDefault.radii.lg,
};
obj3.label = { flex: 1 };
obj3.facepile = { flexDirection: "row", alignItems: "center", marginLeft: "auto", marginRight: 8 };
obj3.avatars = { flexDirection: "row" };
let closure_13 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileYourFriendsCard.tsx");

export default function UserProfileYourFriendsCard(arg0) {
  let stateFromStoresArray;
  let stateFromStoresArray1;
  ({ navigateToFriends, style } = arg0);
  const tmp = closure_13();
  _require = tmp;
  const tmp2 = stateFromStoresArray(stateFromStoresArray1.useState([]), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let items = [UserAffinitiesV2Store];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    userAffinities = userAffinities.getUserAffinities();
    return userAffinities.map((otherUserId) => otherUserId.otherUserId);
  });
  let obj = require("initialize");
  const items1 = [RelationshipStore];
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items1, () => friendIDs.getFriendIDs());
  let obj2 = require("initialize");
  const gameRelationshipsByType = require("GameRelationshipStoreHooks").useGameRelationshipsByType(
    RelationshipTypes.FRIEND,
  );
  const effect = stateFromStoresArray1.useEffect(() => {
    const userAffinitiesV2 = closure_0(9978).fetchUserAffinitiesV2();
  }, []);
  const items2 = [stateFromStoresArray, stateFromStoresArray1, gameRelationshipsByType];
  const effect1 = stateFromStoresArray1.useEffect(() => {
    const found = _modDef12.chain(stateFromStoresArray).filter((item) => stateFromStoresArray1.includes(item));
    const chainResult = _modDef12.chain(stateFromStoresArray);
    const mapped = found.take(5).map(UserStore.getUser);
    const takeResult = found.take(5);
    const valueResult = mapped.filter(GlobalUtils.isNotNullish).value();
    if (valueResult.length >= 5) {
      dependencyMap(valueResult);
    } else {
      const tmpResult = _modDef12;
      const mapped1 = _modDef12.chain(gameRelationshipsByType).map((id) => id.id);
      const chainResult1 = _modDef12.chain(gameRelationshipsByType);
      const uniqResult = mapped1.uniq();
      const mapped2 = mapped1
        .uniq()
        .take(5 - valueResult.length)
        .map(UserStore.getUser);
      const takeResult1 = mapped1.uniq().take(5 - valueResult.length);
      const valueResult2 = mapped2.filter(GlobalUtils.isNotNullish).value();
      const items = [];
      HermesBuiltin.arraySpread(valueResult2, HermesBuiltin.arraySpread(valueResult, 0));
      dependencyMap(items);
      const iter2 = mapped2.filter(GlobalUtils.isNotNullish);
    }
    const iter = mapped.filter(GlobalUtils.isNotNullish);
  }, items2);
  const items3 = [first, ,];
  ({ avatars: arr4[1], facepile: arr4[2] } = tmp);
  const memo = stateFromStoresArray1.useMemo(() => {
    let obj = {
      style: closure_0.facepile,
      children: closure_2_10(View, {
        style: closure_0.avatars,
        children: first.map((user, index) => {
          const obj = { style: null, children: null };
          const obj2 = { transform: null };
          const items = [{ translateX: 4 * (first.length - 1 - index) }];
          obj2.transform = items;
          obj.style = obj2;
          const obj4 = { user, guildId: "r", size: closure_0(1176).AvatarSizes.XSMALL, cutout: null };
          let tmp3;
          if (index < first.length - 1) {
            tmp3 = closure_2_12;
          }
          obj4.cutout = tmp3;
          obj.children = closure_2_10(closure_0(1176).CutoutableAvatarImage, obj4);
          return closure_2_10(gameRelationshipsByType, obj, user.id);
        }),
      }),
    };
    return closure_2_10(View, obj);
  }, items3);
  let obj4 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    onPress: null,
    style: null,
    activeOpacity: 0.8,
    children: null,
  };
  const intl = require("util").intl;
  obj4.accessibilityLabel = intl.string(require("util").t.TdEu5X);
  obj4.onPress = navigateToFriends;
  const items4 = [style, tmp.pressable];
  obj4.style = items4;
  const obj5 = {
    accessibilityRole: "header",
    variant: "text-sm/semibold",
    color: "text-default",
    style: tmp.label,
    children: null,
  };
  const intl2 = require("util").intl;
  obj5.children = intl2.string(require("util").t.TdEu5X);
  const items5 = [
    closure_10(require("Text/Text").Text, obj5),
    memo,
    closure_10(require("ChevronSmallRightIcon").ChevronSmallRightIcon, { size: "sm" }),
  ];
  obj4.children = items5;
  return closure_11(require("Pressables").PressableOpacity, obj4);
}
