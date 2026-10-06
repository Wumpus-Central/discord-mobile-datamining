// discord_app/modules/forums/native/ForumChannelEmptyState.tsx
import react2 from "../../../../_runtime/00576_react.js";
import intl3 from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import shared from "../../../design/shared.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AssetRegistryDefault from "../../../../_runtime/12452_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/12453_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({
  container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" },
  image: { width: 120, height: 80 },
  title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 },
  subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 },
});
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let channelName;
        let items;
        let tagFilter;
        let tmp8;
        let topViewHeight;
        const obj = react2;
        const cResult = obj.c(26);
        ({ topViewHeight, channelName, tagFilter } = arg0);
        let num = 0;
        if (undefined !== topViewHeight) {
          num = topViewHeight;
        }
        const tmp4 = closure_7();
        const tmpResult = shared;
        const theme = tmpResult.useThemeContext().theme;
        const rect = useSafeAreaInsetsDefault();
        const sum = rect.bottom + rect.top + num;
        if (cResult[0] !== sum) {
          const obj2 = { marginBottom: sum };
          cResult[0] = sum;
          cResult[1] = obj2;
          tmp8 = obj2;
        } else {
          tmp8 = cResult[1];
        }
        if (cResult[2] === tmp4.container) {
          let tmp9;
          let tmp5Result;
          if (cResult[3] === tmp8) {
            tmp9 = cResult[4];
          }
          const tmpResult2 = shared;
          if (tmpResult2.isThemeLight(theme)) {
            tmp5Result = AssetRegistryDefault;
          } else {
            tmp5Result = AssetRegistryDefault2;
          }
          if (cResult[5] === tmp4.image) {
            let tmp11;
            let formatToPlainStringResult1;
            if (cResult[6] === tmp5Result) {
              tmp11 = cResult[7];
            }
            if (cResult[8] === tagFilter.size > 0) {
              let tmp15;
              if (cResult[9] === tagFilter.size) {
                tmp15 = cResult[10];
              }
              if (cResult[11] === tmp4.title) {
                let tmp17;
                let formatToPlainStringResult;
                if (cResult[12] === tmp15) {
                  tmp17 = cResult[13];
                }
                if (cResult[14] === channelName) {
                  if (cResult[15] === tagFilter.size > 0) {
                    let tmp20;
                    if (cResult[16] === tagFilter.size) {
                      tmp20 = cResult[17];
                    }
                    if (cResult[18] === tmp4.subtext) {
                      let tmp22;
                      if (cResult[19] === tmp20) {
                        tmp22 = cResult[20];
                      }
                      if (cResult[21] === tmp9) {
                        if (cResult[22] === tmp11) {
                          if (cResult[23] === tmp17) {
                            let tmp25;
                            if (cResult[24] === tmp22) {
                              tmp25 = cResult[25];
                            }
                            return tmp25;
                          }
                        }
                      }
                      const obj3 = { style: tmp9, children: items };
                      items = [tmp11, tmp17, tmp22];
                      const tmp28 = metroRequire(_false, obj3);
                      cResult[21] = tmp9;
                      cResult[22] = tmp11;
                      cResult[23] = tmp17;
                      cResult[24] = tmp22;
                      cResult[25] = tmp28;
                      tmp25 = tmp28;
                    }
                    const obj4 = {
                      style: tmp4.subtext,
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: tmp20,
                    };
                    const tmp24 = hasOwnProperty(Text_Text.Text, obj4);
                    cResult[18] = tmp4.subtext;
                    cResult[19] = tmp20;
                    cResult[20] = tmp24;
                    tmp22 = tmp24;
                  }
                }
                const intl2 = intl3.intl;
                const formatToPlainString = intl2.formatToPlainString;
                const t = intl3.t;
                if (tagFilter.size > 0) {
                  const obj5 = { numTags: tagFilter.size };
                  formatToPlainStringResult = formatToPlainString(t.AAeye1, obj5);
                } else {
                  const obj6 = { channelName };
                  formatToPlainStringResult = formatToPlainString(t.YtsXFD, obj6);
                }
                cResult[14] = channelName;
                cResult[15] = tagFilter.size > 0;
                cResult[16] = tagFilter.size;
                cResult[17] = formatToPlainStringResult;
                tmp20 = formatToPlainStringResult;
              }
              const obj7 = {
                style: tmp4.title,
                accessibilityRole: "header",
                variant: "heading-lg/semibold",
                color: "mobile-text-heading-primary",
                children: tmp15,
              };
              const tmp19 = hasOwnProperty(Text_Text.Text, obj7);
              cResult[11] = tmp4.title;
              cResult[12] = tmp15;
              cResult[13] = tmp19;
              tmp17 = tmp19;
            }
            const intl = intl3.intl;
            if (tagFilter.size > 0) {
              const obj8 = { numTags: tagFilter.size };
              formatToPlainStringResult1 = intl.formatToPlainString(intl3.t.lvPci0, obj8);
            } else {
              formatToPlainStringResult1 = intl.string(intl3.t.PwTMG0);
            }
            cResult[8] = tagFilter.size > 0;
            cResult[9] = tagFilter.size;
            cResult[10] = formatToPlainStringResult1;
            tmp15 = formatToPlainStringResult1;
          }
          const obj9 = { source: tmp5Result, style: tmp4.image };
          const tmp14 = hasOwnProperty(React3, obj9);
          cResult[5] = tmp4.image;
          cResult[6] = tmp5Result;
          cResult[7] = tmp14;
          tmp11 = tmp14;
        }
        const items1 = [tmp4.container, tmp8];
        cResult[2] = tmp4.container;
        cResult[3] = tmp8;
        cResult[4] = items1;
        tmp9 = items1;
      }
    : (topViewHeight) => {
        let formatToPlainStringResult;
        let formatToPlainStringResult1;
        let items;
        let items1;
        let tmp4Result;
        let num = topViewHeight.topViewHeight;
        if (num === undefined) {
          num = 0;
        }
        const tagFilter = topViewHeight.tagFilter;
        const channelName = topViewHeight.channelName;
        const tmp = closure_7();
        const obj = shared;
        const theme = obj.useThemeContext().theme;
        const rect = useSafeAreaInsetsDefault();
        const obj2 = { style: items, children: items1 };
        items = [tmp.container, { marginBottom: rect.bottom + rect.top + num }];
        const obj3 = shared;
        if (obj3.isThemeLight(theme)) {
          tmp4Result = AssetRegistryDefault;
        } else {
          tmp4Result = AssetRegistryDefault2;
        }
        items1 = [, ,];
        const obj4 = { source: tmp4Result, style: tmp.image };
        items1[0] = hasOwnProperty(React3, obj4);
        const obj5 = {
          style: tmp.title,
          accessibilityRole: "header",
          variant: "heading-lg/semibold",
          color: "mobile-text-heading-primary",
          children: formatToPlainStringResult,
        };
        const Text = Text_Text.Text;
        const intl = intl3.intl;
        if (tagFilter.size > 0) {
          const obj6 = { numTags: tagFilter.size };
          formatToPlainStringResult = intl.formatToPlainString(intl3.t.lvPci0, obj6);
        } else {
          formatToPlainStringResult = intl.string(intl3.t.PwTMG0);
        }
        items1[1] = hasOwnProperty(Text, obj5);
        const obj7 = {
          style: tmp.subtext,
          variant: "text-sm/medium",
          color: "text-default",
          children: formatToPlainStringResult1,
        };
        const Text2 = Text_Text.Text;
        const intl2 = intl3.intl;
        const formatToPlainString = intl2.formatToPlainString;
        const t = intl3.t;
        if (tagFilter.size > 0) {
          const obj8 = { numTags: tagFilter.size };
          formatToPlainStringResult1 = formatToPlainString(t.AAeye1, obj8);
        } else {
          const obj9 = { channelName };
          formatToPlainStringResult1 = formatToPlainString(t.YtsXFD, obj9);
        }
        items1[2] = hasOwnProperty(Text2, obj7);
        return metroRequire(_false, obj2);
      },
);
const result = size.fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default memoResult;
