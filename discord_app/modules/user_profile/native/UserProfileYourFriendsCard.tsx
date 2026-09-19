// discord_app/modules/user_profile/native/UserProfileYourFriendsCard.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
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
const jsx = fn(21).jsx;
let closure_11 = Object.freeze({ direction: fn(1177).CutoutDirection.RIGHT, inset: -4 });
const createStyles = fn(4756);
let closure_12 = createStyles.createStyles({
  facepile: { flexDirection: "row", alignItems: "center" },
  avatars: { flexDirection: "row" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileYourFriendsCard.tsx");

export default function UserProfileYourFriendsCard(navigateToFriends) {
  let stateFromStoresArray;
  let stateFromStoresArray1;
  const tmp = closure_12();
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
    const userAffinitiesV2 = closure_0(10103).fetchUserAffinitiesV2();
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
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: (
        <View style={closure_0.avatars}>
          {first.map((user, index) => {
            const obj = { style: null, children: null };
            const obj2 = { transform: null };
            const items = [{ translateX: 4 * (first.length - 1 - index) }];
            obj2.transform = items;
            obj.style = obj2;
            const obj4 = { user, guildId: "r", size: closure_0(1177).AvatarSizes.XSMALL, cutout: null };
            let tmp3;
            if (index < first.length - 1) {
              tmp3 = closure_2_11;
            }
            obj4.cutout = tmp3;
            obj.children = jsx(closure_0(1177).CutoutableAvatarImage, {
              user,
              guildId: "r",
              size: closure_0(1177).AvatarSizes.XSMALL,
              cutout: null,
            });
            return (
              <gameRelationshipsByType key={user.id} style={null}>
                {null}
              </gameRelationshipsByType>
            );
          })}
        </View>
      ),
    };
    return (
      <View style={closure_0.facepile} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        <View style={closure_0.avatars}>
          {first.map((user, index) => {
            const obj = { style: null, children: null };
            const obj2 = { transform: null };
            const items = [{ translateX: 4 * (first.length - 1 - index) }];
            obj2.transform = items;
            obj.style = obj2;
            const obj4 = { user, guildId: "r", size: closure_0(1177).AvatarSizes.XSMALL, cutout: null };
            let tmp3;
            if (index < first.length - 1) {
              tmp3 = closure_2_11;
            }
            obj4.cutout = tmp3;
            obj.children = jsx(closure_0(1177).CutoutableAvatarImage, {
              user,
              guildId: "r",
              size: closure_0(1177).AvatarSizes.XSMALL,
              cutout: null,
            });
            return (
              <gameRelationshipsByType key={user.id} style={null}>
                {null}
              </gameRelationshipsByType>
            );
          })}
        </View>
      </View>
    );
  }, items3);
  let obj4 = {
    label: null,
    accessibilityLabel: null,
    onPress: null,
    trailing: null,
    arrow: true,
    start: true,
    end: true,
  };
  const obj5 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = require("util").intl;
  obj5.children = intl.string(require("util").t.TdEu5X);
  obj4.label = jsx(require("Text/Text").Text, { variant: "text-sm/semibold", color: "text-default", children: null });
  const intl2 = require("util").intl;
  obj4.accessibilityLabel = intl2.string(require("util").t.TdEu5X);
  obj4.onPress = navigateToFriends.navigateToFriends;
  obj4.trailing = memo;
  return jsx(require("TableRow").TableRow, {
    label: null,
    accessibilityLabel: null,
    onPress: null,
    trailing: null,
    arrow: true,
    start: true,
    end: true,
  });
}
