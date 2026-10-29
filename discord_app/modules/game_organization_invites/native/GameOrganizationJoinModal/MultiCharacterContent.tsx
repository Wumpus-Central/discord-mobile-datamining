// === Module 13005: MultiCharacterContent ===

// Module 13005 (MultiCharacterContent)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import _modDef2404 from "module_2404" /* 2404 */;
import Text_Text from "Text/Text" /* 5271 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6940 */;
import GameOrganizationCharacterListDefault from "GameOrganizationCharacterList" /* 13006 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let closure_4 = createStyles.createStyles({ statusText: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/MultiCharacterContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MultiCharacterContent(hasError) {
  const cResult = c.c(14);
  ({ characters, selectedCharacterId, onSelect, noun } = hasError);
  const tmp4 = closure_4();
  if (null == characters) {
    if (hasError.hasError) {
      const _Symbol2 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult = intl2.string(_modDef2404.Rx9AlK);
        cResult[1] = stringResult;
        let tmp20 = stringResult;
      } else {
        tmp20 = cResult[1];
      }
      if (cResult[2] !== tmp4.statusText) {
        const obj2 = { variant: "text-md/normal", color: "text-muted", style: tmp4.statusText, children: tmp20 };
        const tmp25 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", style: tmp4.statusText, children: tmp20 });
        cResult[2] = tmp4.statusText;
        cResult[3] = tmp25;
        let tmp23 = tmp25;
      } else {
        tmp23 = cResult[3];
      }
      return tmp23;
    } else {
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
        cResult[0] = tmp18;
        let first = tmp18;
      } else {
        first = cResult[0];
      }
      return first;
    }
  } else if (0 === characters.length) {
    if (cResult[4] !== noun) {
      const intl = util.intl;
      const obj3 = { noun };
      const formatToPlainStringResult = intl.formatToPlainString(_modDef2404.cIerRX, obj3);
      cResult[4] = noun;
      cResult[5] = formatToPlainStringResult;
      let tmp9 = formatToPlainStringResult;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp4.statusText) {
      if (cResult[7] === tmp9) {
        let tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj4 = { variant: "text-md/normal", color: "text-muted", style: tmp4.statusText, children: tmp9 };
    const tmp14 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", style: tmp4.statusText, children: tmp9 });
    cResult[6] = tmp4.statusText;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp12 = tmp14;
  } else {
    if (cResult[9] === characters) {
      if (cResult[10] === noun) {
        if (cResult[11] === onSelect) {
          if (cResult[12] === selectedCharacterId) {
            let tmp5 = cResult[13];
          }
          return tmp5;
        }
      }
    }
    const obj5 = { characters, selectedCharacterId, onSelect, noun };
    const tmp8 = jsx(GameOrganizationCharacterListDefault, { characters, selectedCharacterId, onSelect, noun });
    cResult[9] = characters;
    cResult[10] = noun;
    cResult[11] = onSelect;
    cResult[12] = selectedCharacterId;
    cResult[13] = tmp8;
    tmp5 = tmp8;
  }
}) : (function MultiCharacterContent(arg0) {
  ({ characters, noun } = arg0);
  ({ hasError, selectedCharacterId, onSelect } = arg0);
  let string = closure_4();
  if (null == characters) {
    let intl2 = require;
    let stringResult = dependencyMap;
    if (hasError) {
      const obj2 = { variant: "text-md/normal", color: "text-muted", style: string.statusText, children: null };
      intl2 = intl2(1125).intl;
      string = intl2.string;
      stringResult = string(_modDef2404.Rx9AlK);
      obj2.children = stringResult;
      let tmp9Result = jsx(intl2(5271).Text, { variant: "text-md/normal", color: "text-muted", style: string.statusText, children: null });
    } else {
      tmp9Result = jsx(intl2(6940).ActivityIndicator, {});
    }
  } else {
    if (0 === characters.length) {
      const obj3 = { variant: "text-md/normal", color: "text-muted", style: string.statusText, children: null };
      const intl = util.intl;
      const obj4 = { noun };
      obj3.children = intl.formatToPlainString(_modDef2404.cIerRX, obj4);
      let tmp4 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", style: string.statusText, children: null });
    } else {
      const obj = { characters, selectedCharacterId, onSelect, noun };
      tmp4 = jsx(GameOrganizationCharacterListDefault, { characters, selectedCharacterId, onSelect, noun });
    }
    return tmp4;
  }
});