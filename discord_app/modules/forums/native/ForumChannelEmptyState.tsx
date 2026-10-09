// discord_app/modules/forums/native/ForumChannelEmptyState.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import shared from "../../../design/shared.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef12487 from "../../../../_runtime/metro/12487__.js";
import _modDef12488 from "../../../../_runtime/metro/12488__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles({
  container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" },
  image: { width: 120, height: 80 },
  title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 },
  subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ForumChannelEmptyState(arg0) {
        const cResult = c.c(26);
        ({ topViewHeight, channelName, tagFilter } = arg0);
        let num = 0;
        if (undefined !== topViewHeight) {
          num = topViewHeight;
        }
        const tmp4 = closure_6();
        const rect = useSafeAreaInsetsDefault();
        const sum = rect.bottom + rect.top + num;
        if (cResult[0] !== sum) {
          const obj2 = { marginBottom: sum };
          cResult[0] = sum;
          cResult[1] = obj2;
          let tmp8 = obj2;
        } else {
          tmp8 = cResult[1];
        }
        if (cResult[2] === tmp4.container) {
          if (cResult[3] === tmp8) {
            let tmp9 = cResult[4];
          }
          if (tmpResult2.isThemeLight(tmpResult.useThemeContext().theme)) {
            let tmp5Result = _modDef12487;
          } else {
            tmp5Result = _modDef12488;
          }
          if (cResult[5] === tmp4.image) {
            if (cResult[6] === tmp5Result) {
              let tmp11 = cResult[7];
            }
            if (cResult[8] === tmp7) {
              if (cResult[9] === tagFilter.size) {
                if (cResult[11] === tmp4.title) {
                  if (cResult[12] === tmp14) {
                    let tmp17 = cResult[13];
                  }
                  if (cResult[14] === channelName) {
                    if (cResult[15] === tmp7) {
                      if (cResult[16] === tagFilter.size) {
                        if (cResult[18] === tmp4.subtext) {
                          if (cResult[19] === tmp20) {
                            let tmp23 = cResult[20];
                          }
                          if (cResult[21] === tmp9) {
                            if (cResult[22] === tmp11) {
                              if (cResult[23] === tmp17) {
                                if (cResult[24] === tmp23) {
                                  let tmp26 = cResult[25];
                                }
                                return tmp26;
                              }
                            }
                          }
                          const obj3 = { style: tmp9, children: null };
                          const items = [tmp11, tmp17, tmp23];
                          obj3.children = items;
                          const tmp29 = hasOwnProperty(View, obj3);
                          cResult[21] = tmp9;
                          cResult[22] = tmp11;
                          cResult[23] = tmp17;
                          cResult[24] = tmp23;
                          cResult[25] = tmp29;
                          tmp26 = tmp29;
                        }
                        const obj4 = {
                          style: tmp4.subtext,
                          variant: "text-sm/medium",
                          color: "text-default",
                          children: cResult[17],
                        };
                        const tmp25 = React4(Text_Text.Text, obj4);
                        cResult[18] = tmp4.subtext;
                        cResult[19] = cResult[17];
                        cResult[20] = tmp25;
                        tmp23 = tmp25;
                      }
                    }
                  }
                  const intl2 = util.intl;
                  const formatToPlainString = intl2.formatToPlainString;
                  let t = util.t;
                  if (tmp7) {
                    t = { numTags: tagFilter.size };
                    let formatToPlainStringResult = formatToPlainString(t.AAeye1, t);
                  } else {
                    const obj5 = { channelName };
                    formatToPlainStringResult = formatToPlainString(t.YtsXFD, obj5);
                  }
                  cResult[14] = channelName;
                  cResult[15] = tmp7;
                  tagFilter = tagFilter.size;
                  cResult[16] = tagFilter;
                  cResult[17] = formatToPlainStringResult;
                }
                const obj6 = {
                  style: tmp4.title,
                  accessibilityRole: "header",
                  variant: "heading-lg/semibold",
                  color: "mobile-text-heading-primary",
                  children: cResult[10],
                };
                const tmp19 = React4(Text_Text.Text, obj6);
                cResult[11] = tmp4.title;
                cResult[12] = cResult[10];
                cResult[13] = tmp19;
                tmp17 = tmp19;
              }
            }
            const intl = util.intl;
            if (tmp7) {
              const obj7 = { numTags: tagFilter.size };
              let formatToPlainStringResult1 = intl.formatToPlainString(util.t.lvPci0, obj7);
            } else {
              formatToPlainStringResult1 = intl.string(util.t.PwTMG0);
            }
            cResult[8] = tmp7;
            cResult[9] = tagFilter.size;
            cResult[10] = formatToPlainStringResult1;
          }
          const obj8 = { source: tmp5Result, style: tmp4.image };
          const tmp13 = React4(FastImageDefault, obj8);
          cResult[5] = tmp4.image;
          cResult[6] = tmp5Result;
          cResult[7] = tmp13;
          tmp11 = tmp13;
          tmpResult2 = shared;
        }
        const items1 = [tmp4.container, tmp8];
        cResult[2] = tmp4.container;
        cResult[3] = tmp8;
        cResult[4] = items1;
        tmp9 = items1;
        tmpResult = shared;
      }
    : function ForumChannelEmptyState(topViewHeight) {
        let num = topViewHeight.topViewHeight;
        if (num === undefined) {
          num = 0;
        }
        const tagFilter = topViewHeight.tagFilter;
        const tmp = closure_6();
        const rect = useSafeAreaInsetsDefault();
        const obj2 = { style: null, children: null };
        const items = [tmp.container, { marginBottom: rect.bottom + rect.top + num }];
        obj2.style = items;
        const obj = shared;
        const tmp9 = FastImageDefault;
        if (obj3.isThemeLight(obj.useThemeContext().theme)) {
          let tmp4Result = _modDef12487;
        } else {
          tmp4Result = _modDef12488;
        }
        const items1 = [React4(tmp9, { source: tmp4Result, style: tmp.image }), ,];
        const obj5 = {
          style: tmp.title,
          accessibilityRole: "header",
          variant: "heading-lg/semibold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl = util.intl;
        if (tagFilter.size > 0) {
          const obj6 = { numTags: tagFilter.size };
          let formatToPlainStringResult = intl.formatToPlainString(util.t.lvPci0, obj6);
        } else {
          formatToPlainStringResult = intl.string(util.t.PwTMG0);
        }
        obj5.children = formatToPlainStringResult;
        items1[1] = React4(Text_Text.Text, obj5);
        const obj7 = { style: tmp.subtext, variant: "text-sm/medium", color: "text-default", children: null };
        const intl2 = util.intl;
        const formatToPlainString = intl2.formatToPlainString;
        const t = util.t;
        if (tagFilter.size > 0) {
          const obj8 = { numTags: tagFilter.size };
          let formatToPlainStringResult1 = formatToPlainString(t.AAeye1, obj8);
        } else {
          const obj9 = { channelName: topViewHeight.channelName };
          formatToPlainStringResult1 = formatToPlainString(t.YtsXFD, obj9);
        }
        obj7.children = formatToPlainStringResult1;
        items1[2] = React4(Text_Text.Text, obj7);
        obj2.children = items1;
        return hasOwnProperty(View, obj2);
      },
);
