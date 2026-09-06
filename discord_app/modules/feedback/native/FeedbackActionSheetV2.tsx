// discord_app/modules/feedback/native/FeedbackActionSheetV2.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useMountEffectDefault from "../../../hooks/useMountEffect.tsx";
import usePreviousDefault from "../../../hooks/usePrevious.tsx";
import RatingSelectorDefault from "RatingSelector.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function closeActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
}
const View = fn(17).View;
const FeedbackRating = fn(11626).FeedbackRating;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, ratingsBody: null, problemsList: null };
createStyles = { padding: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.ratingsBody = { textAlign: "center" };
createStyles.problemsList = { marginBottom: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(createStyles);
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
  let obj1 = _modDef12;
  const tmp7 = _slicedToArray(
    ref.useState(
      obj1.shuffle(
        optionsTree.map((problemOptions) => {
          const obj = {};
          const merged = Object.assign(problemOptions);
          const obj2 = closure_1_1(dependencyMap[8]);
          let freeformConfig = problemOptions.freeformConfig;
          if (freeformConfig == null) {
            freeformConfig = [];
          }
          obj.problemOptions = closure_1_1(dependencyMap[8])
            .shuffle(problemOptions.problemOptions)
            .concat(freeformConfig);
          return obj;
        }),
      ),
    ),
    2,
  );
  const first = tmp7[0];
  closure_7 = tmp7[1];
  const items = [optionsTree, tmp5];
  const effect = ref.useEffect(() => {
    if (!obj.isEqual(closure_5, optionsTree)) {
      closure_7(
        _modDef12.shuffle(
          optionsTree.map((problemOptions) => {
            const obj = {};
            const merged = Object.assign(problemOptions);
            const obj2 = closure_1_1(dependencyMap[8]);
            let freeformConfig = problemOptions.freeformConfig;
            if (freeformConfig == null) {
              freeformConfig = [];
            }
            obj.problemOptions = closure_1_1(dependencyMap[8])
              .shuffle(problemOptions.problemOptions)
              .concat(freeformConfig);
            return obj;
          }),
        ),
      );
      const tmpResult = _modDef12;
    }
    obj = _modDef12;
  }, items);
  const tmp9 = _slicedToArray(ref.useState(false), 2);
  const first1 = tmp9[0];
  closure_9 = tmp9[1];
  let tmp11 = _slicedToArray(ref.useState(initialRating), 2);
  first2 = tmp11[0];
  onPress = tmp11[1];
  let first3 = null;
  if (1 === first.length) {
    first3 = first[0];
  }
  let tmp6Result = _slicedToArray(ref.useState(first3), 2);
  first4 = tmp6Result[0];
  closure_13 = tmp6Result[1];
  tmp6Result = _slicedToArray(obj.useState(null), 2);
  first5 = tmp6Result[0];
  closure_15 = tmp6Result[1];
  [c16, c17] = _slicedToArray(obj.useState(false), 2);
  useMountEffectDefault(() => {
    if (importDefault != null) {
      tmp();
    }
    dependencyMap();
  });
  let obj2 = optionsTree(4992);
  const unmountEffect = obj2.useUnmountEffect(() => {
    if (c16) {
      let obj = { rating: first2, category: null, reason: null, dontShowAgain: null };
      value = undefined;
      const obj2 = ModalActionCreatorsDefault;
      if (first4 != null) {
        value = first4.value;
      }
      obj = {
        result: null,
        trackReport: null,
        titleLabel: null,
        descriptionLabel: null,
        hideHelpdeskLink: null,
        category: value,
        reason: first5,
        dontShowAgain: first1,
      };
      obj.result = obj;
      obj.trackReport = function trackReport(rating) {
        const obj = {
          rating: rating.rating,
          category: rating.category,
          reason: rating.reason,
          dontShowAgain: rating.dontShowAgain,
          feedback: null,
        };
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
      obj.titleLabel = problemsHeader;
      const intl = util.intl;
      obj.descriptionLabel = intl.string(util.t.h95hcn);
      let hideHelpdeskLink;
      if (first4 != null) {
        const freeformConfig = first4.freeformConfig;
        if (freeformConfig != null) {
          hideHelpdeskLink = freeformConfig.hideHelpdeskLink;
        }
      }
      obj.hideHelpdeskLink = hideHelpdeskLink;
      obj2.pushLazy(asyncRequireImpl(11648, dependencyMap.paths), obj);
      const tmp11 = asyncRequireImpl(11648, dependencyMap.paths);
    } else {
      obj = { rating: first2, category: null, reason: null, dontShowAgain: null, feedback: "" };
      value = undefined;
      if (first4 != null) {
        value = first4.value;
      }
      if (value == null) {
        value = null;
      }
      obj.category = value;
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
      obj = { style: tmp.ratingsBody, variant: "text-md/medium", color: "text-default", children: ratingBody };
      tmp35 = closure_7(tmp20(4556).Text, obj);
    }
    const items2 = [tmp35, ,];
    obj = { ratingOptions, selectedRating: first2, onChangeRating: callback };
    items2[1] = closure_7(RatingSelectorDefault, obj);
    let tmp37Result = null;
    if (!hideDontShowAgainCheckbox) {
      obj1 = { start: true, end: true, checked: first1, label: null, onPress: null };
      const intl3 = tmp20(1114).intl;
      obj1.label = intl3.string(tmp20(1114).t["5E9SB9"]);
      obj1.onPress = function onPress() {
        return closure_9(!first1);
      };
      tmp37Result = tmp37(tmp20(5604).TableCheckboxRow, obj1);
    }
    obj2 = { children: null };
    items2[2] = tmp37Result;
    obj2.children = items2;
    let tmp33Result = closure_9(first1, obj2);
    let problemsHeader = headerLabel;
    tmp37 = closure_7;
  } else {
    if (first2 !== first.GOOD) {
      if (null == first4) {
        const obj3 = { children: null };
        const obj4 = { style: tmp.problemsList, children: null };
        const obj5 = {
          hasIcons: false,
          children: first.map((label, index) => {
            closure_0 = label;
            return closure_7(
              optionsTree(5605).TableRow,
              {
                label: label.label,
                labelLineClamp: 2,
                onPress() {
                  return closure_18(closure_0);
                },
              },
              index,
            );
          }),
        };
        obj4.children = closure_7(tmp20(5687).TableRowGroup, obj5);
        const items3 = [closure_7(closure_5, obj4)];
        const obj6 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl2 = tmp20(1114).intl;
        obj6.text = intl2.string(tmp20(1114).t["13/7kX"]);
        obj6.onPress = function onPress() {
          return closure_11(null);
        };
        items3[1] = closure_7(tmp20(4975).Button, obj6);
        obj3.children = items3;
        tmp33Result = closure_9(first1, obj3);
        problemsHeader = categoriesHeader;
      }
    }
    problemsHeader = headerLabel;
    if (tmp23) {
      problemsHeader = first4.problemsHeader;
      const obj7 = { children: null };
      const obj8 = { style: tmp.problemsList, children: null };
      const obj9 = { hasIcons: false, children: null };
      const problemOptions = first4.problemOptions;
      obj9.children = problemOptions.map((label, index) => {
        closure_0 = label;
        return closure_7(
          optionsTree(5605).TableRow,
          {
            label: label.label,
            labelLineClamp: 2,
            onPress() {
              return closure_19(closure_0);
            },
          },
          index,
        );
      });
      obj8.children = closure_7(tmp20(5687).TableRowGroup, obj9);
      const items4 = [closure_7(closure_5, obj8)];
      const obj10 = { variant: "secondary", size: "sm", text: null, onPress: null };
      let intl = tmp20(1114).intl;
      obj10.text = intl.string(tmp20(1114).t["13/7kX"]);
      obj10.onPress = function onPress() {
        if (1 === first.length) {
          let tmp3 = closure_11(null);
        } else {
          tmp3 = closure_13(null);
        }
        return tmp3;
      };
      items4[1] = closure_7(tmp20(4975).Button, obj10);
      obj7.children = items4;
      tmp33Result = closure_9(first1, obj7);
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
  obj11.maxHeight = tmp41;
  const obj12 = { title: problemsHeader, trailing: null };
  let tmp40Result = null;
  if (showHeaderCloseButton) {
    const obj13 = { onPress };
    tmp40Result = tmp40(tmp20(7199).ActionSheetCloseButton, obj13);
  }
  obj12.trailing = tmp40Result;
  obj11.header = closure_7(optionsTree(7149).BottomSheetTitleHeader, obj12);
  const obj14 = { contentContainerStyle: null, children: tmp33Result };
  const items5 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  obj14.contentContainerStyle = items5;
  obj11.children = closure_7(optionsTree(6627).BottomSheetScrollView, obj14);
  return closure_7(optionsTree(7150).BottomSheet, obj11);
}
