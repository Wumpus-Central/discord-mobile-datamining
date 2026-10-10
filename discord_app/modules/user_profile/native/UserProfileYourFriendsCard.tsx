// === Module 17506: UserProfileYourFriendsCard ===

// Module 17506 (UserProfileYourFriendsCard)
import _modDef12 from "module_12" /* 12 */;
import native from "native" /* 1200 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7347 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const RelationshipTypes = fn(1085).RelationshipTypes;
const jsx = fn(21).jsx;
let closure_11 = Object.freeze({ direction: fn(1200).CutoutDirection.RIGHT, inset: -4 });
const createStyles = fn(5092);
let closure_12 = createStyles.createStyles({ facepile: { flexDirection: "row", alignItems: "center" }, avatars: { flexDirection: "row" } });
const ReactCompilerGating = fn(558);
let obj = { direction: fn(1200).CutoutDirection.RIGHT, inset: -4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileYourFriendsCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileYourFriendsCard(arg0) {
  const cResult = require("c").c(27);
  closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  const tmp6 = stateFromStoresArray1(gameRelationshipsByType.useState(first), 2);
  _require = tmp6[0];
  closure_1 = tmp6[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserAffinitiesV2Store];
    class F {
      constructor() {
        userAffinities = closure_1_6.getUserAffinities();
        return userAffinities.map((otherUserId) => otherUserId.otherUserId);
      }
    }
    cResult[1] = items1;
    cResult[2] = F;
    let tmp8 = F;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  let obj = require("c");
  let obj2 = gameRelationshipsByType;
  stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp7, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [RelationshipStore];
    class F {
      constructor() {
        userAffinities = closure_1_6.getUserAffinities();
        return userAffinities.map((otherUserId) => otherUserId.otherUserId);
      }
    }
    cResult[3] = items2;
    cResult[4] = tmp14;
    let tmp12 = tmp14;
    let tmp11 = items2;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  let tmpResult = require("initialize");
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(tmp11, tmp12);
  const tmpResult3 = require("initialize");
  gameRelationshipsByType = require("GameRelationshipStoreHooks").useGameRelationshipsByType(RelationshipTypes.FRIEND);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        obj = closure_0(closure_2[14]);
        userAffinitiesV2 = obj.fetchUserAffinitiesV2();
        return;
      }
    }
    const items3 = [];
    class F {
      constructor() {
        userAffinities = closure_1_6.getUserAffinities();
        return userAffinities.map((otherUserId) => otherUserId.otherUserId);
      }
    }
    cResult[6] = items3;
    let tmp18 = items3;
  } else {
    class R {
      constructor() {
        obj = closure_0(closure_2[14]);
        userAffinitiesV2 = obj.fetchUserAffinitiesV2();
        return;
      }
    }
    tmp18 = cResult[6];
  }
  const effect = obj2.useEffect(R, tmp18);
  if (cResult[7] === stateFromStoresArray1) {
    class R {
      constructor() {
        obj = closure_0(closure_2[14]);
        userAffinitiesV2 = obj.fetchUserAffinitiesV2();
        return;
      }
    }
  }
  const fn = function w() {
    const found = _modDef12.chain(stateFromStoresArray).filter((item) => stateFromStoresArray1.includes(item));
    const chainResult = _modDef12.chain(stateFromStoresArray);
    const mapped = found.take(5).map(UserStore.getUser);
    const takeResult = found.take(5);
    const valueResult = mapped.filter(GlobalUtils.isNotNullish).value();
    if (valueResult.length >= 5) {
      closure_1(valueResult);
    } else {
      const tmpResult = _modDef12;
      const mapped1 = _modDef12.chain(gameRelationshipsByType).map((id) => id.id);
      const chainResult1 = _modDef12.chain(gameRelationshipsByType);
      const uniqResult = mapped1.uniq();
      const mapped2 = mapped1.uniq().take(5 - valueResult.length).map(UserStore.getUser);
      const takeResult1 = mapped1.uniq().take(5 - valueResult.length);
      const valueResult2 = mapped2.filter(GlobalUtils.isNotNullish).value();
      const items = [];
      HermesBuiltin.arraySpread(valueResult2, HermesBuiltin.arraySpread(valueResult, 0));
      closure_1(items);
      const iter2 = mapped2.filter(GlobalUtils.isNotNullish);
    }
    const iter = mapped.filter(GlobalUtils.isNotNullish);
  };
  const items4 = [stateFromStoresArray, stateFromStoresArray1, gameRelationshipsByType];
  cResult[7] = stateFromStoresArray1;
  cResult[8] = gameRelationshipsByType;
  cResult[9] = stateFromStoresArray;
  cResult[10] = fn;
  cResult[11] = items4;
  const tmpResult4 = require("GameRelationshipStoreHooks");
}) : (function UserProfileYourFriendsCard(navigateToFriends) {
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
  const gameRelationshipsByType = require("GameRelationshipStoreHooks").useGameRelationshipsByType(RelationshipTypes.FRIEND);
  const effect = stateFromStoresArray1.useEffect(() => {
    const userAffinitiesV2 = closure_0(8716).fetchUserAffinitiesV2();
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
      const mapped2 = mapped1.uniq().take(5 - valueResult.length).map(UserStore.getUser);
      const takeResult1 = mapped1.uniq().take(5 - valueResult.length);
      const valueResult2 = mapped2.filter(GlobalUtils.isNotNullish).value();
      const items = [];
      HermesBuiltin.arraySpread(valueResult2, HermesBuiltin.arraySpread(valueResult, 0));
      dependencyMap(items);
      const iter2 = mapped2.filter(GlobalUtils.isNotNullish);
    }
    const iter = mapped.filter(GlobalUtils.isNotNullish);
  }, items2);
  const items3 = [first, , ];
  ({ avatars: arr4[1], facepile: arr4[2] } = tmp);
  const memo = stateFromStoresArray1.useMemo(() => {
    let obj = {
      style: closure_0.facepile,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: <View style={closure_0.avatars}>{first.map((user, index) => {
        const obj = { style: null, children: null };
        const obj2 = { transform: null };
        const items = [{ translateX: 4 * (first.length - 1 - index) }];
        obj2.transform = items;
        obj.style = obj2;
        const obj4 = { user, guildId: "r", size: closure_0(1200).AvatarSizes.XSMALL, cutout: null };
        let tmp3;
        if (index < first.length - 1) {
          tmp3 = closure_2_11;
        }
        obj4.cutout = tmp3;
        obj.children = jsx(closure_0(1200).CutoutableAvatarImage, { user, guildId: "r", size: closure_0(1200).AvatarSizes.XSMALL, cutout: null });
        return <gameRelationshipsByType key={user.id} style={null}>{null}</gameRelationshipsByType>;
      })}</View>
    };
    return <View style={closure_0.facepile} accessibilityElementsHidden importantForAccessibility="no-hide-descendants"><View style={closure_0.avatars}>{first.map((user, index) => {
      const obj = { style: null, children: null };
      const obj2 = { transform: null };
      const items = [{ translateX: 4 * (first.length - 1 - index) }];
      obj2.transform = items;
      obj.style = obj2;
      const obj4 = { user, guildId: "r", size: closure_0(1200).AvatarSizes.XSMALL, cutout: null };
      let tmp3;
      if (index < first.length - 1) {
        tmp3 = closure_2_11;
      }
      obj4.cutout = tmp3;
      obj.children = jsx(closure_0(1200).CutoutableAvatarImage, { user, guildId: "r", size: closure_0(1200).AvatarSizes.XSMALL, cutout: null });
      return <gameRelationshipsByType key={user.id} style={null}>{null}</gameRelationshipsByType>;
    })}</View></View>;
  }, items3);
  let obj4 = { label: null, accessibilityLabel: null, onPress: null, trailing: null, arrow: true, start: true, end: true };
  const obj5 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = require("util").intl;
  obj5.children = intl.string(require("util").t.TdEu5X);
  obj4.label = jsx(require("Text/Text").Text, { variant: "text-sm/semibold", color: "text-default", children: null });
  const intl2 = require("util").intl;
  obj4.accessibilityLabel = intl2.string(require("util").t.TdEu5X);
  obj4.onPress = navigateToFriends.navigateToFriends;
  obj4.trailing = memo;
  return jsx(require("TableRow").TableRow, { label: null, accessibilityLabel: null, onPress: null, trailing: null, arrow: true, start: true, end: true });
});