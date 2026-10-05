// discord_app/modules/parent_tools/native/FamilyCenterLinkingBanner.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2493 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import FamilyCenterBannerButton from "FamilyCenterBannerButton.tsx";
import _modDef14722 from "../../../../_runtime/metro/14722__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let createStyles = fn(4890);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    marginTop: nativeDefault.space.PX_16,
    paddingTop: 0,
    paddingBottom: nativeDefault.space.PX_16,
    alignItems: "center",
    borderRadius: nativeDefault.radii.md,
    elevation: 2,
    overflow: "hidden",
  },
  content: null,
  art: null,
  header: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  marginTop: nativeDefault.space.PX_16,
  paddingTop: 0,
  paddingBottom: nativeDefault.space.PX_16,
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
  elevation: 2,
  overflow: "hidden",
};
obj2.content = { padding: nativeDefault.space.PX_16 };
let size = { width: "100%", height: 175, marginBottom: nativeDefault.space.PX_12 };
obj2.art = size;
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.header = { marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let obj5 = { marginBottom: nativeDefault.space.PX_8 };
createStyles = fn(4890);
let obj6 = { container: null };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(22);
      const tmp4 = closure_7();
      const tmp6 = useIsInAdultAgeGroupDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef2493.zUCWEL);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(_modDef2493.B0NPbp);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp7 = stringResult;
        tmp8 = stringResult1;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const ageSpecificText = useAgeSpecificText.useAgeSpecificText(tmp7, tmp8);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const formatResult = intl3.format(_modDef2493.yMnoDl, {
          link: "https://support.discord.com/hc/articles/14155060633623",
        });
        const intl4 = util.intl;
        const stringResult2 = intl4.string(_modDef2493.JsAEDi);
        cResult[2] = formatResult;
        cResult[3] = stringResult2;
        let tmp13 = stringResult2;
        let tmp12 = formatResult;
      } else {
        tmp12 = cResult[2];
        tmp13 = cResult[3];
      }
      const tmpResult = useAgeSpecificText;
      const ageSpecificText1 = useAgeSpecificText.useAgeSpecificText(tmp12, tmp13);
      if (cResult[4] !== tmp4.art) {
        const obj2 = { source: _modDef14722, style: tmp4.art, resizeMethod: "resize" };
        const tmp20 = hasOwnProperty(React4, obj2);
        cResult[4] = tmp4.art;
        cResult[5] = tmp20;
        let tmp17 = tmp20;
      } else {
        tmp17 = cResult[5];
      }
      if (cResult[6] === ageSpecificText) {
        if (cResult[7] === tmp4.header) {
          let tmp21 = cResult[8];
        }
        if (cResult[9] !== ageSpecificText1) {
          const obj3 = { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 };
          const tmp25 = hasOwnProperty(Text_Text.Text, obj3);
          cResult[9] = ageSpecificText1;
          cResult[10] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[10];
        }
        if (cResult[11] === tmp4.content) {
          if (cResult[12] === tmp21) {
            if (cResult[13] === tmp23) {
              let tmp26 = cResult[14];
            }
            if (cResult[15] !== tmp6) {
              const tmp31 = hasOwnProperty(tmp6 ? closure_9 : closure_11, {});
              cResult[15] = tmp6;
              cResult[16] = tmp31;
            } else {
              if (cResult[17] === tmp4.container) {
                if (cResult[18] === tmp17) {
                  if (cResult[19] === tmp26) {
                    if (cResult[20] === tmp30) {
                      let tmp33 = cResult[21];
                    }
                    return tmp33;
                  }
                }
              }
              const obj4 = { style: tmp4.container, children: null };
              const items = [tmp17, tmp26, cResult[16]];
              obj4.children = items;
              const tmp36 = timestampProducer(React3, obj4);
              cResult[17] = tmp4.container;
              cResult[18] = tmp17;
              cResult[19] = tmp26;
              cResult[20] = cResult[16];
              cResult[21] = tmp36;
              tmp33 = tmp36;
            }
          }
        }
        const obj5 = { style: tmp4.content, children: null };
        const items1 = [tmp21, tmp23];
        obj5.children = items1;
        const tmp29 = timestampProducer(React3, obj5);
        cResult[11] = tmp4.content;
        cResult[12] = tmp21;
        cResult[13] = tmp23;
        cResult[14] = tmp29;
        tmp26 = tmp29;
      }
      const tmp22 = hasOwnProperty(Text_Text.Text, {
        style: tmp4.header,
        variant: "heading-lg/semibold",
        children: ageSpecificText,
      });
      cResult[6] = ageSpecificText;
      cResult[7] = tmp4.header;
      cResult[8] = tmp22;
      tmp21 = tmp22;
      const obj6 = { style: tmp4.header, variant: "heading-lg/semibold", children: ageSpecificText };
      const tmpResult2 = useAgeSpecificText;
    }
  : () => {
      const tmp = closure_7();
      const tmp2 = useIsInAdultAgeGroupDefault();
      const intl = util.intl;
      const obj = useAgeSpecificText;
      const intl2 = util.intl;
      const ageSpecificText = obj.useAgeSpecificText(intl.string(_modDef2493.zUCWEL), intl2.string(_modDef2493.B0NPbp));
      const stringResult = intl.string(_modDef2493.zUCWEL);
      const intl3 = util.intl;
      const obj2 = useAgeSpecificText;
      const intl4 = util.intl;
      const obj3 = { style: tmp.container, children: null };
      const obj4 = { source: null, style: null, resizeMethod: "resize" };
      const ageSpecificText1 = obj2.useAgeSpecificText(
        intl3.format(_modDef2493.yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" }),
        intl4.string(_modDef2493.JsAEDi),
      );
      obj4.source = _modDef14722;
      obj4.style = tmp.art;
      const items = [hasOwnProperty(React4, obj4), ,];
      const obj5 = { style: tmp.content, children: null };
      const items1 = [
        hasOwnProperty(Text_Text.Text, {
          style: tmp.header,
          variant: "heading-lg/semibold",
          children: ageSpecificText,
        }),
        hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 }),
      ];
      obj5.children = items1;
      items[1] = timestampProducer(React3, obj5);
      items[2] = hasOwnProperty(tmp2 ? closure_9 : closure_11, {});
      obj3.children = items;
      return timestampProducer(React3, obj3);
    };
