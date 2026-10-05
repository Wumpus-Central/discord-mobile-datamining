// === Module 16490: UnavailableNotice ===

// Module 16490 (UnavailableNotice)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import FastImageDefault from "FastImage" /* 5974 */;
import _modDef16172 from "module_16172" /* 16172 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, brightTitle: null, unavailableContainer: null, unavailableInfo: null, unavailableDescription: null, joinCtaTitle: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.brightTitle = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.unavailableContainer = { justifyContent: "center" };
obj2.unavailableInfo = { alignItems: "center", justifyContent: "center" };
obj2.unavailableDescription = { marginTop: 8, marginHorizontal: 16, textAlign: "center" };
obj2.joinCtaTitle = { alignSelf: "center", marginTop: 16, paddingHorizontal: 24, textAlign: "center" };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  ({ title, description, brightTitle } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === tmp4.container) {
    if (cResult[1] === tmp4.unavailableContainer) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { source: _modDef16172 };
      const tmp11 = React4(FastImageDefault, obj2);
      cResult[3] = tmp11;
      let tmp7 = tmp11;
    } else {
      tmp7 = cResult[3];
    }
    if (brightTitle) {
      brightTitle = tmp4.brightTitle;
    }
    if (cResult[4] === tmp4.joinCtaTitle) {
      if (cResult[5] === brightTitle) {
        let tmp12 = cResult[6];
      }
      if (cResult[7] === tmp12) {
        if (cResult[8] === title) {
          let tmp13 = cResult[9];
        }
        if (cResult[10] === description) {
          if (cResult[11] === tmp4.unavailableDescription) {
            let tmp16 = cResult[12];
          }
          if (cResult[13] === tmp4.unavailableInfo) {
            if (cResult[14] === tmp13) {
              if (cResult[15] === tmp16) {
                let tmp19 = cResult[16];
              }
              if (cResult[17] === tmp5) {
                if (cResult[18] === tmp19) {
                  let tmp23 = cResult[19];
                }
                return tmp23;
              }
              const obj3 = { style: tmp5, children: tmp19 };
              const tmp26 = React4(View, obj3);
              cResult[17] = tmp5;
              cResult[18] = tmp19;
              cResult[19] = tmp26;
              tmp23 = tmp26;
            }
          }
          const obj4 = { style: tmp4.unavailableInfo, children: null };
          const items = [tmp7, tmp13, tmp16];
          obj4.children = items;
          const tmp22 = hasOwnProperty(View, obj4);
          cResult[13] = tmp4.unavailableInfo;
          cResult[14] = tmp13;
          cResult[15] = tmp16;
          cResult[16] = tmp22;
          tmp19 = tmp22;
        }
        const obj5 = { style: tmp4.unavailableDescription, variant: "text-sm/medium", color: "text-default", children: description };
        const tmp18 = React4(Text_Text.Text, obj5);
        cResult[10] = description;
        cResult[11] = tmp4.unavailableDescription;
        cResult[12] = tmp18;
        tmp16 = tmp18;
      }
      const obj6 = { variant: "heading-lg/extrabold", color: "text-default", style: tmp12, children: title };
      const tmp15 = React4(Text_Text.Text, obj6);
      cResult[7] = tmp12;
      cResult[8] = title;
      cResult[9] = tmp15;
      tmp13 = tmp15;
    }
    const items1 = [tmp4.joinCtaTitle, brightTitle];
    cResult[4] = tmp4.joinCtaTitle;
    cResult[5] = brightTitle;
    cResult[6] = items1;
    tmp12 = items1;
  }
  const items2 = [, ];
  ({ container: arr[0], unavailableContainer: arr[1] } = tmp4);
  cResult[0] = tmp4.container;
  cResult[1] = tmp4.unavailableContainer;
  cResult[2] = items2;
  tmp5 = items2;
}) : ((brightTitle) => {
  brightTitle = brightTitle.brightTitle;
  ({ title, description } = brightTitle);
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [, ];
  ({ container: arr[0], unavailableContainer: arr[1] } = tmp);
  obj.style = items;
  const obj2 = { style: tmp.unavailableInfo, children: null };
  const obj3 = { source: _modDef16172 };
  const items1 = [React4(FastImageDefault, obj3), , ];
  const items2 = [tmp.joinCtaTitle, ];
  if (brightTitle) {
    brightTitle = tmp.brightTitle;
  }
  items2[1] = brightTitle;
  items1[1] = React4(Text_Text.Text, { variant: "heading-lg/extrabold", color: "text-default", style: items2, children: title });
  items1[2] = React4(Text_Text.Text, { style: tmp.unavailableDescription, variant: "text-sm/medium", color: "text-default", children: description });
  obj2.children = items1;
  obj.children = hasOwnProperty(View, obj2);
  return React4(View, obj);
});