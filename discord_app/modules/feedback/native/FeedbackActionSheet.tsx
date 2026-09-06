// discord_app/modules/feedback/native/FeedbackActionSheet.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import FeedbackUtils from "../FeedbackUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function closeActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
}
const View = fn(17).View;
const FeedbackRating = fn(11626).FeedbackRating;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, ratingsHeader: null, reasonsList: null };
createStyles = { padding: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.ratingsHeader = { textAlign: "center" };
createStyles.reasonsList = { marginBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/native/FeedbackActionSheet.tsx");

export default function FeedbackActionSheet(feedbackReasons) {
  ({ hideDontShowAgainCheckbox, ratingsBodyLabel, reasons } = feedbackReasons);
  feedbackReasons = feedbackReasons.feedbackReasons;
  const otherKey = feedbackReasons.otherKey;
  ({ trackOpen: _slicedToArray, trackReport: noop, getFreeformDescription: View } = feedbackReasons);
  c8 = undefined;
  let selectedRating;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  ({ headerLabel, showHeaderCloseButton, ratingOptions, ratingTextLabels, reasonsHeaderLabel } = feedbackReasons);
  let tmp = selectedRating();
  const ref = noop.useRef(null);
  const tmp5 = feedbackReasons(otherKey[8])(reasons);
  closure_7 = tmp5;
  let obj = feedbackReasons(otherKey[9]);
  [arr, c8] = _slicedToArray(noop.useState(obj.shuffle(reasons)), 2);
  const items = [reasons, tmp5, otherKey];
  const effect = noop.useEffect(() => {
    if (!obj.isEqual(closure_7, reasons)) {
      _undefined(FeedbackUtils.shuffleProblems(reasons, otherKey));
    }
    obj = _modDef12;
  }, items);
  const tmp8 = _slicedToArray(noop.useState(null), 2);
  selectedRating = tmp8[0];
  onPress = tmp8[1];
  const tmp6 = _slicedToArray(noop.useState(obj.shuffle(reasons)), 2);
  [c11, c12] = _slicedToArray(noop.useState(null), 2);
  const tmp10 = _slicedToArray(noop.useState(null), 2);
  [c13, c14] = _slicedToArray(noop.useState(false), 2);
  const tmp12 = _slicedToArray(noop.useState(false), 2);
  const first1 = tmp12[0];
  closure_16 = tmp12[1];
  feedbackReasons(otherKey[11])(() => {
    _slicedToArray();
  });
  let obj1 = reasons(otherKey[11]);
  const unmountEffect = obj1.useUnmountEffect(() => {
    if (c13) {
      let obj = { result: null, trackReport: null, descriptionLabel: null };
      obj = { rating, reason, dontShowAgain: first1 };
      obj.result = obj;
      obj.trackReport = trackReport;
      let tmp14;
      const obj2 = ModalActionCreatorsDefault;
      if (View != null) {
        tmp14 = View(reason);
      }
      obj.descriptionLabel = tmp14;
      obj2.pushLazy(asyncRequireImpl(11648, dependencyMap.paths), obj);
      const tmp9 = asyncRequireImpl(11648, dependencyMap.paths);
    } else {
      obj = { rating, reason, dontShowAgain: first1 };
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
  obj = { scrollable: true, ref, startHeight: sum, maxHeight: null, header: null, children: null };
  let tmp22;
  if (null == selectedRating) {
    tmp22 = sum;
  }
  obj.maxHeight = tmp22;
  obj = { title: headerLabel, trailing: null };
  let tmp21Result = null;
  if (showHeaderCloseButton) {
    obj1 = { onPress };
    tmp21Result = tmp21(reasons(tmp4[18]).ActionSheetCloseButton, obj1);
  }
  obj.trailing = tmp21Result;
  obj.header = closure_7(reasons(otherKey[17]).BottomSheetTitleHeader, obj);
  let obj2 = { contentContainerStyle: null, children: null };
  const items2 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  obj2.contentContainerStyle = items2;
  tmp21Result = null;
  if (null != ratingsBodyLabel) {
    const obj3 = {
      style: tmp.ratingsHeader,
      variant: "text-md/medium",
      color: "text-default",
      children: ratingsBodyLabel,
    };
    tmp21Result = tmp21(reasons(tmp4[20]).Text, obj3);
  }
  const items3 = [
    tmp21Result,
    closure_7(feedbackReasons(otherKey[21]), {
      ratingOptions,
      textLabels: ratingTextLabels,
      selectedRating,
      onChangeRating: callback,
    }),
    ,
  ];
  let tmp21Result1 = null;
  if (tmp18) {
    const obj4 = { style: tmp.reasonsList, children: null };
    const obj5 = {
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
            },
          };
          tmp = closure_7(reasons(otherKey[23]).TableRow, obj, index);
        }
        return tmp;
      }),
    };
    obj4.children = tmp21(reasons(tmp4[22]).TableRowGroup, obj5);
    tmp21Result1 = tmp21(View, obj4);
  }
  items3[2] = tmp21Result1;
  let tmp21Result2 = null;
  if (!hideDontShowAgainCheckbox) {
    const obj6 = { start: true, end: true, checked: first1, label: null, onPress: null };
    const intl = reasons(tmp4[25]).intl;
    obj6.label = intl.string(reasons(tmp4[25]).t["5E9SB9"]);
    obj6.onPress = function onPress() {
      return closure_16(!first1);
    };
    tmp21Result2 = tmp21(reasons(tmp4[24]).TableCheckboxRow, obj6);
  }
  items3[3] = tmp21Result2;
  obj2.children = items3;
  obj.children = c8(reasons(otherKey[19]).BottomSheetScrollView, obj2);
  return closure_7(reasons(otherKey[16]).BottomSheet, obj);
}