obj6.container = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
let closure_8 = createStyles.createStyles(obj6);
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(6);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { index: 1, header: null, description: null };
        const intl = util.intl;
        obj2.header = intl.string(_modDef2493["7xxAni"]);
        const intl2 = util.intl;
        obj2.description = intl2.string(_modDef2493["1M9So2"]);
        const tmp9 = hasOwnProperty(closure_13, obj2);
        cResult[0] = tmp9;
        let first = tmp9;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { index: 2, header: null, description: null };
        const intl3 = util.intl;
        obj3.header = intl3.string(_modDef2493["AXgx+a"]);
        const intl4 = util.intl;
        obj3.description = intl4.string(_modDef2493.GzMFnb);
        const tmp14 = hasOwnProperty(closure_13, obj3);
        cResult[1] = tmp14;
        let tmp10 = tmp14;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { index: 3, header: null, description: null, isLast: true };
        const intl5 = util.intl;
        obj4.header = intl5.string(_modDef2493.MZn1tG);
        const intl6 = util.intl;
        obj4.description = intl6.string(_modDef2493["8rLBxD"]);
        const tmp20 = hasOwnProperty(closure_13, obj4);
        const tmp21 = hasOwnProperty(FamilyCenterBannerButton.FamilyCenterParentQRCodeButton, {});
        cResult[2] = tmp20;
        cResult[3] = tmp21;
        let tmp16 = tmp21;
        let tmp15 = tmp20;
      } else {
        tmp15 = cResult[2];
        tmp16 = cResult[3];
      }
      if (cResult[4] !== tmp4.container) {
        const obj5 = { style: tmp4.container, children: null };
        const items = [first, tmp10, tmp15, tmp16];
        obj5.children = items;
        const tmp25 = timestampProducer(React3, obj5);
        cResult[4] = tmp4.container;
        cResult[5] = tmp25;
        let tmp22 = tmp25;
      } else {
        tmp22 = cResult[5];
      }
      return tmp22;
    }
  : () => {
      const obj = { style: closure_8().container, children: null };
      const obj2 = { index: 1, header: null, description: null };
      const intl = util.intl;
      obj2.header = intl.string(_modDef2493["7xxAni"]);
      const intl2 = util.intl;
      obj2.description = intl2.string(_modDef2493["1M9So2"]);
      const items = [hasOwnProperty(closure_13, obj2), , ,];
      const obj3 = { index: 2, header: null, description: null };
      const intl3 = util.intl;
      obj3.header = intl3.string(_modDef2493["AXgx+a"]);
      const intl4 = util.intl;
      obj3.description = intl4.string(_modDef2493.GzMFnb);
      items[1] = hasOwnProperty(closure_13, obj3);
      const obj4 = { index: 3, header: null, description: null, isLast: true };
      const intl5 = util.intl;
      obj4.header = intl5.string(_modDef2493.MZn1tG);
      const intl6 = util.intl;
      obj4.description = intl6.string(_modDef2493["8rLBxD"]);
      items[2] = hasOwnProperty(closure_13, obj4);
      items[3] = hasOwnProperty(FamilyCenterBannerButton.FamilyCenterParentQRCodeButton, {});
      obj.children = items;
      return timestampProducer(React3, obj);
    };
