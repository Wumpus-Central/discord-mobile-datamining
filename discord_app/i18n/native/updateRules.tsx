// discord_app/i18n/native/updateRules.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../Constants.tsx";
import native from "../../design/void/native.tsx";
import _modDef1936 from "../../../_runtime/metro/01936__.js";
import LinkingDefault from "../../lib/native/Linking.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let paragraph = {
  strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (node) => {
      let output;
      let state;
      let obj = node(576);
      const cResult = obj.c(9);
      node = node.node;
      ({ output, state } = node);
      const alwaysShowLinkDecorations = react.useContext(
        node(4602).AccessibilityPreferencesContext,
      ).alwaysShowLinkDecorations;
      const obj2 = node(4586);
      const token = obj2.useToken(nativeDefault.colors.TEXT_LINK);
      let str = "none";
      if (alwaysShowLinkDecorations) {
        str = "underline";
      }
      if (cResult[0] === token) {
        const obj3 = {};
        if (null != node.context) {
          if (node.context[node.target]) {
            if (node.context[node.target].onClick) {
              obj3.onClick = node.context[node.target].onClick;
            }
          }
          obj3.onClick = node.context[node.target];
        }
        if (null == obj3.onClick) {
          if (cResult[3] !== node.target) {
            class L {
              constructor() {
                tmp = closure_1(closure_2[8]);
                openURL = tmp.openURL;
                obj = closure_1(closure_2[9]);
                return openURL(obj.sanitizeUrl(node.target));
              }
            }
            cResult[3] = node.target;
            cResult[4] = L;
          } else {
            class L {
              constructor() {
                tmp = closure_1(closure_2[8]);
                openURL = tmp.openURL;
                obj = closure_1(closure_2[9]);
                return openURL(obj.sanitizeUrl(node.target));
              }
            }
          }
          obj3.onClick = L;
        }
        if (cResult[5] === node.content) {
          class L {
            constructor() {
              tmp = closure_1(closure_2[8]);
              openURL = tmp.openURL;
              obj = closure_1(closure_2[9]);
              return openURL(obj.sanitizeUrl(node.target));
            }
          }
        }
        cResult[5] = node.content;
        cResult[6] = output;
        cResult[7] = state;
        cResult[8] = output(node.content, state);
        const outputResult = output(node.content, state);
      }
      const obj4 = { color: token, textDecorationLine: str };
      cResult[0] = token;
      cResult[1] = str;
      cResult[2] = obj4;
    }
  : (node) => {
      let output;
      let state;
      node = node.node;
      let token;
      let obj = {};
      ({ output, state } = node);
      const tmp = node;
      const alwaysShowLinkDecorations = react.useContext(
        node(token[5]).AccessibilityPreferencesContext,
      ).alwaysShowLinkDecorations;
      const obj2 = node(token[6]);
      const tmp2 = token;
      token = obj2.useToken(alwaysShowLinkDecorations(token[7]).colors.TEXT_LINK);
      const items = [token, alwaysShowLinkDecorations];
      const memo = react.useMemo(() => {
        let str;
        const obj = { color: token, textDecorationLine: str };
        str = "none";
        if (alwaysShowLinkDecorations) {
          str = "underline";
        }
        return obj;
      }, items);
      if (null != node.context) {
        if (node.context[node.target]) {
          if (node.context[node.target].onClick) {
            obj.onClick = node.context[node.target].onClick;
          }
        }
        obj.onClick = node.context[node.target];
      }
      if (null == obj.onClick) {
        obj.onClick = () => {
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj = _modDef1936;
          return openURL(obj.sanitizeUrl(node.target));
        };
      }
      const LegacyText = tmp(tmp2[10]).LegacyText;
      return (
        <LegacyText accessible accessibilityRole="link" onPress={obj.onClick} style={memo}>
          {output(node.content, state)}
        </LegacyText>
      );
    };
let closure_6 = tmp2;
const result = size.fileFinishedImporting("i18n/native/updateRules.tsx");

export default function updateRules(paragraph) {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  paragraph = {
    react(content, fn, key) {
      const LegacyText = native.LegacyText;
      return <LegacyText key={key.key}>{fn(content.content, key)}</LegacyText>;
    },
    paragraph,
    strong: obj2,
    em: obj3,
    u: obj4,
    link: obj5,
  };
  const merged = Object.assign(paragraph.paragraph);
  obj2 = {
    react(content, fn, key) {
      const LegacyText = native.LegacyText;
      return (
        <LegacyText key={key.key} style={paragraph.strong}>
          {fn(content.content, key)}
        </LegacyText>
      );
    },
  };
  const merged1 = Object.assign(paragraph.strong);
  obj3 = {
    react(content, fn, key) {
      const LegacyText = native.LegacyText;
      return (
        <LegacyText key={key.key} style={paragraph.italic}>
          {fn(content.content, key)}
        </LegacyText>
      );
    },
  };
  const merged2 = Object.assign(paragraph.em);
  obj4 = {
    react(content, fn, key) {
      const LegacyText = native.LegacyText;
      return (
        <LegacyText key={key.key} style={paragraph.underline}>
          {fn(content.content, key)}
        </LegacyText>
      );
    },
  };
  const merged3 = Object.assign(paragraph.u);
  obj5 = {
    react(node, output, state) {
      return <closure_1_6 key={state.key} node={node} output={output} state={state} />;
    },
  };
  const merged4 = Object.assign(paragraph.link);
  return paragraph;
}
export const I18nLink = tmp2;
