// === Module 11436: FeedbackForm ===

// Module 11436 (FeedbackForm)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { FeedbackRating } from "FeedbackRating" /* 11434 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { ratingsLabel: { textAlign: "center" }, reasonsHeader: { marginBottom: 8 }, reasonsList: { overflow: "hidden", marginBottom: 12, padding: 0 }, reason: null, doNotShowAgainContainer: null };
createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { paddingHorizontal: 0, paddingVertical: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingHorizontal: 0, paddingVertical: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
const result = require("set").fileFinishedImporting("modules/feedback/native/FeedbackForm.tsx");

export const FeedbackForm = function FeedbackForm(otherKey) {
  ({ ratingsBodyLabel, reasons } = otherKey);
  otherKey = otherKey.otherKey;
  const onFeedbackChanged = otherKey.onFeedbackChanged;
  const trackOpen = otherKey.trackOpen;
  let React;
  FeedbackRating = undefined;
  let callback;
  let first;
  let callback2;
  ({ showDoNotShowAgainCheckbox, reasonsHeaderLabel } = otherKey);
  const tmp = callback2();
  React = tmp;
  const tmp4 = otherKey(onFeedbackChanged[6])(reasons);
  FeedbackRating = tmp4;
  let obj = otherKey(onFeedbackChanged[7]);
  [arr, c6] = trackOpen(React.useState(obj.shuffle(reasons)), 2);
  let items = [reasons, tmp4, otherKey];
  const effect = React.useEffect(() => {
    if (!obj.isEqual(closure_5, reasons)) {
      _undefined(reasons(onFeedbackChanged[8]).shuffleProblems(reasons, otherKey));
      const obj2 = reasons(onFeedbackChanged[8]);
    }
  }, items);
  const tmp8 = trackOpen(React.useState({}), 2);
  first = tmp8[0];
  callback2 = tmp8[1];
  otherKey(onFeedbackChanged[9])(() => {
    trackOpen();
  });
  const items1 = [first, onFeedbackChanged];
  callback = React.useCallback(() => {
    let flag = first.doNotShowAgain;
    if (flag == null) {
      flag = false;
    }
    const obj = {};
    const merged = Object.assign(tmp);
    obj.doNotShowAgain = !flag;
    callback(obj);
    onFeedbackChanged(first);
  }, items1);
  const found = arr.filter((label) => Boolean(label.label));
  let tmp14 = null;
  if (null != first.rating) {
    tmp14 = null;
    if (first.rating !== FeedbackRating.GOOD) {
      obj = { children: null };
      obj = { style: null, variant: "eyebrow", color: "text-default", children: null };
      obj[0] = tmp.reasonsHeader;
      obj[3] = reasonsHeaderLabel;
      const items2 = [callback(reasons(tmp3[11]).Text, obj), ];
      obj1 = { border: "subtle", style: null, children: null };
      obj1[1] = tmp.reasonsList;
      obj1[2] = tmp13;
      items2[1] = callback(reasons(tmp3[12]).Card, obj1);
      obj[0] = items2;
      tmp14 = first(tmp5.Fragment, obj);
    }
  }
  let tmp17 = null;
  if (null != ratingsBodyLabel) {
    let obj2 = { style: null, variant: "heading-md/semibold", color: "text-default", children: null };
    obj2[0] = tmp.ratingsLabel;
    obj2[3] = ratingsBodyLabel;
    tmp17 = callback(reasons(tmp3[11]).Text, obj2);
  }
  const children = [tmp17, , , ];
  let rating = first.rating;
  const tmp16 = first;
  let tmp2 = otherKey;
  const tmp6 = trackOpen(React.useState(obj.shuffle(reasons)), 2);
  if (rating == null) {
    rating = null;
  }
  children[1] = callback(otherKey(onFeedbackChanged[13]), {
    selectedRating: rating,
    onChangeRating(rating) {
      let reason = null;
      if (rating !== constants.GOOD) {
        reason = first.reason;
      }
      const obj = {};
      const merged = Object.assign(first);
      obj.rating = rating;
      obj.reason = reason;
      callback(obj);
      onFeedbackChanged(obj);
    }
  });
  children[2] = tmp14;
  let tmp20Result = null;
  if (showDoNotShowAgainCheckbox) {
    const obj4 = { style: null, leading: null, label: null, onPress: null };
    obj4[0] = tmp.doNotShowAgainContainer;
    let flag = first.doNotShowAgain;
    if (flag == null) {
      flag = false;
    }
    const obj5 = { selected: null };
    obj5[0] = flag;
    obj4[1] = tmp20(reasons(tmp3[10]).FormRow.Checkbox, obj5);
    const obj6 = { text: null };
    const intl = tmp24(tmp3[14]).intl;
    obj6[0] = intl.string(reasons(tmp3[14]).t["5E9SB9"]);
    obj4[2] = tmp20(reasons(tmp3[10]).FormRow.Label, obj6);
    obj4[3] = callback;
    tmp20Result = tmp20(reasons(tmp3[10]).FormRow, obj4);
  }
  children[3] = tmp20Result;
  return tmp16(React.Fragment, { children });
};