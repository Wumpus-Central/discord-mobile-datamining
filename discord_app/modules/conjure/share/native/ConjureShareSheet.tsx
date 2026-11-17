// === Module 14580: ConjureShareSheet ===

// Module 14580 (ConjureShareSheet)
import nativeDefault from "native" /* 575 */;
import _modDef4133 from "module_4133" /* 4133 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6009 */;
import useConjureSharingModeDefault from "useConjureSharingMode" /* 14425 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 14482 */;
import useConjureShareServersDefault from "useConjureShareServers" /* 14565 */;
import ConjureShareAccessDefault from "ConjureShareAccess" /* 14573 */;
import noop from "module_19" /* 19 */;

const require = fn;
function hideShareSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(ConjureShareSheet);
}
function showShareToast(text) {
  ToastActionCreatorsDefault.open(ConjureShareSheet, { text, variant: "success" });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ConjureShareSheet = "ConjureShareSheet";
const createStyles = fn(5310);
let obj2 = { header: { alignItems: "center", gap: nativeDefault.space.PX_12 }, body: null };
let obj3 = { alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.body = { gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureShareSheet.tsx");

export default function ConjureShareSheet(guildId) {
  ({ projectId, publishOptions } = guildId);
  if (publishOptions === undefined) {
    publishOptions = null;
  }
  const tmp = closure_7();
  let tmp5Result2 = dependencyMap;
  const tmp4 = useConjureSharingModeDefault(projectId);
  let sharing = useConjureShareServersDefault(projectId, guildId.guildId, publishOptions);
  const project = tmp4.project;
  const obj = { style: tmp.header, children: null };
  let tmp5Result = null;
  if (null != project) {
    const obj2 = { project, size: "dialog" };
    tmp5Result = closure_4(ConjureProjectIconDefault, obj2);
  }
  items = [tmp5Result, ];
  const intl = tmp6(1113).intl;
  let str;
  if (project != null) {
    str = project.name;
  }
  if (str == null) {
    str = "";
  }
  const obj3 = { header: null, children: null };
  const obj4 = { title: intl.formatToPlainString(_modDef4133.pgxjO4, { app: str }), subtitle: null };
  const intl2 = tmp6(1113).intl;
  obj4.subtitle = intl2.string(_modDef4133.mbybxl);
  items[1] = closure_4(sharing(7923).BottomSheetTitleHeader, obj4);
  obj.children = items;
  obj3.header = closure_5(View, obj);
  if (null == project) {
    obj3.children = null;
    return closure_4(sharing(7961).ActionSheet, obj3);
  } else {
    const obj5 = { style: tmp.body, children: null };
    const obj6 = { project, sharing: tmp4, servers: sharing, serversLabel: null };
    const intl3 = tmp6(1113).intl;
    obj6.serversLabel = intl3.string(_modDef4133.bRGLUO);
    const items1 = [closure_4(ConjureShareAccessDefault, obj6), ];
    const intl4 = tmp6(1113).intl;
    if (null != sharing.picked) {
      let i4jeWR = _modDef4133["+uQwxA"];
    } else {
      i4jeWR = tmp6(1113).t.i4jeWR;
    }
    const obj7 = { variant: "primary", text: intl4.string(i4jeWR), loading: null, onPress: null };
    sharing = sharing.sharing;
    obj7.loading = sharing;
    obj7.onPress = function onPress() {
      return sharing.finish(hideShareSheet, showShareToast);
    };
    tmp5Result2 = closure_4(tmp6(5930).Button, obj7);
    items1[1] = tmp5Result2;
    obj5.children = items1;
    closure_5(View, obj5);
    const tmp2Result = ConjureShareAccessDefault;
  }
};
export const CONJURE_SHARE_SHEET_KEY = "ConjureShareSheet";