// === Module 9700: closeActionSheet ===

// Module 9700 (closeActionSheet)
import _slicedToArray from "_slicedToArray";
import BottomSheetModal from "BottomSheetModal";
import { View } from "RedesignBottomSheetTitleHeaderBase";
import { FeedbackRating } from "FeedbackRating";
import jsxProd from "RatingSelector";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
function closeActionSheet() {
  importDefault(4223).hideActionSheet();
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, ratingsHeader: null, reasonsList: null };
createCacheKey = { padding: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { marginBottom: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginBottom: require("Themes").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/feedback/native/FeedbackActionSheet.tsx");

export default function FeedbackActionSheet(feedbackReasons) {
  let View;
  let arr;
  let c11;
  let c12;
  let c13;
  let c14;
  let c8;
  let _slicedToArray;
  let BottomSheetModal;
  let headerLabel;
  let hideDontShowAgainCheckbox;
  let ratingOptions;
  let ratingTextLabels;
  let ratingsBodyLabel;
  let reasons;
  let reasonsHeaderLabel;
  let showHeaderCloseButton;
  ({ hideDontShowAgainCheckbox, ratingsBodyLabel, reasons } = feedbackReasons);
  feedbackReasons = feedbackReasons.feedbackReasons;
  const otherKey = feedbackReasons.otherKey;
  ({ trackOpen: _slicedToArray, trackReport: BottomSheetModal, getFreeformDescription: View } = feedbackReasons);
  let ref;
  let c7;
  c8 = undefined;
  let first;
  let closure_10;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  let first1;
  let closure_16;
  let closure_17;
  ({ headerLabel, showHeaderCloseButton, ratingOptions, ratingTextLabels, reasonsHeaderLabel } = feedbackReasons);
  let tmp = first();
  ref = React.useRef(null);
  const tmp5 = feedbackReasons(otherKey[8])(reasons);
  c7 = tmp5;
  let obj = feedbackReasons(otherKey[9]);
  [arr, c8] = callback(React.useState(obj.shuffle(reasons)), 2);
  const items = [reasons, tmp5, otherKey];
  const effect = React.useEffect(() => {
    if (!obj.isEqual(c7, reasons)) {
      _undefined2(reasons(otherKey[10]).shuffleProblems(reasons, otherKey));
      const obj2 = reasons(otherKey[10]);
    }
  }, items);
  const tmp8 = callback(React.useState(null), 2);
  first = tmp8[0];
  closure_10 = tmp8[1];
  const tmp6 = callback(React.useState(obj.shuffle(reasons)), 2);
  [c11, c12] = callback(React.useState(null), 2);
  const tmp10 = callback(React.useState(null), 2);
  [c13, c14] = callback(React.useState(false), 2);
  const tmp12 = callback(React.useState(false), 2);
  first1 = tmp12[0];
  closure_16 = tmp12[1];
  feedbackReasons(otherKey[11])(() => {
    callback();
  });
  let obj1 = reasons(otherKey[11]);
  const unmountEffect = obj1.useUnmountEffect(() => {
    if (c13) {
      let obj = { result: null, trackReport: null, descriptionLabel: null };
      obj = { rating: null, reason: null, dontShowAgain: null };
      obj[0] = first;
      obj[1] = c11;
      obj[2] = first1;
      obj[0] = obj;
      obj[1] = callback2;
      let tmp14;
      const obj2 = feedbackReasons(otherKey[12]);
      if (callback3 != null) {
        tmp14 = callback3(c11);
      }
      obj[2] = tmp14;
      obj2.pushLazy(reasons(otherKey[14])(otherKey[13], otherKey.paths), obj);
      const tmp9 = reasons(otherKey[14])(otherKey[13], otherKey.paths);
    } else {
      obj = { rating: null, reason: null, dontShowAgain: null };
      obj[0] = first;
      obj[1] = c11;
      obj[2] = first1;
      callback2(obj);
    }
  });
  const items1 = [feedbackReasons];
  callback = React.useCallback((arg0) => {
    callback4(arg0);
    if (arg0 === ref.GOOD) {
      _undefined3(null);
      _undefined4(false);
      feedbackReasons(otherKey[7]).hideActionSheet();
      const obj = feedbackReasons(otherKey[7]);
    } else {
      const current = ref.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  }, []);
  closure_17 = React.useCallback((value) => {
    _undefined3(value);
    let hasItem;
    if (feedbackReasons != null) {
      hasItem = feedbackReasons.includes(value.value);
    }
    if (hasItem) {
      _undefined4(true);
    }
    feedbackReasons(otherKey[7]).hideActionSheet();
  }, items1);
  let tmp18 = null !== first;
  if (tmp18) {
    tmp18 = first !== ref.GOOD;
  }
  const bottom = tmp3(tmp4[15])().bottom;
  let num = 48;
  if (hideDontShowAgainCheckbox) {
    num = 0;
  }
  const sum = 232 + num + bottom;
  obj = { scrollable: true, ref, startHeight: sum, maxHeight: null, header: null, children: null };
  let tmp22;
  if (null == first) {
    tmp22 = sum;
  }
  obj[3] = tmp22;
  obj = { title: headerLabel, trailing: null };
  let tmp21Result = null;
  if (showHeaderCloseButton) {
    obj1 = { onPress: null };
    obj1[0] = closure_10;
    tmp21Result = tmp21(tmp15(tmp4[18]).ActionSheetCloseButton, obj1);
  }
  obj[1] = tmp21Result;
  obj[4] = c7(reasons(otherKey[17]).BottomSheetTitleHeader, obj);
  let obj2 = { contentContainerStyle: items2, children: null };
  items2 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  tmp21Result = null;
  if (null != ratingsBodyLabel) {
    const obj3 = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj3[0] = tmp.ratingsHeader;
    obj3[3] = ratingsBodyLabel;
    tmp21Result = tmp21(tmp15(tmp4[20]).Text, obj3);
  }
  const items3 = [tmp21Result, c7(feedbackReasons(otherKey[21]), { ratingOptions, textLabels: ratingTextLabels, selectedRating: first, onChangeRating: callback }), , ];
  let tmp21Result1 = null;
  if (tmp18) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.reasonsList;
    const obj5 = { title: null, hasIcons: false, children: null };
    obj5[0] = reasonsHeaderLabel;
    obj5[2] = arr.map((label) => {
      let closure_0 = label;
      let tmp;
      if (null != label.label) {
        const obj = { label: null, labelLineClamp: 2, onPress: null };
        obj[0] = label.label;
        obj[2] = function onPress() {
          return outer1_17(closure_0);
        };
        tmp = _undefined(reasons(otherKey[23]).TableRow, obj, arg1);
      }
      return tmp;
    });
    obj4[1] = tmp21(tmp15(tmp4[22]).TableRowGroup, obj5);
    tmp21Result1 = tmp21(View, obj4);
  }
  items3[2] = tmp21Result1;
  let tmp21Result2 = null;
  if (!hideDontShowAgainCheckbox) {
    const obj6 = { start: true, end: true, checked: null, label: null, onPress: null };
    obj6[2] = first1;
    const intl = tmp15(tmp4[25]).intl;
    obj6[3] = intl.string(tmp15(tmp4[25]).t["5E9SB9"]);
    obj6[4] = function onPress() {
      return callback5(!first1);
    };
    tmp21Result2 = tmp21(tmp15(tmp4[24]).TableCheckboxRow, obj6);
  }
  items3[3] = tmp21Result2;
  obj2[1] = items3;
  obj[5] = c8(reasons(otherKey[19]).BottomSheetScrollView, obj2);
  return c7(reasons(otherKey[16]).BottomSheet, obj);
};