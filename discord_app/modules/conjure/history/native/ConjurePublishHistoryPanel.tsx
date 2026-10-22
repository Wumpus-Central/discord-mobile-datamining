// discord_app/modules/conjure/history/native/ConjurePublishHistoryPanel.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import useConjurePublishHistory from "../useConjurePublishHistory.tsx";
import ConjureNativeMarkdownDefault from "../../chat/native/ConjureNativeMarkdown.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ReleaseNotes(arg0) {
      const cResult = c.c(11);
      ({ projectId, id, notesCache } = arg0);
      const conjurePublishHistoryNotes = useConjurePublishHistory.useConjurePublishHistoryNotes(
        projectId,
        id,
        notesCache,
      );
      ({ state, retry } = conjurePublishHistoryNotes);
      if ("failed" === state.status) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl4 = util.intl;
          obj3.children = intl4.string(_modDef3830.cBIaeW);
          const tmp25 = timestampProducer(Text_Text.Text, obj3);
          cResult[0] = tmp25;
          let first = tmp25;
        } else {
          first = cResult[0];
        }
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = util.intl;
          const stringResult = intl5.string(_modDef3830.HOuQ9H);
          cResult[1] = stringResult;
          let tmp26 = stringResult;
        } else {
          tmp26 = cResult[1];
        }
        if (cResult[2] !== retry) {
          const obj4 = { spacing: 8, children: null };
          const items = [first];
          const obj5 = { variant: "secondary", size: "sm", text: tmp26, onPress: retry };
          items[1] = timestampProducer(components_Button_Button.Button, obj5);
          obj4.children = items;
          const tmp32 = React5(Stack_Stack.Stack, obj4);
          cResult[2] = retry;
          cResult[3] = tmp32;
          let tmp29 = tmp32;
        } else {
          tmp29 = cResult[3];
        }
        return tmp29;
      } else {
        let data = null;
        if ("loaded" === state.status) {
          data = state.data;
        }
        if (null != data) {
          if ("" !== data) {
            if (cResult[4] !== data) {
              const obj6 = { source: data };
              const tmp19 = timestampProducer(ConjureNativeMarkdownDefault, obj6);
              cResult[4] = data;
              cResult[5] = tmp19;
            }
          }
        }
        if (cResult[6] === data) {
          if (cResult[7] === state.status) {
            if (cResult[9] !== cResult[8]) {
              const obj7 = { accessibilityLiveRegion: "polite", children: null };
              const obj8 = { variant: "text-sm/normal", children: tmp6 };
              obj7.children = timestampProducer(Text_Text.Text, obj8);
              const tmp15 = timestampProducer(View, obj7);
              cResult[9] = tmp6;
              cResult[10] = tmp15;
              let tmp12 = tmp15;
            } else {
              tmp12 = cResult[10];
            }
            return tmp12;
          }
        }
        if ("loading" === state.status) {
          const intl3 = util.intl;
          let stringResult1 = intl3.string(_modDef3830["LmWLc+"]);
        } else if (null == data) {
          const intl2 = util.intl;
          stringResult1 = intl2.string(_modDef3830.hcrQOo);
        } else {
          const intl = util.intl;
          stringResult1 = intl.string(_modDef3830["0bDcBs"]);
        }
        cResult[6] = data;
        state = state.status;
        cResult[7] = state;
        cResult[8] = stringResult1;
      }
    }
  : function ReleaseNotes(arg0) {
      ({ projectId, id, notesCache } = arg0);
      const conjurePublishHistoryNotes = useConjurePublishHistory.useConjurePublishHistoryNotes(
        projectId,
        id,
        notesCache,
      );
      const state = conjurePublishHistoryNotes.state;
      if ("failed" === state.status) {
        const obj2 = { spacing: 8, children: null };
        const obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl4 = util.intl;
        obj3.children = intl4.string(_modDef3830.cBIaeW);
        const items = [timestampProducer(Text_Text.Text, obj3)];
        const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl5 = util.intl;
        obj4.text = intl5.string(_modDef3830.HOuQ9H);
        obj4.onPress = tmp4;
        items[1] = timestampProducer(components_Button_Button.Button, obj4);
        obj2.children = items;
        return React5(Stack_Stack.Stack, obj2);
      } else {
        let data = null;
        if ("loaded" === state.status) {
          data = state.data;
        }
        if (null != data) {
          if ("" !== data) {
            const obj5 = { source: data };
            let tmp6Result = timestampProducer(ConjureNativeMarkdownDefault, obj5);
          }
          return tmp6Result;
        }
        if ("loading" === state.status) {
          const intl3 = util.intl;
          let stringResult = intl3.string(_modDef3830["LmWLc+"]);
        } else if (null == data) {
          const intl2 = util.intl;
          stringResult = intl2.string(_modDef3830.hcrQOo);
        } else {
          const intl = util.intl;
          stringResult = intl.string(_modDef3830["0bDcBs"]);
        }
        const obj6 = { accessibilityLiveRegion: "polite", children: null };
        const obj7 = { variant: "text-sm/normal", children: stringResult };
        obj6.children = timestampProducer(Text_Text.Text, obj7);
        tmp6Result = timestampProducer(View, obj6);
      }
    };
