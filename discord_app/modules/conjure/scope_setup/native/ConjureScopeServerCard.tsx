// === Module 12563: ConjureScopeServerCard ===

// Module 12563 (ConjureScopeServerCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import Text_Text from "Text/Text" /* 5271 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12280 */;
import ConjureClarificationEntityPickerDefault from "ConjureClarificationEntityPicker" /* 12564 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = [];
const createStyles = fn(5005);
let obj2 = { surface: { marginTop: nativeDefault.space.PX_8, padding: 0, overflow: "hidden" }, header: null, content: null, footer: null };
let obj3 = { marginTop: nativeDefault.space.PX_8, padding: 0, overflow: "hidden" };
obj2.header = { gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj4 = { gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.content = { gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
let obj5 = { gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
obj2.footer = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeServerCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureScopeServerCard(arg0) {
  const cResult = c.c(33);
  ({ projectId, card } = arg0);
  const tmp4 = closure_9();
  const first = _slicedToArray(card.clarification.questions, 1)[0];
  let default_entities = first.default_entities;
  if (default_entities == null) {
    default_entities = closure_8;
  }
  const tmp5Result = _slicedToArray(noop.useState(default_entities), 2);
  const first1 = tmp5Result[0];
  const onPickServer = card.onPickServer;
  const onBack = card.onBack;
  const first2 = first1[0];
  let id;
  if (first2 != null) {
    id = first2.id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: null };
    const intl = util.intl;
    obj2.children = intl.string(_modDef3864.ickKBI);
    const tmp15 = timestampProducer(Text_Text.Text, obj2);
    cResult[0] = tmp15;
    let first3 = tmp15;
  } else {
    first3 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(_modDef3864.OyM4SV);
    const tmp19 = timestampProducer(Text_Text.Text, obj3);
    cResult[1] = tmp19;
    let tmp16 = tmp19;
  } else {
    tmp16 = cResult[1];
  }
  if (cResult[2] !== tmp4.header) {
    const obj4 = { style: tmp4.header, children: null };
    const items = [first3, tmp16];
    obj4.children = items;
    const tmp23 = React5(View, obj4);
    cResult[2] = tmp4.header;
    cResult[3] = tmp23;
    let tmp20 = tmp23;
  } else {
    tmp20 = cResult[3];
  }
  if (cResult[4] === first1) {
    if (cResult[5] === projectId) {
      if (cResult[6] === first) {
        if (cResult[7] === tmp24) {
          let tmp25 = cResult[8];
        }
        if (cResult[9] !== first.note) {
          let tmp28 = null;
          if (null != first.note) {
            const obj5 = { variant: "text-xs/normal", color: "text-muted", children: first.note };
            tmp28 = timestampProducer(Text_Text.Text, obj5);
          }
          cResult[9] = first.note;
          cResult[10] = tmp28;
          let tmp27 = tmp28;
        } else {
          tmp27 = cResult[10];
        }
        if (cResult[11] === tmp4.content) {
          if (cResult[12] === tmp25) {
            if (cResult[13] === tmp27) {
              let tmp30 = cResult[14];
            }
            const _Symbol = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = util.intl;
              const stringResult = intl3.string(_modDef3864.PTIP7V);
              cResult[15] = stringResult;
              let tmp34 = stringResult;
            } else {
              tmp34 = cResult[15];
            }
            if (cResult[16] === id) {
              if (cResult[17] === onPickServer) {
                let tmp38 = cResult[18];
              }
              if (cResult[19] === tmp37) {
                if (cResult[20] === tmp38) {
                  let tmp39 = cResult[21];
                }
                if (cResult[22] !== onBack) {
                  let tmp43 = null;
                  if (null != onBack) {
                    const obj6 = { variant: "tertiary", size: "sm", text: null, onPress: null };
                    const intl4 = util.intl;
                    obj6.text = intl4.string(util.t["ETE/oC"]);
                    obj6.onPress = onBack;
                    tmp43 = timestampProducer(components_Button_Button.Button, obj6);
                  }
                  cResult[22] = onBack;
                  cResult[23] = tmp43;
                  let tmp42 = tmp43;
                } else {
                  tmp42 = cResult[23];
                }
                if (cResult[24] === tmp4.footer) {
                  if (cResult[25] === tmp39) {
                    if (cResult[26] === tmp42) {
                      let tmp45 = cResult[27];
                    }
                    if (cResult[28] === tmp4.surface) {
                      if (cResult[29] === tmp45) {
                        if (cResult[30] === tmp20) {
                          if (cResult[31] === tmp30) {
                            let tmp49 = cResult[32];
                          }
                          return tmp49;
                        }
                      }
                    }
                    const obj7 = { style: tmp4.surface, children: null };
                    const items1 = [tmp20, tmp30, tmp45];
                    obj7.children = items1;
                    const tmp52 = React5(ConjureNativeCardSurfaceDefault, obj7);
                    cResult[28] = tmp4.surface;
                    cResult[29] = tmp45;
                    cResult[30] = tmp20;
                    cResult[31] = tmp30;
                    cResult[32] = tmp52;
                    tmp49 = tmp52;
                  }
                }
                const obj8 = { style: tmp4.footer, children: null };
                const items2 = [tmp39, tmp42];
                obj8.children = items2;
                const tmp48 = React5(View, obj8);
                cResult[24] = tmp4.footer;
                cResult[25] = tmp39;
                cResult[26] = tmp42;
                cResult[27] = tmp48;
                tmp45 = tmp48;
              }
              const obj9 = { variant: "primary", size: "sm", text: tmp34, disabled: tmp37, onPress: tmp38 };
              const tmp41 = timestampProducer(components_Button_Button.Button, obj9);
              cResult[19] = tmp37;
              cResult[20] = tmp38;
              cResult[21] = tmp41;
              tmp39 = tmp41;
            }
            const fn = function w() {
              if (null != id) {
                if (onPickServer != null) {
                  tmp2(tmp);
                }
              }
            };
            cResult[16] = id;
            cResult[17] = onPickServer;
            cResult[18] = fn;
            tmp38 = fn;
          }
        }
        const obj10 = { style: tmp4.content, children: null };
        const items3 = [tmp25, tmp27];
        obj10.children = items3;
        const tmp33 = React5(View, obj10);
        cResult[11] = tmp4.content;
        cResult[12] = tmp25;
        cResult[13] = tmp27;
        cResult[14] = tmp33;
        tmp30 = tmp33;
      }
    }
  }
  const tmp26 = timestampProducer(ConjureClarificationEntityPickerDefault, { projectId, question: first, value: first1, disabled: null == onPickServer, onChange: tmp5Result[1], fallback: null });
  cResult[4] = first1;
  cResult[5] = projectId;
  cResult[6] = first;
  cResult[7] = null == onPickServer;
  cResult[8] = tmp26;
  tmp25 = tmp26;
}) : (function ConjureScopeServerCard(card) {
  card = card.card;
  let onPickServer;
  let id;
  const tmp = closure_9();
  const first = _slicedToArray(card.clarification.questions, 1)[0];
  let default_entities = first.default_entities;
  if (default_entities == null) {
    default_entities = closure_8;
  }
  const tmp2Result = _slicedToArray(noop.useState(default_entities), 2);
  const first1 = tmp2Result[0];
  onPickServer = card.onPickServer;
  const onBack = card.onBack;
  const first2 = first1[0];
  id = undefined;
  if (first2 != null) {
    id = first2.id;
  }
  const obj = { style: tmp.surface, children: null };
  const obj2 = { style: tmp.header, children: null };
  const obj3 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef3864.ickKBI);
  const items = [timestampProducer(Text_Text.Text, obj3), ];
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(_modDef3864.OyM4SV);
  items[1] = timestampProducer(Text_Text.Text, obj4);
  obj2.children = items;
  const items1 = [React5(View, obj2), , ];
  const obj5 = { style: tmp.content, children: null };
  const items2 = [timestampProducer(ConjureClarificationEntityPickerDefault, { projectId: card.projectId, question: first, value: first1, disabled: null == onPickServer, onChange: tmp2Result[1], fallback: null }), ];
  let tmp14Result = null;
  if (null != first.note) {
    const obj7 = { variant: "text-xs/normal", color: "text-muted", children: first.note };
    tmp14Result = timestampProducer(Text_Text.Text, obj7);
  }
  items2[1] = tmp14Result;
  obj5.children = items2;
  items1[1] = React5(View, obj5);
  const obj8 = { style: tmp.footer, children: null };
  const obj9 = { variant: "primary", size: "sm", text: null, disabled: null, onPress: null };
  const intl3 = util.intl;
  obj9.text = intl3.string(_modDef3864.PTIP7V);
  obj9.disabled = null == id || null == onPickServer;
  obj9.onPress = function onPress() {
    if (null != id) {
      if (onPickServer != null) {
        tmp2(tmp);
      }
    }
  };
  const items3 = [timestampProducer(components_Button_Button.Button, obj9), ];
  let tmp14Result2 = null;
  if (null != onBack) {
    const obj10 = { variant: "tertiary", size: "sm", text: null, onPress: null };
    const intl4 = util.intl;
    obj10.text = intl4.string(util.t["ETE/oC"]);
    obj10.onPress = onBack;
    tmp14Result2 = timestampProducer(components_Button_Button.Button, obj10);
  }
  items3[1] = tmp14Result2;
  obj8.children = items3;
  items1[2] = React5(View, obj8);
  obj.children = items1;
  return React5(ConjureNativeCardSurfaceDefault, obj);
});