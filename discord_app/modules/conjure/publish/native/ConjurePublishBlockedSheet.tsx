// === Module 16547: ConjurePublishBlockedSheet ===

// Module 16547 (ConjurePublishBlockedSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet from "ActionSheet" /* 6701 */;
import conjurePublishBlockedReason from "conjurePublishBlockedReason" /* 16548 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ConjurePublishBlockedSheet = "ConjurePublishBlockedSheet";
const createStyles = fn(4890);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((reason) => {
  const cResult = c.c(20);
  const tmp4 = closure_7();
  const tmp5 = reason.reason === conjurePublishBlockedReason.ConjurePublishBlockedReason.PERMISSIONS;
  if (cResult[0] !== tmp5) {
    const intl = util.intl;
    const tmp8 = _modDef3723;
    const stringResult = intl.string(tmp5 ? tmp8.wQ4UyJ : tmp8.ZNGLFE);
    cResult[0] = tmp5;
    cResult[1] = stringResult;
  } else {
    if (cResult[2] !== cResult[1]) {
      const obj2 = { title: tmp6 };
      const tmp13 = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
      cResult[2] = tmp6;
      cResult[3] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[3];
    }
    if (cResult[4] !== tmp5) {
      const intl2 = util.intl;
      const tmp17 = _modDef3723;
      const stringResult1 = intl2.string(tmp5 ? tmp17.Agqmbt : tmp17.ffxKGK);
      cResult[4] = tmp5;
      cResult[5] = stringResult1;
    } else {
      if (cResult[6] !== cResult[5]) {
        const obj3 = { variant: "text-md/normal", color: "text-muted", children: tmp15 };
        const tmp22 = React4(Text_Text.Text, obj3);
        cResult[6] = tmp15;
        cResult[7] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[7];
      }
      if (cResult[8] !== tmp5) {
        const intl3 = util.intl;
        if (tmp5) {
          let BddRzS = util.t.BddRzS;
        } else {
          BddRzS = _modDef3723["/omTNx"];
        }
        const stringResult2 = intl3.string(BddRzS);
        cResult[8] = tmp5;
        cResult[9] = stringResult2;
      } else {
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function v() {
            return ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishBlockedSheet);
          };
          cResult[10] = fn;
          let tmp29 = fn;
        } else {
          tmp29 = cResult[10];
        }
        if (cResult[11] !== cResult[9]) {
          const obj4 = { variant: "primary", text: tmp23, onPress: tmp29 };
          const tmp32 = React4(components_Button_Button.Button, obj4);
          cResult[11] = tmp23;
          cResult[12] = tmp32;
          let tmp30 = tmp32;
        } else {
          tmp30 = cResult[12];
        }
        if (cResult[13] === tmp4.content) {
          if (cResult[14] === tmp20) {
            if (cResult[15] === tmp30) {
              let tmp33 = cResult[16];
            }
            if (cResult[17] === tmp11) {
              if (cResult[18] === tmp33) {
                let tmp37 = cResult[19];
              }
              return tmp37;
            }
            const obj5 = { header: tmp11, children: tmp33 };
            const tmp39 = React4(ActionSheet.ActionSheet, obj5);
            cResult[17] = tmp11;
            cResult[18] = tmp33;
            cResult[19] = tmp39;
            tmp37 = tmp39;
          }
        }
        const obj6 = { style: tmp14, children: null };
        const items = [tmp20, tmp30];
        obj6.children = items;
        const tmp36 = hasOwnProperty(View, obj6);
        cResult[13] = tmp4.content;
        cResult[14] = tmp20;
        cResult[15] = tmp30;
        cResult[16] = tmp36;
        tmp33 = tmp36;
      }
    }
  }
}) : ((reason) => {
  const tmp4 = reason.reason === conjurePublishBlockedReason.ConjurePublishBlockedReason.PERMISSIONS;
  const intl = util.intl;
  const tmp7 = _modDef3723;
  if (tmp4) {
    let ZNGLFE = tmp7.wQ4UyJ;
    let tmp8 = importDefault;
  } else {
    ZNGLFE = tmp7.ZNGLFE;
    tmp8 = importDefault;
  }
  const obj = { header: null, children: null };
  const tmp = closure_7();
  obj.header = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: intl.string(ZNGLFE) });
  const obj3 = { style: tmp.content, children: null };
  const intl2 = util.intl;
  const tmp8Result = tmp8(3723);
  const obj2 = { title: intl.string(ZNGLFE) };
  const items = [React4(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp4 ? tmp8Result.Agqmbt : tmp8Result.ffxKGK) }), ];
  const intl3 = util.intl;
  if (tmp4) {
    let BddRzS = util.t.BddRzS;
  } else {
    BddRzS = tmp8(3723)["/omTNx"];
  }
  const obj4 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp4 ? tmp8Result.Agqmbt : tmp8Result.ffxKGK) };
  items[1] = React4(components_Button_Button.Button, {
    variant: "primary",
    text: intl3.string(BddRzS),
    onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishBlockedSheet);
    }
  });
  obj3.children = items;
  obj.children = hasOwnProperty(View, obj3);
  return React4(ActionSheet.ActionSheet, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishBlockedSheet.tsx");

export default function showConjurePublishBlockedSheet(reason) {
  const obj2 = { key: ConjurePublishBlockedSheet, content: React4(closure_8, { reason }) };
  ActionSheetActionCreators.showActionSheet(obj2);
};
export const CONJURE_PUBLISH_BLOCKED_SHEET_KEY = "ConjurePublishBlockedSheet";