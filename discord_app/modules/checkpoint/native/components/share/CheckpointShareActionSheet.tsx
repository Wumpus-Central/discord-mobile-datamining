// === Module 13387: CheckpointShareActionSheet ===

// Module 13387 (CheckpointShareActionSheet)
import nativeDefault from "native" /* 575 */;
import _modDef3091 from "module_3091" /* 3091 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6082 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6085 */;
import CheckpointShareCardDefault from "CheckpointShareCard" /* 13388 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ACTION_SHEET_MAX_WIDTH = fn(5268).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj[fn(6085).CheckpointCardTypes.DEFAULT] = _modDef3091.DZQzJn;
obj[fn(6085).CheckpointCardTypes.CHARACTER_ONLY] = _modDef3091.tUU3fe;
obj[fn(6085).CheckpointCardTypes.STATS_ONLY] = _modDef3091.e2UHGT;
const createStyles = fn(5009);
let obj3 = { carousel: { marginHorizontal: -nativeDefault.space.PX_16, height: 284 }, carouselContent: { alignItems: "center", gap: 48 }, pageDots: null, pageDot: null, activePageDot: null };
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16, height: 284 };
obj3.pageDots = { flexDirection: "row", justifyContent: "center", gap: nativeDefault.space.PX_16 };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.ICON_MUTED };
obj3.pageDot = size;
let obj5 = { flexDirection: "row", justifyContent: "center", gap: nativeDefault.space.PX_16 };
obj3.activePageDot = { borderColor: nativeDefault.colors.ICON_STRONG, backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_11 = createStyles.createStyles(obj3);
size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareActionSheet.tsx");

export default function CheckpointShareActionSheet(character) {
  character = character.character;
  let stats = character.stats;
  const onForward = character.onForward;
  let ref;
  first = undefined;
  closure_6 = undefined;
  let memo;
  let items7;
  let mapped;
  let num;
  let mapped1;
  closure_12 = undefined;
  const tmp = mapped1();
  _slicedToArray = tmp;
  const bound = Math.min(stats(onForward[9])().width, memo);
  ref = ref.useRef(null);
  const nativeGesture = character(onForward[10]).useNativeGesture({ disallowInterruption: true });
  [first, closure_6] = ref.useState(0);
  const items = [stats];
  memo = ref.useMemo(() => {
    stats = checkpoint_CheckpointMessageComponentUtils.toCheckpointMessageComponentData(CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY, null, stats).stats;
    let result = null;
    if (null != stats) {
      result = checkpoint_CheckpointMessageComponentUtils.transformCheckpoint2026StatsToRowGeneratedComponent(stats);
      const tmpResult = checkpoint_CheckpointMessageComponentUtils;
    }
    return result;
  }, items);
  if (null != character) {
    if (tmp11) {
      const items1 = [tmp6(tmp3[5]).CheckpointCardTypes.CHARACTER_ONLY, tmp6(tmp3[5]).CheckpointCardTypes.DEFAULT, tmp6(tmp3[5]).CheckpointCardTypes.STATS_ONLY];
      items7 = items1;
    }
    mapped = items7.map((item) => character(onForward[12]).getCheckpointShareCardSize(item).width);
    num = mapped[0];
    if (num == null) {
      num = 0;
    }
    let num3 = mapped[mapped.length - 1];
    if (num3 == null) {
      num3 = 0;
    }
    mapped1 = mapped.map((item, index) => {
      const substr = mapped.slice(0, index);
      return substr.reduce((acc, item) => acc + item + 48, 0) + (item - num) / 2;
    });
    closure_12 = tmp14;
    let obj2 = { startExpanded: true, header: null, children: null };
    const obj3 = { title: null };
    const intl = tmp6(tmp3[15]).intl;
    obj3.title = intl.string(tmp6(tmp3[15]).t.RDE0Sc);
    obj2.header = items7(tmp6(tmp3[14]).BottomSheetTitleHeader, obj3);
    const obj4 = { accessible: true, accessibilityRole: "adjustable", accessibilityLabel: null, accessibilityValue: null, accessibilityActions: null, onAccessibilityAction: null, children: null };
    const intl2 = tmp6(tmp3[15]).intl;
    obj4.accessibilityLabel = intl2.string(tmp2(tmp3[6]).KXDPot);
    let tmp18;
    if (null != items7[first]) {
      const obj5 = { text: null };
      const intl3 = tmp6(tmp3[15]).intl;
      obj5.text = intl3.string(num[tmp14]);
      tmp18 = obj5;
    }
    obj4.accessibilityValue = tmp18;
    const items2 = [{ name: "increment" }, { name: "decrement" }];
    obj4.accessibilityActions = items2;
    obj4.onAccessibilityAction = function handleAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("increment" === actionName) {
        const sum = first + 1;
        let tmp9 = sum < 0;
        if (!tmp9) {
          tmp9 = sum >= items7.length;
        }
        if (!tmp9) {
          closure_6(sum);
          const current2 = ref.current;
          if (current2 != null) {
            obj = { x: mapped1[sum], animated: true };
            current2.scrollTo(obj);
          }
        }
      } else if ("decrement" === actionName) {
        const diff = first - 1;
        let tmp2 = diff < 0;
        if (diff >= 0) {
          tmp2 = diff >= items7.length;
        }
        if (!tmp2) {
          closure_6(diff);
          const current = ref.current;
          if (current != null) {
            const obj2 = { x: mapped1[diff], animated: true };
            current.scrollTo(obj2);
          }
        }
      }
    };
    const obj6 = { gesture: nativeGesture, children: null };
    const obj7 = { ref, horizontal: true, nestedScrollEnabled: true, style: tmp.carousel, contentContainerStyle: null, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: null, onMomentumScrollEnd: null, children: null };
    const items3 = [tmp.carouselContent, ];
    const obj8 = { paddingLeft: (bound - num) / 2, paddingRight: (bound - num3) / 2 };
    items3[1] = obj8;
    obj7.contentContainerStyle = items3;
    obj7.snapToOffsets = mapped1;
    obj7.onMomentumScrollEnd = function handleMomentumScrollEnd(nativeEvent) {
      const x = nativeEvent.nativeEvent.contentOffset.x;
      closure_1 = 0;
      const item = mapped1.forEach((item, index) => {
        const absolute = Math.abs(item - closure_0);
        if (absolute < Math.abs(mapped1[closure_1] - closure_0)) {
          closure_1 = index;
        }
      });
      closure_6(closure_1);
    };
    obj7.children = items7.map((cardType) => React6(CheckpointShareCardDefault, { cardType, character, stats: memo }, cardType));
    obj6.children = items7(first, obj7);
    obj4.children = items7(tmp6(tmp3[10]).GestureDetector, obj6);
    const items4 = [items7(closure_6, obj4), , ];
    let tmp16Result = items7.length > 1;
    if (tmp16Result) {
      const obj9 = {
        style: tmp.pageDots,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: items7.map((item, index) => {
              const style = [closure_3.pageDot, ];
              let activePageDot = index === first;
              if (activePageDot) {
                activePageDot = closure_3.activePageDot;
              }
              style[1] = activePageDot;
              return React6(timestampProducer, { style }, item);
            })
      };
      tmp16Result = tmp16(tmp17, obj9);
    }
    items4[1] = tmp16Result;
    const obj10 = { hasIcons: true, children: null };
    const obj11 = { label: null, icon: null, onPress: null, disabled: null };
    const intl4 = tmp6(tmp3[15]).intl;
    obj11.label = intl4.string(tmp6(tmp3[15]).t.I3ltXO);
    const obj12 = { IconComponent: tmp2(tmp3[19]) };
    obj11.icon = items7(tmp6(tmp3[18]).TableRowIcon, obj12);
    obj11.onPress = function handleForward() {
      if (null != closure_12) {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        onForward(tmp);
      }
    };
    obj11.disabled = null == items7[first];
    obj10.children = items7(tmp6(tmp3[17]).TableRow, obj11);
    items4[2] = items7(tmp6(tmp3[16]).TableRowGroup, obj10);
    obj2.children = items4;
    return mapped(tmp6(tmp3[13]).ActionSheet, obj2);
  }
  if (null != character) {
    const items5 = [tmp6(tmp3[5]).CheckpointCardTypes.CHARACTER_ONLY];
    items7 = items5;
  } else if (tmp11) {
    const items6 = [tmp6(tmp3[5]).CheckpointCardTypes.STATS_ONLY];
    items7 = items6;
  } else {
    items7 = [];
  }
};