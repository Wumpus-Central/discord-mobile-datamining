// === Module 16490: UnavailableNotice ===

// Module 16490 (UnavailableNotice)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import FastImageDefault from "FastImage" /* 5974 */;
import AssetRegistryDefault from "AssetRegistry" /* 16172 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, brightTitle: obj3, unavailableContainer: { justifyContent: "center" }, unavailableInfo: { alignItems: "center", justifyContent: "center" }, unavailableDescription: { marginTop: 8, marginHorizontal: 16, textAlign: "center" }, joinCtaTitle: { alignSelf: "center", marginTop: 16, paddingHorizontal: 24, textAlign: "center" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let brightTitle;
  let description;
  let items;
  let title;
  const obj = react2;
  const cResult = obj.c(20);
  ({ title, description, brightTitle } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === tmp4.container) {
    let tmp5;
    let tmp7;
    if (cResult[1] === tmp4.unavailableContainer) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { source: AssetRegistryDefault };
      const tmp10 = FastImageDefault;
      const tmp11 = React3(tmp10, obj2);
      cResult[3] = tmp11;
      tmp7 = tmp11;
    } else {
      tmp7 = cResult[3];
    }
    if (brightTitle) {
      brightTitle = tmp4.brightTitle;
    }
    if (cResult[4] === tmp4.joinCtaTitle) {
      let tmp12;
      if (cResult[5] === brightTitle) {
        tmp12 = cResult[6];
      }
      if (cResult[7] === tmp12) {
        let tmp13;
        if (cResult[8] === title) {
          tmp13 = cResult[9];
        }
        if (cResult[10] === description) {
          let tmp16;
          if (cResult[11] === tmp4.unavailableDescription) {
            tmp16 = cResult[12];
          }
          if (cResult[13] === tmp4.unavailableInfo) {
            if (cResult[14] === tmp13) {
              let tmp19;
              if (cResult[15] === tmp16) {
                tmp19 = cResult[16];
              }
              if (cResult[17] === tmp5) {
                let tmp23;
                if (cResult[18] === tmp19) {
                  tmp23 = cResult[19];
                }
                return tmp23;
              }
              const obj3 = { style: tmp5, children: tmp19 };
              const tmp26 = React3(View, obj3);
              cResult[17] = tmp5;
              cResult[18] = tmp19;
              cResult[19] = tmp26;
              tmp23 = tmp26;
            }
          }
          const obj4 = { style: tmp4.unavailableInfo, children: items };
          items = [tmp7, tmp13, tmp16];
          const tmp22 = hasOwnProperty(View, obj4);
          cResult[13] = tmp4.unavailableInfo;
          cResult[14] = tmp13;
          cResult[15] = tmp16;
          cResult[16] = tmp22;
          tmp19 = tmp22;
        }
        const obj5 = { style: tmp4.unavailableDescription, variant: "text-sm/medium", color: "text-default", children: description };
        const tmp18 = React3(Text_Text.Text, obj5);
        cResult[10] = description;
        cResult[11] = tmp4.unavailableDescription;
        cResult[12] = tmp18;
        tmp16 = tmp18;
      }
      const obj6 = { variant: "heading-lg/extrabold", color: "text-default", style: tmp12, children: title };
      const tmp15 = React3(Text_Text.Text, obj6);
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
  let description;
  let items;
  let items1;
  let obj2;
  let title;
  brightTitle = brightTitle.brightTitle;
  ({ title, description } = brightTitle);
  const tmp = closure_6();
  const obj = { style: items, children: hasOwnProperty(View, obj2) };
  items = [, ];
  ({ container: arr[0], unavailableContainer: arr[1] } = tmp);
  obj2 = { style: tmp.unavailableInfo, children: items1 };
  const obj3 = { source: AssetRegistryDefault };
  const tmp6 = FastImageDefault;
  items1 = [React3(tmp6, obj3), , ];
  const items2 = [tmp.joinCtaTitle, ];
  const Text = Text_Text.Text;
  if (brightTitle) {
    brightTitle = tmp.brightTitle;
  }
  items2[1] = brightTitle;
  items1[1] = React3(Text, { variant: "heading-lg/extrabold", color: "text-default", style: items2, children: title });
  const obj4 = { style: tmp.unavailableDescription, variant: "text-sm/medium", color: "text-default", children: description };
  items1[2] = React3(Text_Text.Text, obj4);
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx");

export default tmp5;