// === Module 10871: closeActionSheet ===

// Module 10871 (closeActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { FeedbackRating } from "FeedbackRating" /* 10850 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
function closeActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, ratingsHeader: null, reasonsList: null };
createCacheKey = { padding: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginBottom: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/feedback/native/FeedbackActionSheet.tsx");

export default function FeedbackActionSheet(feedbackReasons) {
  ({ hideDontShowAgainCheckbox, ratingsBodyLabel, reasons } = feedbackReasons);
  feedbackReasons = feedbackReasons.feedbackReasons;
  const otherKey = feedbackReasons.otherKey;
  ({ trackOpen: closure_3, trackReport: closure_4, getFreeformDescription: View } = feedbackReasons);
  let ref;
  closure_7 = undefined;
  c8 = undefined;
  let first;
  closure_10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  let first1;
  closure_16 = undefined;
  closure_17 = undefined;
  ({ headerLabel, showHeaderCloseButton, ratingOptions, ratingTextLabels, reasonsHeaderLabel } = feedbackReasons);
  let tmp = first();
  ref = React.useRef(null);
  const tmp5 = feedbackReasons(otherKey[8])(reasons);
  closure_7 = tmp5;
  let obj = feedbackReasons(otherKey[9]);
  [arr, c8] = callback(React.useState(obj.shuffle(reasons)), 2);
  const items = [reasons, tmp5, otherKey];
  const effect = React.useEffect(() => {
    if (!obj.isEqual(closure_7, reasons)) {
      _undefined(reasons(otherKey[10]).shuffleProblems(reasons, otherKey));
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
  obj1 = reasons(otherKey[11]);
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
    callback5(arg0);
    if (arg0 === ref.GOOD) {
      _undefined2(null);
      _undefined3(false);
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
    _undefined2(value);
    let hasItem;
    if (feedbackReasons != null) {
      hasItem = feedbackReasons.includes(value.value);
    }
    if (hasItem) {
      _undefined3(true);
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
  obj[4] = closure_7(reasons(otherKey[17]).BottomSheetTitleHeader, obj);
  let obj2 = { contentContainerStyle: items2, children: null };
  items2 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  tmp21Result = null;
  if (null != ratingsBodyLabel) {
    const obj3 = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj3[0] = tmp.ratingsHeader;
    obj3[3] = ratingsBodyLabel;
    tmp21Result = tmp21(tmp15(tmp4[20]).Text, obj3);
  }
  const items3 = [tmp21Result, closure_7(feedbackReasons(otherKey[21]), { ratingOptions, textLabels: ratingTextLabels, selectedRating: first, onChangeRating: callback }), , ];
  let tmp21Result1 = null;
  if (tmp18) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.reasonsList;
    const obj5 = { title: null, hasIcons: false, children: null };
    obj5[0] = reasonsHeaderLabel;
    obj5[2] = arr.map((label) => {
      closure_0 = label;
      let tmp;
      if (null != label.label) {
        const obj = { label: null, labelLineClamp: 2, onPress: null };
        obj[0] = label.label;
        obj[2] = function onPress() {
          return closure_1_17(closure_0);
        };
        tmp = callback4(reasons(otherKey[23]).TableRow, obj, arg1);
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
      return callback6(!first1);
    };
    tmp21Result2 = tmp21(tmp15(tmp4[24]).TableCheckboxRow, obj6);
  }
  items3[3] = tmp21Result2;
  obj2[1] = items3;
  obj[5] = c8(reasons(otherKey[19]).BottomSheetScrollView, obj2);
  return closure_7(reasons(otherKey[16]).BottomSheet, obj);
};