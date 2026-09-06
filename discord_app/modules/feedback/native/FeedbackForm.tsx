// === Module 11628: FeedbackForm ===

// Module 11628 (FeedbackForm)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import FeedbackUtils from "FeedbackUtils" /* 11629 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let FeedbackRating = fn(11626).FeedbackRating;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { ratingsLabel: { textAlign: "center" }, reasonsHeader: { marginBottom: 8 }, reasonsList: { overflow: "hidden", marginBottom: 12, padding: 0 }, reason: null, doNotShowAgainContainer: null };
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createStyles.reason = createStyles;
createStyles.doNotShowAgainContainer = { paddingHorizontal: 0, paddingVertical: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/native/FeedbackForm.tsx");

export const FeedbackForm = function FeedbackForm(otherKey) {
  ({ ratingsBodyLabel, reasons } = otherKey);
  otherKey = otherKey.otherKey;
  const onFeedbackChanged = otherKey.onFeedbackChanged;
  const trackOpen = otherKey.trackOpen;
  c6 = undefined;
  closure_8 = undefined;
  ({ showDoNotShowAgainCheckbox, reasonsHeaderLabel } = otherKey);
  const tmp = closure_8();
  noop = tmp;
  const tmp4 = otherKey(onFeedbackChanged[6])(reasons);
  FeedbackRating = tmp4;
  let obj = otherKey(onFeedbackChanged[7]);
  [arr, c6] = trackOpen(noop.useState(obj.shuffle(reasons)), 2);
  let items = [reasons, tmp4, otherKey];
  const effect = noop.useEffect(() => {
    if (!obj.isEqual(closure_5, reasons)) {
      _undefined(FeedbackUtils.shuffleProblems(reasons, otherKey));
    }
    obj = _modDef12;
  }, items);
  const tmp8 = trackOpen(noop.useState({}), 2);
  const first = tmp8[0];
  closure_8 = tmp8[1];
  otherKey(onFeedbackChanged[9])(() => {
    trackOpen();
  });
  const items1 = [first, onFeedbackChanged];
  const callback = noop.useCallback(() => {
    let flag = first.doNotShowAgain;
    if (flag == null) {
      flag = false;
    }
    const obj = {};
    const merged = Object.assign(first);
    obj.doNotShowAgain = !flag;
    closure_8(obj);
    onFeedbackChanged(first);
  }, items1);
  const found = arr.filter((label) => Boolean(label.label));
  let tmp14 = null;
  if (null != first.rating) {
    tmp14 = null;
    if (first.rating !== FeedbackRating.GOOD) {
      obj = { children: null };
      obj = { style: tmp.reasonsHeader, variant: "eyebrow", color: "text-default", children: reasonsHeaderLabel };
      const items2 = [c6(reasons(tmp3[11]).Text, obj), ];
      const obj1 = { border: "subtle", style: tmp.reasonsList, children: tmp13 };
      items2[1] = c6(reasons(tmp3[12]).Card, obj1);
      obj.children = items2;
      tmp14 = first(tmp5.Fragment, obj);
    }
  }
  let tmp17 = null;
  if (null != ratingsBodyLabel) {
    let obj2 = { style: tmp.ratingsLabel, variant: "heading-md/semibold", color: "text-default", children: ratingsBodyLabel };
    tmp17 = c6(reasons(tmp3[11]).Text, obj2);
  }
  const children = [tmp17, , , ];
  let rating = first.rating;
  const tmp16 = first;
  const tmp6 = trackOpen(noop.useState(obj.shuffle(reasons)), 2);
  if (rating == null) {
    rating = null;
  }
  children[1] = c6(otherKey(onFeedbackChanged[13]), {
    selectedRating: rating,
    onChangeRating(rating) {
      let reason = null;
      if (rating !== FeedbackRating.GOOD) {
        reason = first.reason;
      }
      const obj = {};
      const merged = Object.assign(first);
      obj.rating = rating;
      obj.reason = reason;
      closure_8(obj);
      onFeedbackChanged(obj);
    }
  });
  children[2] = tmp14;
  let tmp20Result = null;
  if (showDoNotShowAgainCheckbox) {
    const obj4 = { style: tmp.doNotShowAgainContainer, leading: null, label: null, onPress: null };
    let flag = first.doNotShowAgain;
    if (flag == null) {
      flag = false;
    }
    const obj5 = { selected: flag };
    obj4.leading = tmp20(reasons(tmp3[10]).FormRow.Checkbox, obj5);
    const obj6 = { text: null };
    const intl = tmp24(tmp3[14]).intl;
    obj6.text = intl.string(reasons(tmp3[14]).t["5E9SB9"]);
    obj4.label = tmp20(reasons(tmp3[10]).FormRow.Label, obj6);
    obj4.onPress = callback;
    tmp20Result = tmp20(reasons(tmp3[10]).FormRow, obj4);
  }
  children[3] = tmp20Result;
  return tmp16(noop.Fragment, { children });
};