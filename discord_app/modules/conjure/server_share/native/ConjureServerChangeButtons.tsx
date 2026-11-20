// discord_app/modules/conjure/server_share/native/ConjureServerChangeButtons.tsx
import showConjureProjectServerSheetDefault from "showConjureProjectServerSheet.tsx";
import openConjureMakePersonalAlertDefault from "openConjureMakePersonalAlert.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/ConjureServerChangeButtons.tsx");

export default function ConjureServerChangeButtons(projectId) {
  projectId = projectId.projectId;
  ({ change, current, onReply } = projectId);
  dependencyMap = undefined;
  action = undefined;
  const iter = onReply(18481)(projectId, change);
  ({ project: c2, action } = iter);
  let done = iter.done;
  const keep_label = change.keep_label;
  let tmp2 = current;
  if (current) {
    tmp2 = null != action;
  }
  if (done == null) {
    let note = null;
    if (current) {
      note = iter.note;
    }
    done = note;
  }
  if (null != done) {
    let tmp9Result = null;
    if (tmp2) {
      let obj = { text: action.label, variant: null, disabled: null, onPress: null };
      let str = "primary";
      if ("remove_from_server" === action.kind) {
        str = "critical-secondary";
      }
      obj.variant = str;
      obj.disabled = action.disabled;
      obj.onPress = function onPress() {
        if (null != c2) {
          let kind;
          if (action != null) {
            kind = action.kind;
          }
          if ("remove_from_server" === kind) {
            const obj2 = { project: tmp };
            openConjureMakePersonalAlertDefault(obj2);
          } else {
            const obj = { projectId };
            showConjureProjectServerSheetDefault(obj);
          }
        }
      };
      tmp9Result = action(tmp7(5392).Button, obj);
    }
    items = [tmp9Result, ,];
    let tmp10 = null;
    if (tmp2) {
      tmp10 = null;
      if (null != keep_label) {
        tmp10 = null;
        if (null != onReply) {
          let obj2 = {
            text: keep_label,
            variant: "secondary",
            onPress() {
              return onReply(keep_label);
            },
          };
          tmp10 = action(tmp7(5392).Button, obj2);
        }
      }
    }
    items[1] = tmp10;
    let tmp12 = null;
    if (null != done) {
      const obj3 = { variant: "body-sm/normal", color: "text-muted", children: done };
      tmp12 = action(tmp7(5385).Text, obj3);
    }
    const obj4 = { direction: "vertical", spacing: 8, children: null };
    items[2] = tmp12;
    obj4.children = items;
    let tmp6Result = keep_label(projectId(5810).Stack, obj4);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
}
