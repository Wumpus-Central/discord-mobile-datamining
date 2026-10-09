// discord_app/modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useTypeConsolidationTextTransform from "../../../design/useTypeConsolidationTextTransform.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = createStyles.createStyles({
  linksContainer: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 },
  headerText: { marginBottom: 8 },
});
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ExternalLinkItem(data) {
      const cResult = url(576).c(7);
      data = data.data;
      url = data.url;
      ({ link_text, link_description } = data);
      if (data.is_localized) {
        if (cResult[0] !== url) {
          function onLinkPress() {
            LinkingDefault.openURL(url);
          }
          cResult[0] = url;
          cResult[1] = onLinkPress;
          let tmp5 = onLinkPress;
        } else {
          tmp5 = cResult[1];
        }
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { IconComponent: tmp(13501).LinkExternalMediumIcon };
          const tmp9 = closure_4(tmp(6194).TableRowIcon, obj2);
          cResult[2] = tmp9;
          let tmp7 = tmp9;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] === link_description) {
          if (cResult[4] === link_text) {
            if (cResult[5] === tmp5) {
              let tmp10 = cResult[6];
            }
            return tmp10;
          }
        }
        const obj3 = {
          label: link_text,
          subLabel: link_description,
          trailing: tmp7,
          onPress: tmp5,
          arrow: false,
          accessibilityRole: "link",
        };
        const tmp12 = closure_4(tmp(8565).RowButton, obj3);
        cResult[3] = link_description;
        cResult[4] = link_text;
        cResult[5] = tmp5;
        cResult[6] = tmp12;
        tmp10 = tmp12;
      } else {
        return null;
      }
      const obj = url(576);
    }
  : function ExternalLinkItem(data) {
      data = data.data;
      const url = data.url;
      let tmp3 = null;
      if (data.is_localized) {
        const obj = {
          label: tmp,
          subLabel: tmp2,
          trailing: null,
          onPress: null,
          arrow: false,
          accessibilityRole: "link",
        };
        const obj2 = { IconComponent: url(13501).LinkExternalMediumIcon };
        obj.trailing = closure_4(url(6194).TableRowIcon, obj2);
        obj.onPress = function onLinkPress() {
          LinkingDefault.openURL(url);
        };
        tmp3 = closure_4(url(8565).RowButton, obj);
      }
      return tmp3;
    };
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ExternalLinksElement(elements) {
      let hvVgAZ = dependencyMap;
      const cResult = c.c(14);
      elements = elements.elements;
      const tmp3 = closure_6();
      const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow(
        "InAppReportsExternalLink",
        "heading-deprecated-12/extrabold",
      );
      if (null != elements) {
        let num2 = 0;
        if (0 !== elements.length) {
          if (null != elements.find((data) => data.data.is_localized)) {
            if (cResult[0] !== elements) {
              const _Symbol = Symbol;
              if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
                const fn = function p(data) {
                  return data.data.is_header_hidden;
                };
                cResult[2] = fn;
                let tmp7 = fn;
              } else {
                tmp7 = cResult[2];
              }
              const someResult = elements.some(tmp7);
              cResult[num2] = elements;
              num2 = 1;
              cResult[1] = someResult;
            } else {
              if (cResult[3] === typeConsolidationEyebrow) {
                if (cResult[4] === tmp5) {
                  if (cResult[5] === tmp3.headerText) {
                    let tmp11 = cResult[6];
                  }
                  if (cResult[7] !== elements) {
                    const _Symbol2 = Symbol;
                    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                      const fn2 = function f(data, arg1) {
                        return closure_1_4(closure_1_7, { data: data.data }, "external-link-" + arg1);
                      };
                      cResult[9] = fn2;
                      let tmp18 = fn2;
                    } else {
                      tmp18 = cResult[9];
                    }
                    const mapped = elements.map(tmp18);
                    cResult[7] = elements;
                    cResult[8] = mapped;
                  } else {
                    if (cResult[10] === tmp3.linksContainer) {
                      if (cResult[11] === tmp11) {
                        if (cResult[12] === tmp16) {
                          let tmp21 = cResult[13];
                        }
                        return tmp21;
                      }
                    }
                    const obj3 = { style: tmp10, children: null };
                    const items = [tmp11, cResult[8]];
                    obj3.children = items;
                    const tmp24 = hasOwnProperty(View, obj3);
                    cResult[10] = tmp3.linksContainer;
                    cResult[11] = tmp11;
                    cResult[12] = cResult[8];
                    cResult[13] = tmp24;
                    tmp21 = tmp24;
                  }
                }
              }
              if (cResult[1]) {
                cResult[3] = typeConsolidationEyebrow;
                cResult[4] = tmp5;
                cResult[5] = tmp3.headerText;
                cResult[6] = tmp12;
                tmp11 = tmp12;
              } else {
                if (null != typeConsolidationEyebrow.style) {
                  const items1 = [tmp3.headerText, typeConsolidationEyebrow.style];
                  let headerText = items1;
                } else {
                  headerText = tmp3.headerText;
                }
                const obj4 = {
                  style: headerText,
                  variant: typeConsolidationEyebrow.variant,
                  color: "text-default",
                  accessibilityRole: "header",
                  children: null,
                };
                if (null != typeConsolidationEyebrow.style) {
                  const intl2 = util.intl;
                  hvVgAZ = util.t.hvVgAZ;
                  let stringResult = intl2.string(hvVgAZ);
                } else {
                  const intl = util.intl;
                  stringResult = intl.string(util.t.hvVgAZ).toUpperCase();
                  const str2 = intl.string(util.t.hvVgAZ);
                }
                obj4.children = stringResult;
                React4(Text_Text.Text, obj4);
              }
            }
          }
        }
      }
      return null;
    }
  : function ExternalLinksElement(elements) {
      elements = elements.elements;
      const tmp = closure_6();
      let hvVgAZ = dependencyMap;
      const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow(
        "InAppReportsExternalLink",
        "heading-deprecated-12/extrabold",
      );
      if (null != elements) {
        if (0 !== elements.length) {
          if (null != elements.find((data) => data.data.is_localized)) {
            const obj2 = { style: tmp.linksContainer, children: null };
            if (someResult) {
              const items = [
                tmp10,
                elements.map((data, index) => closure_1_4(closure_1_7, { data: data.data }, "external-link-" + index)),
              ];
              obj2.children = items;
              return tmp8(tmp9, obj2);
            } else {
              if (null != typeConsolidationEyebrow.style) {
                const items1 = [tmp.headerText, typeConsolidationEyebrow.style];
                let headerText = items1;
              } else {
                headerText = tmp.headerText;
              }
              const obj3 = {
                style: headerText,
                variant: typeConsolidationEyebrow.variant,
                color: "text-default",
                accessibilityRole: "header",
                children: null,
              };
              if (null != typeConsolidationEyebrow.style) {
                const intl2 = util.intl;
                hvVgAZ = util.t.hvVgAZ;
                let stringResult = intl2.string(hvVgAZ);
              } else {
                const intl = util.intl;
                stringResult = intl.string(util.t.hvVgAZ).toUpperCase();
                const str = intl.string(util.t.hvVgAZ);
              }
              obj3.children = stringResult;
              React4(Text_Text.Text, obj3);
            }
            someResult = elements.some((data) => data.data.is_header_hidden);
          }
        }
      }
      return null;
    };
