// discord_app/modules/conjure/share/native/ConjureShareSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import ConjureSharingModeSheet from "ConjureSharingModeSheet.tsx";
import buildConjureProjectLinkDefault from "../buildConjureProjectLink.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
function ShareLinkRow(project) {
  project = project.project;
  const tmp = buildConjureProjectLinkDefault(project.application_id, project.name);
  _require = tmp;
  items = [tmp];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(closure_0);
    ToastUtils.presentLinkCopied();
  }, items);
  let obj = {
    icon: closure_9(require("TableRowIcon").TableRowIcon, { IconComponent: require("LinkIcon").LinkIcon }),
    label: null,
    subLabel: null,
    subLabelLineClamp: 1,
    onPress: null,
  };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.WqhZss);
  obj.subLabel = tmp;
  obj.onPress = callback;
  return closure_9(require("TableRow").TableRow, obj);
}
const View = fn(17).View;
const isProjectOwner = fn(6899).isProjectOwner;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5140);
let obj2 = { body: { gap: nativeDefault.space.PX_16 }, notice: null, noticeText: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.notice = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.noticeText = { flex: 1 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/share/native/ConjureShareSheet.tsx");

export default function ConjureShareSheet(projectId) {
  projectId = projectId.projectId;
  _require = projectId;
  let shareLinksEnabled;
  c6 = undefined;
  closure_7 = undefined;
  c11 = undefined;
  const tmp = c11();
  items = [closure_7];
  const items1 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let project = ConjureProjectStore.getProject(closure_0);
      if (project == null) {
        project = null;
      }
      return project;
    },
    items1,
  );
  const tmp6 = stateFromStores(shareLinksEnabled[9])(projectId);
  shareLinksEnabled = tmp6.shareLinksEnabled;
  const loadFailed = tmp6.loadFailed;
  const setShareLinksEnabled = tmp6.setShareLinksEnabled;
  const reload = tmp6.reload;
  let obj = require("initialize");
  let obj2 = reload;
  [tmp8, c6] = setShareLinksEnabled(reload.useState(null), 2);
  const tmp9 = setShareLinksEnabled(reload.useState(false), 2);
  closure_7 = tmp9[1];
  _require = loadFailed(function* (arg0) {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp34;
            closure_129_0 = undefined;
            let conjureSharingChangeResult = null;
            if (null != closure_1) {
              if (null != closure_2) {
                conjureSharingChangeResult = closure_0(shareLinksEnabled[10]).conjureSharingChange(
                  tmp42,
                  tmp22,
                  closure_0,
                );
                const obj4 = closure_0(shareLinksEnabled[10]);
              } else {
                conjureSharingChangeResult = null;
              }
            }
            closure_129_0 = conjureSharingChangeResult;
            if (null != closure_1) {
              if (null != conjureSharingChangeResult) {
                const _Object = Object;
                if (0 !== Object.keys(conjureSharingChangeResult).length) {
                  _undefined(closure_0);
                  closure_1_7(false);
                  c3 = 1;
                  v2 = 3;
                  v3 = 1;
                  const obj6 = {
                    value: closure_0(shareLinksEnabled[11]).updateProjectSettings(tmp42.id, conjureSharingChangeResult),
                    done: false,
                  };
                  return obj6;
                }
              }
            }
            v3 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_1_7(true);
          v2 = 2;
          v3 = 1;
          const obj7 = { value: v3(), done: false };
          return obj7;
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (null != closure_129_0.share_links_enabled) {
              v2(closure_129_0.share_links_enabled);
            }
            c3 = 0;
          }
          _undefined(null);
        }
        v3 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } catch (tmp33) {
        if (tmp4 === c3) {
          v3 = tmp2;
          throw tmp33;
        } else {
          v2 = tmp;
        }
        tmp34 = c3;
      }
    }
  });
  const items2 = [stateFromStores, shareLinksEnabled, loadFailed, setShareLinksEnabled, reload];
  const current = reload.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  closure_9 = reload.useRef(current);
  const items3 = [current];
  const effect = reload.useEffect(() => {
    closure_9.current = current;
  }, items3);
  const memo = reload.useMemo(() => {
    const obj = { value: "collaborators", label: null, description: null };
    const intl = closure_0(shareLinksEnabled[12]).intl;
    obj.label = intl.string(stateFromStores(shareLinksEnabled[13])["a/Tlqf"]);
    const intl2 = closure_0(shareLinksEnabled[12]).intl;
    obj.description = intl2.string(stateFromStores(shareLinksEnabled[13]).Nvva0C);
    items = [obj, ,];
    const obj2 = { value: "link", label: null, description: null };
    const intl3 = closure_0(shareLinksEnabled[12]).intl;
    obj2.label = intl3.string(stateFromStores(shareLinksEnabled[13]).e0VakN);
    const intl4 = closure_0(shareLinksEnabled[12]).intl;
    obj2.description = intl4.string(stateFromStores(shareLinksEnabled[13]).LTgWMb);
    items[1] = obj2;
    const obj3 = { value: "public", label: null, description: null };
    const intl5 = closure_0(shareLinksEnabled[12]).intl;
    obj3.label = intl5.string(stateFromStores(shareLinksEnabled[13])["98MAcX"]);
    const intl6 = closure_0(shareLinksEnabled[12]).intl;
    obj3.description = intl6.string(stateFromStores(shareLinksEnabled[13]).NtgDy0);
    items[2] = obj3;
    return items;
  }, []);
  let tmp12 = null != stateFromStores;
  if (tmp12) {
    tmp12 = current(stateFromStores);
  }
  let result = null != stateFromStores && tmp12;
  if (result) {
    result = tmp2(tmp3[14]).projectSupportsVisibility(stateFromStores);
    const tmp2Result = tmp2(tmp3[14]);
  }
  if (result) {
    result = null != shareLinksEnabled || loadFailed;
    const tmp15 = null != shareLinksEnabled || loadFailed;
  }
  let tmp16 = tmp8;
  if (tmp8 == null) {
    let conjureSharingModeResult = null;
    if (null != stateFromStores) {
      conjureSharingModeResult = tmp2(tmp3[10]).conjureSharingMode(stateFromStores, shareLinksEnabled);
      const tmp2Result2 = tmp2(tmp3[10]);
    }
    tmp16 = conjureSharingModeResult;
  }
  c11 = tmp16;
  const found = memo.find((value) => value.value === c11);
  const items4 = [memo, tmp16];
  const callback1 = obj2.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(
      asyncRequireImpl(12416, dependencyMap.paths),
      ConjureSharingModeSheet.CONJURE_SHARING_MODE_SHEET_KEY,
      {
        options: memo,
        value,
        onChange(AUTO_DISMISS) {
          return ref.current(AUTO_DISMISS);
        },
      },
      "stack",
    );
  }, items4);
  let obj3 = { header: null, children: null };
  let obj4 = { title: null };
  let intl = tmp2(tmp3[12]).intl;
  obj4.title = intl.string(require("util").t.RDE0Sc);
  obj3.header = closure_9(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj4);
  let tmp22Result2 = null;
  if (null != stateFromStores) {
    const obj5 = { style: tmp.body, children: null };
    let obj6 = { label: null, subLabel: null, trailing: null, arrow: null, disabled: null, onPress: null };
    let intl2 = tmp2(tmp3[12]).intl;
    obj6.label = intl2.string(tmp5(tmp3[13]).ujIxRm);
    if (tmp12) {
      let description;
      if (found != null) {
        description = found.description;
      }
      let stringResult = description;
    } else {
      let intl3 = tmp2(tmp3[12]).intl;
      stringResult = intl3.string(tmp5(tmp3[13]).WLBlI4);
    }
    obj6.subLabel = stringResult;
    let tmp20Result;
    if (null != found) {
      let obj7 = { text: found.label };
      tmp20Result = tmp20(tmp2(tmp3[22]).TableRow.TrailingText, obj7);
    }
    obj6.trailing = tmp20Result;
    obj6.arrow = result;
    let tmp27 = !result;
    if (result) {
      tmp27 = null != tmp8;
    }
    let obj8 = { hasIcons: false, children: null };
    obj6.disabled = tmp27;
    obj6.onPress = callback1;
    obj8.children = tmp20(tmp2(tmp3[22]).TableRow, obj6);
    const items5 = [tmp20(tmp2(tmp3[21]).TableRowGroup, obj8), , , , ,];
    let tmp22Result = null;
    if (loadFailed) {
      tmp22Result = null;
      if (null == tmp8) {
        tmp22Result = null;
        if ("public" !== tmp16) {
          const obj9 = {
            direction: "horizontal",
            spacing: tmp5(tmp3[7]).space.PX_8,
            align: "center",
            style: tmp.notice,
            children: null,
          };
          const obj10 = { style: tmp.noticeText, children: null };
          const obj11 = { variant: "body-sm/normal", color: "text-feedback-critical", children: null };
          let intl5 = tmp2(tmp3[12]).intl;
          obj11.children = intl5.string(tmp5(tmp3[13])["0e9nOP"]);
          obj10.children = tmp20(tmp2(tmp3[24]).Text, obj11);
          const items6 = [tmp20(tmp23, obj10)];
          const obj12 = { variant: "secondary", size: "sm", text: null, onPress: null };
          let intl6 = tmp2(tmp3[12]).intl;
          obj12.text = intl6.string(tmp2(tmp3[12]).t["5911Lb"]);
          obj12.onPress = reload;
          items6[1] = tmp20(tmp2(tmp3[25]).Button, obj12);
          obj9.children = items6;
          tmp22Result = tmp22(tmp2(tmp3[23]).Stack, obj9);
        }
      }
    }
    items5[1] = tmp22Result;
    let tmp20Result5 = null;
    if (tmp9[0]) {
      const obj13 = { style: tmp.notice, children: null };
      const obj14 = { variant: "body-sm/normal", color: "text-feedback-critical", children: null };
      let intl4 = tmp2(tmp3[12]).intl;
      obj14.children = intl4.string(tmp5(tmp3[13]).wzqQPR);
      obj13.children = tmp20(tmp2(tmp3[24]).Text, obj14);
      tmp20Result5 = tmp20(tmp23, obj13);
    }
    items5[2] = tmp20Result5;
    let tmp20Result6 = null;
    if ("public" === tmp16) {
      tmp20Result6 = null;
      if (null == tmp8) {
        const obj15 = { hasIcons: true, children: null };
        const obj16 = { project: stateFromStores };
        obj15.children = tmp20(ShareLinkRow, obj16);
        tmp20Result6 = tmp20(tmp2(tmp3[21]).TableRowGroup, obj15);
      }
    }
    items5[3] = tmp20Result6;
    let tmp20Result7 = null;
    if ("link" === tmp16) {
      tmp20Result7 = null;
      if (null == tmp8) {
        const obj17 = { project: stateFromStores, isOwner: tmp12 };
        tmp20Result7 = tmp20(tmp5(tmp3[26]), obj17);
      }
    }
    items5[4] = tmp20Result7;
    let tmp20Result8 = null;
    if (tmp12) {
      const obj18 = { projectId: stateFromStores.id };
      tmp20Result8 = tmp20(tmp5(tmp3[27]), obj18);
    }
    items5[5] = tmp20Result8;
    obj5.children = items5;
    tmp22Result2 = tmp22(tmp23, obj5);
  }
  obj3.children = tmp22Result2;
  return closure_9(require("ActionSheet").ActionSheet, obj3);
}