createStyles = fn(4890);
const obj10 = { container: null };
const obj9 = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
obj10.container = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj10);
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = hasOwnProperty(FamilyCenterBannerButton.FamilyCenterTeenQRCodeButton, {});
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.container) {
        const obj2 = { style: tmp4.container, children: first };
        const tmp11 = hasOwnProperty(React3, obj2);
        cResult[1] = tmp4.container;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : () =>
      hasOwnProperty(React3, {
        style: closure_10().container,
        children: hasOwnProperty(FamilyCenterBannerButton.FamilyCenterTeenQRCodeButton, {}),
      });
createStyles = fn(4890);
const obj14 = {
  row: { display: "flex", flexDirection: "row", alignItems: "flex-start" },
  gap: { marginBottom: 12 },
  circle: null,
  rowContent: null,
};
const size1 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj14.circle = size1;
obj14.rowContent = { marginLeft: 12, flex: 1 };
let closure_12 = createStyles.createStyles(obj14);
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isLast) => {
      const cResult = c.c(20);
      ({ header, description, index } = isLast);
      const tmp4 = closure_12();
      if (cResult[0] !== index) {
        const obj2 = { variant: "heading-md/semibold", color: "text-brand", children: index };
        const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[0] = index;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.circle) {
        if (cResult[3] === tmp5) {
          let tmp8 = cResult[4];
        }
        let gap = null;
        if (!isLast.isLast) {
          gap = tmp4.gap;
        }
        if (cResult[5] === tmp4.rowContent) {
          if (cResult[6] === gap) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] !== header) {
            const obj3 = { variant: "heading-sm/bold", children: header };
            const tmp14 = hasOwnProperty(Text_Text.Text, obj3);
            cResult[8] = header;
            cResult[9] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[9];
          }
          if (cResult[10] !== description) {
            const obj4 = { variant: "text-sm/medium", color: "text-muted", children: description };
            const tmp17 = hasOwnProperty(Text_Text.Text, obj4);
            cResult[10] = description;
            cResult[11] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp11) {
            if (cResult[13] === tmp12) {
              if (cResult[14] === tmp15) {
                let tmp18 = cResult[15];
              }
              if (cResult[16] === tmp4.row) {
                if (cResult[17] === tmp8) {
                  if (cResult[18] === tmp18) {
                    let tmp22 = cResult[19];
                  }
                  return tmp22;
                }
              }
              const obj5 = { style: tmp4.row, children: null };
              const items = [tmp8, tmp18];
              obj5.children = items;
              const tmp25 = timestampProducer(React3, obj5);
              cResult[16] = tmp4.row;
              cResult[17] = tmp8;
              cResult[18] = tmp18;
              cResult[19] = tmp25;
              tmp22 = tmp25;
            }
          }
          const obj6 = { style: tmp11, children: null };
          const items1 = [tmp12, tmp15];
          obj6.children = items1;
          const tmp21 = timestampProducer(React3, obj6);
          cResult[12] = tmp11;
          cResult[13] = tmp12;
          cResult[14] = tmp15;
          cResult[15] = tmp21;
          tmp18 = tmp21;
        }
        const items2 = [tmp4.rowContent, gap];
        cResult[5] = tmp4.rowContent;
        cResult[6] = gap;
        cResult[7] = items2;
        tmp11 = items2;
      }
      const tmp9 = hasOwnProperty(React3, { style: tmp4.circle, children: tmp5 });
      cResult[2] = tmp4.circle;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj7 = { style: tmp4.circle, children: tmp5 };
    }
  : (arg0) => {
      ({ header, description, index, isLast } = arg0);
      const tmp = closure_12();
      const obj = { style: tmp.row, children: null };
      const items = [
        hasOwnProperty(React3, {
          style: tmp.circle,
          children: hasOwnProperty(Text_Text.Text, {
            variant: "heading-md/semibold",
            color: "text-brand",
            children: index,
          }),
        }),
      ];
      const items1 = [tmp.rowContent];
      let gap = null;
      if (!isLast) {
        gap = tmp.gap;
      }
      const obj3 = { style: items1, children: null };
      items1[1] = gap;
      const items2 = [
        hasOwnProperty(Text_Text.Text, { variant: "heading-sm/bold", children: header }),
        hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: description }),
      ];
      obj3.children = items2;
      items[1] = timestampProducer(React3, obj3);
      obj.children = items;
      return timestampProducer(React3, obj);
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkingBanner.tsx");

export default tmp5;
