// === Module 16900: OrbChallengeListItem ===

// Module 16900 (OrbChallengeListItem)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2172 from "module_2172" /* 2172 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7378 */;
import OrbsIcon from "OrbsIcon" /* 9532 */;
import _modDef9707 from "module_9707" /* 9707 */;
import QuestDockRewardTileDefault from "QuestDockRewardTile" /* 14679 */;
import OrbChallengeTypes from "OrbChallengeTypes" /* 15626 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function OrbChallengeAsset(achievementStatus) {
  achievementStatus = achievementStatus.achievementStatus;
  const tmp = closure_12();
  if (achievementStatus !== OrbChallengeTypes.UserAchievementStatus.COMPLETED) {
    if (achievementStatus !== OrbChallengeTypes.UserAchievementStatus.CLAIMED) {
      const size = { assetUrl: _modDef9707, isAnimatedAsset, height: 40, width: 40 };
      let tmp8 = React6(QuestDockRewardTileDefault, size);
    }
    return tmp8;
  }
  const obj = { style: tmp.completedRing, accessible: true, accessibilityLabel: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef2172.k6h2J3);
  const size1 = { assetUrl: _modDef9707, isAnimatedAsset, height: 32, width: 32, style: tmp.completedTile };
  obj.children = React6(QuestDockRewardTileDefault, size1);
  tmp8 = React6(React5, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let c11 = false;
const createStyles = fn(5014);
let obj2 = { item: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, pressableItem: null, pressedItem: null, content: null, completedRing: null, completedTile: null, inlineOrbIcon: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.pressableItem = { marginHorizontal: -nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, marginVertical: -nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
let obj4 = { marginHorizontal: -nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, marginVertical: -nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
obj2.pressedItem = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
const obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.content = { flex: 1, marginStart: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
let size = { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: nativeDefault.colors.STATUS_POSITIVE, alignItems: "center", justifyContent: "center" };
obj2.completedRing = size;
obj2.completedTile = { borderRadius: 16 };
let size1 = { width: 14, height: 12, transform: null };
let items = [{ translateY: 1 }];
size1.transform = items;
obj2.inlineOrbIcon = size1;
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbChallengeListItem.tsx");

export function OrbChallengeListItem(achievementIdentifier) {
  achievementIdentifier = achievementIdentifier.achievementIdentifier;
  const achievementStatus = achievementIdentifier.achievementStatus;
  const onClaim = achievementIdentifier.onClaim;
  const onDiscoveryClick = achievementIdentifier.onDiscoveryClick;
  let loading;
  noop = undefined;
  ({ title, orbRewardAmount } = achievementIdentifier);
  const tmp = closure_12();
  asyncGeneratorStep = tmp;
  const tmp2 = loading(noop.useState(false), 2);
  loading = tmp2[0];
  noop = tmp2[1];
  let items = [onClaim, achievementIdentifier];
  const onPress = noop.useCallback(asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp3;
            if (null != onClaim) {
              closure_5(true);
              c3 = 1;
              c1 = 2;
              c4 = 1;
              const obj4 = { value: tmp19(achievementIdentifier), done: false };
              return obj4;
            } else {
              c4 = 3;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_5(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
          closure_128_5(false);
        }
        c3 = 0;
        closure_128_5(false);
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp23) {
        closure_2 = tmp23;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp23;
        } else {
          c1 = tmp;
        }
      }
    }
  }), items);
  const tmp7 = achievementStatus === achievementIdentifier(onClaim[7]).UserAchievementStatus.COMPLETED;
  closure_7 = tmp8;
  const items1 = [achievementStatus, loading, onPress, null != onDiscoveryClick && !tmp7];
  const memo = noop.useMemo(() => {
    if (achievementStatus !== OrbChallengeTypes.UserAchievementStatus.COMPLETED) {
      if (!loading) {
        let tmp6 = null;
        if (closure_7) {
          const obj = { size: "md", color: nativeDefault.colors.ICON_SUBTLE, accessible: false };
          tmp6 = React6(ChevronSmallRightIcon.ChevronSmallRightIcon, obj);
        }
      }
      return tmp6;
    }
    const obj2 = { variant: "primary", size: "sm", text: null, loading: null, onPress: null };
    const intl = util.intl;
    obj2.text = intl.string(_modDef2172.WmfVjs);
    obj2.loading = loading;
    obj2.onPress = onPress;
    tmp6 = React6(components_Button_Button.Button, obj2);
  }, items1);
  const items2 = [closure_8(OrbChallengeAsset, { achievementStatus }), , ];
  let obj2 = { style: tmp.content, children: null };
  const items3 = [closure_8(achievementIdentifier(onClaim[14]).Text, { variant: "text-sm/medium", color: "text-default", children: title }), ];
  let intl = tmp5(tmp6[8]).intl;
  const tmp14 = achievementStatus(onClaim[9]);
  let obj3 = { children: null };
  let obj4 = {
    variant: "text-sm/normal",
    color: "text-subtle",
    children: intl.format(tmp7 ? tmp14.h2qWpS : tmp14.B8Fxns, {
      orbAmount: orbRewardAmount,
      orbIconHook() {
        const obj = { style: closure_3.inlineOrbIcon, children: React6(OrbsIcon.OrbsIcon, { size: "xxs", color: nativeDefault.colors.ICON_SUBTLE, accessible: false }) };
        return React6(React5, obj);
      }
    })
  };
  items3[1] = closure_8(achievementIdentifier(onClaim[14]).Text, obj4);
  obj2.children = items3;
  items2[1] = closure_9(closure_7, obj2);
  items2[2] = memo;
  obj3.children = items2;
  const tmp10Result = closure_9(closure_10, obj3);
  if (null != onDiscoveryClick && !tmp7) {
    const obj6 = {
      style(pressed) {
          let pressedItem = pressed.pressed;
          const items = [, , ];
          ({ item: arr[0], pressableItem: arr[1] } = closure_3);
          if (pressedItem) {
            pressedItem = closure_3.pressedItem;
          }
          items[2] = pressedItem;
          return items;
        },
      onPress: onDiscoveryClick,
      accessibilityRole: "button",
      children: tmp10Result
    };
    let tmp12Result = closure_8(onPress, obj6);
  } else {
    const obj7 = { style: tmp.item, children: tmp10Result };
    tmp12Result = closure_8(tmp13, obj7);
  }
  return tmp12Result;
}