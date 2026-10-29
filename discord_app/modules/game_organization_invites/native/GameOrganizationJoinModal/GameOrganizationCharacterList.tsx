// === Module 13006: GameOrganizationCharacterList ===

// Module 13006 (GameOrganizationCharacterList)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import _modDef2404 from "module_2404" /* 2404 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5073 */;
import useToken from "useToken" /* 5289 */;
import Card from "Card" /* 6965 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 13004 */;
import noop from "module_19" /* 19 */;

const Text_Text = Text(5271);
const Stack_Stack = Text(6015);
const CircleErrorIcon = Text(7072);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5005);
let obj = { card: { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 }, selectedCard: null, labels: null, cards: null, title: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 };
obj.selectedCard = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj.labels = { flex: 1 };
let obj4 = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj.cards = { gap: nativeDefault.space.PX_12 };
obj.title = { alignSelf: "center" };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function CharacterSubLabel(text) {
  let Text = require;
  let tmp = dependencyMap;
  const cResult = c.c(5);
  text = text.text;
  if (text.eligible) {
    if (cResult[0] !== text) {
      Text = Text_Text.Text;
      const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: text };
      tmp = hasOwnProperty(Text, obj2);
      cResult[0] = text;
      cResult[1] = tmp;
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const tmp7 = hasOwnProperty(CircleErrorIcon.CircleErrorIcon, obj3);
      cResult[2] = tmp7;
      let tmp4 = tmp7;
    } else {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== text) {
      const obj4 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: null };
      const items = [tmp4, ];
      const obj5 = { variant: "text-sm/medium", color: "text-muted", children: text };
      items[1] = hasOwnProperty(Text_Text.Text, obj5);
      obj4.children = items;
      const tmp12 = timestampProducer(Stack_Stack.Stack, obj4);
      cResult[3] = text;
      cResult[4] = tmp12;
      let tmp8 = tmp12;
    } else {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
}) : (function CharacterSubLabel(text) {
  text = text.text;
  if (text.eligible) {
    const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: text };
    let tmp6 = hasOwnProperty(Text_Text.Text, obj2);
  } else {
    const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: null };
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const items = [hasOwnProperty(CircleErrorIcon.CircleErrorIcon, obj3), ];
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: text };
    items[1] = hasOwnProperty(Text_Text.Text, obj4);
    obj.children = items;
    tmp6 = timestampProducer(Stack_Stack.Stack, obj);
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let closure_9 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function CharacterCard(character) {
  const cResult = c.c(36);
  character = character.character;
  ({ selected, onSelect } = character);
  const noun = character.noun;
  const tmp4 = closure_7();
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const eligible = character.eligible;
  if (cResult[0] === !eligible) {
    if (cResult[1] === selected) {
      let tmp8 = cResult[2];
    }
    const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp8);
    ({ accessibilityRole, accessibilityState } = radioA11yNative);
    if (cResult[3] === character) {
      if (cResult[4] === noun) {
        if (cResult[6] === character.id) {
          if (cResult[7] === onSelect) {
            let tmp14 = cResult[8];
          }
          if (selected) {
            selected = tmp4.selectedCard;
          }
          if (cResult[9] === tmp4.card) {
            if (cResult[10] === selected) {
              let tmp15 = cResult[11];
            }
            if (null != tmp10) {
              const _HermesInternal = HermesInternal;
              let name = "" + character.name + ", " + tmp10;
            } else {
              name = character.name;
            }
            if (cResult[12] !== character.iconUrl) {
              const obj3 = { iconUrl: character.iconUrl, size: 48, borderRadius: nativeDefault.radii.md };
              const tmp21 = hasOwnProperty(GameOrganizationIconDefault, obj3);
              cResult[12] = character.iconUrl;
              cResult[13] = tmp21;
              let tmp18 = tmp21;
              const tmp5Result = GameOrganizationIconDefault;
            } else {
              tmp18 = cResult[13];
            }
            let str3 = "text-default";
            if (!eligible) {
              str3 = "text-muted";
            }
            if (cResult[14] === character.name) {
              if (cResult[15] === token) {
                if (cResult[16] === str3) {
                  let tmp22 = cResult[17];
                }
                if (cResult[18] === character.eligible) {
                  if (cResult[19] === tmp10) {
                    let tmp25 = cResult[20];
                  }
                  if (cResult[21] === tmp4.labels) {
                    if (cResult[22] === tmp25) {
                      if (cResult[23] === tmp22) {
                        let tmp29 = cResult[24];
                      }
                      if (cResult[25] === tmp29) {
                        if (cResult[26] === tmp18) {
                          let tmp32 = cResult[27];
                        }
                        if (cResult[28] === accessibilityRole) {
                          if (cResult[29] === accessibilityState) {
                            if (cResult[30] === tmp7) {
                              if (cResult[31] === tmp32) {
                                if (cResult[32] === tmp14) {
                                  if (cResult[33] === tmp15) {
                                    if (cResult[34] === name) {
                                      let tmp35 = cResult[35];
                                    }
                                    return tmp35;
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj4 = { onPress: tmp14, disabled: tmp7, style: tmp15, accessibilityRole, accessibilityState, accessibilityLabel: name, children: tmp32 };
                        const tmp37 = hasOwnProperty(Card.Card, obj4);
                        cResult[28] = accessibilityRole;
                        cResult[29] = accessibilityState;
                        cResult[30] = tmp7;
                        cResult[31] = tmp32;
                        cResult[32] = tmp14;
                        cResult[33] = tmp15;
                        cResult[34] = name;
                        cResult[35] = tmp37;
                        tmp35 = tmp37;
                      }
                      const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, align: "center", children: null };
                      const items = [tmp18, tmp29];
                      obj5.children = items;
                      const tmp34 = timestampProducer(Stack_Stack.Stack, obj5);
                      cResult[25] = tmp29;
                      cResult[26] = tmp18;
                      cResult[27] = tmp34;
                      tmp32 = tmp34;
                    }
                  }
                  const obj6 = { spacing: nativeDefault.space.PX_4, style: tmp4.labels, children: null };
                  const items1 = [tmp22, tmp25];
                  obj6.children = items1;
                  const tmp31 = timestampProducer(Stack_Stack.Stack, obj6);
                  cResult[21] = tmp4.labels;
                  cResult[22] = tmp25;
                  cResult[23] = tmp22;
                  cResult[24] = tmp31;
                  tmp29 = tmp31;
                }
                let tmp26 = null != tmp10;
                if (tmp26) {
                  const obj7 = { text: tmp10, eligible: character.eligible };
                  tmp26 = hasOwnProperty(closure_8, obj7);
                }
                cResult[18] = character.eligible;
                cResult[19] = tmp10;
                cResult[20] = tmp26;
                tmp25 = tmp26;
              }
            }
            const obj8 = { variant: token, color: str3, children: character.name };
            const tmp24 = hasOwnProperty(Text_Text.Text, obj8);
            cResult[14] = character.name;
            cResult[15] = token;
            cResult[16] = str3;
            cResult[17] = tmp24;
            tmp22 = tmp24;
          }
          const items2 = [tmp4.card, selected];
          cResult[9] = tmp4.card;
          cResult[10] = selected;
          cResult[11] = items2;
          tmp15 = items2;
        }
        const fn = function f() {
          return onSelect(character.id);
        };
        cResult[6] = character.id;
        cResult[7] = onSelect;
        cResult[8] = fn;
        tmp14 = fn;
      }
    }
    const description = character.description;
    if (character.eligible) {
      let formatToPlainStringResult = description;
    } else {
      formatToPlainStringResult = description;
      if (description == null) {
        const intl = util.intl;
        const obj9 = { noun };
        formatToPlainStringResult = intl.formatToPlainString(_modDef2404.VNY3C1, obj9);
      }
    }
    cResult[3] = character;
    cResult[4] = noun;
    cResult[5] = formatToPlainStringResult;
    const tmpResult = useA11yRolesNative;
  }
  const obj10 = { selected, disabled: !eligible };
  cResult[0] = !eligible;
  cResult[1] = selected;
  cResult[2] = obj10;
  tmp8 = obj10;
}) : (function CharacterCard(character) {
  character = character.character;
  ({ selected, onSelect: importDefault } = character);
  const tmp = closure_7();
  const eligible = character.eligible;
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected, disabled: tmp6 });
  const description = character.description;
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (character.eligible) {
    let formatToPlainStringResult = description;
  } else {
    formatToPlainStringResult = description;
    if (description == null) {
      const intl = util.intl;
      const obj3 = { noun: character.noun };
      formatToPlainStringResult = intl.formatToPlainString(_modDef2404.VNY3C1, obj3);
    }
  }
  const obj4 = {
    onPress() {
      return importDefault(character.id);
    },
    disabled: !eligible,
    style: null,
    accessibilityRole: null,
    accessibilityState: null,
    accessibilityLabel: null,
    children: null
  };
  const items = [tmp.card, ];
  if (selected) {
    selected = tmp.selectedCard;
  }
  items[1] = selected;
  obj4.style = items;
  obj4.accessibilityRole = accessibilityRole;
  obj4.accessibilityState = accessibilityState;
  if (null != formatToPlainStringResult) {
    const _HermesInternal = HermesInternal;
    let name = "" + character.name + ", " + formatToPlainStringResult;
  } else {
    name = character.name;
  }
  obj4.accessibilityLabel = name;
  const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, align: "center", children: null };
  const obj6 = { iconUrl: character.iconUrl, size: 48, borderRadius: null };
  obj6.borderRadius = nativeDefault.radii.md;
  const items1 = [hasOwnProperty(GameOrganizationIconDefault, obj6), ];
  const obj7 = { spacing: nativeDefault.space.PX_4, style: tmp.labels, children: null };
  const obj8 = { variant: token, color: null, children: null };
  let str3 = "text-default";
  if (!eligible) {
    str3 = "text-muted";
  }
  obj8.color = str3;
  obj8.children = character.name;
  const items2 = [hasOwnProperty(Text_Text.Text, obj8), ];
  let tmp10Result = null != formatToPlainStringResult;
  if (tmp10Result) {
    const obj9 = { text: formatToPlainStringResult, eligible: character.eligible };
    tmp10Result = hasOwnProperty(closure_8, obj9);
  }
  items2[1] = tmp10Result;
  obj7.children = items2;
  items1[1] = timestampProducer(Stack_Stack.Stack, obj7);
  obj5.children = items1;
  obj4.children = timestampProducer(Stack_Stack.Stack, obj5);
  return hasOwnProperty(Card.Card, obj4);
}));
ReactCompilerGating = fn(558);
let obj5 = { gap: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationCharacterList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationCharacterList(onSelect) {
  const cResult = selectedCharacterId(noun[8]).c(30);
  ({ characters, selectedCharacterId } = onSelect);
  onSelect = onSelect.onSelect;
  noun = onSelect.noun;
  const tmp4 = closure_7();
  if (cResult[0] !== characters) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(eligible, eligible2) {
        return Number(eligible2.eligible) - Number(eligible.eligible);
      };
      cResult[2] = fn;
      let tmp7 = fn;
    } else {
      tmp7 = cResult[2];
    }
    const items = [];
    HermesBuiltin.arraySpread(characters, 0);
    const sorted = items.sort(tmp7);
    cResult[0] = characters;
    cResult[1] = sorted;
  } else if (cResult[3] !== characters) {
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return !onSelect.eligible;
        }
      }
      cResult[5] = C;
    } else {
      class C {
        constructor(arg0) {
          return !onSelect.eligible;
        }
      }
    }
    const someResult = characters.some(C);
    cResult[3] = characters;
    cResult[4] = someResult;
  } else {
    class C {
      constructor(arg0) {
        return !onSelect.eligible;
      }
    }
    if (cResult[6] !== noun) {
      class C {
        constructor(arg0) {
          return !onSelect.eligible;
        }
      }
      const obj3 = { noun };
      const formatToPlainStringResult = obj2.formatToPlainString(onSelect(tmp2[6])["Xm+emB"], obj3);
      cResult[6] = noun;
      cResult[7] = formatToPlainStringResult;
    } else {
      class C {
        constructor(arg0) {
          return !onSelect.eligible;
        }
      }
    }
    if (cResult[8] === tmp4.title) {
      class C {
        constructor(arg0) {
          return !onSelect.eligible;
        }
      }
      if (cResult[11] === noun) {
        class C {
          constructor(arg0) {
            return !onSelect.eligible;
          }
        }
      }
      if (cResult[16] === noun) {
        class C {
          constructor(arg0) {
            return !onSelect.eligible;
          }
        }
      }
      class R {
        constructor(arg0) {
          obj = { character: onSelect, selected: onSelect.id === selectedCharacterId, onSelect, noun };
          return jsx(closure_9, obj, onSelect.id);
        }
      }
      cResult[16] = noun;
      cResult[17] = onSelect;
      cResult[18] = selectedCharacterId;
      cResult[19] = R;
    }
    const obj4 = { style: tmp4.title, title: tmp17 };
    const tmp22 = closure_5(selectedCharacterId(tmp2[16]).TableRowGroupTitle, obj4);
    cResult[8] = tmp4.title;
    cResult[9] = tmp17;
    cResult[10] = tmp22;
  }
  const obj = selectedCharacterId(noun[8]);
}) : (function GameOrganizationCharacterList(characters) {
  characters = characters.characters;
  ({ selectedCharacterId: importDefault, onSelect: dependencyMap, noun } = characters);
  const tmp = closure_7();
  let items = [characters];
  const memo = noun.useMemo(() => {
    const items = [...characters];
    return items.sort((eligible, eligible2) => Number(eligible2.eligible) - Number(eligible.eligible));
  }, items);
  let someResult = characters.some((eligible) => !eligible.eligible);
  const obj = { spacing: nativeDefault.space.PX_12, children: null };
  const obj2 = { style: tmp.title, title: null };
  const intl = characters(1125).intl;
  obj2.title = intl.formatToPlainString(_modDef2404["Xm+emB"], { noun });
  const items1 = [closure_5(characters(7047).TableRowGroupTitle, obj2), closure_5(View, { accessibilityRole: "radiogroup", style: tmp.cards, children: memo.map((character) => hasOwnProperty(closure_9, { character, selected: character.id === importDefault, onSelect, noun }, character.id)) }), ];
  if (someResult) {
    const obj4 = { variant: "text-md/medium", color: "text-subtle", children: null };
    const intl2 = tmp4(1125).intl;
    const obj5 = { noun };
    obj4.children = intl2.formatToPlainString(_modDef2404.ybJIQJ, obj5);
    someResult = closure_5(tmp4(5271).Text, obj4);
  }
  items1[2] = someResult;
  obj.children = items1;
  return closure_6(characters(6015).Stack, obj);
});