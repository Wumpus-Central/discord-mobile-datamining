// === Module 16566: closeActionSheet ===

// Module 16566 (closeActionSheet)
import applyDefault from "apply" /* 12 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4761 */;
import _modDef5260 from "module_5260" /* 5260 */;
import usePreviousDefault from "usePrevious" /* 6701 */;
import RatingSelectorDefault from "RatingSelector" /* 10815 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { FeedbackRating } from "FeedbackRating" /* 10811 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
function closeActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
}
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { padding: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_16 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/feedback/native/FeedbackActionSheetV2.tsx");

export default function FeedbackActionSheetV2(optionsTree) {
  ({ headerLabel, ratingBody, hideDontShowAgainCheckbox, initialRating } = optionsTree);
  ({ ratingOptions, showHeaderCloseButton, categoriesHeader } = optionsTree);
  if (initialRating === undefined) {
    initialRating = null;
  }
  optionsTree = optionsTree.optionsTree;
  ({ onMount: importDefault, trackOpen: dependencyMap, trackReport: closure_3 } = optionsTree);
  let ref;
  let first2;
  let first4;
  closure_13 = undefined;
  let first5;
  closure_15 = undefined;
  c16 = undefined;
  c17 = undefined;
  closure_18 = undefined;
  closure_19 = undefined;
  const tmp = first2();
  let obj = ref;
  ref = ref.useRef(null);
  const tmp5 = usePreviousDefault(optionsTree);
  closure_5 = tmp5;
  obj1 = applyDefault;
  const tmp7 = callback(ref.useState(obj1.shuffle(optionsTree.map((item, index) => {
    const obj = {};
    const merged = Object.assign(item);
    const obj2 = callback(table[8]);
    let freeformConfig = item.freeformConfig;
    if (freeformConfig == null) {
      freeformConfig = [];
    }
    obj.problemOptions = callback(table[8]).shuffle(item.problemOptions).concat(freeformConfig);
    return obj;
  }))), 2);
  const first = tmp7[0];
  const callback2 = tmp7[1];
  const items = [optionsTree, tmp5];
  const effect = ref.useEffect(() => {
    if (!obj.isEqual(closure_5, optionsTree)) {
      callback2(applyDefault.shuffle(optionsTree.map((item, index) => {
        const obj = {};
        const merged = Object.assign(item);
        const obj2 = callback(table[8]);
        let freeformConfig = item.freeformConfig;
        if (freeformConfig == null) {
          freeformConfig = [];
        }
        obj.problemOptions = callback(table[8]).shuffle(item.problemOptions).concat(freeformConfig);
        return obj;
      })));
      const tmpResult = applyDefault;
    }
    obj = applyDefault;
  }, items);
  const tmp9 = callback(ref.useState(false), 2);
  const first1 = tmp9[0];
  const callback3 = tmp9[1];
  let tmp11 = callback(ref.useState(initialRating), 2);
  first2 = tmp11[0];
  closure_11 = tmp11[1];
  let first3 = null;
  if (1 === first.length) {
    first3 = first[0];
  }
  let tmp6Result = tmp6(ref.useState(first3), 2);
  first4 = tmp6Result[0];
  closure_13 = tmp6Result[1];
  tmp6Result = tmp6(obj.useState(null), 2);
  first5 = tmp6Result[0];
  closure_15 = tmp6Result[1];
  [c16, c17] = callback(obj.useState(false), 2);
  useMountLayoutEffectDefault(() => {
    if (closure_1 != null) {
      tmp();
    }
    callback();
  });
  let obj2 = optionsTree(4761);
  const unmountEffect = obj2.useUnmountEffect(() => {
    if (c16) {
      let obj = { rating: null, category: null, reason: null, dontShowAgain: null };
      obj[0] = first2;
      let value;
      const obj2 = _modDef5260;
      if (first4 != null) {
        value = first4.value;
      }
      obj = { result: null, trackReport: null, titleLabel: null, descriptionLabel: null, hideHelpdeskLink: null };
      obj[1] = value;
      obj[2] = first5;
      obj[3] = first1;
      obj[0] = obj;
      obj[1] = function trackReport(rating) {
        const obj = { rating: rating.rating, category: rating.category, reason: rating.reason, dontShowAgain: rating.dontShowAgain, feedback: null };
        let str = rating.feedback;
        if (str == null) {
          str = "";
        }
        obj[4] = str;
        callback(obj);
      };
      let problemsHeader;
      if (first4 != null) {
        problemsHeader = first4.problemsHeader;
      }
      obj[2] = problemsHeader;
      const intl = optionsTree(dependencyMap[14]).intl;
      obj[3] = intl.string(optionsTree(dependencyMap[14]).t.h95hcn);
      let hideHelpdeskLink;
      if (first4 != null) {
        const freeformConfig = first4.freeformConfig;
        if (freeformConfig != null) {
          hideHelpdeskLink = freeformConfig.hideHelpdeskLink;
        }
      }
      obj[4] = hideHelpdeskLink;
      obj2.pushLazy(optionsTree(dependencyMap[13])(dependencyMap[12], dependencyMap.paths), obj);
      const tmp11 = optionsTree(dependencyMap[13])(dependencyMap[12], dependencyMap.paths);
    } else {
      obj = { rating: null, category: null, reason: null, dontShowAgain: null, feedback: "" };
      obj[0] = first2;
      value = undefined;
      if (first4 != null) {
        value = first4.value;
      }
      if (value == null) {
        value = null;
      }
      obj[1] = value;
      obj[2] = first5;
      obj[3] = first1;
      callback(obj);
    }
  });
  callback = obj.useCallback((arg0) => {
    callback4(arg0);
    if (arg0 === first.GOOD) {
      callback5(null);
      callback6(null);
      _undefined(false);
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    } else {
      const current = ref.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  }, []);
  closure_18 = obj.useCallback((arg0) => {
    callback5(arg0);
    callback6(null);
    const current = ref.current;
    if (current != null) {
      current.expandActionSheet();
    }
  }, []);
  const items1 = [first4];
  closure_19 = obj.useCallback((value) => {
    callback6(value);
    if (null != first4) {
      if (null != value) {
        value = undefined;
        if (first4.freeformConfig != null) {
          value = iter.value;
        }
        if (value === value.value) {
          _undefined(true);
        }
        ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
      }
    }
    _undefined(false);
  }, items1);
  if (null == first2) {
    let tmp35 = null;
    if (null != ratingBody) {
      obj = { style: null, variant: "text-md/medium", color: "text-default", children: null };
      obj[0] = tmp.ratingsBody;
      obj[3] = ratingBody;
      tmp35 = callback2(tmp20(4734).Text, obj);
    }
    const items2 = [tmp35, , ];
    obj = { ratingOptions: null, selectedRating: null, onChangeRating: null };
    obj[0] = ratingOptions;
    obj[1] = first2;
    obj[2] = callback;
    items2[1] = callback2(RatingSelectorDefault, obj);
    let tmp37Result = null;
    if (!hideDontShowAgainCheckbox) {
      obj1 = { start: true, end: true, checked: null, label: null, onPress: null };
      obj1[2] = first1;
      const intl3 = tmp20(1236).intl;
      obj1[3] = intl3.string(tmp20(1236).t["5E9SB9"]);
      obj1[4] = function onPress() {
        return callback3(!first1);
      };
      tmp37Result = tmp37(tmp20(8558).TableCheckboxRow, obj1);
    }
    obj2 = { children: null };
    items2[2] = tmp37Result;
    obj2[0] = items2;
    let tmp33Result = callback3(first1, obj2);
    let problemsHeader = headerLabel;
    tmp37 = callback2;
  } else {
    if (first2 !== first.GOOD) {
      if (null == first4) {
        const obj3 = { children: null };
        const obj4 = { style: null, children: null };
        obj4[0] = tmp.problemsList;
        const obj5 = { hasIcons: false, children: null };
        obj5[1] = first.map((item, index) => {
          closure_0 = item;
          return callback2(optionsTree(dependencyMap[19]).TableRow, {
            label: item.label,
            labelLineClamp: 2,
            onPress() {
              return closure_1_18(closure_0);
            }
          }, index);
        });
        obj4[1] = callback2(tmp20(6286).TableRowGroup, obj5);
        const items3 = [callback2(closure_5, obj4), ];
        const obj6 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl2 = tmp20(1236).intl;
        obj6[2] = intl2.string(tmp20(1236).t["13/7kX"]);
        obj6[3] = function onPress() {
          return callback4(null);
        };
        items3[1] = callback2(tmp20(4745).Button, obj6);
        obj3[0] = items3;
        tmp33Result = callback3(first1, obj3);
        problemsHeader = categoriesHeader;
      }
    }
    problemsHeader = headerLabel;
    if (tmp23) {
      problemsHeader = first4.problemsHeader;
      const obj7 = { children: null };
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.problemsList;
      const obj9 = { hasIcons: false, children: null };
      const problemOptions = first4.problemOptions;
      obj9[1] = problemOptions.map((item, index) => {
        closure_0 = item;
        return callback2(optionsTree(dependencyMap[19]).TableRow, {
          label: item.label,
          labelLineClamp: 2,
          onPress() {
            return closure_1_19(closure_0);
          }
        }, index);
      });
      obj8[1] = callback2(tmp20(6286).TableRowGroup, obj9);
      const items4 = [callback2(closure_5, obj8), ];
      const obj10 = { variant: "secondary", size: "sm", text: null, onPress: null };
      let intl = tmp20(1236).intl;
      obj10[2] = intl.string(tmp20(1236).t["13/7kX"]);
      obj10[3] = function onPress() {
        if (1 === first.length) {
          let tmp3 = callback4(null);
        } else {
          tmp3 = callback5(null);
        }
        return tmp3;
      };
      items4[1] = callback2(tmp20(4745).Button, obj10);
      obj7[0] = items4;
      tmp33Result = callback3(first1, obj7);
    }
    tmp23 = null != first4 && null == first5;
  }
  const bottom = useSafeAreaInsetsDefault().bottom;
  let num = 48;
  if (hideDontShowAgainCheckbox) {
    num = 0;
  }
  const sum = 232 + num + bottom;
  const obj11 = { scrollable: true, ref, startHeight: sum, maxHeight: null, header: null, children: null };
  let tmp41;
  if (null == first2) {
    tmp41 = sum;
  }
  obj11[3] = tmp41;
  const obj12 = { title: problemsHeader, trailing: null };
  let tmp40Result = null;
  if (showHeaderCloseButton) {
    const obj13 = { onPress: null };
    obj13[0] = closure_11;
    tmp40Result = tmp40(tmp20(7176).ActionSheetCloseButton, obj13);
  }
  obj12[1] = tmp40Result;
  obj11[4] = callback2(optionsTree(6949).BottomSheetTitleHeader, obj12);
  const items5 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  obj11[5] = callback2(optionsTree(6952).BottomSheetScrollView, { contentContainerStyle: items5, children: tmp33Result });
  return callback2(optionsTree(6950).BottomSheet, obj11);
};