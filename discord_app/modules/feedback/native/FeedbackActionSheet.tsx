// === Module 11902: FeedbackActionSheet ===

// Module 11902 (FeedbackActionSheet)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import FeedbackUtils from "FeedbackUtils" /* 11884 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function closeActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
}
const View = fn(17).View;
const FeedbackRating = fn(11881).FeedbackRating;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, ratingsHeader: { textAlign: "center" }, reasonsList: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.reasonsList = { marginBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/native/FeedbackActionSheet.tsx");

export default function FeedbackActionSheet(feedbackReasons) {
  ({ hideDontShowAgainCheckbox, ratingsBodyLabel, reasons } = feedbackReasons);
  feedbackReasons = feedbackReasons.feedbackReasons;
  const otherKey = feedbackReasons.otherKey;
  ({ trackOpen: _slicedToArray, trackReport: noop, getFreeformDescription: View } = feedbackReasons);
  c8 = undefined;
  selectedRating = undefined;
  onPress = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  first1 = undefined;
  closure_16 = undefined;
  ({ headerLabel, showHeaderCloseButton, ratingOptions, ratingTextLabels, reasonsHeaderLabel } = feedbackReasons);
  let tmp = selectedRating();
  const ref = noop.useRef(null);
  const tmp5 = feedbackReasons(otherKey[8])(reasons);
  closure_7 = tmp5;
  let obj = feedbackReasons(otherKey[9]);
  [arr, c8] = noop.useState(feedbackReasons(otherKey[9]).shuffle(reasons));
  const items = [reasons, tmp5, otherKey];
  const effect = noop.useEffect(() => {
    if (!obj.isEqual(closure_7, reasons)) {
      _undefined(FeedbackUtils.shuffleProblems(reasons, otherKey));
    }
    obj = _modDef12;
  }, items);
  [selectedRating, onPress] = noop.useState(null);
  const tmp6 = _slicedToArray(noop.useState(feedbackReasons(otherKey[9]).shuffle(reasons)), 2);
  [c11, c12] = noop.useState(null);
  const tmp10 = _slicedToArray(noop.useState(null), 2);
  [c13, c14] = noop.useState(false);
  [first1, closure_16] = noop.useState(false);
  feedbackReasons(otherKey[11])(() => {
    _slicedToArray();
  });
  const tmp11 = _slicedToArray(noop.useState(false), 2);
  const unmountEffect = reasons(otherKey[11]).useUnmountEffect(() => {
    if (c13) {
      const obj3 = { result: null, trackReport: null, descriptionLabel: null };
      const obj4 = { rating, reason, dontShowAgain: first1 };
      obj3.result = obj4;
      obj3.trackReport = trackReport;
      let tmp14;
      const obj2 = ModalActionCreatorsDefault;
      if (View != null) {
        tmp14 = View(reason);
      }
      obj3.descriptionLabel = tmp14;
      obj2.pushLazy(asyncRequireImpl(11903, dependencyMap.paths), obj3);
      const tmp9 = asyncRequireImpl(11903, dependencyMap.paths);
    } else {
      const obj = { rating, reason, dontShowAgain: first1 };
      trackReport(obj);
    }
  });
  const items1 = [feedbackReasons];
  const callback = noop.useCallback((arg0) => {
    closure_10(arg0);
    if (arg0 === FeedbackRating.GOOD) {
      _undefined2(null);
      _undefined3(false);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    } else {
      const current = ref.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  }, []);
  closure_17 = noop.useCallback((value) => {
    _undefined2(value);
    let hasItem;
    if (feedbackReasons != null) {
      hasItem = feedbackReasons.includes(value.value);
    }
    if (hasItem) {
      _undefined3(true);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  let tmp18 = null !== selectedRating;
  if (tmp18) {
    tmp18 = selectedRating !== ref.GOOD;
  }
  const bottom = tmp3(tmp4[15])().bottom;
  let num = 48;
  if (hideDontShowAgainCheckbox) {
    num = 0;
  }
  const sum = 232 + num + bottom;
  let obj3 = { scrollable: true, ref, startHeight: sum, maxHeight: null, header: null, children: null };
  let tmp22;
  if (null == selectedRating) {
    tmp22 = sum;
  }
  obj3.maxHeight = tmp22;
  let obj4 = { title: headerLabel, trailing: null };
  let tmp21Result = null;
  if (showHeaderCloseButton) {
    const obj5 = { onPress };
    tmp21Result = tmp21(reasons(tmp4[18]).ActionSheetCloseButton, obj5);
  }
  obj4.trailing = tmp21Result;
  obj3.header = closure_7(reasons(otherKey[17]).BottomSheetTitleHeader, obj4);
  const obj6 = { contentContainerStyle: null, children: null };
  const items2 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  obj6.contentContainerStyle = items2;
  let tmp21Result4 = null;
  if (null != ratingsBodyLabel) {
    const obj7 = { style: tmp.ratingsHeader, variant: "text-md/medium", color: "text-default", children: ratingsBodyLabel };
    tmp21Result4 = tmp21(reasons(tmp4[20]).Text, obj7);
  }
  const items3 = [tmp21Result4, closure_7(feedbackReasons(otherKey[21]), { ratingOptions, textLabels: ratingTextLabels, selectedRating, onChangeRating: callback }), , ];
  let tmp21Result5 = null;
  if (tmp18) {
    const obj8 = { style: tmp.reasonsList, children: null };
    const obj9 = {
      title: reasonsHeaderLabel,
      hasIcons: false,
      children: arr.map((label, index) => {
          closure_0 = label;
          let tmp;
          if (null != label.label) {
            const obj = {
              label: label.label,
              labelLineClamp: 2,
              onPress() {
                  return closure_17(closure_0);
                }
            };
            tmp = closure_7(reasons(otherKey[23]).TableRow, obj, index);
          }
          return tmp;
        })
    };
    obj8.children = tmp21(reasons(tmp4[22]).TableRowGroup, obj9);
    tmp21Result5 = tmp21(View, obj8);
  }
  items3[2] = tmp21Result5;
  let tmp21Result6 = null;
  if (!hideDontShowAgainCheckbox) {
    const obj10 = { start: true, end: true, checked: first1, label: null, onPress: null };
    const intl = reasons(tmp4[25]).intl;
    obj10.label = intl.string(reasons(tmp4[25]).t["5E9SB9"]);
    obj10.onPress = function onPress() {
      return closure_16(!first1);
    };
    tmp21Result6 = tmp21(reasons(tmp4[24]).TableCheckboxRow, obj10);
  }
  items3[3] = tmp21Result6;
  obj6.children = items3;
  obj3.children = c8(reasons(otherKey[19]).BottomSheetScrollView, obj6);
  return closure_7(reasons(otherKey[16]).BottomSheet, obj3);
};