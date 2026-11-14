// === Module 13774: ConjurePublishEvalCard ===

// Module 13774 (ConjurePublishEvalCard)
import nativeDefault from "native" /* 575 */;
import _modDef4131 from "module_4131" /* 4131 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5378 */;
import StarOutlineIcon2 from "StarOutlineIcon" /* 10181 */;
import StarIcon from "StarIcon" /* 10183 */;
import conjurePublishEval from "conjurePublishEval" /* 13164 */;
import noop from "module_19" /* 19 */;

require = fn;
function ScoreStar(score) {
  score = score.score;
  ({ value, disabled, onChange: importDefault } = score);
  const tmp = closure_7();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: value === score, disabled });
  if (null != value && score <= value) {
    let StarOutlineIcon = StarIcon.StarIcon;
  } else {
    StarOutlineIcon = StarOutlineIcon2.StarOutlineIcon;
  }
  const obj3 = { style: tmp.star };
  const merged = Object.assign(radioA11yNative);
  const obj2 = { selected: value === score, disabled };
  obj3.accessibilityLabel = conjurePublishEval.conjurePublishEvalScoreLabel(score.dimension, score);
  obj3.disabled = disabled;
  obj3.hitSlop = nativeDefault.space.PX_4;
  obj3.onPress = function onPress() {
    return importDefault(score);
  };
  colors = nativeDefault.colors;
  obj3.children = hasOwnProperty(StarOutlineIcon, { size: "md", color: null != value && score <= value ? colors.ICON_BRAND : colors.ICON_MUTED });
  return hasOwnProperty(React3, obj3);
}
function ScoreRow(dimension) {
  dimension = dimension.dimension;
  ({ value: importDefault, disabled: dependencyMap, onChange: closure_3 } = dimension);
  const tmp = closure_7();
  const result = dimension(13164).conjurePublishEvalDimensionLabel(dimension);
  const obj2 = { style: tmp.scoreRow, children: null };
  items = [closure_5(dimension(5929).Text, { variant: "body-sm/medium", color: "text-default", children: result }), ];
  const obj3 = { style: tmp.stars, accessibilityRole: "radiogroup", accessibilityLabel: result, children: null };
  const prop = dimension(13753).CONJURE_PUBLISH_RATINGS;
  obj3.children = prop.map((score) => hasOwnProperty(ScoreStar, { dimension, score, value, disabled, onChange }, score));
  items[1] = closure_5(closure_4, obj3);
  obj2.children = items;
  return closure_6(closure_4, obj2);
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { card: { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, header: null, scores: null, scoreRow: null, stars: null, star: null };
let obj3 = { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.header = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.scores = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj2.scoreRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.stars = { flexDirection: "row" };
let obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.star = { padding: nativeDefault.space.PX_6 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish_eval/native/ConjurePublishEvalCard.tsx");

export default function ConjurePublishEvalCard(pending) {
  let conjurePublishEvalForm;
  const tmp = closure_7();
  conjurePublishEvalForm = conjurePublishEvalForm(13164).useConjurePublishEvalForm(pending.pending);
  const obj2 = { style: tmp.card, children: null };
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { variant: "heading-md/semibold", children: null };
  const intl = conjurePublishEvalForm(1113).intl;
  obj4.children = intl.string(_modDef4131.GVLtfq);
  items = [closure_5(conjurePublishEvalForm(5929).Heading, obj4), ];
  const obj5 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl2 = conjurePublishEvalForm(1113).intl;
  obj5.children = intl2.string(_modDef4131["Zj4E+A"]);
  items[1] = closure_5(conjurePublishEvalForm(5929).Text, obj5);
  obj3.children = items;
  const items1 = [closure_6(closure_4, obj3), , , , ];
  const obj6 = { style: tmp.scores, children: null };
  const dimensions = conjurePublishEvalForm.dimensions;
  const items2 = [
    dimensions.map((dimension) => {
      conjurePublishEvalForm = dimension;
      return closure_1_5(ScoreRow, {
        dimension,
        value: conjurePublishEvalForm.scores[dimension],
        disabled: conjurePublishEvalForm.submitting,
        onChange(arg0) {
          return conjurePublishEvalForm.setScore(closure_0, arg0);
        }
      }, dimension);
    }),

  ];
  const obj7 = { variant: "body-xs/normal", color: "text-muted", children: null };
  const intl3 = conjurePublishEvalForm(1113).intl;
  obj7.children = intl3.string(_modDef4131.BvaFUc);
  items2[1] = closure_5(conjurePublishEvalForm(5929).Text, obj7);
  obj6.children = items2;
  items1[1] = closure_6(closure_4, obj6);
  const obj9 = { label: null, placeholder: null, maxLength: null, value: null, onChange: null, disabled: null };
  const intl4 = conjurePublishEvalForm(1113).intl;
  obj9.label = intl4.string(_modDef4131.d28g0o);
  const intl5 = conjurePublishEvalForm(1113).intl;
  obj9.placeholder = intl5.string(_modDef4131.EBB7lL);
  obj9.maxLength = conjurePublishEvalForm(13166).CONJURE_PUBLISH_EVAL_FEEDBACK_MAX_LENGTH;
  ({ feedback: obj8.value, setFeedback: obj8.onChange, submitting: obj8.disabled } = conjurePublishEvalForm);
  items1[2] = closure_5(conjurePublishEvalForm(7859).TextArea, obj9);
  let tmp7Result = null;
  if (null != conjurePublishEvalForm.error) {
    const obj19 = { variant: "body-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: conjurePublishEvalForm.error };
    tmp7Result = closure_5(tmp2(5929).Text, obj19);
  }
  items1[3] = tmp7Result;
  const obj20 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
  const intl6 = tmp2(1113).intl;
  obj20.text = intl6.string(_modDef4131.CYQood);
  obj20.disabled = !conjurePublishEvalForm.canSubmit;
  ({ submitting: obj10.loading, submit: obj10.onPress } = conjurePublishEvalForm);
  items1[4] = closure_5(conjurePublishEvalForm(5936).Button, obj20);
  obj2.children = items1;
  return closure_6(closure_4, obj2);
};