// === Module 17604: FeedbackActionSheetV2 ===

// Module 17604 (FeedbackActionSheetV2)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import useMountEffectDefault from "useMountEffect" /* 5079 */;
import usePreviousDefault from "usePrevious" /* 8421 */;
import RatingSelectorDefault from "RatingSelector" /* 11780 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function closeActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
}
const View = fn(17).View;
const FeedbackRating = fn(11776).FeedbackRating;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, ratingsBody: { textAlign: "center" }, problemsList: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.problemsList = { marginBottom: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/native/FeedbackActionSheetV2.tsx");

export default function FeedbackActionSheetV2(optionsTree) {
  ({ headerLabel, ratingBody, hideDontShowAgainCheckbox, initialRating } = optionsTree);
  ({ ratingOptions, showHeaderCloseButton, categoriesHeader } = optionsTree);
  if (initialRating === undefined) {
    initialRating = null;
  }
  optionsTree = optionsTree.optionsTree;
  ({ onMount: importDefault, trackOpen: dependencyMap, trackReport: _slicedToArray } = optionsTree);
  let ref;
  first = undefined;
  closure_7 = undefined;
  first1 = undefined;
  closure_9 = undefined;
  first2 = undefined;
  onPress = undefined;
  first4 = undefined;
  closure_13 = undefined;
  first5 = undefined;
  closure_15 = undefined;
  c16 = undefined;
  c17 = undefined;
  closure_18 = undefined;
  closure_19 = undefined;
  const tmp = first2();
  ref = ref.useRef(null);
  const tmp5 = usePreviousDefault(optionsTree);
  closure_5 = tmp5;
  [first, closure_7] = ref.useState(_modDef12.shuffle(optionsTree.map((problemOptions) => {
    const obj = {};
    const merged = Object.assign(problemOptions);
    const obj2 = closure_1_1(dependencyMap[8]);
    let freeformConfig = problemOptions.freeformConfig;
    if (freeformConfig == null) {
      freeformConfig = [];
    }
    obj.problemOptions = closure_1_1(dependencyMap[8]).shuffle(problemOptions.problemOptions).concat(freeformConfig);
    return obj;
  })));
  const items = [optionsTree, tmp5];
  const effect = ref.useEffect(() => {
    if (!obj.isEqual(closure_5, optionsTree)) {
      closure_7(_modDef12.shuffle(optionsTree.map((problemOptions) => {
        const obj = {};
        const merged = Object.assign(problemOptions);
        const obj2 = closure_1_1(dependencyMap[8]);
        let freeformConfig = problemOptions.freeformConfig;
        if (freeformConfig == null) {
          freeformConfig = [];
        }
        obj.problemOptions = closure_1_1(dependencyMap[8]).shuffle(problemOptions.problemOptions).concat(freeformConfig);
        return obj;
      })));
      const tmpResult = _modDef12;
    }
    obj = _modDef12;
  }, items);
  [first1, closure_9] = ref.useState(false);
  [first2, onPress] = ref.useState(initialRating);
  let first3 = null;
  if (1 === first.length) {
    first3 = first[0];
  }
  [first4, closure_13] = ref.useState(first3);
  [first5, closure_15] = ref.useState(null);
  [c16, c17] = ref.useState(false);
  useMountEffectDefault(() => {
    if (importDefault != null) {
      tmp();
    }
    dependencyMap();
  });
  const tmp6Result4 = _slicedToArray(ref.useState(false), 2);
  const unmountEffect = optionsTree(5079).useUnmountEffect(() => {
    if (c16) {
      const obj3 = { rating: first2, category: null, reason: null, dontShowAgain: null };
      value = undefined;
      const obj2 = ModalActionCreatorsDefault;
      if (first4 != null) {
        value = first4.value;
      }
      const obj4 = { result: null, trackReport: null, titleLabel: null, descriptionLabel: null, hideHelpdeskLink: null };
      obj3.category = value;
      obj3.reason = first5;
      obj3.dontShowAgain = first1;
      obj4.result = obj3;
      obj4.trackReport = function trackReport(rating) {
        const obj = { rating: rating.rating, category: rating.category, reason: rating.reason, dontShowAgain: rating.dontShowAgain, feedback: null };
        let str = rating.feedback;
        if (str == null) {
          str = "";
        }
        obj.feedback = str;
        closure_1_3(obj);
      };
      let problemsHeader;
      if (first4 != null) {
        problemsHeader = first4.problemsHeader;
      }
      obj4.titleLabel = problemsHeader;
      const intl = util.intl;
      obj4.descriptionLabel = intl.string(util.t.h95hcn);
      let hideHelpdeskLink;
      if (first4 != null) {
        const freeformConfig = first4.freeformConfig;
        if (freeformConfig != null) {
          hideHelpdeskLink = freeformConfig.hideHelpdeskLink;
        }
      }
      obj4.hideHelpdeskLink = hideHelpdeskLink;
      obj2.pushLazy(asyncRequireImpl(11798, dependencyMap.paths), obj4);
      const tmp11 = asyncRequireImpl(11798, dependencyMap.paths);
    } else {
      let obj = { rating: first2, category: null, reason: null, dontShowAgain: null, feedback: "" };
      value2 = undefined;
      if (first4 != null) {
        value2 = first4.value;
      }
      if (value2 == null) {
        value2 = null;
      }
      obj.category = value2;
      obj.reason = first5;
      obj.dontShowAgain = first1;
      _slicedToArray(obj);
    }
  });
  const callback = obj.useCallback((arg0) => {
    closure_11(arg0);
    if (arg0 === FeedbackRating.GOOD) {
      closure_13(null);
      closure_15(null);
      _undefined(false);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    } else {
      const current = ref.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  }, []);
  closure_18 = obj.useCallback((arg0) => {
    closure_13(arg0);
    closure_15(null);
    const current = ref.current;
    if (current != null) {
      current.expandActionSheet();
    }
  }, []);
  const items1 = [first4];
  closure_19 = obj.useCallback((value) => {
    closure_15(value);
    if (null != first4) {
      if (null != value) {
        value = undefined;
        if (first4.freeformConfig != null) {
          value = iter.value;
        }
        if (value === value.value) {
          _undefined(true);
        }
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    }
    _undefined(false);
  }, items1);
  if (null == first2) {
    let tmp35 = null;
    if (null != ratingBody) {
      let obj4 = { style: tmp.ratingsBody, variant: "text-md/medium", color: "text-default", children: ratingBody };
      tmp35 = closure_7(tmp20(4636).Text, obj4);
    }
    const items2 = [tmp35, , ];
    const obj5 = { ratingOptions, selectedRating: first2, onChangeRating: callback };
    items2[1] = closure_7(RatingSelectorDefault, obj5);
    let tmp37Result = null;
    if (!hideDontShowAgainCheckbox) {
      const obj6 = { start: true, end: true, checked: first1, label: null, onPress: null };
      const intl3 = tmp20(1115).intl;
      obj6.label = intl3.string(tmp20(1115).t["5E9SB9"]);
      obj6.onPress = function onPress() {
        return closure_9(!first1);
      };
      tmp37Result = tmp37(tmp20(5692).TableCheckboxRow, obj6);
    }
    const obj7 = { children: null };
    items2[2] = tmp37Result;
    obj7.children = items2;
    let tmp33Result = closure_9(first1, obj7);
    let problemsHeader = headerLabel;
    tmp37 = closure_7;
  } else {
    if (first2 !== first.GOOD) {
      if (null == first4) {
        const obj8 = { children: null };
        const obj9 = { style: tmp.problemsList, children: null };
        const obj10 = {
          hasIcons: false,
          children: first.map((label, index) => {
                  closure_0 = label;
                  return closure_7(optionsTree(5693).TableRow, {
                    label: label.label,
                    labelLineClamp: 2,
                    onPress() {
                      return closure_18(closure_0);
                    }
                  }, index);
                })
        };
        obj9.children = closure_7(tmp20(5775).TableRowGroup, obj10);
        const items3 = [closure_7(closure_5, obj9), ];
        const obj11 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl2 = tmp20(1115).intl;
        obj11.text = intl2.string(tmp20(1115).t["13/7kX"]);
        obj11.onPress = function onPress() {
          return closure_11(null);
        };
        items3[1] = closure_7(tmp20(5062).Button, obj11);
        obj8.children = items3;
        tmp33Result = closure_9(first1, obj8);
        problemsHeader = categoriesHeader;
      }
    }
    problemsHeader = headerLabel;
    if (tmp23) {
      problemsHeader = first4.problemsHeader;
      const obj12 = { children: null };
      const obj13 = { style: tmp.problemsList, children: null };
      const obj14 = { hasIcons: false, children: null };
      const problemOptions = first4.problemOptions;
      obj14.children = problemOptions.map((label, index) => {
        closure_0 = label;
        return closure_7(optionsTree(5693).TableRow, {
          label: label.label,
          labelLineClamp: 2,
          onPress() {
            return closure_19(closure_0);
          }
        }, index);
      });
      obj13.children = closure_7(tmp20(5775).TableRowGroup, obj14);
      const items4 = [closure_7(closure_5, obj13), ];
      const obj15 = { variant: "secondary", size: "sm", text: null, onPress: null };
      let intl = tmp20(1115).intl;
      obj15.text = intl.string(tmp20(1115).t["13/7kX"]);
      obj15.onPress = function onPress() {
        if (1 === first.length) {
          let tmp3 = closure_11(null);
        } else {
          tmp3 = closure_13(null);
        }
        return tmp3;
      };
      items4[1] = closure_7(tmp20(5062).Button, obj15);
      obj12.children = items4;
      tmp33Result = closure_9(first1, obj12);
    }
    tmp23 = null != first4 && null == first5;
  }
  const bottom = useSafeAreaInsetsDefault().bottom;
  let num = 48;
  if (hideDontShowAgainCheckbox) {
    num = 0;
  }
  const sum = 232 + num + bottom;
  const obj16 = { scrollable: true, ref, startHeight: sum, maxHeight: null, header: null, children: null };
  let tmp41;
  if (null == first2) {
    tmp41 = sum;
  }
  obj16.maxHeight = tmp41;
  const obj17 = { title: problemsHeader, trailing: null };
  let tmp40Result = null;
  if (showHeaderCloseButton) {
    const obj18 = { onPress };
    tmp40Result = tmp40(tmp20(7312).ActionSheetCloseButton, obj18);
  }
  obj17.trailing = tmp40Result;
  obj16.header = closure_7(optionsTree(7263).BottomSheetTitleHeader, obj17);
  const obj19 = { contentContainerStyle: null, children: tmp33Result };
  const items5 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  obj19.contentContainerStyle = items5;
  obj16.children = closure_7(optionsTree(6738).BottomSheetScrollView, obj19);
  return closure_7(optionsTree(7264).BottomSheet, obj16);
};