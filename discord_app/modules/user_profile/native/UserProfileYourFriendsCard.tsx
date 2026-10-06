// === Module 17006: UserProfileYourFriendsCard ===

// Module 17006 (UserProfileYourFriendsCard)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7156 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, navigateToFriends, userAffinities;

const View = react_native.View;
const RelationshipTypes = Constants.RelationshipTypes;
const jsx = Fragment.jsx;
let obj = { direction: native.CutoutDirection.RIGHT, inset: -4 };
let closure_11 = Object.freeze(obj);
let closure_12 = createStyles.createStyles({ facepile: { flexDirection: "row", alignItems: "center" }, avatars: { flexDirection: "row" } });
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let friendIDs;
  let gameRelationshipsByType;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let tmp11;
  let tmp12;
  let tmp17;
  let tmp7;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(27);
  closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let obj2 = gameRelationshipsByType;
  const tmp6 = stateFromStoresArray1(gameRelationshipsByType.useState(first), 2);
  _require = tmp6[0];
  let closure_1 = tmp6[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserAffinitiesV2Store];
    const fn = function _() {
      userAffinities = userAffinities.getUserAffinities();
      return userAffinities.map((otherUserId) => otherUserId.otherUserId);
    };
    cResult[1] = items1;
    cResult[2] = fn;
    tmp8 = fn;
    tmp7 = items1;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const tmpResult = require("get initialized");
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp7, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [RelationshipStore];
    const fn2 = function x() {
      return friendIDs.getFriendIDs();
    };
    cResult[3] = items2;
    cResult[4] = fn2;
    tmp12 = fn2;
    tmp11 = items2;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const tmpResult3 = require("get initialized");
  stateFromStoresArray1 = tmpResult3.useStateFromStoresArray(tmp11, tmp12);
  const tmpResult4 = require("GameRelationshipStoreHooks");
  gameRelationshipsByType = tmpResult4.useGameRelationshipsByType(RelationshipTypes.FRIEND);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        const obj = closure_0(stateFromStoresArray[14]);
        const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
      }
    }
    const items3 = [];
    cResult[5] = R;
    cResult[6] = items3;
    tmp17 = items3;
  } else {
    class R {
      constructor() {
        const obj = closure_0(stateFromStoresArray[14]);
        const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
      }
    }
    tmp17 = cResult[6];
  }
  const effect = obj2.useEffect(R, tmp17);
  if (cResult[7] === stateFromStoresArray1) {
    class R {
      constructor() {
        const obj = closure_0(stateFromStoresArray[14]);
        const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
      }
    }
  }
  const fn3 = function w() {
    const obj = _modDef12;
    const chainResult = obj.chain(stateFromStoresArray);
    const found = chainResult.filter((item) => stateFromStoresArray1.includes(item));
    const takeResult = found.take(5);
    const mapped = takeResult.map(UserStore.getUser);
    const iter = mapped.filter(GlobalUtils.isNotNullish);
    const valueResult = iter.value();
    if (valueResult.length >= 5) {
      closure_1(valueResult);
    } else {
      const tmp2Result = _modDef12;
      const chainResult1 = tmp2Result.chain(gameRelationshipsByType);
      const mapped1 = chainResult1.map((id) => id.id);
      const uniqResult = mapped1.uniq();
      const takeResult1 = uniqResult.take(5 - valueResult.length);
      const mapped2 = takeResult1.map(UserStore.getUser);
      const iter2 = mapped2.filter(GlobalUtils.isNotNullish);
      const items = [];
      const valueResult2 = iter2.value();
      HermesBuiltin.arraySpread(items, valueResult2, HermesBuiltin.arraySpread(items, valueResult, 0));
      closure_1(items);
    }
  };
  const items4 = [stateFromStoresArray, stateFromStoresArray1, gameRelationshipsByType];
  cResult[7] = stateFromStoresArray1;
  cResult[8] = gameRelationshipsByType;
  cResult[9] = stateFromStoresArray;
  cResult[10] = fn3;
  cResult[11] = items4;
}) : ((navigateToFriends) => {
  let closure_0;
  let closure_2;
  let friendIDs;
  let intl;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  navigateToFriends = navigateToFriends.navigateToFriends;
  const tmp = closure_12();
  _require = tmp;
  const tmp2 = stateFromStoresArray(stateFromStoresArray1.useState([]), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = require("get initialized");
  let items = [UserAffinitiesV2Store];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    userAffinities = userAffinities.getUserAffinities();
    return userAffinities.map((otherUserId) => otherUserId.otherUserId);
  });
  let obj2 = require("get initialized");
  const items1 = [RelationshipStore];
  stateFromStoresArray1 = obj2.useStateFromStoresArray(items1, () => friendIDs.getFriendIDs());
  let obj3 = require("GameRelationshipStoreHooks");
  const gameRelationshipsByType = obj3.useGameRelationshipsByType(RelationshipTypes.FRIEND);
  const effect = stateFromStoresArray1.useEffect(() => {
    const obj = closure_0(closure_2[14]);
    const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
  }, []);
  const items2 = [stateFromStoresArray, stateFromStoresArray1, gameRelationshipsByType];
  const effect1 = stateFromStoresArray1.useEffect(() => {
    const obj = _modDef12;
    const chainResult = obj.chain(stateFromStoresArray);
    const found = chainResult.filter((item) => stateFromStoresArray1.includes(item));
    const takeResult = found.take(5);
    const mapped = takeResult.map(UserStore.getUser);
    const iter = mapped.filter(GlobalUtils.isNotNullish);
    const valueResult = iter.value();
    if (valueResult.length >= 5) {
      closure_2(valueResult);
    } else {
      const tmp2Result = _modDef12;
      const chainResult1 = tmp2Result.chain(gameRelationshipsByType);
      const mapped1 = chainResult1.map((id) => id.id);
      const uniqResult = mapped1.uniq();
      const takeResult1 = uniqResult.take(5 - valueResult.length);
      const mapped2 = takeResult1.map(UserStore.getUser);
      const iter2 = mapped2.filter(GlobalUtils.isNotNullish);
      const items = [];
      const valueResult2 = iter2.value();
      HermesBuiltin.arraySpread(items, valueResult2, HermesBuiltin.arraySpread(items, valueResult, 0));
      closure_2(items);
    }
  }, items2);
  const items3 = [first, , ];
  ({ avatars: arr4[1], facepile: arr4[2] } = tmp);
  const memo = stateFromStoresArray1.useMemo(() => {
    let obj2 = {
      style: closure_0.avatars,
      children: first.map((user, index) => {
        let items;
        let tmp3;
        const obj2 = { transform: items };
        items = [];
        const obj3 = { translateX: 4 * (first.length - 1 - index) };
        items[0] = obj3;
        ({ user, guildId: "r", size: closure_0(closure_2[8]).AvatarSizes.XSMALL, cutout: tmp3 });
        const CutoutableAvatarImage = closure_0(closure_2[8]).CutoutableAvatarImage;
        tmp3 = undefined;
        if (index < first.length - 1) {
          tmp3 = closure_2_11;
        }
        return <gameRelationshipsByType key={user.id} style={obj2}>{null}</gameRelationshipsByType>;
      })
    };
    return <View style={closure_0.facepile} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{null}</View>;
  }, items3);
  const TableRow = require("TableRow").TableRow;
  ({ variant: "text-sm/semibold", color: "text-default", children: intl.string(require("intl").t.TdEu5X) });
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  const intl2 = require("intl").intl;
  return <TableRow label={null} accessibilityLabel={intl2.string(require("intl").t.TdEu5X)} onPress={navigateToFriends} trailing={memo} arrow start end />;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileYourFriendsCard.tsx");

export default tmp2;