ReactCompilerGating = fn(558);
let closure_9 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function PublishRow(arg0) {
        const cResult = c.c(24);
        ({ projectId, entry, notesCache } = arg0);
        [tmp5, require] = noop.useState(false);
        if (cResult[0] !== entry.publishedAt) {
          const publishHistoryTitleResult = useConjurePublishHistory.publishHistoryTitle(entry.publishedAt);
          cResult[0] = entry.publishedAt;
          cResult[1] = publishHistoryTitleResult;
          let tmp6 = publishHistoryTitleResult;
          const tmpResult = useConjurePublishHistory;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] !== tmp6) {
          const obj2 = { variant: "text-md/medium", children: tmp6 };
          const tmp10 = timestampProducer(Text_Text.Text, obj2);
          cResult[2] = tmp6;
          cResult[3] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== tmp5) {
          const intl = util.intl;
          const tmp13 = _modDef3830;
          const stringResult = intl.string(tmp5 ? tmp13["Qro2x/"] : tmp13.ufHcsq);
          cResult[4] = tmp5;
          cResult[5] = stringResult;
        } else {
          if (cResult[6] !== tmp6) {
            const intl2 = util.intl;
            const obj3 = { title: tmp6 };
            const formatToPlainStringResult = intl2.formatToPlainString(_modDef3830["M9L+3I"], obj3);
            cResult[6] = tmp6;
            cResult[7] = formatToPlainStringResult;
            let tmp16 = formatToPlainStringResult;
          } else {
            tmp16 = cResult[7];
          }
          if (cResult[8] !== tmp5) {
            const obj4 = { expanded: tmp5 };
            cResult[8] = tmp5;
            cResult[9] = obj4;
            let tmp19 = obj4;
          } else {
            tmp19 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function j() {
              return require((arg0) => !arg0);
            };
            cResult[10] = fn;
            let tmp21 = fn;
          } else {
            tmp21 = cResult[10];
          }
          if (cResult[11] === cResult[5]) {
            if (cResult[12] === tmp16) {
              if (cResult[13] === tmp19) {
                let tmp22 = cResult[14];
              }
              if (cResult[15] === entry.id) {
                if (cResult[16] === tmp5) {
                  if (cResult[17] === notesCache) {
                    if (cResult[18] === projectId) {
                      let tmp25 = cResult[19];
                    }
                    if (cResult[20] === tmp8) {
                      if (cResult[21] === tmp22) {
                        if (cResult[22] === tmp25) {
                          let tmp29 = cResult[23];
                        }
                        return tmp29;
                      }
                    }
                    const obj5 = { spacing: 12, children: null };
                    const items = [tmp8, tmp22, tmp25];
                    obj5.children = items;
                    const tmp31 = React5(Stack_Stack.Stack, obj5);
                    cResult[20] = tmp8;
                    cResult[21] = tmp22;
                    cResult[22] = tmp25;
                    cResult[23] = tmp31;
                    tmp29 = tmp31;
                  }
                }
              }
              let tmp26 = null;
              if (tmp5) {
                const obj6 = { projectId, id: entry.id, notesCache };
                tmp26 = timestampProducer(closure_8, obj6);
              }
              cResult[15] = entry.id;
              cResult[16] = tmp5;
              cResult[17] = notesCache;
              cResult[18] = projectId;
              cResult[19] = tmp26;
              tmp25 = tmp26;
            }
          }
          const obj7 = {
            variant: "secondary",
            size: "sm",
            text: cResult[5],
            accessibilityLabel: tmp16,
            accessibilityState: tmp19,
            onPress: tmp21,
          };
          const tmp24 = timestampProducer(components_Button_Button.Button, obj7);
          cResult[11] = cResult[5];
          cResult[12] = tmp16;
          cResult[13] = tmp19;
          cResult[14] = tmp24;
          tmp22 = tmp24;
        }
        const tmp4 = _slicedToArray(noop.useState(false), 2);
      }
    : function PublishRow(entry) {
        entry = entry.entry;
        c0 = undefined;
        ({ projectId, notesCache } = entry);
        [tmp2, c0] = noop.useState(false);
        const tmp = _slicedToArray(noop.useState(false), 2);
        const publishHistoryTitleResult = useConjurePublishHistory.publishHistoryTitle(entry.publishedAt);
        const children = [
          timestampProducer(Text_Text.Text, { variant: "text-md/medium", children: publishHistoryTitleResult }),
          ,
        ];
        const intl = util.intl;
        const tmp9 = _modDef3830;
        if (tmp2) {
          let ufHcsq = tmp9["Qro2x/"];
          let tmp10 = importDefault;
        } else {
          ufHcsq = tmp9.ufHcsq;
          tmp10 = importDefault;
        }
        const obj2 = {
          variant: "secondary",
          size: "sm",
          text: intl.string(ufHcsq),
          accessibilityLabel: null,
          accessibilityState: null,
          onPress: null,
        };
        const intl2 = util.intl;
        obj2.accessibilityLabel = intl2.formatToPlainString(tmp10(3830)["M9L+3I"], {
          title: publishHistoryTitleResult,
        });
        obj2.accessibilityState = { expanded: tmp2 };
        obj2.onPress = function onPress() {
          return _undefined((arg0) => !arg0);
        };
        children[1] = timestampProducer(components_Button_Button.Button, obj2);
        let tmp7Result = null;
        if (tmp2) {
          const obj3 = { projectId, id: entry.id, notesCache };
          tmp7Result = timestampProducer(closure_8, obj3);
        }
        children[2] = tmp7Result;
        return React5(Stack_Stack.Stack, { spacing: 12, children });
      },
);
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjurePublishHistoryPanel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePublishHistoryPanel(projectId) {
      const cResult = projectId(576).c(33);
      projectId = projectId.projectId;
      const obj = projectId(576);
      const iter = projectId(12219).useConjurePublishHistory(projectId);
      let entries = iter.state;
      if ("loading" === entries.status) {
        const _Symbol6 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/normal", children: null };
          const intl8 = tmp(1128).intl;
          obj3.children = intl8.string(iter(3830)["d/Wf8N"]);
          const tmp59 = closure_6(tmp(5220).Text, obj3);
          cResult[0] = tmp59;
          let first = tmp59;
        } else {
          first = cResult[0];
        }
        return first;
      } else if ("failed" === entries.status) {
        const _Symbol4 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "text-sm/normal", children: null };
          const intl6 = tmp(1128).intl;
          obj4.children = intl6.string(iter(3830).TzCJWI);
          const tmp47 = closure_6(tmp(5220).Text, obj4);
          cResult[1] = tmp47;
          let tmp44 = tmp47;
        } else {
          tmp44 = cResult[1];
        }
        const _Symbol5 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl7 = tmp(1128).intl;
          const stringResult = intl7.string(iter(3830).HOuQ9H);
          cResult[2] = stringResult;
          let tmp48 = stringResult;
        } else {
          tmp48 = cResult[2];
        }
        if (cResult[3] !== iter.retry) {
          const obj5 = { spacing: 12, children: null };
          const items = [tmp44];
          const obj6 = { variant: "secondary", text: tmp48, onPress: iter.retry };
          items[1] = closure_6(tmp(5230).Button, obj6);
          obj5.children = items;
          const tmp54 = closure_7(tmp(5964).Stack, obj5);
          cResult[3] = iter.retry;
          cResult[4] = tmp54;
          let tmp51 = tmp54;
        } else {
          tmp51 = cResult[4];
        }
        return tmp51;
      } else if (0 === entries.data.entries.length) {
        const _Symbol3 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl5 = tmp(1128).intl;
          obj7.children = intl5.string(iter(3830)["19L92G"]);
          const tmp42 = closure_6(tmp(5220).Text, obj7);
          cResult[5] = tmp42;
          let tmp39 = tmp42;
        } else {
          tmp39 = cResult[5];
        }
        return tmp39;
      } else {
        const _Symbol7 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl = tmp(1128).intl;
          obj8.children = intl.string(iter(3830).Kzt1rI);
          const tmp7 = closure_6(tmp(5220).Text, obj8);
          cResult[6] = tmp7;
          let tmp4 = tmp7;
        } else {
          tmp4 = cResult[6];
        }
        if (cResult[7] === iter.notesCache) {
          if (cResult[8] === projectId) {
            if (cResult[9] === entries.data.entries) {
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(1128).intl;
                const stringResult1 = intl2.string(iter(3830)["4un98A"]);
                cResult[14] = stringResult1;
                let tmp12 = stringResult1;
              } else {
                tmp12 = cResult[14];
              }
              if (cResult[15] === iter.previous) {
                if (cResult[16] === tmp15) {
                  let tmp16 = cResult[17];
                }
                if (cResult[18] !== iter.page) {
                  const intl3 = tmp(1128).intl;
                  const obj9 = { page: iter.page };
                  const formatToPlainStringResult = intl3.formatToPlainString(iter(3830)["54samz"], obj9);
                  cResult[18] = iter.page;
                  cResult[19] = formatToPlainStringResult;
                  let tmp19 = formatToPlainStringResult;
                } else {
                  tmp19 = cResult[19];
                }
                if (cResult[20] !== tmp19) {
                  const obj10 = { variant: "text-sm/normal", children: tmp19 };
                  const tmp24 = closure_6(tmp(5220).Text, obj10);
                  cResult[20] = tmp19;
                  cResult[21] = tmp24;
                  let tmp22 = tmp24;
                } else {
                  tmp22 = cResult[21];
                }
                const _Symbol2 = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl4 = tmp(1128).intl;
                  const stringResult2 = intl4.string(iter(3830).HqheLL);
                  cResult[22] = stringResult2;
                  let tmp25 = stringResult2;
                } else {
                  tmp25 = cResult[22];
                }
                if (cResult[23] === iter.next) {
                  if (cResult[24] === tmp28) {
                    let tmp29 = cResult[25];
                  }
                  if (cResult[26] === tmp29) {
                    if (cResult[27] === tmp16) {
                      if (cResult[28] === tmp22) {
                        let tmp32 = cResult[29];
                      }
                      if (cResult[30] === tmp32) {
                        if (cResult[31] === tmp8) {
                          let tmp35 = cResult[32];
                        }
                        return tmp35;
                      }
                      const obj11 = { spacing: 24, children: null };
                      const items1 = [tmp4, tmp8, tmp32];
                      obj11.children = items1;
                      const tmp37 = closure_7(tmp(5964).Stack, obj11);
                      cResult[30] = tmp32;
                      cResult[31] = tmp8;
                      cResult[32] = tmp37;
                      tmp35 = tmp37;
                    }
                  }
                  const obj12 = {
                    direction: "horizontal",
                    spacing: 8,
                    align: "center",
                    justify: "space-between",
                    children: null,
                  };
                  const items2 = [tmp16, tmp22, tmp29];
                  obj12.children = items2;
                  const tmp34 = closure_7(tmp(5964).Stack, obj12);
                  cResult[26] = tmp29;
                  cResult[27] = tmp16;
                  cResult[28] = tmp22;
                  cResult[29] = tmp34;
                  tmp32 = tmp34;
                }
                const obj13 = {
                  variant: "secondary",
                  size: "sm",
                  shrink: true,
                  text: tmp25,
                  disabled: !iter.hasNext,
                  onPress: iter.next,
                };
                const tmp31 = closure_6(tmp(5230).Button, obj13);
                cResult[23] = iter.next;
                cResult[24] = !iter.hasNext;
                cResult[25] = tmp31;
                tmp29 = tmp31;
              }
              const obj14 = {
                variant: "secondary",
                size: "sm",
                shrink: true,
                text: tmp12,
                disabled: !iter.hasPrevious,
                onPress: iter.previous,
              };
              const tmp18 = closure_6(tmp(5230).Button, obj14);
              cResult[15] = iter.previous;
              cResult[16] = !iter.hasPrevious;
              cResult[17] = tmp18;
              tmp16 = tmp18;
            }
          }
        }
        if (cResult[11] === iter.notesCache) {
          if (cResult[12] === projectId) {
            let tmp9 = cResult[13];
          }
          const entries1 = entries.data.entries;
          const mapped = entries1.map(tmp9);
          cResult[7] = iter.notesCache;
          cResult[8] = projectId;
          entries = entries.data.entries;
          cResult[9] = entries;
          cResult[10] = mapped;
        }
        const fn = function v(entry) {
          return timestampProducer(closure_9, { projectId, entry, notesCache: iter.notesCache }, entry.id);
        };
        cResult[11] = iter.notesCache;
        cResult[12] = projectId;
        cResult[13] = fn;
        tmp9 = fn;
      }
      const obj2 = projectId(12219);
    }
  : function ConjurePublishHistoryPanel(projectId) {
      projectId = projectId.projectId;
      const iter = projectId(12219).useConjurePublishHistory(projectId);
      const state = iter.state;
      if ("loading" === state.status) {
        const obj2 = { variant: "text-sm/normal", children: null };
        const intl4 = tmp(1128).intl;
        obj2.children = intl4.string(iter(3830)["d/Wf8N"]);
        let tmp5 = closure_6(tmp(5220).Text, obj2);
      } else if ("failed" === state.status) {
        const obj3 = { spacing: 12, children: null };
        const obj4 = { variant: "text-sm/normal", children: null };
        const intl2 = tmp(1128).intl;
        obj4.children = intl2.string(iter(3830).TzCJWI);
        const items = [closure_6(tmp(5220).Text, obj4)];
        const obj5 = { variant: "secondary", text: null, onPress: null };
        const intl3 = tmp(1128).intl;
        obj5.text = intl3.string(iter(3830).HOuQ9H);
        obj5.onPress = iter.retry;
        items[1] = closure_6(tmp(5230).Button, obj5);
        obj3.children = items;
        tmp5 = closure_7(tmp(5964).Stack, obj3);
      } else if (0 === state.data.entries.length) {
        const obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl = tmp(1128).intl;
        obj6.children = intl.string(iter(3830)["19L92G"]);
        tmp5 = closure_6(tmp(5220).Text, obj6);
      } else {
        const obj7 = { spacing: 24, children: null };
        const obj8 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl5 = tmp(1128).intl;
        obj8.children = intl5.string(iter(3830).Kzt1rI);
        const items1 = [closure_6(tmp(5220).Text, obj8), ,];
        const entries = state.data.entries;
        items1[1] = entries.map((entry) =>
          timestampProducer(closure_9, { projectId, entry, notesCache: iter.notesCache }, entry.id),
        );
        const obj9 = { direction: "horizontal", spacing: 8, align: "center", justify: "space-between", children: null };
        const obj10 = { variant: "secondary", size: "sm", shrink: true, text: null, disabled: null, onPress: null };
        const intl6 = tmp(1128).intl;
        obj10.text = intl6.string(iter(3830)["4un98A"]);
        obj10.disabled = !iter.hasPrevious;
        obj10.onPress = iter.previous;
        const items2 = [closure_6(tmp(5230).Button, obj10), ,];
        const obj11 = { variant: "text-sm/normal", children: null };
        const intl7 = tmp(1128).intl;
        const obj12 = { page: iter.page };
        obj11.children = intl7.formatToPlainString(iter(3830)["54samz"], obj12);
        items2[1] = closure_6(tmp(5220).Text, obj11);
        const obj13 = { variant: "secondary", size: "sm", shrink: true, text: null, disabled: null, onPress: null };
        const intl8 = tmp(1128).intl;
        obj13.text = intl8.string(iter(3830).HqheLL);
        obj13.disabled = !iter.hasNext;
        obj13.onPress = iter.next;
        items2[2] = closure_6(tmp(5230).Button, obj13);
        obj9.children = items2;
        items1[2] = closure_7(tmp(5964).Stack, obj9);
        obj7.children = items1;
        tmp5 = closure_7(tmp(5964).Stack, obj7);
      }
      return tmp5;
    };
