// === Module 11270: FeedbackActionSheet ===

// Module 11270 (FeedbackActionSheet)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import Constants from "Constants" /* 11249 */;
import FeedbackUtils from "FeedbackUtils" /* 11252 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let BottomSheet, onPress;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function closeActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
}
const View = react_native.View;
const FeedbackRating = Constants.FeedbackRating;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, ratingsHeader: { textAlign: "center" }, reasonsList: obj3 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/feedback/native/FeedbackActionSheet.tsx");

export default function FeedbackActionSheet(feedbackReasons) {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let TableRowGroup;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let arr;
  let c11;
  let c12;
  let c13;
  let c14;
  let c8;
  let closure_10;
  let closure_16;
  let first;
  let first1;
  let headerLabel;
  let hideDontShowAgainCheckbox;
  let intl;
  let items2;
  let items3;
  let obj4;
  let obj6;
  let obj9;
  let ratingOptions;
  let ratingTextLabels;
  let ratingsBodyLabel;
  let reason;
  let reasons;
  let reasonsHeaderLabel;
  let selectedRating;
  let showHeaderCloseButton;
  let tmp21Result;
  let tmp22;
  let tmp25;
  let trackReport;
  ({ hideDontShowAgainCheckbox, ratingsBodyLabel, reasons } = feedbackReasons);
  feedbackReasons = feedbackReasons.feedbackReasons;
  const otherKey = feedbackReasons.otherKey;
  ({ trackOpen: _slicedToArray, trackReport: react, getFreeformDescription: View } = feedbackReasons);
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
  const ref = react.useRef(null);
  const tmp5 = feedbackReasons(otherKey[8])(reasons);
  let closure_7 = tmp5;
  const useState = react.useState;
  let obj = feedbackReasons(otherKey[9]);
  [arr, c8] = _slicedToArray(useState(obj.shuffle(reasons)), 2);
  const items = [reasons, tmp5, otherKey];
  const tmp6 = _slicedToArray(useState(obj.shuffle(reasons)), 2);
  const effect = react.useEffect(() => {
    const obj = _modDef12;
    if (!obj.isEqual(closure_7, reasons)) {
      const obj2 = FeedbackUtils;
      _undefined(obj2.shuffleProblems(reasons, otherKey));
    }
  }, items);
  [selectedRating, onPress] = react.useState(null);
  [c11, c12] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  let tmp11 = _slicedToArray(react.useState(false), 2);
  [c13, c14] = tmp11;
  [first1, closure_16] = react.useState(false);
  feedbackReasons(otherKey[11])(() => {
    _slicedToArray();
  });
  let obj2 = reasons(otherKey[11]);
  const unmountEffect = obj2.useUnmountEffect(() => {
    let obj3;
    let tmp16;
    if (c13) {
      const pushLazy = ModalActionCreatorsDefault.pushLazy;
      const obj2 = { result: obj3, trackReport: react, descriptionLabel: tmp16 };
      tmp16 = undefined;
      obj3 = { rating, reason, dontShowAgain: first1 };
      ModalActionCreatorsDefault;
      const tmp11 = asyncRequire(11271, dependencyMap.paths);
      if (View != null) {
        tmp16 = View(reason);
      }
      pushLazy(tmp11, obj2);
    } else {
      const obj = { rating, reason, dontShowAgain: first1 };
      react(obj);
    }
  });
  const items1 = [feedbackReasons];
  const callback = react.useCallback((arg0) => {
    closure_10(arg0);
    if (arg0 === FeedbackRating.GOOD) {
      _undefined2(null);
      _undefined3(false);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    } else {
      const current = ref.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  }, []);
  let closure_17 = react.useCallback((value) => {
    _undefined2(value);
    let hasItem;
    if (feedbackReasons != null) {
      hasItem = feedbackReasons.includes(value.value);
    }
    if (hasItem) {
      _undefined3(true);
    }
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items1);
  const tmp18 = null !== selectedRating && selectedRating !== ref.GOOD;
  const bottom = tmp3(tmp4[15])().bottom;
  let num = 48;
  if (hideDontShowAgainCheckbox) {
    num = 0;
  }
  const sum = 232 + num + bottom;
  let obj3 = { scrollable: true, ref, startHeight: sum, maxHeight: tmp22, header: closure_7(BottomSheetTitleHeader, obj4), children: tmp25(BottomSheetScrollView, obj6) };
  tmp22 = undefined;
  BottomSheet = reasons(tmp4[16]).BottomSheet;
  if (null == selectedRating) {
    tmp22 = sum;
  }
  obj4 = { title: headerLabel, trailing: tmp21Result };
  tmp21Result = null;
  BottomSheetTitleHeader = reasons(tmp4[17]).BottomSheetTitleHeader;
  if (showHeaderCloseButton) {
    const obj5 = { onPress };
    tmp21Result = tmp21(reasons(tmp4[18]).ActionSheetCloseButton, obj5);
  }
  obj6 = { contentContainerStyle: items2, children: items3 };
  items2 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  let tmp21Result4 = null;
  BottomSheetScrollView = reasons(tmp4[19]).BottomSheetScrollView;
  tmp25 = c8;
  if (null != ratingsBodyLabel) {
    const obj7 = { style: tmp.ratingsHeader, variant: "text-md/medium", color: "text-default", children: ratingsBodyLabel };
    tmp21Result4 = tmp21(reasons(tmp4[20]).Text, obj7);
  }
  items3 = [tmp21Result4, closure_7(tmp3(tmp4[21]), { ratingOptions, textLabels: ratingTextLabels, selectedRating, onChangeRating: callback }), , ];
  let tmp21Result5 = null;
  if (tmp18) {
    const obj8 = { style: tmp.reasonsList, children: closure_7(TableRowGroup, obj9) };
    obj9 = {
      title: reasonsHeaderLabel,
      hasIcons: false,
      children: arr.map((label, index) => {
          let closure_0 = label;
          let tmp;
          if (null != label.label) {
            const obj = {
              label: label.label,
              labelLineClamp: 2,
              onPress() {
                  return closure_17(label);
                }
            };
            tmp = closure_7(reasons(otherKey[23]).TableRow, obj, index);
          }
          return tmp;
        })
    };
    TableRowGroup = reasons(tmp4[22]).TableRowGroup;
    tmp21Result5 = tmp21(View, obj8);
  }
  items3[2] = tmp21Result5;
  let tmp21Result6 = null;
  if (!hideDontShowAgainCheckbox) {
    const obj10 = {
      start: true,
      end: true,
      checked: first1,
      label: intl.string(reasons(otherKey[25]).t["5E9SB9"]),
      onPress() {
          return closure_16(!first1);
        }
    };
    const TableCheckboxRow = reasons(tmp4[24]).TableCheckboxRow;
    intl = reasons(tmp4[25]).intl;
    tmp21Result6 = tmp21(TableCheckboxRow, obj10);
  }
  items3[3] = tmp21Result6;
  return closure_7(BottomSheet, obj3);
};